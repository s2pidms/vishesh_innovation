"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7235],{97235:(R,h,s)=>{s.r(h),s.d(h,{CalibrationAndVerificationModule:()=>Q});var d=s(96814),p=s(1076),f=s(43818),A=s(25116),b=s(90133),t=s(65879),u=s(2742),g=s(10583),C=s(88059),_=s(53421);function Z(a,c){if(1&a){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",18),t._UZ(13,"button",19),t.TgZ(14,"div",20)(15,"a",21),t.NdJ("click",function(){const o=t.CHM(i).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",null==o?null:o._id,"view"))}),t._UZ(16,"i",22),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",21),t.NdJ("click",function(){const o=t.CHM(i).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",null==o?null:o._id,"edit"))}),t._UZ(19,"i",23),t._uU(20," Edit "),t.qZA()()()()()}if(2&a){const i=c.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==i?null:i.calibrationDate),t.xp6(2),t.Oqu(null==i?null:i.calibrationDue),t.xp6(2),t.Oqu(null==i?null:i.calibrationAgency),t.xp6(2),t.Oqu(null==i?null:i.calibrationResult),t.xp6(2),t.Oqu(null==i?null:i.remarks),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const T=function(a,c,i,e){return{page:a,pageSize:c,collection:i,search:e,type:"list"}};let D=(()=>{class a{constructor(i,e,n,o,r,m){this.exportExcelService=i,this.router=e,this.spinner=n,this.activatedRoute=o,this.calibrationAndVerificationService=r,this.exportToPDFService=m,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.dataForExcel=[],this.rolePermissionActions=A.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(i,e,n){this.router.navigate([i],{relativeTo:this.activatedRoute,queryParams:{id:e,action:n}})}trackByFn(i,e){return e?._id}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=i.value,this.getAll()}}getAll(i=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.calibrationAndVerificationService.getAll(n).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(i){this.exportExcelService.exportExcel((0,b.WF)(i))}pdfDownload(i){let e=(0,b.NG)(i);this.exportToPDFService.generatePdf(e.tableData,e.title)}onSort({column:i,direction:e}){this.headers.forEach(n=>{n.sortable!==i&&(n.direction="")}),this.column=i,this.direction="asc"==e?1:-1,this.getAll()}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(u.Ol),t.Y36(p.F0),t.Y36(u.V),t.Y36(p.gz),t.Y36(g.lF),t.Y36(u.$L))};static#i=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-calibration-and-verification-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(f.j,5),2&e){let o;t.iGM(o=t.CRH())&&(n.headers=o)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","calibrationDate",3,"sort"],["sortable","calibrationDue",3,"sort"],["sortable","calibrationAgency",3,"sort"],["sortable","calibrationResult",3,"sort"],["sortable","remarks",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Calibration and Verification Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return n.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Calibration and Verification "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return n.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(r){return n.onSort(r)}),t._uU(15,"Calibration Date"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(r){return n.onSort(r)}),t._uU(17,"Calibration Due"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(r){return n.onSort(r)}),t._uU(19,"Calibration Agency"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(r){return n.onSort(r)}),t._uU(21,"Calibration Result"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(r){return n.onSort(r)}),t._uU(23,"Remarks"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,Z,21,7,"tr",17),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,T,n.page,n.pageSize,n.collection,n.search)),t.xp6(17),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[C.P,d.sg,f.j,_.J],encapsulation:2})}return a})();var l=s(60095),y=s(21631),V=s(22096),U=s(50363);function F(a,c){if(1&a&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&a){const i=c.$implicit;t.Q6J("value",i.parameterName),t.xp6(1),t.hij(" ",i.parameterLabel," ")}}function S(a,c){if(1&a&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&a){const i=c.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.label," ")}}function x(a,c){1&a&&t._UZ(0,"hr",23)}const v=function(a){return{"d-none":a}};function q(a,c){if(1&a){const i=t.EpF();t.TgZ(0,"div",24)(1,"button",25),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.reset())}),t._uU(2,"Reset"),t.qZA()()}if(2&a){const i=t.oxw();t.Q6J("ngClass",t.VKq(1,v,"View"==i.action))}}function J(a,c){if(1&a){const i=t.EpF();t.TgZ(0,"div",26)(1,"button",25),t.NdJ("click",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.submit())}),t._uU(2,"Save"),t.qZA()()}if(2&a){const i=t.oxw();t.Q6J("ngClass",t.VKq(1,v,"View"==i.action))}}const Y=function(){return["view"]},w=function(){return["view","edit"]},N=function(){return["create","edit"]};let L=(()=>{class a{constructor(i,e,n,o,r,m){this.activatedRoute=i,this.spinner=e,this.toastService=n,this.calibrationAndVerificationService=o,this.utilityService=r,this.location=m,this.submitted=!1,this.action="create",this.masterData={calibrationAgencyOptions:[],calibrationResultOptions:[],equipmentListOptions:[]},this.form=new l.nJ({_id:new l.p4(""),equipment:new l.p4(""),calibrationDate:new l.p4(""),calibrationDue:new l.p4(""),calibrationAgency:new l.p4(""),calibrationResult:new l.p4(""),remarks:new l.p4("")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){this.submitted=!0,this.form.enable();let i=this.form.value;i._id?this.update(i):(delete i._id,this.create(i))}create(i){this.spinner.show(),this.calibrationAndVerificationService.create(i).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.location.back()})}update(i){this.spinner.show(),this.calibrationAndVerificationService.update(i._id,i).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.location.back()})}getInitialData(){this.spinner.show(),this.calibrationAndVerificationService.getAllMasterData({}).subscribe(i=>{this.masterData=i,this.form.controls.calibrationAgency.setValue(""),this.form.controls.calibrationDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.calibrationDue.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,y.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.calibrationAndVerificationService.getById(e.id):(0,V.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.calibrationDate&&(e.calibrationDate=this.utilityService.getFormatDate(e.calibrationDate,"YYYY-MM-DD")),e.calibrationDue&&(e.calibrationDue=this.utilityService.getFormatDate(e.calibrationDue,"YYYY-MM-DD")),this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})})}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(p.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(g.lF),t.Y36(u.tI),t.Y36(d.Ye))};static#i=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-calibration-and-verification-form"]],decls:51,vars:16,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","_id","formControlName","equipment","placeholder","Select Calibration And Verification",3,"items","clearable"],["type","date","formControlName","calibrationDate",1,"form-control"],["type","date","formControlName","calibrationDue",1,"form-control"],[1,"row","5"],["formControlName","calibrationAgency",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","calibrationResult",1,"form-select"],["type","text","formControlName","remarks",1,"form-control"],["class","row line-border",4,"ngIf"],[1,"d-flex","justify-content-center","mb-3"],["class","d-grid col-md-1 me-5",3,"ngClass",4,"ngIf"],["class","d-grid col-md-1",3,"ngClass",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-grid","col-md-1","me-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(e,n){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Equipment Code "),t._UZ(12,"span",8),t.qZA(),t._UZ(13,"ng-select",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Calibration Date "),t._UZ(17,"span",8),t.qZA(),t._UZ(18,"input",10),t.qZA(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21," Calibration Due "),t._UZ(22,"span",8),t.qZA(),t._UZ(23,"input",11),t.qZA()(),t.TgZ(24,"div",12)(25,"div",6)(26,"label",7),t._uU(27," Calibration Agency "),t._UZ(28,"span",8),t.qZA(),t.TgZ(29,"select",13)(30,"option",14),t._uU(31,"Select Calibration Agency"),t.qZA(),t.YNc(32,F,2,2,"option",15),t.qZA()(),t.TgZ(33,"div",6)(34,"label",7),t._uU(35," Calibration Result "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t.TgZ(38,"select",16)(39,"option",14),t._uU(40,"Select Calibration Result"),t.qZA(),t.YNc(41,S,2,2,"option",15),t.qZA()(),t.TgZ(42,"div",6)(43,"label",7),t._uU(44," Remarks "),t._UZ(45,"span",8),t.qZA(),t._UZ(46,"input",17),t.qZA()()(),t.YNc(47,x,1,0,"hr",18),t.TgZ(48,"div",19),t.YNc(49,q,3,3,"div",20),t.YNc(50,J,3,3,"div",21),t.qZA()()()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(5),t.hij(" ",t.lcZ(6,11,n.action)," Calibration and Verification"),t.xp6(8),t.Q6J("items",n.masterData.equipmentListOptions)("clearable",!1),t.xp6(17),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==n.masterData?null:n.masterData.calibrationAgencyOptions),t.xp6(7),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==n.masterData?null:n.masterData.calibrationResultOptions),t.xp6(6),t.Q6J("ngIf",!t.DdM(13,Y).includes(n.action)),t.xp6(2),t.Q6J("ngIf",!t.DdM(14,w).includes(n.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(15,N).includes(n.action)))},dependencies:[d.mk,d.sg,d.O5,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u,U.w9,d.rS],encapsulation:2})}return a})();var M=s(56208);const k=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:D},{path:"form",component:L,resolve:{accessScreen:s(65876).x}}];let Q=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#i=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[M.m,d.ez,p.Bz.forChild(k)]})}return a})()}}]);