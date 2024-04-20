import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GieDirectComponent } from './gie-direct.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: GieDirectComponent }];

@NgModule({
  declarations: [GieDirectComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GieDirectModule {}
