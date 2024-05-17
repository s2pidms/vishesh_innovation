"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[384],{30384:(O,d,a)=>{a.r(d),a.d(d,{CostSheetComponentsModule:()=>k});var p=a(96814),u=a(1076),i=a(60095),Z=a(21631),T=a(22096),g=a(25116),S=a(50131),t=a(65879),m=a(99328),f=a(88354),b=a(16897);function A(s,l){if(1&s&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&s){const e=l.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function y(s,l){1&s&&t._UZ(0,"hr",23)}const C=function(s){return{"d-none":s}};function x(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",24)(1,"div",25)(2,"button",26),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",27)(5,"button",26),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,C,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,C,"View"==e.action))}}let U=(()=>{class s{constructor(e,o,n,r,c,h,L){this.router=e,this.activatedRoute=o,this.spinner=n,this.toastService=r,this.costSheetComponentService=c,this.validationService=h,this.utilityService=L,this.submitted=!1,this.action="create",this.componentTypeObj=g.lD,this.componentTypeArr=this.componentTypeObj.getAllComponentType(),this.masterData={autoIncrementNo:""},this.form=new i.nJ({_id:new i.p4(null),componentCode:new i.p4(null,[i.kI.required]),componentType:new i.p4(null,[i.kI.required]),order:new i.p4(null,[i.kI.required]),costElement:new i.p4(null,[i.kI.required]),tooltip:new i.p4(null),status:new i.p4("Active",[i.kI.required])})}ngOnInit(){this.getInitialData()}navigateTo(e,o,n){this.router.navigate([e],{queryParams:{id:o,action:n}})}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,S.s))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.costSheetComponentService.update(e._id,e).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.router.navigate(["default/settings/master/business_lead_master/cost_sheet_components/list"])})}create(e){this.spinner.show(),this.costSheetComponentService.create(e).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.router.navigate(["default/settings/master/business_lead_master/cost_sheet_components/list"])})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.costSheetComponentService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.componentCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,Z.z)(o=>(this.action=o.action,this.utilityService.accessDenied(this.action),o.id?this.costSheetComponentService.getById(o.id):(0,T.of)({})))).subscribe(o=>{this.spinner.hide(),0!=Object.keys(o).length&&(this.form.patchValue(o),"edit"!=this.action&&this.form.disable())})})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(m.V),t.Y36(m.kl),t.Y36(f.yU),t.Y36(b.RJ),t.Y36(m.tI))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-cost-sheet-components-form"]],decls:57,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","componentCode","readonly","",1,"form-control"],["formControlName","componentType",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","number","formControlName","order",1,"form-control"],["type","text","formControlName","costElement",1,"form-control"],["type","text","formControlName","tooltip",1,"form-control"],["formControlName","status",1,"form-select"],["value","Active"],["value","Inactive"],["class","row line-border",4,"ngIf"],[1,"col-12"],["class","d-flex justify-content-center",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1","me-3",3,"ngClass"]],template:function(o,n){1&o&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Component Code "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16,"Component Type "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"select",10)(20,"option",11),t._uU(21,"Select Component Type"),t.qZA(),t.YNc(22,A,2,2,"option",12),t.qZA()(),t.TgZ(23,"div",6)(24,"label",7),t._uU(25,"Order "),t.TgZ(26,"span",8),t._uU(27,"*"),t.qZA()(),t._UZ(28,"input",13),t.qZA()(),t.TgZ(29,"div",5)(30,"div",6)(31,"label",7),t._uU(32,"Cost Elements/Particulars"),t.TgZ(33,"span",8),t._uU(34," *"),t.qZA()(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"div",6)(37,"label",7),t._uU(38,"Tooltip "),t._UZ(39,"span",8),t.qZA(),t._UZ(40,"input",15),t.qZA(),t.TgZ(41,"div",6)(42,"label",7),t._uU(43,"Status "),t.TgZ(44,"span",8),t._uU(45,"*"),t.qZA()(),t.TgZ(46,"select",16)(47,"option",11),t._uU(48,"Select Status"),t.qZA(),t.TgZ(49,"option",17),t._uU(50,"Active"),t.qZA(),t.TgZ(51,"option",18),t._uU(52,"Inactive"),t.qZA()()()()()(),t.YNc(53,y,1,0,"hr",19),t.TgZ(54,"div",5)(55,"div",20),t.YNc(56,x,7,6,"div",21),t.qZA()()()),2&o&&(t.Q6J("formGroup",n.form),t.xp6(4),t.hij("Cost Sheet Components (",t.lcZ(5,7,n.action),")"),t.xp6(16),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",n.componentTypeArr),t.xp6(25),t.Q6J("value",null),t.xp6(6),t.Q6J("ngIf","view"!==n.action),t.xp6(3),t.Q6J("ngIf","view"!==n.action))},dependencies:[p.mk,p.sg,p.O5,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u,p.rS],encapsulation:2})}return s})();var v=a(43818),_=a(97106),q=a(88059),J=a(53421);function F(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",17),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",18),t._UZ(11,"button",19),t.TgZ(12,"div",20)(13,"a",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.navigateTo("default/settings/master/business_lead_master/cost_sheet_components/form",r,"view"))}),t._UZ(14,"i",22),t._uU(15," View "),t.qZA(),t.TgZ(16,"a",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.navigateTo("default/settings/master/business_lead_master/cost_sheet_components/form",r,"edit"))}),t._UZ(17,"i",23),t._uU(18," Edit "),t.qZA()()()()()}if(2&s){const e=l.$implicit,o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.componentType),t.xp6(2),t.Oqu(null==e?null:e.order),t.xp6(2),t.Oqu(null==e?null:e.costElement),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.editAction)}}const w=function(s,l,e,o){return{page:s,pageSize:l,collection:e,search:o,type:"list"}};let N=(()=>{class s{constructor(e,o,n,r,c,h){this.exportExcelService=e,this.router=o,this.spinner=n,this.activatedRoute=r,this.costSheetComponentService=c,this.exportToPDFService=h,this.page=1,this.pageSize=8,this.collection=0,this.column="order",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=g.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,o=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.costSheetComponentService.getAll(n).subscribe(r=>{"EXCEL"==o?this.excelDownload(r.rows):"PDF"==o?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,o,n){this.router.navigate([e],{queryParams:{id:o?._id,action:n}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,o){return o?._id}excelDownload(e){this.exportExcelService.exportExcel((0,_.JS)(e))}pdfDownload(e){let o=(0,_.du)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}onSort({column:e,direction:o}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(m.Ol),t.Y36(u.F0),t.Y36(m.V),t.Y36(u.gz),t.Y36(f.yU),t.Y36(m.$L))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-cost-sheet-components-list"]],viewQuery:function(o,n){if(1&o&&t.Gf(v.j,5),2&o){let r;t.iGM(r=t.CRH())&&(n.headers=r)}},decls:26,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","componentType",3,"sort"],["sortable","order",3,"sort"],["sortable","costElement",1,"text-start",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Cost Sheet Components Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return n.navigateTo("default/settings/master/business_lead_master/cost_sheet_components/form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Cost Sheet Components "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(c){return n.eventHeader(c)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(15,"Component Type"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(17,"Order"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(19,"Cost Elements/Particulars"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(c){return n.onSort(c)}),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,F,19,6,"tr",16),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,w,n.page,n.pageSize,n.collection,n.search)),t.xp6(15),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[p.sg,q.P,v.j,J.J],encapsulation:2})}return s})();var D=a(65876),E=a(56208);const I=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:N},{path:"form",component:U,resolve:{accessScreen:D.x}}];let k=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#o=this.\u0275inj=t.cJS({imports:[p.ez,u.Bz.forChild(I),E.m]})}return s})()}}]);