import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
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

@Component({
    selector: "app-jc-production-entry-form",
    templateUrl: "./jc-production-entry-form.component.html"
})
export class JcProductionEntryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "create";
    page: number = 1;
    pageSize: number = 10;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    selectedJobCardDetails: any = {};
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
        "Stock Preparation": StockCuttingFormComponent,
        "Ink Mixing": InkMixingLogModalComponent,
        "Screen Making": ScreenMakingLogFormComponent,
        "Printing on CPI": null,
        "Kiss-cutting": null,
        Weeding: null,
        Lamination: null,
        "Through Punching": null,
        Packing: null
    };
    constructor(
        private jobCardEntryService: JobCardEntryService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private toastService: ToastService,
        private validationService: ValidationService,
        private modalService: NgbModal,
        private utilityService: UtilityService,
        private location: Location
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
        generateReport: new UntypedFormControl({}),
        status: new UntypedFormControl("In-Process"),
        productionEntry: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
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
        console.log("formData.productionEntry", formData.productionEntry);

        this.create(formData);
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
            this.location.back();
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

    setMachineId(item: any, event: any) {
        if (["create", "edit"].includes(this.action)) {
            let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
            this.JCEntryDetailsList[index].machine = event?.machine;
            this.JCEntryDetailsList[index].machineName = event?.machineName;
        }
    }

    changeMachineDetails(item: any) {
        if (["create", "edit"].includes(this.action)) {
            let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
            if (!item.isMachineToggle) {
                this.JCEntryDetailsList[index].isMachineToggle = true;
            } else {
                this.JCEntryDetailsList[index].isMachineToggle = false;
            }
        }
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
            this.f["generateReport"].setValue(success?.jobCardEntryData?.generateReport);
            this.spinner.hide();
            if (this.JCEntryDetailsList.length == 0) {
                this.toastService.warning(`SKU has no defined processes. Please set them up in SKU Process Flow.`);
            }
        });
    }

    preview() {
        this.search = "";
        this.isESCPreview = true;
        this.ESCPreviewArr = this.JCEntryDetailsList;
        this.JCEntryDetailsList = this.JCEntryDetailsList.filter((x: any) => x.seq > 0);
        if (this.JCEntryDetailsList.length == 0) {
            this.toastService.warning(`At least One Row is Required!`);
        } else {
            this.isPreview = true;
        }
        this.collection = this.JCEntryDetailsList.length;
    }
    ESCPreview() {
        this.search = "";
        this.isPreview = false;
        this.JCEntryDetailsList = this.ESCPreviewArr;
        this.collection = this.JCEntryDetailsList.length;
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
        if (this.componentModal[item.processName]) {
            const modalRef = this.modalService.open(this.componentModal[item.processName], {
                centered: true,
                size: "xl",
                backdrop: "static",
                keyboard: false
            });
            modalRef.componentInstance.selectedDetails = {
                jobCard: this.selectedJobCardDetails?._id,
                jobCardNo: this.selectedJobCardDetails?.jobCardNo,
                SKU: this.selectedJobCardDetails?.SKU,
                batchQty: this.selectedJobCardDetails?.batchQty
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
