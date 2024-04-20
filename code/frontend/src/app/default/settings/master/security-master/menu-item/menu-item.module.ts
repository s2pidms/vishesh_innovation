import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuFormComponent } from './screens/menu-form/menu-form.component';
import { MenuListComponent } from './screens/menu-list/menu-list.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'menu-list', pathMatch: 'full' },
  { path: 'menu-list', component: MenuListComponent },
  {
    path: 'menu-form',
    component: MenuFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [MenuFormComponent, MenuListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class MenuItemModule {}
