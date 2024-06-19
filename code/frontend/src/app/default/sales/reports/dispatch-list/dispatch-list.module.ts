import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {DispatchListComponent} from "./dispatch-list.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: DispatchListComponent}];

@NgModule({
    declarations: [DispatchListComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DispatchListModule {}
