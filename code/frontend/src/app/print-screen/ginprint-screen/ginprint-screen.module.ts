import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {GINPrintScreenComponent} from "./ginprint-screen.component";

const routes: Routes = [{path: "", component: GINPrintScreenComponent}];

@NgModule({
    declarations: [GINPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GINPrintScreenModule {}
