import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SampleJcCreationPrintComponent} from "./sample-jc-creation-print.component";
import {SharedModule} from "@shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{path: "", component: SampleJcCreationPrintComponent}];
@NgModule({
    declarations: [SampleJcCreationPrintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SampleJcCreationPrintModule {}
