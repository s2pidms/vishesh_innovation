import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-product-storage-modal",
    templateUrl: "./product-storage-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class ProductStorageModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() storage: any = {};
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}
    form = new UntypedFormGroup({
        shelfLife: new UntypedFormControl(null),
        storageTemp: new UntypedFormControl(null),
        storageHumidity: new UntypedFormControl(null),
        specialStorageInstruction: new UntypedFormControl(null)
    });

    ngOnInit(): void {
        this.form.patchValue(this.storage);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                // this.excelDownload(this.customerContactInfoArray);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.storage);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "storage"});
        this.toastService.success("Storage Saved");
    }
}
