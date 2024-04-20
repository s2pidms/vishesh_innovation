import {Component, Input, OnInit} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-min-of-meeting-attendees",
    templateUrl: "./min-of-meeting-attendees.component.html",
    styles: [
        `
            .form-text-area {
                height: auto !important;
            }
        `
    ]
})
export class MinOfMeetingAttendeesComponent implements OnInit {
    @Input() action: any = "";
    @Input() attendedBy: any = null;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
    }
    dismissModel() {
        this.activeModal.close(this.attendedBy);
    }
}
