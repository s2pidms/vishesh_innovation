import {Component, OnInit, Input, QueryList, ViewChildren, EventEmitter, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ExportExcelService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-item-tech-specs",
    templateUrl: "./item-tech-specs.component.html",
    styles: [
        `
            .form-control-tc {
                margin: 0;
                height: 2.8rem !important;
                width: 10rem !important;
                text-align: center;
                box-shadow: #00000059 0 2px 5px;
            }
        `
    ]
})
export class ItemTechSpecsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() action: string = "edit";
    @Input() itemSpecificationArr: any = [];
    @Output() saveData = new EventEmitter<any>();
    isPreview = false;
    resetData: any = [];
    ESCPreviewArr: any = [];
    btnDisable = false;
    page: number = 1;
    pageSize: number = 8;
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
        if (this.itemSpecificationArr.length > 0) {
            this.resetData = JSON.parse(JSON.stringify(this.itemSpecificationArr));
            this.collection = this.itemSpecificationArr.length;
        }
    }
    reset() {
        this.isPreview = false;
        this.itemSpecificationArr = JSON.parse(JSON.stringify(this.resetData));
        this.collection = this.itemSpecificationArr.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.itemSpecificationArr;
        this.itemSpecificationArr = this.itemSpecificationArr
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => a.seq - b.seq);
        if (this.itemSpecificationArr.length) {
            this.isPreview = true;
        } else {
            this.isPreview = false;
        }
        this.collection = this.itemSpecificationArr.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.itemSpecificationArr = this.ESCPreviewArr;
        this.collection = this.itemSpecificationArr.length;
    }

    dismissModel() {
        this.saveData.emit({
            data: this.itemSpecificationArr,
            key: "itemSpecificationArr"
        });
        this.toastService.success("Tech Specs Saved");
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
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.itemSpecificationArr = this.itemSpecificationArr;
        } else {
            this.itemSpecificationArr = [...this.itemSpecificationArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
