import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {SaleDebitNoteService} from "@services/sales";
import {ISalesDebit} from "@mocks/models/print-screen/salesDebitNotePrint";

@Component({
    selector: "app-sale-debit-note-print",
    templateUrl: "./sale-debit-note-print.component.html",
    styleUrls: ["./sale-debit-note-print.component.scss"]
})
export class SaleDebitNotePrintComponent implements OnInit {
    tableData: ISalesDebit = {
        _id: "",
        salesCategory: "",
        company: {
            _id: "",
            companyBankName: "",
            companyAccountNumber: "",
            companyBankIFSCCode: "",
            companyName: "",
            GSTIN: "",
            companyBankBranch: "",
            companyBankMICRCode: "",
            companyBefName: "",
            companyBillingAddress: {
                addressLine1: "",
                addressLine2: "",
                addressLine3: "",
                addressLine4: "",
                addressType: "",
                city: "",
                country: "",
                district: "",
                pinCode: "",
                state: ""
            },
            contactInfo: [
                {
                    department: "",
                    contactPersonName: "",
                    designation: "",
                    companyContactPersonNumber: "",
                    companyContactPersonEmail: "",
                    _id: ""
                }
            ],
            companySignatureUrl: "",
            companyPdfHeaderUrl: "",
            companyContactPersonNumber: 0,
            companyContactPersonEmail: ""
        },
        DNNumber: "",
        DNDate: "",
        customer: {
            _id: "",
            customerCode: "",
            customerName: "",
            GSTIN: "",
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
                _id: ""
            },
            customerContactInfo: {
                contactPersonNumber: "",
                contactPersonEmail: "",
                _id: ""
            }
        },
        customerName: "",
        invoiceNo: "",
        invoiceDate: "",
        currency: "",
        DNDetails: [
            {
                SKUNo: "",
                SKUName: "",
                SKUDescription: "",
                UOM: "",
                primaryUnit: "",
                returnQty: 0,
                purchaseRate: 0,
                lineValue: 0,
                hsn: "",
                _id: ""
            }
        ],
        reasonForDN: "",
        otherCharges: {
            totalAmount: 0
        },
        GSTDetails: [
            {
                hsn: "",
                taxableValue: 0,
                igstRate: 0,
                igstAmount: 0,
                cgstRate: 0,
                cgstAmount: 0,
                sgstRate: 0,
                sgstAmount: 0,
                ugstRate: 0,
                ugstAmount: 0,
                totalTaxableValue: ""
            }
        ],
        totalCGSTAmount: 0,
        totalSGSTAmount: 0,
        totalIGSTAmount: 0,
        totalUGSTAmount: 0,
        totalTaxAmount: 0,
        totalAmount: 0,
        totalAmountWithTax: 0,
        roundedOff: 0,
        summaryRowRepeat: [],
        rowRepeat: []
    };

    pdfAction: any = "";
    isDomestic: boolean = false;
    buttonCondition: any = "true";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private saleDebitNoteService: SaleDebitNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    accessType: any = this.rolePermissionActions.downloadAction;

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getDebitNoteServiceById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getDebitNoteServiceById(id: any) {
        this.spinner.show();
        this.saleDebitNoteService.getDNDetailsById(id).subscribe(success => {
            this.spinner.hide();
            this.tableData = success;
            this.isDomestic = success.salesCategory.includes("Domestic");

            this.tableData.summaryRowRepeat = [];
            for (var i = 1; i <= 4 - +this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
            let contactDetails = success.company.contactInfo.find((ele: any) => ele.department == "Sales");
            this.tableData.company.companyContactPersonNumber = contactDetails.companyContactPersonNumber;
            this.tableData.company.companyContactPersonEmail = contactDetails.companyContactPersonEmail;
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData.DNDetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
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
