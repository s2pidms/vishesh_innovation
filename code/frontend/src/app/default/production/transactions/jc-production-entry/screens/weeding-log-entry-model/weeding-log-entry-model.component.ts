import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {WeedingLogService} from "@services/production/weedingLog.service";
@Component({
    selector: "app-weeding-log-entry-model",
    templateUrl: "./weeding-log-entry-model.component.html"
})
export class WeedingLogEntryModelComponent implements OnInit {
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
        private weedingLogService: WeedingLogService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.jobCardDetails);
        this.getInitialData();

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
        this.weedingLogService.createOrUpdate(formData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.weedingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            if (result.weedingLog) {
                if (result?.weedingLog?.logEntry?.prodDate) {
                    result.weedingLog.logEntry.prodDate = this.utilityService.getFormatDate(
                        result?.weedingLog?.logEntry?.prodDate,
                        "YYYY-MM-DD"
                    );
                }
                this.form.patchValue(result.weedingLog);
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
