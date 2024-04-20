import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";

@Component({
    selector: "app-sku-gen-specs",
    templateUrl: "./sku-gen-specs.component.html"
})
export class SkuGenSpecsComponent implements OnInit {
    @Input() action: string = "";
    @Input() genSpecs: any = {};
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
        generalSpecifications: new UntypedFormControl("")
    });

    ngOnInit(): void {
        this.form.patchValue(this.genSpecs);
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

    reset() {
        this.form.reset();
        this.form.patchValue(this.genSpecs);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "genSpecs"});
        this.toastService.success("Specs (G) Saved");
    }
}
