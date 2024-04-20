import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ESP_CATEGORY_FORM_ERRORS} from "@mocks/validations/settings";
import {SKUCategoryMasterService} from "@services/settings";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-sku-category-form",
    templateUrl: "./sku-category-form.component.html"
})
export class SkuCategoryFormComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private skuCategoryMasterService: SKUCategoryMasterService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        SKUCategoryName: new UntypedFormControl(""),
        SKUCategoryPrefix: new UntypedFormControl("", [Validators.required]),
        productCode: new UntypedFormControl(""),
        application: new UntypedFormControl(null),
        displayProductCategoryName: new UntypedFormControl(null, [Validators.required]),
        digit: new UntypedFormControl(4),
        SKUCategoryAutoIncrement: new UntypedFormControl(),
        categoryStatus: new UntypedFormControl("Active", [Validators.required])
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
        if (this.validationService.checkErrors(this.form, ESP_CATEGORY_FORM_ERRORS)) {
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
        this.skuCategoryMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/sales/sku_category/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.skuCategoryMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/sales/sku_category/list"]);
        });
    }
    setDisplayName() {
        let SKUCategoryName = this.form.controls["SKUCategoryName"].value;
        let productCode = this.form.controls["productCode"].value;
        this.form.controls["displayProductCategoryName"].setValue(`${SKUCategoryName} - ${productCode}`);
        // console.log("formData", formData.displayProductCategoryName);
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.form.controls["digit"].setValue(4);
        this.form.controls["categoryStatus"].setValue("Active");
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.skuCategoryMasterService.getById(params["id"]);
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
