import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ITEM_GEN_SPECS_FORM_ERRORS} from "@mocks/validations/purchase";
import {ToastService} from "@core/services";
import {QC_LEVEL_STATUS} from "@mocks/constant";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-qc-level",
    templateUrl: "./qc-level.component.html"
})
export class QCLevelComponent implements OnInit {
    @Input() action: string = "";
    @Input() qcLevelsObj: any = null;
    @Output() saveData = new EventEmitter<any>();

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    QCLevelsArr: any = QC_LEVEL_STATUS;

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        if (this.qcLevelsObj) {
            this.QCLevelsArr = this.QCLevelsArr.map((x: any) => {
                x.select = false;
                if (x.QCLNo == this.qcLevelsObj) {
                    x.select = true;
                }
                return x;
            });
        }
    }

    setSelectData(u: any, index: any) {
        this.qcLevelsObj = u?.QCLevels;
    }

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

    reset() {}

    dismissModel() {
        this.saveData.emit({data: this.qcLevelsObj, key: "qcLevelsObj"});
        this.toastService.success("QC Level Saved");
    }
}
