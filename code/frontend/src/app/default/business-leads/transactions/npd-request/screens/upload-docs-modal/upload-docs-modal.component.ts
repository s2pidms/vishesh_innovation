import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-upload-docs-modal',
  templateUrl: './upload-docs-modal.component.html',
})
export class UploadDocsModalComponent implements OnInit {
  engineeringDrawing: any = null;
  productSpecification: any = null;
  designMockUpFile: any = null;
  artworkForProcessingFile: any = null;
  btnDisable = false;

  @Input() NPDUploadDocs = {};
  @Input() action: string = 'edit';
  @Output() saveData = new EventEmitter<any>();
  form: any = new UntypedFormGroup({
    engineeringDrawing: new UntypedFormControl(null),
    engineeringDrawingUrl: new UntypedFormControl(null),
    productSpecification: new UntypedFormControl(null),
    productSpecificationUrl: new UntypedFormControl(null),
    designMockUpFile: new UntypedFormControl(null),
    designMockUpFileUrl: new UntypedFormControl(null),
    artworkForProcessingFile: new UntypedFormControl(null),
    artworkForProcessingFileUrl: new UntypedFormControl(null),
  });

  constructor(
    public activeModal: NgbActiveModal,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form.patchValue(this.NPDUploadDocs);
  }

  closedModel() {
    this.activeModal.close();
  }
  dismissModel() {
    let obj = this.form.value;
    obj.engineeringDrawing = this.engineeringDrawing;
    obj.productSpecification = this.productSpecification;
    obj.designMockUpFile = this.designMockUpFile;
    obj.artworkForProcessingFile = this.artworkForProcessingFile;

    this.activeModal.close(obj);
  }
}
