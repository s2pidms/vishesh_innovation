import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-master",
    template: '<div class="container main-content-wrapper"><router-outlet></router-outlet></div>'
})
export class MasterComponent implements OnInit {
    @Input() menuData: any;

    constructor() {}

    ngOnInit(): void {}
}
