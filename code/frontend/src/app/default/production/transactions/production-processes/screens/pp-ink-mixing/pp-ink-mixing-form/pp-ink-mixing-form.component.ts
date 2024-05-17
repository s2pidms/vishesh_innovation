import {Component, Input, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InkMixingLogService} from "@services/production/inkMixingLog.service";
import {ScreenMakingLogEntryComponent} from "../../../../jc-production-entry/screens/screen-making/screen-making-log-entry/screen-making-log-entry.component";
import {InkMixingLogBatchComponent} from "../../../../jc-production-entry/screens/ink-mixing-log/ink-mixing-log-batch/ink-mixing-log-batch.component";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";
import {JobCardEntryService} from "@services/production";

@Component({
    selector: "app-pp-ink-mixing-form",
    templateUrl: "./pp-ink-mixing-form.component.html",
})
export class PpInkMixingFormComponent {
    @Input() selectedDetails: any = {};
    sourceOfManufacturing: any = "";
    inkMixingLog: any = {};
    shiftOptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    masterData: any = {
        autoIncrementNo: "",
        mergeList: [],
        JCOptions: []
    };
    selectedJobCardDetails: any = {};
    constructor(
        private inkMixingLogService: InkMixingLogService,
        private spinner: SpinnerService,
        public activeModal: NgbActiveModal,
        private toastService: ToastService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private jobCardEntryService: JobCardEntryService
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
            this.inkMixingLog = {};
            this.getInitialData();
        });
    }

    // getInitialData() {
    //     // get master data
    //     this.spinner.show();
    //     this.inkMixingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
    //         this.inkMixingLog = result.inkMixingLog;
    //         if (result?.inkMixingLog?.inkMixingLogDetails?.length == 0 || !result?.inkMixingLog?.inkMixingLogDetails) {
    //             this.toastService.warning(`Please define SKU Ink Master Of SKU No -  ${this.inkMixingLog.SKUNo}`);
    //         }
    //         this.shiftOptions = result.shiftOptions;
    //         this.collection = this.inkMixingLog?.inkMixingLogDetails?.length;
    //         this.spinner.hide();
    //     });
    // }

    setJobCardId(item: any) {
        console.log("item", item);

        this.selectedDetails = {
            jobCard: item?._id,
            jobCardNo: item?.jobCardNo,
            SKU: item?.SKU,
            batchQty: item?.batchQty,
            processName: "Ink Mixing"
        };

        this.spinner.show();
        this.inkMixingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.inkMixingLog = result.inkMixingLog;
            this.sourceOfManufacturing = result?.SKUProcessData?.sourceOfManufacturing;
            if (result?.inkMixingLog?.inkMixingLogDetails?.length == 0 || !result?.inkMixingLog?.inkMixingLogDetails) {
                this.toastService.warning(`Please define SKU Ink Master Of SKU No -  ${this.inkMixingLog.SKUNo}`);
            }
            this.shiftOptions = result.shiftOptions;
            this.collection = this.inkMixingLog?.inkMixingLogDetails?.length;
            this.spinner.hide();
        });
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.jobCardEntryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.spinner.hide();
        });
    }

    openJobCardDetailsModal() {
        const modalRef = this.modalService.open(JobCardDetailsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = "create";
        modalRef.componentInstance.selectedJobCardDetails = this.selectedJobCardDetails;
        modalRef.componentInstance.JCOptions = this.masterData.JCOptions;
        modalRef.componentInstance.jobCard = this.inkMixingLog.jobCard;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedJobCardDetails = success?.selectedJobCardDetails;
                    this.inkMixingLog.jobCard = success?.selectedJobCardDetails?._id;
                    this.inkMixingLog.jobCardNo = success?.selectedJobCardDetails?.jobCardNo;
                    this.setJobCardId(success?.selectedJobCardDetails);
                }
            },
            (reason: any) => {}
        );
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
        modalRef.componentInstance.sourceOfManufacturing = this.sourceOfManufacturing;
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
