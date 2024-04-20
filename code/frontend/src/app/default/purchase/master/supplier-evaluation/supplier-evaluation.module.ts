import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupplierEvaluationListComponent } from './screens/supplier-evaluation-list/supplier-evaluation-list.component';
import { SupplierEvaluationFormComponent } from './screens/supplier-evaluation-form/supplier-evaluation-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SupplierEvaluationListComponent },
  {
    path: 'form',
    component: SupplierEvaluationFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [
    SupplierEvaluationListComponent,
    SupplierEvaluationFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SupplierEvaluationModule {}
