"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[493],{94975:(A,d,r)=>{r.r(d),r.d(d,{NpdLostOrderAnalysisModule:()=>O});var p=r(96814),c=r(1076),u=r(25116),h=r(68551),g=r(43818),t=r(65879),m=r(78212),l=r(2742),T=r(88059),y=r(37285),_=r(60095),f=r(50363),v=r(53421);function Z(a,b){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",31,32)(7,"span",33),t._uU(8),t.qZA()(),t.TgZ(9,"td",31,34)(11,"span",33),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"div",35),t._UZ(19,"button",36),t.TgZ(20,"div",37)(21,"a",38),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo(o._id,"view","pdf"))}),t._UZ(22,"i",39),t._uU(23," View "),t.qZA(),t.TgZ(24,"a",38),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateToPrint(o._id,"view","print"))}),t._UZ(25,"i",40),t._uU(26," Print "),t.qZA()()()()()}if(2&a){const e=b.$implicit,i=t.MAs(6),n=t.MAs(10),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.NPDNo),t.xp6(2),t.Oqu(null==e?null:e.NPDDate),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.projectName),t.xp6(1),t.hij(" ",null==e?null:e.projectName," "),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.name),t.xp6(1),t.hij(" ",null==e?null:e.name," "),t.xp6(2),t.Oqu(null==e?null:e.productCategory),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.viewAction)}}const C=function(a,b,e,i){return{page:a,pageSize:b,collection:e,search:i,type:"list",pdfDisplay:!0}};let N=(()=>{class a{constructor(e,i,n,o,s,S,P,L,U){this.npdReviewService=e,this.router=i,this.exportExcelService=n,this.spinner=o,this.utilityService=s,this.activatedRoute=S,this.exportToPDFService=P,this.appGlobalService=L,this.storageService=U,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.customerOptions=[],this.customerId="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.rolePermissionActions=u.a1,this.menuTitleData={},this.tabType=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}trackByFn(e,i){return i?._id}navigateTo(e,i,n){let o=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/npd_review/print_form?id=${e}&action=${i}&pdfAction=${n}&buttonCondition=${o}`,"_blank")}navigateToPrint(e,i,n){let o=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/npd_review_feasibility_print_screen?id=${e}&action=${i}&pdfAction=${n}&buttonCondition=${o}`,"_blank")}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.customerId="",this.getAll()}getAll(e=!1,i=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,referenceName:this.customerId,excel:e,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.npdReviewService.getAllNPDFinalStatusReport(n).subscribe(o=>{"EXCEL"==i?this.excelDownload(o.rows):"PDF"==i?this.pdfDownload(o.rows):(this.tableData=o.rows,this.customerOptions=o.customers,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,h.i)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,h.B)(e))}onSort({column:e,direction:i}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||a)(t.Y36(m.f9),t.Y36(c.F0),t.Y36(l.Ol),t.Y36(l.V),t.Y36(l.tI),t.Y36(c.gz),t.Y36(l.$L),t.Y36(l.P0),t.Y36(l.V1))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-npd-lost-order-analysis"]],viewQuery:function(i,n){if(1&i&&t.Gf(g.j,5),2&i){let o;t.iGM(o=t.CRH())&&(n.headers=o)}},decls:54,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","name","bindValue","name",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","NPDNo",3,"sort"],["sortable","NPDDate",3,"sort"],["sortable","projectName",1,"text-start",3,"sort"],["sortable","name",1,"text-start",3,"sort"],["sortable","productCategory",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["projectName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["name",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-print","fa-lg","me-3","text-primary"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"NPD Lost Order analysis Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Customer/Prospect Name"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(s){return n.customerId=s}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(s){return n.fromDate=s}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(s){return n.toDate=s}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return n.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return n.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(s){return n.eventHeader(s)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(39,"NPD No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(41,"NPD Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(43,"Project Name"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(45,"Customer/Prospect Name"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(47,"Product Category"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(49,"Status"),t.qZA(),t.TgZ(50,"th",29),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(51,"Action"),t.qZA()()(),t.TgZ(52,"tbody"),t.YNc(53,Z,27,16,"tr",30),t.qZA()()()()()),2&i&&(t.xp6(10),t.Q6J("items",n.customerOptions)("clearable",!1)("ngModel",n.customerId),t.xp6(8),t.Q6J("ngModel",n.fromDate),t.xp6(6),t.Q6J("ngModel",n.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,C,n.page,n.pageSize,n.collection,n.search)),t.xp6(19),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[p.sg,T.P,y._L,_.Fj,_.JJ,_.On,f.w9,g.j,v.J],encapsulation:2})}return a})();var D=r(56208);const w=[{path:"",component:N}];let O=(()=>{class a{static#t=this.\u0275fac=function(i){return new(i||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[p.ez,D.m,c.Bz.forChild(w)]})}return a})()},13107:(A,d,r)=>{r.d(d,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(A,d,r)=>{r.d(d,{J:()=>p});const p=({data:c,headers:u,widths:h,title:g})=>({tableData:{widths:h,headerRows:1,body:[u.map(l=>({text:l.header,style:"header"})),...c.map(l=>u.map(T=>({style:"subheader",text:l[T.key]})))]},title:g})}}]);