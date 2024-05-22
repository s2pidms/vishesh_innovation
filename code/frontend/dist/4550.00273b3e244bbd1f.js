"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4550],{58948:(f,h,i)=>{i.r(h),i.d(h,{TravelRequestModule:()=>y});var d=i(96814),T=i(1076),p=i(43818),v=i(25116),g=i(36144),t=i(65879),u=i(99328),c=i(72342),m=i(88059);function b(l,n){if(1&l&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&l){const r=n.$implicit;t.xp6(2),t.Oqu(null==r?null:r.travelCode),t.xp6(2),t.Oqu(null==r?null:r.raisedBy),t.xp6(2),t.Oqu(null==r?null:r.travelStartDate),t.xp6(2),t.Oqu(null==r?null:r.travelEndDate),t.xp6(2),t.Oqu(null==r?null:r.totalDays),t.xp6(2),t.Oqu(null==r?null:r.purposeOfTravel),t.xp6(2),t.Oqu(null==r?null:r.estimatedBudget),t.xp6(2),t.Oqu(null==r?null:r.costAllocation),t.xp6(2),t.Oqu(null==r?null:r.status)}}const D=function(l,n,r,e){return{page:l,pageSize:n,collection:r,search:e,type:"list",pdfDisplay:!0}};let q=(()=>{var l;class n{constructor(e,s,o,a,Z,R,S){this.exportExcelService=e,this.exportToPDFService=s,this.travelRequestService=o,this.spinner=a,this.utilityService=Z,this.storageService=R,this.activatedRoute=S,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.customerId="",this.tableData=[],this.customers=[],this.fromDate="",this.toDate="",this.rolePermissionActions=v.a1,this.accessType=this.rolePermissionActions.downloadAction,this.menuTitleData={},this.tabType=""}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getFiscalDate(),this.getAll(),this.menuTitleData=this.storageService.get("menuTitle"),this.tabType=this.storageService.get("tab"),"MASTER"==this.tabType?this.tabType="masters":"TRANSACTION"==this.tabType?this.tabType="transactions":"REPORT"==this.tabType&&(this.tabType="reports")}getFiscalDate(){let e=this.utilityService.getCurrentFiscalYearDates();this.fromDate=this.utilityService.getFormatDate(e.fromDate,"YYYY-MM-DD"),this.toDate=this.utilityService.getFormatDate(e.toDate,"YYYY-MM-DD")}trackByFn(e,s){return s?._id}reset(){this.getFiscalDate(),this.customerId="",this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,s=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,fromDate:this.fromDate,toDate:this.toDate,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.travelRequestService.getAllReports(o).subscribe(a=>{"EXCEL"==s?this.excelDownload(a.rows):"PDF"==s?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let s=(0,g.T6)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(e){this.exportExcelService.exportExcel((0,g.jg)(e))}onSort({column:e,direction:s}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}}return(l=n).\u0275fac=function(e){return new(e||l)(t.Y36(u.Ol),t.Y36(u.$L),t.Y36(c.X),t.Y36(u.V),t.Y36(u.tI),t.Y36(u.V1),t.Y36(T.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-travel-request"]],viewQuery:function(e,s){if(1&e&&t.Gf(p.j,5),2&e){let o;t.iGM(o=t.CRH())&&(s.headers=o)}},decls:31,vars:8,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","travelCode",3,"sort"],["sortable","raisedBy",3,"sort"],["sortable","travelStartDate",3,"sort"],["sortable","travelEndDate",3,"sort"],["sortable","totalDays",3,"sort"],["sortable","purposeOfTravel",3,"sort"],["sortable","estimatedBudget",3,"sort"],["sortable","costAllocation",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Travel Request Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"app-setting-header",6),t.NdJ("dataChange",function(a){return s.eventHeader(a)}),t.qZA(),t.TgZ(8,"table",7)(9,"thead",8)(10,"tr",9)(11,"th",10),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(12,"Travel Code"),t.qZA(),t.TgZ(13,"th",11),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(14,"Raised By"),t.qZA(),t.TgZ(15,"th",12),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(16,"Travel Start Date"),t.qZA(),t.TgZ(17,"th",13),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(18,"Travel End Date"),t.qZA(),t.TgZ(19,"th",14),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(20,"Total # of Days"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(22,"Purpose of Travel"),t.qZA(),t.TgZ(23,"th",16),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(24,"Estimated Budget"),t.qZA(),t.TgZ(25,"th",17),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(26,"Cost Allocation"),t.qZA(),t.TgZ(27,"th",18),t.NdJ("sort",function(a){return s.onSort(a)}),t._uU(28,"Status"),t.qZA()()(),t.TgZ(29,"tbody"),t.YNc(30,b,19,9,"tr",19),t.qZA()()()()()),2&e&&(t.xp6(7),t.Q6J("data",t.l5B(3,D,s.page,s.pageSize,s.collection,s.search)),t.xp6(23),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn))},dependencies:[d.sg,m.P,p.j],encapsulation:2}),n})();var A=i(56208);const _=[{path:"",component:q}];let y=(()=>{var l;class n{}return(l=n).\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[d.ez,T.Bz.forChild(_),A.m]}),n})()},13107:(f,h,i)=>{i.d(h,{t:()=>d});const d={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(f,h,i)=>{i.d(h,{J:()=>d});const d=({data:T,headers:p,widths:v,title:g})=>({tableData:{widths:v,headerRows:1,body:[p.map(c=>({text:c.header,style:"header"})),...T.map(c=>p.map(m=>({style:"subheader",text:c[m.key]})))]},title:g})}}]);