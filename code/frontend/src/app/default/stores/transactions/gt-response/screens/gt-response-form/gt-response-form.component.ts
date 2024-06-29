import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GTResponseService} from "@services/stores";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {CustomSearchDetailsModalComponent} from "@modals/index";
import {IGTRequestDetails, IGTResponseMasterData} from "@mocks/models/stores/transactions";
import TABLE_HEADERS from "./tableHeaders";
import {NgbdSortableHeader, SortEvent} from "@shared/directives";
import {GTResponseRemarksModalComponent} from "../gt-response-remarks-modal/gt-response-remarks-modal.component";
import {GTResponseInventoryComponent} from "../gt-response-inventory/gt-response-inventory.component";
import {GT_RESPONSE_FORM_ERRORS} from "@mocks/validations/stores";
@Component({
    selector: "app-gt-response-form",
    templateUrl: "./gt-response-form.component.html"
})
export class GTResponseFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    GTResponseDetailsArray: IGTRequestDetails[] = [];
    ESCPreviewArr: any = [];
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "create";
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    masterData: IGTResponseMasterData = {
        autoIncrementNo: "",
        GTRequestOptions: []
    };
    selectedDetails: any = {};
    tableHead: any = TABLE_HEADERS;
    constructor(
        private gtResponseService: GTResponseService,
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
        GTNo: new UntypedFormControl(null),
        GTDate: new UntypedFormControl(null),
        GTRequest: new UntypedFormControl(null, [Validators.required]),
        GTRequestNo: new UntypedFormControl(null),
        GTRequestDate: new UntypedFormControl(null),
        location: new UntypedFormControl(null, [Validators.required]),
        toDepartment: new UntypedFormControl(null, [Validators.required]),
        fromDepartment: new UntypedFormControl(null),
        fromDepartmentName: new UntypedFormControl(null),
        toDepartmentName: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval"),
        remarks: new UntypedFormGroup({
            goodsIssuedBy: new UntypedFormControl(null),
            goodsIssuedTo: new UntypedFormControl(null),
            GTRemarks: new UntypedFormControl(null)
        }),
        GTDetails: new UntypedFormControl([]),
        rejectionRemarks: new UntypedFormControl(null)
    });

    get f() {
        return this.form.controls;
    }
    get remarks() {
        return this.form.get("remarks") as UntypedFormGroup;
    }
    ngOnInit(): void {
        this.getInitialData();
    }
    navigateTo() {
        this.location.back();
    }
    reset() {
        this.form.reset();
        this.GTResponseDetailsArray = [];
        this.isPreview = false;
        this.isESCPreview = false;
        this.collection = this.GTResponseDetailsArray.length;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (this.action == "reject" && !this.form.controls["rejectionRemarks"].value) {
            this.toastService.warning("Rejection Remarks is Required");
            return;
        }
        if (this.validationService.checkErrors(this.form, GT_RESPONSE_FORM_ERRORS)) {
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;

        if (this.GTResponseDetailsArray?.length == 0) {
            this.toastService.warning(`At least one Goods Transfer (Intra) Item required!`);
            return;
        }
        formData.GTDetails = this.GTResponseDetailsArray;
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
        this.gtResponseService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.gtResponseService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getGTRequestDetails(event: any) {
        this.f["GTRequest"].setValue(event?._id);
        this.f["GTRequestNo"].setValue(event?.GTRequestNo);
        this.f["GTRequestDate"].setValue(this.utilityService.getFormatDate(event?.GTRequestDate, "YYYY-MM-DD"));
        this.f["location"].setValue(event?.location);
        this.f["toDepartment"].setValue(event?.toDepartment);
        this.f["fromDepartment"].setValue(event?.fromDepartment);
        this.f["fromDepartmentName"].setValue(event?.fromDepartmentName ?? event?.fromDepartment);
        this.f["toDepartmentName"].setValue(event?.toDepartmentName ?? event?.toDepartment);

        this.spinner.show();
        this.gtResponseService.getItemByGTRequestId(event?._id).subscribe(success => {
            this.GTResponseDetailsArray = success?.map((x: any, i: number) => {
                x.GTLineNumber = i + 1;
                return x;
            });

            this.collection = this.GTResponseDetailsArray?.length;
            this.spinner.hide();
        });
    }
    getInitialData() {
        // get master data
        this.spinner.show();
        this.gtResponseService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["GTNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["status"].setValue("Awaiting Approval");
            this.form.controls["GTDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["GTRequestDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.gtResponseService.getById(params["id"]);
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
                    if (success.GTDate) {
                        success.GTDate = success.GTDate.split("T")[0];
                    }
                    if (success.GTRequestDate) {
                        success.GTRequestDate = success.GTRequestDate.split("T")[0];
                    }
                    if (success.GTDetails) {
                        this.GTResponseDetailsArray = success.GTDetails;
                    }

                    this.masterData.GTRequestOptions = [
                        {
                            GTRequestNo: success.GTRequestNo,
                            _id: success.GTRequest
                        }
                    ];

                    this.collection = this.GTResponseDetailsArray?.length;
                    success.status = this.statusArr[this.action];
                    // patch all forms fields
                    this.form.patchValue(success);
                    this.f["GTRequest"].disable();
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

    setConversionOfUnit(item: any) {
        if (["create", "edit"].includes(this.action)) {
            let index = this.GTResponseDetailsArray.map((x: any) => x?.GTLineNumber).indexOf(item?.GTLineNumber);
            if (this.GTResponseDetailsArray[index].UOM == item.secondaryUnit) {
                this.GTResponseDetailsArray[index].UOM = item.primaryUnit;
            } else {
                this.GTResponseDetailsArray[index].UOM = item.secondaryUnit;
            }

            let IRQuantity =
                this.utilityService.setConversion({
                    UOM: this.GTResponseDetailsArray[index].UOM,
                    quantity: item.IRQty,
                    primaryUnit: item.primaryUnit,
                    secondaryUnit: item.secondaryUnit,
                    primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                    secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
                }) || 0;
            let GTRQuantity =
                this.utilityService.setConversion({
                    UOM: this.GTResponseDetailsArray[index].UOM,
                    quantity: item.GTRQty,
                    primaryUnit: item.primaryUnit,
                    secondaryUnit: item.secondaryUnit,
                    primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                    secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
                }) || 0;
            console.log("GTRQuantity", GTRQuantity);

            this.GTResponseDetailsArray[index].IRQty = +IRQuantity.toFixed(2);
            this.GTResponseDetailsArray[index].GTRQty = +GTRQuantity.toFixed(2);

            this.GTResponseDetailsArray[index].FIFO = this.GTResponseDetailsArray[index].FIFO?.map((x: any) => {
                let IRTotalQuantity =
                    this.utilityService.setConversion({
                        UOM: this.GTResponseDetailsArray[index].UOM,
                        quantity: x?.IRQty,
                        primaryUnit: item.primaryUnit,
                        secondaryUnit: item.secondaryUnit,
                        primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                        secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
                    }) || 0;
                console.log("IRTotalQuantity", IRTotalQuantity);

                x.IRQty = +IRTotalQuantity.toFixed(2);

                let GTQtyTotalQty =
                    this.utilityService.setConversion({
                        UOM: this.GTResponseDetailsArray[index].UOM,
                        quantity: x.GTQty,
                        primaryUnit: item.primaryUnit,
                        secondaryUnit: item.secondaryUnit,
                        primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                        secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
                    }) || 0;
                console.log("this.GTResponseDetailsArray[index].", GTQtyTotalQty);

                x.GTQty = +GTQtyTotalQty.toFixed(2);

                return x;
            });

            let GTQtyTotalQuantity =
                this.utilityService.setConversion({
                    UOM: this.GTResponseDetailsArray[index].UOM,
                    quantity: item?.GTQty,
                    primaryUnit: item.primaryUnit,
                    secondaryUnit: item.secondaryUnit,
                    primaryToSecondaryConversion: item.primaryToSecondaryConversion,
                    secondaryToPrimaryConversion: item.secondaryToPrimaryConversion
                }) || 0;
            console.log("this.GTResponseDetailsArray[index].", GTQtyTotalQuantity);

            this.GTResponseDetailsArray[index].GTQty = +GTQtyTotalQuantity.toFixed(2);

            this.isPreview = false;
        }
    }

    preview() {
        this.search = "";
        this.ESCPreviewArr = this.GTResponseDetailsArray;
        this.isESCPreview = true;
        this.GTResponseDetailsArray = this.GTResponseDetailsArray.filter((x: any) => x.GTQty > 0);
        if (this.GTResponseDetailsArray.length == 0) {
            this.toastService.warning(`At least one Goods Transfer (Intra) Item required!`);
        } else {
            this.isPreview = true;
        }
        this.collection = this.GTResponseDetailsArray.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.GTResponseDetailsArray = this.ESCPreviewArr;
        this.collection = this.GTResponseDetailsArray.length;
    }

    openGTRequestDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "GT Request Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetails;
            modalRef.componentInstance.tableHead = this.tableHead;
            modalRef.componentInstance.bodyList = this.masterData.GTRequestOptions;
            modalRef.componentInstance._id = this.form.controls["GTRequest"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetails = success?.selectedDetails;
                        this.form.controls["GTRequest"].setValue(success?.selectedDetails?._id);
                        this.getGTRequestDetails(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }
    openFIFODetailsModal(item: any) {
        let index = this.GTResponseDetailsArray.findIndex((x: any) => x.GTLineNumber == item.GTLineNumber);

        const modalRef = this.modalService.open(GTResponseInventoryComponent, {
            centered: true,
            windowClass: "custom-modal",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.data = item;
        modalRef.componentInstance.totalDispatchQty = item.totalDispatchQty;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.GTResponseDetailsArray[index].FIFO = success.FIFO;
                    this.GTResponseDetailsArray[index].GTQty = success.totalGTResponseQty;
                }
            },
            (reason: any) => {}
        );
    }

    openRemarksModal() {
        const modalRef = this.modalService.open(GTResponseRemarksModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.remarksDetails = this.remarks.value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.remarks.patchValue(success);
                }
            },
            (reason: any) => {}
        );
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.GTResponseDetailsArray = this.GTResponseDetailsArray;
        } else {
            this.GTResponseDetailsArray = [...this.GTResponseDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
