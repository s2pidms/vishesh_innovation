import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BomChildItemListComponent } from './bom-child-item-list/bom-child-item-list.component';
import { BomChildItemFormComponent } from './bom-child-item-form/bom-child-item-form.component';
import { SharedModule } from '@shared/shared.module';
import { BomDocumentDetailsComponent } from './bom-document-details/bom-document-details.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: BomChildItemListComponent },
  {
    path: 'form',
    component: BomChildItemFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    BomChildItemListComponent,
    BomChildItemFormComponent,
    BomDocumentDetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BomOfChildItemModule {}
