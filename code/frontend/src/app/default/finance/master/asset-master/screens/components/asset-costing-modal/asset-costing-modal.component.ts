import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-asset-costing-modal",
    templateUrl: "./asset-costing-modal.component.html"
})
export class AssetCostingModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() assetPurchaseCost: any = null;
    @Input() totalAssetCostPerHr: any = null;
    @Input() totalAssetCostPerShift: any = null;
    @Input() costingInput: any = {};
    @Input() assetConfiguration: any = [];
    estimatedResidualPercentage: any = 0;
    maintenanceDownTime: any = 0;
    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    numberOfDaysOfYear = 365;
    numberOfSundays = 52;
    companyHoliday = 10;
    noOfMonths = 12;
    shiftHr = 8;
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}
    form = new UntypedFormGroup({
        assetPurchaseCost: new UntypedFormControl(null),
        financeCost: new UntypedFormControl(null),
        totalAssetClass: new UntypedFormControl(null),
        estimatedUsefulLifeInYear: new UntypedFormControl(null),
        depreciatedAssetCostPerYear: new UntypedFormControl(null),
        noOfOperationalDaysPerYear: new UntypedFormControl(null),
        noOfShiftsRunPerDays: new UntypedFormControl(null),
        machineEfficiencyPercentage: new UntypedFormControl(null),
        totalAssetCostPerHr: new UntypedFormControl(null),
        totalAssetCostPerShift: new UntypedFormControl(null)
    });

    setFormField(field: string, value: string | number) {
        this.form.controls[field].setValue(Number(value).toFixed(2));
    }
    getFormField(field: string) {
        return +this.form.controls[field].value || 0;
    }
    setConfigurableData() {
        this.form.controls["totalAssetCostPerHr"].setValue(this.totalAssetCostPerHr);
        this.form.controls["totalAssetCostPerShift"].setValue(this.totalAssetCostPerShift);
        if (this.assetConfiguration.length > 0) {
            this.estimatedResidualPercentage = this.getParamsValue(this.assetConfiguration, "ESTIMATED_RESIDUAL");
            this.maintenanceDownTime = this.getParamsValue(this.assetConfiguration, "MAINT_DOWN_TIME");

            this.form.controls["noOfShiftsRunPerDays"].setValue(
                Number(this.getParamsValue(this.assetConfiguration, "NO_OF_SHIFTS_RPD")).toFixed(2)
            );

            this.setFormField(
                "machineEfficiencyPercentage",
                this.getParamsValue(this.assetConfiguration, "MACHINE_EFFICIENCY")
            );
            this.setFormField(
                "noOfOperationalDaysPerYear",
                this.getParamsValue(this.assetConfiguration, "NO_OPS_DAYS_PER_YEAR")
            );

            // this.form.controls["noOfOperationalDaysPerYear"].setValue(
            //     Number(
            //         (this.numberOfDaysOfYear - this.numberOfSundays - this.companyHoliday - +this.maintenanceDownTime) /
            //             this.noOfMonths
            //     ).toFixed(2)
            // );
        }
        this.form.patchValue(this.costingInput);
        this.form.controls["assetPurchaseCost"].setValue(this.assetPurchaseCost);
        this.setFormField("financeCost", (+this.form.controls["assetPurchaseCost"].value / 100) * 35);
        this.setTotalAsset();
    }
    ngOnInit(): void {
        this.setConfigurableData();
        if (this.action == "view") {
            this.form.disable();
        }
    }
    getParamsValue(assetConfiguration: any, label: string) {
        return assetConfiguration.find((x: any) => x?.parameterLabel == label)?.parameterName ?? 0;
    }
    reset() {
        this.form.reset();

        this.setConfigurableData();
    }

    dismissModel() {
        this.form.enable();
        this.activeModal.close(this.form.value);
    }

    setTotalAsset() {
        let assetPurchaseCost = this.getFormField("assetPurchaseCost");
        let financeCost = this.getFormField("financeCost");
        let estimatedUsefulLifeInYear = this.getFormField("estimatedUsefulLifeInYear");

        if (assetPurchaseCost && financeCost) {
            this.setFormField("totalAssetClass", +assetPurchaseCost + +financeCost);
        } else {
            this.setFormField("totalAssetClass", +assetPurchaseCost + +financeCost);
        }
        if (assetPurchaseCost && estimatedUsefulLifeInYear) {
            this.setDepreciatedCostPerYear();
        }
    }
    setDepreciatedCostPerYear() {
        let estimatedUsefulLifeInYear = this.getFormField("estimatedUsefulLifeInYear");
        let totalAssetClass = this.getFormField("totalAssetClass");

        if (estimatedUsefulLifeInYear) {
            this.setFormField("depreciatedAssetCostPerYear", +totalAssetClass / +estimatedUsefulLifeInYear);
        } else {
            this.setFormField("depreciatedAssetCostPerYear", 0);
            this.setFormField("totalAssetCostPerHr", 0);
        }

        this.setDepreciationCostPerHour();
    }
    setDepreciationCostPerHour() {
        let assetPurchaseCost = this.getFormField("assetPurchaseCost");
        let estimatedUsefulLifeInYear = this.getFormField("estimatedUsefulLifeInYear");
        let noOfShiftsRunPerDays = this.getFormField("noOfShiftsRunPerDays");
        let machineEfficiencyPercentage = this.getFormField("machineEfficiencyPercentage");
        let noOfOperationalDaysPerYear = this.getFormField("noOfOperationalDaysPerYear");
        let depreciatedAssetCostPerYear = this.getFormField("depreciatedAssetCostPerYear");

        if (!assetPurchaseCost) {
            this.toastService.warning("Pls first enter the value of Purchase Cost and Finance Cost");
            return;
        }
        if (!estimatedUsefulLifeInYear) {
            this.toastService.warning("Pls enter the value of Estimated Useful Life (Years)");
            return;
        }

        if (noOfOperationalDaysPerYear > 366) {
            this.toastService.warning("No. of Operational Days/Year Should be less than 366 Days ");
            this.setFormField("noOfOperationalDaysPerYear", 0);
            noOfOperationalDaysPerYear = this.getFormField("noOfOperationalDaysPerYear");
        }

        if (
            +depreciatedAssetCostPerYear &&
            noOfOperationalDaysPerYear &&
            +noOfShiftsRunPerDays &&
            this.shiftHr &&
            +machineEfficiencyPercentage
        ) {
            this.setFormField(
                "totalAssetCostPerHr",
                +depreciatedAssetCostPerYear /
                    +noOfOperationalDaysPerYear /
                    (+noOfShiftsRunPerDays * +this.shiftHr * +machineEfficiencyPercentage)
            );
        } else {
            this.setFormField("totalAssetCostPerHr", 0);
            this.setFormField("totalAssetCostPerShift", 0);
        }
        let totalAssetCostPerHr = this.getFormField("totalAssetCostPerHr");

        if (totalAssetCostPerHr) {
            this.setFormField("totalAssetCostPerShift", +totalAssetCostPerHr * +this.shiftHr);
        } else {
            this.setFormField("totalAssetCostPerShift", 0);
        }
    }

    changeEstimatedResidual() {
        let assetPurchaseCost = this.getFormField("assetPurchaseCost");

        if (!assetPurchaseCost) {
            this.toastService.warning("Pls first enter the value of Actual Machine Cost and Finance Cost");
            return;
        }
    }
}
