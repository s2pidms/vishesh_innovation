import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {DetailsOfChannelPartnerComponent, DetailsOfSupplierListComponent} from "@shared/modals";
import {SpinnerService, UtilityService} from "@core/services";
import {INDENT_CATEGORY} from "@mocks/constant";
import {IPurchaseIndentMasterData} from "@mocks/models/purchase/transactions";
import {PIDeliveryScheduleModalComponent} from "../pi-delivery-schedule-modal/pi-delivery-schedule-modal.component";
import {PurchaseIndentService} from "@services/purchase/purchaseIndent.service";
import {PURCHASE_INDENT_FORM_ERRORS} from "@mocks/validations/purchase/purchase-indent.validation";

@Component({
    selector: "app-purchase-indent-form",
    templateUrl: "./purchase-indent-form.component.html"
})
export class PurchaseIndentFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    submitted = false;
    isPreview = false;
    indentCategoryObj: any = INDENT_CATEGORY;
    indentCategoryArr: any = INDENT_CATEGORY.getAllIndentCategory();
    action: string = "create";
    earnings: any = [];
    channelPartnerOptions: any = [];
    selectedSupplierDetails: any = {};
    minDate: Date = new Date();
    filterItems: any = [];
    ESCPreviewArr: any = [];
    isESCPreview = false;
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    selectedChannelPartnerDetails = {};
    masterData: IPurchaseIndentMasterData = {
        autoIncrementNo: "",
        purchaseCategoryOptions: []
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        indentOrderNo: new UntypedFormControl(null),
        indentOrderDate: new UntypedFormControl(null),
        purchaseCategory: new UntypedFormControl(null, [Validators.required]),
        channelPartner: new UntypedFormControl(null, [Validators.required]),
        channelPartnerName: new UntypedFormControl(null),
        indentDetails: new UntypedFormControl([]),
        indentCategory: new UntypedFormControl(null),
        netPIValue: new UntypedFormControl(null),
        remarks: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        status: new UntypedFormControl("Awaiting Approval")
    });
    get f() {
        return this.form.controls;
    }
    constructor(
        private purchaseIndentService: PurchaseIndentService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
    ) {}
    ngOnInit(): void {
        this.getInitialData();
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();

        if (this.validationService.checkErrors(this.form, PURCHASE_INDENT_FORM_ERRORS)) {
            return;
        }

        if (this.action == "reject" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Reject Remark is Required");
            return;
        }
        let formData: any = this.form.value;

        formData.indentDetails = this.filterItems.filter((x: any) => x.IOQty > 0);
        if (formData.indentDetails.length == 0) {
            this.toastService.warning("IOQty can not be zero");
            return;
        }
        if (this.indentCategoryObj.PLANNED == this.f["indentCategory"].value) {
            if (this.action == "create") {
                let deliverySchedule = formData.indentDetails.some((x: any) => x.deliverySchedule);
                if (!deliverySchedule) {
                    this.toastService.warning("Delivery Schedule is required");
                    return;
                }
            }
            if (this.action == "edit") {
                let deliverySchedule = formData.indentDetails.some((x: any) => x.deliverySchedule.length > 0);
                if (!deliverySchedule) {
                    this.toastService.warning("Delivery Schedule is required");
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
        this.purchaseIndentService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.purchaseIndentService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.channelPartnerOptions = [];
        this.isPreview = false;
        this.isESCPreview = false;
        this.filterItems = [];
        this.collection = this.filterItems.length;
        this.getInitialData();
    }

    preview() {
        this.isESCPreview = true;
        this.ESCPreviewArr = this.filterItems;
        this.search = "";
        this.filterItems = this.filterItems.filter((x: any) => x.IOQty > 0);
        if (this.filterItems.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.filterItems.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.filterItems = this.ESCPreviewArr;
        this.collection = this.filterItems.length;
    }
    getInitialData() {
        this.spinner.show();
        this.purchaseIndentService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["indentOrderNo"].setValue(this.masterData.autoIncrementNo);
            this.f["indentOrderDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["indentCategory"].patchValue(this.indentCategoryObj.STANDARD);
            this.setPOValidity();
            this.form.controls["status"].patchValue("Awaiting Approval");
            this.form.controls["status"].setValue(this.statusArr[this.action]);
            this.form.controls["currency"].patchValue("INR");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.purchaseIndentService.getById(params["id"]);
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
                    if (success.indentOrderDate) {
                        success.indentOrderDate = this.utilityService.getFormatDate(
                            success.indentOrderDate,
                            "YYYY-MM-DD"
                        );
                    }
                    if (success.channelPartner) {
                        this.channelPartnerOptions = [
                            {
                                label: success?.channelPartnerName,
                                value: success?.channelPartner
                            }
                        ];
                    }

                    // if (success.indentDetails.length && success.indentDetails[0].deliveryDate) {
                    //     success.indentDetails[0].deliveryDate = this.utilityService.getFormatDate(
                    //         success.indentDetails[0].deliveryDate,
                    //         "YYYY-MM-DD"
                    //     );
                    // }
                    // if (success.purchaseCategory) {
                    //     this.spinner.show();
                    //     this.purchaseIndentService
                    //         .getChannelsByCategory({purchaseCategory: success.purchaseCategory})
                    //         .subscribe(success => {
                    //             this.channelPartnerOptions = success;
                    //             this.spinner.hide();
                    //         });
                    // }

                    this.filterItems = success.indentDetails.map((ele: any, idx: any) => {
                        if (!!!ele.unitConversion) {
                            if (ele.item.primaryToSecondaryConversion) {
                                ele.unitConversion = `1 ${ele.item.primaryUnit ?? "Unit"} = ${
                                    ele.item.primaryToSecondaryConversion ?? 1
                                } ${ele.item.secondaryUnit ?? "Unit"}`;
                            } else {
                                ele.unitConversion = `1 ${ele.item.secondaryUnit ?? "Unit"} = ${
                                    ele.item.secondaryToPrimaryConversion ?? 1
                                } ${ele.item.primaryUnit ?? "Unit"}`;
                            }
                        }
                        ele.PILineNumber = idx + 1;
                        return ele;
                    });
                    if (this.action != "edit") {
                        this.filterItems = this.filterItems.filter((x: any) => x.IOQty != 0);
                    }
                    this.f["netPIValue"].setValue(
                        this.filterItems
                            .map((x: any) => x.lineValue)
                            .reduce((acc: number, cur: number) => acc + cur, 0)
                            .toFixed(2)
                    );
                    this.collection = this.filterItems.length;
                    success.status = this.statusArr[this.action];
                    this.form.patchValue(success);
                    this.f["purchaseCategory"].disable();
                    this.f["channelPartner"].disable();
                    this.f["indentCategory"].disable();

                    if (this.action != "edit") {
                        this.form.disable();
                        // if (["approve", "reject"].includes(this.action)) {
                        //     this.f["remarks"].enable();
                        //     this.f["cancellationReason"].enable();
                        // }
                    }
                });
        });
    }

    // setPOValidityFromPODate() {
    //     this.setPOValidity();
    // }

    setPOValidity() {
        this.filterItems = this.filterItems.map((ele: any, index: any) => {
            if (this.f["indentCategory"].value == this.indentCategoryObj.STANDARD) {
                let todayDate = this.utilityService.getTodayDate("YYYY-MM-DD");
                let futureDate = this.utilityService.setFutureDateInDays(todayDate, 7);

                ele.deliverySchedule = [];
                ele.deliveryCount = 1;
                let obj = {
                    scheduleNo: 1,
                    quantity: ele.IOQty || 0,
                    UOM: ele.UOM,
                    deliveryDate: futureDate
                };
                ele.deliverySchedule.push(obj);
            }
            // else {
            //     ele.deliverySchedule = [];
            //     ele.deliveryCount = 0;
            // }

            return ele;
        });
    }

    getChannelPartner(ev: any) {
        this.f["channelPartner"].setValue(null);
        this.selectedSupplierDetails = {};
        this.spinner.show();
        this.purchaseIndentService.getChannelsByCategory({category: ev.value}).subscribe(success => {
            this.channelPartnerOptions = success;
            this.spinner.hide();
        });
        this.filterItems = [];
    }

    channelPartnerValueChange(ev: any) {
        this.spinner.show();
        this.purchaseIndentService.getAllItemsForChannels({channelId: ev.value}).subscribe(success => {
            this.collection = success?.length;
            this.filterItems = success.map((ele: any, index: any) => {
                ele.PILineNumber = index + 1;
                if (!!!ele.unitConversion) {
                    if (ele.primaryToSecondaryConversion) {
                        ele.unitConversion = `1 ${ele.primaryUnit ?? "Unit"} = ${
                            ele.primaryToSecondaryConversion ?? 1
                        } ${ele.secondaryUnit ?? "Unit"}`;
                    } else {
                        ele.unitConversion = `1 ${ele.secondaryUnit ?? "Unit"} = ${
                            ele.secondaryToPrimaryConversion ?? 1
                        } ${ele.primaryUnit ?? "Unit"}`;
                    }
                }

                if (this.f["indentCategory"].value == this.indentCategoryObj.STANDARD) {
                    let todayDate = this.utilityService.getTodayDate("YYYY-MM-DD");
                    let futureDate = this.utilityService.setFutureDateInDays(todayDate, 7);

                    ele.deliverySchedule = [];
                    ele.deliveryCount = 1;
                    let obj = {
                        scheduleNo: 1,
                        quantity: 0,
                        UOM: ele.UOM,
                        deliveryDate: futureDate
                    };
                    ele.deliverySchedule.push(obj);
                } else {
                    ele.deliverySchedule = [];
                    ele.deliveryCount = 0;
                }

                return ele;
            });
            this.spinner.hide();
        });
        this.f["currency"].setValue(ev?.currency);
        this.f["channelPartner"].setValue(ev?._id);
        this.f["channelPartnerName"].setValue(ev?.channelPartnerName);
    }

    lineValueRate(PILineNumber: number, element: any) {
        let index = this.filterItems.map((x: any) => x.PILineNumber).indexOf(PILineNumber);
        this.filterItems[index].lineValue = Number((+element.IOQty * +element.purchaseRate).toFixed(2));

        this.filterItems[index].balancedQty = element.IOQty;

        this.filterItems[index].linePPV = Number(
            (+element.IOQty * +element.standardRate - +element.IOQty * +element.purchaseRate).toFixed(2)
        );

        if (element.deliverySchedule) {
            let dividedCount = Math.floor(element.IOQty / element.deliveryCount);
            let remainder = element.IOQty % element.deliveryCount;
            for (let i = 0; i < element.deliveryCount; i++) {
                const ele = this.filterItems[index].deliverySchedule[i];

                let quantity = dividedCount;
                if (i === element.deliveryCount - 1) {
                    quantity += remainder;
                }

                ele.quantity = quantity;
            }
        }

        this.f["netPIValue"].setValue(
            this.filterItems
                .map((x: any) => x.lineValue)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }
    setConversionOfUnit(item: any) {
        if (["edit", "create"].includes(this.action)) {
            let index = this.filterItems.map((x: any) => x.PILineNumber).indexOf(item.PILineNumber);
            if (this.filterItems[index].UOM == item.secondaryUnit) {
                this.filterItems[index].UOM = item.primaryUnit;
                this.filterItems[index].purchaseRate = item.stdCostUom1;
                this.filterItems[index].standardRate = item.stdCostUom1;
                this.filterItems[index].IOQty = 0;
                this.isPreview = false;
            } else {
                this.filterItems[index].UOM = item.secondaryUnit;
                this.filterItems[index].purchaseRate = item.stdCostUom2;
                this.filterItems[index].standardRate = item.stdCostUom2;
                this.filterItems[index].IOQty = 0;
                this.isPreview = false;
            }

            this.lineValueRate(item.PILineNumber, item);
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openPOScheduleModal(item: any) {
        const modalRef = this.modalService.open(PIDeliveryScheduleModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        let todayDate = this.utilityService.getTodayDate("YYYY-MM-DD");
        let futureDate = this.utilityService.setFutureDateInDays(todayDate, 7);
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.indentCategory = this.form.controls["indentCategory"].value;
        modalRef.componentInstance.IOQty = item.IOQty;
        modalRef.componentInstance.deliveryCount = item.deliveryCount;
        modalRef.componentInstance.UOM = item.UOM;
        modalRef.componentInstance.deliveryDate = futureDate;
        if (item.deliverySchedule) {
            modalRef.componentInstance.deliveryScheduleArr = item?.deliverySchedule.map((x: any) => {
                x.deliveryDate = this.utilityService.getFormatDate(x.deliveryDate, "YYYY-MM-DD");
                return x;
            });
        }
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    let index = this.filterItems.map((x: any) => x.PILineNumber).indexOf(item.PILineNumber);
                    this.filterItems[index].deliveryCount = success.deliveryCount;
                    this.filterItems[index].deliverySchedule = success.deliverySchedule;
                }
            },
            (reason: any) => {}
        );
    }

    openChannelPartnerDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(DetailsOfChannelPartnerComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.selectedChannelPartnerDetails = this.selectedChannelPartnerDetails;
            modalRef.componentInstance.channelPartnerOptions = this.channelPartnerOptions;
            modalRef.componentInstance.channelPartner = this.form.controls["channelPartner"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedChannelPartnerDetails = success?.selectedChannelPartnerDetails;
                        this.form.controls["channelPartner"].setValue(success?.selectedChannelPartnerDetails?._id);
                        this.channelPartnerValueChange(this.selectedChannelPartnerDetails);
                        this.collection = this.filterItems.length;
                    }
                },
                (reason: any) => {}
            );
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
            this.filterItems = this.filterItems;
        } else {
            this.filterItems = [...this.filterItems].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
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
}
