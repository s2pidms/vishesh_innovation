import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";
import {DEPARTMENT_MASTER_FORM_ERRORS} from "@mocks/validations/settings/departmentMaster.validation";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
import {DepartmentMasterService} from "@services/settings";
import {IDepartmentMasterData} from "@mocks/models/settings/masters";
import {CurrencyMasterService} from "@services/settings/currencyMaster.service";
import {ICurrencyMasterData} from "@mocks/models/settings/masters/currencyMasterData";
import {CURRENCY_MASTER_FORM_ERRORS} from "@mocks/validations/settings/currencyMaster.validation";

@Component({
    selector: "app-currency-master-form",
    templateUrl: "./currency-master-form.component.html"
})
export class CurrencyMasterFormComponent implements OnInit {
    subDepartments: any = [];
    collection: number = 0;
    masterData: ICurrencyMasterData = {
        autoIncrementNo: ""
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private currencyMasterService: CurrencyMasterService,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        currencyCode: new UntypedFormControl("", [Validators.required]),
        currencyName: new UntypedFormControl("", [Validators.required]),
        symbol: new UntypedFormControl("", [Validators.required]),
        exchangeRateToUSD: new UntypedFormControl("", [Validators.required]),
        sequence: new UntypedFormControl("", [Validators.required]),
        status: new UntypedFormControl("")
    });

    submitted = false;
    action: string = "create";

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, CURRENCY_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    update(formData: any) {
        this.spinner.show();
        this.currencyMasterService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.currencyMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.currencyMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["currencyCode"].setValue(this.masterData?.autoIncrementNo);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.currencyMasterService.getById(params["id"]);
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

                    this.subDepartments = success?.subDepartments;

                    this.form.patchValue(success);
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
        });
    }
}
