import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {StageInspectionService} from "@services/production";

@Component({
    selector: "app-stage-inspection-prod-entry",
    templateUrl: "./stage-inspection-prod-entry.component.html",
    styleUrls: ["./stage-inspection-prod-entry.component.scss"]
})
export class StageInspectionProdEntryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() selectedDetails: any = {};
    @Input() jobCardDetails: any = {};
    shiftOptions: any = [];
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    processSource: any = "";
    stageInspection: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private stageInspectionService: StageInspectionService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.stageInspection.jobCard = this.jobCardDetails?.jobCard;
        this.stageInspection.jobCardNo = this.jobCardDetails?.jobCardNo;
        this.stageInspection.SKUNo = this.jobCardDetails?.SKUNo;
        this.stageInspection.SKU = this.jobCardDetails?.SKU;
        this.stageInspection.SKUName = this.jobCardDetails?.SKUName;
        this.stageInspection.SKUDescription = this.jobCardDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.stageInspectionService.createOrUpdate(this.stageInspection).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.stageInspectionService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.shiftOptions = result.shiftOptions;
            this.stageInspection = result.stageInspection;
            if (this.stageInspection?.stageInspectionInfo?.length > 0) {
                this.stageInspection.stageInspectionInfo = JSON.parse(
                    JSON.stringify(this.stageInspection.stageInspectionInfo)
                )?.map((x: any) => {
                    if (x.date) {
                        x.date = this.utilityService.getFormatDate(x.date, "YYYY-MM-DD");
                        x.UOM = this.selectedDetails?.UOM;
                    }
                    return x;
                });
            }
            this.spinner.hide();
        });
    }

    totalOKQty() {
        this.stageInspection.totalOkQty = this.stageInspection?.stageInspectionInfo
            ?.map((x: any) => +x?.okQty)
            ?.filter((y: any) => y > 0)
            ?.reduce((a: any, c: any) => +a + +c, 0);
    }

    deleteTableRow() {
        // ["create", "edit"].includes(this.action) &&
        if (this.stageInspection?.stageInspectionInfo.length > 1) {
            this.stageInspection?.stageInspectionInfo.pop();
            this.totalOKQty();
        }
    }
    addTableRow() {
        // if (["create", "edit"].includes(this.action)) {
        this.stageInspection?.stageInspectionInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            shift: null,
            UOM: this.selectedDetails?.UOM,
            okQty: 0,
            inspectedBy: null
        });
        // }
    }
}
