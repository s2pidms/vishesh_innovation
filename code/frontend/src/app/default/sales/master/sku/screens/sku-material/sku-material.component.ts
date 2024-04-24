import {Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {IMaterialList} from "@mocks/models/sales/master";
import {ChildPartInfoModalComponent} from "../child-part-info-modal/child-part-info-modal.component";

@Component({
    selector: "app-sku-material",
    templateUrl: "./sku-material.component.html",
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
export class SkuMaterialComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() materialSKUUnit: any = null;
    @Input() layoutDimensionsUps: any = null;
    @Input() dimensionsDetails: any = {};
    @Input() materialInfoArr: IMaterialList[] | any = [];
    @Output() saveData = new EventEmitter<any>();
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
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        console.log("this.dimensionsDetails", this.dimensionsDetails);

        if (this.dimensionsDetails) {
            this.layoutDimensionsUps = this.dimensionsDetails?.layoutDimensions?.ups;
            this.materialInfoArr = this.materialInfoArr?.map((x: any) => {
                x.ups = this.layoutDimensionsUps;
                return x;
            });
        }
        this.resetData = JSON.parse(JSON.stringify(this.materialInfoArr));
        this.collection = this.materialInfoArr.length;
    }
    reset() {
        this.isPreview = false;
        this.materialInfoArr = JSON.parse(JSON.stringify(this.resetData));
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
        this.saveData.emit({data: this.materialInfoArr, key: "materialInfoArr"});
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
                this.materialInfoArr[index].qtyPerSKUUnit = this.materialSKUUnit ?? 0;
            } else {
                this.materialInfoArr[index].qtyPerSKUUnit = 0;
            }
        }
    }

    setUnit(item: any) {
        let index = this.materialInfoArr.map((x: any) => x.item).indexOf(item.item);
        if (this.materialInfoArr[index].UoM == item.secondaryUnit) {
            this.materialInfoArr[index].UoM = item.primaryUnit;
            if (
                (this.materialInfoArr[index]?.primaryUnit == "SHT" ||
                    this.materialInfoArr[index]?.primaryUnit == "RL") &&
                this.materialInfoArr[index].width &&
                this.materialInfoArr[index].length
            ) {
                this.materialInfoArr[index].qtyPerSKUUnit = +(1 / this.layoutDimensionsUps).toFixed(4);
            } else {
                this.materialInfoArr[index].qtyPerSKUUnit = +(
                    item.qtyPerSKUUnit * item.primaryToSecondaryConversion
                ).toFixed(4);
            }
        } else {
            if (
                (this.materialInfoArr[index]?.primaryUnit == "SHT" ||
                    this.materialInfoArr[index]?.primaryUnit == "RL") &&
                this.materialInfoArr[index].width &&
                this.materialInfoArr[index].length
            ) {
                this.materialInfoArr[index].qtyPerSKUUnit = +this.materialInfoArr[index]?.layoutDimArea?.toFixed(4);
            } else {
                this.materialInfoArr[index].qtyPerSKUUnit = +(
                    item.qtyPerSKUUnit / item.primaryToSecondaryConversion
                ).toFixed(4);
            }
            this.materialInfoArr[index].UoM = item.secondaryUnit;
        }
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
                if (success && ["create", "edit", "copy"].includes(this.action)) {
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
                        success.UOM == "SHT" ||
                        success.UOM == "RL"
                        //  && this.materialInfoArr[index].qtyPerSKUUnit
                    ) {
                        this.materialInfoArr[index].qtyPerSKUUnit = +(1 / this.layoutDimensionsUps).toFixed(4);
                    }
                }
            },
            (reason: any) => {}
        );
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
