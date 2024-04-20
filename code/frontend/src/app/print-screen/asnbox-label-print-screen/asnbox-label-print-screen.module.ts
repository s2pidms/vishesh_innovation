import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ASNBoxLabelPrintScreenComponent} from "./asnbox-label-print-screen.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: ASNBoxLabelPrintScreenComponent}];

@NgModule({
    declarations: [ASNBoxLabelPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ASNBoxLabelPrintScreenModule {}
