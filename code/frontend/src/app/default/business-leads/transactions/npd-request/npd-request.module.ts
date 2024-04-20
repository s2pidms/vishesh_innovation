import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NpdRequestListComponent } from './screens/npd-request-list/npd-request-list.component';
import { NpdRequestFormComponent } from './screens/npd-request-form/npd-request-form.component';
import { SharedModule } from '@shared/shared.module';
import { ViewNpdRequestDetailsComponent } from './screens/view-npd-request-details/view-npd-request-details.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';
import { VariantsModalComponent } from './screens/variants-modal/variants-modal.component';
import { UploadDocsModalComponent } from './screens/upload-docs-modal/upload-docs-modal.component';
import { OffTakeQtyModalComponent } from './screens/off-take-qty-modal/off-take-qty-modal.component';
import { CustomerInputChecklistComponent } from './screens/customer-input-checklist/customer-input-checklist.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: NpdRequestListComponent },
  { path: 'upload-docs-modal', component: UploadDocsModalComponent },
  {
    path: 'form',
    component: NpdRequestFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [
    NpdRequestListComponent,
    NpdRequestFormComponent,
    ViewNpdRequestDetailsComponent,
    VariantsModalComponent,
    UploadDocsModalComponent,
    OffTakeQtyModalComponent,
    CustomerInputChecklistComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [NpdRequestFormComponent],
})
export class NpdRequestModule {}
