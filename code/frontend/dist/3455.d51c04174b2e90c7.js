"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3455],{43455:(b,A,u)=>{u.r(A),u.d(A,{ResolveDiscrepancyModule:()=>ot});var n=u(96814),m=u(1076),_=u(43818),R=u(99279),D=u(25116),t=u(65879),f=u(98977),I=u(73374),v=u(37285),l=u(88059),d=u(53421);function y(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",16),t._UZ(15,"button",17),t.TgZ(16,"div",18)(17,"a",19),t.NdJ("click",function(){const a=t.CHM(i).$implicit,g=t.oxw();return t.KtG(g.navigateTo("/default/quality/transactions/resolve_discrepancy/form",a,"view"))}),t._UZ(18,"i",20),t._uU(19," View "),t.qZA(),t.TgZ(20,"a",19),t.NdJ("click",function(){const a=t.CHM(i).$implicit,g=t.oxw();return t.KtG(g.navigateTo("/default/quality/transactions/resolve_discrepancy/form",a,"viewDSCR"))}),t._UZ(21,"i",21),t._uU(22," Resolve DSCR "),t.qZA()()()()()}if(2&p){const i=h.$implicit,s=t.oxw();t.xp6(2),t.Oqu(null==i?null:i.GRNumber),t.xp6(2),t.Oqu(null==i?null:i.GRDateS),t.xp6(2),t.Oqu(null==i?null:i.GIDateS),t.xp6(2),t.Oqu(null==i?null:i.deliveryLocation),t.xp6(2),t.Oqu(null==i?null:i.department),t.xp6(2),t.Oqu(null==i?null:i.GIStatus),t.xp6(5),t.Q6J("accessType",s.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Discrepancy Resolved"===(null==i?null:i.GIStatus)),t.Q6J("accessType",s.rolePermissionActions.approveAction)}}const r=function(p,h,i,s){return{page:p,pageSize:h,collection:i,search:s,type:"list",excelDisplay:"none"}};let e=(()=>{var p;class h{constructor(s,o,a,g,G,P){this.exportExcelService=s,this.goodIssue=o,this.router=a,this.spinner=g,this.activatedRoute=G,this.modalService=P,this.page=1,this.pageSize=10,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.status="Discrepancy",this.rolePermissionActions=D.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(s,o,a){if("Discrepancy Resolved"==o.GIStatus&&"viewDSCR"==a)return null;this.router.navigate([s],{queryParams:{id:o._id,action:a}})}trackByFn(s,o){return o?._id}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=s.value,this.getAll()}}getAll(s=!1){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,statusKey:this.status,excel:s};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.goodIssue.getAll(o).subscribe(a=>{s?this.excelDownload(a.rows):(this.tableData=a.rows,this.collection=a.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(s){let o={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},a={title:"Short SO Closing",csvData:s,headers:[{header:"SO Date",key:"SODate",...o},{header:"SO #",key:"SONumber",...o},{header:"Line #",key:"SOLineNumber",...o},{header:"SKU #",key:"SKUNo",...o},{header:"SKU Description",key:"SKUDescription",...o},{header:"Bal Qty",key:"balancedQty",...o},{header:"Customer Name",key:"customer",...o}]};this.exportExcelService.exportExcel(a)}onSort({column:s,direction:o}){this.headers.forEach(a=>{a.sortable!==s&&(a.direction="")}),this.column=s,this.direction="asc"==o?1:-1,this.getAll()}openSOLineModal(s){const o=this.modalService.open(R._,{centered:!0,backdrop:"static",keyboard:!1,windowClass:"modelPage"});o.componentInstance.tableData=s,o.result.then(a=>{this.getAll()},a=>{})}}return(p=h).\u0275fac=function(s){return new(s||p)(t.Y36(f.Ol),t.Y36(I.vM),t.Y36(m.F0),t.Y36(f.V),t.Y36(m.gz),t.Y36(v.FF))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-discrepancy-list"]],viewQuery:function(s,o){if(1&s&&t.Gf(_.j,5),2&s){let a;t.iGM(a=t.CRH())&&(o.headers=a)}},decls:26,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNumber.GRNumber",3,"sort"],["sortable","GRNumber.GRDate",3,"sort"],["sortable","GIDateS",3,"sort"],["sortable","deliveryLocation",3,"sort"],["sortable","department",3,"sort"],["sortable","GIStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Discrepancy Summary"),t.qZA()(),t._UZ(4,"hr",3),t.TgZ(5,"div",4)(6,"app-setting-header",5),t.NdJ("dataChange",function(g){return o.eventHeader(g)}),t.qZA(),t.TgZ(7,"table",6)(8,"thead",7)(9,"tr",8)(10,"th",9),t.NdJ("sort",function(g){return o.onSort(g)}),t._uU(11,"GR No."),t.qZA(),t.TgZ(12,"th",10),t.NdJ("sort",function(g){return o.onSort(g)}),t._uU(13,"GR Dt."),t.qZA(),t.TgZ(14,"th",11),t.NdJ("sort",function(g){return o.onSort(g)}),t._uU(15,"Goods Issue Dt."),t.qZA(),t.TgZ(16,"th",12),t.NdJ("sort",function(g){return o.onSort(g)}),t._uU(17,"Location (Store)"),t.qZA(),t.TgZ(18,"th",13),t.NdJ("sort",function(g){return o.onSort(g)}),t._uU(19,"Department"),t.qZA(),t.TgZ(20,"th",14),t.NdJ("sort",function(g){return o.onSort(g)}),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,y,23,10,"tr",15),t.qZA()()()()),2&s&&(t.xp6(6),t.Q6J("data",t.l5B(3,r,o.page,o.pageSize,o.collection,o.search)),t.xp6(19),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[n.sg,l.P,_.j,d.J],encapsulation:2}),h})();var c=u(60095),U=u(21631),Z=u(22096),T=u(77609),S=u(60354),C=u(16897),F=u(50363),M=u(95346),x=u(59103);function w(p,h){if(1&p&&(t.TgZ(0,"option",37),t._uU(1),t.qZA()),2&p){const i=h.$implicit;t.Q6J("value",i.label),t.xp6(1),t.Oqu(i.label)}}function O(p,h){1&p&&t._UZ(0,"img",42)}function q(p,h){1&p&&t._UZ(0,"img",43)}function L(p,h){if(1&p&&(t.TgZ(0,"li",45)(1,"span",46),t._uU(2),t.qZA()()),2&p){const i=t.oxw(),s=i.$implicit,o=i.pages;t.xp6(2),t.AsE(" Page ",s," of ",o[o.length-1]," ")}}function B(p,h){1&p&&t.YNc(0,L,3,2,"li",44),2&p&&t.Q6J("ngIf",h.pages.length>0)}function Y(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"ngb-pagination",38),t.NdJ("pageChange",function(o){t.CHM(i);const a=t.oxw();return t.KtG(a.page=o)}),t.YNc(1,O,1,0,"ng-template",39),t.YNc(2,q,1,0,"ng-template",40),t.YNc(3,B,1,1,"ng-template",41),t.qZA()}if(2&p){const i=t.oxw();t.Q6J("collectionSize",i.GIDetailsArray.length)("page",i.page)("pageSize",i.pageSize)("boundaryLinks",!1)}}function Q(p,h){1&p&&(t.TgZ(0,"th"),t._uU(1,"+/- Invnt."),t.qZA())}function k(p,h){1&p&&(t.TgZ(0,"th"),t._uU(1,"+/- WIP"),t.qZA())}function J(p,h){if(1&p&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&p){const i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,i.inventoryQty,"1.2-2"),"")}}const N=function(){return{standalone:!0}};function W(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"input",53),t.NdJ("ngModelChange",function(o){t.CHM(i);const a=t.oxw(2).$implicit;return t.KtG(a.inventoryQty=o)})("input",function(){t.CHM(i);const o=t.oxw(3);return t.KtG(o.setInventory())}),t.qZA()}if(2&p){const i=t.oxw(2).$implicit;t.Q6J("ngModel",i.inventoryQty)("ngModelOptions",t.DdM(2,N))}}function $(p,h){if(1&p&&(t.TgZ(0,"td")(1,"div",51),t.YNc(2,J,3,4,"span",31),t.YNc(3,W,1,3,"input",52),t.qZA()()),2&p){const i=t.oxw(2);t.xp6(2),t.Q6J("ngIf","view"==i.action),t.xp6(1),t.Q6J("ngIf","view"!=i.action)}}function z(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"td")(1,"div",51)(2,"input",53),t.NdJ("ngModelChange",function(o){t.CHM(i);const a=t.oxw().$implicit;return t.KtG(a.WIPQty=o)})("input",function(){t.CHM(i);const o=t.oxw(2);return t.KtG(o.setWIP())}),t.qZA()()()}if(2&p){const i=t.oxw().$implicit;t.xp6(2),t.Q6J("ngModel",i.WIPQty)("ngModelOptions",t.DdM(2,N))}}function E(p,h){if(1&p&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td",30,47)(10,"span",48),t._uU(11),t.qZA()(),t.TgZ(12,"td",30,49)(14,"span",48),t._uU(15),t.qZA()(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"UOMUnitsMaster"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.ALo(24,"number"),t.qZA(),t.TgZ(25,"td",50),t._uU(26),t.ALo(27,"number"),t.qZA(),t.YNc(28,$,4,2,"td",31),t.YNc(29,z,3,3,"td",31),t.qZA()),2&p){const i=h.$implicit,s=t.MAs(9),o=t.MAs(13),a=t.oxw();t.xp6(2),t.Oqu(i.mrnNo),t.xp6(2),t.Oqu(t.xi3(5,19,i.MRNDate,"dd-MM-YYYY")),t.xp6(3),t.Oqu(i.itemCode),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.itemName)("positionTarget",s),t.xp6(1),t.hij(" ",i.itemName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.itemDescription)("positionTarget",o),t.xp6(1),t.hij(" ",i.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(18,22,i.UOM)),t.xp6(3),t.hij(" ",t.xi3(21,24,i.GIQty,"1.2-2")," "),t.xp6(3),t.Oqu(t.xi3(24,27,i.receiptQty,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(27,30,i.diffQty,"1.2-2")),t.xp6(2),t.Q6J("ngIf","Stores"==a.form.controls.actionBy.value),t.xp6(1),t.Q6J("ngIf","Stores"!=a.form.controls.actionBy.value)}}function V(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"button",56),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(2);return t.KtG(o.submit())}),t._uU(1," Update Inventory "),t.qZA()}if(2&p){const i=t.oxw(2);t.Q6J("disabled",!i.updateInventory)}}function j(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"button",56),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(2);return t.KtG(o.submit())}),t._uU(1," Update WIP "),t.qZA()}if(2&p){const i=t.oxw(2);t.Q6J("disabled",!i.updateWIP)}}function H(p,h){if(1&p&&(t.TgZ(0,"div",54),t.YNc(1,V,2,1,"button",55),t.YNc(2,j,2,1,"button",55),t.qZA()),2&p){const i=t.oxw();t.xp6(1),t.Q6J("ngIf","Stores"==i.form.controls.actionBy.value),t.xp6(1),t.Q6J("ngIf","Stores"!=i.form.controls.actionBy.value)}}function K(p,h){if(1&p){const i=t.EpF();t.TgZ(0,"div",54)(1,"button",57),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.navigateTo("/default/quality/transactions/resolve_discrepancy/list",{},""))}),t._uU(2," Back "),t.qZA()()}}let X=(()=>{var p;class h{constructor(s,o,a,g,G,P,st,it){this.goodService=s,this.router=o,this.activatedRoute=a,this.spinner=g,this.toastService=G,this.validationService=P,this.modalService=st,this.utilityService=it,this.GIDetailsArray=[],this.itemCodes=[],this.submitted=!1,this.action="Opened",this.Goods=[],this.page=1,this.pageSize=6,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.updateInventory=!1,this.updateWIP=!1,this.tableData=[],this.actionByArr=[{label:"Stores"}],this.statusArr={create:"Opened",edit:"Opened",viewDSCR:"Discrepancy Resolved"},this.masterData={autoIncrementNo:"",approvedGR:[]},this.form=new c.nJ({_id:new c.p4(null),GINumber:new c.p4("",[c.kI.required]),GRNumber:new c.p4(""),deliveryLocation:new c.p4(""),department:new c.p4(""),GIDate:new c.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[c.kI.required]),GRDate:new c.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),GIStatus:new c.p4("Opened",[c.kI.required]),remarks:new c.p4(""),rejectionRemarks:new c.p4(""),actionBy:new c.p4("Stores"),GIDetails:new c.p4([])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(s,o,a){this.router.navigate([s])}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,S.D))return;let s=this.form.value;s.GIDetails=this.GIDetailsArray,s._id&&this.update(s)}trackByFn(s,o){return o?._id}update(s){this.spinner.show(),this.goodService.updateOnResolveDiscrepancy(s._id,s).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.router.navigate(["default/quality/transactions/resolve_discrepancy/list"])})}getGoodRequisitionById(){this.spinner.show(),this.goodService.getGoodRequisitionById(this.form.controls.GRNumber.value).subscribe(s=>{this.itemCodes=s?.itemCodes,this.form.controls.deliveryLocation.setValue(s.rows[0].deliveryLocation),this.form.controls.GRDate.setValue(this.utilityService.getFormatDate(s.rows[0].GRDate,"YYYY-MM-DD")),this.GIDetailsArray=s.rows.map((o,a)=>({GILineNumber:a+1,GRLineNumber:o.GRLineNumber,GINDate:this.utilityService.getFormatDate(o.GINDate,"YYYY-MM-DD"),IC:o._id,GIN:o?.GIN?._id,MRN:o?.MRN?._id,MRNDate:o?.MRN?.MRNDate,mrnNo:o?.MRN?.MRNNumber,item:o.item._id,itemCode:o.item.itemCode,itemName:o.item.itemName,itemDescription:o.item.itemDescription,itemType:o.item.itemType,itemSubCategory:o.item.itemSubCategory,conversionOfUnits:o.item.conversionOfUnits,expiryStatus:o.expiryStatus,UOM:o.UOM,IRQty:o.closedIRQty,GRQty:o.GRQty,GIQty:o.GIQty??0,GILineStatus:"Opened"})).filter(o=>o.GRQty>0),this.collection=this.GIDetailsArray.length,this.openAlertMessageModal(),this.spinner.hide()})}getInitialData(){this.spinner.show(),this.goodService.getAllMasterData({}).subscribe(s=>{this.Goods=s.approvedGR,this.form.controls.GINumber.setValue(s.autoIncrementNo),this.form.controls.GIStatus.setValue("Opened"),this.form.controls.GIDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.GRDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,U.z)(o=>(this.action=o.action,this.utilityService.accessDenied(this.action),o.id?this.goodService.getById(o.id):(0,Z.of)({})))).subscribe(o=>{this.spinner.hide(),0!=Object.keys(o).length&&(o.GIDate&&(o.GIDate=o.GIDate.split("T")[0]),o.GRDate&&(o.GRDate=o.GRDate.split("T")[0]),this.GIDetailsArray=o.GIDetails.map((a,g)=>({GILineNumber:a?.GILineNumber,GRLineNumber:a?.GRLineNumber,GINDate:this.utilityService.getFormatDate(a?.GINDate,"YYYY-MM-DD"),IC:a?.IC,GIN:a?.GIN,MRN:a?.MRN,MRNDate:a?.MRN?.MRNDate,mrnNo:a?.MRN?.MRNNumber,item:a.item._id,itemCode:a.item.itemCode,itemName:a.item.itemName,itemDescription:a.item.itemDescription,itemType:a.item.itemType,itemSubCategory:a.item.itemSubCategory,conversionOfUnits:a.item.conversionOfUnits,expiryStatus:a.expiryStatus,UOM:a?.UOM,IRQty:a?.IRQty,GRQty:a?.GRQty,receiptQty:a?.receiptQty,diffQty:a?.diffQty,GIQty:a?.GIQty,inventoryQty:"view"==this.action?a.inventoryQty:0,WIPQty:"view"==this.action?a.WIPQty:0,GILineStatus:a?.GILineStatus})),this.collection=this.GIDetailsArray.length,this.tableData=this.GIDetailsArray,o.GIStatus=this.statusArr[this.action],this.actionByArr.push({label:`${o.department}`}),this.form.patchValue(o),this.f.GRNumber.disable(),"view"==this.action&&this.form.disable())})})}setInventory(){this.updateInventory=this.GIDetailsArray.every(s=>+s.inventoryQty+ +s.diffQty==0)}setWIP(){this.updateWIP=this.GIDetailsArray.every(s=>+s.WIPQty+ +s.diffQty==0)}setActionBy(){this.GIDetailsArray=this.tableData.map(s=>(s.inventoryQty=0,s.WIPQty=0,s)),this.setInventory(),this.setWIP()}openAlertMessageModal(){if(this.itemCodes.length>0){const s=this.modalService.open(T.HF,{centered:!0,size:"md",backdrop:"static",keyboard:!1});s.componentInstance.action=this.action,s.componentInstance.alertMessage=`Dear Store Incharge Material Stock is Zero for Item Code No: ${this.itemCodes}`,s.componentInstance.itemCodes=this.itemCodes,s.result.then(o=>{["create","edit"].includes(this.action)&&(this.itemCodes=o)},o=>{})}}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value;break;case"EXCEL":default:break;case"PAGE":this.page=s.value}}deptValue(s){this.f.department.setValue(s?.department)}}return(p=h).\u0275fac=function(s){return new(s||p)(t.Y36(I.vM),t.Y36(m.F0),t.Y36(m.gz),t.Y36(f.V),t.Y36(f.kl),t.Y36(C.RJ),t.Y36(v.FF),t.Y36(f.tI))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-discrepancy-form"]],decls:84,vars:18,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col"],["for","",1,"form-label"],[1,"text-danger"],["bindLabel","GRNumber","bindValue","_id","formControlName","GRNumber",3,"items","clearable","change"],["type","date","formControlName","GRDate","readonly","",1,"form-control"],["type","date","formControlName","GIDate",1,"form-control"],["type","text","formControlName","deliveryLocation","readonly","",1,"form-control"],["type","text","formControlName","department","readonly","",1,"form-control"],[1,"row","line-border"],[1,"row","justify-content-between","settingMargin"],[1,"col-4"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fa-5x","text-dark","mx-2"],["formControlName","actionBy",1,"form-select",3,"change"],["value","null","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-4","d-flex","justify-content-center"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange",4,"ngIf"],[1,"table-responsive",2,"min-height","21.4rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[1,"text-start"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["type","text","formControlName","remarks","readonly","",1,"form-control"],["class","col-md-auto ms-auto",4,"ngIf"],[3,"value"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationPages",""],["src","./assets/new_icons/pagination_prev.svg","width","20rem"],["src","./assets/new_icons/pagination_next.svg","width","20rem"],["class","ngb-custom-pages-item align-self-center",4,"ngIf"],[1,"ngb-custom-pages-item","align-self-center"],[1,"page-label","me-2","ms-1"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],[1,"text-primary"],[1,"d-flex","justify-content-center"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange","input",4,"ngIf"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange","input"],[1,"col-md-auto","ms-auto"],["type","button","class","btn bg-primary px-5",3,"disabled","click",4,"ngIf"],["type","button",1,"btn","bg-primary","px-5",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(s,o){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Resolve Discrepancy"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"Goods Request No."),t.TgZ(11,"span",9),t._uU(12,"*"),t.qZA()(),t.TgZ(13,"ng-select",10),t.NdJ("change",function(){return o.getGoodRequisitionById()})("change",function(g){return o.deptValue(g)}),t.qZA()(),t.TgZ(14,"div",7)(15,"label",8),t._uU(16,"Goods Request Date"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",7)(19,"label",8),t._uU(20,"Goods Issue Date"),t.qZA(),t._UZ(21,"input",12),t.qZA(),t.TgZ(22,"div",7)(23,"label",8),t._uU(24,"Location (Store)"),t.qZA(),t._UZ(25,"input",13),t.qZA(),t.TgZ(26,"div",7)(27,"label",8),t._uU(28,"Department (GR by)"),t.qZA(),t._UZ(29,"input",14),t.qZA()()(),t._UZ(30,"hr",15),t.TgZ(31,"div",16)(32,"div",17)(33,"div",18)(34,"div",19),t._uU(35," Action By "),t._UZ(36,"i",20),t.qZA(),t.TgZ(37,"select",21),t.NdJ("change",function(){return o.setActionBy()}),t.TgZ(38,"option",22),t._uU(39,"Select Action By"),t.qZA(),t.YNc(40,w,2,2,"option",23),t.qZA()()(),t.TgZ(41,"div",24),t.YNc(42,Y,4,4,"ngb-pagination",25),t.qZA(),t._UZ(43,"div",17),t.qZA(),t.TgZ(44,"div",26)(45,"table",27)(46,"thead",28)(47,"tr",29)(48,"th"),t._uU(49,"MRN No."),t.qZA(),t.TgZ(50,"th"),t._uU(51,"MRN Date"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Item Code"),t.qZA(),t.TgZ(54,"th",30),t._uU(55,"Item Name"),t.qZA(),t.TgZ(56,"th",30),t._uU(57,"Item Description"),t.qZA(),t.TgZ(58,"th"),t._uU(59,"UoM"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Issue Qty"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"Receipt Qty"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Diff. Qty."),t.qZA(),t.YNc(66,Q,2,0,"th",31),t.YNc(67,k,2,0,"th",31),t.qZA()(),t.TgZ(68,"tbody"),t.YNc(69,E,30,33,"tr",32),t.ALo(70,"slice"),t.ALo(71,"searchFi1ter"),t.qZA()()(),t._UZ(72,"hr",15),t.TgZ(73,"div",6)(74,"div",7)(75,"div",6)(76,"div",17)(77,"div",18)(78,"div",33)(79,"button",34),t._uU(80,"Remarks"),t.qZA()(),t._UZ(81,"input",35),t.qZA()()()(),t.YNc(82,H,3,2,"div",36),t.YNc(83,K,3,0,"div",36),t.qZA()()()),2&s&&(t.Q6J("formGroup",o.form),t.xp6(13),t.Q6J("items",o.Goods)("clearable",!1),t.xp6(27),t.Q6J("ngForOf",o.actionByArr),t.xp6(2),t.Q6J("ngIf",o.GIDetailsArray.length>0),t.xp6(24),t.Q6J("ngIf","Stores"==o.form.controls.actionBy.value),t.xp6(1),t.Q6J("ngIf","Stores"!=o.form.controls.actionBy.value),t.xp6(2),t.Q6J("ngForOf",t.Dn7(70,11,t.xi3(71,15,o.GIDetailsArray,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(13),t.Q6J("ngIf","view"!=o.action),t.xp6(1),t.Q6J("ngIf","view"==o.action))},dependencies:[n.sg,n.O5,v.N9,v.GZ,v.ju,v.Qy,v._L,c._Y,c.YN,c.Kr,c.Fj,c.wV,c.EJ,c.JJ,c.JL,c.sg,c.u,c.On,F.w9,n.OU,n.JJ,n.uU,M.G,x.S],styles:[".fa[_ngcontent-%COMP%]{font-size:1.6rem!important}.pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}.input-group-text[_ngcontent-%COMP%]{border-radius:0!important;height:2.8rem!important;width:3rem}"]}),h})();var tt=u(56208);const rt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:e},{path:"form",component:X,resolve:{accessScreen:u(65876).x}}];let ot=(()=>{var p;class h{}return(p=h).\u0275fac=function(s){return new(s||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[n.ez,m.Bz.forChild(rt),tt.m]}),h})()},73374:(b,A,u)=>{u.d(A,{IX:()=>R,SZ:()=>v,Aj:()=>D,vM:()=>t,zP:()=>f,Ee:()=>I});var n=u(37398),m=u(65879),_=u(98977);let R=(()=>{var l;class d{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:e=>`/stores/FGIN/update/${e}`,getByIdPath:e=>`/stores/FGIN/getById/${e}`,deletePath:e=>`/stores/FGIN/delete/${e}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,n.U)(e=>e))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,n.U)(e=>e))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,n.U)(e=>e))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,n.U)(e=>e))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,n.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,n.U)(e=>e))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,n.U)(e=>e))}}return(l=d).\u0275fac=function(r){return new(r||l)(m.LFG(_.sM))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})(),D=(()=>{var l;class d{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:e=>`/stores/gin/update/${e}`,getByIdPath:e=>`/stores/gin/getById/${e}`,deletePath:e=>`/stores/gin/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,n.U)(e=>e))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,n.U)(e=>e))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}}return(l=d).\u0275fac=function(r){return new(r||l)(m.LFG(_.sM))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})(),t=(()=>{var l;class d{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:e=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${e}`,updatePath:e=>`/stores/goodsIssue/update/${e}`,getByIdPath:e=>`/stores/goodsIssue/getById/${e}`,getGoodRequisitionByIdPath:e=>`/stores/goodsIssue/getGoodRequisitionById/${e}`,deletePath:e=>`/stores/goodsIssue/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}updateOnResolveDiscrepancy(r,e){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),e).pipe((0,n.U)(c=>c))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,n.U)(e=>e))}}return(l=d).\u0275fac=function(r){return new(r||l)(m.LFG(_.sM))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})(),f=(()=>{var l;class d{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:e=>`/stores/grn/update/${e}`,updateOnCancelPath:e=>`/stores/grn/updateOnCancelGRN/${e}`,getByIdPath:e=>`/stores/grn/getById/${e}`,getPOBySupplierIdPath:e=>`/stores/grn/getPOBySupplierId/${e}`,getGRNDetailsByPOIdPath:e=>`/stores/grn/getGRNDetailsByPOId/${e}`,getGRNDetailsByIdPath:e=>`/stores/grn/getGRNDetailsById/${e}`,deletePath:e=>`/stores/grn/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,n.U)(e=>e))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,n.U)(e=>e))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,n.U)(e=>e))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,n.U)(e=>e))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}updateOnCancel(r,e){return this.http.put(this.routes.updateOnCancelPath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,n.U)(e=>e))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,n.U)(e=>e))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,n.U)(e=>e))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,n.U)(e=>e))}}return(l=d).\u0275fac=function(r){return new(r||l)(m.LFG(_.sM))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})(),I=(()=>{var l;class d{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:e=>`/stores/inventory/getById/${e}`,deletePath:e=>`/stores/inventory/delete/${e}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,n.U)(e=>e))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,n.U)(e=>e))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,n.U)(e=>e))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,n.U)(e=>e))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}}return(l=d).\u0275fac=function(r){return new(r||l)(m.LFG(_.sM))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})(),v=(()=>{var l;class d{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:e=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${e}`,updatePath:e=>`/stores/goodsTransferResponse/update/${e}`,getByIdPath:e=>`/stores/goodsTransferResponse/getById/${e}`,getItemByGTRequestIdPath:e=>`/stores/goodsTransferResponse/getItemByGTRequestId/${e}`,deletePath:e=>`/stores/goodsTransferResponse/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}updateOnResolveDiscrepancy(r,e){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),e).pipe((0,n.U)(c=>c))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,n.U)(e=>e))}}return(l=d).\u0275fac=function(r){return new(r||l)(m.LFG(_.sM))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),d})()}}]);