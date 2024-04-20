import {Injectable} from "@angular/core";
import {Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {StorageService, AppGlobalService, ToastService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class FormScreenResolver {
    actions: any = {
        create: "createAction",
        download: "downloadAction",
        edit: "editAction",
        view: "viewAction",
        print: "printAction",
        approve: "approveAction",
        cancelled: "cancelledAction",
        delete: "deleteAction",
        generateReport: "generateReportAction",
        reject: "rejectAction"
    };
    menuTitleData: any = {};
    cardData: any = [];
    menuItemId: any = "";
    tabType: any = "";
    accessType: any = "";
    constructor(
        private toastService: ToastService,
        private router: Router,
        private storageService: StorageService,
        private appGlobalService: AppGlobalService
    ) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        this.menuItemId = this.appGlobalService.menuItemId;
        this.menuTitleData = this.storageService.get("menuTitle");
        this.tabType = this.storageService.get("tab");
        if (this.tabType == "MASTER") {
            this.tabType = "masters";
        } else if (this.tabType == "TRANSACTION") {
            this.tabType = "transactions";
        } else if (this.tabType == "REPORT") {
            this.tabType = "reports";
        }
        let action = route.queryParamMap.get("action");
        if (action) {
            this.accessType = this.actions[action];
        }
        const accessControls = this.appGlobalService.rolesPermission;
        if (accessControls.length > 0) {
            const moduleCards: any = accessControls.find((access: any) => access?.menuItemId === this.menuItemId);
            if (
                this.accessType &&
                this.tabType &&
                moduleCards &&
                moduleCards[this.tabType].length > 0 &&
                this.menuTitleData.subModuleId
            ) {
                this.cardData = moduleCards[this.tabType].find(
                    (x: any) => x?.subModuleId == this.menuTitleData?.subModuleId
                );
                if (!this.cardData[this.accessType]) {
                    this.toastService.warning("You do not have access", "Access denied");
                    this.router.navigate(["./default/supports/access_denied"], {
                        queryParams: {returnUrl: state.url}
                    });
                    return of(false);
                }
                return of(true);
            } else {
                return of(false);
            }
        } else {
            return of(true);
        }
    }
}
