import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class StockPreparationIPQAService {
    routes: any = {
        createOrUpdatePath: "/production/stockCuttingIPQA/createOrUpdate",
        getAllPath: "/production/stockCuttingIPQA/getAll",
        getAllMasterDataPath: "/production/stockCuttingIPQA/getAllMasterData",
        getByIdPath: (id: string) => `/production/stockCuttingIPQA/getById/${id}`
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
