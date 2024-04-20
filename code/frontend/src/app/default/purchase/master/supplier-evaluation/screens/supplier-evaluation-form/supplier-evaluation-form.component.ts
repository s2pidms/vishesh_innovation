import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SupplierEvaluationService} from "@services/purchase";
import {SUPPLIER_EVALUATION_FORM_ERRORS} from "@mocks/validations/purchase/supplier-evaluation.validation";

import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ToastService, SpinnerService, UtilityService} from "@core/services";

@Component({
    selector: "app-supplier-evaluation-form",
    templateUrl: "./supplier-evaluation-form.component.html"
})
export class SupplierEvaluationFormComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private supplierEvaluationService: SupplierEvaluationService,
        private location: Location,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        name: new UntypedFormControl("", [Validators.required]),
        description: new UntypedFormControl("", [Validators.required]),
        enabled: new UntypedFormControl(null, [Validators.required]),
        weight: new UntypedFormControl("", [Validators.required]),
        passingPercentage: new UntypedFormControl("", [Validators.required]),
        failingPercentage: new UntypedFormControl("", [Validators.required])
    });

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, SUPPLIER_EVALUATION_FORM_ERRORS)) {
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
        this.supplierEvaluationService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.supplierEvaluationService.create(formData).subscribe(success => {
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
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.supplierEvaluationService.getById(params["id"]);
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
