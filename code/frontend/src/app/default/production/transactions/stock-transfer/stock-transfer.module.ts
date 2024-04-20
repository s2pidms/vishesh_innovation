import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StockTransferEntryFormComponent } from './screens/stock-transfer-entry-form/stock-transfer-entry-form.component';
import { SharedModule } from "../../../../shared/shared.module";

const routes: Routes = [
  { path: '', redirectTo: 'stock-transfer-entry-form', pathMatch: 'full' },
  {
    path: 'stock-transfer-entry-form',
    component: StockTransferEntryFormComponent,
  },
];

@NgModule({
    declarations: [StockTransferEntryFormComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class StockTransferModule {}
