import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ServiceListComponent } from './screens/service-list/service-list.component';
import { ServiceFormComponent } from './screens/service-form/service-form.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ServiceListComponent },
  {
    path: 'form',
    component: ServiceFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [ServiceListComponent, ServiceFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ServiceModule {}
