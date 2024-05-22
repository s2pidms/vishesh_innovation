import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-screen-making-log-entry",
    templateUrl: "./screen-making-log-entry.component.html"
})
export class ScreenMakingLogEntryComponent implements OnInit {
    @Input() logDetails: any = {};
    @Input() action: any = "";
    @Input() sourceOfManufacturing: any = "";
    @Input() shiftOptions: any = [];
    form: any = new UntypedFormGroup({
        prodSource: new UntypedFormControl(null),
        prodShift: new UntypedFormControl(null),
        prodDate: new UntypedFormControl(null),
        operatingStaff: new UntypedFormControl(null),
        remarks: new UntypedFormControl(null),
        authorizedBy: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}

    ngOnInit(): void {

        if (this.logDetails?.prodDate) {
            this.logDetails.prodDate = this.utilityService.getFormatDate(this.logDetails?.prodDate, "YYYY-MM-DD");
        }
        this.form.patchValue(this.logDetails);
        if (["view", "approve", "reject"].includes(this.action)) {
            this.form.disable();
        }

        if (!this.f["prodSource"].value) {
            this.f["prodSource"].setValue(this.sourceOfManufacturing ?? "Inhouse");
        }
    }
    dismissModel() {
        // if (this.validationService.checkErrors(this.form, BOM_OF_DOCUMENTS_DETAILS_FORM_ERRORS)) {
        //     return;
        // }
        let formData = this.form.value;
        this.activeModal.close(formData);
    }
}
