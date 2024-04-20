import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JcProductionEntryFormComponent} from "./screens/jc-production-entry-form/jc-production-entry-form.component";
import {
    GenerateReportModalComponent,
    InkMixingLogModalComponent,
    IpqaLogModelComponent,
    ScreenMakingLogFormComponent
} from "./screens/components";
import {SharedModule} from "@shared/shared.module";
import {ScreenMakingLogEntryComponent} from "./screens/screen-making/screen-making-log-entry/screen-making-log-entry.component";
import {InkMixingLogBatchComponent} from "./screens/ink-mixing-log/ink-mixing-log-batch/ink-mixing-log-batch.component";
import {LogEntryModalComponent} from "./screens/stock-cutting/log-entry-modal/log-entry-modal.component";
import {StockCuttingFormComponent} from "./screens/stock-cutting/stock-cutting-form/stock-cutting-form.component";
import {StockCuttingPPICProcessComponent} from "./screens/stock-cutting/stock-cutting-ppic-process/stock-cutting-ppic-process.component";
import {StockCuttingProcessComponent} from "./screens/stock-cutting/stock-cutting-process/stock-cutting-process.component";

const routes: Routes = [
    {path: "", redirectTo: "form", pathMatch: "full"},
    {path: "form", component: JcProductionEntryFormComponent}
];

@NgModule({
    declarations: [
        JcProductionEntryFormComponent,
        GenerateReportModalComponent,
        InkMixingLogModalComponent,
        ScreenMakingLogFormComponent,
        ScreenMakingLogEntryComponent,
        InkMixingLogBatchComponent,
        IpqaLogModelComponent,
        StockCuttingFormComponent,
        StockCuttingProcessComponent,
        StockCuttingPPICProcessComponent,
        LogEntryModalComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JcProductionEntryModule {}
