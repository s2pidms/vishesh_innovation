import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {IASNLabelPrintScreen} from "@mocks/models/print-screen";
import {AdvanceShipmentNotice} from "@services/dispatch";

@Component({
    selector: "app-asnprint-screen",
    templateUrl: "./asnprint-screen.component.html",
    styleUrls: ["./asnprint-screen.component.scss"]
})
export class ASNPrintScreenComponent implements OnInit {
    tableData: IASNLabelPrintScreen =  {
        _id: "",
        company: {
            _id: "",
            companyName: "",
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
            contactInfo: {
                department: "",
                contactPersonName: "",
                designation: "",
                companyContactPersonNumber: "",
                companyContactPersonEmail: "",
                _id: ""
            },
            SOSignatureUrl: "",
            companyPdfHeaderUrl: "",
            SOPdfHeaderUrl: "",
            logoUrl: ""
        },
        ASNNumber: "",
        salesInvoice: {
            _id: "",
            salesInvoiceNumber: "",
            customerShippingAddress: {
                line1: "",
                line2: "",
                line3: "",
                state: "",
                city: "",
                pinCode: "",
                contactPersonName: ""
            }
        },
        salesInvoiceDate: "",
        customer: {
            _id: "",
            customerName: "",
            GSTIN: "",
            customerShippingAddress: [
                {
                    line1: "",
                    line2: "",
                    line3: "",
                    state: "",
                    city: "",
                    district: "",
                    pinCode: "",
                    country: "",
                    contactPersonName: "",
                    contactPersonNumber: "",
                    _id: ""
                }
            ],
            customerContactInfo: [
                {
                    contactPersonName: "",
                    contactPersonDesignation: "",
                    contactPersonDepartment: "",
                    contactPersonNumber: "",
                    contactPersonEmail: "",
                    _id: ""
                }
            ]
        },
        customerName: "",
        stateOfSupply: "",
        invoiceValue: 0,
        totalNoOfBoxes: 0,
        totalGrossWeight: 0,
        ASNStatus: "",
        salesInvoiceDetails: [
            {
                PONumber: "",
                SOId: "",
                batchDate: "",
                SKU: "",
                dispatchQty: 0,
                unit: "",
                salesInvoiceUnitRate: 0,
                salesInvoiceLineValue: 0,
                HSNCode: "",
                boxNos: "",
                boxDetails: [
                    {
                        boxNo: 0,
                        qty: 0,
                        weight: 0,
                        _id: ""
                    }
                ],
                _id: "",
                SKUName: "",
                SKUDescription: "",
                customerInfo: {
                    customer: "",
                    customerName: "",
                    customerPartNo: "",
                    PONo: "",
                    PODate: "",
                    customerCurrency: "",
                    standardSellingRate: "",
                    monthlyOffTake: "",
                    POValidDate: "",
                    _id: ""
                }
            }
        ],
        rowRepeat: [],
        transporter: "",
        modeOfTransport: "",
        frightCharge: 0,
        frightTerms: "",
        deliveryType: "",
        docketLR: "",
        docketLRDate: "",
        freight: 0,
        SKUInfo: [
            {
                _id: "",
                SKUName: "",
                SKUDescription: "",
                customerInfo: [
                    {
                        customer: "",
                        customerName: "",
                        customerPartNo: "",
                        PONo: "",
                        PODate: "",
                        customerCurrency: "",
                        standardSellingRate: "",
                        monthlyOffTake: "",
                        POValidDate: "",
                        _id: ""
                    }
                ]
            }
        ]
    };
    pdfAction: any = "";
    template: string = "PI Exports";
    constructor(
        private advanceShipmentNotice: AdvanceShipmentNotice,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getDetailsById(params.id);
        });
    }
    getDetailsById(id: any) {
        this.advanceShipmentNotice.getASNDetailsById(id).subscribe(success => {
            this.tableData = success;

            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - this.tableData.salesInvoiceDetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
        });
    }
    windowPrint() {
        window.print();
    }
}
