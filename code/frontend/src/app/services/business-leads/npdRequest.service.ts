import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class NPDRequestService {
    routes: any = {
        createPath: "/businessLeads/NPD/create",
        getAllPath: "/businessLeads/NPD/getAll",
        getAllMasterDataPath: "/businessLeads/NPD/getAllMasterData",
        updatePath: (id: string) => `/businessLeads/NPD/update/${id}`,
        getByIdPath: (id: string) => `/businessLeads/NPD/getById/${id}`,
        deletePath: (id: string) => `/businessLeads/NPD/delete/${id}`
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
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
