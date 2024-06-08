import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicePurchaseOrderService} from "@services/purchase";

import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-spoprint-screen",
    templateUrl: "./spoprint-screen.component.html",
    styleUrls: ["./spoprint-screen.component.scss"]
})
export class SPOPrintScreenComponent implements OnInit {
    tableData: any = [];
    originTableData: any;
    collection: any;
    supplierGST: any = [];
    companyGST: any = [];
    TLVForOther: number = 0;
    totalAmount: number = 0;
    pdfAction: any = "";
    buttonCondition: any = "true";
    previewSPO: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private servPurchaseService: ServicePurchaseOrderService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}
    accessType: any = this.rolePermissionActions.downloadAction;

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.previewSPO = params.preview;
            this.getSPOServiceById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getSPOServiceById(id: any) {
        this.servPurchaseService.getById(id).subscribe(success => {
            this.tableData = success;
            let supplierGST = this.tableData?.supplier?.supplierGST;
            this.tableData.SPODetails.forEach((x: any) => {
                if (supplierGST.substring(0, 2) == this.tableData?.company?.GSTIN.substring(0, 2)) {
                    x.SGSTAmount = (x?.sgst * x?.lineValue) / 100;
                    x.CGSTAmount = (x?.cgst * x?.lineValue) / 100;
                    x.totalLineValue = x?.lineValue + x.SGSTAmount + x.CGSTAmount;
                } else {
                    x.IGSTAmount = (x?.igst * x?.lineValue) / 100;
                    x.totalLineValue = x?.lineValue + x.IGSTAmount;
                }
                this.totalAmount += x.totalLineValue;
            });
            this.totalAmount = Math.round(this.totalAmount);
            this.supplierGST = this.tableData?.supplier?.supplierGST.slice(0, 2);

            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData?.SPODetails?.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
            this.spinner.hide();
        });
    }
    windowprint() {
        window.print();
    }
    // getAddress(address: any) {
    //     if (address) {
    //         return address.find((x: any) => x.addressType == "Shipping");
    //     }
    // }

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
