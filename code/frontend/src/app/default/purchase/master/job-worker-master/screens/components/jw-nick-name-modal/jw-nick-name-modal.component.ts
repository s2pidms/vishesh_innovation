import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-jw-nick-name-modal",
    templateUrl: "./jw-nick-name-modal.component.html"
})
export class JwNickNameModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() jobWorkerNickName: string = "";
    @Input() action: string = "";

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    @Input() supplierBankDetailsArray: any = [];

    constructor(public activeModal: NgbActiveModal) {}

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

    findFormErrors = [
        {
            message: "job Worker Nick Name is required",
            key: "jobWorkerNickName"
        }
    ];

    save() {
        // if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
        //     return;
        // }

        this.activeModal.close(this.jobWorkerNickName);
    }
}
