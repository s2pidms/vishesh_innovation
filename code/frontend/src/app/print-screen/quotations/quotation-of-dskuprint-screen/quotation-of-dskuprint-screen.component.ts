import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SO_ORDER_TYPE} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {QuotationOfDSKUService} from "@services/sales/quotationOfDSKU.service";

@Component({
    selector: "app-quotation-of-dskuprint-screen",
    templateUrl: "./quotation-of-dskuprint-screen.component.html",
    styleUrls: ["./quotation-of-dskuprint-screen.component.scss"]
})
export class QuotationOfDSKUPrintScreenComponent implements OnInit {
    tableData: any = [];
    termsAndCondOfQuotation: any = [];
    display: any = {};
    pdfAction: any = "";
    status: any = "";
    isDomestic: boolean = false;
    buttonCondition: any = "true";
    SOTypeObj: any = SO_ORDER_TYPE;
    // @ViewChild("mainTable") mainTable: ElementRef<any> | any;
    @ViewChild("mainTable", {static: false}) mainTable: ElementRef | any;

    @ViewChild("subTable") subTable: ElementRef<any> | any;
    constructor(
        private quotationOfDSKUService: QuotationOfDSKUService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    calculateHeight(h: any): string {
        return `calc(100vh - ${h}px)`;
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getByIdForPDF(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }
    windowPrint() {
        window.print();
    }
    getByIdForPDF(id: any) {
        this.spinner.show();
        this.quotationOfDSKUService.getByIdForPDF(id).subscribe(success => {
            this.spinner.hide();
            this.display = success?.display;
            this.tableData = success?.quotation;
            this.isDomestic = success?.quotation?.customerCategory.includes("Domestic");

            this.termsAndCondOfQuotation = success?.termsAndCondOfQuotation;
        });
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
