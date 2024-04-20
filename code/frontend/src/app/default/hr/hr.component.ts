import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {StorageService} from "@core/services";

@Component({
    selector: "app-hr-admin",
    template: `<app-custom-menu-header [menuData]="menuData" *ngIf="!isReport"></app-custom-menu-header
        ><router-outlet></router-outlet>`
})
export class HRComponent implements OnInit {
    isReport: boolean = false;
    menuData: any = {
        homeDisplay: true,
        homeUrl: "default/HR/home",
        masterUrl: "/default/HR/tabs/master-tabs",
        masterTitle: "Masters",
        masterDisplay: true,
        transactionUrl: "/default/HR/tabs/txn-tabs",
        transactionTitle: "Transactions",
        transactionDisplay: true,
        reportUrl: "/default/HR/tabs/reports-tabs",
        reportTitle: "Reports",
        reportDisplay: true,
        title: "HR",
        type: null,
        subTitle: ""
    };
    constructor(private router: Router, private storageService: StorageService) {}

    ngOnInit(): void {
        this.isReport = this.router.url.split("/")[3] == "reports";
        let menuTitle = this.storageService.get("menuTitle");
        if (menuTitle && this.menuData.title != menuTitle.title) {
            this.menuData.title = menuTitle.title;
        }
    }
}
