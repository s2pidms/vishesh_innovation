import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {WeedingIPQAService} from "@services/production";

@Component({
    selector: "app-weeding-log-entry-ipqa-modal",
    templateUrl: "./weeding-log-entry-ipqa-modal.component.html",
    styleUrls: ["./weeding-log-entry-ipqa-modal.component.scss"]
})
export class WeedingLogEntryIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";

    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    weedingIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private weedingIPQAService: WeedingIPQAService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.weedingIPQA.jobCard = this.selectedDetails?.jobCard;
        this.weedingIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.weedingIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.weedingIPQA.SKU = this.selectedDetails?.SKU;
        this.weedingIPQA.SKUName = this.selectedDetails?.SKUName;
        this.weedingIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.weedingIPQAService.createOrUpdate(this.weedingIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.weedingIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.weedingIPQA = result.weedingIPQA;
            if (this.weedingIPQA?.IPQALog?.inProcessInfo?.length > 0) {
                this.weedingIPQA.IPQALog.inProcessInfo = JSON.parse(
                    JSON.stringify(this.weedingIPQA.IPQALog?.inProcessInfo)
                )?.map((x: any) => {
                    if (x.date) {
                        x.date = this.utilityService.getFormatDate(x.date, "YYYY-MM-DD");
                    }
                    return x;
                });
            }
            this.spinner.hide();
        });
    }

    deleteTableRow() {
        if (this.weedingIPQA?.IPQALog?.inProcessInfo?.length > 1) {
            this.weedingIPQA.IPQALog.inProcessInfo.pop();
        }
    }
    addTableRow() {
        this.weedingIPQA.IPQALog.inProcessInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            inProcessCorrection: "",
            inProcessNonConformance: null
        });
    }
}
