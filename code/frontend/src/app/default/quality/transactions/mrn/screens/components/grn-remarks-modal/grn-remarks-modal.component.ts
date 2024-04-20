import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-grn-remarks-modal",
    templateUrl: "./grn-remarks-modal.component.html"
})
export class GrnRemarksModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() GRNRemarks: any = "";
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}

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

    dismissModel() {
        this.saveData.emit({data: this.GRNRemarks, key: "GRNRemarks"});
        this.toastService.success("GRN Remarks Saved");
    }
}
