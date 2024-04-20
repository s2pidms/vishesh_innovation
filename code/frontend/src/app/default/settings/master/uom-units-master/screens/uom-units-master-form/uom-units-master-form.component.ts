import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpinnerService, StorageService, UtilityService} from "@core/services";
import {UOMUnitsMasterService} from "@services/settings";
import {MODULE_MASTER_FORM_ERRORS} from "@mocks/validations/settings/module-master-form.validation";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-uom-units-master-form",
    templateUrl: "./uom-units-master-form.component.html"
})
export class UOMUnitsMasterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    type: any = "";
    title: any = "";
    constructor(
        private uomUnitsMasterService: UOMUnitsMasterService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private storageService: StorageService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        type: new UntypedFormControl(null),
        label: new UntypedFormControl(null),
        value: new UntypedFormControl(null),
        order: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }
    ngOnInit(): void {
        this.title = this.storageService.get("menuTitle").title;

        this.activatedRoute.queryParams.subscribe(success => {
            this.type = success["type"];
        });

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
        this.uomUnitsMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate([`/default/settings/master/uom_units_master/list/${this.type}`]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.uomUnitsMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate([`/default/settings/master/uom_units_master/list/${this.type}`]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.form.controls["type"].setValue(this.type);
        this.form.controls["status"].setValue("Active");
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.uomUnitsMasterService.getById(params["id"]);
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
