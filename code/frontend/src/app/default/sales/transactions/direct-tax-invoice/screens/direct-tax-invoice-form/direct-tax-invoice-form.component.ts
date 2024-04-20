import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {POOtherChargesComponent} from "@modals/po-other-charges/po-other-charges.component";
import {DTIDetails} from "@interfaces/DTIDetails";
import {DirectTaxInvoiceService} from "@services/sales";
import {DIRECT_TAX_INVOICE_FORM_ERRORS} from "@mocks/validations/sales";
import {SpinnerService, UtilityService} from "@core/services";
import {IDirectTaxInvoiceMasterData} from "@mocks/models/sales/transactions";
import {DetailsOfCustomersListComponent} from "@shared/modals";
import {Location} from "@angular/common";

@Component({
    selector: "app-direct-tax-invoice-form",
    templateUrl: "./direct-tax-invoice-form.component.html"
})
export class DirectTaxInvoiceFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    DTIDetailsArray: DTIDetails[] = [];
    customerOptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    action: string = "create";
    dispatchName: string = "Select SKU to create Invoice";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approval: "Approved",
        rejection: "Rejected"
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
    selectedCustomerDetails = {};
    masterData: IDirectTaxInvoiceMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: [],
        customersOptions: []
    };

    constructor(
        private directTaxInvoiceService: DirectTaxInvoiceService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        DTINumber: new UntypedFormControl(null),
        salesInvoiceDate: new UntypedFormControl(""),
        salesCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        DTIValue: new UntypedFormControl(null),
        DTITotalAmount: new UntypedFormControl(null),
        SPV: new UntypedFormControl(null),
        DTIDetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(null),
        DTIStatus: new UntypedFormControl("Awaiting Approval", [Validators.required])
    });
    get f() {
        return this.form.controls;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, DIRECT_TAX_INVOICE_FORM_ERRORS)) {
            return;
        }
        if (this.action == "rejection" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Reject Remark is Required");
            return;
        }

        if (this.DTIDetailsArray.length == 0) {
            this.toastService.warning("Atleast one row is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.otherCharges = this.otherCharges;
        formData.DTIDetails = this.DTIDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    update(formData: any) {
        this.spinner.show();
        this.directTaxInvoiceService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.directTaxInvoiceService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    preview() {
        this.search = "";
        this.DTIDetailsArray = this.DTIDetailsArray.filter((x: any) => x.dispatchQty > 0);
        if (this.DTIDetailsArray.length) {
            this.isPreview = true;
        }
        this.collection = this.DTIDetailsArray.length;
    }

    reset() {
        this.form.reset();
        this.customerOptions = [];
        this.DTIDetailsArray = [];
        this.collection = this.DTIDetailsArray.length;
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.directTaxInvoiceService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["DTINumber"].setValue(this.masterData?.autoIncrementNo);
            this.f["salesInvoiceDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["DTIStatus"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.directTaxInvoiceService.getById(params["id"]);
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
                    this.otherCharges = success.otherCharges;
                    this.DTIDetailsArray = success.DTIDetails;
                    if (success.salesInvoiceDate) {
                        success.salesInvoiceDate = this.utilityService.getFormatDate(
                            success.salesInvoiceDate,
                            "YYYY-MM-DD"
                        );
                    }
                    success.customer = success.customer._id;
                    this.customerOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.customerCategory == success.salesCategory
                    );
                    this.collection = this.DTIDetailsArray.length;
                    success.DTIStatus = this.statusArr[this.action];
                    this.form.patchValue(success);

                    if (this.action == "edit" || this.action == "view" || this.action == "approval") {
                        this.form.disable();
                    }

                    if (this.action == "rejection") {
                        this.form.disable();
                        this.form.controls["remarks"].enable();
                    }
                });
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.DTIDetailsArray = this.DTIDetailsArray;
        } else {
            this.DTIDetailsArray = [...this.DTIDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    customerValueChange(ele: any) {
        this.spinner.show();
        this.directTaxInvoiceService.getDTIDetailsByCustomerId(ele._id).subscribe((success: any) => {
            this.DTIDetailsArray = success;
            this.collection = this.DTIDetailsArray.length;
            this.spinner.hide();
        });
    }
    getCustomers() {
        this.selectedCustomerDetails = {};
        this.f["customer"].setValue(null);
        this.customerOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["salesCategory"].value
        );
    }
    checkDispatchQty(ele: any) {
        let index = this.DTIDetailsArray.map((x: any) => x.DTILineNumber).indexOf(ele.DTILineNumber);

        if (ele.dispatchQty > ele.SOBalancedQty) {
            this.toastService.error("Dispatch Qty should not be greater then SO Balanced Qty");
            this.DTIDetailsArray[index].dispatchQty = 0;
            return;
        }
        this.DTIDetailsArray[index].netRate = +ele.purchaseRate - +ele.purchaseRate * (+ele.discount / 100);
        this.DTIDetailsArray[index].lineValue = +ele.dispatchQty * +ele.netRate;
        this.DTIDetailsArray[index].SPVLine = ele.dispatchQty * ele.standardRate - ele.dispatchQty * ele.netRate;
        this.f["DTITotalAmount"].setValue(
            this.DTIDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
        this.f["DTIValue"].patchValue((+this.f["DTITotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2));
        this.f["SPV"].setValue(
            this.DTIDetailsArray.map((x: any) => x.SPVLine)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }
    setNetRate(DTILineNumber: number, ele: any) {
        let index = this.DTIDetailsArray.map((x: any) => x.DTILineNumber).indexOf(DTILineNumber);
        this.DTIDetailsArray[index].netRate = ele.purchaseRate - ele.purchaseRate * (ele.discount / 100);
        this.DTIDetailsArray[index].lineValue = ele.dispatchQty * ele.netRate;
        this.DTIDetailsArray[index].SPVLine = ele.dispatchQty * ele.standardRate - ele.dispatchQty * ele.netRate;
        this.f["DTITotalAmount"].setValue(
            this.DTIDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
        this.f["DTIValue"].setValue((+this.f["DTITotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2));
        this.f["SPV"].setValue(
            this.DTIDetailsArray.map((x: any) => x.SPVLine)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
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
                    this.f["DTIValue"].patchValue(
                        (+this.f["DTITotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2)
                    );
                }
            },
            (reason: any) => {}
        );
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
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.customerValueChange(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
