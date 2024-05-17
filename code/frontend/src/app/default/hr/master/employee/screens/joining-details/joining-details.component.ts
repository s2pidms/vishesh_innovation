import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {EMPLOYEE_FORM_ERRORS} from "@mocks/validations/hr";
@Component({
    selector: "app-joining-details",
    templateUrl: "./joining-details.component.html"
})
export class JoiningDetailsComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() joiningDetailsInfo: any = {};
    @Input() masterData: any = {};

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}
    form = new UntypedFormGroup({
        empJoiningDate: new UntypedFormControl(null, [Validators.required]),
        empJoiningLocation: new UntypedFormControl(null),
        empCadre: new UntypedFormControl(null),
        empDesignation: new UntypedFormControl(null, [Validators.required]),
        empDepartment: new UntypedFormControl(null, [Validators.required]),
        empReportTo: new UntypedFormControl(null),
        empType: new UntypedFormControl(null),
        empGrade: new UntypedFormControl(null),
        empOTApplicability: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.form.patchValue(this.joiningDetailsInfo);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.joiningDetailsInfo);
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, EMPLOYEE_FORM_ERRORS)) {
            return;
        }
        this.joiningDetailsInfo = this.form.value;
        this.activeModal.close(this.joiningDetailsInfo);
        this.toastService.success("Joining Details Saved");
    }
}
