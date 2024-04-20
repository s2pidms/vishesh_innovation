import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MRNComponent} from "./mrn.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: MRNComponent}];

@NgModule({
    declarations: [MRNComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MRNModule {}
