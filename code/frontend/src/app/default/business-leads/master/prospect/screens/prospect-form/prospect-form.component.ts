import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {STATES_LIST} from "@mocks/states.constant";
import {ProspectService} from "@services/business-leads";
import {PROSPECT_FORM_ERRORS} from "@mocks/validations/business-leads/prospect.validation";
import {SpinnerService, UtilityService} from "@core/services";
import {FORM_DEFAULT_ACTIONS} from "@mocks/constant";
import {ContactDetails} from "@shared/interfaces/business-leads";
import {ProspectContactDetailsComponent} from "../prospect-contact-details/prospect-contact-details.component";
import {ProspectMasterData} from "@mocks/models/business-leads/masters";
import {Location} from "@angular/common";

@Component({
    selector: "app-prospect-form",
    templateUrl: "./prospect-form.component.html"
})
export class ProspectFormComponent implements OnInit {
    action: any = FORM_DEFAULT_ACTIONS.create;
    actionsList: any = FORM_DEFAULT_ACTIONS;
    submitted = false;
    correspondenceAddressArray: any = [];
    contactDetailsArray: ContactDetails[] = [];
    masterData: ProspectMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: [],
        currenciesOptions: []
    };

    constructor(
        private prospectService: ProspectService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private modalService: NgbModal,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        prospectRegistrationCode: new UntypedFormControl(null),
        prospectRegistrationDate: new UntypedFormControl(null),
        prospectName: new UntypedFormControl(null, [Validators.required]),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        currency: new UntypedFormControl(null, [Validators.required]),
        correspondenceAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            line4: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            city: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            country: new UntypedFormControl(null)
        }),
        contactDetails: new UntypedFormControl([]),
        contactDetailsForm: new UntypedFormGroup({
            contactPersonName: new UntypedFormControl(null),
            contactPersonDesignation: new UntypedFormControl(null),
            contactPersonDepartment: new UntypedFormControl(null),
            contactPersonNumber: new UntypedFormControl(null),
            contactPersonEmail: new UntypedFormControl(null)
        }),
        status: new UntypedFormControl("Active")
    });

    get CorrespondenceAddress() {
        return this.form.get("correspondenceAddress") as UntypedFormGroup;
    }
    get contactDetailsForm() {
        return this.form.get("contactDetailsForm") as UntypedFormGroup;
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    statesOfIndia = STATES_LIST;

    ngOnInit(): void {
        this.getInitialData();
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, PROSPECT_FORM_ERRORS)) {
            return;
        }
        let contactDetailsForm = this.contactDetailsForm.value;
        if (!contactDetailsForm.contactPersonName || !contactDetailsForm.contactPersonNumber) {
            this.toastService.warning("Please add customer details !");
            return;
        }
        if (this.contactDetailsArray.length > 0) {
            this.contactDetailsArray[0] = contactDetailsForm;
        } else {
            this.contactDetailsArray.push(contactDetailsForm);
        }

        let formData: any = this.form.value;

        formData.contactDetails = this.contactDetailsArray;
        delete formData.contactDetailsForm;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.prospectService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.prospectService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    openContactDetailsModal() {
        let contactDetailsForm = this.contactDetailsForm.value;
        if (
            !contactDetailsForm.contactPersonName ||
            !contactDetailsForm.contactPersonNumber ||
            !contactDetailsForm.contactPersonEmail
        ) {
            this.toastService.warning("Please add customer contact details !");
            return;
        }
        if (this.contactDetailsArray.length > 0) {
            this.contactDetailsArray[0] = contactDetailsForm;
        } else {
            this.contactDetailsArray.push(contactDetailsForm);
        }

        const modalRef = this.modalService.open(ProspectContactDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.contactDetailsArr = this.contactDetailsArray;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.contactDetailsArray = success;
                    if (this.contactDetailsArray.length > 0) {
                        this.contactDetailsForm.patchValue(this.contactDetailsArray[0]);
                    }
                }
            },
            (reason: any) => {}
        );
    }
    getInitialData() {
        this.spinner.show();
        this.prospectService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["prospectRegistrationCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["prospectRegistrationDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.prospectService.getById(params["id"]);
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

                    if (success.prospectRegistrationDate) {
                        success.prospectRegistrationDate = success.prospectRegistrationDate.split("T")[0];
                    }

                    if (success.contactDetails.length) {
                        this.contactDetailsArray = success.contactDetails;
                        this.contactDetailsForm.patchValue(success.contactDetails[0]);
                    }
                    this.form.patchValue(success);
                    if (this.action != this.actionsList.edit) {
                        this.form.disable();
                    }
                });
        });
    }
}
