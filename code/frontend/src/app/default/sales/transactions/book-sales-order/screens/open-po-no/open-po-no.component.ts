import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ContactMatrix} from "@interfaces/contactMatrix";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {SalesOrderService} from "@services/sales";

@Component({
    selector: "app-open-po-no",
    templateUrl: "./open-po-no.component.html"
})
export class OpenPoNoComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() openPONumberArr: any = [];
    @Input() action: string = "";
    @Input() customerId: any = "";

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectedData: any = {};
    SODetailsArray: any = [];

    @Input() customerContactInfoArray: ContactMatrix[] = [];
    constructor(public activeModal: NgbActiveModal, private salesService: SalesOrderService) {}

    ngOnInit(): void {
        this.openPONumberArr = this.openPONumberArr.map((x: any) => {
            x.isSelect = false;
            return x;
        });
    }

    dismissModel() {
        let payload = this.selectedData;
        payload.customerId = this.customerId;

        this.salesService.getAllSalesSKUListOnOpenPO(payload).subscribe(success => {
            this.SODetailsArray = success?.SKUList;
            let obj: any = [];
            obj.SODetailsArray = this.SODetailsArray;
            obj.selectedData = this.selectedData;
            obj.openPONumberArr = this.openPONumberArr;
            this.activeModal.close(obj);
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
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    setSelectData(item: any) {
        this.selectedData = item;
        this.selectedData.isSelect = true;
    }
}
