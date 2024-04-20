import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PayrollRComponent } from './payroll-r.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: PayrollRComponent }];

@NgModule({
  declarations: [PayrollRComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PayrollRModule {}
