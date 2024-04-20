import {Component, Input, OnInit, QueryList, ViewChildren, ViewEncapsulation} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-jc-prod-info-modal",
    templateUrl: "./jc-prod-info-modal.component.html",
    styleUrls: ["./jc-prod-info-modal.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class JcProdInfoModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() prodInfoList: any = [];
    @Input() shiftOptions: any = [];
    @Input() productionDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
    ngOnInit(): void {
        if (this.productionDetails?.production?.prodInfo?.length > 0) {
            this.prodInfoList = JSON.parse(JSON.stringify(this.productionDetails?.production?.prodInfo))?.map(
                (x: any) => {
                    if (x.prodStartDate) {
                        x.prodStartDate = this.utilityService.getFormatDate(x.prodStartDate, "YYYY-MM-DD");
                    }
                    if (x.prodEndDate) {
                        x.prodEndDate = this.utilityService.getFormatDate(x.prodEndDate, "YYYY-MM-DD");
                    }
                    return x;
                }
            );
        } else {
            this.prodInfoList = [
                {
                    seq: null,
                    subProcessName: "",
                    prodStartDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    prodEndDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    operatingStaff: "",
                    prodStatus: false
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
                prodStartDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                prodEndDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                operatingStaff: "",
                prodStatus: false
            });
        }
    }

    dismissModel() {
        this.activeModal.close({
            prodInfoList: this.prodInfoList,
            production: {
                prodInfo: this.prodInfoList,
                prodRemarks: this.productionDetails?.prodRemarks
            }
        });
    }
}
