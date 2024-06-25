import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JwOrderComponent} from "./jw-order.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: JwOrderComponent}];

@NgModule({
    declarations: [JwOrderComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JwOrderModule {}
