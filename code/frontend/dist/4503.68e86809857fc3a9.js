"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4503],{24503:(P,h,s)=>{s.r(h),s.d(h,{PurchaseOrderSummaryReportModule:()=>D});var m=s(96814),d=s(1076),g=s(43818),c=s(98687),t=s(65879),y=s(48720),p=s(2742),Z=s(88059),f=s(37285),l=s(60095),b=s(50363),T=s(83344);function _(i,u){if(1&i&&(t.TgZ(0,"option",44),t._uU(1),t.qZA()),2&i){const e=u.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function A(i,u){if(1&i&&(t.TgZ(0,"tr")(1,"td",45,46)(3,"span",47),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"number"),t.qZA()()),2&i){const e=u.$implicit,n=t.MAs(2);t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.supplierName)("positionTarget",n),t.xp6(1),t.hij(" ",null==e?null:e.supplierName," "),t.xp6(2),t.Oqu(null==e?null:e.dateRange),t.xp6(2),t.Oqu(null==e?null:e.itemCategory),t.xp6(2),t.Oqu(null==e?null:e.totalOrders),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Oqu(t.xi3(15,11,null==e?null:e.totalAmount,".2-2")),t.xp6(3),t.Oqu(t.xi3(18,14,null==e?null:e.avgOrderValue,".2-2"))}}const v=function(i,u,e,n){return{page:i,pageSize:u,collection:e,search:n,type:"list",pdfDisplay:!0}};let C=(()=>{class i{constructor(e,n,r,o,a,U){this.purchaseOrderService=e,this.exportExcelService=n,this.spinner=r,this.utilityService=o,this.activatedRoute=a,this.exportToPDFService=U,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.supplierOptions=[],this.itemsOptions=[],this.supplier="",this.itemCategory="",this.totalAmount=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(e,n){return n?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.supplier="",this.itemCategory="",this.getAll()}getAll(e=!1,n=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,supplier:this.supplier,itemCategory:this.itemCategory,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseOrderService.getAllPOSummaryReports(r).subscribe(o=>{"EXCEL"==n?this.excelDownload(o.rows):"PDF"==n?this.pdfDownload(o.rows):(this.tableData=o.rows,this.supplierOptions=o.suppliers,this.itemsOptions=o.itemsOptions,this.collection=o.count,this.totalAmount=o?.totalAmounts?.totalSumAmount?o?.totalAmounts?.totalSumAmount:0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let n=(0,c.EV)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}excelDownload(e){this.exportExcelService.exportExcel((0,c.TJ)(e))}onSort({column:e,direction:n}){this.headers.forEach(r=>{r.sortable!==e&&(r.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(y.x$),t.Y36(p.Ol),t.Y36(p.V),t.Y36(p.tI),t.Y36(d.gz),t.Y36(p.$L))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-purchase-order-summary-report"]],viewQuery:function(n,r){if(1&n&&t.Gf(g.j,5),2&n){let o;t.iGM(o=t.CRH())&&(r.headers=o)}},decls:74,vars:22,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5"],[1,"form-label"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"col-2","ps-0","separate-row"],[1,"form-select",3,"ngModel","ngModelChange"],["selected","","disabled","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-2"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","dateRange",3,"sort"],["sortable","itemCategory",3,"sort"],["sortable","totalOrders",3,"sort"],["sortable","currency",3,"sort"],["sortable","totalAmount",3,"sort"],["sortable","avgOrderValue",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[3,"value"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"ngbTooltip","positionTarget"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Purchase Order Summary Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Supplier"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(a){return r.supplier=a}),t.qZA()(),t.TgZ(11,"div",9)(12,"label",7),t._uU(13,"Item Category"),t.qZA(),t.TgZ(14,"select",10),t.NdJ("ngModelChange",function(a){return r.itemCategory=a}),t.TgZ(15,"option",11),t._uU(16,"Select Item Category"),t.qZA(),t.YNc(17,_,2,2,"option",12),t.qZA(),t.TgZ(18,"span",13),t._UZ(19,"img",14),t.qZA()(),t.TgZ(20,"div",15)(21,"label",7),t._uU(22," From Date "),t.TgZ(23,"span",16),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"input",17),t.NdJ("ngModelChange",function(a){return r.fromDate=a}),t.qZA()(),t.TgZ(26,"div",15)(27,"label",7),t._uU(28," To Date "),t.TgZ(29,"span",16),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"input",17),t.NdJ("ngModelChange",function(a){return r.toDate=a}),t.qZA()(),t.TgZ(32,"div",18)(33,"span",19),t._UZ(34,"img",14),t.qZA(),t.TgZ(35,"button",20),t.NdJ("click",function(){return r.getAll()}),t._uU(36,"Apply Filter"),t.qZA(),t.TgZ(37,"button",21),t.NdJ("click",function(){return r.reset()}),t._uU(38,"Reset Filter"),t.qZA()()(),t._UZ(39,"hr",22),t.TgZ(40,"div",23)(41,"app-setting-header",24),t.NdJ("dataChange",function(a){return r.eventHeader(a)}),t.qZA(),t.TgZ(42,"table",25)(43,"thead",26)(44,"tr",27)(45,"th",28),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(46,"Supplier"),t.qZA(),t.TgZ(47,"th",29),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(48,"Date Range"),t.qZA(),t.TgZ(49,"th",30),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(50,"Item Category"),t.qZA(),t.TgZ(51,"th",31),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(52,"Total Orders"),t.qZA(),t.TgZ(53,"th",32),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(54,"Currency"),t.qZA(),t.TgZ(55,"th",33),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(56,"Total Amount"),t.qZA(),t.TgZ(57,"th",34),t.NdJ("sort",function(a){return r.onSort(a)}),t._uU(58,"Average Order Value"),t.qZA()()(),t.TgZ(59,"tbody"),t.YNc(60,A,19,17,"tr",35),t.qZA()()(),t.TgZ(61,"div",36),t._UZ(62,"hr",22),t.TgZ(63,"div",37)(64,"div",38)(65,"div",39)(66,"div",40),t._uU(67," Total Amount Value"),t._UZ(68,"i",41),t.TgZ(69,"button",42),t._uU(70),t.ALo(71,"companyCurrency"),t.qZA()(),t._UZ(72,"input",43),t.ALo(73,"number"),t.qZA()()()()()()),2&n&&(t.xp6(10),t.Q6J("items",r.supplierOptions)("clearable",!1)("ngModel",r.supplier),t.xp6(4),t.Q6J("ngModel",r.itemCategory),t.xp6(3),t.Q6J("ngForOf",r.itemsOptions),t.xp6(8),t.Q6J("ngModel",r.fromDate),t.xp6(6),t.Q6J("ngModel",r.toDate),t.xp6(10),t.Q6J("data",t.l5B(17,v,r.page,r.pageSize,r.collection,r.search)),t.xp6(19),t.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn),t.xp6(10),t.Oqu(t.lcZ(71,12,"INR")),t.xp6(2),t.Q6J("value",t.xi3(73,14,r.totalAmount,"1.2-2")))},dependencies:[m.sg,Z.P,f._L,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.On,b.w9,g.j,m.JJ,T.f],encapsulation:2})}return i})();var S=s(56208);const O=[{path:"",component:C}];let D=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#r=this.\u0275inj=t.cJS({imports:[m.ez,d.Bz.forChild(O),S.m]})}return i})()}}]);