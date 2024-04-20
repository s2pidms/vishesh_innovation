import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OdApplicationRComponent } from './od-application-r.component';
import { SharedModule } from '@shared/shared.module';
const routes: Routes = [{ path: '', component: OdApplicationRComponent }];

@NgModule({
  declarations: [OdApplicationRComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class OdApplicationRModule {}
