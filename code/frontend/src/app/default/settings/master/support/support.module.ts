import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SupportComponent} from "./support.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "tab_list", component: SupportComponent}];

@NgModule({
    declarations: [SupportComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SupportModule {}
