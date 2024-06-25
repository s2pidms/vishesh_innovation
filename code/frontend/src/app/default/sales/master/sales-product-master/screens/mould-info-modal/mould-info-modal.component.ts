import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-mould-info-modal",
    templateUrl: "./mould-info-modal.component.html"
})
export class MouldInfoModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "print";
    @Input() mouldInfo: any = [];
    @Input() ESCPreviewArr: any = [];
    selectedMRNDetails: any = {};
    isPreview = false;
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    menuTitleData: any = {};
    oldMouldInfo: any = [];
    isESCPreview = false;
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.collection = this.mouldInfo.length;
        this.oldMouldInfo = structuredClone(this.mouldInfo);

        this.isESCPreview = true;
        if (this.action != "create") {
            // this.isConditionPreview = true;
            this.isPreview = true;
        } else {
            this.ESCPreviewArr = structuredClone(this.mouldInfo);
        }
    }

    reset() {
        this.mouldInfo = structuredClone(this.oldMouldInfo);
        this.collection = this.mouldInfo?.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.mouldInfo = this.ESCPreviewArr;
        this.collection = this.mouldInfo.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.mouldInfo;
        this.mouldInfo = this.mouldInfo.filter((x: any) => x.select);
        if (this.mouldInfo.length) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.mouldInfo.length;
    }

    dismissModel() {
        this.activeModal.close(this.mouldInfo);
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
            this.mouldInfo = this.mouldInfo;
        } else {
            this.mouldInfo = [...this.mouldInfo].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
