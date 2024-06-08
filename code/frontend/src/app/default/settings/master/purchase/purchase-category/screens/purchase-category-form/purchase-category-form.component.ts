import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {PURCHASE_CATEGORY_FORM_ERRORS} from "@mocks/validations/settings/purchase-category.validation";
import {PurchaseCategoryService} from "@services/settings";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-purchase-category-form",
    templateUrl: "./purchase-category-form.component.html"
})
export class PurchaseCategoryFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    collection: number = 0;

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private purchaseCategoryService: PurchaseCategoryService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        category: new UntypedFormControl("", [Validators.required]),
        prefix: new UntypedFormControl("", [Validators.required]),
        nextAutoIncrement: new UntypedFormControl("", [Validators.required]),
        digit: new UntypedFormControl(4),
        categoryStatus: new UntypedFormControl("Active", [Validators.required])
    });

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, PURCHASE_CATEGORY_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.category = formData.category.trim();
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.purchaseCategoryService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.purchaseCategoryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
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
                        return this.purchaseCategoryService.getById(params["id"]);
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
                if (this.action != "edit") {
                    this.form.disable();
                }
            });
    }
}
