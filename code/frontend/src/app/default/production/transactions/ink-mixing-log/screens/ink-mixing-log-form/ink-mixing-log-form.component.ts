import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {IGIPPICToProductionMasterData} from "@mocks/models/planning/transactions";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";
import {InkMixingService} from "@services/production";
import {ScreenMakingLogEntryComponent} from "../../../jc-production-entry/screens/screen-making/screen-making-log-entry/screen-making-log-entry.component";
import {InkMixingLogBatchComponent} from "../../../jc-production-entry/screens/ink-mixing-log/ink-mixing-log-batch/ink-mixing-log-batch.component";

@Component({
    selector: "app-ink-mixing-log-form",
    templateUrl: "./ink-mixing-log-form.component.html"
})
export class InkMixingLogFormComponent implements OnInit {
    itemCodes: any = [];
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "Awaiting Approval";
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    ESCPreviewArr: any = [];
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected",
        Acknowledged: "Acknowledged"
    };
    selectedJobCardDetails: any = {};
    masterData: IGIPPICToProductionMasterData = {
        autoIncrementNo: "",
        mergeList: [],
        goodsIssueToOptions: [],
        JCOptions: []
    };

    constructor(
        private inkMixingService: InkMixingService,
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
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        goodsIssueNo: new UntypedFormControl(null, [Validators.required]),
        goodsIssueDate: new UntypedFormControl([Validators.required]),
        goodsIssueTo: new UntypedFormControl(null, [Validators.required]),
        jobCard: new UntypedFormControl(null, [Validators.required]),
        jobCardNo: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("Awaiting Approval"),
        rejectionRemarks: new UntypedFormControl(null),
        MRNDetails: new UntypedFormControl([]),
        PPICRemarksDetail: new UntypedFormControl({}),
        QARemarksDetail: new UntypedFormControl({})
    });

    get f() {
        return this.form.controls;
    }

    get PPICRemarks() {
        return this.form.get("PPICRemarksDetail") as UntypedFormGroup;
    }
    get QARemarks() {
        return this.form.get("QARemarksDetail") as UntypedFormGroup;
    }

    ngOnInit(): void {
        // this.getInitialData();
    }
    reset() {
        // get initial data
        this.form.reset();
        this.masterData.mergeList = [];
        this.collection = this.masterData.mergeList.length;
        this.getInitialData();
        this.isESCPreview = false;
    }

    submit() {
        // this.submitted = true;
        // this.form.enable();
        // if (this.action == "reject" && !this.form.controls["rejectionRemarks"].value) {
        //     this.toastService.warning("Rejection Remarks is Required");
        //     return;
        // }
        // if (this.validationService.checkErrors(this.form, GI_PPIC_TO_PRODUCTION_FORM_ERRORS)) {
        //     return;
        // }
        // let formData: any = this.form.value;
        // formData.MRNDetails = this.masterData.mergeList;
        // if (formData._id) {
        //     this.update(formData);
        // } else {
        //     delete formData._id;
        //     this.create(formData);
        // }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    create(formData: any) {
        this.spinner.show();
        this.inkMixingService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.inkMixingService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.inkMixingService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.collection = this.masterData.mergeList.length;
            // set  dropdowns array
            // this.roles = result.roles;
            this.form.controls["goodsIssueNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Awaiting Approval");
            this.form.controls["goodsIssueDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        if (params["id"]) {
                            // get patch data
                            return this.inkMixingService.getById(params["id"]);
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
                    if (success.goodsIssueDate) {
                        success.goodsIssueDate = success.goodsIssueDate.split("T")[0];
                    }
                    // create form object by modifying
                    this.masterData.mergeList = success.MRNDetails;
                    this.collection = this.masterData.mergeList.length;
                    success.status = this.statusArr[this.action];
                    // patch all forms fields
                    this.form.patchValue(success);
                    // disable form if action is not 'Edit'
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    if (this.action == "reject") {
                        this.form.disable();
                        this.form.controls["rejectionRemarks"].enable();
                    }
                });
        });
    }

    changeGIQty(data: any) {
        // index = index + (this.page - 1) * this.pageSize;
        let index = this.masterData.mergeList.map((x: any) => x.WIP).indexOf(data.WIP);
        if (data.issueQty > data.PPICQty) {
            this.toastService.warning(`Goods Issues Qty should not be grater than PPIC Qty!`);
            this.masterData.mergeList[index].issueQty = 0;
            return;
        }
    }

    setConversionOfUnit(item: any) {
        if (["create", "edit"].includes(this.action)) {
            let index = this.masterData.mergeList.map((x: any) => x?.WIP + x?.SFG).indexOf(item?.WIP + item?.SFG);

            if (this.masterData.mergeList[index].UOM == item.secondaryUnit) {
                this.masterData.mergeList[index].UOM = item.primaryUnit;
                if (item.primaryToSecondaryConversion) {
                    this.masterData.mergeList[index].PPICQty = +item.PPICQty / +item.primaryToSecondaryConversion;
                }
                if (item.secondaryToPrimaryConversion) {
                    this.masterData.mergeList[index].PPICQty = +item.PPICQty * +item.secondaryToPrimaryConversion;
                }
                this.masterData.mergeList[index].issueQty = 0;
                this.isPreview = false;
            } else {
                this.masterData.mergeList[index].UOM = item.secondaryUnit;
                if (item.primaryToSecondaryConversion) {
                    this.masterData.mergeList[index].PPICQty = +item.PPICQty * +item.primaryToSecondaryConversion;
                }
                if (item.secondaryToPrimaryConversion) {
                    this.masterData.mergeList[index].PPICQty = +item.PPICQty / +item.secondaryToPrimaryConversion;
                }
                this.masterData.mergeList[index].issueQty = 0;
                this.isPreview = false;
            }

            // console.log(
            //     "=======",
            //     this.utilityService.setConversion({
            //         UOM: this.masterData.mergeList[index].UOM,
            //         quantity: item.PPICQty,
            //         primaryUnit: item.primaryUnit,
            //         secondaryUnit: item.secondaryUnit,
            //         primaryToSecondaryConversion: item.primaryToSecondaryConversion,
            //         secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
            //     })
            // );

            // let PPICQuantity =
            //     this.utilityService.setConversion({
            //         UOM: this.masterData.mergeList[index].UOM,
            //         quantity: item.PPICQty,
            //         primaryUnit: item.primaryUnit,
            //         secondaryUnit: item.secondaryUnit,
            //         primaryToSecondaryConversion: item.primaryToSecondaryConversion,
            //         secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
            //     }) || 0;
            // this.masterData.mergeList[index].PPICQty = PPICQuantity;
            // this.masterData.mergeList[index].issueQty = 0;
            // this.isPreview = false;
        }
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.masterData.mergeList;
        this.masterData.mergeList = this.masterData.mergeList.filter((x: any) => x.issueQty > 0);
        if (this.masterData.mergeList.length == 0) {
            this.toastService.warning(`At least One Row is Required!`);
        } else {
            this.isPreview = true;
        }
        this.collection = this.masterData.mergeList.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.masterData.mergeList = this.ESCPreviewArr;
        this.collection = this.masterData.mergeList.length;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;

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

    setJobCardId(item: any) {
        this.f["jobCard"].setValue(item?._id);
    }
    openJobCardDetailsModal() {
        const modalRef = this.modalService.open(JobCardDetailsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
        modalRef.componentInstance.selectedJobCardDetails = this.selectedJobCardDetails;
        modalRef.componentInstance.JCOptions = this.masterData.JCOptions;
        modalRef.componentInstance.jobCard = this.form.controls["jobCard"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedJobCardDetails = success?.selectedJobCardDetails;
                    this.form.controls["jobCard"].setValue(success?.selectedJobCardDetails?._id);
                    this.form.controls["jobCardNo"].setValue(success?.selectedJobCardDetails?.jobCardNo);
                }
            },
            (reason: any) => {}
        );
    }

    openLogEntryModal() {
        const modalRef = this.modalService.open(ScreenMakingLogEntryComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        // modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
        // modalRef.componentInstance.remarksDetails = {
        //     remarks: this.inkMixingDetails[this.inkPage - 1].remarks,
        //     labValues: this.inkMixingDetails[this.inkPage - 1].labValues
        // };
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    // this.inkMixingDetails[this.inkPage - 1].remarks = success?.remarks;
                    // this.inkMixingDetails[this.inkPage - 1].labValues = success?.labValues;
                }
            },
            (reason: any) => {}
        );
    }
    openBatchModal() {
        // let index: number = this.PDIRDetailsArr.map((x: any) => x.PDILineNumber).indexOf(item.PDILineNumber);

        const modalRef = this.modalService.open(InkMixingLogBatchComponent, {
            centered: true,
            windowClass: "modelPage",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        // modalRef.componentInstance.data = item;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    // this.PDIRDetailsArr[index].PDIEntryDetails = success.GRDetailsArray;
                }
            },
            (reason: any) => {}
        );
    }
}
