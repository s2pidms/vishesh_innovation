"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7046],{8228:(y,l,s)=>{s.r(l),s.d(l,{FGCorrectionHistoryReportModule:()=>v});var p=s(96814),d=s(1076),h=s(43818),g=s(95249),t=s(65879),m=s(79475),c=s(99328),u=s(88059),_=s(37285),C=s(60095),b=s(50363),Z=s(14906);function f(a,T){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",34,35)(7,"span",36),t._uU(8),t.qZA()(),t.TgZ(9,"td",34,37)(11,"span",36),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA()()),2&a){const e=T.$implicit,n=t.MAs(6),o=t.MAs(10);t.xp6(2),t.Oqu(null==e?null:e.FGDate),t.xp6(2),t.Oqu(null==e?null:e.SKUNo),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.SKUName),t.xp6(1),t.hij(" ",e.SKUName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.SKUDescription),t.xp6(1),t.hij(" ",e.SKUDescription," "),t.xp6(2),t.Oqu(null==e?null:e.correctionCategory),t.xp6(2),t.Oqu(null==e?null:e.sourceBatch),t.xp6(2),t.Oqu(null==e?null:e.destinationBatch),t.xp6(2),t.Oqu(e.transferQty),t.xp6(2),t.Oqu(null==e?null:e.availableSourceQty)}}const S=function(a,T,e,n){return{page:a,pageSize:T,collection:e,search:n,type:"list",pdfDisplay:!0}};let U=(()=>{class a{constructor(e,n,o,i,r,F){this.FGCorrectionService=e,this.exportExcelService=n,this.spinner=o,this.utilityService=i,this.activatedRoute=r,this.exportToPDFService=F,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.SKUList=[],this.SKU="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(e,n){return n?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.SKU="",this.getAll()}getAll(e=!1,n=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,SKU:this.SKU,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.FGCorrectionService.getAllFGCorrectionHistoryReports(o).subscribe(i=>{"EXCEL"==n?this.excelDownload(i.rows):"PDF"==n?this.pdfDownload(i.rows):(this.tableData=i.rows,this.SKUList=i.SKUList,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let n=(0,g.g)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}excelDownload(e){this.exportExcelService.exportExcel((0,g.W)(e))}onSort({column:e,direction:n}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(m.kE),t.Y36(c.Ol),t.Y36(c.V),t.Y36(c.tI),t.Y36(d.gz),t.Y36(c.$L))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-fg-correction-history"]],viewQuery:function(n,o){if(1&n&&t.Gf(h.j,5),2&n){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:60,vars:19,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","SKUName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","FGDate",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","correctionCategory",3,"sort"],["sortable","sourceBatch",3,"sort"],["sortable","destinationBatch",3,"sort"],["sortable","transferQty",3,"sort"],["sortable","availableSourceQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"FG Correction History Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"SKUName"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(r){return o.SKU=r}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(r){return o.fromDate=r}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(r){return o.toDate=r}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return o.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return o.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(r){return o.eventHeader(r)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(39,"FG Date"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(41,"SKU No"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(43),t.ALo(44,"labelTranslate"),t.qZA(),t.TgZ(45,"th",27),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(46),t.ALo(47,"labelTranslate"),t.qZA(),t.TgZ(48,"th",28),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(49,"Correction Type"),t.qZA(),t.TgZ(50,"th",29),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(51,"Source Batch"),t.qZA(),t.TgZ(52,"th",30),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(53,"Destination Batch"),t.qZA(),t.TgZ(54,"th",31),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(55,"Transfer Qty"),t.qZA(),t.TgZ(56,"th",32),t.NdJ("sort",function(r){return o.onSort(r)}),t._uU(57,"Available Source Qty"),t.qZA()()(),t.TgZ(58,"tbody"),t.YNc(59,f,23,17,"tr",33),t.qZA()()()()()),2&n&&(t.xp6(10),t.Q6J("items",o.SKUList)("clearable",!1)("ngModel",o.SKU),t.xp6(8),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(14,S,o.page,o.pageSize,o.collection,o.search)),t.xp6(9),t.hij(" ",t.lcZ(44,10,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(47,12,"SKU Description")," "),t.xp6(13),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[p.sg,u.P,_._L,C.Fj,C.JJ,C.On,b.w9,h.j,Z.c],encapsulation:2})}return a})();var A=s(56208);const D=[{path:"",component:U}];let v=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[p.ez,d.Bz.forChild(D),A.m]})}return a})()},13107:(y,l,s)=>{s.d(l,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(y,l,s)=>{s.d(l,{J:()=>p});const p=({data:d,headers:h,widths:g,title:t})=>({tableData:{widths:g,headerRows:1,body:[h.map(u=>({text:u.header,style:"header"})),...d.map(u=>h.map(_=>({style:"subheader",text:u[_.key]})))]},title:t})}}]);