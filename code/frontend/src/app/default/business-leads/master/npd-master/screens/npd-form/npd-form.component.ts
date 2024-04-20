import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AppGlobalService, StorageService, UtilityService, SpinnerService, ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {SKUCustomerInfo} from "@interfaces/SKUCustomerInfo";
import {AddItemUOMComponent} from "@shared/modals";
import {SKU_STAGE_OPTIONS} from "@mocks/constant";
import {SkuAttributesComponent} from "src/app/default/sales/master/sku/screens/sku-attributes/sku-attributes.component";
import {NPD_MASTER_FORM_ERRORS} from "@mocks/validations/business-leads";
import {NPDMasterService} from "@services/business-leads";
import {NpdCustomerComponent} from "../npd-customer/npd-customer.component";
import {NPDMasterData} from "@mocks/models/business-leads/masters";

@Component({
    selector: "app-npd-form",
    templateUrl: "./npd-form.component.html",
    styles: [
        `
            .setButtonOpacity {
                opacity: 70%;
            }
        `
    ]
})
export class NpdFormComponent implements OnInit {
    active: number = 1;
    submitted = false;
    action: string = "create";
    tableData: any = [];
    customerInfoArray: SKUCustomerInfo[] | any = [];
    // drawingArtWorkFile: any = null;
    // productionLayoutFile: any = null;
    dSKUNoRef: any = null;
    photoFile: any = null;
    cardData: any = {};
    selectedCustomerData: any = {};
    SKUStageObj: any = SKU_STAGE_OPTIONS;
    SKUStageArr: any = this.SKUStageObj.getAllSKUStage();

    masterData: NPDMasterData = {
        categoryList: [],
        uomOptions: [],
        NPDOptions: [],
        customersOptions: [],
        specificationList: [],
        attributesList: [],
        costSheetList: [],
        inkList: [],
        materialList: [],
        WXLDimensionsUnit: []
    };

