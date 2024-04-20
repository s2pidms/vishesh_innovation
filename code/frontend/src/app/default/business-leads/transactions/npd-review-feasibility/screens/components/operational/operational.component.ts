import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";
import {ToastService, StorageService} from "@core/services";
import {NpdReviewHistoryComponent} from "../npd-review-history/npd-review-history.component";

@Component({
    selector: "app-operational",
    templateUrl: "./operational.component.html"
})
export class OperationalComponent implements OnInit {
    @Input() operational: NPDReview[] = [];
    @Output() operationalChange = new EventEmitter<any>();
    @Input() operationalObj: any = {};
    @Output() operationalObjChange = new EventEmitter<any>();
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
        this.operationalObj.reviewBy = this.user.name;
    }

    saveOperational() {
        if (!this.operationalObj.reviewNo) {
            this.toastService.warning("Review No.is Required");
            return;
        }

        if (!this.operationalObj.reviewDate) {
            this.toastService.warning("Review Date is Required");
            return;
        }

        if (!this.operationalObj.reviewBy) {
            this.toastService.warning("Reviewed by is Required");
            return;
        }

        if (!this.operationalObj.status) {
            this.toastService.warning("Review output is Required");
            return;
        }
        if (
            ["Additional Review Required", "Not Feasible"].includes(this.operationalObj.status) &&
            this.operationalObj.technicalReview.every((x: any) => !x.remarks)
        ) {
            this.toastService.warning("Add Remarks to Save Records");
            return;
        }
        if (this.operationalObj) {
            this.operational.push(this.operationalObj);
        }
        this.saveData.emit({data: this.operational, key: "operational"});
    }

    openNPDReview() {
        if (this.operational.length > 0) {
            const modalRef = this.modalService.open(NpdReviewHistoryComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.labels = {
                srNo: "Sr. No.",
                question: "Operational Review - Questionnaire",
                check: 'Check if "Yes"',
                remark: "Remarks"
            };
            modalRef.componentInstance.reviewHistory = this.operational;
        }
    }
}
