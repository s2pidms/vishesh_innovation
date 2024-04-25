"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3859],{36414:(_,u,o)=>{o.r(u),o.d(u,{QmsMappingModule:()=>Y});var p=o(96814),d=o(1076),g=o(43818),v=o(25116),f=o(91164),t=o(65879),c=o(98977),h=o(88354),b=o(88059),M=o(37285),y=o(53421);function C(n,m){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",16),t._uU(4),t.qZA(),t.TgZ(5,"td",16,17)(7,"span",18),t._uU(8),t.qZA()(),t.TgZ(9,"td")(10,"div",19),t._UZ(11,"button",20),t.TgZ(12,"div",21)(13,"a",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("/default/settings/master/global/qms_mapping/form",null==r?null:r._id,"view"))}),t._UZ(14,"i",23),t._uU(15," View "),t.qZA(),t.TgZ(16,"a",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("/default/settings/master/global/qms_mapping/form",null==r?null:r._id,"edit"))}),t._UZ(17,"i",24),t._uU(18," Edit "),t.qZA()()()()()}if(2&n){const e=m.$implicit,i=t.MAs(6),s=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.reportCode),t.xp6(2),t.Oqu(null==e?null:e.reportTitle),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.displayText)("positionTarget",i),t.xp6(1),t.hij(" ",null==e?null:e.displayText," "),t.xp6(5),t.Q6J("accessType",s.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",s.rolePermissionActions.editAction)}}const A=function(n,m,e,i){return{page:n,pageSize:m,collection:e,search:i,type:"list"}};let Q=(()=>{class n{constructor(e,i,s,r,a,T){this.exportExcelService=e,this.reportQMSMappingService=i,this.activatedRoute=s,this.router=r,this.spinner=a,this.exportToPDFService=T,this.page=1,this.pageSize=8,this.collection=0,this.column="reportCode",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,s){this.router.navigate([e],{queryParams:{id:i,action:s}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.reportQMSMappingService.getAll(s).subscribe(r=>{"EXCEL"==i?this.excelDownload(r.rows):"PDF"==i?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,f.ab)(e))}pdfDownload(e){let i=(0,f.DR)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(s=>{s.sortable!==e&&(s.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.Ol),t.Y36(h.a5),t.Y36(d.gz),t.Y36(d.F0),t.Y36(c.V),t.Y36(c.$L))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-qms-mapping-list"]],viewQuery:function(i,s){if(1&i&&t.Gf(g.j,5),2&i){let r;t.iGM(r=t.CRH())&&(s.headers=r)}},decls:24,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","reportCode",3,"sort"],["sortable","reportTitle",1,"text-start",3,"sort"],["sortable","display",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["displayText",""],[1,"pointer",3,"ngbTooltip","positionTarget"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Report QMS Mapping"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return s.navigateTo("/default/settings/master/global/qms_mapping/form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Report QMS Mapping "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return s.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(15,"Report Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(17,"Report QMS Title"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(19,"Report QMS Display"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Action"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,C,19,9,"tr",15),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",s.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,A,s.page,s.pageSize,s.collection,s.search)),t.xp6(13),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[p.sg,b.P,M._L,g.j,y.J],encapsulation:2})}return n})();var l=o(60095),S=o(21631),x=o(22096),F=o(61539),U=o(16897),w=o(50363);function J(n,m){if(1&n&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&n){const e=m.$implicit;t.Q6J("value",e.title),t.xp6(1),t.hij(" ",null==e?null:e.title," ")}}function N(n,m){1&n&&t._UZ(0,"hr",20)}const Z=function(n){return{"d-none":n}};function D(n,m){if(1&n){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22)(2,"button",23),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",24)(5,"button",23),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,Z,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,Z,"View"==e.action))}}let q=(()=>{class n{constructor(e,i,s,r,a,T,P,k){this.reportQMSMappingService=e,this.router=i,this.activatedRoute=s,this.spinner=r,this.toastService=a,this.validationService=T,this.appGlobalService=P,this.utilityService=k,this.submitted=!1,this.action="create",this.reportNameArr=[],this.moduleNames=[],this.module="",this.form=new l.nJ({_id:new l.p4(null),reportCode:new l.p4(null),module:new l.p4(null),report:new l.p4(null),reportTitle:new l.p4(null),displayText:new l.p4(null)})}ngOnInit(){this.getInitialData(),this.appGlobalService.getData(["menuItems"]).subscribe(e=>{this.moduleNames=e.menuItems})}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,F.F))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.reportQMSMappingService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.router.navigate(["/default/settings/master/global/qms_mapping/list"])})}create(e){this.spinner.show(),this.reportQMSMappingService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.router.navigate(["/default/settings/master/global/qms_mapping/list"])})}setReportNames(e){this.form.controls.reportTitle.setValue(e?.title),this.form.controls.display.setValue(e?.displayName)}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.reportQMSMappingService.getAllMasterData({}).subscribe(e=>{this.form.controls.reportCode.setValue(e),this.activatedRoute.queryParams.pipe((0,S.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.reportQMSMappingService.getById(i.id):(0,x.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(this.form.patchValue(i),this.getFilterData(),"view"==this.action&&this.form.disable())})})}getFilterData(){this.spinner.show(),this.reportQMSMappingService.getFilterSubmoduleForQMS({module:this.form.controls.module.value}).subscribe(e=>{this.reportNameArr=e}),this.spinner.hide()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h.a5),t.Y36(d.F0),t.Y36(d.gz),t.Y36(c.V),t.Y36(c.kl),t.Y36(U.RJ),t.Y36(c.P0),t.Y36(c.tI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-qms-mapping-form"]],decls:45,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","reportCode","readonly","",1,"form-control"],["formControlName","module",1,"form-select",3,"change"],["value","null","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"col","ps-0"],["bindLabel","title","bindValue","_id","formControlName","report",3,"items","clearable","change"],["type","text","formControlName","reportTitle","readonly","",1,"form-control"],["type","text","formControlName","displayText",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(i,s){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11,"Report Code "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17," Module Name "),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t.TgZ(20,"select",10),t.NdJ("change",function(){return s.getFilterData()}),t.TgZ(21,"option",11),t._uU(22,"Select Type"),t.qZA(),t.YNc(23,J,2,2,"option",12),t.qZA()(),t.TgZ(24,"div",13)(25,"label",7),t._uU(26,"Report Name "),t.TgZ(27,"span",8),t._uU(28,"*"),t.qZA()(),t.TgZ(29,"ng-select",14),t.NdJ("change",function(a){return s.setReportNames(a)}),t.qZA()()(),t.TgZ(30,"div",5)(31,"div",6)(32,"label",7),t._uU(33,"Report QMS Title "),t.TgZ(34,"span",8),t._uU(35,"*"),t.qZA()(),t._UZ(36,"input",15),t.qZA(),t.TgZ(37,"div",13)(38,"label",7),t._uU(39,"Report QMS Display "),t.TgZ(40,"span",8),t._uU(41,"*"),t.qZA()(),t._UZ(42,"input",16),t.qZA()()(),t.YNc(43,N,1,0,"hr",17),t.YNc(44,D,7,6,"div",18),t.qZA()()),2&i&&(t.Q6J("formGroup",s.form),t.xp6(5),t.hij("Report QMS Mapping (",t.lcZ(6,7,s.action),") "),t.xp6(18),t.Q6J("ngForOf",s.moduleNames),t.xp6(6),t.Q6J("items",s.reportNameArr)("clearable",!1),t.xp6(14),t.Q6J("ngIf","view"!==s.action),t.xp6(1),t.Q6J("ngIf","view"!==s.action))},dependencies:[p.mk,p.sg,p.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u,w.w9,p.rS],encapsulation:2})}return n})();var R=o(19964),E=o(56208);const L=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:Q},{path:"form",component:q,resolve:{accessScreen:R.xr}}];let Y=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[p.ez,d.Bz.forChild(L),E.m]})}return n})()},13107:(_,u,o)=>{o.d(u,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(_,u,o)=>{o.d(u,{J:()=>p});const p=({data:d,headers:g,widths:v,title:f})=>({tableData:{widths:v,headerRows:1,body:[g.map(h=>({text:h.header,style:"header"})),...d.map(h=>g.map(b=>({style:"subheader",text:h[b.key]})))]},title:f})}}]);