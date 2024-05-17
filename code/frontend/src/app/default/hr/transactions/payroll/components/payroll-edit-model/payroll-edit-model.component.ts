import {Component, Input, OnInit} from "@angular/core";
import {UtilityService} from "@core/services";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-payroll-edit-model",
    templateUrl: "./payroll-edit-model.component.html"
})
export class PayrollEditModelComponent implements OnInit {
    @Input() payrollData: any = {};
    @Input() action: any = "";

    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}

    ngOnInit(): void {}

    setGross() {
        this.payrollData.gross = this.payrollData.basic + this.payrollData.HRA + this.payrollData.CCA;
    }

    setNetPayable() {
        this.payrollData.netPayable =
            this.payrollData.gross -
            (this.payrollData.PF +
                this.payrollData.ESIC +
                this.payrollData.TDS +
                this.payrollData.advSalary +
                this.payrollData.PT);
    }

    dismissModel() {
        this.activeModal.close(this.payrollData);
    }
}
