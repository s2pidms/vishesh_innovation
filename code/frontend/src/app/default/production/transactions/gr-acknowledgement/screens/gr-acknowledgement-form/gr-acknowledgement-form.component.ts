import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {mergeMap, of} from "rxjs";
import {GoodsIssueService} from "@services/stores";
import {ActivatedRoute, Router} from "@angular/router";
import {GIDetails} from "@interfaces/GIDetails";
import {ToastService, SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopUpNotesComponent} from "@modals/index";
import {GIA_GR_FORM_ERRORS} from "@mocks/validations/stores/giaGr.validation";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {IGRAcknowledgementMasterData} from "@mocks/models/production/transactions";
import {Location} from "@angular/common";

@Component({
    selector: "app-gr-acknowledgement-form",
    templateUrl: "./gr-acknowledgement-form.component.html"
})
export class GrAcknowledgementFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    GIDetailsArray: GIDetails[] = [];
    itemCodes: any = [];
    submitted = false;
    buttonCondition = true;
    action: string = "Opened";
    GROptions: any = [];
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    statusArr: any = {
        create: "Opened",
        edit: "Opened",
        approve: "Awaiting Acknowledgement",
        reject: "Rejected",
        Acknowledged: "Acknowledged"
    };
    masterData: IGRAcknowledgementMasterData = {
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
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path], {relativeTo: this.activatedRoute});
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, GIA_GR_FORM_ERRORS)) {
            return;
        }
        let formData: any = this.form.value;
        if (!this.buttonCondition) {
            formData.GIStatus = "Discrepancy Reported";
        }
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
        this.goodService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
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
                        GIQty: ele.GIQty,
                        receiptQty: ele.GIQty,
                        diffQty: 0,
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
            // set  dropdowns array
            this.GROptions = result.approvedGR;
            this.form.controls["GINumber"].setValue(result.autoIncrementNo);
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
                            IRQty: ele.IRQty,
                            GRQty: ele.GRQty,
                            GIQty: ele.GIQty,
                            receiptQty: this.action == "view" ? ele.receiptQty : ele.GIQty,
                            diffQty: this.action == "view" ? ele.diffQty : 0,
                            GILineStatus: ele?.GILineStatus
                        };
                    });

                    this.GROptions = [
                        {
                            GRNumber: success.GRNumber.GRNumber,
                            _id: success.GRNumber._id
                        }
                    ];
                    success.GRNumber = success.GRNumber._id;

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

    setDiffQty(ele: any, index: any) {
        index = index + (this.page - 1) * this.pageSize;
        this.GIDetailsArray[index].diffQty = +ele.receiptQty - +ele.GIQty;
        this.buttonCondition = this.GIDetailsArray.every((x: any) => +x.diffQty == 0);
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

    onSort({column, direction}: SortEvent) {
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.GIDetailsArray = this.GIDetailsArray;
        } else {
            this.GIDetailsArray = [...this.GIDetailsArray].sort((a: any | GIDetails, b: any | GIDetails) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
