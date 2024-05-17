import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class BOMOfSKUService {
  routes: any = {
    createPath: '/planning/billOfMaterial/BoMOfSKU/create',
    getAllPath: '/planning/billOfMaterial/BoMOfSKU/getAll',
    getAllInkPath: '/planning/billOfMaterial/BoMOfSKU/getAllInkListBySKUId',
    getBOMBySKUIdForMRPPath: '/planning/billOfMaterial/BoMOfSKU/getBOMBySKUIdForMRP',
    getAllMasterDataPath: '/planning/billOfMaterial/BoMOfSKU/getAllMasterData',
    updatePath: (id: string) =>
      `/planning/billOfMaterial/BoMOfSKU/update/${id}`,
    getByIdPath: (id: string) =>
      `/planning/billOfMaterial/BoMOfSKU/getById/${id}`,
    deletePath: (id: string) =>
      `/planning/billOfMaterial/BoMOfSKU/delete/${id}`,
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
  getBOMBySKUIdForMRP(params: any) {
    return this.http
      .get(this.routes.getBOMBySKUIdForMRPPath, params)
      .pipe(map((res: any) => res));
  }
  getAllInkListBySKUId(params: any) {
    return this.http
      .get(this.routes.getAllInkPath, params)
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
