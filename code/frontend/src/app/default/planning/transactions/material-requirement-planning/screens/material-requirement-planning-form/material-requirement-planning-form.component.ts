import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SpinnerService, UtilityService, ToastService, ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {BOMOfSKUService} from "@services/planning";
import {BOM_OF_SKU_FORM_ERRORS} from "@mocks/validations/planning/BOMOfSKU.validation";

import {BOM_OF_SKU_FORM_REPORT_DATA, MATERIAL_REQ_PLANNING_REPORT_DATA} from "@mocks/export-data/planning/master";
import {BOMOfSKUMasterData} from "@mocks/models/planning/masters";
import {BomDocumentDetailsComponent} from "src/app/default/planning/master/bill-of-material/screens/bom-of-child-item/bom-document-details/bom-document-details.component";

@Component({
    selector: "app-material-requirement-planning-form",
    templateUrl: "./material-requirement-planning-form.component.html",
    styles: [
        `
            .blueColor {
                color: #0000ff;
            }
            .separate-row {
                position: relative;
                .set-position {
                    position: absolute;
                    top: 0.3rem;
                    right: -0.5rem;
                }
            }
        `
    ]
})
export class MaterialRequirementPlanningFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    isConditionPreview = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    submitted = false;
    action: string = "create";
    BoMOfSKUDetailsArr: any = [];
    ESCPreviewArr: any = [];
    ESCPreviewInkDetails: any = [];
    documentDetails: any = [];
    oldDocumentDetails: any = [];
    inkList: any = [];
    documentDetailsObj: any = {
        documentNo: null,
        documentDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        revisionNo: null,
        revisionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        docCreatedBy: null,
        docApprovedBy: null,
        QMSDocumentNo: null
    };

    masterData: BOMOfSKUMasterData = {
        autoIncrementNo: "",
        SKUOptions: []
    };

    materialCostForPC: any = 1;

    constructor(
        private exportExcelService: ExportExcelService,
        private bomOfSKUService: BOMOfSKUService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        BOMNo: new UntypedFormControl(null, [Validators.required]),
        SKU: new UntypedFormControl(null),
        SKUCode: new UntypedFormControl(null, [Validators.required]),
        SKUName: new UntypedFormControl(null, [Validators.required]),
        SKUDescription: new UntypedFormControl(""),
        UOM: new UntypedFormControl(null),
        partCount: new UntypedFormControl(1, [Validators.required]),
        BOMOfSKUDetails: new UntypedFormControl([]),
        totalMaterialCost: new UntypedFormControl(null),
        isColorInfo: new UntypedFormControl(false),
        materialCostForOnePC: new UntypedFormControl(null),
        batchQty: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        documentDetails: new UntypedFormControl([])
    });

    ngOnInit(): void {
        this.getInitialData();
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.form.reset();
        this.documentDetails = [];
        this.documentDetailsObj = {
            documentNo: null,
            documentDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            revisionNo: null,
            revisionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            docCreatedBy: null,
            docApprovedBy: null,
            QMSDocumentNo: null
        };
        this.BoMOfSKUDetailsArr = [];
        this.collection = this.BoMOfSKUDetailsArr.length;
        this.inkList = [];
        this.collection = this.inkList.length;
        this.isPreview = false;
        this.isESCPreview = false;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, BOM_OF_SKU_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (this.action == "copy") {
            delete formData._id;
        }

        formData.BOMOfSKUDetails = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerSKUUnit > 0);
        if (this.inkList.length > 0) {
            formData.BOMOfSKUDetails = this.inkList.filter((x: any) => x.qtyPerSKUUnit > 0);
            formData.isColorInfo = true;
        } else {
            formData.isColorInfo = false;
        }

        formData.documentDetails = this.documentDetails;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo() {
        this.location.back();
    }

    create(formData: any) {
        this.spinner.show();
        this.bomOfSKUService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.bomOfSKUService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                let data: any = [];
                if (this.inkList.length > 0) {
                    this.inkList = this.inkList.map((x: any) => {
                        x.unitCost = x.inkCostPerKg ? x.inkCostPerKg : x.unitCost;
                        return x;
                    });
                    data = this.inkList;
                } else if (this.BoMOfSKUDetailsArr.length > 0) {
                    data = this.BoMOfSKUDetailsArr;
                }
                this.exportExcelService.exportExcel(MATERIAL_REQ_PLANNING_REPORT_DATA(data));
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }
    getInitialData() {
        this.spinner.show();
        this.bomOfSKUService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            // this.form.controls["BOMNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["partCount"].setValue(1);
            this.form.controls["batchQty"].setValue(1);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        // this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.bomOfSKUService.getById(params["id"]);
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
                    if (success.isColorInfo == false) {
                        this.bomOfSKUService.getAllInkListBySKUId({SKUId: success?.SKU}).subscribe(SKUResult => {
                            if (SKUResult.rows.length > 0 && SKUResult.listType == "Merged") {
                                this.ESCPreviewInkDetails = [];
                                this.BoMOfSKUDetailsArr = success.BOMOfSKUDetails;
                                success.BOMOfSKUDetails = success.BOMOfSKUDetails;
                                let BoMOfSKUDetails = SKUResult.rows.map((x: any) => {
                                    x.qtyPerSKUUnit = 0;
                                    x.wastePercentage = 0;
                                    return x;
                                });
                                for (const ele of success.BOMOfSKUDetails) {
                                    BoMOfSKUDetails = BoMOfSKUDetails.filter((x: any) => x.itemCode != ele.itemCode);
                                    this.ESCPreviewArr = [...success.BOMOfSKUDetails, ...BoMOfSKUDetails];
                                }
                                this.collection = this.BoMOfSKUDetailsArr.length;
                            }
                        });
                    }
                    if (success.isColorInfo == true) {
                        this.ESCPreviewArr = [];
                        this.bomOfSKUService.getAllInkListBySKUId({SKUId: success?.SKU}).subscribe(SKUResult => {
                            if (SKUResult.rows.length > 0 && SKUResult.listType == "Ink") {
                                this.BoMOfSKUDetailsArr = [];
                                let inkListData = SKUResult.rows.map((x: any) => {
                                    x.itemCost = null;
                                    x.wastePercentage = 0;
                                    return x;
                                });
                                this.inkList = success.BOMOfSKUDetails;
                                success.BOMOfSKUDetails = success.BOMOfSKUDetails;

                                let BoMOfSKUDetails = inkListData;
                                for (const ele of success.BOMOfSKUDetails) {
                                    BoMOfSKUDetails = BoMOfSKUDetails.filter((x: any) => x.itemCode != ele.itemCode);
                                    this.ESCPreviewInkDetails = [...success.BOMOfSKUDetails, ...BoMOfSKUDetails];
                                }

                                this.collection = this.inkList.length;
                            }
                        });
                    }
                    if (success.documentDetails.length > 0) {
                        this.documentDetailsObj = JSON.parse(JSON.stringify(success.documentDetails.slice(-1)[0]));
                        this.documentDetailsObj.documentDate = this.utilityService.getFormatDate(
                            this.documentDetailsObj.documentDate,
                            "YYYY-MM-DD"
                        );
                        this.documentDetailsObj.revisionDate = this.utilityService.getFormatDate(
                            this.documentDetailsObj.revisionDate,
                            "YYYY-MM-DD"
                        );
                        this.documentDetails = [...success.documentDetails];
                        this.oldDocumentDetails = [...this.documentDetails];
                    }
                    this.collection = this.BoMOfSKUDetailsArr.length;

                    this.materialCostForPC = success?.partCount;
                    this.form.patchValue(success);
                    if (this.action != "create") {
                        this.isESCPreview = true;
                        this.isConditionPreview = true;
                        this.isPreview = true;
                        this.form.disable();
                        if (this.action == "edit") {
                            this.form.controls["status"].enable();
                            // this.form.controls["partCount"].enable();
                        }
                    }

                    if (this.action == "copy") {
                        this.form.controls["BOMNo"].setValue(result.autoIncrementNo);
                        this.form.enable();
                        delete success._id;
                    }
                });
        });
    }
    setSKUDetails(event: any) {
        this.form.controls["SKUDescription"].setValue(event.SKUDescription);
        this.form.controls["SKU"].setValue(event._id);
        this.form.controls["SKUName"].setValue(event.SKUName);
        this.form.controls["SKUCode"].setValue(event.SKUNo);
        this.form.controls["UOM"].setValue(event.primaryUnit);
        this.form.controls["partCount"].setValue(event.ups ?? 1);
        this.form.controls["batchQty"].setValue(event.ups ?? 1);
        this.materialCostForPC = event.ups ?? 1;

        this.form.controls["totalMaterialCost"].setValue(null);
        this.form.controls["materialCostForOnePC"].setValue(null);
        this.spinner.show();
        this.bomOfSKUService.getBOMBySKUIdForMRP({SKUId: event._id, action: "create"}).subscribe(success => {
            console.log("success", success);
            let partCountValue = +this.form.controls["partCount"].value;
            let batchQty = +this.form.controls["batchQty"].value;
            if (success?.BOMOfSKUDetails?.length > 0) {
                console.log("batchQty", batchQty);

                this.form.controls["BOMNo"].setValue(success?.BOMNo);
                this.inkList = success?.BOMOfSKUDetails.map((x: any) => {
                    // x.qtyPerSKUUnit = +(batchQty / partCount).toFixed(2);
                    x.oldQtyPerSKUUnit = x.qtyPerSKUUnit;
                    // if (x.referenceModel == "InkMaster") {
                    //     x.partCount = +(
                    //         (+x.qtyPerSKUUnit + (+x.qtyPerSKUUnit * +x.wastePercentage) / 100) *
                    //         +batchQty
                    //     ).toFixed(2);
                    // } else {
                    //     x.partCount = +(+x.qtyPerSKUUnit + (+x.qtyPerSKUUnit * +x.wastePercentage) / 100).toFixed(2);
                    // }
                    return x;
                });
                let totalMaterialCost = this.inkList.map((x: any) => x.itemCost).reduce((a: any, c: any) => +a + +c);

                this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
                this.collection = this.inkList.length;
            } else {
                this.inkList = [];
                this.toastService.warning(`Please define the Bill of Material of the SKU`);
            }
            // if (success.rows.length > 0 && success.listType == "Merged") {
            //     this.inkList = [];
            //     this.BoMOfSKUDetailsArr = success?.rows.map((x: any) => {
            //         x.qtyPerSKUUnit = 0;
            //         x.wastePercentage = 0;
            //         // x.partCount = (+x.qtyPerSKUUnit + (+x.qtyPerSKUUnit * +x.wastePercentage) / 100) * +partCount;
            //         // x.itemCost = +x.partCount * +x.inkCostPerKg;
            //         if (x.inkCostPerKg) {
            //             x.unitCost = +x.inkCostPerKg;
            //             x.itemCost = +x.partCount * +x.inkCostPerKg;
            //         } else {
            //             x.itemCost = +x.partCount * +x.unitCost;
            //         }
            //         return x;
            //     });
            //     this.collection = this.BoMOfSKUDetailsArr.length;
            // }

            this.spinner.hide();
        });
    }
    setPartCount() {
        // let partCount = +this.form.controls["partCount"].value;
        let partCount = 1;
        if (this.inkList.length > 0) {
            this.inkList = this.inkList.map((ele: any) => {
                ele.inkCostPerKg = +ele.inkCostPerKg || 0;
                ele.unitCost = +ele.unitCost || 0;
                ele.partCount = +ele.partCount || 0;
                ele.qtyPerSKUUnit = +ele.qtyPerSKUUnit || 0;
                ele.wastePercentage = +ele.wastePercentage || 0;
                ele.itemCost = +ele.itemCost || 0;
                if (ele.inkCostPerKg) {
                    ele.unitCost = +ele.inkCostPerKg;
                    ele.partCount =
                        +(+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * partCount;
                    ele.itemCost = +ele.partCount * +ele.inkCostPerKg;
                } else {
                    ele.partCount =
                        (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * partCount;
                    ele.itemCost = +ele.partCount * +ele.unitCost;
                }
                return ele;
            });
            let totalMaterialCost = this.inkList.map((x: any) => x.itemCost).reduce((a: any, c: any) => +a + +c);

            this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
            this.form.controls["materialCostForOnePC"].setValue(
                +totalMaterialCost.toFixed(2) / +this.materialCostForPC
            );
        }
        if (this.BoMOfSKUDetailsArr.length > 0) {
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.map((ele: any) => {
                ele.inkCostPerKg = +ele.inkCostPerKg || 0;
                ele.unitCost = +ele.unitCost || 0;
                ele.partCount = +ele.partCount || 0;
                ele.qtyPerSKUUnit = +ele.qtyPerSKUUnit || 0;
                ele.wastePercentage = +ele.wastePercentage || 0;
                ele.itemCost = +ele.itemCost || 0;

                ele.partCount = (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * partCount;
                ele.itemCost = +ele.partCount * +ele.unitCost;

                return ele;
            });
            let totalMaterialCost = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCost).reduce(
                (a: any, c: any) => +a + +c
            );

            this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
            this.form.controls["materialCostForOnePC"].setValue(
                +totalMaterialCost.toFixed(2) / +this.materialCostForPC
            );
        }
    }
    setInkDetails(ele: any) {
        let index = this.inkList.map((x: any) => x.reference).indexOf(ele.reference);
        let partCountValue = +this.form.controls["partCount"].value;
        let partCount = 1;
        if (ele.qtyPerSKUUnit && ele.wastePercentage) {
            this.inkList[index].partCount =
                (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
            // if (ele?.referenceModel == "InkMaster") {
            //     this.inkList[index].partCount = +(
            //         (+ele?.qtyPerSKUUnit + (+ele?.qtyPerSKUUnit * +ele?.wastePercentage) / 100) *
            //         +partCountValue
            //     ).toFixed(3);
            // }
        } else {
            this.inkList[index].partCount =
                (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
            // if (ele?.referenceModel == "InkMaster") {
            //     this.inkList[index].partCount = +(
            //         (+ele?.qtyPerSKUUnit + (+ele?.qtyPerSKUUnit * +ele?.wastePercentage) / 100) *
            //         +partCountValue
            //     ).toFixed(3);
            // }
        }

        if (ele.inkCostPerKg) {
            this.inkList[index].unitCost = +ele.inkCostPerKg;
            this.inkList[index].itemCost = +ele.partCount * +ele.inkCostPerKg;
        } else {
            this.inkList[index].itemCost = +ele.partCount * +this.inkList[index].unitCost;
        }
        let totalMaterialCost = this.inkList.map((x: any) => x.itemCost).reduce((a: any, c: any) => +a + +c);

        this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
        this.form.controls["materialCostForOnePC"].setValue(+totalMaterialCost.toFixed(2) / +this.materialCostForPC);
    }

    setMRPDetails() {
        let partCount = +this.form.controls["partCount"].value;
        let batchQty = +this.form.controls["batchQty"].value;
        if (this.inkList.length > 0) {
            this.inkList = this.inkList.map((ele: any) => {
                ele.wastePercentage = +ele.wastePercentage || 0;

                // if (ele.inkCostPerKg) {
                //     ele.unitCost = +ele.inkCostPerKg;
                //     ele.qtyPerSKUUnit = +((batchQty * ele.qtyPerSKUUnit) / partCount).toFixed(2);
                //     ele.partCount = +(+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100);
                //     ele.itemCost = +ele.partCount * +ele.inkCostPerKg;
                // } else {
                //     ele.qtyPerSKUUnit = +(batchQty / partCount).toFixed(2);
                //     ele.partCount = +ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100;
                //     ele.itemCost = +ele.partCount * +ele.unitCost;
                // }

                console.log("ele.oldQtyPerSKUUnit", ele.oldQtyPerSKUUnit);
                ele.qtyPerSKUUnit = +((batchQty * ele.oldQtyPerSKUUnit) / partCount).toFixed(3);
                ele.partCount = +(+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100).toFixed(3);
                ele.itemCost = +ele.partCount * +ele.unitCost;

                // if (ele?.referenceModel == "InkMaster") {
                //     ele.qtyPerSKUUnit = +((batchQty * ele.oldQtyPerSKUUnit) / partCount).toFixed(3);
                //     // ele.qtyPerSKUUnit = ele.qtyPerSKUUnit;
                //     ele.partCount = +(+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100).toFixed(
                //         3
                //     );
                //     ele.itemCost = +ele.partCount * +ele.unitCost;
                // }
                return ele;
            });
            let totalMaterialCost = this.inkList.map((x: any) => x.itemCost).reduce((a: any, c: any) => +a + +c);

            this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
            this.form.controls["materialCostForOnePC"].setValue(
                +totalMaterialCost.toFixed(2) / +this.materialCostForPC
            );
        }
        if (this.BoMOfSKUDetailsArr.length > 0) {
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.map((ele: any) => {
                ele.inkCostPerKg = +ele.inkCostPerKg || 0;
                ele.unitCost = +ele.unitCost || 0;
                ele.partCount = +ele.partCount || 0;
                ele.qtyPerSKUUnit = +ele.qtyPerSKUUnit || 0;
                ele.wastePercentage = +ele.wastePercentage || 0;
                ele.itemCost = +ele.itemCost || 0;
                ele.qtyPerSKUUnit = +(batchQty / partCount).toFixed(2);
                ele.partCount = +ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100;
                ele.itemCost = +ele.partCount * +ele.unitCost;

                return ele;
            });
            let totalMaterialCost = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCost).reduce(
                (a: any, c: any) => +a + +c
            );

            this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
            this.form.controls["materialCostForOnePC"].setValue(
                +totalMaterialCost.toFixed(2) / +this.materialCostForPC
            );
        }
    }

    setUnit(item: any) {
        let index = this.inkList.map((x: any) => x.reference).indexOf(item.reference);
        let partCount = +this.form.controls["partCount"].value;
        let batchQty = +this.form.controls["batchQty"].value;

        // if (this.inkList[index].UOM == item.secondaryUnit) {
        //     this.inkList[index].UOM = item.primaryUnit;
        //     this.inkList[index].qtyPerSKUUnit = +((batchQty / partCount) * 1).toFixed(2);
        // } else {
        //     this.inkList[index].UOM = item.secondaryUnit;
        //     this.inkList[index].qtyPerSKUUnit = +((batchQty / partCount) * item.primaryToSecondaryConversion).toFixed(
        //         2
        //     );
        //     // this.inkList[index].qtyPerSKUUnit = +item.primaryToSecondaryConversion.toFixed(4);
        // }

        if (this.inkList[index].UOM == item.secondaryUnit) {
            this.inkList[index].UOM = item.primaryUnit;
            if (["SHT"].includes(item.primaryUnit)) {
                this.inkList[index].qtyPerSKUUnit = +(batchQty / partCount).toFixed(3);
                let SKUUnitCost = +((item?.width / 1000) * (item?.length / 1000) * item?.unitCost).toFixed(3);
                this.inkList[index].unitCost = +SKUUnitCost;
            } else if (["RL"].includes(item.primaryUnit)) {
                this.inkList[index].qtyPerSKUUnit = +(batchQty / partCount).toFixed(3);
                let SKUUnitCost = 0;
                if (item.lengthUnit == "mm") {
                    SKUUnitCost = +((item?.width / 1000) * (item?.length / 1000) * item?.unitCost).toFixed(3);
                } else {
                    SKUUnitCost = +((item?.width / 1000) * item?.length * item?.unitCost).toFixed(3);
                }
                this.inkList[index].unitCost = +SKUUnitCost;
            } else {
                this.inkList[index].qtyPerSKUUnit = +(
                    (batchQty / partCount) *
                    item.primaryToSecondaryConversion
                ).toFixed(3);
            }
        } else {
            this.inkList[index].UOM = item.secondaryUnit;

            if (["SHT"].includes(item.primaryUnit)) {
                let SKUUnit = +((item?.width / 1000) * (item?.length / 1000)).toFixed(3);
                let SKUUnitCost = +(item?.unitCost / ((item?.width / 1000) * (item?.length / 1000))).toFixed(3);
                this.inkList[index].qtyPerSKUUnit = +(
                    (batchQty / partCount) *
                    item.primaryToSecondaryConversion
                ).toFixed(3);
                this.inkList[index].unitCost = +SKUUnitCost;
            } else if (["RL"].includes(item.primaryUnit)) {
                let SKUUnit = 0;
                let SKUUnitCost = 0;
                if (item.lengthUnit == "mm") {
                    // SKUUnit = +((item?.width / 1000) * (item?.length / 1000)).toFixed(3);
                    SKUUnitCost = +(item?.unitCost / ((item?.width / 1000) * (item?.length / 1000))).toFixed(3);
                } else {
                    // SKUUnit = +((item?.width / 1000) * item?.length).toFixed(3);
                    SKUUnitCost = +(item?.unitCost / ((item?.width / 1000) * item?.length)).toFixed(3);
                }
                this.inkList[index].qtyPerSKUUnit = +(
                    (batchQty / partCount) *
                    item.primaryToSecondaryConversion
                ).toFixed(3);
                this.inkList[index].unitCost = +SKUUnitCost;
            } else {
                this.inkList[index].qtyPerSKUUnit = +(
                    (batchQty / partCount) *
                    item.primaryToSecondaryConversion
                ).toFixed(3);
            }
        }

        // if (this.inkList[index].UOM == item.secondaryUnit) {
        //     this.inkList[index].UOM = item.primaryUnit;
        //     if (["SHT"].includes(item.primaryUnit)) {
        //         this.inkList[index].qtyPerSKUUnit = +(1 / item.ups).toFixed(4);
        //         let SKUUnitCost = +((item?.width / 1000) * (item?.length / 1000) * item?.unitCost).toFixed(4);
        //         this.inkList[index].unitCost = +SKUUnitCost;
        //     } else if (["RL"].includes(item.primaryUnit)) {
        //         this.inkList[index].qtyPerSKUUnit = +(1 / item.ups).toFixed(4);
        //         let SKUUnitCost = 0;
        //         if (item.lengthUnit == "mm") {
        //             SKUUnitCost = +((item?.width / 1000) * (item?.length / 1000) * item?.unitCost).toFixed(4);
        //         } else {
        //             SKUUnitCost = +((item?.width / 1000) * item?.length * item?.unitCost).toFixed(4);
        //         }
        //         this.inkList[index].unitCost = +SKUUnitCost;
        //     } else {
        //         this.inkList[index].qtyPerSKUUnit = +(item.qtyPerSKUUnit * item.primaryToSecondaryConversion).toFixed(
        //             4
        //         );
        //     }
        // } else {
        //     this.inkList[index].UOM = item.secondaryUnit;

        //     if (["SHT"].includes(item.primaryUnit)) {
        //         let SKUUnit = +(((item?.width / 1000) * (item?.length / 1000)) / item?.ups).toFixed(4);
        //         let SKUUnitCost = +(item?.unitCost / ((item?.width / 1000) * (item?.length / 1000))).toFixed(4);
        //         this.inkList[index].qtyPerSKUUnit = +SKUUnit;
        //         this.inkList[index].unitCost = +SKUUnitCost;
        //     } else if (["RL"].includes(item.primaryUnit)) {
        //         let SKUUnit = 0;
        //         let SKUUnitCost = 0;
        //         if (item.lengthUnit == "mm") {
        //             SKUUnit = +(((item?.width / 1000) * (item?.length / 1000)) / item?.ups).toFixed(4);
        //             SKUUnitCost = +(item?.unitCost / ((item?.width / 1000) * (item?.length / 1000))).toFixed(4);
        //         } else {
        //             SKUUnit = +(((item?.width / 1000) * item?.length) / item?.ups).toFixed(4);
        //             SKUUnitCost = +(item?.unitCost / ((item?.width / 1000) * item?.length)).toFixed(4);
        //         }
        //         this.inkList[index].qtyPerSKUUnit = +SKUUnit;
        //         this.inkList[index].unitCost = +SKUUnitCost;
        //     } else {
        //         this.inkList[index].qtyPerSKUUnit = +(item.qtyPerSKUUnit / item.primaryToSecondaryConversion).toFixed(
        //             4
        //         );
        //     }
        // }
        this.setInkDetails(this.inkList[index]);
    }
    setItemCostDetails(ele: any) {
        // let partCount = +this.form.controls["partCount"].value;
        let partCount = 1;
        let index = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCode).indexOf(ele.itemCode);
        this.BoMOfSKUDetailsArr[index].partCount =
            (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
        this.BoMOfSKUDetailsArr[index].itemCost = +ele.partCount * +ele.unitCost;
        let totalMaterialCost = this.BoMOfSKUDetailsArr.reduce((a: any, c: any) => +a + +c.itemCost, 0);
        this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
        this.form.controls["materialCostForOnePC"].setValue(+totalMaterialCost.toFixed(2) / +this.materialCostForPC);
    }
    openBOMDocumentDetailsModal() {
        const modalRef = this.modalService.open(BomDocumentDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.documentDetailsObj = this.documentDetailsObj;
        modalRef.componentInstance.oldDocumentDetails = this.oldDocumentDetails;
        modalRef.componentInstance.BOMNo = this.form.controls["BOMNo"].value;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit", "copy"].includes(this.action) && success) {
                    this.documentDetails = success.documentDetails;
                    this.documentDetailsObj = success.documentDetailsObj;
                }
            },
            (reason: any) => {}
        );
    }
    preview() {
        this.search = "";
        if (this.BoMOfSKUDetailsArr.length > 0) {
            this.ESCPreviewInkDetails = [];
            this.ESCPreviewArr = this.BoMOfSKUDetailsArr;
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerSKUUnit > 0);
            this.collection = this.BoMOfSKUDetailsArr.length;
        }
        if (this.inkList.length > 0) {
            this.ESCPreviewArr = [];
            this.ESCPreviewInkDetails = this.inkList;
            this.inkList = this.inkList.filter((x: any) => x.qtyPerSKUUnit > 0);
            this.collection = this.inkList.length;
        }
        if (this.BoMOfSKUDetailsArr.length > 0 || this.inkList.length > 0) {
            this.isPreview = true;
            this.isESCPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
            this.isESCPreview = true;
        }
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        if (this.ESCPreviewArr.length > 0) {
            this.BoMOfSKUDetailsArr = this.ESCPreviewArr;
            this.collection = this.BoMOfSKUDetailsArr.length;
        }
        if (this.ESCPreviewInkDetails.length > 0) {
            this.inkList = this.ESCPreviewInkDetails;
            this.collection = this.inkList.length;
        }
    }
    backToRoutingMaster() {
        this.location.back();
    }
    onSort({column, direction}: SortEvent | any) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr;
        } else {
            this.BoMOfSKUDetailsArr = [...this.BoMOfSKUDetailsArr].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
