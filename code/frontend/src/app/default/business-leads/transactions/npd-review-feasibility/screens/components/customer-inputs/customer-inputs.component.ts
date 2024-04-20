import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NPDReview} from "@interfaces/customerInputs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NPD_STATUS_LIST} from "@mocks/npdStatus.constant";
import {ToastService, StorageService} from "@core/services";
import {NpdReviewHistoryComponent} from "../npd-review-history/npd-review-history.component";

@Component({
    selector: "app-customer-inputs",
    templateUrl: "./customer-inputs.component.html"
})
export class CustomerInputsComponent implements OnInit {
    @Input() customerInputs: NPDReview[] = [];
    @Input() action: string = "";
    @Output() customerInputsChange = new EventEmitter<any>();
    @Input() customerInputsObj: any = null;
    @Output() customerInputsObjChange = new EventEmitter<any>();
    @Output() saveData = new EventEmitter<any>();

    user: any = {};

    constructor(
        private modalService: NgbModal,
        private toastService: ToastService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMSAUser");
        this.customerInputsObj.reviewBy = this.user.name;
    }

    statusArr = NPD_STATUS_LIST;

    saveCustomerInputs() {
        if (!this.customerInputsObj.reviewNo) {
            this.toastService.warning("Review No.is Required");
            return;
        }

        if (!this.customerInputsObj.reviewDate) {
            this.toastService.warning("Review Date is Required");
            return;
        }
        if (!this.customerInputsObj.reviewBy) {
            this.toastService.warning("Reviewed by is Required");
            return;
        }

        if (!this.customerInputsObj.status) {
            this.toastService.warning("Review output is Required");
            return;
        }
        if (
            ["Additional Review Required", "Not Feasible"].includes(this.customerInputsObj.status) &&
            this.customerInputsObj.technicalReview.every((x: any) => !x.remarks)
        ) {
            this.toastService.warning("Add Remarks to Save Records");
            return;
        }

        if (this.customerInputsObj) {
            this.customerInputs.push(this.customerInputsObj);
        }
        this.saveData.emit({data: this.customerInputs, key: "customerInputs"});
    }
    openNPDReview() {
        if (this.customerInputs.length > 0) {
            const modalRef = this.modalService.open(NpdReviewHistoryComponent, {
                centered: true,
                size: "lg",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.labels = {
                srNo: "Sr. No.",
                question: "Customer Inputs Review - Questionnaire",
                check: 'Check if "Yes"',
                remark: "Remarks"
            };
            modalRef.componentInstance.reviewHistory = this.customerInputs;
        }
    }
}
