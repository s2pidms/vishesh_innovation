import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceChecklistService {
  routes: any = {
    createPath: '/maintenance/maintenanceChecklist/create',
    getAllPath: '/maintenance/maintenanceChecklist/getAll',
    getAllReports: '/maintenance/maintenanceChecklist/getAllReports',
    getAllMasterDataPath: '/maintenance/maintenanceChecklist/getAllMasterData',
    updatePath: (id: string) =>
      `/maintenance/maintenanceChecklist/update/${id}`,
    getByIdPath: (id: string) =>
      `/maintenance/maintenanceChecklist/getById/${id}`,
    deletePath: (id: string) =>
      `/maintenance/maintenanceChecklist/delete/${id}`,
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

  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReports, params)
      .pipe(map((res: any) => res));
  }
  getAllPpvReports(params: any) {
    return this.http
      .get(this.routes.getAllPpvReports, params)
      .pipe(map((res: any) => res));
  }
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
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
