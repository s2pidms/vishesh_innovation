import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {mergeMap, of} from "rxjs";
import {ServicePurchaseOrderService} from "@services/purchase";
import {SPODetails} from "@interfaces/SPODetails";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {SERVICE_PURCHASE_ORDER_FORM_ERRORS} from "@mocks/validations/purchase";
import {IGenerateSPOMasterData} from "@mocks/models/purchase/transactions";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DetailsOfSupplierListComponent} from "@shared/modals";
import {Location} from "@angular/common";

@Component({
    selector: "app-spo-form",
    templateUrl: "./spo-form.component.html"
})
export class SpoFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    tableData: any = [];
    ESCPreviewArr: any = [];
    isESCPreview = false;
    submitted = false;
    isPreview = false;
    action = "create";
    supplierOptions: any = [];
    filterItems: SPODetails[] | any = [];
    SPODetailsArray: SPODetails[] = [];
    selectedSupplierDetails = {};
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected"
    };
    masterData: IGenerateSPOMasterData = {
        autoIncrementNo: "",
        purchaseCategories: [],
        locationOptions: [],
        serviceMasters: [],
        suppliersOptions: []
    };

    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        purchaseCategory: new UntypedFormControl(null, [Validators.required]),
        supplier: new UntypedFormControl(null, [Validators.required]),

        SPONumber: new UntypedFormControl(null, [Validators.required]),
        SPODate: new UntypedFormControl(null, [Validators.required]),
        orderReference: new UntypedFormControl(null, [Validators.required]),
        currency: new UntypedFormControl(null, [Validators.required]),
        deliveryLocation: new UntypedFormControl(null, [Validators.required]),
        deliveryDate: new UntypedFormControl(null, [Validators.required]),
        SPODetails: new UntypedFormControl([]),
        remarks: new UntypedFormControl(null),
        SPORemarks: new UntypedFormControl(null),
        netSPOValue: new UntypedFormControl(null),
        totalPPV: new UntypedFormControl(null),
        isActive: new UntypedFormControl("Y", [Validators.required]),
        SPOStatus: new UntypedFormControl(null, [Validators.required])
    });

    get f() {
        return this.form["controls"];
    }

    constructor(
        private SPOService: ServicePurchaseOrderService,
        private toastService: ToastService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private validationService: ValidationService,
        private utilityService: UtilityService,
        private modalService: NgbModal,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getInitialData();
    }

    submit() {
        this.submitted = true;

        if (this.validationService.checkErrors(this.form, SERVICE_PURCHASE_ORDER_FORM_ERRORS)) {
            return;
        }

        this.form.enable();
        let formData: any = this.form.value;

        formData.SPODetails = this.filterItems;
        if (formData._id) {
            this.update(formData);
        } else {
            delete formData._id;
            this.create(formData);
        }
    }

    reset() {
        this.form.reset();
        this.supplierOptions = [];
        this.filterItems = [];
        this.collection = this.filterItems.length;
        this.getInitialData();
    }

    update(formData: any) {
        this.spinner.show();
        this.SPOService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    create(formData: any) {
        this.spinner.show();
        this.SPOService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    getInitialData() {
        this.spinner.show();
        this.SPOService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["SPONumber"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["isActive"].setValue("Y");

            this.form.controls["SPODate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.form.controls["deliveryDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));

            this.form.controls["SPOStatus"].setValue(this.statusArr[this.action]);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.SPOService.getById(params["id"]);
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
                    if (success.SPODate) {
                        success.SPODate = this.utilityService.getFormatDate(success.SPODate, "YYYY-MM-DD");
                    }
                    this.supplierOptions = this.masterData?.suppliersOptions.filter(
                        (x: any) => x.supplierPurchaseType == success.purchaseCategory
                    );
                    if (success.supplier._id) {
                        success.supplier = success?.supplier?._id;
                    }
                    if (success.deliveryDate) {
                        success.deliveryDate = this.utilityService.getFormatDate(success.deliveryDate, "YYYY-MM-DD");
                    }

                    this.filterItems = success.SPODetails.map((ele: any, idx: any) => {
                        return {
                            serviceMaster: ele?.serviceMaster?._id,
                            SPOLineNumber: ele?.SPOLineNumber,
                            serviceCode: ele?.serviceCode,
                            serviceDescription: ele?.serviceDescription,
                            SPOQty: ele?.SPOQty,
                            purchaseRate: ele?.purchaseRate,
                            lineValue: ele?.lineValue,
                            deliveryDate: this.utilityService.getFormatDate(ele.deliveryDate, "YYYY-MM-DD"),
                            gst: ele.gst,
                            igst: ele.igst,
                            cgst: ele.cgst,
                            sgst: ele.sgst,
                            ugst: ele.ugst
                        };
                    });
                    this.collection = this.filterItems.length;
                    success.SPOStatus = this.statusArr[this.action];
                    this.form.patchValue(success);
                    this.f["purchaseCategory"].disable();
                    this.f["supplier"].disable();
                    if (this.action != "edit") {
                        this.form.disable();
                        if (["approve", "reject"].includes(this.action)) {
                            this.f["remarks"].enable();
                        }
                        this.f["SPOStatus"].enable();
                    }
                });
        });
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                this.page = 1;
                break;
            case "EXCEL":
                let payload: any = {
                    csvData: this.filterItems,
                    fileName: "Spo form",
                    removeColumns: [],
                    headings: []
                };
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    trackByFn(index: number, item: any) {
        return item?._id;
    }

    getSuppliers() {
        this.f["supplier"].setValue(null);
        this.f["currency"].setValue(null);
        this.selectedSupplierDetails = {};
        this.supplierOptions = this.masterData?.suppliersOptions.filter(
            (x: any) => x.supplierPurchaseType == this.f["purchaseCategory"].value
        );
        this.filterItems = [];
    }

    supplierValueChange(ev: any) {
        this.f["currency"].setValue(ev.supplierCurrency);
        this.filterItems = this.masterData?.serviceMasters?.map((ele: any, idx: any) => {
            return {
                serviceMaster: ele._id,
                SPOLineNumber: idx + 1,
                serviceCode: ele.serviceCode,
                serviceDescription: ele.serviceDescription,
                SPOQty: 0,

                purchaseRate: ele.purchaseRate,
                lineValue: 0,

                deliveryDate: this.utilityService.getFormatDate(this.f["deliveryDate"].value, "YYYY-MM-DD"),
                gst: ele.gst,
                igst: ele.igst,
                cgst: ele.cgst,
                sgst: ele.sgst,
                ugst: ele.ugst
            };
        });
        this.collection = this.filterItems.length;
    }

    preview() {
        this.isESCPreview = true;
        this.ESCPreviewArr = this.filterItems;
        this.search = "";
        this.filterItems = this.filterItems.filter((x: any) => x.SPOQty > 0);
        let netSPOValue = this.filterItems
            .map((x: any) => +x.lineValue)
            .reduce((acc: number, cur: number) => +acc + +cur, 0);

        this.f["netSPOValue"].setValue(+netSPOValue.toFixed(2));
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

    lineValueRate(SPOLineNumber: string, element: any) {
        let index: number = this.filterItems.map((x: SPODetails) => x.SPOLineNumber).indexOf(SPOLineNumber);

        this.filterItems[index].lineValue = +(+element.SPOQty * +element.purchaseRate).toFixed(2);

        let netSPOValue = this.filterItems
            .map((x: any) => +x.lineValue)
            .reduce((acc: number, cur: number) => +acc + +cur, 0);

        this.f["netSPOValue"].setValue(+netSPOValue.toFixed(2));
    }

    spoQtyChange(ev: any, i: number) {
        this.filterItems[i].SPOQty = Math.abs(ev);
    }

    purchaseRateQtyChange(ev: any, i: number) {
        this.filterItems[i].purchaseRate = Math.abs(ev);
    }

    setDeliveryDate() {
        this.filterItems = this.filterItems.map((ele: any) => {
            ele.deliveryDate = this.utilityService.getFormatDate(this.f["deliveryDate"].value, "YYYY-MM-DD");
            return ele;
        });
        let POD = this.form.controls["SPODate"].value;
        let DD = this.form.controls["deliveryDate"].value;
        if (POD > DD) {
            this.toastService.warning("Please Take Proper Date !");
            this.form.controls["deliveryDate"].reset();
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
    openSupplierDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfSupplierListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedSupplierDetails = this.selectedSupplierDetails;
        modalRef.componentInstance.supplierOptions = this.supplierOptions;
        modalRef.componentInstance.supplier = this.form.controls["supplier"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedSupplierDetails = success?.selectedSupplierDetails;
                    this.form.controls["supplier"].setValue(success?.selectedSupplierDetails?._id);
                    this.supplierValueChange(this.selectedSupplierDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
