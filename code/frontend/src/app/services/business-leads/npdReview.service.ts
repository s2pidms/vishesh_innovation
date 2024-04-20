import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class NPDReviewService {
  routes: any = {
    createPath: '/businessLeads/NPDReview/create',
    getAllPath: '/businessLeads/NPDReview/getAll',
    getAllNPDFinalStatusReportPath:
      '/businessLeads/NPDReview/getAllNPDFinalStatusReport',
    getAllMasterDataPath: '/businessLeads/NPDReview/getAllMasterData',
    updatePath: (id: string) => `/businessLeads/NPDReview/update/${id}`,
    getByIdPath: (id: string) => `/businessLeads/NPDReview/getById/${id}`,
    deletePath: (id: string) => `/businessLeads/NPDReview/delete/${id}`,
    getAllNPDStatusReportPath: '/businessLeads/NPDReview/getAllNPDStatusReport',
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
  getAllNPDFinalStatusReport(params: any) {
    return this.http
      .get(this.routes.getAllNPDFinalStatusReportPath, params)
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
  getAllNPDStatusReport(params: any) {
    return this.http
      .get(this.routes.getAllNPDStatusReportPath, params)
      .pipe(map((res: any) => res));
  }
}
