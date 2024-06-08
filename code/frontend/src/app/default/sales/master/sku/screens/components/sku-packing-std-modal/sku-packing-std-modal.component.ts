import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-sku-packing-std-modal",
    templateUrl: "./sku-packing-std-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class SKUPackingStdModalComponent implements OnInit {
    @Input() packingStdAttribute = {};
    @Input() packingStdDetails = {};
    @Input() action: string = "edit";
    @Output() saveData = new EventEmitter<any>();

    form: any = new UntypedFormGroup({
        primaryPacking: new UntypedFormControl(null),
        secondaryPacking: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.packingStdAttribute);
    }
    reset() {
        this.form.patchValue(JSON.parse(JSON.stringify(this.packingStdAttribute)));
    }

    dismissModel() {
        this.saveData.emit({
            data: this.form.value,
            key: "packingStdAttribute"
        });
        this.toastService.success("Packing Std Info Saved");
    }
}
