import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CostSheetComponent } from './cost-sheet.component';
import { SharedModule } from '@shared/shared.module';


const routes: Routes = [
  { path: '', component: CostSheetComponent }
];

@NgModule({
  declarations: [
    CostSheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class CostSheetModule { }
