import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ShipmentPlanningService} from "@services/dispatch";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {AppGlobalService, ExportExcelService, ExportToPDFService, SpinnerService, UtilityService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SHIPMENT_PLANNING_PDF_DATA, SHIPMENT_PLANNING_REPORT_DATA} from "@mocks/export-data/dispatch/transactions";
import {ShipmentPlanning} from "@mocks/models/dispatch/transactions";

@Component({
    selector: "app-shipment-creation-list",
    templateUrl: "./shipment-creation-list.component.html"
})
export class ShipmentCreationListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: ShipmentPlanning[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    menuItemId: string = "";
    subscription!: Subscription;
    constructor(
        private exportExcelService: ExportExcelService,
        private shipmentPlanningService: ShipmentPlanningService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private exportToPDFService: ExportToPDFService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
        this.menuItemId = this.appGlobalService.menuItemId;
    }

    navigateTo(path: string, u: any, action: string) {
        this.utilityService.navigateToForm({
            path: path,
            status: u.SPStatus,
            action: action,
            id: u._id,
            activatedRoute: this.activatedRoute
        });
        // if (
        //     (u.SPStatus == "Awaiting Approval" && action == "edit") ||
        //     (u.SPStatus == "Awaiting Approval" && action == "approval") ||
        //     (u.SPStatus == "Awaiting Approval" && action == "rejection") ||
        //     (u.SPStatus == "Approved" && action == "view") ||
        //     (u.SPStatus == "Rejected" && action == "view") ||
        //     (u.SPStatus == "Awaiting Approval" && action == "view") ||
        //     action == "create"
        // ) {
        //     this.router.navigate([path], {
        //         relativeTo: this.activatedRoute,
        //         queryParams: {id: u?._id, action}
        //     });
        //     return;
        // } else {
        //     return null;
        // }
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
        this.subscription = this.shipmentPlanningService.getAll(payload).subscribe(success => {
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
    pdfDownload(data: any) {
        let outPut = SHIPMENT_PLANNING_PDF_DATA(data);
        this.exportToPDFService.generatePdf(outPut.tableData, outPut.title);
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SHIPMENT_PLANNING_REPORT_DATA(data));
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
