import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {CompanyComponent} from "./company.component";
import {SharedModule} from "@shared/shared.module";
import {
    AddCompanyTemplateComponent,
    CompanyAddContactsDetailsComponent,
    CompanyAdditionalBusinessComponent,
    CompanyBankDetailsComponent,
    CompanyDocumentsComponent,
    CompanyUploadSODocumentComponent,
    AccountsModalComponent,
    ExportsModalComponent
} from "./components";

const routes: Routes = [{path: "company-form", component: CompanyComponent}];

@NgModule({
    declarations: [
        CompanyComponent,
        CompanyAddContactsDetailsComponent,
        CompanyAdditionalBusinessComponent,
        CompanyBankDetailsComponent,
        CompanyDocumentsComponent,
        CompanyUploadSODocumentComponent,
        AddCompanyTemplateComponent,
        AccountsModalComponent,
        ExportsModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class CompanyModule {}
