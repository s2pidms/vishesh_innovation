import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {AccountsMasterComponent} from "./accounts-master.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "tab_list", component: AccountsMasterComponent}];

@NgModule({
    declarations: [AccountsMasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class AccountsMasterModule {}
