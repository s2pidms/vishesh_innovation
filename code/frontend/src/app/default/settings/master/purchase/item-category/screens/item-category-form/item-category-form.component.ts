import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ItemCategoryService} from "@services/purchase";
import {ITEM_CATEGORY_FORM_ERRORS} from "@mocks/validations/purchase/item-category.validation";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SubCategoryComponent} from "../sub-category/sub-category.component";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-item-category-form",
    templateUrl: "./item-category-form.component.html"
})
export class ItemCategoryFormComponent implements OnInit {
    subCategory: any = [];
    collection: number = 0;

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private itemCategoryService: ItemCategoryService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        category: new UntypedFormControl("", [Validators.required]),
        prefix: new UntypedFormControl("", [Validators.required]),
        nextAutoIncrement: new UntypedFormControl("", [Validators.required]),
        digit: new UntypedFormControl(4),
        application: new UntypedFormControl("", [Validators.required]),
        categoryStatus: new UntypedFormControl("Active", [Validators.required]),
        subCategory: new UntypedFormControl([]),
        inkMaster: new UntypedFormControl(false),
        BOM: new UntypedFormControl(false),
        stockPreparation: new UntypedFormControl(false),
        jobWorkItem: new UntypedFormControl(false)
    });

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, ITEM_CATEGORY_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.subCategory = this.subCategory;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.itemCategoryService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.itemCategoryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
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
                        return this.itemCategoryService.getById(params["id"]);
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
                this.subCategory = success?.subCategory;
                this.form.patchValue(success);
                if (this.action != "edit") {
                    this.form.disable();
                }
            });
    }

    openSub() {
        const modalRef = this.modalService.open(SubCategoryComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.subCategory = this.subCategory;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.subCategory = success;
                    this.collection = this.subCategory.length;
                }
            },
            (reason: any) => {}
        );
    }
}
