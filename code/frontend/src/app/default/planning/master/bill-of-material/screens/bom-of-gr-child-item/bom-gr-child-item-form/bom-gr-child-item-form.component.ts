import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SpinnerService, UtilityService, ToastService, ExportExcelService} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {mergeMap, of} from "rxjs";
import {BOMGrandChildItemService} from "@services/planning";
import {BOM_OF_GRAND_CHILD_ITEM_FORM_ERRORS} from "@mocks/validations/planning/BOMOfSKU.validation";
import {Location} from "@angular/common";
import {BomDocumentDetailsComponent} from "../../bom-of-child-item/bom-document-details/bom-document-details.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BOM_OF_GRAND_CHILD_PART_FORM_REPORT_DATA} from "@mocks/export-data/planning/master";
import {BOMOfGrChildMasterData} from "@mocks/models/planning/masters";

@Component({
    selector: "app-bom-gr-child-item-form",
    templateUrl: "./bom-gr-child-item-form.component.html"
})
export class BomGrChildItemFormComponent implements OnInit {
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
    grandChildDataArr: any = [];
    ESCPreviewArr: any = [];
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

    masterData: BOMOfGrChildMasterData = {
        autoIncrementNo: "",
        childItemsOptions: [],
        itemsList: []
    };

    constructor(
        private bomGrandChildItemService: BOMGrandChildItemService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private location: Location,
        private modalService: NgbModal,
        private exportExcelService: ExportExcelService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        BOMNo: new UntypedFormControl(null, [Validators.required]),
        childItem: new UntypedFormControl(null),
        grandChildItemCode: new UntypedFormControl(null, [Validators.required]),
        grandChildItemName: new UntypedFormControl(null, [Validators.required]),
        grandChildItemDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        partCount: new UntypedFormControl(1, [Validators.required]),
        totalMaterialCost: new UntypedFormControl(null),
        status: new UntypedFormControl("Active"),
        BOMOfGrandChildItemDetails: new UntypedFormControl([]),
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
        this.masterData.itemsList = [];
        this.collection = this.masterData?.itemsList.length;
        this.isPreview = false;
        this.isESCPreview = false;
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, BOM_OF_GRAND_CHILD_ITEM_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (this.action == "copy") {
            delete formData._id;
        }
        formData.BOMOfGrandChildItemDetails = this.masterData?.itemsList.filter((x: any) => x.partCount > 0);
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
        this.bomGrandChildItemService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.bomGrandChildItemService.update(formData._id, formData).subscribe(success => {
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
                this.exportExcelService.exportExcel(
                    BOM_OF_GRAND_CHILD_PART_FORM_REPORT_DATA(this.masterData?.itemsList)
                );
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
        this.bomGrandChildItemService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["BOMNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["partCount"].setValue(1);
            this.masterData.itemsList = result?.itemsList;
            this.collection = this.masterData?.itemsList.length;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.bomGrandChildItemService.getById(params["id"]);
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

                    success.BOMOfGrandChildItemDetails = success.BOMOfGrandChildItemDetails;

                    let BOMOfGrandChildItemData = this.masterData?.itemsList;
                    this.masterData.itemsList = success.BOMOfGrandChildItemDetails;
                    for (const ele of success.BOMOfGrandChildItemDetails) {
                        BOMOfGrandChildItemData = BOMOfGrandChildItemData.filter(
                            (x: any) => x.itemCode != ele.itemCode
                        );
                        this.ESCPreviewArr = [...success.BOMOfGrandChildItemDetails, ...BOMOfGrandChildItemData];
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
                    this.collection = this.masterData?.itemsList.length;
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

    setPartCount() {
        let partCount = +this.form.controls["partCount"].value;

        if (this.masterData.itemsList.length > 0) {
            this.masterData.itemsList = this.masterData?.itemsList.map((ele: any) => {
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
            let totalMaterialCost = this.masterData?.itemsList
                .map((x: any) => x.itemCost)
                .reduce((a: any, c: any) => +a + +c);

            this.form.controls["totalMaterialCost"].setValue(+totalMaterialCost.toFixed(2));
        }
    }

    setItemDetails(event: any) {
        this.form.controls["childItem"].setValue(event._id);
        this.bomGrandChildItemService.checkBOMOfGrChildExistsById(event._id).subscribe();
        this.form.controls["grandChildItemDescription"].setValue(event.itemDescription);
        this.form.controls["grandChildItemName"].setValue(event.itemName);
        this.form.controls["grandChildItemCode"].setValue(event.itemCode);
        this.form.controls["UOM"].setValue(event.unitOfMeasurement);
    }

    setItemCostDetails(ele: any) {
        let partCount = this.form.controls["partCount"].value;
        let index = this.masterData.itemsList.map((x: any) => x.itemCode).indexOf(ele.itemCode);
        this.masterData.itemsList[index].partCount =
            (+ele.qtyPerSKUUnit + (+ele.qtyPerSKUUnit * +ele.wastePercentage) / 100) * +partCount;
        this.masterData.itemsList[index].itemCost = +ele.partCount * +ele.unitCost;

        let totalMaterialCost = this.masterData?.itemsList
            .map((x: any) => x.itemCost)
            .reduce((a: any, c: any) => +a + +c);

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
        this.ESCPreviewArr = this.masterData?.itemsList;
        this.masterData.itemsList = this.masterData?.itemsList.filter((x: any) => x.partCount > 0);
        if (this.masterData.itemsList.length > 0) {
            this.isPreview = true;
            this.isESCPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
            this.isESCPreview = true;
        }
        this.collection = this.masterData?.itemsList.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        this.masterData.itemsList = this.ESCPreviewArr;
        this.collection = this.masterData?.itemsList.length;
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.masterData.itemsList = this.masterData?.itemsList;
        } else {
            this.masterData.itemsList = [...this.masterData?.itemsList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    backClicked() {
        this.location.back();
    }
}
