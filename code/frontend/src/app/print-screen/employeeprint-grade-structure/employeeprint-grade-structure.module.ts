import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {EmployeePrintGradeStructureComponent} from "./employeeprint-grade-structure.component";

const routes: Routes = [{path: "", component: EmployeePrintGradeStructureComponent}];

@NgModule({
    declarations: [EmployeePrintGradeStructureComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class EmployeePrintGradeStructureModule {}
