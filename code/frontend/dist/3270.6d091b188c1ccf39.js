"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3270],{73270:(A,_,c)=>{c.r(_),c.d(_,{GRLModule:()=>it});var r=c(1076),p=c(43818),y=c(25116),g=c(83110),t=c(65879),m=c(99328),v=c(23396),f=c(88059),h=c(96814),C=c(53421);function P(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",19),t._uU(8),t.qZA(),t.TgZ(9,"td",19),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",20),t._UZ(15,"button",21),t.TgZ(16,"div",22)(17,"a",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"view"))}),t._UZ(18,"i",24),t._uU(19," View "),t.qZA(),t.TgZ(20,"a",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"edit"))}),t._UZ(21,"i",25),t._uU(22," Edit "),t.qZA(),t.TgZ(23,"a",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"approve"))}),t._UZ(24,"i",26),t._uU(25," Approve "),t.qZA(),t.TgZ(26,"a",23),t.NdJ("click",function(){const n=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"reject"))}),t._UZ(27,"i",27),t._uU(28," Reject "),t.qZA()()()()()}if(2&s){const e=u.$implicit,o=t.oxw();t.xp6(2),t.Oqu(e.GRNumber),t.xp6(2),t.Oqu(e.GRDateS),t.xp6(2),t.Oqu(e.deliveryLocation),t.xp6(2),t.Oqu(e.department),t.xp6(2),t.Oqu(e.salesOrderSKUReference),t.xp6(2),t.Oqu(e.GRStatus),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==e?null:e.GRStatus)||"Rejected"===(null==e?null:e.GRStatus)),t.Q6J("accessType",o.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"===(null==e?null:e.GRStatus)||"Rejected"===(null==e?null:e.GRStatus)),t.Q6J("accessType",o.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Approved"===(null==e?null:e.GRStatus)||"Rejected"===(null==e?null:e.GRStatus)),t.Q6J("accessType",o.rolePermissionActions.approveAction)}}const J=function(s,u,e,o){return{page:s,pageSize:u,collection:e,search:o,type:"list"}};let Q=(()=>{class s{constructor(e,o,i,n,a,R){this.spinner=e,this.goodReqService=o,this.exportExcelService=i,this.activatedRoute=n,this.exportToPDFService=a,this.utilityService=R,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=y.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,o,i){this.utilityService.navigateToForm({path:e,status:o.GRStatus,action:i,id:o._id,activatedRoute:this.activatedRoute})}trackByFn(e,o){return o?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,o=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.goodReqService.getAll(i).subscribe(n=>{"EXCEL"==o?this.excelDownload(n.rows):"PDF"==o?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let o=(0,g.oO)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){this.exportExcelService.exportExcel((0,g.rv)(e))}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(m.V),t.Y36(v.Rm),t.Y36(m.Ol),t.Y36(r.gz),t.Y36(m.$L),t.Y36(m.tI))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-list"]],viewQuery:function(o,i){if(1&o&&t.Gf(p.j,5),2&o){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNumber",3,"sort"],["sortable","GRDateS",3,"sort"],["sortable","deliveryLocation",3,"sort"],["sortable","department",1,"text-start",3,"sort"],["sortable","salesOrderSKUReference",1,"text-start",3,"sort"],["sortable","GRStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","me-2","text-success"],["aria-hidden","true",1,"fa","fa-close","me-3","text-primary"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Goods Requisition Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),t._uU(7," Create Goods Requisition "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return i.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(15,"GR No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(17,"GR Date"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(19,"Location (Store)"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(21,"Department"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(23," Order Reference "),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(25,"Status"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,P,29,16,"tr",18),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,J,i.page,i.pageSize,i.collection,i.search)),t.xp6(19),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[f.P,h.sg,p.j,C.J],encapsulation:2})}return s})();var d=c(60095),b=c(21631),M=c(22096),E=c(77609),L=c(68922),D=c(16857),T=c(37285),Y=c(95346),j=c(59103);function K(s,u){if(1&s&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&s){const e=u.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.label," ")}}function S(s,u){if(1&s&&(t.TgZ(0,"option",41),t._uU(1),t.qZA()),2&s){const e=u.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Z(s,u){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.GRQty)}}const k=function(){return{standalone:!0}};function tt(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"input",48),t.NdJ("input",function(){t.CHM(e);const i=t.oxw().$implicit,n=t.oxw();return t.KtG(n.setGRQty(i))})("ngModelChange",function(i){t.CHM(e);const n=t.oxw().$implicit;return t.KtG(n.GRQty=i)}),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("ngModel",e.GRQty)("ngModelOptions",t.DdM(2,k))}}const G=function(){return["view","approve","reject"]};function O(s,u){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",42,43)(7,"span",44),t._uU(8),t.qZA()(),t.TgZ(9,"td",42,45)(11,"span",44),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"UOMUnitsMaster"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"div",46),t.YNc(22,Z,2,1,"span",40),t.YNc(23,tt,1,3,"input",47),t.qZA()()()),2&s){const e=u.$implicit,o=t.MAs(6),i=t.MAs(10),n=t.oxw();t.xp6(2),t.Oqu(e.GRLineNumber),t.xp6(2),t.Oqu(e.itemCode),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.itemName),t.xp6(1),t.hij(" ",null==e?null:e.itemName," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.itemDescription),t.xp6(1),t.hij(" ",null==e?null:e.itemDescription," "),t.xp6(2),t.Oqu(e.conversionOfUnits),t.xp6(2),t.Oqu(t.lcZ(17,17,e.primaryUnit)),t.xp6(3),t.Oqu(e.closedIRQty),t.xp6(3),t.Q6J("ngIf",t.DdM(19,G).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(20,G).includes(n.action))}}function U(s,u){if(1&s&&(t.TgZ(0,"div",49)(1,"div",50)(2,"div",51)(3,"button",52),t._uU(4,"Order Reference"),t.qZA()(),t._UZ(5,"input",53),t.qZA()()),2&s){const e=t.oxw();t.Q6J("ngClass","create"===e.action?"col-8":"col-6")}}function H(s,u){if(1&s&&(t.TgZ(0,"div",49)(1,"div",50)(2,"div",51)(3,"button",52),t._uU(4,"Order Reference"),t.qZA()(),t._UZ(5,"input",53),t.qZA()()),2&s){const e=t.oxw();t.Q6J("ngClass","edit"===e.action?"col-8":"col")}}function B(s,u){1&s&&(t.TgZ(0,"div",54)(1,"div",55)(2,"button",52),t._uU(3,"Rejection Remarks"),t.qZA(),t._UZ(4,"input",56),t.qZA()())}function z(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div",57)(1,"button",58),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",59),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.ESCPreview())}),t._uU(4," Esc Preview "),t.qZA(),t.TgZ(5,"button",60),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.preview())}),t._uU(6,"Preview"),t.qZA(),t.TgZ(7,"button",61),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(8," Save "),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("disabled",!e.isESCPreview),t.xp6(4),t.Q6J("disabled",!e.isPreview)}}function N(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div",62)(1,"button",63),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Save"),t.qZA()()}}function x(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div",62)(1,"button",63),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Reject"),t.qZA()()}}function $(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div",64)(1,"button",63),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Approve"),t.qZA()()}}function V(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"button",63),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.navigateTo("../list",{},""))}),t._uU(2," Back "),t.qZA()()}}const F=function(){return["create"]},q=function(s,u,e,o){return{page:s,pageSize:u,collection:e,search:o}},w=function(){return["view"]};let X=(()=>{class s{constructor(e,o,i,n,a,R,I,ot,rt,nt,st,at){this.goodReqService=e,this.router=o,this.activatedRoute=i,this.spinner=n,this.menuTitleService=a,this.toastService=R,this.validationService=I,this.modalService=ot,this.utilityService=rt,this.storageService=nt,this.exportExcelService=st,this.location=at,this.isPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=6,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.GRDetailsArray=[],this.itemCodes=[],this.ESCPreviewArr=[],this.itemCategory="",this.itemGroup="",this.userData={},this.statusArr={create:"Opened",edit:"Opened",approve:"Approved",reject:"Rejected"},this.masterData={autoIncrementNo:"",itemCategoryOptions:[],locationOptions:[]},this.form=new d.nJ({_id:new d.p4(null),GRNumber:new d.p4("",[d.kI.required]),GRDate:new d.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[d.kI.required]),GRStatus:new d.p4("Opened",[d.kI.required]),salesOrderSKUReference:new d.p4(""),deliveryLocation:new d.p4(null,[d.kI.required]),department:new d.p4(""),remarks:new d.p4(""),GRDetails:new d.p4([])})}ngOnInit(){this.userData=this.storageService.get("IDMSAUser"),this.getInitialData(),this.menuTitleService.set({title:"Goods Requisition",subTitle:null,type:this.action})}trackByFn(e,o){return o?._id}reset(){this.itemCategory="",this.itemGroup="",this.form.reset(),this.GRDetailsArray=[],this.collection=this.GRDetailsArray.length,this.getInitialData()}submit(){if(this.submitted=!0,"reject"==this.action&&!this.form.controls.remarks.value)return void this.toastService.warning("Remarks is Required");if(this.form.enable(),this.validationService.checkErrors(this.form,L.T))return;if("reject"==this.action&&!this.form.controls.remarks.value)return void this.toastService.warning("Remarks is Required");let e=this.form.value;e.GRDetails=this.GRDetailsArray,e._id?this.update(e):(delete e._id,this.create(e))}navigateTo(e,o,i){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:o,action:i}})}create(e){this.spinner.show(),this.goodReqService.create(e).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.itemCodes=o.itemCodes,this.location.back(),this.openAlertMessageModal()})}update(e){this.spinner.show(),this.goodReqService.update(e._id,e).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.location.back()})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":this.exportExcelService.exportExcel((0,g.yz)(this.GRDetailsArray));break;case"PAGE":this.page=e.value}}setGRQty(e){e.GRQty>e.closedIRQty&&this.toastService.warning("GR Qty Should not be greater than IR Qty. !")}getInitialData(){this.spinner.show(),this.goodReqService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.GRNumber.setValue(this.masterData.autoIncrementNo),this.form.controls.GRDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.deliveryLocation.setValue(null),this.form.controls.department.setValue(this.userData?.departmentName),this.form.controls.GRStatus.setValue("Opened"),this.activatedRoute.queryParams.pipe((0,b.z)(o=>(this.action=o.action,this.utilityService.accessDenied(this.action),o.id?this.goodReqService.getById(o.id):(0,M.of)({})))).subscribe(o=>{this.spinner.hide(),0!=Object.keys(o).length&&(this.GRDetailsArray=o.GRDetails.map((i,n)=>(0==n&&(this.itemCategory=i?.item?.itemType,this.itemGroup=i?.item?.itemSubCategory),{GRLineNumber:n+1,primaryUnit:i.primaryUnit,GRQty:i.GRQty,closedIRQty:i.closedIRQty,balancedQty:i.GRQty,item:i?.item?._id,itemName:i?.item?.itemName,itemCode:i?.item?.itemCode,itemDescription:i?.item?.itemDescription,conversionOfUnits:i?.item?.conversionOfUnits,GRLineStatus:"Opened"})),this.collection=this.GRDetailsArray.length,o.GRDate&&(o.GRDate=o?.GRDate.split("T")[0]),o.GRStatus=this.statusArr[this.action],this.form.patchValue(o),"create"!=this.action&&(this.form.disable(),"edit"==this.action&&this.form.controls.salesOrderSKUReference.enable(),"reject"==this.action&&this.form.controls.remarks.enable()))}),this.menuTitleService.set({title:"Goods Requisition",subTitle:null,type:null})})}openAlertMessageModal(){if(this.itemCodes.length>0){const e=this.modalService.open(E.HF,{centered:!0,size:"md",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.alertMessage=`Dear GR Creator, it has been noticed that material you requested having Item Code No: ${this.itemCodes} are not presently available in store`,e.componentInstance.itemCodes=this.itemCodes,e.result.then(o=>{["create","edit"].includes(this.action)&&(this.itemCodes=o)},o=>{})}}getData(){this.spinner.show(),this.isESCPreview=!1,this.isPreview=!1,this.goodReqService.getAllFilterData({itemCategory:this.itemGroup,itemGroup:this.itemCategory,page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction}).subscribe(o=>{this.GRDetailsArray=o?.map((i,n)=>({GRLineNumber:n+1,primaryUnit:i.primaryUnit,issueQty:0,GRQty:0,closedIRQty:i.closedIRQty,balancedQty:0,item:i._id,itemName:i.itemName,itemCode:i.itemCode,itemDescription:i.itemDescription,conversionOfUnits:i.conversionOfUnits,GRLineStatus:"Opened"})),this.collection=this.GRDetailsArray.length,this.spinner.hide()})}preview(){this.search="",this.isPreview=!0,this.isESCPreview=!0,this.ESCPreviewArr=this.GRDetailsArray,this.GRDetailsArray=this.GRDetailsArray.filter(e=>e.GRQty>0),this.collection=this.GRDetailsArray.length}ESCPreview(){this.search="",this.isPreview=!1,this.GRDetailsArray=this.ESCPreviewArr,this.collection=this.GRDetailsArray.length}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.GRDetailsArray=""===o||""===e?this.GRDetailsArray:[...this.GRDetailsArray].sort((i,n)=>{let a="string"==typeof i[e]?i[e].toLowerCase():i[e],R="string"==typeof n[e]?n[e].toLowerCase():n[e];const I=a<R?-1:a>R?1:0;return"asc"===o?I:-I})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(v.Rm),t.Y36(r.F0),t.Y36(r.gz),t.Y36(m.V),t.Y36(m.Uh),t.Y36(m.kl),t.Y36(D.R),t.Y36(T.FF),t.Y36(m.tI),t.Y36(m.V1),t.Y36(m.Ol),t.Y36(h.Ye))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-form"]],viewQuery:function(o,i){if(1&o&&t.Gf(p.j,5),2&o){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:76,vars:36,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label","mb-2"],["type","text","formControlName","GRNumber","readonly","",1,"form-control"],["type","date","formControlName","GRDate",1,"form-control"],[1,"text-danger"],["formControlName","deliveryLocation",1,"form-select"],["selected","","disabled","","value","null"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","department","readonly","",1,"form-control"],[1,"form-select",3,"ngModel","ngModelOptions","disabled","change","ngModelChange"],["selected","","disabled","","value",""],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","23rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","GRLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","conversionOfUnits",3,"sort"],["sortable","primaryUnit",3,"sort"],["sortable","closedIRQty",3,"sort"],["sortable","GRQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mb-0"],[3,"ngClass",4,"ngIf"],["class","col pe-5",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","text-end",4,"ngIf"],["class","col-5 text-end",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","input","ngModelChange"],[3,"ngClass"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["type","text","formControlName","salesOrderSKUReference",1,"form-control"],[1,"col","pe-5"],[1,"d-flex","align-items-center","text-nowrap"],["type","text","formControlName","remarks",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-5","text-end"]],template:function(o,i){1&o&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),t._uU(11,"Goods Requisition No."),t.qZA(),t._UZ(12,"input",9),t.qZA(),t.TgZ(13,"div",7)(14,"label",8),t._uU(15,"Goods Requisition Date"),t.qZA(),t._UZ(16,"input",10),t.qZA(),t.TgZ(17,"div",7)(18,"label",8),t._uU(19," Location (Store)"),t.TgZ(20,"span",11),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"select",12)(23,"option",13),t._uU(24,"Select Location"),t.qZA(),t.YNc(25,K,2,2,"option",14),t.qZA()(),t.TgZ(26,"div",7)(27,"label",8),t._uU(28," Department"),t.qZA(),t._UZ(29,"input",15),t.qZA(),t.TgZ(30,"div",7)(31,"label",8),t._uU(32," Item Category"),t.qZA(),t.TgZ(33,"select",16),t.NdJ("change",function(){return i.getData()})("ngModelChange",function(a){return i.itemCategory=a}),t.TgZ(34,"option",17),t._uU(35,"Select Item Category"),t.qZA(),t.YNc(36,S,2,2,"option",14),t.qZA()()(),t._UZ(37,"hr",18),t.TgZ(38,"app-setting-header",19),t.NdJ("dataChange",function(a){return i.eventHeader(a)}),t.qZA(),t.TgZ(39,"div",20)(40,"table",21)(41,"thead",22)(42,"tr",23)(43,"th",24),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(44,"#"),t.qZA(),t.TgZ(45,"th",25),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(46,"Item Code"),t.qZA(),t.TgZ(47,"th",26),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(48,"Item Name"),t.qZA(),t.TgZ(49,"th",27),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(50," Item Description "),t.qZA(),t.TgZ(51,"th",28),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(52,"Conversion of Units"),t.qZA(),t.TgZ(53,"th",29),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(54,"UoM"),t.qZA(),t.TgZ(55,"th",30),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(56,"IR Qty."),t.qZA(),t.TgZ(57,"th",31),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(58,"GR Qty."),t.qZA()()(),t.TgZ(59,"tbody"),t.YNc(60,O,24,21,"tr",32),t.ALo(61,"slice"),t.ALo(62,"searchFi1ter"),t.qZA()()(),t._UZ(63,"hr",18),t.TgZ(64,"div",33)(65,"div",7)(66,"div",6),t.YNc(67,U,6,1,"div",34),t.YNc(68,H,6,1,"div",34),t.YNc(69,B,5,0,"div",35),t.qZA()(),t.TgZ(70,"div",36),t.YNc(71,z,9,2,"div",37),t.YNc(72,N,3,0,"div",38),t.YNc(73,x,3,0,"div",38),t.YNc(74,$,3,0,"div",39),t.YNc(75,V,3,0,"div",40),t.qZA()()()()()),2&o&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("Goods Requisition (",t.lcZ(6,18,i.action),")"),t.xp6(20),t.Q6J("ngForOf",i.masterData.locationOptions),t.xp6(8),t.Q6J("ngModel",i.itemCategory)("ngModelOptions",t.DdM(27,k))("disabled",!t.DdM(28,F).includes(i.action)),t.xp6(3),t.Q6J("ngForOf",i.masterData.itemCategoryOptions),t.xp6(2),t.Q6J("data",t.l5B(29,q,i.page,i.pageSize,i.collection,i.search)),t.xp6(22),t.Q6J("ngForOf",t.Dn7(61,20,t.xi3(62,24,i.GRDetailsArray,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn),t.xp6(7),t.Q6J("ngIf","edit"!=i.action),t.xp6(1),t.Q6J("ngIf","edit"==i.action),t.xp6(1),t.Q6J("ngIf","reject"==i.action),t.xp6(2),t.Q6J("ngIf",t.DdM(34,F).includes(i.action)),t.xp6(1),t.Q6J("ngIf","edit"==i.action),t.xp6(1),t.Q6J("ngIf","reject"==i.action),t.xp6(1),t.Q6J("ngIf","approve"==i.action),t.xp6(1),t.Q6J("ngIf",t.DdM(35,w).includes(i.action)))},dependencies:[f.P,h.mk,h.sg,h.O5,T._L,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.sg,d.u,d.On,p.j,h.OU,h.rS,Y.G,j.S],encapsulation:2})}return s})();var W=c(56208);const et=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:Q},{path:"form",component:X,resolve:{accessScreen:c(65876).x}}];let it=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(et),W.m]})}return s})()},13107:(A,_,c)=>{c.d(_,{t:()=>r});const r={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(A,_,c)=>{c.d(_,{J:()=>r});const r=({data:p,headers:y,widths:g,title:t})=>({tableData:{widths:g,headerRows:1,body:[y.map(f=>({text:f.header,style:"header"})),...p.map(f=>y.map(h=>({style:"subheader",text:f[h.key]})))]},title:t})},83110:(A,_,c)=>{c.d(_,{yz:()=>k,oO:()=>v,rv:()=>m,cY:()=>W,ho:()=>X,R6:()=>B,M5:()=>H,MO:()=>V,GF:()=>$,YJ:()=>J,kQ:()=>P,Y3:()=>E,Wb:()=>M,i4:()=>j,mU:()=>Y});var r=c(13107),p=c(28402);let y=["*","*","*","*","*","*","*","*"],g="Goods Requisition",t=[{header:"GR No.",key:"GRNumber",...r.t},{header:"GR Date",key:"GRDateS",...r.t},{header:"Location (Store)",key:"deliveryLocation",...r.t},{header:"Department",key:"department",...r.t},{header:"Remarks/Order Reference",key:"salesOrderSKUReference",...r.t},{header:"Status",key:"GRStatus",...r.t}];const m=l=>({title:g,csvData:l,headers:t}),v=l=>(0,p.J)({data:l,headers:t,widths:y,title:g});let f=["*","*","*","*","*","*","*","*"],h="Child Part Production",C=[{header:"Process Name",key:"processName",...r.t},{header:"Machine Name",key:"machineName",...r.t},{header:"Prod. Date",key:"productionDate",...r.t},{header:"Shift",key:"productionShift",...r.t},{header:"Operating Staff",key:"operatingStaff",...r.t},{header:"Remarks",key:"remarks",...r.t},{header:"Status",key:"status",...r.t}];const P=l=>({title:h,csvData:l,headers:C}),J=l=>(0,p.J)({data:l,headers:C,widths:f,title:h});let Q=["*","*","*","*","*","*","*","*"],d="Gr. Child Part Production",b=[{header:"Process Name",key:"processName",...r.t},{header:"Machine Name",key:"machineName",...r.t},{header:"Prod. Date",key:"productionDate",...r.t},{header:"Shift",key:"productionShift",...r.t},{header:"Operating Staff",key:"operatingStaff",...r.t},{header:"Remarks",key:"remarks",...r.t},{header:"Status",key:"status",...r.t}];const M=l=>({title:d,csvData:l,headers:b}),E=l=>(0,p.J)({data:l,headers:b,widths:Q,title:d});let L=["*","*","*","*","*","*","*","*"],D="SKU Production",T=[{header:"Process Name",key:"processName",...r.t},{header:"Machine Name",key:"machineName",...r.t},{header:"Prod. Date",key:"productionDate",...r.t},{header:"Shift",key:"productionShift",...r.t},{header:"Operating Staff",key:"operatingStaff",...r.t},{header:"Remarks",key:"remarks",...r.t},{header:"Status",key:"status",...r.t}];const Y=l=>({title:D,csvData:l,headers:T}),j=l=>(0,p.J)({data:l,headers:T,widths:L,title:D});let Z=[{header:"#",key:"GRLineNumber",...r.t},{header:"Item Code",key:"itemCode",...r.t},{header:"Item Name",key:"itemName",...r.t},{header:"Item Description",key:"itemDescription",...r.t},{header:"Conversion Of Units",key:"conversionOfUnits",...r.t},{header:"UoM",key:"primaryUnit",...r.t},{header:"IR Qty.",key:"closedIRQty",...r.t},{header:"GR Qty.",key:"GRQty",...r.t}];const k=l=>({title:"Goods Requisition",csvData:l,headers:Z});let G=["*","*","*","*","*","*","*","*"],O="Ink Mixing",U=[{header:"JC No.",key:"jobCardNo",...r.t},{header:"F20 Ink Code",key:"itemCode",...r.t},{header:"F20 Ink Name",key:"itemName",...r.t},{header:"F20 Ink Description",key:"itemDescription",...r.t},{header:"UoM",key:"UOM",...r.t},{header:"Batch Qty.",key:"batchQty",...r.t},{header:"Batch Date",key:"batchDate",...r.t},{header:"Log Book Ref",key:"logBookRef",...r.t}];const H=l=>({title:O,csvData:l,headers:U}),B=l=>(0,p.J)({data:l,headers:U,widths:G,title:O});let z=["*","*","*","*","*","*","*"],N="Job Card Entry",x=[{header:"Job Card No",key:"jobCardNo",...r.t},{header:"SKU No",key:"SKUNo",...r.t},{header:"SKU Name",key:"SKUName",...r.t},{header:"SKU Description",key:"SKUDescription",...r.t},{header:"UoM",key:"UOM",...r.t},{header:"Batch I/P Qty.",key:"totalBatchQuantity",...r.t},{header:"Batch O/P Qty.",key:"batchOutputQty",...r.t},{header:"Batch Number",key:"batchNumber",...r.t},{header:"Status",key:"status",...r.t}];const $=l=>({title:N,csvData:l,headers:x}),V=l=>(0,p.J)({data:l,headers:x,widths:z,title:N});let F=["*","*","*","*","*","*"],q="Goods Transfer Request (Intra) Report",w=[{header:"GT Req #",key:"GTRequestNo",...r.t},{header:"GT Request Dt.",key:"GTRequestDate",...r.t},{header:"Location",key:"location",...r.t},{header:"From Department",key:"fromDepartment",...r.t},{header:"To Department",key:"toDepartment",...r.t},{header:"Status",key:"status",...r.t}];const X=l=>({title:q,csvData:l,headers:w}),W=l=>(0,p.J)({data:l,headers:w,widths:F,title:q})},68922:(A,_,c)=>{c.d(_,{T:()=>r});const r=[{message:"Location is Required",key:"deliveryLocation"}]}}]);