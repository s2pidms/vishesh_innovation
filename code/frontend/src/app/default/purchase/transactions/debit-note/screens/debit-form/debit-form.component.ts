import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DetailsOfSupplierListComponent, POOtherChargesComponent} from "@modals/index";
import {DebitNoteService} from "@services/purchase";
import {DEBIT_NOTE_FORM_ERRORS} from "@mocks/validations/purchase/debitnote.validation";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {IDebitNoteDetailsArray, IDebitNoteMasterData} from "@mocks/models/purchase/transactions";

@Component({
    selector: "app-debit-form",
    templateUrl: "./debit-form.component.html",
    styleUrls: ["./debit-form.component.scss"]
})
export class DebitFormComponent implements OnInit {
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
    action: string = "create";
    earnings: any = [];
    supplierOptions: any = [];
    purchaseCategories: any = [];
    locations: any = [];
    items: any = [];
    // IDebitNoteDetailsArray[]
    filterItems: any = [];
    selectedSupplierDetails = {};
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

    masterData: IDebitNoteMasterData = {
        autoIncrementNo: "",
        suppliersOptions: [],
        purchaseTypesOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        purchaseCategory: new UntypedFormControl(null, [Validators.required]),
        supplier: new UntypedFormControl(null, [Validators.required]),
        DNNumber: new UntypedFormControl("", [Validators.required]),
        DNDate: new UntypedFormControl("", [Validators.required]),
        invoiceNo: new UntypedFormControl(""),
        invoiceDate: new UntypedFormControl(""),
        currency: new UntypedFormControl(""),
        DNDetails: new UntypedFormControl([]),
        reasonForDN: new UntypedFormControl(""),
        remarks: new UntypedFormControl(""),
        netDNValue: new UntypedFormControl(0),
        DNStatus: new UntypedFormControl("Awaiting Approval"),

        totalLineValue: new UntypedFormControl(0)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private debitNoteService: DebitNoteService,
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
        this.debitNoteService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.debitNoteService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.supplierOptions = [];
        this.filterItems = [];
        this.collection = this.filterItems.length;
        this.getInitialData();
    }

    preview() {
        this.search = "";
        this.filterItems = this.filterItems.filter((x: any) => x.returnQty > 0);
        if (this.filterItems.length > 0) {
            this.isPreview = true;
        } else {
            this.isPreview = false;
        }
        this.collection = this.filterItems.length;
    }
    getInitialData() {
        this.spinner.show();
        this.debitNoteService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["DNNumber"].setValue(this.masterData.autoIncrementNo);
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
                            return this.debitNoteService.getById(params["id"]);
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
                    if (success.supplier._id && success.supplier) {
                        success.supplier = success?.supplier?._id;
                    }
                    if (success.invoiceDate) {
                        success.invoiceDate = this.utilityService.getFormatDate(success.invoiceDate, "YYYY-MM-DD");
                    }
                    this.supplierOptions = this.masterData?.suppliersOptions.filter(
                        (x: any) => x.supplierPurchaseType == success.purchaseCategory
                    );
                    this.filterItems = success.DNDetails.map((ele: any, idx: any) => {
                        return {
                            DNLineNumber: ele.DNLineNumber,
                            item: ele?.item?._id,
                            itemCode: ele?.item?.itemCode,
                            itemName: ele.item?.itemName,
                            itemDescription: ele.item?.itemDescription,
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
                    }).sort((a: any, b: any) => a.itemCode.localeCompare(b.itemCode));
                    this.totalsCalFn();
                    this.collection = this.filterItems.length;
                    success.DNStatus = this.statusArr[this.action];
                    this.otherCharges = success.otherCharges;
                    this.form.patchValue(success);
                    this.f["purchaseCategory"].disable();
                    this.f["supplier"].disable();
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
        this.f["supplier"].setValue(null);
        this.selectedSupplierDetails = {};
        this.supplierOptions = this.masterData?.suppliersOptions.filter(
            (x: any) => x.supplierPurchaseType == this.f["purchaseCategory"].value
        );
        this.filterItems = [];
    }

    supplierValueChange(ev: any) {
        this.spinner.show();
        this.form.controls["currency"].setValue(ev.supplierCurrency);
        this.debitNoteService.getAllDebitNoteBySupplierId(ev.value).subscribe(success => {
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

    openSupplierDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfSupplierListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedSupplierDetails = this.selectedSupplierDetails;
        modalRef.componentInstance.supplierOptions = this.supplierOptions;
        modalRef.componentInstance.supplier = this.form.controls["supplier"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                    this.supplierValueChange(this.selectedSupplierDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
