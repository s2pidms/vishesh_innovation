import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
