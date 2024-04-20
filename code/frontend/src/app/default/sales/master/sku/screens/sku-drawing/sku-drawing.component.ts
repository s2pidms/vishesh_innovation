import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-sku-drawing",
    templateUrl: "./sku-drawing.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
            .set-hyperlink {
                position: relative;
                .link-position {
                    position: absolute;
                    right: -6.5rem;
                    top: -0.05rem;
                }
            }
        `
    ]
})
export class SkuDrawingComponent implements OnInit {
    drawingArtWorkFiles: any = null;
    productionLayoutFiles: any = null;

    @Input() drawingArtWork = {};
    @Input() action: string = "edit";
    @Output() saveData = new EventEmitter<any>();
    form: any = new UntypedFormGroup({
        internalPartNo: new UntypedFormControl(null),
        artWorkNo: new UntypedFormControl(null),
        artWorkHyperLink: new UntypedFormControl(null)
        // drawingArtWorkFile: new UntypedFormControl(null),
        // drawingArtWorkFileUrl: new UntypedFormControl(null),
        // productionLayoutFile: new UntypedFormControl(null),
        // productionLayoutFileUrl: new UntypedFormControl(null),
    });

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.drawingArtWork);
    }

    dismissModel() {
        // let obj = this.form.value;
        // obj.drawingArtWorkFile = this.drawingArtWorkFiles;
        // obj.productionLayoutFile = this.productionLayoutFiles;

        this.saveData.emit({
            data: this.form.value,
            key: "drawingArtWork"
        });
        this.toastService.success("Drawing Saved");
    }

    openHyperLink() {
        let artWorkHyperLink = this.form.controls["artWorkHyperLink"].value;
        if (artWorkHyperLink) {
            window.open(artWorkHyperLink);
        }
    }
}
