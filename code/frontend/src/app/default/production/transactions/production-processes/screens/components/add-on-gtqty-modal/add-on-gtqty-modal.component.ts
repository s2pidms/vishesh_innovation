import {Component, Input, OnInit, QueryList, ViewChildren} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {NgbdSortableHeader} from "@directives/sortable.directive";
import {ToastService, UtilityService} from "@core/services";

@Component({
    selector: "app-add-on-gtqty-modal",
    templateUrl: "./add-on-gtqty-modal.component.html"
})
export class AddOnGTQtyModalComponent implements OnInit {
    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

    @Input() inventoryItemsAmounts: any = 0;
    @Input() GTInputQuantity: any = 0;
    @Input() itemDetails: any = {};

    constructor(
        public activeModal: NgbActiveModal,
        private utilityService: UtilityService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {}

    setGTQty() {
        if (this.itemDetails.UOM == "RL" || this.itemDetails.UOM == "SHT") {
            // let MRPQuantity =
            //     this.utilityService.setConversion({
            //         UOM: this.itemDetails.UOM,
            //         quantity: this.GTInputQuantity,
            //         primaryUnit: this.itemDetails.primaryUnit,
            //         secondaryUnit: this.itemDetails.secondaryUnit,
            //         primaryToSecondaryConversion: this.itemDetails.primaryToSecondaryConversion,
            //         secondaryToPrimaryConversion: this.itemDetails.secondaryToPrimaryConversion
            //     }) || 0;

            let MRPQuantity = 0;
            if (this.itemDetails?.primaryToSecondaryConversion) {
                MRPQuantity = +(+this.GTInputQuantity * +this.itemDetails.primaryToSecondaryConversion).toFixed(2);
            }

            if (+MRPQuantity > this.inventoryItemsAmounts) {
                this.toastService.warning("GT Input Quantity Should not be greater than Total Inventory Qty. !");
                this.GTInputQuantity = 0;
                return;
            }
        } else {
            if (this.GTInputQuantity > this.inventoryItemsAmounts) {
                this.toastService.warning("GT Input Quantity Should not be greater than Total Inventory Qty. !");
                this.GTInputQuantity = 0;
                return;
            }
        }
    }

    dismissModel() {
        if (!this.GTInputQuantity) {
            this.toastService.warning("Please Fill GT Input Quantity Qty. !");
            return;
        }
        this.activeModal.close(this.GTInputQuantity);
    }
}
