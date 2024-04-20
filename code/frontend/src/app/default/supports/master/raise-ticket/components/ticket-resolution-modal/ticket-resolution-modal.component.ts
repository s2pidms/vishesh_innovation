import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-ticket-resolution-modal",
    templateUrl: "./ticket-resolution-modal.component.html"
})
export class TicketResolutionModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() issueResolution: any = {};
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {}

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    reset() {
        this.issueResolution = this.issueResolution;
    }

    dismissModel() {
        this.saveData.emit({data: this.issueResolution, key: "issueResolution"});
        this.toastService.success("Remarks Saved");
    }
}
