import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppGlobalService, MenuTitleService, SpinnerService, StorageService} from "@core/services";
import {SubModulesService} from "@services/settings";
import {SUB_MODULES_TYPES} from "@mocks/constant";

@Component({
    selector: "app-purchase",
    templateUrl: "./purchase.component.html"
})
export class PurchaseComponent implements OnInit {
    constructor(
        private menuTitleService: MenuTitleService,
        private appGlobalService: AppGlobalService,
        private subModulesService: SubModulesService,
        private spinner: SpinnerService,
        private storageService: StorageService,
        private router: Router
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
            // let hashMap = new Map();
            // success.rows.forEach((card: any) => {
            //     hashMap.set(card.title, card);
            // });
            // this.cards = hashMap.get("Purchase Master");

            this.cards = success?.rows.find((x: any) => x.title == "Purchase Master");
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
            this.router.navigate([path]);
        }
    }
}
