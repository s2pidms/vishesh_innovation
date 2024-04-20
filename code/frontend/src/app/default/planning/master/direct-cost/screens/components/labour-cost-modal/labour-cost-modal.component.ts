import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-labour-cost-modal",
    templateUrl: "./labour-cost-modal.component.html",
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
export class LabourCostModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() processList: any = [];
    @Input() ESCPreviewArr: any = [];
    @Input() totalAssetCostPerUnit: any = 0;
    @Input() totalLabourCostPerUnit: any = 0;
    @Input() action: string = "create";
    @Input() oldAssetAllocationData: any = [];
    @Input() labourOldAllocationData: any = [];
    collection: number = 0;
    page: number = 1;
    pageSize: number = 6;
    column: string = "assetCode";
    direction: number = 1;
    search: string = "";
    active: number = 1;
    isPreview = false;
    isConditionPreview = false;
    isESCPreview = false;
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {
        this.oldAssetAllocationData = JSON.parse(JSON.stringify(this.processList));
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
            oldAssetAllocationData: this.oldAssetAllocationData,
            totalLabourCostPerUnit: this.totalLabourCostPerUnit,
            totalAssetCostPerUnit: this.totalAssetCostPerUnit
        });
    }

    reset() {
        this.processList = [];
        this.processList = JSON.parse(JSON.stringify(this.oldAssetAllocationData));
        this.collection = this.processList.length;
        this.calTotalLabourCost();
    }

    calTotalLabourCost() {
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
        this.calTotalLabourCost();
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        this.processList = JSON.parse(JSON.stringify(this.ESCPreviewArr));
        if (this.action == "create") {
            let assetDetails = JSON.parse(JSON.stringify(this.labourOldAllocationData));
            for (const ele of this.ESCPreviewArr) {
                assetDetails = assetDetails.filter((x: any) => x.processId != ele.processId);
                this.processList = [...this.ESCPreviewArr, ...assetDetails];
            }
        }
        this.collection = this.processList.length;
        this.calTotalLabourCost();
    }

    setLabourCostData(ev: any, item: any) {
        let index = this.processList.map((x: any) => x.processId).indexOf(item?.processId);
        // labour cost
        if (item.outputPerHr) {
            this.processList[index].processHrs = +(+item?.specQuantity / +item?.outputPerHr).toFixed(2);
        } else {
            this.processList[index].processHrs = 0;
        }
        this.processList[index].labourCost = +(+item?.processHrs * item?.labourRatePerHr).toFixed(2);
        if (item.labourCost && item?.CAUnits) {
            this.processList[index].labourCostPerUnit = +(+item?.labourCost / +item?.CAUnits).toFixed(2);
        } else {
            this.processList[index].labourCostPerUnit = 0;
        }

        // asset cost
        this.processList[index].assetCost = +(+item?.processHrs * item?.assetRatePerHr).toFixed(2);
        if (item.assetCost && item?.CAUnits) {
            this.processList[index].assetCostPerUnit = +(+item?.assetCost / +item?.CAUnits).toFixed(2);
        } else {
            this.processList[index].assetCostPerUnit = 0;
        }

        this.calTotalLabourCost();
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
