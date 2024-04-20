import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-asset-master-info",
    templateUrl: "./asset-master-info.component.html"
})
export class AssetMasterInfoComponent implements OnInit {
    @Input() action: string = "";
    @Input() totalAssetCostPerHr: any = null;
    @Input() totalAssetCostPerShift: any = null;
    @Input() costingInput: any = {};
    @Input() depreciationMethodArr: any = [];
    @Input() assetConfiguration: any = [];
    @Input() energySpecification: any = null;
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
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}
    form = new UntypedFormGroup({
        actualMachineCost: new UntypedFormControl(null),
        financeCost: new UntypedFormControl(null),
        totalAssetClass: new UntypedFormControl(null),
        estimatedResidual: new UntypedFormControl(null),
        estimatedUsefulLifeInYear: new UntypedFormControl(null),
        depreciationStartDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        usedLifeTillDateInYear: new UntypedFormControl(null),
        estimatedBalanceLifeInYear: new UntypedFormControl(null),
        noOfOperationalDaysPerMonth: new UntypedFormControl(null),
        noOfShiftsRunPerDays: new UntypedFormControl(null),
        machineEfficiencyPercentage: new UntypedFormControl(null),
        assetCostDepreciationPerHr: new UntypedFormControl(null),
        ratedPowerOfMachine: new UntypedFormControl(null),
        energyConsumptionPerHr: new UntypedFormControl(null),
        unitRate: new UntypedFormControl(null),
        energyCostPerHour: new UntypedFormControl(null),
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

            this.form.controls["noOfOperationalDaysPerMonth"].setValue(
                Number(
                    (this.numberOfDaysOfYear - this.numberOfSundays - this.companyHoliday - +this.maintenanceDownTime) /
                        this.noOfMonths
                ).toFixed(2)
            );
        }
        this.form.patchValue(this.costingInput);
    }
    ngOnInit(): void {
        this.setConfigurableData();
        if (this.action == "view") {
            this.form.disable();
        }
        if ([false, undefined, null].includes(this.energySpecification)) {
            this.form.controls["energyConsumptionPerHr"].disable();
            this.form.controls["unitRate"].disable();
            this.form.controls["energyCostPerHour"].disable();
            this.form.controls["totalAssetCostPerHr"].disable();
            this.form.controls["totalAssetCostPerShift"].disable();
        }
    }
    getParamsValue(assetConfiguration: any, label: string) {
        return assetConfiguration.find((x: any) => x?.parameterLabel == label)?.parameterName ?? 0;
    }
    reset() {
        this.form.reset();
        this.form.controls["depreciationStartDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
        this.setConfigurableData();
    }

    dismissModel() {
        this.form.enable();
        this.activeModal.close(this.form.value);
    }

    setTotalAsset() {
        let actualMachineCost = this.getFormField("actualMachineCost");
        let financeCost = this.getFormField("financeCost");
        let ratedPowerOfMachine = this.getFormField("ratedPowerOfMachine");
        let unitRate = this.getFormField("unitRate");
        let estimatedUsefulLifeInYear = this.getFormField("estimatedUsefulLifeInYear");

        if (actualMachineCost && financeCost) {
            this.setFormField("totalAssetClass", +actualMachineCost + +financeCost);
            this.setFormField("estimatedResidual", +actualMachineCost * (+this.estimatedResidualPercentage / 100));
        } else {
            this.setFormField("totalAssetClass", +actualMachineCost + +financeCost);
            this.setFormField("estimatedResidual", +actualMachineCost * (+this.estimatedResidualPercentage / 100));
        }
        if (actualMachineCost && estimatedUsefulLifeInYear) {
            this.changeEstimatedUsefulLife();
        }

        if (ratedPowerOfMachine && unitRate) {
            this.setCostingInputsDetails();
        }
    }

    changeEstimatedUsefulLife() {
        let actualMachineCost = this.getFormField("actualMachineCost");
        let estimatedUsefulLifeInYear = this.getFormField("estimatedUsefulLifeInYear");
        let depreciationStartDate = this.form.controls["depreciationStartDate"].value;
        let noOfShiftsRunPerDays = this.getFormField("noOfShiftsRunPerDays");
        let machineEfficiencyPercentage = this.getFormField("machineEfficiencyPercentage");
        let estimatedResidual = this.getFormField("estimatedResidual");
        let estimatedBalanceLifeInYear = this.getFormField("estimatedBalanceLifeInYear");
        let noOfOperationalDaysPerMonth = this.getFormField("noOfOperationalDaysPerMonth");
        let todayDate = this.utilityService.getTodayDate("YYYY-MM-DD");
        let ratedPowerOfMachine = this.getFormField("ratedPowerOfMachine");
        let unitRate = this.getFormField("unitRate");

        if (!actualMachineCost) {
            this.toastService.warning("Pls first enter the value of Actual Machine Cost and Finance Cost");
            return;
        }
        if (!estimatedUsefulLifeInYear) {
            this.toastService.warning("Pls enter the value of Estimated Useful Life (Years)");
            return;
        }
        if (depreciationStartDate) {
            let depreciationStartDiffDate = this.utilityService.getDiffDate(todayDate, depreciationStartDate, "days");
            this.setFormField("usedLifeTillDateInYear", +depreciationStartDiffDate / +this.numberOfDaysOfYear);
            this.form.controls["estimatedBalanceLifeInYear"].setValue(
                Number(+estimatedUsefulLifeInYear - +depreciationStartDiffDate / +this.numberOfDaysOfYear).toFixed(2)
            );
            estimatedBalanceLifeInYear = this.getFormField("estimatedBalanceLifeInYear");
        } else {
            this.toastService.warning("Pls select the Date of Depreciation start");
            return;
        }

        if (
            +estimatedBalanceLifeInYear &&
            this.noOfMonths &&
            +noOfOperationalDaysPerMonth &&
            +noOfShiftsRunPerDays &&
            this.shiftHr &&
            +machineEfficiencyPercentage
        ) {
            this.setFormField(
                "assetCostDepreciationPerHr",
                (+actualMachineCost - +estimatedResidual) /
                    (+estimatedBalanceLifeInYear *
                        this.noOfMonths *
                        +noOfOperationalDaysPerMonth *
                        +noOfShiftsRunPerDays *
                        this.shiftHr *
                        +machineEfficiencyPercentage)
            );
        } else {
            this.setFormField("assetCostDepreciationPerHr", 0);
        }

        if (ratedPowerOfMachine && unitRate) {
            this.setCostingInputsDetails();
        }
    }

    setCostingInputsDetails() {
        let ratedPowerOfMachine = this.getFormField("ratedPowerOfMachine");
        let unitRate = this.getFormField("unitRate");
        let assetCostDepreciationPerHr = this.getFormField("assetCostDepreciationPerHr");
        let energyCostPerHour = this.getFormField("energyCostPerHour");
        let energyConsumptionPerHr = this.getFormField("energyConsumptionPerHr");
        if (!ratedPowerOfMachine) {
            this.toastService.warning("Pls enter the value of Rated Power of machine kW ");
            return;
        }
        if (!unitRate) {
            this.toastService.warning("Pls enter the value of Unit rate (at higher tier) ");
            return;
        }
        this.setFormField("energyCostPerHour", +energyConsumptionPerHr * +unitRate);
        energyCostPerHour = this.getFormField("energyCostPerHour");
        this.setFormField("totalAssetCostPerHr", +assetCostDepreciationPerHr + +energyCostPerHour);
        let totalAssetCostPerHr = this.getFormField("totalAssetCostPerHr");
        this.setFormField("totalAssetCostPerShift", +totalAssetCostPerHr * this.shiftHr);
    }
    changeEnergyConsumptionPerHr() {
        let ratedPowerOfMachine = this.getFormField("ratedPowerOfMachine");
        let unitRate = this.getFormField("unitRate");

        if (!ratedPowerOfMachine) {
            this.toastService.warning("Pls enter the value of Rated Power of machine kW ");
            return;
        }
        this.setFormField("energyConsumptionPerHr", +ratedPowerOfMachine * 1);

        if (ratedPowerOfMachine && unitRate) {
            this.setCostingInputsDetails();
        }
    }

    changeEstimatedResidual() {
        let actualMachineCost = this.getFormField("actualMachineCost");
        let estimatedUsefulLifeInYear = this.getFormField("estimatedUsefulLifeInYear");
        let depreciationStartDate = this.form.controls["depreciationStartDate"].value;
        let noOfShiftsRunPerDays = this.getFormField("noOfShiftsRunPerDays");
        let machineEfficiencyPercentage = this.getFormField("machineEfficiencyPercentage");
        let estimatedResidual = this.getFormField("estimatedResidual");
        let estimatedBalanceLifeInYear = this.getFormField("estimatedBalanceLifeInYear");
        let noOfOperationalDaysPerMonth = this.getFormField("noOfOperationalDaysPerMonth");
        let todayDate = this.utilityService.getTodayDate("YYYY-MM-DD");
        let ratedPowerOfMachine = this.getFormField("ratedPowerOfMachine");
        let unitRate = this.getFormField("unitRate");

        if (!actualMachineCost) {
            this.toastService.warning("Pls first enter the value of Actual Machine Cost and Finance Cost");
            return;
        }
        if (depreciationStartDate) {
            let depreciationStartDiffDate = this.utilityService.getDiffDate(todayDate, depreciationStartDate, "days");
            this.setFormField("usedLifeTillDateInYear", +depreciationStartDiffDate / +this.numberOfDaysOfYear);
            this.form.controls["estimatedBalanceLifeInYear"].setValue(
                Number(+estimatedUsefulLifeInYear - +depreciationStartDiffDate / +this.numberOfDaysOfYear).toFixed(2)
            );
            estimatedBalanceLifeInYear = this.getFormField("estimatedBalanceLifeInYear");
        } else {
            this.toastService.warning("Pls select the Date of Depreciation start");
            return;
        }

        if (
            +estimatedBalanceLifeInYear &&
            this.noOfMonths &&
            +noOfOperationalDaysPerMonth &&
            +noOfShiftsRunPerDays &&
            this.shiftHr &&
            +machineEfficiencyPercentage
        ) {
            this.setFormField(
                "assetCostDepreciationPerHr",
                (+actualMachineCost - +estimatedResidual) /
                    (+estimatedBalanceLifeInYear *
                        this.noOfMonths *
                        +noOfOperationalDaysPerMonth *
                        +noOfShiftsRunPerDays *
                        this.shiftHr *
                        +machineEfficiencyPercentage)
            );
        } else {
            this.setFormField("assetCostDepreciationPerHr", 0);
        }

        if (ratedPowerOfMachine && unitRate) {
            this.setCostingInputsDetails();
        }
    }
}
