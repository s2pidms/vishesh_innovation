import {Component, OnInit, ViewChild} from "@angular/core";
import {DashboardService} from "@services/Dashboard.service";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {AppGlobalService, StorageService, MenuTitleService} from "@core/services";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface BusinessLeadsInterFace {
    barChartDataMonthlyProspectTrend: ChartData<"bar">;
    barChartDataMonthlyNPDTrend: ChartData<"bar">;
    barChartDataStatusWiseNPDCount: ChartData<"bar">;
    mtdProspectCount: number;
    ytdProspectCount: number;
    mtdNPDCount: number;
    ytdNPDCount: number;
    totalNoOfNPDLostPerDay: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    title: any = "";
    active: number = 1;

    dashBoardData: BusinessLeadsInterFace = {
        mtdProspectCount: 0,
        ytdProspectCount: 0,
        mtdNPDCount: 0,
        ytdNPDCount: 0,
        totalNoOfNPDLostPerDay: 0,
        barChartDataMonthlyProspectTrend: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataMonthlyNPDTrend: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataStatusWiseNPDCount: {
            labels: [],
            datasets: [{data: []}]
        }
    };
    noInWord: any = "Nos.";
    lakhInWord: any = "Lakh";
    lakh = 100000;

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#007DFA", "#007DFA");
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    constructor(
        private dashboardService: DashboardService,
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.menuTitleService.set({
            title: `${this.title} Overview`,
            subTitle: null,
            type: null
        });
        this.getAllData();
    }

    getAllData() {
        this.dashboardService.getAllBusinessLeads({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
