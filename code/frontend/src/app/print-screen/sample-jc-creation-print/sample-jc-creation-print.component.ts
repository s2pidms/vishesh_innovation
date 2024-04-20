import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {SampleJCCreationService} from "@services/business-leads";
import {JobCardCreationService} from "@services/planning";

@Component({
    selector: "app-sample-jc-creation-print",
    templateUrl: "./sample-jc-creation-print.component.html",
    styleUrls: ["./sample-jc-creation-print.component.scss"]
})
export class SampleJcCreationPrintComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    template: string = "PI Exports";
    isChecked: boolean = true;
    isDeviationChecked: boolean = true;
    constructor(
        private sampleJCCreationService: SampleJCCreationService,
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
        this.sampleJCCreationService.getByIdForPDF(id).subscribe(success => {
            this.tableData = success;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
