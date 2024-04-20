import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { QuestionnairesListComponent } from './screens/questionnaires-list/questionnaires-list.component';
import { QuestionnairesFormComponent } from './screens/questionnaires-form/questionnaires-form.component';
import { FormScreenResolver } from '@core/guards/FormScreenResolver';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: QuestionnairesListComponent },
  {
    path: 'form',
    component: QuestionnairesFormComponent,
    resolve: { accessScreen: FormScreenResolver },
  },
];

@NgModule({
  declarations: [QuestionnairesListComponent, QuestionnairesFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class QuestioniersModule {}
