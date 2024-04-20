import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '@services/hr';

import {
  StorageService,
  MenuTitleService,
  SpinnerService,
} from '@core/services';

@Component({
  selector: 'app-employeeprint-grade-structure',
  templateUrl: './employeeprint-grade-structure.component.html',
  styleUrls: ['./employeeprint-grade-structure.component.scss'],
})
export class EmployeePrintGradeStructureComponent implements OnInit {
  grades: any = [];
  employeesRecords: any = [];
  user: any = {};

  constructor(
    private menuTitleService: MenuTitleService,
    private spinner: SpinnerService,
    private employeeService: EmployeeService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.user = this.storageService.get('IDMS_EMP');
    this.getAllData();
    this.menuTitleService.set({
      title: 'Employee Grade Structure',
      subTitle: null,
      type: null,
    });
  }

  windowPrint() {
    window.print();
  }

  getAllData() {
    this.spinner.show();
    this.employeeService.gradeStructure({}).subscribe((success) => {
      this.grades = success.grades.sort((a: any, b: any) => (b - a ? 1 : -1));
      this.employeesRecords = success.rows;

      this.spinner.hide();
    });
  }
  getEmp(a: any) {
    let data = this.employeesRecords.find((x: any) => x._id == a);

    return data?.employees ?? [];
  }
}
