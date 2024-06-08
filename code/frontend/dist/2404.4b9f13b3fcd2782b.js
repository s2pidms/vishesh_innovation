"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2404],{12404:(P,h,s)=>{s.r(h),s.d(h,{PurchaseIndentModule:()=>E});var c=s(96814),g=s(1076),p=s(43818),T=s(25116),l=s(13107),b=s(28402);let _=[63,63,63,63,63,63,63,63],u="Purchase Indent Report",m=[{header:"IO No.",key:"indentOrderNo",...l.t},{header:"IO Date",key:"indentOrderDates",...l.t},{header:"Purchase Category",key:"purchaseCategory",...l.t},{header:"Channel Partner Name",key:"channelPartnerName",...l.t},{header:"Currency",key:"currency",...l.t},{header:"IO Value",key:"netPIValue",...l.t},{header:"Status",key:"status",...l.t}];var t=s(65879),v=s(48720),d=s(99328),C=s(88059),D=s(37285),y=s(60095),I=s(50363),O=s(53421),S=s(83344);function N(i,Z){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",40,41)(9,"span",42),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"div",43)(19,"img",44),t.NdJ("click",function(){const a=t.CHM(e).$implicit,o=t.oxw();return t.KtG(o.navigateTo(a,"print"))}),t.qZA()()()()}if(2&i){const e=Z.$implicit,r=t.MAs(8),n=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.indentOrderNo),t.xp6(2),t.Oqu(null==e?null:e.indentOrderDates),t.xp6(2),t.Oqu(null==e?null:e.purchaseCategory),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",e.channelPartnerName),t.xp6(1),t.hij(" ",e.channelPartnerName," "),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Oqu(null==e?null:e.netPIValue),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(2),t.Q6J("accessType",n.rolePermissionActions.viewAction)}}const U=function(i,Z,e,r){return{page:i,pageSize:Z,collection:e,search:r,type:"list",pdfDisplay:!0}};let J=(()=>{class i{constructor(e,r,n,a,o,M,q,F){this.purchaseIndentService=e,this.exportExcelService=r,this.spinner=n,this.utilityService=a,this.appGlobalService=o,this.storageService=M,this.activatedRoute=q,this.exportToPDFService=F,this.page=1,this.pageSize=12,this.collection=0,this.column="indentOrderNo",this.direction=-1,this.search="",this.tableData=[],this.channelPartnerOptions=[],this.channelPartner="",this.rolePermissionActions=T.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType="",this.totalIOValue=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}navigateTo(e,r){let n=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/purchase_indent_print_screen?id=${e?._id}&action=${r}&buttonCondition=${n}`,"_blank")}trackByFn(e,r){return r?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.channelPartner="",this.getAll()}getAll(e=!1,r=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,channelPartner:this.channelPartner,toDate:this.toDate,fromDate:this.fromDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseIndentService.getAllReports(n).subscribe(a=>{"EXCEL"==r?this.excelDownload(a.rows):"PDF"==r?this.pdfDownload(a.rows):(this.tableData=a.rows,this.channelPartnerOptions=a.channelPartnerOptions,this.collection=a.count,this.totalIOValue=a?.totalAmounts?.netPIValue?(a?.totalAmounts?.netPIValue).toFixed(2):0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let r=(i=>(0,b.J)({data:i,headers:m,widths:_,title:u}))(e);this.exportToPDFService.generatePdf(r.tableData,r.title)}excelDownload(e){this.exportExcelService.exportExcel((i=>({title:u,csvData:i,headers:m}))(e))}onSort({column:e,direction:r}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==r?1:-1,this.getAll()}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(v.K4),t.Y36(d.Ol),t.Y36(d.V),t.Y36(d.tI),t.Y36(d.P0),t.Y36(d.V1),t.Y36(g.gz),t.Y36(d.$L))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-purchase-indent"]],viewQuery:function(r,n){if(1&r&&t.Gf(p.j,5),2&r){let a;t.iGM(a=t.CRH())&&(n.headers=a)}},decls:70,vars:20,consts:[[1,"reportTablePage"],[1,"pb-0","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","mt-4","mb-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","channelPartnerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","indentOrderNo",3,"sort"],["sortable","indentOrderDate",3,"sort"],["sortable","purchaseCategory",3,"sort"],["sortable","channelPartnerName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],["sortable","netPIValue",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"mx-1"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["channelPartnerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",1,"",3,"accessType"],["src","./assets/new_icons/pdf_icon.svg","width","15rem","alt","",1,"pointer",3,"click"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Purchase Indent Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Channel Partner Name "),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(o){return n.channelPartner=o}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(o){return n.fromDate=o}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(o){return n.toDate=o}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return n.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return n.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(o){return n.eventHeader(o)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(39,"IO No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(41,"IO Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(43,"Purchase Category"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(45," Channel Partner Name "),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(47,"Ccy"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(49,"IO Value"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(51,"IO Status"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Action"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,N,20,12,"tr",31),t.qZA()()(),t.TgZ(56,"div",32),t._UZ(57,"hr",18),t.TgZ(58,"div",33)(59,"div",34)(60,"div",35)(61,"div",36),t._uU(62," Total IO Value "),t.TgZ(63,"span",37),t._uU(64,"\u25b6"),t.qZA(),t.TgZ(65,"button",38),t._uU(66),t.ALo(67,"companyCurrency"),t.qZA()(),t._UZ(68,"input",39),t.ALo(69,"number"),t.qZA()()()()()()),2&r&&(t.xp6(10),t.Q6J("items",n.channelPartnerOptions)("clearable",!1)("ngModel",n.channelPartner),t.xp6(8),t.Q6J("ngModel",n.fromDate),t.xp6(6),t.Q6J("ngModel",n.toDate),t.xp6(10),t.Q6J("data",t.l5B(15,U,n.page,n.pageSize,n.collection,n.search)),t.xp6(21),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn),t.xp6(11),t.Oqu(t.lcZ(67,10,"INR")),t.xp6(2),t.Q6J("value",t.xi3(69,12,n.totalIOValue,"1.2-2")))},dependencies:[c.sg,C.P,D._L,y.Fj,y.JJ,y.On,I.w9,p.j,O.J,c.JJ,S.f],encapsulation:2})}return i})();var x=s(56208);const w=[{path:"",component:J}];let E=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[c.ez,g.Bz.forChild(w),x.m]})}return i})()},13107:(P,h,s)=>{s.d(h,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(P,h,s)=>{s.d(h,{J:()=>c});const c=({data:g,headers:p,widths:T,title:l})=>({tableData:{widths:T,headerRows:1,body:[p.map(u=>({text:u.header,style:"header"})),...g.map(u=>p.map(m=>({style:"subheader",text:u[m.key]})))]},title:l})}}]);