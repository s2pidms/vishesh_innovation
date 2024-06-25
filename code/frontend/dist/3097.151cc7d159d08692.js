"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3097],{83097:(R,M,c)=>{c.r(M),c.d(M,{SpecificationMasterModule:()=>$});var a=c(96814),d=c(1076),l=c(60095),P=c(21631),I=c(22096);const _=[{message:"Spec Code is Required",key:"specificationCode"},{message:"Characteristic is Required",key:"characteristic"},{message:"UoM is Required",key:"UOM"},{message:"Test Standard is Required",key:"testStandard"},{message:"Measuring Instrument is Required",key:"measuringInstrument"}];var t=c(65879),v=c(7791),A=c(2742),o=c(16897),m=c(50363);function y(n,f){1&n&&t._UZ(0,"div",26)}function i(n,f){1&n&&t._UZ(0,"div",27)}function e(n,f){if(1&n){const p=t.EpF();t.TgZ(0,"div",28)(1,"button",29),t.NdJ("click",function(){t.CHM(p);const r=t.oxw();return t.KtG(r.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",30),t.NdJ("click",function(){t.CHM(p);const r=t.oxw();return t.KtG(r.submit())}),t._uU(4,"Save"),t.qZA()()}}function S(n,f){if(1&n){const p=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(p);const r=t.oxw(2);return t.KtG(r.navigateTo())}),t._uU(1," Back "),t.qZA()}}const Z=function(){return["view"]};function b(n,f){if(1&n&&(t.TgZ(0,"div",28),t.YNc(1,S,2,0,"button",31),t.qZA()),2&n){const p=t.oxw();t.xp6(1),t.Q6J("ngIf",t.DdM(1,Z).includes(p.action))}}let q=(()=>{var n;class f{constructor(s,r,u,h,B,O,w){this.specificationMasterService=s,this.activatedRoute=r,this.spinner=u,this.toastService=h,this.validationService=B,this.utilityService=O,this.location=w,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",UOMListOptions:[]},this.form=new l.nJ({_id:new l.p4(null),specificationCode:new l.p4(null),characteristic:new l.p4(null,[l.kI.required]),UOM:new l.p4(null,[l.kI.required]),testStandard:new l.p4(null,[l.kI.required]),measuringInstrument:new l.p4(null,[l.kI.required]),status:new l.p4("Active")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(){this.location.back()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,_))return;let s=this.form.value;s._id?this.update(s):(delete s._id,this.create(s))}create(s){this.spinner.show(),this.specificationMasterService.create(s).subscribe(r=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(r.message),this.location.back()})}update(s){this.spinner.show(),this.specificationMasterService.update(s._id,s).subscribe(r=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(r.message),this.location.back()})}getInitialData(){this.spinner.show(),this.specificationMasterService.getAllMasterData({}).subscribe(s=>{this.masterData=s,this.form.controls.specificationCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,P.z)(r=>(this.action=r.action,this.utilityService.accessDenied(this.action),r.id?this.specificationMasterService.getById(r.id):(0,I.of)({})))).subscribe(r=>{this.spinner.hide(),0!=Object.keys(r).length&&(this.form.patchValue(r),"view"==this.action&&this.form.disable())})})}}return(n=f).\u0275fac=function(s){return new(s||n)(t.Y36(v.Du),t.Y36(d.gz),t.Y36(A.V),t.Y36(A.kl),t.Y36(o.RJ),t.Y36(A.tI),t.Y36(a.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-specification-master-form"]],decls:57,vars:13,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","specificationCode","readonly","",1,"form-control"],["type","text","formControlName","characteristic",1,"form-control"],["bindLabel","parameterLabel","bindValue","parameterName","formControlName","UOM",3,"items","clearable"],["type","text","formControlName","testStandard",1,"form-control"],["type","text","formControlName","measuringInstrument",1,"form-control"],[1,"row","line-border","mt-4"],[1,"row","py-3"],[1,"col-3"],[1,"d-flex","align-items-center"],[1,"set-flex-status","px-4"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],[1,"input-group-text","statusSpanHeight"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],["class","col-9 text-end",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],[1,"col-9","text-end"],["type","button",1,"btn","btn-primary","px-5","me-5",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"],["class","btn btn-primary px-5","type","button",3,"click",4,"ngIf"]],template:function(s,r){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Spec Code "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17," Inspection Parameter "),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"div",6)(22,"label",7),t._uU(23," UoM "),t.TgZ(24,"span",8),t._uU(25,"*"),t.qZA()(),t._UZ(26,"ng-select",11),t.qZA(),t.TgZ(27,"div",6)(28,"label",7),t._uU(29," Test Standard "),t.TgZ(30,"span",8),t._uU(31,"*"),t.qZA()(),t._UZ(32,"input",12),t.qZA(),t.TgZ(33,"div",6)(34,"label",7),t._uU(35," Test Method "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t._UZ(38,"input",13),t.qZA()()(),t._UZ(39,"hr",14),t.TgZ(40,"div",15)(41,"div",16)(42,"div",17)(43,"span",18),t._uU(44," Status "),t.qZA(),t.TgZ(45,"select",19)(46,"option",20),t._uU(47,"Select Status"),t.qZA(),t.TgZ(48,"option",21),t._uU(49,"Active"),t.qZA(),t.TgZ(50,"option",21),t._uU(51,"Inactive"),t.qZA()(),t.TgZ(52,"span",22),t.YNc(53,y,1,0,"div",23),t.YNc(54,i,1,0,"div",24),t.qZA()()(),t.YNc(55,e,5,0,"div",25),t.YNc(56,b,2,2,"div",25),t.qZA()()()),2&s&&(t.Q6J("formGroup",r.form),t.xp6(5),t.hij("Specification Master (",t.lcZ(6,11,r.action),")"),t.xp6(21),t.Q6J("items",r.masterData.UOMListOptions)("clearable",!1),t.xp6(20),t.Q6J("value","null"),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(3),t.Q6J("ngIf","Active"==r.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==r.form.value.status),t.xp6(1),t.Q6J("ngIf","view"!=r.action),t.xp6(1),t.Q6J("ngIf","view"==r.action))},dependencies:[a.O5,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u,m.w9,a.rS],encapsulation:2}),f})();var U=c(43818),D=c(25116),T=c(94653),N=c(77203),x=c(37285),C=c(88059),k=c(53421),F=c(59103);function E(n,f){if(1&n){const p=t.EpF();t.TgZ(0,"a",26),t.NdJ("click",function(){t.CHM(p);const r=t.oxw().$implicit,u=t.oxw();return t.KtG(u.openConfirmModal(null==r?null:r._id,null==r?null:r.specificationCode))}),t._UZ(1,"i",27),t._uU(2," Delete "),t.qZA()}}function g(n,f){if(1&n){const p=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",18),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"UOMUnitsMaster"),t.qZA(),t.TgZ(8,"td",18),t._uU(9),t.qZA(),t.TgZ(10,"td",18),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"div",19),t._UZ(14,"button",20),t.TgZ(15,"div",21)(16,"a",22),t.NdJ("click",function(){const u=t.CHM(p).$implicit,h=t.oxw();return t.KtG(h.navigateTo("../form",null==u?null:u._id,"view"))}),t._UZ(17,"i",23),t._uU(18," View "),t.qZA(),t.TgZ(19,"a",22),t.NdJ("click",function(){const u=t.CHM(p).$implicit,h=t.oxw();return t.KtG(h.navigateTo("../form",null==u?null:u._id,"edit"))}),t._UZ(20,"i",24),t._uU(21," Edit "),t.qZA(),t.YNc(22,E,3,0,"a",25),t.qZA()()()()}if(2&n){const p=f.$implicit,s=t.oxw();t.xp6(2),t.Oqu(null==p?null:p.specificationCode),t.xp6(2),t.Oqu(null==p?null:p.characteristic),t.xp6(2),t.Oqu(t.lcZ(7,8,null==p?null:p.UOM)),t.xp6(3),t.Oqu(null==p?null:p.testStandard),t.xp6(2),t.Oqu(null==p?null:p.measuringInstrument),t.xp6(5),t.Q6J("accessType",s.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",s.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",s.user==s.superAdminId)}}const L=function(n,f,p,s){return{page:n,pageSize:f,collection:p,search:s,type:"list"}};let J=(()=>{var n;class f{constructor(s,r,u,h,B,O,w,G,Q){this.exportExcelService=s,this.specificationMasterService=r,this.router=u,this.spinner=h,this.activatedRoute=B,this.exportToPDFService=O,this.storageService=w,this.toastService=G,this.modalService=Q,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=D.dA,this.user="",this.rolePermissionActions=D.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(s=>s==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(s,r,u){this.router.navigate([s],{relativeTo:this.activatedRoute,queryParams:{id:r,action:u}})}trackByFn(s,r){return r?._id}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=s.value,this.getAll()}}getAll(s=!1,r=""){this.spinner.show();let u={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:s};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.specificationMasterService.getAll(u).subscribe(h=>{"EXCEL"==r?this.excelDownload(h.rows):"PDF"==r?this.pdfDownload(h.rows):(this.tableData=h.rows,this.collection=h.count),this.spinner.hide()})}delete(s){this.spinner.show(),this.specificationMasterService.delete(s).subscribe(r=>{this.spinner.hide(),this.toastService.success(r.message),this.getAll()})}openConfirmModal(s,r){const u=this.modalService.open(N.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});u.componentInstance.heading="Confirm Deletion",u.componentInstance.confirmText=`Confirm Deletion of Specification Code ${r} ?`,u.result.then(h=>{"Yes"==h.title&&this.delete(s)},h=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(s){this.exportExcelService.exportExcel((0,T.kM)(s))}pdfDownload(s){let r=(0,T.e3)(s);this.exportToPDFService.generatePdf(r.tableData,r.title)}onSort({column:s,direction:r}){this.headers.forEach(u=>{u.sortable!==s&&(u.direction="")}),this.column=s,this.direction="asc"==r?1:-1,this.getAll()}}return(n=f).\u0275fac=function(s){return new(s||n)(t.Y36(A.Ol),t.Y36(v.Du),t.Y36(d.F0),t.Y36(A.V),t.Y36(d.gz),t.Y36(A.$L),t.Y36(A.V1),t.Y36(A.kl),t.Y36(x.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-specification-master-list"]],viewQuery:function(s,r){if(1&s&&t.Gf(U.j,5),2&s){let u;t.iGM(u=t.CRH())&&(r.headers=u)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","specificationCode",3,"sort"],["sortable","characteristic",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","testStandard",1,"text-start",3,"sort"],["sortable","measuringInstrument",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Specification Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return r.navigateTo("../form",null,"create")}),t._uU(7," Specification "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(h){return r.eventHeader(h)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(h){return r.onSort(h)}),t._uU(15,"Specs Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(h){return r.onSort(h)}),t._uU(17,"Inspection Parameter"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(h){return r.onSort(h)}),t._uU(19,"UoM"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(h){return r.onSort(h)}),t._uU(21,"Test Standard"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(h){return r.onSort(h)}),t._uU(23,"Test Method"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,g,23,10,"tr",17),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("accessType",r.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,L,r.page,r.pageSize,r.collection,r.search)),t.xp6(17),t.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn))},dependencies:[a.sg,a.O5,C.P,U.j,k.J,F.S],encapsulation:2}),f})();var Y=c(56208);const K=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:J},{path:"form",component:q}];let $=(()=>{var n;class f{}return(n=f).\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,d.Bz.forChild(K),Y.m]}),f})()},13107:(R,M,c)=>{c.d(M,{t:()=>a});const a={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(R,M,c)=>{c.d(M,{J:()=>a});const a=({data:d,headers:l,widths:P,title:I})=>({tableData:{widths:P,headerRows:1,body:[l.map(v=>({text:v.header,style:"header"})),...d.map(v=>l.map(A=>({style:"subheader",text:v[A.key]})))]},title:I})},94653:(R,M,c)=>{c.d(M,{XZ:()=>E,gQ:()=>F,Yt:()=>N,b3:()=>T,e3:()=>b,kM:()=>Z});var a=c(13107),y=c(28402);let i=["*","*","*","*","*","*"],e="Specification Master",S=[{header:"Specs Code",key:"specificationCode",...a.t},{header:"Inspection Parameter",key:"characteristic",...a.t},{header:"UoM",key:"UOM",...a.t},{header:"Test Standard",key:"testStandard",...a.t},{header:"Test Method",key:"measuringInstrument",...a.t}];const Z=g=>({title:e,csvData:g,headers:S}),b=g=>(0,y.J)({data:g,headers:S,widths:i,title:e});let q=["*","*","*","*","*","*"],U="RM Specifications Master",D=[{header:"Item Code",key:"itemCode",...a.t},{header:"Item Name",key:"itemName",...a.t},{header:"Item Description",key:"itemDescription",...a.t},{header:"Product Code",key:"itemCategory",...a.t},{header:"UoM",key:"UOM",...a.t}];const T=g=>({title:U,csvData:g,headers:D}),N=g=>(0,y.J)({data:g,headers:D,widths:q,title:U});let x=["*","*","*","*","*"],C="Product Specifications Master",k=[{header:"SKU Code",key:"SKUNo",...a.t},{header:"SKU Name",key:"SKUName",...a.t},{header:"SKU Description",key:"SKUDescription",...a.t},{header:"Product code",key:"productCategory",...a.t},{header:"UoM",key:"UOM",...a.t}];const F=g=>({title:C,csvData:g,headers:k}),E=g=>(0,y.J)({data:g,headers:k,widths:x,title:C})},7791:(R,M,c)=>{c.d(M,{AM:()=>P,gR:()=>I,ZG:()=>A,Vk:()=>_,oD:()=>t,Du:()=>v});var a=c(37398),d=c(65879),l=c(2742);let P=(()=>{var o;class m{constructor(i){this.http=i,this.routes={createPath:"/quality/mrn/create",getAllPath:"/quality/mrn/getAll",getRMSpecificationByItemIdPath:"/quality/mrn/getRMSpecificationByItemId",getAllMasterDataPath:"/quality/mrn/getAllMasterData",getAllMRNReportsPath:"/quality/mrn/getAllMRNReports",getAllReportsPath:"/quality/mrn/getAllReports",getAllSupplierWiseReportsPath:"/quality/mrn/getAllSupplierWiseReports",getAllItemWiseReportsPath:"/quality/mrn/getAllItemWiseReports",getAllMRNDetailsReportsPath:"/quality/mrn/getAllMRNDetailsReports",getAllRawMaterialInspectionReportsPath:"/quality/mrn/getAllRawMaterialInspectionReports",getByMRNIdForRMInspectionPath:"/quality/mrn/getByMRNIdForRMInspection",updatePath:e=>`/quality/mrn/update/${e}`,getByIdPath:e=>`/quality/mrn/getById/${e}`,getMRNDetailsByIdPath:e=>`/quality/mrn/getMRNDetailsById/${e}`,deletePath:e=>`/quality/mrn/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(e=>e))}getRMSpecificationByItemId(i){return this.http.get(this.routes.getRMSpecificationByItemIdPath,i).pipe((0,a.U)(e=>e))}getAllReports(i){return this.http.get(this.routes.getAllReportsPath,i).pipe((0,a.U)(e=>e))}getAllMRNReports(i){return this.http.get(this.routes.getAllMRNReportsPath,i).pipe((0,a.U)(e=>e))}getAllSupplierWiseReports(i){return this.http.get(this.routes.getAllSupplierWiseReportsPath,i).pipe((0,a.U)(e=>e))}getAllItemWiseReports(i){return this.http.get(this.routes.getAllItemWiseReportsPath,i).pipe((0,a.U)(e=>e))}getAllMRNDetailsReports(i){return this.http.get(this.routes.getAllMRNDetailsReportsPath,i).pipe((0,a.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,a.U)(e=>e))}getAllRawMaterialInspectionReports(i){return this.http.get(this.routes.getAllRawMaterialInspectionReportsPath,i).pipe((0,a.U)(e=>e))}getByMRNIdForRMInspection(i){return this.http.get(this.routes.getByMRNIdForRMInspectionPath,i).pipe((0,a.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,a.U)(S=>S))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(e=>e))}getMRNDetailsById(i){return this.http.get(this.routes.getMRNDetailsByIdPath(i)).pipe((0,a.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(e=>e))}}return(o=m).\u0275fac=function(i){return new(i||o)(d.LFG(l.sM))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})(),I=(()=>{var o;class m{constructor(i){this.http=i,this.routes={createPath:"/quality/PDIREntry/create",getAllPath:"/quality/PDIREntry/getAll",getProductSpecificationBySKUIdPath:"/quality/PDIREntry/getProductSpecificationBySKUId",getAllReportPath:"/quality/PDIREntry/getAllReports",getAllMasterDataPath:"/quality/PDIREntry/getAllMasterData",getAllSalesInvoiceForPDIREntryPath:"/quality/PDIREntry/getAllSalesInvoiceForPDIREntry",updatePath:e=>`/quality/PDIREntry/update/${e}`,getPDIRDetailsBySalesInvoiceIdPath:e=>`/quality/PDIREntry/getPDIRDetailsBySalesInvoiceId/${e}`,getByIdPath:e=>`/quality/PDIREntry/getById/${e}`,getPDIRDetailsByIdPath:e=>`/quality/PDIREntry/getPDIRDetailsById/${e}`,deletePath:e=>`/quality/PDIREntry/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(e=>e))}getAllReports(i){return this.http.get(this.routes.getAllReportPath,i).pipe((0,a.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(e=>e))}getProductSpecificationBySKUId(i){return this.http.get(this.routes.getProductSpecificationBySKUIdPath,i).pipe((0,a.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,a.U)(e=>e))}getAllSalesInvoiceForPDIREntry(i){return this.http.get(this.routes.getAllSalesInvoiceForPDIREntryPath,i).pipe((0,a.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,a.U)(S=>S))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(e=>e))}getPDIRDetailsById(i){return this.http.get(this.routes.getPDIRDetailsByIdPath(i)).pipe((0,a.U)(e=>e))}getPDIRDetailsBySalesInvoiceId(i){return this.http.get(this.routes.getPDIRDetailsBySalesInvoiceIdPath(i)).pipe((0,a.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(e=>e))}}return(o=m).\u0275fac=function(i){return new(i||o)(d.LFG(l.sM))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})(),_=(()=>{var o;class m{constructor(i){this.http=i,this.routes={createPath:"/quality/product-specification/create",getAllPath:"/quality/product-specification/getAll",getAllMasterDataPath:"/quality/product-specification/getAllMasterData",updatePath:e=>`/quality/product-specification/update/${e}`,getByIdPath:e=>`/quality/product-specification/getById/${e}`,deletePath:e=>`/quality/product-specification/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,a.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,a.U)(S=>S))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(e=>e))}}return(o=m).\u0275fac=function(i){return new(i||o)(d.LFG(l.sM))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})(),t=(()=>{var o;class m{constructor(i){this.http=i,this.routes={createPath:"/quality/rm-specification/create",getAllPath:"/quality/rm-specification/getAll",getAllMasterDataPath:"/quality/rm-specification/getAllMasterData",updatePath:e=>`/quality/rm-specification/update/${e}`,getByIdPath:e=>`/quality/rm-specification/getById/${e}`,deletePath:e=>`/quality/rm-specification/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,a.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,a.U)(S=>S))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(e=>e))}}return(o=m).\u0275fac=function(i){return new(i||o)(d.LFG(l.sM))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})(),v=(()=>{var o;class m{constructor(i){this.http=i,this.routes={createPath:"/quality/specificationMaster/create",getAllPath:"/quality/specificationMaster/getAll",getAllMasterDataPath:"/quality/specificationMaster/getAllMasterData",updatePath:e=>`/quality/specificationMaster/update/${e}`,getByIdPath:e=>`/quality/specificationMaster/getById/${e}`,deletePath:e=>`/quality/specificationMaster/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,a.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,a.U)(S=>S))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(e=>e))}}return(o=m).\u0275fac=function(i){return new(i||o)(d.LFG(l.sM))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})(),A=(()=>{var o;class m{constructor(i){this.http=i,this.routes={createPath:"/quality/productCategorySpecification/create",getAllPath:"/quality/productCategorySpecification/getAll",getAllMasterDataPath:"/quality/productCategorySpecification/getAllMasterData",updatePath:e=>`/quality/productCategorySpecification/update/${e}`,getByIdPath:e=>`/quality/productCategorySpecification/getById/${e}`,deletePath:e=>`/quality/productCategorySpecification/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,a.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,a.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,a.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,a.U)(S=>S))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,a.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,a.U)(e=>e))}}return(o=m).\u0275fac=function(i){return new(i||o)(d.LFG(l.sM))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),m})()}}]);