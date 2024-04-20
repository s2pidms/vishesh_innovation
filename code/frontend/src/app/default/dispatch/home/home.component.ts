import {Component, OnInit, ViewChild} from "@angular/core";
import {DashboardService} from "@services/Dashboard.service";
import {BaseChartDirective} from "ng2-charts";
import {MenuTitleService, AppGlobalService} from "@core/services";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface DispatchInterface {
    barChartDataShipmentCountTrend: ChartData<"bar">;
    barChartDataTaxInvoiceCountTrend: ChartData<"bar">;
    barChartDataShipmentCities: ChartData<"bar">;
    barChartDataCustomersByValue: ChartData<"bar">;
    totalShipmentsCounts: number;
    totalPendingShipments: number;
    totalShipmentsValue: number;
    totalTaxableValue: number;
    totalTaxValue: number;
    topDestination: string;
    totalShipmentApprovedPerDay: number;
    invoiceBookedCountPerDay: number;
    totalTaxInvoicedValueWithoutTaxPerDay: number;
    totalTaxInvoicedValueWithTaxPerDay: number;
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

    dashBoardData: DispatchInterface = {
        barChartDataShipmentCountTrend: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataTaxInvoiceCountTrend: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataShipmentCities: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataCustomersByValue: {
            labels: [],
            datasets: [{data: []}]
        },
        totalShipmentsCounts: 0,
        totalPendingShipments: 0,
        totalShipmentsValue: 0,
        totalTaxableValue: 0,
        totalTaxValue: 0,
        topDestination: "",
        totalShipmentApprovedPerDay: 0,
        invoiceBookedCountPerDay: 0,
        totalTaxInvoicedValueWithoutTaxPerDay: 0,
        totalTaxInvoicedValueWithTaxPerDay: 0
    };
    noInWord: any = "Nos.";
    lakhInWord: any = "Lakh";

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#fa3264", "#fa3264");
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    constructor(
        private sales: DashboardService,
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.menuTitleService.set({
            title: `${this.title}  Overview`,
            subTitle: null,
            type: null
        });
        this.getAllData();
    }

    getAllData() {
        const lakh = 100000;
        this.sales.getAllDispatch({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
