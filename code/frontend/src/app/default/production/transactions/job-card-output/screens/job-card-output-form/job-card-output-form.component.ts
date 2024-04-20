import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {JobCardOutputDetailsComponent} from "../job-card-output-details/job-card-output-details.component";
import {JobCardOutputService} from "@services/production";
import {IJobCardOutputMasterData} from "@mocks/models/production/masters";
import {JOB_CARD_OUTPUT_FORM_ERRORS} from "@mocks/validations/production";

@Component({
    selector: "app-job-card-output-form",
    templateUrl: "./job-card-output-form.component.html"
})
export class JobCardOutputFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: IJobCardOutputMasterData = {
        autoIncrementNo: "",
        jobCardDetails: [],
        location: []
    };
    outputDetailsList: any = [
        {
            inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            UOM: "",
            outputQty: 0,
            inspectedBy: "",
            QCApprovedBy: ""
        }
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private jobCardOutputService: JobCardOutputService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        jobCardOutputNo: new UntypedFormControl(null),
        jobCard: new UntypedFormControl(null, [Validators.required]),
        jobCardNo: new UntypedFormControl(null),
        SKU: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        batchDate: new UntypedFormControl(null),
        approvedDate: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        batchInputQty: new UntypedFormControl(null),
        batchOutputQty: new UntypedFormControl(null, [Validators.required]),
        outputDetails: new UntypedFormControl([]),
        cumulativeCount: new UntypedFormControl(null),
        location: new UntypedFormControl(null),
        manufacturingDate: new UntypedFormControl(null),
        batchNumber: new UntypedFormControl(null),
        status: new UntypedFormControl("In-Process")
    });

    get f() {
        return this.form.controls;
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
        if (this.validationService.checkErrors(this.form, JOB_CARD_OUTPUT_FORM_ERRORS)) {
            return;
        }

        if (+this.f["batchOutputQty"].value > +this.f["batchInputQty"].value) {
            this.toastService.warning("Batch output qty can’t be more than Batch Input qty");
            this.f["batchOutputQty"].setValue(null);
            return;
        }

        if (this.action == "approve") {
            this.f["status"].setValue("Approved");
        }
        this.form.enable();
        let formData: any = this.form.value;
        formData.outputDetails = this.outputDetailsList;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.jobCardOutputService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.jobCardOutputService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.jobCardOutputService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["status"].setValue("In-Process");
            this.form.controls["jobCardOutputNo"].setValue(this.masterData.autoIncrementNo);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.jobCardOutputService.getById(params["id"]);
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

                    if (success.batchDate) {
                        success.batchDate = this.utilityService.getFormatDate(success.batchDate, "YYYY-MM-DD");
                    }

                    if (success.outputDetails) {
                        this.outputDetailsList = success.outputDetails.map((x: any) => {
                            x.inspectionDate = this.utilityService.getFormatDate(x.inspectionDate, "YYYY-MM-DD");
                            return x;
                        });
                    }
                    this.form.patchValue(success);
                    this.f["jobCard"].disable();
                    if (["view", "approve"].includes(this.action)) {
                        this.form.disable();
                    }
                });
        });
    }

    setJobCardDetails(item: any) {
        this.f["jobCard"].setValue(item?._id);
        this.f["jobCardNo"].setValue(item?.jobCardNo);
        this.spinner.show();
        this.jobCardOutputService.getJCDetailsByJCId(item?._id).subscribe(success => {
            this.spinner.hide();
            this.form.patchValue(success);
            this.outputDetailsList.map((x: any) => {
                x.UOM = success?.UOM;
                return x;
            });
        });
    }

    openOutputDetailsModal() {
        const modalRef = this.modalService.open(JobCardOutputDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.locationOptions = this.masterData.location;
        modalRef.componentInstance.outputDetailsList = this.outputDetailsList;
        modalRef.componentInstance.UOM = this.f["UOM"].value;
        modalRef.componentInstance.cumulativeCount = this.f["cumulativeCount"].value;
        modalRef.componentInstance.location = this.f["location"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.f["location"].setValue(success?.location);
                    this.f["batchOutputQty"].setValue(success?.cumulativeCount);
                    this.f["cumulativeCount"].setValue(success?.cumulativeCount);
                    this.outputDetailsList = success?.outputDetailsList;

                    if (+this.f["batchOutputQty"].value > +this.f["batchInputQty"].value) {
                        this.toastService.warning("Batch output qty can’t be more than Batch Input qty");
                        this.f["batchOutputQty"].setValue(null);
                    }
                }
            },
            (reason: any) => {}
        );
    }
}
