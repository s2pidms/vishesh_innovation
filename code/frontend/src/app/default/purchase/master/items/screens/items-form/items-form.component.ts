import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable, mergeMap, of} from "rxjs";
import {ItemSupplier} from "@interfaces/itemSupplier";
import {
    AddItemChannelPartnerComponent,
    AddItemSuppliersComponent,
    AddItemUOMComponent,
    CancelPoComponent
} from "@modals/index";
import {ItemsService} from "@services/purchase";
import {PURCHASE_ITEM_FORM_ERRORS} from "@mocks/validations/purchase/item.validation";
import {ValidationService} from "@core/components";
import {StockLevelsComponent} from "src/app/default/planning/master/child-item/screens/stock-levels/stock-levels.component";
import {COMPANY_TYPE_IP_MANUFACTURING, INDENT_CATEGORY, QC_LEVEL_STATUS} from "@mocks/constant";
import {InkHsnModalComponent} from "src/app/default/production/master/ink-master/screens/ink-hsn-modal/ink-hsn-modal.component";
import {AppGlobalService, SpinnerService, ToastService, UtilityService} from "@core/services";
import {IItemMasterData} from "@mocks/models/purchase/masters";
import {ItemAttributesComponent} from "../components";

@Component({
    selector: "app-items-form",
    templateUrl: "./items-form.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class ItemsFormComponent implements OnInit {
    unsavedChanges: boolean = false;
    supplierDetails: ItemSupplier[] | any = [];
    channelDetails: ItemSupplier[] | any = [];
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
    masterData: IItemMasterData = {
        autoIncrementNo: "",
        companyType: "",
        stockLevelButtonCondition: "",
        itemCategories: [],
        HSNCodesList: [],
        suppliersOptions: [],
        channelPartnerOptions: [],
        QCLevelsOptions: [],
        WXLDimensionsUnit: []
    };
    companyTypeIPManufacturing = COMPANY_TYPE_IP_MANUFACTURING;

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private itemsService: ItemsService,
        private modalService: NgbModal,
        private location: Location,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService
    ) {}

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        itemType: new UntypedFormControl(null, [Validators.required]),
        itemCode: new UntypedFormControl(null, [Validators.required]),
        itemSubCategory: new UntypedFormControl(null),
        benchmarkPrice: new UntypedFormControl(null),
        itemName: new UntypedFormControl(null, [Validators.required]),
        itemDescription: new UntypedFormControl(null, [Validators.required]),
        itemPacking: new UntypedFormControl(null),
        isActive: new UntypedFormControl("A", [Validators.required]),
        orderInfoUOM: new UntypedFormControl(null, [Validators.required]),
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        hsn: new UntypedFormControl(null, [Validators.required]),
        itemAMU: new UntypedFormControl(null),
        itemROL: new UntypedFormControl(null),
        gst: new UntypedFormControl(null),
        igst: new UntypedFormControl(null),
        cgst: new UntypedFormControl(null),
        sgst: new UntypedFormControl(null),
        ugst: new UntypedFormControl(null),
        secondaryUnit: new UntypedFormControl(null),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),
        conversionFactor: new UntypedFormControl(null),
        unitConversionFlag: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        conversionOfUnits: new UntypedFormControl(null),
        qtyOnHand: new UntypedFormControl(null),
        reorderLevel: new UntypedFormControl(null),
        reorderLevelWeeks: new UntypedFormControl(null),
        reorderLevelMax: new UntypedFormControl(null),
        moq: new UntypedFormControl(null),
        eoq: new UntypedFormControl(null),
        annualPurchase: new UntypedFormControl(null),
        location: new UntypedFormControl(null),
        image: new UntypedFormControl(null),
        rfqCreate: new UntypedFormControl(null),
        assetCreate: new UntypedFormControl(null),
        tdsCreate: new UntypedFormControl(null),
        tdsFile: new UntypedFormControl(null),
        tdsFileUrl: new UntypedFormControl(null),

        msdsCreate: new UntypedFormControl(null),
        msdsFile: new UntypedFormControl(null),
        msdsFileUrl: new UntypedFormControl(null),

        drawing: new UntypedFormControl(null),
        drawingUrl: new UntypedFormControl(null),

        rohsCreate: new UntypedFormControl(null),
        rohsFile: new UntypedFormControl(null),
        shelfLife: new UntypedFormControl(null, [Validators.required]),
        storageTemp: new UntypedFormControl(null),
        storageHumidity: new UntypedFormControl(null),
        specialStorageInstruction: new UntypedFormControl(null),
        generalSpecifications: new UntypedFormControl(null),
        QCLevels: new UntypedFormControl(null, [Validators.required]),
        binNumber: new UntypedFormControl(null),
        casNumber: new UntypedFormControl(null),
        locationId: new UntypedFormControl(null),
        locationName: new UntypedFormControl("Factory"),
        leadTime: new UntypedFormControl(null),
        remarks: new UntypedFormControl(null),

        itemMiSL: new UntypedFormControl(null),
        itemMaSL: new UntypedFormControl(null),
        supplierDetails: new UntypedFormControl([]),
        channelDetails: new UntypedFormControl([]),
        inventoryStockLevels: new UntypedFormControl({}),
        // specificationInfo: new UntypedFormControl([]),
        rmSpecifications: new UntypedFormGroup({
            parameter: new UntypedFormControl(null),
            testMethod: new UntypedFormControl(null),
            specification: new UntypedFormControl(null)
        }),
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
            // if (!this.f["secondaryUnit"].value) {
            //     let secondaryUnitData: any = null;
            //     secondaryUnitData = this.findValue(this.UOMDefaultValueOptions, "PURCHASE_SECONDARY_UNIT");
            //     this.f["secondaryUnit"].setValue(secondaryUnitData);
            // }
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
        if (ev.target.value == "Capital Goods") {
            this.form.controls["itemCode"].setValue(this.itemCategory[ev.target.value]);
            this.form.controls["itemAMU"].disable();
        } else {
            if (ev.target.value) {
                this.form.controls["itemCode"].setValue(this.itemCategory[ev.target.value]);
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
        if (this.validationService.checkErrors(this.form, PURCHASE_ITEM_FORM_ERRORS)) {
            this.CGDisableFields();
            return;
        }

        if (this.supplierDetails.length == 0) {
            this.toastService.warning("Please add at least one Supplier detail !");
            return;
        }
        // if (this.channelDetails.length == 0) {
        //     this.toastService.warning("Please add at least one Supplier detail !");
        //     return;
        // }
        let formData: any = this.form.value;

        if (this.action == "copy") {
            delete formData._id;
        }

        formData.supplierDetails = this.supplierDetails;
        formData.channelDetails = this.channelDetails;
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
        let formValue = new FormData();
        formValue.append("key", "items");
        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];

            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    formValue.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key] || formData[key] == false) {
                    formValue.append(key, formData[key]);
                }
            }
        }
        if (this.TDSFile) {
            if (typeof this.TDSFile == "object") {
                formValue.append("tdsFile", this.TDSFile, this.TDSFile.name);
            }
        }
        if (this.MSDSFile) {
            if (typeof this.MSDSFile == "object") {
                formValue.append("msdsFile", this.MSDSFile, this.MSDSFile.name);
            }
        }
        if (this.drawingFile) {
            if (typeof this.drawingFile == "object") {
                formValue.append("drawing", this.drawingFile, this.drawingFile.name);
            }
        }
        this.unsavedChanges = false;
        if (formData._id) {
            this.update(formData._id, formValue);
        } else {
            delete formData._id;
            this.create(formValue);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.itemsService.create(formData).subscribe(
            success => {
                this.submitted = false;
                this.spinner.hide();
                this.toastService.success(success.message);
                this.location.back();
            },
            error => {
                this.CGDisableFields();
                console.log(error);
            }
        );
    }
    update(_id: string, formData: any) {
        this.spinner.show();
        this.itemsService.update(_id, formData).subscribe(
            success => {
                this.spinner.hide();
                this.submitted = false;
                this.toastService.success(success.message);
                this.location.back();
            },
            error => {
                this.CGDisableFields();
                console.log(error);
            }
        );
    }
    getInitialData() {
        this.spinner.show();
        this.itemsService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.masterData.QCLevelsOptions = this.masterData.QCLevelsOptions.map((x: any) => {
                return {
                    label: `${x.parameterName} - ${x.parameterLabel}`,
                    value: x.parameterName
                };
            });
            this.form.controls["itemCode"].setValue(this.masterData?.autoIncrementNo);
            this.itemCategory = result?.autoIncValues;
            this.form.controls["isActive"].setValue("A");
            this.form.controls["locationName"].setValue("Factory");
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.itemsService.getById(params["id"]);
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

                    if (success.supplierDetails.length) {
                        this.supplierDetails = success.supplierDetails;
                    }
                    if (success.channelDetails.length) {
                        this.channelDetails = success.channelDetails;
                    }

                    if (success.secondaryUnit == "-") {
                        success.primaryToSecondaryConversion = null;
                    }

                    this.form.patchValue(success);

                    if (success.itemType == "Capital Goods") {
                        this.form.controls["itemAMU"].disable();
                    }
                    this.form.controls["itemType"].disable();
                    this.form.controls["itemCode"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    if (this.action == "copy") {
                        this.form.enable();
                        delete success._id;
                    }
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
        let hsn = this.masterData?.HSNCodesList.find((x: any) => x.value == this.f["hsn"].value.trim());
        this.form.controls["gst"].setValue(hsn?.gstRate ?? 0);
        this.form.controls["igst"].setValue(hsn?.igstRate ?? 0);
        this.form.controls["cgst"].setValue(hsn?.cgstRate ?? 0);
        this.form.controls["sgst"].setValue(hsn?.sgstRate ?? 0);
        this.form.controls["ugst"].setValue(hsn?.ugstRate ?? 0);
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
        modalRef.componentInstance.HSNCode = this.form.controls["hsn"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["hsn"].setValue(success?.HSNSelectCode);
                    this.setGST();
                }
            },
            (reason: any) => {}
        );
    }

    openSuppliersDetailsModal() {
        const modalRef = this.modalService.open(AddItemSuppliersComponent, {
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
        modalRef.componentInstance.supplierDetails = this.supplierDetails;
        modalRef.componentInstance.supInfo = this.masterData?.suppliersOptions;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit", "copy"].includes(this.action)) {
                    console.log("success", success);

                    this.supplierDetails = success;
                    this.unsavedChanges = true;
                }
            },
            (reason: any) => {}
        );
    }
    openChannelPartnerDetailsModal() {
        const modalRef = this.modalService.open(AddItemChannelPartnerComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.primaryUnit = this.form.controls["orderInfoUOM"].value;
        modalRef.componentInstance.unitConversionFlag = this.form.controls["unitConversionFlag"].value;
        modalRef.componentInstance.secondaryUnit = this.form.controls["secondaryUnit"].value;
        modalRef.componentInstance.primaryToSecondaryConversion =
            this.form.controls["primaryToSecondaryConversion"].value;
        modalRef.componentInstance.secondaryToPrimaryConversion =
            this.form.controls["secondaryToPrimaryConversion"].value;
        modalRef.componentInstance.channelDetails = this.channelDetails;
        modalRef.componentInstance.channelPartnerOptions = this.masterData?.channelPartnerOptions;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit", "copy"].includes(this.action)) {
                    this.channelDetails = success;
                }
            },
            (reason: any) => {}
        );
    }

    openUOMDetailsModal() {
        const modalRef = this.modalService.open(AddItemUOMComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.ModalUOMsUnit = this.UOMUintMasterOptions;
        modalRef.componentInstance.flag = true;
        modalRef.componentInstance.isNotApplicable = true;
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
                if (success && ["create", "edit", "copy"].includes(this.action)) {
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
    CGDisableFields() {
        if (this.form.controls["itemType"].value == "Capital Goods") {
            this.form.controls["itemAMU"].disable();
        }
    }
    openStockLevelDetailsModal() {
        const modalRef = this.modalService.open(StockLevelsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.unitOfMeasurement = this.form.value.orderInfoUOM;
        modalRef.componentInstance.inventoryStockLevels = this.form.value.inventoryStockLevels;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit", "copy"].includes(this.action)) {
                    this.form.controls["inventoryStockLevels"].patchValue(success);
                    this.form.controls["itemAMU"].setValue(success.reorderQuantity);
                    this.form.controls["itemROL"].setValue(success.reorderLevel);
                    this.unsavedChanges = true;
                }
            },
            (reason: any) => {}
        );
    }

    openItemAttributesModal() {
        const modalRef = this.modalService.open(ItemAttributesComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.genSpecs = {
            shelfLife: this.form.controls["shelfLife"].value,
            storageTemp: this.form.controls["storageTemp"].value,
            storageHumidity: this.form.controls["storageHumidity"].value,
            specialStorageInstruction: this.form.controls["specialStorageInstruction"].value
        };
        modalRef.componentInstance.qcLevelsObj = this.form.controls["QCLevels"].value;

        // modalRef.componentInstance.itemRemarksObj = {
        //     generalSpecifications: this.form.controls["generalSpecifications"].value
        // };
        modalRef.componentInstance.itemUploadDocs = {
            tdsFile: this.form.controls["tdsFile"].value,
            tdsFileUrl: this.form.controls["tdsFileUrl"].value,
            msdsFile: this.form.controls["msdsFile"].value,
            msdsFileUrl: this.form.controls["msdsFileUrl"].value,
            drawing: this.form.controls["drawing"].value,
            drawingUrl: this.form.controls["drawingUrl"].value
        };

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit", "copy"].includes(this.action)) {
                    this.form.patchValue(success.genSpecs);
                    // this.form.controls["generalSpecifications"].setValue(
                    //     success?.itemRemarksObj?.generalSpecifications
                    // );
                    this.form.controls["QCLevels"].setValue(success?.qcLevelsObj);
                    this.form.patchValue(success.qcLevelsObj);
                    this.TDSFile = success.itemUploadDocs.TDSFile;
                    this.MSDSFile = success.itemUploadDocs.MSDSFile;
                    this.drawingFile = success.itemUploadDocs.drawingFile;
                    // this.unsavedChanges = true;
                }
            },
            (reason: any) => {}
        );
    }
}
