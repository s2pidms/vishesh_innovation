import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListComponent } from './screens/services-list/services-list.component';
import { ServicesFormComponent } from './screens/services-form/services-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ServicesListComponent },
  {
    path: 'form',
    component: ServicesFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [ServicesListComponent, ServicesFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ServicesModule {}
