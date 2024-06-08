import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService} from "@core/services";
import {GRDetails} from "@interfaces/GRDetails";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SpinnerService} from "@core/services";
import {UtilityService} from "@core/services";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {RMSpecificationMasterService} from "@services/quality";
import {ValidationService} from "@core/components";
import {RM_SPECIFICATION_MASTER_FORM_ERRORS} from "@mocks/validations/quality/rmSpecification.validation";
import {IRMSpecificationsMasterData} from "@mocks/models/quality/master";

@Component({
    selector: "app-rm-specifications-form",
    templateUrl: "./rm-specifications-form.component.html"
})
export class RmSpecificationsFormComponent implements OnInit {
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
    filterItemList: any = [];
    userData: any = {};
    submitted = false;
    FGInwardDate = this.utilityService.getTodayDate("YYYY-MM-DD");
    itemCategoryList = "";
    itemsList = "";
    enteredBy = "";
    action: string = "create";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    masterData: IRMSpecificationsMasterData = {
        autoIncrementNo: "",
        itemCategoryListOptions: [],
        itemsListOptions: [],
        specificationList: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        rmSpecificationCode: new UntypedFormControl(null),
        itemCategory: new UntypedFormControl(null, [Validators.required]),
        item: new UntypedFormControl(null),
        itemCode: new UntypedFormControl(null, [Validators.required]),
        itemName: new UntypedFormControl(null),
        itemDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        specificationInfo: new UntypedFormControl([]),
        status: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private rmSpecificationMasterService: RMSpecificationMasterService,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService,
        private validationService: ValidationService,
        private activatedRoute: ActivatedRoute,
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
        this.masterData.itemCategoryListOptions = [];
        this.collection = this.masterData?.specificationList.length;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, RM_SPECIFICATION_MASTER_FORM_ERRORS)) {
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
        this.rmSpecificationMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.rmSpecificationMasterService.update(formData._id, formData).subscribe(success => {
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
        this.form.controls["item"].setValue(null);
        this.form.controls["itemCode"].setValue(null);
        this.form.controls["itemName"].setValue(null);
        this.form.controls["itemDescription"].setValue(null);
        this.form.controls["UOM"].setValue(null);
        this.filterItemList = this.masterData?.itemsListOptions;
        this.filterItemList = this.filterItemList.filter((x: any) => x.itemType == event.target.value);
    }
    setItemDetails(event: any) {
        this.form.controls["item"].setValue(event._id);
        this.form.controls["itemCode"].setValue(event.itemCode);
        this.form.controls["itemName"].setValue(event.itemName);
        this.form.controls["itemDescription"].setValue(event.itemDescription);
        this.form.controls["UOM"].setValue(event.orderInfoUOM);
    }
    getInitialData() {
        let payload = {
            itemCategories: this.masterData?.itemCategoryListOptions ? this.masterData?.itemCategoryListOptions : null
        };
        this.rmSpecificationMasterService.getAllMasterData(payload).subscribe(result => {
            this.masterData = result;
            this.collection = this.masterData?.specificationList.length;

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.rmSpecificationMasterService.getById(params["id"]);
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
                        success.specificationInfo = success?.specificationInfo;
                        let specificationListData = this.masterData?.specificationList;
                        this.masterData.specificationList = success?.specificationInfo;

                        for (const ele of success?.specificationInfo) {
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

                    console.log("success?.specificationInfo", success.specificationInfo);

                    if (
                        this.action == "view" &&
                        (success?.specificationInfo?.length > 0 ||
                            !success?.specificationInfo ||
                            success?.specificationInfo?.length == 0)
                    ) {
                        this.masterData.specificationList = success?.specificationInfo;
                    }
                    this.collection = this.masterData?.specificationList?.length;
                    this.filterItemList = this.masterData?.itemsListOptions;
                    this.filterItemList = this.filterItemList.filter((x: any) => x.itemType == success?.itemCategory);
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
        this.collection = this.masterData?.specificationList.length;
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
}
