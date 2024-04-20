import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilityService, MenuTitleService, StorageService, SpinnerService} from "@core/services";
import {QUOTATION_OF_DSKU_FORM_ERRORS} from "@mocks/validations/sales/quotationOfDSKU.validation";
import {Location} from "@angular/common";
import {QuotationOfDSKUService} from "@services/sales/quotationOfDSKU.service";
import {QuotationOfDSKUDetailsArray, IQuotationOfDSKUMasterData} from "@mocks/models/sales/transactions";
import {DetailsOfCustomersListComponent} from "@shared/modals";

@Component({
    selector: "app-quotation-of-dsku-form",
    templateUrl: "./quotation-of-dsku-form.component.html"
})
export class QuotationOfDskuFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    // QuotationOfDSKUDetailsArray[]
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
    ESCPreviewArr: any = [];
    isESCPreview = false;
    selectedCustomerDetails = {};
    masterData: IQuotationOfDSKUMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: []
    };

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        quotationNo: new UntypedFormControl(null),
        revNo: new UntypedFormControl(0),
        quotationDate: new UntypedFormControl(null, [Validators.required]),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        exchangeRate: new UntypedFormControl(0),
        customerName: new UntypedFormControl(null),
        reference: new UntypedFormControl(""),
        referenceModel: new UntypedFormControl("", [Validators.required]),
        RFQReference: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        quotationDetails: new UntypedFormControl([]),
        status: new UntypedFormControl("Awaiting Approval")
    });

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private quotationOfDSKUService: QuotationOfDSKUService,
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
        if (this.validationService.checkErrors(this.form, QUOTATION_OF_DSKU_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.quotationDetails = this.quotationDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.quotationOfDSKUService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.quotationOfDSKUService.create(formData).subscribe(success => {
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
        this.quotationOfDSKUService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["quotationNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["revNo"].setValue(0);
            this.f["quotationDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.quotationOfDSKUService.getById(params["id"]);
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

                    this.quotationOfDSKUService
                        .getAllProspectsForQuotationDSKUByCategory({category: success.customerCategory})
                        .subscribe((success: any) => {
                            this.customerOptions = success;
                        });

                    if (success.quotationDetails) {
                        this.quotationOfDSKUService
                            .getAllDSKUForQuotationDSKUByCustomerId({customerId: success.reference})
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
                    if (success.quotationDate) {
                        success.quotationDate = this.utilityService.getFormatDate(success?.quotationDate, "YYYY-MM-DD");
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
        console.log("ele", ele);

        this.form.controls["referenceModel"].setValue(ele?.referenceModel);
        this.f["currency"].setValue(ele?.currency);
        this.f["customerName"].setValue(ele?.customerName);
        this.quotationOfDSKUService
            .getAllDSKUForQuotationDSKUByCustomerId({customerId: ele.reference})
            .subscribe((success: any) => {
                this.quotationDetailsArray = success;
                this.collection = this.quotationDetailsArray.length;
            });
    }
    getCustomers(ev: any) {
        this.selectedCustomerDetails = {};
        this.f["reference"].setValue(null);
        this.f["referenceModel"].setValue(null);
        this.f["currency"].setValue(null);
        this.f["customerName"].setValue(null);
        this.customerOptions = [];
        this.quotationDetailsArray = [];
        this.spinner.show();
        this.quotationOfDSKUService
            .getAllProspectsForQuotationDSKUByCategory({category: ev.target.value})
            .subscribe((success: any) => {
                this.customerOptions = success;
                this.spinner.hide();
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
        this.quotationDetailsArray = this.quotationDetailsArray.filter((x: any) => x.srNo > 0);
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
        modalRef.componentInstance.customer = this.form.controls["reference"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["reference"].setValue(success?.selectedCustomerDetails?._id);
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
