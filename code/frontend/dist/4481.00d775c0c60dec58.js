"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4481],{38687:(Z,h,i)=>{i.r(h),i.d(h,{PurchaseRegisterEntryModule:()=>v});var p=i(96814),c=i(1076),g=i(43818),m=i(25116),d=i(36144),t=i(65879),_=i(2866),u=i(2742),T=i(88059),b=i(37285),A=i(60095),y=i(50363);function f(l,a){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",41,42)(7,"span",43),t._uU(8),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"number"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"number"),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"number"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.ALo(31,"number"),t.qZA(),t.TgZ(32,"td"),t._uU(33),t.ALo(34,"number"),t.qZA(),t.TgZ(35,"td"),t._uU(36),t.ALo(37,"number"),t.qZA(),t.TgZ(38,"td"),t._uU(39),t.ALo(40,"number"),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA()()),2&l){const n=a.$implicit,o=t.MAs(6);t.xp6(2),t.Oqu(null==n?null:n.PEntryNo),t.xp6(2),t.Oqu(null==n?null:n.PEntryDate),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",null==n?null:n.supplierName),t.xp6(1),t.hij(" ",null==n?null:n.supplierName," "),t.xp6(2),t.Oqu(null==n?null:n.supplierGST),t.xp6(2),t.Oqu(null==n?null:n.purchaseCategory),t.xp6(2),t.Oqu(null==n?null:n.taxInvoiceNo),t.xp6(2),t.Oqu(null==n?null:n.taxInvoiceDate),t.xp6(2),t.Oqu(t.xi3(19,20,null==n?null:n.taxableAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(22,23,null==n?null:n.SGSTAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(25,26,null==n?null:n.CGSTAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(28,29,null==n?null:n.IGSTAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(31,32,null==n?null:n.totalAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(34,35,null==n?null:n.TCSAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(37,38,null==n?null:n.roundOffAmt,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(40,41,null==n?null:n.roundOffTotalAmt,"1.2-2")),t.xp6(3),t.Oqu(null==n?null:n.status)}}const C=function(l,a,n,o){return{page:l,pageSize:a,collection:n,search:o,type:"list",pdfDisplay:!0}};let E=(()=>{var l;class a{constructor(o,r,s,e,q,R){this.purchaseRegisterService=o,this.exportExcelService=r,this.spinner=s,this.exportToPDFService=e,this.utilityService=q,this.activatedRoute=R,this.page=1,this.pageSize=11,this.collection=0,this.column="PEntryNo",this.direction=1,this.search="",this.tableData=[],this.supplierOptions=[],this.fromDate="",this.toDate="",this.supplierId="",this.rolePermissionActions=m.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}getFiscalDate(){let o=this.utilityService.getCurrentMonthDates();this.fromDate=o.fromDate,this.toDate=o.toDate}trackByFn(o,r){return r?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}reset(){this.getFiscalDate(),this.supplierId="",this.getAll()}getAll(o=!1,r=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,supplier:this.supplierId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseRegisterService.getAllReports(s).subscribe(e=>{"EXCEL"==r?this.excelDownload(e.rows):"PDF"==r?this.pdfDownload(e.rows):(this.tableData=e.rows,this.supplierOptions=e.suppliersOptions,this.collection=e.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let r=(0,d.ki)(o);this.exportToPDFService.generatePdf(r.tableData,r.title)}excelDownload(o){this.exportExcelService.exportExcel((0,d._G)(o))}onSort({column:o,direction:r}){this.headers.forEach(s=>{s.sortable!==o&&(s.direction="")}),this.column=o,this.direction="asc"==r?1:-1,this.getAll()}}return(l=a).\u0275fac=function(o){return new(o||l)(t.Y36(_.K),t.Y36(u.Ol),t.Y36(u.V),t.Y36(u.$L),t.Y36(u.tI),t.Y36(c.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-purchase-register-entry"]],viewQuery:function(o,r){if(1&o&&t.Gf(g.j,5),2&o){let s;t.iGM(s=t.CRH())&&(r.headers=s)}},decls:72,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","PEntryNo",3,"sort"],["sortable","PEntryDate",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","supplierGST",3,"sort"],["sortable","purchaseCategory",3,"sort"],["sortable","taxInvoiceNo",3,"sort"],["sortable","taxInvoiceDate",3,"sort"],["sortable","taxableAmt",3,"sort"],["sortable","SGSTAmt",3,"sort"],["sortable","CGSTAmt",3,"sort"],["sortable","IGSTAmt",3,"sort"],["sortable","totalAmt",3,"sort"],["sortable","TCSAmt",3,"sort"],["sortable","roundOffAmt",3,"sort"],["sortable","roundOffTotalAmt",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"positionTarget","ngbTooltip"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Purchase Register Entry Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," Select Supplier"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(e){return r.supplierId=e}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," Start Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(e){return r.fromDate=e}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," End Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(e){return r.toDate=e}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return r.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return r.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(e){return r.eventHeader(e)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(39,"P/Entry No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(41,"P/Entry Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(43,"Supplier Name"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(45,"Supplier GST"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(47,"Purchase Category"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(49,"Tax Invoice No."),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(51,"Tax Invoice Date"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(53,"Taxable Amt"),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(55,"SGST Amt"),t.qZA(),t.TgZ(56,"th",33),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(57,"CGST Amt"),t.qZA(),t.TgZ(58,"th",34),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(59,"IGST Amt"),t.qZA(),t.TgZ(60,"th",35),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(61,"Total Amt"),t.qZA(),t.TgZ(62,"th",36),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(63,"TCS Amt"),t.qZA(),t.TgZ(64,"th",37),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(65,"Round Off Amt"),t.qZA(),t.TgZ(66,"th",38),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(67,"Net Amt"),t.qZA(),t.TgZ(68,"th",39),t.NdJ("sort",function(e){return r.onSort(e)}),t._uU(69,"Status"),t.qZA()()(),t.TgZ(70,"tbody"),t.YNc(71,f,43,44,"tr",40),t.qZA()()()()()),2&o&&(t.xp6(10),t.Q6J("items",r.supplierOptions)("clearable",!1)("ngModel",r.supplierId),t.xp6(8),t.Q6J("ngModel",r.fromDate),t.xp6(6),t.Q6J("ngModel",r.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,C,r.page,r.pageSize,r.collection,r.search)),t.xp6(37),t.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn))},dependencies:[p.sg,T.P,b._L,A.Fj,A.JJ,A.On,y.w9,g.j,p.JJ],encapsulation:2}),a})();var S=i(56208);const P=[{path:"",component:E}];let v=(()=>{var l;class a{}return(l=a).\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[p.ez,c.Bz.forChild(P),S.m]}),a})()},13107:(Z,h,i)=>{i.d(h,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(Z,h,i)=>{i.d(h,{J:()=>p});const p=({data:c,headers:g,widths:m,title:d})=>({tableData:{widths:m,headerRows:1,body:[g.map(u=>({text:u.header,style:"header"})),...c.map(u=>g.map(T=>({style:"subheader",text:u[T.key]})))]},title:d})}}]);