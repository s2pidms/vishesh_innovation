"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4865],{46701:(b,h,n)=>{n.r(h),n.d(h,{PSByProductCategoryModule:()=>G});var u=n(96814),m=n(1076),d=n(43818),y=n(25116),f=n(83600),t=n(65879),p=n(98977),g=n(2498),C=n(88059),v=n(53421);function Z(a,l){1&a&&t._UZ(0,"div",28)}function T(a,l){1&a&&t._UZ(0,"div",29)}function A(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"span",18),t.YNc(11,Z,1,0,"div",19),t.YNc(12,T,1,0,"div",20),t.qZA()(),t.TgZ(13,"td")(14,"div",21),t._UZ(15,"button",22),t.TgZ(16,"div",23)(17,"a",24),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"view"))}),t._UZ(18,"i",25),t._uU(19," View "),t.qZA(),t.TgZ(20,"a",24),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"edit"))}),t._UZ(21,"i",26),t._uU(22," Edit "),t.qZA(),t.TgZ(23,"a",24),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"copy"))}),t._UZ(24,"i",27),t._uU(25," Copy "),t.qZA()()()()()}if(2&a){const e=l.$implicit,r=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.productNumber),t.xp6(2),t.Oqu(null==e?null:e.productCode),t.xp6(2),t.Oqu(null==e?null:e.displayProductCategoryName),t.xp6(2),t.Oqu(null==e?null:e.application),t.xp6(3),t.Q6J("ngIf","Active"===(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","Inactive"===(null==e?null:e.status)),t.xp6(5),t.Q6J("accessType",r.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",r.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Inactive"==e.status),t.Q6J("accessType",r.rolePermissionActions.editAction)}}const w=function(a,l,e,r){return{page:a,pageSize:l,collection:e,search:r,type:"list"}};let L=(()=>{class a{constructor(e,r,o,i,s,_){this.exportExcelService=e,this.router=r,this.spinner=o,this.activatedRoute=i,this.psByProductCategoryService=s,this.exportToPDFService=_,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=y.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,r=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.psByProductCategoryService.getAll(o).subscribe(i=>{"EXCEL"==r?this.excelDownload(i.rows):"PDF"==r?this.pdfDownload(i.rows):(this.tableData=i.rows,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,r,o){if("Inactive"==r.status&&"copy"==o)return null;this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:r?._id,action:o}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,r){return r?._id}pdfDownload(e){let r=(0,f.J)(e);this.exportToPDFService.generatePdf(r.tableData,r.title)}excelDownload(e){e.map(r=>(r.name=r.subcategory?.name,r.subCategoryPrefix=r.subcategory?.prefix,r)),this.exportExcelService.exportExcel((0,f.s)(e))}onSort({column:e,direction:r}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==r?1:-1,this.getAll()}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(p.Ol),t.Y36(m.F0),t.Y36(p.V),t.Y36(m.gz),t.Y36(g.CX),t.Y36(p.$L))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ps-by-product-category-list"]],viewQuery:function(r,o){if(1&r&&t.Gf(d.j,5),2&r){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","productNumber",3,"sort"],["sortable","productCode",3,"sort"],["sortable","displayProductCategoryName",3,"sort"],["sortable","application",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-clone","fa-lg","me-2","text-primary"],[1,"statusActive"],[1,"statusInActive"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Process Specification by Product Category Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Process Specification by Product Category "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return o.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(15,"Product No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(17,"Product Code"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(19,"DD/Display Value"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(21,"Application"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(23,"Status"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,A,26,11,"tr",17),t.qZA()()()()),2&r&&(t.xp6(4),t.Q6J("accessType",o.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,w,o.page,o.pageSize,o.collection,o.search)),t.xp6(17),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[u.sg,u.O5,C.P,d.j,v.J],encapsulation:2})}return a})();var c=n(60095),U=n(21631),x=n(22096),B=n(25918),N=n(16897),J=n(37285),D=n(50363),q=n(95346);function F(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,null==e?null:e.seq,"1.2-2")," ")}}const M=function(){return{standalone:!0}};function k(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"input",39),t.NdJ("ngModelChange",function(o){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.seq=o)}),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.Q6J("ngModel",e.seq)("ngModelOptions",t.DdM(2,M))}}const S=function(){return["view","Converted to SKU"]};function I(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td")(2,"div",33),t.YNc(3,F,3,4,"span",34),t.YNc(4,k,1,3,"input",35),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",36,37)(9,"span",38),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA()()),2&a){const e=l.$implicit,r=t.MAs(8),o=t.oxw();t.xp6(3),t.Q6J("ngIf",t.DdM(15,S).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(16,S).includes(o.action)),t.xp6(2),t.Oqu(e.processId),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",e.processName),t.xp6(1),t.hij(" ",e.processName?e.processName:null," "),t.xp6(2),t.Oqu(e.unitProcessOutput),t.xp6(2),t.hij(" ",e.allocationOfSkilledLabour," "),t.xp6(2),t.hij(" ",e.allocationOfSemiSkilledLabour," "),t.xp6(2),t.hij(" ",e.allocationOfUnSkilledLabour," "),t.xp6(2),t.hij(" ",e.totalLabourHeadCount," "),t.xp6(2),t.hij(" ",null==e?null:e.labourRatePerHr," "),t.xp6(2),t.hij(" ",e.totalAllocatedAssetCostPerHr," ")}}function E(a,l){1&a&&t._UZ(0,"hr",14)}function O(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"div",40)(1,"div",41)(2,"div",42)(3,"button",43),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.reset())}),t._uU(4,"Reset"),t.qZA(),t.TgZ(5,"button",44),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.ESCPreview())}),t._uU(6," Esc "),t.qZA(),t.TgZ(7,"button",45),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.preview())}),t._uU(8," Preview "),t.qZA(),t.TgZ(9,"button",46),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(10," Save "),t.qZA()()()()}if(2&a){const e=t.oxw();t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(5),t.Q6J("disabled",!e.isESCPreview),t.xp6(2),t.Q6J("disabled",e.isConditionPreview),t.xp6(2),t.Q6J("disabled",!e.isPreview)}}const Q=function(a,l,e,r){return{page:a,pageSize:l,collection:e,search:r,excelDisplay:"none"}};let H=(()=>{class a{get f(){return this.form.controls}constructor(e,r,o,i,s,_,P){this.psByProductCategoryService=e,this.spinner=r,this.toastService=o,this.activatedRoute=i,this.validationService=s,this.utilityService=_,this.location=P,this.isPreview=!1,this.isESCPreview=!1,this.isConditionPreview=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.FGINDetailsArray=[],this.ESCPreviewArr=[],this.filterSKUList=[],this.itemCategoryList="",this.skuList="",this.action="create",this.submitted=!1,this.rolePermissionActions=y.a1,this.masterData={autoIncrementNo:"",productCategoryOptions:[],processMasterList:[]},this.form=new c.nJ({_id:new c.p4(null),productCategory:new c.p4(null),productNumber:new c.p4(null,[c.kI.required]),productCode:new c.p4(null),displayProductCategoryName:new c.p4(null),application:new c.p4(null),status:new c.p4("Active"),processInfo:new c.p4([])})}ngOnInit(){this.getInitialData()}trackByFn(e,r){return r?._id}reset(){this.form.reset(),this.collection=this.masterData?.processMasterList.length,this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,B.N))return;if(0==this.masterData.processMasterList.length)return void this.toastService.warning("At least one row is Required");let e=this.form.value;"copy"==this.action&&delete e._id,e.processInfo=this.masterData?.processMasterList.filter(r=>r.seq>0).sort((r,o)=>r.seq-o.seq),e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.psByProductCategoryService.create(e).subscribe(r=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(r.message),this.location.back()})}update(e){this.spinner.show(),this.psByProductCategoryService.update(e._id,e).subscribe(r=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(r.message),this.location.back()})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}setItemDetails(e){this.form.controls.productCategory.setValue(e._id),this.form.controls.productNumber.setValue(e.productNumber),this.form.controls.productCode.setValue(e.productCode),this.form.controls.displayProductCategoryName.setValue(e.displayProductCategoryName),this.form.controls.application.setValue(e.application)}getInitialData(){this.spinner.show(),this.psByProductCategoryService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.collection=this.masterData?.processMasterList.length,this.f.status.setValue("Active"),this.spinner.hide(),this.activatedRoute.queryParams.pipe((0,U.z)(r=>(this.action=r.action,this.utilityService.accessDenied(this.action),r.id?this.psByProductCategoryService.getById(r.id):(0,x.of)({})))).subscribe(r=>{if(this.spinner.hide(),0==Object.keys(r).length)return;r.processInfo=r.processInfo;let o=this.masterData?.processMasterList;this.masterData.processMasterList=r.processInfo;for(const i of r.processInfo)o=o.filter(s=>s.processId!=i.processId),this.ESCPreviewArr=[...r.processInfo,...o];this.collection=this.masterData?.processMasterList.length,this.form.patchValue(r),"create"!=this.action&&(this.isESCPreview=!0,this.isConditionPreview=!0,this.isPreview=!0,this.form.disable()),"copy"==this.action&&(this.form.enable(),delete r._id)})})}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=this.masterData?.processMasterList,this.masterData.processMasterList=this.masterData?.processMasterList.filter(e=>e.seq>0).sort((e,r)=>e.seq-r.seq),this.masterData.processMasterList.length>0&&(this.isPreview=!0),this.collection=this.masterData?.processMasterList.length}ESCPreview(){this.search="",this.isPreview=!1,this.isConditionPreview=!1,this.masterData.processMasterList=this.ESCPreviewArr,this.collection=this.masterData.processMasterList.length}onSort({column:e,direction:r}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.masterData.processMasterList=""===r||""===e?this.masterData?.processMasterList:[...this.masterData?.processMasterList].sort((o,i)=>{let s="string"==typeof o[e]?o[e].toLowerCase():o[e],_="string"==typeof i[e]?i[e].toLowerCase():i[e];const P=s<_?-1:s>_?1:0;return"asc"===r?P:-P})}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(g.CX),t.Y36(p.V),t.Y36(p.kl),t.Y36(m.gz),t.Y36(N.RJ),t.Y36(p.tI),t.Y36(u.Ye))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ps-by-product-category-form"]],viewQuery:function(r,o){if(1&r&&t.Gf(d.j,5),2&r){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:61,vars:22,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","d-flex","justify-content-between"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["bindLabel","productNumber","bindValue","_id","formControlName","productCategory",3,"items","clearable","change"],["bindLabel","productCode","bindValue","productCode","formControlName","productCode",3,"items","clearable","change"],["type","text","readonly","","formControlName","displayProductCategoryName",1,"form-control"],["type","text","formControlName","application","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","19.5rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-secondary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","processId",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","unitProcessOutput",3,"sort"],["sortable","allocationOfSkilledLabour",3,"sort"],["sortable","allocationOfSemiSkilledLabour",3,"sort"],["sortable","allocationOfUnSkilledLabour",3,"sort"],["sortable","totalLabourHeadCount",3,"sort"],["sortable","labourRatePerHr",3,"sort"],["sortable","totalAllocatedAssetCostPerHr",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","row line-border",4,"ngIf"],["class","row my-3","appAccessControl","",3,"accessType",4,"ngIf"],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],[1,"text-start"],["processName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange"],["appAccessControl","",1,"row","my-3",3,"accessType"],[1,"col","text-center"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-3","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"]],template:function(r,o){1&r&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Process Specification by Product Category"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"Product No. "),t._UZ(11,"span",9),t.qZA(),t.TgZ(12,"ng-select",10),t.NdJ("change",function(s){return o.setItemDetails(s)}),t.qZA()(),t.TgZ(13,"div",7)(14,"label",8),t._uU(15,"Product Code "),t._UZ(16,"span",9),t.qZA(),t.TgZ(17,"ng-select",11),t.NdJ("change",function(s){return o.setItemDetails(s)}),t.qZA()(),t.TgZ(18,"div",7)(19,"label",8),t._uU(20,"DD/Display Value"),t.TgZ(21,"span",9),t._uU(22,"*"),t.qZA()(),t._UZ(23,"input",12),t.qZA(),t.TgZ(24,"div",7)(25,"label",8),t._uU(26,"Application"),t._UZ(27,"span",9),t.qZA(),t._UZ(28,"input",13),t.qZA()()(),t._UZ(29,"hr",14),t.TgZ(30,"app-setting-header",15),t.NdJ("dataChange",function(s){return o.eventHeader(s)}),t.qZA(),t.TgZ(31,"div",16)(32,"table",17)(33,"thead",18)(34,"tr",19)(35,"th",20),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(36,"Seq."),t.qZA(),t.TgZ(37,"th",21),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(38,"Process ID"),t.qZA(),t.TgZ(39,"th",22),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(40,"Process Name"),t.qZA(),t.TgZ(41,"th",23),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(42,"Output Unit"),t.qZA(),t.TgZ(43,"th",24),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(44,"S/L"),t.qZA(),t.TgZ(45,"th",25),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(46,"SS/L"),t.qZA(),t.TgZ(47,"th",26),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(48,"US/L"),t.qZA(),t.TgZ(49,"th",27),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(50,"HC"),t.qZA(),t.TgZ(51,"th",28),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(52,"Labour Rate/Hr"),t.qZA(),t.TgZ(53,"th",29),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(54,"Asset Rate/Hr"),t.qZA()()(),t.TgZ(55,"tbody"),t.YNc(56,I,25,17,"tr",30),t.ALo(57,"slice"),t.ALo(58,"searchFi1ter"),t.qZA()()(),t.YNc(59,E,1,0,"hr",31),t.YNc(60,O,11,4,"div",32),t.qZA()()),2&r&&(t.Q6J("formGroup",o.form),t.xp6(12),t.Q6J("items",o.masterData.productCategoryOptions)("clearable",!1),t.xp6(5),t.Q6J("items",o.masterData.productCategoryOptions)("clearable",!1),t.xp6(13),t.Q6J("data",t.l5B(17,Q,o.page,o.pageSize,o.collection,o.search)),t.xp6(26),t.Q6J("ngForOf",t.Dn7(57,10,t.xi3(58,14,o.masterData.processMasterList,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(3),t.Q6J("ngIf","view"!=o.action),t.xp6(1),t.Q6J("ngIf","view"!=o.action))},dependencies:[u.sg,u.O5,C.P,J._L,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.sg,c.u,c.On,D.w9,d.j,v.J,u.OU,u.JJ,q.G],encapsulation:2})}return a})();var Y=n(56208);const j=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:L},{path:"form",component:H}];let G=(()=>{class a{static#t=this.\u0275fac=function(r){return new(r||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[u.ez,m.Bz.forChild(j),Y.m]})}return a})()},13107:(b,h,n)=>{n.d(h,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(b,h,n)=>{n.d(h,{J:()=>u});const u=({data:m,headers:d,widths:y,title:f})=>({tableData:{widths:y,headerRows:1,body:[d.map(g=>({text:g.header,style:"header"})),...m.map(g=>d.map(C=>({style:"subheader",text:g[C.key]})))]},title:f})}}]);