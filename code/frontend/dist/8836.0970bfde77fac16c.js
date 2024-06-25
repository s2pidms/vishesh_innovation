"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8836],{50593:(T,u,s)=>{s.r(u),s.d(u,{ShipmentReportModule:()=>R});var p=s(96814),c=s(1076),m=s(43818),g=s(24627),t=s(65879),b=s(35747),h=s(2742),d=s(88059),f=s(37285),Z=s(60095),_=s(50363),S=s(83344);function v(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",39,40)(9,"span",41),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&a){const i=l.$implicit,n=t.MAs(8);t.xp6(2),t.Oqu(null==i?null:i.SPNumber),t.xp6(2),t.Oqu(null==i?null:i.createdAtS),t.xp6(2),t.Oqu(null==i?null:i.city),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",i.customerName),t.xp6(1),t.hij(" ",i.customerName," "),t.xp6(2),t.Oqu(null==i?null:i.currency),t.xp6(2),t.Oqu(null==i?null:i.shipmentValue)}}const A=function(a,l,i,n){return{page:a,pageSize:l,collection:i,search:n,type:"list",pdfDisplay:!0}};let y=(()=>{var a;class l{constructor(n,e,r,o,U,J){this.shipmentPlanningService=n,this.exportExcelService=e,this.activatedRoute=r,this.spinner=o,this.utilityService=U,this.exportToPDFService=J,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.supplierOptions=[],this.supplier="",this.totalAmount=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(n,e){return e?._id}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=n.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.supplier="",this.getAll()}getAll(n=!1,e=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:n,fromDate:this.fromDate,toDate:this.toDate,customer:this.supplier};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.shipmentPlanningService.getAllShipmentSummaryReports(r).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.supplierOptions=o.customers,this.collection=o.count,this.totalAmount=o?.totalAmounts?.shipmentValue),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(n){let e=(0,g.PN)(n);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(n){this.exportExcelService.exportExcel((0,g.Qg)(n))}onSort({column:n,direction:e}){this.headers.forEach(r=>{r.sortable!==n&&(r.direction="")}),this.column=n,this.direction="asc"==e?1:-1,this.getAll()}}return(a=l).\u0275fac=function(n){return new(n||a)(t.Y36(b.Cp),t.Y36(h.Ol),t.Y36(c.gz),t.Y36(h.V),t.Y36(h.tI),t.Y36(h.$L))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-shipment-report"]],viewQuery:function(n,e){if(1&n&&t.Gf(m.j,5),2&n){let r;t.iGM(r=t.CRH())&&(e.headers=r)}},decls:67,vars:20,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"text-danger"],["bindLabel","customerName","bindValue","_id",3,"items","ngModel","clearable","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image","pe-4"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SPNumber",3,"sort"],["sortable","createdAtS",3,"sort"],["sortable","city",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],["sortable","shipmentValue",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Shipment Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Customer"),t.TgZ(10,"span",8),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"ng-select",9),t.NdJ("ngModelChange",function(o){return e.supplier=o}),t.qZA(),t.TgZ(13,"span",10),t._UZ(14,"img",11),t.qZA()(),t.TgZ(15,"div",12)(16,"label",7),t._uU(17,"From Date"),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t.TgZ(20,"input",13),t.NdJ("ngModelChange",function(o){return e.fromDate=o}),t.qZA()(),t.TgZ(21,"div",12)(22,"label",7),t._uU(23,"To Date"),t.TgZ(24,"span",8),t._uU(25,"*"),t.qZA()(),t.TgZ(26,"input",13),t.NdJ("ngModelChange",function(o){return e.toDate=o}),t.qZA()(),t.TgZ(27,"div",14)(28,"span",15),t._UZ(29,"img",11),t.qZA(),t.TgZ(30,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(31,"Apply Filter"),t.qZA(),t.TgZ(32,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(33,"Reset Filter"),t.qZA()()(),t._UZ(34,"hr",18),t.TgZ(35,"div",19)(36,"app-setting-header",20),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(37,"table",21)(38,"thead",22)(39,"tr",23)(40,"th",24),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(41,"Shipment ID"),t.qZA(),t.TgZ(42,"th",25),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(43,"Shipment Date"),t.qZA(),t.TgZ(44,"th",26),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(45,"Destination"),t.qZA(),t.TgZ(46,"th",27),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(47,"Customer"),t.qZA(),t.TgZ(48,"th",28),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(49,"Currency"),t.qZA(),t.TgZ(50,"th",29),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(51,"Shipment Value"),t.qZA()()(),t.TgZ(52,"tbody"),t.YNc(53,v,15,10,"tr",30),t.qZA()()(),t.TgZ(54,"div",31),t._UZ(55,"hr",18),t.TgZ(56,"div",32)(57,"div",33)(58,"div",34)(59,"div",35),t._uU(60," Total Shipment Value "),t._UZ(61,"i",36),t.TgZ(62,"button",37),t._uU(63),t.ALo(64,"companyCurrency"),t.qZA()(),t._UZ(65,"input",38),t.ALo(66,"number"),t.qZA()()()()()()),2&n&&(t.xp6(12),t.Q6J("items",e.supplierOptions)("ngModel",e.supplier)("clearable",!1),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(15,A,e.page,e.pageSize,e.collection,e.search)),t.xp6(17),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(10),t.Oqu(t.lcZ(64,10,"INR")),t.xp6(2),t.Q6J("value",t.xi3(66,12,e.totalAmount,"1.2-2")))},dependencies:[d.P,p.sg,f._L,Z.Fj,Z.JJ,Z.On,_.w9,m.j,p.JJ,S.f],encapsulation:2}),l})();var C=s(56208);const D=[{path:"",component:y}];let R=(()=>{var a;class l{}return(a=l).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[C.m,p.ez,c.Bz.forChild(D)]}),l})()},13107:(T,u,s)=>{s.d(u,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,u,s)=>{s.d(u,{J:()=>p});const p=({data:c,headers:m,widths:g,title:t})=>({tableData:{widths:g,headerRows:1,body:[m.map(d=>({text:d.header,style:"header"})),...c.map(d=>m.map(f=>({style:"subheader",text:d[f.key]})))]},title:t})}}]);