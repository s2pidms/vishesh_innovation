import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DebitNoteService} from "@services/purchase";

import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {IPurchaseDebitNote} from "@mocks/models/print-screen";

@Component({
    selector: "app-debit-note-print-screen",
    templateUrl: "./debit-note-print-screen.component.html",
    styleUrls: ["./debit-note-print-screen.component.scss"]
})
export class DebitNotePrintScreenComponent implements OnInit {
    tableData: IPurchaseDebitNote = {
        _id: "",
        summaryRowRepeat: [],
        rowRepeat: [],
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
                city: "",
                country: "",
                district: "",
                pinCode: "",
                state: ""
            },
            contactInfo: [
                {
                    companyContactPersonNumber: "",
                    companyContactPersonEmail: "",
                    _id: ""
                }
            ],
            companySignatureUrl: "",
            companyPdfHeaderUrl: "",
            companyContactPersonNumber: "",
            companyContactPersonEmail: ""
        },
        DNNumber: "",
        DNDate: "",
        supplier: {
            _id: "",
            supplierCode: "",
            supplierName: "",
            supplierGST: "",
            supplierBillingAddress: {
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
            supplierContactMatrix: {
                supplierContactPersonNumber: "",
                supplierContactPersonEmail: "",
                _id: ""
            }
        },
        invoiceNo: "",
        invoiceDate: "",
        currency: "",
        DNDetails: [
            {
                item: {
                    _id: "",
                    itemCode: "",
                    itemName: "",
                    itemDescription: ""
                },
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
                sgstAmount: 0
            }
        ],
        totalCGSTAmount: 0,
        totalSGSTAmount: 0,
        totalIGSTAmount: 0,
        totalTaxAmount: 0,
        totalAmount: 0,
        totalAmountWithTax: 0,
        roundedOff: 0
    };

    pdfAction: any = "";
    isDomestic: boolean = false;
    buttonCondition: any = "true";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private debitNoteService: DebitNoteService,
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
        this.debitNoteService.getDNDetailsById(id).subscribe(success => {
            this.spinner.hide();
            this.tableData = success;
            this.isDomestic = success.purchaseCategory.includes("Domestic");

            this.tableData.summaryRowRepeat = [];
            for (var i = 1; i <= 4 - +this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
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
