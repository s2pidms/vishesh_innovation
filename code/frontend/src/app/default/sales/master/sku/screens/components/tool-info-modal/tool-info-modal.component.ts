import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-tool-info-modal",
    templateUrl: "./tool-info-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class ToolInfoModalComponent implements OnInit {
    @Input() toolInfo = {};
    @Input() action: string = "edit";
    @Output() saveData = new EventEmitter<any>();

    form: any = new UntypedFormGroup({
        tool1Id: new UntypedFormControl(null),
        tool2Id: new UntypedFormControl(null),
        tool3Id: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.toolInfo);
    }
    reset() {
        this.form.patchValue(JSON.parse(JSON.stringify(this.toolInfo)));
    }

    dismissModel() {
        this.saveData.emit({
            data: this.form.value,
            key: "toolInfo"
        });
        this.toastService.success("Tool Info Saved");
    }
}
