import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-so-terms-details",
    templateUrl: "./so-terms-details.component.html",
    styleUrls: ["./so-terms-details.component.scss"]
})
export class SoTermsDetailsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() selectedCustomerData: any = [];
    @Input() selectedCustomerBillingData: any = [];
    @Input() otherCharges: any = {};
    @Input() SOTermsArr: any = {};
    @Input() SOTermsData: any = {};
    @Input() billFromAddress: any = {};
    // @Input() billToAddress: any = {};
    @Input() customerBillingAddress: any = {};
    @Input() billFromLocation: any = "";
    @Input() billFromCompanyData: any = {};
    @Input() billFromLocationArr: any = [];
    @Input() customerShippingAddress: any = {};
    @Input() action: string = "edit";

    active: any = 1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    saveData(value: any) {
        if (value.key == "SOBillFrom") {
            this.billFromAddress = value.data;
            this.billFromLocation = value?.data?.billFromLocation;
            this.active = this.active + 1;
        }
        if (value.key == "SOBillTo") {
            // this.billToAddress = value.data;
            this.customerBillingAddress = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "SOShipTo") {
            this.customerShippingAddress = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "SOTerms") {
            this.SOTermsData = value.data;
            this.dismissModel();
        }
    }
    dismissModel() {
        let obj: any = {};
        // obj.billToAddress = this.billToAddress;
        obj.customerBillingAddress = this.customerBillingAddress;
        obj.billFromAddress = this.billFromAddress;
        obj.billFromLocation = this.billFromLocation;
        obj.customerShippingAddress = this.customerShippingAddress;
        obj.SOTermsData = this.SOTermsData;
        this.activeModal.close(obj);
    }
}
