"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2360],{22360:(F,h,a)=>{a.r(h),a.d(h,{JobCardModule:()=>j});var d=a(96814),u=a(1076),g=a(43818),m=a(25116),b=a(57681),t=a(65879),C=a(38011),l=a(99328),T=a(88059),_=a(37285),p=a(60095),Z=a(50363),f=a(53421),A=a(14906);function N(s,c){if(1&s&&(t.TgZ(0,"option",36),t._uU(1),t.qZA()),2&s){const e=c.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.label," ")}}function v(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"div",37)(1,"label",7),t._uU(2,"Report Specific Search"),t.qZA(),t.TgZ(3,"ng-select",38),t.NdJ("ngModelChange",function(o){t.CHM(e);const n=t.oxw();return t.KtG(n.customerId=o)}),t.qZA(),t.TgZ(4,"span",10),t._UZ(5,"img",11),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("items",e.customerOptions)("clearable",!1)("ngModel",e.customerId)}}function J(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",39,40)(9,"span",41),t._uU(10),t.qZA()(),t.TgZ(11,"td",39,42)(13,"span",41),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td",39,43)(19,"span",41),t._uU(20),t.qZA()(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"div",44)(25,"img",45),t.NdJ("click",function(){const n=t.CHM(e).$implicit,i=t.oxw();return t.KtG(i.navigateTo(n,"print"))}),t.qZA()()()()}if(2&s){const e=c.$implicit,r=t.MAs(8),o=t.MAs(12),n=t.MAs(18),i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.jobCardNo),t.xp6(2),t.Oqu(null==e?null:e.jobCardDate),t.xp6(2),t.Oqu(null==e?null:e.SKUNo),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",e.SKUName),t.xp6(1),t.hij(" ",e.SKUName?e.SKUName:null," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.SKUDescription),t.xp6(1),t.hij(" ",e.SKUDescription?e.SKUDescription:null," "),t.xp6(2),t.Oqu(null==e?null:e.batchQty),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.customerNickName),t.xp6(1),t.hij(" ",e.customerNickName?e.customerNickName:null," "),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(2),t.Q6J("accessType",i.rolePermissionActions.viewAction)}}const S=function(s){return[s]},y=function(s,c,e,r){return{page:s,pageSize:c,collection:e,search:r,type:"list",pdfDisplay:!0}};let U=(()=>{class s{constructor(e,r,o,n,i,M,O,w){this.jobCardCreationService=e,this.exportToPDFService=r,this.spinner=o,this.exportExcelService=n,this.appGlobalService=i,this.utilityService=M,this.storageService=O,this.activatedRoute=w,this.page=1,this.pageSize=12,this.collection=0,this.column="jobCardNo",this.direction=-1,this.search="",this.tableData=[],this.customerOptions=[],this.toDate="",this.reportNameObj=m.zK,this.reportNameArr=this.reportNameObj.getAllReportName(),this.reportName=this.reportNameObj.jobCard,this.customerId="",this.rolePermissionActions=m.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.menuTitleData=this.storageService.get("menuTitle"),this.getFiscalDate(),this.getAll(),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}getFiscalDate(){let e=this.utilityService.getCurrentMonthDates();this.toDate=e.toDate}navigateTo(e,r){let o=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/job_card_print?id=${e?._id}&action=${r}&buttonCondition=${o}&orderType=${e?.orderType}`,"_blank")}trackByFn(e,r){return r?._id}reset(){this.getFiscalDate(),this.reportName=this.reportNameObj.jobCard,this.customerId="",this.getAll()}setReportName(){this.reportName!=this.reportNameObj.jobCard&&(this.customerId="")}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,r=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,customerId:this.customerId,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.jobCardCreationService.getAllReports(o).subscribe(n=>{"EXCEL"==r?this.excelDownload(n.rows):"PDF"==r?this.pdfDownload(n.rows):(this.tableData=n.rows,this.customerOptions=n.customerOptions,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let r=(0,b.h6)(e);this.exportToPDFService.generatePdf(r.tableData,r.title)}excelDownload(e){this.exportExcelService.exportExcel((0,b.rn)(e))}onSort({column:e,direction:r}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==r?1:-1,this.getAll()}static#t=this.\u0275fac=function(r){return new(r||s)(t.Y36(C.s2),t.Y36(l.$L),t.Y36(l.V),t.Y36(l.Ol),t.Y36(l.P0),t.Y36(l.tI),t.Y36(l.V1),t.Y36(u.gz))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-job-card"]],viewQuery:function(r,o){if(1&r&&t.Gf(g.j,5),2&r){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},decls:55,vars:20,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"form-select",3,"ngModel","change","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["class","col-3 separate-row",4,"ngIf"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","jobCardNo",3,"sort"],["sortable","jobCardDate",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","batchQty",3,"sort"],["sortable","customerNickName",1,"text-start",3,"sort"],["sortable","status",3,"sort"],["sortable","",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"col-3","separate-row"],["bindLabel","label","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["customerNickName",""],["appAccessControl","",1,"",3,"accessType"],["src","./assets/new_icons/pdf_icon.svg","width","15rem","alt","",1,"pointer",3,"click"]],template:function(r,o){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Job Card - Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Report Name"),t.qZA(),t.TgZ(10,"select",8),t.NdJ("change",function(){return o.setReportName()})("ngModelChange",function(i){return o.reportName=i}),t.YNc(11,N,2,2,"option",9),t.qZA(),t.TgZ(12,"span",10),t._UZ(13,"img",11),t.qZA()(),t.YNc(14,v,6,3,"div",12),t.TgZ(15,"div",13)(16,"label",7),t._uU(17," As on Date "),t._UZ(18,"span",14),t.qZA(),t.TgZ(19,"input",15),t.NdJ("ngModelChange",function(i){return o.toDate=i}),t.qZA()(),t.TgZ(20,"div",16)(21,"span",17),t._UZ(22,"img",11),t.qZA(),t.TgZ(23,"button",18),t.NdJ("click",function(){return o.getAll()}),t._uU(24,"Apply Filter"),t.qZA(),t.TgZ(25,"button",19),t.NdJ("click",function(){return o.reset()}),t._uU(26,"Reset Filter"),t.qZA()()(),t._UZ(27,"hr",20),t.TgZ(28,"div",21)(29,"app-setting-header",22),t.NdJ("dataChange",function(i){return o.eventHeader(i)}),t.qZA(),t.TgZ(30,"table",23)(31,"thead",24)(32,"tr",25)(33,"th",26),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(34,"JC No."),t.qZA(),t.TgZ(35,"th",27),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(36,"JC Date"),t.qZA(),t.TgZ(37,"th",28),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(38,"SKU No."),t.qZA(),t.TgZ(39,"th",29),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(40),t.ALo(41,"labelTranslate"),t.qZA(),t.TgZ(42,"th",30),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(43),t.ALo(44,"labelTranslate"),t.qZA(),t.TgZ(45,"th",31),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(46,"Batch Qty."),t.qZA(),t.TgZ(47,"th",32),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(48," Customer/Prospect Nick Name "),t.qZA(),t.TgZ(49,"th",33),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(50,"Status"),t.qZA(),t.TgZ(51,"th",34),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(52,"View"),t.qZA()()(),t.TgZ(53,"tbody"),t.YNc(54,J,26,21,"tr",35),t.qZA()()()()()),2&r&&(t.xp6(10),t.Q6J("ngModel",o.reportName),t.xp6(1),t.Q6J("ngForOf",o.reportNameArr),t.xp6(3),t.Q6J("ngIf",t.VKq(13,S,o.reportNameObj.jobCardByCustomer).includes(o.reportName)),t.xp6(5),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(15,y,o.page,o.pageSize,o.collection,o.search)),t.xp6(11),t.hij(" ",t.lcZ(41,9,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(44,11,"SKU Description")," "),t.xp6(11),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[d.sg,d.O5,T.P,_._L,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.On,Z.w9,g.j,f.J,A.c],encapsulation:2})}return s})();var D=a(56208);const x=[{path:"",component:U}];let j=(()=>{class s{static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275mod=t.oAB({type:s});static#o=this.\u0275inj=t.cJS({imports:[d.ez,u.Bz.forChild(x),D.m]})}return s})()}}]);