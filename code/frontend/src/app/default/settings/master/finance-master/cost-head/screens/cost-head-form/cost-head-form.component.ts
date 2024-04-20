import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {COST_HEAD_FORM_ERRORS} from "@mocks/validations/settings/costHead.validation";
import {CostHeadMasterService} from "@services/settings/costHead.service";

@Component({
    selector: "app-cost-head-form",
    templateUrl: "./cost-head-form.component.html"
})
export class CostHeadFormComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private costHeadMasterService: CostHeadMasterService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        order: new UntypedFormControl(null),
        costHead: new UntypedFormControl(null),
        displayName: new UntypedFormControl(null),
        category: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
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
        if (this.validationService.checkErrors(this.form, COST_HEAD_FORM_ERRORS)) {
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
        this.costHeadMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/finance_master/cost_head/list"]);
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.costHeadMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/finance_master/cost_head/list"]);
        });
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.form.controls["status"].setValue("Active");
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.costHeadMasterService.getById(params["id"]);
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
