import {Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {mergeMap, of} from "rxjs";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {GRNDetails} from "@interfaces/GRNDetails";
import {GoodsReceiptNoteService} from "@services/stores";
import {NgbdSortableHeader} from "@shared/directives";

import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Component({
    selector: "app-grnprint",
    templateUrl: "./grnprint.component.html",
    styleUrls: ["./grnprint.component.scss"]
})
export class GrnprintComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    pdfAction: any = "";

    submitted = false;
    action: string = "create";
    GRNDetailsArray: GRNDetails[] = [];
    transporterArr: any = [];
    supplierNameModel: any = [];
    buttonCondition: any = "true";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;

    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        generate: "Report Generated"
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        GRNNumber: new UntypedFormControl("", [Validators.required]),
        PONumber: new UntypedFormControl("", [Validators.required]),
        GRNDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        PODate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        goodsDeliveryDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        supplier: new UntypedFormControl(null, [Validators.required]),
        supplierInvoiceRef: new UntypedFormControl("", [Validators.required]),
        supplierInvoiceRefDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        GRNStatus: new UntypedFormControl("Awaiting Approval", [Validators.required]),
        remarks: new UntypedFormControl(""),
        deliveryLocation: new UntypedFormControl(""),
        transporterName: new UntypedFormControl(""),
        freightChargesPaid: new UntypedFormControl(""),
        otherChargesPaid: new UntypedFormControl(""),
        AWB_LR_BR: new UntypedFormControl(""),
        GRNDetails: new UntypedFormControl([]),
        isTaxInvoice: new UntypedFormControl(false),
        isDeliveryChallan: new UntypedFormControl(false),
        isEWayBill: new UntypedFormControl(false),
        isPackingList: new UntypedFormControl(false),
        isCOATC: new UntypedFormControl(false)
    });

    accessType: any = this.rolePermissionActions.downloadAction;

    get f() {
        return this.form.controls;
    }
    constructor(
        private grnServices: GoodsReceiptNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private utilityService: UtilityService,
        private menuTitleService: MenuTitleService,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    windowPrint() {
        window.print();
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        // get routes data
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    // set action
                    this.action = params.action;
                    this.pdfAction = params.action;
                    this.buttonCondition = params.buttonCondition;
                    if (params["id"]) {
                        // get patch data
                        return this.grnServices.getGRNDetailsById(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                this.spinner.hide();
                if (Object.keys(success).length == 0) {
                    return;
                }

                // patch all forms fields
                this.GRNDetailsArray = success.GRNDetails.map((ele: any, idx: number) => {
                    return {
                        POLineNumber: ele.POLineNumber,
                        GRNLineNumber: idx + 1,
                        item: ele?.item?._id,
                        itemCode: ele?.item?.itemCode,
                        itemName: ele?.item?.itemName,
                        itemDescription: ele?.item?.itemDescription,
                        standardRate: ele?.standardRate,
                        purchaseRate: ele?.purchaseRate,
                        UOM: ele?.UOM,
                        POQty: ele?.POQty,
                        GRNQty: ele?.GRNQty,
                        conversionOfUnits: ele?.item?.conversionOfUnits,
                        invoicedQty: ele?.invoicedQty,
                        balancedQty: ele?.balancedQty,
                        receivedQty: ele?.receivedQty,
                        canceledQty: ele?.canceledQty,
                        batchDate: this.utilityService.getFormatDate(ele?.batchDate, "YYYY-MM-DD")
                    };
                });

                success.supplier = success.supplier.supplierName;
                success.GRNDate = this.utilityService.getFormatDate(success.GRNDate, "YYYY-MM-DD");
                success.PODate = this.utilityService.getFormatDate(success.PODate, "YYYY-MM-DD");
                success.goodsDeliveryDate = this.utilityService.getFormatDate(success.goodsDeliveryDate, "YYYY-MM-DD");
                success.supplierInvoiceRefDate = this.utilityService.getFormatDate(
                    success.supplierInvoiceRefDate,
                    "YYYY-MM-DD"
                );
                success.PONumber = success.PONumber.PONumber;
                success.GRNStatus = this.statusArr[this.action];
                this.form.patchValue(success);
                this.form.disable();
            });
        //set menu header values
        this.menuTitleService.set({
            title: "Goods Receipt Note [GRN]",
            subTitle: null,
            type: this.action
        });
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
