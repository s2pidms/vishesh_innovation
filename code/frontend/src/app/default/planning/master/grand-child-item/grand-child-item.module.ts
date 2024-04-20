import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrandChildItemListComponent } from './screens/grand-child-item-list/grand-child-item-list.component';
import { GrandChildItemFormComponent } from './screens/grand-child-item-form/grand-child-item-form.component';
import { FormScreenResolver } from '@core/guards';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: GrandChildItemListComponent },
  {
    path: 'form',
    component: GrandChildItemFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [GrandChildItemListComponent, GrandChildItemFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GrandChildItemModule {}
