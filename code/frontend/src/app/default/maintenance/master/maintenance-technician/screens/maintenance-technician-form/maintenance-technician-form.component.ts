import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {TechnicianService} from "@services/maintenance";
import {ITechnicianMasterData} from "@mocks/models/maintenance/masters";

@Component({
    selector: "app-maintenance-technician-form",
    templateUrl: "./maintenance-technician-form.component.html"
})
export class MaintenanceTechnicianFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    masterData: ITechnicianMasterData = {
        autoIncrementNo: "",
        technicianRoleOptions: []
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private technicianService: TechnicianService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        technicianCode: new UntypedFormControl(null),
        technicianName: new UntypedFormControl(null),
        experience: new UntypedFormControl(null),
        technicianStatus: new UntypedFormControl("Active"),
        technicianRole: new UntypedFormControl(null),
        contactNumber: new UntypedFormControl(null),
        email: new UntypedFormControl(null),
        address: new UntypedFormControl(null),
        skills: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        this.form.enable();
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
        this.technicianService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.technicianService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.technicianService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["technicianCode"].patchValue(this.masterData?.autoIncrementNo);
            this.form.controls["technicianStatus"].patchValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.technicianService.getById(params["id"]);
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
        });
    }
}
