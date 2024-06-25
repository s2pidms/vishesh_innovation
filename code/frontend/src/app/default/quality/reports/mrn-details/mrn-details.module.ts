import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {MRNDetailsComponent} from "./mrn-details.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: MRNDetailsComponent}];

@NgModule({
    declarations: [MRNDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class MRNDetailsModule {}
