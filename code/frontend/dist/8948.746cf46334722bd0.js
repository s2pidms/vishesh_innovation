"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8948],{38948:(y,d,a)=>{a.r(d),a.d(d,{AsnReportModule:()=>p});var i=a(96814),h=a(1076),m=a(43818),_=a(77055),g=a(25116),t=a(65879),T=a(35747),u=a(99328),A=a(88059),f=a(37285),v=a(60095),b=a(53421);function Z(l,c){if(1&l){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",34,35)(7,"span",36),t._uU(8),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"div",37),t._UZ(21,"button",38),t.TgZ(22,"div",39)(23,"a",40),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateTo("/default/dispatch/transactions/asn/form",s,"view"))}),t._UZ(24,"i",41),t._uU(25," View "),t.qZA(),t.TgZ(26,"a",40),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateToPrint("/#/print/asn",s,"print"))}),t._UZ(27,"i",42),t._uU(28," Print "),t.qZA(),t.TgZ(29,"a",40),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateToPrint("/#/print/asn_box_label",s,"print"))}),t._UZ(30,"i",43),t._uU(31," Box Label "),t.qZA(),t.TgZ(32,"a",40),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.sendMail(null==s?null:s._id))}),t._UZ(33,"i",44),t._uU(34," Notify customer "),t.qZA()()()()()}if(2&l){const n=c.$implicit,o=t.MAs(6),e=t.oxw();t.xp6(2),t.Oqu(null==n?null:n.ASNNumber),t.xp6(2),t.Oqu(null==n?null:n.salesInvoiceNumber),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",n.customerName),t.xp6(1),t.hij(" ",n.customerName?n.customerName:null," "),t.xp6(2),t.Oqu(null==n?null:n.stateOfSupply),t.xp6(2),t.Oqu(null==n?null:n.totalNoOfBoxes),t.xp6(2),t.Oqu(null==n?null:n.totalGrossWeight),t.xp6(2),t.Oqu(null==n?null:n.transporter),t.xp6(2),t.Oqu(null==n?null:n.ASNStatus),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.ASNStatus)||"Rejected"===(null==n?null:n.ASNStatus)),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.ASNStatus)||"Rejected"===(null==n?null:n.ASNStatus)),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.viewAction)}}const S=function(l,c,n,o){return{page:l,pageSize:c,collection:n,search:o,type:"list",pdfDisplay:!0}};let N=(()=>{var l;class c{constructor(o,e,s,r,C,k,x,P){this.advanceShipmentNotice=o,this.exportExcelService=e,this.spinner=s,this.activatedRoute=r,this.utilityService=C,this.exportToPDFService=k,this.router=x,this.toastService=P,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.supplierOptions=[],this.supplier="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.rolePermissionActions=g.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(o,e){return e?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}navigateTo(o,e,s){this.router.navigate([o],{relativeTo:this.activatedRoute,queryParams:{id:e?._id,action:s}})}navigateToPrint(o,e,s){window.open(`${window.location.origin}${o}?id=${e?._id}&action=${s}`,"_blank")}sendMail(o){this.spinner.show(),this.advanceShipmentNotice.sendMailById(o).subscribe(e=>{this.toastService.success(e.message),this.spinner.hide()})}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.supplier="",this.getAll()}getAll(o=!1,e=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.advanceShipmentNotice.getAllReports(s).subscribe(r=>{"EXCEL"==e?this.excelDownload(r.rows):"PDF"==e?this.pdfDownload(r.rows):(this.tableData=r.rows,this.supplierOptions=r.suppliers,this.collection=r.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let e=(0,_.xL)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,_.Rn)(o))}onSort({column:o,direction:e}){this.headers.forEach(s=>{s.sortable!==o&&(s.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}}return(l=c).\u0275fac=function(o){return new(o||l)(t.Y36(T.n4),t.Y36(u.Ol),t.Y36(u.V),t.Y36(h.gz),t.Y36(u.tI),t.Y36(u.$L),t.Y36(h.F0),t.Y36(u.kl))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-asn-report"]],viewQuery:function(o,e){if(1&o&&t.Gf(m.j,5),2&o){let s;t.iGM(s=t.CRH())&&(e.headers=s)}},decls:56,vars:10,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-9"],[1,"row"],[1,"col-6","separate-row","ps-3"],[1,"form-label"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-6"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-info"],[1,"text-white"],["sortable","ASNNumber",3,"sort"],["sortable","salesInvoiceNumber",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","stateOfSupply",3,"sort"],["sortable","totalNoOfBoxes",3,"sort"],["sortable","totalGrossWeight",3,"sort"],["sortable","transporter",3,"sort"],["sortable","ASNStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-print","fa-lg","me-3","text-primary"],["aria-hidden","true",1,"fa","fa-tag","fa-lg","me-3","text-primary"],["aria-hidden","true",1,"fa","fa-bell-o","fa-lg","text-primary","me-3"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Advance Shipment Notice Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),t._uU(11,"From Date"),t.TgZ(12,"span",10),t._uU(13,"*"),t.qZA()(),t.TgZ(14,"input",11),t.NdJ("ngModelChange",function(r){return e.fromDate=r}),t.qZA(),t.TgZ(15,"span",12),t._UZ(16,"img",13),t.qZA()(),t.TgZ(17,"div",14)(18,"label",9),t._uU(19,"To Date"),t.TgZ(20,"span",10),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"input",11),t.NdJ("ngModelChange",function(r){return e.toDate=r}),t.qZA()()()(),t.TgZ(23,"div",15)(24,"span",16),t._UZ(25,"img",13),t.qZA(),t.TgZ(26,"button",17),t.NdJ("click",function(){return e.getAll()}),t._uU(27,"Apply Filter"),t.qZA(),t.TgZ(28,"button",18),t.NdJ("click",function(){return e.reset()}),t._uU(29,"Reset Filter"),t.qZA()()(),t._UZ(30,"hr",19),t.TgZ(31,"div",20)(32,"app-setting-header",21),t.NdJ("dataChange",function(r){return e.eventHeader(r)}),t.qZA(),t.TgZ(33,"table",22)(34,"thead",23)(35,"tr",24)(36,"th",25),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(37,"ASN #"),t.qZA(),t.TgZ(38,"th",26),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(39,"Invoice #"),t.qZA(),t.TgZ(40,"th",27),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(41,"Customer Name"),t.qZA(),t.TgZ(42,"th",28),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(43,"State of supply"),t.qZA(),t.TgZ(44,"th",29),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(45,"Total Boxes"),t.qZA(),t.TgZ(46,"th",30),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(47,"Total Weight(kgs)"),t.qZA(),t.TgZ(48,"th",31),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(49,"Transporter"),t.qZA(),t.TgZ(50,"th",32),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(51,"Status"),t.qZA(),t.TgZ(52,"th"),t._uU(53,"Action"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,Z,35,20,"tr",33),t.qZA()()()()()),2&o&&(t.xp6(14),t.Q6J("ngModel",e.fromDate),t.xp6(8),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(5,S,e.page,e.pageSize,e.collection,e.search)),t.xp6(23),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[i.sg,A.P,f._L,v.Fj,v.JJ,v.On,m.j,b.J],encapsulation:2}),c})();var D=a(56208);const R=[{path:"",component:N}];let p=(()=>{var l;class c{}return(l=c).\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[i.ez,h.Bz.forChild(R),D.m]}),c})()},77055:(y,d,a)=>{a.d(d,{xL:()=>b,Rn:()=>v,Fp:()=>T,Mw:()=>t});var i=a(13107),h=a(28402);let m=["*","*","*","*","*","*","*","*","*","*","*","*"],_="ShipmentPlanning Report",g=[{header:"Shipment ID",key:"SPNumber",...i.t},{header:"DRN No.",key:"DRNNumber",...i.t},{header:"DRN Date",key:"DRNDateS",...i.t},{header:"Customer Name",key:"customerName",...i.t},{header:"Bill From Location",key:"billFromLocation",...i.t},{header:"Currency",key:"currency",...i.t},{header:"Product Value",key:"SPTotalAmount",...i.t},{header:"Shipment Value",key:"shipmentValue",...i.t},{header:"SPV",key:"SPV",...i.t},{header:"Status",key:"SPStatus",...i.t}];const t=p=>({title:_,csvData:p,headers:g}),T=p=>(0,h.J)({data:p,headers:g,widths:m,title:_});let u=["*","*","*","*","*","*","*","*","*","*","*"],A="Advance Shipment Notice",f=[{header:"Invoice #",key:"salesInvoiceNumber",...i.t},{header:"Invoice Date",key:"salesInvoiceDate",...i.t},{header:"Invoice Value",key:"invoiceValue",...i.t},{header:"ASN #",key:"ASNNumber",...i.t},{header:"Customer Name",key:"customerName",...i.t},{header:"State of supply",key:"stateOfSupply",...i.t},{header:"Total Boxes",key:"totalNoOfBoxes",...i.t},{header:"Total Weight(kgs)",key:"totalGrossWeight",...i.t},{header:"Transporter",key:"transporter",...i.t},{header:"Status",key:"ASNStatus",...i.t}];const v=p=>({title:A,csvData:p,headers:f}),b=p=>(0,h.J)({data:p,headers:f,widths:u,title:A})},13107:(y,d,a)=>{a.d(d,{t:()=>i});const i={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(y,d,a)=>{a.d(d,{J:()=>i});const i=({data:h,headers:m,widths:_,title:g})=>({tableData:{widths:_,headerRows:1,body:[m.map(u=>({text:u.header,style:"header"})),...h.map(u=>m.map(A=>({style:"subheader",text:u[A.key]})))]},title:g})}}]);