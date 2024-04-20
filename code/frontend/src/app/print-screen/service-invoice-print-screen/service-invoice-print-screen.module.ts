import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {ServiceInvoicePrintScreenComponent} from "./service-invoice-print-screen.component";

const routes: Routes = [{path: "", component: ServiceInvoicePrintScreenComponent}];

@NgModule({
    declarations: [ServiceInvoicePrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ServiceInvoicePrintScreenModule {}
