import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-ipqa-modal",
    templateUrl: "./ipqa-modal.component.html",
    styleUrls: ["./ipqa-modal.component.scss"]
})
export class IPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() IPQAInfoList: any = [];
    @Input() shiftOptions: any = [];
    @Input() IPQADetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
    ngOnInit(): void {
        if (this.IPQADetails.info.length > 0) {
            this.IPQAInfoList = JSON.parse(JSON.stringify(this.IPQADetails?.info))?.map((x: any) => {
                if (x.inspectionDate) {
                    x.inspectionDate = this.utilityService.getFormatDate(x.inspectionDate, "YYYY-MM-DD");
                }
                return x;
            });
        } else {
            this.IPQAInfoList = [
                {
                    inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    shift: "",
                    inspectionStaff: "",
                    releaseQty: null
                }
            ];
        }
    }

    deleteTableRow() {
        if (["create", "edit"].includes(this.action) && this.IPQAInfoList.length > 1) {
            this.IPQAInfoList.pop();
            this.calCumulativeCount();
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.IPQAInfoList.push({
                inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                shift: "",
                inspectionStaff: "",
                releaseQty: null
            });
        }
    }

    dismissModel() {
        this.activeModal.close({
            IPQAInfoList: this.IPQAInfoList,
            IPQA: {
                info: this.IPQAInfoList,
                prodSource: this.IPQADetails.prodSource,
                cumulativeCount: this.IPQADetails.cumulativeCount,
                remarks: this.IPQADetails.remarks,
                qualityReleaseBy: this.IPQADetails.qualityReleaseBy
            }
        });
    }

    calCumulativeCount() {
        let totalReleaseQty = this.IPQAInfoList.reduce((a: any, c: any) => +a + +c.releaseQty, 0);
        this.IPQADetails.cumulativeCount = +totalReleaseQty.toFixed(2);
    }
}
