import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NPDComponent } from './npd.component';

const routes: Routes = [
  { path: 'tab_list', component: NPDComponent },
  {
    path: 'questioniers',
    loadChildren: () =>
      import('./questioniers/questioniers.module').then(
        (m) => m.QuestioniersModule
      ),
  },
  {
    path: 'child_item_category',
    loadChildren: () =>
      import('./child-item-category/child-item-category.module').then(
        (m) => m.ChildItemCategoryModule
      ),
  },
  {
    path: 'checklist_particulars',
    loadChildren: () =>
      import('./checklist-particulars/checklist-particulars.module').then(
        (m) => m.ChecklistParticularsModule
      ),
  },
  {
    path: 'cost_sheet_components',
    loadChildren: () =>
      import('./cost-sheet-components/cost-sheet-components.module').then(
        (m) => m.CostSheetComponentsModule
      ),
  },
  {
    path: 'd_sku_attributes',
    loadChildren: () =>
      import('./d-sku-attributes/d-sku-attributes.module').then(
        (m) => m.DSkuAttributesModule
      ),
  },
];

@NgModule({
  declarations: [NPDComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NPDModule {}
