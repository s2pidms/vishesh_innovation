import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {PurchaseIndentComponent} from "./purchase-indent.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: PurchaseIndentComponent}];

@NgModule({
    declarations: [PurchaseIndentComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PurchaseIndentModule {}
