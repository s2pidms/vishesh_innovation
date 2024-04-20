import {Component, OnInit, ViewChild} from "@angular/core";
import {AppGlobalService, StorageService, MenuTitleService} from "@core/services";
import {DashboardService} from "@services/Dashboard.service";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface SaleInterface {
    barChartDataCustomerExports: ChartData<"bar">;
    barChartDataCustomerDomestic: ChartData<"bar">;
    barChartDataSKUsExports: ChartData<"bar">;
    barChartDataSKUsDomestic: ChartData<"bar">;
    barMonthlySalesTrendDomestic: ChartData<"bar">;
    barMonthlySalesTrendExports: ChartData<"bar">;
    barMonthlyTaxInvoiceTrendDomestic: ChartData<"bar">;
    barMonthlyTaxInvoiceTrendExports: ChartData<"bar">;
    ytdNetSales: number;
    mtdNetSales: number;
    ytdNetSalesInvoice: number;
    mtdNetSalesInvoice: number;
    ytdNetService: number;
    mtdNetService: number;
    avgMTDNetSales: number;
    soBalValue: number;
    totalPICount: number;
    customerCount: number;
    SKUsCount: number;
    piConversionRate: number;
    ytdSOValue: number;
    mtdSOValue: number;
    ytdCreditNote: number;
    mtdCreditNote: number;
    totalNoOfBookedOrderPerDay: number;
    totalBookedValuePerDay: number;
    totalBookedInvoicesPerDay: number;
    totalInvoicedValueWithoutTaxPerDay: number;
    totalInvoicedValueWithTaxPerDay: number;
    totalCreditNotePerDay: number;
    totalCreditNoteValuePerDay: number;
    totalDispatchesPerDay: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    user: any = {};
    active: number = 1;
    activeCards: number = 1;
    title: any = "";

    dashBoardData: SaleInterface = {
        barChartDataCustomerExports: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataCustomerDomestic: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataSKUsExports: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataSKUsDomestic: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlySalesTrendDomestic: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlySalesTrendExports: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyTaxInvoiceTrendDomestic: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyTaxInvoiceTrendExports: {
            labels: [],
            datasets: [{data: []}]
        },
        soBalValue: 0,
        customerCount: 0,
        SKUsCount: 0,
        ytdNetSales: 0,
        mtdNetSales: 0,
        avgMTDNetSales: 0,
        totalPICount: 0,
        ytdSOValue: 0,
        mtdSOValue: 0,
        ytdCreditNote: 0,
        mtdCreditNote: 0,
        piConversionRate: 0,
        ytdNetSalesInvoice: 0,
        mtdNetSalesInvoice: 0,
        ytdNetService: 0,
        mtdNetService: 0,
        totalNoOfBookedOrderPerDay: 0,
        totalBookedValuePerDay: 0,
        totalBookedInvoicesPerDay: 0,
        totalInvoicedValueWithoutTaxPerDay: 0,
        totalInvoicedValueWithTaxPerDay: 0,
        totalCreditNotePerDay: 0,
        totalCreditNoteValuePerDay: 0,
        totalDispatchesPerDay: 0
    };

    lakhInWord: any = "Lakh";
    lakh = 100000;

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#007daf", "#007daf");
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    constructor(
        private storageService: StorageService,
        private sales: DashboardService,
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.getAllData();
        this.menuTitleService.set({
            title: `${this.title} Overview`,
            subTitle: null,
            type: null
        });
    }
    private divideByLakh(value: number) {
        return +(value ?? 0) / 100000;
    }

    getAllData() {
        this.sales.getAllSales({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
