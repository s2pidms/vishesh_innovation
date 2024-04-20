import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {EmployeeService} from "@services/hr";
import {LIST_DEFAULT_PERMISSION_ACTIONS} from "@mocks/constant";
import {StorageService, SpinnerService} from "@core/services";

@Component({
    selector: "app-employee-grade-structure",
    templateUrl: "./employee-grade-structure.component.html"
})
export class EmployeeGradeStructureComponent implements OnInit, OnDestroy {
    grades: any = [];
    employeesRecords: any = [];
    user: any = {};
    rolePermissionActions: any = LIST_DEFAULT_PERMISSION_ACTIONS;
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

    windowprint() {
        window.open("/#/print/grade_structure", "_blank");
    }

    getAllData() {
        this.spinner.show();
        if (this.subscription) this.subscription.unsubscribe();
        this.subscription = this.employeeService.gradeStructure({}).subscribe(success => {
            this.grades = success.grades.sort((a: any, b: any) => (b - a ? 1 : -1));
            this.employeesRecords = success.rows;

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
