import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class WIPInventoryService {
    routes: any = {
        getAllPath: "/planning/WIPInventory/getAll",
        getAllReports: "/planning/WIPInventory/getAllReports"
    };
    constructor(private http: ApiService) {}

    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }

    getAllReports(params: any) {
        return this.http.get(this.routes.getAllReports, params).pipe(map((res: any) => res));
    }
}
