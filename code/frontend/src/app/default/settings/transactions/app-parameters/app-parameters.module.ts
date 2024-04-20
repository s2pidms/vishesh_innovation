import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppParameterListComponent } from './screens/app-parameter-list/app-parameter-list.component';
import { AppParameterFormComponent } from './screens/app-parameter-form/app-parameter-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'AP-list', pathMatch: 'full' },
  { path: 'AP-list', component: AppParameterListComponent },
  {
    path: 'AP-form',
    component: AppParameterFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [AppParameterListComponent, AppParameterFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AppParametersModule {}
