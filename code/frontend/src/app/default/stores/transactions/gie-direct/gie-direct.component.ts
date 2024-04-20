import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GINDetails} from "@interfaces/GINDetails";
import {GoodsInwardEntryService} from "@services/stores";
import {UtilityService, SpinnerService} from "@core/services";
import {ToastService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";

@Component({
    selector: "app-gie-direct",
    templateUrl: "./gie-direct.component.html"
})
export class GieDirectComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    submitted = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    isPreview = false;
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    action: string = "create";
    tableData: any = [];
    tableDataObject: any = {};
    GINDetailsArr: GINDetails[] = [];
    MRNListArr: any = [];
    supplierOptionArr: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
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
        remarks: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private goodInwrdEntryService: GoodsInwardEntryService,
        private router: Router,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.page = Number(this.activatedRoute.snapshot.queryParamMap.get("page") ?? 1);
        this.getAll();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    submit() {
        // this.submitted = true;
        // if (this.validationService.checkErrors(this.form, GIN_FORM_ERRORS)) {
        //   return;
        // }
        // this.form.enable();
        // let formData: any = this.form.value;
        // formData.GINDetails = this.GINDetailsArr;
        // formData.GINDetails = formData.GINDetails.map((ele: any) => {
        //   {
        //     ele.lineValueINR =
        //       ele.GINQty * ele.purchaseRate * (this.f['FXRateINR'].value || 1);
        //     return ele;
        //   }
        // });
        // if (formData) {
        //   this.create(formData);
        // }
    }

    create(formData: any) {
        this.spinner.show();
        this.goodInwrdEntryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            // this.router.navigate(['/default/stores/transactions/GIN/list']);
            this.reset();
            this.getAll();
        });
    }

    reset() {
        this.form.reset();
        this.GINDetailsArr = [];
        this.getAll();
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
    getAll() {
        // this.spinner.show();
        // let payload = {
        //   page: this.page,
        //   pageSize: this.pageSize,
        //   search: this.search,
        //   column: this.column,
        //   direction: this.direction,
        // };
        // this.goodInwrdEntryService
        //   .getAllMasterData(payload)
        //   .subscribe((success) => {
        //     this.MRNListArr = success.mrnList;
        //     this.supplierOptionArr = success.suppliers;
        //     this.form.controls['GINDate'].setValue(
        //       this.utilityService.getTodayDate('YYYY-MM-DD')
        //     );
        //     this.form.controls['FXRateINR'].setValue('1');
        //     this.form.controls['GINNumber'].setValue(success.autoIncrementNo);
        //     this.f['supplier'].disable();
        //     this.spinner.hide();
        //     // throw new Error('Method not implemented.');
        //   });
    }

    setMRN(event: any) {
        // this.f['MRNNumber'].setValue(event.target.value)
        let gin = this.MRNListArr.find((x: any) => x._id == this.f["MRNNumber"].value);

        this.f["purchaseCategory"].setValue(gin.supplier.supplierPurchaseType);
        this.f["supplier"].setValue(gin.supplier._id);
        this.f["supplierInvoice"].setValue(gin.supplierInvoice);
        this.f["deliveryLocation"].setValue(gin.deliveryLocation);
        this.f["MRNDate"].setValue(this.utilityService.getFormatDate(gin.MRNDate, "YYYY-MM-DD"));
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
                // GINQty: ele.GRNQty ?? 0,
                GINQty: ele.releasedQty ?? 0,
                standardRate: ele.standardRate,
                purchaseRate: ele.purchaseRate,
                purchaseRateUSD: ele.purchaseRate,
                purchaseRatINR: ele.purchaseRate * (this.f["FXRateINR"].value || 1),
                // lineValueINR: ele.GRNQty * ele.purchaseRate * FXRateINR,
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
        // this.headers.forEach((header: any) => {
        //   if (header.sortable !== column) {
        //     header.direction = '';
        //   }
        // });
        // if (direction === '' || column === '') {
        //   this.GINDetailsArr = this.GINDetailsArr;
        // } else {
        //   this.GINDetailsArr = [...this.GINDetailsArr].sort((a: any, b: any) => {
        //     let x =
        //       typeof a[column] == 'string' ? a[column].toLowerCase() : a[column];
        //     let y =
        //       typeof b[column] == 'string' ? b[column].toLowerCase() : b[column];
        //     const res = x < y ? -1 : x > y ? 1 : 0;
        //     return direction === 'asc' ? res : -res;
        //   });
        // }
    }
    ESCPreview() {
        this.search = "";
    }
    preview() {
        this.search = "";
        // this.GIDetailsArray = this.GIDetailsArray.filter((x: any) => x.GIQty > 0);
        // if (this.GIDetailsArray.length == 0) {
        //   this.toastService.warning(`At least One Row is Required!`);
        // } else {
        //   this.isPreview = true;
        // }
        // this.collection = this.GIDetailsArray.length;
    }
}
