import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PPVComponent } from './ppv.component';

const routes: Routes = [{ path: '', component: PPVComponent }];

@NgModule({
  declarations: [PPVComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class PPVModule {}
