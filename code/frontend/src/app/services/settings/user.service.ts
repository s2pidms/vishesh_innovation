import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class UserService {
    public $titleChange = new Subject<string>();
    routes: any = {
        createPath: "/settings/user/register",
        loginPath: "/settings/user/login",
        getCompanyURLsPath: "/settings/company/getCompanyURLs",
        getAllPath: "/settings/user/getAll",
        getAllReportsPath: "/settings/user/reports",
        forgetPath: "/settings/user/forgot-password",
        getAllMasterDataPath: "/settings/user/getAllMasterData",
        updatePath: (id: string) => `/settings/user/update/${id}`,
        getByIdPath: (id: string) => `/settings/user/profile/${id}`,
        deletePath: (id: string) => `/settings/user/delete/${id}`
    };
    constructor(private http: ApiService) {}

    getCompanyURLs(params: any) {
        return this.http.get(this.routes.getCompanyURLsPath, params).pipe(map((res: any) => res));
    }

    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    login(payload: any) {
        return this.http.post(this.routes.loginPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReport(params: any) {
        return this.http.get(this.routes.getAllReportsPath, params).pipe(map((res: any) => res));
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
    forgetpass(payload: any) {
        return this.http.post(this.routes.forgetPath, payload).pipe(map((res: any) => res));
    }
}
