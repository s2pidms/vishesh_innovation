import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {InvoiceQRCodeListComponent} from "./screens/invoice-qr-code-list/invoice-qr-code-list.component";
import {InvoiceQRCodeFormComponent} from "./screens/invoice-qr-code-form/invoice-qr-code-form.component";
import {FormScreenResolver} from "@core/guards";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "", redirectTo: "list", pathMatch: "full"},
    {path: "list", component: InvoiceQRCodeListComponent},
    {
        path: "form",
        component: InvoiceQRCodeFormComponent,
        resolve: {accessScreen: FormScreenResolver}
    }
];

@NgModule({
    declarations: [InvoiceQRCodeListComponent, InvoiceQRCodeFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class InvoiceQRCodeModule {}
