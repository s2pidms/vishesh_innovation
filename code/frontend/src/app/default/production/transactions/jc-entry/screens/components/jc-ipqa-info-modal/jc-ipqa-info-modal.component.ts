import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-jc-ipqa-info-modal",
    templateUrl: "./jc-ipqa-info-modal.component.html",
    styleUrls: ["./jc-ipqa-info-modal.component.scss"]
})
export class JcIPQAInfoModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() prodInfoList: any = [];
    @Input() releaseStatusOptions: any = [];
    @Input() IPQADetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
    ngOnInit(): void {
        if (this.IPQADetails?.IPQA?.IPQAInfo?.length > 0) {
            this.prodInfoList = JSON.parse(JSON.stringify(this.IPQADetails?.IPQA?.IPQAInfo))?.map((x: any) => {
                if (x.releasedDate) {
                    x.releasedDate = this.utilityService.getFormatDate(x.releasedDate, "YYYY-MM-DD");
                }
                return x;
            });
        } else {
            this.prodInfoList = [
                {
                    seq: null,
                    subProcessName: "",
                    inspectedBy: "",
                    releasedDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    releaseStatus: null,
                    IPQAStatus: false
                }
            ];
        }
    }

    deleteTableRow() {
        if (["create", "edit"].includes(this.action) && this.prodInfoList.length > 1) {
            this.prodInfoList.pop();
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.prodInfoList.push({
                seq: null,
                subProcessName: "",
                inspectedBy: "",
                releasedDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                releaseStatus: null,
                IPQAStatus: false
            });
        }
    }

    dismissModel() {
        this.activeModal.close({
            prodInfoList: this.prodInfoList,
            IPQA: {
                IPQAInfo: this.prodInfoList,
                IPQARemarks: this.IPQADetails?.IPQARemarks
            }
        });
    }
}
