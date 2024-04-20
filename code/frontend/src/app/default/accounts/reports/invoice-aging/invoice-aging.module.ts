import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InvoiceAgingComponent} from "./invoice-aging.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: InvoiceAgingComponent}];

@NgModule({
    declarations: [InvoiceAgingComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InvoiceAgingModule {}
