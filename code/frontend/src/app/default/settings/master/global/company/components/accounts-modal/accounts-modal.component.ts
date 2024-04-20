import {Component, OnInit, Input} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {TOTAL_WEEKLY_WORKING_DAYS} from "@mocks/constant";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-accounts-modal",
    templateUrl: "./accounts-modal.component.html"
})
export class AccountsModalComponent implements OnInit {
    @Input() accountsDetails: any = {};
    @Input() currencies: any = [];
    months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    fiscalYearEndMonth: string = "";
    fiscalYearStartMonth: string = "";
    fiscalYearStartDays: any = [];
    fiscalYearEndDays: any = [];
    totalWeeklyWorkingDays: any = TOTAL_WEEKLY_WORKING_DAYS;
    form: any = new UntypedFormGroup({
        reportingCurrency: new UntypedFormControl(null),
        currencySymbol: new UntypedFormControl(null),
        fiscalYearStartMonth: new UntypedFormControl(null),
        fiscalYearStartDays: new UntypedFormControl(null),
        fiscalYearEndMonth: new UntypedFormControl(null),
        fiscalYearEndDays: new UntypedFormControl(null),
        totalWeeklyWorkingDays: new UntypedFormControl(null)
    });

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        this.form.patchValue(this.accountsDetails);
        this.fiscalYearStartMonth = this.months[this.accountsDetails?.fiscalYearStartMonth];
        this.fiscalYearEndMonth = this.months[this.accountsDetails?.fiscalYearEndMonth];
        if (this.fiscalYearStartMonth) {
            this.daysInMonthForStart();
        }
        if (this.fiscalYearEndMonth) {
            this.daysInMonthForEnd();
        }
    }

    dismissModel() {
        this.activeModal.close(this.form.value);
    }
    daysInMonthForStart() {
        const daysInMonth = new Date(
            new Date().getFullYear(),
            this.months.indexOf(this.fiscalYearStartMonth) + 1,
            0
        ).getDate();
        daysInMonth;
        this.fiscalYearStartDays = Array.from({length: daysInMonth}, (_, i) => i + 1);
    }
    daysInMonthForEnd() {
        const daysInMonth = new Date(
            new Date().getFullYear(),
            this.months.indexOf(this.fiscalYearEndMonth) + 1,
            0
        ).getDate();
        this.fiscalYearEndDays = Array.from({length: daysInMonth}, (_, i) => i + 1);
    }

    setFiscalStartMonthsDays(): void {
        this.form.controls["fiscalYearStartDays"].setValue(null);
        this.daysInMonthForStart();
        let index = this.months.findIndex((x: any) => x == this.fiscalYearStartMonth);
        this.form.controls["fiscalYearStartMonth"].setValue(index);
    }
    setFiscalEndMonthsDays(): void {
        this.form.controls["fiscalYearEndDays"].setValue(null);
        this.daysInMonthForEnd();
        let index = this.months.findIndex((x: any) => x == this.fiscalYearEndMonth);
        this.form.controls["fiscalYearEndMonth"].setValue(index);
    }
}
