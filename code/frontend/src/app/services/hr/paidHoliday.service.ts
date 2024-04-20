import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class PaidHolidayService {
    routes: any = {
        createPath: "/hr/paidHoliday/create",
        getAllPath: "/hr/paidHoliday/getAll",
        updatePath: (id: string) => `/hr/paidHoliday/update/${id}`,
        getByIdPath: (id: string) => `/hr/paidHoliday/getById/${id}`,
        deletePath: (id: string) => `/hr/paidHoliday/delete/${id}`
    };
    constructor(private http: ApiService) {}

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
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
