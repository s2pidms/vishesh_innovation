"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2080],{12080:(ft,J,c)=>{c.r(J),c.d(J,{SampleJcEntryModule:()=>_t});var m=c(96814),g=c(1076),y=c(43818),x=c(25116),v=c(83110),t=c(65879),d=c(98977),S=c(78212),Z=c(88059),b=c(37285),A=c(53421),U=c(14906);const M=function(){return["In-Process"]};function N(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",22,23)(7,"span",24),t._uU(8),t.qZA()(),t.TgZ(9,"td",22,25)(11,"span",24),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"div",26),t._UZ(25,"button",27),t.TgZ(26,"div",28)(27,"a",29),t.NdJ("click",function(){const i=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"view"))}),t._UZ(28,"i",30),t._uU(29," View "),t.qZA(),t.TgZ(30,"a",29),t.NdJ("click",function(){const i=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"edit"))}),t._UZ(31,"i",31),t._uU(32," Edit "),t.qZA(),t.TgZ(33,"a",29),t.NdJ("click",function(){const i=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.update(i,"Report Generated",i._id))}),t._UZ(34,"img",32),t._uU(35," Generate Report "),t.qZA()()()()()}if(2&r){const o=a.$implicit,n=t.MAs(6),e=t.MAs(10),i=t.oxw();t.xp6(2),t.Oqu(null==o?null:o.jobCardNo),t.xp6(2),t.Oqu(null==o?null:o.SKUNo),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.SKUName)("positionTarget",n),t.xp6(1),t.hij(" ",o.SKUName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.SKUDescription)("positionTarget",e),t.xp6(1),t.hij(" ",o.SKUDescription," "),t.xp6(2),t.Oqu(null==o?null:o.UOM),t.xp6(2),t.Oqu(null==o?null:o.totalBatchQuantity),t.xp6(2),t.Oqu(o.batchOutputQty),t.xp6(2),t.Oqu(o.batchNumber),t.xp6(2),t.Oqu(null==o?null:o.status),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Mark As Completed"===(null==o?null:o.status)),t.Q6J("accessType",i.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable",t.DdM(24,M).includes(o.status)),t.Q6J("accessType",i.rolePermissionActions.generateReportAction)}}const D=function(r,a,o,n){return{page:r,pageSize:a,collection:o,search:n,type:"list"}};let I=(()=>{var r;class a{constructor(n,e,i,s,p,u,h){this.exportExcelService=n,this.sampleJCEntryService=e,this.spinner=i,this.activatedRoute=s,this.exportToPDFService=p,this.toastService=u,this.router=h,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=x.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(n,e,i){if("Mark As Completed"==e?.status&&"edit"==i)return null;this.router.navigate([n],{relativeTo:this.activatedRoute,queryParams:{id:e?._id,action:i}})}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=n.value,this.getAll()}}trackByFn(n,e){return e?._id}getAll(n=!1,e=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:n};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.sampleJCEntryService.getAll(i).subscribe(s=>{"EXCEL"==e?this.excelDownload(s.rows):"PDF"==e?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(n){let e=(0,v.MO)(n);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(n){this.exportExcelService.exportExcel((0,v.GF)(n))}update(n,e,i){["Mark As Completed"].includes(n.status)&&(this.spinner.show(),this.sampleJCEntryService.update(i,{status:e}).subscribe(s=>{this.toastService.success(s.message),this.getAll(),this.spinner.hide()}))}onSort({column:n,direction:e}){this.headers.forEach(i=>{i.sortable!==n&&(i.direction="")}),this.column=n,this.direction="asc"==e?1:-1,this.getAll()}}return(r=a).\u0275fac=function(n){return new(n||r)(t.Y36(d.Ol),t.Y36(S.lk),t.Y36(d.V),t.Y36(g.gz),t.Y36(d.$L),t.Y36(d.kl),t.Y36(g.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-sample-jc-entry-list"]],viewQuery:function(n,e){if(1&n&&t.Gf(y.j,5),2&n){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:38,vars:15,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","jobCardNo",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","totalBatchQuantity",3,"sort"],["sortable","batchOutputQty",3,"sort"],["sortable","batchNumber",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["src","./assets/images/new.svg","width","16",1,"me-2"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Sample Job Card Entry Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return e.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Sample Job Card Entry "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return e.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(15,"Job Card No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(17,"SKU No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(19),t.ALo(20,"labelTranslate"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(22),t.ALo(23,"labelTranslate"),t.qZA(),t.TgZ(24,"th",16),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(25,"UoM"),t.qZA(),t.TgZ(26,"th",17),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(27,"Batch I/P Qty."),t.qZA(),t.TgZ(28,"th",18),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(29,"Batch O/P Qty."),t.qZA(),t.TgZ(30,"th",19),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(31,"Batch Number"),t.qZA(),t.TgZ(32,"th",20),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(33,"Status"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Action"),t.qZA()()(),t.TgZ(36,"tbody"),t.YNc(37,N,36,25,"tr",21),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(10,D,e.page,e.pageSize,e.collection,e.search)),t.xp6(9),t.hij(" ",t.lcZ(20,6,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(23,8,"SKU Description")," "),t.xp6(15),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[m.sg,Z.P,b._L,y.j,A.J,U.c],encapsulation:2}),a})();var l=c(60095),w=c(21631),F=c(22096),L=c(61441),Q=c(3959),q=c(74834),T=c(71966),k=c(77945),O=c(16897),P=c(50363),K=c(95346),j=c(69205);function Y(r,a){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==o?null:o.seq," ")}}const _=function(){return{standalone:!0}};function G(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"input",79),t.NdJ("ngModelChange",function(e){t.CHM(o);const i=t.oxw().$implicit;return t.KtG(i.seq=e)}),t.qZA()}if(2&r){const o=t.oxw().$implicit;t.Q6J("ngModel",o.seq)("ngModelOptions",t.DdM(2,_))}}function B(r,a){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"truncate"),t.qZA()),2&r){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",null!=o&&o.machineName?t.xi3(2,1,null==o?null:o.machineName,25):null," ")}}function H(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"ng-select",80),t.NdJ("ngModelChange",function(e){t.CHM(o);const i=t.oxw().$implicit;return t.KtG(i.machineName=e)})("change",function(e){t.CHM(o);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.setMachineId(i,e))}),t.qZA()}if(2&r){const o=t.oxw().$implicit;t.Q6J("items",o.machineInfo)("clearable",!1)("ngModel",o.machineName)("ngModelOptions",t.DdM(4,_))}}function $(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"div",81),t.NdJ("click",function(){t.CHM(o);const e=t.oxw().$implicit,i=t.oxw();return t.KtG(i.changeMachineDetails(e))}),t.qZA()}}function z(r,a){1&r&&t._UZ(0,"div",82)}function R(r,a){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&r){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.prodQty,"1.2-2")," ")}}function V(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"input",83),t.NdJ("ngModelChange",function(e){t.CHM(o);const i=t.oxw().$implicit;return t.KtG(i.prodQty=e)}),t.qZA()}if(2&r){const o=t.oxw().$implicit;t.Q6J("ngModel",o.prodQty)("ngModelOptions",t.DdM(2,_))}}function X(r,a){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&r){const o=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.releaseQty,"1.2-2")," ")}}function W(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"input",83),t.NdJ("ngModelChange",function(e){t.CHM(o);const i=t.oxw().$implicit;return t.KtG(i.releaseQty=e)}),t.qZA()}if(2&r){const o=t.oxw().$implicit;t.Q6J("ngModel",o.releaseQty)("ngModelOptions",t.DdM(2,_))}}const E=function(){return["view","Converted to SKU","approve"]},f=function(){return["approve","reject","view"]},tt=function(){return["view","approve"]};function et(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",62),t.YNc(3,Y,2,1,"span",63),t.YNc(4,G,1,3,"input",64),t.qZA()(),t.TgZ(5,"td",65,66)(7,"span",67),t._uU(8),t.qZA()(),t.TgZ(9,"td",68)(10,"div",69),t.YNc(11,B,3,4,"span",63),t.TgZ(12,"div",70),t.YNc(13,H,1,5,"ng-select",71),t.qZA(),t.TgZ(14,"span",72),t.YNc(15,$,1,0,"div",73),t.YNc(16,z,1,0,"div",74),t.qZA()()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"div",75)(21,"button",76),t.NdJ("click",function(){const i=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.openProdInfoModal(i))}),t._uU(22," Prod. Info "),t.qZA()()(),t.TgZ(23,"td")(24,"div",62),t.YNc(25,R,3,4,"span",63),t.YNc(26,V,1,3,"input",77),t.qZA()(),t.TgZ(27,"td")(28,"div",75)(29,"button",76),t.NdJ("click",function(){const i=t.CHM(o).$implicit,s=t.oxw();return t.KtG(s.openIPQAModal(i))}),t._uU(30," Control Plan "),t.qZA()()(),t.TgZ(31,"td")(32,"div",62),t.YNc(33,X,3,4,"span",63),t.YNc(34,W,1,3,"input",77),t.qZA()(),t.TgZ(35,"td")(36,"input",78),t.NdJ("ngModelChange",function(e){const s=t.CHM(o).$implicit;return t.KtG(s.processStatus=e)}),t.qZA()()()}if(2&r){const o=a.$implicit,n=t.MAs(6),e=t.oxw();t.xp6(3),t.Q6J("ngIf",t.DdM(19,E).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(20,E).includes(e.action)),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",o.processName)("positionTarget",n),t.xp6(1),t.hij(" ",null==o?null:o.processName," "),t.xp6(3),t.Q6J("ngIf",!(null!=o&&o.machineInfo&&0!=(null==o||null==o.machineInfo?null:o.machineInfo.length)&&1!=(null==o||null==o.machineInfo?null:o.machineInfo.length)&&null!=o&&o.isMachineToggle)),t.xp6(2),t.Q6J("ngIf",o.isMachineToggle),t.xp6(2),t.Q6J("ngIf",(null==o||null==o.machineInfo?null:o.machineInfo.length)>1),t.xp6(1),t.Q6J("ngIf",!(null!=o&&o.machineInfo)||0==(null==o||null==o.machineInfo?null:o.machineInfo.length)||1==(null==o||null==o.machineInfo?null:o.machineInfo.length)),t.xp6(2),t.Oqu(null==o?null:o.UOM),t.xp6(7),t.Q6J("ngIf",t.DdM(21,f).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(22,f).includes(e.action)),t.xp6(7),t.Q6J("ngIf",t.DdM(23,f).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(24,f).includes(e.action)),t.xp6(2),t.Q6J("ngModel",o.processStatus)("ngModelOptions",t.DdM(25,_))("disabled",t.DdM(26,tt).includes(e.action))}}function nt(r,a){1&r&&t._UZ(0,"div",84)}function ot(r,a){1&r&&t._UZ(0,"div",85)}function it(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"button",86),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.reset())}),t._uU(1," Reset "),t.qZA()}}function st(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"button",87),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.ESCPreview())}),t._uU(1," Esc "),t.qZA()}if(2&r){const o=t.oxw();t.Q6J("disabled",!o.isESCPreview)}}function rt(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"button",88),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.preview())}),t._uU(1," Preview "),t.qZA()}}function at(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"button",89),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.submit())}),t._uU(1," Save "),t.qZA()}if(2&r){const o=t.oxw();t.Q6J("disabled",!o.isPreview)}}function lt(r,a){if(1&r){const o=t.EpF();t.TgZ(0,"div",90)(1,"button",91),t.NdJ("click",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Approve QA"),t.qZA()()}}const ct=function(r,a,o,n){return{page:r,pageSize:a,collection:o,search:n,excelDisplay:"none"}},C=function(){return["reject","Acknowledged","approve","view"]},pt=function(){return["reject","approve","view"]};let mt=(()=>{var r;class a{constructor(n,e,i,s,p,u,h,gt){this.sampleJCEntryService=n,this.activatedRoute=e,this.spinner=i,this.toastService=s,this.validationService=p,this.modalService=u,this.utilityService=h,this.location=gt,this.isPreview=!1,this.submitted=!1,this.isESCPreview=!1,this.action="create",this.page=1,this.pageSize=6,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.selectedJobCardDetails={},this.processDetailsList=[],this.ESCPreviewArr=[],this.masterData={autoIncrementNo:"",JCOptions:[],billFromLocationOptions:[],shiftOptions:[]},this.JCEntryDetailsList=[],this.prodInfoList=[{prodDate:this.utilityService.getTodayDate("YYYY-MM-DD"),prodShift:"",operatingStaff:"",prodQty:null}],this.IPQAInfoList=[{inspectionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),shift:"",inspectionStaff:"",releaseQty:null}],this.form=new l.nJ({_id:new l.p4(null),jobCardEntryCode:new l.p4(null),jobCard:new l.p4(null,[l.kI.required]),jobCardNo:new l.p4(null),SKU:new l.p4(null),SKUNo:new l.p4(null),SKUName:new l.p4(null),SKUDescription:new l.p4(null),UOM:new l.p4(null),totalBatchQuantity:new l.p4(null),location:new l.p4(null),batchOutputQty:new l.p4(null),batchNumber:new l.p4(null),status:new l.p4("In-Process"),JCEntryDetails:new l.p4([])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,Q.m5))return;this.form.enable();let n=this.form.value;"approve"==this.action&&(n.status="Approved"),n.JCEntryDetails=this.JCEntryDetailsList,n._id?this.update(n):(delete n._id,this.create(n))}trackByFn(n,e){return e?._id}create(n){this.spinner.show(),this.sampleJCEntryService.create(n).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.location.back()})}update(n){this.spinner.show(),this.sampleJCEntryService.update(n._id,n).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.location.back()})}reset(){this.form.reset(),this.JCEntryDetailsList=[],this.collection=this.JCEntryDetailsList.length,this.getInitialData(),this.isESCPreview=!1}getInitialData(){this.spinner.show(),this.sampleJCEntryService.getAllMasterData({}).subscribe(n=>{this.masterData=n,this.form.controls.jobCardEntryCode.setValue(this.masterData?.autoIncrementNo),this.processDetailsList=n?.processMasterOptions.map(e=>(e.isMachineToggle=!1,e)),this.form.controls.status.setValue("In-Process"),this.activatedRoute.queryParams.pipe((0,w.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.sampleJCEntryService.getById(e.id):(0,F.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.JCEntryDetails&&(this.JCEntryDetailsList=e?.JCEntryDetails?.map(i=>(i.isMachineToggle=!1,i)).sort((i,s)=>i.seq-s.seq)),this.collection=this.JCEntryDetailsList.length,this.form.patchValue(e),this.f.jobCardNo.disable(),["view","approve"].includes(this.action)&&this.form.disable())})})}setMachineId(n,e){if(["create","edit"].includes(this.action)){let i=this.JCEntryDetailsList.findIndex(s=>s.process==n?.process);this.JCEntryDetailsList[i].machine=e?.machine,this.JCEntryDetailsList[i].machineName=e?.machineName}}changeMachineDetails(n){if(["create","edit"].includes(this.action)){let e=this.JCEntryDetailsList.findIndex(i=>i.process==n?.process);this.JCEntryDetailsList[e].isMachineToggle=!n.isMachineToggle}}setJobCardId(n){this.f.jobCard.setValue(n?._id),this.f.SKU.setValue(n?.SKU),this.f.SKUNo.setValue(n?.SKUNo),this.f.SKUName.setValue(n?.SKUName),this.f.SKUDescription.setValue(n?.SKUDescription),this.f.UOM.setValue(n?.UOM),this.f.totalBatchQuantity.setValue(n?.batchQty),this.f.jobCardNo.setValue(n?.jobCardNo),this.f.batchNumber.setValue(n?.jobCardNo),this.spinner.show(),this.sampleJCEntryService.getProcessFromDirectCostBySKUId({SKUId:n?.SKU}).subscribe(e=>{this.JCEntryDetailsList=e.length>0?e:JSON.parse(JSON.stringify(this.processDetailsList)),this.collection=this.JCEntryDetailsList?.length,this.spinner.hide()})}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=this.JCEntryDetailsList,this.JCEntryDetailsList=this.JCEntryDetailsList.filter(n=>n.seq>0),0==this.JCEntryDetailsList.length?this.toastService.warning("At least One Row is Required!"):this.isPreview=!0,this.collection=this.JCEntryDetailsList.length}ESCPreview(){this.search="",this.isPreview=!1,this.JCEntryDetailsList=this.ESCPreviewArr,this.collection=this.JCEntryDetailsList.length}openJobCardDetailsModal(){const n=this.modalService.open(L.Q,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});n.componentInstance.action=this.action,n.componentInstance.selectedJobCardDetails=this.selectedJobCardDetails,n.componentInstance.JCOptions=this.masterData.JCOptions,n.componentInstance.jobCard=this.form.controls.jobCard.value,n.result.then(e=>{e&&(this.selectedJobCardDetails=e?.selectedJobCardDetails,this.setJobCardId(e?.selectedJobCardDetails))},e=>{})}openProdInfoModal(n){const e=this.modalService.open(T._,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.prodInfoList=this.prodInfoList,e.componentInstance.shiftOptions=this.masterData.shiftOptions,e.componentInstance.productionDetails=n?.production,e.result.then(i=>{if(i){let s=this.JCEntryDetailsList.findIndex(p=>p.process==n?.process);this.prodInfoList=i?.prodInfoList,this.JCEntryDetailsList[s].prodQty=i?.production?.cumulativeCount,this.JCEntryDetailsList[s].production=i?.production}},i=>{})}openIPQAModal(n){const e=this.modalService.open(T.U,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.IPQAInfoList=this.IPQAInfoList,e.componentInstance.shiftOptions=this.masterData.shiftOptions,e.componentInstance.IPQADetails=n?.IPQA,e.result.then(i=>{if(i){let s=this.JCEntryDetailsList.findIndex(p=>p.process==n?.process);this.IPQAInfoList=i?.IPQAInfoList,this.JCEntryDetailsList[s].releaseQty=i?.IPQA?.cumulativeCount,this.JCEntryDetailsList[s].IPQA=i?.IPQA}},i=>{})}openBatchInfoModal(){const n=this.modalService.open(k.o,{centered:!0,size:"md",backdrop:"static",keyboard:!1});n.componentInstance.action=this.action,n.componentInstance.billFromLocationOptions=this.masterData.billFromLocationOptions,n.componentInstance.batchInfoDetails={location:this.f.location.value,batchOutputQty:this.f.batchOutputQty.value,batchNumber:this.f.batchNumber.value},n.result.then(e=>{e&&(console.log("success",e),this.form.patchValue(e))},e=>{})}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.page=1;break;case"EXCEL":default:break;case"PAGE":this.page=n.value}}onSort({column:n,direction:e}){this.headers.forEach(i=>{i.sortable!==n&&(i.direction="")}),this.JCEntryDetailsList=""===e||""===n?this.JCEntryDetailsList:[...this.JCEntryDetailsList].sort((i,s)=>{let p="string"==typeof i[n]?i[n].toLowerCase():i[n],u="string"==typeof s[n]?s[n].toLowerCase():s[n];const h=p<u?-1:p>u?1:0;return"asc"===e?h:-h})}}return(r=a).\u0275fac=function(n){return new(n||r)(t.Y36(S.lk),t.Y36(g.gz),t.Y36(d.V),t.Y36(d.kl),t.Y36(O.RJ),t.Y36(b.FF),t.Y36(d.tI),t.Y36(m.Ye))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-sample-jc-entry-form"]],viewQuery:function(n,e){if(1&n&&t.Gf(q.j_,5),2&n){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:104,vars:33,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mb-0"],[1,"col-6","pe-2"],[1,"row","mb-1"],[1,"col-7"],[1,"row"],[1,"col-6"],["for","",1,"form-label"],[1,"text-danger"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","jobCardNo","bindValue","jobCardNo","formControlName","jobCardNo",3,"items","clearable","change"],["id","basic-addon1",1,"set-input-group-text","input-group-text","bg-primary","pointer","col-auto",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white","fs-4"],["type","text","formControlName","SKUNo","readonly","",1,"form-control"],[1,"col-5","px-0"],["type","text","formControlName","SKUName","readonly","",1,"form-control"],[1,"col-3","px-5"],["type","text","formControlName","SKUDescription","readonly","",1,"form-control"],[1,"col-3","ps-0"],[1,"col-5","ps-2","pe-3"],["type","text","formControlName","UOM","readonly","",1,"form-control"],[1,"col-7","ps-2"],["type","text","formControlName","totalBatchQuantity","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","22.5rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","machineName",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","prodQty",3,"sort"],["sortable","releaseQty",3,"sort"],["sortable","processStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-3","pe-0","d-flex"],[1,"d-flex","align-items-end"],[1,"set-flex-status","px-4"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],["value","In-Process"],["value","Mark As Completed"],[1,"input-group-text","statusSpanHeight"],["class","statusYellow",4,"ngIf"],["class","statusActive",4,"ngIf"],[1,"col-3"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","px-4",3,"click"],[1,"col-md-auto","ms-auto","d-flex","align-items-end"],["type","button","class","btn btn-primary px-5 me-3",3,"click",4,"ngIf"],["type","button","class","btn btn-primary px-4 me-1",3,"disabled","click",4,"ngIf"],["type","button","class","btn btn-primary px-4 me-3",3,"click",4,"ngIf"],["type","button","class","btn btn-primary px-5",3,"disabled","click",4,"ngIf"],["class","content-end",4,"ngIf"],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-size-xs w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],[1,"text-start"],["processName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],[1,"text-start","set-overflow-unset"],[1,"d-flex","justify-content-between","px-2"],[2,"width","17rem !important"],["bindLabel","machineName","bindValue","machineName",3,"items","clearable","ngModel","ngModelOptions","ngModelChange","change",4,"ngIf"],[1,"pointer","d-flex","align-items-center"],["class","unit-switch-rev ms-3",3,"click",4,"ngIf"],["class","unit-switch-gray",4,"ngIf"],[1,"d-flex","justify-content-center","align-items-center"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"click"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["type","checkbox",1,"form-check-input","pointer",3,"ngModel","ngModelOptions","disabled","ngModelChange"],["type","number",1,"form-control","form-control-size-xs","w-25",3,"ngModel","ngModelOptions","ngModelChange"],["bindLabel","machineName","bindValue","machineName",3,"items","clearable","ngModel","ngModelOptions","ngModelChange","change"],[1,"unit-switch-rev","ms-3",3,"click"],[1,"unit-switch-gray"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange"],[1,"statusYellow"],[1,"statusActive"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"content-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"label",12),t._uU(15,"Job Card No. "),t.TgZ(16,"span",13),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"div",14)(19,"div",15)(20,"ng-select",16),t.NdJ("change",function(s){return e.setJobCardId(s)}),t.qZA()(),t.TgZ(21,"div",17),t.NdJ("click",function(){return e.openJobCardDetailsModal()}),t._UZ(22,"i",18),t.qZA()()(),t.TgZ(23,"div",11)(24,"label",12),t._uU(25,"SKU No. "),t._UZ(26,"span",13),t.qZA(),t._UZ(27,"input",19),t.qZA()()(),t.TgZ(28,"div",20)(29,"label",12),t._uU(30,"SKU Name "),t._UZ(31,"span",13),t.qZA(),t._UZ(32,"input",21),t.qZA()()(),t.TgZ(33,"div",22)(34,"label",12),t._uU(35,"SKU Description "),t._UZ(36,"span",13),t.qZA(),t._UZ(37,"input",23),t.qZA(),t.TgZ(38,"div",24)(39,"div",10)(40,"div",25)(41,"label",12),t._uU(42," UoM "),t._UZ(43,"span",13),t.qZA(),t._UZ(44,"input",26),t.qZA(),t.TgZ(45,"div",27)(46,"label",12),t._uU(47," Batch Qty. "),t._UZ(48,"span",13),t.qZA(),t._UZ(49,"input",28),t.qZA()()()()(),t._UZ(50,"hr",29),t.TgZ(51,"app-setting-header",30),t.NdJ("dataChange",function(s){return e.eventHeader(s)}),t.qZA(),t.TgZ(52,"div",31)(53,"table",32)(54,"thead",33)(55,"tr",34)(56,"th",35),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(57,"Seq."),t.qZA(),t.TgZ(58,"th",36),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(59,"Process Name"),t.qZA(),t.TgZ(60,"th",37),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(61,"Machine/Device"),t.qZA(),t.TgZ(62,"th",38),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(63,"UoM"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Production"),t.qZA(),t.TgZ(66,"th",39),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(67,"Prod. Qty"),t.qZA(),t.TgZ(68,"th"),t._uU(69,"IPQA"),t.qZA(),t.TgZ(70,"th",40),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(71,"Release Qty"),t.qZA(),t.TgZ(72,"th",41),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(73,"Status"),t.qZA()()(),t.TgZ(74,"tbody"),t.YNc(75,et,37,27,"tr",42),t.ALo(76,"slice"),t.ALo(77,"searchFi1ter"),t.qZA()()(),t._UZ(78,"hr",29),t.TgZ(79,"div",10)(80,"div",43)(81,"div",44)(82,"span",45),t._uU(83," Status "),t.qZA(),t.TgZ(84,"select",46)(85,"option",47),t._uU(86,"Select Status"),t.qZA(),t.TgZ(87,"option",48),t._uU(88,"In-Process"),t.qZA(),t.TgZ(89,"option",49),t._uU(90,"Mark As Completed"),t.qZA()(),t.TgZ(91,"span",50),t.YNc(92,nt,1,0,"div",51),t.YNc(93,ot,1,0,"div",52),t.qZA()()(),t.TgZ(94,"div",53),t._UZ(95,"button",54),t.TgZ(96,"button",55),t.NdJ("click",function(){return e.openBatchInfoModal()}),t._uU(97,"Batch Info"),t.qZA()(),t.TgZ(98,"div",56),t.YNc(99,it,2,0,"button",57),t.YNc(100,st,2,1,"button",58),t.YNc(101,rt,2,0,"button",59),t.YNc(102,at,2,1,"button",60),t.YNc(103,lt,3,0,"div",61),t.qZA()()()()),2&n&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij("Sample Job Card Entry (",t.lcZ(6,15,e.action),") "),t.xp6(15),t.Q6J("items",e.masterData.JCOptions)("clearable",!1),t.xp6(31),t.Q6J("data",t.l5B(24,ct,e.page,e.pageSize,e.collection,e.search)),t.xp6(24),t.Q6J("ngForOf",t.Dn7(76,17,t.xi3(77,21,e.JCEntryDetailsList,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(10),t.Q6J("value",null),t.xp6(7),t.Q6J("ngIf","In-Process"==e.form.value.status),t.xp6(1),t.Q6J("ngIf","Mark As Completed"==e.form.value.status),t.xp6(6),t.Q6J("ngIf",!t.DdM(29,C).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(30,C).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(31,C).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(32,pt).includes(e.action)),t.xp6(1),t.Q6J("ngIf","approve"==e.action))},dependencies:[m.sg,m.O5,Z.P,b._L,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.Wl,l.EJ,l.JJ,l.JL,l.sg,l.u,l.On,P.w9,y.j,m.OU,m.JJ,m.rS,K.G,j.W],encapsulation:2}),a})();var dt=c(19964),ut=c(56208);const ht=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:I},{path:"form",component:mt,resolve:{accessScreen:dt.xr}}];let _t=(()=>{var r;class a{}return(r=a).\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.ez,g.Bz.forChild(ht),ut.m]}),a})()}}]);