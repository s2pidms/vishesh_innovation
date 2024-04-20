import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {SpinnerService} from "@core/services";
import {ScreenMakingLogEntryComponent} from "../../screen-making/screen-making-log-entry/screen-making-log-entry.component";

@Component({
    selector: "app-ink-mixing-log-batch",
    templateUrl: "./ink-mixing-log-batch.component.html"
})
export class InkMixingLogBatchComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() inkLogNewBatch: any = {};
    @Input() shiftOptions: any = [];
    resetData: any = [];
    collection: number = 0;
    page: number = 1;
    pageSize: number = 4;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    active: number = 1;
    batchDateNo: any = "";
    constructor(
        public activeModal: NgbActiveModal,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    ngOnInit(): void {
        this.resetData = JSON.parse(JSON.stringify(this.inkLogNewBatch));
        this.collection = this.inkLogNewBatch.length;
        // if (this.inkLogNewBatch.length > 0) {
        //     this.inkLogNewBatch = this.inkLogNewBatch.newBatch;
        //     this.collection = this.inkLogNewBatch.length;
        // }
    }

    changeTotalBatchQty() {
        this.inkLogNewBatch.inkBatchQty = +(this.inkLogNewBatch.BOMQty * this.inkLogNewBatch.MF).toFixed(5);
    }
    changeBatchQty(ele: any) {
        let index = this.inkLogNewBatch.newBatch.map((x: any) => x.item).indexOf(ele?.item);
        this.inkLogNewBatch.newBatch[index].quantity2 = +(ele.quantity1 * ele.MF).toFixed(5);
    }
    reset() {
        this.inkLogNewBatch = JSON.parse(JSON.stringify(this.resetData));
        this.collection = this.inkLogNewBatch.length;
    }

    dismissModel() {
        this.activeModal.close({
            inkLogNewBatch: this.inkLogNewBatch
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

        modalRef.componentInstance.logDetails = this.inkLogNewBatch.logDetails;
        modalRef.componentInstance.shiftOptions = this.shiftOptions;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    // let index = this.inkLogNewBatch.inkMixingLogDetails.findIndex((x: any) => x.ink == g.ink);
                    // this.inkLogNewBatch.inkMixingLogDetails[index].logDetails = success;
                    this.inkLogNewBatch.logDetails = success;
                }
            },
            (reason: any) => {}
        );
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.inkLogNewBatch = this.inkLogNewBatch;
        } else {
            this.inkLogNewBatch = [...this.inkLogNewBatch].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
