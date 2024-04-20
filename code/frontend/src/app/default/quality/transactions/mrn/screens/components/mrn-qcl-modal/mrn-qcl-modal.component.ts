import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MaterialReleaseNoteService} from "@services/quality";

import {ToastService} from "@core/services";
import {PDI_ENTRY_RELEASE_STATUS} from "@mocks/constant";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-mrn-qcl-modal",
    templateUrl: "./mrn-qcl-modal.component.html"
})
export class MrnQclModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() data: any = {};
    MRNMaterialInspectionArr: any = [];
    collection: number = 0;
    page: number = 1;
    pageSize: number = 4;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    action: string = "create";
    active: number = 1;
    batchDateNo: any = "";
    releaseStatusObj: any = PDI_ENTRY_RELEASE_STATUS;
    releaseStatusArr = this.releaseStatusObj.getAllPDIEntryReleaseStatus();
    constructor(
        public activeModal: NgbActiveModal,
        private materialReleaseNoteService: MaterialReleaseNoteService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {
        this.batchDateNo = this.data.batchDate ? this.data.batchDate : this.data.tBatchNo;
        this.getSKUData();
        if (this.data?.QCLevelsDetails.length > 0) {
            this.MRNMaterialInspectionArr = this.data?.QCLevelsDetails;
            this.collection = this.MRNMaterialInspectionArr.length;
        }
    }

    getSKUData() {
        if (this.data?.QCLevelsDetails.length == 0) {
            this.spinner.show();
            this.materialReleaseNoteService
                .getRMSpecificationByItemId({itemId: this.data.item, itemCategory: this.data.itemType})
                .subscribe((success: any) => {
                    if (success) {
                        this.MRNMaterialInspectionArr = success?.specificationInfo.map((x: any) => {
                            x.observation = null;
                            return x;
                        });
                        this.collection = this.MRNMaterialInspectionArr.length;
                    }
                    this.spinner.hide();
                });
        }
    }

    setDeviationField() {
        if (this.data.status != "Deviation") {
            this.data.deviationApprovedBy = null;
        }
    }

    dismissModel() {
        if (!this.data.status) {
            this.toastService.warning("Release Status is required !");
            return;
        }
        let condition = this.MRNMaterialInspectionArr.every((x: any) => !!x.observation);
        if (condition == false) {
            this.toastService.warning("Observation is required !");
            return;
        } else {
            this.activeModal.close({
                MRNMaterialInspectionArr: this.MRNMaterialInspectionArr,
                data: this.data
            });
        }
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

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.MRNMaterialInspectionArr = this.MRNMaterialInspectionArr;
        } else {
            this.MRNMaterialInspectionArr = [...this.MRNMaterialInspectionArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
