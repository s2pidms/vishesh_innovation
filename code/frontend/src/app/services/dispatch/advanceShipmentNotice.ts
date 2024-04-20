import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class AdvanceShipmentNotice {
    routes: any = {
        createPath: "/dispatch/advanceShipmentNotice/create",
        getAllPath: "/dispatch/advanceShipmentNotice/getAll",
        getAllReportsPath: "/dispatch/advanceShipmentNotice/getAllReports",
        getAllMasterDataPath: "/dispatch/advanceShipmentNotice/getAllMasterData",
        ASNDetailsBySalesInvoiceIdPath: (id: string) =>
            `/dispatch/advanceShipmentNotice/ASNDetailsBySalesInvoiceId/${id}`,
        getAllShipmentSummaryReportsPath: "/dispatch/advanceShipmentNotice/getAllShipmentSummaryReports",
        updatePath: (id: string) => `/dispatch/advanceShipmentNotice/update/${id}`,
        getByIdPath: (id: string) => `/dispatch/advanceShipmentNotice/getById/${id}`,
        sendMailByIdPath: (id: string) => `/dispatch/advanceShipmentNotice/sendMailById/${id}`,
        getASNDetailsByIdPath: (id: string) => `/dispatch/advanceShipmentNotice/getANSDetailsById/${id}`,
        deletePath: (id: string) => `/dispatch/advanceShipmentNotice/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
    }

    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllShipmentSummaryReports(params: any) {
        return this.http.get(this.routes.getAllShipmentSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    ASNDetailsBySalesInvoiceId(id: string) {
        return this.http.get(this.routes.ASNDetailsBySalesInvoiceIdPath(id)).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getASNDetailsById(id: string) {
        return this.http.get(this.routes.getASNDetailsByIdPath(id)).pipe(map((res: any) => res));
    }
    sendMailById(id: string) {
        return this.http.get(this.routes.sendMailByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
