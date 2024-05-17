import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {ToastService, UtilityService} from "@core/services";

@Component({
    selector: "app-generate-report-modal",
    templateUrl: "./generate-report-modal.component.html"
})
export class GenerateReportModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() generateReport: any = {};
    @Input() billFromLocationOptions: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        if (this.generateReport.jobCardClosureDate) {
            this.generateReport.jobCardClosureDate = this.utilityService.getFormatDate(
                this.generateReport.jobCardClosureDate,
                "YYYY-MM-DD"
            );
        }
        if (this.billFromLocationOptions.length === 1) {
            this.generateReport.location = this.billFromLocationOptions[0].value;
        }
    }

    setRejectQty() {
        if (this.generateReport.batchInputQty && this.generateReport.batchOutputQty) {
            this.generateReport.batchRejQty = this.generateReport.batchInputQty - this.generateReport.batchOutputQty;
        } else {
            this.generateReport.batchRejQty = 0;
        }

        // if (this.generateReport.batchOutputQty > this.generateReport.batchInputQty) {
        //     this.toastService.warning("Batch Output Quantity should be less than and equal to Batch Input Quantity !!");
        //     this.generateReport.batchOutputQty = 0;
        //     this.generateReport.batchRejQty = 0;
        // }
    }

    dismissModel() {
        // if (!this.generateReport.batchInputQty) {
        //     this.toastService.warning("Batch Input Quantity is Required");
        //     return;
        // }
        if (this.generateReport.checkoutStatus == "Skip Integration" && !this.generateReport.batchOutputQty) {
            this.toastService.warning("Batch Output Quantity is Required");
            return;
        }
        // if (!this.generateReport.batchRejQty) {
        //     this.toastService.warning("Batch Rejection Quantity is Required");
        //     return;
        // }

        this.activeModal.close(this.generateReport);
    }
}
