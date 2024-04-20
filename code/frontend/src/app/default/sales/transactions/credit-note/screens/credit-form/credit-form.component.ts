import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DetailsOfCustomersListComponent, POOtherChargesComponent} from "@modals/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreditNoteService} from "@services/sales";
import {CREDIT_NOTE_FORM_ERRORS} from "@mocks/validations/sales";

import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {ICreditNoteMasterData} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-credit-form",
    templateUrl: "./credit-form.component.html",
    styleUrls: ["./credit-form.component.scss"]
})
export class CreditFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    isESCPreview = false;
    action: string = "create";
    earnings: any = [];
    customersFilterOptions: any = [];
    locations: any = [];
    items: any = [];
    filterItems: any = [];
    ESCPreviewArr: any = [];
    selectedCustomerDetails = {};
    creditNoteName: string = "Credit Note Entry";
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

    masterData: ICreditNoteMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: [],
        customersOptions: []
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        salesCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        CNNumber: new UntypedFormControl("", [Validators.required]),
        CNDate: new UntypedFormControl("", [Validators.required]),
        invoiceNo: new UntypedFormControl(""),
        invoiceDate: new UntypedFormControl(""),
        currency: new UntypedFormControl(""),
        CNDetails: new UntypedFormControl([]),
        reasonForCN: new UntypedFormControl(""),
        remarks: new UntypedFormControl(""),
        netCNValue: new UntypedFormControl(0),
        CNStatus: new UntypedFormControl("Awaiting Approval"),
        totalLineValue: new UntypedFormControl(0)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private creditNoteService: CreditNoteService,
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

        if (this.validationService.checkErrors(this.form, CREDIT_NOTE_FORM_ERRORS)) {
            return;
        }

        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Remark is Required");
            return;
        }
        let formData: any = this.form.value;
        formData.otherCharges = this.otherCharges;
        formData.CNDetails = this.filterItems.filter((x: any) => x.returnQty > 0);
        if (formData.CNDetails.length == 0) {
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
        this.creditNoteService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.creditNoteService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.customersFilterOptions = [];
        this.filterItems = [];
        this.collection = this.filterItems.length;
        this.getInitialData();
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.filterItems = this.ESCPreviewArr;
        this.collection = this.filterItems.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.filterItems;
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
        this.creditNoteService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["CNNumber"].setValue(this.masterData.autoIncrementNo);
            this.f["CNDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["invoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["CNStatus"].setValue("Awaiting Approval");
            this.form.controls["CNStatus"].setValue(this.statusArr[this.action]);
            this.form.controls["currency"].setValue("INR");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.creditNoteService.getById(params["id"]);
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
                    if (success.CNDate) {
                        success.CNDate = this.utilityService.getFormatDate(success.CNDate, "YYYY-MM-DD");
                    }
                    if (success.customer._id && success.customer) {
                        success.customer = success?.customer?._id;
                    }
                    if (success.invoiceDate) {
                        success.invoiceDate = this.utilityService.getFormatDate(success.invoiceDate, "YYYY-MM-DD");
                    }

                    this.customersFilterOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.customerCategory == success.salesCategory
                    );
                    this.filterItems = success.CNDetails.map((ele: any, idx: any) => {
                        return {
                            CNLineNumber: ele.CNLineNumber,
                            SKU: ele?.SKU?._id,
                            SKUCode: ele?.SKU?.SKUNo,
                            SKUName: ele.SKU?.SKUName,
                            SKUDescription: ele.SKU?.SKUDescription,
                            hsn: ele?.hsn,
                            UOM: ele.UOM ? ele.UOM : ele.primaryUnit,
                            returnQty: ele.returnQty,
                            lineValue: ele.lineValue,
                            primaryUnit: ele.primaryUnit,
                            balancedQty: ele.balancedQty,
                            standardRate: ele.standardRate,
                            gst: ele.gst,
                            igst: ele.igst,
                            cgst: ele.cgst,
                            sgst: ele.sgst,
                            ugst: ele.ugst
                        };
                    }).sort((a: any, b: any) => a.SKUCode.localeCompare(b.SKUCode));
                    this.totalsCalFn();
                    this.collection = this.filterItems.length;
                    success.CNStatus = this.statusArr[this.action];
                    this.otherCharges = success.otherCharges;
                    this.form.patchValue(success);
                    this.f["salesCategory"].disable();
                    this.f["customer"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                        if (["reject"].includes(this.action)) {
                            this.f["remarks"].enable();
                        }
                        this.f["CNStatus"].enable();
                    }
                });
        });
    }

    getCustomers() {
        this.selectedCustomerDetails = {};
        this.filterItems = [];
        this.f["customer"].setValue(null);
        this.form.controls["currency"].setValue("INR");
        this.customersFilterOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
    }

    customerValueChange(ev: any) {
        this.spinner.show();
        this.form.controls["currency"].setValue(ev.customerCurrency);
        this.creditNoteService.getAllCreditNoteByCustomerId(ev.value).subscribe(success => {
            this.spinner.hide();
            this.filterItems = success.map((x: any, index: number) => {
                x.CNLineNumber = index + 1;
                return x;
            });
            this.collection = this.filterItems.length;
            this.totalsCalFn();
        });
    }

    lineValueRate(CNLineNumber: number, element: any) {
        let index = this.filterItems.map((x: any) => x.CNLineNumber).indexOf(CNLineNumber);
        this.filterItems[index].lineValue = (+element.returnQty * +element.standardRate).toFixed(2);
        this.totalsCalFn();
    }

    standardValueRate(CNLineNumber: number, element: any) {
        let index = this.filterItems.map((x: any) => x.CNLineNumber).indexOf(CNLineNumber);
        this.filterItems[index].lineValue = (+element.returnQty * +element.standardRate).toFixed(2);
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
                    this.f["netCNValue"].setValue(
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
        this.f["netCNValue"].setValue((+this.f["totalLineValue"].value + +this.otherCharges.totalAmount).toFixed(2));
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
        modalRef.componentInstance.customerOptions = this.customersFilterOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.customerValueChange(this.selectedCustomerDetails);
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
