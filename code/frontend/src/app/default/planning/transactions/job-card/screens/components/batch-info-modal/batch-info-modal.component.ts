import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-batch-info-modal",
    templateUrl: "./batch-info-modal.component.html"
})
export class BatchInfoModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() totalBatchQuantity: any = null;
    @Input() batchInfo: any = {};

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    manufacturingDate: any = "";
    batchNumber: any = "";

    @Input() customerContactInfoArray: ContactMatrix[] = [];
    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}

    ngOnInit(): void {
        this.totalBatchQuantity = this.batchInfo?.totalBatchQuantity;
        this.manufacturingDate = this.batchInfo?.manufacturingDate;
        this.batchNumber = this.batchInfo?.batchNumber;
    }

    dismissModel() {
        let obj: any = {};
        obj.totalBatchQuantity = this.totalBatchQuantity;
        obj.manufacturingDate = this.manufacturingDate;
        obj.batchNumber = this.batchNumber;
        this.activeModal.close(obj);
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
