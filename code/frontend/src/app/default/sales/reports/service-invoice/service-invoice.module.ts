import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServiceInvoiceComponent } from './service-invoice.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: ServiceInvoiceComponent }];

@NgModule({
  declarations: [ServiceInvoiceComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ServiceInvoiceModule {}
