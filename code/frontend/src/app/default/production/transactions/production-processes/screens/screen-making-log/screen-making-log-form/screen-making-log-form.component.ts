import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SpinnerService} from "@core/services";
import {ToastService} from "@core/services";
import {JobCardEntryService, ScreenMakingLogService} from "@services/production";
import {ScreenMakingLogEntryComponent} from "../../../../jc-production-entry/screens/screen-making/screen-making-log-entry/screen-making-log-entry.component";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";

@Component({
    selector: "app-screen-making-log-form",
    templateUrl: "./screen-making-log-form.component.html",
})
export class ScreenMakingLogFormComponent implements OnInit {
    selectedDetails: any = {};
    sourceOfManufacturing: any = "";
    action: string = "Awaiting Approval";
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    screenMakingLog: any = {};
    shiftOptions: any = [];
    masterData: any = {
        autoIncrementNo: "",
        mergeList: [],
        JCOptions: []
    };
    selectedJobCardDetails: any = {};
    constructor(
        private screenMakingLogService: ScreenMakingLogService,
        private jobCardEntryService: JobCardEntryService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private location: Location,
        public activeModal: NgbActiveModal,
        public activatedRoute: ActivatedRoute
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
        this.screenMakingLogService.createOrUpdate(this.screenMakingLog).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.screenMakingLog = {};
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
            processName: "Screen Making"
        };

        this.spinner.show();
        this.screenMakingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.screenMakingLog = result.screenMakingLog;
            this.sourceOfManufacturing = result?.SKUProcessData?.sourceOfManufacturing;
            if (
                result?.screenMakingLog?.screenMakingLogDetails?.length == 0 ||
                !result?.screenMakingLog?.screenMakingLogDetails
            ) {
                this.toastService.warning(
                    `Please define SKU Ink Master & BOM Of SKUNo -  ${this.screenMakingLog.SKUNo}`
                );
            }
            this.shiftOptions = result.shiftOptions;
            this.collection = this.screenMakingLog?.screenMakingLogDetails?.length;
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
        modalRef.componentInstance.jobCard = this.screenMakingLog.jobCard;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedJobCardDetails = success?.selectedJobCardDetails;
                    this.screenMakingLog.jobCard = success?.selectedJobCardDetails?._id;
                    this.screenMakingLog.jobCardNo = success?.selectedJobCardDetails?.jobCardNo;
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
        const modalRef = this.modalService.open(ScreenMakingLogEntryComponent, {
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
                    let index = this.screenMakingLog.screenMakingLogDetails.findIndex((x: any) => x.ink == g.ink);
                    this.screenMakingLog.screenMakingLogDetails[index].logDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
}
