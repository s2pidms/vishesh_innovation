import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PunchingLogService} from "@services/production/punchingLog.service";

@Component({
    selector: "app-punching-log-entry-model",
    templateUrl: "./punching-log-entry-model.component.html"
})
export class PunchingLogEntryModelComponent implements OnInit {
    @Input() logDetails: any = {};
    @Input() selectedDetails: any = {};
    @Input() jobCardDetails: any = {};
    @Input() action: any = "";
    @Input() sourceOfManufacturing: any = "";
    @Input() shiftOptions: any = [];
    form: any = new UntypedFormGroup({
        jobCard: new UntypedFormControl(null),
        jobCardNo: new UntypedFormControl(null),
        SKU: new UntypedFormControl(null),
        SKUStage: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        SKUBatchQty: new UntypedFormControl(null),
        logEntry: new UntypedFormGroup({
            prodSource: new UntypedFormControl(null),
            prodShift: new UntypedFormControl(null),
            prodDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
            operatingStaff: new UntypedFormControl(null),
            remarks: new UntypedFormControl(null),
            authorizedBy: new UntypedFormControl(null)
        })
    });

    get f() {
        return this.form.controls;
    }
    get logEntry() {
        return this.form.get("logEntry") as FormGroup;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private punchingLogService: PunchingLogService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.jobCardDetails);
        this.getInitialData();
        if (["view"].includes(this.action)) {
            this.form.disable();
        }
        if (!this.logEntry.controls["prodSource"].value) {
            this.logEntry.controls["prodSource"].setValue(this.sourceOfManufacturing ?? "Inhouse");
        }
    }
    submit() {
        let formData = this.form.value;
        console.log("formData", formData);
        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        this.punchingLogService.createOrUpdate(formData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.punchingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            if (result.throughPunchingLog) {
                if (result?.throughPunchingLog?.logEntry?.prodDate) {
                    result.throughPunchingLog.logEntry.prodDate = this.utilityService.getFormatDate(
                        result?.throughPunchingLog?.logEntry?.prodDate,
                        "YYYY-MM-DD"
                    );
                }
                this.form.patchValue(result.throughPunchingLog);
            }
            this.shiftOptions = result.shiftOptions;
            this.spinner.hide();
        });
    }

    dismissModel() {
        let formData = this.form.value;
        this.activeModal.close(formData);
    }
}
