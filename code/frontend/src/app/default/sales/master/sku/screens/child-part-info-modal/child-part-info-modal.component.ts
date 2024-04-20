import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_DUAL_UNITS_FORM_ERRORS} from "@mocks/validations/purchase";
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
    @Input() dualUnits = {};
    @Input() dimensionData = {};
    DDetailsFlag: any = null;
    primaryUnit = ["SHT", "RL"];
    DimensionsUnitsObj = SKU_MASTER_DIMENSIONS_UNITS;
    DimensionsUnits: any = this.DimensionsUnitsObj.getAllSKUMasterDimensionsUnit();
    form: any = new UntypedFormGroup({
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        secondaryUnit: new UntypedFormControl("sqm", [Validators.required]),
        // unitConversionFlag: new UntypedFormControl(1),
        primaryConversion: new UntypedFormControl(1),
        // secondaryConversion: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        childItemDescription: new UntypedFormControl(null),
        widthUnit: new UntypedFormControl(null),
        lengthUnit: new UntypedFormControl(null),
        width: new UntypedFormControl(null),
        length: new UntypedFormControl(null)
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
        console.log("dualUnits", this.dualUnits);

        this.form.patchValue(this.dualUnits);
        this.f["secondaryUnit"].setValue("sqm");
        // this.f["secondaryUnit"].disable();
        if (["view", "Converted to SKU"].includes(this.action)) {
            this.form.disable();
        }
        console.log("this.form.", this.form.value);
    }

    setDescription() {
        let width = +this.f["width"].value;
        let length = +this.f["length"].value;
        let lengthUnitValue = this.f["lengthUnit"].value;
        let DF = lengthUnitValue == "m" ? 1000 : 1000000;
        if (width && length) {
            let primaryToSecondaryConversion = +((width * length) / DF).toFixed(3);
            this.f["primaryToSecondaryConversion"].setValue(+primaryToSecondaryConversion);

            let childItemDescription = `${width} mm X ${length} ${lengthUnitValue}`;
            this.f["childItemDescription"].setValue(childItemDescription);
        } else {
            // this.f["primaryToSecondaryConversion"].setValue(0);
            this.f["childItemDescription"].setValue(null);
        }
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, ITEM_DUAL_UNITS_FORM_ERRORS)) {
            return;
        }

        if (!this.f["childItemDescription"].value) {
            this.toastService.warning("Child Item Description is required !");
            return;
        }

        this.form.enable();
        let formData = this.form.value;
        formData.UOM = formData.primaryUnit;
        this.activeModal.close(formData);
    }

    setUnitsDimensions() {
        // let primaryUnit = this.form.controls["primaryUnit"].value;
        // let secondaryUnit = this.form.controls["secondaryUnit"].value;
        // if (!primaryUnit) {
        //     this.toastService.warning("first Select Primary Unit !");
        //     return;
        // } else if (!this.WXLDimensionsUnit.includes(secondaryUnit)) {
        //     this.DDetailsFlag = this.WXLDimensionsUnit.includes(primaryUnit) ? primaryUnit : null;
        // } else if (primaryUnit && secondaryUnit) {
        //     let DDetailsFlag = this.WXLDimensionsUnit.includes(secondaryUnit) ? secondaryUnit : null;
        //     if (this.WXLDimensionsUnit.includes(primaryUnit)) {
        //         DDetailsFlag = primaryUnit;
        //     }
        //     this.DDetailsFlag = DDetailsFlag;
        // }
        // this.dualUnitsDimensionsData.controls["type"].setValue(this.DDetailsFlag);
        // if (!this.DDetailsFlag) {
        //     this.dualUnitsDimensionsData.controls["type"].setValue(null);
        //     this.dualUnitsDimensionsData.controls["width"].setValue(null);
        //     this.dualUnitsDimensionsData.controls["length"].setValue(null);
        //     this.dualUnitsDimensionsData.controls["widthUnit"].setValue(null);
        //     this.dualUnitsDimensionsData.controls["lengthUnit"].setValue(null);
        // }
    }
}
