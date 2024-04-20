import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-aas-aids-tax-invoice",
    templateUrl: "./aas-aids-tax-invoice.component.html",
    styleUrls: ["../e-invoice.component.scss"]
})
export class AasAidsTaxInvoiceComponent implements OnInit {
    @Input() tableData: any = {};

    constructor() {}

    ngOnInit(): void {
        if (this.tableData.customer.printQRCodeOnInvoice == "Yes") {
            for (var i = 1; i <= 3 - this.tableData.salesInvoiceDetails.length; i++) {
                this.tableData.rowRepeat.pop(i);
            }
        }
    }
}
