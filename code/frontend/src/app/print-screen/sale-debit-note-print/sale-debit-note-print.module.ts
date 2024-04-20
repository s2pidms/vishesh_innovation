import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {SaleDebitNotePrintComponent} from "./sale-debit-note-print.component";

const routes: Routes = [{path: "", component: SaleDebitNotePrintComponent}];

@NgModule({
    declarations: [SaleDebitNotePrintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SaleDebitNotePrintModule {}
