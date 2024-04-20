import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class FGCorrectionService {
  routes: any = {
    createPath: '/production/FGCorrection/create',
    getAllPath: '/production/FGCorrection/getAll',
    getAllFGCorrectionHistoryReportPath:
      '/production/FGCorrection/getAllFGCorrectionHistoryReports',
    getAllMasterDataPath: '/production/FGCorrection/getAllMasterData',
    updatePath: (id: string) => `/production/FGCorrection/update/${id}`,
    getFGCorrectionBySKUIdPath: (id: string) =>
      `/production/FGCorrection/getFGCorrectionBySKUId/${id}`,
    getByIdPath: (id: string) => `/production/FGCorrection/getById/${id}`,
    deletePath: (id: string) => `/production/FGCorrection/delete/${id}`,
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
  getAllFGCorrectionHistoryReports(params: any) {
    return this.http
      .get(this.routes.getAllFGCorrectionHistoryReportPath, params)
      .pipe(map((res: any) => res));
  }
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
      .pipe(map((res: any) => res));
  }
  getFGCorrectionBySKUId(id: string) {
    return this.http
      .get(this.routes.getFGCorrectionBySKUIdPath(id))
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
