import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {QuestionsService} from "@services/business-leads";
import {NPD_QUESTIONNARIES_PDF_DATA, NPD_QUESTIONNARIES_REPORT_DATA} from "@mocks/export-data/settings/masters";
import {NPDQuestionnaires} from "@mocks/models/settings/masters";

@Component({
    selector: "app-questionnaires-list",
    templateUrl: "./questionnaires-list.component.html"
})
export class QuestionnairesListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "orderNo";
    direction: number = 1;
    search: string = "";
    tableData: NPDQuestionnaires[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private questionsService: QuestionsService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }
    navigateTo(path: string, u: any, action: string) {
        this.router.navigate([path], {queryParams: {id: u?._id, action}});
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
        this.subscription = this.questionsService.getAll(payload).subscribe(success => {
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
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(NPD_QUESTIONNARIES_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = NPD_QUESTIONNARIES_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
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
