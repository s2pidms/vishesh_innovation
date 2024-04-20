import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PurchaseOrderService} from "@services/purchase";
import {AppParameterService} from "@services/settings";

import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-poprint-screen",
    templateUrl: "./poprint-screen.component.html",
    styleUrls: ["./poprint-screen.component.scss"]
})
export class POPrintScreenComponent implements OnInit {
    template: string = "Regular POD";
    tableData: any = {};
    pdfAction: any = "";
    status: any = "";
    previewPO: any = "";
    termsAndConditions: any = "";
    buttonCondition: any = "true";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    constructor(
        private purchaseService: PurchaseOrderService,
        private appParameterService: AppParameterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    accessType: any = this.rolePermissionActions.downloadAction;

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.previewPO = params.preview;
            this.getPurchaseServiceById(params.id);
            this.getAppParameterByCode();
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getPurchaseServiceById(id: any) {
        this.spinner.show();
        this.purchaseService.getPODetailsById(id).subscribe(success => {
            this.spinner.hide();
            this.status = success.POStatus;
            if (success.supplier.supplierPurchaseType == "Domestic") {
                this.template = success?.company?.PODomesticTemplates ?? "Regular POD";
            } else {
                this.template = success?.company?.POImportsTemplates ?? "Regular POD";
            }
            success.company.companyAddress =
                success.company.placesOfBusiness.find((ele: any) => ele.locationID == success.deliveryLocation) ??
                success.company.companyBillingAddress;
            let contactDetails = success.company.contactInfo.find((ele: any) => ele.department == "Purchase");

            this.tableData = success;
            this.tableData.company.companyContactPersonNumber = contactDetails.companyContactPersonNumber;
            this.tableData.company.companyContactPersonEmail = contactDetails.companyContactPersonEmail;
            let supplierGST = this.tableData?.supplier?.supplierGST;
            let condition = supplierGST.substring(0, 2) == this.tableData?.company?.GSTIN.substring(0, 2);
            if (this.tableData?.company?.companyAddress?.GSTINForAdditionalPlace != undefined) {
                condition =
                    supplierGST.substring(0, 2) ==
                    this.tableData?.company?.companyAddress?.GSTINForAdditionalPlace.substring(0, 2);
            }
            this.tableData.totalAmount = 0;
            this.tableData.PODetails.forEach((x: any) => {
                if (condition) {
                    x.SGSTAmount = (x?.sgst * x?.lineValue) / 100;
                    x.CGSTAmount = (x?.cgst * x?.lineValue) / 100;
                    x.totalLineValue = x?.lineValue + x.SGSTAmount + x.CGSTAmount;
                } else {
                    x.IGSTAmount = (x?.igst * x?.lineValue) / 100;
                    x.totalLineValue = x?.lineValue + x.IGSTAmount;
                }
                this.tableData.totalAmount += x.totalLineValue;
            });

            if (this.tableData?.otherCharges?.totalAmount > 0) {
                this.tableData.igst1 = this.tableData?.otherCharges?.totalAmount * 0.18;
                this.tableData.sgst1 = this.tableData?.otherCharges?.totalAmount * 0.09;
                this.tableData.cgst1 = this.tableData?.otherCharges?.totalAmount * 0.09;
                this.tableData.TLVForOther = this.tableData?.otherCharges?.totalAmount + this.tableData.igst1;
                this.tableData.totalAmount += this.tableData.TLVForOther;
            }
            this.tableData.totalAmount = Math.round(+this.tableData.totalAmount);
            this.tableData.supplierGST = this.tableData?.supplier?.supplierGST.slice(0, 2);
            this.tableData.summaryRowRepeat = [];
            if (this.tableData.GSTDetails.length > 0) {
                this.tableData.GSTDetails = this.tableData.GSTDetails.filter((item: any) => {
                    return !(
                        item.hsn == "996511" &&
                        +item.cgstAmount == 0 &&
                        +item.sgstAmount == 0 &&
                        +item.igstAmount == 0
                    );
                });
            }
            for (var i = 1; i <= 4 - +this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData.PODetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
        });
    }
    windowPrint() {
        window.print();
    }
    getAddress(address: any) {
        if (address) {
            return address.find((x: any) => x.addressType == "Shipping");
        }
    }

    getAppParameterByCode() {
        this.spinner.show();
        this.appParameterService.getAppParameterValueByCode("iLABELS").subscribe(success => {
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
