import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {SKUCostSheetService} from "@services/planning";

@Component({
    selector: "app-sku-cost-sheet-print-screen",
    templateUrl: "./sku-cost-sheet-print-screen.component.html",
    styleUrls: ["./sku-cost-sheet-print-screen.component.scss"]
})
export class SkuCostSheetPrintScreenComponent implements OnInit {
    tableData: any = {};
    pdfAction: any = "";
    noOfPDIR: any = [];
    template: string = "PI Exports";
    isChecked: boolean = true;
    isDeviationChecked: boolean = true;
    constructor(
        private SKUCostSheetServ: SKUCostSheetService,
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
        this.SKUCostSheetServ.getByIdForPdf(id).subscribe(success => {
            this.tableData = success;
            this.noOfPDIR = success.SKUCostDetails;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
