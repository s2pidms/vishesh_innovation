import {Component, Input, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {ToastService} from "@core/services";
import {SpinnerService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {JobCardEntryService, ScreenPrintingLogService} from "@services/production";
import {ScreenPrintingLogEntryComponent} from "../../../../jc-production-entry/screens/screen-printing/screen-printing-log-entry/screen-printing-log-entry.component";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";

@Component({
    selector: "app-screen-printing-log-form",
    templateUrl: "./screen-printing-log-form.component.html",
})
export class ScreenPrintingLogFormComponent implements OnInit {
    @Input() selectedDetails: any = {};
    @Input() sourceOfManufacturing: any = "";
    action: string = "Awaiting Approval";
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    screenPrintingLog: any = {};
    shiftOptions: any = [];
    masterData: any = {
        autoIncrementNo: "",
        mergeList: [],
        JCOptions: []
    };
    selectedJobCardDetails: any = {};
    constructor(
        private screenPrintingLogService: ScreenPrintingLogService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private location: Location,
        public activeModal: NgbActiveModal,
        public jobCardEntryService: JobCardEntryService
    ) {}

    dismissModel() {
        this.activeModal.close();
    }
    ngOnInit(): void {
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
        this.screenPrintingLogService.createOrUpdate(this.screenPrintingLog).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.screenPrintingLog = {};
            this.getInitialData();
        });
    }

    setJobCardId(item: any) {
        console.log("item", item);

        this.selectedDetails = {
            jobCard: item?._id,
            jobCardNo: item?.jobCardNo,
            SKU: item?.SKU,
            batchQty: item?.batchQty,
            processName: "Printing on CPI"
        };

        this.spinner.show();
        this.screenPrintingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.screenPrintingLog = result.screenPrintingLog;
            this.sourceOfManufacturing = result?.SKUProcessData?.sourceOfManufacturing;
            if (
                result?.screenPrintingLog?.screenPrintingLogDetails?.length == 0 ||
                !result?.screenPrintingLog?.screenPrintingLogDetails
            ) {
                this.toastService.warning(
                    `Please define SKU Ink Master & BOM Of SKUNo -  ${this.screenPrintingLog.SKUNo}`
                );
            }
            this.shiftOptions = result.shiftOptions;
            this.collection = this.screenPrintingLog?.screenPrintingLogDetails?.length;
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
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedJobCardDetails = this.selectedJobCardDetails;
        modalRef.componentInstance.JCOptions = this.masterData.JCOptions;
        modalRef.componentInstance.jobCard = this.screenPrintingLog.jobCard;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedJobCardDetails = success?.selectedJobCardDetails;
                    this.screenPrintingLog.jobCard = success?.selectedJobCardDetails?._id;
                    this.screenPrintingLog.jobCardNo = success?.selectedJobCardDetails?.jobCardNo;
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
    openLogEntryModal(g: any) {
        const modalRef = this.modalService.open(ScreenPrintingLogEntryComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.logDetails = g.logDetails;
        modalRef.componentInstance.sourceOfManufacturing = this.sourceOfManufacturing;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.screenPrintingLog.screenPrintingLogDetails.findIndex((x: any) => x.ink == g.ink);
                    this.screenPrintingLog.screenPrintingLogDetails[index].logDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
}
