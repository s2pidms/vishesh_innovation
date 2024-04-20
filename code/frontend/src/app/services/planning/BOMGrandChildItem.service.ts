import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class BOMGrandChildItemService {
    routes: any = {
        createPath: "/planning/billOfMaterial/BoMOfGrandChildItem/create",
        getAllPath: "/planning/billOfMaterial/BoMOfGrandChildItem/getAll",
        getAllMasterDataPath: "/planning/billOfMaterial/BoMOfGrandChildItem/getAllMasterData",
        updatePath: (id: string) => `/planning/billOfMaterial/BoMOfGrandChildItem/update/${id}`,
        getByIdPath: (id: string) => `/planning/billOfMaterial/BoMOfGrandChildItem/getById/${id}`,
        checkBOMOfGrChildExistsByIdPath: (id: string) =>
            `/planning/billOfMaterial/BoMOfGrandChildItem/checkBOMOfGrChildExistsById/${id}`,
        deletePath: (id: string) => `/planning/billOfMaterial/BoMOfGrandChildItem/delete/${id}`
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
    checkBOMOfGrChildExistsById(id: string) {
        return this.http.get(this.routes.checkBOMOfGrChildExistsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
