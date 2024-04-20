import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CHILD_ITEM_SERVICE_PROVIDER_DETAILS_FORM_ERRORS} from "@mocks/validations/planning/childItem.validation";
import {ValidationService} from "@core/components";

@Component({
    selector: "app-service-provider-details",
    templateUrl: "./service-provider-details.component.html"
})
export class ServiceProviderDetailsComponent implements OnInit {
    @Input() action: string = "";
    @Input() ExtServiceProviderName: any = [];
    @Input() serviceProviderDetails: any = [];
    @Input() paymentTerms: any = [];

    btnDisable = false;
    page: number = 1;
    pageSize: number = 4;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;

    constructor(public activeModal: NgbActiveModal, private validationService: ValidationService) {}
    form = new UntypedFormGroup({
        index: new UntypedFormControl(-1),
        extServiceProvider: new UntypedFormControl(null, [Validators.required]),
        extServiceProviderName: new UntypedFormControl(null),
        manufacturingCost: new UntypedFormControl(null, [Validators.required]),
        paymentTerms: new UntypedFormControl(null, [Validators.required])
    });

    ngOnInit(): void {
        this.collection = this.serviceProviderDetails.length;
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

    addSuppliers() {
        if (this.validationService.checkErrors(this.form, CHILD_ITEM_SERVICE_PROVIDER_DETAILS_FORM_ERRORS)) {
            return;
        }
        let formData = this.form.value;
        if ((formData.index || formData.index == 0) && formData.index >= 0) {
            // edit
            this.serviceProviderDetails.splice(formData.index, 1, formData);
        } else {
            // create
            this.serviceProviderDetails.push(formData);
        }
        this.collection = this.serviceProviderDetails.length;
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
            this.serviceProviderDetails.splice(i + (this.page - 1) * this.pageSize, 1);
            this.collection = this.serviceProviderDetails.length;
        }
    }

    setSupplierCurrency(ev: any) {
        this.form.controls["extServiceProviderName"].setValue(ev.ESPName);
    }
}
