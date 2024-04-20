import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";
import {ToastService, StorageService} from "@core/services";
import {NpdReviewHistoryComponent} from "../npd-review-history/npd-review-history.component";

@Component({
    selector: "app-economic",
    templateUrl: "./economic.component.html"
})
export class EconomicComponent implements OnInit {
    @Input() economic: NPDReview[] = [];
    @Input() action: string = "";
    @Output() economicChange = new EventEmitter<any>();
    @Input() economicObj: any = {};
    @Output() economicObjChange = new EventEmitter<any>();
    @Output() saveData = new EventEmitter<any>();

    user: any = {};

    statusArr = NPD_STATUS_LIST;
    constructor(
        private modalService: NgbModal,
        private toastService: ToastService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser");
        this.economicObj.reviewBy = this.user.name;
    }
    saveEconomic() {
        if (!this.economicObj.reviewNo) {
            this.toastService.warning("Review No.is Required");
            return;
        }

        if (!this.economicObj.reviewDate) {
            this.toastService.warning("Review Date is Required");
            return;
        }

        if (!this.economicObj.reviewBy) {
            this.toastService.warning("Reviewed by is Required");
            return;
        }

        if (!this.economicObj.status) {
            this.toastService.warning("Review output is Required");
            return;
        }

        if (
            ["Additional Review Required", "Not Feasible"].includes(this.economicObj.status) &&
            this.economicObj.technicalReview.every((x: any) => !x.remarks)
        ) {
            this.toastService.warning("Add Remarks to Save Records");
            return;
        }

        if (this.economicObj) {
            this.economic.push(this.economicObj);
        }
        this.saveData.emit({data: this.economic, key: "economic"});
    }

    openNPDReview() {
        if (this.economic.length > 0) {
            const modalRef = this.modalService.open(NpdReviewHistoryComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.labels = {
                srNo: "Sr. No.",
                question: "Economic Review - Questionnaire",
                check: 'Check if "Yes"',
                remark: "Remarks"
            };
            modalRef.componentInstance.reviewHistory = this.economic;
        }
    }
}
