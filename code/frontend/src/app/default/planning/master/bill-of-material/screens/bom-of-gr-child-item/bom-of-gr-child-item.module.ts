import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BomGrChildItemListComponent } from './bom-gr-child-item-list/bom-gr-child-item-list.component';
import { BomGrChildItemFormComponent } from './bom-gr-child-item-form/bom-gr-child-item-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BomGrChildItemListComponent },
  {
    path: 'form',
    component: BomGrChildItemFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [BomGrChildItemListComponent, BomGrChildItemFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BomOfGrChildItemModule {}
