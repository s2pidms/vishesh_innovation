import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import { InkMixingIPQAService } from "@services/production/inkMixingIPQA.service";

@Component({
  selector: 'app-ink-mixing-log-ipqa-modal',
  templateUrl: './ink-mixing-log-ipqa-modal.component.html',
  styleUrls: ['./ink-mixing-log-ipqa-modal.component.scss']
})
export class InkMixingLogIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";

    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    inkMixingLogIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private inkMixingIPQAService: InkMixingIPQAService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.inkMixingLogIPQA.jobCard = this.selectedDetails?.jobCard;
        this.inkMixingLogIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.inkMixingLogIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.inkMixingLogIPQA.SKU = this.selectedDetails?.SKU;
        this.inkMixingLogIPQA.SKUName = this.selectedDetails?.SKUName;
        this.inkMixingLogIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.inkMixingIPQAService.createOrUpdate(this.inkMixingLogIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.inkMixingIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.inkMixingLogIPQA = result.inkMixingLogIPQA;
            if (this.inkMixingLogIPQA?.IPQALog?.inProcessInfo?.length > 0) {
                this.inkMixingLogIPQA.IPQALog.inProcessInfo = JSON.parse(
                    JSON.stringify(this.inkMixingLogIPQA.IPQALog?.inProcessInfo)
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
        if (this.inkMixingLogIPQA?.IPQALog?.inProcessInfo?.length > 1) {
            this.inkMixingLogIPQA.IPQALog.inProcessInfo.pop();
        }
    }
    addTableRow() {
        this.inkMixingLogIPQA.IPQALog.inProcessInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            inProcessCorrection: "",
            inProcessNonConformance: null
        });
    }
}
