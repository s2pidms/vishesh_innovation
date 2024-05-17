import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {SpinnerService} from "@core/services";
import {StockPreparationService} from "@services/production";
import {ScreenMakingLogEntryComponent} from "../../../../jc-production-entry/screens/screen-making/screen-making-log-entry/screen-making-log-entry.component";
import {NgbdSortableHeader, SortEvent} from "@shared/directives";
import {UtilityService} from "../../../../../../../core/services/utility.service";
import {AddOnGTQtyModalComponent} from "../../../../production-processes/screens/components/add-on-gtqty-modal/add-on-gtqty-modal.component";

@Component({
    selector: "app-jc-stock-preparation-entry",
    templateUrl: "./jc-stock-preparation-entry.component.html",
    styles: [
        `
            .editOpacity {
                opacity: 0.5;
            }
        `
    ]
})
export class JcStockPreparationEntryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() selectedDetails: any = {};
    @Input() jobCardDetails: any = {};
    stockCutting: any = {};
    selectedJobCardDetails: any = {};
    sourceOfManufacturing: any = "";
    shiftOptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    action: string = "create";
    sheetToSheetData: any = [];
    inventoryItemsAmounts: any = 0;
    GTInputQuantity: any = 0;
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    constructor(
        private spinner: SpinnerService,
        private stockPreparationService: StockPreparationService,
        private toastService: ToastService,
        public activeModal: NgbActiveModal,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        if (!this.stockCutting.jobCardNo) {
            this.toastService.warning(`Job Card No. is Required`);
            return;
        }
        if (this.stockCutting?.stockPreparationDetails?.every((x: any) => !x.select) == true) {
            this.toastService.warning(`Select the record before doing “GT To Production” `);
            return;
        }

        for (const element of this.stockCutting.stockPreparationDetails) {
            if (element.select && !element.GTQty) {
                this.toastService.warning(`Fill the GT Qty For Selected record !!`);
                return;
            }
            if (element.isSaved && element.select && !element.addOnGTQty) {
                this.toastService.warning(`Pls click on edit option and add GT Qty !! `);
                return;
            }
        }

        this.stockCutting.stockPreparationDetails = this.stockCutting?.stockPreparationDetails.map((x: any) => {
            if (x.select) {
                x.isSaved = true;
            }

            return x;
        });
        this.create();
    }

    create() {
        this.spinner.show();
        this.stockPreparationService.createOrUpdate(this.stockCutting).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
            // this.stockCutting = {};
            // this.getInitialData();
        });
    }

    setUnit(item: any) {
        let index = this.stockCutting.stockPreparationDetails.map((x: any) => x.item).indexOf(item.item);
        // if (this.stockCutting.stockPreparationDetails[index].UOM == item.secondaryUnit) {
        //     this.stockCutting.stockPreparationDetails[index].UOM = item.primaryUnit;
        //     this.stockCutting.stockPreparationDetails[index].MRPQty = item.MRPQty / +item.primaryToSecondaryConversion;
        // } else {
        //     this.stockCutting.stockPreparationDetails[index].UOM = item.secondaryUnit;
        //     this.stockCutting.stockPreparationDetails[index].MRPQty = +item.MRPQty * +item.primaryToSecondaryConversion;
        // }

        if (this.stockCutting.stockPreparationDetails[index].UOM == item.secondaryUnit) {
            this.stockCutting.stockPreparationDetails[index].UOM = item.primaryUnit;
        } else {
            this.stockCutting.stockPreparationDetails[index].UOM = item.secondaryUnit;
        }

        let MRPQuantity =
            this.utilityService.setConversion({
                UOM: this.stockCutting.stockPreparationDetails[index].UOM,
                quantity: item.MRPQty,
                primaryUnit: item.primaryUnit,
                secondaryUnit: item.secondaryUnit,
                primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
            }) || 0;

        let GTQuantity =
            this.utilityService.setConversion({
                UOM: this.stockCutting.stockPreparationDetails[index].UOM,
                quantity: item.GTQty,
                primaryUnit: item.primaryUnit,
                secondaryUnit: item.secondaryUnit,
                primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
            }) || 0;

        this.stockCutting.stockPreparationDetails[index].MRPQty = MRPQuantity;
        this.stockCutting.stockPreparationDetails[index].GTQty = +GTQuantity.toFixed(2);
    }

    checkInventoryRecords(item: any) {
        if (item.select) {
            this.spinner.show();
            this.stockPreparationService.checkInventoryRecords({item: item?.item}).subscribe(success => {
                let index = this.stockCutting.stockPreparationDetails.map((x: any) => x.item).indexOf(item.item);
                this.inventoryItemsAmounts = success?.inventoryItemsAmount || 0;
                if (!success.inventoryItemsAmount) {
                    this.toastService.warning("Total Inventory Qty. is not available !");
                    this.stockCutting.stockPreparationDetails[index].select = false;
                    this.stockCutting.stockPreparationDetails[index].isSelectedCond = true;
                }

                this.stockCutting.stockPreparationDetails[index].inventoryItemsAmounts = this.inventoryItemsAmounts;

                this.spinner.hide();
            });
        }
    }

    setGTQty(item: any) {
        let index = this.stockCutting?.stockPreparationDetails?.findIndex((x: any) => x.item == item.item);

        if (item.UOM == "RL" || item.UOM == "SHT") {
            // let GTConvertedQuantity =
            //     this.utilityService.setConversion({
            //         UOM: item?.UOM,
            //         quantity: item?.GTQty,
            //         primaryUnit: item?.primaryUnit,
            //         secondaryUnit: item?.secondaryUnit,
            //         primaryToSecondaryConversion: item?.primaryToSecondaryConversion,
            //         secondaryToPrimaryConversion: item?.secondaryToPrimaryConversion
            //     }) || 0;

            let GTConvertedQuantity = 0;
            if (item?.primaryToSecondaryConversion) {
                GTConvertedQuantity = +(+item?.GTQty * +item.primaryToSecondaryConversion).toFixed(2);
            }

            if (GTConvertedQuantity > item.inventoryItemsAmounts) {
                this.toastService.warning("GT Input Quantity Should not be greater than Total Inventory Qty. !");
                this.stockCutting.stockPreparationDetails[index].GTQty = 0;
                return;
            }
        } else {
            if (item.GTQty > item.inventoryItemsAmounts) {
                this.toastService.warning("GT Qty. Should not be greater than Total Inventory Qty. !");
                this.stockCutting.stockPreparationDetails[index].GTQty = 0;
                return;
            }
        }
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.stockPreparationService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.stockCutting = result.stockCutting;
            if (
                result?.stockCutting?.stockPreparationDetails?.length == 0 ||
                !result?.stockCutting?.stockPreparationDetails
            ) {
                this.toastService.warning(`Please define the Bill of Material of the SKU`);
                this.stockCutting = this.jobCardDetails;
            }
            this.stockCutting.stockPreparationDetails = this.stockCutting?.stockPreparationDetails?.map((x: any) => {
                x.select = false;
                x.addOnGTQty = 0;
                return x;
            });
            this.GTInputQuantity = 0;
            this.stockCutting.processName = null;
            // this.processNames = result.processNames;
            this.shiftOptions = result.shiftOptions;
            this.collection = this.stockCutting?.stockPreparationDetails?.length;

            this.spinner.hide();
        });
    }

    reset() {
        this.stockCutting = {};
        this.getInitialData();
    }

    openLogEntryModal(g: any) {
        const modalRef = this.modalService.open(ScreenMakingLogEntryComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.logDetails = g.logEntry;
        modalRef.componentInstance.sourceOfManufacturing = this.sourceOfManufacturing;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.stockCutting?.stockPreparationDetails?.findIndex((x: any) => x.item == g.item);
                    this.stockCutting.stockPreparationDetails[index].logEntry = success;
                }
            },
            (reason: any) => {}
        );
    }

    openGTQtyModal(item: any) {
        if (item.isSaved) {
            if (!item.select) {
                this.toastService.warning(`Select the record`);
                return;
            }
            const modalRef = this.modalService.open(AddOnGTQtyModalComponent, {
                centered: true,
                size: "md",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.itemDetails = item;
            modalRef.componentInstance.inventoryItemsAmounts = item.inventoryItemsAmounts;
            modalRef.componentInstance.GTInputQuantity = this.GTInputQuantity;
            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        let index = this.stockCutting.stockPreparationDetails
                            .map((x: any) => x.item)
                            .indexOf(item.item);
                        this.stockCutting.stockPreparationDetails[index].addOnGTQty = success;

                        this.GTInputQuantity = success;
                        // this.stockCutting.stockPreparationDetails[index].GTQty = item?.GTQty + +success;
                        // this.stockCutting.stockPreparationDetails[index].inventoryItemsAmounts =
                        // item?.inventoryItemsAmounts - +success;
                    }
                },
                (reason: any) => {}
            );
        }
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.stockCutting.stockPreparationDetails = this.stockCutting.stockPreparationDetails;
        } else {
            this.stockCutting.stockPreparationDetails = [...this.stockCutting.stockPreparationDetails].sort(
                (a: any, b: any) => {
                    let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                    let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                    const res = x < y ? -1 : x > y ? 1 : 0;
                    return direction === "asc" ? res : -res;
                }
            );
        }
    }
}
