"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5751],{62273:(y,l,r)=>{r.r(l),r.d(l,{GoodsRequisitionSummaryModule:()=>D});var u=r(96814),c=r(1076),p=r(43818),_=r(11277),t=r(65879),T=r(23396),m=r(2742),h=r(88059),Z=r(37285),d=r(60095),b=r(50363),f=r(59103);function S(a,g){if(1&a&&(t.TgZ(0,"option",38),t._uU(1),t.qZA()),2&a){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function q(a,g){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",39,40)(11,"span",41),t._uU(12),t.qZA()(),t.TgZ(13,"td",39,42)(15,"span",41),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"UOMUnitsMaster"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA()()),2&a){const e=g.$implicit,s=t.MAs(10),o=t.MAs(14);t.xp6(2),t.Oqu(null==e?null:e.GRNumber),t.xp6(2),t.Oqu(null==e?null:e.GRDate),t.xp6(2),t.Oqu(null==e?null:e.department),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",e.itemName),t.xp6(1),t.hij(" ",e.itemName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.itemDescription),t.xp6(1),t.hij(" ",e.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(19,17,null==e?null:e.UOM)),t.xp6(3),t.Oqu(null==e?null:e.GRQty),t.xp6(2),t.Oqu(null==e?null:e.GRStatus)}}const R=function(a,g,e,s){return{page:a,pageSize:g,collection:e,search:s,type:"list",pdfDisplay:!0}};let A=(()=>{class a{constructor(e,s,o,n,i,G){this.goodsRequisitionService=e,this.exportExcelService=s,this.spinner=o,this.utilityService=n,this.activatedRoute=i,this.exportToPDFService=G,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.departmentOptions=[],this.statusOptions=[],this.departmentId="",this.GRStatus="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(e,s){return s?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.departmentId="",this.GRStatus="",this.getAll()}getAll(e=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,department:this.departmentId,fromDate:this.fromDate,toDate:this.toDate,status:this.GRStatus};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.goodsRequisitionService.getAllGRSummaryReports(o).subscribe(n=>{"EXCEL"==s?this.excelDownload(n.rows):"PDF"==s?this.pdfDownload(n.rows):(this.tableData=n.rows,this.statusOptions=n.GRStatus,this.departmentOptions=n.departments,this.collection=n.count,this.company=n.company),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let s=(0,_.t)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((0,_.b)(e))}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(T.Rm),t.Y36(m.Ol),t.Y36(m.V),t.Y36(m.tI),t.Y36(c.gz),t.Y36(m.$L))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-goods-requisition-summary"]],viewQuery:function(s,o){if(1&s&&t.Gf(p.j,5),2&s){let n;t.iGM(n=t.CRH())&&(o.headers=n)}},decls:65,vars:15,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-9","ps-5"],[1,"row"],[1,"col-3"],[1,"form-label"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","ngModelChange"],[1,"col-3","separate-row"],[1,"form-select",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNumber",3,"sort"],["sortable","GRDate",3,"sort"],["sortable","department",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","GRQty",3,"sort"],["sortable","GRStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Goods Requisition Summary Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"label",9),t._uU(11,"Department/Team"),t.qZA(),t.TgZ(12,"ng-select",10),t.NdJ("ngModelChange",function(i){return o.departmentId=i}),t.qZA()(),t.TgZ(13,"div",11)(14,"label",9),t._uU(15,"Status"),t.qZA(),t.TgZ(16,"select",12),t.NdJ("ngModelChange",function(i){return o.GRStatus=i}),t.YNc(17,S,2,2,"option",13),t.qZA(),t.TgZ(18,"span",14),t._UZ(19,"img",15),t.qZA()(),t.TgZ(20,"div",8)(21,"label",9),t._uU(22," From Date "),t.TgZ(23,"span",16),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"input",17),t.NdJ("ngModelChange",function(i){return o.fromDate=i}),t.qZA()(),t.TgZ(26,"div",8)(27,"label",9),t._uU(28," To Date "),t.TgZ(29,"span",16),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"input",17),t.NdJ("ngModelChange",function(i){return o.toDate=i}),t.qZA()()()(),t.TgZ(32,"div",18)(33,"span",19),t._UZ(34,"img",15),t.qZA(),t.TgZ(35,"button",20),t.NdJ("click",function(){return o.getAll()}),t._uU(36,"Apply Filter"),t.qZA(),t.TgZ(37,"button",21),t.NdJ("click",function(){return o.reset()}),t._uU(38,"Reset Filter"),t.qZA()()(),t._UZ(39,"hr",22),t.TgZ(40,"div",23)(41,"app-setting-header",24),t.NdJ("dataChange",function(i){return o.eventHeader(i)}),t.qZA(),t.TgZ(42,"table",25)(43,"thead",26)(44,"tr",27)(45,"th",28),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(46,"GR No."),t.qZA(),t.TgZ(47,"th",29),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(48,"GR Date"),t.qZA(),t.TgZ(49,"th",30),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(50,"Department/Team"),t.qZA(),t.TgZ(51,"th",31),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(52,"Item Code"),t.qZA(),t.TgZ(53,"th",32),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(54,"Item Name"),t.qZA(),t.TgZ(55,"th",33),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(56,"Item Description"),t.qZA(),t.TgZ(57,"th",34),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(58,"UoM"),t.qZA(),t.TgZ(59,"th",35),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(60,"GR Qty."),t.qZA(),t.TgZ(61,"th",36),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(62,"Status"),t.qZA()()(),t.TgZ(63,"tbody"),t.YNc(64,q,24,19,"tr",37),t.qZA()()()()()),2&s&&(t.xp6(12),t.Q6J("items",o.departmentOptions)("clearable",!1)("ngModel",o.departmentId),t.xp6(4),t.Q6J("ngModel",o.GRStatus),t.xp6(1),t.Q6J("ngForOf",o.statusOptions),t.xp6(8),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(10,R,o.page,o.pageSize,o.collection,o.search)),t.xp6(23),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[u.sg,h.P,Z._L,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.On,b.w9,p.j,f.S],encapsulation:2})}return a})();var v=r(56208);const C=[{path:"",component:A}];let D=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[u.ez,c.Bz.forChild(C),v.m]})}return a})()},13107:(y,l,r)=>{r.d(l,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(y,l,r)=>{r.d(l,{J:()=>u});const u=({data:c,headers:p,widths:_,title:t})=>({tableData:{widths:_,headerRows:1,body:[p.map(h=>({text:h.header,style:"header"})),...c.map(h=>p.map(Z=>({style:"subheader",text:h[Z.key]})))]},title:t})}}]);