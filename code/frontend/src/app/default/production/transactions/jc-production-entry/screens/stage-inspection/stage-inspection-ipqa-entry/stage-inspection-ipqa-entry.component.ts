import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {StageInspectionIPQAService} from "@services/production";

@Component({
    selector: "app-stage-inspection-ipqa-entry",
    templateUrl: "./stage-inspection-ipqa-entry.component.html",
    styleUrls: ["./stage-inspection-ipqa-entry.component.scss"]
})
export class StageInspectionIpqaEntryComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() selectedDetails: any = {};
    shiftOptions: any = [];
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    processSource: any = "";
    stageInspectionIPQA: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private stageInspectionIPQAService: StageInspectionIPQAService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.stageInspectionIPQA.jobCard = this.selectedDetails?.jobCard;
        this.stageInspectionIPQA.jobCardNo = this.selectedDetails?.jobCardNo;
        this.stageInspectionIPQA.SKUNo = this.selectedDetails?.SKUNo;
        this.stageInspectionIPQA.SKU = this.selectedDetails?.SKU;
        this.stageInspectionIPQA.SKUName = this.selectedDetails?.SKUName;
        this.stageInspectionIPQA.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.stageInspectionIPQAService.createOrUpdate(this.stageInspectionIPQA).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close(this.stageInspectionIPQA);
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.stageInspectionIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.shiftOptions = result.shiftOptions;
            this.stageInspectionIPQA = result.stageInspectionIPQA;
            if (this.stageInspectionIPQA?.stageInspectionIPQAInfo?.length > 0) {
                this.stageInspectionIPQA.stageInspectionIPQAInfo = JSON.parse(
                    JSON.stringify(this.stageInspectionIPQA.stageInspectionIPQAInfo)
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
        this.stageInspectionIPQA.totalOkQty = this.stageInspectionIPQA?.stageInspectionIPQAInfo
            ?.map((x: any) => +x?.okQty)
            ?.filter((y: any) => y > 0)
            ?.reduce((a: any, c: any) => +a + +c, 0);
    }

    deleteTableRow() {
        // ["create", "edit"].includes(this.action) &&
        if (this.stageInspectionIPQA?.stageInspectionIPQAInfo.length > 1) {
            this.stageInspectionIPQA?.stageInspectionIPQAInfo.pop();
        }
    }
    addTableRow() {
        // if (["create", "edit"].includes(this.action)) {
        this.stageInspectionIPQA?.stageInspectionIPQAInfo.push({
            date: this.utilityService.getTodayDate("YYYY-MM-DD"),
            shift: null,
            UOM: this.selectedDetails?.UOM,
            okQty: 0,
            inspectedBy: null
        });
        // }
    }
}
