import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-so-schedule-print-screen",
    templateUrl: "./so-schedule-print-screen.component.html",
    styleUrls: ["../so-comfirmation-print-screen/so-comfirmation-print-screen.component.scss"]
})
export class SoSchedulePrintScreenComponent implements OnInit {
    @Input() tableData: any = {};
    @Input() termsAndConditions: any = "";

    constructor() {}

    ngOnInit(): void {}
}
