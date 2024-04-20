import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-mrn-remarks-modal",
    templateUrl: "./mrn-remarks-modal.component.html"
})
export class MrnRemarksModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() MRNRemarks: any = "";
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
                // this.excelDownload(this.customerContactInfoArray);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    dismissModel() {
        this.saveData.emit({data: this.MRNRemarks, key: "MRNRemarks"});
        this.toastService.success("MRN Remarks Saved");
    }
}
