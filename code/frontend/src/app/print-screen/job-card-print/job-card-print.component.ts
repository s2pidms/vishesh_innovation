import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {JobCardCreationService} from "@services/planning";

@Component({
    selector: "app-job-card-print",
    templateUrl: "./job-card-print.component.html",
    styleUrls: ["./job-card-print.component.scss"]
})
export class JobCardPrintComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    template: string = "PI Exports";
    isChecked: boolean = true;
    isDeviationChecked: boolean = true;
    constructor(
        private jobCardCreationService: JobCardCreationService,
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
        this.jobCardCreationService.getByIdForPDF(id).subscribe(success => { 
            this.tableData = success;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
