import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {SoComfirmationPrintScreenComponent} from "./so-comfirmation-print-screen.component";
import {SOTermsAndConditionComponent} from "./so-terms-and-condition/so-terms-and-condition.component";

const routes: Routes = [{path: "", component: SoComfirmationPrintScreenComponent}];

@NgModule({
    declarations: [SoComfirmationPrintScreenComponent, SOTermsAndConditionComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SoComfirmationPrintScreenModule {}
