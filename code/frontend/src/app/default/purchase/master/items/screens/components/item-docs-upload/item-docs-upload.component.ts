import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-item-docs-upload",
    templateUrl: "./item-docs-upload.component.html",
})
export class ItemDocsUploadComponent implements OnInit {
    TDSFile: any = null;
    MSDSFile: any = null;
    drawingFile: any = null;

    @Input() itemUploadDocs = {};
    @Input() action: string = "edit";
    @Output() saveData = new EventEmitter<any>();
    form: any = new UntypedFormGroup({
        tdsFile: new UntypedFormControl(null),
        tdsFileUrl: new UntypedFormControl(null),
        msdsFile: new UntypedFormControl(null),
        msdsFileUrl: new UntypedFormControl(null),
        drawing: new UntypedFormControl(null),
        drawingUrl: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.itemUploadDocs);
    }

    dismissModel() {
        let obj = this.form.value;
        obj.TDSFile = this.TDSFile;
        obj.MSDSFile = this.MSDSFile;
        obj.drawingFile = this.drawingFile;

        this.saveData.emit({
            data: obj,
            key: "itemUploadDocs"
        });
        this.toastService.success("Upload Saved");
    }
}
