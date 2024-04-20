import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ExportExcelService, SpinnerService, StorageService, ToastService} from "@core/services";
import {UOMUnitsMasterService} from "@services/settings";
import {ModuleMaster} from "@mocks/models/settings/masters";

@Component({
    selector: "app-uom-units-master-list",
    templateUrl: "./uom-units-master-list.component.html"
})
export class UOMUnitsMasterListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "order";
    direction: number = 1;
    search: string = "";
    tableData: any = [];
    type: any = "";
    title: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    constructor(
        private exportExcelService: ExportExcelService,
        private uomUnitsMasterService: UOMUnitsMasterService,
        private activatedRoute: ActivatedRoute,
        private toastService: ToastService,
        private storageService: StorageService,
        private router: Router,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.title = this.storageService.get("menuTitle").title;
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.type = this.activatedRoute.snapshot.paramMap.get("appParameter");
        this.getAll();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {
            queryParams: {id, action, type: this.type}
        });
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

    getAll(excel = false) {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction,
            excel: excel,
            type: this.type
        };
        this.uomUnitsMasterService.getAll(payload).subscribe(success => {
            if (excel) {
                this.excelDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
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
            title: "Operation Name Master",
            csvData: data,
            headers: [
                {
                    header: "Operation Name",
                    key: "value",
                    ...style
                },
                {
                    header: "Order",
                    key: "order",
                    ...style
                },
                {
                    header: "status",
                    key: "status",
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
    update(u: any) {
        this.spinner.show();
        u.status = u.status == "Active" ? "Inactive" : "Active";
        this.uomUnitsMasterService.update(u._id, u).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
        });
    }
}
