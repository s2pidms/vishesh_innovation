import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {PDIREntryService} from "@services/quality";

@Component({
    selector: "app-tgy-pdir-entry",
    templateUrl: "./tgy-pdir-entry.component.html",
    styleUrls: ["./tgy-pdir-entry.component.scss"]
})
export class TGYPDIREntryComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    noOfPDIR: any = [""];
    template: string = "PI Exports";
    isChecked: boolean = true;
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
