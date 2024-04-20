import {Component, OnInit} from "@angular/core";
import {DashboardService} from "@services/Dashboard.service";
import {StorageService, MenuTitleService, AppGlobalService} from "@core/services";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface QualityInterface {
    barMonthlyMRNTrends: ChartData<"bar">;
    barMonthlyMRNvsGRNTrends: ChartData<"bar">;
    allMRNCount: number;
    MRNRejectedCount: number;
    MRNPartiallyReleaseCount: number;
    GRNAwaitingForMRNCounts: number;
    MRNPendingForGINCount: number;
    MRNReleasedCount: number;
    MRNCreatedPerDay: number;
    MRNReleasedPerDay: number;
    MRNRejectedPerDay: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    title: any = "";
    totalGINLineValue: Number = 0;
    active: number = 1;
    awaiting: Number = 0;
    report: Number = 0;
    dashBoardData: QualityInterface = {
        barMonthlyMRNTrends: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyMRNvsGRNTrends: {
            labels: [],
            datasets: [
                {
                    data: [],
                    label: "GRN",
                    borderColor: "#009696",
                    backgroundColor: "#009696"
                },
                {data: [], label: "MRN"}
            ]
        },
        allMRNCount: 0,
        MRNRejectedCount: 0,
        MRNPartiallyReleaseCount: 0,
        GRNAwaitingForMRNCounts: 0,
        MRNPendingForGINCount: 0,
        MRNReleasedCount: 0,
        MRNCreatedPerDay: 0,
        MRNReleasedPerDay: 0,
        MRNRejectedPerDay: 0
    };
    lakhInWord: any = "Lakh";
    constructor(
        private storageService: StorageService,
        private store: DashboardService,
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.getAllData();
    }

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#00af4b", "#00af4b");
    public barChartOptionsStack: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions(
        "#00af4b",
        "#00af4b",
        true
    );
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    getAllData() {
        this.title = this.appGlobalService.moduleName;
        this.menuTitleService.set({
            title: `${this.title} Overview`,
            subTitle: null,
            type: null
        });
        this.store.getAllQuality({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
