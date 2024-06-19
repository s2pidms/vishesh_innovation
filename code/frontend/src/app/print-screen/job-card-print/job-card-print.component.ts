import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {IJobCardPrintScreen} from "@mocks/models/print-screen";
import {JobCardCreationService} from "@services/planning";

@Component({
    selector: "app-job-card-print",
    templateUrl: "./job-card-print.component.html",
    styleUrls: ["./job-card-print.component.scss"]
})
export class JobCardPrintComponent implements OnInit {
    tableData: IJobCardPrintScreen = {
        jobCard: {
            _id: "",
            SONo: [],
            jobCardNo: "",
            artWorkNo: "",
            totalNoOfColors: 0,
            batchDate: "",
            totalBatchQuantity: 0,
            stage: "",
            NPDInput: "",
            customerName: "",
            dispatchSchedule: {
                dispatchDate: "",
                _id: ""
            },
            UOM: "",
            jobCardDate: "",
            productCategory: "",
            SKUNo: "",
            SKUName: "",
            customerPartNo: "",
            actualDimensionsUnit: "",
            actualDimensionsWidth: 0,
            actualDimensionsLength: 0,
            actualDimensionsUps: 0,
            layoutDimensionsUnit: "",
            layoutDimensionsWidth: 0,
            layoutDimensionsLength: 0,
            layoutDimensionsUps: 0
        },
        MRPData: [
            {
                _id: "",
                itemCode: "",
                itemName: "",
                itemDescription: "",
                UOM: "",
                partCount: ""
            }
        ],
        PPICToProdGoodsList: [
            {
                itemCode: "",
                itemName: "",
                itemDescription: "",
                UOM: "",
                issueQty: 0
            }
        ]
    };

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
