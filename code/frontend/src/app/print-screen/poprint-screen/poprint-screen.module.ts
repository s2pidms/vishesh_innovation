import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {POPrintScreenComponent} from "./poprint-screen.component";
import {DomesticsPOPrintScreenComponent} from "../templates-PO/domestics-poprint-screen/domestics-poprint-screen.component";
import {ImportsPOPrintScreenComponent} from "../templates-PO/imports-poprint-screen/imports-poprint-screen.component";
import {PoSchedulePrintScreenComponent} from "../templates-PO/po-schedule-print-screen/po-schedule-print-screen.component";
import {RegularPOPrintScreenComponent} from "../templates-PO/regular-poprint-screen/regular-poprint-screen.component";
import {TermsConditionsComponent} from "../terms-conditions/terms-conditions.component";

const routes: Routes = [{path: "", component: POPrintScreenComponent}];

@NgModule({
    declarations: [
        POPrintScreenComponent,
        DomesticsPOPrintScreenComponent,
        ImportsPOPrintScreenComponent,
        PoSchedulePrintScreenComponent,
        RegularPOPrintScreenComponent,
        TermsConditionsComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class POPrintScreenModule {}
