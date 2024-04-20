import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {EmployeeService} from "@services/hr";
import {StorageService, SpinnerService} from "@core/services";

@Component({
    selector: "app-employee-department-structure",
    templateUrl: "./employee-department-structure.component.html"
})
export class EmployeeDepartmentStructureComponent implements OnInit, OnDestroy {
    user: any = {};
    grades: any = [];
    employeesRecords: any = [];
    subscription!: Subscription;
    constructor(
        private spinner: SpinnerService,
        private employeeService: EmployeeService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
        this.user = this.storageService.get("IDMS_EMP");
        this.getAllData();
    }

    getAllData() {
        this.spinner.show();
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.employeeService
            .employeeDepartmentWiseStructure({employeeId: this.user?.employee})
            .subscribe(success => {
                this.grades = success.rows.sort((a: any, b: any) => (b - a ? 1 : -1));
                this.spinner.hide();
            });
    }
    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
    getEmp(a: any) {
        let data = this.employeesRecords.find((x: any) => x._id == a);
        return data?.employees ?? [];
    }
}
