import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ESP_CATEGORY_FORM_ERRORS} from "@mocks/validations/settings";
import {ASSET_CLASS_DEPRECIATION_AND_ENERGY_SPEC, ASSET_CLASS_TYPE} from "@mocks/constant";
import {AssetClassMasterService} from "@services/settings";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-asset-class-form",
    templateUrl: "./asset-class-form.component.html"
})
export class AssetClassFormComponent implements OnInit {
    assetClassTypeObj: any = ASSET_CLASS_TYPE;
    assetClassTypeArr: any = ASSET_CLASS_TYPE.getAllClassType();
    depreciationAndEnergySpecArr: any = ASSET_CLASS_DEPRECIATION_AND_ENERGY_SPEC;

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private assetClassService: AssetClassMasterService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        order: new UntypedFormControl(null),
        assetClassName: new UntypedFormControl(null),
        prefix: new UntypedFormControl(null),
        nextAutoIncrement: new UntypedFormControl(null),
        digit: new UntypedFormControl(null),
        depreciation: new UntypedFormControl(null),
        energySpecification: new UntypedFormControl(null),
        type: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
    });

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
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
        this.assetClassService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.assetClassService.create(formData).subscribe(success => {
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
        this.form.controls["status"].setValue("Active");
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.assetClassService.getById(params["id"]);
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
