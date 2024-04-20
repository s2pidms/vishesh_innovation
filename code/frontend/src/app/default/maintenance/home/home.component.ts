import {Component, OnInit, ViewChild} from "@angular/core";
import {AppGlobalService, StorageService, MenuTitleService} from "@core/services";
import {DashboardService} from "@services/Dashboard.service";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface MaintenanceInterface {
    barMonthlyMaintenanceCost: ChartData<"bar">;
    barMonthlyWOStatusCount: ChartData<"bar">;
    equipmentsData: number;
    equipmentsDataCount: number;
    assetsDataCount: number;
    assetsDataCost: number;
    qualityEquipmentCount: number;
    ytdEquipmentCost: number;
    workOrderCompletedRate: number;
    calibrationDueCount: number;
    taskScheduleCompleted: number;
    taskScheduleEfficiency: number;
    ytdCreditNote: number;
    totalNoOfDueCalibrationPerDay: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    title: any = "";
    active: number = 1;
    activeCards: number = 1;

    dashBoardData: MaintenanceInterface = {
        barMonthlyMaintenanceCost: {
            labels: [],
            datasets: [{data: []}]
        },

        barMonthlyWOStatusCount: {
            labels: [],
            datasets: [{data: []}]
        },
        assetsDataCount: 0,
        assetsDataCost: 0,
        equipmentsData: 0,
        equipmentsDataCount: 0,
        qualityEquipmentCount: 0,
        ytdEquipmentCost: 0,
        workOrderCompletedRate: 0,
        calibrationDueCount: 0,
        taskScheduleCompleted: 0,
        taskScheduleEfficiency: 0,
        ytdCreditNote: 0,
        totalNoOfDueCalibrationPerDay: 0
    };

    lakhInWord: any = "Lakh";

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#fa3264", "#fa3264");
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    constructor(
        private storageService: StorageService,
        private maintenance: DashboardService,
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.getAllData();
        this.title = this.appGlobalService.moduleName;
        this.menuTitleService.set({
            title: `${this.title} Overview`,
            subTitle: null,
            type: null
        });
    }

    getAllData() {
        this.maintenance.getAllMaintenance({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
