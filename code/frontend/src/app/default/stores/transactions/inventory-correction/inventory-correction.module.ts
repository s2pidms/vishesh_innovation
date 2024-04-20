import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryCorrectionRoutingModule } from './inventory-correction-routing.module';
import { ListComponent } from './screens/list/list.component';
import { FormComponent } from './screens/form/form.component';

import { SharedModule as SharedModule } from "../../../../shared/shared.module";


@NgModule({
    declarations: [
        ListComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        InventoryCorrectionRoutingModule,
        SharedModule
    ]
})
export class InventoryCorrectionModule { }
