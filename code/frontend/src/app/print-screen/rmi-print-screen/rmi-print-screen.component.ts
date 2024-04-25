import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "@core/services";
import {MaterialReleaseNoteService} from "@services/quality";
import {PDIREntryService} from "@services/quality";

@Component({
    selector: "app-rmi-print-screen",
    templateUrl: "./rmi-print-screen.component.html",
    styleUrls: ["./rmi-print-screen.component.scss"]
})
export class RmiPrintScreenComponent {
    tableData: any = [];
    pdfAction: any = "";
    logoUrl: any = "";
    template: string = "PI Exports";
    isChecked: boolean = true;
    constructor(
        private materialReleaseNoteService: MaterialReleaseNoteService,
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
        this.materialReleaseNoteService.getByMRNIdForRMInspection({MRNId: id}).subscribe(success => {
            this.tableData = success?.MRNData;
            this.logoUrl = success?.companyData?.logo;
            this.spinner.hide();
        });
    }
    windowPrint() {
        window.print();
    }
}
