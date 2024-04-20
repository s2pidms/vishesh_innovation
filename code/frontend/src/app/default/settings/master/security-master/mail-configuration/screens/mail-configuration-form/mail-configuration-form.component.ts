import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {MailConfigurationService} from "@services/settings";

@Component({
    selector: "app-mail-configuration-form",
    templateUrl: "./mail-configuration-form.component.html"
})
export class MailConfigurationFormComponent implements OnInit {
    submitted = false;
    action: string = "create";

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        module: new UntypedFormControl(null),
        subModule: new UntypedFormControl(null),
        action: new UntypedFormControl(null),
        emailTo: new UntypedFormControl(null),
        emailCC: new UntypedFormControl(null),
        emailBCC: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private mailConfigurationService: MailConfigurationService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.getInitialData();
        this.form.reset();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        let formData: any = this.form.value;
        this.mailConfigurationService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/security_master/mail_configuration/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.activatedRoute.queryParams
            .pipe(
                mergeMap((params: any) => {
                    this.action = params.action;
                    if (this.action === "edit") {
                    }
                    if (params["id"]) {
                        return this.mailConfigurationService.getById(params["id"]);
                    } else {
                        return of({});
                    }
                })
            )
            .subscribe((success: any) => {
                if (Object.keys(success).length == 0) {
                    return;
                }

                this.form.patchValue(success);
                // }
                if (this.action == "view") {
                    this.form.disable();
                }
            });

        this.spinner.hide();
    }
}
