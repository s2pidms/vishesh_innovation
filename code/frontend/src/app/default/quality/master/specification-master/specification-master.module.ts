import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SpecificationMasterFormComponent } from './screens/specification-master-form/specification-master-form.component';
import { SpecificationMasterListComponent } from './screens/specification-master-list/specification-master-list.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: SpecificationMasterListComponent },
  { path: 'form', component: SpecificationMasterFormComponent },
];

@NgModule({
  declarations: [
    SpecificationMasterFormComponent,
    SpecificationMasterListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SpecificationMasterModule {}
