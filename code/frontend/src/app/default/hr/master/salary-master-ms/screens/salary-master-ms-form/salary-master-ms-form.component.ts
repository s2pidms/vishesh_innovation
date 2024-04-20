import {Component, OnInit} from "@angular/core";
import {UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {SalaryMasterService} from "@services/hr";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SALARY_MASTER_MS_FORM_ERRORS} from "@mocks/validations/hr";
import {ToastService, MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {ISalaryManagementMasterData} from "@mocks/models/hr&Admin/master";

@Component({
    selector: "app-salary-master-ms-form",
    templateUrl: "./salary-master-ms-form.component.html"
})
export class SalaryMasterMSFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    salaryComponentsArr: any = [];

    masterData: ISalaryManagementMasterData = {
        autoIncrementNo: "",
        employeesOptions: [],
        employeeContributionRate: 0
    };

    constructor(
        private formBuilder: UntypedFormBuilder,
        private salaryMasterService: SalaryMasterService,
        private router: Router,
        private toastService: ToastService,
        private menuTitleService: MenuTitleService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form: any = this.formBuilder.group({
        _id: new UntypedFormControl(null),
        salaryMasterNumber: new UntypedFormControl(null, [Validators.required]),
        employeeId: new UntypedFormControl(null, [Validators.required]),
        effectFromDate: new UntypedFormControl(null, [Validators.required]),
        isEmployeeProvidentFund: new UntypedFormControl(false, [Validators.required]),
        PFWagesForContribution: new UntypedFormControl({
            value: null,
            disabled: true
        }),
        salaryComponentDetails: this.formBuilder.array([]),
        grossSalaryPerMonth: new UntypedFormControl(null, [Validators.required]),
        grossSalaryPerAnnum: new UntypedFormControl(null, [Validators.required]),
        employerPFContributionPerMonth: new UntypedFormControl(null, [Validators.required]),
        employerPFContributionPerAnnum: new UntypedFormControl(null, [Validators.required]),
        gratuityPerMonth: new UntypedFormControl(null, [Validators.required]),
        gratuityPerAnnum: new UntypedFormControl(null, [Validators.required]),
        costTOCompanyCTCPerMonth: new UntypedFormControl(null, [Validators.required]),
        costTOCompanyCTCPerAnnum: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form["controls"];
    }
    get fSC() {
        return this.form["controls"]["salaryComponentDetails"]["controls"];
    }
    get salaryComponentDetails(): UntypedFormArray {
        return this.form.get("salaryComponentDetails") as UntypedFormArray;
    }
    newSalaryComponentDetails(): UntypedFormGroup {
        return new UntypedFormGroup({
            earningHead: new UntypedFormControl(null, [Validators.required]),
            factor: new UntypedFormControl(null, [Validators.required]),
            earningType: new UntypedFormControl(null, [Validators.required]),
            salaryComponentId: new UntypedFormControl(null, [Validators.required]),
            salaryComponentPerMonth: new UntypedFormControl(null, [Validators.required]),
            salaryComponentPerAnnum: new UntypedFormControl(null, [Validators.required])
        });
    }
    addSalaryComponentDetails() {
        this.salaryComponentDetails.push(this.newSalaryComponentDetails());
    }
    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }
    PFWagesDisable(event: any) {
        let PFMonth = this.form.controls["employerPFContributionPerMonth"].value;
        let CTCMonth = this.form.controls["costTOCompanyCTCPerMonth"].value;

        let PFYear = this.form.controls["employerPFContributionPerAnnum"].value;
        let CTCYear = this.form.controls["costTOCompanyCTCPerAnnum"].value;

        if (event.target.value == "false") {
            this.f.PFWagesForContribution.reset();
            this.f.PFWagesForContribution.disable();
            this.form.controls["employerPFContributionPerMonth"].setValue(Number(0).toFixed(2));
            this.form.controls["employerPFContributionPerAnnum"].setValue(Number(0).toFixed(2));

            this.form.controls["costTOCompanyCTCPerMonth"].setValue(Number(CTCMonth - PFMonth).toFixed(2));
            this.form.controls["costTOCompanyCTCPerAnnum"].setValue(Number(CTCYear - PFYear).toFixed(2));
        } else {
            this.f.PFWagesForContribution.enable();
        }
    }
    handleBasicPay = (event: any, index: any) => {
        let isEmployeeProvidentFund = this.form.controls["isEmployeeProvidentFund"].value;
        let PFWagesForContribution = this.form.controls["PFWagesForContribution"].value;

        if (isEmployeeProvidentFund == "true") {
            if (!PFWagesForContribution) {
                this.toastService.error("Please select PF Wages For Contribution.");
                return;
            }
        }
        let value = +event.target.value;
        let salaryComponents: any = this.salaryComponentDetails.value;
        salaryComponents[index].salaryComponentPerAnnum = Number(+value * 12).toFixed(2);
        let basicPayIndex = salaryComponents.map((x: any) => x.earningHead).indexOf("Basic Pay");
        salaryComponents = salaryComponents.map((ele: any, idx: any) => {
            if (ele.factor != "-") {
                if (ele.earningType == "Percentage Of CTC") {
                    ele.salaryComponentPerMonth =
                        (+this.form.controls["costTOCompanyCTCPerMonth"].value ?? 0 * +ele.factor) / 100;
                    ele.salaryComponentPerAnnum = +ele.salaryComponentPerMonth * 12;
                }
                if (ele.earningType == "Percentage Of Basic") {
                    ele.salaryComponentPerMonth =
                        ((basicPayIndex >= 0 ? +salaryComponents[basicPayIndex]?.salaryComponentPerMonth : 0) *
                            +ele.factor) /
                        100;
                    ele.salaryComponentPerAnnum = +ele.salaryComponentPerMonth * 12;
                }
            }
            return ele;
        });
        let gross = salaryComponents
            .filter((a: any) => a.earningType != "Percentage Of CTC")
            .map((m: any) => m.salaryComponentPerMonth)
            .reduce((a: any, c: any) => +a + +c, 0)
            .toFixed(2);
        this.form.controls["grossSalaryPerMonth"].setValue(Number(+gross).toFixed(2));
        this.form.controls["grossSalaryPerAnnum"].setValue(Number(+gross * 12).toFixed(2));
        let ctc = +gross;
        let pfContribution = 0;
        let contributionFactor = +this.masterData.employeeContributionRate;
        if (isEmployeeProvidentFund) {
            if (PFWagesForContribution == "Restricted to 15,000/-") {
                pfContribution = (contributionFactor * 15000) / 100;
            } else if (PFWagesForContribution == "Restricted to 30,000/-") {
                pfContribution = (contributionFactor * 30000) / 100;
            } else if (PFWagesForContribution == "Actual Basic + HRA + CCA") {
                let actualValue = salaryComponents
                    .filter((s: any) =>
                        ["Basic Pay", "House Rent Allowance", "City Compensation Allowance"].includes(s.earningHead)
                    )
                    .map((x: any) => x.salaryComponentPerMonth)
                    .reduce((a: number, c: number) => +a + +c, 0);
                pfContribution = (contributionFactor * actualValue) / 100;
            } else if (PFWagesForContribution == "Actual Basic + HRA + CCA + PA") {
                let actualValue = salaryComponents
                    .filter((s: any) =>
                        [
                            "Basic Pay",
                            "House Rent Allowance",
                            "City Compensation Allowance",
                            "Performance Allowance"
                        ].includes(s.earningHead)
                    )
                    .map((x: any) => x.salaryComponentPerMonth)
                    .reduce((a: number, c: number) => +a + +c, 0);
                pfContribution = (contributionFactor * actualValue) / 100;
            } else {
                pfContribution =
                    (contributionFactor *
                        (basicPayIndex >= 0 ? +salaryComponents[basicPayIndex]?.salaryComponentPerMonth : 0)) /
                    100;
            }
        }

        if (isEmployeeProvidentFund == "false") {
            this.form.controls["employerPFContributionPerMonth"].setValue(Number(0).toFixed(2));
            this.form.controls["employerPFContributionPerAnnum"].setValue(Number(0).toFixed(2));
        } else {
            this.form.controls["employerPFContributionPerMonth"].setValue(Number(+pfContribution).toFixed(2));
            this.form.controls["employerPFContributionPerAnnum"].setValue(Number(+pfContribution * 12).toFixed(2));
        }

        ctc = ctc + pfContribution;
        let gratuity =
            (4.81 * (basicPayIndex >= 0 ? +salaryComponents[basicPayIndex]?.salaryComponentPerMonth : 0)) / 100;

        this.form.controls["gratuityPerMonth"].setValue(Number(+gratuity).toFixed(2));
        this.form.controls["gratuityPerAnnum"].setValue(Number(+gratuity * 12).toFixed(2));

        ctc = ctc + gratuity;

        this.form.controls["costTOCompanyCTCPerMonth"].setValue(Number(+ctc).toFixed(2));
        this.form.controls["costTOCompanyCTCPerAnnum"].setValue(Number(+ctc * 12).toFixed(2));

        salaryComponents = salaryComponents.map((ele: any, idx: any) => {
            if (ele.factor != "-") {
                if (ele.earningType == "Percentage Of CTC") {
                    ele.salaryComponentPerMonth = (+ctc ?? 0 * +ele.factor) / 100;
                    ele.salaryComponentPerAnnum = +ele.salaryComponentPerMonth * 12;
                }
            }
            ele.salaryComponentPerMonth = Number(+ele.salaryComponentPerMonth).toFixed(2);
            ele.salaryComponentPerAnnum = Number(+ele.salaryComponentPerAnnum).toFixed(2);

            return ele;
        });
        this.form.controls["salaryComponentDetails"].patchValue(salaryComponents);
    };

    update(formData: any) {
        this.spinner.show();
        this.salaryMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/master/salary_master_MS/SMMS-list"]);
        });
    }
    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, SALARY_MASTER_MS_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.isOld = false;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.salaryMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/master/salary_master_MS/SMMS-list"]);
        });
    }
    getInitialData() {
        this.spinner.show();
        this.salaryMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["isEmployeeProvidentFund"].patchValue("false");
            let EPF = this.form.controls["isEmployeeProvidentFund"].value;
            if (EPF == "false") {
                this.f.PFWagesForContribution.disable();
            }
            this.salaryComponentDetails.clear();

            let salaryComponents = result.salaryComponents.map((ele: any) => {
                this.addSalaryComponentDetails();
                return {
                    earningHead: ele.earningHead,
                    factor: ele.calculationFactor,
                    earningType: ele.earningType,
                    salaryComponentId: ele._id,
                    salaryComponentPerMonth: "0.00",
                    salaryComponentPerAnnum: "0.00"
                };
            });
            this.salaryComponentsArr = salaryComponents;
            let basicPayIndex = salaryComponents.map((x: any) => x.earningHead).indexOf("Basic Pay");
            let element = salaryComponents[basicPayIndex];
            salaryComponents.splice(basicPayIndex, 1);
            salaryComponents.splice(0, 0, element);
            this.form.controls["salaryComponentDetails"].patchValue(salaryComponents);
            this.form.controls["salaryMasterNumber"].setValue(result.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salaryMasterService.getById(params["id"]);
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

                    if (success.employeeId && success.employeeId._id) {
                        success.employeeId = success.employeeId._id;
                    }
                    if (success.effectFromDate) {
                        success.effectFromDate = this.utilityService.getFormatDate(
                            success.effectFromDate,
                            "YYYY-MM-DD"
                        );
                    }
                    this.salaryComponentDetails.clear();
                    success.salaryComponentDetails = success.salaryComponentDetails.map((ele: any) => {
                        this.addSalaryComponentDetails();
                        return {
                            earningHead: ele?.salaryComponentId?.earningHead,
                            factor: ele?.salaryComponentId?.calculationFactor,
                            earningType: ele?.salaryComponentId?.earningType,
                            salaryComponentId: ele?.salaryComponentId?._id,
                            salaryComponentPerMonth: ele.salaryComponentPerMonth,
                            salaryComponentPerAnnum: ele.salaryComponentPerAnnum
                        };
                    });
                    if (success.salaryComponentDetails.length < this.salaryComponentsArr.length) {
                        for (let i = 0; i < this.salaryComponentsArr.length; i++) {
                            const ele = this.salaryComponentsArr[i];
                            if (
                                !success.salaryComponentDetails.some(
                                    (x: any) => x.salaryComponentId == ele.salaryComponentId
                                )
                            ) {
                                this.addSalaryComponentDetails();
                                success.salaryComponentDetails.push(ele);
                            }
                        }
                    }

                    this.form.patchValue(success);
                    if (success.isEmployeeProvidentFund == "false") {
                        this.f.PFWagesForContribution.disable();
                    } else {
                        this.f.PFWagesForContribution.enable();
                    }
                    this.f.employeeId.disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
            // this.menuTitleService.set({
            //     type: this.action
            // });
        });
    }
}
