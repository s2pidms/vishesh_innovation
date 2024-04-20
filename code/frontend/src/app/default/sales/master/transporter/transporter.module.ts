import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransporterListComponent } from './screens/transporter-list/transporter-list.component';
import { TransporterFormComponent } from './screens/transporter-form/transporter-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TransporterListComponent },
  {
    path: 'form',
    component: TransporterFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [TransporterListComponent, TransporterFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class TransporterModule {}
