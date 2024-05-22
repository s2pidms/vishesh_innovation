"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7247],{57247:(x,v,s)=>{s.r(v),s.d(v,{SupplierEvaluationRModule:()=>C});var p=s(37285),u=s(96814),h=s(1076),c=s(43818),g=s(98687),t=s(65879),S=s(74659),d=s(99328);function b(a,r){if(1&a&&(t.TgZ(0,"div",26)(1,"div",27)(2,"div",28)(3,"h5",29),t._uU(4),t.TgZ(5,"b"),t._uU(6),t.qZA()()()()()),2&a){const n=r.$implicit;t.xp6(4),t.hij(" ",null==n?null:n.name," : "),t.xp6(2),t.hij(" ",null==n?null:n.weight,"")}}function Z(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.ALo(24,"number"),t.qZA()()),2&a){const n=r.$implicit;t.xp6(2),t.Oqu(t.xi3(3,9,null==n?null:n._id,"MMM-yyyy")),t.xp6(3),t.Oqu(null==n?null:n.totalSupplies),t.xp6(2),t.Oqu(null==n?null:n.qualitySupplies),t.xp6(2),t.Oqu(null==n?null:n.onTimeSupplies),t.xp6(2),t.Oqu(t.xi3(12,12,null==n?null:n.qualitySuppliesRating,"1.2-2")),t.xp6(3),t.hij(" ",t.xi3(15,15,null==n?null:n.qualitySuppliesActualRating,"1.2-2")," "),t.xp6(3),t.Oqu(t.xi3(18,18,null==n?null:n.onTimeSuppliesRating,"1.2-2")),t.xp6(3),t.hij(" ",t.xi3(21,21,null==n?null:n.onTimeSuppliesActualRating,"1.2-2")," "),t.xp6(3),t.hij(" ",t.xi3(24,24,null==n?null:n.totalRating,"1.2-2")," ")}}let T=(()=>{var a;class r{constructor(i,e,l,o,m,_){this.supplierEvaluationService=i,this.spinner=e,this.activeModal=l,this.activatedRoute=o,this.router=m,this.exportExcelService=_,this.column="_id",this.page=1,this.pageSize=12,this.direction=-1,this.tableData=[],this.data=[],this.supplierId="",this.supplierName=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(i=>{this.evaluationData=JSON.parse(i?.u),this.supplierId=this.evaluationData?._id,this.supplierName=this.evaluationData?.supplierName}),this.getAll()}trackByFn(i,e){return e?._id}navigateTo(i,e,l){this.router.navigate([i],{queryParams:{id:e,action:l}})}getAll(){this.spinner.show(),this.subscription&&this.subscription.unsubscribe(),this.subscription=this.supplierEvaluationService.getMonthlyEvaluationBySupplierId(this.supplierId).subscribe(i=>{this.tableData=i.rows.map(e=>(e._id=e._id.split("-")[1]+"-"+e._id.split("-")[0],e)),this.tableData=this.tableData.sort((e,l)=>+new Date(e._id)-+new Date(l._id)),this.data=i.supplierRuleList,this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(i){this.exportExcelService.exportExcel((0,g.rW)(i))}onSort({column:i,direction:e}){this.headers.forEach(l=>{l.sortable!==i&&(l.direction="")}),this.column=i,this.direction="asc"==e?1:-1,this.getAll()}}return(a=r).\u0275fac=function(i){return new(i||a)(t.Y36(S.Sr),t.Y36(d.V),t.Y36(p.Kz),t.Y36(h.gz),t.Y36(h.F0),t.Y36(d.Ol))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-supplier-evaluation-month"]],viewQuery:function(i,e){if(1&i&&t.Gf(c.j,5),2&i){let l;t.iGM(l=t.CRH())&&(e.headers=l)}},decls:41,vars:6,consts:[[1,"reportTablePage"],[1,"col-md-12","table-body","pb-1"],[1,"row","table-header"],[1,"col"],[1,"heading","ms-0"],[1,"row","mt-3","px-3"],[1,"col-6"],[1,"mb-4"],[1,"col-auto","mt-2"],["class","col-auto pe-0",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["src","./assets/images/excel.svg","height","24",3,"click"],[1,"table-responsive","mt-0"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","_id",3,"sort"],["sortable","totalSupplies",3,"sort"],["sortable","qualitySupplies",3,"sort"],["sortable","onTimeSupplies",3,"sort"],["sortable","qualitySuppliesRating",3,"sort"],["sortable","qualitySuppliesActualRating\n                  ",3,"sort"],["sortable","onTimeSuppliesRating",3,"sort"],["sortable","onTimeSuppliesActualRating\n                  ",3,"sort"],["sortable","totalRating\n                  ",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-auto","pe-0"],[1,"card"],[1,"card-body","pt-2","pb-0"],[1,"card-title"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Supplier Evaluation Detailed Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"h4",7),t._uU(9),t.qZA()(),t.TgZ(10,"div",8)(11,"h5"),t._uU(12,"Evaluation Criteria:"),t.qZA()(),t.YNc(13,b,7,2,"div",9),t.TgZ(14,"div",3)(15,"div",10)(16,"img",11),t.NdJ("click",function(){return e.excelDownload(e.tableData)}),t.qZA()()()(),t.TgZ(17,"div",12)(18,"table",13)(19,"thead",14)(20,"tr",15)(21,"th",16),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(22,"Month"),t.qZA(),t.TgZ(23,"th",17),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(24,"Total Supplies"),t.qZA(),t.TgZ(25,"th",18),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(26,"Quality Supplies"),t.qZA(),t.TgZ(27,"th",19),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(28,"Ontime Supplies"),t.qZA(),t.TgZ(29,"th",20),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(30,"QS Rating"),t.qZA(),t.TgZ(31,"th",21),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(32," Actual QS Rating "),t.qZA(),t.TgZ(33,"th",22),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(34,"OS Rating"),t.qZA(),t.TgZ(35,"th",23),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(36," Actual OS Rating "),t.qZA(),t.TgZ(37,"th",24),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(38," Total Rating "),t.qZA()()(),t.TgZ(39,"tbody"),t.YNc(40,Z,25,27,"tr",25),t.qZA()()()()()),2&i&&(t.xp6(9),t.hij("Supplier: ",e.supplierName,""),t.xp6(4),t.Q6J("ngForOf",e.data),t.xp6(3),t.Udp("cursor","pointer"),t.xp6(24),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[u.sg,c.j,u.JJ,u.uU],encapsulation:2}),r})();var f=s(88059);function A(a,r){if(1&a){const n=t.EpF();t.TgZ(0,"tr")(1,"td",18,19)(3,"a",20),t.NdJ("click",function(){const l=t.CHM(n).$implicit,o=t.oxw();return t.KtG(o.navigateTo("/default/purchase/reports/supplier-evaluationR/supplier_evaluation_month",l))}),t.TgZ(4,"span",21),t._uU(5),t.qZA()()(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"number"),t.qZA()()}if(2&a){const n=r.$implicit,i=t.MAs(2);t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(3),t.Q6J("ngbTooltip",n.supplierName)("positionTarget",i),t.xp6(1),t.hij(" ",null==n?null:n.supplierName," "),t.xp6(2),t.Oqu(null==n?null:n.totalSupplies),t.xp6(2),t.Oqu(null==n?null:n.qualitySupplies),t.xp6(2),t.Oqu(null==n?null:n.onTimeSupplies),t.xp6(2),t.Oqu(t.xi3(14,11,null==n?null:n.qualitySuppliesRating,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(17,14,null==n?null:n.onTimeSuppliesRating,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(20,17,null==n?null:n.totalRating,"1.2-2"))}}const E=function(a,r,n,i){return{page:a,pageSize:r,collection:n,search:i,type:"list",pdfDisplay:!0}};let y=(()=>{var a;class r{constructor(i,e,l,o,m,_,U){this.supplierEvaluationService=i,this.router=e,this.exportExcelService=l,this.spinner=o,this.modalService=m,this.activatedRoute=_,this.exportToPDFService=U,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[]}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(i,e){return e?._id}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=i.value,this.getAll()}}getAll(i=!1,e=""){this.spinner.show();let l={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.supplierEvaluationService.getMonthlySupplierEvaluation(l).subscribe(o=>{"EXCEL"==e?this.excelDownload(o.rows):"PDF"==e?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(i,e){e=JSON.stringify(e),this.router.navigate([i],{queryParams:{u:e}})}pdfDownload(i){let e=(0,g.dz)(i);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(i){this.exportExcelService.exportExcel((0,g.vG)(i))}onSort({column:i,direction:e}){this.headers.forEach(l=>{l.sortable!==i&&(l.direction="")}),this.column=i,this.direction="asc"==e?1:-1,this.getAll()}openEvaluationMonthModal(i){{const e=this.modalService.open(T,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.supplierId=i?._id,e.componentInstance.supplierName=i?.supplierName}}}return(a=r).\u0275fac=function(i){return new(i||a)(t.Y36(S.Sr),t.Y36(h.F0),t.Y36(d.Ol),t.Y36(d.V),t.Y36(p.FF),t.Y36(h.gz),t.Y36(d.$L))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-supplier-evaluation-r"]],viewQuery:function(i,e){if(1&i&&t.Gf(c.j,5),2&i){let l;t.iGM(l=t.CRH())&&(e.headers=l)}},decls:27,vars:8,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","totalSupplies\n",3,"sort"],["sortable","qualitySupplies",3,"sort"],["sortable","onTimeSupplies",3,"sort"],["sortable","qualitySuppliesRating",3,"sort"],["sortable","onTimeSuppliesRating",3,"sort"],["sortable","totalRating",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["supplierName",""],[1,"pointer","link-dark",3,"click"],[1,"pointer",3,"ngbTooltip","positionTarget"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Supplier Evaluation Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"app-setting-header",6),t.NdJ("dataChange",function(o){return e.eventHeader(o)}),t.qZA(),t.TgZ(8,"table",7)(9,"thead",8)(10,"tr",9)(11,"th",10),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(12,"Supplier Name"),t.qZA(),t.TgZ(13,"th",11),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(14," Total Supplies "),t.qZA(),t.TgZ(15,"th",12),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(16,"Quality Supplies"),t.qZA(),t.TgZ(17,"th",13),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(18,"Ontime Supplies"),t.qZA(),t.TgZ(19,"th",14),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(20,"QS Rating %"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(22,"OS Rating %"),t.qZA(),t.TgZ(23,"th",16),t.NdJ("sort",function(o){return e.onSort(o)}),t._uU(24,"Total Rating %"),t.qZA()()(),t.TgZ(25,"tbody"),t.YNc(26,A,21,20,"tr",17),t.qZA()()()()()),2&i&&(t.xp6(7),t.Q6J("data",t.l5B(3,E,e.page,e.pageSize,e.collection,e.search)),t.xp6(19),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[u.sg,f.P,p._L,c.j,u.JJ],encapsulation:2}),r})();var q=s(56208);const R=[{path:"",component:y},{path:"supplier_evaluation_month",component:T}];let C=(()=>{var a;class r{}return(a=r).\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[p.Kz],imports:[u.ez,h.Bz.forChild(R),q.m,p.IJ]}),r})()}}]);