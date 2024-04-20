import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TravelRequestComponent } from './travel-request.component';
import { SharedModule } from '@shared/shared.module';


const routes: Routes = [
  { path: '', component: TravelRequestComponent }
];

@NgModule({
  declarations: [
    TravelRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class TravelRequestModule { }
