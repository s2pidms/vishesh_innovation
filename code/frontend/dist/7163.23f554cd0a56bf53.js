"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7163],{17163:(U,m,s)=>{s.r(m),s.d(m,{MrnReportItemWiseModule:()=>R});var h=s(96814),d=s(1076),g=s(43818),c=s(93709),t=s(65879),_=s(7791),l=s(98977),Z=s(88059),T=s(37285),p=s(60095),b=s(50363),f=s(59103);function M(a,u){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",37,38)(11,"span",39),t._uU(12),t.qZA()(),t.TgZ(13,"td",37,40)(15,"span",39),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"UOMUnitsMaster"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.qZA()()),2&a){const e=u.$implicit,r=t.MAs(10),n=t.MAs(14);t.xp6(2),t.Oqu(null==e?null:e.MRNNumber),t.xp6(2),t.Oqu(null==e?null:e.MRNDate),t.xp6(2),t.Oqu(null==e?null:e.GRNNumber),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",e.itemName),t.xp6(1),t.hij(" ",e.itemName," "),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.itemDescription),t.xp6(1),t.hij(" ",e.itemDescription," "),t.xp6(2),t.Oqu(null==e?null:e.batchNo),t.xp6(2),t.Oqu(null==e?null:e.batchDate),t.xp6(2),t.Oqu(t.lcZ(23,20,null==e?null:e.UOM)),t.xp6(3),t.Oqu(null==e?null:e.GRNQty),t.xp6(2),t.Oqu(null==e?null:e.releasedQty),t.xp6(2),t.Oqu(null==e?null:e.rejectedQty)}}const A=function(a,u,e,r){return{page:a,pageSize:u,collection:e,search:r,type:"list",pdfDisplay:!0}};let N=(()=>{class a{constructor(e,r,n,i,o,v){this.materialReleaseNote=e,this.exportExcelService=r,this.spinner=n,this.activatedRoute=i,this.utilityService=o,this.exportToPDFService=v,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.itemList=[],this.itemId="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,r){window.open(`${window.location.origin}/#/print/mrn?id=${e}&action=${r}`,"_blank")}trackByFn(e,r){return r?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.itemId="",this.getAll()}getAll(e=!1,r=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,item:this.itemId,fromDate:this.fromDate,toDate:this.toDate};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.materialReleaseNote.getAllItemWiseReports(n).subscribe(i=>{"EXCEL"==r?this.excelDownload(i.rows):"PDF"==r?this.pdfDownload(i.rows):(this.tableData=i.rows,this.itemList=i.itemList,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let r=(0,c.Ii)(e);this.exportToPDFService.generatePdf(r.tableData,r.title)}excelDownload(e){this.exportExcelService.exportExcel((0,c.KD)(e))}onSort({column:e,direction:r}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==r?1:-1,this.getAll()}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(_.AM),t.Y36(l.Ol),t.Y36(l.V),t.Y36(d.gz),t.Y36(l.tI),t.Y36(l.$L))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-mrn-report-item-wise"]],viewQuery:function(r,n){if(1&r&&t.Gf(g.j,5),2&r){let i;t.iGM(i=t.CRH())&&(n.headers=i)}},decls:64,vars:13,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","itemName","bindValue","_id",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","MRNNumber",3,"sort"],["sortable","MRNDate",3,"sort"],["sortable","GRNNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","batchNo",3,"sort"],["sortable","batchDate",3,"sort"],["sortable","UOM",3,"sort"],["sortable","GRNQty",3,"sort"],["sortable","releasedQty",3,"sort"],["sortable","rejectedQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(r,n){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"MRN Report - Item Wise"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Item Name"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(o){return n.itemId=o}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(o){return n.fromDate=o}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(o){return n.toDate=o}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return n.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return n.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(o){return n.eventHeader(o)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(39,"MRN No."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(41,"MRN Dt."),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(43,"GRN No."),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(45,"Item Code"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(47,"Item Name"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(49,"Item Description"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(51,"Batch No."),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(53,"Batch Dt."),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(55,"UoM"),t.qZA(),t.TgZ(56,"th",33),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(57,"GRN Qty."),t.qZA(),t.TgZ(58,"th",34),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(59,"Rel Qty."),t.qZA(),t.TgZ(60,"th",35),t.NdJ("sort",function(o){return n.onSort(o)}),t._uU(61,"Rej Qty."),t.qZA()()(),t.TgZ(62,"tbody"),t.YNc(63,M,30,22,"tr",36),t.qZA()()()()()),2&r&&(t.xp6(10),t.Q6J("items",n.itemList)("clearable",!1)("ngModel",n.itemId),t.xp6(8),t.Q6J("ngModel",n.fromDate),t.xp6(6),t.Q6J("ngModel",n.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,A,n.page,n.pageSize,n.collection,n.search)),t.xp6(29),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[h.sg,Z.P,T._L,p.Fj,p.JJ,p.On,b.w9,g.j,f.S],encapsulation:2})}return a})();var D=s(56208);const C=[{path:"",component:N}];let R=(()=>{class a{static#t=this.\u0275fac=function(r){return new(r||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[h.ez,d.Bz.forChild(C),D.m]})}return a})()}}]);