import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastService} from "@core/services";
import {ValidationService} from "@core/components";
import {DetailsOfCustomersListComponent} from "@shared/modals";

@Component({
    selector: "app-sku-customer-injection-molding",
    templateUrl: "./sku-customer-injection-molding.component.html"
})
export class SKUCustomerInjectionMoldingComponent implements OnInit {
    @Input() action: string = "";
    @Input() customerInfoArray: any = [];
    @Input() cusInfo: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 6;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    selectedCustomerDetails = {};
    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        customerName: new UntypedFormControl(null, [Validators.required]),
        customer: new UntypedFormControl(null),
        customerPartDescription: new UntypedFormControl(null, [Validators.required]),
        customerPartNo: new UntypedFormControl(null, [Validators.required]),
        customerCurrency: new UntypedFormControl(null),
        standardSellingRate: new UntypedFormControl(null)
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private toastService: ToastService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.collection = this.customerInfoArray.length;
    }

    eventHeader(event: any) {
        switch (event.key) {
            case "SEARCH":
                this.search = event.value;
                break;
            case "EXCEL":
                // this.excelDownload(this.customerInfoArray);
                break;
            case "PAGE":
                this.page = event.value;
                break;
            default:
                break;
        }
    }

    findFormErrors = [
        {
            message: "Customer Name",
            key: "customerName"
        },
        {
            message: "Customer Part Description.",
            key: "customerPartDescription"
        },
        {
            message: "Customer Part No.",
            key: "customerPartNo"
        }
    ];

    addCustomer() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }
        let formData = this.form.value;
        if (!formData.standardSellingRate) {
            this.toastService.warning("Rate/U1 is required !");
            return;
        }
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.customerInfoArray.splice(formData.index, 1, formData);
        } else {
            // create
            this.customerInfoArray.push(formData);
        }
        this.collection = this.customerInfoArray.length;
        this.selectedCustomerDetails = {};
        this.form.reset();
    }

    patchItem(formData: any, index: number, action: string) {
        formData.index = index;
        this.form.patchValue(formData);
        if (action == "view") {
            this.btnDisable = true;
            this.form.disable();
        } else {
            this.form.enable();
            this.btnDisable = false;
        }
    }

    deleteItem(i: number) {
        if (this.action != "view") {
            this.customerInfoArray.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.customerInfoArray.length;
        }
    }

    setSupplierCurrency(ev: any) {
        if (ev.currency) {
            this.form.controls["customerCurrency"].setValue(ev?.currency);
        }
        if (ev.label) {
            this.form.controls["customerName"].setValue(ev?.label);
        }
    }
    openCustomersDetailsModal() {
        const modalRef = this.modalService.open(DetailsOfCustomersListComponent, {
            centered: true,
            size: "xl",
            backdrop: "static",
            keyboard: false
        });
        modalRef.componentInstance.action = this.action == "edit" ? "create" : this.action;
        modalRef.componentInstance.selectedCustomerDetails = this.selectedCustomerDetails;
        modalRef.componentInstance.customerOptions = this.cusInfo;
        modalRef.componentInstance.customer = this.form.controls["customer"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["customer"].setValue(success?.selectedCustomerDetails?._id);
                    this.setSupplierCurrency(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
