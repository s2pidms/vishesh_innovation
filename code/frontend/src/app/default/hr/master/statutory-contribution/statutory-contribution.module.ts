import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatutoryContributionComponent } from './statutory-contribution.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: StatutoryContributionComponent },
];

@NgModule({
  declarations: [StatutoryContributionComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class StatutoryContributionModule {}
