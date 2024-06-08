import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
@Component({
    selector: "app-offtake",
    templateUrl: "./offtake.component.html"
})
export class OfftakeComponent implements OnInit {
    @Input() action: any = "";
    @Input() offTakeData: any = {};
    @Output() saveData = new EventEmitter<any>();
    form: any = new UntypedFormGroup({
        annualOffTake: new UntypedFormControl(0),
        offTakeFrequency: new UntypedFormControl(0),
        avgMonthlyOffTake: new UntypedFormControl(0),
        proposedBatchQty: new UntypedFormControl(0),
        processCAQty: new UntypedFormControl(0),
        toolingCAQty: new UntypedFormControl(0)
    });

    get f() {
        return this.form.controls;
    }
    constructor(public activeModal: NgbActiveModal, private toastService: ToastService) {}

    ngOnInit(): void {
        this.form.patchValue(this.offTakeData);
    }

    setAvgMonthlyOffTake() {
        this.f["avgMonthlyOffTake"].setValue(0);
        if (this.f["annualOffTake"].value && this.f["offTakeFrequency"].value) {
            this.f["avgMonthlyOffTake"].setValue(+this.f["annualOffTake"].value / +this.f["offTakeFrequency"].value);
        }
    }
    setProcessCAQty(ev: any) {
        this.f["processCAQty"].setValue(ev.target.value);
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.offTakeData);
    }

    dismissModel() {
        this.saveData.emit({data: this.form.value, key: "offTakeData"});
        this.toastService.success("Offtake Saved");
    }
}
