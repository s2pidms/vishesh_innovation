import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-transactions",
    template: ' <div  class="container main-content-wrapper" >  <router-outlet></router-outlet>   </div>'
})
export class TransactionsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
