import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-pi-schedule-print-screen",
    templateUrl: "./pi-schedule-print-screen.component.html",
    styleUrls: ["./pi-schedule-print-screen.component.scss"]
})
export class PISchedulePrintScreenComponent implements OnInit {
    @Input() tableData: any = {};
    @Input() termsAndConditions: any = "";

    constructor() {}

    ngOnInit(): void {}
}
