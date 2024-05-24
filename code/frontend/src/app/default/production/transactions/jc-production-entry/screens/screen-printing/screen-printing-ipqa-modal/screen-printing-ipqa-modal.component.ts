import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {ScreenPrintingIPQAService} from "@services/production/screenPrintingIPQA.service";

@Component({
    selector: "app-screen-printing-ipqa-modal",
    templateUrl: "./screen-printing-ipqa-modal.component.html",
    styleUrls: ["./screen-printing-ipqa-modal.component.scss"]
})
export class ScreenPrintingIPQAModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() selectedDetails: any = {};
    inspectionTypeOptions: any = [];
    inspectionParameterOptions: any = [];
    statusOptions: any = [];
    screenPrintingLogIPQC: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private screenPrintingIPQAService: ScreenPrintingIPQAService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.screenPrintingLogIPQC.jobCard = this.selectedDetails?.jobCard;
        this.screenPrintingLogIPQC.jobCardNo = this.selectedDetails?.jobCardNo;
        this.screenPrintingLogIPQC.SKUNo = this.selectedDetails?.SKUNo;
        this.screenPrintingLogIPQC.SKU = this.selectedDetails?.SKU;
        this.screenPrintingLogIPQC.SKUName = this.selectedDetails?.SKUName;
        this.screenPrintingLogIPQC.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.screenPrintingIPQAService.createOrUpdate(this.screenPrintingLogIPQC).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.screenPrintingIPQAService.getAllMasterData(this.selectedDetails).subscribe(result => {
            this.inspectionTypeOptions = result.inspectionTypeOptions;
            this.inspectionParameterOptions = result.inspectionParameterOptions;
            this.statusOptions = result.statusOptions;
            this.screenPrintingLogIPQC = result.screenPrintingLogIPQC;
            this.spinner.hide();
        });
    }
    deleteTableRow() {
        // ["create", "edit"].includes(this.action) &&
        if (this.screenPrintingLogIPQC?.IPQCLogInfo.length > 1) {
            this.screenPrintingLogIPQC?.IPQCLogInfo.pop();
        }
    }
    addTableRow() {
        // if (["create", "edit"].includes(this.action)) {
        this.screenPrintingLogIPQC?.IPQCLogInfo.push({
            inspectionType: null,
            inspectionParameter: null,
            observation: null,
            inspectedBy: null,
            status: null
        });
        // }
    }
}
