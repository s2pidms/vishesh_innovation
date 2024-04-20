import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {SPOPrintScreenComponent} from "./spoprint-screen.component";

const routes: Routes = [{path: "", component: SPOPrintScreenComponent}];

@NgModule({
    declarations: [SPOPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SPOPrintScreenModule {}
