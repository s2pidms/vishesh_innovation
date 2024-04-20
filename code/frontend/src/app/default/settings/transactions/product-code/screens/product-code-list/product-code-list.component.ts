import {map} from "rxjs";
import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductCategoryService} from "@services/settings";

import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ExportExcelService, SpinnerService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
@Component({
    selector: "app-product-code-list",
    templateUrl: "./product-code-list.component.html"
})
export class ProductCodeListComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    selectedRow: any = {};
    productCatagoryData: any = [];
    search: string = "";
    page = 1;
    pageSize = 25;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    tableData: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    headerArr: Array<string> = ["Module Name", "Module Prefix", "Auto Increment Value", "Param Value"];
    actionArr: any = [
        {value: "View", img: "./assets/new_icons/icon_view.svg"},
        {value: "Edit", img: "./assets/new_icons/icon_edit.svg"}
    ];
    actualData: any = [];

    constructor(
        private productCategoryService: ProductCategoryService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private exportExcelService: ExportExcelService,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
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
            excel: excel
        };
        this.productCategoryService.getAll(payload).subscribe(success => {
            if (excel) {
                this.excelDownload(success.rows);
            } else {
                this.tableData = success.rows;
                this.collection = success.count;
                this.spinner.hide();
            }
        });
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
            title: "Role Master",
            csvData: data,
            headers: [
                {
                    header: "Module Name",
                    key: "moduleName",
                    ...style
                },
                {
                    header: "Module Prefix",
                    key: "module",
                    ...style
                },
                {
                    header: "Auto Increment Value",
                    key: "autoIncrementValue",
                    ...style
                }
            ]
        };
        this.exportExcelService.exportExcel(reportData);
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
