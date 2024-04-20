import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-prod-info-modal",
    templateUrl: "./prod-info-modal.component.html",
    styleUrls: ["./prod-info-modal.component.scss"]
})
export class ProdInfoModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() prodInfoList: any = [];
    @Input() shiftOptions: any = [];
    @Input() productionDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
    ngOnInit(): void {
        if (this.productionDetails.info.length > 0) {
            this.prodInfoList = JSON.parse(JSON.stringify(this.productionDetails?.info))?.map((x: any) => {
                if (x.prodDate) {
                    x.prodDate = this.utilityService.getFormatDate(x.prodDate, "YYYY-MM-DD");
                }
                return x;
            });
        } else {
            this.prodInfoList = [
                {
                    prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    prodShift: "",
                    operatingStaff: "",
                    prodQty: null
                }
            ];
        }
    }

    deleteTableRow() {
        if (["create", "edit"].includes(this.action) && this.prodInfoList.length > 1) {
            this.prodInfoList.pop();
            this.calCumulativeCount();
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.prodInfoList.push({
                prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                prodShift: "",
                operatingStaff: "",
                prodQty: null
            });
        }
    }

    dismissModel() {
        this.activeModal.close({
            prodInfoList: this.prodInfoList,
            production: {
                info: this.prodInfoList,
                prodSource: this.productionDetails?.prodSource,
                cumulativeCount: this.productionDetails?.cumulativeCount,
                remarks: this.productionDetails?.remarks,
                prodAuthorizedBy: this.productionDetails?.prodAuthorizedBy
            }
        });
    }

    calCumulativeCount() {
        let totalCumulativeCount = this.prodInfoList.reduce((a: any, c: any) => +a + +c.prodQty, 0);
        this.productionDetails.cumulativeCount = +totalCumulativeCount.toFixed(2);
    }
}
