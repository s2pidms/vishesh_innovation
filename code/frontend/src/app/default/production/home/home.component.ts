import {Component, OnInit, ViewChild} from "@angular/core";
import {DashboardService} from "@services/Dashboard.service";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
import {AppGlobalService, MenuTitleService} from "@core/services";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
interface ProductionInterface {
    barChartDataEmpPaidSalary: ChartData<"bar">;
    barChartDataFGIEntry: ChartData<"bar">;
    totalRequisitions: number;
    approvedRequisitions: number;
    pendingRequisitions: number;
    totalFGInwardEntries: number;
    totalGoodsRequisitionCreatedPerDay: number;
    totalGoodsIssueAgainstGRPerDay: number;
    totalSKUProducedPerDay: number;
    totalChildPartProducedPerDay: number;
    totalGrandChildPartProducedPerDay: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    title: any = "";
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    dashBoardData: ProductionInterface = {
        barChartDataEmpPaidSalary: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataFGIEntry: {
            labels: [],
            datasets: [{data: []}]
        },
        totalRequisitions: 0,
        approvedRequisitions: 0,
        pendingRequisitions: 0,
        totalFGInwardEntries: 0,
        totalGoodsRequisitionCreatedPerDay: 0,
        totalGoodsIssueAgainstGRPerDay: 0,
        totalSKUProducedPerDay: 0,
        totalChildPartProducedPerDay: 0,
        totalGrandChildPartProducedPerDay: 0
    };

    constructor(
        private menuTitleService: MenuTitleService,
        private productionService: DashboardService,
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

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#007dfa", "#007dfa");
    public barChartPlugins = [DataLabelsPlugin];
    public barChartType: ChartType = "bar";
    getAllData() {
        this.productionService.getAllProduction({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
