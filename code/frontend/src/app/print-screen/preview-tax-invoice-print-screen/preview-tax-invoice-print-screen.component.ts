import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {SalesInvoiceService} from "@services/dispatch";

@Component({
    selector: "app-preview-tax-invoice-print-screen",
    templateUrl: "./preview-tax-invoice-print-screen.component.html",
    styleUrls: ["./preview-tax-invoice-print-screen.component.scss"]
})
export class PreviewTaxInvoicePrintScreenComponent implements OnInit {
    tableData: any = {};
    template: string = "Turnover less than 5 CR";
    constructor(
        private salesInvoiceService: SalesInvoiceService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            params = JSON.parse(params.data);
            if (params) {
                this.previewTaxInv(params);
            }
        });
    }
    previewTaxInv(payload: any) {
        this.spinner.show();
        this.salesInvoiceService.previewTaxInv(payload).subscribe(success => {
            this.spinner.hide();
            if (success?.customer?.customerCategory?.includes("Domestic")) {
                this.template = success?.company?.TIDomesticTemplates ?? "Turnover less than 5 CR";
            } else {
                this.template = success?.company?.TIExportsTemplates ?? "Turnover less than 5 CR";
            }
            this.tableData = success;
            this.tableData.totalGSTAmount =
                +this.tableData?.salesInvoiceTotalCGSTAmount +
                +this.tableData?.salesInvoiceTotalSGSTAmount +
                +this.tableData?.salesInvoiceTotalIGSTAmount;
            this.tableData.summaryRowRepeat = [];
            this.tableData.summaryRowRepeatForExports = [];
            for (var i = 1; i <= 3 - this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
            if (this.template == "E-Invoice" && this.tableData.customer.customerCategory.includes("Exports")) {
                for (var i = 1; i <= 2 - this.tableData.GSTDetails.length; i++) {
                    this.tableData.summaryRowRepeatForExports.push(i);
                }
            }

            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - this.tableData.salesInvoiceDetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
        });
    }
}
