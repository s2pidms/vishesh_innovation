import {Component, OnInit} from "@angular/core";
import {MenuTitleService} from "@core/services";

@Component({
    selector: "app-reports-tabs",
    templateUrl: "./reports-tabs.component.html"
})
export class ReportsTabsComponent implements OnInit {
    constructor(private menuTitleService: MenuTitleService) {}

    ngOnInit(): void {
        this.menuTitleService.set({
            title: "Support - Reports",
            subTitle: null,
            type: null
        });
    }

    cards: any = [
        {
            title: "Ticket Details",
            disabled: false,
            url: "/default/supports/reports/ticket_details"
        },
        {
            title: "Place Holder",
            disabled: true,
            url: null
        },
        {
            title: "Place Holder",
            disabled: true,
            url: null
        }
    ];

    navigateTo(path: string, action: string) {
        if (!action) {
            window.open(`${window.location.origin}#/${path}`, "_blank");
        }
    }
}
