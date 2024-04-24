"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5630],{85630:(T,h,s)=>{s.r(h),s.d(h,{ProductCategoryModule:()=>j});var u=s(96814),p=s(1076),f=s(43818),C=s(25116),d=s(13107),_=s(28402);let A=["*","*","*","*","*","*","*"],m="Product Category Master",v=[{header:"Sequence",key:"seq",...d.t},{header:"Product No.",key:"productNumber",...d.t},{header:"Product Code",key:"productCode",...d.t},{header:"DD/Display Value</th>",key:"displayProductCategoryName",...d.t},{header:"Application",key:"application",...d.t},{header:"Status",key:"categoryStatus",...d.t}];var t=s(65879),g=s(98977),y=s(37398);let b=(()=>{class i{constructor(e){this.http=e,this.routes={createPath:"/settings/productCategory/create",getAllPath:"/settings/productCategory/getAll",getAllMasterDataPath:"/settings/productCategory/getAllMasterData",updatePath:o=>`/settings/productCategory/update/${o}`,getByIdPath:o=>`/settings/productCategory/getById/${o}`,deletePath:o=>`/settings/productCategory/delete/${o}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,y.U)(o=>o))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,y.U)(o=>o))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,y.U)(o=>o))}update(e,o){return this.http.put(this.routes.updatePath(e),o).pipe((0,y.U)(r=>r))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,y.U)(o=>o))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,y.U)(o=>o))}static#t=this.\u0275fac=function(o){return new(o||i)(t.LFG(g.sM))};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var U=s(88059),x=s(53421);function D(i,l){1&i&&t._UZ(0,"div",28)}function N(i,l){1&i&&t._UZ(0,"div",29)}function q(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",19),t.YNc(13,D,1,0,"div",20),t.YNc(14,N,1,0,"div",21),t.qZA()(),t.TgZ(15,"td")(16,"div",22),t._UZ(17,"button",23),t.TgZ(18,"div",24)(19,"a",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.navigateTo("/default/settings/master/sales/product_category/form",a,"view"))}),t._UZ(20,"i",26),t._uU(21," View "),t.qZA(),t.TgZ(22,"a",25),t.NdJ("click",function(){const a=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.navigateTo("/default/settings/master/sales/product_category/form",a,"edit"))}),t._UZ(23,"i",27),t._uU(24," Edit "),t.qZA()()()()()}if(2&i){const e=l.$implicit,o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.seq),t.xp6(2),t.Oqu(null==e?null:e.productNumber),t.xp6(2),t.Oqu(null==e?null:e.productCode),t.xp6(2),t.Oqu(null==e?null:e.displayProductCategoryName),t.xp6(2),t.Oqu(null==e?null:e.application),t.xp6(3),t.Q6J("ngIf","Active"===(null==e?null:e.categoryStatus)),t.xp6(1),t.Q6J("ngIf","Inactive"===(null==e?null:e.categoryStatus)),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.editAction)}}const F=function(i,l,e,o){return{page:i,pageSize:l,collection:e,search:o,type:"list"}};let J=(()=>{class i{constructor(e,o,r,a,n,Z){this.exportExcelService=e,this.router=o,this.spinner=r,this.activatedRoute=a,this.productCategoryMasterService=n,this.exportToPDFService=Z,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=C.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,o=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.productCategoryMasterService.getAll(r).subscribe(a=>{"EXCEL"==o?this.excelDownload(a.rows):"PDF"==o?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,o,r){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:o?._id,action:r}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,o){return o?._id}pdfDownload(e){let o=(i=>(0,_.J)({data:i,headers:v,widths:A,title:m}))(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){e.map(o=>(o.name=o.subcategory?.name,o.subCategoryPrefix=o.subcategory?.prefix,o)),this.exportExcelService.exportExcel((i=>({title:m,csvData:i,headers:v}))(e))}onSort({column:e,direction:o}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(g.Ol),t.Y36(p.F0),t.Y36(g.V),t.Y36(p.gz),t.Y36(b),t.Y36(g.$L))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-product-category-list"]],viewQuery:function(o,r){if(1&o&&t.Gf(f.j,5),2&o){let a;t.iGM(a=t.CRH())&&(r.headers=a)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","productNumber",3,"sort"],["sortable","productCode",3,"sort"],["sortable","displayProductCategoryName",3,"sort"],["sortable","application",3,"sort"],["sortable","categoryStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],[1,"statusActive"],[1,"statusInActive"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Product Category Master Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return r.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Product Category Master "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(n){return r.eventHeader(n)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(n){return r.onSort(n)}),t._uU(15,"Sequence"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(n){return r.onSort(n)}),t._uU(17,"Product No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(n){return r.onSort(n)}),t._uU(19,"Product Code"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(n){return r.onSort(n)}),t._uU(21,"DD/Display Value"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(n){return r.onSort(n)}),t._uU(23,"Application"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(n){return r.onSort(n)}),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,q,25,9,"tr",18),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",r.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,F,r.page,r.pageSize,r.collection,r.search)),t.xp6(19),t.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn))},dependencies:[u.sg,u.O5,U.P,f.j,x.J],encapsulation:2})}return i})();var c=s(60095),w=s(21631),I=s(22096);const E=[{message:"DD/Display Value is Required",key:"displayProductCategoryName"}];var M=s(16897);function Y(i,l){1&i&&t._UZ(0,"div",33)}function k(i,l){1&i&&t._UZ(0,"div",34)}function L(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.reset())}),t._uU(1," Reset "),t.qZA()}}function R(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.submit())}),t._uU(1," Save "),t.qZA()}}const O=function(){return["create","edit"]},Q=function(){return["edit","create"]};let G=(()=>{class i{constructor(e,o,r,a,n,Z,H){this.router=e,this.activatedRoute=o,this.spinner=r,this.toastService=a,this.productCategoryMasterService=n,this.validationService=Z,this.utilityService=H,this.form=new c.nJ({_id:new c.p4(null),seq:new c.p4(""),productNumber:new c.p4(""),productCode:new c.p4(""),displayProductCategoryName:new c.p4(null,[c.kI.required]),application:new c.p4(null),categoryStatus:new c.p4("Active")}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}navigateTo(e,o,r){this.router.navigate([e],{queryParams:{id:o,action:r}})}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,E))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.productCategoryMasterService.update(e._id,e).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.router.navigate(["/default/settings/master/sales/product_category/list"])})}create(e){this.spinner.show(),this.productCategoryMasterService.create(e).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.router.navigate(["/default/settings/master/sales/product_category/list"])})}setDisplayName(){this.form.controls.displayProductCategoryName.setValue(`${this.form.controls.productNumber.value} - ${this.form.controls.productCode.value}`)}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.form.controls.categoryStatus.setValue("Active"),this.activatedRoute.queryParams.pipe((0,w.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.productCategoryMasterService.getById(e.id):(0,I.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"view"==this.action&&this.form.disable())})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(g.V),t.Y36(g.kl),t.Y36(b),t.Y36(M.RJ),t.Y36(g.tI))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-product-category-form"]],decls:59,vars:11,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"col-5"],[1,"form-label","px-0"],[1,"text-danger"],["type","text","formControlName","seq",1,"form-control"],[1,"col-7"],[1,"form-label"],["type","text","formControlName","productNumber",1,"form-control",3,"input"],["type","text","formControlName","productCode",1,"form-control",3,"input"],["type","text","formControlName","displayProductCategoryName",1,"form-control"],["type","text","formControlName","application",1,"form-control"],[1,"row","line-border"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","categoryStatus",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],["value","Active"],["value","Inactive"],[1,"input-group-text","statusSpanHeight"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"col-9","pe-3"],[1,"d-flex","justify-content-end"],[1,"d-grid","col-md-1","mx-5"],["type","button","class","btn btn-primary px-3",3,"click",4,"ngIf"],[1,"d-grid","col-md-1","me-3"],[1,"statusActive"],[1,"statusInActive"],["type","button",1,"btn","btn-primary","px-3",3,"click"]],template:function(o,r){1&o&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",5)(10,"div",7)(11,"label",8),t._uU(12,"Sequence"),t._UZ(13,"span",9),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",11)(16,"label",12),t._uU(17,"Product No. "),t._UZ(18,"span",9),t.qZA(),t.TgZ(19,"input",13),t.NdJ("input",function(){return r.setDisplayName()}),t.qZA()()()(),t.TgZ(20,"div",6)(21,"label",12),t._uU(22,"Product Code "),t._UZ(23,"span",9),t.qZA(),t.TgZ(24,"input",14),t.NdJ("input",function(){return r.setDisplayName()}),t.qZA()(),t.TgZ(25,"div",6)(26,"label",12),t._uU(27,"DD/Display Value"),t.TgZ(28,"span",9),t._uU(29,"*"),t.qZA()(),t._UZ(30,"input",15),t.qZA(),t.TgZ(31,"div",6)(32,"label",12),t._uU(33,"Application"),t._UZ(34,"span",9),t.qZA(),t._UZ(35,"input",16),t.qZA()()(),t._UZ(36,"hr",17),t.TgZ(37,"div",5)(38,"div",6)(39,"div",18)(40,"div",19)(41,"button",20),t._uU(42,"Status"),t.qZA()(),t.TgZ(43,"select",21)(44,"option",22),t._uU(45,"Select Status"),t.qZA(),t.TgZ(46,"option",23),t._uU(47,"Active"),t.qZA(),t.TgZ(48,"option",24),t._uU(49,"Inactive"),t.qZA()(),t.TgZ(50,"span",25),t.YNc(51,Y,1,0,"div",26),t.YNc(52,k,1,0,"div",27),t.qZA()()(),t.TgZ(53,"div",28)(54,"div",29)(55,"div",30),t.YNc(56,L,2,0,"button",31),t.qZA(),t.TgZ(57,"div",32),t.YNc(58,R,2,0,"button",31),t.qZA()()()()()()),2&o&&(t.Q6J("formGroup",r.form),t.xp6(4),t.hij("Product Category Master (",t.lcZ(5,7,r.action),")"),t.xp6(40),t.Q6J("value","null"),t.xp6(7),t.Q6J("ngIf","Active"==r.form.value.categoryStatus),t.xp6(1),t.Q6J("ngIf","Inactive"==r.form.value.categoryStatus),t.xp6(4),t.Q6J("ngIf",t.DdM(9,O).includes(r.action)),t.xp6(2),t.Q6J("ngIf",t.DdM(10,Q).includes(r.action)))},dependencies:[u.O5,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u,u.rS],encapsulation:2})}return i})();var B=s(19964),z=s(56208);const V=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:J},{path:"form",component:G,resolve:{accessScreen:B.xr}}];let j=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[u.ez,p.Bz.forChild(V),z.m]})}return i})()},13107:(T,h,s)=>{s.d(h,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,h,s)=>{s.d(h,{J:()=>u});const u=({data:p,headers:f,widths:C,title:d})=>({tableData:{widths:C,headerRows:1,body:[f.map(m=>({text:m.header,style:"header"})),...p.map(m=>f.map(v=>({style:"subheader",text:m[v.key]})))]},title:d})}}]);