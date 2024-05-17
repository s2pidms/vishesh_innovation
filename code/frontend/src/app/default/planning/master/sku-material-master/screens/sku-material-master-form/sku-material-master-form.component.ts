import {Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService, ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {IMaterialList} from "@mocks/models/sales/master";
import {ChildPartInfoModalComponent} from "src/app/default/sales/master/sku/screens/child-part-info-modal/child-part-info-modal.component";
import {SKUService} from "@services/sales";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {Location} from "@angular/common";

@Component({
    selector: "app-sku-material-master-form",
    templateUrl: "./sku-material-master-form.component.html",
    styles: [
        `
            .form-control-ink {
                margin: 0;
                height: 2.4rem !important;
                width: 9rem !important;
                text-align: center;
                box-shadow: #00000059 0 2px 5px;
            }

            .paddingTop {
                padding-top: 0rem !important;
            }
        `
    ]
})
export class SkuMaterialMasterFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    action: string = "edit";
    materialSKUUnit: any = null;
    layoutDimensionsUps: any = null;
    dimensionsDetails: any = {};
    materialInfoArr: IMaterialList[] | any = [];

    _id: any = null;
    isPreview = false;
    resetData: any = [];
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 7;
    collection: number = 0;
    search: string = "";
    column: string = "itemCode";
    direction: number = -1;
    isESCPreview = false;
    clickCount = 1;
    showSelect = false;
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private modalService: NgbModal,
        private skuService: SKUService,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {}

    SKUMaterialStatus: any = null;

    ngOnInit(): void {
        this.getInitialData();
        // if (this.dimensionsDetails) {
        //     this.layoutDimensionsUps = this.dimensionsDetails?.layoutDimensions?.ups;
        //     this.materialInfoArr = this.materialInfoArr?.map((x: any) => {
        //         x.ups = this.layoutDimensionsUps;
        //         return x;
        //     });
        // }

        // this.materialSKUUnit = this.dimensionsDetails?.layoutDimensions?.mSqArea;

        // this.resetData = JSON.parse(JSON.stringify(this.materialInfoArr));
        // this.collection = this.materialInfoArr.length;
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
                        return this.skuService.getByIdForSKUMaterialAttributes(params["id"]);
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

                success.SKUData.materialInfo = success?.SKUData?.materialInfo;
                let materialInfoData = success?.materialList;
                for (const ele of success?.SKUData?.materialInfo) {
                    materialInfoData = materialInfoData.filter((x: any) => x.itemCode != ele.itemCode);
                    this.materialInfoArr = [...success?.SKUData?.materialInfo, ...materialInfoData];
                }

                this.dimensionsDetails = success?.SKUData?.dimensionsDetails;

                this.collection = this.materialInfoArr?.length;

                if (this.materialInfoArr?.length == 0) {
                    this.materialInfoArr = success?.materialList;
                }

                if (this.action == "view") {
                    this.materialInfoArr = success?.SKUData?.materialInfo;
                }

                this._id = success?.SKUData?._id;

                this.SKUMaterialStatus = success?.SKUData?.SKUMaterialStatus ?? "Inactive";

                if (this.dimensionsDetails) {
                    this.layoutDimensionsUps = this.dimensionsDetails?.layoutDimensions?.ups;
                    // this.materialInfoArr = this.materialInfoArr?.map((x: any) => {
                    //     x.ups = this.layoutDimensionsUps;
                    //     return x;
                    // });
                }

                this.materialSKUUnit = this.dimensionsDetails?.layoutDimensions?.mSqArea;

                this.resetData = JSON.parse(JSON.stringify(this.materialInfoArr));
                this.collection = this.materialInfoArr.length;
            });
        // });
    }

    reset() {
        this.isPreview = false;
        this.getInitialData();
        this.collection = this.materialInfoArr.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.materialInfoArr;
        this.materialInfoArr = this.materialInfoArr
            .filter((x: any) => x.isSelect == true)
            .sort((a: any, b: any) => a.colSeq - b.colSeq);
        if (this.materialInfoArr.length) {
            this.isPreview = true;
        } else {
            this.isPreview = false;
        }
        this.collection = this.materialInfoArr.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.materialInfoArr = this.ESCPreviewArr;
        this.collection = this.materialInfoArr.length;
    }

    dismissModel() {
        this.toastService.success("Material Saved");
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

    setSKUPerUnit(item: any, event: any) {
        let index = this.materialInfoArr.map((x: any) => x.item).indexOf(item.item);
        this.materialInfoArr[index].layoutDimArea = this.materialSKUUnit;
        if (
            this.materialInfoArr[index].UoM.toLowerCase() == "sqm" ||
            ["SHT", "RL"].includes(this.materialInfoArr[index].UoM)
        ) {
            if (event.target.checked == true) {
                // if (this.materialInfoArr[index].qtyPerSKUUnit == 0) {
                this.materialInfoArr[index].qtyPerSKUUnit = 1;
                this.materialInfoArr[index].ups = this.layoutDimensionsUps;
                // this.materialInfoArr[index].qtyPerSKUUnit = this.materialSKUUnit ?? 0;
                // }
            } else {
                this.materialInfoArr[index].qtyPerSKUUnit = 0;
                this.materialInfoArr[index].ups = 0;
            }
        }
    }

    setUnit(item: any) {
        let index = this.materialInfoArr.map((x: any) => x.item).indexOf(item.item);

        if (this.materialInfoArr[index].UoM == item.secondaryUnit) {
            this.materialInfoArr[index].UoM = item.primaryUnit;
            this.materialInfoArr[index].qtyPerSKUUnit = 1;
        } else {
            this.materialInfoArr[index].UoM = item.secondaryUnit;
            this.materialInfoArr[index].qtyPerSKUUnit = +item.primaryToSecondaryConversion.toFixed(4);
        }

        // if (this.materialInfoArr[index].UoM == item.secondaryUnit) {
        //     this.materialInfoArr[index].UoM = item.primaryUnit;
        //     if (
        //         (this.materialInfoArr[index]?.primaryUnit == "SHT" ||
        //             this.materialInfoArr[index]?.primaryUnit == "RL") &&
        //         this.materialInfoArr[index].width &&
        //         this.materialInfoArr[index].length
        //     ) {
        //         this.materialInfoArr[index].qtyPerSKUUnit = +(1 / this.layoutDimensionsUps).toFixed(4);
        //     } else {
        //         this.materialInfoArr[index].qtyPerSKUUnit = +(
        //             item.qtyPerSKUUnit * item.primaryToSecondaryConversion
        //         ).toFixed(4);
        //     }
        // } else {
        //     if (
        //         (this.materialInfoArr[index]?.primaryUnit == "SHT" ||
        //             this.materialInfoArr[index]?.primaryUnit == "RL") &&
        //         this.materialInfoArr[index].width &&
        //         this.materialInfoArr[index].length
        //     ) {
        //         this.materialInfoArr[index].qtyPerSKUUnit = +this.materialInfoArr[index]?.layoutDimArea?.toFixed(4);
        //     } else {
        //         this.materialInfoArr[index].qtyPerSKUUnit = +(
        //             item.qtyPerSKUUnit / item.primaryToSecondaryConversion
        //         ).toFixed(4);
        //     }
        //     this.materialInfoArr[index].UoM = item.secondaryUnit;
        // }
    }

    openUOMDetailsModal(item: any) {
        const modalRef = this.modalService.open(ChildPartInfoModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.dualUnits = {
            primaryUnit: item?.primaryUnit,
            itemCode: item?.itemCode,
            secondaryUnit: item?.secondaryUnit ?? "sqm",
            primaryConversion: item?.primaryConversion ?? 1,
            primaryToSecondaryConversion: item?.primaryToSecondaryConversion ?? null,
            secondaryToPrimaryConversion: item?.secondaryToPrimaryConversion ?? null,
            childItemDescription: item?.childItemDescription,
            widthUnit: item?.widthUnit ?? "mm",
            lengthUnit: item?.lengthUnit ?? "mm",
            width: item?.width ?? this.dimensionsDetails.layoutDimensions?.width,
            length: item?.length ?? this.dimensionsDetails.layoutDimensions?.length
        };
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit", "copy", "material"].includes(this.action)) {
                    let index = this.materialInfoArr.map((x: any) => x.item).indexOf(item.item);

                    this.materialInfoArr[index].UoM = success?.UOM;
                    this.materialInfoArr[index].primaryUnit = success?.primaryUnit;
                    this.materialInfoArr[index].secondaryUnit = success?.secondaryUnit;
                    this.materialInfoArr[index].primaryConversion = success?.primaryConversion;
                    this.materialInfoArr[index].primaryToSecondaryConversion = success?.primaryToSecondaryConversion;
                    this.materialInfoArr[index].secondaryToPrimaryConversion = success?.secondaryToPrimaryConversion;
                    this.materialInfoArr[
                        index
                    ].conversionOfUnits = `1 ${success?.primaryUnit} - ${success?.primaryToSecondaryConversion} ${success?.secondaryUnit}`;

                    this.materialInfoArr[index].childItemDescription = success?.childItemDescription;
                    this.materialInfoArr[index].itemDescription = success?.childItemDescription;
                    this.materialInfoArr[index].widthUnit = success?.widthUnit;
                    this.materialInfoArr[index].lengthUnit = success?.lengthUnit;
                    this.materialInfoArr[index].width = success?.width;
                    this.materialInfoArr[index].length = success?.length;

                    if (
                        this.materialInfoArr[index].UoM.toLowerCase() == "sqm" ||
                        ["SHT", "RL"].includes(this.materialInfoArr[index].UoM)
                    ) {
                        // if (this.materialInfoArr[index].qtyPerSKUUnit == 0) {
                        this.materialInfoArr[index].qtyPerSKUUnit = 1;
                        // }
                    } else {
                        this.materialInfoArr[index].qtyPerSKUUnit = 0;
                    }

                    // if (
                    //     success.UOM == "SHT" ||
                    //     success.UOM == "RL"
                    // ) {
                    //     this.materialInfoArr[index].qtyPerSKUUnit = +(1 / this.layoutDimensionsUps).toFixed(4);
                    // }
                }
            },
            (reason: any) => {}
        );
    }

    submit() {
        let formData: any = {materialInfo: this.materialInfoArr, SKUMaterialStatus: this.SKUMaterialStatus};

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

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.materialInfoArr = this.materialInfoArr;
        } else {
            this.materialInfoArr = [...this.materialInfoArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
