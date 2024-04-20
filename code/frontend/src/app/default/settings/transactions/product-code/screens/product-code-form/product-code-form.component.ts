import {Location} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SpinnerService} from "@core/services";
import {ProductCategoryService} from "@services/settings";
import {UserService} from "@services/settings";

@Component({
    selector: "app-product-code-form",
    templateUrl: "./product-code-form.component.html"
})
export class ProductCodeFormComponent implements OnInit {
    submitted = false;
    paramsId: string = "";
    paramsData: any = null;
    view: string = "";
    Users: any = [];
    roles: any = [];

    productCatagoryForm = this.formBuilder.group({
        userCode: new UntypedFormControl("", [Validators.required]),
        name: new UntypedFormControl("", [Validators.required]),
        role: new UntypedFormControl("", [Validators.required]),
        email: new UntypedFormControl("", [Validators.required]),
        password: new UntypedFormControl("", [Validators.required])
    });

    constructor(
        private productCategoryService: ProductCategoryService,
        private userService: UserService,
        private actRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private formBuilder: UntypedFormBuilder,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.userService.$titleChange.next("ADD PRODUCT CODE[Create]");
        this.actRoute.queryParams.subscribe((params: any) => {
            if (params.id) {
                this.paramsId = params.id;
                this.getUserById(params.id);
            }
            if (params.view) {
                this.view = params.view;
            }
        });

        this.getAllMaster();
    }

    changeFn(event: any) {}

    submit() {
        this.submitted = true;
        if (this.productCatagoryForm.invalid) {
            // this.toastService.warning('Please fill all required field !');
            return;
        }
        let formData = this.productCatagoryForm.value;
        if (this.paramsId) {
            this.update(this.paramsId);
        } else {
            // delete formData.id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.productCategoryService.create(formData).subscribe(success => {
            this.spinner.hide();
            // this.toastService.success(success.message);
            // this.router.navigate(['university/university-list']);
        });
    }

    update(id: any) {
        this.spinner.show();
        this.productCategoryService.update(id, this.productCatagoryForm.value).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            // this.toastService.success(success.message);
            // this.router.navigate(['university/university-list']);
        });
    }

    getUserById(id: any) {
        this.productCategoryService.getById(id).subscribe(success => {
            // this.Users=success;

            this.productCatagoryForm.patchValue(success);
            this.productCatagoryForm.controls["role"].setValue(success.role?._id);
        });
    }

    goBack() {
        this.location.back();
    }

    getAllMaster() {
        let payload = {};
        this.productCategoryService.getAllMasterData(payload).subscribe(
            success => {
                this.roles = success.roles;

                this.productCatagoryForm.controls["userCode"].patchValue(success.autoIncrementNo);
                // this.productCatagoryForm.controls['role'].patchValue(this.Roles.roles.value);
            },
            error => {}
        );
    }
}
