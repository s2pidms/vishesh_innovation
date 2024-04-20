import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesOrderStatusComponent} from "./sales-order-status.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: SalesOrderStatusComponent}];

@NgModule({
    declarations: [SalesOrderStatusComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SalesOrderStatusModule {}
