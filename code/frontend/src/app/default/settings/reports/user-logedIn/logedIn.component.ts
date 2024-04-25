import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Router} from "@angular/router";
import {SpinnerService} from "@core/services";

import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {UserService} from "@services/settings";

@Component({
    selector: "app-ppv",
    templateUrl: "./logedIn.component.html"
})
export class LogedInComponent implements OnInit {
    constructor(private service: UserService, private spinner: SpinnerService) {}

    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    search: any = "";
    tableData: any = [];
    column: string = "createdAt";
    direction: number = -1;

    ngOnInit(): void {
        this.getAll();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    onSort({column, direction}: SortEvent) {
        // this.headers.forEach((header: any) => {
        //   if (header.sortable !== column) {
        //     header.direction = '';
        //   }
        // });
        // this.column = column;
        // this.direction = direction == 'asc' ? 1 : -1;
        // this.getAll();
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
                //
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
        this.service.getAllReport(payload).subscribe(success => {
            this.tableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }
}
