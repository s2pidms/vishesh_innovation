import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {InventoryDepartmentMasterService} from "@services/settings";
import {InventoryDepartmentMasterData} from "@mocks/models/settings/masters";
import {INVENTORY_DEPARTMENT_MASTER_FORM_ERRORS} from "@mocks/validations/settings";

@Component({
    selector: "app-inventory-department-form",
    templateUrl: "./inventory-department-form.component.html",
    styleUrls: ["./inventory-department-form.component.scss"]
})
export class InventoryDepartmentFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: InventoryDepartmentMasterData = {
        departmentsOptions: []
    };

    constructor(
        private inventoryDepartmentMasterService: InventoryDepartmentMasterService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        departmentName: new UntypedFormControl(null, [Validators.required]),
        departmentType: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }
    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo() {
        this.location.back();
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, INVENTORY_DEPARTMENT_MASTER_FORM_ERRORS)) {
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
        this.inventoryDepartmentMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.inventoryDepartmentMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.inventoryDepartmentMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.inventoryDepartmentMasterService.getById(params["id"]);
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

                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }
}
