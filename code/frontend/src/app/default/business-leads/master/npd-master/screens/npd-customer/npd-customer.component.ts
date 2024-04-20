import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ValidationService} from "@core/components";
import {DetailsOfCustomersListComponent} from "@shared/modals";

@Component({
    selector: "app-npd-customer",
    templateUrl: "./npd-customer.component.html"
})
export class NpdCustomerComponent implements OnInit {
    @Input() action: string = "";
    @Input() customerInfoArray: any = [];
    @Input() customerNPDArray: any = [];
    @Input() selectedCustomerData: any = {};
    selectedCustomerDetails = {};
    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        customerName: new UntypedFormControl(null, [Validators.required]),
        reference: new UntypedFormControl(null),
        referenceModel: new UntypedFormControl(null),
        customerPartNo: new UntypedFormControl(null),
        customerCurrency: new UntypedFormControl(null),
        standardSellingRate: new UntypedFormControl(null),
        monthlyOffTake: new UntypedFormControl(null),
        PONo: new UntypedFormControl(null),
        PODate: new UntypedFormControl(null),
        POValidDate: new UntypedFormControl(null)
    });

    constructor(
        public activeModal: NgbActiveModal,
        private validationService: ValidationService,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        this.collection = this.customerInfoArray.length;
        if (this.customerInfoArray.length == 0) {
            let obj = {
                customerName: this.selectedCustomerData.name ?? null,
                reference: this.selectedCustomerData.reference ?? null,
                customerCurrency: this.selectedCustomerData.customerCurrency ?? null,
                customerPartNo: this.selectedCustomerData.customerPartNo ?? null,
                monthlyOffTake: this.selectedCustomerData.monthlyOffTakeQty ?? null,
                referenceModel: this.selectedCustomerData.referenceModel ?? null
            };
            this.form.patchValue(obj);
        }
        if (this.action == "view" || this.action == "Converted to SKU") {
            this.form.disable();
        }
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
        }
    ];

    addCustomer() {
        if (this.validationService.checkErrors(this.form, this.findFormErrors)) {
            return;
        }
        let formData = this.form.value;
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
        if (!["Converted to SKU", "view"].includes(this.action)) {
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
    }

    deleteItem(i: number) {
        if (!["Converted to SKU", "view"].includes(this.action)) {
            this.customerInfoArray.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.customerInfoArray.length;
        }
    }

    setCustomerDetails(ev: any) {
        let obj = {
            customerName: ev?.name ?? null,
            reference: ev?._id ?? null,
            customerCurrency: ev?.currency ?? null,
            referenceModel: ev?.type ?? null,
            customerPartNo: null
        };
        this.form.patchValue(obj);
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
        modalRef.componentInstance.customerOptions = this.customerNPDArray;
        modalRef.componentInstance.customer = this.form.controls["reference"].value;

        modalRef.result.then(
            (success: any) => {
                if (success) {
                    console.log("success", success);
                    this.selectedCustomerDetails = success?.selectedCustomerDetails;
                    this.form.controls["reference"].setValue(success?.selectedCustomerDetails?._id);
                    this.setCustomerDetails(this.selectedCustomerDetails);
                }
            },
            (reason: any) => {}
        );
    }
}
