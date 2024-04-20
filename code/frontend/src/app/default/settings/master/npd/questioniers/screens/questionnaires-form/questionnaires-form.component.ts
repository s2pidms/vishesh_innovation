import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService, UtilityService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {QuestionsService} from "@services/business-leads";
import {SpinnerService} from "@core/services";

@Component({
    selector: "app-questionnaires-form",
    templateUrl: "./questionnaires-form.component.html"
})
export class QuestionnairesFormComponent implements OnInit {
    submitted = false;
    action: string = "create";

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        orderNo: new UntypedFormControl(""),
        type: new UntypedFormControl(null),
        questionnaire: new UntypedFormControl("")
    });

    constructor(
        private questionsService: QuestionsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    submit() {
        this.submitted = true;

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
        this.questionsService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/NPD/questioniers/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.questionsService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/settings/master/NPD/questioniers/list"]);
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
                        return this.questionsService.getById(params["id"]);
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
