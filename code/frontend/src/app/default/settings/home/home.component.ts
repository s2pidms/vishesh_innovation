import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DashboardService} from "@services/Dashboard.service";
import {UserService} from "@services/settings";
import {AppGlobalService, MenuTitleService, SpinnerService} from "@core/services";
interface SettingInterface {
    activeUsers: number;
    activeRoles: number;
    totalAdminUsers: number;
    loggedInUsers: number;
    totalCompanyLocations: number;
}
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    title: any = "";
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    constructor(
        private menuTitleService: MenuTitleService,
        private service: UserService,
        private spinner: SpinnerService,
        private setting: DashboardService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.getAll();
        this.getAllDashboardData();
        this.title = this.appGlobalService.moduleName;
        this.menuTitleService.set({
            title: `${this.title} Overview`,
            subTitle: null,
            type: null
        });
    }

    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    search: any = "";
    tableData: any = [];
    column: string = "lastLoggedIn";
    direction: number = -1;
    dashBoardData: SettingInterface = {
        activeUsers: 0,
        activeRoles: 0,
        totalAdminUsers: 0,
        loggedInUsers: 0,
        totalCompanyLocations: 0
    };

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
        this.service.getAllReport(payload).subscribe(success => {
            this.tableData = success.rows;
            this.collection = success.count;
            this.spinner.hide();
        });
    }

    getAllDashboardData() {
        this.setting.getAllSetting({}).subscribe(success => {
            this.dashBoardData = success;
        });
    }
}
