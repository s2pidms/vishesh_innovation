import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
@Component({
    selector: "app-address-info",
    templateUrl: "./address-info.component.html"
})
export class AddressInfoComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() formData: any = {};
    @Output() saveData = new EventEmitter<any>();

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
        empPermanentAddress: new UntypedFormGroup({
            _id: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            city: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            country: new UntypedFormControl(null)
        }),
        empPresentAddress: new UntypedFormGroup({
            _id: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            city: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            country: new UntypedFormControl(null)
        })
    });

    statesOfIndia = STATES_LIST;
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
        this.saveData.emit({data: this.form.value, key: "addressInfo"});
        this.toastService.success("Address Details Saved");
    }
    copyAddress() {
        this.f["empPresentAddress"].setValue(this.f["empPermanentAddress"].value);
    }
}
