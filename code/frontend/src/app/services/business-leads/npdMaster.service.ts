import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class NPDMasterService {
    routes: any = {
        createPath: "/businessLeads/NPDMaster/create",
        getAllPath: "/businessLeads/NPDMaster/getAll",
        getAllMasterDataPath: "/businessLeads/NPDMaster/getAllMasterData",
        updatePath: (id: string) => `/businessLeads/NPDMaster/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/NPDMaster/getById/${id}`,
        getAllNPDMasterByDSKUIdPath: (id: string) => `/businessLeads/NPDMaster/getAllNPDMasterByDSKUId/${id}`,
        deletePath: (id: string) => `/businessLeads/NPDMaster/delete/${id}`,
        getAllDSKUConversionPath: "/businessLeads/NPDMaster/getAllPendingDSKUConversionReport",
        getAllDSKUToSKUConversionPath: "/businessLeads/NPDMaster/getAllDSKUToSKUConversionReport"
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
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    getAllNPDMasterByDSKUId(id: string) {
        return this.http.get(this.routes.getAllNPDMasterByDSKUIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
    getAllPendingDSKUConversionReport(params: any) {
        return this.http.get(this.routes.getAllDSKUConversionPath, params).pipe(map((res: any) => res));
    }
    getAllDSKUToSKUConversionReport(params: any) {
        return this.http.get(this.routes.getAllDSKUToSKUConversionPath, params).pipe(map((res: any) => res));
    }
}
