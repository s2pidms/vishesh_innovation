import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BillOfMaterialService} from "@services/planning";
import {BOM_COMPOSITION_FORM_ERRORS} from "@mocks/validations/planning";
import {ITEM_TYPE} from "@mocks/itemType.constant";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-bom-composition",
    templateUrl: "./bom-composition.component.html"
})
export class BOMCompositionComponent implements OnInit {
    @Input() action: string = "";
    @Input() condition: any = "";
    @Input() itemsArr: any = [];
    @Input() itemCate: any = [];
    itemsDetailsArr: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    itemId: string = "";

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private billOfMaterialService: BillOfMaterialService
    ) {}
    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        item: new UntypedFormControl(""),
        itemCategory: new UntypedFormControl("", [Validators.required]),
        itemCode: new UntypedFormControl("", [Validators.required]),
        itemName: new UntypedFormControl("", [Validators.required]),
        itemDescription: new UntypedFormControl(""),
        UOM: new UntypedFormControl(""),
        BOMLevel: new UntypedFormControl("", [Validators.required]),
        qty: new UntypedFormControl("", [Validators.required]),
        substituteAvailable: new UntypedFormControl(null, [Validators.required])
    });

    ngOnInit(): void {
        this.collection = this.itemsArr.length;
        if (this.action == "view") {
            this.form.disable();
        }
    }

    itemType = ITEM_TYPE;
    itemCategories: any = [];

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

    additems() {
        if (this.validationService.checkErrors(this.form, BOM_COMPOSITION_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.itemsArr.splice(formData.index, 1, formData);
        } else {
            // create
            this.itemsArr.push(formData);
        }
        this.collection = this.itemsArr.length;
        this.form.reset();
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
            this.itemsArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.itemsArr.length;
        }
    }

    setItemCategory(ev: any) {
        let payload = {
            itemType: ev.target.value
        };
        this.billOfMaterialService.getAllFilteredItems(payload).subscribe(result => {
            this.itemsDetailsArr = result?.itemsList;
        });
        this.collection = this.itemsArr.length;
    }

    setItemDetails(ev: any) {
        this.form.controls["item"].setValue(ev?._id);
        this.form.controls["itemCode"].setValue(ev?.itemCode);
        this.form.controls["itemName"].setValue(ev?.itemName);
        this.form.controls["itemDescription"].setValue(ev?.itemDescription);
        this.form.controls["UOM"].setValue(ev?.primaryUnit);
        this.form.controls["substituteAvailable"].setValue(ev?.substituteAvailable);
    }
}
