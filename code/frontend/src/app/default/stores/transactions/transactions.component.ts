import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-transactions",
    // transaction-page   style="width:auto"
    template: "<div class='main-content-wrapper'> <router-outlet ></router-outlet> </div>"
})
export class TransactionsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
