import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {UOMService} from "@services/settings";
import {UOM_MASTER_FORM_ERRORS} from "@mocks/validations/settings/UOMMaster.validation";
import {SpinnerService} from "@core/services";
@Component({
    selector: "app-uom-master-form",
    templateUrl: "./uom-master-form.component.html"
})
export class UomMasterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        UOMCode: new UntypedFormControl(""),
        UOMOrder: new UntypedFormControl(""),
        UOMDescription: new UntypedFormControl(null, [Validators.required]),
        GST: new UntypedFormControl(""),
        abbreviation: new UntypedFormControl(""),
        status: new UntypedFormControl("Active")
    });

    constructor(
        private uomService: UOMService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, UOM_MASTER_FORM_ERRORS)) {
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
        this.uomService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/global/uom_master/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.uomService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/global/uom_master/list"]);
        });
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.uomService.getAllMasterData({}).subscribe(success => {
            this.form.controls["UOMCode"].setValue(success.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.uomService.getById(params["id"]);
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
        });
    }
}
