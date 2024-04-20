import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";
import {ToastService, StorageService} from "@core/services";
import {NpdReviewHistoryComponent} from "../npd-review-history/npd-review-history.component";

@Component({
    selector: "app-legal",
    templateUrl: "./legal.component.html"
})
export class LegalComponent implements OnInit {
    @Input() legal: NPDReview[] = [];
    @Output() legalChange = new EventEmitter<any>();
    @Input() legalObj: any = [];
    @Output() legalObjChange = new EventEmitter<any>();
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
        this.legalObj.reviewBy = this.user.name;
    }

    saveLegal() {
        if (!this.legalObj.reviewNo) {
            this.toastService.warning("Review No.is Required");
            return;
        }

        if (!this.legalObj.reviewDate) {
            this.toastService.warning("Review Date is Required");
            return;
        }

        if (!this.legalObj.reviewBy) {
            this.toastService.warning("Reviewed by is Required");
            return;
        }

        if (!this.legalObj.status) {
            this.toastService.warning("Review output is Required");
            return;
        }

        if (
            ["Additional Review Required", "Not Feasible"].includes(this.legalObj.status) &&
            this.legalObj.technicalReview.every((x: any) => !x.remarks)
        ) {
            this.toastService.warning("Add Remarks to Save Records");
            return;
        }

        if (this.legalObj) {
            this.legal.push(this.legalObj);
        }
        this.saveData.emit({data: this.legal, key: "legal"});
    }
    openNPDReview() {
        if (this.legal.length > 0) {
            const modalRef = this.modalService.open(NpdReviewHistoryComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.labels = {
                srNo: "Sr. No.",
                question: "Legal Review - Questionnaire",
                check: 'Check if "Yes"',
                remark: "Remarks"
            };
            modalRef.componentInstance.reviewHistory = this.legal;
        }
    }
}
