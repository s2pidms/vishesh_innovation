import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AssetClassListComponent } from './screens/asset-class-list/asset-class-list.component';
import { AssetClassFormComponent } from './screens/asset-class-form/asset-class-form.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AssetClassListComponent },
  {
    path: 'form',
    component: AssetClassFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [AssetClassListComponent, AssetClassFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AssetClassModule {}
