import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GRDetails} from "@interfaces/GRDetails";
import {ToastService, UtilityService} from "@core/services";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {ProductSpecificationMasterService} from "@services/quality";
import {ValidationService} from "@core/components";
import {PRODUCT_SPECIFICATION_MASTER_FORM_ERRORS} from "@mocks/validations/quality/productSpecification.validation";
import {SpinnerService} from "@core/services";
import {IProductSpecificationsMasterData} from "@mocks/models/quality/master";
import {ProductCategoryModalComponent} from "src/app/default/sales/master/sku/screens/components";

@Component({
    selector: "app-product-specifications-form",
    templateUrl: "./product-specifications-form.component.html"
})
export class ProductSpecificationsFormComponent implements OnInit {
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
    masterData: IProductSpecificationsMasterData = {
        autoIncrementNo: "",
        productCategories: [],
        SKUOptions: [],
        specificationList: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        productSpecificationCode: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        SKU: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null, [Validators.required]),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        specificationInfo: new UntypedFormControl([]),
        status: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private productSpecificationMasterService: ProductSpecificationMasterService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
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
        this.masterData.productCategories = [];
        this.collection = this.masterData?.specificationList.length;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, PRODUCT_SPECIFICATION_MASTER_FORM_ERRORS)) {
            return;
        }

        if (this.masterData.specificationList.length == 0) {
            this.toastService.warning("At least one row is Required");
            return;
        }

        let formData: any = this.form.value;
        if (this.action == "copy") {
            delete formData._id;
        }
        formData.specificationInfo = this.masterData?.specificationList
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => a.seq - b.seq);
        if (
            this.masterData.specificationList.every((x: any) => x.specValue) &&
            this.masterData.specificationList.every((x: any) => x.LTL) &&
            this.masterData.specificationList.every((x: any) => x.UTL)
        ) {
            formData.status = "Active";
        } else {
            formData.status = "Inactive";
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.productSpecificationMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    update(formData: any) {
        this.spinner.show();
        this.productSpecificationMasterService.update(formData._id, formData).subscribe(success => {
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
    getItems(event: any) {
        this.form.controls["SKU"].setValue(null);
        this.form.controls["SKUNo"].setValue(null);
        this.form.controls["SKUName"].setValue(null);
        this.form.controls["SKUDescription"].setValue(null);
        this.form.controls["UOM"].setValue(null);
        this.filterSKUList = this.masterData?.SKUOptions;
        this.filterSKUList = this.filterSKUList.filter((x: any) => x.productCategory == event?.value);
    }
    setItemDetails(event: any) {
        this.form.controls["SKU"].setValue(event._id);
        this.form.controls["SKUNo"].setValue(event.SKUNo);
        this.form.controls["SKUName"].setValue(event.SKUName);
        this.form.controls["SKUDescription"].setValue(event.SKUDescription);
        this.form.controls["UOM"].setValue(event.primaryUnit);
    }
    getInitialData() {
        this.spinner.show();
        this.productSpecificationMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.collection = this.masterData?.specificationList.length;
            this.spinner.hide();
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.productSpecificationMasterService.getById(params["id"]);
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

                    if (!success?.specificationInfo || success?.specificationInfo?.length == 0) {
                        this.masterData.specificationList = this.masterData.specificationList;
                    } else {
                        success.specificationInfo = success.specificationInfo;
                        let specificationListData = this.masterData?.specificationList;
                        this.masterData.specificationList = success.specificationInfo;
                        for (const ele of success.specificationInfo) {
                            specificationListData = specificationListData.filter(
                                (x: any) => x.specificationCode != ele.specificationCode
                            );
                            this.masterData.specificationList = [
                                ...success.specificationInfo,
                                ...specificationListData
                            ];
                            // this.ESCPreviewArr = [...success.specificationInfo, ...specificationListData];
                        }
                    }
                    this.collection = this.masterData?.specificationList.length;

                    if (
                        this.action == "view" &&
                        (success?.specificationInfo?.length > 0 ||
                            !success?.specificationInfo ||
                            success?.specificationInfo?.length == 0)
                    ) {
                        this.masterData.specificationList = success?.specificationInfo;
                    }
                    this.filterSKUList = this.masterData?.SKUOptions;
                    this.filterSKUList = this.filterSKUList.filter(
                        (x: any) => x.productCategory == success?.productCategory
                    );

                    this.form.patchValue(success);
                    if (this.action != "create") {
                        // this.isESCPreview = true;
                        // this.isConditionPreview = true;
                        this.isPreview = false;
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
        this.ESCPreviewArr = this.masterData?.specificationList;
        this.masterData.specificationList = this.masterData?.specificationList
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => a.seq - b.seq);
        if (this.masterData.specificationList.length > 0) {
            this.isPreview = true;
        }
        this.collection = this.masterData?.specificationList.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        // this.isConditionPreview = false;
        this.masterData.specificationList = this.ESCPreviewArr;
        this.collection = this.masterData.specificationList.length;
    }
    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.masterData.specificationList = this.masterData?.specificationList;
        } else {
            this.masterData.specificationList = [...this.masterData?.specificationList].sort(
                (a: any | GRDetails, b: any | GRDetails) => {
                    let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                    let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                    const res = x < y ? -1 : x > y ? 1 : 0;
                    return direction === "asc" ? res : -res;
                }
            );
        }
    }
    openProductCategoryModal() {
        const modalRef = this.modalService.open(ProductCategoryModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.productCategoryList = this.masterData?.productCategories;
        modalRef.componentInstance.productCategory = this.form.controls["productCategory"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["productCategory"].setValue(success?.selectedProductCategory);
                    this.getItems({value: success?.selectedProductCategory});
                }
            },
            (reason: any) => {}
        );
    }
}
