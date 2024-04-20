import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {mergeMap, of} from "rxjs";
import {AdvanceShipmentNotice} from "@services/dispatch";
import {ASN_FORM_ERRORS} from "@mocks/validations/dispatch";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {ValidationService} from "@core/components";
import {UtilityService, ToastService, SpinnerService} from "@core/services";
import {AsnDisaptchDetailsComponent} from "../asn-disaptch-details/asn-disaptch-details.component";
import {AsnBoxDetailsComponent} from "../asn-box-details/asn-box-details.component";
import {IASNMasterData} from "@mocks/models/dispatch/transactions/ASNMasterData";

@Component({
    selector: "app-asn-form",
    templateUrl: "./asn-form.component.html"
})
export class AsnFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    ASNDetailsArray: any = [];
    dispatchDetails: any = {};
    invoiceValue: any = [];
    boxDetails: any = [];
    shippingAddressArr: any = {};
    billingAddressArr: any = {};
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    submitted = false;
    isPreview = false;
    action: string = "create";
    dispatchName: string = "Select SKU for Dispatch";
    statusArr: any = {
        create: "Created",
        edit: "Created",
        approval: "Approved"
    };
    masterData: IASNMasterData = {
        autoIncrementNo: "",
        deliveryTypeOptions: [],
        freightTermsOptions: [],
        modeOfTransportsOptions: [],
        transporterOptions: [],
        salesInvoices: []
    };
    constructor(
        private advanceShipmentNotice: AdvanceShipmentNotice,
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
        salesInvoice: new UntypedFormControl("", [Validators.required]),
        salesInvoiceDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [Validators.required]),
        invoiceValue: new UntypedFormControl("", [Validators.required]),
        ASNNumber: new UntypedFormControl(""),
        customer: new UntypedFormControl("", [Validators.required]),
        customerName: new UntypedFormControl("", [Validators.required]),
        stateOfSupply: new UntypedFormControl(""),

        salesInvoiceDetails: new UntypedFormControl([]),
        billingAddress: new UntypedFormControl([]),
        shippingAddress: new UntypedFormControl([]),

        totalNoOfBoxes: new UntypedFormControl("", [Validators.required]),
        totalGrossWeight: new UntypedFormControl("", [Validators.required]),
        ASNStatus: new UntypedFormControl("Created"),
        transporter: new UntypedFormControl(""),
        modeOfTransport: new UntypedFormControl(""),
        frightCharge: new UntypedFormControl(""),
        frightTerms: new UntypedFormControl(""),
        deliveryType: new UntypedFormControl(""),
        docketLR: new UntypedFormControl(""),
        docketLRDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        freight: new UntypedFormControl("")
    });
    get f() {
        return this.form.controls;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    submit() {
        this.submitted = true;
        this.form.enable();
        if (this.validationService.checkErrors(this.form, ASN_FORM_ERRORS)) {
            return;
        }

        if (this.ASNDetailsArray.length == 0) {
            this.toastService.warning("Atleast one row is Required");
            return;
        }

        let formData: any = {...this.form.value, ...this.dispatchDetails};

        formData.salesInvoiceDetails = this.ASNDetailsArray;
        formData.billingAddress = this.billingAddressArr;
        formData.shippingAddress = this.shippingAddressArr;

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
        this.advanceShipmentNotice.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.advanceShipmentNotice.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    reset() {
        this.form.reset();
        this.ASNDetailsArray = [];
        this.collection = this.ASNDetailsArray.length;
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.advanceShipmentNotice.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["salesInvoiceDate"].patchValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["ASNStatus"].patchValue("Created");
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.advanceShipmentNotice.getById(params["id"]);
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

                    this.ASNDetailsArray = success.salesInvoiceDetails;

                    if (success.salesInvoiceDate) {
                        success.salesInvoiceDate = success.salesInvoiceDate.split("T")[0];
                    }
                    if (success.salesInvoice) {
                        this.masterData.salesInvoices = [
                            {
                                salesInvoiceNumber: success?.salesInvoice?.salesInvoiceNumber,
                                _id: success.salesInvoice?._id
                            }
                        ];
                        success.salesInvoice = success.salesInvoice?._id;
                    }

                    this.collection = this.ASNDetailsArray.length;
                    success.ASNStatus = this.statusArr[this.action];

                    this.form.patchValue(success);
                    this.dispatchDetails = {
                        transporter: success.transporter,
                        modeOfTransport: success.modeOfTransport,
                        frightCharge: success.frightCharge,
                        frightTerms: success.frightTerms,
                        deliveryType: success.deliveryType,
                        docketLR: success.docketLR,
                        docketLRDate: this.utilityService.getFormatDate(success.docketLRDate, "YYYY-MM-DD"),
                        freight: success.freight
                    };

                    if (this.action == "view") {
                        this.form.disable();
                    }
                    if (this.action == "edit") {
                        this.form.controls["salesInvoice"].disable();
                    }
                });
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.ASNDetailsArray = this.ASNDetailsArray;
        } else {
            this.ASNDetailsArray = [...this.ASNDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }

    openDispatchDetailsModal() {
        const modalRef = this.modalService.open(AsnDisaptchDetailsComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.dispatchDetails = this.dispatchDetails;
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.data = {
            transporterArr: this.masterData?.transporterOptions,
            freightTerms: this.masterData?.freightTermsOptions,
            modeOfTransport: this.masterData?.modeOfTransportsOptions,
            deliveryTypeArr: this.masterData?.deliveryTypeOptions,
            frightCharge: this.form.value.frightCharge,
            docketLR: this.form.value.docketLR,
            docketLRDate: this.form.value.docketLRDate,
            invoiceValue: this.form.value.invoiceValue,
            freight: this.form.value.freight,
            deliveryType: this.form.value.deliveryType
        };
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.dispatchDetails = success;
                }
            },
            (reason: any) => {}
        );
    }

    openBoxDetailsModal(d: any) {
        let index = this.ASNDetailsArray.findIndex((x: any) => x.SOId == d.SOId && x.SKU == d.SKU);
        const modalRef = this.modalService.open(AsnBoxDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.boxDetails = d?.boxDetails;
        modalRef.componentInstance.dispatchQty = d?.dispatchQty;
        modalRef.componentInstance.action = this.action;
        modalRef.result.then(
            (success: any) => {
                if (["create", "edit"].includes(this.action)) {
                    this.ASNDetailsArray[index].boxDetails = success;
                    let boxes = [
                        ...new Set(
                            this.ASNDetailsArray.map((ele: any) => ele.boxDetails.map((b: any) => b.boxNo)).flat()
                        )
                    ];
                    let weights = this.ASNDetailsArray.map((ele: any) => ele.boxDetails.map((b: any) => +b.weight))
                        .flat()
                        .reduce((a: number, c: number) => +a + +c, 0);
                    this.ASNDetailsArray[index].boxNos = [...new Set(success.map((b: any) => b.boxNo))].toString();
                    this.form.controls["totalNoOfBoxes"].setValue(boxes.length);
                    this.form.controls["totalGrossWeight"].setValue(weights);
                }
            },
            (reason: any) => {}
        );
    }

    setSesInvoice(ele: any) {
        this.spinner.show();
        this.advanceShipmentNotice.ASNDetailsBySalesInvoiceId(ele._id).subscribe((success: any) => {
            this.form.patchValue(success);
            this.ASNDetailsArray = success.salesInvoiceDetails;
            this.billingAddressArr = success?.company?.companyBillingAddress;
            this.shippingAddressArr = success?.shippingAddress;
            this.collection = this.ASNDetailsArray.length;
            this.spinner.hide();
        });
    }
}
