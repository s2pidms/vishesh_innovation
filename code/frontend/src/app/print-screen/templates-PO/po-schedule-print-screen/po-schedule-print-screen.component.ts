import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-po-schedule-print-screen",
    templateUrl: "./po-schedule-print-screen.component.html",
    styleUrls: ["../tem-poprint-screen.component.scss"]
})
export class PoSchedulePrintScreenComponent implements OnInit {
    @Input() tableData: any = {};
    @Input() termsAndConditions: any = "";

    constructor() {}

    ngOnInit(): void {}
}
