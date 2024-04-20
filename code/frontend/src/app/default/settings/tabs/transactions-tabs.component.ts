import {Component, OnInit} from "@angular/core";
import {AppGlobalService, MenuTitleService, SpinnerService, StorageService} from "@core/services";
import {SUB_MODULES_TYPES} from "@mocks/constant";
import {SubModulesService} from "@services/settings";
import {Router} from "@angular/router";

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
    user: any = {};
    menuItemId: any = "";
    cards: any = [];
    constructor(
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService,
        private subModulesService: SubModulesService,
        private spinner: SpinnerService,
        private storageService: StorageService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.title = this.appGlobalService.moduleName;
        this.menuItemId = this.appGlobalService.menuItemId;
        this.user = this.storageService.get("IDMSAUser");
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
            this.cards.push({
                menuItemId: "64a6c1e33339d4dc9d8141ae",
                module: "Settings",
                type: "TRANSACTION",
                order: 3,
                isDisplay: true,
                title: "Audit",
                displayName: "Audit",
                disabled: false,
                url: "/default/settings/transactions/audit/audit-list",
                items: []
            });
            if (this.user.email == "spadmin@gmail.com" && this.user.name == "Super Admin") {
                this.cards.push({
                    menuItemId: "64a6c1e33339d4dc9d8141ae",
                    module: "Settings",
                    type: "TRANSACTION",
                    order: 3,
                    isDisplay: false,
                    title: "API Stack",
                    displayName: "API Stack",
                    disabled: false,
                    url: "/default/settings/transactions/api_stack",
                    items: []
                });
            }
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
