"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7114],{47114:(y,c,s)=>{s.r(c),s.d(c,{RawMaterialInspectionModule:()=>Z});var h=s(96814),u=s(1076),d=s(43818),m=s(25116),g=s(93709),t=s(65879),b=s(7791),p=s(2742),f=s(88059),v=s(37285),T=s(53421);function M(r,l){if(1&r){const o=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",17,18)(7,"span",19),t._uU(8),t.qZA()(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",20)(15,"img",21),t.NdJ("click",function(){const a=t.CHM(o).$implicit,i=t.oxw();return t.KtG(i.navigateToPrint(a._id,"print"))}),t.qZA()()()()}if(2&r){const o=l.$implicit,e=t.MAs(6),n=t.oxw();t.xp6(2),t.Oqu(null==o?null:o.MRNNumber),t.xp6(2),t.hij(" ",null==o?null:o.MRNDate," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",o.supplierName),t.xp6(1),t.hij(" ",o.supplierName," "),t.xp6(2),t.Oqu(null==o?null:o.GRNNumber),t.xp6(2),t.Oqu(null==o?null:o.MRNStatus),t.xp6(2),t.Q6J("accessType",n.rolePermissionActions.viewAction)}}const R=function(r,l,o,e){return{page:r,pageSize:l,collection:o,search:e,type:"list",pdfDisplay:!0}};let w=(()=>{var r;class l{constructor(e,n,a,i,C){this.mrnService=e,this.exportExcelService=n,this.spinner=a,this.activatedRoute=i,this.exportToPDFService=C,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=m.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(e,n){return n?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}reset(){this.tableData=[],this.getAll()}getAll(e=!1,n=""){this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.mrnService.getAllRawMaterialInspectionReports(a).subscribe(i=>{"EXCEL"==n?this.excelDownload(i.rows):"PDF"==n?this.pdfDownload(i.rows):(this.tableData=i.rows,this.collection=i.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let n=(0,g.Bg)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}excelDownload(e){this.exportExcelService.exportExcel((0,g.y3)(e))}onSort({column:e,direction:n}){this.headers.forEach(a=>{a.sortable!==e&&(a.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}navigateToPrint(e,n){window.open(`${window.location.origin}/#/print/rmi_print?id=${e}&action=${n}`,"_blank")}}return(r=l).\u0275fac=function(e){return new(e||r)(t.Y36(b.AM),t.Y36(p.Ol),t.Y36(p.V),t.Y36(u.gz),t.Y36(p.$L))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-raw-material-inspection"]],viewQuery:function(e,n){if(1&e&&t.Gf(d.j,5),2&e){let a;t.iGM(a=t.CRH())&&(n.headers=a)}},decls:26,vars:8,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","MRNNumber",3,"sort"],["sortable","MRNDate",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","GRNNumber",3,"sort"],["sortable","MRNStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["appAccessControl","",3,"accessType"],["src","./assets/images/file_pdf.png","width","20rem","alt","",1,"pointer",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Raw Material Inspection Report"),t.qZA()()(),t._UZ(6,"hr",5),t.TgZ(7,"div",6)(8,"app-setting-header",7),t.NdJ("dataChange",function(i){return n.eventHeader(i)}),t.qZA(),t.TgZ(9,"table",8)(10,"thead",9)(11,"tr",10)(12,"th",11),t.NdJ("sort",function(i){return n.onSort(i)}),t._uU(13,"MRN No."),t.qZA(),t.TgZ(14,"th",12),t.NdJ("sort",function(i){return n.onSort(i)}),t._uU(15,"MRN Date"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(i){return n.onSort(i)}),t._uU(17,"Supplier Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(i){return n.onSort(i)}),t._uU(19,"GRN No."),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(i){return n.onSort(i)}),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th",15),t.NdJ("sort",function(i){return n.onSort(i)}),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,M,16,10,"tr",16),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("data",t.l5B(3,R,n.page,n.pageSize,n.collection,n.search)),t.xp6(17),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[h.sg,f.P,v._L,d.j,T.J],encapsulation:2}),l})();var A=s(56208);const N=[{path:"",component:w}];let Z=(()=>{var r;class l{}return(r=l).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[h.ez,u.Bz.forChild(N),A.m]}),l})()}}]);