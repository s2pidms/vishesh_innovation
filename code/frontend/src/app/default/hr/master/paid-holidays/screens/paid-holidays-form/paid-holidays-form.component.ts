import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {PaidHolidayService} from "@services/hr";
import {ValidationService} from "@core/components";
import {HOLIDAYS_FORM_ERRORS} from "@mocks/validations/hr";
import {MenuTitleService, SpinnerService, UtilityService, ToastService} from "@core/services";

@Component({
    selector: "app-paid-holidays-form",
    templateUrl: "./paid-holidays-form.component.html"
})
export class PaidHolidaysFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    roles: any = [];
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        holidayName: new UntypedFormControl(null, [Validators.required]),
        holidayDate: new UntypedFormControl(null, [Validators.required]),
        holidayDay: new UntypedFormControl(""),
        holidayLocation: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    constructor(
        private paidHolidayService: PaidHolidayService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, HOLIDAYS_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData._id);
        } else {
            delete formData.id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.paidHolidayService.create(formData).subscribe((success: any) => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["default/HR/master/paid_holidays/ph-list"]);
        });
    }

    update(id: any) {
        this.spinner.show();
        this.paidHolidayService.update(id, this.form.value).subscribe((success: any) => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["default/HR/master/paid_holidays/ph-list"]);
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
                        return this.paidHolidayService.getById(params["id"]);
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
                if (success.holidayDate) {
                    success.holidayDate = this.utilityService.getFormatDate(success.holidayDate, "YYYY-MM-DD");
                }
                this.form.patchValue(success);
                if (this.action != "edit") {
                    this.form.disable();
                }
            });
        // this.menuTitleService.set({
        //     type: this.action
        // });
    }

    day(ev: any) {
        let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.f["holidayDay"].setValue(Days[new Date(ev.target.value).getDay()]);
    }
}
