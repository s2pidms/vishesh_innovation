import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MenuService} from "@services/settings";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService, ToastService} from "@core/services";
import {MenuItem} from "@mocks/models/settings/masters";

@Component({
    selector: "app-menu-list",
    templateUrl: "./menu-list.component.html"
})
export class MenuListComponent implements OnInit, OnDestroy {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    column: string = "menuOrder";
    system: string = "main";
    direction: number = 1;
    search: string = "";
    tableData: MenuItem[] = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    subscription!: Subscription;
    constructor(
        private menuService: MenuService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private toastService: ToastService,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    getAll() {
        this.spinner.show();
        let payload = {
            system: this.system,
            column: this.column,
            direction: this.direction
        };
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.menuService.getAll(payload).subscribe(success => {
            this.tableData = success;
            this.collection = this.tableData.length;
            this.spinner.hide();
        });
    }

    update(u: any) {
        this.spinner.show();
        u.isMenuActive = u.isMenuActive == true ? false : true;
        this.menuService.update(u._id, {isMenuActive: u.isMenuActive}).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
        });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
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
