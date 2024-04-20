import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class MenuService {
    public $titleChange = new Subject<string>();
    routes: any = {
        createPath: "/settings/menuItem/create",
        getAllPath: "/settings/menuItem/getAll",
        getAllGlobalDataPath: "/settings/menuItem/getAllGlobalData",
        updatePath: (id: string) => `/settings/menuItem/update/${id}`,
        getByIdPath: (id: string) => `/settings/menuItem/getById/${id}`,
        deletePath: (id: string) => `/settings/menuItem/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllGlobalData(params: any) {
        return this.http.get(this.routes.getAllGlobalDataPath, params).pipe(map((res: any) => res));
    }
    update(id: string, payload: any) {
        return this.http.put(this.routes.updatePath(id), payload).pipe(map((res: any) => res));
    }
    getById(id: any) {
        return this.http.get(this.routes.getByIdPath(id)).pipe(map((res: any) => res));
    }
    delete(id: string) {
        return this.http.delete(this.routes.deletePath(id)).pipe(map((res: any) => res));
    }
}
