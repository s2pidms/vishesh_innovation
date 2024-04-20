import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ApiStackComponent} from "./api-stack.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [{path: "", component: ApiStackComponent}];

@NgModule({
    declarations: [ApiStackComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class ApiStackModule {}
