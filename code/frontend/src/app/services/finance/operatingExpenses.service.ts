import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class OperatingExpensesService {
    routes: any = {
        createPath: "/finance/operatingExpenses/create",
        getAllPath: "/finance/operatingExpenses/getAll",
        getAllMasterDataPath: "/finance/operatingExpenses/getAllMasterData",
        updatePath: "/finance/operatingExpenses/update",
        getByIdPath: (id: string) => `/finance/operatingExpenses/getById/${id}`,
        deletePath: (id: string) => `/finance/operatingExpenses/delete/${id}`
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
    update(payload: any) {
        return this.http.post(this.routes.updatePath, payload).pipe(map((res: any) => res));
    }
    getById(id: string) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
