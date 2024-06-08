import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {AppParameterService} from "@services/settings";
import {SpinnerService, UtilityService} from "@core/services";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {APP_PARAMETER_FORM_ERRORS} from "@mocks/validations/settings";

@Component({
    selector: "app-app-parameter-form",
    templateUrl: "./app-parameter-form.component.html"
})
export class AppParameterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        appParameterAppCode: new UntypedFormControl("", [Validators.required]),
        appParameterCode: new UntypedFormControl("", [Validators.required]),
        appParameterName: new UntypedFormControl("", [Validators.required]),
        appParameterValue: new UntypedFormControl("", [Validators.required]),
        isActive: new UntypedFormControl("Yes")
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private appParameterService: AppParameterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, APP_PARAMETER_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        this.f["isActive"].setValue("Yes");
        formData.appParameterValue = formData.appParameterValue.trim();
        if (formData._id) {
            this.update(formData._id);
        } else {
            delete formData.id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.f["isActive"].setValue("Yes");
        this.appParameterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(id: any) {
        this.spinner.show();
        this.appParameterService.update(id, this.form.value).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.appParameterService.getAllMasterData({}).subscribe(success => {
            this.form.controls["appParameterCode"].setValue(success.autoIncrementNo);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.appParameterService.getById(params["id"]);
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
                    if (success.role && success.role._id) {
                        success.role = success.role?._id;
                    }

                    this.form.patchValue(success);

                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
