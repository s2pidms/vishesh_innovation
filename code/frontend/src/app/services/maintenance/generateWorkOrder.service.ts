import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class GenerateWorkOrderService {
  routes: any = {
    createPath: '/maintenance/workOrderGeneration/create',
    getAllPath: '/maintenance/workOrderGeneration/getAll',
    getAllReports: '/maintenance/workOrderGeneration/getAllReports',
    getAllMasterDataPath: '/maintenance/workOrderGeneration/getAllMasterData',
    updatePath: (id: string) => `/maintenance/workOrderGeneration/update/${id}`,
    getByIdPath: (id: string) =>
      `/maintenance/workOrderGeneration/getById/${id}`,
    deletePath: (id: string) => `/maintenance/workOrderGeneration/delete/${id}`,
    viewChecklistByIdPath: (id: string) =>
      `/maintenance/workOrderGeneration/viewChecklistById/${id}`,
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
  viewChecklistById(id: any) {
    return this.http
      .get(this.routes.viewChecklistByIdPath(id))
      .pipe(map((res: any) => res));
  }
}
