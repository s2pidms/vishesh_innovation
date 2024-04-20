import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {SpinnerService} from "@core/services";
import {SaleDebitNoteService} from "@services/sales";

@Component({
    selector: "app-sale-debit-note-print",
    templateUrl: "./sale-debit-note-print.component.html",
    styleUrls: ["./sale-debit-note-print.component.scss"]
})
export class SaleDebitNotePrintComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    isDomestic: boolean = false;
    buttonCondition: any = "true";
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
    constructor(
        private saleDebitNoteService: SaleDebitNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    accessType: any = this.rolePermissionActions.downloadAction;

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getDebitNoteServiceById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getDebitNoteServiceById(id: any) {
        this.spinner.show();
        this.saleDebitNoteService.getDNDetailsById(id).subscribe(success => {
            this.spinner.hide();
            this.tableData = success;
            this.isDomestic = success.salesCategory.includes("Domestic");

            this.tableData.summaryRowRepeat = [];
            for (var i = 1; i <= 4 - +this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
            let contactDetails = success.company.contactInfo.find((ele: any) => ele.department == "Sales");
            this.tableData.company.companyContactPersonNumber = contactDetails.companyContactPersonNumber;
            this.tableData.company.companyContactPersonEmail = contactDetails.companyContactPersonEmail;
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData.DNDetails.length; i++) {
                this.tableData.rowRepeat.push(i);
            }
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
