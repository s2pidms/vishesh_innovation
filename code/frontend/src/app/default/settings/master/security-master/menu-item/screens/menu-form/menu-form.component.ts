import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {MenuService} from "@services/settings";
import {Router, ActivatedRoute} from "@angular/router";

import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {MENU_ITEM_FORM_ERRORS} from "@mocks/validations/settings";
import {SpinnerService, StorageService} from "@core/services";

@Component({
    selector: "app-menu-form",
    templateUrl: "./menu-form.component.html"
})
export class MenuFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    image: any = null;
    roles: any = [];
    user: any = {};
    superAdminId = "64a687b4e9143bffd820fb3d";
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        title: new UntypedFormControl("", [Validators.required]),
        path: new UntypedFormControl("", [Validators.required]),
        activeClass: new UntypedFormControl(""),
        isMenuActive: new UntypedFormControl(true, [Validators.required]),
        menuOrder: new UntypedFormControl("", [Validators.required]),
        color: new UntypedFormControl(""),
        image: new UntypedFormControl(""),
        roles: new UntypedFormControl([], [Validators.required])
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private menuService: MenuService,
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
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, MENU_ITEM_FORM_ERRORS)) {
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
        this.menuService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/security_master/menu-item/menu-list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.menuService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/security_master/menu-item/menu-list"]);
        });
    }
    getInitialData() {
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.menuService.getById(params["id"]);
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
                this.roles = success.roles;
                this.form.patchValue(success.menuDetails);
                if (this.action != "edit") {
                    this.form.disable();
                }
            });
        this.spinner.hide();
    }
}
