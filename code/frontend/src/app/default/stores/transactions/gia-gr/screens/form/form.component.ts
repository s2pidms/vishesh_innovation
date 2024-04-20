import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {mergeMap, of} from "rxjs";
import {GoodsIssueService} from "@services/stores";
import {ActivatedRoute} from "@angular/router";
import {GIDetails} from "@interfaces/GIDetails";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopUpNotesComponent} from "@modals/index";
import {GIA_GR_FORM_ERRORS} from "@mocks/validations/stores/giaGr.validation";
import {IGIAgainstGRMasterData} from "@mocks/models/stores/transactions";
import {Location} from "@angular/common";

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html"
})
export class FormComponent implements OnInit {
    GIDetailsArray: GIDetails[] = [];
    itemCodes: any = [];
    ESCPreviewArr: any = [];
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "Opened";
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    firstCodes: any = [];
    statusArr: any = {
        create: "Opened",
        edit: "Opened",
        approve: "Awaiting Acknowledgement",
        reject: "Rejected",
        Acknowledged: "Acknowledged"
    };
    masterData: IGIAgainstGRMasterData = {
        autoIncrementNo: "",
        approvedGR: []
    };

    constructor(
        private goodService: GoodsIssueService,
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
        GINumber: new UntypedFormControl("", [Validators.required]),
        GRNumber: new UntypedFormControl(""),
        deliveryLocation: new UntypedFormControl(""),
        department: new UntypedFormControl(""),
        GIDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        GRDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        GIStatus: new UntypedFormControl("Opened", [Validators.required]),
        remarks: new UntypedFormControl(""),
        rejectionRemarks: new UntypedFormControl(""),
        GIDetails: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }
    navigateTo() {
        this.location.back();
    }
    reset() {
        // get initial data
        this.form.reset();
        this.GIDetailsArray = [];
        this.isPreview = false;
        this.isESCPreview = false;
        this.collection = this.GIDetailsArray.length;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.action == "reject" && !this.form.controls["rejectionRemarks"].value) {
            this.toastService.warning("Rejection Remarks is Required");
            return;
        }
        if (this.validationService.checkErrors(this.form, GIA_GR_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        formData.GIDetails = this.GIDetailsArray;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    create(formData: any) {
        this.spinner.show();
        this.goodService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.goodService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getGoodRequisitionById() {
        this.spinner.show();
        this.firstCodes = [];
        this.goodService.getGoodRequisitionById(this.form.controls["GRNumber"].value).subscribe(success => {
            this.itemCodes = success?.itemCodes;
            this.form.controls["deliveryLocation"].setValue(success?.rows[0]?.deliveryLocation);
            this.form.controls["GRDate"].setValue(
                this.utilityService.getFormatDate(success?.rows[0]?.GRDate, "YYYY-MM-DD")
            );
            this.GIDetailsArray = success.rows
                .map((ele: any, i: number) => {
                    let isFirst = false;
                    if (!this.firstCodes.some((x: any) => x == ele.item.itemCode + ele.UOM)) {
                        this.firstCodes.push(ele.item.itemCode + ele.UOM);
                        isFirst = true;
                    }
                    return {
                        isFirst: isFirst,
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
        this.goodService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            // set  dropdowns array
            // this.roles = result.roles;
            this.form.controls["GINumber"].setValue(this.masterData?.autoIncrementNo);
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
                        let isFirst = false;
                        if (!this.firstCodes.some((x: any) => x == ele.item.itemCode)) {
                            this.firstCodes.push(ele.item.itemCode);
                            isFirst = true;
                        }
                        return {
                            isFirst: isFirst,
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
                            GIQty: ele?.GIQty,
                            GILineStatus: ele?.GILineStatus
                        };
                    });
                    this.collection = this.GIDetailsArray.length;
                    success.GIStatus = this.statusArr[this.action];
                    // patch all forms fields
                    this.form.patchValue(success);
                    this.f["GRNumber"].disable();
                    // disable form if action is not 'Edit'
                    if (this.action != "edit") {
                        this.form.disable();
                    }
                    if (this.action == "reject") {
                        this.form.disable();
                        this.form.controls["rejectionRemarks"].enable();
                    }
                });
        });
    }

    changeGIQty(data: any, index: any) {
        index = index + (this.page - 1) * this.pageSize;
        let filterData = this.GIDetailsArray.filter(x => x.item == data?.item && x.UOM == data.UOM).map((m: any, i) => {
            m.order = i + 1;
            return m;
        });
        let order = filterData.find(x => x.MRN == data?.MRN)?.order;
        let oldData = filterData.filter(x => x.order < order);
        if (oldData.length) {
            let remainingQuantity = data.GRQty;
            for (let i = 0; i < oldData.length; i++) {
                const element = oldData[i];
                if (remainingQuantity > element.IRQty) {
                    if (element.GIQty < element.IRQty) {
                        this.toastService.warning("FIFO deviation detected. Kindly review your MRN Selection.");
                        break;
                    }
                } else {
                    if (element.GIQty < remainingQuantity) {
                        this.toastService.warning("FIFO deviation detected. Kindly review your MRN Selection.");
                        break;
                    }
                }
            }
        }
        let totalIssueQty = filterData.map(m => m.GIQty).reduce((a, c) => a + c, 0);

        if (totalIssueQty > data?.GRQty) {
            this.GIDetailsArray[index].GIQty = 0;
            this.GIDetailsArray = [...this.GIDetailsArray];
            this.toastService.error("Total Issue Qty cannot be more than GR Qty.");
            return;
        }

        if (data.GRQty < data.GIQty) {
            this.toastService.warning(`Goods Issues Qty should not be grater than Good Requisition Qty!`);
            this.GIDetailsArray[index].GIQty = 0;
            return;
        }
        if (data.IRQty < data.GIQty) {
            this.toastService.warning(`Goods Issues Qty should not be grater than IR Qty!`);
            this.GIDetailsArray[index].GIQty = 0;
            return;
        }
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
            modalRef.componentInstance.alertMessage = `Dear Store InCharge Material Stock is Zero for Item Code No: ${this.itemCodes}`;

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

    preview() {
        this.search = "";
        this.ESCPreviewArr = this.GIDetailsArray;
        this.isESCPreview = true;
        this.GIDetailsArray = this.GIDetailsArray.filter((x: any) => x.GIQty > 0);
        if (this.GIDetailsArray.length == 0) {
            this.toastService.warning(`At least One Row is Required!`);
        } else {
            this.isPreview = true;
        }
        this.collection = this.GIDetailsArray.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.GIDetailsArray = this.ESCPreviewArr;
        this.collection = this.GIDetailsArray.length;
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
