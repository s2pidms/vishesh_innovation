import {Component, OnInit, Output, EventEmitter, ElementRef} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {SpinnerService, StorageService, ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {NPD_ENTRY_FORM_ERRORS} from "@mocks/validations/business-leads";
import {NPDReviewService} from "@services/business-leads";
import {INPDReviewForFeasibilityMasterData} from "@mocks/models/business-leads/transactions";
import {ViewNpdRequestDetailsComponent} from "src/app/default/business-leads/transactions/npd-request/screens/view-npd-request-details/view-npd-request-details.component";
import {NPDDetailsModalComponent} from "src/app/default/business-leads/transactions/npd-review-feasibility/screens/components/npd-details-modal/npd-details-modal.component";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";

@Component({
    selector: "app-npd-review-feasibility-print-screen",
    templateUrl: "./npd-review-feasibility-print-screen.component.html",
    styleUrls: ["./npd-review-feasibility-print-screen.component.scss"]
})
export class NPDReviewFeasibilityPrintScreenComponent implements OnInit {
    @Output() newItem: EventEmitter<any> = new EventEmitter();
    buttonCondition: any = "true";
    pdfAction: any = "";
    customerInputs: any = [];
    customerInputsObj: any = {
        _id: null,
        status: null,
        reviewNo: 1,
        reviewDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        reviewBy: null,
        reviewOutput: null,
        technicalReview: []
    };
    technical: any = [];
    technicalObj: any = {
        _id: null,
        status: null,
        reviewNo: 1,
        reviewDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        reviewBy: null,
        reviewOutput: null,
        technicalReview: []
    };
    selectedNPDDetails: any = {};
    economic: any = [];
    economicObj: any = {
        _id: null,
        status: null,
        reviewNo: 1,
        reviewDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        reviewBy: null,
        reviewOutput: null,
        technicalReview: []
    };
    legal: any = [];
    legalObj: any = {
        _id: null,
        status: null,
        reviewNo: 1,
        reviewDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        reviewBy: null,
        reviewOutput: null,
        technicalReview: []
    };
    operational: any = [];
    operationalObj: any = {
        _id: null,
        status: null,
        reviewNo: 1,
        reviewDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        reviewBy: null,
        reviewOutput: null,
        technicalReview: []
    };
    scheduling: any = [];
    schedulingObj: any = {
        _id: null,
        status: null,
        reviewNo: 1,
        reviewDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        reviewBy: null,
        reviewOutput: null,
        technicalReview: []
    };

    tableData: any;
    active: number = 1;
    action: string = "create";
    heading: string = "Customer Inputs";
    submitted = false;
    aDisabled: boolean = true;
    masterData: INPDReviewForFeasibilityMasterData = {
        autoIncrementNo: "",
        NPDOptions: [],
        technicalQuestionnaire: []
    };
    statusArr = NPD_STATUS_LIST;
    constructor(
        private npdReviewService: NPDReviewService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private storageService: StorageService,
        private utilityService: UtilityService,
        private elementRef: ElementRef
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        NPDReviewNo: new UntypedFormControl(""),
        NPD: new UntypedFormControl("", [Validators.required]),
        NPDNo: new UntypedFormControl(""),
        projectName: new UntypedFormControl({value: "", disabled: true}),
        NPDDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        name: new UntypedFormControl(""),
        productCategory: new UntypedFormControl(null),
        expectedDeliveryDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        status: new UntypedFormControl(null),
        reasonToConvert: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    windowPrint() {
        window.print();
    }
    navigateTo(path: string) {
        this.router.navigate([path], {
            queryParams: {id: this.form.controls["NPD"].value, action: "view"}
        });
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.getInitialData();
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }

    setHeading(heading: any) {
        this.heading = heading;
    }

    submit(title: any) {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, NPD_ENTRY_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (title == "customerInputs") {
            formData.customerInputs = this.customerInputs;
            delete formData.technicalReview;
            delete formData.economicReview;
            delete formData.legalReview;
            delete formData.operationalReview;
            delete formData.schedulingReview;
        }
        if (title == "technical") {
            formData.technicalReview = this.technical;
            delete formData.customerInputs;
            delete formData.economicReview;
            delete formData.legalReview;
            delete formData.operationalReview;
            delete formData.schedulingReview;
        }
        if (title == "economic") {
            formData.economicReview = this.economic;
            delete formData.customerInputs;
            delete formData.technicalReview;
            delete formData.legalReview;
            delete formData.operationalReview;
            delete formData.schedulingReview;
        }
        if (title == "legal") {
            formData.legalReview = this.legal;
            delete formData.customerInputs;
            delete formData.technicalReview;
            delete formData.economicReview;
            delete formData.operationalReview;
            delete formData.schedulingReview;
        }
        if (title == "operational") {
            formData.operationalReview = this.operational;
            delete formData.customerInputs;
            delete formData.technicalReview;
            delete formData.economicReview;
            delete formData.legalReview;
            delete formData.schedulingReview;
        }
        if (title == "scheduling") {
            formData.schedulingReview = this.scheduling;
            delete formData.customerInputs;
            delete formData.technicalReview;
            delete formData.economicReview;
            delete formData.legalReview;
            delete formData.operationalReview;
        }

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        formData.status = formData.customerInputs[0]?.status;
        this.npdReviewService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/business-leads/transactions/npd_review_feasibility/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.npdReviewService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/business-leads/transactions/npd_review_feasibility/list"]);
        });
    }

    openViewNPDRequestModal() {
        if (this.form.controls["NPD"].value) {
            const modalRef = this.modalService.open(ViewNpdRequestDetailsComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.NPDId = this.form.value.NPD;
            modalRef.result.then(
                (success: any) => {},
                (reason: any) => {}
            );
        }
    }
    getInitialData() {
        this.spinner.show();
        this.npdReviewService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["NPDNo"].setValue(this.masterData?.autoIncrementNo);

            this.customerInputsObj.technicalReview = result?.technicalQuestionnaire
                .find((x: any) => x._id == "Customer Inputs")
                ?.data.map((x: any) => {
                    x.isChecked = false;
                    x.remarks = null;
                    return x;
                });
            this.technicalObj.technicalReview = result?.technicalQuestionnaire
                .find((x: any) => x._id == "Technical")
                ?.data.map((x: any) => {
                    x.isChecked = false;
                    x.remarks = null;
                    return x;
                });
            this.economicObj.technicalReview = result?.technicalQuestionnaire
                .find((x: any) => x._id == "Economic")
                ?.data.map((x: any) => {
                    x.isChecked = false;
                    x.remarks = null;
                    return x;
                });
            this.legalObj.technicalReview = result?.technicalQuestionnaire
                .find((x: any) => x._id == "Legal")
                ?.data.map((x: any) => {
                    x.isChecked = false;
                    x.remarks = null;
                    return x;
                });
            this.operationalObj.technicalReview = result?.technicalQuestionnaire
                .find((x: any) => x._id == "Operational")
                ?.data.map((x: any) => {
                    x.isChecked = false;
                    x.remarks = null;
                    return x;
                });
            this.schedulingObj.technicalReview = result?.technicalQuestionnaire
                .find((x: any) => x._id == "Scheduling")
                ?.data.map((x: any) => {
                    x.isChecked = false;
                    x.remarks = null;
                    return x;
                });
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.pdfAction = params.pdfAction;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.npdReviewService.getById(params["id"]);
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
                    if (success.NPDDate) {
                        success.NPDDate = this.utilityService.getFormatDate(success.NPDDate, "YYYY-MM-DD");
                    }
                    if (success.customerInputs.length > 0) {
                        this.customerInputs = [...this.formatDate(success.customerInputs)];
                        this.customerInputsObj = JSON.parse(JSON.stringify(this.customerInputs.slice(-1)[0]));
                        this.customerInputsObj.technicalReview = this.customerInputsObj.technicalReview.sort(
                            (a: any, b: any) => a.orderNo - b.orderNo
                        );

                        if (this.customerInputsObj.status == "Feasible") {
                            this.aDisabled = false;
                        }
                        this.customerInputsObj.reviewNo = +this.customerInputsObj.reviewNo + 1;
                    }
                    if (success.technicalReview.length > 0) {
                        this.technical = [...this.formatDate(success.technicalReview)];
                        this.technicalObj = JSON.parse(JSON.stringify(this.technical.slice(-1)[0]));
                        this.technicalObj.technicalReview = this.technicalObj.technicalReview.sort(
                            (a: any, b: any) => a.orderNo - b.orderNo
                        );
                        this.technicalObj.reviewNo = +this.technicalObj.reviewNo + 1;
                    }
                    if (success.economicReview.length > 0) {
                        this.economic = this.formatDate(success.economicReview);
                        this.economicObj = JSON.parse(JSON.stringify(this.economic.slice(-1)[0]));
                        this.economicObj.technicalReview = this.economicObj.technicalReview.sort(
                            (a: any, b: any) => a.orderNo - b.orderNo
                        );
                        this.economicObj.reviewNo = +this.economicObj.reviewNo + 1;
                    }
                    if (success.legalReview.length > 0) {
                        this.legal = [...this.formatDate(success.legalReview)];
                        this.legalObj = JSON.parse(JSON.stringify(this.legal.slice(-1)[0]));
                        this.legalObj.technicalReview = this.legalObj.technicalReview.sort(
                            (a: any, b: any) => a.orderNo - b.orderNo
                        );
                        this.legalObj.reviewNo = +this.legalObj.reviewNo + 1;
                    }
                    if (success.operationalReview.length > 0) {
                        this.operational = [...this.formatDate(success.operationalReview)];
                        this.operationalObj = JSON.parse(JSON.stringify(this.operational.slice(-1)[0]));
                        this.operationalObj.technicalReview = this.operationalObj.technicalReview.sort(
                            (a: any, b: any) => a.orderNo - b.orderNo
                        );
                        this.operationalObj.reviewNo = +this.operationalObj.reviewNo + 1;
                    }
                    if (success.schedulingReview.length > 0) {
                        this.scheduling = [...this.formatDate(success.schedulingReview)];
                        this.schedulingObj = JSON.parse(JSON.stringify(this.scheduling.slice(-1)[0]));
                        this.schedulingObj.technicalReview = this.schedulingObj.technicalReview.sort(
                            (a: any, b: any) => a.orderNo - b.orderNo
                        );
                        this.schedulingObj.reviewNo = +this.schedulingObj.reviewNo + 1;
                    }

                    if (success.NPD) {
                        this.masterData.NPDOptions = [success.NPD];
                        success.NPD = success.NPD._id;
                    }

                    this.form.patchValue(success);

                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }
    setReference(ev: any) {
        this.form.controls["NPDNo"].setValue(ev?.NPDNo);
        this.form.controls["NPDDate"].setValue(this.utilityService.getFormatDate(ev?.NPDDate, "YYYY-MM-DD"));
        this.form.controls["name"].setValue(ev?.name);
        this.form.controls["projectName"].setValue(ev?.projectName);

        this.form.controls["productCategory"].setValue(ev?.productCategory);
    }

    saveData(value: any) {
        if (value.key == "customerInputs") {
            this.customerInputs = value.data;
        }
        if (value.key == "technical") {
            this.technical = value.data;
        }
        if (value.key == "economic") {
            this.economic = value.data;
        }
        if (value.key == "legal") {
            this.legal = value.data;
        }
        if (value.key == "operational") {
            this.operational = value.data;
        }
        if (value.key == "scheduling") {
            this.scheduling = value.data;
        }

        this.submit(value.key);
    }
    formatDate(data: any) {
        data.map((x: any) => {
            x.reviewDate = x.reviewDate ? this.utilityService.getFormatDate(x.reviewDate, "YYYY-MM-DD") : "";
            return x;
        });
        return data;
    }

    openNPDDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(NPDDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.selectedNPDDetails = this.selectedNPDDetails;
            modalRef.componentInstance.JCOptions = this.masterData.NPDOptions;
            modalRef.componentInstance.NPD = this.form.controls["NPD"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedNPDDetails = success?.selectedNPDDetails;
                        this.form.controls["NPD"].setValue(success?.selectedNPDDetails?._id);
                        this.setReference(success?.selectedNPDDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
}
