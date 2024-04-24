import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpinnerService, UtilityService} from "@core/services";
import {MODULE_MASTER_FORM_ERRORS} from "@mocks/validations/settings/module-master-form.validation";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SalesUOMUnitsMasterService} from "@services/settings/SalesUOMUnitsMaster.service";
import {Location} from "@angular/common";

@Component({
    selector: "app-sales-uom-unit-master-form",
    templateUrl: "./sales-uom-unit-master-form.component.html",
    styleUrls: ["./sales-uom-unit-master-form.component.scss"]
})
export class SalesUomUnitMasterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";

    constructor(
        private salesUOMUnitsMasterService: SalesUOMUnitsMasterService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        label: new UntypedFormControl(null),
        value: new UntypedFormControl(null),
        order: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }
    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, MODULE_MASTER_FORM_ERRORS)) {
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

    create(formData: any) {
        this.spinner.show();
        this.salesUOMUnitsMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.salesUOMUnitsMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
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
                        return this.salesUOMUnitsMasterService.getById(params["id"]);
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
