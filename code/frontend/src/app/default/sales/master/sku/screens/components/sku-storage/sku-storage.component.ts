import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SKU_STORAGE_FORM_ERRORS} from "@mocks/validations/sales";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-sku-storage",
    templateUrl: "./sku-storage.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-right: 4rem !important;
            }
        `
    ]
})
export class SkuStorageComponent implements OnInit {
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

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}
    form = new UntypedFormGroup({
        // shelfLife: new UntypedFormControl(null, [Validators.required]),
        storageTemp: new UntypedFormControl(null, [Validators.required]),
        storageHumidity: new UntypedFormControl(null, [Validators.required]),
        specialStorageInstruction: new UntypedFormControl(null, [Validators.required])
    });

    ngOnInit(): void {
        this.form.patchValue(this.storage);
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
        if (this.validationService.checkErrors(this.form, SKU_STORAGE_FORM_ERRORS)) {
            return;
        }
        this.saveData.emit({data: this.form.value, key: "storage"});
        this.toastService.success("Storage Saved");
    }
}
