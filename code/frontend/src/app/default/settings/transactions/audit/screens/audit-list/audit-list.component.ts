import {map} from "rxjs";
import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {AuditService} from "@services/settings";
import {SpinnerService, UtilityService} from "@core/services";

@Component({
    selector: "app-audit-list",
    templateUrl: "./audit-list.component.html",
    styleUrls: ["./audit-list.component.scss"]
})
export class AuditListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    user: any = [];
    userId: any = "";
    fromDate = this.utilityService.getCurrentMonthDates().toDate;
    toDate = this.utilityService.getCurrentMonthDates().toDate;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private auditService: AuditService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    reset() {
        this.fromDate = this.utilityService.getCurrentMonthDates().fromDate;
        this.toDate = this.utilityService.getCurrentMonthDates().toDate;
        this.getAll();
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.getAll();
                break;
            case "EXCEL":
                this.getAll(true);
                break;
            case "PAGE":
                this.page = event.value;
                this.getAll();
                break;
            default:
                break;
        }
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getAll(excel = false) {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            fromDate: this.fromDate,
            toDate: this.toDate,
            userId: this.userId
        };
        this.auditService.getAll(payload).subscribe(success => {
            this.tableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });

        this.column = column;
        this.direction = direction == "asc" ? 1 : -1;
        this.getAll();
    }
}
