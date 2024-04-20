import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-exports-modal",
    templateUrl: "./exports-modal.component.html"
})
export class ExportsModalComponent implements OnInit {
    @Input() exportsDetails: any = {};
    LUTDocumentFile: any = null;
    form: any = new UntypedFormGroup({
        LUTNo: new UntypedFormControl(null),
        LUTDate: new UntypedFormControl(null),
        LUTDocument: new UntypedFormControl(null),
        LUTDocumentUrl: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.exportsDetails);
    }

    dismissModel() {
        let obj: any = {};
        obj.LUTDocumentFile = this.LUTDocumentFile;
        obj.formData = this.form.value;
        this.activeModal.close(obj);
    }
}
