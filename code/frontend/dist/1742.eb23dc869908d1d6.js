"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1742],{91742:(F,h,a)=>{a.r(h),a.d(h,{DebitNoteSummaryModule:()=>C});var p=a(96814),d=a(1076),c=a(43818),g=a(98687),t=a(65879),b=a(74659),l=a(98977),D=a(88059),f=a(37285),u=a(60095),y=a(50363),A=a(83344);function Z(s,m){if(1&s&&(t.TgZ(0,"tr")(1,"td",36,37)(3,"span",38),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&s){const e=m.$implicit,o=t.MAs(2);t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.supplierName)("positionTarget",o),t.xp6(1),t.hij(" ",null==e?null:e.supplierName," "),t.xp6(2),t.Oqu(null==e?null:e.totalDebitNotes),t.xp6(2),t.Oqu(null==e?null:e.totalAmountDebited)}}const v=function(s,m,e,o){return{page:s,pageSize:m,collection:e,search:o,type:"list",pdfDisplay:!0}};let T=(()=>{class s{constructor(e,o,i,n,r,_){this.debitNoteService=e,this.exportExcelService=o,this.exportToPDFService=i,this.spinner=n,this.utilityService=r,this.activatedRoute=_,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.statusOptionsArr=[],this.supplierOptions=[],this.fromDate="",this.toDate="",this.supplierId="",this.statusOptions="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}trackByFn(e,o){return o?._id}getFiscalDate(){let e=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(e.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(e.toDate,"YYYY-MM-DD")}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.getFiscalDate(),this.supplierId="",this.statusOptions="",this.getAll()}getAll(e=!1,o=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,supplier:this.supplierId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.debitNoteService.getAllDNSummaryReports(i).subscribe(n=>{"EXCEL"==o?this.excelDownload(n.rows):"PDF"==o?this.pdfDownload(n.rows):(this.tableData=n.rows,this.statusOptionsArr=n.statusOptions,this.supplierOptions=n.suppliers,this.collection=n.count,this.company=n.company,this.totalAmount=n?.totalAmounts?.totalAmountDebited?n?.totalAmounts?.totalAmountDebited:0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let o=(0,g.iL)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){this.exportExcelService.exportExcel((0,g.fT)(e))}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(b.pJ),t.Y36(l.Ol),t.Y36(l.$L),t.Y36(l.V),t.Y36(l.tI),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-debit-note-summary"]],viewQuery:function(o,i){if(1&o&&t.Gf(c.j,5),2&o){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:60,vars:23,consts:[[1,"reportTablePage"],[1,"col-md-12","pb-0","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","mt-4","mb-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","totalDebitNotes",3,"sort"],["sortable","totalAmountDebited",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"ngbTooltip","positionTarget"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Debit Note Summary Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Supplier"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(r){return i.supplierId=r}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(r){return i.fromDate=r}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(r){return i.toDate=r}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return i.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return i.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(r){return i.eventHeader(r)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(39,"Supplier"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(41,"Total Debit Notes"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(43),t.ALo(44,"companyCurrency"),t.qZA()()(),t.TgZ(45,"tbody"),t.YNc(46,Z,9,7,"tr",27),t.qZA()()(),t.TgZ(47,"div",28),t._UZ(48,"hr",18),t.TgZ(49,"div",29)(50,"div",30)(51,"div",31)(52,"div",32),t._uU(53," Total Debited Amount"),t._UZ(54,"i",33),t.TgZ(55,"button",34),t._uU(56),t.ALo(57,"companyCurrency"),t.qZA()(),t._UZ(58,"input",35),t.ALo(59,"currency"),t.qZA()()()()()()),2&o&&(t.xp6(10),t.Q6J("items",i.supplierOptions)("clearable",!1)("ngModel",i.supplierId),t.xp6(8),t.Q6J("ngModel",i.fromDate),t.xp6(6),t.Q6J("ngModel",i.toDate),t.xp6(10),t.Q6J("data",t.l5B(18,v,i.page,i.pageSize,i.collection,i.search)),t.xp6(9),t.hij(" Total Amount Debited (",t.lcZ(44,11,"INR"),") "),t.xp6(3),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn),t.xp6(10),t.Oqu(t.lcZ(57,13,"INR")),t.xp6(2),t.Q6J("value",t.xi3(59,15,i.totalAmount,"INR")))},dependencies:[p.sg,D.P,f._L,u.Fj,u.JJ,u.On,y.w9,c.j,p.H9,A.f],encapsulation:2})}return s})();var N=a(56208);const S=[{path:"",component:T}];let C=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[p.ez,d.Bz.forChild(S),N.m]})}return s})()}}]);