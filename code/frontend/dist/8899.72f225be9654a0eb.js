"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8899],{98899:(N,c,r)=>{r.r(c),r.d(c,{QuotationSkuReportModule:()=>k});var h=r(96814),g=r(43818),T=r(25116),d=r(57681),t=r(65879),l=r(98977),m=r(1076),b=r(24823),f=r(88059),Z=r(37285),u=r(60095),v=r(50363),A=r(53421);function S(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",31,32)(11,"span",33),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"div",34)(17,"img",35),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo(n,"print"))}),t.qZA()()()()}if(2&a){const e=p.$implicit,i=t.MAs(10),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.quotationNo),t.xp6(2),t.Oqu(null==e?null:e.revNo),t.xp6(2),t.Oqu(null==e?null:e.quotationDate),t.xp6(2),t.Oqu(null==e?null:e.customerCategory),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.customerName),t.xp6(1),t.hij(" ",e.customerName," "),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Q6J("accessType",o.rolePermissionActions.viewAction)}}const _=function(a,p,e,i){return{page:a,pageSize:p,collection:e,search:i,type:"list",pdfDisplay:!0}};let y=(()=>{class a{constructor(e,i,o,n,s,Q,R,U){this.spinner=e,this.exportExcelService=i,this.appGlobalService=o,this.utilityService=n,this.storageService=s,this.exportToPDFService=Q,this.activatedRoute=R,this.quotationOfSKUService=U,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.originTableData=[],this.customerOptions=[],this.fromDate="",this.toDate="",this.customerId="",this.rolePermissionActions=T.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}getFiscalDate(){let e=this.utilityService.getCurrentMonthDates();this.fromDate=e.fromDate,this.toDate=e.toDate}navigateTo(e,i){let o=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/quotation_of_sku?id=${e?._id}&action=${i}&buttonCondition=${o}`,"_blank")}trackByFn(e,i){return i?._id}reset(){this.getFiscalDate(),this.customerId="",this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,customer:this.customerId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.quotationOfSKUService.getAllReports(o).subscribe(n=>{"EXCEL"==i?this.excelDownload(n.rows):"PDF"==i?this.pdfDownload(n.rows):(this.tableData=n.rows,this.originTableData=n.rows,this.customerOptions=n.customers,this.collection=n.count,this.company=n.company),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,d.EY)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,d.X1)(e))}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}getById(e){this.spinner.show(),this.quotationOfSKUService.getById(e).subscribe(i=>{this.tableData=i.rows,this.originTableData=i.rows,this.collection=i.count,this.spinner.hide()})}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(l.V),t.Y36(l.Ol),t.Y36(l.P0),t.Y36(l.tI),t.Y36(l.V1),t.Y36(l.$L),t.Y36(m.gz),t.Y36(b.Q))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-quotation-sku-report"]],viewQuery:function(i,o){if(1&i&&t.Gf(g.j,5),2&i){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},decls:54,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","quotationNo",3,"sort"],["sortable","revNo",3,"sort"],["sortable","quotationDate",3,"sort"],["sortable","customerCategory",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",3,"accessType"],["src","./assets/images/file_pdf.png","width","20rem",1,"pointer",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Quotation Of SKU Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," Select Customer"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(s){return o.customerId=s}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(s){return o.fromDate=s}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(s){return o.toDate=s}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return o.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return o.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(s){return o.eventHeader(s)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(39,"Qtn. No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(41,"Rev No."),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(43,"Qtn. Date"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(45,"Customer Category"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(47,"Customer Name"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(49,"Ccy"),t.qZA(),t.TgZ(50,"th"),t._uU(51,"Action"),t.qZA()()(),t.TgZ(52,"tbody"),t.YNc(53,S,18,11,"tr",30),t.qZA()()()()()),2&i&&(t.xp6(10),t.Q6J("items",o.customerOptions)("clearable",!1)("ngModel",o.customerId),t.xp6(8),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,_,o.page,o.pageSize,o.collection,o.search)),t.xp6(19),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[h.sg,f.P,Z._L,u.Fj,u.JJ,u.On,v.w9,g.j,A.J],encapsulation:2})}return a})();var C=r(56208);const D=[{path:"",component:y}];let k=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[h.ez,m.Bz.forChild(D),C.m]})}return a})()}}]);