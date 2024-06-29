import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {JcProductionEntryFormComponent} from "./screens/jc-production-entry-form/jc-production-entry-form.component";
import {
    GenerateReportModalComponent,
    GenericIpqaProcessModelComponent,
    GenericIpqcProcessModelComponent,
    GenericProductionProcessModelComponent,
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
import {LaminationLogEntryModelComponent} from "./screens/lamination-log-entry-model/lamination-log-entry-model.component";
import {WeedingLogEntryModelComponent} from "./screens/weeding-log-entry-model/weeding-log-entry-model.component";
import {PunchingLogEntryModelComponent} from "./screens/punching-log-entry-model/punching-log-entry-model.component";
import {PackingLogEntryModelComponent} from "./screens/packing-log-entry-model/packing-log-entry-model.component";
import {StageInspectionProdEntryComponent} from "./screens/stage-inspection/stage-inspection-prod-entry/stage-inspection-prod-entry.component";
import {StageInspectionIpqaEntryComponent} from "./screens/stage-inspection/stage-inspection-ipqa-entry/stage-inspection-ipqa-entry.component";
import {InkMixingLogIPQAModalComponent} from "./screens/ink-mixing-log/ink-mixing-log-ipqa-modal/ink-mixing-log-ipqa-modal.component";
import {PackingLogEntryIPQAModalComponent} from "./screens/packing-log-entry-model/packing-log-entry-ipqa-modal/packing-log-entry-ipqa-modal.component";
import {PunchingLogEntryIPQAModalComponent} from "./screens/punching-log-entry-model/punching-log-entry-ipqa-modal/punching-log-entry-ipqa-modal.component";
import {ScreenMakingIPQAModalComponent} from "./screens/screen-making/screen-making-ipqa-modal/screen-making-ipqa-modal.component";
import {ScreenPrintingIPQAModalComponent} from "./screens/screen-printing/screen-printing-ipqa-modal/screen-printing-ipqa-modal.component";
import {StockCuttingIPQAModalComponent} from "./screens/stock-cutting/stock-cutting-ipqa-modal/stock-cutting-ipqa-modal.component";
import {WeedingLogEntryIPQAModalComponent} from "./screens/weeding-log-entry-model/weeding-log-entry-ipqa-modal/weeding-log-entry-ipqa-modal.component";
import {LaminationLogEntryIPQAModalComponent} from "./screens/lamination-log-entry-model/lamination-log-entry-ipqa-modal/lamination-log-entry-ipqa-modal.component";
import {StockPreparationIPQAModalComponent} from "./screens/stock-preparation/stock-preparation-ipqa-modal/stock-preparation-ipqa-modal.component";

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
        PackingLogEntryModelComponent,
        StageInspectionProdEntryComponent,
        StageInspectionIpqaEntryComponent,
        InkMixingLogIPQAModalComponent,
        PackingLogEntryIPQAModalComponent,
        PunchingLogEntryIPQAModalComponent,
        ScreenMakingIPQAModalComponent,
        ScreenPrintingIPQAModalComponent,
        StockCuttingIPQAModalComponent,
        WeedingLogEntryIPQAModalComponent,
        LaminationLogEntryIPQAModalComponent,
        StockPreparationIPQAModalComponent,
        GenericIpqaProcessModelComponent,
        GenericIpqcProcessModelComponent,
        GenericProductionProcessModelComponent
    ],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class JcProductionEntryModule {}
