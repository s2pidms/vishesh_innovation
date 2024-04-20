import {Component, Input, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {ToastService} from "@core/services";
import {SpinnerService} from "@core/services";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ScreenMakingLogService} from "@services/production";
import {ScreenMakingLogEntryComponent} from "../screen-making-log-entry/screen-making-log-entry.component";
// import {ScreenMakingLogEntryComponent} from "../screen-making-log-entry/screen-making-log-entry.component";

@Component({
    selector: "app-screen-making-log-form",
    templateUrl: "./screen-making-log-form.component.html"
})
export class ScreenMakingLogFormComponent implements OnInit {
    @Input() selectedDetails: any = {};
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

    constructor(
        private screenMakingLogService: ScreenMakingLogService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private location: Location,
        public activeModal: NgbActiveModal
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
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.screenMakingLogService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.screenMakingLog = result.screenMakingLog;
            this.shiftOptions = result.shiftOptions;
            this.collection = this.screenMakingLog?.screenMakingLogDetails?.length;
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
    openLogEntryModal(g: any) {
        const modalRef = this.modalService.open(ScreenMakingLogEntryComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.logDetails = g.logDetails;
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
