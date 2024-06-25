import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-jw-order-schedule-print-screen",
    templateUrl: "./jw-order-schedule-print-screen.component.html",
    styleUrls: ["./jw-order-schedule-print-screen.component.scss"]
})
export class JwOrderSchedulePrintScreenComponent implements OnInit {
    @Input() tableData: any = {};
    @Input() termsAndConditions: any = "";

    constructor() {}

    ngOnInit(): void {
        console.log("tableData", this.tableData);
    }
}
