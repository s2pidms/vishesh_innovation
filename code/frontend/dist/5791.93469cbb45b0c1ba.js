"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5791],{45791:(N,d,a)=>{a.r(d),a.d(d,{OutstandingPoModule:()=>v});var g=a(96814),h=a(1076),c=a(43818),m=a(98687),t=a(65879),_=a(74659),u=a(98977),Z=a(88059),b=a(37285),p=a(60095),T=a(50363);function f(r,l){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",34,35)(7,"span",36),t._uU(8),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",34,37)(13,"span",36),t._uU(14),t.qZA()(),t.TgZ(15,"td",34,38)(17,"span",36),t._uU(18),t.qZA()(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA()()),2&r){const i=l.$implicit,o=t.MAs(6),e=t.MAs(12),s=t.MAs(16);t.xp6(2),t.Oqu(null==i?null:i.PONumber),t.xp6(2),t.Oqu(null==i?null:i.PODateS),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.supplierName)("positionTarget",o),t.xp6(1),t.hij(" ",null==i?null:i.supplierName," "),t.xp6(2),t.Oqu(null==i?null:i.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.itemName)("positionTarget",e),t.xp6(1),t.hij(" ",null==i?null:i.itemName," "),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.itemDescription)("positionTarget",s),t.xp6(1),t.hij(" ",null==i?null:i.itemDescription," "),t.xp6(2),t.Oqu(null==i?null:i.POQty),t.xp6(2),t.Oqu(null==i?null:i.GRNQty),t.xp6(2),t.Oqu(null==i?null:i.balancedQty)}}const O=function(r,l,i,o){return{page:r,pageSize:l,collection:i,search:o,type:"list",pdfDisplay:!0}};let A=(()=>{var r;class l{constructor(o,e,s,n,D,y){this.purchaseOrderService=o,this.exportExcelService=e,this.spinner=s,this.utilityService=n,this.activatedRoute=D,this.exportToPDFService=y,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.supplierList=[],this.supplierId="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(o,e){return e?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.supplierId="",this.getAll()}getAll(o=!1,e=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,supplier:this.supplierId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseOrderService.getAllOutstandingPOReport(s).subscribe(n=>{"EXCEL"==e?this.excelDownload(n.rows):"PDF"==e?this.pdfDownload(n.rows):(this.tableData=n.rows,this.supplierList=n.supplierList,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let e=(0,m.by)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,m.dF)(o))}onSort({column:o,direction:e}){this.headers.forEach(s=>{s.sortable!==o&&(s.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}}return(r=l).\u0275fac=function(o){return new(o||r)(t.Y36(_.x$),t.Y36(u.Ol),t.Y36(u.V),t.Y36(u.tI),t.Y36(h.gz),t.Y36(u.$L))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-outstanding-po"]],viewQuery:function(o,e){if(1&o&&t.Gf(c.j,5),2&o){let s;t.iGM(s=t.CRH())&&(e.headers=s)}},decls:58,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","PONumber",3,"sort"],["sortable","PODateS",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","POQty",3,"sort"],["sortable","GRNQty",3,"sort"],["sortable","balancedQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemName",""],["itemDescription",""]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Outstanding PO report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Supplier wise"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(n){return e.supplierId=n}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(n){return e.fromDate=n}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(n){return e.toDate=n}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(n){return e.eventHeader(n)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(39,"PO #"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(41,"PO Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(43,"Supplier Name"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(45,"Item Code"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(47,"Item Name"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(49,"Item Description"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(51,"PO Qty"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(53,"GRN Qty"),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(55,"Bal. Qty"),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,f,25,21,"tr",33),t.qZA()()()()()),2&o&&(t.xp6(10),t.Q6J("items",e.supplierList)("clearable",!1)("ngModel",e.supplierId),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,O,e.page,e.pageSize,e.collection,e.search)),t.xp6(23),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[g.sg,Z.P,b._L,p.Fj,p.JJ,p.On,T.w9,c.j],encapsulation:2}),l})();var C=a(56208);const P=[{path:"",component:A}];let v=(()=>{var r;class l{}return(r=l).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.ez,h.Bz.forChild(P),C.m]}),l})()}}]);