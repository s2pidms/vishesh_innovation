"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2352],{92352:(L,h,c)=>{c.r(h),c.d(h,{ESPCategoryModule:()=>D});var u=c(96814),p=c(1076),f=c(43818),Z=c(25116),v=c(93383),t=c(65879),d=c(2742),y=c(39029),S=c(88059),b=c(53421);function A(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",17),t._UZ(11,"button",18),t.TgZ(12,"div",19)(13,"a",20),t.NdJ("click",function(){const n=t.CHM(r).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"view"))}),t._UZ(14,"i",21),t._uU(15," View "),t.qZA(),t.TgZ(16,"a",20),t.NdJ("click",function(){const n=t.CHM(r).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"edit"))}),t._UZ(17,"i",22),t._uU(18," Edit "),t.qZA()()()()()}if(2&o){const r=l.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==r?null:r.category),t.xp6(2),t.Oqu(null==r?null:r.prefix),t.xp6(2),t.Oqu(null==r?null:r.digit),t.xp6(2),t.Oqu(null==r?null:r.nextAutoIncrement),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const T=function(o,l,r,e){return{page:o,pageSize:l,collection:r,search:e,type:"list"}};let _=(()=>{var o;class l{constructor(e,i,n,s,g,m){this.exportExcelService=e,this.router=i,this.spinner=n,this.activatedRoute=s,this.espCategoryService=g,this.exportToPDFService=m,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=Z.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,i=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.espCategoryService.getAll(n).subscribe(s=>{"EXCEL"==i?this.excelDownload(s.rows):"PDF"==i?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,i,n){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:n}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,i){return i?._id}pdfDownload(e){let i=(0,v.qA)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){e.map(i=>(i.name=i.subcategory?.name,i.subCategoryPrefix=i.subcategory?.prefix,i)),this.exportExcelService.exportExcel((0,v.xm)(e))}onSort({column:e,direction:i}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}}return(o=l).\u0275fac=function(e){return new(e||o)(t.Y36(d.Ol),t.Y36(p.F0),t.Y36(d.V),t.Y36(p.gz),t.Y36(y.BW),t.Y36(d.$L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-esp-category-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(f.j,5),2&e){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:26,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","category",3,"sort"],["sortable","prefix\n            ",3,"sort"],["sortable","digit",3,"sort"],["sortable","nextAutoIncrement",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"ESP Category Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," ESP Category "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(15,"Category"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(17," Category Prefix "),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(19,"Digit"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(21,"Auto Increment No."),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,A,19,6,"tr",16),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,T,i.page,i.pageSize,i.collection,i.search)),t.xp6(15),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[u.sg,S.P,f.j,b.J],encapsulation:2}),l})();var a=c(60095),P=c(21631),x=c(22096),E=c(73275),U=c(16897);const C=function(o){return{"d-none":o}};function q(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"div",19)(1,"div",20)(2,"button",21),t.NdJ("click",function(){t.CHM(r);const i=t.oxw();return t.KtG(i.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",22)(5,"button",21),t.NdJ("click",function(){t.CHM(r);const i=t.oxw();return t.KtG(i.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,C,"View"==r.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,C,"View"==r.action))}}let J=(()=>{var o;class l{constructor(e,i,n,s,g,m,I){this.activatedRoute=e,this.spinner=i,this.toastService=n,this.espCategoryService=s,this.validationService=g,this.utilityService=m,this.location=I,this.form=new a.nJ({_id:new a.p4(null),category:new a.p4("",[a.kI.required]),prefix:new a.p4("",[a.kI.required]),nextAutoIncrement:new a.p4("",[a.kI.required]),digit:new a.p4(4),categoryStatus:new a.p4("Active",[a.kI.required])}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,E.Dn))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.espCategoryService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}create(e){this.spinner.show(),this.espCategoryService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.form.controls.digit.setValue(4),this.form.controls.categoryStatus.setValue("Active"),this.activatedRoute.queryParams.pipe((0,P.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.espCategoryService.getById(e.id):(0,x.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}}return(o=l).\u0275fac=function(e){return new(e||o)(t.Y36(p.gz),t.Y36(d.V),t.Y36(d.kl),t.Y36(y.BW),t.Y36(U.RJ),t.Y36(d.tI),t.Y36(u.Ye))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-esp-category-form"]],decls:47,vars:6,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["formControlName","category",1,"form-control"],["formControlName","prefix",1,"form-control"],["formControlName","categoryStatus",1,"form-select"],["selected","","disabled","",3,"value"],["value","Active"],["value","Inactive"],["type","number","formControlName","nextAutoIncrement",1,"form-control"],["type","number","formControlName","digit",1,"form-control"],[1,"col-12","pb-4","mt-4"],["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1","me-3",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Category Name "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16,"Category Prefix "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22,"Active"),t.TgZ(23,"span",8),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"select",11)(26,"option",12),t._uU(27,"Select Status"),t.qZA(),t.TgZ(28,"option",13),t._uU(29,"Active"),t.qZA(),t.TgZ(30,"option",14),t._uU(31,"Inactive"),t.qZA()()()(),t.TgZ(32,"div",5)(33,"div",6)(34,"label",7),t._uU(35,"Auto Increment No."),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t._UZ(38,"input",15),t.qZA(),t.TgZ(39,"div",6)(40,"label",7),t._uU(41,"Digit"),t._UZ(42,"span",8),t.qZA(),t._UZ(43,"input",16),t.qZA()()(),t.TgZ(44,"div",5)(45,"div",17),t.YNc(46,q,7,6,"div",18),t.qZA()()()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(4),t.hij("Enter ESP Category (",t.lcZ(5,4,i.action),")"),t.xp6(22),t.Q6J("value",null),t.xp6(20),t.Q6J("ngIf","view"!==i.action))},dependencies:[u.mk,u.O5,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.sg,a.u,u.rS],encapsulation:2}),l})();var F=c(56208);const N=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:_},{path:"form",component:J,resolve:{accessScreen:c(65876).x}}];let D=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,p.Bz.forChild(N),F.m]}),l})()}}]);