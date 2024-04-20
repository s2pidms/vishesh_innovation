import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {ShipmentPlanningService} from "@services/dispatch";
import {UtilityService, ToastService, SpinnerService} from "@core/services";
import {ValidationService} from "@core/components";
import {SPDetails} from "@interfaces/SPDetails";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {POOtherChargesComponent, SalesDispatchDetailsComponent} from "@modals/index";
import {SHIPMENT_PLANNING_ERRORS} from "@mocks/validations/dispatch";
import {DrnShipmentDetailsComponent, ViewDrnTermsComponent} from "../components";
import {IShipmentPlanningMasterData} from "@mocks/models/dispatch/transactions";
@Component({
    selector: "app-shipment-creation-form",
    templateUrl: "./shipment-creation-form.component.html"
})
export class ShipmentCreationFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    SPDetailsArray: SPDetails[] = [];
    customerName: string = "";
    findFormErrors = [];
    DRNOptions: any = [];
    DRNList: any = [];
    salesCategory: any = [];
    dispatchDetails: any = {};
    selectedCustomer: any = {};
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    action: string = "create";
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approval: "Approved",
        cancel: "Cancelled",
        rejection: "Rejected"
    };
    otherCharges = {
        action: "create",
        totalProductValue: 0,
        packagingAndForwarding: 0,
        freight: 0,
        insurance: 0,
        loadingAndUnloading: 0,
        miscellaneous: 0,
        totalAmount: 0,
        totalShipmentValue: 0
    };
    masterData: IShipmentPlanningMasterData = {
        autoIncrementNo: "",
        billFromLocationOptions: [],
        freightTermsOptions: [],
        modeOfTransportOptions: [],
        paymentTermsOptions: [],
        transporterOptions: [],
        companyData: {
            _id: "",
            placesOfBusiness: []
        }
    };
    constructor(
        private shipmentPlanningService: ShipmentPlanningService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private location: Location,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService
    ) {}

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        SPNumber: new UntypedFormControl(null),
        SPTotalAmount: new UntypedFormControl(null),
        DRNId: new UntypedFormControl(null, [Validators.required]),
        DRNDate: new UntypedFormControl(null),
        customer: new UntypedFormControl(""),
        billFromLocation: new UntypedFormControl(null, [Validators.required]),
        SPDetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(null),
        shipmentValue: new UntypedFormControl(null),
        SPV: new UntypedFormControl(null),
        billFromAddress: new UntypedFormControl({}),
        billToAddress: new UntypedFormControl({}),
        SPStatus: new UntypedFormControl("Awaiting Approval", [Validators.required]),
        customerCategory: new UntypedFormControl(""),
        currency: new UntypedFormControl(null),
        customerShippingAddress: new UntypedFormControl({}),
        paymentTerms: new UntypedFormControl(null, [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        frightTerms: new UntypedFormControl(null, [Validators.required]),
        transporter: new UntypedFormControl(null, [Validators.required]),
        destination: new UntypedFormControl(null, [Validators.required]),
        packingList: new UntypedFormControl(null),
        exportsInfo: new UntypedFormGroup({
            exportsInvoiceNo: new UntypedFormControl(null),
            exportsInvoiceDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
            exportsInvoiceTotalValue: new UntypedFormControl(null),
            exchangeRate: new UntypedFormControl(null),
            finalDestination: new UntypedFormControl(null)
        })
    });
    get f() {
        return this.form.controls;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, SHIPMENT_PLANNING_ERRORS)) {
            return;
        }
        if (this.action == "rejection" && !this.form.controls["remarks"].value) {
            this.toastService.warning("Reject Remark is Required");
            return;
        }

        if (this.SPDetailsArray.length == 0) {
            this.toastService.warning("Atleast one row is Required");
            return;
        }

        let formData: any = {...this.form.value, ...this.dispatchDetails};
        formData.otherCharges = this.otherCharges;
        formData.SPDetails = this.SPDetailsArray.filter((x: any) => x.dispatchQty > 0);
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    update(formData: any) {
        this.spinner.show();
        this.shipmentPlanningService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
            // this.router.navigate(["/default/dispatch/transactions/shipment_creation/list"]);
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.shipmentPlanningService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
            // this.router.navigate(["/default/dispatch/transactions/shipment_creation/list"]);
        });
    }

    preview() {
        this.search = "";
        this.SPDetailsArray = this.SPDetailsArray.filter((x: any) => x.dispatchQty > 0);
        if (this.SPDetailsArray.length) {
            this.isPreview = true;
        }
        this.collection = this.SPDetailsArray.length;
    }

    reset() {
        this.form.reset();
        this.customerName = "";
        this.SPDetailsArray = [];
        this.collection = this.SPDetailsArray.length;
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.shipmentPlanningService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["SPNumber"].patchValue(this.masterData?.autoIncrementNo);
            this.form.controls["SPStatus"].patchValue("Awaiting Approval");
            this.form.controls["SPStatus"].setValue(this.statusArr[this.action]);
            this.DRNList = result.DRNList;
            this.DRNOptions = result.DRNList;
            this.salesCategory = result.salesCategory;
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.shipmentPlanningService.getById(params["id"]);
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
                    if (success.DRNDate) {
                        success.DRNDate = success.DRNDate.split("T")[0];
                    }
                    if (success.DRNId._id) {
                        this.DRNOptions = [
                            {
                                DRNNumber: success.DRNId.DRNNumber,
                                _id: success.DRNId?._id
                            }
                        ];
                        success.DRNId = success.DRNId?._id;
                    }
                    this.customerName = success?.customer?.customerName;
                    this.selectedCustomer = success?.customer;
                    this.SPDetailsArray = success?.SPDetails.map((ele: any, idx: any) => {
                        return {
                            SPLineNumber: ele?.SONumber,
                            SONumber: ele?.SONumber,
                            SODate: ele.SODate,
                            SKUNo: ele.SKUNo,
                            SKUName: ele.SKUName,
                            SKUDescription: ele.SKUDescription,
                            UOM: ele.UOM,
                            dispatchQty: ele.dispatchQty,
                            currency: ele.currency,
                            purchaseRate: ele.standardRate,
                            discount: ele.discount,
                            netRate: ele.netRate,
                            lineValue: ele.lineValue,
                            SPVLine: ele.SPVLine,
                            DRNLineNumber: ele.DRNLineNumber,
                            standardRate: ele.standardRate,
                            SKU: ele.SKU,
                            SOId: ele.SOId,
                            FGINQty: ele.FGINQty,
                            FGINMfgDate: ele?.FGINMfgDate,
                            batchDate: ele?.batchDate,
                            FGINId: ele.FGINId
                        };
                    });

                    this.otherCharges = success.otherCharges;
                    this.collection = this.SPDetailsArray.length;
                    success.SPStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    this.dispatchDetails = {
                        customerShippingAddress: success.customerShippingAddress,
                        modeOfTransport: success.modeOfTransport,
                        frightTerms: success.frightTerms,
                        transporter: success.transporter,
                        destination: success.destination
                    };
                    if (this.action == "edit" || this.action == "view" || this.action == "approval") {
                        this.form.disable();
                    }
                    if (this.action == "rejection") {
                        this.form.disable();
                        this.form.controls["remarks"].enable();
                    }
                });
        });
    }
    openDispatchDetailsModal() {
        const modalRef = this.modalService.open(SalesDispatchDetailsComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "modelPage"
        });

        modalRef.componentInstance.dispatchDetails = this.dispatchDetails;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.data = {
            transporterArr: this.masterData?.transporterOptions,
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportOptions,
            addressArr: this.selectedCustomer?.customerShippingAddress
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.dispatchDetails = success;
                    this.otherCharges = success.otherCharges;
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
            this.SPDetailsArray = this.SPDetailsArray;
        } else {
            this.SPDetailsArray = [...this.SPDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    DRNNumberValueChange(ele: any) {
        this.customerName = ele.customer.customerName;
        this.selectedCustomer = ele.customer;
        if (this.selectedCustomer && this.selectedCustomer.customerShippingAddress.length > 0) {
            this.f["billToAddress"].patchValue(this.selectedCustomer?.customerShippingAddress[0]);
            this.f["customerShippingAddress"].patchValue(this.selectedCustomer?.customerShippingAddress[0]);
        }
        this.f["DRNDate"].patchValue(this.utilityService.getFormatDate(ele?.DRNDate, "YYYY-MM-DD"));
        this.f["customerCategory"].setValue(ele?.salesCategory);
        this.f["paymentTerms"].setValue(ele?.paymentTerms);
        this.f["exportsInfo"].patchValue(ele?.exportsInfo);
        this.f["modeOfTransport"].setValue(ele?.modeOfTransport);
        this.f["frightTerms"].setValue(ele?.frightTerms);
        this.f["transporter"].setValue(ele?.transporter);
        this.f["destination"].setValue(ele?.destination);
        this.f["currency"].setValue(ele?.customer?.customerCurrency);
        this.f["customer"].patchValue(ele?.customer?._id);
        this.f["DRNDate"].disable();
        this.f["customer"].disable();
        let SP = this.DRNList.find((x: any) => x._id == this.f["DRNId"].value);
        this.SPDetailsArray = SP.DRNDetails.map((ele: any, idx: number) => {
            return {
                SPLineNumber: idx + 1,
                SOId: ele?.SOId,
                SONumber: ele?.SONumber,
                SODate: ele?.SODate,
                SKU: ele?.SKU,
                SKUNo: ele?.SKUNo,
                SKUName: ele?.SKUName,
                SKUDescription: ele?.SKUDescription,
                UOM: ele?.UOM,
                dispatchQty: ele?.dispatchQty,
                currency: ele?.currency,
                standardRate: ele?.standardRate,
                purchaseRate: ele?.standardRate,
                discount: 0,
                netRate: ele?.standardRate,
                lineValue: +ele?.standardRate * +ele?.dispatchQty,
                SPVLine: 0,
                DRNLineNumber: ele?.DRNLineNumber,
                FGINQty: ele?.FGINQty,
                FGINMfgDate: ele?.FGINMfgDate,
                batchDate: ele?.tBatchNo,
                FGINId: ele.FGINId
            };
        });
        this.collection = this.SPDetailsArray.length;
        this.f["SPTotalAmount"].setValue(
            this.SPDetailsArray.map((x: any) => +x.lineValue)
                .reduce((acc: number, cur: number) => +acc + +cur, 0)
                .toFixed(2)
        );
        this.f["shipmentValue"].setValue((+this.f["SPTotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2));
        this.f["SPV"].setValue(
            this.SPDetailsArray.map((x: any) => +x.SPVLine)
                .reduce((acc: number, cur: number) => +acc + +cur, 0)
                .toFixed(2)
        );
    }
    setLineValue(ele: any) {
        let index = this.SPDetailsArray.findIndex(
            (x: any) => x.DRNLineNumber == ele.DRNLineNumber && x.SKUNo == ele.SKUNo && x.SONumber == ele.SONumber
        );

        this.SPDetailsArray[index].netRate = +ele.purchaseRate - +ele.purchaseRate * (+ele.discount / 100);

        this.SPDetailsArray[index].lineValue = +ele.dispatchQty * +ele.netRate;

        this.SPDetailsArray[index].SPVLine = +ele.dispatchQty * +ele.standardRate - +ele.dispatchQty * +ele.netRate;

        this.f["SPTotalAmount"].setValue(
            this.SPDetailsArray.map((x: any) => +x.lineValue)
                .reduce((acc: number, cur: number) => +acc + +cur, 0)
                .toFixed(2)
        );
        this.f["shipmentValue"].patchValue(
            (+this.f["SPTotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2)
        );
        this.f["SPV"].setValue(
            this.SPDetailsArray.map((x: any) => +x.SPVLine)
                .reduce((acc: number, cur: number) => +acc + +cur, 0)
                .toFixed(2)
        );
    }

    setNetRate(ele: any) {
        let index = this.SPDetailsArray.findIndex(
            (x: any) => x.DRNLineNumber == ele.DRNLineNumber && x.SKUNo == ele.SKUNo && x.SONumber == ele.SONumber
        );

        this.SPDetailsArray[index].netRate = +ele.purchaseRate - +ele.purchaseRate * (+ele.discount / 100);
        this.SPDetailsArray[index].lineValue = +ele.dispatchQty * +ele.netRate;
        this.SPDetailsArray[index].SPVLine = +ele.dispatchQty * +ele.standardRate - +ele.dispatchQty * +ele.netRate;
        this.f["SPTotalAmount"].setValue(
            this.SPDetailsArray.map((x: any) => +x.lineValue)
                .reduce((acc: number, cur: number) => +acc + +cur, 0)
                .toFixed(2)
        );
        this.f["shipmentValue"].setValue((+this.f["SPTotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2));
        this.f["SPV"].setValue(
            this.SPDetailsArray.map((x: any) => +x.SPVLine)
                .reduce((acc: number, cur: number) => +acc + +cur, 0)
                .toFixed(2)
        );
    }

    openOtherChargesModal() {
        const modalRef = this.modalService.open(POOtherChargesComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });
        this.otherCharges.action = this.action;
        modalRef.componentInstance.otherCharges = this.otherCharges;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.otherCharges = success;
                    this.f["shipmentValue"].patchValue(
                        (+this.f["SPTotalAmount"].value + +this.otherCharges.totalAmount).toFixed(2)
                    );
                }
            },
            (reason: any) => {}
        );
    }
    openViewDRNTermsModal() {
        const modalRef = this.modalService.open(ViewDrnTermsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.SOTermsArr = {
            transporterArr: this.masterData?.transporterOptions,
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportOptions,
            paymentTermsArr: this.masterData?.paymentTermsOptions
        };
        modalRef.componentInstance.SOTermsData = {
            paymentTerms: this.form.controls["paymentTerms"].value,
            modeOfTransport: this.form.controls["modeOfTransport"].value,
            frightTerms: this.form.controls["frightTerms"].value,
            transporter: this.form.controls["transporter"].value,
            destination: this.form.controls["destination"].value
        };

        modalRef.componentInstance.billFromAddress = this.form.controls["billFromAddress"].value;
        modalRef.componentInstance.billToAddress = this.form.controls["billToAddress"].value;
        modalRef.componentInstance.billFromLocation = this.form.controls["billFromLocation"].value;
        modalRef.componentInstance.billFromCompanyData = this.masterData?.companyData;
        modalRef.componentInstance.billFromLocationArr = this.masterData?.billFromLocationOptions;

        modalRef.componentInstance.customerShippingAddress = this.form.controls["customerShippingAddress"].value;
        modalRef.componentInstance.selectedCustomerData = this.selectedCustomer?.customerShippingAddress;
        modalRef.componentInstance.otherCharges = this.otherCharges;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.patchValue(success?.SOTermsData);
                    this.form.controls["billFromAddress"].patchValue(success?.billFromAddress);
                    this.form.controls["billToAddress"].patchValue(success?.billToAddress);
                    this.form.controls["customerShippingAddress"].patchValue(success?.customerShippingAddress);
                    this.form.controls["billFromLocation"].setValue(success?.billFromLocation);
                }
            },
            (reason: any) => {}
        );
    }
    openShipmentDetailsModal() {
        const modalRef = this.modalService.open(DrnShipmentDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.shipmentLineValue = this.form.controls["shipmentValue"].value;
        modalRef.componentInstance.SPTotalAmount = this.f["SPTotalAmount"].value;
        modalRef.componentInstance.packingList = this.form.controls["packingList"].value;
        modalRef.componentInstance.otherCharges = this.otherCharges;

        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.form.controls["packingList"].setValue(success?.packingList);
                    this.otherCharges = success?.otherCharges;
                    this.form.controls["shipmentValue"].setValue(success?.otherCharges?.totalShipmentValue);
                }
            },
            (reason: any) => {}
        );
    }
}
