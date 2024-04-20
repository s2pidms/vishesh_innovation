import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GrnLocationWiseComponent } from './grn-location-wise.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: GrnLocationWiseComponent }];

@NgModule({
  declarations: [GrnLocationWiseComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GrnLocationWiseModule {}
