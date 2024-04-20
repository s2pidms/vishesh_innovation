import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SalesOrderService} from "@services/sales";

import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {SpinnerService} from "@core/services";
@Component({
    selector: "app-cancel-so-line-details",
    templateUrl: "./cancel-so-line-details.component.html"
})
export class CancelSoLineDetailsComponent implements OnInit {
    @Input() action: string = "";
    @Input() condition: any = "";
    @Input() tableData: any = {};

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    itemId: string = "";

    constructor(
        public activeModal: NgbActiveModal,
        private router: Router,
        private validationService: ValidationService,
        private toastService: ToastService,
        private spinner: SpinnerService,
        private salesService: SalesOrderService
    ) {}
    form = new UntypedFormGroup({
        canceledReason: new UntypedFormControl("", [Validators.required])
    });

    findFormErrors = [
        {
            message: "Cancel Reason is Required",
            key: "canceledReason"
        }
    ];

    ngOnInit(): void {
        this.collection = this.tableData.length;
        if (this.action == "view") {
            this.form.disable();
        }
    }

    save() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }
        this.spinner.show();
        let payload = this.tableData;
        payload.lineStatus = "Cancelled";
        payload.canceledReason = this.form.value.canceledReason;
        payload.canceledQty = this.tableData.balancedQty;
        payload.balancedQty = 0;
        this.salesService.updateSODetailsLineStatusById(this.tableData._id, payload).subscribe(success => {
            this.spinner.hide();
            this.toastService.success(success.message);
            this.activeModal.close();
        });
    }
}
