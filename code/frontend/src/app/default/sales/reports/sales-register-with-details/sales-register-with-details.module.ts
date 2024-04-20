import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesRegisterWithDetailsComponent } from './sales-register-with-details.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: SalesRegisterWithDetailsComponent },
];

@NgModule({
  declarations: [SalesRegisterWithDetailsComponent],
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
})
export class SalesRegisterWithDetailsModule {}
