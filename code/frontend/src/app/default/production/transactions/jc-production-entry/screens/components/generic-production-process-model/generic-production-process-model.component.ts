import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {GenericProductionProcessService} from "@services/production";

@Component({
    selector: "app-generic-production-process-model",
    templateUrl: "./generic-production-process-model.component.html",
    styleUrls: ["./generic-production-process-model.component.scss"]
})
export class GenericProductionProcessModelComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() shiftOptions: any = [];
    @Input() jobCardDetails: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    genericProduction: any = {
        prodLog: {
            prodSource: null,
            cumulativeCount: 0,
            remarks: null,
            prodAuthorizedBy: null,
            logEntryDetails: [
                {
                    prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                    prodShift: null,
                    operatingStaff: null,
                    prodQty: null
                }
            ]
        }
    };
    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private genericProductionProcessService: GenericProductionProcessService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        console.log("action", this.action);

        this.action = this.action ?? "create";
        this.getInitialData();
    }

    submit() {
        if (!this.genericProduction.prodLog.cumulativeCount) {
            this.toastService.warning("Pls Fill the Details !!");
            return;
        }

        this.genericProduction.processType = this.jobCardDetails?.processOriginalName;
        this.genericProduction.jobCard = this.jobCardDetails?.jobCard;
        this.genericProduction.jobCardNo = this.jobCardDetails?.jobCardNo;
        this.genericProduction.SKUNo = this.jobCardDetails?.SKUNo;
        this.genericProduction.SKU = this.jobCardDetails?.SKU;
        this.genericProduction.SKUName = this.jobCardDetails?.SKUName;
        this.genericProduction.SKUDescription = this.jobCardDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.genericProductionProcessService.createOrUpdate(this.genericProduction).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close(this.genericProduction);
        });
    }

    deleteTableRow() {
        if (["create", "edit"].includes(this.action) && this.genericProduction.prodLog.logEntryDetails.length > 1) {
            this.genericProduction.prodLog.logEntryDetails.pop();
            this.calCumulativeCount();
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.genericProduction.prodLog.logEntryDetails.push({
                prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                prodShift: "",
                operatingStaff: "",
                prodQty: null
            });
        }
    }

    calCumulativeCount() {
        let totalCumulativeCount = this.genericProduction.prodLog.logEntryDetails.reduce(
            (a: any, c: any) => +a + +c.prodQty,
            0
        );
        this.genericProduction.prodLog.cumulativeCount = +totalCumulativeCount.toFixed(2);
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.genericProductionProcessService.getAllMasterData(this.jobCardDetails).subscribe(result => {
            this.shiftOptions = result.shiftOptions;
            this.genericProduction = result.genericProduction;
            if (this.genericProduction?.prodLog?.logEntryDetails?.length > 0) {
                this.genericProduction.prodLog.logEntryDetails = JSON.parse(
                    JSON.stringify(this.genericProduction.prodLog.logEntryDetails)
                )?.map((x: any) => {
                    if (x.prodDate) {
                        x.prodDate = this.utilityService.getFormatDate(x.prodDate, "YYYY-MM-DD");
                    }
                    return x;
                });
            }
            this.spinner.hide();
        });
    }
}
