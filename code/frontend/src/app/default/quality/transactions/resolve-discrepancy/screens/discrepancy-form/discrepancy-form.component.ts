import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {mergeMap, of} from "rxjs";
import {GoodsIssueService} from "@services/stores";
import {ActivatedRoute, Router} from "@angular/router";
import {GIDetails} from "@interfaces/GIDetails";

import {ToastService} from "@core/services";
import {MenuTitleService, SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopUpNotesComponent} from "@modals/index";
import {GIA_GR_FORM_ERRORS} from "@mocks/validations/stores/giaGr.validation";
import {IGIAgainstGRMasterData} from "@mocks/models/stores/transactions";

@Component({
    selector: "app-discrepancy-form",
    templateUrl: "./discrepancy-form.component.html",
    styleUrls: ["./discrepancy-form.component.scss"]
})
export class DiscrepancyFormComponent implements OnInit {
    GIDetailsArray: GIDetails[] = [];
    itemCodes: any = [];
    submitted = false;
    action: string = "Opened";
    Goods: any = [];
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    updateInventory = false;
    updateWIP = false;
    tableData: any = [];

    actionByArr: any = [{label: "Stores"}];
    statusArr: any = {
        create: "Opened",
        edit: "Opened",
        viewDSCR: "Discrepancy Resolved"
    };
    masterData: IGIAgainstGRMasterData = {
        autoIncrementNo: "",
        approvedGR: []
    };

    constructor(
        private goodService: GoodsIssueService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        GINumber: new UntypedFormControl("", [Validators.required]),
        GRNumber: new UntypedFormControl(""),
        deliveryLocation: new UntypedFormControl(""),
        department: new UntypedFormControl(""),
        GIDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        GRDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        GIStatus: new UntypedFormControl("Opened", [Validators.required]),
        remarks: new UntypedFormControl(""),
        rejectionRemarks: new UntypedFormControl(""),
        actionBy: new UntypedFormControl("Stores"),
        GIDetails: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path]);
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, GIA_GR_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.GIDetails = this.GIDetailsArray;
        if (formData._id) {
            this.update(formData);
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    update(formData: any) {
        this.spinner.show();
        this.goodService.updateOnResolveDiscrepancy(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.router.navigate(["default/quality/transactions/resolve_discrepancy/list"]);
        });
    }

    getGoodRequisitionById() {
        this.spinner.show();
        this.goodService.getGoodRequisitionById(this.form.controls["GRNumber"].value).subscribe(success => {
            this.itemCodes = success?.itemCodes;
            this.form.controls["deliveryLocation"].setValue(success.rows[0].deliveryLocation);
            this.form.controls["GRDate"].setValue(
                this.utilityService.getFormatDate(success.rows[0].GRDate, "YYYY-MM-DD")
            );
            this.GIDetailsArray = success.rows
                .map((ele: any, i: number) => {
                    return {
                        GILineNumber: i + 1,
                        GRLineNumber: ele.GRLineNumber,
                        GINDate: this.utilityService.getFormatDate(ele.GINDate, "YYYY-MM-DD"),

                        IC: ele._id,
                        GIN: ele?.GIN?._id,
                        MRN: ele?.MRN?._id,
                        MRNDate: ele?.MRN?.MRNDate,
                        mrnNo: ele?.MRN?.MRNNumber,
                        item: ele.item._id,
                        itemCode: ele.item.itemCode,
                        itemName: ele.item.itemName,
                        itemDescription: ele.item.itemDescription,
                        itemType: ele.item.itemType,
                        itemSubCategory: ele.item.itemSubCategory,
                        conversionOfUnits: ele.item.conversionOfUnits,
                        expiryStatus: ele.expiryStatus,
                        UOM: ele.UOM,
                        IRQty: ele.closedIRQty,
                        GRQty: ele.GRQty,
                        GIQty: ele.GIQty ?? 0,
                        GILineStatus: "Opened"
                    };
                })
                .filter((x: any) => x.GRQty > 0);
            this.collection = this.GIDetailsArray.length;

            this.openAlertMessageModal();

            this.spinner.hide();
        });
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.goodService.getAllMasterData({}).subscribe(success => {
            // set  dropdowns array
            this.Goods = success.approvedGR;

            this.form.controls["GINumber"].setValue(success.autoIncrementNo);
            this.form.controls["GIStatus"].setValue("Opened");
            this.form.controls["GIDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["GRDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.goodService.getById(params["id"]);
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
                    if (success.GIDate) {
                        success.GIDate = success.GIDate.split("T")[0];
                    }
                    if (success.GRDate) {
                        success.GRDate = success.GRDate.split("T")[0];
                    }

                    // create form object by modifying
                    this.GIDetailsArray = success.GIDetails.map((ele: any, i: number) => {
                        return {
                            GILineNumber: ele?.GILineNumber,
                            GRLineNumber: ele?.GRLineNumber,
                            GINDate: this.utilityService.getFormatDate(ele?.GINDate, "YYYY-MM-DD"),
                            IC: ele?.IC,
                            GIN: ele?.GIN,
                            MRN: ele?.MRN,
                            MRNDate: ele?.MRN?.MRNDate,
                            mrnNo: ele?.MRN?.MRNNumber,
                            item: ele.item._id,
                            itemCode: ele.item.itemCode,
                            itemName: ele.item.itemName,
                            itemDescription: ele.item.itemDescription,
                            itemType: ele.item.itemType,
                            itemSubCategory: ele.item.itemSubCategory,
                            conversionOfUnits: ele.item.conversionOfUnits,
                            expiryStatus: ele.expiryStatus,
                            UOM: ele?.UOM,
                            IRQty: ele?.IRQty,
                            GRQty: ele?.GRQty,
                            receiptQty: ele?.receiptQty,
                            diffQty: ele?.diffQty,
                            GIQty: ele?.GIQty,
                            inventoryQty: this.action == "view" ? ele.inventoryQty : 0,
                            WIPQty: this.action == "view" ? ele.WIPQty : 0,
                            GILineStatus: ele?.GILineStatus
                        };
                    });
                    this.collection = this.GIDetailsArray.length;
                    this.tableData = this.GIDetailsArray;
                    success.GIStatus = this.statusArr[this.action];
                    // patch all forms fields
                    this.actionByArr.push({label: `${success.department}`});

                    this.form.patchValue(success);
                    this.f["GRNumber"].disable();
                    // disable form if action is not 'Edit'
                    if (this.action == "view") {
                        this.form.disable();
                    }
                });
        });
    }

    setInventory() {
        this.updateInventory = this.GIDetailsArray.every((x: any) => +x.inventoryQty + +x.diffQty == 0);
    }

    setWIP() {
        this.updateWIP = this.GIDetailsArray.every((x: any) => +x.WIPQty + +x.diffQty == 0);
    }

    setActionBy() {
        this.GIDetailsArray = this.tableData.map((x: any) => {
            x.inventoryQty = 0;
            x.WIPQty = 0;
            return x;
        });
        this.setInventory();
        this.setWIP();
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
            modalRef.componentInstance.alertMessage = `Dear Store Incharge Material Stock is Zero for Item Code No: ${this.itemCodes}`;

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

    deptValue(ele: any) {
        this.f["department"].setValue(ele?.department);
    }
}
