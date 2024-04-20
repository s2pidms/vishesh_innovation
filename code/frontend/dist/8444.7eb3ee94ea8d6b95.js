"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8444],{38444:(B,h,i)=>{i.r(h),i.d(h,{SalesOrderStatusModule:()=>F});var c=i(96814),m=i(1076),S=i(43818),g=i(25116),l=i(13107),Z=i(28402);let _="Sales Order Status",O=[{header:"SO No.",key:"SONumber",...l.t},{header:"SO Date",key:"SODate",...l.t},{header:"SKU Code",key:"SKUNo",...l.t},{header:"SKU Name",key:"SKUName",...l.t},{header:"SKU Description",key:"SKUDescription",...l.t},{header:"Part No.",key:"customerPartNo",...l.t},{header:"UoM",key:"UOM",...l.t},{header:"SO Qty",key:"SOQty",...l.t},{header:"Disp. Qty",key:"dispatchQty",...l.t},{header:"SO Bal. Qty.",key:"SObalQty",...l.t},{header:"Cust. Nick Name",key:"customerName",...l.t},{header:"Customer PO No.",key:"PONumber",...l.t}];var A=i(45622),t=i(65879),N=i(59840),d=i(98977),T=i(37285),U=i(88059),u=i(60095),v=i(50363),C=i(14906),D=i(83344),M=i(59103);function x(n,p){if(1&n&&(t.TgZ(0,"option",49),t._uU(1),t.qZA()),2&n){const s=p.$implicit;t.Q6J("value",s.value),t.xp6(1),t.hij(" ",s.label," ")}}function J(n,p){if(1&n){const s=t.EpF();t.TgZ(0,"div",50)(1,"label",7),t._uU(2,"Report Specific Search"),t.qZA(),t.TgZ(3,"ng-select",51),t.NdJ("ngModelChange",function(e){t.CHM(s);const a=t.oxw();return t.KtG(a.customerId=e)}),t.qZA(),t.TgZ(4,"span",10),t._UZ(5,"img",11),t.qZA()()}if(2&n){const s=t.oxw();t.xp6(3),t.Q6J("items",s.customerOptions)("clearable",!1)("ngModel",s.customerId)}}function q(n,p){if(1&n){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",52,53)(9,"span",54),t._uU(10),t.qZA()(),t.TgZ(11,"td",52,55)(13,"span",54),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"UOMUnitsMaster"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td",52,56)(28,"span",54),t._uU(29),t.qZA()(),t.TgZ(30,"td"),t._uU(31),t.qZA(),t.TgZ(32,"td")(33,"span",57),t.NdJ("click",function(){const a=t.CHM(s).$implicit,o=t.oxw();return t.KtG(o.openSOScheduleModal(a))}),t._UZ(34,"div",58),t.qZA()()()}if(2&n){const s=p.$implicit,r=t.MAs(8),e=t.MAs(12),a=t.MAs(27);t.xp6(2),t.Oqu(null==s?null:s.SONumber),t.xp6(2),t.Oqu(null==s?null:s.SODate),t.xp6(2),t.Oqu(null==s?null:s.SKUNo),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",s.SKUName),t.xp6(1),t.hij(" ",s.SKUName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",s.SKUDescription),t.xp6(1),t.hij(" ",s.SKUDescription," "),t.xp6(2),t.Oqu(null==s?null:s.customerPartNo),t.xp6(2),t.Oqu(t.lcZ(19,24,null==s?null:s.UOM)),t.xp6(3),t.Oqu(null==s?null:s.SOQty),t.xp6(2),t.Oqu(null==s?null:s.dispatchQty),t.xp6(2),t.Oqu(null==s?null:s.SObalQty),t.xp6(1),t.Udp("width",a.clientWidth),t.xp6(2),t.Q6J("positionTarget",a)("ngbTooltip",s.customerName),t.xp6(1),t.hij(" ",s.customerName," "),t.xp6(2),t.Oqu(null==s?null:s.PONumber)}}const b=function(n){return[n]},Q=function(n,p,s,r){return{page:n,pageSize:p,collection:s,search:r,type:"list",pdfDisplay:!0}};let K=(()=>{var n;class p{constructor(r,e,a,o,R,w,I,E,j){this.salesOrderService=r,this.spinner=e,this.exportExcelService=a,this.appGlobalService=o,this.utilityService=R,this.storageService=w,this.activatedRoute=I,this.exportToPDFService=E,this.modalService=j,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.originTableData=[],this.customerOptions=[],this.toDate="",this.reportNameObj=g.DK,this.reportNameArr=this.reportNameObj.getAllReportName(),this.reportName=this.reportNameObj.aodSalesOrderStatusReport,this.customerId="",this.SKUId="",this.reportQMSName="",this.SOValue=0,this.rolePermissionActions=g.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}getFiscalDate(){let r=this.utilityService.getCurrentMonthDates();this.toDate=r.toDate}navigateTo(r,e){let a=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/so_confirmation?id=${r?._id}&action=${e}&buttonCondition=${a}`,"_blank")}trackByFn(r,e){return e?._id}reset(){this.getFiscalDate(),this.reportName=this.reportNameObj.aodSalesOrderStatusReport,this.customerId="",this.SKUId="",this.getAll()}setReportName(){this.reportName==this.reportNameObj.aodSOSRByCustomer?this.SKUId="":(this.SKUId="",this.customerId="")}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}getAll(r=!1,e=""){this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r,customerId:this.customerId,SKUId:this.SKUId,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.salesOrderService.getAllSalesOrderStatusReports(a).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.originTableData=o.rows,this.customerOptions=o.customerList,this.collection=o.count,this.company=o.company,this.SOValue=o?.totalAmounts?.SOValue,this.reportQMSName=o?.displayText?.displayText),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(r){let e=(n=>(0,Z.J)({data:n,headers:O,title:_}))(r);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(r){this.exportExcelService.exportExcel((n=>({title:_,csvData:n,headers:O}))(r))}openSOScheduleModal(r){const e=this.modalService.open(A.f,{centered:!0,windowClass:"custom-modal-sm",backdrop:"static",keyboard:!1});e.componentInstance.bookSalesOrder="Book Sales Order",e.componentInstance.action="view",e.componentInstance.UOM=r.UOM,e.componentInstance.POQty=r.SOQty,e.componentInstance.deliveryCount=r.dispatchCount,e.componentInstance.deliveryScheduleArr=r?.dispatchSchedule}onSort({column:r,direction:e}){this.headers.forEach(a=>{a.sortable!==r&&(a.direction="")}),this.column=r,this.direction="asc"==e?1:-1,this.getAll()}getById(r){this.spinner.show(),this.salesOrderService.getById(r).subscribe(e=>{this.tableData=e.rows,this.originTableData=e.rows,this.collection=e.count,this.spinner.hide()})}}return(n=p).\u0275fac=function(r){return new(r||n)(t.Y36(N.VD),t.Y36(d.V),t.Y36(d.Ol),t.Y36(d.P0),t.Y36(d.tI),t.Y36(d.V1),t.Y36(m.gz),t.Y36(d.$L),t.Y36(T.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sales-order-status"]],viewQuery:function(r,e){if(1&r&&t.Gf(S.j,5),2&r){let a;t.iGM(a=t.CRH())&&(e.headers=a)}},decls:78,vars:31,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"form-select",3,"ngModel","change","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["class","col-3 separate-row",4,"ngIf"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SONumber",3,"sort"],["sortable","SODate",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","customerPartNo",3,"sort"],["sortable","UOM",3,"sort"],["sortable","SOQty",3,"sort"],["sortable","dispatchQty",3,"sort"],["sortable","SObalQty",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","PONumber",3,"sort"],["sortable","scheduleNo",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fa-5x","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-12",3,"ngClass"],[3,"value"],[1,"col-3","separate-row"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["customerName",""],[1,"d-flex","justify-content-center","pointer",3,"click"],[1,"assetCalendarTD"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Sales Order Status Report (SOSR)"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Report Name"),t.qZA(),t.TgZ(10,"select",8),t.NdJ("change",function(){return e.setReportName()})("ngModelChange",function(o){return e.reportName=o}),t.YNc(11,x,2,2,"option",9),t.qZA(),t.TgZ(12,"span",10),t._UZ(13,"img",11),t.qZA()(),t.YNc(14,J,6,3,"div",12),t.TgZ(15,"div",13)(16,"label",7),t._uU(17," As on Date "),t._UZ(18,"span",14),t.qZA(),t.TgZ(19,"input",15),t.NdJ("ngModelChange",function(o){return e.toDate=o}),t.qZA()(),t.TgZ(20,"div",16)(21,"span",17),t._UZ(22,"img",11),t.qZA(),t.TgZ(23,"button",18),t.NdJ("click",function(){return e.getAll()}),t._uU(24,"Apply Filter"),t.qZA(),t.TgZ(25,"button",19),t.NdJ("click",function(){return e.reset()}),t._uU(26,"Reset Filter"),t.qZA()()(),t._UZ(27,"hr",20),t.TgZ(28,"div",21)(29,"app-setting-header",22),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(30,"table",23)(31,"thead",24)(32,"tr",25)(33,"th",26),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(34,"SO No."),t.qZA(),t.TgZ(35,"th",27),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(36,"SO Date"),t.qZA(),t.TgZ(37,"th",28),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(38,"SKU Code"),t.qZA(),t.TgZ(39,"th",29),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(40),t.ALo(41,"labelTranslate"),t.qZA(),t.TgZ(42,"th",30),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(43),t.ALo(44,"labelTranslate"),t.qZA(),t.TgZ(45,"th",31),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(46,"Part No."),t.qZA(),t.TgZ(47,"th",32),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(48,"UoM"),t.qZA(),t.TgZ(49,"th",33),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(50,"SO Qty"),t.qZA(),t.TgZ(51,"th",34),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(52,"Disp. Qty"),t.qZA(),t.TgZ(53,"th",35),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(54,"SO Bal. Qty"),t.qZA(),t.TgZ(55,"th",36),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(56,"Cust. Nick Name"),t.qZA(),t.TgZ(57,"th",37),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(58,"Customer PO No."),t.qZA(),t.TgZ(59,"th",38),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(60,"D/S"),t.qZA()()(),t.TgZ(61,"tbody"),t.YNc(62,q,35,26,"tr",39),t.qZA()()(),t.TgZ(63,"div",40),t._UZ(64,"hr",20),t.TgZ(65,"div",41)(66,"div",42)(67,"div",43)(68,"div",44),t._uU(69," SO Value "),t._UZ(70,"i",45),t.TgZ(71,"button",46),t._uU(72),t.ALo(73,"companyCurrency"),t.qZA()(),t._UZ(74,"input",47),t.ALo(75,"number"),t.qZA()(),t.TgZ(76,"div",48),t._uU(77),t.qZA()()()()()),2&r&&(t.xp6(10),t.Q6J("ngModel",e.reportName),t.xp6(1),t.Q6J("ngForOf",e.reportNameArr),t.xp6(3),t.Q6J("ngIf",t.VKq(22,b,e.reportNameObj.aodSOSRByCustomer).includes(e.reportName)),t.xp6(5),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(24,Q,e.page,e.pageSize,e.collection,e.search)),t.xp6(11),t.hij(" ",t.lcZ(41,13,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(44,15,"SKU Description")," "),t.xp6(19),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(10),t.Oqu(t.lcZ(73,17,"INR")),t.xp6(2),t.Q6J("value",t.xi3(75,19,e.SOValue,"1.2-2")),t.xp6(2),t.Q6J("ngClass",t.VKq(29,b,e.reportNameObj.aodForecastBySKUName).includes(e.reportName)?"col-6 text-end pe-5 text-black-50":"col-9 text-end pe-5 text-black-50"),t.xp6(1),t.hij(" ",e.reportQMSName," "))},dependencies:[c.mk,c.sg,c.O5,U.P,T._L,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.On,v.w9,S.j,c.JJ,C.c,D.f,M.S],styles:[".fa[_ngcontent-%COMP%]{font-size:1.6rem!important}"]}),p})();var P=i(56208);const k=[{path:"",component:K}];let F=(()=>{var n;class p{}return(n=p).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(k),P.m]}),p})()}}]);