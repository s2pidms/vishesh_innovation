import {Component, OnInit, ViewChild} from "@angular/core";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {DashboardService} from "@services/Dashboard.service";
import {MenuTitleService, AppGlobalService} from "@core/services";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface SupportInterface {
    barChartDataTicketCountByTicketType: ChartData<"bar">;
    barChartDataTicketCountByTicketSeverity: ChartData<"bar">;
    totalTicketsYTD: number;
    totalTicketsMTD: number;
    closedTickets: number;
    fixedTickets: number;
    openTickets: number;
    WIPTickets: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    title: any = "";
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    dashBoardData: SupportInterface = {
        barChartDataTicketCountByTicketType: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataTicketCountByTicketSeverity: {
            labels: [],
            datasets: [{data: []}]
        },
        totalTicketsYTD: 0,
        totalTicketsMTD: 0,
        closedTickets: 0,
        fixedTickets: 0,
        openTickets: 0,
        WIPTickets: 0
    };

    constructor(
        private menuTitleService: MenuTitleService,
        private dashboardService: DashboardService,
        private appGlobalService: AppGlobalService
    ) {}
    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.menuTitleService.set({
            title: `Support Overview`,
            subTitle: null,
            type: null
        });
        this.getAllData();
    }
    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#007daf", "#007daf");

    public barChartPlugins = [DataLabelsPlugin];
    public barChartType: ChartType = "bar";

    getAllData() {
        this.dashboardService.getAllSupport({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
