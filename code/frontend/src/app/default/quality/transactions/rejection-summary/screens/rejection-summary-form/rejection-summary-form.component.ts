import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AppGlobalService, ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {IJCEntryDetails, IJobCardEntryMasterData} from "@mocks/models/production/transactions";
import {JobCardEntryService} from "@services/production";
import {JOB_CARD_ENTRY_FORM_ERRORS} from "@mocks/validations/production";
import {NgbdSortableHeader, SortEvent} from "@shared/directives";
import {RemarksModalComponent} from "../components/remarks-modal/remarks-modal.component";

@Component({
    selector: "app-rejection-summary-form",
    templateUrl: "./rejection-summary-form.component.html",
    styleUrls: ["./rejection-summary-form.component.scss"]
})
export class RejectionSummaryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "create";
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    totalQuantity: any = 0;
    totalPercentage: any = 0;
    column: string = "SN";
    direction: number = -1;
    search: string = "";
    selectedJobCardDetails: any = {};
    batchInputQty: any = 0;
    processDetailsList: IJCEntryDetails[] = [];
    ESCPreviewArr: any = [];
    menuItemId: any = "";
    masterData: IJobCardEntryMasterData = {
        autoIncrementNo: "",
        JCOptions: [],
        billFromLocationOptions: [],
        shiftOptions: []
    };
    JCEntryDetailsList: IJCEntryDetails[] | any = [];
    prodInfoList: any = [
        {
            prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            prodShift: "",
            operatingStaff: "",
            prodQty: null
        }
    ];
    IPQAInfoList: any = {};
    rejectRemarks: any = [];
    drawingLink: any = "";

    showSKUFlow: boolean = false;
    constructor(
        private jobCardEntryService: JobCardEntryService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location,
        private appGlobalService: AppGlobalService
    ) {}

    form = new UntypedFormGroup({
        jobCardEntryCode: new UntypedFormControl(null),
        jobCard: new UntypedFormControl(null, [Validators.required]),
        jobCardNo: new UntypedFormControl(null),
        SKU: new UntypedFormControl(null),
        SKUStage: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        batchQty: new UntypedFormControl(null),
        batchDate: new UntypedFormControl(null),
        customer: new UntypedFormControl(null),
        customerName: new UntypedFormControl(null),
        location: new UntypedFormControl(null),
        batchOutputQty: new UntypedFormControl(null),
        batchNumber: new UntypedFormControl(null),
        generateReport: new UntypedFormGroup({
            batchInputQty: new UntypedFormControl(null),
            batchOutputQty: new UntypedFormControl(null),
            batchRejQty: new UntypedFormControl(null),
            jobCardClosureDate: new UntypedFormControl(null),
            location: new UntypedFormControl(null),
            checkoutStatus: new UntypedFormControl(null)
        }),
        rejectStatus: new UntypedFormControl("In-Process"),
        rejectionData: new UntypedFormControl([]),
        rejectedTotalQty: new UntypedFormControl(null),
        rejectedPercent: new UntypedFormControl(null),
        rejectRemarks: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }
    get generateReportData() {
        return this.form.get("generateReport") as FormGroup;
    }
    ngOnInit(): void {
        this.menuItemId = this.appGlobalService.menuItemId;
        this.getInitialData();
    }

    openDrawing() {
        if (this.drawingLink) {
            window.open(this.drawingLink, "_blank");
        } else {
            this.toastService.warning("Drawing File Not Present");
        }
    }

    // ngAfterViewInit() {
    //     this.modalService.open(InkMixingLogModalComponent, {
    //         centered: true,
    //         size: "xl",
    //         backdrop: "static",
    //         keyboard: false
    //     });
    // }
    submit() {
        this.submitted = true;
        if (this.validationService.checkErrors(this.form, JOB_CARD_ENTRY_FORM_ERRORS)) {
            return;
        }

        if (!this.f["rejectedTotalQty"].value) {
            this.toastService.warning(`Total Count Cannot be zero`);
            return;
        }
        this.form.enable();
        let formData: any = this.form.value;
        if (this.action == "accept") {
            formData.rejectStatus = "Accepted";
        }
        formData.rejectionData = this.JCEntryDetailsList;
        formData.rejectRemarks = this.rejectRemarks;

        if (formData.generateReport.checkoutStatus == "Skip Integration" && !formData.generateReport.batchOutputQty) {
            this.toastService.warning("In Generate Report Batch Output Quantity is Required");
            return;
        }

        this.create(formData);
    }

    skipIntegration() {
        let formData: any = this.form.value;
        if (formData.generateReport.checkoutStatus == "Skip Integration") {
            // this.openSkippingIntegrationModal();
        } else {
            this.submit();
        }
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    create(formData: any) {
        this.spinner.show();
        this.jobCardEntryService.createOrUpdate(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.reset();
            this.location.back();
        });
    }
    reset() {
        // get initial data
        this.form.reset();
        this.JCEntryDetailsList = [];
        this.collection = this.JCEntryDetailsList.length;
        // this.getInitialData();
        this.isESCPreview = false;
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.jobCardEntryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["jobCardEntryCode"].setValue(this.masterData?.autoIncrementNo);
            // this.processDetailsList = result?.processMasterOptions.map((x: any) => {
            //     x.isMachineToggle = false;
            //     return x;
            // });

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        this.action = params.action;
                        if (params["id"]) {
                            // get patch data
                            return this.jobCardEntryService.getById(params["id"]);
                        } else {
                            return of({});
                        }
                    })
                )
                .subscribe((success: any) => {
                    this.selectedJobCardDetails = success;
                    this.spinner.hide();
                    if (Object.keys(success).length == 0) {
                        return;
                    }

                    if (success.batchDate) {
                        success.batchDate = this.utilityService.getFormatDate(success.batchDate, "YYYY-MM-DD");
                    }
                    // create form object by modifying
                    // if (success?.rejectionData?.length > 0) {
                    //     this.JCEntryDetailsList = success?.rejectionData;
                    // } else {
                    //     this.JCEntryDetailsList = result?.defectList?.map((x: any) => {
                    //         x.quantity = 0;
                    //         x.percentage = 0;
                    //         return x;
                    //     });
                    // }

                    if (success?.rejectionData?.length == 0) {
                        this.JCEntryDetailsList = result?.defectList?.map((x: any) => {
                            x.quantity = 0;
                            x.percentage = 0;
                            return x;
                        });
                    } else {
                        success.rejectionData = success.rejectionData;
                        let rejectionInfoData = result?.defectList?.map((x: any) => {
                            x.quantity = 0;
                            x.percentage = 0;
                            return x;
                        });
                        for (const ele of success.rejectionData) {
                            rejectionInfoData = rejectionInfoData.filter((x: any) => x.SN != ele.SN);
                            this.JCEntryDetailsList = [...success.rejectionData, ...rejectionInfoData];
                        }
                    }
                    if (success?.rejectRemarks) {
                        this.rejectRemarks = success?.rejectRemarks;
                    }
                    this.collection = this.JCEntryDetailsList.length;
                    // patch all forms fields
                    this.form.patchValue(success);
                    this.f["jobCardNo"].disable();
                    // disable form if action is not 'Edit'
                    if (["view", "approve"].includes(this.action)) {
                        this.form.disable();
                    }
                });
        });
    }

    calRejectQty(item: any) {
        let rejectedTotalQty = +this.generateReportData?.controls["batchRejQty"].value;

        let index = this.JCEntryDetailsList.map((x: any) => x.SN).indexOf(item.SN);

        this.JCEntryDetailsList = this.JCEntryDetailsList.map((x: any) => {
            x.percentage = +((+x?.quantity / rejectedTotalQty) * 100);
            return x;
        });
        this.reduceData();

        if (this.f["rejectedTotalQty"].value > this.generateReportData?.value?.batchRejQty) {
            this.toastService.warning(`Quantity Should be less than equal to Rejection Qty`);
            this.JCEntryDetailsList[index].percentage = 0;
            this.JCEntryDetailsList[index].quantity = 0;
            this.reduceData();
        }
    }

    reduceData() {
        let totalRejectedTotalQty = this.JCEntryDetailsList?.map((x: any) => x.quantity)?.reduce(
            (a: any, c: any) => +a + +c,
            0
        );

        let totalRejectedPercent = this.JCEntryDetailsList?.map((x: any) => x.percentage)?.reduce(
            (a: any, c: any) => +a + +c,
            0
        );

        this.f["rejectedTotalQty"].setValue(+totalRejectedTotalQty.toFixed(2));
        this.f["rejectedPercent"].setValue(+totalRejectedPercent.toFixed(2));

        this.f["rejectedTotalQty"].value;
    }

    openRemarksModal() {
        const modalRef = this.modalService.open(RemarksModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.rejectRemarks = this.rejectRemarks;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);

                    this.rejectRemarks = success?.rejectRemarks;
                }
            },
            (reason: any) => {}
        );
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

    onSort({column, direction}: SortEvent) {
        // resetting other headers

        this.headers.forEach((header: any) => {
            if (header.sortable !== column) {
                header.direction = "";
            }
        });
        if (direction === "" || column === "") {
            this.JCEntryDetailsList = this.JCEntryDetailsList;
        } else {
            this.JCEntryDetailsList = [...this.JCEntryDetailsList].sort((a: any, b: any) => {
                let x = typeof a[column] == "string" ? a[column].toLowerCase() : a[column];
                let y = typeof b[column] == "string" ? b[column].toLowerCase() : b[column];
                const res = x < y ? -1 : x > y ? 1 : 0;
                return direction === "asc" ? res : -res;
            });
        }
    }
}
