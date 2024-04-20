import {Component, OnInit, Input, QueryList, ViewChildren, EventEmitter, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-add-ink-details",
    templateUrl: "./add-ink-details.component.html",
    styles: [
        `
            .form-control-ink {
                margin: 0;
                height: 2.4rem !important;
                width: 7rem !important;
                text-align: center;
                box-shadow: #00000059 0 2px 5px;
            }
        `
    ]
})
export class AddInkDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() totalNoOfColors: any = null;
    @Input() inkDetailsArr: any = [];
    @Input() materialSKUUnit: any = null;
    @Output() saveData = new EventEmitter<any>();
    isPreview = false;
    resetData: any = [];
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 7;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    isESCPreview = false;
    constructor(
        public activeModal: NgbActiveModal,
        private exportExcelService: ExportExcelService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        if (this.materialSKUUnit) {
            this.inkDetailsArr = this.inkDetailsArr.map((x: any) => {
                x.areaSqm = this.materialSKUUnit ?? null;
                return x;
            });
        }
        this.resetData = JSON.parse(JSON.stringify(this.inkDetailsArr));
        this.collection = this.inkDetailsArr.length;
    }
    reset() {
        this.isPreview = false;
        this.inkDetailsArr = JSON.parse(JSON.stringify(this.resetData));
        this.collection = this.inkDetailsArr.length;
        this.totalNoOfColors = this.inkDetailsArr.filter((x: any) => x.colSeq > 0).length;
    }
    setInkAreaSQM(item: any) {
        let index = this.inkDetailsArr.map((x: any) => x.inkId).indexOf(item?.inkId);

        this.inkDetailsArr[index].inkAreaSqm = +((+item.areaSqm * +item.inkArea) / 100).toFixed(4);
        this.inkDetailsArr[index].ink = +(+item.GSM * +item.inkAreaSqm).toFixed(3);
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.inkDetailsArr;
        this.inkDetailsArr = this.inkDetailsArr
            .filter((x: any) => x.colSeq > 0)
            .sort((a: any, b: any) => a.colSeq - b.colSeq);
        if (this.inkDetailsArr.length) {
            this.isPreview = true;
        } else {
            this.isPreview = false;
        }
        this.collection = this.inkDetailsArr.length;
        this.totalNoOfColors = this.inkDetailsArr.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.inkDetailsArr = this.ESCPreviewArr;
        this.collection = this.inkDetailsArr.length;
        if (this.action == "create") {
            this.totalNoOfColors = 0;
        } else {
            this.totalNoOfColors = this.inkDetailsArr.length;
        }
    }

    dismissModel() {
        let obj: any = {};
        obj.inkDetailsArr = this.inkDetailsArr;
        obj.totalNoOfColors = this.totalNoOfColors;
        this.saveData.emit({data: obj, key: "inkDetailsArr"});
        this.toastService.success("Colours Saved");
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
            this.inkDetailsArr = this.inkDetailsArr;
        } else {
            this.inkDetailsArr = [...this.inkDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
