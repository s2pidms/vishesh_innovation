import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOrderSOComponent } from './back-order-so.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: BackOrderSOComponent }];

@NgModule({
  declarations: [BackOrderSOComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BackOrderSOModule {}
