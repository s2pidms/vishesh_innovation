import {Component, OnInit, ViewChild} from "@angular/core";
import {AppGlobalService, MenuTitleService} from "@core/services";
import {DashboardService} from "@services/Dashboard.service";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface PlanningInterface {
    barMonthlyMaintenanceCost: ChartData<"bar">;
    barMonthlyWOStatusCount: ChartData<"bar">;
    totalNoOfSkuBOM: number;
    totalNoOfChildPartBOM: number;
    totalNoOfGrChildPartBOM: number;
    totalNoOfInHouseChildPart: number;
    totalNoOfInHouseGrChildPart: number;
    totalNoOfOutsourcedChildPart: number;
    totalNoOfOutsourcedGrChildPart: number;
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

    dashBoardData: PlanningInterface = {
        barMonthlyMaintenanceCost: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyWOStatusCount: {
            labels: [],
            datasets: [{data: []}]
        },
        totalNoOfSkuBOM: 0,
        totalNoOfChildPartBOM: 0,
        totalNoOfGrChildPartBOM: 0,
        totalNoOfInHouseChildPart: 0,
        totalNoOfInHouseGrChildPart: 0,
        totalNoOfOutsourcedChildPart: 0,
        totalNoOfOutsourcedGrChildPart: 0
    };

    lakhInWord: any = "Lakh";

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#fa3264", "#fa3264");
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    constructor(
        private dashboardService: DashboardService,
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
        this.dashboardService.getAllPlanning({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
