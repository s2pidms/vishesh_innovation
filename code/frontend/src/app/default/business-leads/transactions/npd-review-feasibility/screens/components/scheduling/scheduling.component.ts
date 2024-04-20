import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";
import {ToastService, StorageService} from "@core/services";
import {NpdReviewHistoryComponent} from "../npd-review-history/npd-review-history.component";

@Component({
    selector: "app-scheduling",
    templateUrl: "./scheduling.component.html"
})
export class SchedulingComponent implements OnInit {
    @Input() scheduling: NPDReview[] = [];
    @Output() schedulingChange = new EventEmitter<any>();
    @Input() schedulingObj: any = {};
    @Output() schedulingObjChange = new EventEmitter<any>();
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
        this.schedulingObj.reviewBy = this.user.name;
    }

    saveScheduling() {
        if (!this.schedulingObj.reviewNo) {
            this.toastService.warning("Review No.is Required");
            return;
        }

        if (!this.schedulingObj.reviewDate) {
            this.toastService.warning("Review Date is Required");
            return;
        }

        if (!this.schedulingObj.reviewBy) {
            this.toastService.warning("Reviewed by is Required");
            return;
        }

        if (!this.schedulingObj.status) {
            this.toastService.warning("Review output is Required");
            return;
        }
        if (
            ["Additional Review Required", "Not Feasible"].includes(this.schedulingObj.status) &&
            this.schedulingObj.technicalReview.every((x: any) => !x.remarks)
        ) {
            this.toastService.warning("Add Remarks to Save Records");
            return;
        }
        if (this.schedulingObj) {
            this.scheduling.push(this.schedulingObj);
        }
        this.saveData.emit({data: this.scheduling, key: "scheduling"});
    }

    openNPDReview() {
        if (this.scheduling.length > 0) {
            const modalRef = this.modalService.open(NpdReviewHistoryComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.labels = {
                srNo: "Sr. No.",
                question: "Scheduling Review - Questionnaire",
                check: 'Check if "Yes"',
                remark: "Remarks"
            };
            modalRef.componentInstance.reviewHistory = this.scheduling;
        }
    }
}
