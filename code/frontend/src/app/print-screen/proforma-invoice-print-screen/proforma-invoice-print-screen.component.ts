import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {ProformaInvoiceService} from "@services/sales";

@Component({
    selector: "app-proforma-invoice-print-screen",
    templateUrl: "./proforma-invoice-print-screen.component.html",
    styleUrls: ["./proforma-invoice-print-screen.component.scss"]
})
export class ProformaInvoicePrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    template: string = "PI Exports";
    buttonCondition: any = "true";

    constructor(
        private proformaInvoiceService: ProformaInvoiceService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.buttonCondition = params.buttonCondition;
            this.getDetailsById(params.id);
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }
    getDetailsById(id: any) {
        this.spinner.show();
        this.proformaInvoiceService.getProInvDetailsById(id).subscribe(success => {
            if (
                (success.customer.customerCategory == "Domestic – OEM" ||
                    success.customer.customerCategory == "Domestic – Dealer") &&
                success.customer.GSTClassification != "SEZ"
            ) {
                this.template = success?.company?.PIDomesticTemplates ?? "PI Domestic";
            } else {
                this.template = success?.company?.PIExportsTemplates ?? "PI Exports";
            }
            this.tableData = success;
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - this.tableData.PIDetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
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
