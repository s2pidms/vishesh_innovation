import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-sku-moulds-id-modal",
    templateUrl: "./sku-moulds-id-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class SKUMouldsIDModalComponent implements OnInit {
    @Input() mouldsIDAttribute: any = [];
    @Input() mouldData: any = [];
    @Input() action: string = "edit";
    @Output() saveData = new EventEmitter<any>();

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        console.log("this.mouldsIDAttribute", this.mouldsIDAttribute, this.mouldData);

        if (this.mouldsIDAttribute.length === 0) {
            this.mouldsIDAttribute = this.mouldData;
        }
    }

    reset() {}

    dismissModel() {
        this.saveData.emit({
            data: this.mouldsIDAttribute,
            key: "mouldsIDAttribute"
        });
        this.toastService.success("Mould ID Saved");
    }
}
