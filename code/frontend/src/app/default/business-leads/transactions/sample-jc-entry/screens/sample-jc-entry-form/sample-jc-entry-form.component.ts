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
import {JOB_CARD_ENTRY_FORM_ERRORS} from "@mocks/validations/production";
import {NgbdSortableHeader, SortEvent} from "@shared/directives";
import {
    IPQAModalComponent,
    ProdInfoModalComponent
} from "src/app/default/production/transactions/job-card-entry/screens/components";
import {JCBatchInfoModalComponent} from "src/app/default/production/transactions/job-card-entry/screens/components/jc-batch-info-modal/jc-batch-info-modal.component";
import {SampleJCEntryService} from "@services/business-leads";

@Component({
    selector: "app-sample-jc-entry-form",
    templateUrl: "./sample-jc-entry-form.component.html"
})
export class SampleJcEntryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
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
    IPQAInfoList: any = [
        {
            inspectionDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            shift: "",
            inspectionStaff: "",
            releaseQty: null
        }
    ];
    constructor(
        private sampleJCEntryService: SampleJCEntryService,
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
        jobCardEntryCode: new UntypedFormControl(null),
        jobCard: new UntypedFormControl(null, [Validators.required]),
        jobCardNo: new UntypedFormControl(null),
        SKU: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        totalBatchQuantity: new UntypedFormControl(null),
        location: new UntypedFormControl(null),
        batchOutputQty: new UntypedFormControl(null),
        batchNumber: new UntypedFormControl(null),
        status: new UntypedFormControl("In-Process"),
        JCEntryDetails: new UntypedFormControl([])
    });

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

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
        formData.JCEntryDetails = this.JCEntryDetailsList;
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
        this.sampleJCEntryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.sampleJCEntryService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
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
        this.sampleJCEntryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["jobCardEntryCode"].setValue(this.masterData?.autoIncrementNo);
            this.processDetailsList = result?.processMasterOptions.map((x: any) => {
                x.isMachineToggle = false;
                return x;
            });
            this.form.controls["status"].setValue("In-Process");
            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.sampleJCEntryService.getById(params["id"]);
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
                    if (success.JCEntryDetails) {
                        this.JCEntryDetailsList = success?.JCEntryDetails?.map((x: any) => {
                            x.isMachineToggle = false;
                            return x;
                        }).sort((a: any, b: any) => a.seq - b.seq);
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
        this.f["jobCard"].setValue(item?._id);
        this.f["SKU"].setValue(item?.SKU);
        this.f["SKUNo"].setValue(item?.SKUNo);
        this.f["SKUName"].setValue(item?.SKUName);
        this.f["SKUDescription"].setValue(item?.SKUDescription);
        this.f["UOM"].setValue(item?.UOM);
        this.f["totalBatchQuantity"].setValue(item?.batchQty);
        this.f["jobCardNo"].setValue(item?.jobCardNo);
        this.f["batchNumber"].setValue(item?.jobCardNo);
        this.spinner.show();
        this.sampleJCEntryService.getProcessFromDirectCostBySKUId({SKUId: item?.SKU}).subscribe(success => {
            if (success.length > 0) {
                this.JCEntryDetailsList = success;
            } else {
                this.JCEntryDetailsList = JSON.parse(JSON.stringify(this.processDetailsList));
            }

            this.collection = this.JCEntryDetailsList?.length;
            this.spinner.hide();
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
        const modalRef = this.modalService.open(ProdInfoModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.prodInfoList = this.prodInfoList;
        modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
        modalRef.componentInstance.productionDetails = item?.production;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
                    this.prodInfoList = success?.prodInfoList;
                    this.JCEntryDetailsList[index].prodQty = success?.production?.cumulativeCount;
                    this.JCEntryDetailsList[index].production = success?.production;
                }
            },
            (reason: any) => {}
        );
    }
    openIPQAModal(item: any) {
        const modalRef = this.modalService.open(IPQAModalComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.IPQAInfoList = this.IPQAInfoList;
        modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
        modalRef.componentInstance.IPQADetails = item?.IPQA;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
                    this.IPQAInfoList = success?.IPQAInfoList;
                    this.JCEntryDetailsList[index].releaseQty = success?.IPQA?.cumulativeCount;
                    this.JCEntryDetailsList[index].IPQA = success?.IPQA;
                }
            },
            (reason: any) => {}
        );
    }
    openBatchInfoModal() {
        const modalRef = this.modalService.open(JCBatchInfoModalComponent, {
            centered: true,
            size: "md",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.billFromLocationOptions = this.masterData.billFromLocationOptions;
        modalRef.componentInstance.batchInfoDetails = {
            location: this.f["location"].value,
            batchOutputQty: this.f["batchOutputQty"].value,
            batchNumber: this.f["batchNumber"].value
        };
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);

                    this.form.patchValue(success);
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
