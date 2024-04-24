import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AddItemUOMComponent} from "@modals/index";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChildItemsService} from "@services/planning";
import {mergeMap, of} from "rxjs";
import {CHILD_ITEM_SOURCE_OF_MFG} from "@mocks/constant";
import {ValidationService} from "@core/components";
import {PLANNING_CHILD_ITEM_FORM_ERRORS} from "@mocks/validations/planning/childItem.validation";
import {ToastService, SpinnerService, UtilityService, AppGlobalService} from "@core/services";
import {IChildAndGrandMasterData} from "@mocks/models/planning/masters";
import {InkHsnModalComponent} from "src/app/default/production/master/ink-master/screens/ink-hsn-modal/ink-hsn-modal.component";
import {ChildItemSupplierModalComponent} from "../../../child-item/screens/child-item-supplier-modal/child-item-supplier-modal.component";
@Component({
    selector: "app-grand-child-item-form",
    templateUrl: "./grand-child-item-form.component.html"
})
export class GrandChildItemFormComponent implements OnInit {
    // serviceProviderDetails: any = [];
    action: string = "create";
    submitted = false;
    isDisabled = true;
    autoIncValues: any = {};
    sourceOfMfg: any = CHILD_ITEM_SOURCE_OF_MFG;
    childItemId: any = "";

