import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {SKUService} from "@services/sales";
import {AppGlobalService, SpinnerService} from "@core/services";
import {ToastService} from "@core/services";
import {Observable, mergeMap, of} from "rxjs";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SKUCustomerInfo} from "@interfaces/SKUCustomerInfo";
import {AddItemUOMComponent, CancelPoComponent, CustomSearchDetailsModalComponent} from "@shared/modals";
import {SKU_FORM_ERRORS} from "@mocks/validations/sales";
import {UtilityService} from "@core/services";
import {COMPANY_TYPE_INJECTION_MOLDING, COMPANY_TYPE_IP_MANUFACTURING, SKU_STAGE_OPTIONS} from "@mocks/constant";
import {InkHsnModalComponent} from "src/app/default/production/master/ink-master/screens/ink-hsn-modal/ink-hsn-modal.component";
import {Location} from "@angular/common";
import {ISKUMasterMasterData} from "@mocks/models/sales/master";
import {CanComponentDeactivate} from "@core/guards/UnsavedChangesGuard";
import TABLE_HEADERS from "./tableHeaders";
import {
    ProductCategoryModalComponent,
    SKUCustomerInjectionMoldingComponent,
    SkuAttributesComponent
} from "../components";
@Component({
    selector: "app-sku-form",
    templateUrl: "./sku-form.component.html",
    styles: [
        `
            .fa {
                font-size: 1.6rem !important;
            }
        `
    ]
})
export class SKUFormComponent implements OnInit, CanComponentDeactivate {
    unsavedChanges: boolean = false;
    active: number = 1;
    submitted = false;
    action: string = "create";
    tableData: any = [];
    mouldData: any = [];
    customerInfoArray: SKUCustomerInfo[] | any = [];
    // drawingArtWorkFile: any = null;
    // productionLayoutFile: any = null;
    photoFile: any = null;
    companyTypeInjectionMolding = COMPANY_TYPE_INJECTION_MOLDING;
    companyTypeIPManufacturing = COMPANY_TYPE_IP_MANUFACTURING;
    SKUCategoryValues: any = {};
    selectedDetails: any = {};
    UOMDefaultValueOptions: any = [];
    tableHead: any = TABLE_HEADERS;
    SKUStageObj: any = SKU_STAGE_OPTIONS;
    salesUOMUintMasterOptions: any = [];
    SKUStageArr: any = this.SKUStageObj.getAllSKUStage();
    masterData: ISKUMasterMasterData = {
        companyType: "",
        attributesList: [],
        customersOptions: [],
        // costSheetList: [],
        productCategoryOptions: [],
        UOMOptions: [],
        // specificationList: [],
        materialList: [],
        inkList: [],
        hsnCodesOptions: [],
        mapHSNCategoryList: [],
        WXLDimensionsUnit: [],
        mouldInfo: [],
        shoulderTypeOptions: []
    };
    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        SKUStage: new UntypedFormControl(null, [Validators.required]),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        SKUNo: new UntypedFormControl(null, [Validators.required]),
        productCode: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null, [Validators.required]),
        SKUDescription: new UntypedFormControl(null, [Validators.required]),
        hsn: new UntypedFormControl(null, [Validators.required]),
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        secondaryUnit: new UntypedFormControl(null),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),
        conversionFactor: new UntypedFormControl(null),
        unitConversionFlag: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        locationId: new UntypedFormControl(null),
        locationName: new UntypedFormControl(null),
        internalPartNo: new UntypedFormControl(null),
        artWorkNo: new UntypedFormControl(null),
        artWorkHyperLink: new UntypedFormControl(null),
        shelfLife: new UntypedFormControl(null),
        storageTemp: new UntypedFormControl(null),
        storageHumidity: new UntypedFormControl(null),
        specialStorageInstruction: new UntypedFormControl(null),
        generalSpecifications: new UntypedFormControl(null),
        // drawingArtWorkFile: new UntypedFormControl(null),
        // drawingArtWorkFileUrl: new UntypedFormControl(null),
        // productionLayoutFile: new UntypedFormControl(null),
        // productionLayoutFileUrl: new UntypedFormControl(null),
        inkDetails: new UntypedFormControl([]),
        specificationInfo: new UntypedFormControl([]),
        totalNoOfColors: new UntypedFormControl(null),
        remarks: new UntypedFormControl(null),
        isActive: new UntypedFormControl("A"),
        customerInfo: new UntypedFormControl([]),
        BOMDimensionInfo: new UntypedFormGroup({
            unit1: new UntypedFormControl("mm"),
            unit2: new UntypedFormControl("mm"),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            mSqArea: new UntypedFormControl(null)
        }),
        dimensionsDetails: new UntypedFormGroup({
            actualDimensions: new UntypedFormGroup({
                unit: new UntypedFormControl("mm"),
                width: new UntypedFormControl(null),
                length: new UntypedFormControl(null),
                ups: new UntypedFormControl(1),
                area: new UntypedFormControl(null),
                mSqArea: new UntypedFormControl(null)
            }),
            layoutDimensions: new UntypedFormGroup({
                unit: new UntypedFormControl("mm"),
                width: new UntypedFormControl(null),
                length: new UntypedFormControl(null),
                ups: new UntypedFormControl(null),
                area: new UntypedFormControl(null),
                mSqArea: new UntypedFormControl(null),
                wastePercentage: new UntypedFormControl(null)
            })
        }),
        offTakeInfo: new UntypedFormGroup({
            annualOffTake: new UntypedFormControl(0),
            offTakeFrequency: new UntypedFormControl(0),
            avgMonthlyOffTake: new UntypedFormControl(0),
            proposedBatchQty: new UntypedFormControl(0),
            processCAQty: new UntypedFormControl(0),
            toolingCAQty: new UntypedFormControl(0)
        }),
        toolInfo: new UntypedFormGroup({
            tool1Id: new UntypedFormControl(null),
            tool2Id: new UntypedFormControl(null),
            tool3Id: new UntypedFormControl(null)
        }),
        specsAttribute: new UntypedFormGroup({
            diameter: new UntypedFormControl(null),
            height: new UntypedFormControl(null),
            finish: new UntypedFormControl(null),
            shoulderType: new UntypedFormControl(null),
            threadType: new UntypedFormControl(null),
            orifice: new UntypedFormControl(null),
            weight: new UntypedFormControl(null),
            placeHolder: new UntypedFormControl(null)
        }),
        mouldsIDAttribute: new UntypedFormControl([]),
        packingStdAttribute: new UntypedFormGroup({
            primaryPacking: new UntypedFormControl(null),
            secondaryPacking: new UntypedFormControl(null)
        }),
        materialInfo: new UntypedFormControl([]),
        costSheetInfo: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }

    get addressPermanent() {
        return this.form.get("empPermanentAddress") as UntypedFormGroup;
    }
    get addressPresent() {
        return this.form.get("empPresentAddress") as UntypedFormGroup;
    }
    get dimensionsDetailsData() {
        return this.form.get("dimensionsDetails") as UntypedFormGroup;
    }
    get bomDimData() {
        return this.form.get("BOMDimensionInfo") as UntypedFormGroup;
    }
    get offTakeData() {
        return this.form.get("offTakeInfo") as UntypedFormGroup;
    }
    get toolInfoData() {
        return this.form.get("toolInfo") as UntypedFormGroup;
    }
    get specsAttributeData() {
        return this.form.get("specsAttribute") as UntypedFormGroup;
    }
    get mouldsIDAttributeData() {
        return this.form.get("mouldsIDAttribute") as UntypedFormGroup;
    }
    get packingStdAttributeData() {
        return this.form.get("packingStdAttribute") as UntypedFormGroup;
    }

    constructor(
        private skuService: SKUService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location,
        private appGlobalService: AppGlobalService
    ) {}

    ngOnInit(): void {
        this.salesUOMUintMasterOptions = this.appGlobalService.salesUOMUintMasterOptions;
        this.getInitialData();
        this.form.valueChanges.subscribe((x: any) => {
            this.unsavedChanges = true;
        });

        this.UOMDefaultValueOptions = this.appGlobalService?.UOMDefaultValueOptions;
        if (this.UOMDefaultValueOptions?.length > 0) {
            if (!this.f["primaryUnit"].value) {
                let primaryUnitData: any = null;
                primaryUnitData = this.findValue(this.UOMDefaultValueOptions, "SALES_UOM");
                this.f["primaryUnit"].setValue(primaryUnitData);
            }
            if (!this.f["secondaryUnit"].value) {
                let secondaryUnitData: any = null;
                secondaryUnitData = this.findValue(this.UOMDefaultValueOptions, "SALES_SECONDARY_UNIT");
                this.f["secondaryUnit"].setValue(secondaryUnitData);
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

    reset() {
        this.form.reset();
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, SKU_FORM_ERRORS)) {
            return;
        }
        if (this.customerInfoArray.length == 0) {
            this.toastService.warning("Please add atleast one customer detail !");
            return;
        }

        let formData: any = this.form.value;
        if (this.action == "copy") {
            delete formData._id;
        }

        // if (formData.primaryToSecondaryConversion) {
        //   formData.conversionOfUnits = `1 ${formData.primaryUnit} - ${formData.primaryToSecondaryConversion} ${formData.secondaryUnit}`;
        // } else {
        //   formData.conversionOfUnits = `1 ${formData.secondaryUnit} - ${formData.secondaryToPrimaryConversion} ${formData.primaryUnit}`;
        // }

        formData.customerInfo = this.customerInfoArray;
        formData.inkDetails = this.masterData?.inkList.filter((x: any) => x.colSeq > 0);
        // formData.specificationInfo = this.masterData?.specificationList.filter((x: any) => x.seq > 0);
        formData.materialInfo = this.masterData?.materialList
            .filter((x: any) => x.isSelect == true)
            .map((x: any) => {
                x.ups = this.dimensionsDetailsData?.value?.layoutDimensions?.ups;
                return x;
            });
        // formData.costSheetInfo = this.masterData?.costSheetList;
        // delete formData.drawingArtWorkFile;
        // delete formData.productionLayoutFile;

        let SKUformData = new FormData();
        SKUformData.append("key", "Sku");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    SKUformData.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    SKUformData.append(key, formData[key]);
                }
            }
        }
        // if (this.drawingArtWorkFile) {
        //     if (typeof this.drawingArtWorkFile == "object") {
        //         SKUformData.append("drawingArtWorkFile", this.drawingArtWorkFile, this.drawingArtWorkFile.name);
        //     }
        // }
        // if (this.productionLayoutFile) {
        //     if (typeof this.productionLayoutFile == "object") {
        //         SKUformData.append("productionLayoutFile", this.productionLayoutFile, this.productionLayoutFile.name);
        //     }
        // }
        this.unsavedChanges = false;
        if (formData._id) {
            this.update(formData._id, SKUformData);
        } else {
            delete formData._id;
            this.create(SKUformData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.skuService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.skuService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    setAutoIncrementNo(ev: any) {
        this.form.controls["SKUNo"].setValue(this.SKUCategoryValues[ev.value]);
        this.form.controls["SKUName"].setValue(null);
        this.mouldData = [];
        if (this.masterData?.mapHSNCategoryList.length > 0) {
            this.form.controls["hsn"].setValue(
                this.masterData?.mapHSNCategoryList.find((x: any) => x.productCategory == ev.value)?.HSNCode ?? null
            );
        }
        this.getMouldDataBySKUId(ev.value);
    }
    getInitialData() {
        this.spinner.show();
        this.skuService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["isActive"].setValue("A");
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);
            this.SKUCategoryValues = result?.autoIncValues;

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.skuService.getById(params["id"]);
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

                    if (success.customerInfo.length) {
                        this.customerInfoArray = success.customerInfo.map((x: any) => {
                            if (x.PODate) {
                                x.PODate = this.utilityService.getFormatDate(x.PODate, "YYYY-MM-DD");
                            }
                            if (x.POValidDate) {
                                x.POValidDate = this.utilityService.getFormatDate(x.POValidDate, "YYYY-MM-DD");
                            }

                            return x;
                        });
                    }
                    this.getMouldDataBySKUId(success.productCategory);
                    success.isActive = success.isActive;
                    // for inkDetails
                    success.inkDetails = success.inkDetails;
                    let inkDetailsData = this.masterData?.inkList;
                    for (const ele of success.inkDetails) {
                        inkDetailsData = inkDetailsData.filter((x: any) => x.itemCode != ele.itemCode);
                        this.masterData.inkList = [...success.inkDetails, ...inkDetailsData];
                    }
                    // for specificationInfo
                    // success.specificationInfo = success.specificationInfo;
                    // let specificationData = this.masterData?.specificationList;
                    // for (const ele of success.specificationInfo) {
                    //     specificationData = specificationData.filter(
                    //         (x: any) => x.specificationCode != ele.specificationCode
                    //     );
                    //     this.masterData.specificationList = [...success.specificationInfo, ...specificationData];
                    // }
                    // for materialInfo
                    success.materialInfo = success.materialInfo;
                    let materialInfoData = this.masterData?.materialList;
                    for (const ele of success.materialInfo) {
                        materialInfoData = materialInfoData.filter((x: any) => x.itemCode != ele.itemCode);
                        this.masterData.materialList = [...success.materialInfo, ...materialInfoData];
                    }
                    // for costSheet
                    // success.costSheetInfo = success.costSheetInfo;
                    // let costSheetData = this.masterData?.costSheetList;
                    // for (const ele of success.costSheetInfo) {
                    //     costSheetData = costSheetData.filter((x: any) => x.componentCode != ele.componentCode);
                    //     this.masterData.costSheetList = [...success.costSheetInfo, ...costSheetData];
                    // }
                    this.form.patchValue(success);
                    this.form.controls["productCategory"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                    }

                    if (this.action == "copy") {
                        this.form.enable();
                        this.setAutoIncrementNo({value: success?.productCategory});
                        delete success._id;
                    }

                    this.unsavedChanges = false;
                });
        });
    }

    // openCustomerDetailsModel() {
    //     const modalRef = this.modalService.open(AddMultipleCustomerSkuComponent, {
    //         centered: true,
    //         size: "xl",
    //         backdrop: "static",
    //         keyboard: false,
    //         windowClass: "modelPage"
    //     });
    //     modalRef.componentInstance.action = this.action;
    //     modalRef.componentInstance.customerInfoArray = this.customerInfoArray;
    //     modalRef.componentInstance.cusInfo = this.masterData?.customersOptions;
    //     modalRef.result.then(
    //         (success: any) => {
    //             if (["create", "edit", "copy"].includes(this.action)) {
    //                 this.customerInfoArray = success;
    //                 this.unsavedChanges = true;
    //             }
    //         },
    //         (reason: any) => {}
    //     );
    // }
    openInjectionMoldingCustomerDetailsModel() {
        const modalRef = this.modalService.open(SKUCustomerInjectionMoldingComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerInfoArray = this.customerInfoArray;
        modalRef.componentInstance.cusInfo = this.masterData?.customersOptions;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit", "copy"].includes(this.action)) {
                    this.customerInfoArray = success;
                    this.unsavedChanges = true;
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

        modalRef.componentInstance.ModalUOMsUnit = this.salesUOMUintMasterOptions;
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
                if (["create", "edit", "copy"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.unsavedChanges = true;
                }
            },
            (reason: any) => {}
        );
    }
    openAttributesModal() {
        let data = this.dimensionsDetailsData.value;
        const modalRef = this.modalService.open(SkuAttributesComponent, {
            centered: true,
            // size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.primaryUnit = this.form.controls["primaryUnit"].value;
        // modalRef.componentInstance.genSpecs = {
        //     generalSpecifications: this.form.controls["generalSpecifications"].value
        // };
        modalRef.componentInstance.storage = {
            // shelfLife: this.form.controls["shelfLife"].value,
            storageTemp: this.form.controls["storageTemp"].value,
            storageHumidity: this.form.controls["storageHumidity"].value,
            specialStorageInstruction: this.form.controls["specialStorageInstruction"].value
        };
        modalRef.componentInstance.dimensionsDetails = this.form.controls["dimensionsDetails"].value;
        modalRef.componentInstance.bomDimData = this.bomDimData.value;
        modalRef.componentInstance.offTakeData = this.offTakeData.value;
        modalRef.componentInstance.SKUAttributes = this.masterData?.attributesList.map((x: any, i) => {
            x.order = i + 1;
            return x;
        });

        modalRef.componentInstance.totalNoOfColors = this.form.controls["totalNoOfColors"].value;
        modalRef.componentInstance.inkDetailsArr = this.masterData?.inkList.sort(
            (a: any, b: any) => a.colSeq + b.colSeq
        );
        modalRef.componentInstance.materialInfoArr = this.masterData?.materialList;
        // modalRef.componentInstance.costSheetArr = this.masterData?.costSheetList;
        // modalRef.componentInstance.SKUSpecificationArr = this.masterData?.specificationList;
        modalRef.componentInstance.materialSKUUnit = data?.layoutDimensions?.mSqArea;

        modalRef.componentInstance.drawingArtWork = {
            internalPartNo: this.form.value.internalPartNo,
            artWorkNo: this.form.value.artWorkNo,
            artWorkHyperLink: this.form.value.artWorkHyperLink
            // productionLayoutFile: this.form.value.productionLayoutFile,
            // productionLayoutFileUrl: this.form.value.productionLayoutFileUrl
        };

        modalRef.componentInstance.companyType = this.masterData.companyType;
        modalRef.componentInstance.shoulderTypeOptions = this.masterData.shoulderTypeOptions;
        modalRef.componentInstance.mouldData = this.mouldData;

        modalRef.componentInstance.toolInfo = this.toolInfoData.value;
        modalRef.componentInstance.specsAttribute = this.specsAttributeData.value;
        modalRef.componentInstance.mouldsIDAttribute = this.mouldsIDAttributeData.value;
        modalRef.componentInstance.packingStdAttribute = this.packingStdAttributeData.value;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit", "copy"].includes(this.action)) {
                    this.form.controls["dimensionsDetails"].patchValue(success.dimensionsDetails);
                    this.form.controls["BOMDimensionInfo"].patchValue(success.bomDimData);
                    this.form.controls["offTakeInfo"].patchValue(success.offTakeData);
                    this.form.patchValue(success.genSpecs);
                    this.form.patchValue(success.storage);
                    this.masterData.materialList = success.materialInfoArr;
                    // this.masterData.specificationList = success.SKUSpecificationArr;
                    // this.masterData.costSheetList = success.costSheetArr;
                    this.masterData.inkList = success.inkDetailsArr;
                    this.f["artWorkNo"].setValue(success?.drawingArtWork?.artWorkNo);
                    this.f["internalPartNo"].setValue(success?.drawingArtWork?.internalPartNo);
                    this.f["artWorkHyperLink"].setValue(success?.drawingArtWork?.artWorkHyperLink);
                    this.toolInfoData.patchValue(success?.toolInfo);
                    this.specsAttributeData.patchValue(success?.specsAttribute);
                    this.mouldsIDAttributeData.patchValue(success?.mouldsIDAttribute);
                    this.packingStdAttributeData.patchValue(success?.packingStdAttribute);
                    this.form.controls["totalNoOfColors"].setValue(success.totalNoOfColors);
                    this.unsavedChanges = true;
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
        modalRef.componentInstance.HSNCodeArr = this.masterData?.hsnCodesOptions;
        modalRef.componentInstance.editScreen = "Edit Screen";
        modalRef.componentInstance.HSNCode = this.form.controls["hsn"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["hsn"].setValue(success?.HSNSelectCode);
                }
            },
            (reason: any) => {}
        );
    }
    openProductCategoryModal() {
        const modalRef = this.modalService.open(ProductCategoryModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.productCategoryList = this.masterData?.productCategoryOptions;
        modalRef.componentInstance.productCategory = this.form.controls["productCategory"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["productCategory"].setValue(success?.selectedProductCategory);
                    this.setAutoIncrementNo({value: success?.selectedProductCategory});
                    this.getMouldDataBySKUId(success?.selectedProductCategory);
                }
            },
            (reason: any) => {}
        );
    }

    openCancelModal() {
        if (this.f["isActive"].value == "I" && !this.f["remarks"].value) {
            const modalRef = this.modalService.open(CancelPoComponent, {
                centered: true,
                size: "md",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = "create";
            modalRef.componentInstance.forNPDReview = "NPD Review for Feasibility";
            modalRef.componentInstance.heading = "Inactive SKU Data";
            modalRef.componentInstance.labelText = "Reason to Inactive";
            modalRef.componentInstance.cancelText = "Do you want to Inactive SKU Data ?";
            modalRef.result.then(
                (success: any) => {
                    if (success.title == "Yes") {
                        this.f["remarks"].setValue(success?.reasonToConvert);
                        this.submit();
                    } else {
                        this.location.back();
                    }
                },
                (reason: any) => {}
            );
        } else {
            this.submit();
        }
    }
    openSKUNameModal() {
        if (!this.form.controls["productCategory"].value) {
            this.toastService.warning("Please select Product Category first!");
            return;
        }
        const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
            centered: true,
            windowClass: "modelPage",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
        modalRef.componentInstance.title = "SKU Name/Product Code";
        modalRef.componentInstance.selectedDetails = this.selectedDetails;
        modalRef.componentInstance.tableHead = this.tableHead;
        modalRef.componentInstance.bodyList = this.masterData?.mouldInfo;
        modalRef.componentInstance._id = this.form.controls["SKUName"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedDetails = success?.selectedDetails;
                    this.form.controls["SKUName"].setValue(success?.selectedDetails?.productMasterNo);
                    this.form.controls["specsAttribute"].patchValue({
                        diameter: success?.selectedDetails?.capDia,
                        height: success?.selectedDetails?.capHeight,
                        finish: success?.selectedDetails?.capFinish,
                        shoulderType: success?.selectedDetails?.shoulderType,
                        threadType: success?.selectedDetails?.threadType,
                        orifice: success?.selectedDetails?.orifice,
                        weight: success?.selectedDetails?.weight,
                        placeHolder: success?.selectedDetails?.productMasterNo
                    });
                    this.form.controls["packingStdAttribute"].patchValue({
                        primaryPacking: success?.selectedDetails?.packingStdDetails?.qtyPerPrimaryPack,
                        secondaryPacking: success?.selectedDetails?.packingStdDetails?.qtyPerSecondaryPack
                    });
                    this.mouldData = success?.selectedDetails?.mouldInfo;

                    // this.getGTRequestDetails(success?.selectedDetails);
                }
            },
            (reason: any) => {}
        );
    }
    getMouldDataBySKUId(category: any) {
        this.spinner.show();
        this.skuService
            .getMouldDataBySKUId({
                category
            })
            .subscribe(success => {
                this.masterData.mouldInfo = success.mouldInfo;

                if (this.f["SKUName"].value) {
                    let productMasterNo: any = this.masterData?.mouldInfo?.find(
                        (x: any) => x?.productMasterNo == this.f["SKUName"].value
                    );

                    this.mouldData = productMasterNo?.mouldInfo;
                }
                this.spinner.hide();
            });
    }
}
