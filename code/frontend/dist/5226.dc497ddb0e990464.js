"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5226],{15226:(M,h,a)=>{a.r(h),a.d(h,{ProformaInvoiceReportModule:()=>R});var p=a(96814),u=a(1076),d=a(43818),v=a(25116),g=a(57681),t=a(65879),f=a(59840),c=a(98977),T=a(88059),b=a(37285),m=a(60095),A=a(50363),Z=a(53421),y=a(83344);function C(s,l){if(1&s){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td",38,39)(10,"span",40),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"div",41)(16,"img",42),t.NdJ("click",function(){const n=t.CHM(r).$implicit,i=t.oxw();return t.KtG(i.navigateTo(n,"print"))}),t.qZA()()()()}if(2&s){const r=l.$implicit,o=t.MAs(9),e=t.oxw();t.xp6(2),t.Oqu(null==r?null:r.PINumber),t.xp6(2),t.Oqu(null==r?null:r.PIDateS),t.xp6(2),t.Oqu(t.xi3(7,10,null==r?null:r.PITotalAmount,"1.2-2")),t.xp6(2),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",r.customerName),t.xp6(1),t.hij(" ",r.customerName," "),t.xp6(2),t.Oqu(null==r?null:r.salesCategory),t.xp6(2),t.Q6J("accessType",e.rolePermissionActions.viewAction)}}const D=function(s,l,r,o){return{page:s,pageSize:l,collection:r,search:o,type:"list",pdfDisplay:!0}};let _=(()=>{var s;class l{constructor(o,e,n,i,S,U,F,J){this.proformaInvoiceService=o,this.spinner=e,this.exportExcelService=n,this.exportToPDFService=i,this.appGlobalService=S,this.utilityService=U,this.storageService=F,this.activatedRoute=J,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.originTableData=[],this.customerOptions=[],this.fromDate="",this.toDate="",this.customerId="",this.rolePermissionActions=v.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}navigateTo(o,e){let n=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/pi_print?id=${o?._id}&action=${e}&buttonCondition=${n}`,"_blank")}getFiscalDate(){let o=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(o.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(o.toDate,"YYYY-MM-DD")}trackByFn(o,e){return e?._id}reset(){this.getFiscalDate(),this.customerId="",this.getAll()}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}getAll(o=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,customer:this.customerId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.proformaInvoiceService.getAllReport(n).subscribe(i=>{"EXCEL"==e?this.excelDownload(i.rows):"PDF"==e?this.pdfDownload(i.rows):(this.tableData=i.rows,this.originTableData=i.rows,this.customerOptions=i.customers,this.collection=i.count,this.company=i.company,this.totalAmount=i?.totalAmounts?.PITotalAmount?(i?.totalAmounts?.PITotalAmount).toFixed(2):0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let e=(0,g.TP)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,g._y)(o))}onSort({column:o,direction:e}){this.headers.forEach(n=>{n.sortable!==o&&(n.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}getById(o){this.spinner.show(),this.proformaInvoiceService.getById(o).subscribe(e=>{this.tableData=e.rows,this.originTableData=e.rows,this.collection=e.count,this.spinner.hide()})}}return(s=l).\u0275fac=function(o){return new(o||s)(t.Y36(f.rt),t.Y36(c.V),t.Y36(c.Ol),t.Y36(c.$L),t.Y36(c.P0),t.Y36(c.tI),t.Y36(c.V1),t.Y36(u.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-proforma-invoice-report"]],viewQuery:function(o,e){if(1&o&&t.Gf(d.j,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:65,vars:20,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","salesInvoiceNumber",3,"sort"],["sortable","salesInvoiceDateS",3,"sort"],["sortable","salesInvoiceTotalAmountWithTax",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","salesCategory",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",3,"accessType"],["src","./assets/images/file_pdf.png","width","20rem",1,"pointer",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Proforma Invoice Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," Select Customer"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(i){return e.customerId=i}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(i){return e.fromDate=i}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(i){return e.toDate=i}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(i){return e.eventHeader(i)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(39,"Invoice #"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(41,"Invoice Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(43,"Invoice Value"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(45,"Customer Name"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(47,"Customer Category"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"View/Print"),t.qZA()()(),t.TgZ(50,"tbody"),t.YNc(51,C,17,13,"tr",29),t.qZA()()(),t.TgZ(52,"div",30),t._UZ(53,"hr",18),t.TgZ(54,"div",31)(55,"div",32)(56,"div",33)(57,"div",34),t._uU(58," Total Invoice Value "),t._UZ(59,"i",35),t.TgZ(60,"button",36),t._uU(61),t.ALo(62,"companyCurrency"),t.qZA()(),t._UZ(63,"input",37),t.ALo(64,"number"),t.qZA()()()()()()),2&o&&(t.xp6(10),t.Q6J("items",e.customerOptions)("clearable",!1)("ngModel",e.customerId),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(15,D,e.page,e.pageSize,e.collection,e.search)),t.xp6(17),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(10),t.Oqu(t.lcZ(62,10,"INR")),t.xp6(2),t.Q6J("value",t.xi3(64,12,e.totalAmount,"1.2-2")))},dependencies:[p.sg,T.P,b._L,m.Fj,m.JJ,m.On,A.w9,d.j,Z.J,p.JJ,y.f],encapsulation:2}),l})();var I=a(56208);const P=[{path:"",component:_}];let R=(()=>{var s;class l{}return(s=l).\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,u.Bz.forChild(P),I.m]}),l})()}}]);