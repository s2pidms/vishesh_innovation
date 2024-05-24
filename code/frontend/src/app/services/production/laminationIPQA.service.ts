import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class LaminationIPQAService {
    routes: any = {
        createOrUpdatePath: "/production/laminationIPQA/createOrUpdate",
        getAllPath: "/production/laminationIPQA/getAll",
        getAllMasterDataPath: "/production/laminationIPQA/getAllMasterData",
        getByIdPath: (id: string) => `/production/laminationIPQA/getById/${id}`
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
