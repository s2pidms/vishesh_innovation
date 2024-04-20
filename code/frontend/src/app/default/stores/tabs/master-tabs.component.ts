import {Component, OnInit} from "@angular/core";
import {AppGlobalService, MenuTitleService, SpinnerService, StorageService} from "@core/services";
import {SubModulesService} from "@services/settings";

import {SUB_MODULES_TYPES} from "@mocks/constant";
import {Router} from "@angular/router";

@Component({
    selector: "app-master-tabs",
    template: `<appTabCard
        [data]="{
                  cards,
                  noOfCards:3,
                  cardClass:'masterCard'
                }"
        (dataChange)="navigateTo($event)"
    ></appTabCard>`
})
export class MasterTabsComponent implements OnInit {
    title: any = "";
    menuItemId: any = "";
    cards: any = [];
    constructor(
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService,
        private subModulesService: SubModulesService,
        private spinner: SpinnerService,
        private router: Router,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.menuItemId = this.appGlobalService.menuItemId;
        this.getAll();
        this.menuTitleService.set({
            title: `${this.title} - Masters`,
            subTitle: null,
            type: null
        });
    }

    getAll() {
        this.spinner.show();
        let payload = {
            menuID: this.menuItemId,
            tabType: SUB_MODULES_TYPES.MASTER
        };
        this.subModulesService.getAll(payload).subscribe(success => {
            this.cards = success.rows;
            let dummyCount = 0 - this.cards.length;
            if (dummyCount > 0) {
                for (var i = 0; i < dummyCount; i++) {
                    this.cards.push({
                        displayName: "Place Holder",
                        disabled: true,
                        url: null
                    });
                }
            }
        });
        this.spinner.hide();
    }

    navigateTo({url: path, disabled: action, displayName, _id: subModuleId}: any) {

        let obj = {
            title: displayName,
            subTitle: null,
            type: null
        };
        this.storageService.set("menuTitle", obj);
        this.menuTitleService.set(obj);
        if (!action) {
            this.router.navigate([path]);
        }
    }
}
