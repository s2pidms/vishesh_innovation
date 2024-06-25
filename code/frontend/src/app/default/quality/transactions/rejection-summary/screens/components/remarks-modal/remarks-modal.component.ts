import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-remarks-modal",
    templateUrl: "./remarks-modal.component.html",
    styleUrls: ["./remarks-modal.component.scss"]
})
export class RemarksModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "create";
    @Input() rejectRemarks: any = [];
    // @Input() shiftOptions: any = [];
    // @Input() IPQADetails: any = {};

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}
    ngOnInit(): void {
        console.log("rejectRemarks", this.rejectRemarks);

        if (!this.rejectRemarks || this.rejectRemarks.length == 0) {
            this.rejectRemarks = [];
            this.rejectRemarks.push({
                defect: "",
                remarks: "",
                remarksBy: null
            });
        }
    }

    deleteTableRow() {
        if (this.rejectRemarks?.length > 1) {
            this.rejectRemarks.pop();
        }
    }
    addTableRow() {
        this.rejectRemarks.push({
            defect: "",
            remarks: "",
            remarksBy: null
        });
    }

    dismissModel() {
        this.activeModal.close({
            rejectRemarks: this.rejectRemarks
        });
    }
}
