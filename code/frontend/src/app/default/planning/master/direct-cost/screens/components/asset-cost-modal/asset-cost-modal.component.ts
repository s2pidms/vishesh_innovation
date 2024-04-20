import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-asset-cost-modal",
    templateUrl: "./asset-cost-modal.component.html",
    styles: [
        `
            .form-control-ls-sm {
                margin: 0px !important;
                height: 2.4rem !important;
                width: 8rem !important;
                text-align: center !important;
            }
            .form-control-ls-xs {
                margin: 0px !important;
                height: 2.4rem !important;
                width: 5rem !important;
                text-align: center !important;
            }
        `
    ]
})
export class AssetCostModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() processList: any = [];
    @Input() ESCPreviewArr: any = [];
    @Input() totalAssetCostPerUnit: any = 0;
    @Input() totalLabourCostPerUnit: any = 0;
    @Input() action: string = "create";
    @Input() oldAssetAllocationData: any = [];
    collection: number = 0;
    page: number = 1;
    pageSize: number = 6;
    column: string = "assetCode";
    direction: number = 1;
    search: string = "";
    active: number = 1;
    isPreview = false;
    isConditionPreview = false;
    isESCPreview = true;
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {
        this.processList = this.processList;
        let assetDetails = JSON.parse(JSON.stringify(this.oldAssetAllocationData));
        for (const ele of this.processList) {
            assetDetails = assetDetails.filter((x: any) => x.processId != ele.processId);
            this.ESCPreviewArr = [...this.processList, ...assetDetails];
        }
        this.collection = this.processList.length;
        if (this.action != "create") {
            this.isESCPreview = true;
            this.isConditionPreview = true;
            this.isPreview = true;
            this.oldAssetAllocationData = JSON.parse(JSON.stringify(this.ESCPreviewArr));
        }
    }

    dismissModel() {
        this.activeModal.close({
            processList: this.processList,
            totalAssetCostPerUnit: this.totalAssetCostPerUnit,
            oldAssetAllocationData: this.oldAssetAllocationData,
            totalLabourCostPerUnit: this.totalLabourCostPerUnit
        });
    }

    reset() {
        this.processList = [];
        this.processList = JSON.parse(JSON.stringify(this.oldAssetAllocationData));
        this.collection = this.processList.length;
        this.calTotalAssetCost();
    }

    calTotalAssetCost() {
        // asset cost
        let assetCostPerUnit = this.processList
            .map((y: any) => y.assetCostPerUnit || 0)
            .reduce((a: any, c: any) => +a + +c, 0);
        this.totalAssetCostPerUnit = +assetCostPerUnit.toFixed(2);

        // labour cost
        let labourCostPerUnit = this.processList
            .map((y: any) => y.labourCostPerUnit || 0)
            .reduce((a: any, c: any) => +a + +c, 0);
        this.totalLabourCostPerUnit = +labourCostPerUnit.toFixed(2);
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = JSON.parse(JSON.stringify(this.processList));
        this.processList = this.processList
            .filter((x: any) => x?.PFSeq > 0)
            .sort((a: any, b: any) => a.PFSeq - b.PFSeq);
        this.collection = this.processList.length;

        if (this.processList.length > 0) {
            this.isPreview = true;
            this.isESCPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
            this.isESCPreview = true;
        }
        this.calTotalAssetCost();
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        this.processList = JSON.parse(JSON.stringify(this.ESCPreviewArr));
        this.collection = this.processList.length;
        this.calTotalAssetCost();
    }

    setAssetCostData(ev: any, item: any) {
        let index = this.processList.map((x: any) => x.processId).indexOf(item?.processId);
        // asset cost
        if (item.outputPerHr) {
            this.processList[index].processHrs = +(+item?.specQuantity / +item?.outputPerHr).toFixed(2);
        } else {
            this.processList[index].processHrs = 0;
        }
        this.processList[index].assetCost = +(+item?.processHrs * item?.assetRatePerHr).toFixed(2);
        if (item.assetCost && item?.CAUnits) {
            this.processList[index].assetCostPerUnit = +(+item?.assetCost / +item?.CAUnits).toFixed(2);
        } else {
            this.processList[index].assetCostPerUnit = 0;
        }
        // labour cost
        this.processList[index].labourCost = +(+item?.processHrs * item?.labourRatePerHr).toFixed(2);
        if (item.labourCost && item?.CAUnits) {
            this.processList[index].labourCostPerUnit = +(+item?.labourCost / +item?.CAUnits).toFixed(2);
        } else {
            this.processList[index].labourCostPerUnit = 0;
        }

        this.calTotalAssetCost();
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.processList = this.processList;
        } else {
            this.processList = [...this.processList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
