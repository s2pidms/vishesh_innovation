import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@shared/directives";

@Component({
    selector: "app-confirm-delete",
    templateUrl: "./confirm-delete.component.html"
})
export class ConfirmDeleteComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() heading: string = "";
    @Input() confirmText: string = "";
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
    dismissModal(action: string) {
        let payload: any = {
            title: action
        };
        this.activeModal.close(payload);
    }
}
