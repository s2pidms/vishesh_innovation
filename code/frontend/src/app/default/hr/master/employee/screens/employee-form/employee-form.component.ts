import {Component, OnInit} from "@angular/core";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {EmployeeService} from "@services/hr";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {EMPLOYEE_FORM_ERRORS} from "@mocks/validations/hr";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {IEmployeeMasterData} from "@mocks/models/hr&Admin/master/employeeMasterData";
import {EmployeeAdditionalInfoComponent} from "../employee-additional-info/employee-additional-info.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {JoiningDetailsComponent} from "../joining-details/joining-details.component";

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
    uploadBankPassBookFile: any = null;
    uploadBankCheckBookFile: any = null;
    uploadOfferLetterFile: any = null;
    uploadAppointmentLetterFile: any = null;
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
    credentialInfo: any = {};

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
        uploadOfferLetter: new UntypedFormControl(null),
        uploadOfferLetterUrl: new UntypedFormControl(null),
        uploadAppointmentLetter: new UntypedFormControl(null),
        uploadAppointmentLetterUrl: new UntypedFormControl(null),
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
        empRelievingLetterUrl: new UntypedFormControl(null),
        uploadBankPassBook: new UntypedFormControl(null),
        uploadBankPassBookUrl: new UntypedFormControl(null),
        uploadBankCheckBook: new UntypedFormControl(null),
        uploadBankCheckBookUrl: new UntypedFormControl(null)
    });

    statesOfIndia = STATES_LIST;

    get f() {
        return this.form.controls;
    }

    constructor(
        private formBuilder: UntypedFormBuilder,
        private employeeService: EmployeeService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
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
        if (this.uploadBankPassBookFile) {
            formData.append("uploadBankPassBook", this.uploadBankPassBookFile, this.uploadBankPassBookFile.name);
        }
        if (this.uploadBankCheckBookFile) {
            formData.append("uploadBankCheckBook", this.uploadBankCheckBookFile, this.uploadBankCheckBookFile.name);
        }
        if (this.uploadOfferLetterFile) {
            formData.append("uploadOfferLetter", this.uploadOfferLetterFile, this.uploadOfferLetterFile.name);
        }
        if (this.uploadAppointmentLetterFile) {
            formData.append(
                "uploadAppointmentLetter",
                this.uploadAppointmentLetterFile,
                this.uploadAppointmentLetterFile.name
            );
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
            this.location.back();
        });
    }

    update(id: string, formData: any) {
        this.spinner.show();
        this.employeeService.update(id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
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

            // this.menuTitleService.set({
            //     type: this.action
            // });
        });
    }

    copyAddress() {
        this.f["empPresentAddress"].setValue(this.f["empPermanentAddress"].value);
    }
    openAdditionalInfoModal() {
        const modalRef = this.modalService.open(EmployeeAdditionalInfoComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        // modalRef.componentInstance.familyInfo = {
        //   empFatherFullName: this.form.controls["empFatherFullName"].value,
        //   empFatherDOB: this.form.controls["empFatherDOB"].value,
        //   empFatherOccupation: this.form.controls["empFatherOccupation"].value,
        //   empMotherFullName: this.form.controls["empMotherFullName"].value,
        //   empMotherDOB: this.form.controls["empMotherDOB"].value,
        //   empMotherOccupation: this.form.controls["empMotherOccupation"].value,
        //   empSpouseFullName: this.form.controls["empSpouseFullName"].value,
        //   empSpouseDOB: this.form.controls["empSpouseDOB"].value,
        //   empSpouseOccupation: this.form.controls["empSpouseOccupation"].value,
        //   noOfDependentChildren: this.form.controls["noOfDependentChildren"].value,
        //   fullNameOfDependentChild1: this.form.controls["fullNameOfDependentChild1"]
        //     .value,
        //   fullNameOfDependentChild2: this.form.controls["fullNameOfDependentChild2"]
        //     .value,
        // };

        // modalRef.componentInstance.addressInfo = {
        //   empPermanentAddress: this.form.controls["empPermanentAddress"].value,
        //   empPresentAddress: this.form.controls["empPresentAddress"].value,
        // };

        // modalRef.componentInstance.joiningDetailsInfo = {
        //   empJoiningDate: this.form.controls["empJoiningDate"].value,
        //   empJoiningLocation: this.form.controls["empJoiningLocation"].value,
        //   empCadre: this.form.controls["empCadre"].value,
        //   empDesignation: this.form.controls["empDesignation"].value,
        //   empDepartment: this.form.controls["empDepartment"].value,
        //   empReportTo: this.form.controls["empReportTo"].value,
        //   empType: this.form.controls["empType"].value,
        //   empGrade: this.form.controls["empGrade"].value,
        //   empOTApplicability: this.form.controls["empOTApplicability"].value,
        // };
        // modalRef.componentInstance.credentialInfo = {
        //   empPhoto: this.form.controls["empPhoto"].value,
        //   empPhotoUrl: this.form.controls["empPhotoUrl"].value,
        //   empResume: this.form.controls["empResume"].value,
        //   empResumeUrl: this.form.controls["empResumeUrl"].value,
        //   empAadharCard: this.form.controls["empAadharCard"].value,
        //   empAadharCardUrl: this.form.controls["empAadharCardUrl"].value,
        //   empPanCard: this.form.controls["empPanCard"].value,
        //   empPanCardUrl: this.form.controls["empPanCardUrl"].value,
        //   empExpCertificate: this.form.controls["empExpCertificate"].value,
        //   empExpCertificateUrl: this.form.controls["empExpCertificateUrl"].value,
        //   empRelievingLetter: this.form.controls["empRelievingLetter"].value,
        //   empRelievingLetterUrl: this.form.controls["empRelievingLetterUrl"].value,
        // };
        // modalRef.componentInstance.bankDetailInfo = {
        //   empBefName: this.form.controls["empBefName"].value,
        //   empBankName: this.form.controls["empBankName"].value,
        //   empBankBranch: this.form.controls["empBankBranch"].value,
        //   empAccType: this.form.controls["empAccType"].value,
        //   empAccountNumber: this.form.controls["empAccountNumber"].value,
        //   empBankIFSCCode: this.form.controls["empBankIFSCCode"].value,
        // };
        // modalRef.componentInstance.status = {
        //   empStatus: this.form.controls["empStatus"].value,
        //   reasonOfLeaving: this.form.controls["reasonOfLeaving"].value,
        //   empDateOfResignation: this.form.controls["empDateOfResignation"].value,
        // };
        modalRef.componentInstance.masterData = this.masterData;
        modalRef.componentInstance.credentialInfo = this.credentialInfo;
        modalRef.componentInstance.formData = this.form.value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit", "copy"].includes(this.action)) {
                    this.form.patchValue(success.formData);
                    this.credentialInfo = success.credentialInfo;
                    this.empPhotoFile = success.credentialInfo.empPhotoFile;
                    this.empAadharCardFile = success.credentialInfo.empAadharCardFile;
                    this.empResumeFile = success.credentialInfo.empResumeFile;
                    this.empPanCardFile = success.credentialInfo.empPanCardFile;
                    this.empExpCertificateFile = success.credentialInfo.empExpCertificateFile;
                    this.empRelievingLetterFile = success.credentialInfo.empRelievingLetterFile;
                    this.uploadBankPassBookFile = success.credentialInfo.uploadBankPassBookFile;
                    this.uploadBankCheckBookFile = success.credentialInfo.uploadBankCheckBookFile;
                }
            },
            (reason: any) => {}
        );
    }
    openJoiningDetailsInfoModal() {
        const modalRef = this.modalService.open(JoiningDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;

        modalRef.componentInstance.joiningDetailsInfo = {
            empJoiningDate: this.form.controls["empJoiningDate"].value,
            empJoiningLocation: this.form.controls["empJoiningLocation"].value,
            empCadre: this.form.controls["empCadre"].value,
            empDesignation: this.form.controls["empDesignation"].value,
            empDepartment: this.form.controls["empDepartment"].value,
            empReportTo: this.form.controls["empReportTo"].value,
            empType: this.form.controls["empType"].value,
            empGrade: this.form.controls["empGrade"].value,
            empOTApplicability: this.form.controls["empOTApplicability"].value,
            uploadOfferLetter: this.form.controls["uploadOfferLetter"].value,
            uploadOfferLetterUrl: this.form.controls["uploadOfferLetterUrl"].value,
            uploadAppointmentLetter: this.form.controls["uploadAppointmentLetter"].value,
            uploadAppointmentLetterUrl: this.form.controls["uploadAppointmentLetterUrl"].value
        };

        modalRef.componentInstance.masterData = this.masterData;
        modalRef.componentInstance.uploadOfferLetterFile = this.uploadOfferLetterFile;
        modalRef.componentInstance.uploadAppointmentLetterFile = this.uploadAppointmentLetterFile;
        // modalRef.componentInstance.formData = this.form.value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit", "copy"].includes(this.action)) {
                    this.form.patchValue(success?.joiningDetailsInfo);
                    this.uploadOfferLetterFile = success?.uploadOfferLetterFile;
                    this.uploadAppointmentLetterFile = success?.uploadAppointmentLetterFile;
                }
            },
            (reason: any) => {}
        );
    }
}
