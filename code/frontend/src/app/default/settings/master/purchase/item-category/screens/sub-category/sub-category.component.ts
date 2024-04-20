import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ItemCategoryService} from "@services/purchase";
import {ITEM_SUBCATEGORY_FORM_ERRORS} from "@mocks/validations/purchase/item-subcategory.validation";
import {ITEM_TYPE} from "@mocks/itemType.constant";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-sub-category",
    templateUrl: "./sub-category.component.html"
})
export class SubCategoryComponent implements OnInit {
    @Input() action: string = "";
    @Input() subCategory: any = [];

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
        private itemCategoryService: ItemCategoryService
    ) {}

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        digit: new UntypedFormControl(4),
        name: new UntypedFormControl("", [Validators.required]),
        prefix: new UntypedFormControl("", [Validators.required]),
        subCategoryAutoIncrement: new UntypedFormControl("", [Validators.required]),
        subCategoryStatus: new UntypedFormControl("Active", [Validators.required])
    });

    ngOnInit(): void {
        this.collection = this.subCategory.length;
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
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    save() {
        if (this.validationService.checkErrors(this.form, ITEM_SUBCATEGORY_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.subCategory.splice(formData.index, 1, formData);
        } else {
            // create
            this.subCategory.push(formData);
        }
        this.collection = this.subCategory.length;
        this.form.reset();
        this.form.controls["digit"].setValue(4);
        this.form.controls["subCategoryStatus"].setValue("Active");
    }

    patchItem(formData: any, index: number, action: string) {
        formData.index = index;
        this.form.patchValue(formData);
        if (action == "view") {
            this.btnDisable = true;
            this.form.disable();
        } else {
            this.form.enable();
            this.btnDisable = false;
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.subCategory.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.subCategory.length;
        }
    }
}
