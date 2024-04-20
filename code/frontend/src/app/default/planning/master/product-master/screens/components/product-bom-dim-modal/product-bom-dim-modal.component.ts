import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {SKU_MASTER_DIMENSIONS_UNITS} from "@mocks/constant";

@Component({
    selector: "app-product-bom-dim-modal",
    templateUrl: "./product-bom-dim-modal.component.html",
    styles: [
        `
            .fa-caret-right {
                font-size: 2rem !important;
                margin-left: 1rem !important;
            }
        `
    ]
})
export class ProductBomDimModalComponent implements OnInit {
    @Input() action: any = "";
    @Input() bomDimData: any = {};
    @Output() saveData = new EventEmitter<any>();
    actualUnits: any = "";
    layoutUnits: any = "";
    DimensionsUnitsObj = SKU_MASTER_DIMENSIONS_UNITS;
    DimensionsUnits: any = this.DimensionsUnitsObj.getAllSKUMasterDimensionsUnit();
    form: any = new UntypedFormGroup({
        unit1: new UntypedFormControl("mm"),
        unit2: new UntypedFormControl("mm"),
        width: new UntypedFormControl(null),
        length: new UntypedFormControl(null),
        mSqArea: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.bomDimData);
        if (this.action == "view" || this.action == "Converted to SKU") {
            this.form.disable();
        }
    }

    setActualUnits(event: any) {
        this.actualUnits = event.target.value;
        this.setActualArea();
    }
    setActualArea() {
        let width = this.form.controls["width"].value;
        if (width && typeof +width == "number") {
            if (this.form.controls["unit1"].value == this.DimensionsUnitsObj.mm) {
                width = width / 1000;
            }
            if (this.actualUnits == this.DimensionsUnitsObj.cm) {
                width = width / 100;
            }
            if (this.actualUnits == this.DimensionsUnitsObj.inch) {
                width = width / 0.0254;
            }
            if (this.actualUnits == this.DimensionsUnitsObj.ft) {
                width = width / 0.3048;
            }
        }

        let length = this.form.controls["length"].value;
        if (length && typeof +length == "number") {
            if (this.form.controls["unit2"].value == this.DimensionsUnitsObj.mm) {
                length = length / 1000;
            }
            if (this.actualUnits == this.DimensionsUnitsObj.cm) {
                length = length / 100;
            }
            if (this.actualUnits == this.DimensionsUnitsObj.inch) {
                length = length / 0.0254;
            }
            if (this.actualUnits == this.DimensionsUnitsObj.ft) {
                length = length / 0.3048;
            }
        }
        if (width && length) {
            let areaCal = +(+width * +length).toFixed(2);

            this.form.controls["mSqArea"].setValue(areaCal);
        }
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.bomDimData);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "bomDimData"});
        this.toastService.success("BOM Dim Saved");
    }
}
