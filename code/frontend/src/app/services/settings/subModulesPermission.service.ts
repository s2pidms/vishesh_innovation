import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class SubModulesPermissionService {
  routes: any = {
    createPath: '/settings/subModulePermissions/create',
    getAllPath: '/settings/subModulePermissions/getAll',
    getAllMasterDataPath: '/settings/subModulePermissions/getAllMasterData',
    getAllFilterDataPath: '/settings/subModulePermissions/getAllFilterData',
    getByIdPath: (id: string) => `/settings/subModulePermissions/getById/${id}`,
    updatePath: (id: string) => `/settings/subModulePermissions/update/${id}`,
    deletePath: (id: string) => `/settings/subModulePermissions/delete/${id}`,
  };
  $titleChange: any;
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
  getAllMasterData(params: any) {
    return this.http
      .get(this.routes.getAllMasterDataPath, params)
      .pipe(map((res: any) => res));
  }
  update(id: any, payload: any) {
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
  getAllFilterData(params: any) {
    return this.http
      .get(this.routes.getAllFilterDataPath, params)
      .pipe(map((res: any) => res));
  }
}
