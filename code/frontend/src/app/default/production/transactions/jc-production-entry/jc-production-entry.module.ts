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
import {ScreenPrintingLogModelComponent} from "./screens/screen-printing/screen-printing-log-model/screen-printing-log-model.component";
import {ScreenPrintingLogEntryComponent} from "./screens/screen-printing/screen-printing-log-entry/screen-printing-log-entry.component";
import {JcStockPreparationEntryComponent} from "./screens/stock-preparation/jc-stock-preparation-entry/jc-stock-preparation-entry.component";
import { LaminationLogEntryModelComponent } from './screens/lamination-log-entry-model/lamination-log-entry-model.component';
import { WeedingLogEntryModelComponent } from './screens/weeding-log-entry-model/weeding-log-entry-model.component';
import { PunchingLogEntryModelComponent } from './screens/punching-log-entry-model/punching-log-entry-model.component';
import { PackingLogEntryModelComponent } from './screens/packing-log-entry-model/packing-log-entry-model.component';

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
        LogEntryModalComponent,
        ScreenPrintingLogModelComponent,
        ScreenPrintingLogEntryComponent,
        JcStockPreparationEntryComponent,
        LaminationLogEntryModelComponent,
        WeedingLogEntryModelComponent,
        PunchingLogEntryModelComponent,
        PackingLogEntryModelComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JcProductionEntryModule {}
