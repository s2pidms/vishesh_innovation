import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SalesOrderService} from "@services/sales";
import {AppParameterService} from "@services/settings";

import {SO_ORDER_TYPE} from "@mocks/constant";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-so-comfirmation-print-screen",
    templateUrl: "./so-comfirmation-print-screen.component.html",
    styleUrls: ["./so-comfirmation-print-screen.component.scss"]
})
export class SoComfirmationPrintScreenComponent implements OnInit {
    tableData: any = [];
    pdfAction: any = "";
    status: any = "";
    previewSO: any = "";
    isDomestic: boolean = false;
    termsAndConditions: any = "";
    buttonCondition: any = "true";
    SOTypeObj: any = SO_ORDER_TYPE;
    constructor(
        private saleService: SalesOrderService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef,
        private appParameterService: AppParameterService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.previewSO = params.preview;

            this.getAllSOConfirmationById(params.id);
            this.getAppParameterByCode();
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
    getAllSOConfirmationById(id: any) {
        this.spinner.show();
        this.saleService.getSOConfirmationById(id).subscribe(success => {
            this.spinner.hide();
            this.status = success.SOStatus;

            this.tableData = success;
            this.isDomestic = success.salesCategory.includes("Domestic");

            if (success.customer.GSTClassification == "SEZ") {
                this.isDomestic = false;
            }

            if (this.tableData?.otherCharges?.totalAmount > 0) {
                this.tableData.igst1 = this.tableData?.otherCharges?.totalAmount * 0.18;
                this.tableData.sgst1 = this.tableData?.otherCharges?.totalAmount * 0.09;
                this.tableData.cgst1 = this.tableData?.otherCharges?.totalAmount * 0.09;
                this.tableData.TLVForOther = this.tableData?.otherCharges?.totalAmount + this.tableData.igst1;
                this.tableData.totalAmount += this.tableData.TLVForOther;
            }
            let contactDetails = success.company.contactInfo.find((ele: any) => ele.department == "Sales");
            this.tableData.company.companyContactPersonNumber = contactDetails.companyContactPersonNumber;
            this.tableData.company.companyContactPersonEmail = contactDetails.companyContactPersonEmail;
            this.tableData.totalAmount = Math.round(+this.tableData.totalAmount);
            this.tableData.supplierGST = this.tableData?.supplier?.supplierGST.slice(0, 2);
            this.tableData.summaryRowRepeat = [];
            for (var i = 1; i <= 4 - +this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData.SODetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
        });
    }

    getAppParameterByCode() {
        this.spinner.show();
        this.appParameterService.getAppParameterValueByCode("WACO").subscribe(success => {
            this.termsAndConditions = success.appParameterValue;
        });
        this.spinner.hide();
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
