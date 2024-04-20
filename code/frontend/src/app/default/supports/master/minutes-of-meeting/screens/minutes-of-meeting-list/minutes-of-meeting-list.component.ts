import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ExportExcelService, MenuTitleService, SpinnerService, StorageService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {MinutesOfMeetingService} from "@services/supports";
import {MinutesOfMeeting} from "@mocks/models/support/masters";

@Component({
    selector: "app-minutes-of-meeting-list",
    templateUrl: "./minutes-of-meeting-list.component.html"
})
export class MinutesOfMeetingListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: MinutesOfMeeting[] = [];
    userId: any = "";
    statusArray: any = ["Created", "Approved"];
    subscription!: Subscription;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    constructor(
        private exportExcelService: ExportExcelService,
        private minutesOfMeetingService: MinutesOfMeetingService,
        private menuTitleService: MenuTitleService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.userId = this.storageService.get("IDMSAUser")?._id;
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.menuTitleService.set({
            title: "Minutes of Meeting",
            subTitle: null,
            type: null
        });
        this.getAll();
    }

    navigateTo(path: string, u: any, action: string) {
        if ((u.createdBy != this.userId && action == "view") || (u.createdBy != this.userId && action == "edit")) {
            return null;
        } else {
            this.router.navigate([path], {queryParams: {id: u?._id, action}});
            return;
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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

    navigateToPrint(path: string, u: any, action: string, preview: string) {
        window.open(`${window.location.origin}${path}?id=${u?._id}&action=${action}&preview=${preview}`, "_blank");
    }

    getAll(excel = false) {
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
        this.subscription = this.minutesOfMeetingService.getAll(payload).subscribe(success => {
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
            title: "Minutes of Meeting",
            csvData: data,
            headers: [
                {
                    header: "MoM Code",
                    key: "MOMCode",
                    ...style
                },
                {
                    header: "MoM Date",
                    key: "MOMDateS",
                    ...style
                },
                {
                    header: "MoM Title",
                    key: "MOMTitle",
                    ...style
                },
                {
                    header: "Meeting Type",
                    key: "meetingType",
                    ...style
                },
                {
                    header: "Organizer",
                    key: "organizer",
                    ...style
                },
                {
                    header: "Venue",
                    key: "venue",
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
