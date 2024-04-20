import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsListComponent } from './screens/components-list/components-list.component';
import { ComponentsFormComponent } from './screens/components-form/components-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'sc-list', pathMatch: 'full' },
  { path: 'sc-list', component: ComponentsListComponent },
  {
    path: 'sc-form',
    component: ComponentsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [ComponentsListComponent, ComponentsFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SalaryComponentsModule {}
