"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9111],{44848:(T,u,a)=>{a.r(u),a.d(u,{SampleRequestReportModule:()=>D});var p=a(96814),m=a(1076),h=a(43818),d=a(25116),c=a(23683),t=a(65879),g=a(78212),l=a(99328),_=a(88059),b=a(37285),S=a(60095),A=a(14906),f=a(83344);function R(i,Z){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",45,46)(9,"span",47),t._uU(10),t.qZA()(),t.TgZ(11,"td",45,48)(13,"span",47),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"number"),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"number"),t.qZA(),t.TgZ(29,"td",45,49)(31,"span",47),t._uU(32),t.qZA()(),t.TgZ(33,"td"),t._uU(34),t.qZA(),t.TgZ(35,"td"),t._uU(36),t.qZA()()),2&i){const e=Z.$implicit,s=t.MAs(8),o=t.MAs(12),r=t.MAs(30);t.xp6(2),t.Oqu(null==e?null:e.SONumber),t.xp6(2),t.Oqu(null==e?null:e.SODate),t.xp6(2),t.Oqu(null==e?null:e.SKUNo),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",e.SKUName),t.xp6(1),t.hij(" ",e.SKUName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.SKUDescription),t.xp6(1),t.hij(" ",e.SKUDescription," "),t.xp6(2),t.Oqu(null==e?null:e.customerPartNo),t.xp6(2),t.Oqu(null==e?null:e.UOM),t.xp6(2),t.Oqu(null==e?null:e.quantity),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Oqu(t.xi3(25,26,null==e?null:e.netRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(28,29,null==e?null:e.lineValue,"1.2-2")),t.xp6(2),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",e.customerName),t.xp6(1),t.hij(" ",e.customerName," "),t.xp6(2),t.Oqu(null==e?null:e.scheduleNo),t.xp6(2),t.Oqu(null==e?null:e.dispatchDate)}}const q=function(i,Z,e,s){return{page:i,pageSize:Z,collection:e,search:s,type:"list",pdfDisplay:!0}},U=function(i){return[i]};let y=(()=>{class i{constructor(e,s,o,r,n,C,O,x){this.sampleRequestService=e,this.spinner=s,this.exportExcelService=o,this.appGlobalService=r,this.utilityService=n,this.storageService=C,this.activatedRoute=O,this.exportToPDFService=x,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.originTableData=[],this.reportNameObj=d.NJ,this.reportNameArr=this.reportNameObj.getAllReportName(),this.reportName=this.reportNameObj.aodBalanceSalesOrder,this.customerId="",this.SKUId="",this.SOQuantity="",this.reportQMSName="",this.SOValue=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.rolePermissionActions=d.a1,this.accessType=this.rolePermissionActions.downloadAction}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(e,s){return s?._id}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.reportName=this.reportNameObj.aodBalanceSalesOrder,this.customerId="",this.SKUId="",this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,customerId:this.customerId,SKUId:this.SKUId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.sampleRequestService.getAllReports(o).subscribe(r=>{"EXCEL"==s?this.excelDownload(r.rows):"PDF"==s?this.pdfDownload(r.rows):(this.tableData=r.rows,this.originTableData=r.rows,this.collection=r.count,this.SOValue=r?.totalAmounts?.SOTotalAmount,this.SOQuantity=r?.totalAmounts?.SOQty,this.reportQMSName=r?.displayText?.displayText),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let s=(0,c.ck)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((0,c.Lk)(e))}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(g.ol),t.Y36(l.V),t.Y36(l.Ol),t.Y36(l.P0),t.Y36(l.tI),t.Y36(l.V1),t.Y36(m.gz),t.Y36(l.$L))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-sample-request-report"]],viewQuery:function(s,o){if(1&s&&t.Gf(h.j,5),2&s){let r;t.iGM(r=t.CRH())&&(o.headers=r)}},decls:79,vars:27,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SONumber",3,"sort"],["sortable","SODate",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","customerPartNo",3,"sort"],["sortable","UOM",3,"sort"],["sortable","quantity",3,"sort"],["sortable","currency",3,"sort"],["sortable","netRate",3,"sort"],["sortable","lineValue",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","scheduleNo",3,"sort"],["sortable","dispatchDate",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[3,"ngClass"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["customerName",""]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Sample Request - Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," From Date "),t.TgZ(10,"span",8),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"input",9),t.NdJ("ngModelChange",function(n){return o.fromDate=n}),t.qZA()(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15," To Date "),t.TgZ(16,"span",8),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",9),t.NdJ("ngModelChange",function(n){return o.toDate=n}),t.qZA()(),t.TgZ(19,"div",10)(20,"span",11),t._UZ(21,"img",12),t.qZA(),t.TgZ(22,"button",13),t.NdJ("click",function(){return o.getAll()}),t._uU(23,"Apply Filter"),t.qZA(),t.TgZ(24,"button",14),t.NdJ("click",function(){return o.reset()}),t._uU(25,"Reset Filter"),t.qZA()()(),t._UZ(26,"hr",15),t.TgZ(27,"div",16)(28,"app-setting-header",17),t.NdJ("dataChange",function(n){return o.eventHeader(n)}),t.qZA(),t.TgZ(29,"table",18)(30,"thead",19)(31,"tr",20)(32,"th",21),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(33,"SR No."),t.qZA(),t.TgZ(34,"th",22),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(35,"SR Date"),t.qZA(),t.TgZ(36,"th",23),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(37,"SKU Code"),t.qZA(),t.TgZ(38,"th",24),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(39),t.ALo(40,"labelTranslate"),t.qZA(),t.TgZ(41,"th",25),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(42),t.ALo(43,"labelTranslate"),t.qZA(),t.TgZ(44,"th",26),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(45,"Part No."),t.qZA(),t.TgZ(46,"th",27),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(47,"UoM"),t.qZA(),t.TgZ(48,"th",28),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(49,"SR Qty"),t.qZA(),t.TgZ(50,"th",29),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(51,"Ccy"),t.qZA(),t.TgZ(52,"th",30),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(53,"Net Rate"),t.qZA(),t.TgZ(54,"th",31),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(55,"Line Value"),t.qZA(),t.TgZ(56,"th",32),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(57,"Cust. Nick Name"),t.qZA(),t.TgZ(58,"th",33),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(59,"D/S"),t.qZA(),t.TgZ(60,"th",34),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(61,"Disp. Date"),t.qZA()()(),t.TgZ(62,"tbody"),t.YNc(63,R,37,32,"tr",35),t.qZA()()(),t.TgZ(64,"div",36),t._UZ(65,"hr",15),t.TgZ(66,"div",37)(67,"div",38)(68,"div",39)(69,"div",40),t._uU(70," SR Value "),t._UZ(71,"i",41),t.TgZ(72,"button",42),t._uU(73),t.ALo(74,"companyCurrency"),t.qZA()(),t._UZ(75,"input",43),t.ALo(76,"number"),t.qZA()(),t.TgZ(77,"div",44),t._uU(78),t.qZA()()()()()),2&s&&(t.xp6(12),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(20,q,o.page,o.pageSize,o.collection,o.search)),t.xp6(11),t.hij(" ",t.lcZ(40,11,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(43,13,"SKU Description")," "),t.xp6(21),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn),t.xp6(10),t.Oqu(t.lcZ(74,15,"INR")),t.xp6(2),t.Q6J("value",t.xi3(76,17,o.SOValue,"1.2-2")),t.xp6(2),t.Q6J("ngClass",t.VKq(25,U,o.reportNameObj.aodForecastBySKUName).includes(o.reportName)?"col-6 text-end pe-5 text-black-50":"col-9 text-end pe-5 text-black-50"),t.xp6(1),t.hij(" ",o.reportQMSName," "))},dependencies:[p.mk,p.sg,_.P,b._L,S.Fj,S.JJ,S.On,h.j,p.JJ,A.c,f.f],encapsulation:2})}return i})();var N=a(56208);const v=[{path:"",component:y}];let D=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[p.ez,m.Bz.forChild(v),N.m]})}return i})()},13107:(T,u,a)=>{a.d(u,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,u,a)=>{a.d(u,{J:()=>p});const p=({data:m,headers:h,widths:d,title:c})=>({tableData:{widths:d,headerRows:1,body:[h.map(l=>({text:l.header,style:"header"})),...m.map(l=>h.map(_=>({style:"subheader",text:l[_.key]})))]},title:c})}}]);