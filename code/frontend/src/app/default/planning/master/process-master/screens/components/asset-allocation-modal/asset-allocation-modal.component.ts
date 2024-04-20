import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-asset-allocation-modal",
    templateUrl: "./asset-allocation-modal.component.html",
    styles: [
        `
            .total-bg-color {
                background-color: #fffff5 !important;
            }
        `
    ]
})
export class AssetAllocationModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() assetAllocationList: any = [];
    @Input() ESCPreviewArr: any = [];
    @Input() totalAllocatedAssetCostPerHr: any = 0;
    @Input() primaryAssetAllocation: any = null;
    @Input() action: string = "create";
    oldAssetAllocationData: any = [];
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
    constructor(
        public activeModal: NgbActiveModal,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {
        this.oldAssetAllocationData = JSON.parse(JSON.stringify(this.assetAllocationList));
        this.collection = this.assetAllocationList.length;
        if (this.action != "create") {
            this.isESCPreview = true;
            this.isConditionPreview = true;
            this.isPreview = true;
            this.oldAssetAllocationData = JSON.parse(JSON.stringify(this.ESCPreviewArr));
        }
    }

    dismissModel() {
        if (this.assetAllocationList.length == 1 && ["", null].includes(this.primaryAssetAllocation)) {
            this.primaryAssetAllocation = this.assetAllocationList[0]?.assetName;
        }
        if (this.assetAllocationList.length > 1 && ["", null].includes(this.primaryAssetAllocation)) {
            this.toastService.warning("Display Asset/s as is Required");
            return;
        }

        this.activeModal.close({
            assetAllocationList: this.assetAllocationList,
            totalAllocatedAssetCostPerHr: this.totalAllocatedAssetCostPerHr,
            primaryAssetAllocation: this.primaryAssetAllocation
        });
    }

    reset() {
        this.assetAllocationList = this.oldAssetAllocationData;
        this.collection = this.assetAllocationList.length;
        this.calTotalAssetCost();
    }

    calTotalAssetCost() {
        let totalAssetCost = this.assetAllocationList
            .filter((x: any) => x?.isSelect == true)
            .map((y: any) => y.totalAssetCostPerHr || 0)
            .reduce((a: any, c: any) => +a + +c, 0);
        this.totalAllocatedAssetCostPerHr = +totalAssetCost.toFixed(2);
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = JSON.parse(JSON.stringify(this.assetAllocationList));
        this.assetAllocationList = this.assetAllocationList.filter((x: any) => x?.isSelect == true);
        this.collection = this.assetAllocationList.length;

        if (this.assetAllocationList.length > 0) {
            this.isPreview = true;
            this.isESCPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
            this.isESCPreview = true;
        }
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        this.assetAllocationList = JSON.parse(JSON.stringify(this.ESCPreviewArr));
        this.collection = this.assetAllocationList.length;
    }

    setAssetData(ev: any) {
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
            this.assetAllocationList = this.assetAllocationList;
        } else {
            this.assetAllocationList = [...this.assetAllocationList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
