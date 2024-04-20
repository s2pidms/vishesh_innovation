import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppGlobalService, MenuTitleService, SpinnerService, StorageService} from "@core/services";

@Component({
    selector: "app-label-master",
    templateUrl: "./label-master.component.html"
})
export class LabelMasterComponent implements OnInit {
    constructor(
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService,
        private spinner: SpinnerService,
        private storageService: StorageService,
        private router: Router
    ) {}

    title: any = "";
    menuItemId: any = "";
    cards: any = {};
    cardsData: any = [];
    ngOnInit(): void {
        this.cardsData = this.appGlobalService.globalData.menuItems.filter(
            (x: any) => !["idmsLogoA"].includes(x.activeClass)
        );
        this.title = this.appGlobalService.moduleName;
        this.menuItemId = this.appGlobalService.menuItemId;
    }

    navigateTo(path: string, id: any, displayName: any) {
        let obj = {
            title: displayName,
            subTitle: null,
            type: null,
            subModuleId: this.cards._id
        };
        this.storageService.set("menuTitle", obj);
        this.menuTitleService.set(obj);
        this.router.navigate([path], {queryParams: {id}});
    }
}
