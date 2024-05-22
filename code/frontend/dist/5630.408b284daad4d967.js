"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5630],{85630:(T,h,n)=>{n.r(h),n.d(h,{ProductCategoryModule:()=>H});var l=n(96814),p=n(1076),f=n(43818),C=n(25116),d=n(13107),_=n(28402);let A=["*","*","*","*","*","*","*"],m="Product Category Master",v=[{header:"Sequence",key:"seq",...d.t},{header:"Product No.",key:"productNumber",...d.t},{header:"Product Code",key:"productCode",...d.t},{header:"DD/Display Value</th>",key:"displayProductCategoryName",...d.t},{header:"Application",key:"application",...d.t},{header:"Status",key:"categoryStatus",...d.t}];var t=n(65879),g=n(99328),y=n(37398);let b=(()=>{var r;class c{constructor(e){this.http=e,this.routes={createPath:"/settings/productCategory/create",getAllPath:"/settings/productCategory/getAll",getAllMasterDataPath:"/settings/productCategory/getAllMasterData",updatePath:o=>`/settings/productCategory/update/${o}`,getByIdPath:o=>`/settings/productCategory/getById/${o}`,deletePath:o=>`/settings/productCategory/delete/${o}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,y.U)(o=>o))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,y.U)(o=>o))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,y.U)(o=>o))}update(e,o){return this.http.put(this.routes.updatePath(e),o).pipe((0,y.U)(i=>i))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,y.U)(o=>o))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,y.U)(o=>o))}}return(r=c).\u0275fac=function(e){return new(e||r)(t.LFG(g.sM))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),c})();var x=n(88059),D=n(53421);function N(r,c){1&r&&t._UZ(0,"div",28)}function q(r,c){1&r&&t._UZ(0,"div",29)}function F(r,c){if(1&r){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",19),t.YNc(13,N,1,0,"div",20),t.YNc(14,q,1,0,"div",21),t.qZA()(),t.TgZ(15,"td")(16,"div",22),t._UZ(17,"button",23),t.TgZ(18,"div",24)(19,"a",25),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.navigateTo("/default/settings/master/sales/product_category/form",i,"view"))}),t._UZ(20,"i",26),t._uU(21," View "),t.qZA(),t.TgZ(22,"a",25),t.NdJ("click",function(){const i=t.CHM(a).$implicit,s=t.oxw();return t.KtG(s.navigateTo("/default/settings/master/sales/product_category/form",i,"edit"))}),t._UZ(23,"i",27),t._uU(24," Edit "),t.qZA()()()()()}if(2&r){const a=c.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.seq),t.xp6(2),t.Oqu(null==a?null:a.productNumber),t.xp6(2),t.Oqu(null==a?null:a.productCode),t.xp6(2),t.Oqu(null==a?null:a.displayProductCategoryName),t.xp6(2),t.Oqu(null==a?null:a.application),t.xp6(3),t.Q6J("ngIf","Active"===(null==a?null:a.categoryStatus)),t.xp6(1),t.Q6J("ngIf","Inactive"===(null==a?null:a.categoryStatus)),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const J=function(r,c,a,e){return{page:r,pageSize:c,collection:a,search:e,type:"list"}};let w=(()=>{var r;class c{constructor(e,o,i,s,Z,P){this.exportExcelService=e,this.router=o,this.spinner=i,this.activatedRoute=s,this.productCategoryMasterService=Z,this.exportToPDFService=P,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=C.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,o=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.productCategoryMasterService.getAll(i).subscribe(s=>{"EXCEL"==o?this.excelDownload(s.rows):"PDF"==o?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,o,i){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:o?._id,action:i}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,o){return o?._id}pdfDownload(e){let o=(r=>(0,_.J)({data:r,headers:v,widths:A,title:m}))(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){e.map(o=>(o.name=o.subcategory?.name,o.subCategoryPrefix=o.subcategory?.prefix,o)),this.exportExcelService.exportExcel((r=>({title:m,csvData:r,headers:v}))(e))}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}}return(r=c).\u0275fac=function(e){return new(e||r)(t.Y36(g.Ol),t.Y36(p.F0),t.Y36(g.V),t.Y36(p.gz),t.Y36(b),t.Y36(g.$L))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-category-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(f.j,5),2&e){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","productNumber",3,"sort"],["sortable","productCode",3,"sort"],["sortable","displayProductCategoryName",3,"sort"],["sortable","application",3,"sort"],["sortable","categoryStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],[1,"statusActive"],[1,"statusInActive"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Product Category Master Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Product Category Master "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return o.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(15,"Sequence"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(17,"Product No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(19,"Product Code"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(21,"DD/Display Value"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(23,"Application"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,F,25,9,"tr",18),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",o.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,J,o.page,o.pageSize,o.collection,o.search)),t.xp6(19),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[l.sg,l.O5,x.P,f.j,D.J],encapsulation:2}),c})();var u=n(60095),M=n(21631),I=n(22096);const E=[{message:"DD/Display Value is Required",key:"displayProductCategoryName"}];var L=n(16897);function Y(r,c){1&r&&t._UZ(0,"div",33)}function k(r,c){1&r&&t._UZ(0,"div",34)}function R(r,c){if(1&r){const a=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.reset())}),t._uU(1," Reset "),t.qZA()}}function O(r,c){if(1&r){const a=t.EpF();t.TgZ(0,"button",35),t.NdJ("click",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.submit())}),t._uU(1," Save "),t.qZA()}}const Q=function(){return["create","edit"]},G=function(){return["edit","create"]};let B=(()=>{var r;class c{constructor(e,o,i,s,Z,P,$){this.router=e,this.activatedRoute=o,this.spinner=i,this.toastService=s,this.productCategoryMasterService=Z,this.validationService=P,this.utilityService=$,this.form=new u.nJ({_id:new u.p4(null),seq:new u.p4(""),productNumber:new u.p4(""),productCode:new u.p4(""),displayProductCategoryName:new u.p4(null,[u.kI.required]),application:new u.p4(null),categoryStatus:new u.p4("Active")}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}navigateTo(e,o,i){this.router.navigate([e],{queryParams:{id:o,action:i}})}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,E))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.productCategoryMasterService.update(e._id,e).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.router.navigate(["/default/settings/master/sales/product_category/list"])})}create(e){this.spinner.show(),this.productCategoryMasterService.create(e).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.router.navigate(["/default/settings/master/sales/product_category/list"])})}setDisplayName(){this.form.controls.displayProductCategoryName.setValue(`${this.form.controls.productNumber.value} - ${this.form.controls.productCode.value}`)}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.form.controls.categoryStatus.setValue("Active"),this.activatedRoute.queryParams.pipe((0,M.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.productCategoryMasterService.getById(e.id):(0,I.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"view"==this.action&&this.form.disable())})}}return(r=c).\u0275fac=function(e){return new(e||r)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(g.V),t.Y36(g.kl),t.Y36(b),t.Y36(L.RJ),t.Y36(g.tI))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-product-category-form"]],decls:59,vars:11,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"col-5"],[1,"form-label","px-0"],[1,"text-danger"],["type","text","formControlName","seq",1,"form-control"],[1,"col-7"],[1,"form-label"],["type","text","formControlName","productNumber",1,"form-control",3,"input"],["type","text","formControlName","productCode",1,"form-control",3,"input"],["type","text","formControlName","displayProductCategoryName",1,"form-control"],["type","text","formControlName","application",1,"form-control"],[1,"row","line-border"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","categoryStatus",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],["value","Active"],["value","Inactive"],[1,"input-group-text","statusSpanHeight"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"col-9","pe-3"],[1,"d-flex","justify-content-end"],[1,"d-grid","col-md-1","mx-5"],["type","button","class","btn btn-primary px-3",3,"click",4,"ngIf"],[1,"d-grid","col-md-1","me-3"],[1,"statusActive"],[1,"statusInActive"],["type","button",1,"btn","btn-primary","px-3",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",5)(10,"div",7)(11,"label",8),t._uU(12,"Sequence"),t._UZ(13,"span",9),t.qZA(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",11)(16,"label",12),t._uU(17,"Product No. "),t._UZ(18,"span",9),t.qZA(),t.TgZ(19,"input",13),t.NdJ("input",function(){return o.setDisplayName()}),t.qZA()()()(),t.TgZ(20,"div",6)(21,"label",12),t._uU(22,"Product Code "),t._UZ(23,"span",9),t.qZA(),t.TgZ(24,"input",14),t.NdJ("input",function(){return o.setDisplayName()}),t.qZA()(),t.TgZ(25,"div",6)(26,"label",12),t._uU(27,"DD/Display Value"),t.TgZ(28,"span",9),t._uU(29,"*"),t.qZA()(),t._UZ(30,"input",15),t.qZA(),t.TgZ(31,"div",6)(32,"label",12),t._uU(33,"Application"),t._UZ(34,"span",9),t.qZA(),t._UZ(35,"input",16),t.qZA()()(),t._UZ(36,"hr",17),t.TgZ(37,"div",5)(38,"div",6)(39,"div",18)(40,"div",19)(41,"button",20),t._uU(42,"Status"),t.qZA()(),t.TgZ(43,"select",21)(44,"option",22),t._uU(45,"Select Status"),t.qZA(),t.TgZ(46,"option",23),t._uU(47,"Active"),t.qZA(),t.TgZ(48,"option",24),t._uU(49,"Inactive"),t.qZA()(),t.TgZ(50,"span",25),t.YNc(51,Y,1,0,"div",26),t.YNc(52,k,1,0,"div",27),t.qZA()()(),t.TgZ(53,"div",28)(54,"div",29)(55,"div",30),t.YNc(56,R,2,0,"button",31),t.qZA(),t.TgZ(57,"div",32),t.YNc(58,O,2,0,"button",31),t.qZA()()()()()()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(4),t.hij("Product Category Master (",t.lcZ(5,7,o.action),")"),t.xp6(40),t.Q6J("value","null"),t.xp6(7),t.Q6J("ngIf","Active"==o.form.value.categoryStatus),t.xp6(1),t.Q6J("ngIf","Inactive"==o.form.value.categoryStatus),t.xp6(4),t.Q6J("ngIf",t.DdM(9,Q).includes(o.action)),t.xp6(2),t.Q6J("ngIf",t.DdM(10,G).includes(o.action)))},dependencies:[l.O5,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.sg,u.u,l.rS],encapsulation:2}),c})();var z=n(19964),V=n(56208);const j=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:w},{path:"form",component:B,resolve:{accessScreen:z.xr}}];let H=(()=>{var r;class c{}return(r=c).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[l.ez,p.Bz.forChild(j),V.m]}),c})()},13107:(T,h,n)=>{n.d(h,{t:()=>l});const l={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,h,n)=>{n.d(h,{J:()=>l});const l=({data:p,headers:f,widths:C,title:d})=>({tableData:{widths:C,headerRows:1,body:[f.map(m=>({text:m.header,style:"header"})),...p.map(m=>f.map(v=>({style:"subheader",text:m[v.key]})))]},title:d})}}]);