import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {UtilityService, StorageService, SpinnerService} from "@core/services";
import {SO_ORDER_TYPE} from "@mocks/constant";
import {QuotationDetailsArray, IQuotationOfSKUMasterData} from "@mocks/models/sales/transactions";
import {QuotationOfSKUService} from "@services/sales/quotationOfSKU.service";
import {QUOTATION_OF_SKU_FORM_ERRORS} from "@mocks/validations/sales";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailsOfCustomersListComponent} from "@shared/modals";
import {QuotationTermsAndCondComponent} from "../quotation-terms-and-cond/quotation-terms-and-cond.component";

@Component({
    selector: "app-quotation-of-sku-form",
    templateUrl: "./quotation-of-sku-form.component.html"
})
export class QuotationOfSkuFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    // QuotationDetailsArray[]
    quotationDetailsArray: any = [];
    customerOptions: any = [];
    displayName: any = {};
    submitted = false;
    isPreview = false;
    isConditionPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        revision: "Awaiting Approval"
    };
    SOTypeObj: any = SO_ORDER_TYPE;
    SOTypeArr: any = SO_ORDER_TYPE.getAllSOType();
    ESCPreviewArr: any = [];
    isESCPreview = false;
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    masterData: IQuotationOfSKUMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: [],
        domesticTermsAndCond: [],
        exportsTermsAndCond: []
    };
    domesticAndExportsTermsList: any = [];
    selectedCustomerDetails = {};
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        quotationNo: new UntypedFormControl(null, [Validators.required]),
        revNo: new UntypedFormControl(0),
        currency: new UntypedFormControl(null),
        customer: new UntypedFormControl(null),
        quotationDate: new UntypedFormControl(null),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(null, [Validators.required]),
        RFQReference: new UntypedFormControl(null),
        exchangeRate: new UntypedFormControl(0),
        quotationDetails: new UntypedFormControl([]),
        termsAndCond: new UntypedFormControl([]),
        status: new UntypedFormControl("Awaiting Approval")
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private quotationOfSKUService: QuotationOfSKUService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private location: Location,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.displayName = this.storageService.get("menuTitle")?.title;
        this.getInitialData();
    }

    get f() {
        return this.form.controls;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                this.flag = -1;
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
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, QUOTATION_OF_SKU_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.quotationDetails = this.quotationDetailsArray;
        formData.termsAndCond = this.domesticAndExportsTermsList;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.quotationOfSKUService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.quotationOfSKUService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.quotationDetailsArray = [];
        this.customerOptions = [];
        this.collection = this.quotationDetailsArray.length;
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.quotationOfSKUService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["quotationNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["revNo"].setValue(0);
            this.f["quotationDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.quotationOfSKUService.getById(params["id"]);
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

                    // this.quotationDetailsArray = success?.quotationDetails;
                    // this.collection = this.quotationDetailsArray.length;

                    this.quotationOfSKUService
                        .getAllCustomersForQuotationSKUByCategory({category: success?.customerCategory})
                        .subscribe((success: any) => {
                            this.customerOptions = success;
                        });

                    if (success.quotationDetails) {
                        this.quotationOfSKUService
                            .getAllSKUForQuotationSKUByCustomerId({customerId: success?.customer})
                            .subscribe(SKUResult => {
                                this.quotationDetailsArray = success.quotationDetails;
                                success.quotationDetails = success.quotationDetails;
                                let SKUDetails = SKUResult;
                                for (const ele of success.quotationDetails) {
                                    SKUDetails = SKUDetails.filter((x: any) => x.SKUNo != ele.SKUNo);
                                    this.ESCPreviewArr = [...success.quotationDetails, ...SKUDetails];
                                }

                                this.collection = this.quotationDetailsArray.length;
                            });
                    }
                    // if (success.quotationDetails) {
                    //     this.getAllSKUList(success?.customer);
                    //     success.quotationDetails = success.quotationDetails;

                    //     let SKUDetails = this.quotationDetailsArray;
                    //     this.quotationDetailsArray = success.quotationDetails;
                    //     for (const ele of success.quotationDetails) {
                    //         SKUDetails = SKUDetails.filter((x: any) => x.itemCode != ele.itemCode);
                    //         this.ESCPreviewArr = [...success.quotationDetails, ...SKUDetails];
                    //     }

                    //     this.collection = this.quotationDetailsArray.length;
                    // }

                    if (success.quotationDate) {
                        success.quotationDate = this.utilityService.getFormatDate(success?.quotationDate, "YYYY-MM-DD");
                    }
                    if (success.termsAndCond) {
                        this.domesticAndExportsTermsList = success.termsAndCond;
                    }

                    if (this.action == "revision") {
                        success.revNo = success.revNo + 1;
                    }

                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);

                    if (this.action != "create") {
                        this.isESCPreview = true;
                        this.isConditionPreview = true;
                        this.isPreview = true;
                        this.form.disable();
                    }
                    if (this.action == "edit") {
                        this.form.controls["exchangeRate"].enable();
                    }
                });
        });
    }
    customerValueChange(ele: any) {
        this.f["customerName"].setValue(ele?.customerName);
        this.f["currency"].setValue(ele?.currency);
        this.getAllSKUList(ele?._id);
    }

    getAllSKUList(customerId: string) {
        this.spinner.show();
        this.quotationOfSKUService
            .getAllSKUForQuotationSKUByCustomerId({customerId: customerId})
            .subscribe((success: any) => {
                this.quotationDetailsArray = success;
                this.collection = this.quotationDetailsArray.length;
                this.spinner.hide();
            });
    }

    getCustomers(event: any) {
        this.selectedCustomerDetails = {};
        this.f["customerName"].setValue(null);
        this.f["customer"].setValue(null);
        this.customerOptions = [];
        this.quotationDetailsArray = [];
        this.domesticAndExportsTermsList = [];
        if (["Exports – OEM", "Exports – Dealer"].includes(this.form.controls["customerCategory"].value)) {
            this.domesticAndExportsTermsList = this.masterData?.exportsTermsAndCond;
        } else {
            this.domesticAndExportsTermsList = this.masterData?.domesticTermsAndCond;
        }
        this.spinner.show();
        this.quotationOfSKUService
            .getAllCustomersForQuotationSKUByCategory({category: event.target.value})
            .subscribe((success: any) => {
                this.spinner.hide();
                this.customerOptions = success;
            });
    }
    ESCPreview() {
        this.search = "";
        this.isConditionPreview = false;
        this.isPreview = false;
        this.quotationDetailsArray = this.ESCPreviewArr;
        this.collection = this.quotationDetailsArray.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.quotationDetailsArray;
        this.quotationDetailsArray = this.quotationDetailsArray
            .filter((x: any) => x.srNo > 0)
            .sort((a: any, b: any) => a.srNo - b.srNo);
        if (this.quotationDetailsArray.length) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.quotationDetailsArray.length;
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
    openTermsAndCondModal() {
        const modalRef = this.modalService.open(QuotationTermsAndCondComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.domesticAndExportsTermsList = this.domesticAndExportsTermsList;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.domesticAndExportsTermsList = success;
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
            this.quotationDetailsArray = this.quotationDetailsArray;
        } else {
            this.quotationDetailsArray = [...this.quotationDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
