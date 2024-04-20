import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ODApplicationRoutingModule } from './od-application-routing.module';
import { ODApplicationListComponent } from './screens/od-application-list/od-application-list.component';
import { ODApplicationFormComponent } from './screens/od-application-form/od-application-form.component';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
    declarations: [
        ODApplicationListComponent,
        ODApplicationFormComponent,
    ],
    imports: [
        CommonModule,
        ODApplicationRoutingModule,
        SharedModule
    ]
})
export class ODApplicationModule { }
