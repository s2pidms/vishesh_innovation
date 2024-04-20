import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {ApiService} from "@core/services";

@Injectable({
    providedIn: "root"
})
export class SuppliersService {
    routes: any = {
        createPath: "/purchase/supplierMaster/create",
        getAllPath: "/purchase/supplierMaster/getAll",
        getAllReportsPath: "/purchase/supplierMaster/getAllReports",
        getAllMasterDataPath: "/purchase/supplierMaster/getAllMasterData",
        uploadSupplierFilePath: "/purchase/supplierMaster/uploadSupplierFile",
        uploadAndCheckCSVFilePath: "/settings/company/uploadAndCheckCSVFile",
        bulkInsertByCSVFilePath: "/settings/company/bulkInsertByCSVFile",
        updatePath: (id: string) => `/purchase/supplierMaster/update/${id}`,
        getByIdPath: (id: string) => `/purchase/supplierMaster/getById/${id}`,
        deletePath: (id: string) => `/purchase/supplierMaster/delete/${id}`
    };
    constructor(private http: ApiService) {}
    uploadSupplierFile(payload: any) {
        return this.http.post(this.routes.uploadSupplierFilePath, payload).pipe(map((res: any) => res));
    }
    uploadAndCheckCSVFile(payload: any) {
        return this.http.post(this.routes.uploadAndCheckCSVFilePath, payload).pipe(map((res: any) => res));
    }
    bulkInsertByCSVFile(payload: any) {
        return this.http.post(this.routes.bulkInsertByCSVFilePath, payload).pipe(map((res: any) => res));
    }
    create(payload: any) {
        return this.http.post(this.routes.createPath, payload).pipe(map((res: any) => res));
    }
    getAll(params: any) {
        return this.http.get(this.routes.getAllPath, params).pipe(map((res: any) => res));
    }
    getAllReports(params: any) {
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
}
