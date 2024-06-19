import {Component, ElementRef, HostListener, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SO_ORDER_TYPE} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {QuotationOfSKUService} from "@services/sales/quotationOfSKU.service";
import {IQuotationOfSKUPrintScreen} from "@mocks/models/print-screen";

@Component({
    selector: "app-quotation-of-skuprint-screen",
    templateUrl: "./quotation-of-skuprint-screen.component.html",
    styleUrls: ["./quotation-of-skuprint-screen.component.scss"]
})
export class QuotationOfSKUPrintScreenComponent implements OnInit {
    tableData: IQuotationOfSKUPrintScreen = {
        _id: "",
        quotationNo: "",
        customerCategory: "",
        exchangeRate: 0,
        currency: "",
        quotationDetails: [
            {
                SKUName: "",
                SKUDescription: "",
                drawingRef: "",
                partNo: "",
                UOM: "",
                MOQ: 0,
                QPrice: 0,
                developmentCost: 0,
                _id: ""
            }
        ],
        termsAndCond: [
            {
                parameterName: "",
                parameterLabel: "",
                order: 0,
                _id: ""
            }
        ],
        RFQReference: "",
        quotationDate: "",
        customerBillingAddress: {
            line1: "",
            line2: "",
            line3: "",
            line4: "",
            state: "",
            city: "",
            district: "",
            pinCode: "",
            country: "",
            contactPersonName: "",
            _id: ""
        },
        contactPersonName: "",
        SOSignatureUrl: "",
        SOPdfHeaderUrl: ""
    };

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
        private quotationOfSKUService: QuotationOfSKUService,
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
        this.quotationOfSKUService.getByIdForPDF(id).subscribe(success => {
            this.spinner.hide();
            this.display = success?.display;
            this.tableData = success?.quotation;
            this.isDomestic = success?.quotation?.customerCategory.includes("Domestic");
            if (success.quotation.termsAndCond && success.quotation.termsAndCond.length) {
                this.termsAndCondOfQuotation = success?.quotation?.termsAndCond;
            } else {
                this.termsAndCondOfQuotation = success?.termsAndCondOfQuotation;
            }
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
