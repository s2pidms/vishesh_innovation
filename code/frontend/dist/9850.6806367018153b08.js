"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9850],{39850:(F,h,s)=>{s.r(h),s.d(h,{ServiceInvoiceModule:()=>x});var c=s(96814),m=s(1076),d=s(43818),g=s(25116),v=s(64830),t=s(65879),l=s(2742),T=s(59840),A=s(88059),Z=s(37285),u=s(60095),b=s(50363),_=s(53421),f=s(83344);function S(a,p){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"number"),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td",42,43)(18,"span",44),t._uU(19),t.qZA()(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td")(23,"div",45)(24,"img",46),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.navigateTo(i,"print"))}),t.qZA()()()()}if(2&a){const e=p.$implicit,n=t.MAs(17),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.serviceInvoiceNumber),t.xp6(2),t.Oqu(null==e?null:e.serviceInvoiceDate),t.xp6(2),t.Oqu(t.xi3(7,13,null==e?null:e.invoiceAmount,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(10,16,null==e?null:e.totalTaxAmount,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(13,19,null==e?null:e.totalAmountWithTax,"1.2-2")),t.xp6(3),t.Oqu(null==e?null:e.PONo),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.customerName),t.xp6(1),t.hij(" ",e.customerName," "),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Q6J("accessType",o.rolePermissionActions.viewAction)}}const y=function(a,p,e,n){return{page:a,pageSize:p,collection:e,search:n,type:"list",pdfDisplay:!0}};let C=(()=>{class a{constructor(e,n,o,i,r,U,N,q,J){this.exportExcelService=e,this.exportToPDFService=n,this.serviceInvoiceService=o,this.toastService=i,this.spinner=r,this.utilityService=U,this.appGlobalService=N,this.storageService=q,this.activatedRoute=J,this.page=1,this.pageSize=11,this.collection=0,this.column="serviceInvoiceNumber",this.direction=1,this.search="",this.customerId="",this.tableData=[],this.customers=[],this.fromDate="",this.toDate="",this.rolePermissionActions=g.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType="",this.totalAmount=0,this.totalTaxAmount=0,this.totalInvoiceAmtWithTax=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}navigateTo(e,n){let o=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/service_invoice?id=${e?._id}&action=${n}&buttonCondition=${o}`,"_blank")}getFiscalDate(){let e=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(e.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(e.toDate,"YYYY-MM-DD")}trackByFn(e,n){return n?._id}reset(){this.getFiscalDate(),this.customerId="",this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}update(e,n){"Approved"===e?.status&&(this.spinner.show(),this.serviceInvoiceService.update(e._id,{_id:e._id,status:n}).subscribe(o=>{this.toastService.success(o.message),this.getAll(),this.spinner.hide()}))}getAll(e=!1,n=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,customerId:this.customerId,fromDate:this.fromDate,toDate:this.toDate,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.serviceInvoiceService.getAllReports(o).subscribe(i=>{"EXCEL"==n?this.excelDownload(i.rows):"PDF"==n?this.pdfDownload(i.rows):(this.tableData=i.rows,this.collection=i.count,this.customers=i.customers,this.totalAmount=i?.totalAmounts?.invoiceAmount?(i?.totalAmounts?.invoiceAmount).toFixed(2):0,this.totalTaxAmount=i?.totalAmounts?.totalTaxAmount?(i?.totalAmounts?.totalTaxAmount).toFixed(2):0,this.totalInvoiceAmtWithTax=i?.totalAmounts?.totalAmountWithTax?(i?.totalAmounts?.totalAmountWithTax).toFixed(2):0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let n=(0,v.Rb)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}excelDownload(e){this.exportExcelService.exportExcel((0,v.xi)(e))}onSort({column:e,direction:n}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(l.Ol),t.Y36(l.$L),t.Y36(T.GY),t.Y36(l.kl),t.Y36(l.V),t.Y36(l.tI),t.Y36(l.P0),t.Y36(l.V1),t.Y36(m.gz))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-service-invoice"]],viewQuery:function(n,o){if(1&n&&t.Gf(d.j,5),2&n){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:91,vars:34,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","serviceInvoiceNumber",3,"sort"],["sortable","serviceInvoiceDate",3,"sort"],["sortable","invoiceAmount",3,"sort"],["sortable","totalTaxAmount",3,"sort"],["sortable","totalAmountWithTax",3,"sort"],["sortable","PONo",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-4"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",3,"accessType"],["src","./assets/images/file_pdf.png","width","20rem",1,"pointer",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Service Invoice Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," Select Customer"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(r){return o.customerId=r}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(r){return o.fromDate=r}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(r){return o.toDate=r}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return o.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return o.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(r){return o.eventHeader(r)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(39,"Invoice #"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(41,"Invoice Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(43,"Invoice Value"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(45,"GST Amount"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(47,"Total Invoice Value"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(49,"PO No."),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(51,"Customer Name"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(53,"Currency"),t.qZA(),t.TgZ(54,"th"),t._uU(55,"View/Print"),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,S,25,22,"tr",32),t.qZA()()(),t.TgZ(58,"div",33),t._UZ(59,"hr",18),t.TgZ(60,"div",34)(61,"div",35)(62,"div",36)(63,"div",37),t._uU(64," Total Invoice Value "),t._UZ(65,"i",38),t.TgZ(66,"button",39),t._uU(67),t.ALo(68,"companyCurrency"),t.qZA()(),t._UZ(69,"input",40),t.ALo(70,"number"),t.qZA()(),t.TgZ(71,"div",35)(72,"div",36)(73,"div",37),t._uU(74," Total GST Amount "),t._UZ(75,"i",38),t.TgZ(76,"button",39),t._uU(77),t.ALo(78,"companyCurrency"),t.qZA()(),t._UZ(79,"input",40),t.ALo(80,"number"),t.qZA()(),t.TgZ(81,"div",41)(82,"div",36)(83,"div",37),t._uU(84," Total Invoice Amount with GST"),t._UZ(85,"i",38),t.TgZ(86,"button",39),t._uU(87),t.ALo(88,"companyCurrency"),t.qZA()(),t._UZ(89,"input",40),t.ALo(90,"number"),t.qZA()()()()()()),2&n&&(t.xp6(10),t.Q6J("items",o.customers)("clearable",!1)("ngModel",o.customerId),t.xp6(8),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(29,y,o.page,o.pageSize,o.collection,o.search)),t.xp6(23),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn),t.xp6(10),t.Oqu(t.lcZ(68,14,"INR")),t.xp6(2),t.Q6J("value",t.xi3(70,16,o.totalAmount,"1.2-2")),t.xp6(8),t.Oqu(t.lcZ(78,19,"INR")),t.xp6(2),t.Q6J("value",t.xi3(80,21,o.totalTaxAmount,"1.2-2")),t.xp6(8),t.Oqu(t.lcZ(88,24,"INR")),t.xp6(2),t.Q6J("value",t.xi3(90,26,o.totalInvoiceAmtWithTax,"1.2-2")))},dependencies:[c.sg,A.P,Z._L,u.Fj,u.JJ,u.On,b.w9,d.j,_.J,c.JJ,f.f],encapsulation:2})}return a})();var I=s(56208);const D=[{path:"",component:C}];let x=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(D),I.m]})}return a})()}}]);