import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ProcessResourceManagementService} from "@services/planning";
import {PROCESS_RESOURCE_MANAGEMENT_FORM_ERRORS} from "@mocks/validations/planning";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {ResourceManagementMasterData} from "@mocks/models/planning/masters";

@Component({
    selector: "app-process-resource-management-form",
    templateUrl: "./process-resource-management-form.component.html"
})
export class ProcessResourceManagementFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    machineNamesArr: any = [];
    masterData: ResourceManagementMasterData = {
        autoIncrementNo: "",
        mapProcessMachineList: []
    };

    constructor(
        private processResourceManagementService: ProcessResourceManagementService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        processResourceManagementCode: new UntypedFormControl(null),
        processCode: new UntypedFormControl(null),
        processName: new UntypedFormControl(null, [Validators.required]),
        process: new UntypedFormControl(null),
        machineCode: new UntypedFormControl(null),
        machineName: new UntypedFormControl(null, [Validators.required]),
        machine: new UntypedFormControl(null),
        outputPerHr: new UntypedFormControl(null),
        noOfManpower: new UntypedFormControl(null),
        labourCostPerHr: new UntypedFormControl(null),
        powerConsumptionPerHr: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.machineNamesArr = [];
        this.getInitialData();
    }
    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, PROCESS_RESOURCE_MANAGEMENT_FORM_ERRORS)) {
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
        this.processResourceManagementService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.processResourceManagementService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.processResourceManagementService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["processResourceManagementCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.processResourceManagementService.getById(params["id"]);
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
                    this.machineNamesArr = this.masterData?.mapProcessMachineList.find(
                        (x: any) => x._id == success?.process
                    )?.machineDetails;
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setMachineNames(ev: any) {
        this.machineNamesArr = [];
        this.f["machineName"].setValue(null);
        this.f["process"].setValue(ev?.process);
        this.f["processCode"].setValue(ev?.processCode);
        this.machineNamesArr = ev?.machineDetails;
    }

    setMachineId(ev: any) {
        this.f["machine"].setValue(ev?.machine);
        this.f["machineCode"].setValue(ev?.machineCode);
    }
}
