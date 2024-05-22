import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {SpecificationMasterService} from "@services/quality";
import {SPECIFICATION_MASTER_FORM_ERRORS} from "@mocks/validations/quality/specification.validation";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {ISpecificationMasterData} from "@mocks/models/quality/master";
@Component({
    selector: "app-specification-master-form",
    templateUrl: "./specification-master-form.component.html"
})
export class SpecificationMasterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ISpecificationMasterData = {
        autoIncrementNo: "",
        UOMListOptions: []
    };

    constructor(
        private specificationMasterService: SpecificationMasterService,
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
        specificationCode: new UntypedFormControl(null),
        characteristic: new UntypedFormControl(null, [Validators.required]),
        UOM: new UntypedFormControl(null, [Validators.required]),
        testStandard: new UntypedFormControl(null, [Validators.required]),
        measuringInstrument: new UntypedFormControl(null, [Validators.required]),
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

        if (this.validationService.checkErrors(this.form, SPECIFICATION_MASTER_FORM_ERRORS)) {
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
        this.specificationMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/quality/master/specification_master/list"]);
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.specificationMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/quality/master/specification_master/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.specificationMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["specificationCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.specificationMasterService.getById(params["id"]);
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
