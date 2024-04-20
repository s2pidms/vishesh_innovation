import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CostSheetComponentsFormComponent } from './screens/cost-sheet-components-form/cost-sheet-components-form.component';
import { CostSheetComponentsListComponent } from './screens/cost-sheet-components-list/cost-sheet-components-list.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CostSheetComponentsListComponent },
  {
    path: 'form',
    component: CostSheetComponentsFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];
@NgModule({
  declarations: [
    CostSheetComponentsFormComponent,
    CostSheetComponentsListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CostSheetComponentsModule {}
