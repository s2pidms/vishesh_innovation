"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1742],{91742:(M,d,r)=>{r.r(d),r.d(d,{DebitNoteSummaryModule:()=>C});var u=r(96814),h=r(1076),c=r(43818),g=r(73093),t=r(65879),b=r(48720),p=r(2742),D=r(88059),y=r(37285),m=r(60095),f=r(50363),A=r(83344);function Z(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td",36,37)(3,"span",38),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&a){const s=l.$implicit,o=t.MAs(2);t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",s.supplierName)("positionTarget",o),t.xp6(1),t.hij(" ",null==s?null:s.supplierName," "),t.xp6(2),t.Oqu(null==s?null:s.totalDebitNotes),t.xp6(2),t.Oqu(null==s?null:s.totalAmountDebited)}}const v=function(a,l,s,o){return{page:a,pageSize:l,collection:s,search:o,type:"list",pdfDisplay:!0}};let T=(()=>{var a;class l{constructor(o,e,n,i,_,F){this.debitNoteService=o,this.exportExcelService=e,this.exportToPDFService=n,this.spinner=i,this.utilityService=_,this.activatedRoute=F,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.statusOptionsArr=[],this.supplierOptions=[],this.fromDate="",this.toDate="",this.supplierId="",this.statusOptions="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}trackByFn(o,e){return e?._id}getFiscalDate(){let o=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(o.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(o.toDate,"YYYY-MM-DD")}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}reset(){this.getFiscalDate(),this.supplierId="",this.statusOptions="",this.getAll()}getAll(o=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,supplier:this.supplierId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.debitNoteService.getAllDNSummaryReports(n).subscribe(i=>{"EXCEL"==e?this.excelDownload(i.rows):"PDF"==e?this.pdfDownload(i.rows):(this.tableData=i.rows,this.statusOptionsArr=i.statusOptions,this.supplierOptions=i.suppliers,this.collection=i.count,this.company=i.company,this.totalAmount=i?.totalAmounts?.totalAmountDebited?i?.totalAmounts?.totalAmountDebited:0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let e=(0,g.iL)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,g.fT)(o))}onSort({column:o,direction:e}){this.headers.forEach(n=>{n.sortable!==o&&(n.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}}return(a=l).\u0275fac=function(o){return new(o||a)(t.Y36(b.pJ),t.Y36(p.Ol),t.Y36(p.$L),t.Y36(p.V),t.Y36(p.tI),t.Y36(h.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-debit-note-summary"]],viewQuery:function(o,e){if(1&o&&t.Gf(c.j,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:60,vars:23,consts:[[1,"reportTablePage"],[1,"col-md-12","pb-0","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","mt-4","mb-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","totalDebitNotes",3,"sort"],["sortable","totalAmountDebited",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"ngbTooltip","positionTarget"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Debit Note Summary Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Supplier"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(i){return e.supplierId=i}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(i){return e.fromDate=i}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(i){return e.toDate=i}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(i){return e.eventHeader(i)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(39,"Supplier"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(41,"Total Debit Notes"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(i){return e.onSort(i)}),t._uU(43),t.ALo(44,"companyCurrency"),t.qZA()()(),t.TgZ(45,"tbody"),t.YNc(46,Z,9,7,"tr",27),t.qZA()()(),t.TgZ(47,"div",28),t._UZ(48,"hr",18),t.TgZ(49,"div",29)(50,"div",30)(51,"div",31)(52,"div",32),t._uU(53," Total Debited Amount"),t._UZ(54,"i",33),t.TgZ(55,"button",34),t._uU(56),t.ALo(57,"companyCurrency"),t.qZA()(),t._UZ(58,"input",35),t.ALo(59,"currency"),t.qZA()()()()()()),2&o&&(t.xp6(10),t.Q6J("items",e.supplierOptions)("clearable",!1)("ngModel",e.supplierId),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(18,v,e.page,e.pageSize,e.collection,e.search)),t.xp6(9),t.hij(" Total Amount Debited (",t.lcZ(44,11,"INR"),") "),t.xp6(3),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(10),t.Oqu(t.lcZ(57,13,"INR")),t.xp6(2),t.Q6J("value",t.xi3(59,15,e.totalAmount,"INR")))},dependencies:[u.sg,D.P,y._L,m.Fj,m.JJ,m.On,f.w9,c.j,u.H9,A.f],encapsulation:2}),l})();var N=r(56208);const S=[{path:"",component:T}];let C=(()=>{var a;class l{}return(a=l).\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,h.Bz.forChild(S),N.m]}),l})()}}]);