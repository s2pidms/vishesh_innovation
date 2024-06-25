"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[770],{13107:(m,c,h)=>{h.d(c,{t:()=>a});const a={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(m,c,h)=>{h.d(c,{J:()=>a});const a=({data:i,headers:l,widths:u,title:g})=>({tableData:{widths:u,headerRows:1,body:[l.map(o=>({text:o.header,style:"header"})),...i.map(o=>l.map(A=>({style:"subheader",text:o[A.key]})))]},title:g})},10583:(m,c,h)=>{h.d(c,{lF:()=>u,cw:()=>g,zD:()=>d,Y4:()=>P,p0:()=>A,KH:()=>y,HY:()=>v,b0:()=>S,Mt:()=>U,qv:()=>R,fC:()=>o});var a=h(37398),i=h(65879),l=h(2742);let u=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/calibrationAndVerification/create",getAllPath:"/maintenance/calibrationAndVerification/getAll",getAllReportsPath:"/maintenance/calibrationAndVerification/getAllReports",getAllDNSummaryReportsPath:"/maintenance/calibrationAndVerification/getAllDNSummaryReports",getAllDNDetailsReportsPath:"/maintenance/calibrationAndVerification/getAllDNDetailsReports",getAllMasterDataPath:"/maintenance/calibrationAndVerification/getAllMasterData",excelDownloadPPVpath:"/maintenance/calibrationAndVerification/excelDownloadForPPVReports",updatePath:t=>`/maintenance/calibrationAndVerification/update/${t}`,getAllAssetBySupplierIdPath:t=>`/maintenance/calibrationAndVerification/getAll calibrationAndVerificationBySupplierId/${t}`,getByIdPath:t=>`/maintenance/calibrationAndVerification/getById/${t}`,getDNDetailsByIdPath:t=>`/maintenance/calibrationAndVerification/getDNDetailsById/${t}`,deletePath:t=>`/maintenance/calibrationAndVerification/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllPPVExcel(e){return this.http.get(this.routes.excelDownloadPPVpath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,a.U)(t=>t))}getAllDNSummaryReports(e){return this.http.get(this.routes.getAllDNSummaryReportsPath,e).pipe((0,a.U)(t=>t))}getAllDNDetailsReports(e){return this.http.get(this.routes.getAllDNDetailsReportsPath,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}excelDownload(e){return this.http.getFile(this.routes.excelDownloadPPVpath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}getDNDetailsById(e){return this.http.get(this.routes.getDNDetailsByIdPath(e)).pipe((0,a.U)(t=>t))}getAllDebitNoteBySupplierId(e){return this.http.get(this.routes.getAllDebitNoteBySupplierIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),g=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/calibrationStandard/create",getAllPath:"/maintenance/calibrationStandard/getAll",getAllReports:"/maintenance/calibrationStandard/getAllReports",getAllMasterDataPath:"/maintenance/calibrationStandard/getAllMasterData",updatePath:t=>`/maintenance/calibrationStandard/update/${t}`,getByIdPath:t=>`/maintenance/calibrationStandard/getById/${t}`,deletePath:t=>`/maintenance/calibrationStandard/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),d=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/workOrderGeneration/create",getAllPath:"/maintenance/workOrderGeneration/getAll",getAllReports:"/maintenance/workOrderGeneration/getAllReports",getAllMasterDataPath:"/maintenance/workOrderGeneration/getAllMasterData",updatePath:t=>`/maintenance/workOrderGeneration/update/${t}`,getByIdPath:t=>`/maintenance/workOrderGeneration/getById/${t}`,deletePath:t=>`/maintenance/workOrderGeneration/delete/${t}`,viewChecklistByIdPath:t=>`/maintenance/workOrderGeneration/viewChecklistById/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}viewChecklistById(e){return this.http.get(this.routes.viewChecklistByIdPath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),P=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/maintenanceChecklist/create",getAllPath:"/maintenance/maintenanceChecklist/getAll",getAllReports:"/maintenance/maintenanceChecklist/getAllReports",getAllMasterDataPath:"/maintenance/maintenanceChecklist/getAllMasterData",updatePath:t=>`/maintenance/maintenanceChecklist/update/${t}`,getByIdPath:t=>`/maintenance/maintenanceChecklist/getById/${t}`,deletePath:t=>`/maintenance/maintenanceChecklist/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),o=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/maintenanceScheduleCreation/create",getAllPath:"/maintenance/maintenanceScheduleCreation/getAll",getAllReports:"/maintenance/maintenanceScheduleCreation/getAllReports",getAllMasterDataPath:"/maintenance/maintenanceScheduleCreation/getAllMasterData",updatePath:t=>`/maintenance/maintenanceScheduleCreation/update/${t}`,getByIdPath:t=>`/maintenance/maintenanceScheduleCreation/getById/${t}`,deletePath:t=>`/maintenance/maintenanceScheduleCreation/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),A=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/maintenanceWarranty/create",getAllPath:"/maintenance/maintenanceWarranty/getAll",getAllReports:"/maintenance/maintenanceWarranty/getAllReports",getAllMasterDataPath:"/maintenance/maintenanceWarranty/getAllMasterData",updatePath:t=>`/maintenance/maintenanceWarranty/update/${t}`,getByIdPath:t=>`/maintenance/maintenanceWarranty/getById/${t}`,deletePath:t=>`/maintenance/maintenanceWarranty/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),y=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/maintenanceMetrics/create",getAllPath:"/maintenance/maintenanceMetrics/getAll",getAllReports:"/maintenance/maintenanceMetrics/getAllReports",getAllMasterDataPath:"/maintenance/maintenanceMetrics/getAllMasterData",updatePath:t=>`/maintenance/maintenanceMetrics/update/${t}`,getByIdPath:t=>`/maintenance/maintenanceMetrics/getById/${t}`,deletePath:t=>`/maintenance/maintenanceMetrics/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),v=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/qualityEquipment/create",getAllPath:"/maintenance/qualityEquipment/getAll",getAllReports:"/maintenance/qualityEquipment/getAllReports",getAllMasterDataPath:"/maintenance/qualityEquipment/getAllMasterData",updatePath:t=>`/maintenance/qualityEquipment/update/${t}`,getByIdPath:t=>`/maintenance/qualityEquipment/getById/${t}`,deletePath:t=>`/maintenance/qualityEquipment/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),U=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/maintenanceTask/create",getAllPath:"/maintenance/maintenanceTask/getAll",getAllReports:"/maintenance/maintenanceTask/getAllReports",getAllMasterDataPath:"/maintenance/maintenanceTask/getAllMasterData",updatePath:t=>`/maintenance/maintenanceTask/update/${t}`,getByIdPath:t=>`/maintenance/maintenanceTask/getById/${t}`,deletePath:t=>`/maintenance/maintenanceTask/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),S=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/taskSchedule/create",getAllPath:"/maintenance/taskSchedule/getAll",getAllReports:"/maintenance/taskSchedule/getAllReports",getAllMasterDataPath:"/maintenance/taskSchedule/getAllMasterData",updatePath:t=>`/maintenance/taskSchedule/update/${t}`,getByIdPath:t=>`/maintenance/taskSchedule/getById/${t}`,deletePath:t=>`/maintenance/taskSchedule/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})(),R=(()=>{var r;class n{constructor(e){this.http=e,this.routes={createPath:"/maintenance/maintenanceTechnician/create",getAllPath:"/maintenance/maintenanceTechnician/getAll",getAllReports:"/maintenance/maintenanceTechnician/getAllReports",getAllMasterDataPath:"/maintenance/maintenanceTechnician/getAllMasterData",updatePath:t=>`/maintenance/maintenanceTechnician/update/${t}`,getByIdPath:t=>`/maintenance/maintenanceTechnician/getById/${t}`,deletePath:t=>`/maintenance/maintenanceTechnician/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,a.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,a.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReports,e).pipe((0,a.U)(t=>t))}getAllPpvReports(e){return this.http.get(this.routes.getAllPpvReports,e).pipe((0,a.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,a.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,a.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,a.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,a.U)(t=>t))}}return(r=n).\u0275fac=function(e){return new(e||r)(i.LFG(l.sM))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),n})()}}]);