import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MapCategoryHsnFormComponent } from './screens/map-category-hsn-form/map-category-hsn-form.component';
import { MapCategoryHsnListComponent } from './screens/map-category-hsn-list/map-category-hsn-list.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: MapCategoryHsnListComponent },
  {
    path: 'form',
    component: MapCategoryHsnFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [MapCategoryHsnFormComponent, MapCategoryHsnListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MapCategoryHsnModule {}
