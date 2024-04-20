import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {IASNLabelPrintScreen} from "@mocks/models/print-screen";
import {AdvanceShipmentNotice} from "@services/dispatch";
import {ProformaInvoiceService} from "@services/sales";

@Component({
    selector: "app-asnprint-screen",
    templateUrl: "./asnprint-screen.component.html",
    styleUrls: ["./asnprint-screen.component.scss"]
})
export class ASNPrintScreenComponent implements OnInit {
    tableData: any = {};
    // tableData: IASNLabelPrintScreen = {
    //     _id: "",
    //     company: "",
    //     ASNNumber: "",
    //     salesInvoice: "",
    //     salesInvoiceDate: "",
    //     customer: "",
    //     customerName: "",
    //     stateOfSupply: "",
    //     invoiceValue: 0,
    //     totalNoOfBoxes: 0,
    //     totalGrossWeight: 0,
    //     ASNStatus: "",
    //     rowRepeat: [] ,
    //     salesInvoiceDetails: [
    //         {
    //             PONumber: "",
    //             SKUQty: 0,
    //             SOId: {
    //                 _id: "",
    //                 PONumber: ""
    //             },
    //             batchDate: "",
    //             SKU: {
    //                 _id: "",
    //                 SKUName: "",
    //                 SKUDescription: "",
    //                 customerInfo: {
    //                     customer: "",
    //                     customerName: "",
    //                     customerPartNo: "",
    //                     PONo: "",
    //                     PODate: "",
    //                     customerCurrency: "",
    //                     standardSellingRate: "",
    //                     monthlyOffTake: "",
    //                     POValidDate: "",
    //                     _id: ""
    //                 }
    //             },
    //             dispatchQty: 0,
    //             unit: "",
    //             salesInvoiceUnitRate: 0,
    //             salesInvoiceLineValue: 0,
    //             HSNCode: "",
    //             boxNos: "",
    //             boxDetails: [],
    //             _id: ""
    //         }
    //     ],
    //     transporter: "",
    //     modeOfTransport: "",
    //     frightCharge: 0,
    //     frightTerms: "",
    //     deliveryType: "",
    //     docketLR: "",
    //     docketLRDate: "",
    //     freight: 0
    // };
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
