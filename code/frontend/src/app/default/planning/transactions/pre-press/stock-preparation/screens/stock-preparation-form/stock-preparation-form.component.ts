import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SpinnerService, ToastService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {SFGStockService} from "@services/planning";
import {WIPInventoryService} from "@services/planning";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {IRMDetailsOfRoll, IRollToRollMasterData, ISFGDetailsOfRoll} from "@mocks/models/planning/transactions";
import {STOCK_PREPARATION_ERRORS} from "@mocks/validations/planning/stockPreparation.validation";

@Component({
    selector: "app-stock-preparation-form",
    templateUrl: "./stock-preparation-form.component.html"
})
export class StockPreparationFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    action: string = "create";
    isPreview = false;
    isESCPreview = false;
    selectedData: any = {};
    RMTableData: IRMDetailsOfRoll[] = [];
    // SFGTableData: ISFGDetailsOfRoll[] = [];
    ESCPreviewArr: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: IRollToRollMasterData = {
        autoIncrementNo: "",
        processNames: [],
        machineNames: [],
        productionShifts: [],
        jobCardList: []
    };
    sheetToSheetData: any = [];

    trackByFn(index: number, item: any) {
        return item?._id;
    }
    form = new UntypedFormGroup({
        SFGStockCode: new UntypedFormControl(null),
        processName: new UntypedFormControl(null, [Validators.required]),
        machineName: new UntypedFormControl(null, [Validators.required]),
        processDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        productionShift: new UntypedFormControl(null, [Validators.required]),
        productionStaff: new UntypedFormControl(null, [Validators.required]),
        jobCardRef: new UntypedFormControl(null)
    });

    constructor(
        private router: Router,
        private spinner: SpinnerService,
        private sfgStockService: SFGStockService,
        private wipInventoryService: WIPInventoryService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private toastService: ToastService
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
                this.page = 1;
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

    setSelectData(u: any) {
        this.selectedData = u;
    }
    navigateTo() {
        if (this.validationService.checkErrors(this.form, STOCK_PREPARATION_ERRORS)) {
            return;
        }

        let path = "";
        let obj: any = {};
        if (["Roll To Roll"].includes(this.f["processName"].value)) {
            path = "default/planning/transactions/pre_press/stock_preparation/roll_to_roll";
            obj.stage = "Roll To Roll";
        } else if (["Roll To Sheet"].includes(this.f["processName"].value)) {
            path = "default/planning/transactions/pre_press/stock_preparation/roll_to_sheet";
            obj.stage = "Roll To Sheet";
        } else if (["Sheet To Sheet"].includes(this.f["processName"].value)) {
            path = "default/planning/transactions/pre_press/stock_preparation/sheet_to_sheet";
            obj.stage = "Sheet To Sheet";
        }
        obj.type = this.selectedData?.type;
        obj._id = this.selectedData?._id;
        this.router.navigate([path], {
            state: {data: JSON.stringify(obj), formData: JSON.stringify(this.form.value)}
        });
    }

    setSheetToSheetData() {
        if (["Sheet To Sheet"].includes(this.f["processName"].value) && this.sheetToSheetData.length == 0) {
            this.spinner.show();
            this.sfgStockService.getSheetToSheetList({}).subscribe(success => {
                console.log("success", success);
                this.sheetToSheetData = success;
                this.collection = this.sheetToSheetData.length;
                this.spinner.hide();
            });
        } else {
            this.collection = this.RMTableData.length;
        }
    }

    reset() {
        this.form.reset();
        this.selectedData = {};
        this.getInitialData();
    }

    preview() {
        this.isESCPreview = true;

        this.search = "";
        if (["Roll To Sheet", "Roll To Roll"].includes(this.f["processName"].value)) {
            this.ESCPreviewArr = this.RMTableData;
            this.RMTableData = this.RMTableData.filter((x: any) => x._id == this.selectedData._id);
            if (this.RMTableData.length > 0) {
                this.isPreview = true;
            } else {
                this.toastService.warning("At least One Row is Required");
                this.isPreview = false;
            }
            this.collection = this.RMTableData.length;
        } else {
            this.ESCPreviewArr = this.sheetToSheetData;
            this.sheetToSheetData = this.sheetToSheetData.filter((x: any) => x._id == this.selectedData._id);
            if (this.sheetToSheetData.length > 0) {
                this.isPreview = true;
            } else {
                this.toastService.warning("At least One Row is Required");
                this.isPreview = false;
            }
            this.collection = this.sheetToSheetData.length;
        }
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        if (["Roll To Sheet", "Roll To Roll"].includes(this.f["processName"].value)) {
            this.RMTableData = this.ESCPreviewArr;
            this.collection = this.RMTableData.length;
        } else {
            this.sheetToSheetData = this.ESCPreviewArr;
            this.collection = this.sheetToSheetData.length;
        }
    }

    getInitialData() {
        this.spinner.show();
        this.sfgStockService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;

            this.f["SFGStockCode"].setValue(result.autoIncrementNo);
            this.f["processDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));

            this.setTableData();

            this.spinner.hide();
        });
    }

    setTableData() {
        this.spinner.show();
        this.sfgStockService.getAll({}).subscribe(success => {
            if (success) {
                this.RMTableData = success;
            }

            this.collection = this.RMTableData.length;
            this.spinner.hide();
        });
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.RMTableData = this.RMTableData;
        } else {
            this.RMTableData = [...this.RMTableData].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
