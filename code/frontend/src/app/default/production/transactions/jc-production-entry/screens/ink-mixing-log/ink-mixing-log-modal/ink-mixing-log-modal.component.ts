import {Component, Input, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InkMixingLogBatchComponent} from "../ink-mixing-log-batch/ink-mixing-log-batch.component";
import {ScreenMakingLogEntryComponent} from "../../screen-making/screen-making-log-entry/screen-making-log-entry.component";
import {InkMixingLogService} from "@services/production/inkMixingLog.service";

@Component({
    selector: "app-ink-mixing-log-modal",
    templateUrl: "./ink-mixing-log-modal.component.html"
})
export class InkMixingLogModalComponent {
    @Input() selectedDetails: any = {};
    inkMixingLog: any = {};
    shiftOptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    selectedJobCardDetails: any = {};

    constructor(
        private inkMixingLogService: InkMixingLogService,
        private spinner: SpinnerService,
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }
    reset() {
        // get initial data
        // this.form.reset();
        // this.masterData.mergeList = [];
        // this.collection = this.masterData.mergeList.length;
        this.getInitialData();
    }

    submit() {
        this.create();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    create() {
        this.spinner.show();
        this.inkMixingLogService.createOrUpdate(this.inkMixingLog).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.inkMixingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.inkMixingLog = result.inkMixingLog;
            if (result?.inkMixingLog?.inkMixingLogDetails?.length == 0 || !result?.inkMixingLog?.inkMixingLogDetails) {
                this.toastService.warning(`Please define SKU Ink Master Of SKU No -  ${this.inkMixingLog.SKUNo}`);
            }
            this.shiftOptions = result.shiftOptions;
            this.collection = this.inkMixingLog?.inkMixingLogDetails?.length;
            this.spinner.hide();
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;

                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;

                break;
            default:
                break;
        }
    }

    openLogEntryModal() {
        const modalRef = this.modalService.open(ScreenMakingLogEntryComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        // modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
        // modalRef.componentInstance.remarksDetails = {
        //     remarks: this.inkMixingDetails[this.inkPage - 1].remarks,
        //     labValues: this.inkMixingDetails[this.inkPage - 1].labValues
        // };
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    // this.inkMixingDetails[this.inkPage - 1].remarks = success?.remarks;
                    // this.inkMixingDetails[this.inkPage - 1].labValues = success?.labValues;
                }
            },
            (reason: any) => {}
        );
    }

    openBatchModal(g: any) {
        const modalRef = this.modalService.open(InkMixingLogBatchComponent, {
            centered: true,
            // windowClass: "modelPage",
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.inkLogNewBatch = g;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);

                    // let index = this.inkMixingLog.inkMixingLogDetails.findIndex((x: any) => x.ink == g.ink);
                    // this.inkMixingLog.inkMixingLogDetails[index].logDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
}
