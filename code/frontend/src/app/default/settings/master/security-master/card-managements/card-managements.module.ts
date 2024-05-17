import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {CardManagementsListComponent} from "./screens/card-managements-list/card-managements-list.component";
import {CardManagementsCountsComponent} from "./screens/card-managements-counts/card-managements-counts.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: CardManagementsListComponent}
];

@NgModule({
    declarations: [CardManagementsListComponent, CardManagementsCountsComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CardManagementsModule {}
