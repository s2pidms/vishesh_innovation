import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {ToastService, SpinnerService, ExportExcelService, UtilityService} from "@core/services";
import {AddItemUOMComponent} from "@modals/index";
import {InkMasterService} from "@services/production";
import {INK_MASTER_FORM_ERRORS} from "@mocks/validations/production";
import {InkLabModalComponent} from "../ink-lab-modal/ink-lab-modal.component";
import {InkHsnModalComponent} from "../ink-hsn-modal/ink-hsn-modal.component";
import {FORMULATION_MASTER_FORM_REPORT_DATA} from "@mocks/export-data/production/master";
import {IFormulationMasterData, IInkMasterDetailsArray} from "@mocks/models/production/masters";
import {Location} from "@angular/common";

@Component({
    selector: "app-ink-form",
    templateUrl: "./ink-form.component.html",
    styleUrls: ["./ink-form.component.scss"]
})
export class InkFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    isConditionPreview = false;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    submitted = false;
    action: string = "create";
    // IInkMasterDetailsArray[]
    ESCPreviewArr: any = [];
    masterData: IFormulationMasterData = {
        autoIncrementNo: "",
        addLabValues: "",
        companyType: "",
        HSNCodesList: [],
        mergedItemInkList: [],
        UOMOptions: [],
        WXLDimensionsUnit: []
    };

    constructor(
        private exportExcelService: ExportExcelService,
        private inkMasterService: InkMasterService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        // HSN: new UntypedFormControl(null ),
        // HSNCode: new UntypedFormControl(null),
        itemCode: new UntypedFormControl(null, [Validators.required]),
        itemName: new UntypedFormControl(null, [Validators.required]),
        itemDescription: new UntypedFormControl(null, [Validators.required]),
        UoM: new UntypedFormControl(null, [Validators.required]),
        primaryUnit: new UntypedFormControl(null),
        secondaryUnit: new UntypedFormControl(null),
        primaryConversion: new UntypedFormControl(1),
        secondaryConversion: new UntypedFormControl(1),
        unitConversionFlag: new UntypedFormControl(1),
        primaryToSecondaryConversion: new UntypedFormControl(null),
        secondaryToPrimaryConversion: new UntypedFormControl(null),
        inkMasterDetails: new UntypedFormControl([]),
        labValues: new UntypedFormControl({}),
        inkCostPerKg: new UntypedFormControl(null),
        totalQty: new UntypedFormControl(null),
        totalCost: new UntypedFormControl(null),
        inkCostPerGm: new UntypedFormControl(null),
        totalCostPerGm: new UntypedFormControl(null),
        totalQtyPerGm: new UntypedFormControl(null),
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
        this.masterData.mergedItemInkList = [];
        this.collection = this.masterData.mergedItemInkList.length;
        this.isPreview = false;
        this.isESCPreview = false;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, INK_MASTER_FORM_ERRORS)) {
            return;
        }

        let formData: any = this.form.value;
        if (this.masterData.companyType == "Coating Industry") {
            this.masterData.mergedItemInkList = this.masterData.mergedItemInkList
                .filter((x: any) => x.qtyPerKgFinal > 0)
                .sort((a: any, b: any) => +a.seq - +b.seq);
        } else {
            this.masterData.mergedItemInkList = this.masterData.mergedItemInkList
                .filter((x: any) => x.qtyPerKgInitial > 0)
                .sort((a: any, b: any) => +a.seq - +b.seq);
        }
        formData.inkMasterDetails = this.masterData.mergedItemInkList;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path]);
    }

    create(formData: any) {
        this.spinner.show();
        this.inkMasterService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.inkMasterService.update(formData._id, formData).subscribe(success => {
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
    getInitialData() {
        this.spinner.show();
        this.inkMasterService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["itemCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Active");
            this.form.controls["primaryConversion"].setValue(1);
            this.form.controls["secondaryConversion"].setValue(1);
            this.form.controls["unitConversionFlag"].setValue(1);
            this.form.controls["UoM"].setValue("g");

            this.collection = this.masterData.mergedItemInkList.length;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.inkMasterService.getById(params["id"]);
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

                    success.inkMasterDetails = success.inkMasterDetails;
                    let specificationListData = this.masterData.mergedItemInkList;
                    this.masterData.mergedItemInkList = success.inkMasterDetails;

                    for (const ele of success.inkMasterDetails) {
                        specificationListData = specificationListData.filter((x: any) => x.itemCode != ele.itemCode);
                        this.ESCPreviewArr = [...success.inkMasterDetails, ...specificationListData];
                    }
                    this.collection = this.masterData.mergedItemInkList.length;
                    this.form.patchValue(success);
                    if (this.action != "create") {
                        this.isESCPreview = true;
                        this.isConditionPreview = true;
                        this.isPreview = true;
                        this.form.disable();
                        this.form.controls["status"].enable();
                    }
                });
        });
    }

    setHSNCode(event: any) {
        this.form.controls["HSNCode"].setValue(event?.value);
    }

    setPrimaryUnit() {
        let UOM = this.form.controls["UoM"].value;
        this.form.controls["primaryUnit"].setValue(UOM);
    }

    openUOMDetailsModal() {
        const modalRef = this.modalService.open(AddItemUOMComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.ModalUOMsUnit = this.masterData?.UOMOptions;
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
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success);
                    this.form.controls["UoM"].setValue(success.primaryUnit);
                }
            },
            (reason: any) => {}
        );
    }
    setItemCostDetails(ele: any) {
        // let index = this.masterData.mergedItemInkList.map((x: any) => x.item).indexOf(ele.item);
        // this.masterData.mergedItemInkList[index].qtyPerKgFinal = +(+ele?.qtyPerKgInitial / 1000).toFixed(3);
        // this.masterData.mergedItemInkList[index].itemCost = +ele.qtyPerKgFinal * +ele.ratePerUnit;
        // let totalQtyPerKgFinal = this.masterData.mergedItemInkList
        //     .map((x: any) => x.qtyPerKgFinal)
        //     .reduce((a: any, c: any) => +a + +c)
        //     .toFixed(4);
        // this.masterData.mergedItemInkList = this.masterData.mergedItemInkList.map((ele: any) => {
        //     ele.percentageLoading = +((+ele.qtyPerKgFinal * 100) / +totalQtyPerKgFinal).toFixed(2);
        //     return ele;
        // });
        // let totalInkCost = this.masterData.mergedItemInkList
        //     .map((x: any) => x.itemCost)
        //     .reduce((a: any, c: any) => +a + +c);
        // let totalInkCostPerGm = +totalInkCost / 1000;
        // this.form.controls["totalCost"].setValue(+totalInkCost.toFixed(2));
        // this.form.controls["inkCostPerGm"].setValue(+totalInkCostPerGm.toFixed(2));
        // this.form.controls["totalQty"].setValue(+totalQtyPerKgFinal);
        // let totalInkCostPerKG = +this.form.controls["totalCost"].value / +this.form.controls["totalQty"].value;
        // this.form.controls["inkCostPerKg"].setValue(+totalInkCostPerKG.toFixed(2));
    }

    setItemCostDetailsForCoating(ele: any) {
        let index = this.masterData.mergedItemInkList.map((x: any) => x.item).indexOf(ele.item);

        this.masterData.mergedItemInkList[index].qtyPerKgInitial = +(+ele?.qtyPerKgFinal * 1000).toFixed(3);
        this.masterData.mergedItemInkList[index].itemCost = +ele.qtyPerKgFinal * +ele.ratePerUnit;

        let totalQtyPerKgFinal = this.masterData.mergedItemInkList
            .map((x: any) => x.qtyPerKgFinal)
            .reduce((a: any, c: any) => +a + +c)
            .toFixed(4);

        this.masterData.mergedItemInkList = this.masterData.mergedItemInkList.map((ele: any) => {
            ele.percentageLoading = +((+ele.qtyPerKgFinal * 100) / +totalQtyPerKgFinal).toFixed(2);
            return ele;
        });

        // let totalInkCost = this.masterData.mergedItemInkList
        //     .map((x: any) => x.itemCost)
        //     .reduce((a: any, c: any) => +a + +c);

        let totalQtyPerGm = this.masterData.mergedItemInkList.reduce((a: any, c: any) => +a + +c.qtyPerKgFinal, 0);
        let totalCostPerGm = this.masterData.mergedItemInkList.reduce((a: any, c: any) => +a + +c.itemCost, 0);
        let totalQtyPerKgInitial = this.masterData.mergedItemInkList.reduce(
            (a: any, c: any) => +a + +c.qtyPerKgInitial,
            0
        );

        console.log("totalQtyPerKgInitial", totalQtyPerKgInitial);

        let totalInkCostPerGm = +totalCostPerGm / +totalQtyPerGm;
        // let totalInkCostPerGm = +totalInkCost / 1000;

        this.form.controls["totalQtyPerGm"].setValue(+totalQtyPerGm.toFixed(2));
        this.form.controls["totalCostPerGm"].setValue(+totalCostPerGm.toFixed(2));
        this.form.controls["inkCostPerGm"].setValue(+(+totalCostPerGm / +totalQtyPerGm).toFixed(3));
        // this.form.controls["inkCostPerGm"].setValue(+totalInkCostPerGm.toFixed(2));

        this.form.controls["totalQty"].setValue(+totalQtyPerKgInitial);
        this.form.controls["totalCost"].setValue(+(this.form.controls["totalCostPerGm"].value * 1000).toFixed(2));

        // let totalInkCostPerKG = +this.form.controls["totalCost"].value / +this.form.controls["totalQty"].value;
        this.form.controls["inkCostPerKg"].setValue(+((+totalCostPerGm / +totalQtyPerGm) * 1000).toFixed(2));
    }

    openLabValuesModal() {
        const modalRef = this.modalService.open(InkLabModalComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.labValues = this.form.controls["labValues"].value;

        modalRef.result.then(
            (success: any) => {
                this.form.controls["labValues"].patchValue(success);
            },
            (reason: any) => {}
        );
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = this.masterData.mergedItemInkList;
        this.masterData.mergedItemInkList = this.masterData.mergedItemInkList
            .filter((x: any) => x.seq > 0)
            .sort((a: any, b: any) => +a.seq - +b.seq);
        if (this.masterData.mergedItemInkList.length > 0) {
            this.isPreview = true;
            this.isESCPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
            this.isESCPreview = true;
        }
        this.collection = this.masterData.mergedItemInkList.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.isConditionPreview = false;
        this.masterData.mergedItemInkList = this.ESCPreviewArr;
        this.collection = this.masterData.mergedItemInkList.length;
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
        modalRef.componentInstance.HSNValue = this.form.controls["HSN"].value;
        modalRef.componentInstance.HSNCode = this.form.controls["HSNCode"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.form.controls["HSN"].setValue(success?.HSNSelect);
                    this.form.controls["HSNCode"].setValue(success?.HSNSelectCode);
                }
            },
            (reason: any) => {}
        );
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.masterData.mergedItemInkList = this.masterData.mergedItemInkList;
        } else {
            this.masterData.mergedItemInkList = [...this.masterData.mergedItemInkList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    commonChange() {
        this.exportExcelService.exportExcel(FORMULATION_MASTER_FORM_REPORT_DATA(this.masterData.mergedItemInkList));
    }
}
