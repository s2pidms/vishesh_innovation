import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {LaminationIPQAService} from "@services/production";

@Component({
    selector: "app-lamination-log-entry-ipqa-modal",
    templateUrl: "./lamination-log-entry-ipqa-modal.component.html",
    styleUrls: ["./lamination-log-entry-ipqa-modal.component.scss"]
})
export class LaminationLogEntryIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";

    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    laminationIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private laminationIPQAService: LaminationIPQAService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.laminationIPQA.jobCard = this.selectedDetails?.jobCard;
        this.laminationIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.laminationIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.laminationIPQA.SKU = this.selectedDetails?.SKU;
        this.laminationIPQA.SKUName = this.selectedDetails?.SKUName;
        this.laminationIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.laminationIPQAService.createOrUpdate(this.laminationIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.laminationIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.laminationIPQA = result.laminationIPQA;
            if (this.laminationIPQA?.IPQALog?.inProcessInfo?.length > 0) {
                this.laminationIPQA.IPQALog.inProcessInfo = JSON.parse(
                    JSON.stringify(this.laminationIPQA.IPQALog?.inProcessInfo)
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
        if (this.laminationIPQA?.IPQALog?.inProcessInfo?.length > 1) {
            this.laminationIPQA.IPQALog.inProcessInfo.pop();
        }
    }
    addTableRow() {
        this.laminationIPQA.IPQALog.inProcessInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            inProcessCorrection: "",
            inProcessNonConformance: null
        });
    }
}
