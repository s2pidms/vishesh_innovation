import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-view-drn-terms",
    templateUrl: "./view-drn-terms.component.html",
    styleUrls: ["./view-drn-terms.component.scss"]
})
export class ViewDrnTermsComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() selectedCustomerData: any = [];
    @Input() otherCharges: any = {};
    @Input() dispatchDetails: any = {};
    @Input() SOTermsArr: any = {};
    @Input() SOTermsData: any = {};
    @Input() billFromAddress: any = {};
    @Input() billToAddress: any = {};
    @Input() billFromLocation: any = "";
    @Input() billFromCompanyData: any = {};
    @Input() billFromLocationArr: any = [];
    @Input() customerShippingAddress: any = {};
    @Input() action: string = "edit";

    page: number = 1;
    pageSize: number = 8;
    collection: number = 0;
    search: string = "";
    column: string = "createdAt";
    direction: number = -1;
    active: any = 1;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}

    saveData(value: any) {
        if (value.key == "SOBillFrom") {
            this.billFromAddress = value.data;
            this.billFromLocation = value?.data?.billFromLocation;
            this.active = this.active + 1;
        }
        if (value.key == "SOShipTo") {
            this.customerShippingAddress = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "SOBillTo") {
            this.billToAddress = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "SOTerms") {
            this.SOTermsData = value.data;
            this.dismissModel();
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.billToAddress = this.billToAddress;
        obj.billFromAddress = this.billFromAddress;
        obj.billFromLocation = this.billFromLocation;
        obj.customerShippingAddress = this.customerShippingAddress;
        obj.SOTermsData = this.SOTermsData;
        this.activeModal.close(obj);
    }
}
