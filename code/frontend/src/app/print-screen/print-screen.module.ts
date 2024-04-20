import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../shared/shared.module";
import {PrintScreenRoutingModule} from "./print-screen-routing.module";
import {SoSchedulePrintScreenComponent} from "./index";

const COMPONENTS = [SoSchedulePrintScreenComponent];
@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, PrintScreenRoutingModule, SharedModule]
})
export class PrintScreenModule {}
