import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class SalesForecastService {
  routes: any = {
    createPath: '/sales/salesForecast/create',
    getAllPath: '/sales/salesForecast/getAll',
    getAllMasterDataPath: '/sales/salesForecast/getAllMasterData',
    getAllSalesSKUListPath: '/sales/salesForecast/getAllSalesSKUList',
    getAllReportsPath: '/sales/salesForecast/getAllReports',
    updatePath: (id: string) => `/sales/salesForecast/update/${id}`,
    getByIdPath: (id: string) => `/sales/salesForecast/getById/${id}`,
    deletePath: (id: string) => `/sales/salesForecast/delete/${id}`,
  };
  constructor(private http: ApiService) {}

  create(payload: any) {
    return this.http
      .post(this.routes.createPath, payload)
      .pipe(map((res: any) => res));
  }
  getAll(params: any) {
    return this.http
      .get(this.routes.getAllPath, params)
      .pipe(map((res: any) => res));
  }
  getAllSalesSKUList(params: any) {
    return this.http
      .get(this.routes.getAllSalesSKUListPath, params)
      .pipe(map((res: any) => res));
  }
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
      .pipe(map((res: any) => res));
  }
  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReportsPath, params)
      .pipe(map((res: any) => res));
  }
  update(id: string, payload: any) {
    return this.http
      .put(this.routes.updatePath(id), payload)
      .pipe(map((res: any) => res));
  }
  getById(id: string) {
    return this.http
      .get(this.routes.getByIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
