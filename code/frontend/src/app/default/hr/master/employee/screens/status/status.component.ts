import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
@Component({
    selector: "app-status",
    templateUrl: "./status.component.html"
})
export class StatusComponent implements OnInit {
    @Input() action: any = "";
    @Input() formData: any = {};
    @Output() saveData = new EventEmitter<any>();

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}
    form = new UntypedFormGroup({
        empStatus: new UntypedFormControl("A"),
        reasonOfLeaving: new UntypedFormControl(""),
        empDateOfResignation: new UntypedFormControl("")
    });

    ngOnInit(): void {
        this.form.patchValue(this.formData);
    }
    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.formData);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "status"});
        this.toastService.success("Status Saved");
    }
}
