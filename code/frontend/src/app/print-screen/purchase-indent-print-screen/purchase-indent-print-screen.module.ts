import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PurchaseIndentPrintScreenComponent} from "./purchase-indent-print-screen.component";
import {PISchedulePrintScreenComponent} from "./screen/pi-schedule-print-screen/pi-schedule-print-screen.component";
import {SharedModule} from "@shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{path: "", component: PurchaseIndentPrintScreenComponent}];
@NgModule({
    declarations: [PurchaseIndentPrintScreenComponent, PISchedulePrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseIndentPrintScreenModule {}
