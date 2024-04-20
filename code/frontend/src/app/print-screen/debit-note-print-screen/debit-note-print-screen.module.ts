import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {DebitNotePrintScreenComponent} from "./debit-note-print-screen.component";

const routes: Routes = [{path: "", component: DebitNotePrintScreenComponent}];

@NgModule({
    declarations: [DebitNotePrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DebitNotePrintScreenModule {}
