import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SpsInventoryComponent} from "./sps-inventory.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: SpsInventoryComponent}];

@NgModule({
    declarations: [SpsInventoryComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SpsInventoryModule {}
