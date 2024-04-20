import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ESP_CATEGORY_FORM_ERRORS} from "@mocks/validations/settings";
import {ChildItemCategoryService} from "@services/settings";
import {CHILD_ITEM_CATEGORY_NAME} from "@mocks/constant";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-child-item-category-form",
    templateUrl: "./child-item-category-form.component.html"
})
export class ChildItemCategoryFormComponent implements OnInit {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private childItemCategoryService: ChildItemCategoryService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        category: new UntypedFormControl("", [Validators.required]),
        prefix: new UntypedFormControl("", [Validators.required]),
        nextAutoIncrement: new UntypedFormControl("", [Validators.required]),
        digit: new UntypedFormControl(4),
        categoryStatus: new UntypedFormControl("Active", [Validators.required])
    });

    submitted = false;
    action: string = "create";
    categoryName: any = CHILD_ITEM_CATEGORY_NAME;

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
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
        this.childItemCategoryService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/NPD/child_item_category/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.childItemCategoryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/NPD/child_item_category/list"]);
        });
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.form.controls["digit"].setValue(4);
        this.form.controls["categoryStatus"].setValue("Active");
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.childItemCategoryService.getById(params["id"]);
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
