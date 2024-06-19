"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[514],{50514:(H,g,c)=>{c.r(g),c.d(g,{ProcessResourceManagementModule:()=>Y});var u=c(96814),h=c(1076),f=c(43818),v=c(25116),b=c(4882),_=c(77203),e=c(65879),l=c(2742),Z=c(38011),C=c(37285),A=c(88059),T=c(53421);function M(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){e.CHM(t);const n=e.oxw().$implicit,r=e.oxw();return e.KtG(r.openConfirmModal(null==n?null:n._id,null==n?null:n.processName))}),e._UZ(1,"i",28),e._uU(2," Delete "),e.qZA()}}function P(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td",19),e._uU(2),e.qZA(),e.TgZ(3,"td",19),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",20),e._UZ(15,"button",21),e.TgZ(16,"div",22)(17,"a",23),e.NdJ("click",function(){const r=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("../form",null==r?null:r._id,"view"))}),e._UZ(18,"i",24),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",23),e.NdJ("click",function(){const r=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("../form",null==r?null:r._id,"edit"))}),e._UZ(21,"i",25),e._uU(22," Edit "),e.qZA(),e.YNc(23,M,3,0,"a",26),e.qZA()()()()}if(2&o){const t=m.$implicit,s=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.processName),e.xp6(2),e.Oqu(null==t?null:t.machineName),e.xp6(2),e.Oqu(null==t?null:t.noOfManpower),e.xp6(2),e.Oqu(null==t?null:t.outputPerHr),e.xp6(2),e.Oqu(t.labourCostPerHr),e.xp6(2),e.Oqu(null==t?null:t.powerConsumptionPerHr),e.xp6(5),e.Q6J("accessType",s.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",s.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",s.user==s.superAdminId)}}const N=function(o,m,t,s){return{page:o,pageSize:m,collection:t,search:s,type:"list"}};let R=(()=>{class o{constructor(t,s,n,r,i,p,d,k,O){this.exportExcelService=t,this.processResourceManagementService=s,this.router=n,this.spinner=r,this.activatedRoute=i,this.exportToPDFService=p,this.storageService=d,this.toastService=k,this.modalService=O,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=v.dA,this.user="",this.rolePermissionActions=v.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(t=>t==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,s,n){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:s,action:n}})}trackByFn(t,s){return s?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,s=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.processResourceManagementService.getAll(n).subscribe(r=>{"EXCEL"==s?this.excelDownload(r.rows):"PDF"==s?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(t){this.exportExcelService.exportExcel((0,b.OX)(t))}pdfDownload(t){let s=(0,b.PQ)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:t,direction:s}){this.headers.forEach(n=>{n.sortable!==t&&(n.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}delete(t){this.spinner.show(),this.processResourceManagementService.delete(t).subscribe(s=>{this.spinner.hide(),this.toastService.success(s.message),this.getAll()})}openConfirmModal(t,s){const n=this.modalService.open(_.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});n.componentInstance.heading="Confirm Deletion",n.componentInstance.confirmText=`Confirm Deletion of Process Name ${s} ?`,n.result.then(r=>{"Yes"==r.title&&this.delete(t)},r=>{})}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(l.Ol),e.Y36(Z.rQ),e.Y36(h.F0),e.Y36(l.V),e.Y36(h.gz),e.Y36(l.$L),e.Y36(l.V1),e.Y36(l.kl),e.Y36(C.FF))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-process-resource-management-list"]],viewQuery:function(s,n){if(1&s&&e.Gf(f.j,5),2&s){let r;e.iGM(r=e.CRH())&&(n.headers=r)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","processName",1,"text-start",3,"sort"],["sortable","machineName",1,"text-start",3,"sort"],["sortable","noOfManpower",3,"sort"],["sortable","outputPerHr",3,"sort"],["sortable","labourCostPerHr",3,"sort"],["sortable","powerConsumptionPerHr",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Process Resource Management Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return n.navigateTo("../form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Add Details "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(i){return n.eventHeader(i)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(i){return n.onSort(i)}),e._uU(15,"Process Name"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(i){return n.onSort(i)}),e._uU(17,"Work Centre/Machine"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(i){return n.onSort(i)}),e._uU(19,"# of Manpower"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(i){return n.onSort(i)}),e._uU(21,"Output/hr"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(i){return n.onSort(i)}),e._uU(23,"Labour Cost/hr"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(i){return n.onSort(i)}),e._uU(25,"Power consumption cost/hr"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,P,24,9,"tr",18),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",n.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,N,n.page,n.pageSize,n.collection,n.search)),e.xp6(19),e.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[u.sg,u.O5,A.P,f.j,T.J],encapsulation:2})}return o})();var a=c(60095),y=c(21631),w=c(22096),U=c(35469),S=c(16897),x=c(50363);function J(o,m){1&o&&e._UZ(0,"hr",18)}function D(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",20)(2,"button",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",22)(5,"button",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.submit())}),e._uU(6,"Save"),e.qZA()()()}}let F=(()=>{class o{constructor(t,s,n,r,i,p,d){this.processResourceManagementService=t,this.activatedRoute=s,this.spinner=n,this.toastService=r,this.validationService=i,this.utilityService=p,this.location=d,this.submitted=!1,this.action="create",this.machineNamesArr=[],this.masterData={autoIncrementNo:"",mapProcessMachineList:[]},this.form=new a.nJ({_id:new a.p4(null),processResourceManagementCode:new a.p4(null),processCode:new a.p4(null),processName:new a.p4(null,[a.kI.required]),process:new a.p4(null),machineCode:new a.p4(null),machineName:new a.p4(null,[a.kI.required]),machine:new a.p4(null),outputPerHr:new a.p4(null),noOfManpower:new a.p4(null),labourCostPerHr:new a.p4(null),powerConsumptionPerHr:new a.p4(null),status:new a.p4("Active")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.machineNamesArr=[],this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,U.oV))return;let t=this.form.value;t._id?this.update(t):(delete t._id,this.create(t))}create(t){this.spinner.show(),this.processResourceManagementService.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}update(t){this.spinner.show(),this.processResourceManagementService.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}getInitialData(){this.spinner.show(),this.processResourceManagementService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.processResourceManagementCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,y.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.processResourceManagementService.getById(s.id):(0,w.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.machineNamesArr=this.masterData?.mapProcessMachineList.find(n=>n._id==s?.process)?.machineDetails,this.form.patchValue(s),"edit"!=this.action&&this.form.disable())})})}setMachineNames(t){this.machineNamesArr=[],this.f.machineName.setValue(null),this.f.process.setValue(t?.process),this.f.processCode.setValue(t?.processCode),this.machineNamesArr=t?.machineDetails}setMachineId(t){this.f.machine.setValue(t?.machine),this.f.machineCode.setValue(t?.machineCode)}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(Z.rQ),e.Y36(h.gz),e.Y36(l.V),e.Y36(l.kl),e.Y36(S.RJ),e.Y36(l.tI),e.Y36(u.Ye))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-process-resource-management-form"]],decls:44,vars:10,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","processName","bindValue","processName","formControlName","processName",3,"items","clearable","change"],["bindLabel","machineName","bindValue","machineName","formControlName","machineName",3,"items","clearable","change"],[1,"form-label","mb-0"],["type","number","formControlName","noOfManpower",1,"form-control"],["type","number","formControlName","outputPerHr",1,"form-control"],["type","number","formControlName","labourCostPerHr",1,"form-control"],["type","number","formControlName","powerConsumptionPerHr",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"]],template:function(s,n){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," Process Name "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"ng-select",9),e.NdJ("change",function(i){return n.setMachineNames(i)}),e.qZA()(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Work Centre/Machine Name"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"ng-select",10),e.NdJ("change",function(i){return n.setMachineId(i)}),e.qZA()(),e.TgZ(21,"div",6)(22,"label",11),e._uU(23," # of Manpower "),e._UZ(24,"span",8),e.qZA(),e._UZ(25,"input",12),e.qZA()(),e.TgZ(26,"div",5)(27,"div",6)(28,"label",11),e._uU(29," Output/hr "),e._UZ(30,"span",8),e.qZA(),e._UZ(31,"input",13),e.qZA(),e.TgZ(32,"div",6)(33,"label",11),e._uU(34," Labour Cost/hr "),e._UZ(35,"span",8),e.qZA(),e._UZ(36,"input",14),e.qZA(),e.TgZ(37,"div",6)(38,"label",11),e._uU(39," Power consumption cost/hr "),e._UZ(40,"span",8),e.qZA(),e._UZ(41,"input",15),e.qZA()()(),e.YNc(42,J,1,0,"hr",16),e.YNc(43,D,7,0,"div",17),e.qZA()()),2&s&&(e.Q6J("formGroup",n.form),e.xp6(5),e.hij(" Process Resource Management (",e.lcZ(6,8,n.action),") "),e.xp6(9),e.Q6J("items",n.masterData.mapProcessMachineList)("clearable",!1),e.xp6(6),e.Q6J("items",n.machineNamesArr)("clearable",!1),e.xp6(22),e.Q6J("ngIf","view"!==n.action),e.xp6(1),e.Q6J("ngIf","view"!=n.action))},dependencies:[u.O5,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,x.w9,u.rS],encapsulation:2})}return o})();var q=c(19964),L=c(56208);const I=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:R},{path:"form",component:F,resolve:{accessScreen:q.xr}}];let Y=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#s=this.\u0275inj=e.cJS({imports:[u.ez,h.Bz.forChild(I),L.m]})}return o})()}}]);