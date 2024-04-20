import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SalesInvoiceService {
    routes: any = {
        createPath: "/dispatch/salesInvoice/create",
        createDirectTaxInvoicePath: "/dispatch/salesInvoice/createDirectTaxInvoice",
        getAllPath: "/dispatch/salesInvoice/getAll",
        getAllSalesRegisterReportsPath: "/dispatch/salesInvoice/getAllSalesRegisterReports",
        getAllEwayBillListPath: "/dispatch/salesInvoice/getAllEwayBillList",
        eWayBillGeneratePath: "/dispatch/salesInvoice/eWayBillGenerate",
        eInvoiceGeneratePath: "/dispatch/salesInvoice/eInvoiceGenerate",
        getAllReportsPath: "/dispatch/salesInvoice/getAllReports",
        getAllSILineDetailsPath: "/dispatch/salesInvoice/getAllSILineDetails",
        getAllMasterDataPath: "/dispatch/salesInvoice/getAllMasterData",
        getAllSalesAndInvoiceAnalysisPath: "/dispatch/salesInvoice/getAllSalesAndInvoiceAnalysis",
        updateDirectTaxInvoicePath: (id: string) => `/dispatch/salesInvoice/updateDirectTaxInvoice/${id}`,
        getByIdPath: (id: string) => `/dispatch/salesInvoice/getById/${id}`,
        getSalesInvoiceByIdForPDFPath: (id: string) => `/dispatch/salesInvoice/getSalesInvoiceByIdForPDF/${id}`,
        deletePath: (id: string) => `/dispatch/salesInvoice/delete/${id}`,
        previewTaxInvPath: `/dispatch/salesInvoice/previewTaxInv`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    eWayBillGenerate(payload: any) {
        return this.http.post(this.routes.eWayBillGeneratePath, payload).pipe(map((res: any) => res));
    }
    eInvoiceGenerate(payload: any) {
        return this.http.post(this.routes.eInvoiceGeneratePath, payload).pipe(map((res: any) => res));
    }
    createDirectTaxInvoice(payload: any) {
        return this.http.post(this.routes.createDirectTaxInvoicePath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllSalesRegisterReports(params: any) {
        return this.http.get(this.routes.getAllSalesRegisterReportsPath, params).pipe(map((res: any) => res));
    }
    getAllEwayBillList(params: any) {
        return this.http.get(this.routes.getAllEwayBillListPath, params).pipe(map((res: any) => res));
    }
    getAllSalesAndInvoiceAnalysis(params: any) {
        return this.http.get(this.routes.getAllSalesAndInvoiceAnalysisPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }
    getAllSILineDetails(params: any) {
        return this.http.get(this.routes.getAllSILineDetailsPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    updateDirectTaxInvoice(id: string, payload: any) {
        return this.http.put(this.routes.updateDirectTaxInvoicePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getSalesInvoiceByIdForPDF(id: string) {
        return this.http.get(this.routes.getSalesInvoiceByIdForPDFPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    previewTaxInv(payload: any) {
        return this.http.post(this.routes.previewTaxInvPath, payload).pipe(map((res: any) => res));
    }
}
