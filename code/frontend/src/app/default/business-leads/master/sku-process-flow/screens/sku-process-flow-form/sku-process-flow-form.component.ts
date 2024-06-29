import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {GRDetails} from "@interfaces/GRDetails";
import {ToastService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {SKUProcessFlowService} from "@services/business-leads";
import {ISKUProcessFlowMasterData} from "@mocks/models/business-leads/masters";

@Component({
    selector: "app-sku-process-flow-form",
    templateUrl: "./sku-process-flow-form.component.html",
    styleUrls: ["./sku-process-flow-form.component.scss"]
})
export class SkuProcessFlowFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    // isConditionPreview = false;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    ESCPreviewArr: any = [];
    itemCategoryList = "";
    skuList = "";
    action: string = "create";
    submitted = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: ISKUProcessFlowMasterData = {
        processMasterList: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null),
        SKU: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        // primaryUnit: new UntypedFormControl(null),
        // artWorkNo: new UntypedFormControl(null),
        PFDetails: new UntypedFormControl([]),
        PFStatus: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private skuProcessFlowService: SKUProcessFlowService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.form.reset();
        this.collection = this.masterData?.processMasterList.length;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();

        if (this.masterData.processMasterList.length == 0) {
            this.toastService.warning("At least one row is Required");
            return;
        }

        let formData: any = {SKU: this.form.value.SKU, PFDetails: this.form.value.PFDetails};
        formData.PFDetails = this.masterData?.processMasterList
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => a.seq - b.seq);

        this.create(formData);
    }

    create(formData: any) {
        this.spinner.show();
        this.skuProcessFlowService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
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

    getInitialData() {
        this.spinner.show();
        this.skuProcessFlowService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.collection = this.masterData?.processMasterList?.length;
            this.spinner.hide();
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.skuProcessFlowService.getBySKUId(params["id"]);
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

                    if (success.PFDetails) {
                        success.PFDetails = success.PFDetails;
                        let specificationListData = this.masterData?.processMasterList;
                        this.masterData.processMasterList = success.PFDetails;
                        for (const ele of success.PFDetails) {
                            specificationListData = specificationListData.filter(
                                (x: any) => x.processId != ele.processId
                            );
                            this.ESCPreviewArr = [...success.PFDetails, ...specificationListData];
                        }
                        // this.masterData.processMasterList = success.PFDetails;
                        this.collection = this.masterData?.processMasterList.length;
                    }
                    this.form.patchValue(success);
                    this.f["SKU"].setValue(success?._id);
                    if (this.action != "create") {
                        // this.isESCPreview = true;
                        // this.isConditionPreview = true;
                        this.isPreview = true;
                        this.form.disable();
                    }
                });
        });
    }
    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.masterData?.processMasterList;
        this.masterData.processMasterList = this.masterData?.processMasterList
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => a.seq - b.seq);
        if (this.masterData.processMasterList.length > 0) {
            this.isPreview = true;
        }
        this.collection = this.masterData?.processMasterList.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        // this.isConditionPreview = false;
        this.masterData.processMasterList = this.ESCPreviewArr;
        this.collection = this.masterData.processMasterList.length;
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.masterData.processMasterList = this.masterData?.processMasterList;
        } else {
            this.masterData.processMasterList = [...this.masterData?.processMasterList].sort(
                (a: any | GRDetails, b: any | GRDetails) => {
                    let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                    let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                    const res = x < y ? -1 : x > y ? 1 : 0;
                    return direction === "asc" ? res : -res;
                }
            );
        }
    }
}
