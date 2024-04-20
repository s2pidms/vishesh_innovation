import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './screens/list/list.component';
import { FormComponent } from './screens/form/form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  {
    path: 'form',
    component: FormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class GRLModule {}
