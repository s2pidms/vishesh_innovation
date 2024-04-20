import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-tooling-cost-modal",
    templateUrl: "./tooling-cost-modal.component.html",
    styleUrls: ["./tooling-cost-modal.component.scss"]
})
export class ToolingCostModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() totalToolingCostPerUnit: any = 0;
    @Input() toolingCAQty: any = 0;
    @Input() toolingCostDetails: any = [];
    oldToolingCostDetails: any = [];

    constructor(public activeModal: NgbActiveModal) {}
    ngOnInit(): void {
        this.oldToolingCostDetails = JSON.parse(JSON.stringify(this.toolingCostDetails));
    }

    deleteTableRow() {
        if (this.action != "view" && this.toolingCostDetails.length > 1) {
            this.toolingCostDetails.pop();
            this.calTotalToolingCost();
        }
    }
    addTableRow() {
        if (this.action != "view") {
            this.toolingCostDetails.push({
                toolingDescription: "",
                toolingCost: 0,
                CAUnits: this.toolingCAQty,
                toolingCostPerUnit: 0
            });
        }
    }

    dismissModel() {
        this.activeModal.close({
            toolingCostDetails: this.toolingCostDetails,
            totalToolingCostPerUnit: this.totalToolingCostPerUnit
        });
    }

    reset() {
        this.toolingCostDetails = [];
        this.toolingCostDetails = JSON.parse(JSON.stringify(this.oldToolingCostDetails));
        this.calTotalToolingCost();
    }

    setToolingCostData(item: any, index: any) {
        if (item.toolingCost && item?.CAUnits) {
            this.toolingCostDetails[index].toolingCostPerUnit = +(+item?.toolingCost / +item?.CAUnits).toFixed(2);
        }

        this.calTotalToolingCost();
    }

    calTotalToolingCost() {
        let toolingCostPerUnit = this.toolingCostDetails
            .map((y: any) => y.toolingCostPerUnit || 0)
            .reduce((a: any, c: any) => +a + +c, 0);
        this.totalToolingCostPerUnit = +toolingCostPerUnit.toFixed(2);
    }
}
