import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {SalesInvoiceService} from "@services/dispatch";

@Component({
    selector: "app-tax-invoice-print-screen",
    templateUrl: "./tax-invoice-print-screen.component.html",
    styleUrls: ["./tax-invoice-print-screen.component.scss"]
})
export class TaxInvoicePrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    // status: any = "";
    template: string = "Turnover less than 5 CR";
    buttonCondition: any = "true";

    constructor(
        private activatedRoute: ActivatedRoute,
        private salesInvoiceService: SalesInvoiceService,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getDetailsById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getDetailsById(id: any) {
        this.spinner.show();
        this.salesInvoiceService.getSalesInvoiceByIdForPDF(id).subscribe(success => {
            this.spinner.hide();
            // this.status = success.salesInvoiceStatus;
            if (success.customer.customerCategory.includes("Domestic")) {
                this.template = success?.company?.TIDomesticTemplates ?? "Turnover less than 5 CR";
            } else {
                this.template = success?.company?.TIExportsTemplates ?? "Turnover less than 5 CR";
            }
            this.tableData = success;
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
    windowPrint() {
        window.print();
    }
    getAddress(address: any) {
        if (address) {
            return address.find((x: any) => x.addressType == "Billing");
        }
    }

    @HostListener("window:keydown", ["$event"])
    onKeyDown(event: KeyboardEvent): void {
        if (
            (event.ctrlKey && event.key === "p" && this.buttonCondition == "false") ||
            (event.key === "P" && this.buttonCondition == "false")
        ) {
            event.preventDefault();
        }
    }
}
