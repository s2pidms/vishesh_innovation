import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {CostSheetForDSKUService} from "@services/business-leads";

@Component({
    selector: "app-dsku-cost-sheet-print-screen",
    templateUrl: "./dsku-cost-sheet-print-screen.component.html",
    styleUrls: ["./dsku-cost-sheet-print-screen.component.scss"]
})
export class DskuCostSheetPrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    constructor(
        private costSheetForDSKUService: CostSheetForDSKUService,
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
        this.costSheetForDSKUService.getByIdForPdf(id).subscribe(success => {
            this.tableData = success;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
