import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {ProformaInvoicePrintScreenComponent} from "./proforma-invoice-print-screen.component";
import {ExportsPIComponent} from "../templates-PI/exports-pi/exports-pi.component";
import {ImportsPIComponent} from "../templates-PI/imports-pi/imports-pi.component";

const routes: Routes = [{path: "", component: ProformaInvoicePrintScreenComponent}];

@NgModule({
    declarations: [ProformaInvoicePrintScreenComponent, ExportsPIComponent, ImportsPIComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ProformaInvoicePrintScreenModule {}
