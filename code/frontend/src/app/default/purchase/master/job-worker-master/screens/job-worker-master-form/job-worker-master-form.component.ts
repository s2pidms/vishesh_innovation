import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {JobWorkerService} from "@services/purchase";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BankDetails} from "@interfaces/bankDetails";
import {ValidationService} from "@core/components";
import {AddSuppliersAddressComponent} from "src/app/default/purchase/modals/add-suppliers-address/add-suppliers-address.component";
import {STATES_LIST} from "@mocks/states.constant";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {Address} from "@shared/interfaces";
import {IJobWorkerMasterData} from "@mocks/models/purchase/masters";
import {
    JwBankDetailsModalComponent,
    JwContactDetailsModalComponent,
    JwMSMECategoryModalComponent,
    JwNickNameModalComponent
} from "../components";
import {JOB_WORKER_FORM_ERRORS} from "@mocks/validations/purchase";

@Component({
    selector: "app-job-worker-master-form",
    templateUrl: "./job-worker-master-form.component.html",
    styleUrls: ["./job-worker-master-form.component.scss"]
})
export class JobWorkerMasterFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    jobWorkerAdditionalPlacesOfBusiness: Address[] = [];
    jobWorkerBankDetails: BankDetails[] = [];
    jobWorkerContactDetails: any = [];
    additionalPlacesOfBusiness: any = [];
    active: number | any = -1;
    cpaPurchaseAgreement: any = null;
    statesOfIndia = STATES_LIST;
    masterData: IJobWorkerMasterData = {
        autoIncrementNo: "",
        currenciesOptions: [],
        paymentTermsOptions: [],
        purchaseCountryOptions: []
    };

    constructor(
        private jobWorkerService: JobWorkerService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService,
        private fb: FormBuilder
    ) {}
    tabs = [1, 2, 3, 4, 5];
    counter = this.tabs.length + 1;

    close(event: MouseEvent, toRemove: number) {
        this.tabs = this.tabs.filter(id => id !== toRemove);
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    add(event: MouseEvent) {
        this.tabs.push(this.counter++);
        event.preventDefault();
    }

    form: FormGroup = this.fb.group({
        _id: [null],
        jobWorkerCode: [null, [Validators.required]],
        jobWorkerName: [null, [Validators.required]],
        jobWorkerNickName: [null],
        GSTClassification: [null],
        GSTINNo: [null],
        PANNo: [null],
        currency: [null],
        paymentTerms: [null],
        MSMEClassification: [null],
        status: ["Active"],
        primaryAddress: this.fb.group({
            country: [null],
            state: [null],
            cityOrDistrict: [null],
            pinCode: [null],
            line1: [null],
            line2: [null],
            line3: [null],
            line4: [null]
        }),
        additionalPlacesOfBusiness: [[]],
        contactDetails: this.fb.group({
            contactPersonName: [null],
            department: [null],
            designation: [null],
            mobileNo: [null],
            emailId: [null]
        }),
        bankDetails: this.fb.group({
            befName: [null],
            bankName: [null],
            accountNumber: [null],
            accountType: [null],
            bankIFSCCode: [null],
            bankSwiftCode: [null]
        })
    });

    get f() {
        return this.form.controls;
    }
    get jobWorkerContactInfo() {
        return this.form.get("contactDetails") as UntypedFormGroup;
    }
    get jobWorkerBankInfo() {
        return this.form.get("bankDetails") as UntypedFormGroup;
    }
    get primaryAddressDetails() {
        return this.form.get("primaryAddress") as UntypedFormGroup;
    }

    newAdditionalAddress() {
        this.additionalPlacesOfBusiness.push({
            country: null,
            state: null,
            cityOrDistrict: null,
            pinCode: null,
            line1: null,
            line2: null,
            line3: null,
            line4: null
        });
    }

    addPlace(): void {
        if (["edit", "create"].includes(this.action)) {
            let lastIndex = this.additionalPlacesOfBusiness.length - 1;
            let addressDetails: any = {};
            if (lastIndex != -1) {
                addressDetails = this.additionalPlacesOfBusiness[lastIndex];
            } else {
                addressDetails = this.primaryAddressDetails.value;
            }
            if (!addressDetails.country) {
                this.toastService.warning("Country is required !");
                return;
            }
            if (!addressDetails.state) {
                this.toastService.warning("State/Province is required !");
                return;
            }
            if (!addressDetails.cityOrDistrict) {
                this.toastService.warning("City/District is required !");
                return;
            }
            if (!addressDetails.pinCode) {
                this.toastService.warning("Pin Code is required !");
                return;
            }
            if (!addressDetails.line1) {
                this.toastService.warning("Address Line 1 is required !");
                return;
            }
            if (!addressDetails.line2) {
                this.toastService.warning("Address Line 2 is required !");
                return;
            }
            if (!addressDetails.line3) {
                this.toastService.warning("Address Line 3 is required !");
                return;
            }
            this.newAdditionalAddress();
            this.active = this.additionalPlacesOfBusiness.length - 1;
        }
    }

    removePlace(i: number) {
        if (["edit", "create"].includes(this.action)) {
            this.additionalPlacesOfBusiness.splice(i, 1);
            if (i == this.active) {
                this.active = this.additionalPlacesOfBusiness.length - 1;
            }
        }
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, JOB_WORKER_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.additionalPlacesOfBusiness = this.additionalPlacesOfBusiness;
        formData.contactDetails = this.jobWorkerContactDetails;
        formData.bankDetails = this.jobWorkerBankDetails;
        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.jobWorkerService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.jobWorkerService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        this.spinner.show();
        this.jobWorkerService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["jobWorkerCode"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["status"].setValue("Active");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.jobWorkerService.getById(params["id"]);
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

                    this.additionalPlacesOfBusiness = success.additionalPlacesOfBusiness;
                    this.jobWorkerBankDetails = success.bankDetails;
                    this.jobWorkerContactDetails = success.contactDetails;
                    this.form.patchValue(success);
                    // this.setPANNumber();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    setPANNumber() {
        let GSTINNo = this.f["GSTINNo"].value;
        let PANValue = this.utilityService.patchPANNumber(GSTINNo);
        this.f["PANNo"].setValue(PANValue);
    }

    openContactDetailsModal() {
        const modalRef = this.modalService.open(JwContactDetailsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.jobWorkerContactDetails = this.jobWorkerContactDetails;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.jobWorkerContactDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
    openNickNameModal() {
        const modalRef = this.modalService.open(JwNickNameModalComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.jobWorkerNickName = this.form.controls["jobWorkerNickName"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.f["jobWorkerNickName"].setValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openMSMECategoryModal() {
        const modalRef = this.modalService.open(JwMSMECategoryModalComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.MSMEClassification = this.form.controls["MSMEClassification"].value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.f["MSMEClassification"].setValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openBankDetailsModal() {
        const modalRef = this.modalService.open(JwBankDetailsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.jobWorkerBankDetails = this.jobWorkerBankDetails;
        modalRef.componentInstance.jobWorkerName = this.form.controls["jobWorkerName"].value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.jobWorkerBankDetails = success;
                }
            },
            (reason: any) => {}
        );
    }
}
