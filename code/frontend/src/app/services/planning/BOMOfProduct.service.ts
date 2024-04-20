import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class BOMOfProductService {
    routes: any = {
        createPath: "/planning/billOfMaterial/BoMOfProduct/create",
        getAllPath: "/planning/billOfMaterial/BoMOfProduct/getAll",
        getAllMergedItemForBOMOfProductPath: "/planning/billOfMaterial/BoMOfProduct/getAllMergedItemForBOMOfProduct",
        getAllInkPath: "/planning/billOfMaterial/BoMOfProduct/getAllInkListBySKUId",
        getAllMasterDataPath: "/planning/billOfMaterial/BoMOfProduct/getAllMasterData",
        updatePath: (id: string) => `/planning/billOfMaterial/BoMOfProduct/update/${id}`,
        getByIdPath: (id: string) => `/planning/billOfMaterial/BoMOfProduct/getById/${id}`,
        deletePath: (id: string) => `/planning/billOfMaterial/BoMOfProduct/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllMergedItemForBOMOfProduct(params: any) {
        return this.http.get(this.routes.getAllMergedItemForBOMOfProductPath, params).pipe(map((res: any) => res));
    }
    getAllInkListBySKUId(params: any) {
        return this.http.get(this.routes.getAllInkPath, params).pipe(map((res: any) => res));
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
