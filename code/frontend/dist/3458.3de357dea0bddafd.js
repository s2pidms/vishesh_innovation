"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3458],{68741:(_,u,a)=>{a.r(u),a.d(u,{CustomerPdirMappingModule:()=>q});var c=a(96814),m=a(1076),g=a(43818),f=a(25116),v=a(91164),t=a(65879),p=a(98977),h=a(88354),C=a(88059),Z=a(53421);function y(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",16),t._uU(4),t.qZA(),t.TgZ(5,"td",16),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",17),t._UZ(9,"button",18),t.TgZ(10,"div",19)(11,"a",20),t.NdJ("click",function(){const r=t.CHM(e).$implicit,o=t.oxw();return t.KtG(o.navigateTo("/default/settings/master/quality_master/customer_pdir_mapping/form",null==r?null:r._id,"view"))}),t._UZ(12,"i",21),t._uU(13," View "),t.qZA(),t.TgZ(14,"a",20),t.NdJ("click",function(){const r=t.CHM(e).$implicit,o=t.oxw();return t.KtG(o.navigateTo("/default/settings/master/quality_master/customer_pdir_mapping/form",null==r?null:r._id,"edit"))}),t._UZ(15,"i",22),t._uU(16," Edit "),t.qZA()()()()()}if(2&n){const e=d.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.mapCode),t.xp6(2),t.Oqu(null==e?null:e.customerName),t.xp6(2),t.Oqu(null==e?null:e.template),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",i.rolePermissionActions.editAction)}}const A=function(n,d,e,i){return{page:n,pageSize:d,collection:e,search:i,type:"list"}};let P=(()=>{class n{constructor(e,i,s,r,o,b){this.exportExcelService=e,this.customerPDIRMappingService=i,this.activatedRoute=s,this.router=r,this.spinner=o,this.exportToPDFService=b,this.page=1,this.pageSize=8,this.collection=0,this.column="reportCode",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=f.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,s){this.router.navigate([e],{queryParams:{id:i,action:s}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.customerPDIRMappingService.getAll(s).subscribe(r=>{"EXCEL"==i?this.excelDownload(r.rows):"PDF"==i?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,v.gH)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,v.NF)(e))}onSort({column:e,direction:i}){this.headers.forEach(s=>{s.sortable!==e&&(s.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p.Ol),t.Y36(h.XE),t.Y36(m.gz),t.Y36(m.F0),t.Y36(p.V),t.Y36(p.$L))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-pdir-mapping-list"]],viewQuery:function(i,s){if(1&i&&t.Gf(g.j,5),2&i){let r;t.iGM(r=t.CRH())&&(s.headers=r)}},decls:24,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","mapCode",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","template",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Customer PDIR Mapping"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return s.navigateTo("/default/settings/master/quality_master/customer_pdir_mapping/form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Customer PDIR Mapping "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(o){return s.eventHeader(o)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(o){return s.onSort(o)}),t._uU(15,"Map Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(o){return s.onSort(o)}),t._uU(17,"Customer Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(o){return s.onSort(o)}),t._uU(19,"Template"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Action"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,y,17,5,"tr",15),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",s.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,A,s.page,s.pageSize,s.collection,s.search)),t.xp6(13),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[c.sg,C.P,g.j,Z.J],encapsulation:2})}return n})();var l=a(60095),M=a(21631),x=a(22096),D=a(61539),N=a(77609),F=a(16897),S=a(37285),w=a(50363);function I(n,d){if(1&n&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&n){const e=d.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",null==e?null:e.label," ")}}function J(n,d){1&n&&t._UZ(0,"hr",21)}const T=function(n){return{"d-none":n}};function U(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"button",24),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",25)(5,"button",24),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,T,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,T,"View"==e.action))}}let E=(()=>{class n{constructor(e,i,s,r,o,b,L,k){this.customerPDIRMappingService=e,this.router=i,this.activatedRoute=s,this.spinner=r,this.toastService=o,this.validationService=b,this.utilityService=L,this.modalService=k,this.submitted=!1,this.action="create",this.templateNameObj=f.wC,this.templateNameArr=this.templateNameObj.getAllTemplateName(),this.module="",this.masterData={autoIncrementNo:"",customersOptions:[]},this.selectedCustomerDetails={},this.form=new l.cw({_id:new l.NI(null),mapCode:new l.NI(""),customerName:new l.NI(null),customer:new l.NI(null),template:new l.NI(null)})}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,D.F))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.customerPDIRMappingService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.router.navigate(["/default/settings/master/quality_master/customer_pdir_mapping/list"])})}create(e){this.spinner.show(),this.customerPDIRMappingService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.router.navigate(["/default/settings/master/quality_master/customer_pdir_mapping/list"])})}setCustomerName(e){this.form.controls.customerName.setValue(e?.customerName)}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.customerPDIRMappingService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.mapCode.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,M.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.customerPDIRMappingService.getById(i.id):(0,x.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(this.form.patchValue(i),"view"==this.action&&this.form.disable())})})}openCustomersDetailsModal(){const e=this.modalService.open(N.e7,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.selectedCustomerDetails=this.selectedCustomerDetails,e.componentInstance.customerOptions=this.masterData.customersOptions,e.componentInstance.customer=this.form.controls.customer.value,e.result.then(i=>{i&&(this.selectedCustomerDetails=i?.selectedCustomerDetails,this.form.controls.customer.setValue(i?.selectedCustomerDetails?._id),this.setCustomerName(this.selectedCustomerDetails))},i=>{})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h.XE),t.Y36(m.F0),t.Y36(m.gz),t.Y36(p.V),t.Y36(p.kl),t.Y36(F.RJ),t.Y36(p.tI),t.Y36(S.FF))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-pdir-mapping-form"]],decls:36,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","mapCode","readonly","",1,"form-control"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","customerName","bindValue","_id","formControlName","customer",3,"items","clearable","change"],["id","basic-addon1",1,"input-group-text","bg-primary","pointer","col-auto","fs-4",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white"],["formControlName","template",1,"form-select"],["value","null","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(i,s){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11,"Map Code "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17," Customer Name "),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t.TgZ(20,"div",10)(21,"div",11)(22,"ng-select",12),t.NdJ("change",function(o){return s.setCustomerName(o)}),t.qZA()(),t.TgZ(23,"div",13),t.NdJ("click",function(){return s.openCustomersDetailsModal()}),t._UZ(24,"i",14),t.qZA()()(),t.TgZ(25,"div",6)(26,"label",7),t._uU(27,"Template"),t.TgZ(28,"span",8),t._uU(29,"*"),t.qZA()(),t.TgZ(30,"select",15)(31,"option",16),t._uU(32,"Select Template"),t.qZA(),t.YNc(33,I,2,2,"option",17),t.qZA()()()(),t.YNc(34,J,1,0,"hr",18),t.YNc(35,U,7,6,"div",19),t.qZA()()),2&i&&(t.Q6J("formGroup",s.form),t.xp6(5),t.hij("Customer PDIR Mapping (",t.lcZ(6,7,s.action),") "),t.xp6(17),t.Q6J("items",s.masterData.customersOptions)("clearable",!1),t.xp6(11),t.Q6J("ngForOf",s.templateNameArr),t.xp6(1),t.Q6J("ngIf","view"!==s.action),t.xp6(1),t.Q6J("ngIf","view"!==s.action))},dependencies:[c.mk,c.sg,c.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u,w.w9,c.rS],encapsulation:2})}return n})();var R=a(56208);const Y=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:P},{path:"form",component:E,resolve:{accessScreen:a(19964).xr}}];let q=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(Y),R.m]})}return n})()},13107:(_,u,a)=>{a.d(u,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(_,u,a)=>{a.d(u,{J:()=>c});const c=({data:m,headers:g,widths:f,title:v})=>({tableData:{widths:f,headerRows:1,body:[g.map(h=>({text:h.header,style:"header"})),...m.map(h=>g.map(C=>({style:"subheader",text:h[C.key]})))]},title:v})}}]);