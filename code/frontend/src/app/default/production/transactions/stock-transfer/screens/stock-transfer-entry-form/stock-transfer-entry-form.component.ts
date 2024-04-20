import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {StockTransferToStoreService} from "@services/planning";
import {STOCK_TRANSFER_TO_STORES_FORM_ERRORS} from "@mocks/validations/planning";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {IStockTransferMasterData} from "@mocks/models/planning/transactions";

@Component({
    selector: "app-stock-transfer-entry-form",
    templateUrl: "./stock-transfer-entry-form.component.html"
})
export class StockTransferEntryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    departments: any = [];
    ESCPreviewArr: any = [];
    filterTableData: any = [];
    itemList: any = [];
    itemCategoryList: any = [];
    submitted = false;
    action: string = "create";
    isPreview = false;
    isESCPreview = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: IStockTransferMasterData = {
        autoIncrementNo: "",
        itemCategoryList: [],
        WIPList: []
    };
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    form = new UntypedFormGroup({
        stockTransferCode: new UntypedFormControl(""),
        stockTransferDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        itemCategory: new UntypedFormControl(null, [Validators.required]),
        department: new UntypedFormControl("Stores", [Validators.required]),
        remarks: new UntypedFormControl(""),
        stockTransferDetails: new UntypedFormControl([])
    });

    constructor(
        private stockTransferToStoreService: StockTransferToStoreService,
        private utilityService: UtilityService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }
    get f() {
        return this.form.controls;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, STOCK_TRANSFER_TO_STORES_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.stockTransferDetails = this.filterTableData;

        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        this.stockTransferToStoreService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
        });
    }

    reset() {
        this.form.reset();
        this.filterTableData = [];
        this.getInitialData();
        this.collection = this.filterTableData.length;
    }

    getInitialData() {
        this.spinner.show();
        this.stockTransferToStoreService.getAllMasterData({}).subscribe(result => {
            this.form.controls["stockTransferCode"].setValue(result.autoIncrementNo);
            this.form.controls["department"].setValue("Stores");
            this.form.controls["stockTransferDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.departments = result?.department;
            this.itemCategoryList = result?.itemCategoryList;
            this.tableData = result?.WIPList.map((x: any) => {
                return {
                    MRN: x?.MRN,
                    MRNNumber: x?.MRNNumber,
                    item: x?.item,
                    WIPId: x?._id,
                    itemCode: x?.itemCode,
                    itemName: x?.itemName,
                    itemDescription: x?.itemDescription,
                    unitConversion: x?.unitConversion,
                    UOM: x?.UOM,
                    PPICIRQty: x?.PPICQty,
                    itemType: x?.itemType,
                    GINDate: x?.GINDate,
                    shelfLife: x?.shelfLife,
                    transferQty: 0,
                    status: x?.status
                };
            });
            this.spinner.hide();
        });
    }

    filterItemCategory(ev: any) {
        this.isESCPreview = false;
        this.isPreview = false;
        this.filterTableData = this.tableData;
        this.filterTableData = this.filterTableData.filter((x: any) => x.itemType == ev.category);
        this.collection = this.filterTableData.length;
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = this.filterTableData;
        this.filterTableData = this.filterTableData.filter((x: any) => x.transferQty > 0);
        if (this.filterTableData.length) {
            this.isPreview = true;
            this.isESCPreview = true;
        }
        this.collection = this.filterTableData.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.filterTableData = this.ESCPreviewArr;
        this.collection = this.filterTableData.length;
    }

    setTransferQty(index: any) {
        index = index + (this.page - 1) * this.pageSize;
        if (this.filterTableData[index].transferQty > this.filterTableData[index].PPICIRQty) {
            this.filterTableData[index].transferQty = 0;
            this.toastService.warning("Transfer Qty. should not be greater than PPIC-IR Qty. ");
        }
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.filterTableData = this.filterTableData;
        } else {
            this.filterTableData = [...this.filterTableData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
