"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8187],{3411:(g,n,o)=>{o.d(n,{E:()=>d});var a=o(37398),s=o(65879),l=o(98977);let d=(()=>{class u{constructor(i){this.http=i,this.routes={createPath:"/hr/payroll/create",getAllPath:"/hr/payroll/getAll",getAllMasterDataPath:h=>`/hr/payroll/getAllMasterData/${h}`,updatePath:h=>`/hr/payroll/update/${h}`,getByIdPath:h=>`/hr/payroll/getById/${h}`,deletePath:h=>`/hr/payroll/delete/${h}`,getAllReportsPath:"/hr/payroll/getAllReports"}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(h=>h))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(h=>h))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath(i)).pipe((0,a.U)(h=>h))}update(i,h){return this.http.put(this.routes.updatePath(i),h).pipe((0,a.U)(c=>c))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(h=>h))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(h=>h))}getAllReports(i){return this.http.get(this.routes.getAllReportsPath,i).pipe((0,a.U)(h=>h))}static#t=this.\u0275fac=function(h){return new(h||u)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},68187:(g,n,o)=>{o.d(n,{jj:()=>d,VG:()=>P,GP:()=>u,FL:()=>i,CZ:()=>h,qV:()=>c,lr:()=>y,Et:()=>A.E,Pl:()=>U,NP:()=>I,nu:()=>M});var a=o(37398),s=o(65879),l=o(98977);let d=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/advanceSalaryRequest/create",getAllPath:"/hr/advanceSalaryRequest/getAll",getAllMasterDataPath:"/hr/advanceSalaryRequest/getAllMasterData",updatePath:t=>`/hr/advanceSalaryRequest/update/${t}`,getByIdPath:t=>`/hr/advanceSalaryRequest/getById/${t}`,deletePath:t=>`/hr/advanceSalaryRequest/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),u=(()=>{class r{constructor(e){this.http=e,this.routes={dashBoard:"/dashboard/hr",createPath:"/hr/employee/create",getAllPath:"/hr/employee/getAll",getAllMasterDataPath:"/hr/employee/getAllMasterData",gradeStructurePath:"/hr/employee/gradeStructure",updatePath:t=>`/hr/employee/update/${t}`,getByIdPath:t=>`/hr/employee/getById/${t}`,deletePath:t=>`/hr/employee/delete/${t}`,employeeExitReportPath:"/hr/employee/employeeExitReport"}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}gradeStructure(e){return this.http.get(this.routes.gradeStructurePath,e).pipe((0,a.U)(t=>t))}employeeDepartmentWiseStructure(e){return this.http.get(this.routes.employeeExitReportPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllDash(e){return this.http.get(this.routes.dashBoard,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),P=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/employeeAttendance/create",uploadEmployeeAttendancePath:"/hr/employeeAttendance/uploadEmployeeAttendance",getAllPath:"/hr/employeeAttendance/getAll",getAllMasterDataPath:t=>`/hr/employeeAttendance/getAllMasterData/${t}`,updatePath:t=>`/hr/employeeAttendance/update/${t}`,getByIdPath:t=>`/hr/employeeAttendance/getById/${t}`,deletePath:t=>`/hr/employeeAttendance/delete/${t}`,getAllReportsPath:"/hr/employeeAttendance/getAllReports"}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}uploadEmployeeAttendance(e){return this.http.post(this.routes.uploadEmployeeAttendancePath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath(e)).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),i=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/leavesApplication/create",getAllPath:"/hr/leavesApplication/getAll",getAllMasterDataPath:"/hr/leavesApplication/getAllMasterData",updateOnCancelPath:t=>`/hr/leavesApplication/updateOnCancel/${t}`,updatePath:t=>`/hr/leavesApplication/update/${t}`,getByIdPath:t=>`/hr/leavesApplication/getById/${t}`,deletePath:t=>`/hr/leavesApplication/delete/${t}`,getAllReportsPath:"/hr/leavesApplication/getAllReports",getPaidLeaveByEmpIdPath:t=>`/hr/leavesApplication/getPaidLeaveByEmpId/${t}`,updateOnLeaveAdjustmentPath:t=>`/hr/leavesApplication/updateOnLeaveAdjustment/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}updateOnCancel(e,t){return this.http.put(this.routes.updateOnCancelPath(e),t).pipe((0,a.U)(p=>p))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,a.U)(t=>t))}getPaidLeavesById(e){return this.http.get(this.routes.getPaidLeaveByEmpIdPath(e)).pipe((0,a.U)(t=>t))}updateOnLeaveAdjustment(e,t){return this.http.put(this.routes.updateOnLeaveAdjustmentPath(e),t).pipe((0,a.U)(p=>p))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),h=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/onDutyApplication/create",getAllPath:"/hr/onDutyApplication/getAll",getAllMasterDataPath:"/hr/onDutyApplication/getAllMasterData",getAllReports:"/hr/onDutyApplication/getAllReports",updatePath:t=>`/hr/onDutyApplication/update/${t}`,getByIdPath:t=>`/hr/onDutyApplication/getById/${t}`,deletePath:t=>`/hr/onDutyApplication/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),c=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/paidHoliday/create",getAllPath:"/hr/paidHoliday/getAll",updatePath:t=>`/hr/paidHoliday/update/${t}`,getByIdPath:t=>`/hr/paidHoliday/getById/${t}`,deletePath:t=>`/hr/paidHoliday/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),y=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/paidLeaves/create",getAllPath:"/hr/paidLeaves/getAll",getAllMasterDataPath:"/hr/paidLeaves/getAllMasterData",updatePath:t=>`/hr/paidLeaves/update/${t}`,getByIdPath:t=>`/hr/paidLeaves/getById/${t}`,deletePath:t=>`/hr/paidLeaves/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var A=o(3411);let U=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/salaryComponent/create",getAllPath:"/hr/salaryComponent/getAll",getAllMasterDataPath:"/hr/salaryComponent/getAllMasterData",updatePath:t=>`/hr/salaryComponent/update/${t}`,getByIdPath:t=>`/hr/salaryComponent/getById/${t}`,deletePath:t=>`/hr/salaryComponent/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),I=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/salaryMaster/create",getAllPath:"/hr/salaryMaster/getAll",getAllMasterDataPath:"/hr/salaryMaster/getAllMasterData",updatePath:t=>`/hr/salaryMaster/update/${t}`,getByIdPath:t=>`/hr/salaryMaster/getById/${t}`,deletePath:t=>`/hr/salaryMaster/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),M=(()=>{class r{constructor(e){this.http=e,this.routes={createPath:"/hr/statutoryContributionsSetup/create",getAllPath:"/hr/statutoryContributionsSetup/getAll",getAllMasterDataPath:"/hr/statutoryContributionsSetup/getAllMasterData",updatePath:t=>`/hr/statutoryContributionsSetup/update/${t}`,getByIdPath:t=>`/hr/statutoryContributionsSetup/getById/${t}`,deletePath:t=>`/hr/statutoryContributionsSetup/delete/${t}`,createOrUpdatePath:"/hr/statutoryContributionsSetup/createOrUpdate",getByCompanyIdPath:"/hr/statutoryContributionsSetup/getByCompanyId"}}create(e){return this.http.post(this.routes.createOrUpdatePath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}getByCompanyId(e){return this.http.get(this.routes.getByCompanyIdPath,e).pipe((0,a.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||r)(s.LFG(l.sM))};static#e=this.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);