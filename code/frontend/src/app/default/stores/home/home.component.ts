import {Component, OnInit} from "@angular/core";
import {DashboardService} from "@services/Dashboard.service";
import {AppGlobalService, MenuTitleService, StorageService} from "@core/services";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface StoreInterface {
    barMonthlyGRNVolume: ChartData<"bar">;
    barMonthlyGIStatus: ChartData<"bar">;
    GINItemCount: number;
    totalInventoryValue: number;
    GRNCounts: number;
    GINCounts: number;
    GRCounts: number;
    GICounts: number;
    totalGRNCreatedPerDay: number;
    totalGINCreatedPerDay: number;
    totalGoodsIssueAgainstGR: number;
    totalInventoryValuePerDay: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    totalGINLineValue: Number = 0;
    active: number = 1;
    awaiting: Number = 0;
    report: Number = 0;
    dashBoardData: StoreInterface = {
        barMonthlyGRNVolume: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyGIStatus: {
            labels: [],
            datasets: [
                {
                    data: [],
                    label: "Requested",
                    borderColor: "#009658",
                    backgroundColor: "#009658"
                },
                {data: [], label: "Fulfilled"}
            ]
        },
        GINItemCount: 0,
        totalInventoryValue: 0,
        GRNCounts: 0,
        GINCounts: 0,
        GRCounts: 0,
        GICounts: 0,
        totalGRNCreatedPerDay: 0,
        totalGINCreatedPerDay: 0,
        totalGoodsIssueAgainstGR: 0,
        totalInventoryValuePerDay: 0
    };
    lakhInWord: any = "Lakh";
    title: any = "";
    lakh = 100000;
    constructor(
        private store: DashboardService,
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

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#009696", "#009696");

    public barChartOptionsStack: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions(
        "#009696",
        "#009696",
        true
    );

    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    getAllData() {
        this.store.getAllStores({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
