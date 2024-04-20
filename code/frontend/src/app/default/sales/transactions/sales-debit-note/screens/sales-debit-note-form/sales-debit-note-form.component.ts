import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DetailsOfCustomersListComponent, POOtherChargesComponent} from "@modals/index";
import {DEBIT_NOTE_FORM_ERRORS} from "@mocks/validations/purchase/debitnote.validation";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {SaleDebitNoteService} from "@services/sales";
import {SalesDebitNoteDetailsArray, SalesDebitNoteMasterData} from "@mocks/models/sales/transactions";
import {Location} from "@angular/common";

@Component({
    selector: "app-sales-debit-note-form",
    templateUrl: "./sales-debit-note-form.component.html",
    styleUrls: ["./sales-debit-note-form.component.scss"]
})
export class SalesDebitNoteFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    submitted = false;
    isPreview = false;
    selectedCustomerDetails = {};
    action: string = "create";
    customerOptions: any = [];
    // SalesDebitNoteDetailsArray[]
    filterItems: any = [];
    debitNoteName: string = "Debit Note Entry";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    otherCharges = {
        action: "create",
        packagingAndForwarding: 0,
        freight: 0,
        insurance: 0,
        loadingAndUnloading: 0,
        miscellaneous: 0,
        totalAmount: 0
    };
    ESCPreviewArr: any = [];
    isESCPreview = false;

    masterData: SalesDebitNoteMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: [],
        customersOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        salesCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(null),
        DNNumber: new UntypedFormControl(null, [Validators.required]),
        DNDate: new UntypedFormControl(null, [Validators.required]),
        invoiceNo: new UntypedFormControl(null),
        invoiceDate: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        DNDetails: new UntypedFormControl([]),
        reasonForDN: new UntypedFormControl(null),
        remarks: new UntypedFormControl(null),
        netDNValue: new UntypedFormControl(0),
        DNStatus: new UntypedFormControl("Awaiting Approval"),

        totalLineValue: new UntypedFormControl(0)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private saleDebitNoteService: SaleDebitNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo() {
        this.location.back();
    }

    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();

        if (this.validationService.checkErrors(this.form, DEBIT_NOTE_FORM_ERRORS)) {
            return;
        }

        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Remark is Required");
            return;
        }
        let formData: any = this.form.value;
        formData.otherCharges = this.otherCharges;
        formData.DNDetails = this.filterItems.filter((x: any) => x.returnQty > 0);
        if (formData.DNDetails.length == 0) {
            this.toastService.warning("Return Qty can not be zero");
            return;
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.saleDebitNoteService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.saleDebitNoteService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.customerOptions = [];
        this.filterItems = [];
        this.collection = this.filterItems.length;
        this.getInitialData();
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.filterItems;
        this.filterItems = this.filterItems.filter((x: any) => x.returnQty > 0);
        if (this.filterItems.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.filterItems.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.filterItems = this.ESCPreviewArr;
        this.collection = this.filterItems.length;
    }
    getInitialData() {
        this.spinner.show();
        this.saleDebitNoteService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["DNNumber"].setValue(this.masterData?.autoIncrementNo);
            this.f["DNDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["invoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["DNStatus"].setValue("Awaiting Approval");
            this.form.controls["DNStatus"].setValue(this.statusArr[this.action]);
            this.form.controls["currency"].setValue("INR");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.saleDebitNoteService.getById(params["id"]);
                        } else {
                            return of({});
                        }
                    })
                )
                .subscribe((success: any) => {
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        return;
                    }
                    if (success.DNDate) {
                        success.DNDate = this.utilityService.getFormatDate(success.DNDate, "YYYY-MM-DD");
                    }
                    if (success.customer._id && success.customer) {
                        success.customer = success?.customer?._id;
                    }
                    if (success.invoiceDate) {
                        success.invoiceDate = this.utilityService.getFormatDate(success.invoiceDate, "YYYY-MM-DD");
                    }
                    this.customerOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.customerCategory == success.salesCategory
                    );
                    this.filterItems = success.DNDetails.map((ele: any, idx: any) => {
                        return {
                            DNLineNumber: ele.DNLineNumber,
                            SKU: ele?.SKU?._id,
                            SKUNo: ele?.SKU?.SKUNo,
                            SKUName: ele?.SKU?.SKUName,
                            SKUDescription: ele?.SKU?.SKUDescription,
                            hsn: ele?.hsn,
                            UOM: ele.UOM ? ele.UOM : ele.primaryUnit,
                            returnQty: ele.returnQty,
                            purchaseRate: ele.purchaseRate,
                            lineValue: ele.lineValue,
                            primaryUnit: ele.primaryUnit,
                            balancedQty: ele.balancedQty,
                            standardRate: ele.standardRate,
                            deliveryDate: this.utilityService.getFormatDate(ele.deliveryDate, "YYYY-MM-DD"),
                            gst: ele.gst,
                            igst: ele.igst,
                            cgst: ele.cgst,
                            sgst: ele.sgst,
                            ugst: ele.ugst
                        };
                    }).sort((a: any, b: any) => a.SKUNo.localeCompare(b.SKUNo));
                    this.totalsCalFn();
                    this.collection = this.filterItems.length;
                    success.DNStatus = this.statusArr[this.action];
                    this.otherCharges = success.otherCharges;
                    this.form.patchValue(success);
                    this.f["salesCategory"].disable();
                    this.f["customer"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                        if (["reject"].includes(this.action)) {
                            this.f["remarks"].enable();
                        }
                        this.f["DNStatus"].enable();
                    }
                });
        });
    }

    getSuppliers() {
        this.selectedCustomerDetails = {};
        this.f["customer"].setValue(null);
        this.form.controls["currency"].setValue("INR");
        this.customerOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
        this.filterItems = [];
    }

    supplierValueChange(ev: any) {
        this.form.controls["currency"].setValue(ev?.customerCurrency);
        this.form.controls["customerName"].setValue(ev?.label);

        this.spinner.show();
        this.saleDebitNoteService.getAllSalesDebitNoteByCustomerId(ev.value).subscribe(success => {
            this.spinner.hide();
            this.filterItems = success.map((x: any, index: number) => {
                x.DNLineNumber = index + 1;
                return x;
            });
            this.collection = this.filterItems.length;
            this.totalsCalFn();
        });
    }

    lineValueRate(DNLineNumber: number, element: any) {
        let index = this.filterItems.map((x: any) => x.DNLineNumber).indexOf(DNLineNumber);
        this.filterItems[index].lineValue = (+element.returnQty * +element.purchaseRate).toFixed(2);
        this.totalsCalFn();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openOtherChargesModal() {
        const modalRef = this.modalService.open(POOtherChargesComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        this.otherCharges.action = this.action;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.otherCharges = success;
                    this.f["netDNValue"].setValue(
                        (+this.f["totalLineValue"].value + +this.otherCharges.totalAmount).toFixed(2)
                    );
                }
            },
            (reason: any) => {}
        );
    }

    totalsCalFn() {
        this.f["totalLineValue"].setValue(
            this.filterItems
                .map((x: any) => +x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
        this.f["netDNValue"].setValue((+this.f["totalLineValue"].value + +this.otherCharges.totalAmount).toFixed(2));
    }
    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfCustomersListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedCustomerDetails = this.selectedCustomerDetails;
        modalRef.componentInstance.customerOptions = this.customerOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.supplierValueChange(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.filterItems = this.filterItems;
        } else {
            this.filterItems = [...this.filterItems].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
