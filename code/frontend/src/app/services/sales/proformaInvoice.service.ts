import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class ProformaInvoiceService {
    routes: any = {
        createPath: "/sales/proformaInvoice/create",
        getAllPath: "/sales/proformaInvoice/getAll",
        getAllReportPath: "/sales/proformaInvoice/getAllReports",
        getAllMasterDataPath: "/sales/proformaInvoice/getAllMasterData",
        getCustomerByCategoryPath: "/sales/proformaInvoice/getCustomerByCategory",
        getSKUListByCustomerPath: "/sales/proformaInvoice/getSKUListByCustomer",
        getAllCancelProformaInvoice: "/sales/proformaInvoice/getAllCancelProformaInvoice",
        updatePath: (id: string) => `/sales/proformaInvoice/update/${id}`,
        getByIdPath: (id: string) => `/sales/proformaInvoice/getById/${id}`,
        getProInvDetailsByIdPath: (id: string) => `/sales/proformaInvoice/getProInvDetailsById/${id}`,
        deletePath: (id: string) => `/sales/proformaInvoice/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getCustomerByCategory(params: any) {
        return this.http.get(this.routes.getCustomerByCategoryPath, params).pipe(map((res: any) => res));
    }
    getSKUListByCustomer(params: any) {
        return this.http.get(this.routes.getSKUListByCustomerPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getProInvDetailsById(id: string) {
        return this.http.get(this.routes.getProInvDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
