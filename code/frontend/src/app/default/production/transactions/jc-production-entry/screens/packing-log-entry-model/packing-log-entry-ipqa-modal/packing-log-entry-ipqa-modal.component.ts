import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {PackingIPQAService, StockPreparationIPQAService} from "@services/production";

@Component({
    selector: "app-packing-log-entry-ipqa-modal",
    templateUrl: "./packing-log-entry-ipqa-modal.component.html",
    styleUrls: ["./packing-log-entry-ipqa-modal.component.scss"]
})
export class PackingLogEntryIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";

    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    packingIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private packingIPQAService: PackingIPQAService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.packingIPQA.jobCard = this.selectedDetails?.jobCard;
        this.packingIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.packingIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.packingIPQA.SKU = this.selectedDetails?.SKU;
        this.packingIPQA.SKUName = this.selectedDetails?.SKUName;
        this.packingIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.packingIPQAService.createOrUpdate(this.packingIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.packingIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.packingIPQA = result.packingIPQA;
            if (this.packingIPQA?.IPQALog?.inProcessInfo?.length > 0) {
                this.packingIPQA.IPQALog.inProcessInfo = JSON.parse(
                    JSON.stringify(this.packingIPQA.IPQALog?.inProcessInfo)
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
        if (this.packingIPQA?.IPQALog?.inProcessInfo?.length > 1) {
            this.packingIPQA.IPQALog.inProcessInfo.pop();
        }
    }
    addTableRow() {
        this.packingIPQA.IPQALog.inProcessInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            inProcessCorrection: "",
            inProcessNonConformance: null
        });
    }
}
