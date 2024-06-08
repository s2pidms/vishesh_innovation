import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddItemUOMComponent} from "@shared/modals";
import {PRODUCT_MASTER_SOURCE_OF_MFG} from "@mocks/constant";
import {ProductAttributesModalComponent} from "../components";
import {ProductMasterService} from "@services/planning";
import {PRODUCT_MASTER_FORM_ERRORS} from "@mocks/validations/planning";
import {ToastService, SpinnerService, UtilityService, AppGlobalService} from "@core/services";
import {IProductMasterData} from "@mocks/models/planning/masters";
import {ProductCategoryModalComponent} from "src/app/default/sales/master/sku/screens/components";

@Component({
    selector: "app-product-master-form",
    templateUrl: "./product-master-form.component.html"
})
export class ProductMasterFormComponent implements OnInit {
    active: number = 1;
    submitted = false;
    action: string = "create";
    productSourceOfMFGObj: any = PRODUCT_MASTER_SOURCE_OF_MFG;
    sourceOfMFGArr: any = this.productSourceOfMFGObj.getAllProductSourceOfMFG();
    salesUOMUintMasterOptions: any = [];
    masterData: IProductMasterData = {
        autoIncrementNo: "",
        hsnCodes: [],
        productCategories: [],
        UOMOptions: [],
        WXLDimensionsUnit: []
    };
    UOMDefaultValueOptions: any = [];
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        productNo: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        productName: new UntypedFormControl(null, [Validators.required]),
        productDescription: new UntypedFormControl(null, [Validators.required]),
        hsn: new UntypedFormControl(null, [Validators.required]),
        productCode: new UntypedFormControl(null),
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        unitCost: new UntypedFormControl(null, [Validators.required]),
        secondaryUnit: new UntypedFormControl(null),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),
        conversionFactor: new UntypedFormControl(null),
        unitConversionFlag: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        sourceOfMFG: new UntypedFormControl(null),
        shelfLife: new UntypedFormControl(null),
        storageTemp: new UntypedFormControl(null),
        storageHumidity: new UntypedFormControl(null),
        specialStorageInstruction: new UntypedFormControl(null),
        productionRemarks: new UntypedFormControl(null),

        status: new UntypedFormControl("Active"),
        BOMDimensionInfo: new UntypedFormGroup({
            unit1: new UntypedFormControl("mm"),
            unit2: new UntypedFormControl("mm"),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            mSqArea: new UntypedFormControl(null)
        })
    });

    get f() {
        return this.form.controls;
    }
    get bomDimData() {
        return this.form.get("BOMDimensionInfo") as UntypedFormGroup;
    }

    constructor(
        private productMasterService: ProductMasterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.salesUOMUintMasterOptions = this.appGlobalService.salesUOMUintMasterOptions;
        AppGlobalService;
        this.getInitialData();

        this.UOMDefaultValueOptions = this.appGlobalService?.UOMDefaultValueOptions;
        if (this.UOMDefaultValueOptions?.length > 0) {
            if (!this.f["primaryUnit"].value) {
                let primaryUnitData: any = null;
                primaryUnitData = this.findValue(this.UOMDefaultValueOptions, "SALES_UOM");
                this.f["primaryUnit"].setValue(primaryUnitData);
            }
            if (!this.f["secondaryUnit"].value) {
                let secondaryUnitData: any = null;
                secondaryUnitData = this.findValue(this.UOMDefaultValueOptions, "SALES_SECONDARY_UNIT");
                this.f["secondaryUnit"].setValue(secondaryUnitData);
            }
        }
    }
    findValue(array: any, value: any) {
        return array?.find((x: any) => x?.parameterLabel == value)?.parameterName;
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, PRODUCT_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;

        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.productMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.productMasterService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    getInitialData() {
        this.spinner.show();
        this.productMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["productNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.productMasterService.getById(params["id"]);
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
                    success.status = success.status;
                    this.form.patchValue(success);
                    this.form.controls["productCategory"].disable();
                    this.form.controls["hsn"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    openUOMDetailsModal() {
        const modalRef = this.modalService.open(AddItemUOMComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.ModalUOMsUnit = this.salesUOMUintMasterOptions;
        modalRef.componentInstance.WXLDimensionsUnit = this.masterData?.WXLDimensionsUnit;
        modalRef.componentInstance.dualUnits = {
            primaryUnit: this.form.value.primaryUnit,
            secondaryUnit: this.form.value.secondaryUnit,
            unitConversionFlag: this.form.value.unitConversionFlag,
            primaryConversion: this.form.value.primaryConversion,
            secondaryConversion: this.form.value.secondaryConversion,
            primaryToSecondaryConversion: this.form.value.primaryToSecondaryConversion,
            secondaryToPrimaryConversion: this.form.value.secondaryToPrimaryConversion
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openAttributesModal() {
        const modalRef = this.modalService.open(ProductAttributesModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.remarks = this.form.controls["productionRemarks"].value;

        modalRef.componentInstance.storage = {
            shelfLife: this.form.controls["shelfLife"].value,
            storageTemp: this.form.controls["storageTemp"].value,
            storageHumidity: this.form.controls["storageHumidity"].value,
            specialStorageInstruction: this.form.controls["specialStorageInstruction"].value
        };
        modalRef.componentInstance.bomDimData = this.bomDimData.value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["productionRemarks"].setValue(success.remarks);
                    this.form.patchValue(success.storage);
                    this.form.controls["BOMDimensionInfo"].patchValue(success.bomDimData);
                }
            },
            (reason: any) => {}
        );
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
                }
            },
            (reason: any) => {}
        );
    }
}
