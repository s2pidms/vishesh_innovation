import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {FormGroup, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";
import {IJCEntryDetails, IJobCardEntryMasterData} from "@mocks/models/production/transactions";
import {JobCardEntryService} from "@services/production";
import {JOB_CARD_ENTRY_FORM_ERRORS} from "@mocks/validations/production";
import {NgbdSortableHeader, SortEvent} from "@shared/directives";
import {
    GenerateReportModalComponent,
    InkMixingLogModalComponent,
    IpqaLogModelComponent,
    ScreenMakingLogFormComponent
} from "../components";
import {StockCuttingFormComponent} from "../stock-cutting/stock-cutting-form/stock-cutting-form.component";
import {CancelPoComponent} from "@shared/modals";
import {ScreenPrintingLogModelComponent} from "../screen-printing/screen-printing-log-model/screen-printing-log-model.component";
import {JcStockPreparationEntryComponent} from "../stock-preparation/jc-stock-preparation-entry/jc-stock-preparation-entry.component";
import {LaminationLogEntryModelComponent} from "../lamination-log-entry-model/lamination-log-entry-model.component";
import {WeedingLogEntryModelComponent} from "../weeding-log-entry-model/weeding-log-entry-model.component";
import {PunchingLogEntryModelComponent} from "../punching-log-entry-model/punching-log-entry-model.component";
import {PackingLogEntryModelComponent} from "../packing-log-entry-model/packing-log-entry-model.component";

@Component({
    selector: "app-jc-production-entry-form",
    templateUrl: "./jc-production-entry-form.component.html",
    styles: [
        `
            .set-margin {
                margin-bottom: 29.9rem;
            }
        `
    ]
})
export class JcProductionEntryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "create";
    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    selectedJobCardDetails: any = {};
    batchInputQty: any = 0;
    processDetailsList: IJCEntryDetails[] = [];
    ESCPreviewArr: any = [];
    masterData: IJobCardEntryMasterData = {
        autoIncrementNo: "",
        JCOptions: [],
        billFromLocationOptions: [],
        shiftOptions: []
    };
    JCEntryDetailsList: IJCEntryDetails[] = [];
    prodInfoList: any = [
        {
            prodDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            prodShift: "",
            operatingStaff: "",
            prodQty: null
        }
    ];
    IPQAInfoList: any = {};
    componentModal: any = {
        // "Stock Preparation": StockCuttingFormComponent,
        "Stock Preparation": JcStockPreparationEntryComponent,
        "Ink Mixing": InkMixingLogModalComponent,
        "Screen Making": ScreenMakingLogFormComponent,
        "Printing on CPI": ScreenPrintingLogModelComponent,
        "Kiss-cutting": null,
        Weeding: WeedingLogEntryModelComponent,
        Lamination: LaminationLogEntryModelComponent,
        "Through Punching": PunchingLogEntryModelComponent,
        Packing: PackingLogEntryModelComponent
    };
    componentModalSize: any = {
        "Stock Preparation": "xl",
        // "Stock Preparation": 'xl',
        "Ink Mixing": "xl",
        "Screen Making": "xl",
        "Printing on CPI": "xl",
        "Kiss-cutting": null,
        Weeding: "md",
        Lamination: "md",
        "Through Punching": "md",
        Packing: "md"
    };

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
        private router: Router
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
        status: new UntypedFormControl("In-Process"),
        productionEntry: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }
    get generateReportData() {
        return this.form.get("generateReport") as FormGroup;
    }
    ngOnInit(): void {
        this.getInitialData();
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
        this.form.enable();
        let formData: any = this.form.value;
        if (this.action == "approve") {
            formData.status = "Approved";
        }
        formData.productionEntry = this.JCEntryDetailsList;

        if (formData.generateReport.checkoutStatus == "Skip Integration" && !formData.generateReport.batchOutputQty) {
            this.toastService.warning("In Generate Report Batch Output Quantity is Required");
            return;
        }

        this.create(formData);
    }

    skipIntegration() {
        let formData: any = this.form.value;
        if (formData.generateReport.checkoutStatus == "Skip Integration") {
            this.openSkippingIntegrationModal();
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
            // this.location.back();
        });
    }
    reset() {
        // get initial data
        this.form.reset();
        this.JCEntryDetailsList = [];
        this.collection = this.JCEntryDetailsList.length;
        this.getInitialData();
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
            this.form.controls["status"].setValue("In-Process");
            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // this.action = params.action;
                        if (params["id"]) {
                            // get patch data
                            return this.jobCardEntryService.getById(params["id"]);
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
                    // create form object by modifying
                    if (success.productionEntry) {
                        this.JCEntryDetailsList = success?.productionEntry
                            ?.map((x: any) => {
                                x.isMachineToggle = false;
                                return x;
                            })
                            .sort((a: any, b: any) => a.seq - b.seq);
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

    setJobCardId(item: any) {
        this.selectedJobCardDetails = item;
        this.f["jobCardNo"].setValue(item?.jobCardNo);
        this.f["jobCard"].setValue(item?._id);
        // this.spinner.show();
        // this.jobCardEntryService
        //     .getProcessFromDirectCostBySKUId({SKUOrDSKUId: item?.SKU, orderType: item?.orderType})
        //     .subscribe(success => {
        //         if (success.length > 0) {
        //             this.JCEntryDetailsList = success;
        //         } else {
        //             this.JCEntryDetailsList = JSON.parse(JSON.stringify(this.processDetailsList));
        //         }

        //         this.collection = this.JCEntryDetailsList?.length;
        //         this.spinner.hide();
        //     });
        this.spinner.show();
        this.jobCardEntryService.getJCEntryDataByJobCardId({jobCard: item?._id, SKU: item?.SKU}).subscribe(success => {
            this.f["SKU"].setValue(success?.jobCardEntryData?.SKU);
            this.f["SKUNo"].setValue(success?.jobCardEntryData?.SKUNo);
            this.f["SKUName"].setValue(success?.jobCardEntryData?.SKUName);
            this.f["SKUStage"].setValue(success?.jobCardEntryData?.SKUStage);
            this.f["SKUDescription"].setValue(success?.jobCardEntryData?.SKUDescription);
            this.f["UOM"].setValue(success?.jobCardEntryData?.UOM);
            this.f["batchQty"].setValue(success?.jobCardEntryData?.batchQty);
            this.f["batchDate"].setValue(
                success?.jobCardEntryData?.batchDate
                    ? this.utilityService.getFormatDate(success?.jobCardEntryData?.batchDate, "YYYY-MM-DD")
                    : null
            );
            this.f["customer"].setValue(success?.jobCardEntryData?.customer);
            this.f["customerName"].setValue(success?.jobCardEntryData?.customerName);
            // this.f["productionEntry"].setValue(success?.jobCardEntryData?.productionEntry);
            this.JCEntryDetailsList = success?.jobCardEntryData?.productionEntry
                ? success?.jobCardEntryData?.productionEntry
                : success?.SKUProcessList;
            this.f["generateReport"].patchValue(success?.jobCardEntryData?.generateReport);
            this.spinner.hide();
            this.batchInputQty = success?.batchInputQty;
            if (!this.generateReportData.controls["batchInputQty"].value) {
                this.generateReportData.controls["batchInputQty"].setValue(this.batchInputQty);
            }
            if (this.JCEntryDetailsList.length == 0) {
                this.showSKUFlow = true;
                this.toastService.warning(`SKU has no define processes. Please set them up in SKU Process Flow.`);
            } else {
                this.showSKUFlow = false;
            }
            this.collection = this.JCEntryDetailsList.length;
            console.log("this.JCEntryDetailsList ", this.JCEntryDetailsList);
        });
    }

    defineSKUProcessFlow() {
        this.router.navigate(["default/planning/master/sku_process_flow/form"], {
            queryParams: {id: this.f["SKU"].value, action: "processFlow"}
        });
    }

    openJobCardDetailsModal() {
        const modalRef = this.modalService.open(JobCardDetailsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.selectedJobCardDetails = this.selectedJobCardDetails;
        modalRef.componentInstance.JCOptions = this.masterData.JCOptions;
        modalRef.componentInstance.jobCard = this.form.controls["jobCard"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedJobCardDetails = success?.selectedJobCardDetails;
                    this.setJobCardId(success?.selectedJobCardDetails);
                }
            },
            (reason: any) => {}
        );
    }

    openProdInfoModal(item: any) {
        if (this.componentModal[item.processOriginalName]) {
            const modalRef = this.modalService.open(this.componentModal[item.processOriginalName], {
                centered: true,
                // size: 'xl',
                size: this.componentModalSize[item.processOriginalName],
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.sourceOfManufacturing = item?.sourceOfManufacturing;
            modalRef.componentInstance.selectedDetails = {
                jobCard: this.selectedJobCardDetails?._id,
                jobCardNo: this.selectedJobCardDetails?.jobCardNo,
                SKU: this.selectedJobCardDetails?.SKU,
                batchQty: this.selectedJobCardDetails?.batchQty
            };
            modalRef.componentInstance.jobCardDetails = {
                jobCard: this.selectedJobCardDetails?._id,
                jobCardNo: this.selectedJobCardDetails?.jobCardNo,
                SKUNo: this.selectedJobCardDetails?.SKUNo,
                SKU: this.selectedJobCardDetails?.SKU,
                SKUName: this.selectedJobCardDetails?.SKUName,
                SKUDescription: this.selectedJobCardDetails?.SKUDescription,
                UOM: this.selectedJobCardDetails?.UOM,
                SKUBatchQty: this.selectedJobCardDetails?.batchQty
            };
            // modalRef.result.then(
            //     (success: any) => {},
            //     (reason: any) => {}
            // );
        }
    }
    openIPQAModal(item: any) {
        const modalRef = this.modalService.open(IpqaLogModelComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.IPQAInfoList = item?.IPQALog;
        // modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
        // modalRef.componentInstance.IPQADetails = item?.IPQA;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    console.log("JCEntryDetailsList", this.JCEntryDetailsList);

                    let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
                    this.IPQAInfoList = success?.IPQAInfoList;
                    this.JCEntryDetailsList[index].releaseQty = success?.IPQA?.cumulativeCount;
                    this.JCEntryDetailsList[index].IPQA = success?.IPQA;
                }
            },
            (reason: any) => {}
        );
    }
    // openIPQAModal(item: any) {
    //     const modalRef = this.modalService.open(IPQAModalComponent, {
    //         centered: true,
    //         size: "lg",
    //         backdrop: "static",
    //         keyboard: false
    //     });

    //     modalRef.componentInstance.action = this.action;
    //     modalRef.componentInstance.IPQAInfoList = this.IPQAInfoList;
    //     modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
    //     modalRef.componentInstance.IPQADetails = item?.IPQA;
    //     modalRef.result.then(
    //         (success: any) => {
    //             if (success) {
    //                 let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
    //                 this.IPQAInfoList = success?.IPQAInfoList;
    //                 this.JCEntryDetailsList[index].releaseQty = success?.IPQA?.cumulativeCount;
    //                 this.JCEntryDetailsList[index].IPQA = success?.IPQA;
    //             }
    //         },
    //         (reason: any) => {}
    //     );
    // }
    openBatchInfoModal() {
        const modalRef = this.modalService.open(GenerateReportModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.billFromLocationOptions = this.masterData.billFromLocationOptions;
        modalRef.componentInstance.generateReport = this.form.controls["generateReport"].value;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.form.controls["generateReport"].setValue(success);
                }
            },
            (reason: any) => {}
        );
    }

    openSkippingIntegrationModal() {
        const modalRef = this.modalService.open(CancelPoComponent, {
            centered: true,
            size: "sm",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.heading = "Job card Entry";
        modalRef.componentInstance.cancelText = "Do You Want To Proceed By Skipping The  Integration ?";
        modalRef.result.then(
            (success: any) => {
                if (success == "Yes") {
                    this.submit();
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
