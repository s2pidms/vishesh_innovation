import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesDebitNoteFormComponent} from "./screens/sales-debit-note-form/sales-debit-note-form.component";
import {SalesDebitNoteListComponent} from "./screens/sales-debit-note-list/sales-debit-note-list.component";
import {SharedModule} from "@shared/shared.module";
import {FormScreenResolver} from "@core/guards";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: SalesDebitNoteListComponent},
    {
        path: "form",
        component: SalesDebitNoteFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [SalesDebitNoteFormComponent, SalesDebitNoteListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SalesDebitNoteModule {}
