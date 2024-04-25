import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-master",
    template: '<div class="main-content-wrapper"><router-outlet></router-outlet></div>'
})
export class MasterComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
}
