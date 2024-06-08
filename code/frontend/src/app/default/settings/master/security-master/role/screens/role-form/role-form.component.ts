import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {RoleService} from "@services/settings";
import {ValidationService} from "@core/components";
import {ROLE_TO_MODULE_ROUTES} from "@mocks/roleToModuleRoutes";
import {ROLE_FORM_ERRORS} from "@mocks/validations/settings/role.validation";
import {SpinnerService} from "@core/services";
import {IRoleMasterData} from "@mocks/models/settings/masters";
@Component({
    selector: "app-user-form",
    templateUrl: "./role-form.component.html"
})
export class RoleFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];
    view: string = "";
    Roles: any = [];
    existingRoles: any = [];
    redirectToPaths: any = ROLE_TO_MODULE_ROUTES;
    masterData: IRoleMasterData = {
        autoIncrementNo: ""
    };

    roleForm = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        roleCode: new UntypedFormControl(""),
        roleName: new UntypedFormControl("", [Validators.required]),
        displayRoleName: new UntypedFormControl(""),
        redirectTo: new UntypedFormControl("", [Validators.required])
    });

    get f() {
        return this.roleForm.controls;
    }

    constructor(
        private RoleService: RoleService,
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

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.roleForm, ROLE_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.roleForm.value;
        if (formData._id) {
            this.update(formData._id);
        } else {
            delete formData.id;
            this.create(formData);
        }
    }

    reset() {
        this.roleForm.reset();
        this.getInitialData();
    }

    update(id: any) {
        this.spinner.show();
        this.RoleService.update(id, this.roleForm.value).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.RoleService.create(formData).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.RoleService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.Roles = result.roles;
            this.roleForm.controls["roleCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.RoleService.getById(params["id"]);
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

                    this.roleForm.patchValue(success);
                    if (this.action != "edit") {
                        this.roleForm.disable();
                    }
                });
        });
    }
}
