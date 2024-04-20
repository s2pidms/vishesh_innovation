import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {OperatingExpensesFormComponent} from "./screens/operating-expenses-form/operating-expenses-form.component";
import {OpexAllocationModalComponent} from "./screens/opex-allocation-modal/opex-allocation-modal.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {path: "form", component: OperatingExpensesFormComponent}
];

@NgModule({
    declarations: [OperatingExpensesFormComponent, OpexAllocationModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class OperatingExpensesModule {}
