import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {JobWorkChallanService} from "@services/purchase";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {IJobWorkOrderPrintScreen} from "@mocks/models/print-screen/jobWorkOrderPrintScreen";
import {JobWorkOrderService} from "@services/purchase/jobWorkOrder.service";

@Component({
    selector: "app-job-work-order-print-screen",
    templateUrl: "./job-work-order-print-screen.component.html",
    styleUrls: ["./job-work-order-print-screen.component.scss"]
})
export class JobWorkOrderPrintScreenComponent implements OnInit {
    tableData: IJobWorkOrderPrintScreen = {
        _id: "",
        rowRepeat: [],
        company: {
            _id: "",
            logoUrl: "",
            companySignatureUrl: ""
        },
        WONo: "",
        WODate: "",
        orderReference: "",
        placeOfSupply: "",
        paymentTerms: "",
        freightTerms: "",
        WORemarks: "",
        jobWorkerName: "",
        currency: "",
        addressType: "",
        GSTINNo: "",
        WODetails: [
            {
                SACInfo: {
                    SACCode: "",
                    natureOfJobWork: "",
                    gstRate: 0,
                    igstRate: 0,
                    sgstRate: 0,
                    cgstRate: 0
                },
                HSNInfo: {
                    HSNCode: "",
                    gstRate: 0,
                    igstRate: 0,
                    sgstRate: 0,
                    cgstRate: 0,
                    ugstRate: 0
                },
                jobWorkService: "",
                jobWorkItem: "",
                jobWorkItemCode: "",
                jobWorkItemName: "",
                jobWorkItemDescription: "",
                drawingNo: "",
                UOM: "",
                processRatePerUnit: 0,
                discountPercent: "",
                netRatePerUnit: 0,
                quantity: 0,
                taxableValue: 0,
                deliveryDate: "",
                deliveryCount: 0,
                deliverySchedule: [
                    {
                        scheduleNo: 0,
                        quantity: 0,
                        deliveryDate: "",
                        _id: ""
                    }
                ],
                _id: ""
            }
        ],
        billFromJobWorker: {
            country: "",
            state: "",
            city: "",
            pinCode: "",
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        },
        shipFromJobWorker: {
            country: "",
            state: "",
            city: "",
            pinCode: "",
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        },
        billToCompany: {
            companyName: "",
            GSTIN: "",
            country: "",
            state: "",
            city: "",
            pinCode: "",
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        },
        shipToCompany: {
            companyName: "",
            GSTIN: "",
            country: "",
            state: "",
            city: "",
            pinCode: "",
            line1: "",
            line2: "",
            line3: "",
            line4: ""
        }
    };

    collection: any;
    pdfAction: any = "";
    buttonCondition: any = "true";
    previewDraft: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private jobWorkOrderService: JobWorkOrderService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}
    accessType: any = this.rolePermissionActions.downloadAction;

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.previewDraft = params.preview;
            this.getJobWorkOrderById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getJobWorkOrderById(id: any) {
        this.jobWorkOrderService.getByIdForPDF(id).subscribe(success => {
            this.tableData = success;
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - this.tableData.WODetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
            this.spinner.hide();
        });
    }

    windowPrint() {
        window.print();
    }

    @HostListener("window:keydown", ["$event"])
    onKeyDown(event: KeyboardEvent): void {
        if (
            (event.ctrlKey && event.key === "p" && this.buttonCondition == "false") ||
            (event.key === "P" && this.buttonCondition == "false")
        ) {
            event.preventDefault();
        }
    }
}
