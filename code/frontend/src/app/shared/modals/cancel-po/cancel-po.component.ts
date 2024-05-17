import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {ToastService} from "@core/services";

@Component({
    selector: "app-cancel-po",
    templateUrl: "./cancel-po.component.html"
})
export class CancelPoComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() action: string = "";
    @Input() heading: string = "";
    @Input() cancelText: string = "";
    @Input() cancelTextTwo: string = "";
    @Input() forNPDReview: any = null;
    @Input() labelText: any = "";
    @Input() HSNFlag: any = false;
    reasonToConvert: any = "";

    btnDisable = false;
    page: number = 1;
    pageSize: number = 5;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {}

    dismissModel(title: string) {
        this.activeModal.close(title);
    }
    dismissModelForNPD(title: string) {
        if (title == "Yes" && !this.reasonToConvert) {
            this.toastService.warning(`${this.labelText} is Required`);
            return;
        }
        let payload: any = {
            title: title,
            reasonToConvert: this.reasonToConvert
        };
        this.activeModal.close(payload);
    }
}
