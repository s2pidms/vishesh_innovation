import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PdirEntryListComponent } from './screens/pdir-entry-list/pdir-entry-list.component';
import { PdirEntryFormComponent } from './screens/pdir-entry-form/pdir-entry-form.component';
import { SharedModule } from '@shared/shared.module';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { PDIEntryComponent } from './screens/pdi-entry/pdi-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PdirEntryListComponent },
  {
    path: 'form',
    component: PdirEntryFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    PdirEntryListComponent,
    PdirEntryFormComponent,
    PDIEntryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PdirEntryModule {}
