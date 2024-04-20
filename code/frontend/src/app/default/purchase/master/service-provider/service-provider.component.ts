import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SubModulesService} from "@services/settings";

import {SUB_MODULES_TYPES} from "@mocks/constant";
import {AppGlobalService, MenuTitleService, SpinnerService, StorageService} from "@core/services";

@Component({
    selector: "app-service-provider",
    templateUrl: "./service-provider.component.html"
})
export class ServiceProviderComponent implements OnInit {
    constructor(
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService,
        private subModulesService: SubModulesService,
        private spinner: SpinnerService,
        private storageService: StorageService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    title: any = "";
    menuItemId: any = "";
    cards: any = {};
    cardsData: any = [];

    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.menuItemId = this.appGlobalService.menuItemId;
        this.getAll();
    }

    getAll() {
        this.spinner.show();
        let payload = {
            menuID: this.menuItemId,
            tabType: SUB_MODULES_TYPES.MASTER
        };
        this.subModulesService.getAll(payload).subscribe(success => {
            this.cards = success?.rows.find((x: any) => x.title == "Service Provider");
            this.cardsData = this.cards.items.sort((a: any, b: any) => a.order - b.order);

            let dummyCount = 3 - this.cards.items.length;
            if (dummyCount > 0) {
                for (var i = 0; i < dummyCount; i++) {
                    this.cards.items.push({
                        displayName: "Place Holder",
                        disabled: true,
                        url: null
                    });
                }
            }
            this.menuTitleService.set({
                title: `${this.cards.displayName}`,
                subTitle: null,
                type: null,
                subModuleId: this.cards._id
            });
        });
        this.spinner.hide();
    }
    navigateTo(path: string, action: string, displayName: any) {
        let obj = {
            title: displayName,
            subTitle: null,
            type: null,
            subModuleId: this.cards._id
        };
        this.storageService.set("menuTitle", obj);
        if (!action) {
            this.menuTitleService.set(obj);
            this.router.navigate([path], {relativeTo: this.activatedRoute});
        }
    }
}
