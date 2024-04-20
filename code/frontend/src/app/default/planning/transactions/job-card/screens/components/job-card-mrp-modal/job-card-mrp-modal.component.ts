import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-job-card-mrp-modal",
    templateUrl: "./job-card-mrp-modal.component.html",
    styleUrls: ["./job-card-mrp-modal.component.scss"]
})
export class JobCardMRPModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() itemDetailsList: any = [];
    @Input() action: string = "";
    @Input() totalBatchQuantity: any = 0;
    tableData: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 12;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectedData: any = {};
    SODetailsArray: any = [];

    @Input() customerContactInfoArray: ContactMatrix[] = [];
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.tableData = structuredClone(this.itemDetailsList);
        if (this.tableData.length > 0) {
            this.tableData = this.tableData?.map((item: any) => {
                item.partCount = item.partCount * this.totalBatchQuantity;
                return item;
            });
        }
    }

    dismissModel() {
        let obj: any = {};
        obj.tableData = this.tableData;
        this.activeModal.close(obj);
    }
    setPagination() {
        this.page = 1;
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }
}
