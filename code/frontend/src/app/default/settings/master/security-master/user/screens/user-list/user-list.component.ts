import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ExportToPDFService, ToastService} from "@core/services";
import {UserService} from "@services/settings";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService} from "@core/services/export-excel.service";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {USER_REPORT_DATA, USER_PDF_DATA} from "@mocks/export-data/settings/masters";
import {User} from "@mocks/models/settings/masters";
@Component({
    selector: "app-user-list",
    templateUrl: "./user-list.component.html"
})
export class UserListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "userCode";
    direction: number = -1;
    search: string = "";
    tableData: User[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private userService: UserService,
        private router: Router,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id, action}});
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.getAll();
                break;
            case "PDF":
                this.getAll(true, "PDF");
                break;
            case "EXCEL":
                this.getAll(true, "EXCEL");
                break;
            case "PAGE":
                this.page = event.value;
                this.getAll();
                break;
            default:
                break;
        }
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.userService.getAll(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    excelDownload(data: any) {
        data = data.map((x: any) => {
            x.roleName = x?.roleName[0];
            x.isActive = x.isActive ? "Active" : "Inactive";
            return x;
        });
        this.exportExcelService.exportExcel(USER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = USER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
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

    update(u: any) {
        if (u?.isActive == false) {
            this.spinner.show();
            u.isActive = true;
            // for mail functionality
            u.status = "Approved";
            this.userService.update(u._id, u).subscribe(success => {
                this.spinner.hide();
                this.toastService.success(success.message);
            });
        }
    }
}
