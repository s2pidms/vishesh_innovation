import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {COST_SHEET_COMPONENTS} from "@mocks/constant";
import {CostSheetComponentService} from "@services/settings";
import {COST_SHEET_FORM_ERRORS} from "@mocks/validations/settings/costSheet.validation";
import {SpinnerService} from "@core/services";
import {ICostSheetComponentsMasterData} from "@mocks/models/settings/masters";

@Component({
    selector: "app-cost-sheet-components-form",
    templateUrl: "./cost-sheet-components-form.component.html"
})
export class CostSheetComponentsFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    componentTypeObj: any = COST_SHEET_COMPONENTS;
    componentTypeArr: any = this.componentTypeObj.getAllComponentType();
    masterData: ICostSheetComponentsMasterData = {
        autoIncrementNo: ""
    };

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private costSheetComponentService: CostSheetComponentService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        componentCode: new UntypedFormControl(null, [Validators.required]),
        componentType: new UntypedFormControl(null, [Validators.required]),
        order: new UntypedFormControl(null, [Validators.required]),
        costElement: new UntypedFormControl(null, [Validators.required]),
        tooltip: new UntypedFormControl(null),
        status: new UntypedFormControl("Active", [Validators.required])
    });

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, COST_SHEET_FORM_ERRORS)) {
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
        this.costSheetComponentService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/business_lead_master/cost_sheet_components/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.costSheetComponentService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["default/settings/master/business_lead_master/cost_sheet_components/list"]);
        });
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.costSheetComponentService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["componentCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.costSheetComponentService.getById(params["id"]);
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
