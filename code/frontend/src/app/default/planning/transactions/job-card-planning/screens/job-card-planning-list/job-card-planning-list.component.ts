import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, ExportToPDFService, SpinnerService, ToastService} from "@core/services";
import {SKU_MATERIAL_MASTER_PDF_DATA, SKU_MATERIAL_MASTER_REPORT_DATA} from "@mocks/export-data/planning/master";
import {JobCardCreationService} from "@services/planning";

@Component({
    selector: "app-job-card-planning-list",
    templateUrl: "./job-card-planning-list.component.html",
    styleUrls: ["./job-card-planning-list.component.scss"]
})
export class JobCardPlanningListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "SONumber";
    direction: number = 1;
    search: string = "";
    tableData: any = [];
    totalBalSOQty: any = 0;
    totalFGInv: any = 0;
    inprocessQty: any = 0;
    toProduceQty: any = 0;
    checkSmartPlanningFlag: boolean = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    totalAmounts = {};
    selectedSKU = {};
    creationFlag: any = null;
    constructor(
        private exportExcelService: ExportExcelService,
        private jobCardCreationService: JobCardCreationService,
        private router: Router,
        private spinner: SpinnerService,
        private activatedRoute: ActivatedRoute,
        private exportToPDFService: ExportToPDFService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.search = this.activatedRoute.snapshot.queryParamMap.get("search") ?? "";
        this.getAll();
    }

    navigateTo(path: string, item: any, action: string) {
        if (
            (item.status == "In Progress" && action == "view") ||
            (item.status == "Awaiting Approval" && ["edit", "view", "approve"].includes(action)) ||
            (item.status == "Inactive" && ["create"].includes(action))
        ) {
            this.router.navigate([path], {
                relativeTo: this.activatedRoute,
                queryParams: {
                    action,
                    SOId: item?.SOId,
                    customerId: item?.customerId,
                    SKUId: item?.SKUId,
                    // SOId: this.creationFlag == "Create JC" ? item?.SOId : "",
                    // customerId: this.creationFlag == "Smart Planning" ? item?.customerId : "",
                    // SKUId: this.creationFlag == "Smart Planning" ? item?.SKUId : "",
                    jobCardId: item?.jobCardCreation?._id,
                    creationFlag: this.creationFlag ?? ""
                }
            });
            return;
        } else {
            return null;
        }
    }

    navigateToDim(path: string, item: any, action: string) {
        this.router.navigate([path], {
            queryParams: {
                id: item?._id,
                action
            }
        });
        return;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    createJobCard(path: string, action: string) {
        // this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id: item?._id, action}});
        // return;
    }

    getAll(excel = false, flag = "") {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            type: "Materials"
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.jobCardCreationService.getAllSOForJC(payload).subscribe(success => {
            if (flag == "EXCEL") {
                this.excelDownload(success?.rows);
            } else if (flag == "PDF") {
                this.pdfDownload(success?.rows);
            } else {
                this.tableData = success?.rows;
                this.totalBalSOQty = success?.totalAmounts?.balanceQty;
                this.totalFGInv = success?.totalAmounts?.FGINQty;
                this.inprocessQty = success?.totalAmounts?.inProcessQty;
                this.toProduceQty = +this.totalBalSOQty - (+this.totalFGInv + +this.inprocessQty);
                this.collection = success.count;
            }
            this.spinner.hide();
        });
    }

    update(u: any, action: string) {
        if (u?.status === "Approved") {
            this.spinner.show();
            this.jobCardCreationService.update(u._id, {_id: u._id, status: action}).subscribe(success => {
                this.toastService.success(success.message);
                this.getAll();
                this.spinner.hide();
            });
        }
    }
    openDrawing(drawing: any) {
        if (drawing) {
            window.open(drawing, "_blank");
        } else {
            this.toastService.warning("Drawing File Not Present");
        }
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    excelDownload(data: any) {
        this.exportExcelService.exportExcel(SKU_MATERIAL_MASTER_REPORT_DATA(data));
    }

    pdfDownload(data: any) {
        let output = SKU_MATERIAL_MASTER_PDF_DATA(data);
        this.exportToPDFService.generatePdf(output.tableData, output.title);
    }

    setSmartPlanning(item: any, action: any) {
        this.checkSmartPlanningFlag = true;
        this.selectedSKU = item;
        this.creationFlag = action;
        if (["", null].includes(this.search)) {
            this.search = item?.SKUNo;

            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {search: item?.SKUNo},
                queryParamsHandling: "merge"
            });
            this.getAll();
        }
    }

    back() {
        this.search = "";
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {search: ""},
            queryParamsHandling: "merge"
        });
        this.getAll();
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.checkSmartPlanningFlag = false;
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
