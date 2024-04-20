import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {
  AppGlobalService,
  ExportExcelService,
  ExportToPDFService,
  StorageService,
} from './core/services';
import { MenuTitleService } from './core/services/menu-title.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import {
  AccountsGuard,
  BusinessLeadsGuard,
  DispatchGuard,
  FinanceGuard,
  FormScreenResolver,
  HRAdminGuard,
  MaintenanceGuard,
  PlanningGuard,
  ProductionGuard,
  PurchaseGuard,
  QualityGuard,
  SalesGuard,
  SettingsGuard,
  StoresGuard,
  SupportGuard,
} from './core/guards';
import { NgxSpinnerModule } from 'ngx-spinner';
const guards = [
  AccountsGuard,
  BusinessLeadsGuard,
  DispatchGuard,
  FinanceGuard,
  HRAdminGuard,
  MaintenanceGuard,
  PlanningGuard,
  ProductionGuard,
  PurchaseGuard,
  QualityGuard,
  SalesGuard,
  SettingsGuard,
  StoresGuard,
  SupportGuard,
  FormScreenResolver,
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000, // Time to close the toaster (in milliseconds)
      positionClass: "toast-top-right", // Toast position
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
    }),
    CoreModule.forRoot(),
    NgxSpinnerModule],
  providers: [
    StorageService,
    MenuTitleService,
    ExportExcelService,
    ExportToPDFService,
    AppGlobalService,
    ...guards,

    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: RouteReusableStrategy,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
