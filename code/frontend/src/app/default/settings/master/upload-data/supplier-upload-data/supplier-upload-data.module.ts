import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SupplierUploadDataComponent} from "./supplier-upload-data.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {
        path: "form/:uploadParameter",
        component: SupplierUploadDataComponent
    }
];

@NgModule({
    declarations: [SupplierUploadDataComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SupplierUploadDataModule {}
