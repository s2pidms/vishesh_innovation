import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-tax-invoice-exports",
    templateUrl: "./tax-invoice-exports.component.html",
    styleUrls: ["../e-invoice.component.scss"]
})
export class TaxInvoiceExportsComponent implements OnInit {
    @Input() tableData: any = {};

    constructor() {}

    ngOnInit(): void {}

    getAddress(address: any) {
        if (address) {
            return address.find((x: any) => x.addressType == "Billing");
        }
    }
}
