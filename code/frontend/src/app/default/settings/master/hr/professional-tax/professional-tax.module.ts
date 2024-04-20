import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalTaxListComponent } from './screens/professional-tax-list/professional-tax-list.component';
import { ProfessionalTaxFormComponent } from './screens/professional-tax-form/professional-tax-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProfessionalTaxListComponent },
  {
    path: 'form',
    component: ProfessionalTaxFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [ProfessionalTaxListComponent, ProfessionalTaxFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProfessionalTaxModule {}
