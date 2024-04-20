import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {UtilityService, SpinnerService} from "@core/services";
import {ISKUDetailsOfJC} from "@mocks/models/planning/transactions";
import {JOB_CARD_FORM_ERRORS} from "@mocks/validations/planning";
import {CancelPoComponent} from "@shared/modals";
import {
    BatchInfoModalComponent,
    FgInventoryModalComponent,
    JobCardDispModalComponent,
    JobCardMRPModalComponent
} from "src/app/default/planning/transactions/job-card/screens/components";
import {SampleJCCreationService} from "@services/business-leads";
import {ISampleJCCreationMasterData} from "@mocks/models/business-leads/transactions";

@Component({
    selector: "app-sample-jc-creation-form",
    templateUrl: "./sample-jc-creation-form.component.html",
    styleUrls: ["./sample-jc-creation-form.component.scss"]
})
export class SampleJcCreationFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    SKUDetailsOfJC: ISKUDetailsOfJC[] = [];
    customers: any = [];
    customerOptions: any = [];
    submitted = false;
    isPreview = false;
    action: string = "create";
    selectDSKU: any = null;
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
    masterData: ISampleJCCreationMasterData = {
        autoIncrementNo: "",
        companyType: "",
        salesCategory: [],
        NPDInputs: []
    };
    totalBatchQuantity: number = 0;
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        stage: new UntypedFormControl("Prototype", [Validators.required]),
        jobCardNo: new UntypedFormControl(null, [Validators.required]),
        jobCardDate: new UntypedFormControl(null, [Validators.required]),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(null),
        orderType: new UntypedFormControl(null, [Validators.required]),
        SKUDetails: new UntypedFormControl([]),
        batchInfo: new UntypedFormGroup({
            totalBatchQuantity: new UntypedFormControl(null),
            manufacturingDate: new UntypedFormControl(null),
            batchNumber: new UntypedFormControl(null)
        }),
        NPDInput: new UntypedFormControl(null),
        JCCancellationReason: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval")
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
        private sampleJCCreationService: SampleJCCreationService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
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
        this.form.enable();
        if (this.validationService.checkErrors(this.form, JOB_CARD_FORM_ERRORS)) {
            return;
        }

        if (this.action == "cancel" && !this.form.controls["JCCancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            this.form.disable();
            this.form.controls["JCCancellationReason"].enable();
            return;
        }

        let formData: any = this.form.value;

        formData.SKUDetails = this.SKUDetailsOfJC;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.sampleJCCreationService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.sampleJCCreationService.create(formData).subscribe(success => {
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
        this.customerOptions = [];
        this.ESCPreviewArr = [];
        this.itemDetailsList = [];
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.sampleJCCreationService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["jobCardNo"].setValue(this.masterData.autoIncrementNo);
            this.batchInfo.controls["batchNumber"].setValue(this.masterData.autoIncrementNo);
            this.f["jobCardDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.batchInfo.controls["manufacturingDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.f["status"].setValue(this.statusArr[this.action]);
            this.f["stage"].setValue("Prototype");
            this.f["orderType"].setValue("SR");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.sampleJCCreationService.getById(params["id"]);
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

                    this.SKUDetailsOfJC = success.SKUDetails;
                    this.collection = this.SKUDetailsOfJC.length;
                    if (this.SKUDetailsOfJC.length > 0) {
                        this.getMRPData(this.SKUDetailsOfJC[0].SKU);
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
        this.f["customerName"].setValue(ele?.customerName);

        let stage = this.f["stage"].value;
        let customerCategory = this.f["customerCategory"].value;
        let customer = this.f["customer"].value;
        let orderType = this.f["orderType"].value;
        if (!stage || !customerCategory || !customer) {
            this.toastService.warning("First Select Stage, Customer Category and Customer Name ");
            return;
        }
        this.spinner.show();
        this.sampleJCCreationService.getSampleJCDetailsByCustomerId({customerId: customer}).subscribe(success => {
            this.SKUDetailsOfJC = success;
            this.collection = this.SKUDetailsOfJC.length;

            // this.customerOptions = success;
            this.spinner.hide();
        });
    }

    setTablesDetails() {
        let stage = this.f["stage"].value;
        let customerCategory = this.f["customerCategory"].value;
        let customer = this.f["customer"].value;
        let orderType = this.f["orderType"].value;
        if (!stage || !customerCategory || !customer) {
            this.toastService.warning("First Select Stage, Customer Category and Customer Name ");
            return;
        }
        this.spinner.show();
        this.sampleJCCreationService.getSampleJCDetailsByCustomerId({customerId: customer}).subscribe(success => {
            this.SKUDetailsOfJC = success;
            this.collection = this.SKUDetailsOfJC.length;

            // this.customerOptions = success;
            this.spinner.hide();
        });
    }

    setStageDetails() {
        this.customerOptions = [];
        this.SKUDetailsOfJC = [];
        this.collection = this.SKUDetailsOfJC.length;
        this.f["customerCategory"].setValue(null);
        this.f["customer"].setValue(null);
    }

    getCustomers() {
        this.f["customer"].setValue(null);
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

        this.getCustomerOptions(stage, customerCategory, null);
    }

    getCustomerOptions(stage: string, customerCategory: string, patchData = null) {
        this.spinner.show();
        this.sampleJCCreationService
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

        this.SKUDetailsOfJC = this.ESCPreviewArr;
        this.collection = this.SKUDetailsOfJC.length;

        this.isESCPreview = false;
    }

    getMRPData(SKUOrDSKUId: string) {
        this.sampleJCCreationService.getBOMBySKUId({SKUId: SKUOrDSKUId}).subscribe(success => {
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

        this.ESCPreviewArr = [];
        this.ESCPreviewArr = this.SKUDetailsOfJC;
        this.SKUDetailsOfJC = this.SKUDetailsOfJC.filter((x: any) => x.batchQty > 0);
        if (this.SKUDetailsOfJC.length > 0) {
            this.getMRPData(this.SKUDetailsOfJC[0].SKU);
        } else {
            this.itemDetailsList = [];
        }

        this.collection = this.SKUDetailsOfJC.length;

        // this.ESCPreviewArr = this.SKUDetailsOfJC;
        // this.SKUDetailsOfJC = this.SKUDetailsOfJC.filter((x: any) => x.orderedQty > 0);
        if (this.SKUDetailsOfJC.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
    }

    openBatchInfoModal() {
        this.totalBatchQuantity = this.SKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.batchInfo.value.totalBatchQuantity = this.totalBatchQuantity;

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
        this.totalBatchQuantity = this.SKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.batchInfo.value.totalBatchQuantity = this.totalBatchQuantity;

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
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Sample Job Card ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }

    openDrawing(drawing: any) {
        if (drawing) {
            window.open(drawing, "_blank");
        } else {
            this.toastService.warning("Drawing File Not Present");
        }
    }

    openFGInventoryModal(item: any) {
        if (!this.selectDSKU || this.selectDSKU == item.SKUNo) {
            const modalRef = this.modalService.open(FgInventoryModalComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.FGInventoryInfo = item?.FGInventoryInfo;
            modalRef.componentInstance.totalFGQty = item?.totalFGQty;
            modalRef.result.then(
                (success: any) => {
                    if (success && ["create", "edit"].includes(this.action)) {
                        let index = -1;
                        index = this.SKUDetailsOfJC.findIndex(
                            (x: any) =>
                                x.reference == item?.reference &&
                                x.SKU == item.SKU &&
                                x?.SO_FCLineTargetDate == item?.SO_FCLineTargetDate
                        );

                        this.SKUDetailsOfJC[index].FGInventoryInfo = success?.FGInventoryInfo;

                        if (item.balQty > success.totalFGQty) {
                            this.SKUDetailsOfJC[index].batchQty = +item.balQty - +success.totalFGQty;
                            this.SKUDetailsOfJC[index].previousQty = +item.balQty - +success.totalFGQty;
                        } else {
                            this.SKUDetailsOfJC[index].batchQty = 0;
                        }

                        if (typeof +item.batchQty == "number" && +item.batchQty > 0) {
                            this.selectDSKU = item?.SKUNo;
                        } else {
                            this.selectDSKU = null;
                        }
                        this.calTotalBatchQuantity();
                        if (+item.batchQty < +this.SKUDetailsOfJC[index].previousQty) {
                            // this.toastService.warning("Batch Qty Should be greater than Equal to Bal Qty");
                        }
                    }
                },
                (reason: any) => {}
            );
        }
    }

    openSOScheduleModal(item: any) {
        if (
            item.dispatchSchedule &&
            item.dispatchSchedule.length > 0 &&
            (!this.selectDSKU || this.selectDSKU == item.SKUNo)
        ) {
            const modalRef = this.modalService.open(JobCardDispModalComponent, {
                centered: true,
                windowClass: "custom-modal-sm",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.UOM = item.UOM;
            modalRef.componentInstance.deliveryScheduleArr = item?.dispatchSchedule;
            modalRef.result.then(
                (success: any) => {
                    if (success && ["create", "edit"].includes(this.action)) {
                    }
                },
                (reason: any) => {}
            );
        }
    }

    setBatchQty(item: ISKUDetailsOfJC) {
        let index = -1;
        index = this.SKUDetailsOfJC.findIndex(
            (x: any) =>
                x.reference == item?.reference &&
                x.SKU == item.SKU &&
                x?.SO_FCLineTargetDate == item?.SO_FCLineTargetDate
        );

        if (item.balQty > item.totalFGQty) {
            this.SKUDetailsOfJC[index].previousQty = +item.balQty - +item.totalFGQty;
        }

        if (+item.batchQty < +item.previousQty) {
            // this.toastService.warning("Batch Qty Should be greater than Equal to Bal Qty");
            this.selectDSKU = null;
        }

        if (typeof +item.batchQty == "number" && +item.batchQty > 0) {
            this.selectDSKU = item?.SKUNo;
        } else {
            this.selectDSKU = null;
        }

        this.calTotalBatchQuantity();
        this.collection = this.SKUDetailsOfJC.length;
    }

    calTotalBatchQuantity() {
        let totalBatchQuantity = this.SKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.batchInfo.controls["totalBatchQuantity"].setValue(totalBatchQuantity);
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.SKUDetailsOfJC = this.SKUDetailsOfJC;
        } else {
            this.SKUDetailsOfJC = [...this.SKUDetailsOfJC].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
