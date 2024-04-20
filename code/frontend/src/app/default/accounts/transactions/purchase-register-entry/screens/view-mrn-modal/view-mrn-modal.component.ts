import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {AppGlobalService, StorageService} from "@core/services";

@Component({
    selector: "app-view-mrn-modal",
    templateUrl: "./view-mrn-modal.component.html"
})
export class ViewMRNModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "print";
    @Input() MRNList: any = [];
    selectedMRNDetails: any = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    menuTitleData: any = {};
    tabType: any = "";
    constructor(
        public activeModal: NgbActiveModal,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.MRNList = this.MRNList.map((x: any) => {
            x.select = false;
            return x;
        });
        this.collection = this.MRNList.length;
        this.menuTitleData = this.storageService.get("menuTitle");
        this.tabType = this.storageService.get("tab");
        if (this.tabType == "MASTER") {
            this.tabType = "masters";
        } else if (this.tabType == "TRANSACTION") {
            this.tabType = "transactions";
        } else if (this.tabType == "REPORT") {
            this.tabType = "reports";
        }
    }

    setSelectData(u: any) {
        this.selectedMRNDetails = u;
        this.MRNList = this.MRNList.map((x: any) => {
            if (x?._id == this.selectedMRNDetails?._id) {
                x.select = true;
            } else {
                x.select = false;
            }
            return x;
        });
    }

    dismissModel() {
        let condition = this.MRNList.some((x: any) => x.select);
        if (condition) {
            let buttonCondition = this.appGlobalService.checkAccess(this.tabType, this.menuTitleData) ?? true;
            window.open(
                `${window.location.origin}/#/print/mrn?id=${
                    this.selectedMRNDetails._id
                }&action=${"print"}&buttonCondition=${buttonCondition}`,
                "_blank"
            );
            this.activeModal.close();
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
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.MRNList = this.MRNList;
        } else {
            this.MRNList = [...this.MRNList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
