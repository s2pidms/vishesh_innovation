import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService, UtilityService} from "@core/services";
import {ValidationService} from "@core/components";
import {TRAINING_MEDIUM, TRAINING_PLANNER_STATUS} from "@mocks/constant";

@Component({
    selector: "app-invoice-payment-modal",
    templateUrl: "./invoice-payment-modal.component.html"
})
export class InvoicePaymentModalComponent implements OnInit {
    @Input() action: string = "";
    @Input() totalAmountWithTax: number = 0;
    @Input() invoicePaymentArr: any = [];
    @Input() paymentMethod: any = [];
    statusArr: any = TRAINING_PLANNER_STATUS;
    projectsOptions: any = [];
    trainingMedium: any = TRAINING_MEDIUM;
    patchItemAction: string = "create";
    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    totalInvoicePayment: number = 0;

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        receivedAmount: new UntypedFormControl(null),
        receivedDate: new UntypedFormControl(null),
        invoiceDiscount: new UntypedFormControl(null),
        TDSAmount: new UntypedFormControl(null),
        paymentMode: new UntypedFormControl(null)
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private utilityService: UtilityService
    ) {}

    ngOnInit(): void {
        this.collection = this.invoicePaymentArr.length;
        if (["view"].includes(this.action)) {
            this.form.disable();
        }
    }

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

    addCustomer() {
        let formData = this.form.value;
        if (!formData.receivedAmount) {
            this.toastService.warning("Received Amount is required !");
            return;
        }

        let totalAmount =
            (+formData.receivedAmount ?? 0) + (+formData.invoiceDiscount ?? 0) + (+formData.TDSAmount ?? 0);

        if (this.invoicePaymentArr.length > 0 && this.patchItemAction == "create") {
            this.totalInvoicePayment = this.invoicePaymentArr
                .map((x: any) => +x?.receivedAmount + +x?.invoiceDiscount + +x?.TDSAmount)
                .reduce((a: any, c: any) => +a + +c, 0);
        } else if (this.patchItemAction == "edit") {
            this.totalInvoicePayment = this.invoicePaymentArr
                .filter((y: any) => y?.index != formData?.index)
                .map((x: any) => +x?.receivedAmount + +x?.invoiceDiscount + +x?.TDSAmount)
                .reduce((a: any, c: any) => +a + +c, 0);
        }
        {
        }

        if (+totalAmount + +this.totalInvoicePayment > +this.totalAmountWithTax) {
            this.toastService.warning("Total Amount should be less than Invoice Amount !");
            return;
        }

        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.invoicePaymentArr.splice(formData.index, 1, formData);
        } else {
            // create
            this.invoicePaymentArr.push(formData);
        }
        this.collection = this.invoicePaymentArr.length;
        this.projectsOptions = [];
        this.form.reset();
    }

    patchItem(formData: any, index: number, action: string) {
        this.patchItemAction = action;
        if (this.action != "view") {
            formData.index = index + (this.page - 1) * this.pageSize;
            if (formData.receivedDate) {
                formData.receivedDate = this.utilityService.getFormatDate(formData.receivedDate, "YYYY-MM-DD");
            }
            this.form.patchValue(formData);
            if (action == "view") {
                this.btnDisable = true;
                this.form.disable();
            } else {
                this.form.enable();
                this.btnDisable = false;
            }
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.invoicePaymentArr.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.invoicePaymentArr.length;
        }
    }

    dismissModal() {
        this.activeModal.close(this.invoicePaymentArr);
    }
}
