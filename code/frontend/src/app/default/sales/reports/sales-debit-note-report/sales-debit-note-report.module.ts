import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SalesDebitNoteReportComponent} from "./sales-debit-note-report.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: SalesDebitNoteReportComponent}];

@NgModule({
    declarations: [SalesDebitNoteReportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SalesDebitNoteReportModule {}
