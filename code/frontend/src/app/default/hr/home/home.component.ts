import {Component, OnInit, ViewChild} from "@angular/core";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
import {DashboardService} from "@services/Dashboard.service";
import {AppGlobalService, MenuTitleService} from "@core/services";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface HRInterface {
    barChartDataPayroll: ChartData<"bar">;
    barChartDataLeaves: ChartData<"bar">;
    monthPayrolls: number;
    paidHolidayCount: number;
    paidLeaveCount: number;
    maleEmployees: number;
    femaleEmployees: number;
    activeEmployees: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    title: any = "";
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    dashBoardData: HRInterface = {
        barChartDataPayroll: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataLeaves: {
            labels: [],
            datasets: [{data: []}]
        },
        monthPayrolls: 0,
        paidHolidayCount: 0,
        paidLeaveCount: 0,
        maleEmployees: 0,
        femaleEmployees: 0,
        activeEmployees: 0
    };

    constructor(
        private menuTitleService: MenuTitleService,
        private hrSer: DashboardService,
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
    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#007daf", "#007daf");

    public barChartPlugins = [DataLabelsPlugin];
    public barChartType: ChartType = "bar";

    getAllData() {
        this.hrSer.getAllHr({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
