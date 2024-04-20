import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "@services/hr";
import {Router, ActivatedRoute} from "@angular/router"; 
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {EMPLOYEE_FORM_ERRORS} from "@mocks/validations/hr";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {IEmployeeMasterData} from "@mocks/models/hr&Admin/master/employeeMasterData";

@Component({
    selector: "app-employee-form",
    templateUrl: "./employee-form.component.html"
})
export class EmployeeFormComponent implements OnInit {
    active: number = 1;
    submitted = false;
    action: string = "create";  
    empPhotoFile: any = null;
    empResumeFile: any = null;
    empAadharCardFile: any = null;
    empPanCardFile: any = null;
    empExpCertificateFile: any = null;
    empRelievingLetterFile: any = null;
    masterData: IEmployeeMasterData = {
        autoIncrementNo: "",
        empDesignationsOptions: [],
        empCadresOptions: [],
        empTypesOptions: [],
        empGradesOptions: [],
        joiningLocationOptions: [],
        empDepartmentsOptions: [],
        employeesOptions: []
    };

    form = this.formBuilder.group({
        _id: new UntypedFormControl(null),
        empCode: new UntypedFormControl(null, [Validators.required]),
        empStatus: new UntypedFormControl("A"),
        empDateOfResignation: new UntypedFormControl(""),
        reasonOfLeaving: new UntypedFormControl(""),
        isLogin: new UntypedFormControl(false),
        empFirstName: new UntypedFormControl("", [Validators.required]),
        empMiddleName: new UntypedFormControl(null),
        empLastName: new UntypedFormControl("", [Validators.required]),
        empGender: new UntypedFormControl(null, [Validators.required]),
        empDOB: new UntypedFormControl(""),
        empContactNo: new UntypedFormControl(null),
        empAadharNo: new UntypedFormControl(null),
        empPANNo: new UntypedFormControl(null),
        empMartialStatus: new UntypedFormControl(null),
        qualification: new UntypedFormControl(null),
        empPFNo: new UntypedFormControl(null),
        empESICNo: new UntypedFormControl(null),
        empEmailCompany: new UntypedFormControl(null, [Validators.email]),
        empEmailPersonal1: new UntypedFormControl(null),
        empEmailPersonal2: new UntypedFormControl(null),
        empFatherFullName: new UntypedFormControl(null),
        empFatherDOB: new UntypedFormControl(""),
        empFatherOccupation: new UntypedFormControl(null),
        empMotherFullName: new UntypedFormControl(null),
        empMotherDOB: new UntypedFormControl(""),
        empMotherOccupation: new UntypedFormControl(null),
        empSpouseFullName: new UntypedFormControl(null),
        empSpouseDOB: new UntypedFormControl(""),
        empSpouseOccupation: new UntypedFormControl(null),
        noOfDependentChildren: new UntypedFormControl(null),
        fullNameOfDependentChild1: new UntypedFormControl(null),
        fullNameOfDependentChild2: new UntypedFormControl(null),
        empPermanentAddress: new UntypedFormGroup({
            _id: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            city: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            country: new UntypedFormControl(null)
        }),
        empPresentAddress: new UntypedFormGroup({
            _id: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            city: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            country: new UntypedFormControl(null)
        }),
        empJoiningDate: new UntypedFormControl(null, [Validators.required]),
        empJoiningLocation: new UntypedFormControl(null),
        empGrade: new UntypedFormControl(null),
        empDesignation: new UntypedFormControl(null, [Validators.required]),
        empDepartment: new UntypedFormControl(null, [Validators.required]),
        empReportTo: new UntypedFormControl(null),
        empOTApplicability: new UntypedFormControl(null),
        empType: new UntypedFormControl(null),
        empCadre: new UntypedFormControl(null),
        empBefName: new UntypedFormControl(null),
        empBankName: new UntypedFormControl(null),
        empBankBranch: new UntypedFormControl(null),
        empAccType: new UntypedFormControl(null),
        empAccountNumber: new UntypedFormControl(null),
        empBankIFSCCode: new UntypedFormControl(null),
        empPhoto: new UntypedFormControl(null),
        empPhotoUrl: new UntypedFormControl(null),
        empResume: new UntypedFormControl(null),
        empResumeUrl: new UntypedFormControl(null),
        empAadharCard: new UntypedFormControl(null),
        empAadharCardUrl: new UntypedFormControl(null),
        empPanCard: new UntypedFormControl(null),
        empPanCardUrl: new UntypedFormControl(null),
        empExpCertificate: new UntypedFormControl(null),
        empExpCertificateUrl: new UntypedFormControl(null),
        empRelievingLetter: new UntypedFormControl(null),
        empRelievingLetterUrl: new UntypedFormControl(null)
    });

