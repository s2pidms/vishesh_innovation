"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7235],{97235:(R,b,l)=>{l.r(b),l.d(b,{CalibrationAndVerificationModule:()=>E});var d=l(96814),p=l(1076),h=l(43818),C=l(25116),g=l(90133),t=l(65879),u=l(98977),v=l(10583),_=l(88059),Z=l(53421);function T(n,s){if(1&n){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",18),t._UZ(13,"button",19),t.TgZ(14,"div",20)(15,"a",21),t.NdJ("click",function(){const o=t.CHM(a).$implicit,r=t.oxw();return t.KtG(r.navigateTo("/default/maintenance/transactions/calibration-and-verification/form",null==o?null:o._id,"view"))}),t._UZ(16,"i",22),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",21),t.NdJ("click",function(){const o=t.CHM(a).$implicit,r=t.oxw();return t.KtG(r.navigateTo("/default/maintenance/transactions/calibration-and-verification/form",null==o?null:o._id,"edit"))}),t._UZ(19,"i",23),t._uU(20," Edit "),t.qZA()()()()()}if(2&n){const a=s.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.calibrationDate),t.xp6(2),t.Oqu(null==a?null:a.calibrationDue),t.xp6(2),t.Oqu(null==a?null:a.calibrationAgency),t.xp6(2),t.Oqu(null==a?null:a.calibrationResult),t.xp6(2),t.Oqu(null==a?null:a.remarks),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const D=function(n,s,a,e){return{page:n,pageSize:s,collection:a,search:e,type:"list"}};let y=(()=>{var n;class s{constructor(e,i,o,r,m,f){this.exportExcelService=e,this.router=i,this.spinner=o,this.activatedRoute=r,this.calibrationAndVerificationService=m,this.exportToPDFService=f,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.dataForExcel=[],this.rolePermissionActions=C.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,o){this.router.navigate([e],{queryParams:{id:i,action:o}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.calibrationAndVerificationService.getAll(o).subscribe(r=>{"EXCEL"==i?this.excelDownload(r.rows):"PDF"==i?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,g.WF)(e))}pdfDownload(e){let i=(0,g.NG)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(u.Ol),t.Y36(p.F0),t.Y36(u.V),t.Y36(p.gz),t.Y36(v.lF),t.Y36(u.$L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-calibration-and-verification-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(h.j,5),2&e){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","calibrationDate",3,"sort"],["sortable","calibrationDue",3,"sort"],["sortable","calibrationAgency",3,"sort"],["sortable","calibrationResult",3,"sort"],["sortable","remarks",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Calibration and Verification Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("/default/maintenance/transactions/calibration-and-verification/form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Calibration and Verification "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return i.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(15,"Calibration Date"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(17,"Calibration Due"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(19,"Calibration Agency"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(21,"Calibration Result"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(23,"Remarks"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,T,21,7,"tr",17),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,D,i.page,i.pageSize,i.collection,i.search)),t.xp6(17),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[_.P,d.sg,h.j,Z.J],encapsulation:2}),s})();var c=l(60095),V=l(21631),F=l(22096),U=l(50363);function S(n,s){if(1&n&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&n){const a=s.$implicit;t.Q6J("value",a.parameterName),t.xp6(1),t.hij(" ",a.parameterLabel," ")}}function x(n,s){if(1&n&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&n){const a=s.$implicit;t.Q6J("value",a.value),t.xp6(1),t.hij(" ",a.label," ")}}function q(n,s){1&n&&t._UZ(0,"hr",23)}const A=function(n){return{"d-none":n}};function J(n,s){if(1&n){const a=t.EpF();t.TgZ(0,"div",24)(1,"button",25),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.reset())}),t._uU(2,"Reset"),t.qZA()()}if(2&n){const a=t.oxw();t.Q6J("ngClass",t.VKq(1,A,"View"==a.action))}}function Y(n,s){if(1&n){const a=t.EpF();t.TgZ(0,"div",26)(1,"button",25),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Save"),t.qZA()()}if(2&n){const a=t.oxw();t.Q6J("ngClass",t.VKq(1,A,"View"==a.action))}}const w=function(){return["view"]},N=function(){return["view","edit"]},L=function(){return["create","edit"]};let M=(()=>{var n;class s{constructor(e,i,o,r,m,f){this.router=e,this.activatedRoute=i,this.spinner=o,this.toastService=r,this.calibrationAndVerificationService=m,this.utilityService=f,this.submitted=!1,this.action="create",this.masterData={calibrationAgencyOptions:[],calibrationResultOptions:[],equipmentListOptions:[]},this.form=new c.nJ({_id:new c.p4(""),equipment:new c.p4(""),calibrationDate:new c.p4(""),calibrationDue:new c.p4(""),calibrationAgency:new c.p4(""),calibrationResult:new c.p4(""),remarks:new c.p4("")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(e,i,o){this.router.navigate([e],{queryParams:{id:i,action:o}})}reset(){this.form.reset(),this.getInitialData()}submit(){this.submitted=!0,this.form.enable();let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.calibrationAndVerificationService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.router.navigate(["/default/maintenance/transactions/calibration-and-verification/list"])})}update(e){this.spinner.show(),this.calibrationAndVerificationService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.router.navigate(["/default/maintenance/transactions/calibration-and-verification/list"])})}getInitialData(){this.spinner.show(),this.calibrationAndVerificationService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.calibrationAgency.setValue(""),this.form.controls.calibrationDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.calibrationDue.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,V.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.calibrationAndVerificationService.getById(i.id):(0,F.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(i.calibrationDate&&(i.calibrationDate=this.utilityService.getFormatDate(i.calibrationDate,"YYYY-MM-DD")),i.calibrationDue&&(i.calibrationDue=this.utilityService.getFormatDate(i.calibrationDue,"YYYY-MM-DD")),this.form.patchValue(i),"edit"!=this.action&&this.form.disable())})})}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(v.lF),t.Y36(u.tI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-calibration-and-verification-form"]],decls:51,vars:16,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","_id","formControlName","equipment","placeholder","Select Calibration And Verification",3,"items","clearable"],["type","date","formControlName","calibrationDate",1,"form-control"],["type","date","formControlName","calibrationDue",1,"form-control"],[1,"row","5"],["formControlName","calibrationAgency",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","calibrationResult",1,"form-select"],["type","text","formControlName","remarks",1,"form-control"],["class","row line-border",4,"ngIf"],[1,"d-flex","justify-content-center","mb-3"],["class","d-grid col-md-1 me-5",3,"ngClass",4,"ngIf"],["class","d-grid col-md-1",3,"ngClass",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-grid","col-md-1","me-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Equipment Code "),t._UZ(12,"span",8),t.qZA(),t._UZ(13,"ng-select",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Calibration Date "),t._UZ(17,"span",8),t.qZA(),t._UZ(18,"input",10),t.qZA(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21," Calibration Due "),t._UZ(22,"span",8),t.qZA(),t._UZ(23,"input",11),t.qZA()(),t.TgZ(24,"div",12)(25,"div",6)(26,"label",7),t._uU(27," Calibration Agency "),t._UZ(28,"span",8),t.qZA(),t.TgZ(29,"select",13)(30,"option",14),t._uU(31,"Select Calibration Agency"),t.qZA(),t.YNc(32,S,2,2,"option",15),t.qZA()(),t.TgZ(33,"div",6)(34,"label",7),t._uU(35," Calibration Result "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t.TgZ(38,"select",16)(39,"option",14),t._uU(40,"Select Calibration Result"),t.qZA(),t.YNc(41,x,2,2,"option",15),t.qZA()(),t.TgZ(42,"div",6)(43,"label",7),t._uU(44," Remarks "),t._UZ(45,"span",8),t.qZA(),t._UZ(46,"input",17),t.qZA()()(),t.YNc(47,q,1,0,"hr",18),t.TgZ(48,"div",19),t.YNc(49,J,3,3,"div",20),t.YNc(50,Y,3,3,"div",21),t.qZA()()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij(" ",t.lcZ(6,11,i.action)," Calibration and Verification"),t.xp6(8),t.Q6J("items",i.masterData.equipmentListOptions)("clearable",!1),t.xp6(17),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==i.masterData?null:i.masterData.calibrationAgencyOptions),t.xp6(7),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==i.masterData?null:i.masterData.calibrationResultOptions),t.xp6(6),t.Q6J("ngIf",!t.DdM(13,w).includes(i.action)),t.xp6(2),t.Q6J("ngIf",!t.DdM(14,N).includes(i.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(15,L).includes(i.action)))},dependencies:[d.mk,d.sg,d.O5,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u,U.w9,d.rS],encapsulation:2}),s})();var O=l(56208);const k=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:y},{path:"form",component:M,resolve:{accessScreen:l(65876).x}}];let E=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[O.m,d.ez,p.Bz.forChild(k)]}),s})()}}]);