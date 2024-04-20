import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {ItemConsumptionComponent} from "./item-consumption.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: ItemConsumptionComponent}];

@NgModule({
    declarations: [ItemConsumptionComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ItemConsumptionModule {}
