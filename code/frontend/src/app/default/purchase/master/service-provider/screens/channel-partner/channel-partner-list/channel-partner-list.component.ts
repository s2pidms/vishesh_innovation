import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Subscription} from "rxjs";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ActivatedRoute, Router} from "@angular/router";
import {CHANNEL_PARTNER_MASTER_REPORT_DATA, CHANNEL_PARTNER_MASTER_PDF_DATA} from "@mocks/export-data/purchase/master";
import {ChannelPartnerService} from "@services/purchase/channelPartner.service";
import {IChannelPartner} from "@mocks/models/purchase/masters";

@Component({
    selector: "app-channel-partner-list",
    templateUrl: "./channel-partner-list.component.html"
})
export class ChannelPartnerListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "CPCode";
    direction: number = 1;
    search: string = "";
    tableData: IChannelPartner[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private router: Router,
        private spinner: SpinnerService,
        private channelPartnerService: ChannelPartnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
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
        this.subscription = this.channelPartnerService.getAll(payload).subscribe(success => {
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
    navigateTo(path: string, u: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: u?._id, action}});
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

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    excelDownload(data: any) {
        this.exportExcelService.exportExcel(CHANNEL_PARTNER_MASTER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = CHANNEL_PARTNER_MASTER_PDF_DATA(data);
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
}
