import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {GrnprintComponent} from "./grnprint.component";

const routes: Routes = [{path: "", component: GrnprintComponent}];

@NgModule({
    declarations: [GrnprintComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class GrnprintModule {}
