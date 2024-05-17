import {Component, OnInit, Input, QueryList, ViewChildren, EventEmitter, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";
import {SKUService} from "@services/sales";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {Location} from "@angular/common";

@Component({
    selector: "app-sku-ink-master-form",
    templateUrl: "./sku-ink-master-form.component.html",
    styles: [
        `
            .form-control-ink {
                margin: 0;
                height: 2.4rem !important;
                width: 7rem !important;
                text-align: center;
                box-shadow: #00000059 0 2px 5px;
            }
        `
    ]
})
export class SkuInkMasterFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    action: string = "edit";
    totalNoOfColors: any = null;
    inkDetailsArr: any = [];
    materialSKUUnit: any = null;
    @Output() saveData = new EventEmitter<any>();
    isPreview = false;
    resetData: any = [];
    dimensionsDetails: any = {};
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 7;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    isESCPreview = false;
    _id: any = null;
    SKUInkStatus: any = null;
    constructor(
        public activeModal: NgbActiveModal,
        private exportExcelService: ExportExcelService,
        private toastService: ToastService,
        private skuService: SKUService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        // this.skuService.getAllMasterData({}).subscribe(result => {

        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    // this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.skuService.getByIdForSKUInkAttributes(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                this.spinner.hide();
                if (Object.keys(success).length == 0) {
                    return;
                }

                success.SKUData.inkDetails = success?.SKUData?.inkDetails;
                let materialInfoData = success?.inkList;
                for (const ele of success?.SKUData?.inkDetails) {
                    materialInfoData = materialInfoData.filter((x: any) => x.itemCode != ele.itemCode);
                    this.inkDetailsArr = [...success?.SKUData?.inkDetails, ...materialInfoData];
                }

                this.dimensionsDetails = success?.SKUData?.dimensionsDetails;

                this.collection = this.inkDetailsArr?.length;

                if (this.inkDetailsArr?.length == 0) {
                    this.inkDetailsArr = success?.inkList;
                }

                if (this.action == "view") {
                    this.inkDetailsArr = success?.SKUData?.inkDetails;
                }

                this._id = success?.SKUData?._id;
                this.totalNoOfColors = success?.SKUData?.totalNoOfColors;

                this.SKUInkStatus = success?.SKUData?.SKUInkStatus ?? "Inactive";

                // if (this.dimensionsDetails) {
                //     this.layoutDimensionsUps = this.dimensionsDetails?.layoutDimensions?.ups;
                //     this.inkDetailsArr = this.inkDetailsArr?.map((x: any) => {
                //         x.ups = this.layoutDimensionsUps;
                //         return x;
                //     });
                // }
                this.materialSKUUnit = this.dimensionsDetails?.layoutDimensions?.mSqArea;

                if (this.materialSKUUnit) {
                    this.inkDetailsArr = this.inkDetailsArr.map((x: any) => {
                        x.areaSqm = this.materialSKUUnit ?? null;
                        return x;
                    });
                }
                this.resetData = JSON.parse(JSON.stringify(this.inkDetailsArr));
                this.collection = this.inkDetailsArr.length;
            });
        // });
    }

    reset() {
        this.isPreview = false;
        this.getInitialData();
        this.inkDetailsArr = JSON.parse(JSON.stringify(this.resetData));
        this.collection = this.inkDetailsArr.length;
        this.totalNoOfColors = this.inkDetailsArr.filter((x: any) => x.colSeq > 0).length;
    }
    setInkAreaSQM(item: any) {
        let index = this.inkDetailsArr.map((x: any) => x.inkId).indexOf(item?.inkId);

        this.inkDetailsArr[index].inkAreaSqm = +((+item.areaSqm * +item.inkArea) / 100).toFixed(4);
        this.inkDetailsArr[index].ink = +(+item.GSM * +item.inkAreaSqm).toFixed(3);
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.inkDetailsArr;
        this.inkDetailsArr = this.inkDetailsArr
            .filter((x: any) => x.colSeq > 0)
            .sort((a: any, b: any) => a.colSeq - b.colSeq);
        if (this.inkDetailsArr.length) {
            this.isPreview = true;
        } else {
            this.isPreview = false;
        }
        this.collection = this.inkDetailsArr.length;
        this.totalNoOfColors = this.inkDetailsArr.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.inkDetailsArr = this.ESCPreviewArr;
        this.collection = this.inkDetailsArr.length;

        let totalNoCls = this.inkDetailsArr.filter((x: any) => x.colSeq > 0)?.length;

        console.log("totalNoCls", totalNoCls);

        this.totalNoOfColors = totalNoCls;
    }

    dismissModel() {
        let obj: any = {};
        obj.inkDetailsArr = this.inkDetailsArr;
        obj.totalNoOfColors = this.totalNoOfColors;
        this.saveData.emit({data: obj, key: "inkDetailsArr"});
        this.toastService.success("Colours Saved");
    }

    submit() {
        let formData: any = {
            inkDetails: this.inkDetailsArr,
            SKUInkStatus: this.SKUInkStatus,
            totalNoOfColors: this.totalNoOfColors
        };

        let SKUformData = new FormData();
        SKUformData.append("key", "Sku");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    SKUformData.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    SKUformData.append(key, formData[key]);
                }
            }
        }

        this.update(this._id, SKUformData);
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.skuService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
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
            this.inkDetailsArr = this.inkDetailsArr;
        } else {
            this.inkDetailsArr = [...this.inkDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
