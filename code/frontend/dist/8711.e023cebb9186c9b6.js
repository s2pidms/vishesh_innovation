"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8711],{18711:(S,h,s)=>{s.r(h),s.d(h,{PDIReportReportModule:()=>_});var d=s(96814),g=s(1076),u=s(43818),m=s(25116),D=s(93709),t=s(65879),f=s(7791),p=s(98977),R=s(88059),b=s(37285),c=s(60095),v=s(50363),C=s(53421);function T(i,l){if(1&i){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",28,29)(7,"span",30),t._uU(8),t.qZA()(),t.TgZ(9,"td")(10,"div",31)(11,"img",32),t.NdJ("click",function(){const r=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateToPrint(r,"print"))}),t.qZA()()()()}if(2&i){const a=l.$implicit,o=t.MAs(6),e=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.preDispatchCode),t.xp6(2),t.Oqu(null==a?null:a.preDispatchDate),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",a.customerName),t.xp6(1),t.hij(" ",a.customerName," "),t.xp6(2),t.Q6J("accessType",e.rolePermissionActions.viewAction)}}const Z=function(i,l,a,o){return{page:i,pageSize:l,collection:a,search:o,type:"list",pdfDisplay:!0}};let A=(()=>{var i;class l{constructor(o,e,r,n,I,M){this.PDIREntryService=o,this.exportExcelService=e,this.spinner=r,this.activatedRoute=n,this.utilityService=I,this.exportToPDFService=M,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.customerList=[],this.customer="",this.templateNameObj=m.wC,this.rolePermissionActions=m.a1,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(o,e){return e?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.customer="",this.getAll()}getAll(o=!1,e=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,customer:this.customer,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.PDIREntryService.getAllReports(r).subscribe(n=>{"EXCEL"==e?this.excelDownload(n.rows):"PDF"==e?this.pdfDownload(n.rows):(this.tableData=n.rows,this.customerList=n.customerList,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let e=(0,D.ve)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,D.C$)(o))}navigateToPrint(o,e){let r="";r=o.template==this.templateNameObj.genericPDIReport?"/#/print/pdir_entry":"/#/print/tgy_pdir_entry",window.open(`${window.location.origin}${r}?id=${o?._id}&action=${e}`,"_blank")}onSort({column:o,direction:e}){this.headers.forEach(r=>{r.sortable!==o&&(r.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}}return(i=l).\u0275fac=function(o){return new(o||i)(t.Y36(f.gR),t.Y36(p.Ol),t.Y36(p.V),t.Y36(g.gz),t.Y36(p.tI),t.Y36(p.$L))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-pdi-report"]],viewQuery:function(o,e){if(1&o&&t.Gf(u.j,5),2&o){let r;t.iGM(r=t.CRH())&&(e.headers=r)}},decls:48,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","PDIRCode",3,"sort"],["sortable","PDIRDate",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",3,"accessType"],["src","./assets/images/file_pdf.png","width","20rem","alt","",1,"pointer",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"PDI Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Customer"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(n){return e.customer=n}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(n){return e.fromDate=n}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(n){return e.toDate=n}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(n){return e.eventHeader(n)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(39,"PDIR #"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(41,"PDIR Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(43,"Customer"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Action"),t.qZA()()(),t.TgZ(46,"tbody"),t.YNc(47,T,12,8,"tr",27),t.qZA()()()()()),2&o&&(t.xp6(10),t.Q6J("items",e.customerList)("clearable",!1)("ngModel",e.customer),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,Z,e.page,e.pageSize,e.collection,e.search)),t.xp6(13),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[d.sg,R.P,b._L,c.Fj,c.JJ,c.On,v.w9,u.j,C.J],encapsulation:2}),l})();var P=s(56208);const y=[{path:"",component:A}];let _=(()=>{var i;class l{}return(i=l).\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,g.Bz.forChild(y),P.m]}),l})()}}]);