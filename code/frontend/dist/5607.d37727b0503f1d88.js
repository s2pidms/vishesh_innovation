"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5607],{25607:(F,v,h)=>{h.r(v),h.d(v,{FGInventoryValueModule:()=>O});var o=h(96814),g=h(1076),A=h(43818),c=h(13107),m=h(28402);let G=["*","*","*","*","*","*","*","*","*","*","*","*"],R="FG Inventory Value",I=[{header:"SKU No.",key:"SKUNo",...c.t},{header:"SKU Name",key:"SKUName",...c.t},{header:"SKU Description",key:"SKUDescription",...c.t},{header:"UoM",key:"UOM",...c.t},{header:"FG Qty",key:"FGINQuantity",...c.t},{header:"Batch No.",key:"batchNo",...c.t},{header:"Batch Date",key:"manufacturingDate",...c.t},{header:"Aging",key:"GIStatus",...c.t},{header:"Ccy",key:"customerCurrency",...c.t},{header:"Rate/Unit",key:"standardSellingRate",...c.t},{header:"Line value",key:"lineValue",...c.t},{header:"Location",key:"location",...c.t}];var t=h(65879),y=h(73374),r=h(99328),e=h(88059),d=h(37285),f=h(60095),S=h(50363),_=h(14906),N=h(83344);function D(p,P){1&p&&t._UZ(0,"div",48)}function T(p,P){1&p&&t._UZ(0,"div",49)}function Z(p,P){1&p&&t._UZ(0,"div",50)}function C(p,P){if(1&p&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",41,42)(5,"span",43),t._uU(6),t.qZA()(),t.TgZ(7,"td",41,44)(9,"span",43),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"span",36),t.YNc(21,D,1,0,"div",45),t.YNc(22,T,1,0,"div",46),t.YNc(23,Z,1,0,"div",47),t.qZA()(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"number"),t.qZA(),t.TgZ(29,"td"),t._uU(30),t.ALo(31,"number"),t.qZA(),t.TgZ(32,"td"),t._uU(33),t.qZA()()),2&p){const l=P.$implicit,i=t.MAs(4),s=t.MAs(8);t.xp6(2),t.Oqu(null==l?null:l.SKUNo),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",l.SKUName),t.xp6(1),t.hij(" ",l.SKUName," "),t.xp6(1),t.Udp("width",s.clientWidth),t.xp6(2),t.Q6J("positionTarget",s)("ngbTooltip",l.SKUDescription),t.xp6(1),t.hij(" ",l.SKUDescription," "),t.xp6(2),t.Oqu(null==l?null:l.UOM),t.xp6(2),t.Oqu(null==l?null:l.FGINQuantity),t.xp6(2),t.Oqu(null==l?null:l.batchNo),t.xp6(2),t.Oqu(null==l?null:l.manufacturingDate),t.xp6(3),t.Q6J("ngIf","green"==(null==l?null:l.aging)),t.xp6(1),t.Q6J("ngIf","red"==(null==l?null:l.aging)),t.xp6(1),t.Q6J("ngIf","orange"==(null==l?null:l.aging)),t.xp6(2),t.Oqu(null==l?null:l.customerCurrency),t.xp6(2),t.Oqu(t.xi3(28,22,null==l?null:l.standardSellingRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(31,25,null==l?null:l.lineValue,"1.2-2")),t.xp6(3),t.Oqu(null==l?null:l.location)}}const b=function(p,P,l,i){return{page:p,pageSize:P,collection:l,search:i,type:"list",pdfDisplay:!0}};let M=(()=>{var p;class P{constructor(i,s,u,n,V,w){this.finishedGoodsInwardEntryService=i,this.exportExcelService=s,this.spinner=u,this.activatedRoute=n,this.utilityService=V,this.exportToPDFService=w,this.page=1,this.pageSize=12,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.location="",this.locations=[],this.totalLineValue=0,this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(i,s){return s?._id}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=i.value,this.getAll()}}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.locations=[],this.getAll()}getAll(i=!1,s=""){this.spinner.show();let u={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i,fromDate:this.fromDate,toDate:this.toDate,location:this.locations};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.finishedGoodsInwardEntryService.getAllFGINValueFinanceReports(u).subscribe(n=>{"EXCEL"==s?this.excelDownload(n.rows):"PDF"==s?this.pdfDownload(n.rows):(this.tableData=n.rows,this.location=n.locations,this.totalLineValue=+n?.totalAmounts?.totalLineValue,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(i){this.exportExcelService.exportExcel((p=>({title:R,csvData:p,headers:I}))(i))}pdfDownload(i){let s=(p=>(0,m.J)({data:p,headers:I,widths:G,title:R}))(i);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:i,direction:s}){this.headers.forEach(u=>{u.sortable!==i&&(u.direction="")}),this.column=i,this.direction="asc"==s?1:-1,this.getAll()}}return(p=P).\u0275fac=function(i){return new(i||p)(t.Y36(y.IX),t.Y36(r.Ol),t.Y36(r.V),t.Y36(g.gz),t.Y36(r.tI),t.Y36(r.$L))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-fg-inventory-value"]],viewQuery:function(i,s){if(1&i&&t.Gf(A.j,5),2&i){let u;t.iGM(u=t.CRH())&&(s.headers=u)}},decls:69,vars:25,consts:[[1,"reportTablePage"],[1,"table-body","pb-0","shadow-none"],[1,"row","table-header"],[1,"col"],[1,"heading"],[1,"row","my-4"],[1,"col-3","ps-5","separate-row"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","value",3,"items","clearable","ngModel","change","ngModelChange"],[1,"set-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],[1,"col-3"],["type","date",1,"form-control",3,"ngModel","ngModelChange","change"],[1,"row","line-border"],[1,"table-responsive","mb-0"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","FGINQuantity",3,"sort"],["sortable","batchNo",3,"sort"],["sortable","manufacturingDate",3,"sort"],["sortable","GIStatus",3,"sort"],["sortable","customerCurrency",3,"sort"],["sortable","standardSellingRate",3,"sort"],["sortable","lineValue",3,"sort"],["sortable","location",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"table-footer"],[1,"row","align-items-center","mt-3"],[1,"col-3","pe-0"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0","ms-3"],[1,"ms-1","me-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","text","readonly","",1,"form-control",3,"value"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],["class","flaggreen",4,"ngIf"],["class","flagred",4,"ngIf"],["class","flagYellow",4,"ngIf"],[1,"flaggreen"],[1,"flagred"],[1,"flagYellow"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"FG Inventory Value Report"),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9,"Location"),t.TgZ(10,"span",8),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"ng-select",9),t.NdJ("change",function(){return s.getAll()})("ngModelChange",function(n){return s.locations=n}),t.qZA(),t.TgZ(13,"span",10),t._UZ(14,"img",11),t.qZA()(),t.TgZ(15,"div",12)(16,"label",7),t._uU(17," As on date closing stock"),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t.TgZ(20,"input",13),t.NdJ("ngModelChange",function(n){return s.toDate=n})("change",function(){return s.getAll()}),t.qZA()()(),t._UZ(21,"hr",14),t.TgZ(22,"div",15)(23,"app-setting-header",16),t.NdJ("dataChange",function(n){return s.eventHeader(n)}),t.qZA(),t.TgZ(24,"table",17)(25,"thead",18)(26,"tr",19)(27,"th",20),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(28,"SKU No."),t.qZA(),t.TgZ(29,"th",21),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(30),t.ALo(31,"labelTranslate"),t.qZA(),t.TgZ(32,"th",22),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(33),t.ALo(34,"labelTranslate"),t.qZA(),t.TgZ(35,"th",23),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(36,"UoM"),t.qZA(),t.TgZ(37,"th",24),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(38,"FG Qty"),t.qZA(),t.TgZ(39,"th",25),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(40,"Batch No."),t.qZA(),t.TgZ(41,"th",26),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(42,"Batch Date"),t.qZA(),t.TgZ(43,"th",27),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(44,"Aging"),t.qZA(),t.TgZ(45,"th",28),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(46,"Ccy"),t.qZA(),t.TgZ(47,"th",29),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(48,"Rate/Unit"),t.qZA(),t.TgZ(49,"th",30),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(50,"Line value"),t.qZA(),t.TgZ(51,"th",31),t.NdJ("sort",function(n){return s.onSort(n)}),t._uU(52,"Location"),t.qZA()()(),t.TgZ(53,"tbody"),t.YNc(54,C,34,28,"tr",32),t.qZA()()(),t.TgZ(55,"div",33),t._UZ(56,"hr",14),t.TgZ(57,"div",34)(58,"div",35)(59,"div",36)(60,"div",37),t._uU(61," FG Inventory Value "),t.TgZ(62,"span",38),t._uU(63,"\u25b6"),t.qZA(),t.TgZ(64,"button",39),t._uU(65),t.ALo(66,"companyCurrency"),t.qZA()(),t._UZ(67,"input",40),t.ALo(68,"number"),t.qZA()()()()()()),2&i&&(t.xp6(12),t.Q6J("items",s.location)("clearable",!1)("ngModel",s.locations),t.xp6(8),t.Q6J("ngModel",s.toDate),t.xp6(3),t.Q6J("data",t.l5B(20,b,s.page,s.pageSize,s.collection,s.search)),t.xp6(7),t.hij(" ",t.lcZ(31,11,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(34,13,"SKU Description")," "),t.xp6(21),t.Q6J("ngForOf",s.tableData)("ngForTrackBy",s.trackByFn),t.xp6(11),t.hij(" ",t.lcZ(66,15,"INR")," "),t.xp6(2),t.Q6J("value",t.xi3(68,17,s.totalLineValue,"1.2-2")))},dependencies:[o.sg,o.O5,e.P,d._L,f.Fj,f.JJ,f.On,S.w9,A.j,o.JJ,_.c,N.f],styles:[".separate-row[_ngcontent-%COMP%]{position:relative}.separate-row[_ngcontent-%COMP%]   .set-position[_ngcontent-%COMP%]{position:absolute;top:2rem;right:-.5rem}.separate-image[_ngcontent-%COMP%]{position:relative}.separate-image[_ngcontent-%COMP%]   .image-position[_ngcontent-%COMP%]{position:absolute;top:0rem;left:-.5rem}"]}),P})();var B=h(56208);const L=[{path:"",component:M}];let O=(()=>{var p;class P{}return(p=P).\u0275fac=function(i){return new(i||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[o.ez,B.m,g.Bz.forChild(L)]}),P})()},13107:(F,v,h)=>{h.d(v,{t:()=>o});const o={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(F,v,h)=>{h.d(v,{J:()=>o});const o=({data:g,headers:A,widths:c,title:m})=>({tableData:{widths:c,headerRows:1,body:[A.map(I=>({text:I.header,style:"header"})),...g.map(I=>A.map(U=>({style:"subheader",text:I[U.key]})))]},title:m})},73374:(F,v,h)=>{h.d(v,{IX:()=>c,SZ:()=>U,Aj:()=>m,vM:()=>G,zP:()=>R,Ee:()=>I});var o=h(37398),g=h(65879),A=h(99328);let c=(()=>{var a;class t{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:e=>`/stores/FGIN/update/${e}`,getByIdPath:e=>`/stores/FGIN/getById/${e}`,deletePath:e=>`/stores/FGIN/delete/${e}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,o.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(e=>e))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,o.U)(e=>e))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,o.U)(e=>e))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,o.U)(e=>e))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,o.U)(e=>e))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,o.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,o.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(e=>e))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,o.U)(e=>e))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,o.U)(e=>e))}}return(a=t).\u0275fac=function(r){return new(r||a)(g.LFG(A.sM))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),t})(),m=(()=>{var a;class t{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:e=>`/stores/gin/update/${e}`,getByIdPath:e=>`/stores/gin/getById/${e}`,deletePath:e=>`/stores/gin/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,o.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(e=>e))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,o.U)(e=>e))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,o.U)(e=>e))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,o.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(e=>e))}}return(a=t).\u0275fac=function(r){return new(r||a)(g.LFG(A.sM))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),t})(),G=(()=>{var a;class t{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:e=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${e}`,updatePath:e=>`/stores/goodsIssue/update/${e}`,getByIdPath:e=>`/stores/goodsIssue/getById/${e}`,getGoodRequisitionByIdPath:e=>`/stores/goodsIssue/getGoodRequisitionById/${e}`,deletePath:e=>`/stores/goodsIssue/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(e=>e))}updateOnResolveDiscrepancy(r,e){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),e).pipe((0,o.U)(d=>d))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,o.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(e=>e))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,o.U)(e=>e))}}return(a=t).\u0275fac=function(r){return new(r||a)(g.LFG(A.sM))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),t})(),R=(()=>{var a;class t{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:e=>`/stores/grn/update/${e}`,updateOnCancelPath:e=>`/stores/grn/updateOnCancelGRN/${e}`,getByIdPath:e=>`/stores/grn/getById/${e}`,getPOBySupplierIdPath:e=>`/stores/grn/getPOBySupplierId/${e}`,getGRNDetailsByPOIdPath:e=>`/stores/grn/getGRNDetailsByPOId/${e}`,getGRNDetailsByIdPath:e=>`/stores/grn/getGRNDetailsById/${e}`,deletePath:e=>`/stores/grn/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(e=>e))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,o.U)(e=>e))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,o.U)(e=>e))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,o.U)(e=>e))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,o.U)(e=>e))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,o.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,o.U)(d=>d))}updateOnCancel(r,e){return this.http.put(this.routes.updateOnCancelPath(r),e).pipe((0,o.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(e=>e))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,o.U)(e=>e))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,o.U)(e=>e))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,o.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(e=>e))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,o.U)(e=>e))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,o.U)(e=>e))}}return(a=t).\u0275fac=function(r){return new(r||a)(g.LFG(A.sM))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),t})(),I=(()=>{var a;class t{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getStockPreparationShopReportsPath:"/stores/inventory/getStockPreparationShopReports",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",updateSPSInventoryPath:"/stores/inventory/updateSPSInventory",getAllStockPreparationShopPath:"/stores/inventory/getAllStockPreparationShop",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:e=>`/stores/inventory/getById/${e}`,deletePath:e=>`/stores/inventory/delete/${e}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,o.U)(e=>e))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(e=>e))}getAllStockPreparationShop(r){return this.http.get(this.routes.getAllStockPreparationShopPath,r).pipe((0,o.U)(e=>e))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,o.U)(e=>e))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,o.U)(e=>e))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,o.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(e=>e))}getStockPreparationShopReports(r){return this.http.get(this.routes.getStockPreparationShopReportsPath,r).pipe((0,o.U)(e=>e))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,o.U)(e=>e))}updateSPSInventory(r){return this.http.put(this.routes.updateSPSInventoryPath,r).pipe((0,o.U)(e=>e))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(e=>e))}}return(a=t).\u0275fac=function(r){return new(r||a)(g.LFG(A.sM))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),t})(),U=(()=>{var a;class t{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:e=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${e}`,updatePath:e=>`/stores/goodsTransferResponse/update/${e}`,getByIdPath:e=>`/stores/goodsTransferResponse/getById/${e}`,getItemByGTRequestIdPath:e=>`/stores/goodsTransferResponse/getItemByGTRequestId/${e}`,deletePath:e=>`/stores/goodsTransferResponse/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(e=>e))}updateOnResolveDiscrepancy(r,e){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),e).pipe((0,o.U)(d=>d))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,o.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(e=>e))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,o.U)(e=>e))}}return(a=t).\u0275fac=function(r){return new(r||a)(g.LFG(A.sM))},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),t})()}}]);