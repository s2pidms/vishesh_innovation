import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {StockIssueToProductionService} from "@services/planning";
import {mergeMap, of} from "rxjs";
import {STOCK_ISSUE_TO_PRODUCTION_FORM_ERRORS} from "@mocks/validations/planning";
import {ValidationService} from "@core/components";
import {ISFGList, IStockIssueToProductionMasterData} from "@mocks/models/planning/transactions";
import {Location} from "@angular/common";

@Component({
    selector: "app-issue-to-production-form",
    templateUrl: "./issue-to-production-form.component.html"
})
export class IssueToProductionFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    stages: any = [];
    ESCPreviewArr: any = [];
    filterTableData: ISFGList[] = [];
    submitted = false;
    action: string = "create";
    isPreview = false;
    isESCPreview = false;
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    masterData: IStockIssueToProductionMasterData = {
        autoIncrementNo: "",
        stage: [],
        SFGList: []
    };
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        stockIssueCode: new UntypedFormControl(null),
        issueDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        stage: new UntypedFormControl(null, [Validators.required]),
        department: new UntypedFormControl("Production", [Validators.required]),
        jobCardNo: new UntypedFormControl(null),
        stockIssueDetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval")
    });

    constructor(
        private stockIssueToProductionService: StockIssueToProductionService,
        private utilityService: UtilityService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private location: Location
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
        this.form.enable();
        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Remark is Required");
            return;
        }
        if (this.validationService.checkErrors(this.form, STOCK_ISSUE_TO_PRODUCTION_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.stockIssueDetails = this.filterTableData;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo() {
        this.location.back();
    }

    create(formData: any) {
        this.spinner.show();
        this.stockIssueToProductionService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.stockIssueToProductionService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
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
        this.stockIssueToProductionService.getAllMasterData({}).subscribe(result => {
            this.form.controls["stockIssueCode"].setValue(result.autoIncrementNo);
            this.form.controls["department"].setValue("Production");
            this.form.controls["issueDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);

            this.stages = result?.stage;
            this.tableData = result?.SFGList.map((x: any) => {
                return {
                    MRN: x?.MRN,
                    MRNNumber: x?.MRNNumber,
                    item: x?.item,
                    SFGId: x?._id,
                    itemCode: x?.itemCode,
                    itemName: x?.itemName,
                    stage: x?.stage,
                    width: x?.outputDetails?.width,
                    length: x?.outputDetails?.length,
                    sqmPerRoll: x?.outputDetails?.sqmPerRoll,
                    sheetQty: x?.outputDetails?.sheetQty,
                    qty: x?.outputDetails?.noOfSlits,
                    UOM: x?.UOM,
                    PPICIRQty: x?.outputDetails?.sqmTotal,
                    issueQty: 0
                };
            });
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.stockIssueToProductionService.getById(params["id"]);
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

                    if (success.issueDate) {
                        success.issueDate = this.utilityService.getFormatDate(success.issueDate, "YYYY-MM-DD");
                    }

                    success.status = this.statusArr[this.action];

                    this.filterTableData = success?.stockIssueDetails;
                    this.form.patchValue(success);

                    if (this.action != "create") {
                        this.form.disable();
                        this.form.controls["remarks"].enable();
                    }
                });
        });
    }

    setStage(ev: any) {
        this.isESCPreview = false;
        this.isPreview = false;
        this.filterTableData = this.tableData;
        this.filterTableData = this.filterTableData.filter((x: any) => x.stage == ev.target.value);
        this.collection = this.filterTableData.length;
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = this.filterTableData;
        this.filterTableData = this.filterTableData.filter((x: any) => x.issueQty > 0);
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

    setIssueQty(index: any) {
        index = index + (this.page - 1) * this.pageSize;
        if (this.filterTableData[index].issueQty > +this.filterTableData[index].PPICIRQty.toFixed(2)) {
            this.filterTableData[index].issueQty = 0;
            this.toastService.warning("Issue Qty cannot be greater than PPIC-IR Qty. ");
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
