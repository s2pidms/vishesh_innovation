import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {MenuTitleService, SpinnerService, UtilityService, ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {FG_CORRECTION_FORM_ERRORS} from "@mocks/validations/production";
import {FGCorrectionService} from "@services/production";
import {FG_CORRECTION_CATEGORY, LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {IFGCorrectionMasterData} from "@mocks/models/production/transactions";
@Component({
    selector: "app-fg-form",
    templateUrl: "./fg-form.component.html"
})
export class FgFormComponent implements OnInit {
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    conditions: any = "";
    action: string = "";
    submitted = false;
    FGINOptions: any = [];
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    correctionCategory: any = FG_CORRECTION_CATEGORY;
    masterData: IFGCorrectionMasterData = {
        autoIncrementNo: "",
        SKUOptions: []
    };
    constructor(
        private fgCorrectionService: FGCorrectionService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        FGNo: new UntypedFormControl(null),
        FGDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        SKU: new UntypedFormControl(null, [Validators.required]),
        SKUNo: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null, [Validators.required]),
        correctionCategory: new UntypedFormControl(null, [Validators.required]),
        sourceBatch: new UntypedFormControl(null, [Validators.required]),
        transferQty: new UntypedFormControl(null),
        destinationBatch: new UntypedFormControl(null),
        newBatch: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        availableSourceQty: new UntypedFormControl(null),
        correctedQty: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, FG_CORRECTION_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        this.create(formData);
    }
    create(formData: any) {
        this.spinner.show();

        this.fgCorrectionService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();

        this.fgCorrectionService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["sourceBatch"].disable();
            this.form.controls["newBatch"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["FGDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["FGNo"].setValue(this.masterData?.autoIncrementNo);

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        if (params["id"]) {
                            // get patch data
                            return this.fgCorrectionService.getById(params["id"]);
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
                    // patch all forms fields

                    this.form.patchValue(success);
                    // disable form if action is not 'Edit'
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                });
            this.menuTitleService.set({
                title: "FG Correction",
                subTitle: null,
                type: this.action
            });
        });
    }

    setBatchDate(ev: any) {
        this.conditions = "";
        this.form.controls["sourceBatch"].setValue(null);
        this.form.controls["correctionCategory"].setValue(null);
        this.form.controls["sourceBatch"].disable();
        this.form.controls["SKUNo"].setValue(ev?.SKUNo);
        this.form.controls["SKUDescription"].setValue(ev?.SKUDescription);
        this.form.controls["SKU"].setValue(ev?._id);

        this.fgCorrectionService.getFGCorrectionBySKUId(ev._id).subscribe(success => {
            this.FGINOptions = success;
        });
    }

    setSourceQty() {
        let sourceQty = this.form.controls["availableSourceQty"].value;
        let transferQty = this.form.controls["transferQty"].value;
        if (transferQty > sourceQty) {
            this.toastService.error("Rename/Transfer Qty. should not be greater than Available Source Qty.");
            this.form.controls["transferQty"].setValue(0);
            return;
        }
    }

    setAvailableSourceQty(ev: any) {
        let avbSrcQty = this.FGINOptions.find((x: any) => x._id == ev.target.value);
        this.form.controls["availableSourceQty"].setValue(avbSrcQty?.FGINQuantity);
    }

    reset() {
        this.conditions = "";
        this.form.reset();
        this.getInitialData();
    }

    setCorrection(ev: any) {
        this.form.controls["sourceBatch"].enable();
        this.conditions = ev.target.value;
    }
}
