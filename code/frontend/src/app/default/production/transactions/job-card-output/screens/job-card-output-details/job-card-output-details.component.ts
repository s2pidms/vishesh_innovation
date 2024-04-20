import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";

@Component({
    selector: "app-job-card-output-details",
    templateUrl: "./job-card-output-details.component.html",
    styleUrls: ["./job-card-output-details.component.scss"]
})
export class JobCardOutputDetailsComponent implements OnInit {
    @Input() outputDetailsList: any = [];
    @Input() locationOptions: any = [];
    @Input() action: any = "";
    @Input() UOM: any = "";
    @Input() cumulativeCount: any = "";
    @Input() location: any = null;
    MRNMaterialInspectionArr: any = [];
    constructor(
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {}

    deleteTableRow() {
        if (!["view", "approve"].includes(this.action) && this.outputDetailsList.length > 1) {
            this.outputDetailsList.pop();
            this.calTotalCumulativeCount();
        }
    }
    addTableRow() {
        if (!["view", "approve"].includes(this.action)) {
            this.outputDetailsList.push({
                inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                UOM: this.UOM,
                outputQty: 0,
                inspectedBy: "",
                QCApprovedBy: ""
            });
        }
    }
    setOutputQty() {
        this.calTotalCumulativeCount();
    }
    calTotalCumulativeCount() {
        let totalOutputQty = this.outputDetailsList
            .map((y: any) => y.outputQty || 0)
            .reduce((a: any, c: any) => +a + +c, 0);
        this.cumulativeCount = +totalOutputQty.toFixed(2);
    }
    dismissModel() {
        if (!this.location) {
            this.toastService.warning("Location is required !");
            return;
        }
        this.activeModal.close({
            outputDetailsList: this.outputDetailsList,
            cumulativeCount: this.cumulativeCount,
            location: this.location
        });
    }
}
