import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {AuditService} from "@services/settings";
import {SpinnerService, UtilityService} from "@core/services";

@Component({
    selector: "app-audit-form",
    templateUrl: "./audit-form.component.html"
})
export class AuditFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        user: new UntypedFormControl(""),
        date: new UntypedFormControl(""),
        action: new UntypedFormControl(""),
        fieldsModified: new UntypedFormControl(""),
        data: new UntypedFormControl(""),
        oldData: new UntypedFormControl(""),
        sensitiveInfo: new UntypedFormControl("")
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private auditService: AuditService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        let formData: any = this.form.value;
        formData.appParameterValue = formData.appParameterValue.trim();
        if (formData._id) {
            this.update(formData._id);
        } else {
            delete formData.id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.auditService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/transactions/audit/audit-list"]);
        });
    }

    update(id: any) {
        this.spinner.show();
        this.auditService.update(id, this.form.value).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/transactions/audit/audit-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    this.utilityService.accessDenied(this.action);
                    if (params["id"]) {
                        return this.auditService.getById(params["id"]);
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
                if (success.date) {
                    success.date = this.utilityService.getFormatDate(success?.date, "YYYY-MM-DD");
                }
                success.data = JSON.parse(success.data);
                success.oldData = JSON.parse(success.oldData);
                this.form.patchValue(success);
                this.form.controls["user"].setValue(success.user.name);

                if (this.action != "edit") {
                    this.form.disable();
                }
            });
    }

    copyData(data: any) {
        if (data) {
            data = JSON.stringify(data);
            navigator.clipboard.writeText(data);
        }
    }
}
