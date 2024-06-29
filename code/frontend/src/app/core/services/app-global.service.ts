import {Injectable} from "@angular/core";
import {MenuService} from "@services/settings";
import {BehaviorSubject, Subject, map, of} from "rxjs";
import {StorageService} from "./local-storage.service";
import {MENU_IDS} from "@mocks/menuIds.constant";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Injectable({
    providedIn: "root"
})
export class AppGlobalService {
    costEstimateCalculateData: any = {};
    moduleName: any = "";
    menuItemId: any = "";
    private dataSource = new BehaviorSubject<any>({});
    public data = this.dataSource.asObservable();
    globalData: any = null;
    rolesPermission: any = [];
    labelsJSON: any = [];
    UOMUintMasterOptions: any = [];
    currencyMaster: any = [];
    UOMDefaultValueOptions: any = [];
    salesUOMUintMasterOptions: any = [];
    cardData: any = [];
    accessType: any = LIST_DEFAULT_PERMISSION_ACTIONS.downloadAction;
    constructor(private menuService: MenuService, private storageService: StorageService) {}
    setData(value: any) {
        this.dataSource.next(value);
        this.globalData = value;
    }

    getData(keys: any = []) {
        return this.data.pipe(
            map((res: any) => {
                let pickData = this.pickValue(res, keys);
                return pickData;
            })
        );
    }
    getPermissionRoleByModule(id: string) {
        if (!this.globalData) {
            return this.menuService.getAllGlobalData({}).pipe(
                map((data: any) => {
                    this.setData(data);
                    // this.labelsJSON = data?.labelsJSON;
                    // let pickData = this.pickValue(data, ["menuItems"]);
                    // this.rolesPermission = data?.rolesPermission;
                    // let menu = pickData["menuItems"]?.find((x: any) => x._id == id);
                    // let roles = menu?.roles ?? [];
                    // if (MENU_IDS.Support == id) {
                    //     return true;
                    // }
                    // const userRoles = this.storageService.get("IDMSAUser").roles;
                    // let condition = roles.some((x: any) => userRoles.includes(x));
                    // if (condition) {
                    //     this.moduleName = menu?.title;
                    //     this.menuItemId = menu?.id;
                    // }
                    return this.handleData(data, id);
                })
            );
        } else {
            return this.data.pipe(
                map((res: any) => {
                    // this.labelsJSON = res?.labelsJSON;
                    // let pickData = this.pickValue(res, ["menuItems"]);
                    // let menu = pickData["menuItems"]?.find((x: any) => x._id == id);

                    // let roles = menu?.roles ?? [];
                    // const userRoles = this.storageService.get("IDMSAUser").roles;
                    // if (MENU_IDS.Support == id) {
                    //     return true;
                    // }
                    // let condition = roles.some((x: any) => userRoles.includes(x));
                    // if (condition) {
                    //     this.moduleName = menu?.title;
                    //     this.menuItemId = menu?.id;
                    // }
                    return this.handleData(res, id);
                })
            );
        }
    }

    checkAccess(tabType: any, menuTitleData: any) {
        const accessControls = this.rolesPermission;
        if (accessControls.length > 0) {
            const moduleCards: any = accessControls.find((access: any) => access?.menuItemId === this.menuItemId);
            if (moduleCards && moduleCards[tabType].length > 0 && menuTitleData?.subModuleId) {
                this.cardData = moduleCards[tabType].find((x: any) => x?.subModuleId == menuTitleData?.subModuleId);
                return this.cardData[this.accessType];
            }
        }
    }

    handleData(data: any, id: string) {
        const pickData = this.pickValue(data, ["menuItems"]);
        this.rolesPermission = data?.rolesPermission;
        this.labelsJSON = data?.labelsJSON;
        this.UOMDefaultValueOptions = data?.UOMDefaultValue;
        this.UOMUintMasterOptions = data?.UOMUintMasterJSON;
        this.currencyMaster = data?.currencyMaster;
        this.salesUOMUintMasterOptions = data?.salesUOMUintMaster;

        const menu = pickData["menuItems"]?.find((x: any) => x._id == id);
        const roles = menu?.roles ?? [];

        if (MENU_IDS.Support == id) {
            return true;
        }

        const userRoles = this.storageService.get("IDMSAUser").roles;
        const condition = roles.some((x: any) => userRoles.includes(x));

        if (condition) {
            this.moduleName = menu?.title;
            this.menuItemId = menu?.id;
        }

        return condition;
    }
    /**
     * Create an object composed of the picked object properties
     * @param {Object} object
     * @param {string[]} keys
     * @returns {Object}
     */
    pickValue(object: any, keys: any) {
        return keys.reduce((obj: any, key: any) => {
            if (object && Object.prototype.hasOwnProperty.call(object, key)) {
                obj[key] = object[key];
            }
            return obj;
        }, {});
    }
}
