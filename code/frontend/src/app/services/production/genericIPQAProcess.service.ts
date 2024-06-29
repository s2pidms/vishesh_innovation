import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class GenericIPQAProcessService {
    routes: any = {
        createOrUpdatePath: "/production/genericIPQA/createOrUpdate",
        getAllPath: "/production/genericIPQA/getAll",
        getAllMasterDataPath: "/production/genericIPQA/getAllMasterData",
        getByIdPath: (id: string) => `/production/genericIPQA/getById/${id}`
    };
    constructor(private http: ApiService) {}

    createOrUpdate(payload: any) {
        return this.http.post(this.routes.createOrUpdatePath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }

    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
}
