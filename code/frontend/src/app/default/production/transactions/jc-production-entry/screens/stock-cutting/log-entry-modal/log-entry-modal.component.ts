import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-log-entry-modal",
    templateUrl: "./log-entry-modal.component.html",
    styleUrls: ["./log-entry-modal.component.scss"]
})
export class LogEntryModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() logEntry: any = {};
    @Input() shiftOptions: any = []; 
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
    ngOnInit(): void {
        console.log("logEntry", this.logEntry);

        if (this.logEntry.logEntryDetails.length > 0) {
            this.logEntry.logEntryDetails = JSON.parse(JSON.stringify(this.logEntry?.logEntryDetails))?.map(
                (x: any) => {
                    if (x.prodDate) {
                        x.prodDate = this.utilityService.getFormatDate(x.prodDate, "YYYY-MM-DD");
                    }
                    return x;
                }
            );
        } else {
            this.logEntry.logEntryDetails = [
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
        if (["create", "edit"].includes(this.action) && this.logEntry.logEntryDetails.length > 1) {
            this.logEntry.logEntryDetails.pop();
            this.calCumulativeCount();
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.logEntry.logEntryDetails.push({
                prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                prodShift: "",
                operatingStaff: "",
                prodQty: null
            });
        }
    }

    dismissModel() {
        this.activeModal.close({
            logEntry: this.logEntry
            // production: {
            //     info: this.logEntry.logEntryDetails,
            //     prodSource: this.logEntry?.prodSource,
            //     cumulativeCount: this.logEntry?.cumulativeCount,
            //     remarks: this.logEntry?.remarks,
            //     prodAuthorizedBy: this.logEntry?.prodAuthorizedBy
            // }
        });
    }

    calCumulativeCount() {
        let totalCumulativeCount = this.logEntry.logEntryDetails.reduce((a: any, c: any) => +a + +c.prodQty, 0);
        this.logEntry.cumulativeCount = +totalCumulativeCount.toFixed(2);
    }
}
