import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_DUAL_UNITS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ValidationService} from "@core/components";
import {SKU_MASTER_DIMENSIONS_UNITS} from "@mocks/constant";
import {ToastService} from "@core/services";

@Component({
    selector: "app-add-item-uom",
    templateUrl: "./add-item-uom.component.html"
})
export class AddItemUOMComponent implements OnInit {
    @Input() action: any = "";
    @Input() PSPInventory: boolean = false;
    @Input() flag: boolean = false;
    @Input() isNotApplicable: boolean = false;
    @Input() ModalUOMsUnit: any = [];
    @Input() WXLDimensionsUnit: any = [];
    @Input() dualUnits = {};
    @Input() dimensionData = {};
    DDetailsFlag: any = null;
    // DDDetailsOptions = ["Roll", "Sheet", "SQM", "sqm", "SQ.FT"];

    DimensionsUnitsObj = SKU_MASTER_DIMENSIONS_UNITS;
    DimensionsUnits: any = this.DimensionsUnitsObj.getAllSKUMasterDimensionsUnit();
    form: any = new UntypedFormGroup({
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        secondaryUnit: new UntypedFormControl(null, [Validators.required]),
        unitConversionFlag: new UntypedFormControl(1),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        dualUnitsDimensionsDetails: new UntypedFormGroup({
            type: new UntypedFormControl(null),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            widthUnit: new UntypedFormControl(null),
            lengthUnit: new UntypedFormControl(null),
            widthInMM: new UntypedFormControl(null),
            lengthInM: new UntypedFormControl(null),
            sqmPerRoll: new UntypedFormControl(null)
        })
    });

    get f() {
        return this.form.controls;
    }
    get dualUnitsDimensionsData() {
        return this.form.get("dualUnitsDimensionsDetails") as UntypedFormGroup;
    }
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        console.log("WXLDimensionsUnit", this.WXLDimensionsUnit);
        this.setSecondaryValue();
        this.form.patchValue(this.dualUnits);
        if (this.dimensionData) {
            this.form.controls["dualUnitsDimensionsDetails"].patchValue(this.dimensionData);
        }
        if (this.f.unitConversionFlag.value == 2) {
            this.form.controls["primaryConversion"].disable();
            this.form.controls["primaryToSecondaryConversion"].setValue(null);
            this.form.controls["primaryToSecondaryConversion"].disable();
            this.form.controls["secondaryConversion"].enable();
            this.form.controls["secondaryToPrimaryConversion"].enable();
        } else {
            this.form.controls["secondaryConversion"].disable();
            this.form.controls["secondaryToPrimaryConversion"].setValue(null);
            this.form.controls["secondaryToPrimaryConversion"].disable();
            this.form.controls["primaryConversion"].enable();
            this.form.controls["primaryToSecondaryConversion"].enable();
        }
        if (["view", "Converted to SKU"].includes(this.action)) {
            this.form.disable();
        }

        if (this.flag) {
            this.flag = true;
        }

