import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoIncrementListComponent } from './screens/auto-increment-list/auto-increment-list.component';
import { AutoIncrementFormComponent } from './screens/auto-increment-form/auto-increment-form.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'AI-list', pathMatch: 'full' },
  { path: 'AI-list', component: AutoIncrementListComponent },
  {
    path: 'AI-form',
    component: AutoIncrementFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoIncrementRoutingModule {}
