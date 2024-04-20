import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {ASNPrintScreenComponent} from "./asnprint-screen.component";

const routes: Routes = [{path: "", component: ASNPrintScreenComponent}];

@NgModule({
    declarations: [ASNPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ASNPrintScreenModule {}
