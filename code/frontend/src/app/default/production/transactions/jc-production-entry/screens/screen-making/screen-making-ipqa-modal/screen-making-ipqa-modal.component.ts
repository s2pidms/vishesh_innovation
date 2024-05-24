import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {ScreenMakingIPQAService} from "@services/production/screenMakingIPQA.service";

@Component({
    selector: "app-screen-making-ipqa-modal",
    templateUrl: "./screen-making-ipqa-modal.component.html",
    styleUrls: ["./screen-making-ipqa-modal.component.scss"]
})
export class ScreenMakingIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";

    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    screenMakingLogIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private screenMakingIPQAService: ScreenMakingIPQAService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.screenMakingLogIPQA.jobCard = this.selectedDetails?.jobCard;
        this.screenMakingLogIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.screenMakingLogIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.screenMakingLogIPQA.SKU = this.selectedDetails?.SKU;
        this.screenMakingLogIPQA.SKUName = this.selectedDetails?.SKUName;
        this.screenMakingLogIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.screenMakingIPQAService.createOrUpdate(this.screenMakingLogIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.screenMakingIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.screenMakingLogIPQA = result.screenMakingLogIPQA;
            if (this.screenMakingLogIPQA?.IPQALog?.inProcessInfo?.length > 0) {
                this.screenMakingLogIPQA.IPQALog.inProcessInfo = JSON.parse(
                    JSON.stringify(this.screenMakingLogIPQA.IPQALog?.inProcessInfo)
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
        if (this.screenMakingLogIPQA?.IPQALog?.inProcessInfo?.length > 1) {
            this.screenMakingLogIPQA.IPQALog.inProcessInfo.pop();
        }
    }
    addTableRow() {
        this.screenMakingLogIPQA.IPQALog.inProcessInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            inProcessCorrection: "",
            inProcessNonConformance: null
        });
    }
}
