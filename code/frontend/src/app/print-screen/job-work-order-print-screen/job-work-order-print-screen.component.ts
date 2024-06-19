import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {JobWorkChallanService} from "@services/purchase";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {IJobWorkChallanPrintScreen} from "@mocks/models/print-screen";

@Component({
    selector: "app-job-work-order-print-screen",
    templateUrl: "./job-work-order-print-screen.component.html",
    styleUrls: ["./job-work-order-print-screen.component.scss"]
})
export class JobWorkOrderPrintScreenComponent implements OnInit {
    tableData: IJobWorkChallanPrintScreen = {
        _id: "",
        rowRepeat: [],
        company: {
            _id: "",
            companyName: "",
            GSTIN: "",
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
            companySignatureUrl: ""
        },
        JWChallanNo: "",
        JWChallanDate: "",
        jobWorkerName: "",
        currency: "",
        addressType: "",
        GSTINNo: "",
        primaryAddress: {
            country: "",
            state: "",
            cityOrDistrict: "",
            pinCode: "",
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        },
        shipToAddress: {
            country: "",
            state: "",
            cityOrDistrict: "",
            pinCode: "",
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        },
        placeOfSupply: "",
        JWChallanDetails: [
            {
                itemName: "",
                itemDescription: "",
                UOM: "",
                currency: "",
                HSNCode: 0,
                igst: 0,
                cgst: 0,
                sgst: 0,
                unitRate: 0,
                quantity: 0,
                taxableAmt: 0,
                _id: "",
                lineValueWithTax: 0,
                IGSTAmt: 0,
                CGSTAmt: 0,
                SGSTAmt: 0
            }
        ],
        totalTaxableAmt: 0,
        freightTermsInfo: {
            modeOfTransport: "",
            transporterName: "",
            vehicleNo: "",
            freightTerms: "",
            destination: ""
        },
        jobWorkDetails: {
            descriptionOfService: "",
            partNo: "",
            partName: ""
        },
        totalCGSTAmt: 0,
        totalIGSTAmt: 0,
        totalSGSTAmt: 0,
        totalAmtWithTax: 0
    };

    collection: any;
    pdfAction: any = "";
    buttonCondition: any = "true";
    previewDraft: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private jobWorkChallanService: JobWorkChallanService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}
    accessType: any = this.rolePermissionActions.downloadAction;

    ngOnInit(): void {
        // this.activatedRoute.queryParams.subscribe((params: any) => {
        //     this.pdfAction = params.action;
        //     this.previewDraft = params.preview;
        //     this.getJobWorkChallanById(params.id);
        //     this.buttonCondition = params.buttonCondition;
        // });
        // this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
        //     if (this.buttonCondition == "false") {
        //         event.preventDefault();
        //     }
        // });
    }

    getJobWorkChallanById(id: any) {
        // this.jobWorkChallanService.getByIdForPDF(id).subscribe(success => {
        //     this.tableData = success;

        //     this.tableData.rowRepeat = [];
        //     for (var i = 1; i <= 6 - this.tableData.JWChallanDetails.length; i++) {
        //         this.tableData.rowRepeat.push(i);
        //     }
        //     this.spinner.hide();
        // });
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
