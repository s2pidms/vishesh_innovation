import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {LocationStrategy} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService, ToastService} from "@core/services";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {RollToRollRemarksComponent} from "../roll-to-roll-remarks/roll-to-roll-remarks.component";
import {RollToRollConversionService, SFGStockService} from "@services/planning";
import {IRMDetailsOfRoll} from "@mocks/models/planning/transactions";
import {ItemRollToSheetComponent} from "../item-roll-to-sheet/item-roll-to-sheet.component";

@Component({
    selector: "app-sheet-to-sheet-form",
    templateUrl: "./sheet-to-sheet-form.component.html"
})
export class SheetToSheetFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    action: string = "create";
    stockPreparation: any = {};
    outputDetails: IRMDetailsOfRoll[] = [];
    selectedMRNDetails: any = [];
    remarksDetails: any = {};

    childItemList: any = [];
    balanceDetails: any = [];
    showBalanceDetails: boolean = false;
    constructor(
        private location: LocationStrategy,
        private toastService: ToastService,
        private modalService: NgbModal,
        private sfgStockService: SFGStockService,
        private rollToRollConversionService: RollToRollConversionService,
        private spinner: SpinnerService
    ) {}
    ngOnInit(): void {
        let state: any = this.location.getState();

        this.stockPreparation = JSON.parse(state["formData"]);
        let data = JSON.parse(state["data"]);
        this.sfgStockService.getStockPreparationByIdAndType(data).subscribe(success => {
            this.selectedMRNDetails = JSON.parse(JSON.stringify(success?.output));
            this.outputDetails = success?.output.map((x: any) => {
                x.closedIRQty = null;
                x.width = null;
                x.length = null;
                x.SQM = null;
                x.roll = null;
                x.itemCode = null;
                x.itemName = null;
                x.itemDescription = null;
                x.stage = "Sheet";
                x.shelfLife = x.shelfLife;
                return x;
            });
            this.childItemList = success?.childItemList;
        });
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    setSheetDetails(item: any, index: number) {
        if (!item.itemCode) {
            this.toastService.error("First Select Item Code");
            this.outputDetails[index].roll = 0;
            return;
        }
        this.outputDetails[index].closedIRQty = +(+item?.SQM * +item?.roll).toFixed(2);
        this.showBalanceDetails = this.outputDetails[index].closedIRQty > 0 ? true : false;
        if (this.outputDetails[index].closedIRQty > this.selectedMRNDetails[0]?.closedIRQty) {
            this.toastService.error("Select Output PPIC Qty must be less than Selected Input PPIC Qty ");
            this.outputDetails[index].closedIRQty = 0;
            this.outputDetails[index].roll = 0;
            this.balanceDetails = [];
            this.showBalanceDetails = false;
            return;
        }
        let originalPPICQty = this.selectedMRNDetails[0].closedIRQty;
        // let SQM = this.selectedMRNDetails[0].SQM;
        let derivedPPICQty = this.outputDetails[index].closedIRQty;
        let diffPPICQty = originalPPICQty - derivedPPICQty;
        // let npOfRolls = SQM <= 0 ? 0 : diffPPICQty / SQM;
        // let arr = [];
        // let roll = Math.trunc(+npOfRolls) || 0;
        // arr.push(roll);
        // if (npOfRolls - roll > 0) arr.push(1);
        let element = JSON.parse(JSON.stringify(this.selectedMRNDetails[0]));
        const remainingSQM = +((element.width * element.length) / 1000000).toFixed(4);
        this.balanceDetails =
            // const remainingPPICQty = diffPPICQty - roll * SQM;
            // const remainingLength = remainingPPICQty / (element.width / 1000) || 0;
            [
                {
                    MRN: element?.MRN,
                    MRNNumber: element?.MRNNumber,
                    GIN: element?.GIN,
                    GINDate: element?.GINDate,
                    itemCode: element?.itemCode,
                    itemName: element?.itemName,
                    itemDescription: element?.itemDescription,
                    UOM: element?.UOM,
                    status: element?.status,
                    shelfLife: element?.shelfLife,
                    item: element?.item,
                    width: element?.width,
                    length: element.length,
                    closedIRQty: diffPPICQty,
                    SQM: remainingSQM,
                    roll: +(diffPPICQty / remainingSQM).toFixed(2),
                    type: "SFGStock",
                    referenceModel: "Items",
                    stage: "Sheet",
                    department: element?.department,
                    expiryDate: element?.expiryDate,
                    conversionOfUnits: element?.conversionOfUnits,
                    primaryToSecondaryConversion: element?.primaryToSecondaryConversion,
                    secondaryToPrimaryConversion: element?.secondaryToPrimaryConversion,
                    primaryUnit: element?.primaryUnit,
                    secondaryUnit: element?.secondaryUnit,
                    deliveryLocation: element?.deliveryLocation,
                    supplier: element?.supplier,
                    itemType: element?.itemType,
                    standardRate: element?.standardRate,
                    purchaseRate: element?.purchaseRate,
                    purchaseRateUSD: element?.purchaseRateUSD,
                    purchaseRatINR: element?.purchaseRatINR,
                    lineValueINR: element?.lineValueINR,
                    batchDate: element?.batchDate,
                    storageLocationMapping: element?.storageLocationMapping,
                    MRNDate: element?.MRNDate
                }
            ];
    }

    submit() {
        if (this.outputDetails.length == 0) {
            this.toastService.error("Output Details must be atleast one row!!");
            return;
        }
        if (this.balanceDetails.length == 0) {
            this.toastService.error("Balance Details Required !!");
            return;
        }
        delete this.outputDetails[0]?._id;
        this.selectedMRNDetails[0].roll = 0;
        this.selectedMRNDetails[0].closedIRQty = 0;
        let formData: any = {
            selectedMRNDetails: this.selectedMRNDetails,
            outputDetails: [...this.outputDetails, ...this.balanceDetails],
            remarksDetails: this.remarksDetails,
            stockPreparation: this.stockPreparation
        };

        if (formData) {
            this.spinner.show();
            this.rollToRollConversionService.create(formData).subscribe(success => {
                this.spinner.hide();
                this.toastService.success(success.message);
                this.location.back();
            });
        }
    }

    reset() {
        this.outputDetails = JSON.parse(JSON.stringify(this.selectedMRNDetails)).map((x: any) => {
            x.closedIRQty = null;
            x.width = null;
            x.length = null;
            x.SQM = null;
            x.roll = null;
            x.itemCode = null;
            x.itemName = null;
            x.itemDescription = null;
            x.stage = "Sheet";
            x.shelfLife = x.shelfLife;
            return x;
        });
        this.balanceDetails = [];
        this.showBalanceDetails = false;
    }

    openRemarksDetailsModal() {
        const modalRef = this.modalService.open(RollToRollRemarksComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.remarksDetails = this.remarksDetails;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.remarksDetails = success;
                }
            },
            (reason: any) => {}
        );
    }

    openChildItemModal() {
        const modalRef = this.modalService.open(ItemRollToSheetComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.childItemList = this.childItemList;
        modalRef.componentInstance.outputDetails = this.outputDetails;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.outputDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
}
