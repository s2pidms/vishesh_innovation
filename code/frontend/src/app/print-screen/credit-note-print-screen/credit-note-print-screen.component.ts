import {Component, ElementRef, HostListener, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {CreditNoteService} from "@services/sales";

@Component({
    selector: "app-credit-note-print-screen",
    templateUrl: "./credit-note-print-screen.component.html",
    styleUrls: ["./credit-note-print-screen.component.scss"]
})
export class CreditNotePrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    isDomestic: boolean = false;
    buttonCondition: any = "true";

    constructor(
        private creditNoteService: CreditNoteService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService,
        private elementRef: ElementRef
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getCreditNoteServiceById(params.id);
            this.buttonCondition = params.buttonCondition;
        });
        this.elementRef.nativeElement.addEventListener("contextmenu", (event: any) => {
            if (this.buttonCondition == "false") {
                event.preventDefault();
            }
        });
    }

    getCreditNoteServiceById(id: any) {
        this.spinner.show();
        this.creditNoteService.getCNDetailsById(id).subscribe(success => {
            this.spinner.hide();
            this.tableData = success;

            this.isDomestic = success.salesCategory?.includes("Domestic")
            this.tableData.summaryRowRepeat = [];
            for (var i = 1; i <= 4 - +this.tableData.GSTDetails.length; i++) {
                this.tableData.summaryRowRepeat.push(i);
            }
            let contactDetails = success.company.contactInfo.find((ele: any) => ele.department == "Sales");
            this.tableData.company.companyContactPersonNumber = contactDetails.companyContactPersonNumber;
            this.tableData.company.companyContactPersonEmail = contactDetails.companyContactPersonEmail;
            this.tableData.rowRepeat = [];
            for (var i = 1; i <= 6 - +this.tableData.CNDetails.length; i++) {
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
