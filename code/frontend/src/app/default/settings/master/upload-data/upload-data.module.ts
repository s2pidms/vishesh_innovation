import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {UploadDataComponent} from "./upload-data.component";
import {CustomUploadDetailsComponent} from "./custom-upload-details/custom-upload-details.component";
import {SharedModule} from "@shared/shared.module";
import {CustomUploadDataComponent} from "./custom-upload-data/custom-upload-data.component";

const routes: Routes = [
    {path: "tab_list", component: UploadDataComponent},
    {path: "form/:uploadParameter", component: CustomUploadDataComponent}
    // {
    //     path: "supplier_upload_data",
    //     loadChildren: () =>
    //         import("./supplier-upload-data/supplier-upload-data.module").then(m => m.SupplierUploadDataModule)
    // }
];

@NgModule({
    declarations: [UploadDataComponent, CustomUploadDetailsComponent, CustomUploadDataComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class UploadDataModule {}
