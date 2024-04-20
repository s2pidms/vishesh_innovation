import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {PDIRPrintScreenComponent} from "./pdir-print-screen.component";

const routes: Routes = [{path: "", component: PDIRPrintScreenComponent}];

@NgModule({
    declarations: [PDIRPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class PDIRPrintScreenModule {}
