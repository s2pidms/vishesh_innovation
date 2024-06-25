"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8187],{3411:(v,g,n)=>{n.d(g,{E:()=>y});var r=n(37398),s=n(65879),u=n(2742);let y=(()=>{var d;class c{constructor(i){this.http=i,this.routes={createPath:"/hr/payroll/create",getAllPath:"/hr/payroll/getAll",getAllMasterDataPath:p=>`/hr/payroll/getAllMasterData/${p}`,updatePath:p=>`/hr/payroll/update/${p}`,getByIdPath:p=>`/hr/payroll/getById/${p}`,deletePath:p=>`/hr/payroll/delete/${p}`,getAllReportsPath:"/hr/payroll/getAllReports"}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(p=>p))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(p=>p))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath(i)).pipe((0,r.U)(p=>p))}update(i,p){return this.http.put(this.routes.updatePath(i),p).pipe((0,r.U)(A=>A))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(p=>p))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(p=>p))}getAllReports(i){return this.http.get(this.routes.getAllReportsPath,i).pipe((0,r.U)(p=>p))}}return(d=c).\u0275fac=function(i){return new(i||d)(s.LFG(u.sM))},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),c})()},68187:(v,g,n)=>{n.d(g,{jj:()=>y,VG:()=>c,GP:()=>d,FL:()=>P,CZ:()=>i,qV:()=>p,lr:()=>A,Et:()=>U.E,Pl:()=>S,NP:()=>I,nu:()=>M});var r=n(37398),s=n(65879),u=n(2742);let y=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/advanceSalaryRequest/create",getAllPath:"/hr/advanceSalaryRequest/getAll",getAllMasterDataPath:"/hr/advanceSalaryRequest/getAllMasterData",updatePath:t=>`/hr/advanceSalaryRequest/update/${t}`,getByIdPath:t=>`/hr/advanceSalaryRequest/getById/${t}`,deletePath:t=>`/hr/advanceSalaryRequest/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),d=(()=>{var a;class h{constructor(e){this.http=e,this.routes={dashBoard:"/dashboard/hr",createPath:"/hr/employee/create",getAllPath:"/hr/employee/getAll",getAllMasterDataPath:"/hr/employee/getAllMasterData",gradeStructurePath:"/hr/employee/gradeStructure",updatePath:t=>`/hr/employee/update/${t}`,getByIdPath:t=>`/hr/employee/getById/${t}`,deletePath:t=>`/hr/employee/delete/${t}`,employeeExitReportPath:"/hr/employee/employeeExitReport"}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}gradeStructure(e){return this.http.get(this.routes.gradeStructurePath,e).pipe((0,r.U)(t=>t))}employeeDepartmentWiseStructure(e){return this.http.get(this.routes.employeeExitReportPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllDash(e){return this.http.get(this.routes.dashBoard,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),c=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/employeeAttendance/create",uploadEmployeeAttendancePath:"/hr/employeeAttendance/uploadEmployeeAttendance",getAllPath:"/hr/employeeAttendance/getAll",getAllMasterDataPath:t=>`/hr/employeeAttendance/getAllMasterData/${t}`,updatePath:t=>`/hr/employeeAttendance/update/${t}`,getByIdPath:t=>`/hr/employeeAttendance/getById/${t}`,deletePath:t=>`/hr/employeeAttendance/delete/${t}`,getAllReportsPath:"/hr/employeeAttendance/getAllReports"}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}uploadEmployeeAttendance(e){return this.http.post(this.routes.uploadEmployeeAttendancePath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath(e)).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),P=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/leavesApplication/create",getAllPath:"/hr/leavesApplication/getAll",getAllMasterDataPath:"/hr/leavesApplication/getAllMasterData",updateOnCancelPath:t=>`/hr/leavesApplication/updateOnCancel/${t}`,updatePath:t=>`/hr/leavesApplication/update/${t}`,getByIdPath:t=>`/hr/leavesApplication/getById/${t}`,deletePath:t=>`/hr/leavesApplication/delete/${t}`,getAllReportsPath:"/hr/leavesApplication/getAllReports",getPaidLeaveByEmpIdPath:t=>`/hr/leavesApplication/getPaidLeaveByEmpId/${t}`,updateOnLeaveAdjustmentPath:t=>`/hr/leavesApplication/updateOnLeaveAdjustment/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}updateOnCancel(e,t){return this.http.put(this.routes.updateOnCancelPath(e),t).pipe((0,r.U)(l=>l))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getPaidLeavesById(e){return this.http.get(this.routes.getPaidLeaveByEmpIdPath(e)).pipe((0,r.U)(t=>t))}updateOnLeaveAdjustment(e,t){return this.http.put(this.routes.updateOnLeaveAdjustmentPath(e),t).pipe((0,r.U)(l=>l))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),i=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/onDutyApplication/create",getAllPath:"/hr/onDutyApplication/getAll",getAllMasterDataPath:"/hr/onDutyApplication/getAllMasterData",getAllReports:"/hr/onDutyApplication/getAllReports",updatePath:t=>`/hr/onDutyApplication/update/${t}`,getByIdPath:t=>`/hr/onDutyApplication/getById/${t}`,deletePath:t=>`/hr/onDutyApplication/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),p=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/paidHoliday/create",getAllPath:"/hr/paidHoliday/getAll",updatePath:t=>`/hr/paidHoliday/update/${t}`,getByIdPath:t=>`/hr/paidHoliday/getById/${t}`,deletePath:t=>`/hr/paidHoliday/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),A=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/paidLeaves/create",getAllPath:"/hr/paidLeaves/getAll",getAllMasterDataPath:"/hr/paidLeaves/getAllMasterData",updatePath:t=>`/hr/paidLeaves/update/${t}`,getByIdPath:t=>`/hr/paidLeaves/getById/${t}`,deletePath:t=>`/hr/paidLeaves/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})();var U=n(3411);let S=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/salaryComponent/create",getAllPath:"/hr/salaryComponent/getAll",getAllMasterDataPath:"/hr/salaryComponent/getAllMasterData",updatePath:t=>`/hr/salaryComponent/update/${t}`,getByIdPath:t=>`/hr/salaryComponent/getById/${t}`,deletePath:t=>`/hr/salaryComponent/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),I=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/salaryMaster/create",getAllPath:"/hr/salaryMaster/getAll",getAllMasterDataPath:"/hr/salaryMaster/getAllMasterData",updatePath:t=>`/hr/salaryMaster/update/${t}`,getByIdPath:t=>`/hr/salaryMaster/getById/${t}`,deletePath:t=>`/hr/salaryMaster/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})(),M=(()=>{var a;class h{constructor(e){this.http=e,this.routes={createPath:"/hr/statutoryContributionsSetup/create",getAllPath:"/hr/statutoryContributionsSetup/getAll",getAllMasterDataPath:"/hr/statutoryContributionsSetup/getAllMasterData",updatePath:t=>`/hr/statutoryContributionsSetup/update/${t}`,getByIdPath:t=>`/hr/statutoryContributionsSetup/getById/${t}`,deletePath:t=>`/hr/statutoryContributionsSetup/delete/${t}`,createOrUpdatePath:"/hr/statutoryContributionsSetup/createOrUpdate",getByCompanyIdPath:"/hr/statutoryContributionsSetup/getByCompanyId"}}create(e){return this.http.post(this.routes.createOrUpdatePath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(l=>l))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getByCompanyId(e){return this.http.get(this.routes.getByCompanyIdPath,e).pipe((0,r.U)(t=>t))}}return(a=h).\u0275fac=function(e){return new(e||a)(s.LFG(u.sM))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),h})()}}]);