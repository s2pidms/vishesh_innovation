"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5607],{25607:(f,y,p)=>{p.r(y),p.d(y,{FGInventoryValueModule:()=>O});var s=p(96814),g=p(1076),A=p(43818),c=p(13107),v=p(28402);let m=["*","*","*","*","*","*","*","*","*","*","*","*"],I="FG Inventory Value",P=[{header:"SKU No.",key:"SKUNo",...c.t},{header:"SKU Name",key:"SKUName",...c.t},{header:"SKU Description",key:"SKUDescription",...c.t},{header:"UoM",key:"UOM",...c.t},{header:"FG Qty",key:"FGINQuantity",...c.t},{header:"Batch No.",key:"batchNo",...c.t},{header:"Batch Date",key:"manufacturingDate",...c.t},{header:"Aging",key:"GIStatus",...c.t},{header:"Ccy",key:"customerCurrency",...c.t},{header:"Rate/Unit",key:"standardSellingRate",...c.t},{header:"Line value",key:"lineValue",...c.t},{header:"Location",key:"location",...c.t}];var e=p(65879),r=p(73374),t=p(99328),d=p(88059),F=p(37285),G=p(60095),D=p(50363),N=p(14906),S=p(83344);function _(u,R){1&u&&e._UZ(0,"div",48)}function T(u,R){1&u&&e._UZ(0,"div",49)}function Z(u,R){1&u&&e._UZ(0,"div",50)}function b(u,R){if(1&u&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",41,42)(5,"span",43),e._uU(6),e.qZA()(),e.TgZ(7,"td",41,44)(9,"span",43),e._uU(10),e.qZA()(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td")(20,"span",36),e.YNc(21,_,1,0,"div",45),e.YNc(22,T,1,0,"div",46),e.YNc(23,Z,1,0,"div",47),e.qZA()(),e.TgZ(24,"td"),e._uU(25),e.qZA(),e.TgZ(26,"td"),e._uU(27),e.ALo(28,"number"),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.ALo(31,"number"),e.qZA(),e.TgZ(32,"td"),e._uU(33),e.qZA()()),2&u){const o=R.$implicit,h=e.MAs(4),a=e.MAs(8);e.xp6(2),e.Oqu(null==o?null:o.SKUNo),e.xp6(1),e.Udp("width",h.clientWidth),e.xp6(2),e.Q6J("positionTarget",h)("ngbTooltip",o.SKUName),e.xp6(1),e.hij(" ",o.SKUName," "),e.xp6(1),e.Udp("width",a.clientWidth),e.xp6(2),e.Q6J("positionTarget",a)("ngbTooltip",o.SKUDescription),e.xp6(1),e.hij(" ",o.SKUDescription," "),e.xp6(2),e.Oqu(null==o?null:o.UOM),e.xp6(2),e.Oqu(null==o?null:o.FGINQuantity),e.xp6(2),e.Oqu(null==o?null:o.batchNo),e.xp6(2),e.Oqu(null==o?null:o.manufacturingDate),e.xp6(3),e.Q6J("ngIf","green"==(null==o?null:o.aging)),e.xp6(1),e.Q6J("ngIf","red"==(null==o?null:o.aging)),e.xp6(1),e.Q6J("ngIf","orange"==(null==o?null:o.aging)),e.xp6(2),e.Oqu(null==o?null:o.customerCurrency),e.xp6(2),e.Oqu(e.xi3(28,22,null==o?null:o.standardSellingRate,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(31,25,null==o?null:o.lineValue,"1.2-2")),e.xp6(3),e.Oqu(null==o?null:o.location)}}const C=function(u,R,o,h){return{page:u,pageSize:R,collection:o,search:h,type:"list",pdfDisplay:!0}};let M=(()=>{class u{constructor(o,h,a,l,i,V){this.finishedGoodsInwardEntryService=o,this.exportExcelService=h,this.spinner=a,this.activatedRoute=l,this.utilityService=i,this.exportToPDFService=V,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.location="",this.locations=[],this.totalLineValue=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(o,h){return h?._id}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.locations=[],this.getAll()}getAll(o=!1,h=""){this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o,fromDate:this.fromDate,toDate:this.toDate,location:this.locations};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.finishedGoodsInwardEntryService.getAllFGINValueFinanceReports(a).subscribe(l=>{"EXCEL"==h?this.excelDownload(l.rows):"PDF"==h?this.pdfDownload(l.rows):(this.tableData=l.rows,this.location=l.locations,this.totalLineValue=+l?.totalAmounts?.totalLineValue,this.collection=l.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(o){this.exportExcelService.exportExcel((u=>({title:I,csvData:u,headers:P}))(o))}pdfDownload(o){let h=(u=>(0,v.J)({data:u,headers:P,widths:m,title:I}))(o);this.exportToPDFService.generatePdf(h.tableData,h.title)}onSort({column:o,direction:h}){this.headers.forEach(a=>{a.sortable!==o&&(a.direction="")}),this.column=o,this.direction="asc"==h?1:-1,this.getAll()}static#t=this.\u0275fac=function(h){return new(h||u)(e.Y36(r.IX),e.Y36(t.Ol),e.Y36(t.V),e.Y36(g.gz),e.Y36(t.tI),e.Y36(t.$L))};static#e=this.\u0275cmp=e.Xpm({type:u,selectors:[["app-fg-inventory-value"]],viewQuery:function(h,a){if(1&h&&e.Gf(A.j,5),2&h){let l;e.iGM(l=e.CRH())&&(a.headers=l)}},decls:69,vars:25,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","change","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],["type","date",1,"form-control",3,"ngModel","ngModelChange","change"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","FGINQuantity",3,"sort"],["sortable","batchNo",3,"sort"],["sortable","manufacturingDate",3,"sort"],["sortable","GIStatus",3,"sort"],["sortable","customerCurrency",3,"sort"],["sortable","standardSellingRate",3,"sort"],["sortable","lineValue",3,"sort"],["sortable","location",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"ms-1","me-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"]],template:function(h,a){1&h&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"FG Inventory Value Report"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"label",7),e._uU(9,"Location"),e.TgZ(10,"span",8),e._uU(11,"*"),e.qZA()(),e.TgZ(12,"ng-select",9),e.NdJ("change",function(){return a.getAll()})("ngModelChange",function(i){return a.locations=i}),e.qZA(),e.TgZ(13,"span",10),e._UZ(14,"img",11),e.qZA()(),e.TgZ(15,"div",12)(16,"label",7),e._uU(17," As on date closing stock"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"input",13),e.NdJ("ngModelChange",function(i){return a.toDate=i})("change",function(){return a.getAll()}),e.qZA()()(),e._UZ(21,"hr",14),e.TgZ(22,"div",15)(23,"app-setting-header",16),e.NdJ("dataChange",function(i){return a.eventHeader(i)}),e.qZA(),e.TgZ(24,"table",17)(25,"thead",18)(26,"tr",19)(27,"th",20),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(28,"SKU No."),e.qZA(),e.TgZ(29,"th",21),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(30),e.ALo(31,"labelTranslate"),e.qZA(),e.TgZ(32,"th",22),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(33),e.ALo(34,"labelTranslate"),e.qZA(),e.TgZ(35,"th",23),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(36,"UoM"),e.qZA(),e.TgZ(37,"th",24),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(38,"FG Qty"),e.qZA(),e.TgZ(39,"th",25),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(40,"Batch No."),e.qZA(),e.TgZ(41,"th",26),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(42,"Batch Date"),e.qZA(),e.TgZ(43,"th",27),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(44,"Aging"),e.qZA(),e.TgZ(45,"th",28),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(46,"Ccy"),e.qZA(),e.TgZ(47,"th",29),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(48,"Rate/Unit"),e.qZA(),e.TgZ(49,"th",30),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(50,"Line value"),e.qZA(),e.TgZ(51,"th",31),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(52,"Location"),e.qZA()()(),e.TgZ(53,"tbody"),e.YNc(54,b,34,28,"tr",32),e.qZA()()(),e.TgZ(55,"div",33),e._UZ(56,"hr",14),e.TgZ(57,"div",34)(58,"div",35)(59,"div",36)(60,"div",37),e._uU(61," FG Inventory Value "),e.TgZ(62,"span",38),e._uU(63,"\u25b6"),e.qZA(),e.TgZ(64,"button",39),e._uU(65),e.ALo(66,"companyCurrency"),e.qZA()(),e._UZ(67,"input",40),e.ALo(68,"number"),e.qZA()()()()()()),2&h&&(e.xp6(12),e.Q6J("items",a.location)("clearable",!1)("ngModel",a.locations),e.xp6(8),e.Q6J("ngModel",a.toDate),e.xp6(3),e.Q6J("data",e.l5B(20,C,a.page,a.pageSize,a.collection,a.search)),e.xp6(7),e.hij(" ",e.lcZ(31,11,"SKU Name")," "),e.xp6(3),e.hij(" ",e.lcZ(34,13,"SKU Description")," "),e.xp6(21),e.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn),e.xp6(11),e.hij(" ",e.lcZ(66,15,"INR")," "),e.xp6(2),e.Q6J("value",e.xi3(68,17,a.totalLineValue,"1.2-2")))},dependencies:[s.sg,s.O5,d.P,F._L,G.Fj,G.JJ,G.On,D.w9,A.j,s.JJ,N.c,S.f],styles:[".separate-row[_ngcontent-%COMP%]{position:relative}.separate-row[_ngcontent-%COMP%]   .set-position[_ngcontent-%COMP%]{position:absolute;top:2rem;right:-.5rem}.separate-image[_ngcontent-%COMP%]{position:relative}.separate-image[_ngcontent-%COMP%]   .image-position[_ngcontent-%COMP%]{position:absolute;top:0rem;left:-.5rem}"]})}return u})();var B=p(56208);const L=[{path:"",component:M}];let O=(()=>{class u{static#t=this.\u0275fac=function(h){return new(h||u)};static#e=this.\u0275mod=e.oAB({type:u});static#r=this.\u0275inj=e.cJS({imports:[s.ez,B.m,g.Bz.forChild(L)]})}return u})()},13107:(f,y,p)=>{p.d(y,{t:()=>s});const s={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(f,y,p)=>{p.d(y,{J:()=>s});const s=({data:g,headers:A,widths:c,title:v})=>({tableData:{widths:c,headerRows:1,body:[A.map(P=>({text:P.header,style:"header"})),...g.map(P=>A.map(U=>({style:"subheader",text:P[U.key]})))]},title:v})},73374:(f,y,p)=>{p.d(y,{IX:()=>c,SZ:()=>U,Aj:()=>v,vM:()=>m,zP:()=>I,Ee:()=>P});var s=p(37398),g=p(65879),A=p(99328);let c=(()=>{class n{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:t=>`/stores/FGIN/update/${t}`,getByIdPath:t=>`/stores/FGIN/getById/${t}`,deletePath:t=>`/stores/FGIN/delete/${t}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,s.U)(t=>t))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,s.U)(t=>t))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,s.U)(t=>t))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,s.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||n)(g.LFG(A.sM))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),v=(()=>{class n{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:t=>`/stores/gin/update/${t}`,getByIdPath:t=>`/stores/gin/getById/${t}`,deletePath:t=>`/stores/gin/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,s.U)(t=>t))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,s.U)(t=>t))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||n)(g.LFG(A.sM))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),m=(()=>{class n{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsIssue/update/${t}`,getByIdPath:t=>`/stores/goodsIssue/getById/${t}`,getGoodRequisitionByIdPath:t=>`/stores/goodsIssue/getGoodRequisitionById/${t}`,deletePath:t=>`/stores/goodsIssue/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,s.U)(d=>d))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,s.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||n)(g.LFG(A.sM))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),I=(()=>{class n{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:t=>`/stores/grn/update/${t}`,updateOnCancelPath:t=>`/stores/grn/updateOnCancelGRN/${t}`,getByIdPath:t=>`/stores/grn/getById/${t}`,getPOBySupplierIdPath:t=>`/stores/grn/getPOBySupplierId/${t}`,getGRNDetailsByPOIdPath:t=>`/stores/grn/getGRNDetailsByPOId/${t}`,getGRNDetailsByIdPath:t=>`/stores/grn/getGRNDetailsById/${t}`,deletePath:t=>`/stores/grn/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,s.U)(t=>t))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,s.U)(t=>t))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}updateOnCancel(r,t){return this.http.put(this.routes.updateOnCancelPath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,s.U)(t=>t))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,s.U)(t=>t))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,s.U)(t=>t))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||n)(g.LFG(A.sM))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),P=(()=>{class n{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getStockPreparationShopReportsPath:"/stores/inventory/getStockPreparationShopReports",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",updateSPSInventoryPath:"/stores/inventory/updateSPSInventory",getAllStockPreparationShopPath:"/stores/inventory/getAllStockPreparationShop",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:t=>`/stores/inventory/getById/${t}`,deletePath:t=>`/stores/inventory/delete/${t}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,s.U)(t=>t))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllStockPreparationShop(r){return this.http.get(this.routes.getAllStockPreparationShopPath,r).pipe((0,s.U)(t=>t))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,s.U)(t=>t))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}getStockPreparationShopReports(r){return this.http.get(this.routes.getStockPreparationShopReportsPath,r).pipe((0,s.U)(t=>t))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,s.U)(t=>t))}updateSPSInventory(r){return this.http.put(this.routes.updateSPSInventoryPath,r).pipe((0,s.U)(t=>t))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||n)(g.LFG(A.sM))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),U=(()=>{class n{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsTransferResponse/update/${t}`,getByIdPath:t=>`/stores/goodsTransferResponse/getById/${t}`,getItemByGTRequestIdPath:t=>`/stores/goodsTransferResponse/getItemByGTRequestId/${t}`,deletePath:t=>`/stores/goodsTransferResponse/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,s.U)(d=>d))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,s.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||n)(g.LFG(A.sM))};static#e=this.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);