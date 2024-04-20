import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, SpinnerService, UtilityService, ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {BOM_OF_SKU_FORM_ERRORS} from "@mocks/validations/planning/BOMOfSKU.validation";
import {BOMOfDSKUService} from "@services/business-leads";
import {BOM_OF_D_SKU_FORM_REPORT_DATA} from "@mocks/export-data/planning/master";
import {BOMOfDSKUMasterData} from "@mocks/models/business-leads/masters";
import {BomDocumentDetailsComponent} from "src/app/default/planning/master/bill-of-material/screens/bom-of-child-item/bom-document-details/bom-document-details.component";

@Component({
    selector: "app-bom-of-d-sku-form",
    templateUrl: "./bom-of-d-sku-form.component.html",
    styleUrls: ["./bom-of-d-sku-form.component.scss"]
})
export class BomOfDSkuFormComponent implements OnInit {
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
    masterData: BOMOfDSKUMasterData = {
        autoIncrementNo: "",
        DSKUListOptions: [],
        mergedItems: []
    };

    constructor(
        private exportExcelService: ExportExcelService,
        private bomOfDSKUService: BOMOfDSKUService,
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
        formData.BOMOfSKUDetails = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerSKUUnit > 0);
        if (this.inkList.length > 0) {
            formData.BOMOfSKUDetails = this.inkList.filter((x: any) => x.qtyPerSKUUnit > 0);
            formData.isColorInfo = true;
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
        this.bomOfDSKUService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.bomOfDSKUService.update(formData._id, formData).subscribe(success => {
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
                this.exportExcelService.exportExcel(BOM_OF_D_SKU_FORM_REPORT_DATA(data));
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
        this.bomOfDSKUService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["BOMNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["partCount"].setValue(1);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.bomOfDSKUService.getById(params["id"]);
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
                    if (success.isColorInfo == false) {
                        this.BoMOfSKUDetailsArr = success.BOMOfSKUDetails;
                        success.BOMOfSKUDetails = success.BOMOfSKUDetails;

                        let BoMOfSKUDetails = this.masterData.mergedItems;
                        for (const ele of success.BOMOfSKUDetails) {
                            BoMOfSKUDetails = BoMOfSKUDetails.filter((x: any) => x.itemCode != ele.itemCode);
                            this.ESCPreviewArr = [...success.BOMOfSKUDetails, ...BoMOfSKUDetails];
                        }
                    }
                    if (success.isColorInfo == true) {
                        this.bomOfDSKUService.getAllInkListBySKUId({SKUId: success?.SKU}).subscribe(SKUResult => {
                            this.BoMOfSKUDetailsArr = [];
                            let inkListData = SKUResult.map((x: any) => {
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
                    this.form.patchValue(success);
                    if (this.action != "create") {
                        this.isESCPreview = true;
                        this.isConditionPreview = true;
                        this.isPreview = true;
                        this.form.disable();
                        if (this.action == "edit") {
                            this.form.controls["status"].enable();
                            this.form.controls["partCount"].enable();
                        }
                    }
                });
        });
    }
    setSKUDetails(event: any) {
        this.form.controls["SKUDescription"].setValue(event.SKUDescription);
        this.form.controls["SKU"].setValue(event._id);
        this.form.controls["SKUName"].setValue(event.SKUName);
        this.form.controls["SKUCode"].setValue(event.dSKUNo);
        this.form.controls["UOM"].setValue(event.primaryUnit);
        this.form.controls["totalMaterialCost"].setValue(null);
        this.spinner.show();
        this.bomOfDSKUService.getAllInkListBySKUId({SKUId: event._id, action: "create"}).subscribe(success => {
            if (success.length > 0) {
                this.BoMOfSKUDetailsArr = [];
                this.inkList = success.map((x: any) => {
                    x.itemCost = null;
                    x.wastePercentage = 0;
                    return x;
                });
                this.collection = this.inkList.length;
            }
            if (success.length == 0 && this.masterData.mergedItems.length > 0) {
                this.inkList = [];
                this.BoMOfSKUDetailsArr = JSON.parse(JSON.stringify(this.masterData.mergedItems));
                this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.map((x: any) => {
                    x.qtyPerSKUUnit = 0;
                    x.wastePercentage = 0;
                    return x;
                });
                this.collection = this.BoMOfSKUDetailsArr.length;
            }
            this.spinner.hide();
        });
    }
    setPartCount() {
        let partCount = +this.form.controls["partCount"].value;
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
        }
    }
    setInkDetails(ele: any) {
        let index = this.inkList.map((x: any) => x.itemCode).indexOf(ele.itemCode);
        let partCount = this.form.controls["partCount"].value;
        if (ele.qtyPerSKUUnit && ele.wastePercentage) {
            this.inkList[index].partCount =
                (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
        } else {
            this.inkList[index].partCount =
                (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
        }

        if (ele.inkCostPerKg) {
            this.inkList[index].unitCost = +ele.inkCostPerKg;
            this.inkList[index].itemCost = +ele.partCount * +ele.inkCostPerKg;
        } else {
            this.inkList[index].itemCost = +ele.partCount * +this.inkList[index].unitCost;
        }
        let totalMaterialCost = this.inkList.map((x: any) => x.itemCost).reduce((a: any, c: any) => +a + +c);

        this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
    }

 
    setItemCostDetails(ele: any) {
        let partCount = this.form.controls["partCount"].value;
        let index = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCode).indexOf(ele.itemCode);
        this.BoMOfSKUDetailsArr[index].partCount =
            (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
        this.BoMOfSKUDetailsArr[index].itemCost = +ele.partCount * +ele.unitCost;

        let totalMaterialCost = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCost).reduce((a: any, c: any) => +a + +c);

        this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
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
                if (["create", "edit"].includes(this.action) && success) {
                    this.documentDetails = success.documentDetails;
                    this.documentDetailsObj = success.documentDetailsObj;
                }
            },
            (reason: any) => {}
        );
    }

    preview() {
        this.search = "";
        if (this.inkList.length == 0) {
            this.ESCPreviewArr = this.BoMOfSKUDetailsArr;
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerSKUUnit > 0);
            this.collection = this.BoMOfSKUDetailsArr.length;
        }
        if (this.inkList.length > 0) {
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
            this.isESCPreview = false;
        }
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        this.BoMOfSKUDetailsArr = this.ESCPreviewArr;
        this.collection = this.BoMOfSKUDetailsArr.length;
        if (this.inkList.length > 0) {
            this.inkList = this.ESCPreviewInkDetails;
            this.collection = this.inkList.length;
        }
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
