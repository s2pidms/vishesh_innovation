"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3997],{73997:(k,f,c)=>{c.r(f),c.d(f,{AssetClassModule:()=>I});var p=c(96814),d=c(1076),A=c(43818),m=c(25116),v=c(93383),t=c(65879),u=c(2742),C=c(39029),_=c(88059),T=c(53421);function b(n,l){if(1&n){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",19),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",20),t._UZ(15,"button",21),t.TgZ(16,"div",22)(17,"a",23),t.NdJ("click",function(){const o=t.CHM(i).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",o,"view"))}),t._UZ(18,"i",24),t._uU(19," View "),t.qZA(),t.TgZ(20,"a",23),t.NdJ("click",function(){const o=t.CHM(i).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",o,"edit"))}),t._UZ(21,"i",25),t._uU(22," Edit "),t.qZA()()()()()}if(2&n){const i=l.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==i?null:i.order),t.xp6(2),t.Oqu(null==i?null:i.assetClassName),t.xp6(2),t.Oqu(null==i?null:i.prefix),t.xp6(2),t.Oqu(null==i?null:i.depreciation),t.xp6(2),t.Oqu(null==i?null:i.energySpecification),t.xp6(2),t.Oqu(null==i?null:i.type),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const y=function(n,l,i,e){return{page:n,pageSize:l,collection:i,search:e,type:"list"}};let U=(()=>{var n;class l{constructor(e,s,o,a,h,g){this.exportExcelService=e,this.router=s,this.spinner=o,this.activatedRoute=a,this.assetClassService=h,this.exportToPDFService=g,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=m.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.assetClassService.getAll(o).subscribe(a=>{e?this.excelDownload(a.rows):(this.tableData=a.rows,this.collection=a.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,s,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:s?._id,action:o}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,s){return s?._id}pdfDownload(e){let s=(0,v.x9)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((0,v.sy)(e))}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}}return(n=l).\u0275fac=function(e){return new(e||n)(t.Y36(u.Ol),t.Y36(d.F0),t.Y36(u.V),t.Y36(d.gz),t.Y36(C.dG),t.Y36(u.$L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-asset-class-list"]],viewQuery:function(e,s){if(1&e&&t.Gf(A.j,5),2&e){let o;t.iGM(o=t.CRH())&&(s.headers=o)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","order",3,"sort"],["sortable","assetClassName",1,"text-start",3,"sort"],["sortable","prefix",3,"sort"],["sortable","depreciation",3,"sort"],["sortable","energySpecification",3,"sort"],["sortable","type",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Asset Class Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return s.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Asset Class "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return s.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(15,"Oder"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(17,"Asset Class Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(19,"Prefix"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(21,"Depreciation"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(23,"Energy Specification"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(25,"Type"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,b,23,8,"tr",18),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",s.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,y,s.page,s.pageSize,s.collection,s.search)),t.xp6(19),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[p.sg,_.P,A.j,T.J],encapsulation:2}),l})();var r=c(60095),x=c(21631),S=c(22096),q=c(73275),J=c(16897);function N(n,l){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const i=l.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.label," ")}}function F(n,l){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const i=l.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.label," ")}}function w(n,l){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const i=l.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.label," ")}}function Q(n,l){1&n&&t._UZ(0,"hr",26)}const Z=function(n){return{"d-none":n}};function D(n,l){if(1&n){const i=t.EpF();t.TgZ(0,"div",27)(1,"div",28)(2,"button",29),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",30)(5,"button",29),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,Z,"View"==i.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,Z,"View"==i.action))}}let E=(()=>{var n;class l{constructor(e,s,o,a,h,g,P){this.activatedRoute=e,this.spinner=s,this.toastService=o,this.assetClassService=a,this.validationService=h,this.utilityService=g,this.location=P,this.assetClassTypeObj=m.iS,this.assetClassTypeArr=m.iS.getAllClassType(),this.depreciationAndEnergySpecArr=m.QM,this.form=new r.nJ({_id:new r.p4(null),order:new r.p4(null),assetClassName:new r.p4(null),prefix:new r.p4(null),nextAutoIncrement:new r.p4(null),digit:new r.p4(null),depreciation:new r.p4(null),energySpecification:new r.p4(null),type:new r.p4(null),status:new r.p4("Active")}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,q.Dn))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.assetClassService.update(e._id,e).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}create(e){this.spinner.show(),this.assetClassService.create(e).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.form.controls.digit.setValue(4),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,x.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.assetClassService.getById(e.id):(0,S.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}}return(n=l).\u0275fac=function(e){return new(e||n)(t.Y36(d.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(C.dG),t.Y36(J.RJ),t.Y36(u.tI),t.Y36(p.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-asset-class-form"]],decls:82,vars:13,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["formControlName","order",1,"form-control"],["formControlName","assetClassName",1,"form-control"],["formControlName","type",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","depreciation",1,"form-select"],["formControlName","energySpecification",1,"form-select"],["formControlName","prefix",1,"form-control"],["type","number","formControlName","nextAutoIncrement",1,"form-control"],["type","number","formControlName","digit",1,"form-control"],["formControlName","status",1,"form-select"],["value","Active"],["value","Inactive"],["class","row line-border",4,"ngIf"],[1,"col-12"],["class","d-flex justify-content-center",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1","me-3",3,"ngClass"]],template:function(e,s){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Order "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16,"Asset Class Name "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22,"Type"),t.TgZ(23,"span",8),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"select",11)(26,"option",12),t._uU(27,"Select Type"),t.qZA(),t.YNc(28,N,2,2,"option",13),t.qZA()()(),t.TgZ(29,"div",5)(30,"div",6)(31,"label",7),t._uU(32,"Depreciation"),t.TgZ(33,"span",8),t._uU(34,"*"),t.qZA()(),t.TgZ(35,"select",14)(36,"option",12),t._uU(37,"Select Depreciation"),t.qZA(),t.YNc(38,F,2,2,"option",13),t.qZA()(),t.TgZ(39,"div",6)(40,"label",7),t._uU(41,"Energy Specification"),t.TgZ(42,"span",8),t._uU(43,"*"),t.qZA()(),t.TgZ(44,"select",15)(45,"option",12),t._uU(46,"Select Energy Specification"),t.qZA(),t.YNc(47,w,2,2,"option",13),t.qZA()(),t.TgZ(48,"div",6)(49,"label",7),t._uU(50,"Category Prefix "),t.TgZ(51,"span",8),t._uU(52,"*"),t.qZA()(),t._UZ(53,"input",16),t.qZA()(),t.TgZ(54,"div",5)(55,"div",6)(56,"label",7),t._uU(57,"Auto Increment No."),t.TgZ(58,"span",8),t._uU(59,"*"),t.qZA()(),t._UZ(60,"input",17),t.qZA(),t.TgZ(61,"div",6)(62,"label",7),t._uU(63,"Digit"),t._UZ(64,"span",8),t.qZA(),t._UZ(65,"input",18),t.qZA(),t.TgZ(66,"div",6)(67,"label",7),t._uU(68,"Active"),t.TgZ(69,"span",8),t._uU(70,"*"),t.qZA()(),t.TgZ(71,"select",19)(72,"option",12),t._uU(73,"Select Status"),t.qZA(),t.TgZ(74,"option",20),t._uU(75,"Active"),t.qZA(),t.TgZ(76,"option",21),t._uU(77,"Inactive"),t.qZA()()()()(),t.YNc(78,Q,1,0,"hr",22),t.TgZ(79,"div",5)(80,"div",23),t.YNc(81,D,7,6,"div",24),t.qZA()()()()),2&e&&(t.Q6J("formGroup",s.form),t.xp6(4),t.hij("Asset Class (",t.lcZ(5,11,s.action),")"),t.xp6(22),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",s.assetClassTypeArr),t.xp6(8),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",s.depreciationAndEnergySpecArr),t.xp6(7),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",s.depreciationAndEnergySpecArr),t.xp6(25),t.Q6J("value",null),t.xp6(6),t.Q6J("ngIf","view"!==s.action),t.xp6(3),t.Q6J("ngIf","view"!==s.action))},dependencies:[p.mk,p.sg,p.O5,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,p.rS],encapsulation:2}),l})();var L=c(19964),O=c(56208);const Y=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:U},{path:"form",component:E,resolve:{accessScreen:L.xr}}];let I=(()=>{var n;class l{}return(n=l).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,d.Bz.forChild(Y),O.m]}),l})()}}]);