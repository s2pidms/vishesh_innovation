import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PayrollRoutingModule} from "./payroll-routing.module";
import {PayrollComponent} from "./payroll.component";
import {SharedModule} from "@shared/shared.module";
import {PayrollEditModelComponent} from "./components/payroll-edit-model/payroll-edit-model.component";

@NgModule({
    declarations: [PayrollComponent, PayrollEditModelComponent],
    imports: [CommonModule, PayrollRoutingModule, SharedModule]
})
export class PayrollModule {}
