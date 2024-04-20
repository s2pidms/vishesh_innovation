import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {TransactionsComponent} from "./transactions.component";
import {TaxInvoiceComponent} from "./tax-invoice/tax-invoice.component";

const routes: Routes = [
    {
        path: "",
        component: TransactionsComponent,
        children: [
            {path: "tax_invoice", component: TaxInvoiceComponent},
            {
                path: "shipment_creation",
                loadChildren: () =>
                    import("./shipment-creation/shipment-creation.module").then(m => m.ShipmentCreationModule)
            },
            {
                path: "asn",
                loadChildren: () => import("./asn/asn.module").then(m => m.AsnModule)
            },
            {
                path: "grl",
                loadChildren: () => import("./../../production/transactions/grl/grl.module").then(m => m.GRLModule)
            },
            {
                path: "generate-e-invoice",
                loadChildren: () =>
                    import("./../../sales/transactions/generate-e-invoice/generate-e-invoice.module").then(
                        m => m.GenerateEInvoiceModule
                    )
            },
            {
                path: "generate_e_way_bills",
                loadChildren: () =>
                    import("./../../sales/transactions/generate-e-way-bills/generate-e-way-bills.module").then(
                        m => m.GenerateEWayBillsModule
                    )
            },
            {
                path: "generate_export_e_invoice",
                loadChildren: () =>
                    import(
                        "./../../sales/transactions/generate-export-e-invoice/generate-export-e-invoice.module"
                    ).then(m => m.GenerateExportEInvoiceModule)
            },
            {
                path: "generate_export_e_way_bills",
                loadChildren: () =>
                    import(
                        "./../../sales/transactions/generate-export-e-way-bills/generate-export-e-way-bills.module"
                    ).then(m => m.GenerateExportEWayBillsModule)
            }
        ]
    }
];

@NgModule({
    declarations: [TransactionsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TransactionsModule {}
