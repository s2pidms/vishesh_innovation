import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-item-remarks",
    templateUrl: "./item-remarks.component.html"
})
export class ItemRemarksComponent implements OnInit {
    @Input() action: string = "";
    @Input() itemRemarksObj: any = {};
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
        generalSpecifications: new UntypedFormControl("")
    });

    ngOnInit(): void {
        this.form.patchValue(this.itemRemarksObj);
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
        this.form.patchValue(this.itemRemarksObj);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "itemRemarksObj"});
        this.toastService.success("Remarks Saved");
    }
}
