import {Component, OnInit, Input, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";

@Component({
    selector: "app-job-work-order-address-modal",
    templateUrl: "./job-work-order-address-modal.component.html",
    styleUrls: ["./job-work-order-address-modal.component.scss"]
})
export class JobWorkOrderAddressModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() selectedJobWorker: any = [];
    @Input() otherCharges: any = {};
    @Input() dispatchDetails: any = {};
    @Input() SOTermsArr: any = {};
    @Input() SOTermsData: any = {};
    @Input() billFromJobWorker: any = {};
    @Input() billToCompany: any = {};
    @Input() billFromCompanyData: any = {};
    @Input() shipFromJobWorker: any = {};
    @Input() shipToCompany: any = {};
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
        if (value.key == "billTo") {
            this.billToCompany = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "shipTo") {
            this.shipToCompany = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "billFrom") {
            this.billFromJobWorker = value.data;
            this.active = this.active + 1;
        }
        if (value.key == "shipFrom") {
            this.shipFromJobWorker = value.data;
            this.dismissModel();
        }
    }
    dismissModel() {
        let obj: any = {};
        obj.billToCompany = this.billToCompany;
        obj.billFromJobWorker = this.billFromJobWorker;
        obj.shipFromJobWorker = this.shipFromJobWorker;
        obj.shipToCompany = this.shipToCompany;
        this.activeModal.close(obj);
    }
}
