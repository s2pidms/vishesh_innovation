import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {SubModulesService} from "@services/settings";

import {SUB_MODULES_TYPES} from "@mocks/constant";
import {AppGlobalService, MenuTitleService, SpinnerService, StorageService} from "@core/services";

@Component({
    selector: "app-transactions-tabs",
    template: `<appTabCard
        [data]="{
            cards,
            noOfCards:3,
            cardClass:'txnCard'
          }"
        (dataChange)="navigateTo($event)"
    ></appTabCard>`
})
export class TransactionsTabsComponent implements OnInit {
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
            title: `${this.title} - Transactions`,
            subTitle: null,
            type: null
        });
    }

    getAll() {
        this.spinner.show();
        let payload = {
            menuID: this.menuItemId,
            tabType: SUB_MODULES_TYPES.TRANSACTION
        };
        this.subModulesService.getAll(payload).subscribe(success => {
            this.cards = success.rows;
            let dummyCount = 3 - this.cards.length;
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
            type: null,
            subModuleId: subModuleId
        };
        this.storageService.set("menuTitle", obj);
        if (!action) {
            this.menuTitleService.set(obj);
            this.router.navigate([path]);
        }
    }
}
