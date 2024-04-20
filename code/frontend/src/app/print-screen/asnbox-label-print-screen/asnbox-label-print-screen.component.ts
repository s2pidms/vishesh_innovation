import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService, StorageService} from "@core/services";
import {IASNLabelPrintScreen} from "@mocks/models/print-screen";
import {AdvanceShipmentNotice} from "@services/dispatch";

@Component({
    selector: "app-asnbox-label-print-screen",
    templateUrl: "./asnbox-label-print-screen.component.html",
    styleUrls: ["./asnbox-label-print-screen.component.scss"]
})
export class ASNBoxLabelPrintScreenComponent implements OnInit {
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
    //     rowRepeat: [],
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
    tableData: any = {};
    pdfAction: any = "";
    template: string = "PI Exports";
    labels: any = [];
    companyName: any = "";
    QRCode: any = "";
    companyFactoryAddress = {
        locationID: "Factory",
        stateForAdditionalPlaceOfBusiness: "Maharashtra",
        GSTINForAdditionalPlace: "27AAGCD4662E1ZP",
        TAN: "PNED12849E",
        addressLine1: "Unit no. G1-A",
        addressLine2: "Rajlaxmi Hi Tech Park ",
        addressLine3: "Mumbai - Nashik Highway ",
        addressLine4: "Bhiwandi",
        state: "Maharashtra",
        city: "Thane",
        district: "",
        pinCode: "421302",
        country: "India",
        _id: "64c7bf9adaedfa89eae3312a"
    };
    QRCodeData: any = [];

    constructor(
        private advanceShipmentNotice: AdvanceShipmentNotice,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.QRCode = params.QRCode;
            this.getDetailsById(params.id);
        });
        this.companyName = this.storageService.get("IDMSAUser")?.companyName;
        this.QRCodeData = `${window.location.href}&QRCode=QRCode`;
        console.log("QRCodeData", this.QRCodeData);
    }

    getDetailsById(id: any) {
        this.advanceShipmentNotice.getASNDetailsById(id).subscribe(success => {
            this.tableData = success;
            if (this.companyName == "Decal Tech Pvt. Ltd.") {
                this.tableData.company.companyBillingAddress = this.companyFactoryAddress;
            }
            this.labels = Array(this.tableData.totalNoOfBoxes)
                .fill(1)
                .map((_, i) => i + 1);
        });
    }
    getSkuData(label: any) {
        let boxes = this.tableData?.salesInvoiceDetails.filter((ele: any) =>
            ele.boxDetails.map((b: any) => b.boxNo).some((l: any) => l == label)
        );
        boxes = boxes.map((ele: any) => {
            let obj = ele.boxDetails.find((b: any) => b.boxNo == label);
            ele.SKUQty = obj.qty ?? 0;
            return ele;
        });
        return boxes;
    }
    getSkuWeight(label: any) {
        let boxes = this.tableData?.salesInvoiceDetails.filter((ele: any) =>
            ele.boxDetails.map((b: any) => b.boxNo).some((l: any) => l == label)
        );
        let weight = boxes
            .map((ele: any) => {
                let obj = ele.boxDetails.find((b: any) => b.boxNo == label);
                return obj.weight ?? 0;
            })
            .reduce((a: any, c: any) => +a + +c, 0);

        return weight;
    }

    windowPrint() {
        window.print();
    }
}
