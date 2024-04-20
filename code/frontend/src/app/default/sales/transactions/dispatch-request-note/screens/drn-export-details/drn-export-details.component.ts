import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {DRN_EXPORTS_DETAILS_FORM_ERRORS} from "@mocks/validations/sales";

@Component({
    selector: "app-drn-export-details",
    templateUrl: "./drn-export-details.component.html"
})
export class DrnExportDetailsComponent implements OnInit {
    @Input() ExportDetailsData: any = {};
    @Input() exportDetailsArray: any = [];
    @Input() action: string = "";
    @Input() customerCurrency: any = "";

    form = new UntypedFormGroup({
        exportsInvoiceNo: new UntypedFormControl(null, [Validators.required]),
        exportsInvoiceDate: new UntypedFormControl(this.utilityService.getTodayDate("YYYY-MM-DD"), [
            Validators.required
        ]),
        exportsInvoiceTotalValue: new UntypedFormControl(null, [Validators.required]),
        exchangeRate: new UntypedFormControl(null, [Validators.required]),
        modeOfTransport: new UntypedFormControl(null, [Validators.required]),
        frightTerms: new UntypedFormControl(null, [Validators.required]),
        destination: new UntypedFormControl(null, [Validators.required]),
        finalDestination: new UntypedFormControl(null, [Validators.required])
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.form.patchValue(this.ExportDetailsData);
        if (this.action != "create") {
            this.form.disable();
        }
    }

    reset() {
        this.form.patchValue(this.ExportDetailsData);
    }

    dismissModel() {
        if (this.validationService.checkErrors(this.form, DRN_EXPORTS_DETAILS_FORM_ERRORS)) {
            return;
        }
        this.activeModal.close(this.form.value);
    }
}
