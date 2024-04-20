import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ODApplicationListComponent } from './screens/od-application-list/od-application-list.component';
import { ODApplicationFormComponent } from './screens/od-application-form/od-application-form.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'od-list', pathMatch: 'full' },
  { path: 'od-list', component: ODApplicationListComponent },
  {
    path: 'od-form',
    component: ODApplicationFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ODApplicationRoutingModule {}
