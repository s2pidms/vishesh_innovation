import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {DISCOUNT_TYPE} from "@mocks/constant";

@Component({
    selector: "app-apply-discount",
    templateUrl: "./apply-discount.component.html"
})
export class ApplyDiscountComponent implements OnInit {
    @Input() action: any = "edit";
    @Input() discountInfo: any = {};

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    discountTypeOptions: any = DISCOUNT_TYPE;
    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}
    form = new UntypedFormGroup({
        discountType: new UntypedFormControl(null),
        discountValue: new UntypedFormControl(0),
        discountDescription: new UntypedFormControl(null),
        usageLimit: new UntypedFormControl(0),
        discountStartDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        discountEndDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD")),
        minPurchaseQty: new UntypedFormControl(0),
        minPurchaseAmt: new UntypedFormControl(0)
    });

    ngOnInit(): void {
        if (this.discountInfo?.discountStartDate) {
            this.discountInfo.discountStartDate = this.utilityService.getFormatDate(
                this.discountInfo?.discountStartDate,
                "YYYY-MM-DD"
            );
        }
        if (this.discountInfo?.discountEndDate) {
            this.discountInfo.discountEndDate = this.utilityService.getFormatDate(
                this.discountInfo?.discountEndDate,
                "YYYY-MM-DD"
            );
        }

        this.form.patchValue(this.discountInfo);
        if (this.action == "view") {
            this.form.disable();
        }
    }

    get f() {
        return this.form.controls;
    }

    reset() {
        this.form.reset();
        this.form.patchValue(this.discountInfo);
    }

    dismissModel() {
        // if (this.validationService.checkErrors(this.form, EMPLOYEE_FORM_ERRORS)) {
        //     return;
        // }
        this.discountInfo = this.form.value;
        this.activeModal.close(this.discountInfo);
        this.toastService.success("Discount Saved");
    }
}
