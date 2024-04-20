import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {AppGlobalService, ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {UtilityService, SpinnerService} from "@core/services";
import {JobCardCreationService} from "@services/planning";
import {IDSKUDetailsOfJC, IJobCardMasterData, ISKUDetailsOfJC} from "@mocks/models/planning/transactions";
import {BatchInfoModalComponent, JobCardMRPModalComponent} from "../components";
import {JOB_CARD_FORM_ERRORS} from "@mocks/validations/planning";
import {CancelPoComponent} from "@shared/modals";

@Component({
    selector: "app-job-card-form",
    templateUrl: "./job-card-form.component.html"
})
export class JobCardFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    // FCDetailsArray[]
    SKUDetailsOfJC: ISKUDetailsOfJC[] = [];
    // DSKUDetailsOfJC: IDSKUDetailsOfJC[] = [];
    customers: any = [];
    customerOptions: any = [];
    submitted = false;
    isPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        cancel: "Cancelled"
    };
    ESCPreviewArr: any = [];
    isESCPreview = false;
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    itemDetailsList: any = [];
    masterData: IJobCardMasterData = {
        autoIncrementNo: "",
        companyType: "",
        orderTypes: [],
        stages: [],
        salesCategory: [],
        NPDInputs: []
    };
    totalBatchQuantity: number = 0;
    menuItemId: string = "";
    businessLeadsMenuItemId: string = "64a6c1e33339d4dc9d8141a2";
    planningMenuItemId: string = "64a6c1e33339d4dc9d8141a4";

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        stage: new UntypedFormControl(null, [Validators.required]),
        jobCardNo: new UntypedFormControl(null, [Validators.required]),
        jobCardDate: new UntypedFormControl(null, [Validators.required]),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        reference: new UntypedFormControl(null, [Validators.required]),
        referenceModel: new UntypedFormControl(null),
        orderType: new UntypedFormControl(null, [Validators.required]),
        // DSKUDetails: new UntypedFormControl([]),
        SKUDetails: new UntypedFormControl([]),
        batchInfo: new UntypedFormGroup({
            totalBatchQuantity: new UntypedFormControl(null),
            manufacturingDate: new UntypedFormControl(null),
            batchNumber: new UntypedFormControl(null)
        }),
        NPDInput: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval"),
        JCCancellationReason: new UntypedFormControl(null),
        customerName: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    get batchInfo() {
        return this.form.get("batchInfo") as FormGroup;
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private jobCardCreationService: JobCardCreationService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.menuItemId = this.appGlobalService.menuItemId;
        this.getInitialData();
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
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
        if (this.validationService.checkErrors(this.form, JOB_CARD_FORM_ERRORS)) {
            return;
        }

        if (this.action == "cancel" && !this.form.controls["JCCancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            this.form.disable();
            this.form.controls["JCCancellationReason"].enable();
            return;
        }
        this.form.enable();

        let formData: any = this.form.value;

        // if (this.f["orderType"].value == "NPD") {
        // formData.DSKUDetails = this.DSKUDetailsOfJC;
        // } else {
        formData.SKUDetails = this.SKUDetailsOfJC;
        // }

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.jobCardCreationService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.jobCardCreationService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.SKUDetailsOfJC = [];
        this.collection = this.SKUDetailsOfJC.length;
        // this.DSKUDetailsOfJC = [];
        // this.collection = this.DSKUDetailsOfJC.length;
        this.customerOptions = [];
        this.ESCPreviewArr = [];
        this.itemDetailsList = [];
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.jobCardCreationService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["jobCardNo"].setValue(this.masterData.autoIncrementNo);
            this.batchInfo.controls["batchNumber"].setValue(this.masterData.autoIncrementNo);
            this.f["jobCardDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.batchInfo.controls["manufacturingDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["status"].setValue(this.statusArr[this.action]);

            if (this.menuItemId == this.businessLeadsMenuItemId) {
                this.f["stage"].setValue("Prototype");
                this.f["stage"].disable();
                this.f["orderType"].setValue("NPD");
                this.f["orderType"].disable();
            }

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.jobCardCreationService.getById(params["id"]);
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
                    if (success.jobCardDate) {
                        success.jobCardDate = this.utilityService.getFormatDate(success?.jobCardDate, "YYYY-MM-DD");
                    }
                    if (success.batchInfo && success.batchInfo.manufacturingDate) {
                        success.batchInfo.manufacturingDate = this.utilityService.getFormatDate(
                            success.batchInfo.manufacturingDate,
                            "YYYY-MM-DD"
                        );
                    }

                    // if (success.orderType == "NPD") {
                    //     this.DSKUDetailsOfJC = success.DSKUDetails;
                    //     this.collection = this.DSKUDetailsOfJC.length;
                    //     if (this.DSKUDetailsOfJC.length > 0) {
                    //         this.getMRPData("DSKU", this.DSKUDetailsOfJC[0].DSKU);
                    //     } else {
                    //         this.itemDetailsList = [];
                    //     }
                    // } else {
                    this.SKUDetailsOfJC = success.SKUDetails;
                    this.collection = this.SKUDetailsOfJC.length;
                    if (this.SKUDetailsOfJC.length > 0) {
                        this.getMRPData("SKU", this.SKUDetailsOfJC[0].SKU);
                    } else {
                        this.itemDetailsList = [];
                    }
                    // }
                    success.status = this.statusArr[this.action];

                    this.getCustomerOptions(success.stage, success.customerCategory, success);

                    if (this.action != "create") {
                        this.form.disable();
                        this.form.controls["JCCancellationReason"].enable();
                    }
                });
        });
    }

    customerValueChange(ele: any) {
        this.SKUDetailsOfJC = [];
        this.collection = this.SKUDetailsOfJC.length;
        // this.DSKUDetailsOfJC = [];
        // this.collection = this.DSKUDetailsOfJC.length;
        this.f["referenceModel"].setValue(ele?.referenceModel);
        this.f["customerName"].setValue(ele?.customerName);
        if (this.menuItemId == this.planningMenuItemId) {
            this.f["orderType"].setValue(null);
        }

        if (this.menuItemId == this.businessLeadsMenuItemId) {
            this.setTablesDetails();
        }
    }

    setTablesDetails() {
        let stage = this.f["stage"].value;
        let customerCategory = this.f["customerCategory"].value;
        let reference = this.f["reference"].value;
        let orderType = this.f["orderType"].value;
        if (!stage || !customerCategory || !reference) {
            this.toastService.warning("First Select Stage, Customer Category and Customer Name ");
            this.f["orderType"].setValue(null);
            return;
        }
        this.spinner.show();
        this.jobCardCreationService
            .getJCDetailsByCustomerId({customerId: reference, orderType: orderType, stage: stage})
            .subscribe(success => {
                // if (orderType == "NPD") {
                // this.SKUDetailsOfJC = [];
                // this.DSKUDetailsOfJC = success;
                // this.collection = this.DSKUDetailsOfJC.length;
                // } else {
                // this.DSKUDetailsOfJC = [];
                this.SKUDetailsOfJC = success;
                this.collection = this.SKUDetailsOfJC.length;
                // }
                // this.customerOptions = success;
                this.spinner.hide();
            });
    }

    setStageDetails() {
        this.customerOptions = [];
        this.SKUDetailsOfJC = [];
        this.collection = this.SKUDetailsOfJC.length;
        // this.DSKUDetailsOfJC = [];
        // this.collection = this.DSKUDetailsOfJC.length;
        this.f["customerCategory"].setValue(null);
        this.f["orderType"].setValue(null);
        this.f["reference"].setValue(null);
    }

    getCustomers() {
        if (this.menuItemId == this.planningMenuItemId) {
            this.f["orderType"].setValue(null);
        }
        this.f["reference"].setValue(null);
        this.customerOptions = [];
        let stage = this.f["stage"].value;
        let customerCategory = this.f["customerCategory"].value;
        if (!stage) {
            this.toastService.warning("First Select Stage");
            this.f["customerCategory"].setValue(null);
            return;
        }
        this.SKUDetailsOfJC = [];
        this.collection = this.SKUDetailsOfJC.length;
        // this.DSKUDetailsOfJC = [];
        // this.collection = this.DSKUDetailsOfJC.length;

        this.getCustomerOptions(stage, customerCategory, null);
    }

    getCustomerOptions(stage: string, customerCategory: string, patchData = null) {
        this.spinner.show();
        this.jobCardCreationService
            .getCustomersByCategory({stage: stage, category: customerCategory})
            .subscribe(success => {
                this.customerOptions = success;

                if (patchData) {
                    this.form.patchValue(patchData);
                }
                this.spinner.hide();
            });
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;

        // if (this.ESCPreviewArr.length > 0) {
        //     this.BoMOfSKUDetailsArr = this.ESCPreviewArr;
        //     this.collection = this.BoMOfSKUDetailsArr.length;
        // }
        // if (this.ESCPreviewInkDetails.length > 0) {
        //     this.inkList = this.ESCPreviewInkDetails;
        //     this.collection = this.inkList.length;
        // }

        // if (this.f["orderType"].value == "NPD") {
        //     this.DSKUDetailsOfJC = this.ESCPreviewArr;
        //     this.collection = this.DSKUDetailsOfJC.length;
        // } else {
        this.SKUDetailsOfJC = this.ESCPreviewArr;
        this.collection = this.SKUDetailsOfJC.length;
        // }
        this.isESCPreview = false;
    }

    getMRPData(type: string, SKUOrDSKUId: string) {
        this.jobCardCreationService.getBOMBySKUOrDSKU({type: type, SKUOrDSKUId: SKUOrDSKUId}).subscribe(success => {
            if (success) {
                this.itemDetailsList = success;
            } else {
                this.itemDetailsList = [];
            }
            this.spinner.hide();
        });
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;

        // if (this.DSKUDetailsOfJC.length > 0 && this.f["orderType"].value == "NPD") {
        //     this.SKUDetailsOfJC = [];
        //     this.ESCPreviewArr = this.DSKUDetailsOfJC;
        //     this.DSKUDetailsOfJC = this.DSKUDetailsOfJC.filter((x: any) => x.batchQty > 0);
        //     if (this.DSKUDetailsOfJC.length > 0) {
        //         this.getMRPData("DSKU", this.DSKUDetailsOfJC[0].DSKU);
        //     } else {
        //         this.itemDetailsList = [];
        //     }

        //     this.collection = this.DSKUDetailsOfJC.length;
        // } else {
        this.ESCPreviewArr = [];
        // this.DSKUDetailsOfJC = [];
        this.ESCPreviewArr = this.SKUDetailsOfJC;
        this.SKUDetailsOfJC = this.SKUDetailsOfJC.filter((x: any) => x.batchQty > 0);
        if (this.SKUDetailsOfJC.length > 0) {
            this.getMRPData("SKU", this.SKUDetailsOfJC[0].SKU);
        } else {
            this.itemDetailsList = [];
        }

        this.collection = this.SKUDetailsOfJC.length;
        // }

        // this.ESCPreviewArr = this.SKUDetailsOfJC;
        // this.SKUDetailsOfJC = this.SKUDetailsOfJC.filter((x: any) => x.orderedQty > 0);
        // || this.DSKUDetailsOfJC.length > 0
        if (this.SKUDetailsOfJC.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
    }

    saveData(event: any) {
        if (event.key == "totalBatchQuantity") {
            this.batchInfo.controls["totalBatchQuantity"].setValue(event.data);
        }
        if (event.key == "totalBatchQuantitySKU") {
            this.batchInfo.controls["totalBatchQuantity"].setValue(event.data);
        }
    }

    openBatchInfoModal() {
        // if (this.f["orderType"].value == "NPD") {
        //     this.SKUDetailsOfJC = [];
        //     this.totalBatchQuantity = this.DSKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
        //         (a: any, c: any) => +a + +c,
        //         0
        //     );
        //     this.batchInfo.value.totalBatchQuantity = this.totalBatchQuantity;
        //     this.collection = this.DSKUDetailsOfJC.length;
        // } else {
        // this.DSKUDetailsOfJC = [];
        this.totalBatchQuantity = this.SKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.batchInfo.value.totalBatchQuantity = this.totalBatchQuantity;
        // }

        const modalRef = this.modalService.open(BatchInfoModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.batchInfo = this.batchInfo.value;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.totalBatchQuantity = this.totalBatchQuantity;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.batchInfo.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openViewMRPModal() {
        // if (this.f["orderType"].value == "NPD") {
        //     this.SKUDetailsOfJC = [];
        //     this.totalBatchQuantity = this.DSKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
        //         (a: any, c: any) => +a + +c,
        //         0
        //     );
        //     this.batchInfo.value.totalBatchQuantity = this.totalBatchQuantity;
        //     this.collection = this.DSKUDetailsOfJC.length;
        // } else {
        // this.DSKUDetailsOfJC = [];
        this.totalBatchQuantity = this.SKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.batchInfo.value.totalBatchQuantity = this.totalBatchQuantity;
        // }

        const modalRef = this.modalService.open(JobCardMRPModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.batchInfo = this.batchInfo.value;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.totalBatchQuantity = this.totalBatchQuantity;
        modalRef.componentInstance.itemDetailsList = this.itemDetailsList;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.batchInfo.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "JC Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Job Card ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }
}
