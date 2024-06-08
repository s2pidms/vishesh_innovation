import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {PDIREntryService} from "@services/quality";

@Component({
    selector: "app-idms-pdir-entry",
    templateUrl: "./idms-pdir-entry.component.html",
    styleUrls: ["./idms-pdir-entry.component.scss"]
})
export class IDMSPDIREntryComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    noOfPDIR: any = [];
    template: string = "PI Exports";
    isChecked: boolean = true;
    isDeviationChecked: boolean = true;
    reportQMSName: any = null;
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
            this.tableData = success?.existing;
            this.reportQMSName = success?.display?.displayText;
            this.noOfPDIR = success?.existing?.PDIRDetails;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
