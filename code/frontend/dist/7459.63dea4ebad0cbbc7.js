"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7459],{47459:(G,u,s)=>{s.r(u),s.d(u,{GoodsInwardEntryModule:()=>E});var c=s(96814),h=s(1076),g=s(43818),m=s(31655),_=s(25116),t=s(65879),d=s(2742),Z=s(73374),y=s(88059),T=s(37285),p=s(60095),v=s(50363),b=s(53421),f=s(59103);function A(a,l){if(1&a){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",36,37)(11,"span",38),t._uU(12),t.qZA()(),t.TgZ(13,"td",36,39)(15,"span",38),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"UOMUnitsMaster"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA(),t.TgZ(28,"td")(29,"div",40)(30,"img",41),t.NdJ("click",function(){const i=t.CHM(n).$implicit,o=t.oxw();return t.KtG(o.navigateTo(null==i?null:i._id,"print"))}),t.qZA()()()()}if(2&a){const n=l.$implicit,r=t.MAs(10),e=t.MAs(14),i=t.oxw();t.xp6(2),t.Oqu(null==n?null:n.GINDate),t.xp6(2),t.Oqu(null==n?null:n.MRNNumber),t.xp6(2),t.Oqu(null==n?null:n.MRNDate),t.xp6(2),t.Oqu(null==n?null:n.itemCode),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",n.itemName),t.xp6(1),t.hij(" ",null==n?null:n.itemName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",n.itemDescription),t.xp6(1),t.hij(" ",null==n?null:n.itemDescription," "),t.xp6(2),t.Oqu(null==n?null:n.batchDate),t.xp6(2),t.Oqu(null==n?null:n.supplierInvoiceDate),t.xp6(2),t.Oqu(t.lcZ(23,20,null==n?null:n.UOM)),t.xp6(3),t.Oqu(null==n?null:n.GINQty),t.xp6(2),t.Oqu(null==n?null:n.deliveryLocation),t.xp6(2),t.Q6J("accessType",i.rolePermissionActions.viewAction)}}const D=function(a,l,n,r){return{page:a,pageSize:l,collection:n,search:r,type:"list",pdfDisplay:!0}};let C=(()=>{var a;class l{constructor(r,e,i,o,N,U){this.spinner=r,this.goodInwardEntryService=e,this.exportExcelService=i,this.utilityService=o,this.activatedRoute=N,this.exportToPDFService=U,this.rolePermissionActions=_.a1,this.accessType=this.rolePermissionActions.downloadAction,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.submitted=!1,this.locationOptions=[],this.deliveryLocation="",this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(r,e){window.open(`${window.location.origin}/#/print/gin?id=${r}&action=${e}`,"_blank")}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.deliveryLocation="",this.getAll()}trackByFn(r,e){return e?._id}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}onSort({column:r,direction:e}){this.headers.forEach(i=>{i.sortable!==r&&(i.direction="")}),this.column=r,this.direction="asc"==e?1:-1,this.getAll()}getAll(r=!1,e=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r,fromDate:this.fromDate,toDate:this.toDate,deliveryLocation:this.deliveryLocation};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.goodInwardEntryService.getAllReports(i).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.originTableData=o.rows,this.locationOptions=o.location,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(r){let e=(0,m.Iu)(r);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(r){this.exportExcelService.exportExcel((0,m.V_)(r))}}return(a=l).\u0275fac=function(r){return new(r||a)(t.Y36(d.V),t.Y36(Z.Aj),t.Y36(d.Ol),t.Y36(d.tI),t.Y36(h.gz),t.Y36(d.$L))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-goods-inward-entry"]],viewQuery:function(r,e){if(1&r&&t.Gf(g.j,5),2&r){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:64,vars:13,consts:[[1,"reportTablePage"],[1,"col-md-12","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"row","line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GINDate",3,"sort"],["sortable","MRNNumber",3,"sort"],["sortable","MRNDate",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","batchDate",3,"sort"],["sortable","supplierInvoiceDate",3,"sort"],["sortable","UOM",3,"sort"],["sortable","GINQty",3,"sort"],["sortable","deliveryLocation",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],["appAccessControl","",3,"accessType"],["src","./assets/new_icons/pdf_icon.svg","width","15rem","alt","",1,"pointer",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"GIN Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Location wise"),t.qZA(),t.TgZ(10,"ng-select",8),t.NdJ("ngModelChange",function(o){return e.deliveryLocation=o}),t.qZA(),t.TgZ(11,"span",9),t._UZ(12,"img",10),t.qZA()(),t.TgZ(13,"div",11)(14,"label",7),t._uU(15," From Date "),t.TgZ(16,"span",12),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",13),t.NdJ("ngModelChange",function(o){return e.fromDate=o}),t.qZA()(),t.TgZ(19,"div",11)(20,"label",7),t._uU(21," To Date "),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"input",13),t.NdJ("ngModelChange",function(o){return e.toDate=o}),t.qZA()(),t.TgZ(25,"div",14)(26,"span",15),t._UZ(27,"img",10),t.qZA(),t.TgZ(28,"button",16),t.NdJ("click",function(){return e.getAll()}),t._uU(29,"Apply Filter"),t.qZA(),t.TgZ(30,"button",17),t.NdJ("click",function(){return e.reset()}),t._uU(31,"Reset Filter"),t.qZA()()(),t._UZ(32,"hr",18),t.TgZ(33,"div",19)(34,"app-setting-header",20),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(35,"table",21)(36,"thead",22)(37,"tr",23)(38,"th",24),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(39,"GIN Dt."),t.qZA(),t.TgZ(40,"th",25),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(41,"MRN No."),t.qZA(),t.TgZ(42,"th",26),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(43,"MRN Dt."),t.qZA(),t.TgZ(44,"th",27),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(45,"Item Code"),t.qZA(),t.TgZ(46,"th",28),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(47,"Item Name"),t.qZA(),t.TgZ(48,"th",29),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(49,"Item Description"),t.qZA(),t.TgZ(50,"th",30),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(51,"Batch #/Dt."),t.qZA(),t.TgZ(52,"th",31),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(53,"Invoice Dt."),t.qZA(),t.TgZ(54,"th",32),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(55,"UoM"),t.qZA(),t.TgZ(56,"th",33),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(57,"GIN Qty"),t.qZA(),t.TgZ(58,"th",34),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(59,"Location"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Report"),t.qZA()()(),t.TgZ(62,"tbody"),t.YNc(63,A,31,22,"tr",35),t.qZA()()()()()),2&r&&(t.xp6(10),t.Q6J("items",e.locationOptions)("clearable",!1)("ngModel",e.deliveryLocation),t.xp6(8),t.Q6J("ngModel",e.fromDate),t.xp6(6),t.Q6J("ngModel",e.toDate),t.xp6(10),t.Q6J("data",t.l5B(8,D,e.page,e.pageSize,e.collection,e.search)),t.xp6(29),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[y.P,c.sg,T._L,p.Fj,p.JJ,p.On,v.w9,g.j,b.J,f.S],encapsulation:2}),l})();var w=s(56208);const I=[{path:"",component:C}];let E=(()=>{var a;class l{}return(a=l).\u0275fac=function(r){return new(r||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[w.m,c.ez,h.Bz.forChild(I)]}),l})()}}]);