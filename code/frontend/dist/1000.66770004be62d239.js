"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1e3],{1e3:(M,h,a)=>{a.r(h),a.d(h,{SalesDebitNoteReportModule:()=>R});var p=a(96814),d=a(1076),g=a(43818),b=a(25116),m=a(57681),t=a(65879),D=a(59840),l=a(98977),T=a(88059),f=a(37285),c=a(60095),Z=a(50363),N=a(53421),A=a(83344);function v(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",39,40)(9,"span",41),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"div",42)(17,"img",43),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo(null==n?null:n._id,"print"))}),t.qZA()()()()}if(2&r){const e=u.$implicit,i=t.MAs(8),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.DNNumber),t.xp6(2),t.Oqu(null==e?null:e.DNDateS),t.xp6(2),t.Oqu(null==e?null:e.salesCategory),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.customerName),t.xp6(1),t.hij(" ",e.customerName," "),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Oqu(null==e?null:e.netDNValue),t.xp6(2),t.Q6J("accessType",o.rolePermissionActions.viewAction)}}const y=function(r,u,e,i){return{page:r,pageSize:u,collection:e,search:i,type:"list",pdfDisplay:!0}};let _=(()=>{class r{constructor(e,i,o,n,s,U,F,J){this.saleDebitNoteService=e,this.exportExcelService=i,this.spinner=o,this.utilityService=n,this.appGlobalService=s,this.storageService=U,this.activatedRoute=F,this.exportToPDFService=J,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.originTableData=[],this.customers=[],this.fromDate="",this.toDate="",this.customerId="",this.rolePermissionActions=b.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}navigateTo(e,i){let o=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData);window.open(`${window.location.origin}/#/print/sale_debit_note?id=${e}&action=${i}&buttonCondition=${o}`,"_blank")}getFiscalDate(){let e=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(e.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(e.toDate,"YYYY-MM-DD")}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.getFiscalDate(),this.customerId="",this.getAll()}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,customer:this.customerId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.saleDebitNoteService.getAllReports(o).subscribe(n=>{"EXCEL"==i?this.excelDownload(n.rows):"PDF"==i?this.pdfDownload(n.rows):(this.tableData=n.rows,this.originTableData=n.rows,this.customers=n.customers,this.collection=n.count,this.company=n.company,this.totalAmount=n?.totalAmounts?.netDNValue?n?.totalAmounts?.netDNValue:0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,m.xO)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,m.yH)(e))}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(D.Pn),t.Y36(l.Ol),t.Y36(l.V),t.Y36(l.tI),t.Y36(l.P0),t.Y36(l.V1),t.Y36(d.gz),t.Y36(l.$L))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-sales-debit-note-report"]],viewQuery:function(i,o){if(1&i&&t.Gf(g.j,5),2&i){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},decls:67,vars:20,consts:[[1,"reportTablePage"],[1,"col-md-12","pb-0","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","mt-4","mb-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","DNNumber",3,"sort"],["sortable","DNDateS",3,"sort"],["sortable","salesCategory",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],["sortable","netDNValue",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",3,"accessType"],["src","./assets/images/file_pdf.png","width","20rem",1,"pointer",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Debit Note Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," Select Customer"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(s){return o.customerId=s}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(s){return o.fromDate=s}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(s){return o.toDate=s}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return o.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return o.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(s){return o.eventHeader(s)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(39,"DN No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(41,"DN Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(43,"Sales Category"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(45,"Customer Name"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(47,"Currency"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(s){return o.onSort(s)}),t._uU(49,"DN Net Value"),t.qZA(),t.TgZ(50,"th"),t._uU(51,"Action"),t.qZA()()(),t.TgZ(52,"tbody"),t.YNc(53,v,18,11,"tr",30),t.qZA()()(),t.TgZ(54,"div",31),t._UZ(55,"hr",18),t.TgZ(56,"div",32)(57,"div",33)(58,"div",34)(59,"div",35),t._uU(60," Total DN Net Value "),t._UZ(61,"i",36),t.TgZ(62,"button",37),t._uU(63),t.ALo(64,"companyCurrency"),t.qZA()(),t._UZ(65,"input",38),t.ALo(66,"currency"),t.qZA()()()()()()),2&i&&(t.xp6(10),t.Q6J("items",o.customers)("clearable",!1)("ngModel",o.customerId),t.xp6(8),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(15,y,o.page,o.pageSize,o.collection,o.search)),t.xp6(19),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn),t.xp6(10),t.Oqu(t.lcZ(64,10,"INR")),t.xp6(2),t.Q6J("value",t.xi3(66,12,o.totalAmount,"INR")))},dependencies:[p.sg,T.P,f._L,c.Fj,c.JJ,c.On,Z.w9,g.j,N.J,p.H9,A.f],encapsulation:2})}return r})();var S=a(56208);const C=[{path:"",component:_}];let R=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[p.ez,d.Bz.forChild(C),S.m]})}return r})()}}]);