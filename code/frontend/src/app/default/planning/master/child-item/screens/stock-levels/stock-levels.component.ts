import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CHILD_ITEM_STOCK_LEVEL_FORM_ERRORS} from "@mocks/validations/planning/childItem.validation";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-stock-levels",
    templateUrl: "./stock-levels.component.html",
    styles: [
        `
            .set-uom {
                height: 2.8rem !important;
                border-radius: 0rem !important;
                font-size: 1.4rem !important;
                color: white !important;
                background-color: var(--bs-primary) !important;
                border-left: none !important;
            }
        `
    ]
})
export class StockLevelsComponent implements OnInit {
    @Input() inventoryStockLevels = {};
    @Input() unitOfMeasurement = "";
    @Input() action = "";

    form: any = new UntypedFormGroup({
        maxConsumptionPerDay: new UntypedFormControl(null),
        minConsumptionPerDay: new UntypedFormControl(null),
        avgConsumptionPerDay: new UntypedFormControl(null),
        supplyLeadTime: new UntypedFormControl(null),
        inventoryTurnoverCycle: new UntypedFormControl(null),
        noOfOrdersPerCycle: new UntypedFormControl(null),
        reorderLevel: new UntypedFormControl(null),
        reorderQuantity: new UntypedFormControl(null),
        maximumStockLevel: new UntypedFormControl(null),
        averageStockLevel: new UntypedFormControl(null),
        minimumStockLevel: new UntypedFormControl(null)
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
        this.form.patchValue(this.inventoryStockLevels);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, CHILD_ITEM_STOCK_LEVEL_FORM_ERRORS)) {
            return;
        }
        this.activeModal.close(this.form.value);
    }

    setAvgConsumptionPerDay() {
        let maxConsPerDay = this.form.controls["maxConsumptionPerDay"].value;
        let minConsPerDay = this.form.controls["minConsumptionPerDay"].value;
        if (minConsPerDay > maxConsPerDay) {
            this.toastService.warning("Minimum Qty. should always be lesser than Maximum Qty. !");
            this.form.controls["minConsumptionPerDay"].setValue(null);
            this.form.controls["avgConsumptionPerDay"].setValue(null);
            return;
        }
        if (maxConsPerDay && minConsPerDay) {
            this.form.controls["avgConsumptionPerDay"].setValue(+((+maxConsPerDay + +minConsPerDay) / 2).toFixed(2));
        } else {
            this.form.controls["avgConsumptionPerDay"].setValue(null);
        }
        this.form.controls["reorderLevel"].setValue(
            +(+maxConsPerDay * +this.form.controls["supplyLeadTime"].value).toFixed(2)
        );
        this.setData();
    }
    setReorderQty() {
        this.form.controls["reorderQuantity"].setValue(
            +(
                +this.form.controls["avgConsumptionPerDay"].value *
                (+this.form.controls["inventoryTurnoverCycle"].value / +this.form.controls["noOfOrdersPerCycle"].value)
            ).toFixed(2)
        );
        this.setData();
    }
    setData() {
        this.form.controls["maximumStockLevel"].setValue(
            +(
                +this.form.controls["reorderQuantity"].value +
                +this.form.controls["reorderLevel"].value -
                +this.form.controls["minConsumptionPerDay"].value * +this.form.controls["supplyLeadTime"].value
            ).toFixed(2)
        );
        this.form.controls["minimumStockLevel"].setValue(
            +(
                +this.form.controls["reorderLevel"].value -
                +this.form.controls["avgConsumptionPerDay"].value * +this.form.controls["supplyLeadTime"].value
            ).toFixed(2)
        );
        this.form.controls["averageStockLevel"].setValue(
            +(
                (+this.form.controls["maximumStockLevel"].value + +this.form.controls["minimumStockLevel"].value) /
                2
            ).toFixed(2)
        );
    }
}
