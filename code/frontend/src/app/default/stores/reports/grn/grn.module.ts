import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {GRNComponent} from "./grn.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: GRNComponent}];

@NgModule({
    declarations: [GRNComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GRNModule {}
