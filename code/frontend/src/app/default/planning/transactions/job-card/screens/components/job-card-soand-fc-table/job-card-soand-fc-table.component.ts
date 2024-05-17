import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {FgInventoryModalComponent} from "../fg-inventory-modal/fg-inventory-modal.component";
import {ISKUDetailsOfJC} from "@mocks/models/planning/transactions";
import {JobCardDispModalComponent} from "../job-card-disp-modal/job-card-disp-modal.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ViewSkuDimensionComponent} from "../view-sku-dimension/view-sku-dimension.component";
import {JobCardCreationService} from "@services/planning";

@Component({
    selector: "app-job-card-sku-details-table",
    templateUrl: "./job-card-soand-fc-table.component.html",
    styles: [
        `
            .box {
                display: grid;
                place-items: center;
                div {
                    height: 1rem;
                    width: 1rem;
                }
            }
        `
    ]
})
export class JobCardSOAndFCTableComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() totalBatchQty: any = null;
    @Input() orderType: any = null;
    @Input() collection: any = 0;
    @Input() SKUDetailsOfJC: ISKUDetailsOfJC[] = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectedData: any = {};
    dimensionsDetails: any = {};
    SODetailsArray: any = [];
    selectDSKU: any = null;
    @Output() saveData = new EventEmitter<any>();
    @Input() customerContactInfoArray: ContactMatrix[] = [];
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private modalService: NgbModal,
        private jobCardCreationService: JobCardCreationService,
        private spinner: SpinnerService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.collection = this.SKUDetailsOfJC.length;
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openDrawing(drawing: any) {
        if (drawing) {
            window.open(drawing, "_blank");
        } else {
            this.toastService.warning("Drawing File Not Present");
        }
    }

    openFGInventoryModal(item: any) {
        if (!this.selectDSKU || this.selectDSKU == item.SKUNo) {
            const modalRef = this.modalService.open(FgInventoryModalComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.FGInventoryInfo = item?.FGInventoryInfo;
            modalRef.componentInstance.totalFGQty = item?.totalFGQty;
            modalRef.result.then(
                (success: any) => {
                    if (success && ["create", "edit"].includes(this.action)) {
                        let index = -1;
                        if (item.referenceModel == "SalesOrder") {
                            index = this.SKUDetailsOfJC.findIndex(
                                (x: any) =>
                                    x.reference == item?.reference &&
                                    x.SKU == item.SKU &&
                                    x.SO_FCLineTargetDate == item?.SO_FCLineTargetDate
                            );
                        } else {
                            index = this.SKUDetailsOfJC.findIndex(
                                (x: any) => x.reference == item?.reference && x.SKU == item.SKU
                            );
                        }

                        this.SKUDetailsOfJC[index].FGInventoryInfo = success?.FGInventoryInfo;

                        if (item.balQty > success.totalFGQty) {
                            this.SKUDetailsOfJC[index].batchQty = +item.balQty - +success.totalFGQty;
                            this.SKUDetailsOfJC[index].previousQty = +item.balQty - +success.totalFGQty;
                        } else {
                            this.SKUDetailsOfJC[index].batchQty = 0;
                        }

                        if (typeof +item.batchQty == "number" && +item.batchQty > 0) {
                            this.selectDSKU = item?.SKUNo;
                        } else {
                            this.selectDSKU = null;
                        }
                        this.calTotalBatchQuantity();
                        if (+item.batchQty < +this.SKUDetailsOfJC[index].previousQty) {
                            // this.toastService.warning("Batch Qty Should be greater than Equal to Bal Qty");
                        }
                    }
                },
                (reason: any) => {}
            );
        }
    }

    openSOScheduleModal(item: any) {
        if (
            item.dispatchSchedule &&
            item.dispatchSchedule.length > 0 &&
            (!this.selectDSKU || this.selectDSKU == item.SKUNo)
        ) {
            const modalRef = this.modalService.open(JobCardDispModalComponent, {
                centered: true,
                windowClass: "custom-modal-sm",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.UOM = item.UOM;
            modalRef.componentInstance.deliveryScheduleArr = item?.dispatchSchedule;
            modalRef.result.then(
                (success: any) => {
                    if (success && ["create", "edit"].includes(this.action)) {
                    }
                },
                (reason: any) => {}
            );
        }
    }

    setBatchQty(item: ISKUDetailsOfJC) {
        let index = -1;
        if (item.referenceModel == "SalesOrder") {
            index = this.SKUDetailsOfJC.findIndex(
                (x: any) =>
                    x.reference == item?.reference &&
                    x.SKU == item.SKU &&
                    x.SO_FCLineTargetDate == item?.SO_FCLineTargetDate
            );
        } else {
            index = this.SKUDetailsOfJC.findIndex((x: any) => x.reference == item?.reference && x.SKU == item.SKU);
        }
        if (item.balQty > item.totalFGQty) {
            this.SKUDetailsOfJC[index].previousQty = +item.balQty - +item.totalFGQty;
        }

        if (+item.batchQty < +item.previousQty) {
            // this.toastService.warning("Batch Qty Should be greater than Equal to Bal Qty");
            this.selectDSKU = null;
        }

        if (typeof +item.batchQty == "number" && +item.batchQty > 0) {
            this.selectDSKU = item?.SKUNo;
        } else {
            this.selectDSKU = null;
        }

        this.calTotalBatchQuantity();
        this.collection = this.SKUDetailsOfJC.length;
    }

    calTotalBatchQuantity() {
        let totalBatchQuantity = this.SKUDetailsOfJC.map((x: any) => x.batchQty || 0).reduce(
            (a: any, c: any) => +a + +c,
            0
        );
        this.saveData.emit({data: totalBatchQuantity, key: "totalBatchQuantitySKU"});
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.SKUDetailsOfJC = this.SKUDetailsOfJC;
        } else {
            this.SKUDetailsOfJC = [...this.SKUDetailsOfJC].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    getSKUDimensionData(item: any) {
        this.spinner.show();
        this.jobCardCreationService.getDimBySKU(item.SKU).subscribe(success => {
            this.dimensionsDetails = success?.dimensionsDetails;
            this.spinner.hide();
            this.openViewDimModal();
        });
    }

    openViewDimModal() {
        const modalRef = this.modalService.open(ViewSkuDimensionComponent, {
            centered: true,
            // size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = "view";
        modalRef.componentInstance.dimensionsDetails = this.dimensionsDetails ?? {};
        modalRef.result.then(
            (success: any) => {
                // if (success && ["create", "edit"].includes(this.action)) {
                //     this.batchInfo.patchValue(success);
                // }
            },
            (reason: any) => {}
        );
    }
}
