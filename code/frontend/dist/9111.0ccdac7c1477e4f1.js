"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9111],{44848:(T,m,a)=>{a.r(m),a.d(m,{SampleRequestReportModule:()=>D});var u=a(96814),d=a(1076),h=a(43818),c=a(25116),g=a(23683),t=a(65879),_=a(78212),i=a(99328),S=a(88059),b=a(37285),Z=a(60095),R=a(14906),q=a(83344);function A(l,p){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",45,46)(9,"span",47),t._uU(10),t.qZA()(),t.TgZ(11,"td",45,48)(13,"span",47),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"number"),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"number"),t.qZA(),t.TgZ(29,"td",45,49)(31,"span",47),t._uU(32),t.qZA()(),t.TgZ(33,"td"),t._uU(34),t.qZA(),t.TgZ(35,"td"),t._uU(36),t.qZA()()),2&l){const r=p.$implicit,s=t.MAs(8),e=t.MAs(12),n=t.MAs(30);t.xp6(2),t.Oqu(null==r?null:r.SONumber),t.xp6(2),t.Oqu(null==r?null:r.SODate),t.xp6(2),t.Oqu(null==r?null:r.SKUNo),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",r.SKUName),t.xp6(1),t.hij(" ",r.SKUName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",r.SKUDescription),t.xp6(1),t.hij(" ",r.SKUDescription," "),t.xp6(2),t.Oqu(null==r?null:r.customerPartNo),t.xp6(2),t.Oqu(null==r?null:r.UOM),t.xp6(2),t.Oqu(null==r?null:r.quantity),t.xp6(2),t.Oqu(null==r?null:r.currency),t.xp6(2),t.Oqu(t.xi3(25,26,null==r?null:r.netRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(28,29,null==r?null:r.lineValue,"1.2-2")),t.xp6(2),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",r.customerName),t.xp6(1),t.hij(" ",r.customerName," "),t.xp6(2),t.Oqu(null==r?null:r.scheduleNo),t.xp6(2),t.Oqu(null==r?null:r.dispatchDate)}}const f=function(l,p,r,s){return{page:l,pageSize:p,collection:r,search:s,type:"list",pdfDisplay:!0}},U=function(l){return[l]};let y=(()=>{var l;class p{constructor(s,e,n,o,C,O,x,J){this.sampleRequestService=s,this.spinner=e,this.exportExcelService=n,this.appGlobalService=o,this.utilityService=C,this.storageService=O,this.activatedRoute=x,this.exportToPDFService=J,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.originTableData=[],this.reportNameObj=c.NJ,this.reportNameArr=this.reportNameObj.getAllReportName(),this.reportName=this.reportNameObj.aodBalanceSalesOrder,this.customerId="",this.SKUId="",this.SOQuantity="",this.reportQMSName="",this.SOValue=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.rolePermissionActions=c.a1,this.accessType=this.rolePermissionActions.downloadAction}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(s,e){return e?._id}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.reportName=this.reportNameObj.aodBalanceSalesOrder,this.customerId="",this.SKUId="",this.getAll()}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=s.value,this.getAll()}}getAll(s=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:s,customerId:this.customerId,SKUId:this.SKUId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.sampleRequestService.getAllReports(n).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.originTableData=o.rows,this.collection=o.count,this.SOValue=o?.totalAmounts?.SOTotalAmount,this.SOQuantity=o?.totalAmounts?.SOQty,this.reportQMSName=o?.displayText?.displayText),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(s){let e=(0,g.ck)(s);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(s){this.exportExcelService.exportExcel((0,g.Lk)(s))}onSort({column:s,direction:e}){this.headers.forEach(n=>{n.sortable!==s&&(n.direction="")}),this.column=s,this.direction="asc"==e?1:-1,this.getAll()}}return(l=p).\u0275fac=function(s){return new(s||l)(t.Y36(_.ol),t.Y36(i.V),t.Y36(i.Ol),t.Y36(i.P0),t.Y36(i.tI),t.Y36(i.V1),t.Y36(d.gz),t.Y36(i.$L))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-sample-request-report"]],viewQuery:function(s,e){if(1&s&&t.Gf(h.j,5),2&s){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:79,vars:27,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SONumber",3,"sort"],["sortable","SODate",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","customerPartNo",3,"sort"],["sortable","UOM",3,"sort"],["sortable","quantity",3,"sort"],["sortable","currency",3,"sort"],["sortable","netRate",3,"sort"],["sortable","lineValue",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","scheduleNo",3,"sort"],["sortable","dispatchDate",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[3,"ngClass"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["customerName",""]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Sample Request - Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," From Date "),t.TgZ(10,"span",8),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"input",9),t.NdJ("ngModelChange",function(o){return e.fromDate=o}),t.qZA()(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15," To Date "),t.TgZ(16,"span",8),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",9),t.NdJ("ngModelChange",function(o){return e.toDate=o}),t.qZA()(),t.TgZ(19,"div",10)(20,"span",11),t._UZ(21,"img",12),t.qZA(),t.TgZ(22,"button",13),t.NdJ("click",function(){return e.getAll()}),t._uU(23,"Apply Filter"),t.qZA(),t.TgZ(24,"button",14),t.NdJ("click",function(){return e.reset()}),t._uU(25,"Reset Filter"),t.qZA()()(),t._UZ(26,"hr",15),t.TgZ(27,"div",16)(28,"app-setting-header",17),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(29,"table",18)(30,"thead",19)(31,"tr",20)(32,"th",21),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(33,"SR No."),t.qZA(),t.TgZ(34,"th",22),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(35,"SR Date"),t.qZA(),t.TgZ(36,"th",23),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(37,"SKU Code"),t.qZA(),t.TgZ(38,"th",24),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(39),t.ALo(40,"labelTranslate"),t.qZA(),t.TgZ(41,"th",25),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(42),t.ALo(43,"labelTranslate"),t.qZA(),t.TgZ(44,"th",26),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(45,"Part No."),t.qZA(),t.TgZ(46,"th",27),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(47,"UoM"),t.qZA(),t.TgZ(48,"th",28),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(49,"SR Qty"),t.qZA(),t.TgZ(50,"th",29),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(51,"Ccy"),t.qZA(),t.TgZ(52,"th",30),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(53,"Net Rate"),t.qZA(),t.TgZ(54,"th",31),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(55,"Line Value"),t.qZA(),t.TgZ(56,"th",32),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(57,"Cust. Nick Name"),t.qZA(),t.TgZ(58,"th",33),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(59,"D/S"),t.qZA(),t.TgZ(60,"th",34),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(61,"Disp. Date"),t.qZA()()(),t.TgZ(62,"tbody"),t.YNc(63,A,37,32,"tr",35),t.qZA()()(),t.TgZ(64,"div",36),t._UZ(65,"hr",15),t.TgZ(66,"div",37)(67,"div",38)(68,"div",39)(69,"div",40),t._uU(70," SR Value "),t._UZ(71,"i",41),t.TgZ(72,"button",42),t._uU(73),t.ALo(74,"companyCurrency"),t.qZA()(),t._UZ(75,"input",43),t.ALo(76,"number"),t.qZA()(),t.TgZ(77,"div",44),t._uU(78),t.qZA()()()()()),2&s&&(t.xp6(12),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(20,f,e.page,e.pageSize,e.collection,e.search)),t.xp6(11),t.hij(" ",t.lcZ(40,11,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(43,13,"SKU Description")," "),t.xp6(21),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(10),t.Oqu(t.lcZ(74,15,"INR")),t.xp6(2),t.Q6J("value",t.xi3(76,17,e.SOValue,"1.2-2")),t.xp6(2),t.Q6J("ngClass",t.VKq(25,U,e.reportNameObj.aodForecastBySKUName).includes(e.reportName)?"col-6 text-end pe-5 text-black-50":"col-9 text-end pe-5 text-black-50"),t.xp6(1),t.hij(" ",e.reportQMSName," "))},dependencies:[u.mk,u.sg,S.P,b._L,Z.Fj,Z.JJ,Z.On,h.j,u.JJ,R.c,q.f],encapsulation:2}),p})();var N=a(56208);const v=[{path:"",component:y}];let D=(()=>{var l;class p{}return(l=p).\u0275fac=function(s){return new(s||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[u.ez,d.Bz.forChild(v),N.m]}),p})()},13107:(T,m,a)=>{a.d(m,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,m,a)=>{a.d(m,{J:()=>u});const u=({data:d,headers:h,widths:c,title:g})=>({tableData:{widths:c,headerRows:1,body:[h.map(i=>({text:i.header,style:"header"})),...d.map(i=>h.map(S=>({style:"subheader",text:i[S.key]})))]},title:g})}}]);