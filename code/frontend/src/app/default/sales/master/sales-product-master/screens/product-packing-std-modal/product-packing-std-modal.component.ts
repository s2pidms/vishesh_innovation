import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {UtilityService} from "@core/services";

@Component({
    selector: "app-product-packing-std-modal",
    templateUrl: "./product-packing-std-modal.component.html"
})
export class ProductPackingStdModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;
    @Input() packingStdDetailsData: any = {};
    packingData: any = {};
    collection: number = 0;
    constructor(public activeModal: NgbActiveModal, private utilityService: UtilityService) {}

    ngOnInit(): void {
        this.packingData = JSON.parse(JSON.stringify(this.packingStdDetailsData));
    }

    reset() {
        this.packingStdDetailsData = JSON.parse(JSON.stringify(this.packingData));
    }

    dismissModel() {
        this.activeModal.close(this.packingStdDetailsData);
    }
    
}
