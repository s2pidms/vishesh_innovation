import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PurchaseIndentService} from "@services/purchase";
import {AppParameterService} from "@services/settings";

import {INDENT_CATEGORY, LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-purchase-indent-print-screen",
    templateUrl: "./purchase-indent-print-screen.component.html",
    styleUrls: ["./purchase-indent-print-screen.component.scss"]
})
export class PurchaseIndentPrintScreenComponent implements OnInit {
    template: string = "Regular POD";
    tableData: any = {};
    pdfAction: any = "";
    status: any = "";
    previewPO: any = "";
    termsAndConditions: any = "";
    buttonCondition: any = "true";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    indentCategoryObj: any = INDENT_CATEGORY;
    constructor(
        private purchaseIndentService: PurchaseIndentService,
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
        this.purchaseIndentService.getPIndentDetailsById(id).subscribe(success => {
            this.spinner.hide();
            this.status = success.status;
            let contactDetails = success.company.contactInfo.find((ele: any) => ele.department == "Purchase");

            this.tableData = success;
            this.tableData.company.companyContactPersonNumber = contactDetails.companyContactPersonNumber;
            this.tableData.company.companyContactPersonEmail = contactDetails.companyContactPersonEmail;

            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData.indentDetails.length; i++) {
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
