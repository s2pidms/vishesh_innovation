"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3108],{13108:(z,f,s)=>{s.r(f),s.d(f,{CalibrationStandardModule:()=>j});var c=s(96814),u=s(1076),b=s(43818),g=s(25116),v=s(39462),S=s(77203),t=s(65879),p=s(2742),C=s(10583),Z=s(37285),T=s(88059),A=s(53421);function y(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",27),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw();return t.KtG(o.openConfirmModal(null==a?null:a._id,null==a?null:a.standardCode))}),t._UZ(1,"i",28),t._uU(2," Delete "),t.qZA()}}function U(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",17,18)(5,"span",19),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",20),t._UZ(13,"button",21),t.TgZ(14,"div",22)(15,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("../form",null==o?null:o._id,"view"))}),t._UZ(16,"i",24),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("../form",null==o?null:o._id,"edit"))}),t._UZ(19,"i",25),t._uU(20," Edit "),t.qZA(),t.YNc(21,y,3,0,"a",26),t.qZA()()()()}if(2&n){const e=d.$implicit,i=t.MAs(4),a=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.standardCode),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.standardName)("positionTarget",i),t.xp6(1),t.hij(" ",e.standardName," "),t.xp6(2),t.Oqu(null==e?null:e.standardType),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",a.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",a.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",a.user==a.superAdminId)}}const x=function(n,d,e,i){return{page:n,pageSize:d,collection:e,search:i,type:"list"}};let D=(()=>{class n{constructor(e,i,a,o,l,m,h,P,R){this.exportExcelService=e,this.calibrationStandardService=i,this.router=a,this.spinner=o,this.activatedRoute=l,this.exportToPDFService=m,this.storageService=h,this.toastService=P,this.modalService=R,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.dataForExcel=[],this.superAdminId=g.dA,this.user="",this.rolePermissionActions=g.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(e=>e==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,a){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i,action:a}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.calibrationStandardService.getAll(a).subscribe(o=>{"EXCEL"==i?this.excelDownload(o.rows):"PDF"==i?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}delete(e){this.spinner.show(),this.calibrationStandardService.delete(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.getAll()})}openConfirmModal(e,i){const a=this.modalService.open(S.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});a.componentInstance.heading="Confirm Deletion",a.componentInstance.confirmText=`Confirm Deletion of Standard Code ${i} ?`,a.result.then(o=>{"Yes"==o.title&&this.delete(e)},o=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,v.Y9)(e))}pdfDownload(e){let i=(0,v.FC)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(a=>{a.sortable!==e&&(a.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p.Ol),t.Y36(C.cw),t.Y36(u.F0),t.Y36(p.V),t.Y36(u.gz),t.Y36(p.$L),t.Y36(p.V1),t.Y36(p.kl),t.Y36(Z.FF))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-calibration-standard-list"]],viewQuery:function(i,a){if(1&i&&t.Gf(b.j,5),2&i){let o;t.iGM(o=t.CRH())&&(a.headers=o)}},decls:26,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","standardCode",3,"sort"],["sortable","standardName",1,"text-start",3,"sort"],["sortable","standardType",3,"sort"],["sortable","standardStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["standardName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Calibration Standard Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return a.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Calibration Standard "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(l){return a.eventHeader(l)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(l){return a.onSort(l)}),t._uU(15,"Standard Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(l){return a.onSort(l)}),t._uU(17,"Standard Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(l){return a.onSort(l)}),t._uU(19,"Standard Type"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(l){return a.onSort(l)}),t._uU(21,"Standard Status"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,U,22,11,"tr",16),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",a.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,x,a.page,a.pageSize,a.collection,a.search)),t.xp6(15),t.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[c.sg,c.O5,T.P,Z._L,b.j,A.J],encapsulation:2})}return n})();var r=s(60095),q=s(21631),N=s(22096),F=s(88490),J=s(16897);function w(n,d){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.label," ")}}function Y(n,d){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.Q6J("value",e.parameterName),t.xp6(1),t.hij(" ",e.parameterLabel," ")}}function L(n,d){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.label," ")}}function Q(n,d){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",null==e?null:e.label," ")}}function I(n,d){1&n&&t._UZ(0,"hr",26)}const _=function(n){return{"d-none":n}};function O(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"button",29),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",30)(5,"button",29),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,_,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,_,"View"==e.action))}}let M=(()=>{class n{constructor(e,i,a,o,l,m,h){this.activatedRoute=e,this.spinner=i,this.toastService=a,this.calibrationStandardService=o,this.validationService=l,this.utilityService=m,this.location=h,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",locationOptions:[],calibrationAgencyOptions:[],standardStatusOptions:[],standardTypeOptions:[]},this.form=new r.nJ({_id:new r.p4(null),standardCode:new r.p4("",[r.kI.required]),standardName:new r.p4(""),standardType:new r.p4(""),measurementRange:new r.p4(""),calibrationMethod:new r.p4(""),calibrationInterval:new r.p4(""),calibrationAgency:new r.p4(""),traceability:new r.p4(""),standardLocation:new r.p4(""),status:new r.p4("Active"),calibrationCost:new r.p4(""),lastCalibrationDate:new r.p4("")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,F.V9))return;this.form.enable();let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.calibrationStandardService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(e){this.spinner.show(),this.calibrationStandardService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}getInitialData(){this.spinner.show(),this.calibrationStandardService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.standardCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.form.controls.standardType.setValue(""),this.form.controls.calibrationAgency.setValue(""),this.form.controls.standardLocation.setValue(""),this.form.controls.lastCalibrationDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,q.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.calibrationStandardService.getById(i.id):(0,N.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(i.lastCalibrationDate&&(i.lastCalibrationDate=this.utilityService.getFormatDate(i.lastCalibrationDate,"YYYY-MM-DD")),this.form.patchValue(i),"edit"!=this.action&&this.form.disable())})})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(u.gz),t.Y36(p.V),t.Y36(p.kl),t.Y36(C.cw),t.Y36(J.RJ),t.Y36(p.tI),t.Y36(c.Ye))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-calibration-standard-form"]],decls:86,vars:14,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","standardCode","readonly","",1,"form-control"],["type","text","formControlName","standardName",1,"form-control"],["formControlName","standardType",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","measurementRange",1,"form-control"],["type","text","formControlName","calibrationMethod",1,"form-control"],["type","text","formControlName","calibrationInterval",1,"form-control"],["formControlName","calibrationAgency",1,"form-select"],["type","text","formControlName","traceability",1,"form-control"],["formControlName","standardLocation",1,"form-select"],["formControlName","status",1,"form-select"],["type","number","formControlName","calibrationCost",1,"form-control"],["type","date","formControlName","lastCalibrationDate",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(i,a){1&i&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Standard Code "),t._UZ(12,"span",8),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Standard Name "),t._UZ(17,"span",8),t.qZA(),t._UZ(18,"input",10),t.qZA(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21," Standard Type"),t._UZ(22,"span",8),t.qZA(),t.TgZ(23,"select",11)(24,"option",12),t._uU(25,"Select Standard Type"),t.qZA(),t.YNc(26,w,2,2,"option",13),t.qZA()(),t.TgZ(27,"div",6)(28,"label",7),t._uU(29," Measurement Range "),t._UZ(30,"span",8),t.qZA(),t._UZ(31,"input",14),t.qZA()(),t.TgZ(32,"div",5)(33,"div",6)(34,"label",7),t._uU(35," Calibration Method "),t._UZ(36,"span",8),t.qZA(),t._UZ(37,"input",15),t.qZA(),t.TgZ(38,"div",6)(39,"label",7),t._uU(40," Calibration Interval "),t._UZ(41,"span",8),t.qZA(),t._UZ(42,"input",16),t.qZA(),t.TgZ(43,"div",6)(44,"label",7),t._uU(45," Calibration Agency "),t._UZ(46,"span",8),t.qZA(),t.TgZ(47,"select",17)(48,"option",12),t._uU(49,"Select Calibration Agency"),t.qZA(),t.YNc(50,Y,2,2,"option",13),t.qZA()(),t.TgZ(51,"div",6)(52,"label",7),t._uU(53," Traceability "),t._UZ(54,"span",8),t.qZA(),t._UZ(55,"input",18),t.qZA()(),t.TgZ(56,"div",5)(57,"div",6)(58,"label",7),t._uU(59," Standard Location "),t._UZ(60,"span",8),t.qZA(),t.TgZ(61,"select",19)(62,"option",12),t._uU(63,"Select Location"),t.qZA(),t.YNc(64,L,2,2,"option",13),t.qZA()(),t.TgZ(65,"div",6)(66,"label",7),t._uU(67," Standard Status "),t.TgZ(68,"span",8),t._uU(69,"*"),t.qZA()(),t.TgZ(70,"select",20)(71,"option",12),t._uU(72,"Select Standard Status"),t.qZA(),t.YNc(73,Q,2,2,"option",13),t.qZA()(),t.TgZ(74,"div",6)(75,"label",7),t._uU(76," Calibration Cost "),t._UZ(77,"span",8),t.qZA(),t._UZ(78,"input",21),t.qZA(),t.TgZ(79,"div",6)(80,"label",7),t._uU(81," Last Calibration Date "),t._UZ(82,"span",8),t.qZA(),t._UZ(83,"input",22),t.qZA()()(),t.YNc(84,I,1,0,"hr",23),t.YNc(85,O,7,6,"div",24),t.qZA()()),2&i&&(t.Q6J("formGroup",a.form),t.xp6(5),t.hij("",t.lcZ(6,12,a.action)," Calibration Standard"),t.xp6(19),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==a.masterData?null:a.masterData.standardTypeOptions),t.xp6(22),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==a.masterData?null:a.masterData.calibrationAgencyOptions),t.xp6(12),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==a.masterData?null:a.masterData.locationOptions),t.xp6(7),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",null==a.masterData?null:a.masterData.standardStatusOptions),t.xp6(11),t.Q6J("ngIf","view"!==a.action),t.xp6(1),t.Q6J("ngIf","view"!==a.action))},dependencies:[c.mk,c.sg,c.O5,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,c.rS],encapsulation:2})}return n})();var k=s(56208);const V=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:D},{path:"form",component:M,resolve:{accessScreen:s(65876).x}}];let j=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#a=this.\u0275inj=t.cJS({imports:[c.ez,u.Bz.forChild(V),k.m]})}return n})()}}]);