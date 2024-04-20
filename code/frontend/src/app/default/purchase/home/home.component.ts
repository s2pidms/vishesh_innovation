import {Component, OnInit, ViewChild} from "@angular/core";
import {BaseChartDirective} from "ng2-charts";
import {DashboardService} from "@services/Dashboard.service";
import {AppGlobalService, MenuTitleService} from "@core/services";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import {GRAPH_CONSTANT} from "@mocks/graph.constant";
interface PurchaseInterface {
    barChartDataSupplierImports: ChartData<"bar">;
    barChartDataSupplierDomestic: ChartData<"bar">;
    barChartDataItemsImports: ChartData<"bar">;
    barChartDataItemsDomestic: ChartData<"bar">;
    barMonthlyDomesticPurchaseCount: ChartData<"bar">;
    barMonthlyImportsPurchaseOrderCount: ChartData<"bar">;
    barMonthlyDomesticPurchaseOrderData: ChartData<"bar">;
    barMonthlyImportsPurchaseOrderData: ChartData<"bar">;
    ppvTotalValue: number;
    ppvRatio: number;
    itemsCount: number;
    purchaseYTDImports: number;
    purchaseYTDDomestics: number;
    purchaseMTDImports: number;
    purchaseMTDDomestics: number;
    supplierDomestics: number;
    supplierImports: number;
    debitNoteMTD: number;
    debitNoteYTD: number;
    totalSupplier: number;
    purchaseOrderPerDay: number;
    purchaseOrderTotalPerDay: number;
    servicePurchaseOrderPerDay: number;
    servicePurchaseOrderTotalPerDay: number;
    debitNotePerDay: number;
    debitNoteTotalPerDay: number;
    outstandingPOPerDay: number;
    inventoryValuePerDay: number;
    unit: string;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    active: number = 1;
    activeCards: number = 1;
    title: any = "";
    lakhInWord = "Lakh";
    dashBoardData: PurchaseInterface = {
        purchaseYTDImports: 0,
        purchaseYTDDomestics: 0,
        purchaseMTDImports: 0,
        purchaseMTDDomestics: 0,
        supplierDomestics: 0,
        supplierImports: 0,
        itemsCount: 0,
        debitNoteMTD: 0,
        debitNoteYTD: 0,
        ppvTotalValue: 0,
        ppvRatio: 0,
        totalSupplier: 0,
        purchaseOrderPerDay: 0,
        purchaseOrderTotalPerDay: 0,
        servicePurchaseOrderPerDay: 0,
        servicePurchaseOrderTotalPerDay: 0,
        debitNotePerDay: 0,
        debitNoteTotalPerDay: 0,
        outstandingPOPerDay: 0,
        inventoryValuePerDay: 0,
        unit: "",
        barChartDataSupplierImports: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataSupplierDomestic: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataItemsImports: {
            labels: [],
            datasets: [{data: []}]
        },
        barChartDataItemsDomestic: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyDomesticPurchaseCount: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyImportsPurchaseOrderCount: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyDomesticPurchaseOrderData: {
            labels: [],
            datasets: [{data: []}]
        },
        barMonthlyImportsPurchaseOrderData: {
            labels: [],
            datasets: [{data: []}]
        }
    };

    public barChartOptions: ChartConfiguration["options"] | any = GRAPH_CONSTANT.barChartOptions("#fa0096", "#fa0096");
    public barChartType: ChartType = "bar";
    public barChartPlugins = [DataLabelsPlugin];

    constructor(
        private DashboardService: DashboardService,
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
        this.DashboardService.getAllPurchase({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
