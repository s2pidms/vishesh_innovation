import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {JobWorkChallanService} from "@services/purchase";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "@core/services";
import {mergeMap, of} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {NgbdSortableHeader, SortEvent} from "@directives/sortable.directive";
import {CancelPoComponent, CustomSearchDetailsModalComponent} from "@shared/modals";
import {SpinnerService, UtilityService} from "@core/services";
import {PURCHASE_ORDER_TYPE} from "@mocks/constant";
import {IJWChallanDetails, IJobWorkChallanMasterData} from "@mocks/models/purchase/transactions";
import {FreightTermsModalComponent, JobWorkAddressModalComponent, JobWorkModalComponent} from "../components";
import TABLE_HEADERS from "./tableHeaders";
import {JOB_WORK_CHALLAN_FORM_ERRORS} from "@mocks/validations/purchase";
@Component({
    selector: "app-job-work-challan-form",
    templateUrl: "./job-work-challan-form.component.html",
    styleUrls: ["./job-work-challan-form.component.scss"]
})
export class JobWorkChallanFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    JWItemsOptions: any = [];
    submitted = false;
    isPreview = false;
    POTypeObj: any = PURCHASE_ORDER_TYPE;
    POTypeArr: any = PURCHASE_ORDER_TYPE.getAllPurchasePOType();
    action: string = "create";
    earnings: any = [];
    selectedDetails: any = {};
    minDate: Date = new Date();
    JWChallanDetailsArray: IJWChallanDetails[] = [];
    ESCPreviewArr: any = [];
    shipToAddressArr: any = [];
    isESCPreview = false;
    statusArr: any = {
        create: "Awaiting Approval",
        edit: "Awaiting Approval",
        approve: "Approved",
        reject: "Rejected",
        cancel: "Cancelled"
    };

    tableHead = TABLE_HEADERS;

    masterData: IJobWorkChallanMasterData = {
        jobWorkerOptions: [],
        transporterOptions: [],
        SACOptions: [],
        freightTermsOptions: [],
        modeOfTransportOptions: []
    };
    form = new UntypedFormGroup({
        _id: new UntypedFormControl(null),
        JWChallanNo: new UntypedFormControl(null),
        JWChallanDate: new UntypedFormControl(null),
        jobWorker: new UntypedFormControl(null, [Validators.required]),
        jobWorkerName: new UntypedFormControl(null),
        currency: new UntypedFormControl(null),
        GSTINNo: new UntypedFormControl(null),
        addressType: new UntypedFormControl(null, [Validators.required]),
        placeOfSupply: new UntypedFormControl(null, [Validators.required]),
        primaryAddress: new UntypedFormGroup({
            country: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            cityOrDistrict: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            line4: new UntypedFormControl(null)
        }),
        shipToAddress: new UntypedFormGroup({
            country: new UntypedFormControl(null),
            state: new UntypedFormControl(null),
            cityOrDistrict: new UntypedFormControl(null),
            pinCode: new UntypedFormControl(null),
            line1: new UntypedFormControl(null),
            line2: new UntypedFormControl(null),
            line3: new UntypedFormControl(null),
            line4: new UntypedFormControl(null)
        }),
        JWChallanDetails: new UntypedFormControl([]),
        totalTaxableAmt: new UntypedFormControl(null),
        freightTermsInfo: new UntypedFormGroup({
            modeOfTransport: new UntypedFormControl(null),
            transporterName: new UntypedFormControl(null),
            vehicleNo: new UntypedFormControl(null),
            freightTerms: new UntypedFormControl(null),
            destination: new UntypedFormControl(null)
        }),
        jobWorkDetails: new UntypedFormGroup({
            jobWorkItem: new UntypedFormControl(null),
            jobWorkItemCode: new UntypedFormControl(null),
            jobWorkItemName: new UntypedFormControl(null),
            jobWorkItemDescription: new UntypedFormControl(null),
            SAC: new UntypedFormControl(null),
            SACCode: new UntypedFormControl(null),
            gst: new UntypedFormControl(null),
            igst: new UntypedFormControl(null),
            cgst: new UntypedFormControl(null),
            sgst: new UntypedFormControl(null),
            ugst: new UntypedFormControl(null),
            descriptionOfService: new UntypedFormControl(null),
            partNo: new UntypedFormControl(null),
            partName: new UntypedFormControl(null)
        }),
        status: new UntypedFormControl(null),
        cancelReason: new UntypedFormControl(null)
    });
    get f() {
        return this.form.controls;
    }
    get freightTermsInfo() {
        return this.form.get("freightTermsInfo") as FormGroup;
    }
    get shipToAddress() {
        return this.form.get("shipToAddress") as FormGroup;
    }
    get primaryAddress() {
        return this.form.get("primaryAddress") as FormGroup;
    }
    get jobWorkDetails() {
        return this.form.get("jobWorkDetails") as FormGroup;
    }
    constructor(
        private jobWorkChallanService: JobWorkChallanService,
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
    navigateTo() {
        this.location.back();
    }
    submit() {
        this.submitted = true;
        this.isPreview = false;
        this.form.enable();

        if (this.validationService.checkErrors(this.form, JOB_WORK_CHALLAN_FORM_ERRORS)) {
            return;
        }

        if (this.action == "reject" && !this.form.controls["cancelReason"].value) {
            this.toastService.warning("Rejection Remark is Required");
            return;
        }

        let formData: any = this.form.value;
        formData.JWChallanDetails = this.JWChallanDetailsArray.filter((x: any) => x.quantity > 0);
        if (formData.JWChallanDetails.length == 0) {
            this.toastService.warning("Quantity can not be zero");
            return;
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
        this.jobWorkChallanService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    create(formData: any) {
        this.spinner.show();
        this.jobWorkChallanService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }
    reset() {
        this.form.reset();
        this.isPreview = false;
        this.isESCPreview = false;
        this.JWChallanDetailsArray = [];
        this.collection = this.JWChallanDetailsArray.length;
        this.getInitialData();
    }

    preview() {
        this.isESCPreview = true;
        this.ESCPreviewArr = this.JWChallanDetailsArray;
        this.search = "";
        this.JWChallanDetailsArray = this.JWChallanDetailsArray.filter((x: any) => x.quantity > 0);
        if (this.JWChallanDetailsArray.length > 0) {
            this.isPreview = true;
        } else {
            this.toastService.warning("At least One Row is Required");
            this.isPreview = false;
        }
        this.collection = this.JWChallanDetailsArray.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.JWChallanDetailsArray = this.ESCPreviewArr;
        this.collection = this.JWChallanDetailsArray.length;
    }
    getInitialData() {
        this.spinner.show();
        this.jobWorkChallanService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.f["JWChallanNo"].setValue(result?.autoIncrementNo);
            this.f["JWChallanDate"].setValue(this.utilityService.getTodayDate("YYYY-MM-DD"));
            this.freightTermsInfo.controls["freightTerms"].setValue("FOR - Free On Road");
            this.form.controls["status"].setValue(this.statusArr[this.action]);

            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            return this.jobWorkChallanService.getById(params["id"]);
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
                    if (success.JWChallanDate) {
                        success.JWChallanDate = this.utilityService.getFormatDate(success.JWChallanDate, "YYYY-MM-DD");
                    }
                    if (success.jobWorker._id && success.jobWorker) {
                        success.jobWorker = success?.jobWorker?._id;
                    }

                    this.jobWorkChallanService
                        .getAllJobWorkerItemsOptions({jobWorkerId: success?.jobWorker})
                        .subscribe(success => {
                            this.JWItemsOptions = success?.JWItemsOptions;
                        });

                    this.JWChallanDetailsArray = success.JWChallanDetails.map((ele: any, idx: any) => {
                        ele.JWLChallanLineNo = idx + 1;
                        return ele;
                    });
                    if (this.action != "edit") {
                        this.JWChallanDetailsArray = this.JWChallanDetailsArray.filter((x: any) => x.quantity != 0);
                    }
                    this.f["totalTaxableAmt"].setValue(
                        this.JWChallanDetailsArray.map((x: any) => x.taxableAmt)
                            .reduce((acc: number, cur: number) => acc + cur, 0)
                            .toFixed(2)
                    );
                    this.collection = this.JWChallanDetailsArray.length;
                    if (success.status == "Supplementary PO") {
                        success.status = "Closed";
                    } else {
                        success.status = this.statusArr[this.action];
                    }

                    if (success?.jobWorker) {
                        let data: any = this.masterData?.jobWorkerOptions?.find(
                            (y: any) => y?.jobWorker == success?.jobWorker
                        );

                        this.shipToAddressArr = data?.additionalPlacesOfBusiness?.map((x: any) => {
                            const addressParts = [
                                x.line1,
                                x.line2,
                                x.line3,
                                x.line4,
                                x.cityOrDistrict,
                                x.pinCode,
                                x.state,
                                x.country
                            ];
                            x.fullAddress = addressParts.filter(Boolean).join(", ");
                            return x;
                        });
                    }

                    this.form.patchValue(success);

                    this.f["addressType"].disable();
                    this.f["jobWorker"].disable();

                    if (this.action != "edit") {
                        this.form.disable();
                        if (["approve", "reject", "cancel"].includes(this.action)) {
                            this.f["cancelReason"].enable();
                        }
                        this.f["status"].enable();
                    }
                });
        });
    }

    getJobWorkerDetails(ev: any) {
        this.f["GSTINNo"].setValue(ev?.GSTINNo);
        this.f["currency"].setValue(ev?.currency);
        this.f["jobWorkerName"].setValue(ev?.jobWorkerName);
        this.shipToAddressArr = ev?.additionalPlacesOfBusiness?.map((x: any) => {
            const addressParts = [x.line1, x.line2, x.line3, x.line4, x.cityOrDistrict, x.pinCode, x.state, x.country];
            x.fullAddress = addressParts.filter(Boolean).join(", ");
            return x;
        });

        this.primaryAddress.patchValue(ev?.primaryAddress);
        this.spinner.show();
        this.jobWorkChallanService.getAllJobWorkerItemsOptions({jobWorkerId: ev.jobWorker}).subscribe(success => {
            this.JWItemsOptions = success?.JWItemsOptions;
            this.JWChallanDetailsArray = success?.mergedItems?.map((ele: any, index: any) => {
                ele.JWLChallanLineNo = index + 1;
                ele.currency = ev?.currency;
                return ele;
            });
            this.spinner.hide();
        });
        this.collection = this.JWChallanDetailsArray?.length;
    }

    setShipAddress(event: any) {
        this.form.controls["placeOfSupply"].setValue(event?.state);
        this.shipToAddress.patchValue(event);
    }

    lineValueRate(JWLChallanLineNo: number, element: any) {
        let index = this.JWChallanDetailsArray.map((x: any) => x.JWLChallanLineNo).indexOf(JWLChallanLineNo);
        this.JWChallanDetailsArray[index].taxableAmt = Number((+element.quantity * +element.unitRate).toFixed(2));

        this.f["totalTaxableAmt"].setValue(
            this.JWChallanDetailsArray.map((x: any) => x.taxableAmt)
                .reduce((acc: number, cur: number) => acc + cur, 0)
                .toFixed(2)
        );
    }

    setConversionOfUnit(item: any) {
        if (["edit", "create"].includes(this.action)) {
            let index = this.JWChallanDetailsArray.map((x: any) => x.JWLChallanLineNo).indexOf(item.JWLChallanLineNo);
            if (this.JWChallanDetailsArray[index].UOM == item.secondaryUnit) {
                this.JWChallanDetailsArray[index].UOM = item.primaryUnit;
                this.JWChallanDetailsArray[index].unitRate = item.stdCostUom1;
                this.JWChallanDetailsArray[index].quantity = 0;
                this.isPreview = false;
            } else {
                this.JWChallanDetailsArray[index].UOM = item.secondaryUnit;
                this.JWChallanDetailsArray[index].unitRate = item.stdCostUom2;
                this.JWChallanDetailsArray[index].quantity = 0;
                this.isPreview = false;
            }

            this.lineValueRate(item.JWLChallanLineNo, item);
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    openCancelModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "PO Cancellation";
        modalRef.componentInstance.cancelText = "Do You Want to Cancel Purchase Order ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
                }
            },
            (reason: any) => {}
        );
    }

    openFreightTermsModal() {
        const modalRef = this.modalService.open(FreightTermsModalComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "custom-modal-sm"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.modeOfTransport = this.masterData.modeOfTransportOptions;
        modalRef.componentInstance.freightTermsArr = this.masterData.freightTermsOptions;
        modalRef.componentInstance.transporterArr = this.masterData.transporterOptions;
        modalRef.componentInstance.freightTermsInfo = this.freightTermsInfo.value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.freightTermsInfo.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }
    openJobWorkerModal() {
        const modalRef = this.modalService.open(JobWorkModalComponent, {
            centered: true,
            backdrop: "static",
            keyboard: false,
            windowClass: "custom-modal-sm"
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.JWItemsOptions = this.JWItemsOptions;
        modalRef.componentInstance.SACOptions = this.masterData.SACOptions;
        modalRef.componentInstance.jobWorkDetails = this.jobWorkDetails.value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                    this.jobWorkDetails.patchValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    openJobWorkDetailsModal() {
        if (this.action == "create") {
            const modalRef = this.modalService.open(CustomSearchDetailsModalComponent, {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.action = this.action;
            modalRef.componentInstance.title = "Job Work Details";
            modalRef.componentInstance.selectedDetails = this.selectedDetails;
            modalRef.componentInstance.tableHead = this.tableHead;
            modalRef.componentInstance.bodyList = this.masterData?.jobWorkerOptions;
            modalRef.componentInstance._id = this.form.controls["jobWorker"].value;

            modalRef.result.then(
                (success: any) => {
                    if (success) {
                        this.selectedDetails = success?.selectedDetails;
                        this.form.controls["jobWorker"].setValue(success?.selectedDetails?.jobWorker);
                        this.getJobWorkerDetails(success?.selectedDetails);
                    }
                },
                (reason: any) => {}
            );
        }
    }

    openShipToAddressModal() {
        const modalRef = this.modalService.open(JobWorkAddressModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.shipToAddress = this.shipToAddress.value;
        modalRef.result.then(
            (success: any) => {
                if (success && ["create", "edit"].includes(this.action)) {
                }
            },
            (reason: any) => {}
        );
    }
    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.JWChallanDetailsArray = this.JWChallanDetailsArray;
        } else {
            this.JWChallanDetailsArray = [...this.JWChallanDetailsArray].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
