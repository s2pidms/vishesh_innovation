"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7983],{37983:(A,p,l)=>{l.r(p),l.d(p,{SalesRegisterWOTaxModule:()=>W});var r=l(1076),T=l(56208),h=l(43818),g=l(25116),m=l(13707),_=l(77203),e=l(65879),d=l(35747),u=l(2742),S=l(37285),Z=l(88059),f=l(96814),b=l(60095),x=l(50363),y=l(53421),I=l(83344);function C(s,c){1&s&&(e.TgZ(0,"th"),e._uU(1,"Action"),e.qZA())}function D(s,c){if(1&s&&(e.TgZ(0,"a",49),e._uU(1),e.qZA()),2&s){const n=e.oxw().$implicit;e.Q6J("href","https://my.gstzen.in"+(null==n?null:n.EWayBillPdfUrl),e.LSH)("download",null==n?null:n.EWayBillPdfUrl),e.xp6(1),e.hij(" ",null==n?null:n.ewayBillNo," ")}}function R(s,c){if(1&s&&(e.TgZ(0,"a",49),e._uU(1),e.qZA()),2&s){const n=e.oxw().$implicit;e.Q6J("href","https://my.gstzen.in"+(null==n?null:n.InvoicePdfUrl),e.LSH)("download",null==n?null:n.InvoicePdfUrl),e.xp6(1),e.hij(" ",null==n?null:n.AckNo," ")}}function U(s,c){if(1&s){const n=e.EpF();e.TgZ(0,"td",50)(1,"div",51),e._UZ(2,"button",52),e.TgZ(3,"div",53)(4,"a",54),e.NdJ("click",function(){e.CHM(n);const t=e.oxw().$implicit,i=e.oxw();return e.KtG(i.openConfirmModal(null==t?null:t._id,{eWayBillStatus:!0},null==t?null:t.salesInvoiceNumber))}),e._UZ(5,"i",55),e._uU(6," E-Way Bill "),e.qZA(),e.TgZ(7,"a",54),e.NdJ("click",function(){e.CHM(n);const t=e.oxw().$implicit,i=e.oxw();return e.KtG(i.openConfirmModal(null==t?null:t._id,{eInvoiceStatus:!0},null==t?null:t.salesInvoiceNumber))}),e._UZ(8,"i",55),e._uU(9," E-Invoice "),e.qZA()()()()}}function O(s,c){if(1&s){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"number"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td",42,43)(16,"span",44),e._uU(17),e.qZA()(),e.TgZ(18,"td"),e.YNc(19,D,2,3,"a",45),e.qZA(),e.TgZ(20,"td"),e.YNc(21,R,2,3,"a",45),e.qZA(),e.TgZ(22,"td")(23,"div",46)(24,"img",47),e.NdJ("click",function(){const i=e.CHM(n).$implicit,a=e.oxw();return e.KtG(a.navigateTo(null==i?null:i._id,"print"))}),e.qZA()()(),e.YNc(25,U,10,0,"td",48),e.qZA()}if(2&s){const n=c.$implicit,o=e.MAs(15),t=e.oxw();e.xp6(2),e.hij(" ",null==n?null:n.salesInvoiceNumber," "),e.xp6(2),e.Oqu(null==n?null:n.salesInvoiceDateS),e.xp6(2),e.Oqu(e.xi3(7,14,null==n?null:n.salesInvoiceTotalAmount,".2-2")),e.xp6(3),e.Oqu(e.xi3(10,17,null==n?null:n.salesInvoiceTotalTaxAmount,".2-2")),e.xp6(3),e.Oqu(e.xi3(13,20,null==n?null:n.salesInvoiceTotalAmountWithTax,".2-2")),e.xp6(2),e.Udp("width",o.clientWidth),e.xp6(2),e.Q6J("positionTarget",o)("ngbTooltip",n.customerName),e.xp6(1),e.hij(" ",n.customerName," "),e.xp6(2),e.Q6J("ngIf",1!=(null==n?null:n.eWayBillStatus)),e.xp6(2),e.Q6J("ngIf",1!=(null==n?null:n.eInvoiceStatus)),e.xp6(2),e.Q6J("accessType",t.rolePermissionActions.viewAction),e.xp6(2),e.Q6J("ngIf",t.user==t.superAdminId)}}const w=function(s,c,n,o){return{page:s,pageSize:c,collection:n,search:o,type:"list",pdfDisplay:!0}},N=[{path:"",component:(()=>{var s;class c{constructor(o,t,i,a,v,J,E,k,q,M,P){this.salesInvoiceService=o,this.exportExcelService=t,this.spinner=i,this.menuTitleService=a,this.exportToPDFService=v,this.utilityService=J,this.appGlobalService=E,this.storageService=k,this.toastService=q,this.activatedRoute=M,this.modalService=P,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.originTableData=[],this.customerOptions=[],this.fromDate="",this.toDate="",this.customerId="",this.totalInvoiceValue=0,this.totalSalesInvoiceAmount=0,this.totalSalesInvoiceTaxAmount=0,this.lakh=1e5,this.rolePermissionActions=g.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType="",this.superAdminId="64a687b4e9143bffd820fb3d",this.user=""}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(o=>o==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}navigateTo(o,t){let i=this.appGlobalService.checkAccess(this.tabType,this.menuTitleData)??!0;window.open(`${window.location.origin}/#/print/tax_invoice?id=${o}&action=${t}&buttonCondition=${i}`,"_blank")}getFiscalDate(){let o=this.utilityService.getCurrentMonthDates();this.fromDate=o.fromDate,this.toDate=o.toDate}trackByFn(o,t){return t?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}reset(){this.getFiscalDate(),this.customerId="",this.getAll()}getAll(o=!1,t=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,customer:this.customerId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.salesInvoiceService.getAllReports(i).subscribe(a=>{"EXCEL"==t?this.excelDownload(a.rows):"PDF"==t?this.pdfDownload(a.rows):(this.tableData=a.rows,this.originTableData=a.rows,this.totalInvoiceValue=+a?.totalAmounts?.totalInvoiceValue,this.totalSalesInvoiceAmount=+a?.totalAmounts?.totalSalesInvoiceAmount,this.totalSalesInvoiceTaxAmount=+a?.totalAmounts?.totalSalesInvoiceTaxAmount,this.customerOptions=a.customers,this.collection=a.count,this.company=a.company,this.menuTitleService.set({subTitle:`Total Invoice Value:- ${this.totalInvoiceValue} Lakh`})),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let t=(0,m.Z)(o);this.exportToPDFService.generatePdf(t.tableData,t.title)}excelDownload(o){this.exportExcelService.exportExcel((0,m.n)(o))}onSort({column:o,direction:t}){this.headers.forEach(i=>{i.sortable!==o&&(i.direction="")}),this.column=o,this.direction="asc"==t?1:-1,this.getAll()}getById(o){this.spinner.show(),this.salesInvoiceService.getById(o).subscribe(t=>{this.tableData=t.rows,this.originTableData=t.rows,this.collection=t.count,this.spinner.hide()})}update(o,t){this.spinner.show(),this.salesInvoiceService.update(o,t).subscribe(i=>{this.toastService.success(i.message),this.getAll(),this.spinner.hide()})}openConfirmModal(o,t,i){const a=this.modalService.open(_.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});a.componentInstance.heading="Confirm Update",a.componentInstance.confirmText=`Confirm Update of Invoice # ${i} ?`,a.result.then(v=>{"Yes"==v.title&&this.update(o,t)},v=>{})}}return(s=c).\u0275fac=function(o){return new(o||s)(e.Y36(d.GC),e.Y36(u.Ol),e.Y36(u.V),e.Y36(u.Uh),e.Y36(u.$L),e.Y36(u.tI),e.Y36(u.P0),e.Y36(u.V1),e.Y36(u.kl),e.Y36(r.gz),e.Y36(S.FF))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-sales-register-wo-tax"]],viewQuery:function(o,t){if(1&o&&e.Gf(h.j,5),2&o){let i;e.iGM(i=e.CRH())&&(t.headers=i)}},decls:92,vars:35,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","customerName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","salesInvoiceNumber",3,"sort"],["sortable","salesInvoiceDateS",3,"sort"],["sortable","salesInvoiceTotalAmount",3,"sort"],["sortable","salesInvoiceTotalTaxAmount",3,"sort"],["sortable","salesInvoiceTotalAmountWithTax",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","ewayBillNo",3,"sort"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-3","px-5"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["style","text-decoration: none","target","_blank",3,"href","download",4,"ngIf"],["appAccessControl","",3,"accessType"],["src","./assets/new_icons/pdf_icon.svg","width","15rem","alt","",1,"pointer",3,"click"],["class","py-0",4,"ngIf"],["target","_blank",2,"text-decoration","none",3,"href","download"],[1,"py-0"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-close","fa-lg","text-danger"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Sales Register Report"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"label",7),e._uU(9," Select Customer"),e.qZA(),e.TgZ(10,"ng-select",8),e.NdJ("ngModelChange",function(a){return t.customerId=a}),e.qZA(),e.TgZ(11,"span",9),e._UZ(12,"img",10),e.qZA()(),e.TgZ(13,"div",11)(14,"label",7),e._uU(15," From Date "),e.TgZ(16,"span",12),e._uU(17,"*"),e.qZA()(),e.TgZ(18,"input",13),e.NdJ("ngModelChange",function(a){return t.fromDate=a}),e.qZA()(),e.TgZ(19,"div",11)(20,"label",7),e._uU(21," To Date "),e.TgZ(22,"span",12),e._uU(23,"*"),e.qZA()(),e.TgZ(24,"input",13),e.NdJ("ngModelChange",function(a){return t.toDate=a}),e.qZA()(),e.TgZ(25,"div",14)(26,"span",15),e._UZ(27,"img",10),e.qZA(),e.TgZ(28,"button",16),e.NdJ("click",function(){return t.getAll()}),e._uU(29,"Apply Filter"),e.qZA(),e.TgZ(30,"button",17),e.NdJ("click",function(){return t.reset()}),e._uU(31,"Reset Filter"),e.qZA()()(),e._UZ(32,"hr",18),e.TgZ(33,"div",19)(34,"app-setting-header",20),e.NdJ("dataChange",function(a){return t.eventHeader(a)}),e.qZA(),e.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(39,"Invoice #"),e.qZA(),e.TgZ(40,"th",25),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(41,"Invoice Date"),e.qZA(),e.TgZ(42,"th",26),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(43,"Taxable Amt."),e.qZA(),e.TgZ(44,"th",27),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(45,"Total Tax"),e.qZA(),e.TgZ(46,"th",28),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(47,"Invoice Value"),e.qZA(),e.TgZ(48,"th",29),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(49,"Customer Name"),e.qZA(),e.TgZ(50,"th",30),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(51,"E-way Bill"),e.qZA(),e.TgZ(52,"th",25),e.NdJ("sort",function(a){return t.onSort(a)}),e._uU(53,"E-Invoicing"),e.qZA(),e.TgZ(54,"th"),e._uU(55,"View/Print"),e.qZA(),e.YNc(56,C,2,0,"th",31),e.qZA()(),e.TgZ(57,"tbody"),e.YNc(58,O,26,23,"tr",32),e.qZA()()(),e.TgZ(59,"div",33),e._UZ(60,"hr",18),e.TgZ(61,"div",34)(62,"div",35)(63,"div",36)(64,"div",37),e._uU(65," Total Taxable Amount"),e._UZ(66,"i",38),e.TgZ(67,"button",39),e._uU(68),e.ALo(69,"companyCurrency"),e.qZA()(),e._UZ(70,"input",40),e.ALo(71,"number"),e.qZA()(),e.TgZ(72,"div",41)(73,"div",36)(74,"div",37),e._uU(75," Total Tax "),e._UZ(76,"i",38),e.TgZ(77,"button",39),e._uU(78),e.ALo(79,"companyCurrency"),e.qZA()(),e._UZ(80,"input",40),e.ALo(81,"number"),e.qZA()(),e.TgZ(82,"div",35)(83,"div",36)(84,"div",37),e._uU(85," Total Invoice Value "),e._UZ(86,"i",38),e.TgZ(87,"button",39),e._uU(88),e.ALo(89,"companyCurrency"),e.qZA()(),e._UZ(90,"input",40),e.ALo(91,"number"),e.qZA()()()()()()),2&o&&(e.xp6(10),e.Q6J("items",t.customerOptions)("clearable",!1)("ngModel",t.customerId),e.xp6(8),e.Q6J("ngModel",t.fromDate),e.xp6(6),e.Q6J("ngModel",t.toDate),e.xp6(10),e.Q6J("data",e.l5B(30,w,t.page,t.pageSize,t.collection,t.search)),e.xp6(22),e.Q6J("ngIf",t.user==t.superAdminId),e.xp6(2),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn),e.xp6(10),e.Oqu(e.lcZ(69,15,"INR")),e.xp6(2),e.Q6J("value",e.xi3(71,17,t.totalSalesInvoiceAmount,"1.2-2")),e.xp6(8),e.Oqu(e.lcZ(79,20,"INR")),e.xp6(2),e.Q6J("value",e.xi3(81,22,t.totalSalesInvoiceTaxAmount,"1.2-2")),e.xp6(8),e.Oqu(e.lcZ(89,25,"INR")),e.xp6(2),e.Q6J("value",e.xi3(91,27,t.totalInvoiceValue,"1.2-2")))},dependencies:[Z.P,f.sg,f.O5,S._L,b.Fj,b.JJ,b.On,x.w9,h.j,y.J,f.JJ,I.f],encapsulation:2}),c})()}];let W=(()=>{var s;class c{}return(s=c).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[T.m,r.Bz.forChild(N)]}),c})()},13107:(A,p,l)=>{l.d(p,{t:()=>r});const r={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(A,p,l)=>{l.d(p,{J:()=>r});const r=({data:T,headers:h,widths:g,title:m})=>({tableData:{widths:g,headerRows:1,body:[h.map(d=>({text:d.header,style:"header"})),...T.map(d=>h.map(u=>({style:"subheader",text:d[u.key]})))]},title:m})},13707:(A,p,l)=>{l.d(p,{Z:()=>e,n:()=>_});var r=l(13107),T=l(28402);let h=[45,45,60,60,45,45,45,45,45,45],g="Sales Register",m=[{header:"Invoice #",key:"salesInvoiceNumber",...r.t},{header:"Invoice Date",key:"salesInvoiceDateS",...r.t},{header:"Customer Name",key:"customerName",...r.t},{header:"Customer GST",key:"GSTIN",...r.t},{header:"Taxable Amt.",key:"salesInvoiceTotalAmount",...r.t},{header:"Total CGST Amount",key:"salesInvoiceTotalCGSTAmount",...r.t},{header:"Total SGST Amount",key:"salesInvoiceTotalSGSTAmount",...r.t},{header:"Total IGST Amount",key:"salesInvoiceTotalIGSTAmount",...r.t},{header:"Total Tax",key:"salesInvoiceTotalTaxAmount",...r.t},{header:"Invoice Amount With Tax",key:"salesInvoiceTotalAmountWithTax",...r.t}];const _=d=>({title:g,csvData:d,headers:m}),e=d=>(0,T.J)({data:d,headers:m,widths:h,title:g})}}]);