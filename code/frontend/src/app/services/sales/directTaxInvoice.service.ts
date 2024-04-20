import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '@core/services';

@Injectable({
  providedIn: 'root',
})
export class DirectTaxInvoiceService {
  routes: any = {
    createPath: '/sales/directTaxInvoice/create',
    getAllPath: '/sales/directTaxInvoice/getAll',
    getAllMasterDataPath: '/sales/directTaxInvoice/getAllMasterData',
    updatePath: (id: string) => `/sales/directTaxInvoice/update/${id}`,
    getByIdPath: (id: string) => `/sales/directTaxInvoice/getById/${id}`,
    DTIDetailsByCustomerIdPath: (id: string) =>
      `/sales/directTaxInvoice/DTIDetailsByCustomerId/${id}`,
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
  getDTIDetailsByCustomerId(id: string) {
    return this.http
      .get(this.routes.DTIDetailsByCustomerIdPath(id))
      .pipe(map((res: any) => res));
  }
}
