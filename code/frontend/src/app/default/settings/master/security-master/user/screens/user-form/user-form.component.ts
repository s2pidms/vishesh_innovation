import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {UserService} from "@services/settings";
import {ValidationService} from "@core/components";
import {USER_FORM_ERRORS} from "@mocks/validations/settings";
import {SpinnerService, StorageService} from "@core/services";
import {IUserMasterData} from "@mocks/models/settings/masters";
@Component({
    selector: "app-user-form",
    templateUrl: "./user-form.component.html"
})
export class UserFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    status: any = "";
    isActive: any;
    user: any = {};
    superAdminId = "64a687b4e9143bffd820fb3d";
    masterData: IUserMasterData = {
        autoIncrementNo: "",
        departmentOptions: [],
        rolesOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        userCode: new UntypedFormControl(null, [Validators.required]),
        name: new UntypedFormControl(null, [Validators.required]),
        role: new UntypedFormControl([], [Validators.required]),
        email: new UntypedFormControl(null, [Validators.required]),
        password: new UntypedFormControl(null, [Validators.required]),
        userEmail: new UntypedFormControl(null, [Validators.required]),
        department: new UntypedFormControl(null),
        departmentName: new UntypedFormControl(null),
        userType: new UntypedFormControl("Internal", [Validators.required]),
        isActive: new UntypedFormControl(false)
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private userService: UserService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private storageService: StorageService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        this.user = this.storageService.get("IDMSAUser")?.roles;
        this.user = this.user.find((x: any) => x == this.superAdminId);
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, USER_FORM_ERRORS)) {
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
        this.userService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/security_master/user/user-list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.userService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/security_master/user/user-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.userService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["userCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (this.action === "edit") {
                            this.form.controls["password"].setValidators(null);
                            this.form.controls["password"].updateValueAndValidity();
                        }
                        if (params["id"]) {
                            return this.userService.getById(params["id"]);
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
                    success.role = success.role.map((x: any) => {
                        return x._id;
                    });
                    this.status = success?.status;
                    this.isActive = success?.isActive;
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setDepartment(ev: any) {
        this.form.controls["departmentName"].setValue(ev?.departmentName);
    }
}
