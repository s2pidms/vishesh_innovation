import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {UOM_MASTER_FORM_ERRORS} from "@mocks/validations/settings/UOMMaster.validation";
import {ReportQMSMappingService} from "@services/settings";
import {AppGlobalService, SpinnerService} from "@core/services";

@Component({
    selector: "app-qms-mapping-form",
    templateUrl: "./qms-mapping-form.component.html"
})
export class QmsMappingFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    reportNameArr: any = [];
    moduleNames: any = [];
    module: any = "";
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        reportCode: new UntypedFormControl(null),
        module: new UntypedFormControl(null),
        report: new UntypedFormControl(null),
        reportTitle: new UntypedFormControl(null),
        displayText: new UntypedFormControl(null)
    });

    constructor(
        private reportQMSMappingService: ReportQMSMappingService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private appGlobalService: AppGlobalService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        this.appGlobalService.getData(["menuItems"]).subscribe((data: any) => {
            this.moduleNames = data["menuItems"];
        });
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, UOM_MASTER_FORM_ERRORS)) {
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
        this.reportQMSMappingService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/global/qms_mapping/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.reportQMSMappingService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/global/qms_mapping/list"]);
        });
    }

    setReportNames(event: any) {
        this.form.controls["reportTitle"].setValue(event?.title);
        this.form.controls["display"].setValue(event?.displayName);
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.reportQMSMappingService.getAllMasterData({}).subscribe(result => {
            this.form.controls["reportCode"].setValue(result);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.reportQMSMappingService.getById(params["id"]);
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
                    this.getFilterData();
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }
    getFilterData() {
        this.spinner.show();
        this.reportQMSMappingService
            .getFilterSubmoduleForQMS({module: this.form.controls["module"].value})
            .subscribe(success => {
                this.reportNameArr = success;
            });
        this.spinner.hide();
    }
}
