import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FGINRComponent } from './fginr.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [{ path: '', component: FGINRComponent }];

@NgModule({
  declarations: [FGINRComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FGINRModule {}