    masterData: IChildAndGrandMasterData = {
        HSNCodesList: [],
        suppliersOptions: [],
        WXLDimensionsUnit: []
    };
    supplierDetails: any = [];
    UOMUintMasterOptions: any = [];
    UOMDefaultValueOptions: any = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private childItemsService: ChildItemsService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location,
        private appGlobalService: AppGlobalService
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        childItemCategory: new UntypedFormControl(null, [Validators.required]),
        itemCode: new UntypedFormControl(null, [Validators.required]),
        itemName: new UntypedFormControl(null, [Validators.required]),
        itemDescription: new UntypedFormControl(null, [Validators.required]),
        HSNCode: new UntypedFormControl(null),
        HSN: new UntypedFormControl(null, [Validators.required]),
        unitOfMeasurement: new UntypedFormControl(null, [Validators.required]),
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        secondaryUnit: new UntypedFormControl(null),

        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        conversionOfUnits: new UntypedFormControl(null),
        unitConversionFlag: new UntypedFormControl(1),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),

        // avgConsumptionPerMonth: new UntypedFormControl(null),
        itemCost: new UntypedFormControl(null, [Validators.required]),
        sourceOfManufacturing: new UntypedFormControl(null, [Validators.required]),
        // serviceProviderDetailsForm: new UntypedFormGroup({
        //     extServiceProvider: new UntypedFormControl(null),
        //     extServiceProviderName: new UntypedFormControl(null),
        //     manufacturingCost: new UntypedFormControl(null),
        //     paymentTerms: new UntypedFormControl(null)
        // }),
        shelfLife: new UntypedFormControl(null),
        // storageTemp: new UntypedFormControl(null, [Validators.required]),
        // storageHumidity: new UntypedFormControl(null, [Validators.required]),
        // specialStorageInstruction: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        // serviceProviderDetails: new UntypedFormControl([]),
        supplierDetails: new UntypedFormControl([]),
        // inventoryStockLevels: new UntypedFormControl({}),
        dualUnitsDimensionsDetails: new UntypedFormGroup({
            type: new UntypedFormControl(null),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            widthUnit: new UntypedFormControl(null),
            lengthUnit: new UntypedFormControl(null),
            widthInMM: new UntypedFormControl(null),
            lengthInM: new UntypedFormControl(null),
            sqmPerRoll: new UntypedFormControl(null)
        })
    });

    // get SPD() {
    //     return this.form.get("serviceProviderDetailsForm") as UntypedFormGroup;
    // }
    get dimensionData() {
        return this.form.get("dualUnitsDimensionsDetails") as UntypedFormGroup;
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.UOMUintMasterOptions = this.appGlobalService.UOMUintMasterOptions;
        this.getInitialData();
        // this.form.controls["avgConsumptionPerMonth"].disable();
        this.UOMDefaultValueOptions = this.appGlobalService?.UOMDefaultValueOptions;
        if (this.UOMDefaultValueOptions?.length > 0) {
            if (!this.f["unitOfMeasurement"].value) {
                let primaryUnitData: any = null;
                primaryUnitData = this.findValue(this.UOMDefaultValueOptions, "PURCHASE_UOM");
                this.f["unitOfMeasurement"].setValue(primaryUnitData);
            }
            if (!this.f["primaryUnit"].value) {
                let primaryUnitData: any = null;
                primaryUnitData = this.findValue(this.UOMDefaultValueOptions, "PURCHASE_PRIMARY_UNIT");
                this.f["primaryUnit"].setValue(primaryUnitData);
            }
            if (!this.f["secondaryUnit"].value) {
                let secondaryUnitData: any = null;
                secondaryUnitData = this.findValue(this.UOMDefaultValueOptions, "PURCHASE_SECONDARY_UNIT");
                this.f["secondaryUnit"].setValue(secondaryUnitData);
            }
        }
    }
    findValue(array: any, value: any) {
        return array?.find((x: any) => x?.parameterLabel == value)?.parameterName;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.form.reset();
        // this.SPD.enable();
        this.isDisabled = true;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, PLANNING_CHILD_ITEM_FORM_ERRORS)) {
            return;
        }
        // let SPD = this.SPD.value;
        // if (this.form.controls["sourceOfManufacturing"].value != "Outsourced") {
        // } else if (!SPD.extServiceProvider || !SPD.manufacturingCost) {
        //     this.toastService.warning("Please add Service Provider Details !");
        //     return;
        // }

        // if (this.serviceProviderDetails.length > 0) {
        //     this.serviceProviderDetails[0] = SPD;
        // } else {
        //     this.serviceProviderDetails.push(SPD);
        // }
        let formData: any = this.form.value;
        formData.supplierDetails = this.supplierDetails;
        // delete formData.serviceProviderDetailsForm;

        if (formData.primaryToSecondaryConversion) {
            formData.conversionOfUnits = `1 ${formData.primaryUnit} - ${formData.primaryToSecondaryConversion} ${formData.secondaryUnit}`;
        } else {
            formData.conversionOfUnits = `1 ${formData.secondaryUnit} - ${formData.secondaryToPrimaryConversion} ${formData.primaryUnit}`;
        }

        if (formData._id) {
            this.update(formData._id, formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.childItemsService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    update(_id: string, formData: any) {
        this.spinner.show();
        this.childItemsService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    getInitialData() {
        this.spinner.show();
        this.childItemsService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.autoIncValues = result?.autoIncValues;
            this.form.controls["childItemCategory"].setValue("L30/Grand Child");
            this.form.controls["itemCode"].setValue(this.autoIncValues["L30/Grand Child"]);
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);
            this.form.controls["status"].setValue("Active");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.childItemsService.getById(params["id"]);
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

                    this.supplierDetails = success.supplierDetails;

                    // if (success.serviceProviderDetails.length) {
                    //     this.serviceProviderDetails = success.serviceProviderDetails;
                    //     this.SPD.patchValue(this.serviceProviderDetails[0]);
                    // }
                    this.childItemId = success?._id;
                    this.form.patchValue(success);
                    // if (success.sourceOfManufacturing == "Inhouse") {
                    //     this.isDisabled = false;
                    //     this.SPD.controls["extServiceProvider"].setValue(null);
                    //     this.SPD.controls["extServiceProviderName"].setValue(null);
                    //     this.SPD.controls["manufacturingCost"].setValue(null);
                    //     this.SPD.controls["paymentTerms"].setValue(null);
                    //     this.SPD.disable();
                    // } else {
                    //     this.SPD.enable();
                    //     this.isDisabled = true;
                    // }
                    if (this.action == "view") {
                        this.form.disable();
                    }
                    if (this.action == "edit") {
                        this.form.controls["sourceOfManufacturing"].disable();
                    }
                });
        });
    }
    setItemCode(ev: any) {
        this.form.controls["itemCode"].setValue(this.autoIncValues[ev.target.value]);
    }

    setSourceOfManufacturing(ev: any) {
        // if (ev.target.value == "Inhouse") {
        //     this.isDisabled = false;
        //     this.SPD.controls["extServiceProvider"].setValue(null);
        //     this.SPD.controls["extServiceProviderName"].setValue(null);
        //     this.SPD.controls["manufacturingCost"].setValue(null);
        //     this.SPD.controls["paymentTerms"].setValue(null);
        //     this.SPD.disable();
        // } else {
        //     this.SPD.enable();
        //     this.isDisabled = true;
        // }
    }

    setServiceProviderName(ev: any) {
        // if (!this.form.controls["sourceOfManufacturing"].value) {
        //     this.toastService.warning("Please Click First Source of Manufacturing !");
        //     this.SPD.controls["extServiceProviderName"].setValue(null);
        //     this.SPD.controls["extServiceProvider"].setValue(null);
        //     return;
        // }
        // this.SPD.controls["extServiceProviderName"].setValue(ev.ESPName);
    }

    setHSNId(ev: any) {
        this.form.controls["HSNCode"].setValue(ev.hsnCode);
    }

    setPrimaryUnit() {
        // if (["Sheet", "Roll"].includes(this.form.controls["unitOfMeasurement"].value)) {
        //     this.toastService.warning("Primary Unit should be SQM always !");
        //     this.form.controls["unitOfMeasurement"].setValue(null);
        //     this.form.controls["primaryUnit"].setValue(null);
        //     return;
        // }
        this.form.controls["primaryUnit"].setValue(this.form.controls["unitOfMeasurement"].value);
    }

    openServiceProviderDetailsModal() {
        // if (this.form.controls["sourceOfManufacturing"].value == "Outsourced") {
        //     let SPD = this.SPD.value;
        //     if (this.form.controls["sourceOfManufacturing"].value == "Outsourced" && !SPD) {
        //     } else if (!SPD.extServiceProvider || !SPD.manufacturingCost) {
        //         this.toastService.warning("Please add Service Provider Details !");
        //         return;
        //     }
        //     if (this.serviceProviderDetails.length > 0) {
        //         this.serviceProviderDetails[0] = SPD;
        //     } else {
        //         this.serviceProviderDetails.push(SPD);
        //     }
        //     const modalRef = this.modalService.open(ServiceProviderDetailsComponent, {
        //         centered: true,
        //         size: "xl",
        //         backdrop: "static",
        //         keyboard: false
        //     });
        //     modalRef.componentInstance.action = this.action;
        //     modalRef.componentInstance.paymentTerms = this.paymentTerms;
        //     modalRef.componentInstance.serviceProviderDetails = this.serviceProviderDetails;
        //     modalRef.componentInstance.ExtServiceProviderName = this.ExtServiceProviderName;
        //     modalRef.result.then(
        //         (success: any) => {
        //             if (["create", "edit"].includes(this.action)) {
        //                 this.serviceProviderDetails = success;
        //                 if (this.serviceProviderDetails.length > 0) {
        //                     this.SPD.patchValue(this.serviceProviderDetails[0]);
        //                 }
        //             }
        //         },
        //         (reason: any) => {}
        //     );
        // }
    }

    openStockLevelDetailsModal() {
        // const modalRef = this.modalService.open(StockLevelsComponent, {
        //     centered: true,
        //     size: "lg",
        //     backdrop: "static",
        //     keyboard: false
        // });
        // modalRef.componentInstance.action = this.action;
        // modalRef.componentInstance.unitOfMeasurement = this.form.value.unitOfMeasurement;
        // modalRef.componentInstance.inventoryStockLevels = this.form.value.inventoryStockLevels;
        // modalRef.result.then(
        //     (success: any) => {
        //         if (["create", "edit"].includes(this.action)) {
        //             this.form.controls["inventoryStockLevels"].patchValue(success);
        //             // this.form.controls["avgConsumptionPerMonth"].setValue(success?.avgConsumptionPerDay);
        //         }
        //     },
        //     (reason: any) => {}
        // );
    }
    openUOMDetailsModal() {
        const modalRef = this.modalService.open(AddItemUOMComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.ModalUOMsUnit = this.UOMUintMasterOptions;
        modalRef.componentInstance.WXLDimensionsUnit = this.masterData?.WXLDimensionsUnit;
        modalRef.componentInstance.flag = true;
        modalRef.componentInstance.dimensionData = this.dimensionData.value;
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
                    this.form.patchValue(success);
                    this.form.controls["unitOfMeasurement"].setValue(success?.primaryUnit);
                    this.form.controls["dualUnitsDimensionsDetails"].patchValue(success?.dualUnitsDimensionsDetails);
                }
            },
            (reason: any) => {}
        );
    }

    viewBOM() {
        // let payload = {
        //     childItemId: this.childItemId,
        //     category: this.form.controls["childItemCategory"].value
        // };
        // this.childItemsService.viewByBOMId(payload).subscribe(success => {
        //     if (this.form.controls["childItemCategory"].value == CHILD_ITEM_CATEGORY_NAME[0]) {
        //         this.router.navigate(["/default/planning/master/bill-of-material/bom_of_child_item/form"], {
        //             queryParams: {
        //                 id: success.BOMData._id,
        //                 action: "viewBOM"
        //             }
        //         });
        //     } else {
        //         this.router.navigate(["/default/planning/master/bill-of-material/bom_of_gr_child_item/form"], {
        //             queryParams: {
        //                 id: success.BOMData._id,
        //                 action: "viewBOM"
        //             }
        //         });
        //     }
        // });
    }

    openSuppliersDetailsModal() {
        const modalRef = this.modalService.open(ChildItemSupplierModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.sourceOfManufacturing = this.form.controls["sourceOfManufacturing"].value;
        modalRef.componentInstance.primaryUnit = this.form.controls["unitOfMeasurement"].value;
        modalRef.componentInstance.unitConversionFlag = this.form.controls["unitConversionFlag"].value;
        modalRef.componentInstance.secondaryUnit = this.form.controls["secondaryUnit"].value;
        modalRef.componentInstance.primaryToSecondaryConversion =
            this.form.controls["primaryToSecondaryConversion"].value;
        modalRef.componentInstance.secondaryToPrimaryConversion =
            this.form.controls["secondaryToPrimaryConversion"].value;
        modalRef.componentInstance.supplierDetails = this.supplierDetails;
        modalRef.componentInstance.suppliers = this.masterData?.suppliersOptions;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.supplierDetails = success?.supplierDetails;
                    this.form.controls["sourceOfManufacturing"].setValue(success?.sourceOfManufacturing);
                }
            },
            (reason: any) => {}
        );
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
                    if (success.HSNSelectCode) {
                        let HSNId = this.masterData?.HSNCodesList.find(
                            (x: any) => x.hsnCode == success.HSNSelectCode
                        )?._id;
                        this.form.controls["HSN"].setValue(HSNId);
                    }
                }
            },
            (reason: any) => {}
        );
    }
}
