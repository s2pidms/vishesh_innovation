import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {PDIREntryService} from "@services/quality";

@Component({
    selector: "app-pdir-print-screen",
    templateUrl: "./pdir-print-screen.component.html",
    styleUrls: ["./pdir-print-screen.component.scss"]
})
export class PDIRPrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    noOfPDIR: any = [""];
    template: string = "PI Exports";
    constructor(
        private pdirEntryService: PDIREntryService,
        private activatedRoute: ActivatedRoute,
        private spinner: SpinnerService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((params: any) => {
            this.pdfAction = params.action;
            this.getDetailsById(params.id);
        });
    }
    getDetailsById(id: any) {
        this.spinner.show();
        this.pdirEntryService.getPDIRDetailsById(id).subscribe(success => {
            this.tableData = success;
            this.noOfPDIR = success.PDIRDetails;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