        let primaryUnit = this.form.controls["primaryUnit"].value;
        if (primaryUnit) {
            this.setUnitsDimensions();
        }
    }

    setSecondaryValue() {
        let primaryUnit = this.form.controls["primaryUnit"].value;
        let secondaryUnit = this.form.controls["secondaryUnit"].value;
        console.log("secondaryUnit", secondaryUnit);

        if (["RL", "SHT"].includes(primaryUnit)) {
            this.form.controls["secondaryUnit"].setValue("sqm");
        }
    }

    setWidthDetails() {
        let primaryUnit = this.form.controls["primaryUnit"].value;
        let secondaryUnit = this.form.controls["secondaryUnit"].value;
        console.log("secondaryUnit", secondaryUnit);
        if (["SHT"].includes(primaryUnit)) {
            !this.dualUnitsDimensionsData.controls["widthUnit"].value &&
                this.dualUnitsDimensionsData.controls["widthUnit"].setValue("mm");
            !this.dualUnitsDimensionsData.controls["lengthUnit"].value &&
                this.dualUnitsDimensionsData.controls["lengthUnit"].setValue("mm");
        }
        if (["RL"].includes(primaryUnit)) {
            !this.dualUnitsDimensionsData.controls["widthUnit"].value &&
                this.dualUnitsDimensionsData.controls["widthUnit"].setValue("mm");
            !this.dualUnitsDimensionsData.controls["lengthUnit"].value &&
                this.dualUnitsDimensionsData.controls["lengthUnit"].setValue("m");
        }

        if (["RL"].includes(primaryUnit) && ["SHT"].includes(secondaryUnit)) {
            !this.dualUnitsDimensionsData.controls["widthUnit"].value &&
                this.dualUnitsDimensionsData.controls["widthUnit"].setValue("mm");
            !this.dualUnitsDimensionsData.controls["lengthUnit"].value &&
                this.dualUnitsDimensionsData.controls["lengthUnit"].setValue("mm");
        }
    }

    setPrimaryToSecondaryValue() {
        if (
            this.dualUnitsDimensionsData.controls["widthUnit"].value &&
            this.dualUnitsDimensionsData.controls["lengthUnit"].value
        ) {
            this.unitConversionForWidthAndLength();
            this.f["primaryToSecondaryConversion"].setValue(
                +(+this.dualUnitsDimensionsData.controls["sqmPerRoll"].value)?.toFixed(3)
            );
            console.log('this.dualUnitsDimensionsData.controls["sqmPerRoll"].');
        } else {
            this.f["primaryToSecondaryConversion"].setValue(null);
        }
    }

    handleRadio() {
        if (this.f.unitConversionFlag.value == 2) {
            this.form.controls["primaryConversion"].disable();
            this.form.controls["primaryToSecondaryConversion"].setValue(null);
            this.form.controls["primaryToSecondaryConversion"].disable();
            this.form.controls["secondaryConversion"].enable();
            this.form.controls["secondaryToPrimaryConversion"].enable();
        } else {
            this.form.controls["secondaryConversion"].disable();
            this.form.controls["secondaryToPrimaryConversion"].setValue(null);
            this.form.controls["secondaryToPrimaryConversion"].disable();
            this.form.controls["primaryConversion"].enable();
            this.form.controls["primaryToSecondaryConversion"].enable();
        }
    }

    unitConversionForWidthAndLength() {
        let width = this.dualUnitsDimensionsData.controls["width"].value;
        let length = this.dualUnitsDimensionsData.controls["length"].value;
        let widthUnit = this.dualUnitsDimensionsData.controls["widthUnit"].value;
        let lengthUnit = this.dualUnitsDimensionsData.controls["lengthUnit"].value;

        if (widthUnit == this.DimensionsUnitsObj.mm) {
            this.dualUnitsDimensionsData.controls["widthInMM"].setValue(width);
        }
        if (widthUnit == this.DimensionsUnitsObj.cm) {
            this.dualUnitsDimensionsData.controls["widthInMM"].setValue(width * 10);
        }
        if (widthUnit == this.DimensionsUnitsObj.inch) {
            this.dualUnitsDimensionsData.controls["widthInMM"].setValue(width * 25.4);
        }
        if (widthUnit == this.DimensionsUnitsObj.ft) {
            this.dualUnitsDimensionsData.controls["widthInMM"].setValue(width * 304.8);
        }
        if (widthUnit == this.DimensionsUnitsObj.m) {
            this.dualUnitsDimensionsData.controls["widthInMM"].setValue(width * 1000);
        }

        if (lengthUnit == this.DimensionsUnitsObj.mm) {
            this.dualUnitsDimensionsData.controls["lengthInM"].setValue(length * 0.001);
        }
        if (lengthUnit == this.DimensionsUnitsObj.cm) {
            this.dualUnitsDimensionsData.controls["lengthInM"].setValue(length * 0.01);
        }
        if (lengthUnit == this.DimensionsUnitsObj.inch) {
            this.dualUnitsDimensionsData.controls["lengthInM"].setValue(length * 0.0254);
        }
        if (lengthUnit == this.DimensionsUnitsObj.ft) {
            this.dualUnitsDimensionsData.controls["lengthInM"].setValue(length * 0.3048);
        }
        if (lengthUnit == this.DimensionsUnitsObj.m) {
            this.dualUnitsDimensionsData.controls["lengthInM"].setValue(length);
        }

        let widthInMM = this.dualUnitsDimensionsData.controls["widthInMM"].value;
        let lengthInM = this.dualUnitsDimensionsData.controls["lengthInM"].value;

        this.dualUnitsDimensionsData.controls["sqmPerRoll"].setValue(+((widthInMM / 1000) * lengthInM).toFixed(4));
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, ITEM_DUAL_UNITS_FORM_ERRORS)) {
            return;
        }
        if (
            this.flag == true &&
            this.WXLDimensionsUnit.includes(this.DDetailsFlag) &&
            this.form.value.secondaryUnit != "-"
        ) {
            if (!this.dualUnitsDimensionsData.value.width) {
                this.toastService.warning("Width is required !");
                return;
            }
            if (!this.dualUnitsDimensionsData.value.length) {
                this.toastService.warning("Length is required !");
                return;
            }
        }

        if (!this.f["unitConversionFlag"].value) {
            this.toastService.warning("Radio Button is required !");
            return;
        }

        if (
            this.f["unitConversionFlag"].value == 1 &&
            !this.f["primaryToSecondaryConversion"].value &&
            this.form.value.secondaryUnit != "-"
        ) {
            this.toastService.warning("Conversion of Units is required !");
            return;
        }
        if (
            this.f["unitConversionFlag"].value == 2 &&
            !this.f["secondaryToPrimaryConversion"].value &&
            this.form.value.secondaryUnit != "-"
        ) {
            this.toastService.warning("Conversion of Units is required !");
            return;
        }
        this.form.enable();
        this.unitConversionForWidthAndLength();
        this.activeModal.close(this.form.value);
    }

    setUnitsDimensions(flag = "") {
        let primaryUnit = this.form.controls["primaryUnit"].value;
        let secondaryUnit = this.form.controls["secondaryUnit"].value;

        if (!primaryUnit) {
            this.toastService.warning("first Select Primary Unit !");
            return;
        } else if (!this.WXLDimensionsUnit.includes(secondaryUnit)) {
            this.DDetailsFlag = this.WXLDimensionsUnit.includes(primaryUnit) ? primaryUnit : null;
        } else if (primaryUnit && secondaryUnit) {
            let DDetailsFlag = this.WXLDimensionsUnit.includes(secondaryUnit) ? secondaryUnit : null;
            if (this.WXLDimensionsUnit.includes(primaryUnit)) {
                DDetailsFlag = primaryUnit;
            }
            this.DDetailsFlag = DDetailsFlag;
        }

        this.dualUnitsDimensionsData.controls["type"].setValue(this.DDetailsFlag);
        if (!this.DDetailsFlag) {
            this.dualUnitsDimensionsData.controls["type"].setValue(null);
            this.dualUnitsDimensionsData.controls["width"].setValue(null);
            this.dualUnitsDimensionsData.controls["length"].setValue(null);
            this.dualUnitsDimensionsData.controls["widthUnit"].setValue(null);
            this.dualUnitsDimensionsData.controls["lengthUnit"].setValue(null);
        }

        if (flag == "primaryUnit") {
            this.setSecondaryValue();
        }
        this.setWidthDetails();
        if (flag == "primaryUnit" || flag == "secondaryUnit") {
            this.setDualUnitsWidthDetails();
        }

        if (secondaryUnit == "-") {
            this.f["primaryToSecondaryConversion"].setValue(null);
            this.f["secondaryToPrimaryConversion"].setValue(null);
            this.f["unitConversionFlag"].disable();
            this.f["primaryConversion"].disable();
            this.dualUnitsDimensionsData.patchValue({
                type: null,
                width: null,
                length: null,
                // widthUnit: null,
                // lengthUnit: null,
                widthInMM: null,
                lengthInM: null,
                sqmPerRoll: null
            });
        } else {
            this.f["unitConversionFlag"].enable();
        }
    }

    setDualUnitsWidthDetails() {
        let primaryUnit = this.form.controls["primaryUnit"].value;
        let secondaryUnit = this.form.controls["secondaryUnit"].value;
        console.log("secondaryUnit", secondaryUnit);
        if (["SHT"].includes(primaryUnit)) {
            this.dualUnitsDimensionsData.controls["widthUnit"].setValue("mm");

            this.dualUnitsDimensionsData.controls["lengthUnit"].setValue("mm");
        }
        if (["RL"].includes(primaryUnit)) {
            this.dualUnitsDimensionsData.controls["widthUnit"].setValue("mm");

            this.dualUnitsDimensionsData.controls["lengthUnit"].setValue("m");
        }

        if (["RL"].includes(primaryUnit) && ["SHT"].includes(secondaryUnit)) {
            this.dualUnitsDimensionsData.controls["widthUnit"].setValue("mm");
            this.dualUnitsDimensionsData.controls["lengthUnit"].setValue("mm");
        }

        this.setPrimaryToSecondaryValue();
    }
}
