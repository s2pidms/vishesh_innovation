import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class BOMChildPartService {
    routes: any = {
        createPath: "/planning/billOfMaterial/BoMOfChildPart/create",
        getAllPath: "/planning/billOfMaterial/BoMOfChildPart/getAll",
        getAllMasterDataPath: "/planning/billOfMaterial/BoMOfChildPart/getAllMasterData",
        updatePath: (id: string) => `/planning/billOfMaterial/BoMOfChildPart/update/${id}`,
        getByIdPath: (id: string) => `/planning/billOfMaterial/BoMOfChildPart/getById/${id}`,
        checkBOMOfChildExistsByIdPath: (id: string) =>
            `/planning/billOfMaterial/BoMOfChildPart/checkBOMOfChildExistsById/${id}`,
        deletePath: (id: string) => `/planning/billOfMaterial/BoMOfChildPart/delete/${id}`
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
    checkBOMOfChildExistsById(id: string) {
        return this.http.get(this.routes.checkBOMOfChildExistsByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
