import {Component, OnInit} from "@angular/core";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {SpinnerService} from "@core/services";
import {ICustomerAddressMasterData} from "@mocks/models/accounts/masters";
import {CustomersService} from "@services/sales";

@Component({
    selector: "app-customer-address-form",
    templateUrl: "./customer-address-form.component.html",
    styleUrls: ["./customer-address-form.component.scss"]
})
export class CustomerAddressFormComponent implements OnInit {
    customerShippingAddressArray: any = [];
    customerOptions: ICustomerAddressMasterData[] = [];
    shipAddressObj: any = {};
    page: number = 1;
    pageSize: number = 1;
    collection: number = 0;

    constructor(private customerService: CustomersService, private spinner: SpinnerService) {}

    form = new UntypedFormGroup({
        zone: new UntypedFormControl(""),
        GSTIN: new UntypedFormControl(""),
        customerCode: new UntypedFormControl(""),
        customerName: new UntypedFormControl(""),
        customerBillingAddress: new UntypedFormGroup({
            line1: new UntypedFormControl(""),
            line2: new UntypedFormControl(""),
            line3: new UntypedFormControl(""),
            line4: new UntypedFormControl(""),
            state: new UntypedFormControl(""),
            city: new UntypedFormControl(""),
            pinCode: new UntypedFormControl(""),
            country: new UntypedFormControl("")
        })
    });

    get BillingAddress() {
        return this.form.get("customerBillingAddress") as UntypedFormGroup;
    }
    trackByFn(index: number, item: any) {
        return item?._id;
    }

    ngOnInit(): void {
        this.getInitialData();
    }

    getInitialData() {
        this.spinner.show();
        this.customerService.getAllCustomersWithAddress({}).subscribe(success => {
            this.customerOptions = success;
            this.spinner.hide();
        });
    }

    setCustomersDetails(ev: any) {
        this.form.controls["customerCode"].setValue(ev?.customerCode);
        this.form.controls["customerName"].setValue(ev?.customerName);
        this.form.controls["zone"].setValue(ev?.region);
        this.form.controls["GSTIN"].setValue(ev?.GSTIN);
        this.shipAddressObj = {
            line1: ev?.customerBillingAddress[0]?.line1,
            line2: ev?.customerBillingAddress[0]?.line2,
            line3: ev?.customerBillingAddress[0]?.line3,
            line4: ev?.customerBillingAddress[0]?.line4,
            state: ev?.customerBillingAddress[0]?.state,
            city: ev?.customerBillingAddress[0]?.city,
            pinCode: ev?.customerBillingAddress[0]?.pinCode,
            country: ev?.customerBillingAddress[0]?.country
        };
        this.BillingAddress.setValue(this.shipAddressObj);
        this.customerShippingAddressArray = ev?.customerShippingAddress;
        this.collection = this.customerShippingAddressArray.length;
    }

    BillAddressCopyToClipboard() {
        let billingAddress = `${this.shipAddressObj.line1 ? this.shipAddressObj.line1 : ""} ,${
            this.shipAddressObj.line2 ? this.shipAddressObj.line2 : ""
        },${this.shipAddressObj.line3 ? this.shipAddressObj.line3 : ""},${
            this.shipAddressObj.line3 ? this.shipAddressObj.line4 : ""
        },${this.shipAddressObj.city ? this.shipAddressObj.city : ""},${
            this.shipAddressObj.pinCode ? this.shipAddressObj.pinCode : ""
        },
    ${this.shipAddressObj.state ? this.shipAddressObj.state : ""},${
            this.shipAddressObj.country ? this.shipAddressObj.country : ""
        }`;
        navigator.clipboard.writeText(billingAddress);
    }
    ShipAddressCopyToClipboard(item: any) {
        let shippingAddress = `${item.line1 ? item.line1 : ""} ,${item.line2 ? item.line2 : ""},${
            item.line3 ? item.line3 : ""
        },${item.line3 ? item.line4 : ""},${item.city ? item.city : ""},${item.pinCode ? item.pinCode : ""},
    ${item.state ? item.state : ""},${item.country ? item.country : ""}`;
        navigator.clipboard.writeText(shippingAddress);
    }
}
