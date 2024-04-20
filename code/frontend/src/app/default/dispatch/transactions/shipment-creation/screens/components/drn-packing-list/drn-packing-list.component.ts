import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-drn-packing-list",
    templateUrl: "./drn-packing-list.component.html"
})
export class DrnPackingListComponent implements OnInit {
    @Input() action: string = "";
    @Input() packingList: any = "";
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}
    form = new UntypedFormGroup({
        packingList: new UntypedFormControl("")
    });

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
        this.saveData.emit({data: this.packingList, key: "packingList"});
        this.toastService.success("Packing List Saved");
    }
}
