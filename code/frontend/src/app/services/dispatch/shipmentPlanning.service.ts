import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class ShipmentPlanningService {
    routes: any = {
        createPath: "/dispatch/shipment/create",
        getAllPath: "/dispatch/shipment/getAll",
        getAllMasterDataPath: "/dispatch/shipment/getAllMasterData",
        getAllShipmentSummaryReportsPath: "/dispatch/shipment/getAllShipmentSummaryReports",
        updatePath: (id: string) => `/dispatch/shipment/update/${id}`,
        getByIdPath: (id: string) => `/dispatch/shipment/getById/${id}`,
        deletePath: (id: string) => `/dispatch/shipment/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllShipmentSummaryReports(params: any) {
        return this.http.get(this.routes.getAllShipmentSummaryReportsPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
