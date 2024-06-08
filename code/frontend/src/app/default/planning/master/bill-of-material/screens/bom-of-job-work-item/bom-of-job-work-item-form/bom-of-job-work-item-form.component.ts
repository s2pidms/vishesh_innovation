import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SpinnerService, UtilityService, ToastService, ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {BOMOfJobWorkItemService} from "@services/planning";
import {BOM_OF_SKU_FORM_ERRORS} from "@mocks/validations/planning/BOMOfSKU.validation";
import {BomDocumentDetailsComponent} from "../../bom-of-child-item/bom-document-details/bom-document-details.component";
import {IBOMOfJobWorkItemMasterData} from "@mocks/models/planning/masters";
import {BOM_OF_JOB_WORK_ITEM_FORM_REPORT_DATA} from "@mocks/export-data/planning/master";

@Component({
    selector: "app-bom-of-job-work-item-form",
    templateUrl: "./bom-of-job-work-item-form.component.html",
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
                    right: -2rem;
                }
            }
        `
    ]
})
export class BomOfJobWorkItemFormComponent implements OnInit {
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
    documentDetailsObj: any = {
        documentNo: null,
        documentDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        revisionNo: null,
        revisionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
        docCreatedBy: null,
        docApprovedBy: null,
        QMSDocumentNo: null
    };

    masterData: IBOMOfJobWorkItemMasterData = {
        autoIncrementNo: "",
        jobWorkItemOptions: []
    };

    materialCostForPC: any = 1;

    constructor(
        private exportExcelService: ExportExcelService,
        private bomOfJobWorkItemService: BOMOfJobWorkItemService,
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
        BOMOfJWICode: new UntypedFormControl(null, [Validators.required]),
        jobWorkItem: new UntypedFormControl(null),
        jobWorkItemCode: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemName: new UntypedFormControl(null, [Validators.required]),
        jobWorkItemDescription: new UntypedFormControl(""),
        UOM: new UntypedFormControl(null),
        partCount: new UntypedFormControl(1, [Validators.required]),
        BOMOfJobWorkItemInfo: new UntypedFormControl([]),
        totalMaterialCost: new UntypedFormControl(null),
        isColorInfo: new UntypedFormControl(false),
        materialCostForOnePC: new UntypedFormControl(null),
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

        formData.BOMOfJobWorkItemInfo = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerPartCount > 0);

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
        this.bomOfJobWorkItemService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.bomOfJobWorkItemService.update(formData._id, formData).subscribe(success => {
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
                data = this.BoMOfSKUDetailsArr;
                this.exportExcelService.exportExcel(BOM_OF_JOB_WORK_ITEM_FORM_REPORT_DATA(data));
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
        this.bomOfJobWorkItemService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["BOMOfJWICode"].setValue(this.masterData.autoIncrementNo);
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
                            return this.bomOfJobWorkItemService.getById(params["id"]);
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

                    this.bomOfJobWorkItemService.getAllItemsForBOMOfJobWorkItem({}).subscribe(SKUResult => {
                        if (SKUResult.itemsList.length > 0) {
                            this.ESCPreviewInkDetails = [];
                            this.BoMOfSKUDetailsArr = success.BOMOfJobWorkItemInfo;
                            success.BOMOfJobWorkItemInfo = success.BOMOfJobWorkItemInfo;
                            let BoMOfSKUDetails = SKUResult.itemsList.map((x: any) => {
                                x.qtyPerPartCount = 0;
                                x.wastePercentage = 0;
                                return x;
                            });
                            for (const ele of success.BOMOfJobWorkItemInfo) {
                                BoMOfSKUDetails = BoMOfSKUDetails.filter((x: any) => x.itemCode != ele.itemCode);
                                this.ESCPreviewArr = [...success.BOMOfJobWorkItemInfo, ...BoMOfSKUDetails];
                            }
                            this.collection = this.BoMOfSKUDetailsArr.length;
                        }
                    });

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
                            this.form.controls["partCount"].enable();
                        }
                    }

                    if (this.action == "copy") {
                        this.form.controls["BOMOfJWICode"].setValue(result.autoIncrementNo);
                        this.form.enable();
                        delete success._id;
                    }
                });
        });
    }
    setSKUDetails(event: any) {
        this.form.controls["jobWorkItemCode"].setValue(event?.jobWorkItemCode);
        this.form.controls["jobWorkItem"].setValue(event?._id);
        this.form.controls["jobWorkItemName"].setValue(event?.jobWorkItemName);
        this.form.controls["jobWorkItemDescription"].setValue(event?.jobWorkItemDescription);
        this.form.controls["UOM"].setValue(event?.orderInfoUOM);
        let partCount = +this.form.controls["partCount"].value;
        this.materialCostForPC = partCount;

        if (this.action != "copy") {
            this.form.controls["totalMaterialCost"].setValue(null);
            this.form.controls["materialCostForOnePC"].setValue(null);
            this.spinner.show();
            this.bomOfJobWorkItemService.getAllItemsForBOMOfJobWorkItem({}).subscribe(success => {
                if (success.itemsList.length > 0) {
                    this.BoMOfSKUDetailsArr = success?.itemsList?.map((x: any) => {
                        x.qtyPerPartCount = 0;
                        x.wastePercentage = 0;

                        if (x.inkCostPerKg) {
                            x.unitCost = +x.inkCostPerKg;
                            x.itemCost = +x.totalQtyPerPC * +x.inkCostPerKg;
                        } else {
                            x.itemCost = +x.totalQtyPerPC * +x.unitCost;
                        }
                        // if (x.type == "InkInfo") {
                        //     x.totalQtyPerPC = +(
                        //         (+x.qtyPerPartCount + (+x.qtyPerPartCount * +x.wastePercentage) / 100) *
                        //         +partCount
                        //     ).toFixed(4);
                        //     x.qtyPerPartCount = +(x.qtyPerPartCount * +partCount).toFixed(4);
                        //     x.itemCost = +x.totalQtyPerPC * +x.unitCost;
                        // }
                        return x;
                    });
                    this.collection = this.BoMOfSKUDetailsArr.length;

                    let totalMaterialCost = this.BoMOfSKUDetailsArr?.map((x: any) => x?.itemCost)?.reduce(
                        (a: any, c: any) => +a + +c,
                        0
                    );

                    this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
                    this.form.controls["materialCostForOnePC"].setValue(
                        +(+totalMaterialCost / +this.materialCostForPC).toFixed(2)
                    );
                }

                this.spinner.hide();
            });
        }
    }
    setPartCount() {
        let partCount = +this.form.controls["partCount"].value;
        this.materialCostForPC = partCount;

        if (this.BoMOfSKUDetailsArr.length > 0) {
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.map((ele: any) => {
                ele.inkCostPerKg = +ele.inkCostPerKg || 0;
                ele.unitCost = +ele.unitCost || 0;
                ele.totalQtyPerPC = +ele.totalQtyPerPC || 0;
                ele.qtyPerPartCount = +ele.qtyPerPartCount || 0;
                ele.wastePercentage = +ele.wastePercentage || 0;
                ele.itemCost = +ele.itemCost || 0;

                ele.totalQtyPerPC =
                    (+ele.qtyPerPartCount + (+ele.qtyPerPartCount * +ele.wastePercentage) / 100) * partCount;

                ele.itemCost = +ele.totalQtyPerPC * +ele.unitCost;

                return ele;
            });
            let totalMaterialCost = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCost).reduce(
                (a: any, c: any) => +a + +c
            );

            this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
            this.form.controls["materialCostForOnePC"].setValue(
                +(+totalMaterialCost / +this.materialCostForPC).toFixed(2)
            );
        }
    }

    setItemCostDetails(ele: any) {
        let partCountValue = +this.form.controls["partCount"].value;
        let partCount = +this.form.controls["partCount"].value;
        let index = this.BoMOfSKUDetailsArr.map((x: any) => x.itemCode).indexOf(ele.itemCode);
        this.BoMOfSKUDetailsArr[index].totalQtyPerPC =
            (+ele.qtyPerPartCount + (+ele.qtyPerPartCount * +ele.wastePercentage) / 100) * +partCount;

        this.BoMOfSKUDetailsArr[index].itemCost = +ele.totalQtyPerPC * +ele.unitCost;
        let totalMaterialCost = this.BoMOfSKUDetailsArr.reduce((a: any, c: any) => +a + +c.itemCost, 0);
        this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
        this.form.controls["materialCostForOnePC"].setValue(+(+totalMaterialCost / +this.materialCostForPC).toFixed(2));
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
        modalRef.componentInstance.BOMNo = this.form.controls["BOMOfJWICode"].value;
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
            this.BoMOfSKUDetailsArr = this.BoMOfSKUDetailsArr.filter((x: any) => x.qtyPerPartCount > 0);
            this.collection = this.BoMOfSKUDetailsArr.length;
        }
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
        if (this.ESCPreviewArr.length > 0) {
            this.BoMOfSKUDetailsArr = this.ESCPreviewArr;
            this.collection = this.BoMOfSKUDetailsArr.length;
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
