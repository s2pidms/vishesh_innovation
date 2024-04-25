"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3542],{68237:(y,m,n)=>{n.r(m),n.d(m,{ChildItemCategoryModule:()=>Y});var c=n(96814),u=n(1076),s=n(60095),p=n(21631),f=n(22096),v=n(73275),g=n(25116),t=n(65879),d=n(98977),_=n(88354),b=n(16897),x=n(37285);function I(r,h){if(1&r&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&r){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function S(r,h){1&r&&t._UZ(0,"hr",22)}const Z=function(r){return{"d-none":r}};function U(r,h){if(1&r){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",26)(5,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,Z,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,Z,"View"==e.action))}}let F=(()=>{class r{constructor(e,i,o,a,l,C,k,O){this.router=e,this.activatedRoute=i,this.spinner=o,this.toastService=a,this.childItemCategoryService=l,this.validationService=C,this.modalService=k,this.utilityService=O,this.form=new s.nJ({_id:new s.p4(null),category:new s.p4("",[s.kI.required]),prefix:new s.p4("",[s.kI.required]),nextAutoIncrement:new s.p4("",[s.kI.required]),digit:new s.p4(4),categoryStatus:new s.p4("Active",[s.kI.required])}),this.submitted=!1,this.action="create",this.categoryName=g.pR}ngOnInit(){this.getInitialData()}navigateTo(e,i,o){this.router.navigate([e],{queryParams:{id:i,action:o}})}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,v.Dn))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.childItemCategoryService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.router.navigate(["default/settings/master/planning/child_item_category/list"])})}create(e){this.spinner.show(),this.childItemCategoryService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.router.navigate(["default/settings/master/planning/child_item_category/list"])})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.form.controls.digit.setValue(4),this.form.controls.categoryStatus.setValue("Active"),this.activatedRoute.queryParams.pipe((0,p.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.childItemCategoryService.getById(e.id):(0,f.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(u.F0),t.Y36(u.gz),t.Y36(d.V),t.Y36(d.kl),t.Y36(_.CE),t.Y36(b.RJ),t.Y36(x.FF),t.Y36(d.tI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-child-item-category-form"]],decls:51,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["formControlName","category",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","prefix",1,"form-control"],["formControlName","categoryStatus",1,"form-select"],["value","Active"],["value","Inactive"],["type","number","formControlName","nextAutoIncrement",1,"form-control"],["type","number","formControlName","digit",1,"form-control"],["class","row line-border",4,"ngIf"],[1,"col-12"],["class","d-flex justify-content-center",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1","me-3",3,"ngClass"]],template:function(i,o){1&i&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Category Name "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t.TgZ(13,"select",9)(14,"option",10),t._uU(15,"Category Name"),t.qZA(),t.YNc(16,I,2,2,"option",11),t.qZA()(),t.TgZ(17,"div",6)(18,"label",7),t._uU(19,"Category Prefix "),t.TgZ(20,"span",8),t._uU(21,"*"),t.qZA()(),t._UZ(22,"input",12),t.qZA(),t.TgZ(23,"div",6)(24,"label",7),t._uU(25,"Active"),t.TgZ(26,"span",8),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"select",13)(29,"option",10),t._uU(30,"Select Status"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Active"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Inactive"),t.qZA()()()(),t.TgZ(35,"div",5)(36,"div",6)(37,"label",7),t._uU(38,"Auto Increment No."),t.TgZ(39,"span",8),t._uU(40,"*"),t.qZA()(),t._UZ(41,"input",16),t.qZA(),t.TgZ(42,"div",6)(43,"label",7),t._uU(44,"Digit"),t._UZ(45,"span",8),t.qZA(),t._UZ(46,"input",17),t.qZA()()()(),t.YNc(47,S,1,0,"hr",18),t.TgZ(48,"div",5)(49,"div",19),t.YNc(50,U,7,6,"div",20),t.qZA()()()),2&i&&(t.Q6J("formGroup",o.form),t.xp6(4),t.hij("Enter Child Item Category (",t.lcZ(5,7,o.action),")"),t.xp6(10),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",o.categoryName),t.xp6(13),t.Q6J("value",null),t.xp6(18),t.Q6J("ngIf","view"!==o.action),t.xp6(3),t.Q6J("ngIf","view"!==o.action))},dependencies:[c.mk,c.sg,c.O5,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u,c.rS],encapsulation:2})}return r})();var T=n(43818),A=n(91164),w=n(88059),J=n(53421);function q(r,h){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",17),t._UZ(11,"button",18),t.TgZ(12,"div",19)(13,"a",20),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("default/settings/master/planning/child_item_category/form",a,"view"))}),t._UZ(14,"i",21),t._uU(15," View "),t.qZA(),t.TgZ(16,"a",20),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("default/settings/master/planning/child_item_category/form",a,"edit"))}),t._UZ(17,"i",22),t._uU(18," Edit "),t.qZA()()()()()}if(2&r){const e=h.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.category),t.xp6(2),t.Oqu(null==e?null:e.prefix),t.xp6(2),t.Oqu(null==e?null:e.digit),t.xp6(2),t.Oqu(null==e?null:e.nextAutoIncrement),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",i.rolePermissionActions.editAction)}}const N=function(r,h,e,i){return{page:r,pageSize:h,collection:e,search:i,type:"list"}};let E=(()=>{class r{constructor(e,i,o,a,l,C){this.exportExcelService=e,this.router=i,this.spinner=o,this.activatedRoute=a,this.childItemCategoryService=l,this.exportToPDFService=C,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=g.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.childItemCategoryService.getAll(o).subscribe(a=>{"EXCEL"==i?this.excelDownload(a.rows):"PDF"==i?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,i,o){this.router.navigate([e],{queryParams:{id:i?._id,action:o}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,i){return i?._id}excelDownload(e){this.exportExcelService.exportExcel((0,A.v1)(e))}pdfDownload(e){let i=(0,A.TO)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(d.Ol),t.Y36(u.F0),t.Y36(d.V),t.Y36(u.gz),t.Y36(_.CE),t.Y36(d.$L))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-child-item-category-list"]],viewQuery:function(i,o){if(1&i&&t.Gf(T.j,5),2&i){let a;t.iGM(a=t.CRH())&&(o.headers=a)}},decls:26,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","category",3,"sort"],["sortable","prefix\n                  ",3,"sort"],["sortable","digit",3,"sort"],["sortable","nextAutoIncrement",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Child Item Category Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.navigateTo("default/settings/master/planning/child_item_category/form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Child Item Category "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(l){return o.eventHeader(l)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(l){return o.onSort(l)}),t._uU(15,"Category"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(l){return o.onSort(l)}),t._uU(17," Category Prefix "),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(l){return o.onSort(l)}),t._uU(19,"Digit"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(l){return o.onSort(l)}),t._uU(21,"Auto Increment No."),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,q,19,6,"tr",16),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",o.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,N,o.page,o.pageSize,o.collection,o.search)),t.xp6(15),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[c.sg,w.P,T.j,J.J],encapsulation:2})}return r})();var D=n(56208);const P=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:E},{path:"form",component:F,resolve:{accessScreen:n(65876).x}}];let Y=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[c.ez,D.m,u.Bz.forChild(P)]})}return r})()},13107:(y,m,n)=>{n.d(m,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(y,m,n)=>{n.d(m,{J:()=>c});const c=({data:u,headers:s,widths:p,title:f})=>({tableData:{widths:p,headerRows:1,body:[s.map(t=>({text:t.header,style:"header"})),...u.map(t=>s.map(d=>({style:"subheader",text:t[d.key]})))]},title:f})}}]);