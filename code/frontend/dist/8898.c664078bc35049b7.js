"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8898],{68898:(w,m,a)=>{a.r(m),a.d(m,{PurchaseRegisterReportModule:()=>O});var u=a(96814),h=a(1076),d=a(43818),_=a(25116),A=a(45622),T=a(36144),e=a(65879),f=a(2866),c=a(98977),Z=a(37285),b=a(88059),p=a(60095),R=a(50363),v=a(83344);function C(i,l){if(1&i&&(e.TgZ(0,"option",52),e._uU(1),e.qZA()),2&i){const r=l.$implicit;e.Q6J("value",r.value),e.xp6(1),e.hij(" ",r.label," ")}}function S(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"div",53)(1,"label",9),e._uU(2,"Report Specific Search"),e.qZA(),e.TgZ(3,"ng-select",54),e.NdJ("ngModelChange",function(t){e.CHM(r);const s=e.oxw();return e.KtG(s.supplier=t)}),e.qZA(),e.TgZ(4,"span",12),e._UZ(5,"img",13),e.qZA()()}if(2&i){const r=e.oxw();e.xp6(3),e.Q6J("items",r.suppliersOptions)("clearable",!1)("ngModel",r.supplier)}}function N(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"div",53)(1,"label",9),e._uU(2," From Date "),e.TgZ(3,"span",17),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"input",18),e.NdJ("ngModelChange",function(t){e.CHM(r);const s=e.oxw();return e.KtG(s.fromDate=t)}),e.qZA(),e.TgZ(6,"span",12),e._UZ(7,"img",13),e.qZA()()}if(2&i){const r=e.oxw();e.xp6(5),e.Q6J("ngModel",r.fromDate)}}function x(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"div",55)(1,"label",9),e._uU(2," From Date "),e.TgZ(3,"span",17),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"input",18),e.NdJ("ngModelChange",function(t){e.CHM(r);const s=e.oxw();return e.KtG(s.fromDate=t)}),e.qZA(),e.TgZ(6,"span",12),e._UZ(7,"img",13),e.qZA()()}if(2&i){const r=e.oxw();e.xp6(5),e.Q6J("ngModel",r.fromDate)}}function P(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",56,57)(7,"span",58),e._uU(8),e.qZA()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"number"),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.ALo(24,"number"),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.ALo(27,"number"),e.qZA(),e.TgZ(28,"td"),e._uU(29),e.ALo(30,"number"),e.qZA(),e.TgZ(31,"td"),e._uU(32),e.ALo(33,"number"),e.qZA(),e.TgZ(34,"td"),e._uU(35),e.ALo(36,"number"),e.qZA(),e.TgZ(37,"td")(38,"div",59)(39,"i",60),e.NdJ("click",function(){const s=e.CHM(r).$implicit,o=e.oxw();return e.KtG(o.navigateTo("/default/accounts/transactions/purchase_register_entry/form",null==s?null:s._id,"view"))}),e.qZA()()()()}if(2&i){const r=l.$implicit,n=e.MAs(6);e.xp6(2),e.Oqu(null==r?null:r.PEntryNo),e.xp6(2),e.Oqu(null==r?null:r.PEntryDate),e.xp6(1),e.Udp("width",n.clientWidth),e.xp6(2),e.Q6J("positionTarget",n)("ngbTooltip",null==r?null:r.supplierName),e.xp6(1),e.hij(" ",null==r?null:r.supplierName," "),e.xp6(2),e.Oqu(r.taxInvoiceNo),e.xp6(2),e.Oqu(null==r?null:r.taxInvoiceDate),e.xp6(2),e.Oqu(e.xi3(15,17,null==r?null:r.taxableAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(18,20,null==r?null:r.SGSTAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(21,23,null==r?null:r.CGSTAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(24,26,null==r?null:r.IGSTAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(27,29,null==r?null:r.totalAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(30,32,null==r?null:r.TCSAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(33,35,null==r?null:r.roundOffAmt,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(36,38,null==r?null:r.roundOffTotalAmt,"1.2-2"))}}const g=function(i){return[i]},U=function(i,l,r,n){return{page:i,pageSize:l,collection:r,search:n,type:"list",pdfDisplay:!0}};let y=(()=>{var i;class l{constructor(n,t,s,o,J,M,I,F){this.purchaseRegisterService=n,this.spinner=t,this.exportExcelService=s,this.utilityService=o,this.activatedRoute=J,this.exportToPDFService=M,this.modalService=I,this.router=F,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.originTableData=[],this.suppliersOptions=[],this.toDate="",this.fromDate="",this.reportNameObj=_.W4,this.reportNameArr=this.reportNameObj.getAllReportName(),this.reportName=this.reportNameObj.taxInvoiceByDate,this.supplier="",this.SKUId="",this.totalTaxableAmt=0,this.rolePermissionActions=_.a1,this.accessType=this.rolePermissionActions.downloadAction}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}getFiscalDate(){let n=this.utilityService.getCurrentMonthDates();this.fromDate=n.fromDate,this.toDate=n.toDate}navigateTo(n,t,s){this.router.navigate([n],{queryParams:{id:t,action:s}})}trackByFn(n,t){return t?._id}reset(){this.getFiscalDate(),this.reportName=this.reportNameObj.taxInvoiceByDate,this.supplier="",this.SKUId="",this.getAll()}setReportName(){this.reportName==this.reportNameObj.taxInvoiceBySupplier?this.SKUId="":(this.SKUId="",this.supplier="")}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=n.value,this.getAll()}}getAll(n=!1,t=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:n,supplier:this.supplier,SKUId:this.SKUId,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseRegisterService.getAllReports(s).subscribe(o=>{"EXCEL"==t?this.excelDownload(o.rows):"PDF"==t?this.pdfDownload(o.rows):(this.tableData=o.rows,this.originTableData=o.rows,this.suppliersOptions=o.suppliersOptions,this.collection=o.count,this.totalTaxableAmt=o?.totalAmounts?.totalTaxableAmt),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(n){let t=(0,T.ki)(n);this.exportToPDFService.generatePdf(t.tableData,t.title)}excelDownload(n){this.exportExcelService.exportExcel((0,T._G)(n))}openSOScheduleModal(n){const t=this.modalService.open(A.f,{centered:!0,windowClass:"custom-modal-sm",backdrop:"static",keyboard:!1});t.componentInstance.bookSalesOrder="Book Sales Order",t.componentInstance.action="view",t.componentInstance.UOM=n.UOM,t.componentInstance.POQty=n.SOQty,t.componentInstance.deliveryCount=n.dispatchCount,t.componentInstance.deliveryScheduleArr=n?.dispatchSchedule}onSort({column:n,direction:t}){this.headers.forEach(s=>{s.sortable!==n&&(s.direction="")}),this.column=n,this.direction="asc"==t?1:-1,this.getAll()}}return(i=l).\u0275fac=function(n){return new(n||i)(e.Y36(f.K),e.Y36(c.V),e.Y36(c.Ol),e.Y36(c.tI),e.Y36(h.gz),e.Y36(c.$L),e.Y36(Z.FF),e.Y36(h.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-purchase-register-report"]],viewQuery:function(n,t){if(1&n&&e.Gf(d.j,5),2&n){let s;e.iGM(s=e.CRH())&&(t.headers=s)}},decls:83,vars:27,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-5","pe-0"],[1,"row"],[1,"col-6","ps-3","separate-row"],[1,"form-label"],[1,"form-select",3,"ngModel","change","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["class","col-6 separate-row",4,"ngIf"],["class","col-2 separate-row",4,"ngIf"],[1,"col-2"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","PEntryNo",3,"sort"],["sortable","PEntryDate",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","supplierGST",3,"sort"],["sortable","taxInvoiceDate",3,"sort"],["sortable","taxableAmt",3,"sort"],["sortable","SGSTAmt",3,"sort"],["sortable","CGSTAmt",3,"sort"],["sortable","IGSTAmt",3,"sort"],["sortable","totalAmt",3,"sort"],["sortable","TCSAmt",3,"sort"],["sortable","roundOffAmt",3,"sort"],["sortable","roundOffTotalAmt",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex"],[1,"col-form-label","text-nowrap","px-1","pt-1","ms-3"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","text","readonly","",1,"form-control","ps-0","border-start-0",3,"value"],[3,"value"],[1,"col-6","separate-row"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"col-2","separate-row"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"d-flex","justify-content-center"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","ms-2","text-primary","pointer",3,"click"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Purchase Register (Report) "),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),e._uU(11,"Report Name"),e.qZA(),e.TgZ(12,"select",10),e.NdJ("change",function(){return t.setReportName()})("ngModelChange",function(o){return t.reportName=o}),e.YNc(13,C,2,2,"option",11),e.qZA(),e.TgZ(14,"span",12),e._UZ(15,"img",13),e.qZA()(),e.YNc(16,S,6,3,"div",14),e.YNc(17,N,8,1,"div",14),e.qZA()(),e.YNc(18,x,8,1,"div",15),e.TgZ(19,"div",16)(20,"label",9),e._uU(21," To Date "),e.TgZ(22,"span",17),e._uU(23,"*"),e.qZA()(),e.TgZ(24,"input",18),e.NdJ("ngModelChange",function(o){return t.toDate=o}),e.qZA()(),e.TgZ(25,"div",19)(26,"span",20),e._UZ(27,"img",13),e.qZA(),e.TgZ(28,"button",21),e.NdJ("click",function(){return t.getAll()}),e._uU(29,"Apply Filter"),e.qZA(),e.TgZ(30,"button",22),e.NdJ("click",function(){return t.reset()}),e._uU(31,"Reset Filter"),e.qZA()()(),e._UZ(32,"hr",23),e.TgZ(33,"div",24)(34,"app-setting-header",25),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA(),e.TgZ(35,"table",26)(36,"thead",27)(37,"tr",28)(38,"th",29),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(39,"P/Entry No."),e.qZA(),e.TgZ(40,"th",30),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(41,"P/Entry Date"),e.qZA(),e.TgZ(42,"th",31),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(43,"Supplier Name"),e.qZA(),e.TgZ(44,"th",32),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(45,"Supplier Invoice No."),e.qZA(),e.TgZ(46,"th",33),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(47,"Invoice Date"),e.qZA(),e.TgZ(48,"th",34),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(49,"Taxable Amt."),e.qZA(),e.TgZ(50,"th",35),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(51,"SGST Amt."),e.qZA(),e.TgZ(52,"th",36),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(53,"CGST Amt."),e.qZA(),e.TgZ(54,"th",37),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(55,"IGST Amt."),e.qZA(),e.TgZ(56,"th",38),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(57,"Total Amt."),e.qZA(),e.TgZ(58,"th",39),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(59,"TCS Amt."),e.qZA(),e.TgZ(60,"th",40),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(61,"Round Off"),e.qZA(),e.TgZ(62,"th",41),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(63,"Net Amt."),e.qZA(),e.TgZ(64,"th",42),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(65,"View"),e.qZA()()(),e.TgZ(66,"tbody"),e.YNc(67,P,40,41,"tr",43),e.qZA()()(),e.TgZ(68,"div",44),e._UZ(69,"hr",23),e.TgZ(70,"div",45)(71,"div",46)(72,"div",47)(73,"div",48),e._uU(74," Total Taxable Amt. "),e.TgZ(75,"span"),e._uU(76,"\u25b6"),e.qZA()(),e.TgZ(77,"span",49),e._uU(78),e.ALo(79,"companyCurrency"),e._UZ(80,"div",50),e.qZA(),e._UZ(81,"input",51),e.ALo(82,"number"),e.qZA()()()()()()),2&n&&(e.xp6(12),e.Q6J("ngModel",t.reportName),e.xp6(1),e.Q6J("ngForOf",t.reportNameArr),e.xp6(3),e.Q6J("ngIf",e.VKq(16,g,t.reportNameObj.taxInvoiceBySupplier).includes(t.reportName)),e.xp6(1),e.Q6J("ngIf",!e.VKq(18,g,t.reportNameObj.taxInvoiceBySupplier).includes(t.reportName)),e.xp6(1),e.Q6J("ngIf",e.VKq(20,g,t.reportNameObj.taxInvoiceBySupplier).includes(t.reportName)),e.xp6(6),e.Q6J("ngModel",t.toDate),e.xp6(10),e.Q6J("data",e.l5B(22,U,t.page,t.pageSize,t.collection,t.search)),e.xp6(33),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn),e.xp6(11),e.hij(" ",e.lcZ(79,11,"INR")," "),e.xp6(3),e.Q6J("value",e.xi3(82,13,t.totalTaxableAmt,"1.2-2")))},dependencies:[u.sg,u.O5,b.P,Z._L,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.On,R.w9,d.j,u.JJ,v.f],encapsulation:2}),l})();var q=a(56208);const D=[{path:"",component:y}];let O=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,h.Bz.forChild(D),q.m]}),l})()}}]);