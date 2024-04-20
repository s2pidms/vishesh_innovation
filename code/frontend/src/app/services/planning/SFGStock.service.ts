import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SFGStockService {
    routes: any = {
        createPath: "/planning/SFGStock/create",
        getAllPath: "/planning/SFGStock/getAll",
        getSheetToSheetListPath: "/planning/SFGStock/getSheetToSheetList",
        getAllReports: "/planning/SFGStock/getAllReports",
        getAllMasterDataPath: "/planning/SFGStock/getAllMasterData",
        getAllFilteredItemsPath: "/planning/SFGStock/getAllFilteredItems",
        getStockPreparationByIdAndTypePath: "/planning/SFGStock/getStockPreparationByIdAndType",
        updatePath: (id: string) => `/planning/SFGStock/update/${id}`,
        getByIdPath: (id: string) => `/planning/SFGStock/getById/${id}`,
        deletePath: (id: string) => `/planning/SFGStock/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getSheetToSheetList(params: any) {
        return this.http.get(this.routes.getSheetToSheetListPath, params).pipe(map((res: any) => res));
    }

    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReports, params).pipe(map((res: any) => res));
    }
    getAllPpvReports(params: any) {
        return this.http.get(this.routes.getAllPpvReports, params).pipe(map((res: any) => res));
    }
    getAllMasterData(params: any) {
        return this.http.get(this.routes.getAllMasterDataPath, params).pipe(map((res: any) => res));
    }
    getAllFilteredItems(params: any) {
        return this.http.get(this.routes.getAllFilteredItemsPath, params).pipe(map((res: any) => res));
    }
    getStockPreparationByIdAndType(params: any) {
        return this.http.get(this.routes.getStockPreparationByIdAndTypePath, params).pipe(map((res: any) => res));
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
