"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1632],{71632:(Q,g,l)=>{l.r(g),l.d(g,{SupplierEvaluationModule:()=>Y});var c=l(96814),d=l(1076),v=l(43818),f=l(25116),_=l(11909),S=l(77609),t=l(65879),u=l(99328),Z=l(48720),b=l(37285),A=l(88059),C=l(53421);function E(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"a",29),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,r=t.oxw();return t.KtG(r.openConfirmModal(null==i?null:i._id,null==i?null:i.name))}),t._UZ(1,"i",30),t._uU(2," Delete "),t.qZA()}}function x(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",19,20)(5,"span",21),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"td")(19,"div",22),t._UZ(20,"button",23),t.TgZ(21,"div",24)(22,"a",25),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",r,"view"))}),t._UZ(23,"i",26),t._uU(24," View "),t.qZA(),t.TgZ(25,"a",25),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",r,"edit"))}),t._UZ(26,"i",27),t._uU(27," Edit "),t.qZA(),t.YNc(28,E,3,0,"a",28),t.qZA()()()()}if(2&o){const e=p.$implicit,n=t.MAs(4),i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.description),t.xp6(1),t.hij(" ",e.description," "),t.xp6(2),t.Oqu(null==e?null:e.enabled),t.xp6(2),t.Oqu(t.xi3(11,13,null==e?null:e.weight,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(14,16,null==e?null:e.passingPercentage,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(17,19,null==e?null:e.failingPercentage,"1.2-2")),t.xp6(6),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",i.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",i.user==i.superAdminId)}}const y=function(o,p,e,n){return{page:o,pageSize:p,collection:e,search:n,type:"list"}};let U=(()=>{class o{constructor(e,n,i,r,a,h,m,R,O){this.exportExcelService=e,this.router=n,this.spinner=i,this.supplierEvaluationService=r,this.activatedRoute=a,this.exportToPDFService=h,this.storageService=m,this.toastService=R,this.modalService=O,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=f.dA,this.user="",this.rolePermissionActions=f.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(e=>e==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,n=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.supplierEvaluationService.getAll(i).subscribe(r=>{"EXCEL"==n?this.excelDownload(r.rows):"PDF"==n?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}delete(e){this.spinner.show(),this.supplierEvaluationService.delete(e).subscribe(n=>{this.spinner.hide(),this.toastService.success(n.message),this.getAll()})}openConfirmModal(e,n){const i=this.modalService.open(S.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});i.componentInstance.heading="Confirm Deletion",i.componentInstance.confirmText=`Confirm Deletion of Name ${n} ?`,i.result.then(r=>{"Yes"==r.title&&this.delete(e)},r=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,n,i){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:n?._id,action:i}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,n){return n?._id}excelDownload(e){this.exportExcelService.exportExcel((0,_.Y5)(e))}pdfDownload(e){let n=(0,_.sK)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}onSort({column:e,direction:n}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u.Ol),t.Y36(d.F0),t.Y36(u.V),t.Y36(Z.Sr),t.Y36(d.gz),t.Y36(u.$L),t.Y36(u.V1),t.Y36(u.kl),t.Y36(b.FF))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-supplier-evaluation-list"]],viewQuery:function(n,i){if(1&n&&t.Gf(v.j,5),2&n){let r;t.iGM(r=t.CRH())&&(i.headers=r)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","name",3,"sort"],["sortable","description",1,"text-start",3,"sort"],["sortable","enabled",3,"sort"],["sortable","weight",3,"sort"],["sortable","passingPercentage",3,"sort"],["sortable","failingPercentage",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["description",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Supplier Evaluation Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Supplier Evaluation "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return i.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(15,"Name"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(17,"Description"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(19,"Enabled"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(21,"Weight"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(23,"Passing %"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(25,"Failing %"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,x,29,22,"tr",18),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,y,i.page,i.pageSize,i.collection,i.search)),t.xp6(19),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[c.sg,c.O5,A.P,b._L,v.j,C.J,c.JJ],encapsulation:2})}return o})();var s=l(60095);const q=[{message:"Name is Required",key:"name"},{message:"Description is Required",key:"description"},{message:"Enabled is Required",key:"enabled"},{message:"weight is Required",key:"weight"},{message:"Passing %  is Required",key:"passingPercentage"},{message:"Failing %  is Required",key:"failingPercentage"}];var w=l(21631),J=l(22096),k=l(16897);function F(o,p){1&o&&t._UZ(0,"hr",19)}const T=function(o){return{"d-none":o}};function N(o,p){if(1&o){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",21)(2,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",23)(5,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,T,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,T,"View"==e.action))}}let P=(()=>{class o{constructor(e,n,i,r,a,h,m){this.activatedRoute=e,this.spinner=n,this.toastService=i,this.validationService=r,this.supplierEvaluationService=a,this.location=h,this.utilityService=m,this.form=new s.nJ({_id:new s.p4(null),name:new s.p4("",[s.kI.required]),description:new s.p4("",[s.kI.required]),enabled:new s.p4(null,[s.kI.required]),weight:new s.p4("",[s.kI.required]),passingPercentage:new s.p4("",[s.kI.required]),failingPercentage:new s.p4("",[s.kI.required])}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,q))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.supplierEvaluationService.update(e._id,e).subscribe(n=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(n.message),this.location.back()})}create(e){this.spinner.show(),this.supplierEvaluationService.create(e).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,w.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.supplierEvaluationService.getById(e.id):(0,J.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(d.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(k.RJ),t.Y36(Z.Sr),t.Y36(c.Ye),t.Y36(u.tI))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-supplier-evaluation-form"]],decls:54,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["formControlName","name",1,"form-control"],["formControlName","description",1,"form-control"],["formControlName","enabled",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],["type","number","formControlName","weight",1,"form-control"],["type","number","formControlName","passingPercentage",1,"form-control"],["type","number","formControlName","failingPercentage",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center my-4",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","my-4"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(n,i){1&n&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11,"Name "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17,"Description"),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"div",6)(22,"label",7),t._uU(23,"Enabled"),t.TgZ(24,"span",8),t._uU(25,"*"),t.qZA()(),t.TgZ(26,"select",11)(27,"option",12),t._uU(28,"Select Status"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Active"),t.qZA(),t.TgZ(31,"option",13),t._uU(32,"Inactive"),t.qZA()()()(),t.TgZ(33,"div",5)(34,"div",6)(35,"label",7),t._uU(36,"Weight "),t.TgZ(37,"span",8),t._uU(38,"*"),t.qZA()(),t._UZ(39,"input",14),t.qZA(),t.TgZ(40,"div",6)(41,"label",7),t._uU(42,"Passing %"),t.TgZ(43,"span",8),t._uU(44,"*"),t.qZA()(),t._UZ(45,"input",15),t.qZA(),t.TgZ(46,"div",6)(47,"label",7),t._uU(48,"Failing % "),t.TgZ(49,"span",8),t._uU(50,"*"),t.qZA()(),t._UZ(51,"input",16),t.qZA()()(),t.YNc(52,F,1,0,"hr",17),t.YNc(53,N,7,6,"div",18),t.qZA()()),2&n&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("Enter Supplier Evaluation [",t.lcZ(6,7,i.action),"]"),t.xp6(22),t.Q6J("value",null),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(21),t.Q6J("ngIf","view"!==i.action),t.xp6(1),t.Q6J("ngIf","view"!==i.action))},dependencies:[c.mk,c.O5,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u,c.rS],encapsulation:2})}return o})();var I=l(56208);const D=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:U},{path:"form",component:P,resolve:{accessScreen:l(65876).x}}];let Y=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[c.ez,d.Bz.forChild(D),I.m]})}return o})()}}]);