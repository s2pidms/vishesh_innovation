import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService} from "@core/services";
import {DISCOUNT_MANAGEMENT_FORM_ERRORS} from "@mocks/validations/sales";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SpinnerService, StorageService, UtilityService} from "@core/services";
import {ApplyDiscountComponent} from "../apply-discount/apply-discount.component";
import {DiscountManagementService} from "@services/sales/discountManagement.service";
import {IDiscountManagementMasterData} from "@mocks/models/sales/master";

@Component({
    selector: "app-discount-management-form",
    templateUrl: "./discount-management-form.component.html"
})
export class DiscountManagementFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    customerDiscountInfo: any = [];
    openPONumberArr: any = [];
    customerOptions: any = [];
    displayName: any = {};
    submitted = false;
    popupResponse = "No";
    isPreview = false;
    action: string = "create";
    isApplyDisable: boolean = false;
    ESCPreviewArr: any = [];
    isESCPreview = false;
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    masterData: IDiscountManagementMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: []
    };
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        discountNo: new UntypedFormControl(null),
        discountDescription: new UntypedFormControl(null),
        customerCategory: new UntypedFormControl(null),
        customer: new UntypedFormControl(null),
        customerName: new UntypedFormControl(null, [Validators.required]),
        globalDiscount: new UntypedFormControl(0),
        customerDiscountInfo: new UntypedFormControl([])
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private discountManagementService: DiscountManagementService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.displayName = this.storageService.get("menuTitle")?.title;
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
                this.flag = -1;
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
        this.isPreview = false;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, DISCOUNT_MANAGEMENT_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.customerDiscountInfo = this.customerDiscountInfo;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.discountManagementService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.discountManagementService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.customerDiscountInfo = [];
        this.customerOptions = [];
        this.collection = this.customerDiscountInfo.length;
        this.openPONumberArr = [];
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.discountManagementService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["discountNo"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.discountManagementService.getById(params["id"]);
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

                    this.discountManagementService
                        .getSKUListByCustomer({customer: success?.customer})
                        .subscribe(SKUData => {
                            // this.customerDiscountInfo = SKUData;
                            // this.collection = this.customerDiscountInfo.length;

                            success.customerDiscountInfo = success.customerDiscountInfo;
                            let SKUInfoData = SKUData;
                            for (const ele of success.customerDiscountInfo) {
                                SKUInfoData = SKUInfoData.filter((x: any) => x.SKUNo != ele.SKUNo);
                                this.ESCPreviewArr = [...success.customerDiscountInfo, ...SKUInfoData];
                            }
                        });

                    this.customerDiscountInfo = success.customerDiscountInfo;
                    this.collection = this.customerDiscountInfo.length;

                    this.form.patchValue(success);

                    this.setApplyDoc();
                });
        });
    }

    customerValueChange(ele: any) {
        this.f["customer"].setValue(ele?.customer);
        this.f["customerCategory"].setValue(ele?.customerCategory);
        this.spinner.show();
        this.customerOptions = [];
        this.discountManagementService.getSKUListByCustomer({customer: ele?.customer}).subscribe(success => {
            this.spinner.hide();
            this.customerDiscountInfo = success;
            this.collection = this.customerDiscountInfo.length;
        });
    }

    getCustomers(ev: any) {
        this.f["customer"].setValue(null);
        this.f["customerName"].setValue(null);
        this.customerDiscountInfo = [];
        this.customerOptions = [];
        this.spinner.show();
        this.discountManagementService.getCustomerByCategory({customerCategory: ev.target.value}).subscribe(success => {
            this.spinner.hide();
            this.customerOptions = success;
        });
    }

    setApplyDoc() {
        let globalDiscount = this.f["globalDiscount"].value;
        if (!globalDiscount) {
            this.isApplyDisable = false;
        } else {
            this.isApplyDisable = true;
        }
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.customerDiscountInfo = this.ESCPreviewArr;
        this.collection = this.customerDiscountInfo.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.customerDiscountInfo;
        this.customerDiscountInfo = this.customerDiscountInfo.filter((x: any) => x.discountInfo.discountValue);
        if (this.customerDiscountInfo.length) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.customerDiscountInfo.length;
    }

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.customerDiscountInfo = this.customerDiscountInfo;
        } else {
            this.customerDiscountInfo = [...this.customerDiscountInfo].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    openApplyDiscountModal(item: any) {
        const modalRef = this.modalService.open(ApplyDiscountComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        let index = this.customerDiscountInfo.findIndex((x: any) => x.SKU == item?.SKU);
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.discountInfo = this.customerDiscountInfo[index].discountInfo;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.customerDiscountInfo[index].discountInfo = success;
                }
            },
            (reason: any) => {}
        );
    }
}
