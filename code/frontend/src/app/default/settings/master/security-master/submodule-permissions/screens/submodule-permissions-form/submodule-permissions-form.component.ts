import {Component, OnInit} from "@angular/core";
import {ToastService} from "@core/services";
import {SubModulesPermissionService} from "@services/settings";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-submodule-permissions-form",
    templateUrl: "./submodule-permissions-form.component.html"
})
export class SubmodulePermissionsFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    permissionId: string = "";
    roles: any = [];
    tableData: any = [];
    roleList: any = [];
    menuItemList: any = [];
    mastersData: any = [];
    transactionsData: any = [];
    reportsData: any = [];
    view: string = "";
    selectAllMasters: boolean = false;
    selectAllReports: boolean = false;
    selectAllTransaction: boolean = false;
    constructor(
        private subModulesPermissionService: SubModulesPermissionService,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}
    role: any = "";
    roleName: any = "";
    menuItemId: any = "";
    module: any = "";
    existingRoles: any = [];

    ngOnInit(): void {
        this.getInitialData();
    }

    setAllMastersChecked(ev: any) {
        this.mastersData = this.mastersData.map((x: any) => {
            x.createAction = ev.target.checked;
            x.viewAction = ev.target.checked;
            x.editAction = ev.target.checked;
            x.downloadAction = ev.target.checked;
            return x;
        });
    }
    setAllReportsChecked(ev: any) {
        this.reportsData = this.reportsData.map((x: any) => {
            x.viewAction = ev.target.checked;
            x.downloadAction = ev.target.checked;
            return x;
        });
    }
    setAllTransactionsChecked(ev: any) {
        this.transactionsData = this.transactionsData.map((x: any) => {
            x.createAction = ev.target.checked;
            x.viewAction = ev.target.checked;
            x.editAction = ev.target.checked;
            x.approveAction = ev.target.checked;
            x.downloadAction = ev.target.checked;
            x.generateReportAction = ev.target.checked;

            return x;
        });
    }

    submit() {
        this.spinner.show();
        let payload: any = {};
        payload.masters = this.mastersData;
        payload.transactions = this.transactionsData;
        payload.reports = this.reportsData;
        this.subModulesPermissionService.update(this.permissionId, payload).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.reset();
        });
    }
    selectMasterSubModule() {
        if (this.mastersData.every((x: any) => x.createAction && x.viewAction && x.editAction && x.downloadAction)) {
            this.selectAllMasters = true;
        } else {
            this.selectAllMasters = false;
        }
    }
    selectTransactionSubModule() {
        if (
            this.transactionsData.every(
                (x: any) =>
                    x.createAction &&
                    x.viewAction &&
                    x.editAction &&
                    x.approveAction &&
                    x.downloadAction &&
                    x.generateReportAction
            )
        ) {
            this.selectAllTransaction = true;
        } else {
            this.selectAllTransaction = false;
        }
    }
    selectReportSubModule() {
        if (this.reportsData.every((x: any) => x.viewAction && x.downloadAction)) {
            this.selectAllReports = true;
        } else {
            this.selectAllReports = false;
        }
    }

    getFilterData() {
        this.spinner.show();
        let payload = {
            module: this.module,
            menuItemId: this.menuItemId,
            role: this.role,
            roleName: this.roleName
        };
        this.subModulesPermissionService.getAllFilterData(payload).subscribe(success => {
            this.permissionId = success._id;
            this.mastersData = success.masters;
            this.selectMasterSubModule();
            this.transactionsData = success.transactions;
            this.selectTransactionSubModule();
            this.reportsData = success.reports;
            this.selectReportSubModule();
        });
        this.spinner.hide();
    }

    reset() {
        this.role = "";
        this.menuItemId = "";
        this.selectAllMasters = false;
        this.selectAllReports = false;
        this.selectAllTransaction = false;
        this.mastersData = [];
        this.transactionsData = [];
        this.reportsData = [];
    }

    getInitialData() {
        this.spinner.show();
        this.subModulesPermissionService.getAllMasterData({}).subscribe(success => {
            this.roleList = success.roleList;
            this.menuItemList = success.menuItemList;
        });
        this.spinner.hide();
    }

    setRoleId(ev: any) {
        this.roleName = ev.roleName;
    }
    setModuleName(ev: any) {
        this.module = ev.title;
    }
}
