import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
@Component({
    selector: "app-bank-details",
    templateUrl: "./bank-details.component.html"
})
export class BankDetailsComponent implements OnInit {
    @Input() action: any = "";
    @Input() formData: any = {};
    @Output() saveData = new EventEmitter<any>();

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}
    form = new UntypedFormGroup({
        empBankName: new UntypedFormControl(null),
        empBefName: new UntypedFormControl(null),
        empBankBranch: new UntypedFormControl(null),
        empAccType: new UntypedFormControl(null),
        empAccountNumber: new UntypedFormControl(null),
        empBankIFSCCode: new UntypedFormControl(null)
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
        this.saveData.emit({data: this.form.value, key: "bankDetailInfo"});
        this.toastService.success("Bank Details Saved");
    }
}
