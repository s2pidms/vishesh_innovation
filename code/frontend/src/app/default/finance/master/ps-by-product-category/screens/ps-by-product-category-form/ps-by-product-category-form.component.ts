import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {GRDetails} from "@interfaces/GRDetails";
import {ToastService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {PRODUCT_CATEGORY_SPECIFICATION_MASTER_FORM_ERRORS} from "@mocks/validations/quality/productCategorySpecification.validation";
import {Location} from "@angular/common";
import {IPSByProductCategoryMasterData} from "@mocks/models/finance/masters";
import {PSByProductCategoryService} from "@services/finance";

@Component({
    selector: "app-ps-by-product-category-form",
    templateUrl: "./ps-by-product-category-form.component.html"
})
export class PSByProductCategoryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    isConditionPreview = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    FGINDetailsArray: any = [];
    ESCPreviewArr: any = [];
    filterSKUList: any = [];
    itemCategoryList = "";
    skuList = "";
    action: string = "create";
    submitted = false;
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: IPSByProductCategoryMasterData = {
        autoIncrementNo: "",
        productCategoryOptions: [],
        processMasterList: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null),
        productNumber: new UntypedFormControl(null, [Validators.required]),
        productCode: new UntypedFormControl(null),
        displayProductCategoryName: new UntypedFormControl(null),
        application: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        processInfo: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private psByProductCategoryService: PSByProductCategoryService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private validationService: ValidationService,
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
        if (this.validationService.checkErrors(this.form, PRODUCT_CATEGORY_SPECIFICATION_MASTER_FORM_ERRORS)) {
            return;
        }

        if (this.masterData.processMasterList.length == 0) {
            this.toastService.warning("At least one row is Required");
            return;
        }

        let formData: any = this.form.value;
        if (this.action == "copy") {
            delete formData._id;
        }
        formData.processInfo = this.masterData?.processMasterList
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => a.seq - b.seq);

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.psByProductCategoryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    update(formData: any) {
        this.spinner.show();
        this.psByProductCategoryService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
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
    setItemDetails(event: any) {
        this.form.controls["productCategory"].setValue(event._id);
        this.form.controls["productNumber"].setValue(event.productNumber);
        this.form.controls["productCode"].setValue(event.productCode);
        this.form.controls["displayProductCategoryName"].setValue(event.displayProductCategoryName);
        this.form.controls["application"].setValue(event.application);
    }
    getInitialData() {
        this.spinner.show();
        this.psByProductCategoryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.collection = this.masterData?.processMasterList.length;
            this.f["status"].setValue("Active");
            this.spinner.hide();
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.psByProductCategoryService.getById(params["id"]);
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

                    success.processInfo = success.processInfo;
                    let processInfoListData = this.masterData?.processMasterList;
                    this.masterData.processMasterList = success.processInfo;
                    for (const ele of success.processInfo) {
                        processInfoListData = processInfoListData.filter((x: any) => x.processId != ele.processId);
                        this.ESCPreviewArr = [...success.processInfo, ...processInfoListData];
                    }
                    this.collection = this.masterData?.processMasterList.length;
                    this.form.patchValue(success);
                    if (this.action != "create") {
                        this.isESCPreview = true;
                        this.isConditionPreview = true;
                        this.isPreview = true;
                        this.form.disable();
                    }
                    if (this.action == "copy") {
                        this.form.enable();
                        delete success._id;
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
        this.isConditionPreview = false;
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
