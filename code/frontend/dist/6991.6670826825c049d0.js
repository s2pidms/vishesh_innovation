"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6991],{46991:(R,u,r)=>{r.r(u),r.d(u,{GoodsReceiptNoteDiscrepancyModule:()=>A});var d=r(96814),h=r(1076),g=r(43818),m=r(31655),t=r(65879),D=r(73374),l=r(2742),Z=r(88059),b=r(37285),p=r(60095),_=r(50363);function y(a,c){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",33,34)(7,"span",35),t._uU(8),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td",33,36)(15,"span",35),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA()()),2&a){const e=c.$implicit,s=t.MAs(6),o=t.MAs(14);t.xp6(2),t.Oqu(null==e?null:e.GRNNumber),t.xp6(2),t.Oqu(null==e?null:e.GRNDateS),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",e.supplierName),t.xp6(1),t.hij(" ",null==e?null:e.supplierName," "),t.xp6(2),t.Oqu(null==e?null:e.PONumber),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.itemDescription),t.xp6(1),t.hij(" ",null==e?null:e.itemDescription," "),t.xp6(2),t.Oqu(null==e?null:e.POQty),t.xp6(2),t.Oqu(null==e?null:e.GRNQty),t.xp6(2),t.Oqu(null==e?null:e.discrepancy)}}const T=function(a,c,e,s){return{page:a,pageSize:c,collection:e,search:s,type:"list",pdfDisplay:!0}};let f=(()=>{class a{constructor(e,s,o,i,n,v){this.goodsReceiptNoteService=e,this.exportExcelService=s,this.spinner=o,this.utilityService=i,this.activatedRoute=n,this.exportToPDFService=v,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.originTableData=[],this.submitted=!1,this.supplierOptions=[],this.itemCategoryOptions=[],this.itemCategory=[],this.supplier="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,supplier:this.supplier,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.goodsReceiptNoteService.getGRNDiscrepancyReports(o).subscribe(i=>{"EXCEL"==s?this.excelDownload(i.rows):"PDF"==s?this.pdfDownload(i.rows):(this.tableData=i.rows,this.originTableData=i.rows.map,this.supplierOptions=i.suppliers,this.itemCategoryOptions=i.itemCategoryOptions,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.supplier="",this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}pdfDownload(e){let s=(0,m.Cc)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((0,m.bo)(e))}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(D.zP),t.Y36(l.Ol),t.Y36(l.V),t.Y36(l.tI),t.Y36(h.gz),t.Y36(l.$L))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-goods-receipt-note-discrepancy"]],viewQuery:function(s,o){if(1&s&&t.Gf(g.j,5),2&s){let i;t.iGM(i=t.CRH())&&(o.headers=i)}},decls:60,vars:12,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"text-danger"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNNumber",3,"sort"],["sortable","GRNDateS",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","PONumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","POQty",3,"sort"],["sortable","GRNDetails.GRNQty",3,"sort"],["sortable","discrepancy",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(s,o){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"GRN Discrepancy Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Supplier"),t.TgZ(10,"span",8),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"ng-select",9),t.NdJ("ngModelChange",function(n){return o.supplier=n}),t.qZA(),t.TgZ(13,"span",10),t._UZ(14,"img",11),t.qZA()(),t.TgZ(15,"div",3)(16,"label",7),t._uU(17,"From Date"),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t.TgZ(20,"input",12),t.NdJ("ngModelChange",function(n){return o.fromDate=n}),t.qZA()(),t.TgZ(21,"div",3)(22,"label",7),t._uU(23,"To Date"),t.TgZ(24,"span",8),t._uU(25,"*"),t.qZA()(),t.TgZ(26,"input",12),t.NdJ("ngModelChange",function(n){return o.toDate=n}),t.qZA()(),t.TgZ(27,"div",13)(28,"span",14),t._UZ(29,"img",11),t.qZA(),t.TgZ(30,"button",15),t.NdJ("click",function(){return o.getAll()}),t._uU(31,"Apply Filter"),t.qZA(),t.TgZ(32,"button",16),t.NdJ("click",function(){return o.reset()}),t._uU(33,"Reset Filter"),t.qZA()()(),t._UZ(34,"hr",17),t.TgZ(35,"div",18)(36,"app-setting-header",19),t.NdJ("dataChange",function(n){return o.eventHeader(n)}),t.qZA(),t.TgZ(37,"table",20)(38,"thead",21)(39,"tr",22)(40,"th",23),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(41,"GRN #"),t.qZA(),t.TgZ(42,"th",24),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(43,"GRN Date"),t.qZA(),t.TgZ(44,"th",25),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(45,"Supplier"),t.qZA(),t.TgZ(46,"th",26),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(47,"PO #"),t.qZA(),t.TgZ(48,"th",27),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(49,"Item Code"),t.qZA(),t.TgZ(50,"th",28),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(51,"Item Description"),t.qZA(),t.TgZ(52,"th",29),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(53,"PO Qty"),t.qZA(),t.TgZ(54,"th",30),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(55,"Received Qty"),t.qZA(),t.TgZ(56,"th",31),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(57,"Discrepancy"),t.qZA()()(),t.TgZ(58,"tbody"),t.YNc(59,y,23,17,"tr",32),t.qZA()()()()()),2&s&&(t.xp6(12),t.Q6J("items",o.supplierOptions)("clearable",!1)("ngModel",o.supplier),t.xp6(8),t.Q6J("ngModel",o.fromDate),t.xp6(6),t.Q6J("ngModel",o.toDate),t.xp6(10),t.Q6J("data",t.l5B(7,T,o.page,o.pageSize,o.collection,o.search)),t.xp6(23),t.Q6J("ngForOf",o.tableData))},dependencies:[d.sg,Z.P,b._L,p.Fj,p.JJ,p.On,_.w9,g.j],encapsulation:2})}return a})();var N=r(56208);const C=[{path:"",component:f}];let A=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#e=this.\u0275mod=t.oAB({type:a});static#o=this.\u0275inj=t.cJS({imports:[d.ez,h.Bz.forChild(C),N.m]})}return a})()}}]);