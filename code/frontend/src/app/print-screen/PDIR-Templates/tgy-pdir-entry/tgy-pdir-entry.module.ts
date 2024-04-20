import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {TGYPDIREntryComponent} from "./tgy-pdir-entry.component";

const routes: Routes = [{path: "", component: TGYPDIREntryComponent}];

@NgModule({
    declarations: [TGYPDIREntryComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class TGYPDIREntryModule {}
