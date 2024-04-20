import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {SKUCostSheetService} from "@services/planning";
import {SKU_COST_SHEET_FORM_ERRORS} from "@mocks/validations/planning";
import {CostSheetDetailsModalComponent} from "../cost-sheet-details-modal/cost-sheet-details-modal.component";
import {ISKUCostSheetMasterData} from "@mocks/models/planning/masters";
import {ProductCategoryModalComponent} from "src/app/default/sales/master/sku/screens/product-category-modal/product-category-modal.component";

@Component({
    selector: "app-sku-cost-sheet-form",
    templateUrl: "./sku-cost-sheet-form.component.html"
})
export class SkuCostSheetFormComponent implements OnInit {
    oldAssetAllocationData: any = [];
    SKUList: any = [];
    costDetailsArr: any = [];
    submitted = false;
    action: string = "create";
    masterData: ISKUCostSheetMasterData = {
        autoIncrementNo: "",
        productCategories: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private skuCostSheetService: SKUCostSheetService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        SKUCostSheetNo: new UntypedFormControl(null),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        SKU: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null, [Validators.required]),
        SKUName: new UntypedFormControl(null, [Validators.required]),
        SKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        sellingPrice: new UntypedFormControl(null, [Validators.required]),
        SKUCostDetails: new UntypedFormControl([])
    });

    ngOnInit(): void {
        this.getInitialData();
    }
    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.SKUList = [];
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, SKU_COST_SHEET_FORM_ERRORS)) {
            return;
        }

        let valueCheckArr = this.costDetailsArr.filter((x: any) =>
            ["Direct Material", "Direct Labour", "Direct Expenses", "Profit"].includes(x.costHead)
        );
        if (valueCheckArr.some((x: any) => x.costPerUnit <= 0) == true) {
            this.toastService.warning(
                "Ensure Direct Material, Direct Labour, Direct Expenses, and Profit values are greater than 0"
            );
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        formData.SKUCostDetails = this.costDetailsArr;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.skuCostSheetService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.skuCostSheetService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.skuCostSheetService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["SKUCostSheetNo"].setValue(this.masterData?.autoIncrementNo);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.skuCostSheetService.getById(params["id"]);
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
                    this.costDetailsArr = success.SKUCostDetails;

                    this.form.patchValue(success);
                    this.form.controls["productCategory"].disable();
                    this.form.controls["SKUNo"].disable();
                    this.form.controls["SKUName"].disable();
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }

    getSKUData() {
        this.SKUList = [];
        this.form.controls["SKU"].setValue(null);
        this.form.controls["SKUNo"].setValue(null);
        this.form.controls["SKUName"].setValue(null);
        this.form.controls["SKUDescription"].setValue(null);
        this.form.controls["UOM"].setValue(null);
        this.form.controls["sellingPrice"].setValue(null);
        let productCategory = this.form.controls["productCategory"].value;
        this.spinner.show();
        this.skuCostSheetService.getSKUInCostSheet({category: productCategory}).subscribe(success => {
            if (success) {
                this.SKUList = success;
            }
            this.spinner.hide();
        });
    }

    setSKUDetails(ev: any) {
        this.form.controls["SKU"].setValue(ev?._id);
        this.form.controls["SKUNo"].setValue(ev?.SKUNo);
        this.form.controls["SKUName"].setValue(ev?.SKUName);
        this.form.controls["SKUDescription"].setValue(ev?.SKUDescription);
        this.form.controls["UOM"].setValue(ev?.primaryUnit);
        this.skuCostSheetService.getSKUCostSheetDetailsBySKUId(ev?._id).subscribe(success => {
            if (success) {
                this.costDetailsArr = success;
                // this.setSellingPrice();
            }
            this.spinner.hide();
        });
    }

    setSellingPrice() {
        let sellingPrice = this.costDetailsArr.find((x: any) => x.costHead == "Selling Price")?.costPerUnit || 0;
        this.form.controls["sellingPrice"].setValue(+sellingPrice.toFixed(2));
    }

    openCostDetailsModal() {
        if (!this.form.controls["SKUNo"].value) {
            this.toastService.warning("First Select SKU");
            return;
        }

        const modalRef = this.modalService.open(CostSheetDetailsModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.costDetailsArr = this.costDetailsArr;
        modalRef.componentInstance.oldAssetAllocationData = this.oldAssetAllocationData;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.costDetailsArr = success;
                    this.setSellingPrice();
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
                    this.getSKUData();
                }
            },
            (reason: any) => {}
        );
    }
}
