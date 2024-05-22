"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5809],{85809:(S,g,a)=>{a.r(g),a.d(g,{PPVModule:()=>y});var u=a(1076),P=a(56208),m=a(43818),c=a(98687),t=a(65879),Z=a(74659),p=a(99328),_=a(88059),h=a(96814),b=a(37285),d=a(60095),f=a(50363),T=a(83344);function A(s,l){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",44,45)(7,"span",46),t._uU(8),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",44,47)(13,"span",46),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"number"),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"number"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.ALo(26,"number"),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.ALo(29,"number"),t.qZA(),t.TgZ(30,"td"),t._uU(31),t.ALo(32,"number"),t.qZA()()),2&s){const r=l.$implicit,n=t.MAs(6),e=t.MAs(12);t.xp6(2),t.Oqu(null==r?null:r.PONumber),t.xp6(2),t.Oqu(null==r?null:r.PODateS),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",r.supplierName)("positionTarget",n),t.xp6(1),t.hij(" ",null==r?null:r.supplierName," "),t.xp6(2),t.Oqu(null==r?null:r.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",r.itemDescription)("positionTarget",e),t.xp6(1),t.hij(" ",null==r?null:r.itemDescription," "),t.xp6(2),t.Oqu(t.xi3(17,23,null==r?null:r.POQty,".2-2")),t.xp6(3),t.Oqu(t.xi3(20,26,null==r?null:r.standardRate,".2-2")),t.xp6(3),t.Oqu(t.xi3(23,29,null==r?null:r.purchaseRate,".2-2")),t.xp6(3),t.Oqu(t.xi3(26,32,r.standardRate-r.purchaseRate,".2-2")),t.xp6(3),t.Oqu(t.xi3(29,35,r.POQty*r.purchaseRate,".2-2")),t.xp6(2),t.ekj("text-primary",r.ppv<0)("text-success",r.ppv>0),t.xp6(1),t.hij(" ",t.xi3(32,38,null==r?null:r.ppv,".2-2")," ")}}const v=function(s,l,r,n){return{page:s,pageSize:l,collection:r,search:n,type:"list",pdfDisplay:!0}},C=[{path:"",component:(()=>{var s;class l{constructor(n,e,i,o,D,U,V){this.purchaseService=n,this.router=e,this.exportExcelService=i,this.spinner=o,this.utilityService=D,this.activatedRoute=U,this.exportToPDFService=V,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.submitted=!1,this.supplierOptions=[],this.itemCategoryOptions=[],this.itemCategory=[],this.supplierId="",this.fromDate="",this.toDate="",this.totalAmount=0}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll()}getFiscalDate(){let n=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(n.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(n.toDate,"YYYY-MM-DD")}navigateTo(n,e,i){this.router.navigate([n],{queryParams:{id:e,action:i}})}reset(){this.getFiscalDate(),this.itemCategory="",this.supplierId="",this.getAll()}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=n.value,this.getAll()}}trackByFn(n,e){return e?._id}getAll(n=!1,e=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:n,supplier:this.supplierId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.purchaseService.getAllPpvReports(i).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.supplierOptions=o.suppliers,this.itemCategoryOptions=o.itemCategoryOptions,this.collection=o.count,this.totalAmount=o?.totalAmounts?.ppvValue?o?.totalAmounts?.ppvValue:0),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(n){let e=(0,c.GG)(n);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(n){this.exportExcelService.exportExcel((0,c.et)(n))}onSort({column:n,direction:e}){this.headers.forEach(i=>{i.sortable!==n&&(i.direction="")}),this.column=n,this.direction="asc"==e?1:-1,this.getAll()}}return(s=l).\u0275fac=function(n){return new(n||s)(t.Y36(Z.x$),t.Y36(u.F0),t.Y36(p.Ol),t.Y36(p.V),t.Y36(p.tI),t.Y36(u.gz),t.Y36(p.$L))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-ppv"]],viewQuery:function(n,e){if(1&n&&t.Gf(m.j,5),2&n){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:75,vars:20,consts:[[1,"reportTablePage"],[1,"col-md-12","pb-0","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","mt-4","mb-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","supplierName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","PONumber",3,"sort"],["sortable","PODateS",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","POQty",3,"sort"],["sortable","standardRate",3,"sort"],["sortable","purchaseRate",3,"sort"],["sortable","diff",3,"sort"],["sortable","totalSpend",3,"sort"],["sortable","PPV",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"PPV Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Supplier"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(o){return e.supplierId=o}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(o){return e.fromDate=o}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(o){return e.toDate=o}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(39,"PO #"),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(41,"PO Date"),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(43,"Supplier Name"),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(45,"Item Code"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(47,"Item Description"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(49,"Qty."),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(51,"Std. Rate"),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(53,"Purchase Rate"),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(55,"Diff."),t.qZA(),t.TgZ(56,"th",33),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(57,"Total Spend"),t.qZA(),t.TgZ(58,"th",34),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(59,"PPV"),t.qZA()()(),t.TgZ(60,"tbody"),t.YNc(61,A,33,41,"tr",35),t.qZA()()(),t.TgZ(62,"div",36),t._UZ(63,"hr",18),t.TgZ(64,"div",37)(65,"div",38)(66,"div",39)(67,"div",40),t._uU(68," Total PPV Value "),t._UZ(69,"i",41),t.TgZ(70,"button",42),t._uU(71),t.ALo(72,"companyCurrency"),t.qZA()(),t._UZ(73,"input",43),t.ALo(74,"currency"),t.qZA()()()()()()),2&n&&(t.xp6(10),t.Q6J("items",e.supplierOptions)("clearable",!1)("ngModel",e.supplierId),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(15,v,e.page,e.pageSize,e.collection,e.search)),t.xp6(27),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn),t.xp6(10),t.Oqu(t.lcZ(72,10,"INR")),t.xp6(2),t.Q6J("value",t.xi3(74,12,e.totalAmount,"INR")))},dependencies:[_.P,h.sg,b._L,d.Fj,d.JJ,d.On,f.w9,m.j,h.JJ,h.H9,T.f],encapsulation:2}),l})()}];let y=(()=>{var s;class l{}return(s=l).\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[P.m,u.Bz.forChild(C)]}),l})()}}]);