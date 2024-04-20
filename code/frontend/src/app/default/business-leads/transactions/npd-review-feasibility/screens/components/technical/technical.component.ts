import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";
import {ToastService, StorageService} from "@core/services";
import {NpdReviewHistoryComponent} from "../npd-review-history/npd-review-history.component";

@Component({
    selector: "app-technical",
    templateUrl: "./technical.component.html"
})
export class TechnicalComponent implements OnInit {
    @Input() technical: NPDReview[] = [];
    @Output() technicalChange = new EventEmitter<any>();
    @Input() technicalObj: any = {};
    @Output() technicalObjChange = new EventEmitter<any>();
    @Output() saveData = new EventEmitter<any>();

    statusArr = NPD_STATUS_LIST;
    constructor(
        private modalService: NgbModal,
        private toastService: ToastService,
        private storageService: StorageService
    ) {}

    @Input() action: string = "";

    user: any = {};
    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser");
        this.technicalObj.reviewBy = this.user.name;
    }

    saveTechnical() {
        if (!this.technicalObj.reviewNo) {
            this.toastService.warning("Review No.is Required");
            return;
        }

        if (!this.technicalObj.reviewDate) {
            this.toastService.warning("Review Date is Required");
            return;
        }

        if (!this.technicalObj.reviewBy) {
            this.toastService.warning("Reviewed by is Required");
            return;
        }

        if (!this.technicalObj.status) {
            this.toastService.warning("Review output is Required");
            return;
        }
        if (
            ["Additional Review Required", "Not Feasible"].includes(this.technicalObj.status) &&
            this.technicalObj.technicalReview.every((x: any) => !x.remarks)
        ) {
            this.toastService.warning("Add Remarks to Save Records");
            return;
        }
        if (this.technicalObj) {
            this.technical.push(this.technicalObj);
        }
        this.saveData.emit({data: this.technical, key: "technical"});
    }

    openNPDReview() {
        if (this.technical.length > 0) {
            const modalRef = this.modalService.open(NpdReviewHistoryComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.labels = {
                srNo: "Sr. No.",
                question: "Technical Review - Questionnaire",
                check: 'Check if "Yes"',
                remark: "Remarks"
            };
            modalRef.componentInstance.reviewHistory = this.technical;
        }
    }
}
