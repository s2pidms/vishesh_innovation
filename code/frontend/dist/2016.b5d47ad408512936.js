"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2016],{37068:(T,c,a)=>{a.r(c),a.d(c,{PpicRmStockModule:()=>y});var l=a(96814),m=a(1076),u=a(43818),g=a(68165),t=a(65879),d=a(99328),_=a(38011),h=a(88059),f=a(37285),b=a(59103);function Z(s,p){1&s&&t._UZ(0,"div",28)}function v(s,p){1&s&&t._UZ(0,"div",29)}function S(s,p){1&s&&t._UZ(0,"div",30)}function A(s,p){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",20,21)(9,"span",22),t._uU(10),t.qZA()(),t.TgZ(11,"td",20,23)(13,"span",22),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"UOMUnitsMaster"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"td")(24,"span",24),t.YNc(25,Z,1,0,"div",25),t.YNc(26,v,1,0,"div",26),t.YNc(27,S,1,0,"div",27),t.qZA()()()),2&s){const e=p.$implicit,n=t.MAs(8),o=t.MAs(12);t.xp6(2),t.Oqu(null==e?null:e.GINDate),t.xp6(2),t.Oqu(null==e?null:e.MRNNumber),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemName)("positionTarget",n),t.xp6(1),t.hij(" ",null==e?null:e.itemName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemDescription)("positionTarget",o),t.xp6(1),t.hij(" ",null==e?null:e.itemDescription," "),t.xp6(2),t.Oqu(null==e?null:e.unitConversion),t.xp6(2),t.Oqu(t.lcZ(19,19,null==e?null:e.UOM)),t.xp6(3),t.Oqu(t.xi3(22,21,null==e?null:e.PPICQty,".2-2")),t.xp6(4),t.Q6J("ngIf","green"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","red"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","orange"==(null==e?null:e.status))}}const C=function(s,p,e,n){return{page:s,pageSize:p,collection:e,search:n,pdfDisplay:!0,type:"list"}};let P=(()=>{class s{constructor(e,n,o,r,i){this.exportExcelService=e,this.spinner=n,this.activatedRoute=o,this.wipInventoryService=r,this.exportToPDFService=i,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[]}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getInitialData(){}trackByFn(e,n){return n?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.getAll()}getAll(e=!1,n=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.wipInventoryService.getAllReports(o).subscribe(r=>{"EXCEL"==n?this.excelDownload(r.rows):"PDF"==n?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let n=(0,g.Z5)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}excelDownload(e){this.exportExcelService.exportExcel((0,g.VL)(e))}onSort({column:e,direction:n}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(d.Ol),t.Y36(d.V),t.Y36(m.gz),t.Y36(_.w2),t.Y36(d.$L))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-ppic-rm-stock"]],viewQuery:function(n,o){if(1&n&&t.Gf(u.j,5),2&n){let r;t.iGM(r=t.CRH())&&(o.headers=r)}},decls:31,vars:7,consts:[[1,"reportTablePage"],[1,"col-md-12","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"table-responsive","mt-5"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GINDate",3,"sort"],["sortable","MRNNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","unitConversion",3,"sort"],["sortable","UOM",3,"sort"],["sortable","PPICQty",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"PPIC RM Stock Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"app-setting-header",6),t.NdJ("dataChange",function(i){return o.eventHeader(i)}),t.qZA(),t.TgZ(8,"table",7)(9,"thead",8)(10,"tr",9)(11,"th",10),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(12,"Inward Date"),t.qZA(),t.TgZ(13,"th",11),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(14,"MRN No."),t.qZA(),t.TgZ(15,"th",12),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(16,"Item Code"),t.qZA(),t.TgZ(17,"th",13),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(18,"Item Name"),t.qZA(),t.TgZ(19,"th",14),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(20,"Item Description"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(22,"Unit Conversion"),t.qZA(),t.TgZ(23,"th",16),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(24,"UoM"),t.qZA(),t.TgZ(25,"th",17),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(26,"Quantity"),t.qZA(),t.TgZ(27,"th",18),t.NdJ("sort",function(i){return o.onSort(i)}),t._uU(28,"Aging"),t.qZA()()(),t.TgZ(29,"tbody"),t.YNc(30,A,28,24,"tr",19),t.qZA()()()()()),2&n&&(t.xp6(7),t.Q6J("data",t.l5B(2,C,o.page,o.pageSize,o.collection,o.search)),t.xp6(23),t.Q6J("ngForOf",o.tableData))},dependencies:[l.sg,l.O5,h.P,f._L,u.j,l.JJ,b.S],encapsulation:2})}return s})();var R=a(56208);const U=[{path:"",component:P}];let y=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=t.oAB({type:s});static#o=this.\u0275inj=t.cJS({imports:[l.ez,m.Bz.forChild(U),R.m]})}return s})()},13107:(T,c,a)=>{a.d(c,{t:()=>l});const l={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,c,a)=>{a.d(c,{J:()=>l});const l=({data:m,headers:u,widths:g,title:t})=>({tableData:{widths:g,headerRows:1,body:[u.map(h=>({text:h.header,style:"header"})),...m.map(h=>u.map(f=>({style:"subheader",text:h[f.key]})))]},title:t})}}]);