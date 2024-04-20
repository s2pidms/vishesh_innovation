import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-TOLT5CR",
    templateUrl: "./toless-than5-cr.component.html",
    styleUrls: ["../e-invoice.component.scss"]
})
export class TOLessThan5CRComponent implements OnInit {
    @Input() tableData: any = {};

    constructor() {}

    ngOnInit(): void {}

    getAddress(address: any) {
        if (address) {
            return address.find((x: any) => x.addressType == "Billing");
        }
    }
}
