import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ESPCategoryListComponent } from './screens/esp-category-list/esp-category-list.component';
import { ESPCategoryFormComponent } from './screens/esp-category-form/esp-category-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ESPCategoryListComponent },
  {
    path: 'form',
    component: ESPCategoryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [ESPCategoryListComponent, ESPCategoryFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ESPCategoryModule {}
