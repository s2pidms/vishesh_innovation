"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1043],{91043:(J,c,a)=>{a.r(c),a.d(c,{PPVDetailsModule:()=>y});var g=a(96814),h=a(1076),d=a(43818),m=a(98687),t=a(65879),_=a(48720),u=a(99328),Z=a(88059),P=a(37285),l=a(60095),D=a(50363);function b(s,p){if(1&s&&(t.TgZ(0,"option",38),t._uU(1),t.qZA()),2&s){const e=p.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function T(s,p){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",39,40)(5,"span",41),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.ALo(16,"number"),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"number"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"number"),t.qZA()()),2&s){const e=p.$implicit,o=t.MAs(4);t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemDescription)("positionTarget",o),t.xp6(1),t.hij(" ",null==e?null:e.itemDescription," "),t.xp6(2),t.Oqu(null==e?null:e.PONumber),t.xp6(2),t.Oqu(null==e?null:e.currency),t.xp6(2),t.Oqu(t.xi3(13,13,null==e?null:e.POQty,".2-2")),t.xp6(3),t.Oqu(t.xi3(16,16,null==e?null:e.actualPrice,".2-2")),t.xp6(3),t.Oqu(t.xi3(19,19,null==e?null:e.standardPrice,".2-2")),t.xp6(3),t.Oqu(t.xi3(22,22,null==e?null:e.variance,".2-2")),t.xp6(3),t.Oqu(t.xi3(25,25,null==e?null:e.variancePercentage,".2-2"))}}const f=function(s,p,e,o){return{page:s,pageSize:p,collection:e,search:o,type:"list",pdfDisplay:!0}};let C=(()=>{class s{constructor(e,o,i,r,n,U,q){this.purchaseService=e,this.router=o,this.exportExcelService=i,this.spinner=r,this.utilityService=n,this.activatedRoute=U,this.exportToPDFService=q,this.page=1,this.pageSize=12,this.collection=0,this.column="itemCode",this.direction=-1,this.search="",this.supplier="",this.itemCategory="",this.tableData=[],this.suppliers=[],this.itemCategoryOptions=[],this.submitted=!1,this.fromDate="",this.toDate=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}getFiscalDate(){let e=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(e.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(e.toDate,"YYYY-MM-DD")}navigateTo(e,o,i){this.router.navigate([e],{queryParams:{id:o,action:i}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,o){return o?._id}getAll(e=!1,o=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,itemCategory:this.itemCategory,suppliers:this.supplier,fromDate:this.fromDate,toDate:this.toDate,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseService.getAllPPVDetailsReports(i).subscribe(r=>{"EXCEL"==o?this.excelDownload(r.rows):"PDF"==o?this.pdfDownload(r.rows):(this.tableData=r.rows,this.suppliers=r.suppliers,this.itemCategoryOptions=r.itemCategoryOptions,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}reset(){this.getFiscalDate(),this.supplier="",this.itemCategory="",this.getAll()}pdfDownload(e){let o=(0,m.wK)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}excelDownload(e){this.exportExcelService.exportExcel((0,m.GQ)(e))}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(_.x$),t.Y36(h.F0),t.Y36(u.Ol),t.Y36(u.V),t.Y36(u.tI),t.Y36(h.gz),t.Y36(u.$L))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-ppv-details"]],viewQuery:function(o,i){if(1&o&&t.Gf(d.j,5),2&o){let r;t.iGM(r=t.CRH())&&(i.headers=r)}},decls:65,vars:15,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5"],[1,"form-label"],[1,"form-select",3,"ngModel","ngModelChange"],["selected","","disabled","","value",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-2","ps-0","separate-row"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-2"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","PONumber",3,"sort"],["sortable","currency",3,"sort"],["sortable","POQty",3,"sort"],["sortable","actualPrice",3,"sort"],["sortable","standardPrice",3,"sort"],["sortable","variance",3,"sort"],["sortable","variancePercentage",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value"],[1,"text-start"],["itemDescription",""],[1,"pointer",3,"ngbTooltip","positionTarget"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"PPV Details Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," Item Category"),t.qZA(),t.TgZ(10,"select",8),t.NdJ("ngModelChange",function(n){return i.itemCategory=n}),t.TgZ(11,"option",9),t._uU(12,"Select Item Category"),t.qZA(),t.YNc(13,b,2,2,"option",10),t.qZA()(),t.TgZ(14,"div",11)(15,"label",7),t._uU(16,"Supplier"),t.qZA(),t.TgZ(17,"ng-select",12),t.NdJ("ngModelChange",function(n){return i.supplier=n}),t.qZA(),t.TgZ(18,"span",13),t._UZ(19,"img",14),t.qZA()(),t.TgZ(20,"div",15)(21,"label",7),t._uU(22," From Date "),t.TgZ(23,"span",16),t._uU(24,"*"),t.qZA()(),t.TgZ(25,"input",17),t.NdJ("ngModelChange",function(n){return i.fromDate=n}),t.qZA()(),t.TgZ(26,"div",15)(27,"label",7),t._uU(28," To Date "),t.TgZ(29,"span",16),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"input",17),t.NdJ("ngModelChange",function(n){return i.toDate=n}),t.qZA()(),t.TgZ(32,"div",18)(33,"span",19),t._UZ(34,"img",14),t.qZA(),t.TgZ(35,"button",20),t.NdJ("click",function(){return i.getAll()}),t._uU(36,"Apply Filter"),t.qZA(),t.TgZ(37,"button",21),t.NdJ("click",function(){return i.reset()}),t._uU(38,"Reset Filter"),t.qZA()()(),t._UZ(39,"hr",22),t.TgZ(40,"div",23)(41,"app-setting-header",24),t.NdJ("dataChange",function(n){return i.eventHeader(n)}),t.qZA(),t.TgZ(42,"table",25)(43,"thead",26)(44,"tr",27)(45,"th",28),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(46,"Item Code"),t.qZA(),t.TgZ(47,"th",29),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(48,"Item Description"),t.qZA(),t.TgZ(49,"th",30),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(50,"Purchase Order"),t.qZA(),t.TgZ(51,"th",31),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(52,"Currency"),t.qZA(),t.TgZ(53,"th",32),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(54,"Qty."),t.qZA(),t.TgZ(55,"th",33),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(56,"Actual Price"),t.qZA(),t.TgZ(57,"th",34),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(58,"Standard Price"),t.qZA(),t.TgZ(59,"th",35),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(60,"Variance"),t.qZA(),t.TgZ(61,"th",36),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(62,"Variance (%)"),t.qZA()()(),t.TgZ(63,"tbody"),t.YNc(64,T,26,28,"tr",37),t.qZA()()()()()),2&o&&(t.xp6(10),t.Q6J("ngModel",i.itemCategory),t.xp6(3),t.Q6J("ngForOf",i.itemCategoryOptions),t.xp6(4),t.Q6J("items",i.suppliers)("clearable",!1)("ngModel",i.supplier),t.xp6(8),t.Q6J("ngModel",i.fromDate),t.xp6(6),t.Q6J("ngModel",i.toDate),t.xp6(10),t.Q6J("data",t.l5B(10,f,i.page,i.pageSize,i.collection,i.search)),t.xp6(23),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[g.sg,Z.P,P._L,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.On,D.w9,d.j,g.JJ],encapsulation:2})}return s})();var A=a(56208);const v=[{path:"",component:C}];let y=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[g.ez,h.Bz.forChild(v),A.m]})}return s})()}}]);