    form: any = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        SKUStage: new UntypedFormControl(null, [Validators.required]),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        hsn: new UntypedFormControl(null, [Validators.required]),
        HSN: new UntypedFormControl(null),
        dSKUNo: new UntypedFormControl(null, [Validators.required]),
        SKUName: new UntypedFormControl(null, [Validators.required]),
        SKUDescription: new UntypedFormControl(null, [Validators.required]),
        primaryUnit: new UntypedFormControl(null, [Validators.required]),
        SKUNo: new UntypedFormControl(null),
        NPDReview: new UntypedFormControl(null),
        secondaryUnit: new UntypedFormControl(null),
        conversionFactor: new UntypedFormControl(null),
        unitConversionFlag: new UntypedFormControl(1),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),
        internalPartNo: new UntypedFormControl(null),
        artWorkNo: new UntypedFormControl(null),
        artWorkHyperLink: new UntypedFormControl(null),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        conversionOfUnits: new UntypedFormControl(null),
        isActive: new UntypedFormControl("A"),
        // drawingArtWorkFile: new UntypedFormControl(null),
        // productionLayoutFile: new UntypedFormControl(null),
        // drawingArtWorkFileUrl: new UntypedFormControl(null),
        // productionLayoutFileUrl: new UntypedFormControl(null),
        customerInfo: new UntypedFormControl([]),
        totalNoOfColors: new UntypedFormControl(null),
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
        materialInfo: new UntypedFormControl([]),
        inkDetails: new UntypedFormControl([]),
        specificationInfo: new UntypedFormControl([]),
        costSheetInfo: new UntypedFormControl([]),
        shelfLife: new UntypedFormControl(null),
        storageTemp: new UntypedFormControl(null),
        storageHumidity: new UntypedFormControl(null),
        specialStorageInstruction: new UntypedFormControl(null),
        generalSpecifications: new UntypedFormControl(null),
        BOMDimensionInfo: new UntypedFormGroup({
            unit1: new UntypedFormControl("mm"),
            unit2: new UntypedFormControl("mm"),
            width: new UntypedFormControl(null),
            length: new UntypedFormControl(null),
            mSqArea: new UntypedFormControl(null)
        }),
        offTakeInfo: new UntypedFormGroup({
            annualOffTake: new UntypedFormControl(0),
            offTakeFrequency: new UntypedFormControl(0),
            avgMonthlyOffTake: new UntypedFormControl(0),
            proposedBatchQty: new UntypedFormControl(0),
            processCAQty: new UntypedFormControl(0),
            toolingCAQty: new UntypedFormControl(0)
        })
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
    constructor(
        private npdMasterService: NPDMasterService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private appGlobalService: AppGlobalService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.getInitialData();
        let data = this.appGlobalService?.rolesPermission.find(
            (x: any) => x?.menuItemId == "64a6c1e33339d4dc9d8141a3"
        )?.masters;
        this.cardData = data.find((x: any) => x.subModuleName == "SKU Master");
    }

    reset() {
        this.form.reset();
        this.customerInfoArray = [];
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, NPD_MASTER_FORM_ERRORS)) {
            return;
        }
        if (this.customerInfoArray.length == 0) {
            this.toastService.warning("Please add at least one customer to the list !");
            return;
        }
        if (
            this.action == "Converted to SKU" &&
            this.customerInfoArray.every(
                (x: any) => x.referenceModel == "Customer" && (!x.standardSellingRate || x.standardSellingRate < 0)
            )
        ) {
            this.toastService.warning("Selling Price should not be Zero !");
            return;
        } else if (
            this.action == "Converted to SKU" &&
            this.customerInfoArray.some((x: any) => x.referenceModel == "Prospect")
        ) {
            this.toastService.error("Prospect should first be converted to Customer");
            return;
        }
        let formData: any = this.form.value;

        formData.customerInfo = this.customerInfoArray;
        formData.costSheetInfo = this.masterData.costSheetList;
        formData.inkDetails = this.masterData.inkList.filter((x: any) => x.colSeq > 0);
        formData.specificationInfo = this.masterData.specificationList.filter((x: any) => x.seq > 0);
        formData.materialInfo = this.masterData?.materialList.filter((x: any) => x.isSelect == true);

        // delete formData.drawingArtWorkFile;
        // delete formData.productionLayoutFile;

        let NPDformData = new FormData();
        NPDformData.append("key", "Sku");

        for (let i = 0; i < Object.keys(formData).length; i++) {
            const key = Object.keys(formData)[i];
            if (formData[key] && typeof formData[key] == "object") {
                if (formData[key]) {
                    NPDformData.append(key, JSON.stringify(formData[key]));
                }
            } else {
                if (formData[key]) {
                    NPDformData.append(key, formData[key]);
                }
            }
        }

        // if (this.drawingArtWorkFile) {
        //     if (typeof this.drawingArtWorkFile == "object") {
        //         NPDformData.append("drawingArtWorkFile", this.drawingArtWorkFile, this.drawingArtWorkFile.name);
        //     }
        // }
        // if (this.productionLayoutFile) {
        //     if (typeof this.productionLayoutFile == "object") {
        //         NPDformData.append("productionLayoutFile", this.productionLayoutFile, this.productionLayoutFile.name);
        //     }
        // }
        if (this.action == "Converted to SKU") {
            NPDformData.append("action", "Converted to SKU");
        }

        if (formData._id) {
            this.update(formData._id, NPDformData);
        } else {
            delete formData._id;
            this.create(NPDformData);
        }
    }

    create(formData: any) {
        this.spinner.show();
        this.npdMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.router.navigate(["/default/business-leads/master/npd/list"]);
        });
    }

    update(_id: string, formData: any) {
        this.spinner.show();
        this.npdMasterService.update(_id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            if (this.action == "Converted to SKU") {
                let obj = {
                    title: this.cardData?.subModuleName ?? "SKU Master",
                    subTitle: null,
                    type: null,
                    subModuleId: this.cardData?.subModuleId
                };
                this.storageService.set("menuTitle", obj);
                this.router.navigate(["/default/sales/master/sku/form"], {
                    queryParams: {id: success?._id, action: "edit"}
                });
            } else {
                this.router.navigate(["/default/business-leads/master/npd/list"]);
            }
        });
    }
    getInitialData() {
        this.spinner.show();
        this.npdMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["SKUStage"].setValue(SKU_STAGE_OPTIONS.prototype);
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.npdMasterService.getById(params["id"]);
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
                    this.dSKUNoRef = success.dSKUNo;
                    // for inkDetails
                    success.inkDetails = success.inkDetails;
                    let inkDetailsData = this.masterData.inkList;
                    for (const ele of success.inkDetails) {
                        inkDetailsData = inkDetailsData.filter((x: any) => x.itemCode != ele.itemCode);
                        this.masterData.inkList = [...success.inkDetails, ...inkDetailsData];
                    }
                    // for specificationInfo
                    success.specificationInfo = success.specificationInfo;
                    let specificationData = this.masterData.specificationList;
                    for (const ele of success.specificationInfo) {
                        specificationData = specificationData.filter(
                            (x: any) => x.specificationCode != ele.specificationCode
                        );
                        this.masterData.specificationList = [...success.specificationInfo, ...specificationData];
                    }
                    // for materialInfo
                    success.materialInfo = success.materialInfo;
                    let materialInfoData = this.masterData?.materialList;
                    for (const ele of success.materialInfo) {
                        materialInfoData = materialInfoData.filter((x: any) => x.itemCode != ele.itemCode);
                        this.masterData.materialList = [...success.materialInfo, ...materialInfoData];
                    }

                    // for costSheet
                    success.costSheetInfo = success.costSheetInfo;
                    let costSheetData = this.masterData.costSheetList;
                    for (const ele of success.costSheetInfo) {
                        costSheetData = costSheetData.filter((x: any) => x.itemCode != ele.itemCode);
                        this.masterData.costSheetList = [...success.costSheetInfo, ...costSheetData];
                    }

                    this.form.patchValue(success);
                    this.form.controls["productCategory"].disable();
                    this.form.controls["SKUNo"].disable();
                    this.form.controls["dSKUNo"].disable();
                    this.form.controls["hsn"].disable();
                    if (this.action == "view") {
                        this.form.disable();
                    }
                    if (this.action == "Converted to SKU") {
                        this.form.disable();
                        this.form.controls["SKUStage"].enable();
                        this.form.controls["SKUStage"].setValue(null);
                        this.form.controls["isActive"].enable();
                    }
                });
        });
    }

    setHSNValue(ev: any) {
        this.form.controls["hsn"].setValue(ev.HSNCode);
        this.form.controls["HSN"].setValue(ev.HSN);
    }
    changeOnSKUNo(ev: any) {
        this.selectedCustomerData = ev;
        this.form.controls["SKUName"].setValue(ev.projectName);
        this.form.controls["artWorkNo"].setValue(ev.artWorkNo);
        this.form.controls["NPDReview"].setValue(ev._id);
    }

    openUOMDetailsModal() {
        const modalRef = this.modalService.open(AddItemUOMComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.ModalUOMsUnit = this.masterData.uomOptions;
        modalRef.componentInstance.WXLDimensionsUnit = this.masterData?.WXLDimensionsUnit;
        modalRef.componentInstance.dualUnits = {
            primaryUnit: this.form.controls["primaryUnit"].value,
            secondaryUnit: this.form.controls["secondaryUnit"].value,
            unitConversionFlag: this.form.controls["unitConversionFlag"].value,
            primaryConversion: this.form.controls["primaryConversion"].value,
            secondaryConversion: this.form.controls["secondaryConversion"].value,
            primaryToSecondaryConversion: this.form.controls["primaryToSecondaryConversion"].value,
            secondaryToPrimaryConversion: this.form.controls["secondaryToPrimaryConversion"].value
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    openCustomersModal() {
        const modalRef = this.modalService.open(NpdCustomerComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerInfoArray = this.customerInfoArray;
        modalRef.componentInstance.customerNPDArray = this.masterData.customersOptions;
        modalRef.componentInstance.selectedCustomerData = this.selectedCustomerData;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.customerInfoArray = success;
                }
            },
            (reason: any) => {}
        );
    }
    openAttributesModal() {
        let data = this.dimensionsDetailsData.value;
        const modalRef = this.modalService.open(SkuAttributesComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });
        modalRef.componentInstance.SKUAttributes = this.masterData.attributesList;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.primaryUnit = this.form.controls["primaryUnit"].value;
        modalRef.componentInstance.genSpecs = {
            generalSpecifications: this.form.controls["generalSpecifications"].value
        };
        modalRef.componentInstance.storage = {
            // shelfLife: this.form.controls["shelfLife"].value,
            storageTemp: this.form.controls["storageTemp"].value,
            storageHumidity: this.form.controls["storageHumidity"].value,
            specialStorageInstruction: this.form.controls["specialStorageInstruction"].value
        };
        modalRef.componentInstance.dimensionsDetails = this.form.controls["dimensionsDetails"].value;

        modalRef.componentInstance.totalNoOfColors = this.form.controls["totalNoOfColors"].value;
        modalRef.componentInstance.inkDetailsArr = this.masterData.inkList.sort(
            (a: any, b: any) => a.colSeq + b.colSeq
        );
        modalRef.componentInstance.materialInfoArr = this.masterData?.materialList;
        modalRef.componentInstance.costSheetArr = this.masterData.costSheetList;
        modalRef.componentInstance.SKUSpecificationArr = this.masterData.specificationList;
        modalRef.componentInstance.materialSKUUnit = data?.layoutDimensions?.mSqArea;

        // modalRef.componentInstance.drawingArtWork = {
        //     drawingArtWorkFile: this.form.value.drawingArtWorkFile,
        //     drawingArtWorkFileUrl: this.form.value.drawingArtWorkFileUrl,
        //     productionLayoutFile: this.form.value.productionLayoutFile,
        //     productionLayoutFileUrl: this.form.value.productionLayoutFileUrl
        // };
        modalRef.componentInstance.bomDimData = this.bomDimData.value;
        modalRef.componentInstance.offTakeData = this.offTakeData.value;

        modalRef.componentInstance.drawingArtWork = {
            internalPartNo: this.form.value.internalPartNo,
            artWorkNo: this.form.value.artWorkNo,
            artWorkHyperLink: this.form.value.artWorkHyperLink
        };

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["dimensionsDetails"].patchValue(success.dimensionsDetails);
                    this.form.patchValue(success.genSpecs);
                    this.form.patchValue(success.storage);
                    this.masterData.materialList = success.materialInfoArr;
                    this.masterData.specificationList = success.SKUSpecificationArr;
                    this.masterData.costSheetList = success.costSheetArr;
                    this.masterData.inkList = success.inkDetailsArr;
                    this.form.controls["totalNoOfColors"].setValue(success.totalNoOfColors);
                    this.form.controls["BOMDimensionInfo"].patchValue(success.bomDimData);
                    this.form.controls["offTakeInfo"].patchValue(success.offTakeData);
                    this.f["artWorkNo"].setValue(success?.drawingArtWork?.artWorkNo);
                    this.f["internalPartNo"].setValue(success?.drawingArtWork?.internalPartNo);
                    this.f["artWorkHyperLink"].setValue(success?.drawingArtWork?.artWorkHyperLink);
                }
            },
            (reason: any) => {}
        );
    }
    getAllSOConfirmationById(id: any) {
        this.spinner.show();
        this.npdMasterService.getAllNPDMasterByDSKUId(id).subscribe(success => {
            this.spinner.hide();
        });
    }
}
