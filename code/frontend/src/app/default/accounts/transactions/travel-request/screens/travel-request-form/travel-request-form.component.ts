import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService, ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {SpinnerService, UtilityService} from "@core/services";
import {TravelRequestService} from "@services/accounts/travelRequest.service";
import {TRAVEL_REQUEST_FORM_ERRORS} from "@mocks/validations/accounts/travelRequest.validation";

@Component({
    selector: "app-travel-request-form",
    templateUrl: "./travel-request-form.component.html"
})
export class TravelRequestFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    customersList: any = [];
    paymentMethod: any = [];
    modeOfTransport: any = [];
    currencies: any = [];
    supportingDocumentsFile: any = null;
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    user: any = {};

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private travelRequestService: TravelRequestService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private storageService: StorageService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        travelCode: new UntypedFormControl(null),
        requestDate: new UntypedFormControl(null),
        travelForm: new UntypedFormControl(null, [Validators.required]),
        travelDestination: new UntypedFormControl(null, [Validators.required]),
        travelStartDate: new UntypedFormControl(null, [Validators.required]),
        travelEndDate: new UntypedFormControl(null, [Validators.required]),
        purposeOfTravel: new UntypedFormControl(null, [Validators.required]),
        modeOfTransportation: new UntypedFormControl(null),
        estimatedBudget: new UntypedFormControl(null, [Validators.required]),
        costAllocation: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null),
        paymentMethod: new UntypedFormControl(null),
        raisedBy: new UntypedFormControl(null),
        supportingDocumentsFile: new UntypedFormControl(null),
        supportingDocumentsFileUrl: new UntypedFormControl(null),
        status: new UntypedFormControl(null)
    });
    get f() {
        return this.form.controls;
    }
    getRaisedByName() {
        this.user = this.storageService.get("IDMSAUser");
        this.form.controls["raisedBy"].setValue(this.user.name);
    }
    ngOnInit(): void {
        this.getRaisedByName();
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {queryParams: {id, action}});
    }

    reset() {
        this.form.reset();
        this.getRaisedByName();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, TRAVEL_REQUEST_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        let formValue = new FormData();
        formValue.append("key", "travelRequest");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    formValue.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    formValue.append(key, formData[key]);
                }
            }
        }
        if (this.supportingDocumentsFile) {
            if (typeof this.supportingDocumentsFile == "object") {
                formValue.append(
                    "supportingDocumentsFile",
                    this.supportingDocumentsFile,
                    this.supportingDocumentsFile.name
                );
            }
        }

        if (formData._id) {
            this.update(formData._id, formValue);
        } else {
            delete formData._id;
            this.create(formValue);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.travelRequestService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/accounts/transactions/travel_request/list"]);
        });
    }

    update(_id: any, formData: any) {
        this.spinner.show();
        this.travelRequestService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["/default/accounts/transactions/travel_request/list"]);
        });
    }

    getInitialData() {
        this.spinner.show();
        this.travelRequestService.getAllMasterData({}).subscribe(success => {
            this.form.controls["travelCode"].setValue(success.autoIncrementNo);
            this.form.controls["requestDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["travelStartDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);
            this.customersList = success.customersList;
            this.modeOfTransport = success.modeOfTransport;

            this.currencies = success.currencies;
            this.paymentMethod = success.paymentMethod;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.travelRequestService.getById(params["id"]);
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
                    if (success.requestDate) {
                        success.requestDate = this.utilityService.getFormatDate(success.requestDate, "YYYY-MM-DD");
                    }
                    if (success.travelStartDate) {
                        success.travelStartDate = this.utilityService.getFormatDate(
                            success.travelStartDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.travelEndDate) {
                        success.travelEndDate = this.utilityService.getFormatDate(success.travelEndDate, "YYYY-MM-DD");
                    }
                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }

    setDateValidation() {
        let travelStartDate = this.form.controls["travelStartDate"].value;
        let travelEndDate = this.form.controls["travelEndDate"].value;
        if (travelStartDate > travelEndDate) {
            this.toastService.warning("Travel End Date should not be smaller than Travel start date.");
            this.form.controls["travelEndDate"].setValue(null);
        }
    }

    setCustomerId(ev: any) {
        this.form.controls["customer"].setValue(ev?._id);
    }
}
