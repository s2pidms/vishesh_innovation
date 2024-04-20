import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {MrnprintComponent} from "./mrnprint.component";

const routes: Routes = [{path: "", component: MrnprintComponent}];

@NgModule({
    declarations: [MrnprintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MrnprintModule {}
