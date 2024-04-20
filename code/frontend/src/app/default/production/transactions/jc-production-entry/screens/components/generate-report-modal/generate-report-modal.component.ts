import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-generate-report-modal",
    templateUrl: "./generate-report-modal.component.html"
})
export class GenerateReportModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() generateReport: any = {};
    @Input() billFromLocationOptions: any = {};

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}

    ngOnInit(): void {
        if (this.generateReport.jobCardClosureDate) {
            this.generateReport.jobCardClosureDate = this.utilityService.getFormatDate(
                this.generateReport.jobCardClosureDate,
                "YYYY-MM-DD"
            );
        }
        if (this.billFromLocationOptions.length === 1) {
            this.generateReport.location = this.billFromLocationOptions[0].value;
        }
    }

    dismissModel() {
        this.activeModal.close(this.generateReport);
    }
}
