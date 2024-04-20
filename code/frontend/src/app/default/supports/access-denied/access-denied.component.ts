import {Component, OnInit} from "@angular/core";
import {MenuTitleService} from "@core/services";

@Component({
    selector: "app-access-denied",
    templateUrl: "./access-denied.component.html",
    styles: [
        `
            .accessScreen {
                width: 100%;
                height: 45rem;
            }
        `
    ]
})
export class AccessDeniedComponent implements OnInit {
    [x: string]: any;
    constructor(private menuTitleService: MenuTitleService) {}

    ngOnInit(): void {
        this.menuTitleService.set({
            title: `Access Denied`,
            subTitle: null,
            type: null
        });
    }
    back() {
        window.history.go(-2);
    }
}
