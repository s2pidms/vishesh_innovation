import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ESP_CATEGORY_FORM_ERRORS} from "@mocks/validations/settings";
import {SKUCategoryMasterService} from "@services/settings";
import {SpinnerService} from "@core/services";
import {ProductCategoryMasterService} from "@services/settings/productCategoryMaster.service";
import {PRODUCT_CATEGORY_FORM_ERRORS} from "@mocks/validations/settings/productCategory.validation";

@Component({
    selector: "app-product-category-form",
    templateUrl: "./product-category-form.component.html"
})
export class ProductCategoryFormComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private productCategoryMasterService: ProductCategoryMasterService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        seq: new UntypedFormControl(""),
        productNumber: new UntypedFormControl(""),
        productCode: new UntypedFormControl(""),
        displayProductCategoryName: new UntypedFormControl(null, [Validators.required]),
        application: new UntypedFormControl(null),
        categoryStatus: new UntypedFormControl("Active")
    });

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, PRODUCT_CATEGORY_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.productCategoryMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/sales/product_category/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.productCategoryMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/sales/product_category/list"]);
        });
    }

    setDisplayName() {
        let productNumber = this.form.controls["productNumber"].value;
        let productCode = this.form.controls["productCode"].value;
        this.form.controls["displayProductCategoryName"].setValue(`${productNumber} - ${productCode}`);
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.form.controls["categoryStatus"].setValue("Active");
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.productCategoryMasterService.getById(params["id"]);
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
                this.form.patchValue(success);

                if (this.action == "view") {
                    this.form.disable();
                }
            });
    }
}
