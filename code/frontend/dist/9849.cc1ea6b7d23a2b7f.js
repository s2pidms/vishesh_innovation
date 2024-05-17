"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9849],{69849:(V,g,l)=>{l.r(g),l.d(g,{PPVBySupplierModule:()=>S});var s=l(96814),d=l(1076),c=l(43818),m=l(98687),t=l(65879),y=l(74659),p=l(99328),b=l(88059),P=l(37285),u=l(60095),T=l(50363),Z=l(83344);function f(a,h){if(1&a&&(t.TgZ(0,"tr")(1,"td",41,42)(3,"span",43),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"number"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"number"),t.qZA()()),2&a){const e=h.$implicit,o=t.MAs(2);t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.supplierName)("positionTarget",o),t.xp6(1),t.hij(" ",null==e?null:e.supplierName," "),t.xp6(2),t.Oqu(null==e?null:e.itemType),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Oqu(t.xi3(11,10,null==e?null:e.totalPPV,".2-2")),t.xp6(3),t.Oqu(t.xi3(14,13,null==e?null:e.totalQuantityPurchased,".2-2")),t.xp6(3),t.Oqu(t.xi3(17,16,null==e?null:e.totalPurchaseAmount,".2-2"))}}const A=function(a,h,e,o){return{page:a,pageSize:h,collection:e,search:o,type:"list",pdfDisplay:!0}};let _=(()=>{class a{constructor(e,o,i,n,r,D){this.purchaseOrderService=e,this.exportExcelService=o,this.spinner=i,this.utilityService=n,this.activatedRoute=r,this.exportToPDFService=D,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.company={},this.supplierOptions=[],this.itemCategory=[],this.fromDate="",this.toDate="",this.supplierId="",this.itemType="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}trackByFn(e,o){return o?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getFiscalDate(){let e=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(e.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(e.toDate,"YYYY-MM-DD")}reset(){this.getFiscalDate(),this.supplierId="",this.itemType="",this.getAll()}getAll(e=!1,o=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,supplier:this.supplierId,fromDate:this.fromDate,toDate:this.toDate,itemCategory:this.itemType};this.subscription&&this.subscription.unsubscribe(),this.purchaseOrderService.getAllPPVReportsBySupplier(i).subscribe(n=>{"EXCEL"==o?this.excelDownload(n.rows):"PDF"==o?this.pdfDownload(n.rows):(this.tableData=n.rows,this.supplierOptions=n.suppliers,this.itemCategory=n.itemCategoryOptions,this.collection=n.count,this.company=n.company,this.totalAmount=n?.totalAmounts?.totalPPV?n?.totalAmounts?.totalPPV:0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let o=(0,m.zm)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){this.exportExcelService.exportExcel((0,m.R4)(e))}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||a)(t.Y36(y.x$),t.Y36(p.Ol),t.Y36(p.V),t.Y36(p.tI),t.Y36(d.gz),t.Y36(p.$L))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ppv-by-supplier"]],viewQuery:function(o,i){if(1&o&&t.Gf(c.j,5),2&o){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:69,vars:23,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5"],[1,"form-label"],["bindLabel","itemCategoryOptions","bindValue","itemCategoryOptions",3,"items","clearable","ngModel","ngModelChange"],[1,"col-2","ps-0","separate-row"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-2"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","itemType",3,"sort"],["sortable","currency",3,"sort"],["sortable","totalPPV",3,"sort"],["sortable","totalQuantityPurchased",3,"sort"],["sortable","totalPurchaseAmount",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"ngbTooltip","positionTarget"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"PPV by Supplier Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Item Category"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(r){return i.itemType=r}),t.qZA()(),t.TgZ(11,"div",9)(12,"label",7),t._uU(13,"Supplier"),t.qZA(),t.TgZ(14,"ng-select",10),t.NdJ("ngModelChange",function(r){return i.supplierId=r}),t.qZA(),t.TgZ(15,"span",11),t._UZ(16,"img",12),t.qZA()(),t.TgZ(17,"div",13)(18,"label",7),t._uU(19," From Date "),t.TgZ(20,"span",14),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"input",15),t.NdJ("ngModelChange",function(r){return i.fromDate=r}),t.qZA()(),t.TgZ(23,"div",13)(24,"label",7),t._uU(25," To Date "),t.TgZ(26,"span",14),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"input",15),t.NdJ("ngModelChange",function(r){return i.toDate=r}),t.qZA()(),t.TgZ(29,"div",16)(30,"span",17),t._UZ(31,"img",12),t.qZA(),t.TgZ(32,"button",18),t.NdJ("click",function(){return i.getAll()}),t._uU(33,"Apply Filter"),t.qZA(),t.TgZ(34,"button",19),t.NdJ("click",function(){return i.reset()}),t._uU(35,"Reset Filter"),t.qZA()()(),t._UZ(36,"hr",20),t.TgZ(37,"div",21)(38,"app-setting-header",22),t.NdJ("dataChange",function(r){return i.eventHeader(r)}),t.qZA(),t.TgZ(39,"table",23)(40,"thead",24)(41,"tr",25)(42,"th",26),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(43,"Supplier"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(45,"Item Category"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(47,"Currency"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(49,"Total PPV"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(51,"Total Quantity Purchased"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(53,"Total Purchase Amount"),t.qZA()()(),t.TgZ(54,"tbody"),t.YNc(55,f,18,19,"tr",32),t.qZA()()(),t.TgZ(56,"div",33),t._UZ(57,"hr",20),t.TgZ(58,"div",34)(59,"div",35)(60,"div",36)(61,"div",37),t._uU(62," Total PPV Value "),t._UZ(63,"i",38),t.TgZ(64,"button",39),t._uU(65),t.ALo(66,"companyCurrency"),t.qZA()(),t._UZ(67,"input",40),t.ALo(68,"currency"),t.qZA()()()()()()),2&o&&(t.xp6(10),t.Q6J("items",i.itemCategory)("clearable",!1)("ngModel",i.itemType),t.xp6(4),t.Q6J("items",i.supplierOptions)("clearable",!1)("ngModel",i.supplierId),t.xp6(8),t.Q6J("ngModel",i.fromDate),t.xp6(6),t.Q6J("ngModel",i.toDate),t.xp6(10),t.Q6J("data",t.l5B(18,A,i.page,i.pageSize,i.collection,i.search)),t.xp6(17),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn),t.xp6(10),t.Oqu(t.lcZ(66,13,"INR")),t.xp6(2),t.Q6J("value",t.xi3(68,15,i.totalAmount,"INR")))},dependencies:[s.sg,b.P,P._L,u.Fj,u.JJ,u.On,T.w9,c.j,s.JJ,s.H9,Z.f],encapsulation:2})}return a})();var v=l(56208);const C=[{path:"",component:_}];let S=(()=>{class a{static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[s.ez,d.Bz.forChild(C),v.m]})}return a})()}}]);