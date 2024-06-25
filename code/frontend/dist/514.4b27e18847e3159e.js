"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[514],{50514:(E,f,c)=>{c.r(f),c.d(f,{ProcessResourceManagementModule:()=>k});var m=c(96814),p=c(1076),v=c(43818),b=c(25116),_=c(4882),C=c(77203),e=c(65879),u=c(2742),Z=c(38011),A=c(37285),M=c(88059),T=c(53421);function P(a,l){if(1&a){const o=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){e.CHM(o);const s=e.oxw().$implicit,n=e.oxw();return e.KtG(n.openConfirmModal(null==s?null:s._id,null==s?null:s.processName))}),e._UZ(1,"i",28),e._uU(2," Delete "),e.qZA()}}function N(a,l){if(1&a){const o=e.EpF();e.TgZ(0,"tr")(1,"td",19),e._uU(2),e.qZA(),e.TgZ(3,"td",19),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",20),e._UZ(15,"button",21),e.TgZ(16,"div",22)(17,"a",23),e.NdJ("click",function(){const n=e.CHM(o).$implicit,r=e.oxw();return e.KtG(r.navigateTo("../form",null==n?null:n._id,"view"))}),e._UZ(18,"i",24),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",23),e.NdJ("click",function(){const n=e.CHM(o).$implicit,r=e.oxw();return e.KtG(r.navigateTo("../form",null==n?null:n._id,"edit"))}),e._UZ(21,"i",25),e._uU(22," Edit "),e.qZA(),e.YNc(23,P,3,0,"a",26),e.qZA()()()()}if(2&a){const o=l.$implicit,t=e.oxw();e.xp6(2),e.Oqu(null==o?null:o.processName),e.xp6(2),e.Oqu(null==o?null:o.machineName),e.xp6(2),e.Oqu(null==o?null:o.noOfManpower),e.xp6(2),e.Oqu(null==o?null:o.outputPerHr),e.xp6(2),e.Oqu(o.labourCostPerHr),e.xp6(2),e.Oqu(null==o?null:o.powerConsumptionPerHr),e.xp6(5),e.Q6J("accessType",t.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",t.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",t.user==t.superAdminId)}}const R=function(a,l,o,t){return{page:a,pageSize:l,collection:o,search:t,type:"list"}};let y=(()=>{var a;class l{constructor(t,s,n,r,h,d,g,O,H){this.exportExcelService=t,this.processResourceManagementService=s,this.router=n,this.spinner=r,this.activatedRoute=h,this.exportToPDFService=d,this.storageService=g,this.toastService=O,this.modalService=H,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=b.dA,this.user="",this.rolePermissionActions=b.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(t=>t==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,s,n){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:s,action:n}})}trackByFn(t,s){return s?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,s=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.processResourceManagementService.getAll(n).subscribe(r=>{"EXCEL"==s?this.excelDownload(r.rows):"PDF"==s?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(t){this.exportExcelService.exportExcel((0,_.OX)(t))}pdfDownload(t){let s=(0,_.PQ)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:t,direction:s}){this.headers.forEach(n=>{n.sortable!==t&&(n.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}delete(t){this.spinner.show(),this.processResourceManagementService.delete(t).subscribe(s=>{this.spinner.hide(),this.toastService.success(s.message),this.getAll()})}openConfirmModal(t,s){const n=this.modalService.open(C.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});n.componentInstance.heading="Confirm Deletion",n.componentInstance.confirmText=`Confirm Deletion of Process Name ${s} ?`,n.result.then(r=>{"Yes"==r.title&&this.delete(t)},r=>{})}}return(a=l).\u0275fac=function(t){return new(t||a)(e.Y36(u.Ol),e.Y36(Z.rQ),e.Y36(p.F0),e.Y36(u.V),e.Y36(p.gz),e.Y36(u.$L),e.Y36(u.V1),e.Y36(u.kl),e.Y36(A.FF))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-process-resource-management-list"]],viewQuery:function(t,s){if(1&t&&e.Gf(v.j,5),2&t){let n;e.iGM(n=e.CRH())&&(s.headers=n)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","processName",1,"text-start",3,"sort"],["sortable","machineName",1,"text-start",3,"sort"],["sortable","noOfManpower",3,"sort"],["sortable","outputPerHr",3,"sort"],["sortable","labourCostPerHr",3,"sort"],["sortable","powerConsumptionPerHr",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Process Resource Management Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return s.navigateTo("../form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Add Details "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(r){return s.eventHeader(r)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(r){return s.onSort(r)}),e._uU(15,"Process Name"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(r){return s.onSort(r)}),e._uU(17,"Work Centre/Machine"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(r){return s.onSort(r)}),e._uU(19,"# of Manpower"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(r){return s.onSort(r)}),e._uU(21,"Output/hr"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(r){return s.onSort(r)}),e._uU(23,"Labour Cost/hr"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(r){return s.onSort(r)}),e._uU(25,"Power consumption cost/hr"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,N,24,9,"tr",18),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("accessType",s.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,R,s.page,s.pageSize,s.collection,s.search)),e.xp6(19),e.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[m.sg,m.O5,M.P,v.j,T.J],encapsulation:2}),l})();var i=c(60095),w=c(21631),U=c(22096),S=c(35469),x=c(16897),J=c(50363);function F(a,l){1&a&&e._UZ(0,"hr",18)}function D(a,l){if(1&a){const o=e.EpF();e.TgZ(0,"div",19)(1,"div",20)(2,"button",21),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",22)(5,"button",21),e.NdJ("click",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.submit())}),e._uU(6,"Save"),e.qZA()()()}}let L=(()=>{var a;class l{constructor(t,s,n,r,h,d,g){this.processResourceManagementService=t,this.activatedRoute=s,this.spinner=n,this.toastService=r,this.validationService=h,this.utilityService=d,this.location=g,this.submitted=!1,this.action="create",this.machineNamesArr=[],this.masterData={autoIncrementNo:"",mapProcessMachineList:[]},this.form=new i.nJ({_id:new i.p4(null),processResourceManagementCode:new i.p4(null),processCode:new i.p4(null),processName:new i.p4(null,[i.kI.required]),process:new i.p4(null),machineCode:new i.p4(null),machineName:new i.p4(null,[i.kI.required]),machine:new i.p4(null),outputPerHr:new i.p4(null),noOfManpower:new i.p4(null),labourCostPerHr:new i.p4(null),powerConsumptionPerHr:new i.p4(null),status:new i.p4("Active")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.machineNamesArr=[],this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,S.oV))return;let t=this.form.value;t._id?this.update(t):(delete t._id,this.create(t))}create(t){this.spinner.show(),this.processResourceManagementService.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}update(t){this.spinner.show(),this.processResourceManagementService.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}getInitialData(){this.spinner.show(),this.processResourceManagementService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.processResourceManagementCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,w.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.processResourceManagementService.getById(s.id):(0,U.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.machineNamesArr=this.masterData?.mapProcessMachineList.find(n=>n._id==s?.process)?.machineDetails,this.form.patchValue(s),"edit"!=this.action&&this.form.disable())})})}setMachineNames(t){this.machineNamesArr=[],this.f.machineName.setValue(null),this.f.process.setValue(t?.process),this.f.processCode.setValue(t?.processCode),this.machineNamesArr=t?.machineDetails}setMachineId(t){this.f.machine.setValue(t?.machine),this.f.machineCode.setValue(t?.machineCode)}}return(a=l).\u0275fac=function(t){return new(t||a)(e.Y36(Z.rQ),e.Y36(p.gz),e.Y36(u.V),e.Y36(u.kl),e.Y36(x.RJ),e.Y36(u.tI),e.Y36(m.Ye))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-process-resource-management-form"]],decls:44,vars:10,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","processName","bindValue","processName","formControlName","processName",3,"items","clearable","change"],["bindLabel","machineName","bindValue","machineName","formControlName","machineName",3,"items","clearable","change"],[1,"form-label","mb-0"],["type","number","formControlName","noOfManpower",1,"form-control"],["type","number","formControlName","outputPerHr",1,"form-control"],["type","number","formControlName","labourCostPerHr",1,"form-control"],["type","number","formControlName","powerConsumptionPerHr",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"]],template:function(t,s){1&t&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," Process Name "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"ng-select",9),e.NdJ("change",function(r){return s.setMachineNames(r)}),e.qZA()(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Work Centre/Machine Name"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"ng-select",10),e.NdJ("change",function(r){return s.setMachineId(r)}),e.qZA()(),e.TgZ(21,"div",6)(22,"label",11),e._uU(23," # of Manpower "),e._UZ(24,"span",8),e.qZA(),e._UZ(25,"input",12),e.qZA()(),e.TgZ(26,"div",5)(27,"div",6)(28,"label",11),e._uU(29," Output/hr "),e._UZ(30,"span",8),e.qZA(),e._UZ(31,"input",13),e.qZA(),e.TgZ(32,"div",6)(33,"label",11),e._uU(34," Labour Cost/hr "),e._UZ(35,"span",8),e.qZA(),e._UZ(36,"input",14),e.qZA(),e.TgZ(37,"div",6)(38,"label",11),e._uU(39," Power consumption cost/hr "),e._UZ(40,"span",8),e.qZA(),e._UZ(41,"input",15),e.qZA()()(),e.YNc(42,F,1,0,"hr",16),e.YNc(43,D,7,0,"div",17),e.qZA()()),2&t&&(e.Q6J("formGroup",s.form),e.xp6(5),e.hij(" Process Resource Management (",e.lcZ(6,8,s.action),") "),e.xp6(9),e.Q6J("items",s.masterData.mapProcessMachineList)("clearable",!1),e.xp6(6),e.Q6J("items",s.machineNamesArr)("clearable",!1),e.xp6(22),e.Q6J("ngIf","view"!==s.action),e.xp6(1),e.Q6J("ngIf","view"!=s.action))},dependencies:[m.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u,J.w9,m.rS],encapsulation:2}),l})();var q=c(19964),I=c(56208);const Y=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:y},{path:"form",component:L,resolve:{accessScreen:q.xr}}];let k=(()=>{var a;class l{}return(a=l).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.ez,p.Bz.forChild(Y),I.m]}),l})()}}]);