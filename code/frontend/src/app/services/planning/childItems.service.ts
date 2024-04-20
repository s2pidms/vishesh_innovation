import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class ChildItemsService {
  routes: any = {
    createPath: '/planning/childItemMaster/create',
    getAllPath: '/planning/childItemMaster/getAll',
    viewByBOMIdPath: '/planning/childItemMaster/viewByBOMId',
    getAllReportsPath: '/planning/childItemMaster/getAllReports',
    getAllMasterDataPath: '/planning/childItemMaster/getAllMasterData',
    updatePath: (id: string) => `/planning/childItemMaster/update/${id}`,
    getByIdPath: (id: string) => `/planning/childItemMaster/getById/${id}`,
    deletePath: (id: string) => `/planning/childItemMaster/delete/${id}`,
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
  viewByBOMId(params: any) {
    return this.http
      .get(this.routes.viewByBOMIdPath, params)
      .pipe(map((res: any) => res));
  }
  getAllReports(params: any) {
    return this.http
      .get(this.routes.getAllReportsPath, params)
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
