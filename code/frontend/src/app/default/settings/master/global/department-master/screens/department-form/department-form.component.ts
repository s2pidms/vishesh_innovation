import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";
import {DEPARTMENT_MASTER_FORM_ERRORS} from "@mocks/validations/settings/departmentMaster.validation";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {AddSubDeptComponent} from "../add-sub-dept/add-sub-dept.component";
import {DepartmentMasterService} from "@services/settings";
import {IDepartmentMasterData} from "@mocks/models/settings/masters";

@Component({
    selector: "app-department-form",
    templateUrl: "./department-form.component.html"
})
export class DepartmentFormComponent implements OnInit {
    subDepartments: any = [];
    collection: number = 0;
    masterData: IDepartmentMasterData = {
        autoIncrementNo: "",
        locationOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private departmentMasterService: DepartmentMasterService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        departmentCode: new UntypedFormControl("", [Validators.required]),
        departmentName: new UntypedFormControl("", [Validators.required]),
        description: new UntypedFormControl("", [Validators.required]),
        departmentHead: new UntypedFormControl("", [Validators.required]),
        totalEmployee: new UntypedFormControl("", [Validators.required]),
        contactNo: new UntypedFormControl(""),
        email: new UntypedFormControl(""),
        officeLocation: new UntypedFormControl(null, [Validators.required]),
        goodsTransferRequest: new UntypedFormControl(false),
        subDepartments: new UntypedFormControl([])
    });

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, DEPARTMENT_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        formData.subDepartments = this.subDepartments;

        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.departmentMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.departmentMasterService.create(formData).subscribe(success => {
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
        this.departmentMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["departmentCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.departmentMasterService.getById(params["id"]);
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

                    this.subDepartments = success?.subDepartments;

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    openSub() {
        const modalRef = this.modalService.open(AddSubDeptComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            size: "lg"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.subDepartments = this.subDepartments;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.subDepartments = success;
                    this.collection = this.subDepartments.length;
                }
            },
            (reason: any) => {}
        );
    }
}
