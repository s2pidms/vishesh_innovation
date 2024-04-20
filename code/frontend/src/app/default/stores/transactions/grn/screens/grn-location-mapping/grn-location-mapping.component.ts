import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-grn-location-mapping",
    templateUrl: "./grn-location-mapping.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class GrnLocationMappingComponent implements OnInit {
    @Input() action: any = "";
    @Input() storageLocationMapping: any = {};
    form: any = new UntypedFormGroup({
        subLocation: new UntypedFormControl(null),
        rowNo: new UntypedFormControl(null),
        rackNo: new UntypedFormControl(null),
        binNo: new UntypedFormControl(null),
        otherId: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.storageLocationMapping);
        if (["view", "cancel"].includes(this.action)) {
            this.form.disable();
        }
    }
    dismissModel() {
        this.activeModal.close(this.form.value);
    }
}
