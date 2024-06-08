import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {JobWorkChallanService} from "@services/purchase";

import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
@Component({
    selector: "app-job-worker-challan-print-screen",
    templateUrl: "./job-worker-challan-print-screen.component.html",
    styleUrls: ["./job-worker-challan-print-screen.component.scss"]
})
export class JobWorkerChallanPrintScreenComponent implements OnInit {
    tableData: any = [];
    collection: any;
    pdfAction: any = "";
    buttonCondition: any = "true";
    previewDraft: any = "";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private jobWorkChallanService: JobWorkChallanService,
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
            this.getJobWorkChallanById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getJobWorkChallanById(id: any) {
        this.jobWorkChallanService.getByIdForPDF(id).subscribe(success => {
            this.tableData = success;

            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - this.tableData.JWChallanDetails.length; i++) {
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
