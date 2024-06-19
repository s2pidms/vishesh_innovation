import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {SpinnerService, ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {ItemsService} from "@services/purchase";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {STOCK_LEVELS_FORM_ERRORS} from "@mocks/validations/planning/stockLevels.validation";

@Component({
    selector: "app-stock-level-form",
    templateUrl: "./stock-level-form.component.html",
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
export class StockLevelFormComponent implements OnInit {
    unitOfMeasurement: any = "";
    action: any = "";
    _id: any = "";
    itemAMU: any = "";
    itemROL: any = "";

    constructor(
        private validationService: ValidationService,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private itemsService: ItemsService,
        private location: Location,
        private activatedRoute: ActivatedRoute
    ) {}

    form: any = new UntypedFormGroup({
        maxConsumptionPerDay: new UntypedFormControl(null),
        minConsumptionPerDay: new UntypedFormControl(null),
        avgConsumptionPerDay: new UntypedFormControl(null),
        supplyLeadTime: new UntypedFormControl(null),
        inventoryTurnoverCycle: new UntypedFormControl(null),
        noOfOrdersPerCycle: new UntypedFormControl(null),
        reorderLevel: new UntypedFormControl(null, [Validators.required]),
        reorderQuantity: new UntypedFormControl(null, [Validators.required]),
        maximumStockLevel: new UntypedFormControl(null),
        averageStockLevel: new UntypedFormControl(null),
        minimumStockLevel: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    // this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.itemsService.getById(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                this.spinner.hide();
                if (Object.keys(success).length == 0) {
                    return;
                }
                this._id = success?._id;
                this.itemAMU = success?.itemAMU;
                this.itemROL = success?.itemROL;
                this.unitOfMeasurement = success?.primaryUnit;
                this.form.patchValue(success?.inventoryStockLevels);
                if (this.action == "view") {
                    this.form.disable();
                }
            });
    }

    submit() {
        if (this.validationService.checkErrors(this.form, STOCK_LEVELS_FORM_ERRORS)) {
            return;
        }
        this.itemROL = this.f["reorderLevel"].value;
        this.itemAMU = this.f["reorderQuantity"].value;

        let formData: any = {
            _id: this._id,
            itemROL: this.itemROL,
            itemAMU: this.itemAMU,
            inventoryStockLevels: this.form.value
        };
        let formValue = new FormData();
        formValue.append("key", "items");
        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    formValue.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    formValue.append(key, formData[key]);
                }
            }
        }
        this.update(formData._id, formValue);
    }
    update(_id: string, formData: any) {
        this.spinner.show();
        this.itemsService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    setAvgConsumptionPerDay() {
        let maxConsPerDay = +this.form.controls["maxConsumptionPerDay"].value;
        let minConsPerDay = +this.form.controls["minConsumptionPerDay"].value;
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
