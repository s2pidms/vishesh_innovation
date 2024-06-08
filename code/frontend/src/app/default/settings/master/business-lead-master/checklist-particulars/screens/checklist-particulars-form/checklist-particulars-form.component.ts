import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {ChecklistParticularsService} from "@services/business-leads";
import {CHECKLIST_PARTICULARS_FORM_ERRORS} from "@mocks/validations/business-leads";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-checklist-particulars-form",
    templateUrl: "./checklist-particulars-form.component.html"
})
export class ChecklistParticularsFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    earnings: any = [];

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        order: new UntypedFormControl(null, [Validators.required]),
        name: new UntypedFormControl("", [Validators.required]),
        status: new UntypedFormControl("Active", [Validators.required])
    });

    constructor(
        private checklistParticularsService: ChecklistParticularsService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, CHECKLIST_PARTICULARS_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData.revision) {
            formData.revision = [formData.revision];
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.checklistParticularsService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.checklistParticularsService.create(formData).subscribe(success => {
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

        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.checklistParticularsService.getById(params["id"]);
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
    }
}
