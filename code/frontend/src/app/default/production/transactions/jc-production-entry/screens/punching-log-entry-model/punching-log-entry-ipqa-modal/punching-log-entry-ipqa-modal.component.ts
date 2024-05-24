import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {PunchingIPQAService} from "@services/production";

@Component({
    selector: "app-punching-log-entry-ipqa-modal",
    templateUrl: "./punching-log-entry-ipqa-modal.component.html",
    styleUrls: ["./punching-log-entry-ipqa-modal.component.scss"]
})
export class PunchingLogEntryIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() selectedDetails: any = {};
    inspectionTypeOptions: any = [];
    inspectionParameterOptions: any = [];
    statusOptions: any = [];
    throughPunchingIPQC: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private punchingIPQAService: PunchingIPQAService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.throughPunchingIPQC.jobCard = this.selectedDetails?.jobCard;
        this.throughPunchingIPQC.jobCardNo = this.selectedDetails?.jobCardNo;
        this.throughPunchingIPQC.SKUNo = this.selectedDetails?.SKUNo;
        this.throughPunchingIPQC.SKU = this.selectedDetails?.SKU;
        this.throughPunchingIPQC.SKUName = this.selectedDetails?.SKUName;
        this.throughPunchingIPQC.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.punchingIPQAService.createOrUpdate(this.throughPunchingIPQC).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.punchingIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.inspectionTypeOptions = result.inspectionTypeOptions;
            this.inspectionParameterOptions = result.inspectionParameterOptions;
            this.statusOptions = result.statusOptions;
            this.throughPunchingIPQC = result.throughPunchingIPQC;
            this.spinner.hide();
        });
    }
    deleteTableRow() {
        // ["create", "edit"].includes(this.action) &&
        if (this.throughPunchingIPQC?.IPQCLogInfo.length > 1) {
            this.throughPunchingIPQC?.IPQCLogInfo.pop();
        }
    }
    addTableRow() {
        // if (["create", "edit"].includes(this.action)) {
        this.throughPunchingIPQC?.IPQCLogInfo.push({
            inspectionType: null,
            inspectionParameter: null,
            observation: null,
            inspectedBy: null,
            status: null
        });
        // }
    }
}
