import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {StockPreparationIPQAService} from "@services/production";

@Component({
    selector: "app-stock-preparation-ipqa-modal",
    templateUrl: "./stock-preparation-ipqa-modal.component.html",
    styleUrls: ["./stock-preparation-ipqa-modal.component.scss"]
})
export class StockPreparationIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";

    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    stockCuttingIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private stockPreparationIPQAService: StockPreparationIPQAService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.stockCuttingIPQA.jobCard = this.selectedDetails?.jobCard;
        this.stockCuttingIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.stockCuttingIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.stockCuttingIPQA.SKU = this.selectedDetails?.SKU;
        this.stockCuttingIPQA.SKUName = this.selectedDetails?.SKUName;
        this.stockCuttingIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.stockPreparationIPQAService.createOrUpdate(this.stockCuttingIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.stockPreparationIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.stockCuttingIPQA = result.stockCuttingIPQA;
            if (this.stockCuttingIPQA?.IPQALog?.inProcessInfo?.length > 0) {
                this.stockCuttingIPQA.IPQALog.inProcessInfo = JSON.parse(
                    JSON.stringify(this.stockCuttingIPQA.IPQALog?.inProcessInfo)
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
        if (this.stockCuttingIPQA?.IPQALog?.inProcessInfo?.length > 1) {
            this.stockCuttingIPQA.IPQALog.inProcessInfo.pop();
        }
    }
    addTableRow() {
        this.stockCuttingIPQA.IPQALog.inProcessInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            inProcessCorrection: "",
            inProcessNonConformance: null
        });
    }
}
