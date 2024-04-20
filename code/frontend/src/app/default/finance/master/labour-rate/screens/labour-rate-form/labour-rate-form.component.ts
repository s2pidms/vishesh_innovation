import {Component, OnInit} from "@angular/core";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ILabourRateMasterData} from "@mocks/models/finance/masters";
import {LabourRateMasterService} from "@services/finance";

@Component({
    selector: "app-labour-rate-form",
    templateUrl: "./labour-rate-form.component.html"
})
export class LabourRateFormComponent implements OnInit {
    tableData: ILabourRateMasterData[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private labourRateMasterService: LabourRateMasterService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.getInitialData();
    }

    update() {
        this.spinner.show();
        this.labourRateMasterService.update(this.tableData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.getInitialData();
            this.reset();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.labourRateMasterService.getAllMasterData({}).subscribe(success => {
            this.tableData = success.map((x: any) => {
                x.revisionDate = this.utilityService.getFormatDate(x.revisionDate, "YYYY-MM-DD");
                return x;
            });
            this.spinner.hide();
        });
    }

    setSalaryPerHrs(item: any, index: any) {
        if (item.monthlySalary && item.daysPerMonth && item.shiftHrs) {
            this.tableData[index].salaryPerHour = +(
                +item?.monthlySalary /
                +item?.daysPerMonth /
                +item?.shiftHrs
            ).toFixed(2);
        } else {
            this.tableData[index].salaryPerHour = 0;
        }
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
