import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {SpinnerService, StorageService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {CostSheetComponentService} from "@services/settings";
import {NPDMasterService} from "@services/business-leads";
import {ICostEstimateCalculatorMasterData} from "@mocks/models/business-leads/masters";
@Component({
    selector: "app-cost-estimate-calculator",
    templateUrl: "./cost-estimate-calculator.component.html"
})
export class CostEstimateCalculatorComponent implements OnInit {
    @ViewChild("elementToPrint") elementToPrint: ElementRef | any;
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    tableData: any = [];
    originTableData: any = [];
    skuId: string = "";
    SKUName: any = "";
    SKUNo: any = "";
    SKUDescription: any = "";
    primaryUnit: any = "";
    crore = "";
    masterData: ICostEstimateCalculatorMasterData = {
        costSheetList: [],
        DSKUOptions: []
    };

    constructor(
        private npdMasterService: NPDMasterService,
        private costEstimateService: CostSheetComponentService,
        private router: Router,
        private spinner: SpinnerService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.getAllMasterData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.skuId = "";
        this.SKUDescription = "";
        this.primaryUnit = "";
        this.crore = "Cr";
        this.masterData.costSheetList = [];
        this.getAllMasterData();
    }

    getAllMasterData() {
        this.spinner.show();
        this.costEstimateService.getAllDSKUCostEstimateMasterData({}).subscribe(result => {
            if (result) {
                this.masterData = result;
                this.originTableData = this.masterData?.costSheetList;
            }
            this.spinner.hide();
        });
    }

    getAllSOConfirmationById(ev: any) {
        this.spinner.show();
        this.SKUNo = ev.dSKUNo;
        this.SKUName = ev.SKUName;
        this.SKUDescription = ev.SKUDescription;
        this.primaryUnit = ev.primaryUnit;
        this.npdMasterService.getAllNPDMasterByDSKUId(this.skuId).subscribe(success => {
            if (!!success.costSheetInfo && success.costSheetInfo.length) {
                this.masterData.costSheetList = success?.costSheetInfo;
            } else {
                this.masterData.costSheetList = this.originTableData;
            }
            this.spinner.hide();
        });
    }

    change() {
        let data = this.masterData?.costSheetList.map((x: any) => {
            if (x.isTotal) {
                if (x.componentType == "Direct") {
                    x.costPerSKUUnit = +Number(
                        this.masterData?.costSheetList
                            .filter((y: any) => y.componentType == "Direct" && !y.isTotal)
                            .map((z: any) => +z.costPerSKUUnit)
                            .reduce((a: any, c: any) => a + c)
                    ).toFixed(2);
                }
                if (x.componentType == "Indirect") {
                    x.costPerSKUUnit = +Number(
                        this.masterData?.costSheetList
                            .filter((y: any) => y.componentType == "Indirect" && !y.isTotal)
                            .map((z: any) => +z.costPerSKUUnit)
                            .reduce((a: any, c: any) => a + c)
                    ).toFixed(2);
                }
                if (x.componentType == "Direct + Indirect") {
                    x.costPerSKUUnit = +Number(
                        this.masterData?.costSheetList[
                            this.masterData?.costSheetList.findIndex((y: any) => y.componentType == "Direct" && y.isTotal)
                        ].costPerSKUUnit +
                            this.masterData?.costSheetList[
                                this.masterData?.costSheetList.findIndex((y: any) => y.componentType == "Indirect" && y.isTotal)
                            ].costPerSKUUnit
                    ).toFixed(2);
                }
            }
            return x;
        });

        this.masterData.costSheetList = data.map((x: any) => {
            x.percentage =
                !x.costPerSKUUnit ||
                !this.masterData?.costSheetList[
                    this.masterData?.costSheetList.findIndex((y: any) => y.componentType == "Direct + Indirect" && y.isTotal)
                ].costPerSKUUnit
                    ? 0
                    : +Number(
                          (x.costPerSKUUnit * 100) /
                              this.masterData?.costSheetList[
                                  this.masterData?.costSheetList.findIndex(
                                      (y: any) => y.componentType == "Direct + Indirect" && y.isTotal
                                  )
                              ].costPerSKUUnit
                      ).toFixed(2);
            return x;
        });
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.tableData = this.tableData;
        } else {
            this.tableData = [...this.tableData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    printElement() {
        let costEstimateCalculateData = {
            type: "D-SKU",
            SKUNo: this.SKUNo,
            SKUName: this.SKUName,
            SKUDescription: this.SKUDescription,
            primaryUnit: this.primaryUnit,
            costSheetArr: this.masterData?.costSheetList
        };
        this.storageService.set("costEstimateCalculateData", costEstimateCalculateData);
        window.open(`${window.location.origin}#/print/cost_estimate_cal_print?action=print`, "_blank");
    }
}
