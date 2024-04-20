import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ToastService, SpinnerService, UtilityService, ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {BOM_OF_SKU_FORM_ERRORS} from "@mocks/validations/planning/BOMOfSKU.validation";
import {BomDocumentDetailsComponent} from "../../bom-of-child-item/bom-document-details/bom-document-details.component";
import {BOMOfProductService} from "@services/planning";
import {BOM_OF_PRODUCT_FORM_REPORT_DATA} from "@mocks/export-data/planning/master/BOMOfProductForm";
import {BOMOfProductDetailsArray, BOMOfProductMasterData} from "@mocks/models/planning/masters";
import {Location} from "@angular/common";

@Component({
    selector: "app-bom-of-product-form",
    templateUrl: "./bom-of-product-form.component.html",
    styleUrls: ["./bom-of-product-form.component.scss"]
})
export class BomOfProductFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isConditionPreview = false;
    isESCPreview = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    submitted = false;
    action: string = "create";
    // BOMOfProductDetailsArray[]
    BoMOfSKUDetailsArr: any = [];
    ESCPreviewArr: any = [];
    ESCPreviewInkDetails: any = [];
    documentDetails: any = [];
    oldDocumentDetails: any = [];
    documentDetailsObj: any = {
        documentNo: null,
        documentDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        revisionNo: null,
        revisionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        docCreatedBy: null,
        docApprovedBy: null,
        QMSDocumentNo: null
    };

    masterData: BOMOfProductMasterData = {
        autoIncrementNo: "",
        productMasterOptions: []
    };

    constructor(
        private bomOfProductService: BOMOfProductService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private exportExcelService: ExportExcelService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        BOMNo: new UntypedFormControl(null, [Validators.required]),
        product: new UntypedFormControl(null),
        productNo: new UntypedFormControl(null, [Validators.required]),
        productCategory: new UntypedFormControl(null, [Validators.required]),
        productName: new UntypedFormControl(null, [Validators.required]),
        productDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        partCount: new UntypedFormControl(1, [Validators.required]),
        documentDetails: new UntypedFormControl([]),
        BoMOfProductDetails: new UntypedFormControl([]),
        totalMaterialCost: new UntypedFormControl(null),
        status: new UntypedFormControl("Active")
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
        formData.BoMOfProductDetails = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerSKUUnit > 0);
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
        this.bomOfProductService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.bomOfProductService.update(formData._id, formData).subscribe(success => {
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
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    commonChange() {
        this.exportExcelService.exportExcel(BOM_OF_PRODUCT_FORM_REPORT_DATA(this.BoMOfSKUDetailsArr));
    }
    getInitialData() {
        this.spinner.show();
        this.bomOfProductService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["BOMNo"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["partCount"].setValue(1);
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;

                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.bomOfProductService.getById(params["id"]);
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
                    if (success.BoMOfProductDetails) {
                        this.bomOfProductService
                            .getAllMergedItemForBOMOfProduct({product: success?.SKU})
                            .subscribe(SKUResult => {
                                this.BoMOfSKUDetailsArr = success.BoMOfProductDetails;
                                success.BoMOfProductDetails = success.BoMOfProductDetails;

                                let BoMOfSKUDetails = SKUResult?.mergedItems.map((x: any) => {
                                    x.qtyPerSKUUnit = 0;
                                    x.wastePercentage = 0;
                                    return x;
                                });
                                for (const ele of success.BoMOfProductDetails) {
                                    BoMOfSKUDetails = BoMOfSKUDetails.filter((x: any) => x.itemCode != ele.itemCode);
                                    this.ESCPreviewArr = [...success.BoMOfProductDetails, ...BoMOfSKUDetails];
                                }

                                this.collection = this.BoMOfSKUDetailsArr.length;
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
                    if (this.action == "copy") {
                        this.form.controls["BOMNo"].setValue(result.autoIncrementNo);
                        this.form.enable();
                        delete success._id;
                    }
                });
        });
    }
    setSKUDetails(event: any) {
        this.spinner.show();
        this.bomOfProductService
            .getAllMergedItemForBOMOfProduct({product: event._id, action: "create"})
            .subscribe((success: any) => {
                this.spinner.hide();
                this.BoMOfSKUDetailsArr = success?.mergedItems.map((x: any) => {
                    x.qtyPerSKUUnit = 0;
                    x.wastePercentage = 0;
                    return x;
                });
            });

        this.form.controls["productDescription"].setValue(event.productDescription);
        this.form.controls["product"].setValue(event._id);
        this.form.controls["productName"].setValue(event.productName);
        this.form.controls["productCategory"].setValue(event.productCategory);
        this.form.controls["productNo"].setValue(event.productNo);
        this.form.controls["UOM"].setValue(event.primaryUnit);
        if (this.action != "copy") {
            this.form.controls["totalMaterialCost"].setValue(null);
            this.BoMOfSKUDetailsArr = [];
            // this.BoMOfSKUDetailsArr = JSON.parse(JSON.stringify(this.BoMOfSKUConditionArr));
        }
    }
    setPartCount() {
        let partCount = +this.form.controls["partCount"].value;

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
        this.ESCPreviewArr = this.BoMOfSKUDetailsArr;
        this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerSKUUnit > 0);
        this.collection = this.BoMOfSKUDetailsArr.length;

        if (this.BoMOfSKUDetailsArr.length > 0) {
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
        this.BoMOfSKUDetailsArr = this.ESCPreviewArr;
        this.collection = this.BoMOfSKUDetailsArr.length;
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
