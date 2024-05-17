import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
@Component({
    selector: "app-family-info",
    templateUrl: "./family-info.component.html"
})
export class FamilyInfoComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() formData: any = {};
    @Output() saveData = new EventEmitter<any>();

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}
    form = new UntypedFormGroup({
        empFatherFullName: new UntypedFormControl(null),
        empFatherDOB: new UntypedFormControl(""),
        empFatherOccupation: new UntypedFormControl(null),
        empMotherFullName: new UntypedFormControl(null),
        empMotherDOB: new UntypedFormControl(""),
        empMotherOccupation: new UntypedFormControl(null),
        empSpouseFullName: new UntypedFormControl(null),
        empSpouseDOB: new UntypedFormControl(""),
        empSpouseOccupation: new UntypedFormControl(null),
        noOfDependentChildren: new UntypedFormControl(null),
        fullNameOfDependentChild1: new UntypedFormControl(null),
        fullNameOfDependentChild2: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.form.patchValue(this.formData);
        if (this.action == "view") {
            this.form.disable();
        }
    }
    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.formData);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "familyInfo"});
        this.toastService.success("Family Info Saved");
    }
}
