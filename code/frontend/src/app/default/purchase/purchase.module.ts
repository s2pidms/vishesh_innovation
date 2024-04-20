import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PurchaseRoutingModule} from "./purchase-routing.module";
import {PurchaseComponent} from "./purchase.component";
import {SharedModule} from "@shared/shared.module";
import {AddSuppliersBankDetailsComponent} from "./modals/add-suppliers-bank-details/add-suppliers-bank-details.component";
import {AddSuppliersAddressComponent} from "./modals/add-suppliers-address/add-suppliers-address.component";

@NgModule({
    declarations: [PurchaseComponent, AddSuppliersBankDetailsComponent, AddSuppliersAddressComponent],
    imports: [CommonModule, PurchaseRoutingModule, SharedModule]
})
export class PurchaseModule {}
