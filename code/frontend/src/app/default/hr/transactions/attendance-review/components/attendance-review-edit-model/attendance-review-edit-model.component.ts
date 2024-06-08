import {Component, Input, OnInit} from "@angular/core";
import {UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-attendance-review-edit-model",
    templateUrl: "./attendance-review-edit-model.component.html"
})
export class AttendanceReviewEditModelComponent implements OnInit {
    @Input() attendanceData: any = {};

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}

    ngOnInit(): void {}

    setAttendance() {
        this.attendanceData.LOPDiff =
            this.attendanceData.monthDays -
            (this.attendanceData.paidLeaves +
                this.attendanceData.presentDays +
                this.attendanceData.weeklyOff +
                this.attendanceData.ODDays +
                this.attendanceData.paidHolidays);
    }

    dismissModel() {
        this.activeModal.close(this.attendanceData);
    }
}
