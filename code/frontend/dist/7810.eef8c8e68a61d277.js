"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7810],{47810:(ft,J,l)=>{l.r(J),l.d(J,{JobCardEntryModule:()=>gt});var d=l(96814),_=l(1076),f=l(43818),A=l(25116),v=l(83110),t=l(65879),p=l(99328),Z=l(23396),T=l(88059),b=l(37285),U=l(53421),M=l(14906);const S=function(){return["In-Process"]};function N(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",22,23)(7,"span",24),t._uU(8),t.qZA()(),t.TgZ(9,"td",22,25)(11,"span",24),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"div",26),t._UZ(25,"button",27),t.TgZ(26,"div",28)(27,"a",29),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"view"))}),t._UZ(28,"i",30),t._uU(29," View "),t.qZA(),t.TgZ(30,"a",29),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",i,"edit"))}),t._UZ(31,"i",31),t._uU(32," Edit "),t.qZA(),t.TgZ(33,"a",29),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.update(i,"Report Generated",i._id))}),t._UZ(34,"img",32),t._uU(35," Generate Report "),t.qZA()()()()()}if(2&r){const e=c.$implicit,o=t.MAs(6),n=t.MAs(10),i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.jobCardNo),t.xp6(2),t.Oqu(null==e?null:e.SKUNo),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.SKUName)("positionTarget",o),t.xp6(1),t.hij(" ",e.SKUName," "),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.SKUDescription)("positionTarget",n),t.xp6(1),t.hij(" ",e.SKUDescription," "),t.xp6(2),t.Oqu(null==e?null:e.UOM),t.xp6(2),t.Oqu(null==e?null:e.totalBatchQuantity),t.xp6(2),t.Oqu(e.batchOutputQty),t.xp6(2),t.Oqu(e.batchNumber),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Mark As Completed"===(null==e?null:e.status)),t.Q6J("accessType",i.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable",t.DdM(24,S).includes(e.status)),t.Q6J("accessType",i.rolePermissionActions.generateReportAction)}}const D=function(r,c,e,o){return{page:r,pageSize:c,collection:e,search:o,type:"list"}};let I=(()=>{class r{constructor(e,o,n,i,s,u,h,y){this.exportExcelService=e,this.jobCardEntryService=o,this.spinner=n,this.activatedRoute=i,this.exportToPDFService=s,this.utilityService=u,this.toastService=h,this.router=y,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=A.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,o,n){if("Mark As Completed"==o?.status&&"edit"==n)return null;this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:o?._id,action:n}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,o){return o?._id}getAll(e=!1,o=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.jobCardEntryService.getAll(n).subscribe(i=>{"EXCEL"==o?this.excelDownload(i.rows):"PDF"==o?this.pdfDownload(i.rows):(this.tableData=i.rows,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let o=(0,v.MO)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){this.exportExcelService.exportExcel((0,v.GF)(e))}update(e,o,n){["Mark As Completed"].includes(e.status)&&(this.spinner.show(),this.jobCardEntryService.update(n,{status:o}).subscribe(i=>{this.toastService.success(i.message),this.getAll(),this.spinner.hide()}))}onSort({column:e,direction:o}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(p.Ol),t.Y36(Z.G3),t.Y36(p.V),t.Y36(_.gz),t.Y36(p.$L),t.Y36(p.tI),t.Y36(p.kl),t.Y36(_.F0))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-job-card-entry-list"]],viewQuery:function(o,n){if(1&o&&t.Gf(f.j,5),2&o){let i;t.iGM(i=t.CRH())&&(n.headers=i)}},decls:38,vars:15,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","jobCardNo",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","totalBatchQuantity",3,"sort"],["sortable","batchOutputQty",3,"sort"],["sortable","batchNumber",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["src","./assets/images/new.svg","width","16",1,"me-2"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Job Card Entry Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return n.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Job Card Entry "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return n.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(15,"Job Card No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(17,"SKU No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(19),t.ALo(20,"labelTranslate"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(22),t.ALo(23,"labelTranslate"),t.qZA(),t.TgZ(24,"th",16),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(25,"UoM"),t.qZA(),t.TgZ(26,"th",17),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(27,"Batch I/P Qty."),t.qZA(),t.TgZ(28,"th",18),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(29,"Batch O/P Qty."),t.qZA(),t.TgZ(30,"th",19),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(31,"Batch Number"),t.qZA(),t.TgZ(32,"th",20),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(33,"Status"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Action"),t.qZA()()(),t.TgZ(36,"tbody"),t.YNc(37,N,36,25,"tr",21),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(10,D,n.page,n.pageSize,n.collection,n.search)),t.xp6(9),t.hij(" ",t.lcZ(20,6,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(23,8,"SKU Description")," "),t.xp6(15),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[d.sg,T.P,b._L,f.j,U.J,M.c],encapsulation:2})}return r})();var a=l(60095),w=l(21631),F=l(22096),L=l(61441),Q=l(3959),E=l(71966),q=l(77945),k=l(74834),O=l(16897),P=l(50363),j=l(95346),K=l(69205),Y=l(84231);function G(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e?null:e.seq," ")}}const m=function(){return{standalone:!0}};function B(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"input",79),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.seq=n)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.seq)("ngModelOptions",t.DdM(2,m))}}function H(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"truncate"),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null!=e&&e.machineName?t.xi3(2,1,null==e?null:e.machineName,25):null," ")}}function $(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"ng-select",80),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.machineName=n)})("change",function(n){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw();return t.KtG(s.setMachineId(i,n))}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("items",e.machineInfo)("clearable",!1)("ngModel",e.machineName)("ngModelOptions",t.DdM(4,m))}}function z(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",81),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw();return t.KtG(i.changeMachineDetails(n))}),t.qZA()}}function R(r,c){1&r&&t._UZ(0,"div",82)}function V(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.prodQty,"1.2-2")," ")}}function X(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"input",83),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.prodQty=n)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.prodQty)("ngModelOptions",t.DdM(2,m))}}function W(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.releaseQty,"1.2-2")," ")}}function tt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"input",83),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw().$implicit;return t.KtG(i.releaseQty=n)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.releaseQty)("ngModelOptions",t.DdM(2,m))}}const x=function(){return["view","Converted to SKU","approve"]},g=function(){return["approve","reject","view"]},et=function(){return["view","approve"]};function nt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",62),t.YNc(3,G,2,1,"span",63),t.YNc(4,B,1,3,"input",64),t.qZA()(),t.TgZ(5,"td",65,66)(7,"span",67),t._uU(8),t.qZA()(),t.TgZ(9,"td",68)(10,"div",69),t.YNc(11,H,3,4,"span",63),t.TgZ(12,"div",70),t.YNc(13,$,1,5,"ng-select",71),t.qZA(),t.TgZ(14,"span",72),t.YNc(15,z,1,0,"div",73),t.YNc(16,R,1,0,"div",74),t.qZA()()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"div",75)(21,"button",76),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.openProdInfoModal(i))}),t._uU(22," Prod. Info "),t.qZA()()(),t.TgZ(23,"td")(24,"div",62),t.YNc(25,V,3,4,"span",63),t.YNc(26,X,1,3,"input",77),t.qZA()(),t.TgZ(27,"td")(28,"div",75)(29,"button",76),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.openIPQAModal(i))}),t._uU(30," Control Plan "),t.qZA()()(),t.TgZ(31,"td")(32,"div",62),t.YNc(33,W,3,4,"span",63),t.YNc(34,tt,1,3,"input",77),t.qZA()(),t.TgZ(35,"td")(36,"input",78),t.NdJ("ngModelChange",function(n){const s=t.CHM(e).$implicit;return t.KtG(s.processStatus=n)}),t.qZA()()()}if(2&r){const e=c.$implicit,o=t.MAs(6),n=t.oxw();t.xp6(3),t.Q6J("ngIf",t.DdM(19,x).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(20,x).includes(n.action)),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.processName)("positionTarget",o),t.xp6(1),t.hij(" ",null==e?null:e.processName," "),t.xp6(3),t.Q6J("ngIf",!(null!=e&&e.machineInfo&&0!=(null==e||null==e.machineInfo?null:e.machineInfo.length)&&1!=(null==e||null==e.machineInfo?null:e.machineInfo.length)&&null!=e&&e.isMachineToggle)),t.xp6(2),t.Q6J("ngIf",e.isMachineToggle),t.xp6(2),t.Q6J("ngIf",(null==e||null==e.machineInfo?null:e.machineInfo.length)>1),t.xp6(1),t.Q6J("ngIf",!(null!=e&&e.machineInfo)||0==(null==e||null==e.machineInfo?null:e.machineInfo.length)||1==(null==e||null==e.machineInfo?null:e.machineInfo.length)),t.xp6(2),t.Oqu(null==e?null:e.UOM),t.xp6(7),t.Q6J("ngIf",t.DdM(21,g).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(22,g).includes(n.action)),t.xp6(7),t.Q6J("ngIf",t.DdM(23,g).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(24,g).includes(n.action)),t.xp6(2),t.Q6J("ngModel",e.processStatus)("ngModelOptions",t.DdM(25,m))("disabled",t.DdM(26,et).includes(n.action))}}function ot(r,c){1&r&&t._UZ(0,"div",84)}function it(r,c){1&r&&t._UZ(0,"div",85)}function rt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",86),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.reset())}),t._uU(1," Reset "),t.qZA()}}function st(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",87),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.ESCPreview())}),t._uU(1," Esc "),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.isESCPreview)}}function at(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",88),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.preview())}),t._uU(1," Preview "),t.qZA()}}function lt(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",89),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(1," Save "),t.qZA()}if(2&r){const e=t.oxw();t.Q6J("disabled",!e.isPreview)}}function ct(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",90)(1,"button",91),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(2,"Approve QA"),t.qZA()()}}const dt=function(r,c,e,o){return{page:r,pageSize:c,collection:e,search:o,excelDisplay:"none"}},C=function(){return["reject","Acknowledged","approve","view"]},pt=function(){return["reject","approve","view"]};let ut=(()=>{class r{constructor(e,o,n,i,s,u,h,y){this.jobCardEntryService=e,this.activatedRoute=o,this.spinner=n,this.toastService=i,this.validationService=s,this.modalService=u,this.utilityService=h,this.location=y,this.isPreview=!1,this.submitted=!1,this.isESCPreview=!1,this.action="create",this.page=1,this.pageSize=6,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.selectedJobCardDetails={},this.processDetailsList=[],this.ESCPreviewArr=[],this.masterData={autoIncrementNo:"",JCOptions:[],billFromLocationOptions:[],shiftOptions:[]},this.JCEntryDetailsList=[],this.prodInfoList=[{prodDate:this.utilityService.getTodayDate("YYYY-MM-DD"),prodShift:"",operatingStaff:"",prodQty:null}],this.IPQAInfoList=[{inspectionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),shift:"",inspectionStaff:"",releaseQty:null}],this.form=new a.nJ({_id:new a.p4(null),jobCardEntryCode:new a.p4(null),jobCard:new a.p4(null,[a.kI.required]),jobCardNo:new a.p4(null),SKU:new a.p4(null),referenceModel:new a.p4(null),SKUNo:new a.p4(null),SKUName:new a.p4(null),SKUDescription:new a.p4(null),UOM:new a.p4(null),totalBatchQuantity:new a.p4(null),location:new a.p4(null),batchOutputQty:new a.p4(null),batchNumber:new a.p4(null),status:new a.p4("In-Process"),JCEntryDetails:new a.p4([])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,Q.m5))return;this.form.enable();let e=this.form.value;"approve"==this.action&&(e.status="Approved"),e.JCEntryDetails=this.JCEntryDetailsList,e._id?this.update(e):(delete e._id,this.create(e))}trackByFn(e,o){return o?._id}create(e){this.spinner.show(),this.jobCardEntryService.create(e).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.location.back()})}update(e){this.spinner.show(),this.jobCardEntryService.update(e._id,e).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.location.back()})}reset(){this.form.reset(),this.JCEntryDetailsList=[],this.collection=this.JCEntryDetailsList.length,this.getInitialData(),this.isESCPreview=!1}getInitialData(){this.spinner.show(),this.jobCardEntryService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.jobCardEntryCode.setValue(this.masterData?.autoIncrementNo),this.processDetailsList=e?.processMasterOptions.map(o=>(o.isMachineToggle=!1,o)),this.form.controls.status.setValue("In-Process"),this.activatedRoute.queryParams.pipe((0,w.z)(o=>(this.action=o.action,this.utilityService.accessDenied(this.action),o.id?this.jobCardEntryService.getById(o.id):(0,F.of)({})))).subscribe(o=>{this.spinner.hide(),0!=Object.keys(o).length&&(o.JCEntryDetails&&(this.JCEntryDetailsList=o?.JCEntryDetails?.map(n=>(n.isMachineToggle=!1,n)).sort((n,i)=>n.seq-i.seq)),this.collection=this.JCEntryDetailsList.length,this.form.patchValue(o),this.f.jobCardNo.disable(),["view","approve"].includes(this.action)&&this.form.disable())})})}setMachineId(e,o){if(["create","edit"].includes(this.action)){let n=this.JCEntryDetailsList.findIndex(i=>i.process==e?.process);this.JCEntryDetailsList[n].machine=o?.machine,this.JCEntryDetailsList[n].machineName=o?.machineName}}changeMachineDetails(e){if(["create","edit"].includes(this.action)){let o=this.JCEntryDetailsList.findIndex(n=>n.process==e?.process);this.JCEntryDetailsList[o].isMachineToggle=!e.isMachineToggle}}setJobCardId(e){this.f.jobCard.setValue(e?._id),this.f.SKU.setValue(e?.SKU),this.f.SKUNo.setValue(e?.SKUNo),this.f.SKUName.setValue(e?.SKUName),this.f.SKUDescription.setValue(e?.SKUDescription),this.f.UOM.setValue(e?.UOM),this.f.totalBatchQuantity.setValue(e?.batchQty),this.f.jobCardNo.setValue(e?.jobCardNo),this.f.referenceModel.setValue(e?.referenceModel),this.f.batchNumber.setValue(e?.jobCardNo),this.spinner.show(),this.jobCardEntryService.getProcessFromDirectCostBySKUId({SKUOrDSKUId:e?.SKU,orderType:e?.orderType}).subscribe(o=>{this.JCEntryDetailsList=o.length>0?o:JSON.parse(JSON.stringify(this.processDetailsList)),this.collection=this.JCEntryDetailsList?.length,this.spinner.hide()})}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=this.JCEntryDetailsList,this.JCEntryDetailsList=this.JCEntryDetailsList.filter(e=>e.seq>0),0==this.JCEntryDetailsList.length?this.toastService.warning("At least One Row is Required!"):this.isPreview=!0,this.collection=this.JCEntryDetailsList.length}ESCPreview(){this.search="",this.isPreview=!1,this.JCEntryDetailsList=this.ESCPreviewArr,this.collection=this.JCEntryDetailsList.length}openJobCardDetailsModal(){const e=this.modalService.open(L.Q,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.selectedJobCardDetails=this.selectedJobCardDetails,e.componentInstance.JCOptions=this.masterData.JCOptions,e.componentInstance.jobCard=this.form.controls.jobCard.value,e.result.then(o=>{o&&(this.selectedJobCardDetails=o?.selectedJobCardDetails,this.setJobCardId(o?.selectedJobCardDetails))},o=>{})}openProdInfoModal(e){const o=this.modalService.open(E._,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});o.componentInstance.action=this.action,o.componentInstance.prodInfoList=this.prodInfoList,o.componentInstance.shiftOptions=this.masterData.shiftOptions,o.componentInstance.productionDetails=e?.production,o.result.then(n=>{if(n){let i=this.JCEntryDetailsList.findIndex(s=>s.process==e?.process);this.prodInfoList=n?.prodInfoList,this.JCEntryDetailsList[i].prodQty=n?.production?.cumulativeCount,this.JCEntryDetailsList[i].production=n?.production}},n=>{})}openIPQAModal(e){const o=this.modalService.open(E.U,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});o.componentInstance.action=this.action,o.componentInstance.IPQAInfoList=this.IPQAInfoList,o.componentInstance.shiftOptions=this.masterData.shiftOptions,o.componentInstance.IPQADetails=e?.IPQA,o.result.then(n=>{if(n){let i=this.JCEntryDetailsList.findIndex(s=>s.process==e?.process);this.IPQAInfoList=n?.IPQAInfoList,this.JCEntryDetailsList[i].releaseQty=n?.IPQA?.cumulativeCount,this.JCEntryDetailsList[i].IPQA=n?.IPQA}},n=>{})}openBatchInfoModal(){const e=this.modalService.open(q.o,{centered:!0,size:"md",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.billFromLocationOptions=this.masterData.billFromLocationOptions,e.componentInstance.batchInfoDetails={location:this.f.location.value,batchOutputQty:this.f.batchOutputQty.value,batchNumber:this.f.batchNumber.value},e.result.then(o=>{o&&(console.log("success",o),this.form.patchValue(o))},o=>{})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.page=1;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}onSort({column:e,direction:o}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.JCEntryDetailsList=""===o||""===e?this.JCEntryDetailsList:[...this.JCEntryDetailsList].sort((n,i)=>{let s="string"==typeof n[e]?n[e].toLowerCase():n[e],u="string"==typeof i[e]?i[e].toLowerCase():i[e];const h=s<u?-1:s>u?1:0;return"asc"===o?h:-h})}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(Z.G3),t.Y36(_.gz),t.Y36(p.V),t.Y36(p.kl),t.Y36(O.RJ),t.Y36(b.FF),t.Y36(p.tI),t.Y36(d.Ye))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-job-card-entry-form"]],viewQuery:function(o,n){if(1&o&&t.Gf(k.j_,5),2&o){let i;t.iGM(i=t.CRH())&&(n.headers=i)}},decls:105,vars:36,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mb-0"],[1,"col-6","pe-2"],[1,"row","mb-1"],[1,"col-7"],[1,"row"],[1,"col-6"],["for","",1,"form-label"],[1,"text-danger"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","jobCardNo","bindValue","jobCardNo","formControlName","jobCardNo",3,"items","clearable","change"],["id","basic-addon1",1,"set-input-group-text","input-group-text","bg-primary","pointer","col-auto",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white","fs-4"],["type","text","formControlName","SKUNo","readonly","",1,"form-control"],[1,"col-5","px-0"],["type","text","formControlName","SKUName","readonly","",1,"form-control"],[1,"col-3","px-5"],["type","text","formControlName","SKUDescription","readonly","",1,"form-control"],[1,"col-3","ps-0"],[1,"col-5","ps-2","pe-3"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-7","ps-2"],["type","text","formControlName","totalBatchQuantity","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","22.5rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","machineName",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","prodQty",3,"sort"],["sortable","releaseQty",3,"sort"],["sortable","processStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-3","pe-0","d-flex"],[1,"d-flex","align-items-end"],[1,"set-flex-status","px-4"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],["value","In-Process"],["value","Mark As Completed"],[1,"input-group-text","statusSpanHeight"],["class","statusYellow",4,"ngIf"],["class","statusActive",4,"ngIf"],[1,"col-3"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","px-4",3,"click"],[1,"col-md-auto","ms-auto","d-flex","align-items-end"],["type","button","class","btn btn-primary px-5 me-3",3,"click",4,"ngIf"],["type","button","class","btn btn-primary px-4 me-1",3,"disabled","click",4,"ngIf"],["type","button","class","btn btn-primary px-4 me-3",3,"click",4,"ngIf"],["type","button","class","btn btn-primary px-5",3,"disabled","click",4,"ngIf"],["class","content-end",4,"ngIf"],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-size-xs w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],[1,"text-start"],["processName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],[1,"text-start","set-overflow-unset"],[1,"d-flex","justify-content-between","px-2"],[2,"width","17rem !important"],["bindLabel","machineName","bindValue","machineName",3,"items","clearable","ngModel","ngModelOptions","ngModelChange","change",4,"ngIf"],[1,"pointer","d-flex","align-items-center"],["class","unit-switch-rev ms-3",3,"click",4,"ngIf"],["class","unit-switch-gray",4,"ngIf"],[1,"d-flex","justify-content-center","align-items-center"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"click"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["type","checkbox",1,"form-check-input","pointer",3,"ngModel","ngModelOptions","disabled","ngModelChange"],["type","number",1,"form-control","form-control-size-xs","w-25",3,"ngModel","ngModelOptions","ngModelChange"],["bindLabel","machineName","bindValue","machineName",3,"items","clearable","ngModel","ngModelOptions","ngModelChange","change"],[1,"unit-switch-rev","ms-3",3,"click"],[1,"unit-switch-gray"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange"],[1,"statusYellow"],[1,"statusActive"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"content-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"label",12),t._uU(15,"Job Card No. "),t.TgZ(16,"span",13),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"div",14)(19,"div",15)(20,"ng-select",16),t.NdJ("change",function(s){return n.setJobCardId(s)}),t.qZA()(),t.TgZ(21,"div",17),t.NdJ("click",function(){return n.openJobCardDetailsModal()}),t._UZ(22,"i",18),t.qZA()()(),t.TgZ(23,"div",11)(24,"label",12),t._uU(25,"SKU No. "),t._UZ(26,"span",13),t.qZA(),t._UZ(27,"input",19),t.qZA()()(),t.TgZ(28,"div",20)(29,"label",12),t._uU(30,"SKU Name "),t._UZ(31,"span",13),t.qZA(),t._UZ(32,"input",21),t.qZA()()(),t.TgZ(33,"div",22)(34,"label",12),t._uU(35,"SKU Description "),t._UZ(36,"span",13),t.qZA(),t._UZ(37,"input",23),t.qZA(),t.TgZ(38,"div",24)(39,"div",10)(40,"div",25)(41,"label",12),t._uU(42," UoM "),t._UZ(43,"span",13),t.qZA(),t._UZ(44,"input",26),t.ALo(45,"SalesUOMUnitMaster"),t.qZA(),t.TgZ(46,"div",27)(47,"label",12),t._uU(48," Batch Qty. "),t._UZ(49,"span",13),t.qZA(),t._UZ(50,"input",28),t.qZA()()()()(),t._UZ(51,"hr",29),t.TgZ(52,"app-setting-header",30),t.NdJ("dataChange",function(s){return n.eventHeader(s)}),t.qZA(),t.TgZ(53,"div",31)(54,"table",32)(55,"thead",33)(56,"tr",34)(57,"th",35),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(58,"Seq."),t.qZA(),t.TgZ(59,"th",36),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(60,"Process Name"),t.qZA(),t.TgZ(61,"th",37),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(62,"Machine/Device"),t.qZA(),t.TgZ(63,"th",38),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(64,"UoM"),t.qZA(),t.TgZ(65,"th"),t._uU(66,"Production"),t.qZA(),t.TgZ(67,"th",39),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(68,"Prod. Qty"),t.qZA(),t.TgZ(69,"th"),t._uU(70,"IPQA"),t.qZA(),t.TgZ(71,"th",40),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(72,"Release Qty"),t.qZA(),t.TgZ(73,"th",41),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(74,"Status"),t.qZA()()(),t.TgZ(75,"tbody"),t.YNc(76,nt,37,27,"tr",42),t.ALo(77,"slice"),t.ALo(78,"searchFi1ter"),t.qZA()()(),t._UZ(79,"hr",29),t.TgZ(80,"div",10)(81,"div",43)(82,"div",44)(83,"span",45),t._uU(84," Status "),t.qZA(),t.TgZ(85,"select",46)(86,"option",47),t._uU(87,"Select Status"),t.qZA(),t.TgZ(88,"option",48),t._uU(89,"In-Process"),t.qZA(),t.TgZ(90,"option",49),t._uU(91,"Mark As Completed"),t.qZA()(),t.TgZ(92,"span",50),t.YNc(93,ot,1,0,"div",51),t.YNc(94,it,1,0,"div",52),t.qZA()()(),t.TgZ(95,"div",53),t._UZ(96,"button",54),t.TgZ(97,"button",55),t.NdJ("click",function(){return n.openBatchInfoModal()}),t._uU(98,"Batch Info"),t.qZA()(),t.TgZ(99,"div",56),t.YNc(100,rt,2,0,"button",57),t.YNc(101,st,2,1,"button",58),t.YNc(102,at,2,0,"button",59),t.YNc(103,lt,2,1,"button",60),t.YNc(104,ct,3,0,"div",61),t.qZA()()()()),2&o&&(t.Q6J("formGroup",n.form),t.xp6(5),t.hij("Job Card Entry (",t.lcZ(6,16,n.action),") "),t.xp6(15),t.Q6J("items",n.masterData.JCOptions)("clearable",!1),t.xp6(24),t.s9C("value",t.lcZ(45,18,n.form.controls.UOM.value)),t.xp6(8),t.Q6J("data",t.l5B(27,dt,n.page,n.pageSize,n.collection,n.search)),t.xp6(24),t.Q6J("ngForOf",t.Dn7(77,20,t.xi3(78,24,n.JCEntryDetailsList,n.search),(n.page-1)*n.pageSize,(n.page-1)*n.pageSize+n.pageSize))("ngForTrackBy",n.trackByFn),t.xp6(10),t.Q6J("value",null),t.xp6(7),t.Q6J("ngIf","In-Process"==n.form.value.status),t.xp6(1),t.Q6J("ngIf","Mark As Completed"==n.form.value.status),t.xp6(6),t.Q6J("ngIf",!t.DdM(32,C).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(33,C).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(34,C).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(35,pt).includes(n.action)),t.xp6(1),t.Q6J("ngIf","approve"==n.action))},dependencies:[d.sg,d.O5,T.P,b._L,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.Wl,a.EJ,a.JJ,a.JL,a.sg,a.u,a.On,P.w9,f.j,d.OU,d.JJ,d.rS,j.G,K.W,Y.Q],encapsulation:2})}return r})();var ht=l(19964),mt=l(56208);const _t=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:I},{path:"form",component:ut,resolve:{accessScreen:ht.xr}}];let gt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[d.ez,_.Bz.forChild(_t),mt.m]})}return r})()}}]);