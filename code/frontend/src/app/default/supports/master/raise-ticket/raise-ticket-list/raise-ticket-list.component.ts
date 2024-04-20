import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {SupportService} from "@services/supports";
import {ExportExcelService, MenuTitleService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {RaiseTicket} from "@mocks/models/support/masters";

@Component({
    selector: "app-raise-ticket-list",
    templateUrl: "./raise-ticket-list.component.html"
})
export class RaiseTicketListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "issueNumber";
    direction: number = -1;
    search: string = "";
    tableData: RaiseTicket[] | any = [];
    subscription!: Subscription;
    constructor(
        private supportService: SupportService,
        private router: Router,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private exportExcelService: ExportExcelService
    ) {}

    ngOnInit(): void {
        this.getAll();
        this.menuTitleService.set({
            title: "Raise a Ticket",
            subTitle: null,
            type: null
        });
    }
    navigateTo(path: string, u: any, action: string) {
        if (u?.issueStatus == "Closed" && action == "edit") {
            return null;
        } else {
            this.router.navigate([path], {queryParams: {id: u?._id, action}});
            return;
        }
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

    getAll(excel = false) {
        this.spinner.show();
        let payload = {
            dummy: "1",
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.supportService.getAll(payload).subscribe(success => {
            if (excel) {
                this.excelDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    excelDownload(data: any) {
        let style = {
            width: 24,
            style: {
                alignment: {
                    vertical: "middle",
                    horizontal: "center",
                    wrapText: true
                }
            }
        };
        let reportData: any = {
            title: "Raise a Ticket",
            csvData: data,
            headers: [
                {
                    header: "Ticket#",
                    key: "issueNumber",
                    ...style
                },
                {
                    header: "Ticket Date",
                    key: "issueDate",
                    ...style
                },
                {
                    header: "Title",
                    key: "issueTitle",
                    ...style
                },
                {
                    header: "Sub Module Name",
                    key: "subModuleName",
                    ...style
                },
                {
                    header: "Ticket Type",
                    key: "ticketType",
                    ...style
                },
                {
                    header: "Priority",
                    key: "priority",
                    ...style
                },
                {
                    header: "Severity",
                    key: "severity",
                    ...style
                },
                {
                    header: "Description",
                    key: "issueDescription",
                    ...style
                },
                {
                    header: "Resolution",
                    key: "issueResolution",
                    ...style
                },
                {
                    header: "Status",
                    key: "issueStatus",
                    ...style
                }
            ]
        };
        this.exportExcelService.exportExcel(reportData);
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
