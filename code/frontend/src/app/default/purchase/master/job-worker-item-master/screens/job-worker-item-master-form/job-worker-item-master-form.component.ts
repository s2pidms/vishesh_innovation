import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable, mergeMap, of} from "rxjs";
import {ItemSupplier} from "@interfaces/itemSupplier";
import {CancelPoComponent} from "@modals/index";
import {ValidationService} from "@core/components";
import {COMPANY_TYPE_IP_MANUFACTURING, INDENT_CATEGORY, QC_LEVEL_STATUS} from "@mocks/constant";
import {InkHsnModalComponent} from "src/app/default/production/master/ink-master/screens/ink-hsn-modal/ink-hsn-modal.component";
import {AppGlobalService, SpinnerService, ToastService, UtilityService} from "@core/services";
import {DualUnitModalComponent, JobWorkerModalComponent} from "../components";
import {IJobWorkerItemMasterData} from "@mocks/models/purchase/masters/jobWorkerItemMasterData";
import {JobWorkerItemsMasterService} from "@services/purchase/jobWorkerItemsMaster.service";
import {PURCHASE_JOB_WORK_ITEM_FORM_ERRORS} from "@mocks/validations/purchase";

@Component({
    selector: "app-job-worker-item-master-form",
    templateUrl: "./job-worker-item-master-form.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class JobWorkerItemMasterFormComponent implements OnInit {
    unsavedChanges: boolean = false;
    jobWorkerDetails: ItemSupplier[] | any = [];
    active: number = 1;
    collection: number = 0;
    filterItems: any = [];
    action: string = "create";
    submitted = false;
    itemCategory: any = {};
    TDSFile: any = null;
    MSDSFile: any = null;
    drawingFile: any = null;
    empAadharCardFile: any = null;
    QCLevelsArr: any = QC_LEVEL_STATUS;
    selectedChannelPartnerDetails = {};
    POTypeObj: any = INDENT_CATEGORY;
    channelPartnerOptions: any = [];
    UOMUintMasterOptions: any = [];
    UOMDefaultValueOptions: any = [];
    masterData: IJobWorkerItemMasterData | any = {
        QCLevelsOptions: [],
        HSNCodesList: [],
        itemCategories: [],
        WXLDimensionsUnit: "",
        jobWorkerOptions: []
    };
    companyTypeIPManufacturing = COMPANY_TYPE_IP_MANUFACTURING;

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private jobWorkerItemsMasterService: JobWorkerItemsMasterService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        itemCategory: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemCode: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemName: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemDescription: new UntypedFormControl(null, [Validators.required]),
        primaryUnit: new UntypedFormControl(null),
        secondaryUnit: new UntypedFormControl(null),
        conversionFactor: new UntypedFormControl(null),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        conversionOfUnits: new UntypedFormControl(null),
        orderInfoUOM: new UntypedFormControl(null),
        unitConversionFlag: new UntypedFormControl(null),
        primaryConversion: new UntypedFormControl(null),
        secondaryConversion: new UntypedFormControl(null),
        dualUnitsDimensionsDetails: new UntypedFormControl(null),
        HSN: new UntypedFormControl(null, [Validators.required]),
        HSNCode: new UntypedFormControl(null, [Validators.required]),
        gst: new UntypedFormControl(null),
        igst: new UntypedFormControl(null),
        cgst: new UntypedFormControl(null),
        sgst: new UntypedFormControl(null),
        ugst: new UntypedFormControl(null),
        shelfLife: new UntypedFormControl(null, [Validators.required]),
        QCLevels: new UntypedFormControl(null, [Validators.required]),
        status: new UntypedFormControl(null),
        jobWorkerDetails: new UntypedFormGroup({
            jobWorker: new UntypedFormControl(null),
            jobWorkerName: new UntypedFormControl(null),
            currency: new UntypedFormControl(null),
            partNo: new UntypedFormControl(null),
            partName: new UntypedFormControl(null),
            uom1: new UntypedFormControl(null),
            uom2: new UntypedFormControl(null),
            stdCostUom1: new UntypedFormControl(null),
            stdCostUom2: new UntypedFormControl(null)
        })
    });
    get dimensionData() {
        return this.form.get("dualUnitsDimensionsDetails") as UntypedFormGroup;
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit(): void {
        this.UOMUintMasterOptions = this.appGlobalService.UOMUintMasterOptions;
        this.getInitialData();
        this.form.valueChanges.subscribe((x: any) => {
            this.unsavedChanges = true;
        });

        this.UOMDefaultValueOptions = this.appGlobalService?.UOMDefaultValueOptions;
        if (this.UOMDefaultValueOptions?.length > 0) {
            if (!this.f["orderInfoUOM"].value) {
                let primaryUnitData: any = null;
                primaryUnitData = this.findValue(this.UOMDefaultValueOptions, "PURCHASE_UOM");
                this.f["orderInfoUOM"].setValue(primaryUnitData);
            }
            if (!this.f["primaryUnit"].value) {
                let primaryUnitData: any = null;
                primaryUnitData = this.findValue(this.UOMDefaultValueOptions, "PURCHASE_PRIMARY_UNIT");
                this.f["primaryUnit"].setValue(primaryUnitData);
            }
        }
    }
    findValue(array: any, value: any) {
        return array?.find((x: any) => x?.parameterLabel == value)?.parameterName;
    }
    // Method to check if there are unsaved changes
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean | any {
        if (this.unsavedChanges) {
            return this.openCanDeactivateModal();
        }
        return true;
    }

    openCanDeactivateModal() {
        return new Promise<boolean>((resolve, reject) => {
            const modalRef = this.modalService.open(CancelPoComponent, {
                centered: true,
                size: "sm",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.heading = "Warning Message";
            modalRef.componentInstance.cancelText = "Do you want to leave this page without saving data ?";
            modalRef.result.then(
                (success: any) => {
                    if (success == "Yes") {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                },
                (reason: any) => {}
            );
        });
    }

    selectItemCategory(ev: any) {
        if (ev.target.value == "") {
            this.form.controls["jobWorkItemCode"].setValue(this.itemCategory[ev.target.value]);
            // this.form.controls["itemAMU"].disable();
        } else {
            if (ev.target.value) {
                this.form.controls["jobWorkItemCode"].setValue(this.itemCategory[ev.target.value]);
            }
            this.form.enable();
        }
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, PURCHASE_JOB_WORK_ITEM_FORM_ERRORS)) {
            // this.CGDisableFields();
            return;
        }

        if (this.jobWorkerDetails.length == 0) {
            this.toastService.warning("Please add at least one Job Worker detail !");
            return;
        }

        let formData: any = this.form.value;

        // if (this.action == "copy") {
        //     delete formData._id;
        // }

        formData.jobWorkerDetails = this.jobWorkerDetails;
        if (formData.rmSpecifications) {
            formData.rmSpecifications = [formData.rmSpecifications];
        }

        if (formData.primaryUnit && formData.secondaryUnit && formData.secondaryUnit != "-") {
            if (formData.primaryToSecondaryConversion) {
                formData.conversionOfUnits = `1 ${formData.primaryUnit} = ${formData.primaryToSecondaryConversion} ${formData.secondaryUnit}`;
            } else {
                formData.conversionOfUnits = `1 ${formData.secondaryUnit ?? "Unit"} = ${
                    formData.secondaryToPrimaryConversion ?? 1
                } ${formData.primaryUnit ?? "Unit"}`;
            }
        } else {
            formData.conversionOfUnits = "";
        }
        this.unsavedChanges = false;
        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.jobWorkerItemsMasterService.create(formData).subscribe(
            success => {
                this.submitted = false;
                this.spinner.hide();
                this.toastService.success(success.message);
                this.location.back();
            },
            error => {
                // this.CGDisableFields();
                console.log(error);
            }
        );
    }
    update(_id: string, formData: any) {
        this.spinner.show();
        this.jobWorkerItemsMasterService.update(_id, formData).subscribe(
            success => {
                this.spinner.hide();
                this.submitted = false;
                this.toastService.success(success.message);
                this.location.back();
            },
            error => {
                // this.CGDisableFields();
                console.log(error);
            }
        );
    }
    getInitialData() {
        this.spinner.show();
        this.jobWorkerItemsMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.itemCategory = result?.autoIncValues;
            this.masterData.QCLevelsOptions = this.masterData.QCLevelsOptions.map((x: any) => {
                return {
                    label: `${x.parameterName} - ${x.parameterLabel}`,
                    value: x.parameterName
                };
            });
            if (this.masterData?.itemCategories?.length == 1) {
                this.form.controls["itemCategory"].setValue(this.masterData?.itemCategories[0]);
                this.form.controls["jobWorkItemCode"].setValue(
                    this.itemCategory[this.form.controls["itemCategory"].value]
                );
                this.form.controls["itemCategory"].disable();
            }
            this.form.controls["status"].setValue("Active");
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.jobWorkerItemsMasterService.getById(params["id"]);
                        } else {
                            return of({});
                        }
                    })
                )
                .subscribe((success: any) => {
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        this.unsavedChanges = false;
                        return;
                    }

                    if (success.jobWorkerDetails.length) {
                        this.jobWorkerDetails = success.jobWorkerDetails;
                    }
                    this.form.patchValue(success);

                    // if (success.itemType == "Capital Goods") {
                    //     this.form.controls["itemAMU"].disable();
                    // }
                    // this.form.controls["itemType"].disable();
                    // this.form.controls["jobWorkItemCode"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    // if (this.action == "copy") {
                    //     this.form.enable();
                    //     delete success._id;
                    // }
                    this.unsavedChanges = false;
                });
        });
    }

    setPrimaryUnit(event: any) {
        // if (["Sheet", "Roll"].includes(event.target.value)) {
        //     this.toastService.warning("Primary Unit should be SQM always !");
        //     this.form.controls["orderInfoUOM"].setValue(null);
        //     this.form.controls["primaryUnit"].setValue(null);
        //     return;
        // }

        this.form.controls["primaryUnit"].setValue(event.target.value);
    }
    setGST() {
        let hsn = this.masterData?.HSNCodesList.find((x: any) => x.value == this.f["HSNCode"].value.trim());
        this.form.controls["gst"].setValue(hsn?.gstRate ?? 0);
        this.form.controls["igst"].setValue(hsn?.igstRate ?? 0);
        this.form.controls["cgst"].setValue(hsn?.cgstRate ?? 0);
        this.form.controls["sgst"].setValue(hsn?.sgstRate ?? 0);
        this.form.controls["ugst"].setValue(hsn?.ugstRate ?? 0);
        this.form.controls["HSN"].setValue(hsn?._id);
    }

    openFormulationHSNModal() {
        const modalRef = this.modalService.open(InkHsnModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.HSNCodeArr = this.masterData?.HSNCodesList;
        modalRef.componentInstance.editScreen = "Edit Screen";
        modalRef.componentInstance.HSNCode = this.form.controls["HSNCode"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["HSNCode"].setValue(success?.HSNSelectCode);
                    this.setGST();
                }
            },
            (reason: any) => {}
        );
    }

    openJobWorkerDetailsModal() {
        const modalRef = this.modalService.open(JobWorkerModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
            // windowClass: "modelPage"
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.primaryUnit = this.form.controls["orderInfoUOM"].value;
        modalRef.componentInstance.unitConversionFlag = this.form.controls["unitConversionFlag"].value;
        modalRef.componentInstance.secondaryUnit = this.form.controls["secondaryUnit"].value;
        modalRef.componentInstance.primaryToSecondaryConversion =
            this.form.controls["primaryToSecondaryConversion"].value;
        modalRef.componentInstance.secondaryToPrimaryConversion =
            this.form.controls["secondaryToPrimaryConversion"].value;
        modalRef.componentInstance.jobWorkerDetails = this.jobWorkerDetails;
        modalRef.componentInstance.jobWorkerOptions = this.masterData?.jobWorkerOptions;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    console.log("success", success);

                    this.jobWorkerDetails = success;
                    this.unsavedChanges = true;
                }
            },
            (reason: any) => {}
        );
    }

    openUOMDetailsModal() {
        const modalRef = this.modalService.open(DualUnitModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.ModalUOMsUnit = this.UOMUintMasterOptions;
        modalRef.componentInstance.flag = true;
        modalRef.componentInstance.dimensionData = this.dimensionData.value;
        modalRef.componentInstance.WXLDimensionsUnit = this.masterData?.WXLDimensionsUnit;
        modalRef.componentInstance.dualUnits = {
            primaryUnit: this.form.value.primaryUnit,
            secondaryUnit: this.form.value.secondaryUnit,
            unitConversionFlag: this.form.value.unitConversionFlag,
            primaryConversion: this.form.value.primaryConversion,
            secondaryConversion: this.form.value.secondaryConversion,
            primaryToSecondaryConversion: this.form.value.primaryToSecondaryConversion,
            secondaryToPrimaryConversion: this.form.value.secondaryToPrimaryConversion
        };
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    console.log("success", success);

                    this.form.patchValue(success);
                    this.form.controls["orderInfoUOM"].setValue(success.primaryUnit);
                    this.form.controls["dualUnitsDimensionsDetails"].patchValue(success?.dualUnitsDimensionsDetails);
                    this.unsavedChanges = true;
                }
            },
            (reason: any) => {}
        );
    }
    // CGDisableFields() {
    //     if (this.form.controls["itemType"].value == "Capital Goods") {
    //         this.form.controls["itemAMU"].disable();
    //     }
    // }
}
