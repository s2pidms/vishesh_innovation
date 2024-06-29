import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {GenericIPQCProcessService} from "@services/production";

@Component({
    selector: "app-generic-ipqc-process-model",
    templateUrl: "./generic-ipqc-process-model.component.html",
    styleUrls: ["./generic-ipqc-process-model.component.scss"]
})
export class GenericIpqcProcessModelComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() selectedDetails: any = {};
    inspectionTypeOptions: any = [];
    inspectionParameterOptions: any = [];
    statusOptions: any = [];
    genericIPQC: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private genericIPQCProcessService: GenericIPQCProcessService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    ngOnInit(): void {
        this.action = this.action ?? "create";
        this.getInitialData();
    }

    submit() {
        this.genericIPQC.processType = this.selectedDetails?.processOriginalName;
        this.genericIPQC.jobCard = this.selectedDetails?.jobCard;
        this.genericIPQC.jobCardNo = this.selectedDetails?.jobCardNo;
        this.genericIPQC.SKUNo = this.selectedDetails?.SKUNo;
        this.genericIPQC.SKU = this.selectedDetails?.SKU;
        this.genericIPQC.SKUName = this.selectedDetails?.SKUName;
        this.genericIPQC.SKUDescription = this.selectedDetails?.SKUDescription;

        this.create();
    }

    create() {
        this.spinner.show();
        this.genericIPQCProcessService.createOrUpdate(this.genericIPQC).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.genericIPQCProcessService.getAllMasterData(this.selectedDetails).subscribe(result => {
            console.log("result", result);

            this.inspectionTypeOptions = result.inspectionTypeOptions;
            this.inspectionParameterOptions = result.inspectionParameterOptions;
            this.statusOptions = result.statusOptions;
            this.genericIPQC = result.genericIPQC;
            this.spinner.hide();
        });
    }
    deleteTableRow() {
        if (["create", "edit"].includes(this.action)) {
            if (this.genericIPQC?.IPQCLog.length > 1) {
                this.genericIPQC?.IPQCLog.pop();
            }
        }
    }
    addTableRow() {
        if (["create", "edit"].includes(this.action)) {
            this.genericIPQC?.IPQCLog.push({
                inspectionType: null,
                inspectionParameter: null,
                observation: null,
                inspectedBy: null,
                status: null
            });
        }
    }
}
