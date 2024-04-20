import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {ServiceInvoiceService} from "@services/sales";

@Component({
    selector: "app-service-invoice-print-screen",
    templateUrl: "./service-invoice-print-screen.component.html",
    styleUrls: ["./service-invoice-print-screen.component.scss"]
})
export class ServiceInvoicePrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    template: string = "Turnover less than 5 CR";

    buttonCondition: any = "true";

    constructor(
        private activatedRoute: ActivatedRoute,
        private serviceInvoiceService: ServiceInvoiceService,
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
        this.serviceInvoiceService.getSIDetailsById(id).subscribe(success => {
            this.spinner.hide();

            if (
                success.customer.customerCategory == "Domestic – OEM" ||
                success.customer.customerCategory == "Domestic – Dealer"
            ) {
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
            for (var i = 1; i <= 3 - this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }

            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - this.tableData.serviceDetails.length; i++) {
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
