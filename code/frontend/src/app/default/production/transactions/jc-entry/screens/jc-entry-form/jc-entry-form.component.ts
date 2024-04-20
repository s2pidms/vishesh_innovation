import {Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {mergeMap, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";
import {IJCEntryMasterData, IPQAInfo, IProcessNameList, ProdInfo} from "@mocks/models/production/transactions";
import {JCEntryService} from "@services/production";
import {JOB_CARD_ENTRY_FORM_ERRORS} from "@mocks/validations/production";
import {NgbdSortableHeader, SortEvent} from "@shared/directives";
import {JcIPQAInfoModalComponent, JcProdInfoModalComponent} from "../components";
import {JCBatchInfoModalComponent} from "../../../job-card-entry/screens/components/jc-batch-info-modal/jc-batch-info-modal.component";

@Component({
    selector: "app-jc-entry-form",
    templateUrl: "./jc-entry-form.component.html"
})
export class JcEntryFormComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    isPreview = false;
    submitted = false;
    isESCPreview = false;
    action: string = "create";
    page: number = 1;
    pageSize: number = 7;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    selectedJobCardDetails: any = {};
    ESCPreviewArr: any = [];
    masterData: IJCEntryMasterData = {
        autoIncrementNo: "",
        JCOptions: [],
        processNameList: [],
        releaseStatusOptions: [],
        billFromLocationOptions: []
    };
    isMarkAsCompleted: boolean = true;
    JCEntryDetailsList: IProcessNameList[] | any = [];
    prodInfoList: any = [
        {
            seq: null,
            subProcessName: "",
            prodStartDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            prodEndDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            operatingStaff: "",
            prodStatus: false
        }
    ];
    IPQAInfoList: any = [
        {
            seq: null,
            subProcessName: "",
            inspectedBy: "",
            releasedDate: this.utilityService.getTodayDate("YYYY-MM-DD"),
            releaseStatus: null,
            IPQAStatus: false
        }
    ];
    constructor(
        private jcEntryService: JCEntryService,
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
        jcEntryCode: new UntypedFormControl(null),
        jobCard: new UntypedFormControl(null, [Validators.required]),
        jobCardNo: new UntypedFormControl(null),
        SKU: new UntypedFormControl(null),
        referenceModel: new UntypedFormControl(null),
        SKUNo: new UntypedFormControl(null),
        SKUName: new UntypedFormControl(null),
        SKUDescription: new UntypedFormControl(null),
        UOM: new UntypedFormControl(null),
        totalBatchQuantity: new UntypedFormControl(null),
        JCEntryDetails: new UntypedFormControl([]),
        location: new UntypedFormControl(""),
        batchOutputQty: new UntypedFormControl(null),
        batchNumber: new UntypedFormControl("-"),
        status: new UntypedFormControl("In-Process")
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
        this.jcEntryService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.jcEntryService.update(formData._id, formData).subscribe(success => {
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
        this.jcEntryService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.form.controls["jcEntryCode"].setValue(this.masterData?.autoIncrementNo);
            this.form.controls["location"].patchValue("Factory");
            this.form.controls["batchNumber"].setValue("-");
            this.JCEntryDetailsList = this.masterData?.processNameList.map((x: any, index: any) => {
                x.seq = index + 1;
                return x;
            });
            this.collection = this.JCEntryDetailsList.length;
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
                            return this.jcEntryService.getById(params["id"]);
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
                        this.JCEntryDetailsList = success?.JCEntryDetails;
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
        this.f["jobCard"].setValue(item?._id);
        this.f["SKU"].setValue(item?.SKU);
        this.f["SKUNo"].setValue(item?.SKUNo);
        this.f["SKUName"].setValue(item?.SKUName);
        this.f["SKUDescription"].setValue(item?.SKUDescription);
        this.f["UOM"].setValue(item?.UOM);
        this.f["totalBatchQuantity"].setValue(item?.batchQty);
        this.f["batchOutputQty"].setValue(item?.batchQty);
        this.f["jobCardNo"].setValue(item?.jobCardNo);
        this.f["referenceModel"].setValue(item?.referenceModel);
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
        if (this.action == "create") {
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
    }

    checkDisableProd(seq: number) {
        seq = seq - 1;
        if (seq == 0) return false;
        let data: IProcessNameList | undefined = this.JCEntryDetailsList.find((x: IProcessNameList) => x.seq == seq);
        if (data == undefined) return true;
        console.log("data", data);

        let condition = data.production?.prodInfo?.some((s: ProdInfo) => s.prodStatus);

        console.log("condition", condition);
        return condition;
    }

    openProdInfoModal(item: any) {
        const modalRef = this.modalService.open(JcProdInfoModalComponent, {
            centered: true,
            windowClass: "custom-modal",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.prodInfoList = this.prodInfoList;
        modalRef.componentInstance.productionDetails = item;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
                    this.prodInfoList = success?.prodInfoList;
                    this.JCEntryDetailsList[index].production = success?.production;
                    this.updateProcessStatus(index);
                }
            },
            (reason: any) => {}
        );
    }
    openIPQAModal(item: any) {
        const modalRef = this.modalService.open(JcIPQAInfoModalComponent, {
            centered: true,
            windowClass: "custom-modal",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.IPQAInfoList = this.IPQAInfoList;
        modalRef.componentInstance.releaseStatusOptions = this.masterData?.releaseStatusOptions;
        modalRef.componentInstance.IPQADetails = item;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    let index = this.JCEntryDetailsList.findIndex((x: any) => x.process == item?.process);
                    this.IPQAInfoList = success?.IPQAInfoList;
                    this.JCEntryDetailsList[index].IPQA = success?.IPQA;
                    this.updateProcessStatus(index);
                }
            },
            (reason: any) => {}
        );
    }
    updateProcessStatus(index: number) {
        console.log("JCEntryDetailsList", this.JCEntryDetailsList);

        this.JCEntryDetailsList[index].processStatus =
            this.JCEntryDetailsList[index]?.production?.prodInfo?.every((s: ProdInfo) => s?.prodStatus) &&
            this.JCEntryDetailsList[index]?.IPQA?.IPQAInfo?.every((s: IPQAInfo) => s.IPQAStatus);
        this.isMarkAsCompleted = !this.JCEntryDetailsList?.every(
            (x: IProcessNameList) => x?.processStatus || x?.processName == "Packing"
        );
        this.JCEntryDetailsList = [...this.JCEntryDetailsList];
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
