import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {MasterComponent} from "./master.component";
const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            {path: "", redirectTo: "hsn", pathMatch: "full"},
            {
                path: "transporter",
                loadChildren: () =>
                    import("./../../sales/master/transporter/transporter.module").then(m => m.TransporterModule)
            },
            {
                path: "customer_address",
                loadChildren: () =>
                    import("./../../accounts/master/customer-address/customer-address.module").then(
                        m => m.CustomerAddressModule
                    )
            }
        ]
    }
];

@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
