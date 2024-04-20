import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NPDRequestPrintScreenComponent} from "../npd-request-print-screen/npd-request-print-screen.component";
import {SharedModule} from "@shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{path: "", component: NPDRequestPrintScreenComponent}];

@NgModule({
    declarations: [NPDRequestPrintScreenComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class NPDRequestPrintScreenModule {}
