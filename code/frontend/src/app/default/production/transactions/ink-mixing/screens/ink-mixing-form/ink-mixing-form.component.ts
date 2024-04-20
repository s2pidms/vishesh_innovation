import {Component, OnInit} from "@angular/core";
import {mergeMap, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "@core/services";
import {SpinnerService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Location} from "@angular/common";
import {JobCardDetailsModalComponent} from "src/app/default/planning/transactions/gi-ppic-to-production/screens/job-card-details-modal/job-card-details-modal.component";
import {InkMixingRemarksDetailsComponent} from "../ink-mixing-remarks-details/ink-mixing-remarks-details.component";
import {InkMixingService} from "@services/production";
import {IInkMixingDetails, IInkMixingMasterData} from "@mocks/models/production/transactions";
import {InkCodeDetailsModalComponent} from "../ink-code-details-modal/ink-code-details-modal.component";

@Component({
    selector: "app-ink-mixing-form",
    templateUrl: "./ink-mixing-form.component.html"
})
export class InkMixingFormComponent implements OnInit {
    submitted = false;
    action: string = "create";
    page: number = 1;
    inkPage: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    column: string = "createdAt";
    direction: number = -1;
    search: string = "";
    selectedJobCardDetails: any = {};
    inkMixingDetails: IInkMixingDetails[] = [
        {
            _id: "",
            ink: "",
            itemCode: "",
            itemName: "",
            itemDescription: "",
            UOM: "",
            MRPQty: 0,
            openQty: 0,
            batchQty: 0,
            inkDetails: []
        }
    ];
    masterData: IInkMixingMasterData = {
        autoIncrementNo: "",
        shiftOptions: [],
        JCOptions: []
    };
    selectedInkFormulation: any = null;
    formData = {
        _id: null,
        jobCard: null,
        jobCardNo: null,
        inkMixingCode: "000000"
    };
    constructor(
        private inkMixingService: InkMixingService,
        private router: Router,
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
    navigateTo(path: string, id: any, action: string) {
        this.router.navigate([path]);
    }
    reset() {
        // get initial data
        this.selectedInkFormulation = null;
        this.formData = {_id: null, jobCard: null, jobCardNo: null, inkMixingCode: "000000"};
        this.inkMixingDetails = [
            {
                _id: "",
                ink: "",
                itemCode: "",
                itemName: "",
                itemDescription: "",
                UOM: "",
                MRPQty: 0,
                openQty: 0,
                batchQty: 0,
                inkDetails: []
            }
        ];
        this.collection = this.inkMixingDetails.length;
        this.getInitialData();
    }

    submit() {
        this.submitted = true;
        if (!this.formData.jobCardNo) {
            this.toastService.warning("Job Card No. is required");
            return;
        }
        if (!this.selectedInkFormulation) {
            this.toastService.warning("F20 Ink Code is required");
            return;
        }

        if (this.inkMixingDetails.some((x: any) => x.inkDetails.length == 0)) {
            this.toastService.warning("F20 Ink Code Table Data is required");
            return;
        }

        let formData: any = {...this.formData, inkMixingDetails: this.inkMixingDetails};

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
        this.inkMixingService.create(formData).subscribe(success => {
            this.submitted = false;
            this.spinner.hide();
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    update(formData: any) {
        this.spinner.show();
        this.inkMixingService.update(formData._id, formData).subscribe(success => {
            this.spinner.hide();
            this.submitted = false;
            this.toastService.success(success.message);
            this.location.back();
        });
    }

    getInitialData() {
        // get master data
        this.spinner.show();
        this.inkMixingService.getAllMasterData({}).subscribe(result => {
            this.masterData = result;
            this.collection = this.inkMixingDetails.length;

            // get routes data
            this.activatedRoute.queryParams
                .pipe(
                    mergeMap((params: any) => {
                        // set action
                        this.action = params.action;
                        this.utilityService.accessDenied(this.action);
                        if (params["id"]) {
                            // get patch data
                            return this.inkMixingService.getById(params["id"]);
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
                    this.formData = success;
                    this.inkMixingDetails = success.inkMixingDetails.map((x: any) => {
                        if (x.remarks && x.remarks.manufacturingDate) {
                            x.remarks.manufacturingDate = this.utilityService.getFormatDate(
                                x.remarks.manufacturingDate,
                                "YYYY-MM-DD"
                            );
                        }
                        return x;
                    });

                    this.selectedInkFormulation = success.inkMixingDetails[0].ink;
                    this.collection = this.inkMixingDetails.length;
                });
        });
    }

    setJobCardId(item: any) {
        this.formData.jobCard = item?._id;
        this.spinner.show();
        this.inkMixingService.getInkDataBySKUId({SKUId: item?.SKU, batchQty: item?.batchQty}).subscribe(success => {
            if (success.length > 0) {
                this.inkMixingDetails = success;
                this.selectedInkFormulation = success[0].ink;
            } else {
                this.inkMixingDetails = [
                    {
                        _id: "",
                        ink: "",
                        itemCode: "",
                        itemName: "",
                        itemDescription: "",
                        UOM: "",
                        MRPQty: 0,
                        openQty: 0,
                        batchQty: 0,
                        inkDetails: []
                    }
                ];
            }

            this.spinner.hide();
        });
    }

    setInkDetails(item: any) {
        let index = this.inkMixingDetails.findIndex((x: any) => x.ink == item.ink);
        if (index != -1) {
            this.inkPage = index + 1;
        }
    }

    setQuantity(item: any) {
        let index = this.inkMixingDetails[this.inkPage - 1].inkDetails.findIndex((x: any) => x.item == item.item);

        if (["KG", "LTR"].includes(item.UOM.toUpperCase())) {
            this.inkMixingDetails[this.inkPage - 1].inkDetails[index].qty = item.gramQty / 1000;
        }
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
        modalRef.componentInstance.jobCard = this.formData.jobCard;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedJobCardDetails = success?.selectedJobCardDetails;
                    this.formData.jobCard = success?.selectedJobCardDetails?._id;
                    this.formData.jobCardNo = success?.selectedJobCardDetails?.jobCardNo;
                    this.setJobCardId(success?.selectedJobCardDetails);
                }
            },
            (reason: any) => {}
        );
    }

    openInkDetailsModal() {
        const modalRef = this.modalService.open(InkCodeDetailsModalComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
        modalRef.componentInstance.inkMixingDetails = this.inkMixingDetails;
        modalRef.componentInstance.inkId = this.inkMixingDetails[this.inkPage - 1].ink;
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedInkFormulation = success;
                    let index = this.inkMixingDetails.findIndex((x: any) => x.ink == success);
                    if (index != -1) {
                        this.inkPage = index + 1;
                    }
                }
            },
            (reason: any) => {}
        );
    }

    openRemarksDetailsModal() {
        const modalRef = this.modalService.open(InkMixingRemarksDetailsComponent, {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false
        });

        modalRef.componentInstance.action = this.action;
        modalRef.componentInstance.shiftOptions = this.masterData.shiftOptions;
        modalRef.componentInstance.remarksDetails = {
            remarks: this.inkMixingDetails[this.inkPage - 1].remarks,
            labValues: this.inkMixingDetails[this.inkPage - 1].labValues
        };
        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.inkMixingDetails[this.inkPage - 1].remarks = success?.remarks;
                    this.inkMixingDetails[this.inkPage - 1].labValues = success?.labValues;
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
}
