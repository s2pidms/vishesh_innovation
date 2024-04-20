import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-sku-specs-modal",
    templateUrl: "./sku-specs-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class SKUSpecsModalComponent implements OnInit {
    @Input() specsAttribute = {};
    @Input() shoulderTypeOptions: any = [];
    @Input() action: string = "edit";
    @Output() saveData = new EventEmitter<any>();

    form: any = new UntypedFormGroup({
        diameter: new UntypedFormControl(null),
        finish: new UntypedFormControl(null),
        threadType: new UntypedFormControl(null),
        weight: new UntypedFormControl(null),
        height: new UntypedFormControl(null),
        shoulderType: new UntypedFormControl(null),
        orifice: new UntypedFormControl(null),
        placeHolder: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.specsAttribute);
        this.form.disable();
    }
    reset() {
        this.form.patchValue(JSON.parse(JSON.stringify(this.specsAttribute)));
    }

    dismissModel() {
        this.saveData.emit({
            data: this.form.getRawValue,
            key: "specsAttribute"
        });
        this.toastService.success("Specs Saved");
    }
}
