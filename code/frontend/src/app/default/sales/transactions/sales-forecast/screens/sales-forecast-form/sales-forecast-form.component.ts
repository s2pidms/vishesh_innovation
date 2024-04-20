import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {SalesForecastService} from "@services/sales";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CancelPoComponent, DetailsOfCustomersListComponent} from "@modals/index";
import {SALES_FORECAST_FORM_ERRORS} from "@mocks/validations/sales";
import {UtilityService, MenuTitleService, StorageService, SpinnerService} from "@core/services";
import {SO_ORDER_TYPE} from "@mocks/constant";
import {OpenPoNoComponent} from "../../../book-sales-order/screens/open-po-no/open-po-no.component";
import {ForecastScheduleModalComponent} from "../forecast-schedule-modal/forecast-schedule-modal.component";
import {FCDetailsArray, SalesForecastMasterData} from "@mocks/models/sales/transactions";

@Component({
    selector: "app-sales-forecast-form",
    templateUrl: "./sales-forecast-form.component.html",
    styles: [
        `
            .assetCalendarTD {
                background-color: transparent;
                background-image: url("./../../../../../../../assets/new_icons/Asset_Calendar.svg");
                background-size: 100% 100%;
                border: 0;
                color: white;
                height: 1.6rem;
                width: 1.6rem;
            }
        `
    ]
})
export class SalesForecastFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    flag: number = -1;
    // FCDetailsArray[]
    FCDetailsArray: any = [];
    openPONumberArr: any = [];
    customerOptions: any = [];
    displayName: any = {};
    submitted = false;
    isPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        cancel: "Cancelled"
    };
    SOTypeObj: any = SO_ORDER_TYPE;
    SOTypeArr: any = SO_ORDER_TYPE.getAllSOType();
    ESCPreviewArr: any = [];
    isESCPreview = false;
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    masterData: SalesForecastMasterData = {
        autoIncrementNo: "",
        salesCategoryOptions: [],
        customersOptions: []
    };
    selectedCustomerDetails = {};
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        customerCategory: new UntypedFormControl(null, [Validators.required]),
        FCNo: new UntypedFormControl(null),
        FCDate: new UntypedFormControl(""),
        customer: new UntypedFormControl(null, [Validators.required]),
        customerName: new UntypedFormControl(null),
        FCType: new UntypedFormControl(null, [Validators.required]),
        currency: new UntypedFormControl(null),
        salesForecastDetails: new UntypedFormControl([]),
        netFCValue: new UntypedFormControl(null, [Validators.required]),
        FCCancellationReason: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval")
    });

    constructor(
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private menuTitleService: MenuTitleService,
        private toastService: ToastService,
        private salesForecastService: SalesForecastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private storageService: StorageService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.displayName = this.storageService.get("menuTitle")?.title;
        this.getInitialData();
    }

    get f() {
        return this.form.controls;
    }
    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                this.flag = -1;
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
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, SALES_FORECAST_FORM_ERRORS)) {
            return;
        }
        if (this.action == "cancel" && !this.form.controls["FCCancellationReason"].value) {
            this.toastService.warning("Reason for Cancellation is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.salesForecastDetails = this.FCDetailsArray;
        if (this.SOTypeObj.Planned == this.f["FCType"].value || this.SOTypeObj.Regular == this.f["FCType"].value) {
            if (this.action == "create") {
                let releaseSchedule = formData.salesForecastDetails.some((x: any) => x.releaseSchedule);
                if (!releaseSchedule) {
                    this.toastService.warning("Release Schedule is required");
                    return;
                }
            }
            if (this.action == "edit") {
                let releaseSchedule = formData.salesForecastDetails.some((x: any) => x.releaseSchedule.length > 0);
                if (!releaseSchedule) {
                    this.toastService.warning("Release Schedule is required");
                    return;
                }
            }
        }
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }
    update(formData: any) {
        this.spinner.show();
        this.salesForecastService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.salesForecastService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.FCDetailsArray = [];
        this.customerOptions = [];
        this.collection = this.FCDetailsArray.length;
        this.openPONumberArr = [];
        this.getInitialData();
    }
    getInitialData() {
        this.spinner.show();
        this.salesForecastService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["FCNo"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["FCType"].setValue(null);
            this.f["FCDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["status"].setValue(this.statusArr[this.action]);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.salesForecastService.getById(params["id"]);
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
                    if (success.FCDate) {
                        success.FCDate = this.utilityService.getFormatDate(success?.FCDate, "YYYY-MM-DD");
                    }
                    this.customerOptions = this.masterData?.customersOptions.filter(
                        (x: any) => x.customerCategory == success.customerCategory
                    );
                    this.FCDetailsArray = success?.salesForecastDetails.map((ele: any, idx: any) => {
                        return {
                            FCLineNumber: ele.FCLineNumber,
                            SKU: ele?.SKU?._id,
                            SKUNo: ele?.SKU?.SKUNo,
                            SKUName: ele?.SKU?.SKUName,
                            SKUDescription: ele.SKU?.SKUDescription,
                            customerPartNo: ele?.customerPartNo,
                            UOM: ele?.UOM,
                            releaseSchedule: ele?.releaseSchedule,
                            releaseCount: ele?.releaseCount,
                            orderedQty: ele?.orderedQty,
                            balancedQty: ele?.orderedQty,
                            JCCQty: ele?.orderedQty,
                            standardRate: ele?.standardRate,
                            discount: ele?.discount,
                            netRate: ele?.netRate,
                            lineValue: ele?.lineValue,
                            SOLineTargetDate: this.utilityService.getFormatDate(ele?.SOLineTargetDate, "YYYY-MM-DD")
                        };
                    });
                    this.collection = this.FCDetailsArray.length;
                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    if (
                        this.action == "edit" ||
                        this.action == "view" ||
                        this.action == "cancel" ||
                        this.action == "approve"
                    ) {
                        this.form.disable();
                        this.form.controls["FCCancellationReason"].enable();
                    }
                });

            this.menuTitleService.set({
                title: this.action == "cancel" ? "Sales Forecast Cancellation" : `${this.displayName}`,
                subTitle: null,
                type: this.action == "cancel" ? null : null
            });
        });
    }
    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "FC Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Sales Forecast ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }

    setDelivery() {
        this.FCDetailsArray = this.FCDetailsArray.map((ele: any) => {
            ele.SOLineTargetDate = this.utilityService.getFormatDate(this.f["SOLineTargetDate"].value, "YYYY-MM-DD");
            return ele;
        });
    }
    customerValueChange(ele: any) {
        this.f["customerName"].setValue(ele?.customerName);
        this.f["currency"].setValue(ele?.customerCurrency);
        this.spinner.show();
        this.salesForecastService.getAllSalesSKUList({customerId: ele?._id}).subscribe(success => {
            this.FCDetailsArray = success.SKUList.map((x: any, idx: any) => {
                x.FCLineNumber = idx + 1;
                return x;
            });
            this.collection = this.FCDetailsArray.length;
            this.openPONumberArr = success?.PODetails;
            this.spinner.hide();
        });
    }

    openPONumber() {
        const modalRef = this.modalService.open(OpenPoNoComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.customerId = this.form.controls["customer"].value;
        modalRef.componentInstance.openPONumberArr = this.openPONumberArr;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.FCDetailsArray = success?.FCDetailsArray.map((ele: any, idx: any) => {
                        ele.FCLineNumber = idx + 1;
                        return ele;
                    });
                    this.collection = this.FCDetailsArray.length;
                    this.openPONumberArr = success.openPONumberArr;
                }
            },
            (reason: any) => {}
        );
    }

    getCustomers() {
        this.f["customer"].setValue(null);
        this.f["currency"].setValue(null);
        this.selectedCustomerDetails = {};
        this.FCDetailsArray = [];
        this.customerOptions = this.masterData?.customersOptions.filter(
            (x: any) => x.customerCategory == this.f["customerCategory"].value
        );
    }

    setLineValue(FCLineNumber: number, ele: any) {
        let index = this.FCDetailsArray.map((x: any) => x.FCLineNumber).indexOf(FCLineNumber);
        this.FCDetailsArray[index].lineValue = +(ele.orderedQty * +ele.netRate).toFixed(2);
        this.FCDetailsArray[index].balancedQty = +ele.orderedQty.toFixed(2);
        this.FCDetailsArray[index].JCCQty = +ele.orderedQty.toFixed(2);
        this.f["netFCValue"].setValue(
            this.FCDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }

    setNetRate(FCLineNumber: number, ele: any) {
        let index = this.FCDetailsArray.map((x: any) => x.FCLineNumber).indexOf(FCLineNumber);
        this.FCDetailsArray[index].netRate = +(ele.standardRate - ele.standardRate * (ele.discount / 100));
        this.FCDetailsArray[index].lineValue = +(ele.orderedQty * ele.netRate);
        this.f["netFCValue"].setValue(
            this.FCDetailsArray.map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }

    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.FCDetailsArray = this.ESCPreviewArr;
        this.collection = this.FCDetailsArray.length;
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.FCDetailsArray;
        this.FCDetailsArray = this.FCDetailsArray.filter((x: any) => x.orderedQty > 0);
        if (this.FCDetailsArray.length) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.FCDetailsArray.length;
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.FCDetailsArray = this.FCDetailsArray;
        } else {
            this.FCDetailsArray = [...this.FCDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
    openSOScheduleModal(item: any) {
        if (!this.form.controls["FCType"].value) {
            this.toastService.warning("FC Type is required !");
            return;
        }

        const modalRef = this.modalService.open(ForecastScheduleModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.bookSalesOrder = "Sales Forecast";
        modalRef.componentInstance.SOType = this.form.controls["FCType"].value;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.POQty = item.orderedQty;
        modalRef.componentInstance.deliveryCount = item.releaseCount;
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.regularType = item;
        modalRef.componentInstance.dispatchDate = this.utilityService.getFormatDate(
            item.SOLineTargetDate,
            "YYYY-MM-DD"
        );
        if (item.releaseSchedule) {
            modalRef.componentInstance.deliveryScheduleArr = item?.releaseSchedule.map((x: any) => {
                x.dispatchDate = this.utilityService.getFormatDate(x.dispatchDate, "YYYY-MM-DD");
                return x;
            });
        }
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    let index = this.FCDetailsArray.map((x: any) => x.FCLineNumber).indexOf(item.FCLineNumber);
                    this.FCDetailsArray[index].releaseCount = success.deliveryCount;
                    this.FCDetailsArray[index].releaseSchedule = success.deliverySchedule;
                }
            },
            (reason: any) => {}
        );
    }
    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfCustomersListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedCustomerDetails = this.selectedCustomerDetails;
        modalRef.componentInstance.customerOptions = this.customerOptions;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.customerValueChange(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
