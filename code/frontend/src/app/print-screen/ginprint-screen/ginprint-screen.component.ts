import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {GoodsInwardEntryService} from "@services/stores";

import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";

@Component({
    selector: "app-ginprint-screen",
    templateUrl: "./ginprint-screen.component.html",
    styleUrls: ["./ginprint-screen.component.scss"]
})
export class GINPrintScreenComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    submitted = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    tableData: any = [];
    tableDataObject: any = {};
    GINDetailsArr: any = [];
    MRNListArr: any = [];
    supplierOptionArr: any = [];
    pdfAction: any = "";
    buttonCondition: any = "true";
    form = new UntypedFormGroup({
        // _id: new FormControl(''),
        GINDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        GINNumber: new UntypedFormControl(""),
        MRNNumber: new UntypedFormControl(null),
        MRNDate: new UntypedFormControl(null, [Validators.required]),
        purchaseCategory: new UntypedFormControl(""),
        supplier: new UntypedFormControl("", [Validators.required]),
        supplierInvoice: new UntypedFormControl("", [Validators.required]),
        supplierInvoiceDate: new UntypedFormControl(null, [Validators.required]),
        currency: new UntypedFormControl("", [Validators.required]),
        FXRateINR: new UntypedFormControl(1, [Validators.required]),
        GINDetails: new UntypedFormControl([]),
        deliveryLocation: new UntypedFormControl(null),
        remarks: new UntypedFormControl(null),
        storageLocationMapping: new UntypedFormGroup({
            subLocation: new UntypedFormControl(null),
            rowNo: new UntypedFormControl(null),
            rackNo: new UntypedFormControl(null),
            binNo: new UntypedFormControl(null),
            otherId: new UntypedFormControl(null)
        })
    });

    findFormErrors = [
        {
            message: "Good Inward Dates is Required",
            key: "GINDate"
        },
        {
            message: "Supplier Name is Required",
            key: "supplier"
        },
        {
            message: "Supplier Invoice # is Required",
            key: "supplierInvoice"
        },
        {
            message: "Supplier Date is Required",
            key: "supplierInvoiceDate"
        },
        {
            message: "Currency is Required",
            key: "currency"
        },
        {
            message: "FX Rate is Required",
            key: "FXRateINR"
        }
    ];

    get f() {
        return this.form.controls;
    }

    constructor(
        private goodInwrdEntryService: GoodsInwardEntryService,
        private menuTitleService: MenuTitleService,
        private router: Router,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        this.menuTitleService.set({
            title: "Goods Inward Entry[GIN]",
            subTitle: null,
            type: null
        });
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.flag = -1;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                //
                break;
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    // set action
                    // this.action = params.action;
                    this.pdfAction = params.action;

                    if (params["id"]) {
                        // get patch data
                        return this.goodInwrdEntryService.getById(params["id"]);
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

                if (success.GINDate) {
                    success.GINDate = this.utilityService.getFormatDate(success.GINDate, "YYYY-MM-DD");
                }

                if (success.supplierInvoiceDate) {
                    success.supplierInvoiceDate = this.utilityService.getFormatDate(
                        success.supplierInvoiceDate,
                        "YYYY-MM-DD"
                    );
                }
                if (success.MRNDate) {
                    success.MRNDate = this.utilityService.getFormatDate(success.MRNDate, "YYYY-MM-DD");
                }

                success.MRNNumber = success?.MRNNumber?.MRNNumber;
                success.supplier = success?.supplier?.supplierName;
                success.FXRateINR = success?.FXRateINR;

                // patch all forms fields
                this.GINDetailsArr = success.GINDetails.map((ele: any, idx: number) => {
                    return {
                        item: ele?.item?._id,
                        GINLineNumber: idx + 1,
                        itemCode: ele?.item?.itemCode,
                        itemName: ele?.item?.itemName,
                        batchDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                        UOM: ele?.UOM,
                        GINQty: ele?.GINQty,
                        standardRate: ele?.standardRate,
                        purchaseRate: ele?.purchaseRate,
                        purchaseRateUSD: ele?.purchaseRateUSD,
                        purchaseRatINR: ele?.purchaseRatINR,
                        lineValueINR: ele?.lineValueINR
                    };
                });

                this.form.patchValue(success);
                this.form.disable();
            });
        //set menu header values
        this.menuTitleService.set({
            title: "Goods Inward Entry[GIN]",
            subTitle: null
            // type: this.action,
        });
    }

    getAll() {
        this.spinner.show();
        let payload = {
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction
        };
        this.goodInwrdEntryService.getAllMasterData(payload).subscribe(success => {
            this.MRNListArr = success.mrnList;
            this.supplierOptionArr = success.suppliers;
            this.form.controls["GINDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["FXRateINR"].setValue("1");
            this.f["supplier"].disable();
            this.spinner.hide();
        });
    }

    windowPrint() {
        window.print();
    }

    setMRN(event: any) {
        let gin = this.MRNListArr.find((x: any) => x._id == this.f["MRNNumber"].value);
        this.f["purchaseCategory"].setValue(gin.supplier.supplierPurchaseType);
        this.f["supplier"].setValue(gin.supplier._id);
        this.f["supplierInvoice"].setValue(gin.supplierInvoice);
        this.form.controls["supplierInvoiceDate"].setValue(
            this.utilityService.getFormatDate(gin.supplierDate, "YYYY-MM-DD")
        );
        this.f["currency"].setValue(gin.supplier.supplierCurrency);

        if (this.f["purchaseCategory"].value == "Domestic") {
            this.f["FXRateINR"].disable();
        }
        this.f["supplier"].disable();
        this.f["purchaseCategory"].disable();
        this.f["supplierInvoice"].disable();
        this.f["currency"].disable();
        this.f["supplierInvoiceDate"].disable();

        this.GINDetailsArr = gin.MRNDetails.map((ele: any, idx: any) => {
            return {
                item: ele.item._id,
                GINLineNumber: idx + 1,
                mrnLineNumber: ele.mrnLineNumber,
                itemCode: ele.item.itemCode,
                itemName: ele.item.itemName,
                itemSubCategory: ele.item.itemSubCategory,
                itemType: ele.item.itemType,
                UOM: ele.UOM,
                GINQty: ele.releasedQty ?? 0,
                standardRate: ele.standardRate,
                purchaseRate: ele.purchaseRate,
                purchaseRateUSD: ele.purchaseRate,
                purchaseRatINR: ele.purchaseRate * (this.f["FXRateINR"].value || 1),
                lineValueINR: ele.releasedQty * ele.purchaseRate * (this.f["FXRateINR"].value || 1),
                batchDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
                balancedQty: ele.balancedQty ?? 0,
                rejectedQty: ele.rejectedQty ?? 0,
                releasedQty: ele.releasedQty ?? 0
            };
        });

        this.collection = this.GINDetailsArr.length;
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.GINDetailsArr = this.GINDetailsArr;
        } else {
            this.GINDetailsArr = [...this.GINDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
