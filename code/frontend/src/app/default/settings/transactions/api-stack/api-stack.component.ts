import {Component, OnInit} from "@angular/core";
import {AuditService} from "@services/settings";
import {SpinnerService} from "@core/services";
@Component({
    selector: "app-api-stack",
    templateUrl: "./api-stack.component.html",
    styles: [
        `
            .pagination {
                margin-bottom: 0 !important;
            }
            ngb-pagination ::ng-deep ul.pagination {
                margin: 0 !important;
            }
            .page-label {
                color: var(--bs-dark);
                padding: 0 1rem;
                font-size: 1.4rem;
            }

            ngb-pagination ::ng-deep ul > li:not(.active) > a {
                border: none !important;
                color: var(--bs-white) !important;
                background-color: #ffffff !important;
                box-shadow: none;
            }

            .fa {
                font-size: 1.6rem !important;
            }
            .set-input-group-text {
                border-radius: 0 !important;
                height: 2.8rem !important;
                width: 3rem;
            }
        `
    ]
})
export class ApiStackComponent implements OnInit {
    originTableData: any = [];
    tableData: any = [];
    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    search: string = "";
    totalSum: any;
    constructor(private auditService: AuditService, private spinner: SpinnerService) {}

    ngOnInit(): void {
        this.getAll();
    }

    matches() {
        this.tableData = this.originTableData.filter(
            (ele: any) => ele?.endpoint && ele?.endpoint?.toLowerCase().toString().match(this.search.toLowerCase())
        );
        this.collection = this.tableData.length;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.matches();
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getAll() {
        this.spinner.show();
        this.auditService.getAllApiStack({}).subscribe(success => {
            this.tableData = success?.apiArray;
            this.originTableData = success?.apiArray;
            this.collection = success?.apiArray.length;
            this.totalSum = success.totalCount;
            this.spinner.hide();
        });
    }
}
