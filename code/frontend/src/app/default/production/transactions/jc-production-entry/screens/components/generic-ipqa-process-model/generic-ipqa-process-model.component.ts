import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {GenericIPQAProcessService} from "@services/production";

@Component({
    selector: "app-generic-ipqa-process-model",
    templateUrl: "./generic-ipqa-process-model.component.html",
    styleUrls: ["./generic-ipqa-process-model.component.scss"]
})
export class GenericIpqaProcessModelComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() shiftOptions: any = [];
    @Input() selectedDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    genericIPQA: any = {
        IPQALog: {
            prodSource: null,
            cumulativeCount: 0,
            remarks: null,
            qualityReleasedBy: null,
            logEntryDetails: [
                {
                    inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    shift: null,
                    inspectionStaff: null,
                    releaseQty: null
                }
            ]
        }
    };

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private genericIPQAProcessService: GenericIPQAProcessService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        this.action = this.action ?? "create";
        this.getInitialData();
    }

    submit() {
        if (!this.genericIPQA.IPQALog.cumulativeCount) {
            this.toastService.warning("Pls Fill the Details !!");
            return;
        }

        this.genericIPQA.processType = this.selectedDetails?.processOriginalName;
        this.genericIPQA.jobCard = this.selectedDetails?.jobCard;
        this.genericIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.genericIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.genericIPQA.SKU = this.selectedDetails?.SKU;
        this.genericIPQA.SKUName = this.selectedDetails?.SKUName;
        this.genericIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.genericIPQAProcessService.createOrUpdate(this.genericIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close(this.genericIPQA);
        });
    }

    deleteTableRow() {
        if (["create", "edit"].includes(this.action) && this.genericIPQA?.IPQALog?.logEntryDetails.length > 1) {
            this.genericIPQA.IPQALog.logEntryDetails.pop();
            this.calCumulativeCount();
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.genericIPQA.IPQALog.logEntryDetails.push({
                inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                shift: "",
                inspectionStaff: "",
                releaseQty: null
            });
        }
    }

    calCumulativeCount() {
        let totalReleaseQty = this.genericIPQA?.IPQALog?.logEntryDetails?.reduce(
            (a: any, c: any) => +a + +c.releaseQty,
            0
        );
        this.genericIPQA.IPQALog.cumulativeCount = +totalReleaseQty.toFixed(2);
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.genericIPQAProcessService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.shiftOptions = result.shiftOptions;
            this.genericIPQA = result.genericIPQA;
            if (this.genericIPQA?.IPQALog?.logEntryDetails?.length > 0) {
                this.genericIPQA.IPQALog.logEntryDetails = JSON.parse(
                    JSON.stringify(this.genericIPQA.IPQALog.logEntryDetails)
                )?.map((x: any) => {
                    if (x.inspectionDate) {
                        x.inspectionDate = this.utilityService.getFormatDate(x.inspectionDate, "YYYY-MM-DD");
                    }
                    return x;
                });
            }
            this.spinner.hide();
        });
    }
}
