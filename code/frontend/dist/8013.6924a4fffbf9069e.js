"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8013],{58013:(O,h,a)=>{a.r(h),a.d(h,{ModuleMasterModule:()=>L});var m=a(96814),d=a(1076),v=a(43818),f=a(25116),t=a(65879),c=a(99328),g=a(88354),Z=a(88059),y=a(53421);function _(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",17),t._UZ(11,"button",18),t.TgZ(12,"div",19)(13,"a",20),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("/default/settings/master/module_master/form",null==o?null:o._id,"view"))}),t._UZ(14,"i",21),t._uU(15," View "),t.qZA(),t.TgZ(16,"a",20),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("/default/settings/master/module_master/form",null==o?null:o._id,"edit"))}),t._UZ(17,"i",22),t._uU(18," Edit "),t.qZA()()()()()}if(2&r){const e=u.$implicit,s=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.parameterLabel),t.xp6(2),t.Oqu(null==e?null:e.parameterName),t.xp6(2),t.Oqu(null==e?null:e.order),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",s.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",s.rolePermissionActions.editAction)}}const b=function(r,u,e,s){return{page:r,pageSize:u,collection:e,search:s,type:"list",excelDisplay:"none"}};let M=(()=>{class r{constructor(e,s,i,o,l,p){this.exportExcelService=e,this.moduleMasterService=s,this.activatedRoute=i,this.storageService=o,this.router=l,this.spinner=p,this.page=1,this.pageSize=8,this.collection=0,this.column="order",this.direction=1,this.search="",this.tableData=[],this.type="",this.title="",this.rolePermissionActions=f.a1}ngOnInit(){this.title=this.storageService.get("menuTitle").title,this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.type=this.activatedRoute.snapshot.paramMap.get("appParameter"),this.getAll()}navigateTo(e,s,i){this.router.navigate([e],{queryParams:{id:s,action:i,type:this.type}})}trackByFn(e,s){return s?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1){this.spinner.show(),this.moduleMasterService.getAll({page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,type:this.type}).subscribe(i=>{e?this.excelDownload(i.rows):(this.tableData=i.rows,this.collection=i.count,this.spinner.hide())})}excelDownload(e){let s={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},i={title:"Operation Name Master",csvData:e,headers:[{header:"Operation Name",key:"parameterName",...s},{header:"Order",key:"order",...s},{header:"status",key:"status",...s}]};this.exportExcelService.exportExcel(i)}onSort({column:e,direction:s}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(c.Ol),t.Y36(g.O2),t.Y36(d.gz),t.Y36(c.V1),t.Y36(d.F0),t.Y36(c.V))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-module-master-list"]],viewQuery:function(s,i){if(1&s&&t.Gf(v.j,5),2&s){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:26,vars:11,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","parameterLabel",3,"sort"],["sortable","parameterName",3,"sort"],["sortable","order",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("/default/settings/master/module_master/form",null,"create")}),t._UZ(6,"i",5),t._uU(7),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(l){return i.eventHeader(l)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(15,"Label"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(17,"Value"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(19,"Order"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,_,19,6,"tr",16),t.qZA()()()()),2&s&&(t.xp6(3),t.hij("",i.title," Summary"),t.xp6(1),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(3),t.hij(" ",i.title," "),t.xp6(3),t.Q6J("data",t.l5B(6,b,i.page,i.pageSize,i.collection,i.search)),t.xp6(15),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[m.sg,Z.P,v.j,y.J],encapsulation:2})}return r})();var n=a(60095),A=a(61504),T=a(21631),C=a(22096),x=a(16897);function S(r,u){1&r&&t._UZ(0,"div",21)}function U(r,u){1&r&&t._UZ(0,"div",22)}function J(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",26)(5,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(6,"Save"),t.qZA()()()}}let N=(()=>{class r{constructor(e,s,i,o,l,p,Y,I){this.moduleMasterService=e,this.router=s,this.activatedRoute=i,this.spinner=o,this.toastService=l,this.storageService=p,this.validationService=Y,this.utilityService=I,this.submitted=!1,this.action="create",this.type="",this.title="",this.form=new n.nJ({_id:new n.p4(null),type:new n.p4(null),parameterLabel:new n.p4(null),parameterName:new n.p4(null),order:new n.p4(null),status:new n.p4("Active")})}get f(){return this.form.controls}ngOnInit(){this.title=this.storageService.get("menuTitle").title,this.activatedRoute.queryParams.subscribe(e=>{this.type=e.type}),this.getInitialData()}navigateTo(e,s,i){this.router.navigate([e],{queryParams:{id:s,action:i}})}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,A.w))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.moduleMasterService.create(e).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.router.navigate([`/default/settings/master/module_master/list/${this.type}`])})}update(e){this.spinner.show(),this.moduleMasterService.update(e._id,e).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.router.navigate([`/default/settings/master/module_master/list/${this.type}`])})}getInitialData(){this.spinner.show(),this.form.controls.type.setValue(this.type),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,T.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.moduleMasterService.getById(e.id):(0,C.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(g.O2),t.Y36(d.F0),t.Y36(d.gz),t.Y36(c.V),t.Y36(c.kl),t.Y36(c.V1),t.Y36(x.RJ),t.Y36(c.tI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-module-master-form"]],decls:41,vars:8,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","parameterLabel",1,"form-control"],["type","text","formControlName","parameterName",1,"form-control"],["type","number","formControlName","order",1,"form-control"],[1,"d-flex","inputGroup","skuForm"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],[1,"input-group-text","bg-white"],[1,"col-md-auto","my-4","align-self-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"]],template:function(s,i){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10," Label"),t._UZ(11,"span",8),t.qZA(),t._UZ(12,"input",9),t.qZA(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15," Value"),t._UZ(16,"span",8),t.qZA(),t._UZ(17,"input",10),t.qZA(),t.TgZ(18,"div",6)(19,"label",7),t._uU(20," Order "),t._UZ(21,"span",8),t.qZA(),t._UZ(22,"input",11),t.qZA(),t.TgZ(23,"div",6)(24,"label",7),t._uU(25," Status "),t.TgZ(26,"span",8),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"div",12)(29,"select",13)(30,"option",14),t._uU(31,"Select Status"),t.qZA(),t.TgZ(32,"option",15),t._uU(33,"Active"),t.qZA(),t.TgZ(34,"option",15),t._uU(35,"Inactive"),t.qZA()(),t.TgZ(36,"div",16)(37,"div",17),t.YNc(38,S,1,0,"div",18),t.YNc(39,U,1,0,"div",19),t.qZA()()()()()(),t.YNc(40,J,7,0,"div",20),t.qZA()()),2&s&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("",i.title," Master"),t.xp6(25),t.Q6J("value",null),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(4),t.Q6J("ngIf","Active"==i.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==i.form.value.status),t.xp6(1),t.Q6J("ngIf","view"!=i.action))},dependencies:[m.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u],encapsulation:2})}return r})();var q=a(19964),w=a(56208);const F=[{path:"list/:appParameter",component:M},{path:"form",component:N,resolve:{accessScreen:q.xr}}];let L=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[m.ez,d.Bz.forChild(F),w.m]})}return r})()}}]);