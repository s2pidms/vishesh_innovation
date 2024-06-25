import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BankDetails} from "@interfaces/bankDetails";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {jobWorkOrderInterface} from "@mocks/models/purchase/transactions";
import {JOB_WORKER_FORM_ERRORS} from "@mocks/validations/purchase";
import {
    JobWorkOrderAddressModalComponent,
    JwDeliveryScheduleComponent,
    ReviewWoTermsModalComponent
} from "../components";
import {ConfirmDeleteComponent, CustomSearchDetailsModalComponent} from "@shared/modals";
import TABLE_HEADERS from "./tableHeaders";
import TABLE_HEADERS_SERVICE_MASTER from "./tableHeadersServiceMaster";
import TABLE_HEADERS_JW_ITEM_MASTER from "./tableHeadersForJWItem";
import {JobWorkOrderService} from "@services/purchase/jobWorkOrder.service";
import {mergeMap, of} from "rxjs";
import {JOB_WORKER_ORDER_FORM_ERRORS} from "@mocks/validations/purchase/jobWorkerOrder.validation copy";
@Component({
    selector: "app-job-work-order-form",
    templateUrl: "./job-work-order-form.component.html",
    styleUrls: ["./job-work-order-form.component.scss"]
})
export class JobWorkOrderFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    selectedJobWorker: any = [];
    jobWorkerBankDetails: BankDetails[] = [];
    jobWorkerItemsOptions: any = [];
    jobWODetails: any = [
        {
            jobWorkService: null,
            jobWorkServiceCode: null,

            SACInfo: {
                SACCode: null,
                natureOfJobWork: null,
                gstRate: null,
                igstRate: null,
                sgstRate: null,
                cgstRate: null,
                ugstRate: null
            },
            jobWorkItem: null,
            jobWorkItemCode: null,
            jobWorkItemName: null,
            jobWorkItemDescription: null,
            drawingNo: null,
            HSNInfo: {
                HSNCode: null,
                gstRate: null,
                igstRate: null,
                sgstRate: null,
                cgstRate: null,
                ugstRate: null
            },
            UOM: null,
            processRatePerUnit: null,
            discountPercent: null,
            netRatePerUnit: null,
            quantity: null,
            taxableValue: null,
            deliveryDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            deliveryCount: null,
            deliverySchedule: null
        }
    ];
    selectedDetails: any = {};
    selectedDetailsForServiceJWO: any = {};
    selectedDetailsOfJobCardItem: any = {};
    active: number = 0;
    cpaPurchaseAgreement: any = null;
    statesOfIndia = STATES_LIST;
    tableHead = TABLE_HEADERS;
    tableHeadServiceMaster = TABLE_HEADERS_SERVICE_MASTER;
    tableHeadJWItemMaster = TABLE_HEADERS_JW_ITEM_MASTER;
    masterData: jobWorkOrderInterface = {
        autoIncrementNo: "",
        jobWorkerOptions: [],
        jobWODiscountOptions: [],
        serviceMastersOptions: [],
        purchaseCountryOptions: [],
        companyAddress: [],
        freightTermsOptions: [],
        paymentTermsOptions: []
    };
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected",
        cancel: "Cancelled"
    };

    constructor(
        private jobWorkOrderService: JobWorkOrderService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService,
        private fb: FormBuilder
    ) {}
    tabs = [1, 2, 3, 4, 5];
    counter = this.tabs.length + 1;

    close(event: MouseEvent, toRemove: number) {
        this.tabs = this.tabs.filter(id => id !== toRemove);
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    add(event: MouseEvent) {
        this.tabs.push(this.counter++);
        event.preventDefault();
    }

    form: FormGroup = this.fb.group({
        _id: [null],
        WONo: [null],
        WODate: [null],
        jobWorker: [null],
        jobWorkerName: [null, [Validators.required]],
        orderReference: [null],
        GSTINNo: [null],
        placeOfSupply: [null],
        billFromJobWorker: [{}],
        shipFromJobWorker: [{}],
        billToCompany: [{}],
        shipToCompany: [{}],
        paymentTerms: [null, Validators.required],
        freightTerms: [null, Validators.required],
        WORemarks: [null, Validators.required],
        WODetails: this.fb.group([
            {
                jobWorkService: [null],
                jobWorkServiceCode: [null],
                SACInfo: this.fb.group({
                    SACCode: [null],
                    natureOfJobWork: [null],
                    gstRate: [null],
                    igstRate: [null],
                    sgstRate: [null],
                    cgstRate: [null],
                    ugstRate: [null]
                }),
                HSNInfo: this.fb.group({
                    HSNCode: [null],
                    gstRate: [null],
                    igstRate: [null],
                    sgstRate: [null],
                    cgstRate: [null],
                    ugstRate: [null]
                }),
                jobWorkItem: [null],
                jobWorkItemCode: [null],
                jobWorkItemName: [null],
                jobWorkItemDescription: [null],
                drawingNo: [null],
                HSNCode: [null],
                UOM: [null],
                processRatePerUnit: [null],
                discountPercent: [null],
                netRatePerUnit: [null],
                quantity: [null],
                taxableValue: [null],
                deliveryDate: [null],
                deliveryCount: [null],
                deliverySchedule: [null]
            }
        ]),
        WOTaxableValue: [null],
        remarks: [null],
        status: [null]
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, JOB_WORKER_ORDER_FORM_ERRORS)) {
            return;
        }

        if (!this.form.controls["billToCompany"]?.value?.billFromLocation) {
            this.toastService.warning("In Address Bill To is required !");
            return;
        }
        if (!this.form.controls["shipToCompany"]?.value?.billFromLocation) {
            this.toastService.warning("In Address Ship To is required !");
            return;
        }

        let lastIndex = this.jobWODetails.length - 1;
        let addressDetails: any = {};
        if (lastIndex != -1) {
            addressDetails = this.jobWODetails[lastIndex];
        }
        if (!addressDetails.jobWorkService) {
            this.toastService.warning("Job Work Service Code is required !");
            return;
        }
        if (!addressDetails.SACInfo.natureOfJobWork) {
            this.toastService.warning("Nature of Job Work is required !");
            return;
        }
        if (!addressDetails.jobWorkItem) {
            this.toastService.warning("JW Item Code is required !");
            return;
        }
        if (!addressDetails.jobWorkItemName) {
            this.toastService.warning("JW Item Name is required !");
            return;
        }
        // if (!addressDetails.drawingNo) {
        //     this.toastService.warning("Drawing No. is required !");
        //     return;
        // }
        // if (!addressDetails.discountPercent) {
        //     this.toastService.warning("Discount % is required !");
        //     return;
        // }
        // if (!addressDetails.netRatePerUnit) {
        //     this.toastService.warning("Net Rate/Unit (After Discount) is required !");
        //     return;
        // }
        if (!addressDetails.quantity) {
            this.toastService.warning("Quantity is required !");
            return;
        }
        if (!addressDetails.deliveryDate) {
            this.toastService.warning("Delivery Date is required !");
            return;
        }

        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Reject Remark is Required");
            return;
        }
        let formData: any = this.form.value;
        formData.WODetails = this.jobWODetails;
        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.jobWorkOrderService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.jobWorkOrderService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.jobWorkOrderService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["WONo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["WODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);

            if (this.masterData?.companyAddress?.length > 0) {
                this.masterData.companyAddress = this.masterData?.companyAddress.map((x: any) => {
                    x.billFromLocation = x.locationID;
                    return x;
                });
            }

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.jobWorkOrderService.getById(params["id"]);
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
                    success.status = this.statusArr[this.action];

                    if (success.WODate) {
                        success.WODate = this.utilityService.getFormatDate(success?.WODate, "YYYY-MM-DD");
                    }
                    if (success?.WODetails) {
                        this.jobWODetails = success?.WODetails;
                    }
                    if (success?.jobWorker) {
                        this.jobWorkOrderService.getJWItemsByJobWorker(success?.jobWorker).subscribe(success => {
                            this.jobWorkerItemsOptions = success?.JWItemsOptions;
                        });
                    }

                    if (success?.jobWorker) {
                        let jobWorkerData: any = this.masterData.jobWorkerOptions.find(
                            (x: any) => x?.jobWorker == success?.jobWorker
                        );
                        this.selectedJobWorker = jobWorkerData?.additionalPlacesOfBusiness?.map((x: any) => {
                            const addressParts = [
                                x.line1,
                                x.line2,
                                x.line3,
                                x.line4,
                                x.cityOrDistrict,
                                x.pinCode,
                                x.state,
                                x.country
                            ];
                            x.addressLabel = addressParts.filter(Boolean).join(", ");
                            return x;
                        });
                    }

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }

                    if (this.action != "edit") {
                        this.form.disable();
                        if (["approve", "reject", "cancel"].includes(this.action)) {
                            this.f["remarks"].enable();
                        }
                    }
                });
        });
    }

    newJobWODetails() {
        this.jobWODetails.push({
            jobWorkService: null,
            jobWorkServiceCode: null,
            SACInfo: {
                SACCode: null,
                natureOfJobWork: null,
                gstRate: null,
                igstRate: null,
                sgstRate: null,
                cgstRate: null,
                ugstRate: null
            },
            jobWorkItem: null,
            jobWorkItemCode: null,
            jobWorkItemName: null,
            jobWorkItemDescription: null,
            drawingNo: null,
            HSNInfo: {
                HSNCode: null,
                gstRate: null,
                igstRate: null,
                sgstRate: null,
                cgstRate: null,
                ugstRate: null
            },
            UOM: null,
            processRatePerUnit: null,
            discountPercent: null,
            netRatePerUnit: null,
            quantity: null,
            taxableValue: null,
            deliveryDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            deliveryCount: null,
            deliverySchedule: null
        });
    }

    validationCheck() {}

    addPlace(): void {
        if (["edit", "create"].includes(this.action)) {
            let lastIndex = this.jobWODetails.length - 1;
            let addressDetails: any = {};
            if (lastIndex != -1) {
                addressDetails = this.jobWODetails[lastIndex];
            }
            if (!addressDetails.jobWorkService) {
                this.toastService.warning("Job Work Service Code is required !");
                return;
            }
            if (!addressDetails.SACInfo.natureOfJobWork) {
                this.toastService.warning("Nature of Job Work is required !");
                return;
            }
            if (!addressDetails.jobWorkItem) {
                this.toastService.warning("JW Item Code is required !");
                return;
            }
            if (!addressDetails.jobWorkItemName) {
                this.toastService.warning("JW Item Name is required !");
                return;
            }
            // if (!addressDetails.drawingNo) {
            //     this.toastService.warning("Drawing No. is required !");
            //     return;
            // }
            // if (!addressDetails.discountPercent) {
            //     this.toastService.warning("Discount % is required !");
            //     return;
            // }
            // if (!addressDetails.netRatePerUnit) {
            //     this.toastService.warning("Net Rate/Unit (After Discount) is required !");
            //     return;
            // }
            if (!addressDetails.quantity) {
                this.toastService.warning("Quantity is required !");
                return;
            }
            if (!addressDetails.deliveryDate) {
                this.toastService.warning("Delivery Date is required !");
                return;
            }
            this.newJobWODetails();
            this.active = this.jobWODetails.length - 1;
        }
    }
    setJobWorker(ev: any) {
        this.f["jobWorkerName"].setValue(ev?.jobWorkerName);
        // this.f["placeOfSupply"].setValue(ev?.state);
        this.f["GSTINNo"].setValue(ev?.GSTINNo);
        this.selectedJobWorker = ev?.additionalPlacesOfBusiness?.map((x: any) => {
            const addressParts = [x.line1, x.line2, x.line3, x.line4, x.cityOrDistrict, x.pinCode, x.state, x.country];
            x.addressLabel = addressParts.filter(Boolean).join(", ");
            return x;
        });
        this.form.controls["billFromJobWorker"].patchValue(this.selectedJobWorker[0]);
        this.form.controls["shipFromJobWorker"].patchValue(this.selectedJobWorker[0]);
        if (this.masterData?.companyAddress?.length == 1) {
            this.form.controls["billToCompany"].patchValue(this.masterData?.companyAddress[0]);
            this.form.controls["shipToCompany"].patchValue(this.masterData?.companyAddress[0]);
            this.f["placeOfSupply"].setValue(this.form.controls["shipToCompany"].value?.state);
        }
        this.spinner.show();
        this.jobWorkOrderService.getJWItemsByJobWorker(ev?.jobWorker).subscribe(success => {
            this.spinner.hide();
            this.jobWorkerItemsOptions = success?.JWItemsOptions;
        });
    }
    setServiceInfo(ev: any, index: number) {
        this.jobWODetails[index].jobWorkServiceCode = ev?.serviceCode;
        this.jobWODetails[index].jobWorkService = ev?._id;
        this.jobWODetails[index].SACInfo.SACCode = ev?.sacCode;
        this.jobWODetails[index].SACInfo.natureOfJobWork = ev?.serviceDescription;
        this.jobWODetails[index].SACInfo.gstRate = ev?.gst;
        this.jobWODetails[index].SACInfo.igstRate = ev?.igst;
        this.jobWODetails[index].SACInfo.sgstRate = ev?.sgst;
        this.jobWODetails[index].SACInfo.cgstRate = ev?.cgst;
        this.jobWODetails[index].SACInfo.ugstRate = ev?.ugst;
    }
    setJobWorkItemInfo(ev: any, index: number) {
        this.jobWODetails[index].jobWorkItem = ev?._id;
        this.jobWODetails[index].jobWorkItemDescription = ev?.jobWorkItemDescription;
        this.jobWODetails[index].jobWorkItemCode = ev?.jobWorkItemCode;
        this.jobWODetails[index].jobWorkItemName = ev?.jobWorkItemName;
        this.jobWODetails[index].HSNInfo.HSNCode = ev?.HSNCode;
        this.jobWODetails[index].HSNInfo.gstRate = ev?.gst;
        this.jobWODetails[index].HSNInfo.igstRate = ev?.igst;
        this.jobWODetails[index].HSNInfo.sgstRate = ev?.cgst;
        this.jobWODetails[index].HSNInfo.cgstRate = ev?.sgst;
        this.jobWODetails[index].HSNInfo.ugstRate = ev?.ugst;
        this.jobWODetails[index].UOM = ev?.orderInfoUOM;
        this.jobWODetails[index].processRatePerUnit = ev?.processRatePerUnit;
        this.jobWODetails[index].netRatePerUnit = ev?.processRatePerUnit;
        this.jobWODetails[index].discountPercent = null;
        this.jobWODetails[index].quantity = null;
        this.jobWODetails[index].taxableValue = null;

        this.calWOTaxableValue();
    }

    calWOTaxableValue() {
        let totalWOTaxableValue = this.jobWODetails.map((x: any) => x.taxableValue).reduce((a: any, c: any) => +a + +c);

        this.form.controls["WOTaxableValue"].setValue(+(+totalWOTaxableValue).toFixed(2));
    }

    setNetRate(event: any, index: any) {
        if (event.parameterName != "-") {
            this.jobWODetails[index].netRatePerUnit = +(
                +this.jobWODetails[index].processRatePerUnit -
                +this.jobWODetails[index].processRatePerUnit * (+event.parameterName / 100)
            ).toFixed(2);
        } else {
            this.jobWODetails[index].netRatePerUnit = this.jobWODetails[index].processRatePerUnit;
        }

        this.setTaxableValue(index);
    }

    setTaxableValue(index: any) {
        this.jobWODetails[index].taxableValue = +(
            +this.jobWODetails[index].netRatePerUnit * +this.jobWODetails[index].quantity
        ).toFixed(2);

        this.calWOTaxableValue();

        if (!this.jobWODetails[index].deliverySchedule || this.jobWODetails[index].deliverySchedule.length == 0) {
            let obj: any = {
                scheduleNo: 1,
                quantity: this.jobWODetails[index].quantity,
                UOM: this.jobWODetails[index].UOM,
                deliveryDate: this.jobWODetails[index].deliveryDate
            };

            this.jobWODetails[index].deliverySchedule = [obj];
            this.jobWODetails[index].deliveryCount = 1;
        }

        if (this.jobWODetails[index].deliverySchedule.length > 0) {
            let dividedCount = Math.floor(this.jobWODetails[index].quantity / this.jobWODetails[index].deliveryCount);
            let remainder = this.jobWODetails[index].quantity % this.jobWODetails[index].deliveryCount;
            for (let i = 0; i < this.jobWODetails[index].deliveryCount; i++) {
                const ele = this.jobWODetails[index].deliverySchedule[i];

                let finalQuantity = dividedCount;
                if (i === this.jobWODetails[index].deliveryCount - 1) {
                    finalQuantity += remainder;
                }

                ele.quantity = finalQuantity;
            }
        }
    }

    openConfirmModal(index: any) {
        const modalRef = this.modalService.open(ConfirmDeleteComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.heading = "Confirm Deletion";
        modalRef.componentInstance.confirmText = `Are you sure you want to delete this WO Line Item ?`;
        modalRef.result.then(
            (success: any) => {
                if (success.title == "Yes") {
                    this.removePlace(index);
                }
            },
            (reason: any) => {}
        );
    }
    removePlace(i: number) {
        if (["edit", "create"].includes(this.action)) {
            this.jobWODetails.splice(i, 1);
            // if (i == this.active) {
            this.active = this.jobWODetails.length - 1;
            // }

            this.calWOTaxableValue();
        }
    }
    reset() {
        this.jobWODetails = [
            {
                jobWorkService: null,
                jobWorkServiceCode: null,

                SACInfo: {
                    SACCode: null,
                    natureOfJobWork: null,
                    gstRate: null,
                    igstRate: null,
                    sgstRate: null,
                    cgstRate: null,
                    ugstRate: null
                },
                jobWorkItem: null,
                jobWorkItemCode: null,
                jobWorkItemName: null,
                jobWorkItemDescription: null,
                drawingNo: null,
                HSNInfo: {
                    HSNCode: null,
                    gstRate: null,
                    igstRate: null,
                    sgstRate: null,
                    cgstRate: null,
                    ugstRate: null
                },
                UOM: null,
                processRatePerUnit: null,
                discountPercent: null,
                netRatePerUnit: null,
                quantity: null,
                taxableValue: null,
                deliveryDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                deliveryCount: null,
                deliverySchedule: null
            }
        ];
        this.form.reset();
        this.getInitialData();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    // openAddressModal() {
    //     const modalRef = this.modalService.open(JobWorkOrderAddressModalComponent, {
    //         centered: true,
    //         size: "lg",
    //         backdrop: "static",
    //         keyboard: false
    //     });

    //     modalRef.componentInstance.action = this.action;
    //     modalRef.componentInstance.primaryAddress = this.primaryAddress;
    //     modalRef.result.then(
    //         (success: any) => {
    //             if (success && ["create", "edit"].includes(this.action)) {
    //             }
    //         },
    //         (reason: any) => {}
    //     );
    // }
    openJobWorkDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "Job Work Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetails;
            modalRef.componentInstance.tableHead = this.tableHead;
            modalRef.componentInstance.bodyList = this.masterData?.jobWorkerOptions;
            modalRef.componentInstance._id = this.form.controls["jobWorker"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetails = success?.selectedDetails;
                        this.form.controls["jobWorker"].setValue(success?.selectedDetails?.jobWorker);
                        this.setJobWorker(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openJobWorkServiceMasterDetailsModal(jobWorkService: any, index: any) {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "Job Work Service Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetailsForServiceJWO;
            modalRef.componentInstance.tableHead = this.tableHeadServiceMaster;
            modalRef.componentInstance.bodyList = this.masterData?.serviceMastersOptions;
            modalRef.componentInstance._id = jobWorkService;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetailsForServiceJWO = success?.selectedDetails;
                        // this.form.controls["jobWorkService"].setValue(success?.selectedDetails?._id);
                        this.jobWODetails[index].jobWorkService = success?.selectedDetails?._id;
                        this.setServiceInfo(success?.selectedDetails, index);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openJobWorkItemDetailsModal(jobWorkItem: any, index: any) {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "Job Work Item Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetailsOfJobCardItem;
            modalRef.componentInstance.tableHead = this.tableHeadJWItemMaster;
            modalRef.componentInstance.bodyList = this.jobWorkerItemsOptions;
            modalRef.componentInstance._id = jobWorkItem;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetailsOfJobCardItem = success?.selectedDetails;
                        this.jobWODetails[index].jobWorkItem = success?.selectedDetails?._id;
                        this.setJobWorkItemInfo(success?.selectedDetails, index);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openWOReviewTermsModal() {
        const modalRef = this.modalService.open(ReviewWoTermsModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.WOTermsArr = {
            freightTerms: this.masterData?.freightTermsOptions,
            paymentTermsArr: this.masterData?.paymentTermsOptions
        };
        modalRef.componentInstance.WOTermsData = {
            paymentTerms: this.form.controls["paymentTerms"].value,
            freightTerms: this.form.controls["freightTerms"].value,
            WORemarks: this.form.controls["WORemarks"].value
        };

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    openAddressModal() {
        const modalRef = this.modalService.open(JobWorkOrderAddressModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = "create";
        modalRef.componentInstance.billFromJobWorker = this.form.controls["billFromJobWorker"].value;
        modalRef.componentInstance.shipFromJobWorker = this.form.controls["shipFromJobWorker"].value;
        modalRef.componentInstance.billToCompany = this.form.controls["billToCompany"].value;
        modalRef.componentInstance.shipToCompany = this.form.controls["shipToCompany"].value;
        modalRef.componentInstance.billFromCompanyData = this.masterData?.companyAddress;
        modalRef.componentInstance.selectedJobWorker = this.selectedJobWorker;
        // modalRef.componentInstance.billFromLocationArr = this.masterData?.billFromLocationOptions;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["billFromJobWorker"].patchValue(success?.billFromJobWorker);
                    this.form.controls["shipFromJobWorker"].setValue(success?.shipFromJobWorker);
                    this.form.controls["billToCompany"].patchValue(success?.billToCompany);
                    this.form.controls["shipToCompany"].patchValue(success?.shipToCompany);

                    this.f["placeOfSupply"].setValue(success?.shipToCompany?.state);
                    // this.form.controls["billFromLocation"].setValue(success?.billFromLocation);
                    // this.setBillFromAddress({label: success?.billFromLocation});
                }
            },
            (reason: any) => {}
        );
    }

    openJWScheduleModal(item: any, index: any) {
        if (!item.quantity) {
            this.toastService.warning("Pls Enter Qty !!");
            return;
        }

        const modalRef = this.modalService.open(JwDeliveryScheduleComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.IOQty = item.quantity;
        modalRef.componentInstance.deliveryCount = item.deliveryCount;
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.deliveryDate = item.deliveryDate;
        if (item.deliverySchedule) {
            modalRef.componentInstance.deliveryScheduleArr = item?.deliverySchedule.map((x: any) => {
                x.deliveryDate = this.utilityService.getFormatDate(x.deliveryDate, "YYYY-MM-DD");
                return x;
            });
        }
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.jobWODetails[index].deliveryCount = success.deliveryCount;
                    this.jobWODetails[index].deliverySchedule = success.deliverySchedule;
                    if (success?.deliverySchedule?.length == 1) {
                        this.jobWODetails[index].deliveryDate = success.deliverySchedule[0]?.deliveryDate;
                    }
                    if (success?.deliverySchedule?.length > 1) {
                        this.jobWODetails[index].deliveryDate = "Refer Schedule";
                    }
                }
            },
            (reason: any) => {}
        );
    }
}
