import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {SKU_COST_SHEET_PARTICULARS} from "@mocks/constant";

@Component({
    selector: "app-cost-sheet-details-modal",
    templateUrl: "./cost-sheet-details-modal.component.html",
    styles: [
        `
            .form-control-cd-sm {
                margin: 0 !important;
                height: 2.4rem !important;
                width: 8rem !important;
                text-align: start !important;
            }
        `
    ]
})
export class CostSheetDetailsModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() costDetailsArr: any = [];
    oldCostDetailsArr: any = [];
    sellingPrice = 0;
    SKUCostParticulars = SKU_COST_SHEET_PARTICULARS;

    constructor(public activeModal: NgbActiveModal) {}
    ngOnInit(): void {
        this.oldCostDetailsArr = JSON.parse(JSON.stringify(this.costDetailsArr));
    }

    dismissModel() {
        this.activeModal.close(this.costDetailsArr);
    }

    reset() {
        this.costDetailsArr = JSON.parse(JSON.stringify(this.oldCostDetailsArr));
    }

    getPercentage(value: any) {
        this.sellingPrice = this.setCostHead(this.SKUCostParticulars.sellingPrice);
        if (this.sellingPrice == 0) 0;
        return +((value * 100) / this.sellingPrice).toFixed(2);
    }

    setCostSheetData(costHead: string) {
        this.costDetailsArr = this.costDetailsArr.map((x: any) => {
            if (
                costHead != this.SKUCostParticulars.profit &&
                x.costHead == this.SKUCostParticulars.totalCostOfOperation
            ) {
                x.costPerUnit = +(
                    this.setCostHead(this.SKUCostParticulars.costOfGoodsSold) +
                    this.setCostHead(this.SKUCostParticulars.operatingOpex)
                ).toFixed(2);
            }
            if (x.costHead == this.SKUCostParticulars.sellingPrice) {
                x.costPerUnit = +(
                    this.setCostHead(this.SKUCostParticulars.totalCostOfOperation) +
                    this.setCostHead(this.SKUCostParticulars.profit)
                ).toFixed(2);
            }
            return x;
        });
        this.updateCostSheetPercentage();
    }
    updateCostSheetPercentage() {
        this.costDetailsArr = this.costDetailsArr.map((x: any) => {
            x.percentage = this.getPercentage(x.costPerUnit);
            return x;
        });
    }

    setCostHead(costHead: string) {
        let costPerUnit = this.costDetailsArr.find((x: any) => x.costHead == costHead)?.costPerUnit || 0;

        return +costPerUnit.toFixed(2);
    }
}
