"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4687],{74687:(k,S,l)=>{l.r(S),l.d(S,{ShortPOModule:()=>C});var t=l(96814),h=l(1076),y=l(43818),m=l(99279),_=l(25116),D=l(79250),e=l(65879),u=l(99328),p=l(59840),N=l(37285),g=l(88059),v=l(53421),R=l(14906);function T(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",19,20)(11,"span",21),e._uU(12),e.qZA()(),e.TgZ(13,"td",19,22)(15,"span",21),e._uU(16),e.qZA()(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"number"),e.qZA(),e.TgZ(20,"td",19,23)(22,"span",21),e._uU(23),e.qZA()(),e.TgZ(24,"td")(25,"div",24),e._UZ(26,"button",25),e.TgZ(27,"div",26)(28,"a",27),e.NdJ("click",function(){const n=e.CHM(i).$implicit,s=e.oxw();return e.KtG(s.openSOLineModal(n))}),e._UZ(29,"i",28),e._uU(30," Cancel "),e.qZA()()()()()}if(2&d){const i=c.$implicit,o=e.MAs(10),a=e.MAs(14),n=e.MAs(21),s=e.oxw();e.xp6(2),e.Oqu(null==i?null:i.SODate),e.xp6(2),e.Oqu(null==i?null:i.SONumber),e.xp6(2),e.Oqu(null==i?null:i.SOLineNumber),e.xp6(2),e.Oqu(null==i?null:i.SKUNo),e.xp6(1),e.Udp("width",o.clientWidth),e.xp6(2),e.Q6J("positionTarget",o)("ngbTooltip",i.SKUName),e.xp6(1),e.hij(" ",i.SKUName," "),e.xp6(1),e.Udp("width",a.clientWidth),e.xp6(2),e.Q6J("positionTarget",a)("ngbTooltip",i.SKUDescription),e.xp6(1),e.hij(" ",i.SKUDescription," "),e.xp6(2),e.Oqu(e.xi3(19,21,i.balancedQty,"1.2-2")),e.xp6(2),e.Udp("width",n.clientWidth),e.xp6(2),e.Q6J("positionTarget",n)("ngbTooltip",i.customer),e.xp6(1),e.hij(" ",i.customer," "),e.xp6(5),e.Q6J("accessType",s.rolePermissionActions.approveAction)}}const O=function(d,c,i,o){return{page:d,pageSize:c,collection:i,search:o,type:"list"}};let P=(()=>{var d;class c{constructor(o,a,n,s,I,U,A){this.exportExcelService=o,this.salesService=a,this.router=n,this.spinner=s,this.modalService=I,this.activatedRoute=U,this.exportToPDFService=A,this.page=1,this.pageSize=10,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.statusArray=["Created","Approved","Report Generated"],this.rolePermissionActions=_.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(o,a,n){this.router.navigate([o],{queryParams:{id:a?._id,action:n}})}trackByFn(o,a){return a?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}getAll(o=!1,a=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,statusArray:this.statusArray,excel:o};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.salesService.getAllShortSOForClosing(n).subscribe(s=>{"EXCEL"==a?this.excelDownload(s.rows):"PDF"==a?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let a=(0,D.zm)(o);this.exportToPDFService.generatePdf(a.tableData,a.title)}excelDownload(o){this.exportExcelService.exportExcel((0,D.ji)(o))}onSort({column:o,direction:a}){this.headers.forEach(n=>{n.sortable!==o&&(n.direction="")}),this.column=o,this.direction="asc"==a?1:-1,this.getAll()}openSOLineModal(o){const a=this.modalService.open(m._,{centered:!0,backdrop:"static",keyboard:!1,windowClass:"modelPage"});a.componentInstance.tableData=o,a.result.then(n=>{this.getAll()},n=>{})}}return(d=c).\u0275fac=function(o){return new(o||d)(e.Y36(u.Ol),e.Y36(p.VD),e.Y36(h.F0),e.Y36(u.V),e.Y36(N.FF),e.Y36(h.gz),e.Y36(u.$L))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-short-so"]],viewQuery:function(o,a){if(1&o&&e.Gf(y.j,5),2&o){let n;e.iGM(n=e.CRH())&&(a.headers=n)}},decls:32,vars:14,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SODate",3,"sort"],["sortable","SONumber",3,"sort"],["sortable","SOLineNumber",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","balancedQty",3,"sort"],["sortable","customer",1,"text-start",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["customer",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa","fa-times","fa-lg","me-2","text-primary"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Short SO Closing"),e.qZA()(),e._UZ(4,"hr",3),e.TgZ(5,"div",4)(6,"app-setting-header",5),e.NdJ("dataChange",function(s){return a.eventHeader(s)}),e.qZA(),e.TgZ(7,"table",6)(8,"thead",7)(9,"tr",8)(10,"th",9),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(11,"SO Date"),e.qZA(),e.TgZ(12,"th",10),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(13,"SO #"),e.qZA(),e.TgZ(14,"th",11),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(15,"Line #"),e.qZA(),e.TgZ(16,"th",12),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(17,"SKU #"),e.qZA(),e.TgZ(18,"th",13),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(19),e.ALo(20,"labelTranslate"),e.qZA(),e.TgZ(21,"th",14),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(22),e.ALo(23,"labelTranslate"),e.qZA(),e.TgZ(24,"th",15),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(25,"Bal Qty"),e.qZA(),e.TgZ(26,"th",16),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(27,"Customer Name"),e.qZA(),e.TgZ(28,"th",17),e.NdJ("sort",function(s){return a.onSort(s)}),e._uU(29,"Action"),e.qZA()()(),e.TgZ(30,"tbody"),e.YNc(31,T,31,24,"tr",18),e.qZA()()()()),2&o&&(e.xp6(6),e.Q6J("data",e.l5B(9,O,a.page,a.pageSize,a.collection,a.search)),e.xp6(13),e.hij(" ",e.lcZ(20,5,"SKU Name")," "),e.xp6(3),e.hij(" ",e.lcZ(23,7,"SKU Description")," "),e.xp6(9),e.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[t.sg,g.P,N._L,y.j,v.J,t.JJ,R.c],encapsulation:2}),c})();var b=l(56208);const E=[{path:"",component:P}];let C=(()=>{var d;class c{}return(d=c).\u0275fac=function(o){return new(o||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[t.ez,h.Bz.forChild(E),b.m]}),c})()},13107:(k,S,l)=>{l.d(S,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(k,S,l)=>{l.d(S,{J:()=>t});const t=({data:h,headers:y,widths:m,title:_})=>({tableData:{widths:m,headerRows:1,body:[y.map(u=>({text:u.header,style:"header"})),...h.map(u=>y.map(p=>({style:"subheader",text:u[p.key]})))]},title:_})},79250:(k,S,l)=>{l.d(S,{p3:()=>e,U$:()=>D,S$:()=>b,B6:()=>P,mx:()=>$,mI:()=>H,sb:()=>I,PW:()=>s,Kr:()=>v,n8:()=>g,TP:()=>X,_y:()=>j,i7:()=>ce,G4:()=>he,EY:()=>ye,X1:()=>Se,zF:()=>se,D$:()=>oe,ti:()=>le,_g:()=>ie,Rb:()=>te,xi:()=>ee,zm:()=>i,ji:()=>c});var t=l(13107),h=l(28402);let y=["*","*","*","*","*","*","*","*","*","*","*"],m="Book Sales Order",_=[{header:"SO No.",key:"SONumber",...t.t},{header:"SO Date",key:"SODateS",...t.t},{header:"Bill From Location",key:"billFromLocation",...t.t},{header:"Customer Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"PO Date.",key:"PODate",...t.t},{header:"Currency",key:"currency",...t.t},{header:"SO Type",key:"SOType",...t.t},{header:"SO Value",key:"SOTotalAmount",...t.t},{header:"Status",key:"SOStatus",...t.t}];const D=r=>({title:m,csvData:r,headers:_}),e=r=>(0,h.J)({data:r,headers:_,widths:y,title:m});let u=["*","*","*","*","*","*","*"],p="DispatchRequestNote Report",N=[{header:"DRN No.",key:"DRNNumber",...t.t},{header:"DRN Date",key:"DRNDateS",...t.t},{header:"Customer Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"DRN Status",key:"DRNStatus",...t.t}];const g=r=>({title:p,csvData:r,headers:N}),v=r=>(0,h.J)({data:r,headers:N,widths:u,title:p});let R=["*","*","*","*","*","*","*","*","*","*"],T="Cancel SO",O=[{header:"SO No.",key:"SONumber",...t.t},{header:"SO Date",key:"SODateS",...t.t},{header:"PO No.",key:"PONumber",...t.t},{header:"Sales Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"Currency",key:"currency",...t.t},{header:"SO Value",key:"SOTotalAmount",...t.t},{header:"Status",key:"SOStatus",...t.t}];const P=r=>({title:T,csvData:r,headers:O}),b=r=>(0,h.J)({data:r,headers:O,widths:R,title:T});let E=["*","*","*","*","*","*","*","*","*","*","*","*"],C="Short SO Closing",d=[{header:"SO Date",key:"SODate",...t.t},{header:"SO #",key:"SONumber",...t.t},{header:"Line #",key:"SOLineNumber",...t.t},{header:"SKU #",key:"SKUNo",...t.t},{header:"SKU Name",key:"SKUName",...t.t},{header:"SKU Description",key:"SKUDescription",...t.t},{header:"Bal Qty",key:"balancedQty",...t.t},{header:"Customer Name",key:"customer",...t.t}];const c=r=>({title:C,csvData:r,headers:d}),i=r=>(0,h.J)({data:r,headers:d,widths:E,title:C});let o=["*","*","*","*","*","*","*","*","*"],a="Direct Tax Invoice",n=[{header:"Invoice #",key:"DTINumber",...t.t},{header:"Invoice Date",key:"salesInvoiceDateS",...t.t},{header:"Customer Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"Product Value",key:"DTITotalAmount",...t.t},{header:"Invoice Value",key:"DTIValue",...t.t},{header:"Status",key:"DTIStatus",...t.t}];const s=r=>({title:a,csvData:r,headers:n}),I=r=>(0,h.J)({data:r,headers:n,widths:o,title:a});let U=["*","*","*","*","*","*","*","*","*","*","*","*","*"],A="Proforma Invoice",f=[{header:"PI No.",key:"PINumber",...t.t},{header:"PI Date",key:"PIDateS",...t.t},{header:"Bill From Location",key:"billFromLocation",...t.t},{header:"Customer Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"PO No.",key:"PONumber",...t.t},{header:"PO Date",key:"PODate",...t.t},{header:"Currency",key:"currency",...t.t},{header:"PI Validity Date",key:"PIValidityDate",...t.t},{header:"PI Amount",key:"PITotalAmount",...t.t},{header:"PI Status",key:"PIStatus",...t.t}];const j=r=>({title:A,csvData:r,headers:f}),X=r=>(0,h.J)({data:r,headers:f,widths:U,title:A});let Y=["*","*","*","*","*","*","*","*","*","*"],F="Credit Note",Z=[{header:"CN No.",key:"CNNumber",...t.t},{header:"CN Date",key:"CNDateS",...t.t},{header:"Customer Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"Debit Note No.",key:"invoiceNo",...t.t},{header:"Invoice Date",key:"invoiceDateS",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Net CN Value",key:"netCNValue",...t.t},{header:"Reason For CN",key:"reasonForCN",...t.t},{header:"CN Status.",key:"CNStatus",...t.t}];const H=r=>({title:F,csvData:r,headers:Z}),$=r=>(0,h.J)({data:r,headers:Z,widths:Y,title:F});let W=["*","*","*","*","*","*","*","*","*","*","*","*"],w="ServiceInvoice Report",x=[{header:"Invoice #",key:"serviceInvoiceNumber",...t.t},{header:"Invoice Date",key:"serviceInvoiceDate",...t.t},{header:"Customer Category",key:"customerCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"PO No.",key:"PONo",...t.t},{header:"PO Date",key:"PODate",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Bill From Location",key:"billFromLocation",...t.t},{header:"Total Value",key:"totalValue",...t.t},{header:"Remarks",key:"remarks",...t.t},{header:"Status",key:"status",...t.t}];const ee=r=>({title:w,csvData:r,headers:x}),te=r=>(0,h.J)({data:r,headers:x,widths:W,title:w});let ae=["*","*","*","*","*","*","*","*"],L="Sales Forecast",q=[{header:"FC No.",key:"FCNo",...t.t},{header:"FC Date",key:"FCDate",...t.t},{header:"Customer Category",key:"customerCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"Currency",key:"currency",...t.t},{header:"FC Type",key:"FCType",...t.t},{header:"FC Value",key:"netFCValue",...t.t},{header:"Status",key:"status",...t.t}];const oe=r=>({title:L,csvData:r,headers:q}),se=r=>(0,h.J)({data:r,headers:q,widths:ae,title:L});let ne=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],Q="Debit Note",V=[{header:"DN No.",key:"DNNumber",...t.t},{header:"DN Date",key:"DNDateS",...t.t},{header:"Sale Category",key:"salesCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"Invoice No.",key:"invoiceNo",...t.t},{header:"Invoice Date",key:"invoiceDateS",...t.t},{header:"Currency",key:"currency",...t.t},{header:"DN Net Value",key:"netDNValue",...t.t},{header:"Reason For Debit Note",key:"reasonForDN",...t.t},{header:"DN Status",key:"DNStatus",...t.t}];const ie=r=>({title:Q,csvData:r,headers:V}),le=r=>(0,h.J)({data:r,headers:V,widths:ne,title:Q});let de=["*","*","*","*","*","*","*"],B="Quotation Of D-SKU",G=[{header:"Qtn. No.",key:"quotationNo",...t.t},{header:"Rev No.",key:"revNo",...t.t},{header:"Qtn. Date",key:"quotationDate",...t.t},{header:"Customer/Prospect Category",key:"customerCategory",...t.t},{header:"Customer/Prospect Name",key:"customerName",...t.t},{header:"Ccy",key:"currency",...t.t},{header:"Status",key:"status",...t.t}];const he=r=>({title:B,csvData:r,headers:G}),ce=r=>(0,h.J)({data:r,headers:G,widths:de,title:B});let ue=["*","*","*","*","*","*","*"],M="Quotation Of SKU",z=[{header:"Qtn. No.",key:"quotationNo",...t.t},{header:"Rev No.",key:"revNo",...t.t},{header:"Qtn. Date",key:"quotationDate",...t.t},{header:"Customer Category",key:"customerCategory",...t.t},{header:"Customer Name",key:"customerName",...t.t},{header:"Ccy",key:"currency",...t.t},{header:"Status",key:"status",...t.t}];const Se=r=>({title:M,csvData:r,headers:z}),ye=r=>(0,h.J)({data:r,headers:z,widths:ue,title:M})}}]);