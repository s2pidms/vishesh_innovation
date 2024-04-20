import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {QuotationOfDskuListComponent} from "./quotation-of-dsku-list/quotation-of-dsku-list.component";
import {QuotationOfDskuFormComponent} from "./quotation-of-dsku-form/quotation-of-dsku-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: QuotationOfDskuListComponent},
    {
        path: "form",
        component: QuotationOfDskuFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [QuotationOfDskuListComponent, QuotationOfDskuFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class QuotationOfDskuModule {}
