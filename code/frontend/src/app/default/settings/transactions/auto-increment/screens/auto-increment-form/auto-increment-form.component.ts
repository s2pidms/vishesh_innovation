import {Location} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AutoIncrementService} from "@services/settings";
import {ActivatedRoute} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-auto-increment-form",
    templateUrl: "./auto-increment-form.component.html"
})
export class AutoIncrementFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];
    tableData: any = [];

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        module: new UntypedFormControl(null, [Validators.required]),
        moduleName: new UntypedFormControl(null, [Validators.required]),
        autoIncrementValue: new UntypedFormControl(null, [Validators.required]),
        modulePrefix: new UntypedFormControl(null),
        digit: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    constructor(
        private autoIncrementService: AutoIncrementService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.form.invalid) {
            this.toastService.warning("Please fill all required field !");
            return;
        }
        let formData: any = this.form.value;
        formData.locationCounters = this.tableData;
        if (formData._id) {
            this.update(formData._id);
        } else {
            delete formData.id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.autoIncrementService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(id: any) {
        this.spinner.show();
        this.autoIncrementService.update(id, this.form.value).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.autoIncrementService.getAllMasterData({}).subscribe(success => {
            this.roles = success.roles;

            this.form.controls["autoIncrementValue"].setValue(success.autoIncrementNo);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.autoIncrementService.getById(params["id"]);
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
                    if (success.role && success.role._id) {
                        success.role = success.role?._id;
                    }
                    this.tableData = success.locationCounters;

                    this.form.patchValue(success);

                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
