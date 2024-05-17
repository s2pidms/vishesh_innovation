import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ExportExcelService, SpinnerService, ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {MAIL_CONFIGURATION_REPORT_DATA} from "@mocks/export-data/settings/masters";
import {MailConfiguration} from "@mocks/models/settings/masters";
import {MailTriggerService} from "@services/settings";

@Component({
    selector: "app-mail-trigger-list",
    templateUrl: "./mail-trigger-list.component.html"
})
export class MailTriggerListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 9;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: MailConfiguration[] | any = [];
    subscription!: Subscription;
    constructor(
        private mailTriggerService: MailTriggerService,
        private router: Router,
        private spinner: SpinnerService,
        private exportExcelService: ExportExcelService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.getAll();
    }
    navigateTo(path: string, u: any, action: string) {
        this.router.navigate([path], {queryParams: {id: u?._id, action}});
    }

    update(item: any) {
        if (!item?.emailTo) {
            this.toastService.warning("Please Define Email To in Mail Configuration");
            return;
        }
        if (item.isSent) {
            this.spinner.show();
            this.mailTriggerService.update(item._id, {isSent: false}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
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
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.mailTriggerService.getAll(payload).subscribe(success => {
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
        this.exportExcelService.exportExcel(MAIL_CONFIGURATION_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        // let output = USER_PDF_DATA(data);
        // this.exportToPDFService.generatePdf(output.tableData, output.title);
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
