import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SKU_MATERIAL_CHILD_ITEM_FORM_ERRORS} from "@mocks/validations/purchase";
import {ValidationService} from "@core/components";
import {SKU_MASTER_DIMENSIONS_UNITS} from "@mocks/constant";
import {ToastService} from "@core/services";

@Component({
    selector: "app-child-part-info-modal",
    templateUrl: "./child-part-info-modal.component.html"
})
export class ChildPartInfoModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() flag: boolean = false;
    @Input() ModalUOMsUnit: any = [];
    @Input() WXLDimensionsUnit: any = [];
    @Input() dualUnits: any = {};
    @Input() dimensionData = {};
    DDetailsFlag: any = null;
    primaryUnit = ["SHT", "RL"];
    lengthUnitArr = ["m", "mm"];
    DimensionsUnitsObj = SKU_MASTER_DIMENSIONS_UNITS;
    DimensionsUnits: any = this.DimensionsUnitsObj.getAllSKUMasterDimensionsUnit();
    form: any = new UntypedFormGroup({
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        secondaryUnit: new UntypedFormControl("sqm", [Validators.required]),
        // unitConversionFlag: new UntypedFormControl(1),
        primaryConversion: new UntypedFormControl(1),
        // secondaryConversion: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null, [Validators.required]),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        width: new UntypedFormControl(null, [Validators.required]),
        widthUnit: new UntypedFormControl(null, [Validators.required]),
        length: new UntypedFormControl(null, [Validators.required]),
        lengthUnit: new UntypedFormControl(null, [Validators.required]),
        childItemDescription: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.dualUnits);
        this.f["secondaryUnit"].setValue("sqm");
        // this.f["secondaryUnit"].disable();
        if (["view", "Converted to SKU"].includes(this.action)) {
            this.form.disable();
        }
        let itemCodeSplit = this.dualUnits.itemCode.split("/")[0];
        if (!this.dualUnits.primaryToSecondaryConversion) {
            if (itemCodeSplit == "M10") {
                this.f["primaryUnit"].setValue("SHT");
            } else if (itemCodeSplit == "M30") {
                this.f["primaryUnit"].setValue("RL");
            }
            this.setDescription();
        }
    }

    setDescription() {
        let width = +this.f["width"].value;
        let length = +this.f["length"].value;
        let lengthUnitValue = this.f["lengthUnit"].value;
        let widthUnit = this.f["widthUnit"].value;
        let DF =
            widthUnit == "mm" && lengthUnitValue == "mm"
                ? 1000000
                : widthUnit == "mm" && lengthUnitValue == "m"
                ? 1000
                : widthUnit == "m" && lengthUnitValue == "mm"
                ? 1000
                : 1;

        // let DF = lengthUnitValue == "m" ? 1000 : 1000000;
        if (width && length) {
            let primaryToSecondaryConversion = +((width * length) / DF).toFixed(3);
            this.f["primaryToSecondaryConversion"].setValue(+primaryToSecondaryConversion);

            let childItemDescription = `${width} ${widthUnit} X ${length} ${lengthUnitValue}`;
            this.f["childItemDescription"].setValue(childItemDescription);
        } else {
            // this.f["primaryToSecondaryConversion"].setValue(0);
            this.f["childItemDescription"].setValue(null);
        }
    }

    setLengthData() {
        let length = +this.f["length"].value;
        let lengthUnit = this.f["lengthUnit"].value;

        if (lengthUnit == "m") {
            this.f["length"].setValue(+(length / 1000).toFixed(3));
        }

        if (lengthUnit == "mm") {
            this.f["length"].setValue(+(length * 1000).toFixed(3));
        }
        length = +this.f["length"].value;
        lengthUnit = this.f["lengthUnit"].value;
        this.setDescription();
    }

    setWidthData(event: any) {
        let lengthUnitValue = this.f["lengthUnit"].value;
        this.f["widthUnit"].setValue(event?.target.value);
        let width = +this.f["width"].value;
        let widthUnit = this.f["widthUnit"].value;

        if (widthUnit == "m") {
            this.f["width"].setValue(+(width / 1000).toFixed(3));
        }

        if (widthUnit == "mm") {
            this.f["width"].setValue(+(width * 1000).toFixed(3));
        }
        widthUnit = this.f["widthUnit"].value;
        // let DF = widthUnit == "m" ? 1000 : 1000000;
        // if (width && length) {
        //     let primaryToSecondaryConversion = +((width * length) / DF).toFixed(3);
        //     this.f["primaryToSecondaryConversion"].setValue(+primaryToSecondaryConversion);

        //     let childItemDescription = `${width} ${widthUnit} X ${length} ${lengthUnitValue}`;
        //     this.f["childItemDescription"].setValue(childItemDescription);
        // } else {
        //     // this.f["primaryToSecondaryConversion"].setValue(0);
        //     this.f["childItemDescription"].setValue(null);
        // }
        this.setDescription();
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, SKU_MATERIAL_CHILD_ITEM_FORM_ERRORS)) {
            return;
        }

        this.form.enable();
        let formData = this.form.value;
        formData.UOM = formData.primaryUnit;
        this.activeModal.close(formData);
    }

    setUnitsDimensions() {
        if (this.f["primaryUnit"].value == "RL") {
            this.f["lengthUnit"].setValue("m");
        } else {
            this.f["lengthUnit"].setValue("mm");
        }

        this.setLengthData();
    }
}
