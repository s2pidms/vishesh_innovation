import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BankDetails} from "@interfaces/bankDetails";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {jobWorkOrderInterface} from "@mocks/models/purchase/transactions";
import {JOB_WORKER_FORM_ERRORS} from "@mocks/validations/purchase";
import {JobWorkOrderAddressModalComponent, ReviewWoTermsModalComponent} from "../components";
import {CustomSearchDetailsModalComponent} from "@shared/modals";
import TABLE_HEADERS from "./tableHeaders";
import TABLE_HEADERS_SERVICE_MASTER from "./tableHeadersServiceMaster";
import TABLE_HEADERS_JW_ITEM_MASTER from "./tableHeadersForJWItem";
import {JobWorkOrderService} from "@services/purchase/jobWorkOrder.service";
import {mergeMap, of} from "rxjs";
@Component({
    selector: "app-job-work-order-form",
    templateUrl: "./job-work-order-form.component.html",
    styleUrls: ["./job-work-order-form.component.scss"]
})
export class JobWorkOrderFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    primaryAddress: any = {};
    jobWorkerBankDetails: BankDetails[] = [];
    jobWorkerItemsOptions: any = [];
    jobWODetails: any = [
        {
            jobWorkService: null,
            jobWorkServiceCode: null,
            natureOfJobWork: null,
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
            currency: null,
            processRatePerUnit: null,
            discountPercent: null,
            netRatePerUnit: null,
            quantity: null,
            taxableValue: null,
            deliveryDate: null
        }
    ];
    selectedDetails: any = {};
    selectedDetailsForServiceJWO: any = {};
    selectedDetailsOfJobCardItem: any = {};
    jobWorkerOptions: any = [];
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
        paymentTermsOptions: [],
        purchaseCountryOptions: []
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
        WONo: [null, [Validators.required]],
        WODate: [null],
        jobWorker: [null],
        jobWorkerName: [null],
        orderReference: [null],
        placeOfSupply: [null],
        WODetails: this.fb.group([
            {
                jobWorkService: [null],
                jobWorkServiceCode: [null],
                natureOfJobWork: [null],
                SACInfo: new UntypedFormGroup({
                    SACCode: new UntypedFormControl(null),
                    natureOfJobWork: new UntypedFormControl(null),
                    gstRate: new UntypedFormControl(null),
                    igstRate: new UntypedFormControl(null),
                    sgstRate: new UntypedFormControl(null),
                    cgstRate: new UntypedFormControl(null),
                    ugstRate: new UntypedFormControl(null)
                }),
                HSNInfo: new UntypedFormGroup({
                    HSNCode: new UntypedFormControl(null),
                    gstRate: new UntypedFormControl(null),
                    igstRate: new UntypedFormControl(null),
                    sgstRate: new UntypedFormControl(null),
                    cgstRate: new UntypedFormControl(null),
                    ugstRate: new UntypedFormControl(null)
                }),
                jobWorkItem: [null],
                jobWorkItemCode: [null],
                jobWorkItemName: [null],
                jobWorkItemDescription: [null],
                drawingNo: [null],
                HSNCode: [null],
                UOM: [null],
                currency: [null],
                processRatePerUnit: [null],
                discountPercent: [null],
                netRatePerUnit: [null],
                quantity: [null],
                taxableValue: [null],
                deliveryDate: [null]
            }
        ]),
        WOTaxableValue: [null]
    });

    get f() {
        return this.form.controls;
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
            currency: null,
            processRatePerUnit: null,
            discountPercent: null,
            netRatePerUnit: null,
            quantity: null,
            taxableValue: null,
            deliveryDate: null
        });
    }

    addPlace(): void {
        if (["edit", "create"].includes(this.action)) {
            let lastIndex = this.jobWODetails.length - 1;
            let details: any = {};
            if (lastIndex != -1) {
                details = this.jobWODetails[lastIndex];
            } else {
                // addressDetails = this.primaryAddressDetails.value;
            }
            // if (!addressDetails.country) {
            //     this.toastService.warning("Country is required !");
            //     return;
            // }
            // if (!addressDetails.state) {
            //     this.toastService.warning("State/Province is required !");
            //     return;
            // }
            // if (!addressDetails.cityOrDistrict) {
            //     this.toastService.warning("City/District is required !");
            //     return;
            // }
            // if (!addressDetails.pinCode) {
            //     this.toastService.warning("Pin Code is required !");
            //     return;
            // }
            // if (!addressDetails.line1) {
            //     this.toastService.warning("Address Line 1 is required !");
            //     return;
            // }
            // if (!addressDetails.line2) {
            //     this.toastService.warning("Address Line 2 is required !");
            //     return;
            // }
            // if (!addressDetails.line3) {
            //     this.toastService.warning("Address Line 3 is required !");
            //     return;
            // }
            this.newJobWODetails();
            this.active = this.jobWODetails.length - 1;
        }
    }
    setJobWorker(ev: any) {
        this.f["jobWorkerName"].setValue(ev?.jobWorkerName);
        this.f["placeOfSupply"].setValue(ev?.state);
        this.primaryAddress = ev?.primaryAddress;
        this.spinner.show();
        this.jobWorkOrderService.getJWItemsByJobWorker(ev?.jobWorker).subscribe(success => {
            this.spinner.hide();
            this.jobWorkerItemsOptions = success?.JWItemsOptions;
        });
    }
    setServiceInfo(ev: any, index: number) {
        this.jobWODetails[index].jobWorkServiceCode = ev?.serviceCode;
        this.jobWODetails[index].SACInfo.SACCode = ev?.sacCode;
        this.jobWODetails[index].SACInfo.natureOfJobWork = ev?.serviceDescription;
        this.jobWODetails[index].SACInfo.gstRate = ev?.gst;
        this.jobWODetails[index].SACInfo.igstRate = ev?.igst;
        this.jobWODetails[index].SACInfo.sgstRate = ev?.sgst;
        this.jobWODetails[index].SACInfo.cgstRate = ev?.cgst;
        this.jobWODetails[index].SACInfo.ugstRate = ev?.ugst;
        console.log("   this.jobWODetails[index]", this.jobWODetails[index]);
    }
    setJobWorkItemInfo(ev: any, index: number) {
        this.jobWODetails[index].jobWorkItemDescription = ev?.jobWorkItemDescription;
        this.jobWODetails[index].jobWorkItemCode = ev?.jobWorkItemCode;
        this.jobWODetails[index].jobWorkItemName = ev?.jobWorkItemName;
    }
    removePlace(i: number) {
        if (["edit", "create"].includes(this.action)) {
            this.jobWODetails.splice(i, 1);
            if (i == this.active) {
                this.active = this.jobWODetails.length - 1;
            }
        }
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, JOB_WORKER_FORM_ERRORS)) {
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
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openAddressModal() {
        const modalRef = this.modalService.open(JobWorkOrderAddressModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.primaryAddress = this.primaryAddress;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                }
            },
            (reason: any) => {}
        );
    }
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
            modalRef.componentInstance.bodyList = this.jobWorkerItemsOptions;
            modalRef.componentInstance._id = this.form.controls["jobWorker"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetails = success?.selectedDetails;
                        this.form.controls["jobWorker"].setValue(success?.selectedDetails?.jobWorker);
                        // this.getJobWorkerDetails(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openJobWorkServiceMasterDetailsModal() {
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
            modalRef.componentInstance._id = this.form.controls["jobWorkService"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        console.log("success", success);
                        console.log("selectedDetailsForServiceJWO", this.selectedDetailsForServiceJWO);
                        this.selectedDetailsForServiceJWO = success?.selectedDetails;
                        this.form.controls["jobWorkService"].setValue(success?.selectedDetails?._id);
                        // this.setPartDetails(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openJobWorkItemDetailsModal() {
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
            // modalRef.componentInstance.bodyList = this.JWItemsOptions;
            modalRef.componentInstance._id = this.form.controls["jobWorkItem"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetailsOfJobCardItem = success?.selectedDetails;
                        this.form.controls["jobWorkItem"].setValue(success?.selectedDetails?._id);
                        // this.setPartDetails(success?.selectedDetails);
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
        // modalRef.componentInstance.SOTermsArr = {
        //     transporterArr: this.masterData?.transporterOptions,
        //     freightTerms: this.masterData?.freightTermsOptions,
        //     modeOfTransport: this.masterData?.modeOfTransportOptions,
        //     paymentTermsArr: this.masterData?.paymentTermsOptions
        // };
        modalRef.componentInstance.SOTermsData = {
            paymentTerms: this.form.controls["paymentTerms"].value,
            modeOfTransport: this.form.controls["modeOfTransport"].value,
            frightTerms: this.form.controls["frightTerms"].value,
            transporter: this.form.controls["transporter"].value,
            destination: this.form.controls["destination"].value
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
}
