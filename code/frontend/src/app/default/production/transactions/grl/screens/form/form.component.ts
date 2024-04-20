import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GoodsRequisitionService} from "@services/production";
import {GRDetails} from "@interfaces/GRDetails";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {
    ToastService,
    MenuTitleService,
    SpinnerService,
    StorageService,
    UtilityService,
    ExportExcelService
} from "@core/services";
import {ValidationService} from "@core/components/validation-messages/validation-messages.service";
import {PopUpNotesComponent} from "@modals/index";
import {GOODS_REQUISITION_ERRORS} from "@mocks/validations/production/grl.validation";
import {GOODS_REQUISITION_FORM_REPORT_DATA} from "@mocks/export-data/production/transactions";
import {IGoodsRequisitionMasterData} from "@mocks/models/production/transactions";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html"
})
export class FormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    isESCPreview = false;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    submitted = false;
    action: string = "create";
    GRDetailsArray: GRDetails[] = [];
    itemCodes: any = [];
    ESCPreviewArr: any = [];
    itemCategory: String = "";
    itemGroup: String = "";
    userData: any = {};
    statusArr: any = {
        create: "Opened",
        edit: "Opened",
        approve: "Approved",
        reject: "Rejected"
    };
    masterData: IGoodsRequisitionMasterData = {
        autoIncrementNo: "",
        itemCategoryOptions: [],
        locationOptions: []
    };

    constructor(
        private goodReqService: GoodsRequisitionService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private exportExcelService: ExportExcelService,
        private location: Location
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        GRNumber: new UntypedFormControl("", [Validators.required]),
        GRDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        GRStatus: new UntypedFormControl("Opened", [Validators.required]),
        salesOrderSKUReference: new UntypedFormControl(""),
        deliveryLocation: new UntypedFormControl(null, [Validators.required]),
        department: new UntypedFormControl(""),
        remarks: new UntypedFormControl(""),
        GRDetails: new UntypedFormControl([])
    });

    ngOnInit(): void {
        this.userData = this.storageService.get("IDMSAUser");
        this.getInitialData();
        this.menuTitleService.set({
            title: "Goods Requisition",
            subTitle: null,
            type: this.action
        });
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    reset() {
        this.itemCategory = "";
        this.itemGroup = "";
        this.form.reset();
        this.GRDetailsArray = [];
        this.collection = this.GRDetailsArray.length;
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Remarks is Required");
            return;
        }
        this.form.enable();
        if (this.validationService.checkErrors(this.form, GOODS_REQUISITION_ERRORS)) {
            return;
        }
        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Remarks is Required");
            return;
        }
        let formData: any = this.form.value;
        formData.GRDetails = this.GRDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute, queryParams: {id, action}});
    }

    create(formData: any) {
        this.spinner.show();
        this.goodReqService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.itemCodes = success.itemCodes;
            this.location.back();
            this.openAlertMessageModal();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.goodReqService.update(formData._id, formData).subscribe(success => {
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
                this.exportExcelService.exportExcel(GOODS_REQUISITION_FORM_REPORT_DATA(this.GRDetailsArray));
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    setGRQty(item: any) {
        if (item.GRQty > item.closedIRQty) {
            this.toastService.warning("GR Qty Should not be greater than IR Qty. !");
            return;
        }
    }
    getInitialData() {
        this.spinner.show();
        this.goodReqService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["GRNumber"].setValue(this.masterData.autoIncrementNo);
            this.form.controls["GRDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["deliveryLocation"].setValue(null);
            this.form.controls["department"].setValue(this.userData?.departmentName);
            this.form.controls["GRStatus"].setValue("Opened");

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.goodReqService.getById(params["id"]);
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
                    this.GRDetailsArray = success.GRDetails.map((ele: any, idx: any) => {
                        if (idx == 0) {
                            this.itemCategory = ele?.item?.itemType;
                            this.itemGroup = ele?.item?.itemSubCategory;
                        }
                        return {
                            GRLineNumber: idx + 1,
                            primaryUnit: ele.primaryUnit,
                            GRQty: ele.GRQty,
                            closedIRQty: ele.closedIRQty,
                            balancedQty: ele.GRQty,
                            item: ele?.item?._id,
                            itemName: ele?.item?.itemName,
                            itemCode: ele?.item?.itemCode,
                            itemDescription: ele?.item?.itemDescription,
                            conversionOfUnits: ele?.item?.conversionOfUnits,
                            GRLineStatus: "Opened"
                        };
                    });
                    this.collection = this.GRDetailsArray.length;
                    if (success.GRDate) {
                        success.GRDate = success?.GRDate.split("T")[0];
                    }
                    success.GRStatus = this.statusArr[this.action];

                    this.form.patchValue(success);

                    // disable form if action is not 'Edit'
                    if (this.action != "create") {
                        this.form.disable();
                        if (this.action == "edit") {
                            this.form.controls["salesOrderSKUReference"].enable();
                        }
                        if (this.action == "reject") {
                            this.form.controls["remarks"].enable();
                        }
                    }
                });
            //set menu header values
            this.menuTitleService.set({
                title: "Goods Requisition",
                subTitle: null,
                type: null
            });
        });
    }

    openAlertMessageModal() {
        if (this.itemCodes.length > 0) {
            const modalRef = this.modalService.open(PopUpNotesComponent, {
                centered: true,
                size: "md",
                backdrop: "static",
                keyboard: false
            });

            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.alertMessage = `Dear GR Creator, it has been noticed that material you requested having Item Code No: ${this.itemCodes} are not presently available in store`;
            modalRef.componentInstance.itemCodes = this.itemCodes;
            modalRef.result.then(
                (success: any) => {
                    if (["create", "edit"].includes(this.action)) {
                        this.itemCodes = success;
                    }
                },
                (reason: any) => {}
            );
        }
    }

    getData() {
        this.spinner.show();
        this.isESCPreview = false;
        this.isPreview = false;
        let payload = {
            itemCategory: this.itemGroup,
            itemGroup: this.itemCategory,
            page: this.page,
            pageSize: this.pageSize,
            search: this.search,
            column: this.column,
            direction: this.direction
        };
        this.goodReqService.getAllFilterData(payload).subscribe(success => {
            this.GRDetailsArray = success?.map((ele: any, idx: any) => {
                return {
                    GRLineNumber: idx + 1,
                    primaryUnit: ele.primaryUnit,
                    issueQty: 0,
                    GRQty: 0,
                    closedIRQty: ele.closedIRQty,
                    balancedQty: 0,
                    item: ele._id,
                    itemName: ele.itemName,
                    itemCode: ele.itemCode,
                    itemDescription: ele.itemDescription,
                    conversionOfUnits: ele.conversionOfUnits,
                    GRLineStatus: "Opened"
                };
            });
            this.collection = this.GRDetailsArray.length;
            this.spinner.hide();
        });
    }

    preview() {
        this.search = "";
        this.isPreview = true;
        this.isESCPreview = true;
        this.ESCPreviewArr = this.GRDetailsArray;
        this.GRDetailsArray = this.GRDetailsArray.filter((x: any) => x.GRQty > 0);
        this.collection = this.GRDetailsArray.length;
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.GRDetailsArray = this.ESCPreviewArr;
        this.collection = this.GRDetailsArray.length;
    }

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.GRDetailsArray = this.GRDetailsArray;
        } else {
            this.GRDetailsArray = [...this.GRDetailsArray].sort((a: any | GRDetails, b: any | GRDetails) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
