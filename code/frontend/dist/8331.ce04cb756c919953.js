"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8331],{71106:(S,u,l)=>{l.r(u),l.d(u,{PpicSfgStockModule:()=>k});var a=l(96814),p=l(1076),d=l(43818),f=l(68165),t=l(65879),g=l(99328),m=l(99007),h=l(88059),_=l(37285),T=l(59103);function Z(r,c){1&r&&t._UZ(0,"div",30)}function b(r,c){1&r&&t._UZ(0,"div",31)}function A(r,c){1&r&&t._UZ(0,"div",32)}function v(r,c){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",23,24)(9,"span",25),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"UOMUnitsMaster"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.ALo(26,"number"),t.qZA(),t.TgZ(27,"td")(28,"span",26),t.YNc(29,Z,1,0,"div",27),t.YNc(30,b,1,0,"div",28),t.YNc(31,A,1,0,"div",29),t.qZA()()()),2&r){const e=c.$implicit,i=t.MAs(8);t.xp6(2),t.Oqu(null==e?null:e.GINDate),t.xp6(2),t.Oqu(null==e?null:e.MRNNumber),t.xp6(2),t.Oqu(null==e?null:e.itemCode),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemName)("positionTarget",i),t.xp6(1),t.hij(" ",null==e?null:e.itemName," "),t.xp6(2),t.Oqu(null==e?null:e.stage),t.xp6(2),t.Oqu(null==e?null:e.noOfSlits),t.xp6(2),t.Oqu(null==e?null:e.WXL),t.xp6(2),t.Oqu(null==e?null:e.width),t.xp6(2),t.Oqu(null==e?null:e.length),t.xp6(2),t.Oqu(t.lcZ(23,18,null==e?null:e.UOM)),t.xp6(3),t.Oqu(t.xi3(26,20,null==e?null:e.sqmTotal,".2-2")),t.xp6(4),t.Q6J("ngIf","green"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","red"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","orange"==(null==e?null:e.status))}}const C=function(r,c,e,i){return{page:r,pageSize:c,collection:e,search:i,pdfDisplay:!0,type:"list"}};let P=(()=>{class r{constructor(e,i,o,s,n,q){this.router=e,this.exportExcelService=i,this.spinner=o,this.activatedRoute=s,this.sfgStockService=n,this.exportToPDFService=q,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[]}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getInitialData(){}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.getAll()}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.sfgStockService.getAllReports(o).subscribe(s=>{"EXCEL"==i?this.excelDownload(s.rows):"PDF"==i?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let i=(0,f.$Z)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}excelDownload(e){this.exportExcelService.exportExcel((0,f.Df)(e))}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(p.F0),t.Y36(g.Ol),t.Y36(g.V),t.Y36(p.gz),t.Y36(m.dV),t.Y36(g.$L))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-ppic-sfg-stock"]],viewQuery:function(i,o){if(1&i&&t.Gf(d.j,5),2&i){let s;t.iGM(s=t.CRH())&&(o.headers=s)}},decls:37,vars:7,consts:[[1,"reportTablePage"],[1,"col-md-12","table-body","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"table-responsive","mt-5"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GINDate\n",3,"sort"],["sortable","MRNNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","stage",3,"sort"],["sortable","noOfSlits",3,"sort"],["sortable","WXL\n            ",3,"sort"],["sortable","width",3,"sort"],["sortable","length",3,"sort"],["sortable","UOM",3,"sort"],["sortable","sqmTotal",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf"],[1,"text-start"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],[1,"d-flex","justify-content-center"],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"PPIC Semi-Finished Stock (SFG Stock)"),t.qZA()()(),t.TgZ(6,"div",5)(7,"app-setting-header",6),t.NdJ("dataChange",function(n){return o.eventHeader(n)}),t.qZA(),t.TgZ(8,"table",7)(9,"thead",8)(10,"tr",9)(11,"th",10),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(12," Inward Date "),t.qZA(),t.TgZ(13,"th",11),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(14,"MRN No."),t.qZA(),t.TgZ(15,"th",12),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(16,"Item Code"),t.qZA(),t.TgZ(17,"th",13),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(18,"Item Name"),t.qZA(),t.TgZ(19,"th",14),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(20,"Stage"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(22,"Qty."),t.qZA(),t.TgZ(23,"th",16),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(24," W X L "),t.qZA(),t.TgZ(25,"th",17),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(26,"Width"),t.qZA(),t.TgZ(27,"th",18),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(28,"Length"),t.qZA(),t.TgZ(29,"th",19),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(30,"UoM"),t.qZA(),t.TgZ(31,"th",20),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(32,"Quantity"),t.qZA(),t.TgZ(33,"th",21),t.NdJ("sort",function(n){return o.onSort(n)}),t._uU(34,"Aging"),t.qZA()()(),t.TgZ(35,"tbody"),t.YNc(36,v,32,23,"tr",22),t.qZA()()()()()),2&i&&(t.xp6(7),t.Q6J("data",t.l5B(2,C,o.page,o.pageSize,o.collection,o.search)),t.xp6(29),t.Q6J("ngForOf",o.tableData))},dependencies:[a.sg,a.O5,h.P,_._L,d.j,a.JJ,T.S],encapsulation:2})}return r})();var U=l(56208);const N=[{path:"",component:P}];let k=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[a.ez,U.m,p.Bz.forChild(N)]})}return r})()},13107:(S,u,l)=>{l.d(u,{t:()=>a});const a={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(S,u,l)=>{l.d(u,{J:()=>a});const a=({data:p,headers:d,widths:f,title:t})=>({tableData:{widths:f,headerRows:1,body:[d.map(h=>({text:h.header,style:"header"})),...p.map(h=>d.map(_=>({style:"subheader",text:h[_.key]})))]},title:t})}}]);