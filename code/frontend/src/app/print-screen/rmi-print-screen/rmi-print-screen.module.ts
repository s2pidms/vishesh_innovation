import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {RmiPrintScreenComponent} from "./rmi-print-screen.component";

const routes: Routes = [{path: "", component: RmiPrintScreenComponent}];

@NgModule({
    declarations: [RmiPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class RmiPrintScreenModule {}