    statesOfIndia = STATES_LIST;

    get f() {
        return this.form.controls;
    }

    constructor(
        private formBuilder: UntypedFormBuilder,
        private employeeService: EmployeeService,
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
        if (this.validationService.checkErrors(this.form, EMPLOYEE_FORM_ERRORS)) {
            return;
        }
        this.form.enable();
        let formValue: any = this.form.value;

        if (formValue.empPermanentAddress) {
            formValue.empPermanentAddress = [formValue.empPermanentAddress];
        }

        if (formValue.empPresentAddress) {
            formValue.empPresentAddress = [formValue.empPresentAddress];
        }

        let formData = new FormData();
        formData.append("key", "emp");
        for (let i = 0; i < Object.keys(formValue).length; i++) {
            const key = Object.keys(formValue)[i];
            if (formValue[key] && typeof formValue[key] == "object") {
                if (formValue[key]) {
                    formData.append(key, JSON.stringify(formValue[key]));
                }
            } else {
                if (formValue[key] || formValue[key] == false) {
                    formData.append(key, formValue[key]);
                }
            }
        }
        if (this.empPhotoFile) {
            formData.append("empPhoto", this.empPhotoFile, this.empPhotoFile.name);
        }
        if (this.empResumeFile) {
            formData.append("empResume", this.empResumeFile, this.empResumeFile.name);
        }
        if (this.empAadharCardFile) {
            formData.append("empAadharCard", this.empAadharCardFile, this.empAadharCardFile.name);
        }
        if (this.empPanCardFile) {
            formData.append("empPanCard", this.empPanCardFile, this.empPanCardFile.name);
        }
        if (this.empExpCertificateFile) {
            formData.append("empExpCertificate", this.empExpCertificateFile, this.empExpCertificateFile.name);
        }
        if (this.empRelievingLetterFile) {
            formData.append("empRelievingLetter", this.empRelievingLetterFile, this.empRelievingLetterFile.name);
        }

        if (formValue._id) {
            this.update(formValue._id, formData);
        } else {
            delete formValue._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.employeeService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/master/employee/emp-list"]);
        });
    }

    update(id: string, formData: any) {
        this.spinner.show();
        this.employeeService.update(id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/HR/master/employee/emp-list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.employeeService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["empCode"].setValue(this.masterData.autoIncrementNo); 
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.employeeService.getById(params["id"]);
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

                    if (success.empDOB) {
                        success.empDOB = this.utilityService.getFormatDate(success.empDOB, "YYYY-MM-DD");
                    }
                    if (success.empDateOfResignation) {
                        success.empDateOfResignation = this.utilityService.getFormatDate(
                            success.empDateOfResignation,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.empFatherDOB) {
                        success.empFatherDOB = this.utilityService.getFormatDate(success.empFatherDOB, "YYYY-MM-DD");
                    }
                    if (success.empMotherDOB) {
                        success.empMotherDOB = this.utilityService.getFormatDate(success.empMotherDOB, "YYYY-MM-DD");
                    }
                    if (success.empSpouseDOB) {
                        success.empSpouseDOB = this.utilityService.getFormatDate(success.empSpouseDOB, "YYYY-MM-DD");
                    }
                    if (success.empJoiningDate) {
                        success.empJoiningDate = this.utilityService.getFormatDate(
                            success.empJoiningDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.empPermanentAddress.length == 1) {
                        success.empPermanentAddress = success.empPermanentAddress[0];
                    }
                    if (success.empPresentAddress.length == 1) {
                        success.empPresentAddress = success.empPresentAddress[0];
                    }

                    this.form.patchValue(success);

                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });

            this.menuTitleService.set({
                type: this.action
            });
        });
    }

    copyAddress() {
        this.f["empPresentAddress"].setValue(this.f["empPermanentAddress"].value);
    }
}
