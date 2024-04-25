"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6506],{26506:(rt,_,l)=>{l.r(_),l.d(_,{JobCardModule:()=>ot});var p=l(96814),h=l(1076),m=l(43818),D=l(25116);const Z=[{value:"jobCardNo",label:"JC No.",class:""},{value:"jobCardDate",label:"JC Date",class:""},{value:"SKUNo",label:"SKU No.",class:""},{value:"SKUName",label:"SKU Name",class:"text-start"},{value:"SKUDescription",label:"SKU Description",class:"text-start"},{value:"batchQty",label:"Batch Qty.",class:""},{value:"customerName",label:"Customer/Prospect Nick Name",class:"text-start"},{value:"status",label:"Status",class:""}];var u=l(13107),U=l(28402);let A=["*","*","*","*","*","*","*","*"],y="Job Card",T=[{header:"JC No.",key:"jobCardNo",...u.t},{header:"JC Date",key:"jobCardDate",...u.t},{header:"SKU No.",key:"SKUNo",...u.t},{header:"SKU Name",key:"SKUName",...u.t},{header:"SKU Description",key:"SKUDescription",...u.t},{header:"Batch Qty.",key:"batchQty",...u.t},{header:"Customer/Prospect Nick Name",key:"customerNickName",...u.t},{header:"Status",key:"status",...u.t}];var t=l(65879),d=l(98977),J=l(99007),N=l(88059),f=l(37285),k=l(53421);function w(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"th",14),t.NdJ("sort",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.onSort(a))}),t._uU(1),t.qZA()}if(2&n){const e=c.$implicit;t.Tol(e.class),t.Q6J("sortable",e.value),t.xp6(1),t.hij(" ",e.label," ")}}const g=function(){return["Approved","Report Generated","Cancelled"]},K=function(){return["Awaiting Approval","Report Generated","Cancelled"]};function F(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",15,16)(9,"span",17),t._uU(10),t.qZA()(),t.TgZ(11,"td",15,18)(13,"span",17),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td",15,19)(19,"span",17),t._uU(20),t.qZA()(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"div",20),t._UZ(25,"button",21),t.TgZ(26,"div",22)(27,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"view"))}),t._UZ(28,"i",24),t._uU(29," View "),t.qZA(),t.TgZ(30,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"edit"))}),t._UZ(31,"i",25),t._uU(32," Edit "),t.qZA(),t.TgZ(33,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"cancel"))}),t._UZ(34,"i",26),t._uU(35," Cancel "),t.qZA(),t.TgZ(36,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"approve"))}),t._UZ(37,"i",27),t._uU(38," Approve "),t.qZA(),t.TgZ(39,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.update(o,"Report Generated"))}),t._UZ(40,"img",28),t._uU(41," Generate Report "),t.qZA(),t.TgZ(42,"a",23),t.NdJ("click",function(){const o=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateToPrint("/#/print/job_card_print",o,"pdf"))}),t._UZ(43,"i",29),t._uU(44," Preview JC "),t.qZA()()()()()}if(2&n){const e=c.$implicit,i=t.MAs(8),a=t.MAs(12),o=t.MAs(18),r=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.jobCardNo),t.xp6(2),t.Oqu(null==e?null:e.jobCardDate),t.xp6(2),t.Oqu(null==e?null:e.SKUNo),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.SKUName),t.xp6(1),t.hij(" ",e.SKUName?e.SKUName:null," "),t.xp6(1),t.Udp("width",a.clientWidth),t.xp6(2),t.Q6J("positionTarget",a)("ngbTooltip",e.SKUDescription),t.xp6(1),t.hij(" ",e.SKUDescription?e.SKUDescription:null," "),t.xp6(2),t.Oqu(null==e?null:e.batchQty),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.customerNickName),t.xp6(1),t.hij(" ",e.customerNickName?e.customerNickName:null," "),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",r.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable",t.DdM(34,g).includes(e.status)),t.Q6J("accessType",r.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable",t.DdM(35,g).includes(e.status)),t.Q6J("accessType",r.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable",t.DdM(36,g).includes(e.status)),t.Q6J("accessType",r.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable",t.DdM(37,K).includes(e.status)),t.Q6J("accessType",r.rolePermissionActions.generateReportAction),t.xp6(3),t.Q6J("accessType",r.rolePermissionActions.generateReportAction)}}const Q=function(n,c,e,i){return{page:n,pageSize:c,collection:e,search:i,type:"list"}};let O=(()=>{class n{constructor(e,i,a,o,r,b,C,v){this.exportExcelService=e,this.jobCardCreationService=i,this.toastService=a,this.spinner=o,this.activatedRoute=r,this.exportToPDFService=b,this.utilityService=C,this.appGlobalService=v,this.page=1,this.pageSize=8,this.collection=0,this.column="jobCardNo",this.direction=-1,this.search="",this.tableData=[],this.tableHead=Z,this.businessLeadsMenuItemId="64a6c1e33339d4dc9d8141a2",this.rolePermissionActions=D.a1,this.menuItemId="",this.orderType=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}navigateTo(e,i,a){this.utilityService.navigateToForm({path:e,status:i.status,action:a,id:i._id,activatedRoute:this.activatedRoute})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}navigateToPrint(e,i,a){window.open(`${window.location.origin}${e}?id=${i?._id}&action=${a}`,"_blank")}update(e,i){"Approved"===e?.status&&(this.spinner.show(),this.jobCardCreationService.update(e._id,{_id:e._id,status:i}).subscribe(a=>{this.toastService.success(a.message),this.getAll(),this.spinner.hide()}))}getAll(e=!1,i=""){this.menuItemId==this.businessLeadsMenuItemId&&(this.orderType="NPD"),this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,orderType:this.orderType,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.jobCardCreationService.getAll(a).subscribe(o=>{"EXCEL"==i?this.excelDownload(o.rows):"PDF"==i?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(n=>(0,U.J)({data:n,headers:T,widths:A,title:y}))(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((n=>({title:y,csvData:n,headers:T}))(e))}onSort({column:e,direction:i}){this.headers.forEach(a=>{a.sortable!==e&&(a.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(d.Ol),t.Y36(J.s2),t.Y36(d.kl),t.Y36(d.V),t.Y36(h.gz),t.Y36(d.$L),t.Y36(d.tI),t.Y36(d.P0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-job-card-list"]],viewQuery:function(i,a){if(1&i&&t.Gf(m.j,5),2&i){let o;t.iGM(o=t.CRH())&&(a.headers=o)}},decls:19,vars:10,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],[3,"class","sortable","sort",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"sortable","sort"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["customerNickName",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa","fa-times","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","text-success"],["src","./assets/images/new.svg","width","14",1,"me-3"],["aria-hidden","true",1,"fa","fa-print","fa-lg","me-3","text-primary"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3," Job Card Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return a.navigateTo("../form",{},"create")}),t._uU(7," Create Job Card "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return a.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11),t.YNc(14,w,2,4,"th",12),t.TgZ(15,"th"),t._uU(16,"Action"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,F,45,38,"tr",13),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",a.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(5,Q,a.page,a.pageSize,a.collection,a.search)),t.xp6(4),t.Q6J("ngForOf",a.tableHead),t.xp6(4),t.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[p.sg,N.P,f._L,m.j,k.J],encapsulation:2})}return n})();var s=l(60095),P=l(21631),M=l(22096),S=l(6573),j=l(35469),B=l(77609),Y=l(16897),q=l(50363),R=l(52464);function L(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"option",40),t._uU(2),t.qZA(),t.BQk()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function E(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"option",40),t._uU(2),t.qZA(),t.BQk()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.label," ")}}function V(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"option",40),t._uU(2),t.qZA(),t.BQk()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function G(n,c){if(1&n&&(t.ynx(0),t.TgZ(1,"option",40),t._uU(2),t.qZA(),t.BQk()),2&n){const e=c.$implicit;t.xp6(1),t.Q6J("value",e.parameterName),t.xp6(1),t.hij(" ",e.parameterLabel," ")}}function H(n,c){if(1&n&&(t.TgZ(0,"div",41)(1,"div",42)(2,"div",43),t._uU(3,"NPD Input "),t.TgZ(4,"span"),t._uU(5,"\u25b6"),t.qZA()(),t.TgZ(6,"select",44)(7,"option",11),t._uU(8,"Select"),t.qZA(),t.YNc(9,G,3,2,"ng-container",12),t.qZA()()()),2&n){const e=t.oxw();t.xp6(7),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.masterData.NPDInputs)("ngForTrackBy",e.trackByFn)}}function $(n,c){1&n&&(t.TgZ(0,"div",45)(1,"div",42)(2,"div",43),t._uU(3," Reason for Cancellation"),t.TgZ(4,"span",46),t._uU(5,"*"),t.qZA(),t.TgZ(6,"span"),t._uU(7,"\u25b6"),t.qZA()(),t._UZ(8,"input",47),t.qZA()())}function z(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",48)(1,"button",49),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",50),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",51),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.preview())}),t._uU(6,"Preview"),t.qZA(),t.TgZ(7,"button",52),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.submit())}),t._uU(8," Save "),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("disabled",!e.isESCPreview),t.xp6(4),t.Q6J("disabled",!e.isPreview)}}function X(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",53)(1,"button",54),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.openCancelModal())}),t._uU(2,"Cancel"),t.qZA()()}}function W(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",53)(1,"button",54),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.submit())}),t._uU(2,"Approve"),t.qZA()()}}const tt=function(){return["create","edit"]};let et=(()=>{class n{trackByFn(e,i){return i?._id}get f(){return this.form.controls}get batchInfo(){return this.form.get("batchInfo")}constructor(e,i,a,o,r,b,C,v,st){this.activatedRoute=e,this.spinner=i,this.toastService=a,this.jobCardCreationService=o,this.validationService=r,this.modalService=b,this.utilityService=C,this.location=v,this.appGlobalService=st,this.page=1,this.pageSize=6,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.SKUDetailsOfJC=[],this.customers=[],this.customerOptions=[],this.submitted=!1,this.isPreview=!1,this.action="create",this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",cancel:"Cancelled"},this.ESCPreviewArr=[],this.isESCPreview=!1,this.itemDetailsList=[],this.masterData={autoIncrementNo:"",companyType:"",orderTypes:[],stages:[],salesCategory:[],NPDInputs:[]},this.totalBatchQuantity=0,this.menuItemId="",this.businessLeadsMenuItemId="64a6c1e33339d4dc9d8141a2",this.planningMenuItemId="64a6c1e33339d4dc9d8141a4",this.form=new s.nJ({_id:new s.p4(null),stage:new s.p4(null,[s.kI.required]),jobCardNo:new s.p4(null,[s.kI.required]),jobCardDate:new s.p4(null,[s.kI.required]),customerCategory:new s.p4(null,[s.kI.required]),reference:new s.p4(null,[s.kI.required]),referenceModel:new s.p4(null),orderType:new s.p4(null,[s.kI.required]),SKUDetails:new s.p4([]),batchInfo:new s.nJ({totalBatchQuantity:new s.p4(null),manufacturingDate:new s.p4(null),batchNumber:new s.p4(null)}),NPDInput:new s.p4(null),status:new s.p4("Awaiting Approval"),JCCancellationReason:new s.p4(null),customerName:new s.p4(null)})}ngOnInit(){this.menuItemId=this.appGlobalService.menuItemId,this.getInitialData()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}submit(){if(this.submitted=!0,this.isPreview=!1,this.validationService.checkErrors(this.form,j.eT))return;if("cancel"==this.action&&!this.form.controls.JCCancellationReason.value)return this.toastService.warning("Reason for Cancellation is Required"),this.form.disable(),void this.form.controls.JCCancellationReason.enable();this.form.enable();let e=this.form.value;e.SKUDetails=this.SKUDetailsOfJC,e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.jobCardCreationService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}create(e){this.spinner.show(),this.jobCardCreationService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}reset(){this.form.reset(),this.SKUDetailsOfJC=[],this.collection=this.SKUDetailsOfJC.length,this.customerOptions=[],this.ESCPreviewArr=[],this.itemDetailsList=[],this.getInitialData()}getInitialData(){this.spinner.show(),this.jobCardCreationService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.f.jobCardNo.setValue(this.masterData.autoIncrementNo),this.batchInfo.controls.batchNumber.setValue(this.masterData.autoIncrementNo),this.f.jobCardDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.batchInfo.controls.manufacturingDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.f.status.setValue(this.statusArr[this.action]),this.menuItemId==this.businessLeadsMenuItemId&&(this.f.stage.setValue("Prototype"),this.f.stage.disable(),this.f.orderType.setValue("NPD"),this.f.orderType.disable()),this.activatedRoute.queryParams.pipe((0,P.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.jobCardCreationService.getById(i.id):(0,M.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(i.jobCardDate&&(i.jobCardDate=this.utilityService.getFormatDate(i?.jobCardDate,"YYYY-MM-DD")),i.batchInfo&&i.batchInfo.manufacturingDate&&(i.batchInfo.manufacturingDate=this.utilityService.getFormatDate(i.batchInfo.manufacturingDate,"YYYY-MM-DD")),this.SKUDetailsOfJC=i.SKUDetails,this.collection=this.SKUDetailsOfJC.length,this.SKUDetailsOfJC.length>0?this.getMRPData("SKU",this.SKUDetailsOfJC[0].SKU):this.itemDetailsList=[],i.status=this.statusArr[this.action],this.getCustomerOptions(i.stage,i.customerCategory,i),"create"!=this.action&&(this.form.disable(),this.form.controls.JCCancellationReason.enable()))})})}customerValueChange(e){this.SKUDetailsOfJC=[],this.collection=this.SKUDetailsOfJC.length,this.f.referenceModel.setValue(e?.referenceModel),this.f.customerName.setValue(e?.customerName),this.menuItemId==this.planningMenuItemId&&this.f.orderType.setValue(null),this.menuItemId==this.businessLeadsMenuItemId&&this.setTablesDetails()}setTablesDetails(){let e=this.f.stage.value,a=this.f.reference.value,o=this.f.orderType.value;if(!e||!this.f.customerCategory.value||!a)return this.toastService.warning("First Select Stage, Customer Category and Customer Name "),void this.f.orderType.setValue(null);this.spinner.show(),this.jobCardCreationService.getJCDetailsByCustomerId({customerId:a,orderType:o,stage:e}).subscribe(r=>{this.SKUDetailsOfJC=r,this.collection=this.SKUDetailsOfJC.length,this.spinner.hide()})}setStageDetails(){this.customerOptions=[],this.SKUDetailsOfJC=[],this.collection=this.SKUDetailsOfJC.length,this.f.customerCategory.setValue(null),this.f.orderType.setValue(null),this.f.reference.setValue(null)}getCustomers(){this.menuItemId==this.planningMenuItemId&&this.f.orderType.setValue(null),this.f.reference.setValue(null),this.customerOptions=[];let e=this.f.stage.value,i=this.f.customerCategory.value;if(!e)return this.toastService.warning("First Select Stage"),void this.f.customerCategory.setValue(null);this.SKUDetailsOfJC=[],this.collection=this.SKUDetailsOfJC.length,this.getCustomerOptions(e,i,null)}getCustomerOptions(e,i,a=null){this.spinner.show(),this.jobCardCreationService.getCustomersByCategory({stage:e,category:i}).subscribe(o=>{this.customerOptions=o,a&&this.form.patchValue(a),this.spinner.hide()})}ESCPreview(){this.search="",this.isPreview=!1,this.SKUDetailsOfJC=this.ESCPreviewArr,this.collection=this.SKUDetailsOfJC.length,this.isESCPreview=!1}getMRPData(e,i){this.jobCardCreationService.getBOMBySKUOrDSKU({type:e,SKUOrDSKUId:i}).subscribe(a=>{this.itemDetailsList=a||[],this.spinner.hide()})}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=[],this.ESCPreviewArr=this.SKUDetailsOfJC,this.SKUDetailsOfJC=this.SKUDetailsOfJC.filter(e=>e.batchQty>0),this.SKUDetailsOfJC.length>0?this.getMRPData("SKU",this.SKUDetailsOfJC[0].SKU):this.itemDetailsList=[],this.collection=this.SKUDetailsOfJC.length,this.SKUDetailsOfJC.length>0?this.isPreview=!0:(this.toastService.warning("At least One Row is Required"),this.isPreview=!1)}saveData(e){"totalBatchQuantity"==e.key&&this.batchInfo.controls.totalBatchQuantity.setValue(e.data),"totalBatchQuantitySKU"==e.key&&this.batchInfo.controls.totalBatchQuantity.setValue(e.data)}openBatchInfoModal(){this.totalBatchQuantity=this.SKUDetailsOfJC.map(i=>i.batchQty||0).reduce((i,a)=>+i+ +a,0),this.batchInfo.value.totalBatchQuantity=this.totalBatchQuantity;const e=this.modalService.open(S._0,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.batchInfo=this.batchInfo.value,e.componentInstance.action=this.action,e.componentInstance.totalBatchQuantity=this.totalBatchQuantity,e.result.then(i=>{i&&["create","edit"].includes(this.action)&&this.batchInfo.patchValue(i)},i=>{})}openViewMRPModal(){this.totalBatchQuantity=this.SKUDetailsOfJC.map(i=>i.batchQty||0).reduce((i,a)=>+i+ +a,0),this.batchInfo.value.totalBatchQuantity=this.totalBatchQuantity;const e=this.modalService.open(S.$G,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.batchInfo=this.batchInfo.value,e.componentInstance.action=this.action,e.componentInstance.totalBatchQuantity=this.totalBatchQuantity,e.componentInstance.itemDetailsList=this.itemDetailsList,e.result.then(i=>{i&&["create","edit"].includes(this.action)&&this.batchInfo.patchValue(i)},i=>{})}openCancelModal(){const e=this.modalService.open(B.er,{centered:!0,size:"sm",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.heading="JC Cancellation",e.componentInstance.cancelText="Do You Want to Cancel Job Card ?",e.result.then(i=>{"Yes"==i&&this.submit()},i=>{})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h.gz),t.Y36(d.V),t.Y36(d.kl),t.Y36(J.s2),t.Y36(Y.RJ),t.Y36(f.FF),t.Y36(d.tI),t.Y36(p.Ye),t.Y36(d.P0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-job-card-form"]],viewQuery:function(i,a){if(1&i&&t.Gf(m.j,5),2&i){let o;t.iGM(o=t.CRH())&&(a.headers=o)}},decls:77,vars:27,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-5"],[1,"form-label","mb-0"],[1,"text-danger"],["formControlName","stage",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-7","px-0"],[1,"col-6","pe-3"],["type","text","formControlName","jobCardNo","readonly","",1,"form-control"],[1,"col-6","ps-3"],["type","date","formControlName","jobCardDate",1,"form-control"],[1,"col-7"],[1,"col-4"],["formControlName","customerCategory",1,"form-select",3,"change"],[1,"col-5","ps-0"],["bindLabel","customerName","bindValue","reference","formControlName","reference",3,"items","clearable","change"],[1,"col-3","ps-0"],[1,"form-label"],["formControlName","orderType",1,"form-select",3,"change"],[1,"row","line-border"],[1,"table-responsive","text-wrap",2,"min-height","22.5rem"],[3,"SKUDetailsOfJC","action","collection","orderType","saveData"],[1,"row","line-border","mt-3"],[1,"row","align-items-center"],[1,"col-3"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","px-3","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-4",3,"disabled","click"],["class","col-3 px-0",4,"ngIf"],["class","col pe-0",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","content-end",4,"ngIf"],[3,"value"],[1,"col-3","px-0"],[1,"d-flex","justify-content-center","align-items-center"],[1,"col-form-label","text-nowrap"],["formControlName","NPDInput",1,"form-select","mx-2"],[1,"col","pe-0"],[1,"text-danger","me-2"],["type","text","formControlName","JCCancellationReason",1,"form-control","mx-2"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"content-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(i,a){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",7)(12,"label",8),t._uU(13," Stage"),t.TgZ(14,"span",9),t._uU(15,"*"),t.qZA()(),t.TgZ(16,"select",10),t.NdJ("change",function(){return a.setStageDetails()}),t.TgZ(17,"option",11),t._uU(18,"Select"),t.qZA(),t.YNc(19,L,3,2,"ng-container",12),t.qZA()(),t.TgZ(20,"div",13)(21,"div",6)(22,"div",14)(23,"label",8),t._uU(24," Job Card No. "),t.TgZ(25,"span",9),t._uU(26,"*"),t.qZA()(),t._UZ(27,"input",15),t.qZA(),t.TgZ(28,"div",16)(29,"label",8),t._uU(30," Job Card Date "),t.TgZ(31,"span",9),t._uU(32,"*"),t.qZA()(),t._UZ(33,"input",17),t.qZA()()()()(),t.TgZ(34,"div",18)(35,"div",6)(36,"div",19)(37,"label",8),t._uU(38," Customer Category "),t.TgZ(39,"span",9),t._uU(40,"*"),t.qZA()(),t.TgZ(41,"select",20),t.NdJ("change",function(){return a.getCustomers()}),t.TgZ(42,"option",11),t._uU(43,"Select"),t.qZA(),t.YNc(44,E,3,2,"ng-container",12),t.qZA()(),t.TgZ(45,"div",21)(46,"label",8),t._uU(47),t.TgZ(48,"span",9),t._uU(49,"*"),t.qZA()(),t.TgZ(50,"ng-select",22),t.NdJ("change",function(r){return a.customerValueChange(r)}),t.qZA()(),t.TgZ(51,"div",23)(52,"label",24),t._uU(53," Order Type "),t.TgZ(54,"span",9),t._uU(55,"*"),t.qZA()(),t.TgZ(56,"select",25),t.NdJ("change",function(){return a.setTablesDetails()}),t.TgZ(57,"option",11),t._uU(58,"Select Order Type"),t.qZA(),t.YNc(59,V,3,2,"ng-container",12),t.qZA()()()()()(),t._UZ(60,"hr",26),t.TgZ(61,"div",27)(62,"app-job-card-sku-details-table",28),t.NdJ("saveData",function(r){return a.saveData(r)}),t.qZA()(),t._UZ(63,"hr",29),t.TgZ(64,"div",30)(65,"div",31),t._UZ(66,"button",32),t.TgZ(67,"button",33),t.NdJ("click",function(){return a.openBatchInfoModal()}),t._uU(68," Batch Info "),t.qZA(),t.TgZ(69,"button",34),t.NdJ("click",function(){return a.openViewMRPModal()}),t._uU(70," View MRP "),t.qZA()(),t.YNc(71,H,10,3,"div",35),t.YNc(72,$,9,0,"div",36),t.TgZ(73,"div",37),t.YNc(74,z,9,2,"div",38),t.YNc(75,X,3,0,"div",39),t.YNc(76,W,3,0,"div",39),t.qZA()()()()),2&i&&(t.Q6J("formGroup",a.form),t.xp6(5),t.hij(" Job Card Creation (",t.lcZ(6,24,a.action),")"),t.xp6(12),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",a.masterData.stages)("ngForTrackBy",a.trackByFn),t.xp6(23),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",a.masterData.salesCategory)("ngForTrackBy",a.trackByFn),t.xp6(3),t.hij(" ","Prototype"==a.form.controls.stage.value?"Customer/Prospect":"Customer"," Name "),t.xp6(3),t.Q6J("items",a.customerOptions)("clearable",!1),t.xp6(7),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",a.masterData.orderTypes)("ngForTrackBy",a.trackByFn),t.xp6(3),t.Q6J("SKUDetailsOfJC",a.SKUDetailsOfJC)("action",a.action)("collection",a.collection)("orderType",a.f.orderType.value),t.xp6(7),t.Q6J("disabled",0==a.itemDetailsList.length),t.xp6(2),t.Q6J("ngIf","Printing Industry"==a.masterData.companyType),t.xp6(1),t.Q6J("ngIf","cancel"==a.action),t.xp6(2),t.Q6J("ngIf",t.DdM(26,tt).includes(a.action)),t.xp6(1),t.Q6J("ngIf","cancel"==a.action),t.xp6(1),t.Q6J("ngIf","approve"==a.action))},dependencies:[p.sg,p.O5,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,q.w9,R.U,p.rS],encapsulation:2})}return n})();var it=l(19964),at=l(56208);const nt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:O},{path:"form",component:et,resolve:{accessScreen:it.xr}}];let ot=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({providers:[f.Kz],imports:[p.ez,h.Bz.forChild(nt),at.m]})}return n})()}}]);