import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class CreditNoteService {
  routes: any = {
    createPath: '/sales/creditNote/create',
    getAllPath: '/sales/creditNote/getAll',
    getAllReports: '/sales/creditNote/getAllReports',
    getAllPpvReports: '/sales/creditNote/getAllPPVReports',
    getAllMasterDataPath: '/sales/creditNote/getAllMasterData',
    getAllCNSummaryReportsPath: '/sales/creditNote/getAllCNSummaryReports',
    getAllCNDetailsReportsPath: '/sales/creditNote/getAllCNDetailsReports',
    updatePath: (id: string) => `/sales/creditNote/update/${id}`,
    getAllCreditNoteByCustomerIdPath: (id: string) =>
      `/sales/creditNote/getAllCreditNoteByCustomerId/${id}`,
    getByIdPath: (id: string) => `/sales/creditNote/getById/${id}`,
    getCNDetailsByIdPath: (id: string) =>
      `/sales/creditNote/getCNDetailsById/${id}`,
    deletePath: (id: string) => `/sales/creditNote/delete/${id}`,
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
  getAllCNSummaryReports(params: any) {
    return this.http
      .get(this.routes.getAllCNSummaryReportsPath, params)
      .pipe(map((res: any) => res));
  }
  getAllCNDetailsReports(params: any) {
    return this.http
      .get(this.routes.getAllCNDetailsReportsPath, params)
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
  getCNDetailsById(id: string) {
    return this.http
      .get(this.routes.getCNDetailsByIdPath(id))
      .pipe(map((res: any) => res));
  }
  getAllCreditNoteByCustomerId(id: string) {
    return this.http
      .get(this.routes.getAllCreditNoteByCustomerIdPath(id))
      .pipe(map((res: any) => res));
  }
  delete(id: string) {
    return this.http
      .delete(this.routes.deletePath(id))
      .pipe(map((res: any) => res));
  }
}
