import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  routes: any = {
    salesPath: '/dashboard/sales',
    businessLeadsPath: '/dashboard/businessLeads',
    hrPath: '/dashboard/hr',
    purchasePath: '/dashboard/purchase',
    productionPath: '/dashboard/production',
    maintenancePath: '/dashboard/maintenance',
    qualityPath: '/dashboard/quality',
    dispatchPath: '/dashboard/dispatch',
    storePath: '/dashboard/stores',
    settingPath: '/dashboard/setting',
    supportPath: '/dashboard/support',
    planningPath: '/dashboard/planning',
  };
  constructor(private http: ApiService) {}

  getAllBusinessLeads(params: any) {
    return this.http
      .get(this.routes.businessLeadsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllHr(params: any) {
    return this.http
      .get(this.routes.hrPath, params)
      .pipe(map((res: any) => res));
  }

  getAllSales(params: any) {
    return this.http
      .get(this.routes.salesPath, params)
      .pipe(map((res: any) => res));
  }

  getAllPurchase(params: any) {
    return this.http
      .get(this.routes.purchasePath, params)
      .pipe(map((res: any) => res));
  }

  getAllProduction(params: any) {
    return this.http
      .get(this.routes.productionPath, params)
      .pipe(map((res: any) => res));
  }
  getAllMaintenance(params: any) {
    return this.http
      .get(this.routes.maintenancePath, params)
      .pipe(map((res: any) => res));
  }

  getAllQuality(params: any) {
    return this.http
      .get(this.routes.qualityPath, params)
      .pipe(map((res: any) => res));
  }

  getAllDispatch(params: any) {
    return this.http
      .get(this.routes.dispatchPath, params)
      .pipe(map((res: any) => res));
  }

  getAllStores(params: any) {
    return this.http
      .get(this.routes.storePath, params)
      .pipe(map((res: any) => res));
  }
  getAllSetting(params: any) {
    return this.http
      .get(this.routes.settingPath, params)
      .pipe(map((res: any) => res));
  }
  getAllSupport(params: any) {
    return this.http
      .get(this.routes.supportPath, params)
      .pipe(map((res: any) => res));
  }
  getAllPlanning(params: any) {
    return this.http
      .get(this.routes.planningPath, params)
      .pipe(map((res: any) => res));
  }
}
