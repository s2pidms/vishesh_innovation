"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1593],{83097:(M,m,c)=>{c.r(m),c.d(m,{SpecificationMasterModule:()=>O});var r=c(96814),h=c(1076),u=c(60095),P=c(21631),I=c(22096);const v=[{message:"Spec Code is Required",key:"specificationCode"},{message:"Characteristic is Required",key:"characteristic"},{message:"UoM is Required",key:"UOM"},{message:"Test Standard is Required",key:"testStandard"},{message:"Measuring Instrument is Required",key:"measuringInstrument"}];var t=c(65879),y=c(7791),f=c(99328),o=c(16897),q=c(50363);function i(p,A){if(1&p){const a=t.EpF();t.TgZ(0,"div",21)(1,"button",20),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return t.KtG(n.reset())}),t._uU(2,"Reset"),t.qZA()()}}const e=function(){return["! edit","create"]};function g(p,A){if(1&p){const a=t.EpF();t.TgZ(0,"div",17),t.YNc(1,i,3,0,"div",18),t.TgZ(2,"div",19)(3,"button",20),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.submit())}),t._uU(4,"Save"),t.qZA()()()}if(2&p){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",t.DdM(1,e).includes(a.action))}}function b(p,A){if(1&p){const a=t.EpF();t.TgZ(0,"div",22)(1,"button",23),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.navigateTo("/default/quality/master/specification_master/list",{},""))}),t._uU(2," Back "),t.qZA()()}}const T=function(){return["view"]};let Z=(()=>{class p{constructor(a,s,n,l,d,S,U){this.specificationMasterService=a,this.router=s,this.activatedRoute=n,this.spinner=l,this.toastService=d,this.validationService=S,this.utilityService=U,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",UOMListOptions:[]},this.form=new u.nJ({_id:new u.p4(null),specificationCode:new u.p4(null),characteristic:new u.p4(null,[u.kI.required]),UOM:new u.p4(null,[u.kI.required]),testStandard:new u.p4(null,[u.kI.required]),measuringInstrument:new u.p4(null,[u.kI.required])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(a,s,n){this.router.navigate([a],{queryParams:{id:s,action:n}})}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,v))return;let a=this.form.value;a._id?this.update(a):(delete a._id,this.create(a))}create(a){this.spinner.show(),this.specificationMasterService.create(a).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.router.navigate(["/default/quality/master/specification_master/list"])})}update(a){this.spinner.show(),this.specificationMasterService.update(a._id,a).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.router.navigate(["/default/quality/master/specification_master/list"])})}getInitialData(){this.spinner.show(),this.specificationMasterService.getAllMasterData({}).subscribe(a=>{this.masterData=a,this.form.controls.specificationCode.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,P.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.specificationMasterService.getById(s.id):(0,I.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.form.patchValue(s),"view"==this.action&&this.form.disable())})})}static#t=this.\u0275fac=function(s){return new(s||p)(t.Y36(y.Du),t.Y36(h.F0),t.Y36(h.gz),t.Y36(f.V),t.Y36(f.kl),t.Y36(o.RJ),t.Y36(f.tI))};static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-specification-master-form"]],decls:42,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","specificationCode","readonly","",1,"form-control"],["type","text","formControlName","characteristic",1,"form-control"],["bindLabel","parameterLabel","bindValue","parameterName","formControlName","UOM",3,"items","clearable"],["type","text","formControlName","testStandard",1,"form-control"],["type","text","formControlName","measuringInstrument",1,"form-control"],[1,"row","line-border","mt-4"],["class","d-flex justify-content-center mb-3",4,"ngIf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-center","mb-3"],["class","d-grid col-md-1 me-5",4,"ngIf"],[1,"d-grid","col-md-1"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1","me-5"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","px-5","text",3,"click"]],template:function(s,n){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Spec Code "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17," Inspection Parameter "),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",10),t.qZA(),t.TgZ(21,"div",6)(22,"label",7),t._uU(23," UoM "),t.TgZ(24,"span",8),t._uU(25,"*"),t.qZA()(),t._UZ(26,"ng-select",11),t.qZA(),t.TgZ(27,"div",6)(28,"label",7),t._uU(29," Test Standard "),t.TgZ(30,"span",8),t._uU(31,"*"),t.qZA()(),t._UZ(32,"input",12),t.qZA(),t.TgZ(33,"div",6)(34,"label",7),t._uU(35," Test Method "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t._UZ(38,"input",13),t.qZA()()(),t._UZ(39,"hr",14),t.YNc(40,g,5,2,"div",15),t.YNc(41,b,3,0,"div",16),t.qZA()()),2&s&&(t.Q6J("formGroup",n.form),t.xp6(5),t.hij("Specification Master (",t.lcZ(6,6,n.action),")"),t.xp6(21),t.Q6J("items",n.masterData.UOMListOptions)("clearable",!1),t.xp6(14),t.Q6J("ngIf","view"!=n.action),t.xp6(1),t.Q6J("ngIf",t.DdM(8,T).includes(n.action)))},dependencies:[r.O5,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,q.w9,r.rS],encapsulation:2})}return p})();var _=c(43818),D=c(25116),R=c(94653),C=c(77609),x=c(37285),B=c(88059),F=c(53421),w=c(59103);function E(p,A){if(1&p){const a=t.EpF();t.TgZ(0,"a",26),t.NdJ("click",function(){t.CHM(a);const n=t.oxw().$implicit,l=t.oxw();return t.KtG(l.openConfirmModal(null==n?null:n._id,null==n?null:n.specificationCode))}),t._UZ(1,"i",27),t._uU(2," Delete "),t.qZA()}}function N(p,A){if(1&p){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",18),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"UOMUnitsMaster"),t.qZA(),t.TgZ(8,"td",18),t._uU(9),t.qZA(),t.TgZ(10,"td",18),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"div",19),t._UZ(14,"button",20),t.TgZ(15,"div",21)(16,"a",22),t.NdJ("click",function(){const l=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.navigateTo("/default/quality/master/specification_master/form",null==l?null:l._id,"view"))}),t._UZ(17,"i",23),t._uU(18," View "),t.qZA(),t.TgZ(19,"a",22),t.NdJ("click",function(){const l=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.navigateTo("/default/quality/master/specification_master/form",null==l?null:l._id,"edit"))}),t._UZ(20,"i",24),t._uU(21," Edit "),t.qZA(),t.YNc(22,E,3,0,"a",25),t.qZA()()()()}if(2&p){const a=A.$implicit,s=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.specificationCode),t.xp6(2),t.Oqu(null==a?null:a.characteristic),t.xp6(2),t.Oqu(t.lcZ(7,8,null==a?null:a.UOM)),t.xp6(3),t.Oqu(null==a?null:a.testStandard),t.xp6(2),t.Oqu(null==a?null:a.measuringInstrument),t.xp6(5),t.Q6J("accessType",s.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",s.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",s.user==s.superAdminId)}}const k=function(p,A,a,s){return{page:p,pageSize:A,collection:a,search:s,type:"list"}};let L=(()=>{class p{constructor(a,s,n,l,d,S,U,$,G){this.exportExcelService=a,this.specificationMasterService=s,this.router=n,this.spinner=l,this.activatedRoute=d,this.exportToPDFService=S,this.storageService=U,this.toastService=$,this.modalService=G,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=D.dA,this.user="",this.rolePermissionActions=D.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(a=>a==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(a,s,n){this.router.navigate([a],{queryParams:{id:s,action:n}})}trackByFn(a,s){return s?._id}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=a.value,this.getAll()}}getAll(a=!1,s=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:a};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.specificationMasterService.getAll(n).subscribe(l=>{"EXCEL"==s?this.excelDownload(l.rows):"PDF"==s?this.pdfDownload(l.rows):(this.tableData=l.rows,this.collection=l.count),this.spinner.hide()})}delete(a){this.spinner.show(),this.specificationMasterService.delete(a).subscribe(s=>{this.spinner.hide(),this.toastService.success(s.message),this.getAll()})}openConfirmModal(a,s){const n=this.modalService.open(C.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});n.componentInstance.heading="Confirm Deletion",n.componentInstance.confirmText=`Confirm Deletion of Specification Code ${s} ?`,n.result.then(l=>{"Yes"==l.title&&this.delete(a)},l=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(a){this.exportExcelService.exportExcel((0,R.kM)(a))}pdfDownload(a){let s=(0,R.e3)(a);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:a,direction:s}){this.headers.forEach(n=>{n.sortable!==a&&(n.direction="")}),this.column=a,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||p)(t.Y36(f.Ol),t.Y36(y.Du),t.Y36(h.F0),t.Y36(f.V),t.Y36(h.gz),t.Y36(f.$L),t.Y36(f.V1),t.Y36(f.kl),t.Y36(x.FF))};static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-specification-master-list"]],viewQuery:function(s,n){if(1&s&&t.Gf(_.j,5),2&s){let l;t.iGM(l=t.CRH())&&(n.headers=l)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","specificationCode",3,"sort"],["sortable","characteristic",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","testStandard",1,"text-start",3,"sort"],["sortable","measuringInstrument",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Specification Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return n.navigateTo("/default/quality/master/specification_master/form",null,"create")}),t._uU(7," Specification "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(d){return n.eventHeader(d)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(d){return n.onSort(d)}),t._uU(15,"Specs Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(d){return n.onSort(d)}),t._uU(17,"Inspection Parameter"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(d){return n.onSort(d)}),t._uU(19,"UoM"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(d){return n.onSort(d)}),t._uU(21,"Test Standard"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(d){return n.onSort(d)}),t._uU(23,"Test Method"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,N,23,10,"tr",17),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,k,n.page,n.pageSize,n.collection,n.search)),t.xp6(17),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[r.sg,r.O5,B.P,_.j,F.J,w.S],encapsulation:2})}return p})();var J=c(56208);const Y=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:L},{path:"form",component:Z}];let O=(()=>{class p{static#t=this.\u0275fac=function(s){return new(s||p)};static#e=this.\u0275mod=t.oAB({type:p});static#i=this.\u0275inj=t.cJS({imports:[r.ez,h.Bz.forChild(Y),J.m]})}return p})()},13107:(M,m,c)=>{c.d(m,{t:()=>r});const r={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(M,m,c)=>{c.d(m,{J:()=>r});const r=({data:h,headers:u,widths:P,title:I})=>({tableData:{widths:P,headerRows:1,body:[u.map(y=>({text:y.header,style:"header"})),...h.map(y=>u.map(f=>({style:"subheader",text:y[f.key]})))]},title:I})},7791:(M,m,c)=>{c.d(m,{AM:()=>P,gR:()=>I,ZG:()=>f,Vk:()=>v,oD:()=>t,Du:()=>y});var r=c(37398),h=c(65879),u=c(99328);let P=(()=>{class o{constructor(i){this.http=i,this.routes={createPath:"/quality/mrn/create",getAllPath:"/quality/mrn/getAll",getRMSpecificationByItemIdPath:"/quality/mrn/getRMSpecificationByItemId",getAllMasterDataPath:"/quality/mrn/getAllMasterData",getAllMRNReportsPath:"/quality/mrn/getAllMRNReports",getAllReportsPath:"/quality/mrn/getAllReports",getAllSupplierWiseReportsPath:"/quality/mrn/getAllSupplierWiseReports",getAllItemWiseReportsPath:"/quality/mrn/getAllItemWiseReports",getAllRawMaterialInspectionReportsPath:"/quality/mrn/getAllRawMaterialInspectionReports",getByMRNIdForRMInspectionPath:"/quality/mrn/getByMRNIdForRMInspection",updatePath:e=>`/quality/mrn/update/${e}`,getByIdPath:e=>`/quality/mrn/getById/${e}`,getMRNDetailsByIdPath:e=>`/quality/mrn/getMRNDetailsById/${e}`,deletePath:e=>`/quality/mrn/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(e=>e))}getRMSpecificationByItemId(i){return this.http.get(this.routes.getRMSpecificationByItemIdPath,i).pipe((0,r.U)(e=>e))}getAllReports(i){return this.http.get(this.routes.getAllReportsPath,i).pipe((0,r.U)(e=>e))}getAllMRNReports(i){return this.http.get(this.routes.getAllMRNReportsPath,i).pipe((0,r.U)(e=>e))}getAllSupplierWiseReports(i){return this.http.get(this.routes.getAllSupplierWiseReportsPath,i).pipe((0,r.U)(e=>e))}getAllItemWiseReports(i){return this.http.get(this.routes.getAllItemWiseReportsPath,i).pipe((0,r.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,r.U)(e=>e))}getAllRawMaterialInspectionReports(i){return this.http.get(this.routes.getAllRawMaterialInspectionReportsPath,i).pipe((0,r.U)(e=>e))}getByMRNIdForRMInspection(i){return this.http.get(this.routes.getByMRNIdForRMInspectionPath,i).pipe((0,r.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,r.U)(g=>g))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(e=>e))}getMRNDetailsById(i){return this.http.get(this.routes.getMRNDetailsByIdPath(i)).pipe((0,r.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||o)(h.LFG(u.sM))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),I=(()=>{class o{constructor(i){this.http=i,this.routes={createPath:"/quality/PDIREntry/create",getAllPath:"/quality/PDIREntry/getAll",getProductSpecificationBySKUIdPath:"/quality/PDIREntry/getProductSpecificationBySKUId",getAllReportPath:"/quality/PDIREntry/getAllReports",getAllMasterDataPath:"/quality/PDIREntry/getAllMasterData",getAllSalesInvoiceForPDIREntryPath:"/quality/PDIREntry/getAllSalesInvoiceForPDIREntry",updatePath:e=>`/quality/PDIREntry/update/${e}`,getPDIRDetailsBySalesInvoiceIdPath:e=>`/quality/PDIREntry/getPDIRDetailsBySalesInvoiceId/${e}`,getByIdPath:e=>`/quality/PDIREntry/getById/${e}`,getPDIRDetailsByIdPath:e=>`/quality/PDIREntry/getPDIRDetailsById/${e}`,deletePath:e=>`/quality/PDIREntry/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(e=>e))}getAllReports(i){return this.http.get(this.routes.getAllReportPath,i).pipe((0,r.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(e=>e))}getProductSpecificationBySKUId(i){return this.http.get(this.routes.getProductSpecificationBySKUIdPath,i).pipe((0,r.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,r.U)(e=>e))}getAllSalesInvoiceForPDIREntry(i){return this.http.get(this.routes.getAllSalesInvoiceForPDIREntryPath,i).pipe((0,r.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,r.U)(g=>g))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(e=>e))}getPDIRDetailsById(i){return this.http.get(this.routes.getPDIRDetailsByIdPath(i)).pipe((0,r.U)(e=>e))}getPDIRDetailsBySalesInvoiceId(i){return this.http.get(this.routes.getPDIRDetailsBySalesInvoiceIdPath(i)).pipe((0,r.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||o)(h.LFG(u.sM))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),v=(()=>{class o{constructor(i){this.http=i,this.routes={createPath:"/quality/product-specification/create",getAllPath:"/quality/product-specification/getAll",getAllMasterDataPath:"/quality/product-specification/getAllMasterData",updatePath:e=>`/quality/product-specification/update/${e}`,getByIdPath:e=>`/quality/product-specification/getById/${e}`,deletePath:e=>`/quality/product-specification/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,r.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,r.U)(g=>g))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||o)(h.LFG(u.sM))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),t=(()=>{class o{constructor(i){this.http=i,this.routes={createPath:"/quality/rm-specification/create",getAllPath:"/quality/rm-specification/getAll",getAllMasterDataPath:"/quality/rm-specification/getAllMasterData",updatePath:e=>`/quality/rm-specification/update/${e}`,getByIdPath:e=>`/quality/rm-specification/getById/${e}`,deletePath:e=>`/quality/rm-specification/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,r.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,r.U)(g=>g))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||o)(h.LFG(u.sM))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),y=(()=>{class o{constructor(i){this.http=i,this.routes={createPath:"/quality/specificationMaster/create",getAllPath:"/quality/specificationMaster/getAll",getAllMasterDataPath:"/quality/specificationMaster/getAllMasterData",updatePath:e=>`/quality/specificationMaster/update/${e}`,getByIdPath:e=>`/quality/specificationMaster/getById/${e}`,deletePath:e=>`/quality/specificationMaster/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,r.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,r.U)(g=>g))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||o)(h.LFG(u.sM))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),f=(()=>{class o{constructor(i){this.http=i,this.routes={createPath:"/quality/productCategorySpecification/create",getAllPath:"/quality/productCategorySpecification/getAll",getAllMasterDataPath:"/quality/productCategorySpecification/getAllMasterData",updatePath:e=>`/quality/productCategorySpecification/update/${e}`,getByIdPath:e=>`/quality/productCategorySpecification/getById/${e}`,deletePath:e=>`/quality/productCategorySpecification/delete/${e}`}}create(i){return this.http.post(this.routes.createPath,i).pipe((0,r.U)(e=>e))}getAll(i){return this.http.get(this.routes.getAllPath,i).pipe((0,r.U)(e=>e))}getAllMasterData(i){return this.http.get(this.routes.getAllMasterDataPath,i).pipe((0,r.U)(e=>e))}update(i,e){return this.http.put(this.routes.updatePath(i),e).pipe((0,r.U)(g=>g))}getById(i){return this.http.get(this.routes.getByIdPath(i)).pipe((0,r.U)(e=>e))}delete(i){return this.http.delete(this.routes.deletePath(i)).pipe((0,r.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||o)(h.LFG(u.sM))};static#e=this.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);