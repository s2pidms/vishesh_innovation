"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1146],{81146:(D,I,u)=>{u.r(I),u.d(I,{GieDirectModule:()=>T});var s=u(96814),A=u(1076),n=u(60095),P=u(43818),v=u(25116),e=u(65879),G=u(73374),R=u(98977),N=u(88059),i=u(37285),c=u(95346),y=u(59103);function r(g,m){if(1&g&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&g){const l=m.$implicit;e.Q6J("value",l._id),e.xp6(1),e.hij(" ",l.MRNNumber," ")}}const t=function(){return{standalone:!0}};function d(g,m){if(1&g){const l=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",34,35)(5,"span",36),e._uU(6),e.qZA()(),e.TgZ(7,"td",34,37)(9,"span",36),e._uU(10),e.qZA()(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"date"),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"UOMUnitsMaster"),e.qZA(),e.TgZ(17,"td")(18,"div",38)(19,"input",39),e.NdJ("ngModelChange",function(o){const h=e.CHM(l).$implicit;return e.KtG(h.GINQty=o)}),e.qZA()()(),e.TgZ(20,"td")(21,"div",38)(22,"input",39),e.NdJ("ngModelChange",function(o){const h=e.CHM(l).$implicit;return e.KtG(h.GINQty=o)}),e.qZA()()()()}if(2&g){const l=m.$implicit,p=e.MAs(4),o=e.MAs(8);e.xp6(2),e.Oqu(null==l?null:l.itemCode),e.xp6(1),e.Udp("width",p.clientWidth),e.xp6(2),e.Q6J("positionTarget",p)("ngbTooltip",l.itemName),e.xp6(1),e.hij(" ",null==l?null:l.itemName," "),e.xp6(1),e.Udp("width",o.clientWidth),e.xp6(2),e.Q6J("positionTarget",o)("ngbTooltip",l.itemDescription),e.xp6(1),e.hij(" ",null==l?null:l.itemDescription," "),e.xp6(2),e.Oqu(e.xi3(13,17,null==l?null:l.batchDate,"dd-MM-YYYY")),e.xp6(3),e.Oqu(e.lcZ(16,20,null==l?null:l.UOM)),e.xp6(4),e.Q6J("ngModel",l.GINQty)("ngModelOptions",e.DdM(22,t)),e.xp6(3),e.Q6J("ngModel",l.GINQty)("ngModelOptions",e.DdM(23,t))}}const f=function(g,m,l,p){return{page:g,pageSize:m,collection:l,search:p,excelDisplay:"none"}};let U=(()=>{var g;class m{get f(){return this.form.controls}constructor(p,o,a,h,_,C){this.goodInwrdEntryService=p,this.router=o,this.spinner=a,this.toastService=h,this.utilityService=_,this.activatedRoute=C,this.submitted=!1,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.isPreview=!1,this.direction=-1,this.search="",this.flag=-1,this.action="create",this.tableData=[],this.tableDataObject={},this.GINDetailsArr=[],this.MRNListArr=[],this.supplierOptionArr=[],this.rolePermissionActions=v.a1,this.form=new n.nJ({GINDate:new n.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[n.kI.required]),GINNumber:new n.p4(""),MRNNumber:new n.p4(null),MRNDate:new n.p4(null,[n.kI.required]),purchaseCategory:new n.p4(""),supplier:new n.p4("",[n.kI.required]),supplierInvoice:new n.p4("",[n.kI.required]),supplierInvoiceDate:new n.p4(null,[n.kI.required]),currency:new n.p4("",[n.kI.required]),FXRateINR:new n.p4(1,[n.kI.required]),GINDetails:new n.p4([]),deliveryLocation:new n.p4(null),remarks:new n.p4(null)})}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(p,o,a){this.router.navigate([p],{queryParams:{id:o,action:a}})}submit(){}create(p){this.spinner.show(),this.goodInwrdEntryService.create(p).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.reset(),this.getAll()})}reset(){this.form.reset(),this.GINDetailsArr=[],this.getAll()}eventHeader(p){switch(p.key){case"SEARCH":this.search=p.value,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=p.value}}trackByFn(p,o){return o?._id}getAll(){}setMRN(p){let o=this.MRNListArr.find(a=>a._id==this.f.MRNNumber.value);this.f.purchaseCategory.setValue(o.supplier.supplierPurchaseType),this.f.supplier.setValue(o.supplier._id),this.f.supplierInvoice.setValue(o.supplierInvoice),this.f.deliveryLocation.setValue(o.deliveryLocation),this.f.MRNDate.setValue(this.utilityService.getFormatDate(o.MRNDate,"YYYY-MM-DD")),this.form.controls.supplierInvoiceDate.setValue(this.utilityService.getFormatDate(o.supplierDate,"YYYY-MM-DD")),this.f.currency.setValue(o.supplier.supplierCurrency),"Domestic"==this.f.purchaseCategory.value&&this.f.FXRateINR.disable(),this.f.supplier.disable(),this.f.purchaseCategory.disable(),this.f.supplierInvoice.disable(),this.f.currency.disable(),this.f.supplierInvoiceDate.disable(),this.GINDetailsArr=o.MRNDetails.map((a,h)=>({item:a.item._id,GINLineNumber:h+1,mrnLineNumber:a.mrnLineNumber,itemCode:a.item.itemCode,itemName:a.item.itemName,itemSubCategory:a.item.itemSubCategory,itemType:a.item.itemType,UOM:a.UOM,GINQty:a.releasedQty??0,standardRate:a.standardRate,purchaseRate:a.purchaseRate,purchaseRateUSD:a.purchaseRate,purchaseRatINR:a.purchaseRate*(this.f.FXRateINR.value||1),lineValueINR:a.releasedQty*a.purchaseRate*(this.f.FXRateINR.value||1),batchDate:this.utilityService.getTodayDate("YYYY-MM-DD"),balancedQty:a.balancedQty??0,rejectedQty:a.rejectedQty??0,releasedQty:a.releasedQty??0})),this.collection=this.GINDetailsArr.length}onSort({}){}ESCPreview(){this.search=""}preview(){this.search=""}}return(g=m).\u0275fac=function(p){return new(p||g)(e.Y36(G.Aj),e.Y36(A.F0),e.Y36(R.V),e.Y36(R.kl),e.Y36(R.tI),e.Y36(A.gz))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-gie-direct"]],viewQuery:function(p,o){if(1&p&&e.Gf(P.j,5),2&p){let a;e.iGM(a=e.CRH())&&(o.headers=a)}},decls:69,vars:18,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["id","applicationDate","type","date","formControlName","GINDate","readonly","",1,"form-control"],["type","text","formControlName","GINDate","readonly","",1,"form-control"],["id","applicationDate","formControlName","MRNDate","type","date",1,"form-control"],["formControlName","MRNNumber","readonly","",1,"form-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"row","line-border"],[1,"row","justify-content-center"],[1,"col-12"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","21rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","batchDate",3,"sort"],["sortable","UOM",3,"sort"],["sortable","GINQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-md-auto","ms-auto","d-flex","justify-content-center","mb-3"],["type","button",1,"btn","bg-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"click"],["type","button",1,"btn","bg-primary","px-5",3,"disabled","click"],[3,"value"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(p,o){1&p&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Finished Goods Inward (Entry)"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),e._uU(10," GIN Date"),e.TgZ(11,"span",9),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",10),e.qZA(),e.TgZ(14,"div",7)(15,"label",8),e._uU(16," T/MRN No."),e.TgZ(17,"span",9),e._uU(18,"*"),e.qZA()(),e._UZ(19,"input",11),e.qZA(),e.TgZ(20,"div",7)(21,"label",8),e._uU(22," T/MRN Date"),e.TgZ(23,"span",9),e._uU(24,"*"),e.qZA()(),e._UZ(25,"input",12),e.qZA(),e.TgZ(26,"div",7)(27,"label",8),e._uU(28," Location"),e.TgZ(29,"span",9),e._uU(30,"*"),e.qZA()(),e.TgZ(31,"select",13),e.NdJ("change",function(h){return o.setMRN(h)}),e.YNc(32,r,2,2,"option",14),e.qZA()()()(),e._UZ(33,"hr",15),e.TgZ(34,"div",16)(35,"div",17)(36,"app-setting-header",18),e.NdJ("dataChange",function(h){return o.eventHeader(h)}),e.qZA(),e.TgZ(37,"div",19)(38,"table",20)(39,"thead",21)(40,"tr",22)(41,"th",23),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(42,"Item Code"),e.qZA(),e.TgZ(43,"th",24),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(44,"Item Name"),e.qZA(),e.TgZ(45,"th",24),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(46,"Item Description"),e.qZA(),e.TgZ(47,"th",25),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(48,"Unit Conversion"),e.qZA(),e.TgZ(49,"th",26),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(50,"UoM"),e.qZA(),e.TgZ(51,"th",27),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(52,"Inward Qty"),e.qZA(),e.TgZ(53,"th",27),e.NdJ("sort",function(h){return o.onSort(h)}),e._uU(54,"Batch Date"),e.qZA()()(),e.TgZ(55,"tbody"),e.YNc(56,d,23,24,"tr",28),e.ALo(57,"slice"),e.ALo(58,"searchFi1ter"),e.qZA()()()()(),e._UZ(59,"hr",15),e.TgZ(60,"div",29)(61,"button",30),e.NdJ("click",function(){return o.reset()}),e._uU(62,"Reset"),e.qZA(),e.TgZ(63,"button",31),e.NdJ("click",function(){return o.ESCPreview()}),e._uU(64,"Esc"),e.qZA(),e.TgZ(65,"button",30),e.NdJ("click",function(){return o.preview()}),e._uU(66,"Preview"),e.qZA(),e.TgZ(67,"button",32),e.NdJ("click",function(){return o.submit()}),e._uU(68,"Save"),e.qZA()()()()),2&p&&(e.Q6J("formGroup",o.form),e.xp6(32),e.Q6J("ngForOf",o.MRNListArr),e.xp6(4),e.Q6J("data",e.l5B(13,f,o.page,o.pageSize,o.collection,o.search)),e.xp6(20),e.Q6J("ngForOf",e.Dn7(57,6,e.xi3(58,10,o.GINDetailsArr,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),e.xp6(11),e.Q6J("disabled",!o.isPreview))},dependencies:[s.sg,N.P,i._L,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u,n.On,P.j,s.OU,s.uU,c.G,y.S],encapsulation:2}),m})();var F=u(56208);const M=[{path:"",component:U}];let T=(()=>{var g;class m{}return(g=m).\u0275fac=function(p){return new(p||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[s.ez,A.Bz.forChild(M),F.m]}),m})()},73374:(D,I,u)=>{u.d(I,{IX:()=>P,SZ:()=>N,Aj:()=>v,vM:()=>e,zP:()=>G,Ee:()=>R});var s=u(37398),A=u(65879),n=u(98977);let P=(()=>{var i;class c{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:t=>`/stores/FGIN/update/${t}`,getByIdPath:t=>`/stores/FGIN/getById/${t}`,deletePath:t=>`/stores/FGIN/delete/${t}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,s.U)(t=>t))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,s.U)(t=>t))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,s.U)(t=>t))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,s.U)(t=>t))}}return(i=c).\u0275fac=function(r){return new(r||i)(A.LFG(n.sM))},i.\u0275prov=A.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),c})(),v=(()=>{var i;class c{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:t=>`/stores/gin/update/${t}`,getByIdPath:t=>`/stores/gin/getById/${t}`,deletePath:t=>`/stores/gin/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,s.U)(t=>t))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,s.U)(t=>t))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}}return(i=c).\u0275fac=function(r){return new(r||i)(A.LFG(n.sM))},i.\u0275prov=A.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),c})(),e=(()=>{var i;class c{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsIssue/update/${t}`,getByIdPath:t=>`/stores/goodsIssue/getById/${t}`,getGoodRequisitionByIdPath:t=>`/stores/goodsIssue/getGoodRequisitionById/${t}`,deletePath:t=>`/stores/goodsIssue/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,s.U)(d=>d))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,s.U)(t=>t))}}return(i=c).\u0275fac=function(r){return new(r||i)(A.LFG(n.sM))},i.\u0275prov=A.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),c})(),G=(()=>{var i;class c{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:t=>`/stores/grn/update/${t}`,updateOnCancelPath:t=>`/stores/grn/updateOnCancelGRN/${t}`,getByIdPath:t=>`/stores/grn/getById/${t}`,getPOBySupplierIdPath:t=>`/stores/grn/getPOBySupplierId/${t}`,getGRNDetailsByPOIdPath:t=>`/stores/grn/getGRNDetailsByPOId/${t}`,getGRNDetailsByIdPath:t=>`/stores/grn/getGRNDetailsById/${t}`,deletePath:t=>`/stores/grn/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,s.U)(t=>t))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,s.U)(t=>t))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}updateOnCancel(r,t){return this.http.put(this.routes.updateOnCancelPath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,s.U)(t=>t))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,s.U)(t=>t))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,s.U)(t=>t))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}}return(i=c).\u0275fac=function(r){return new(r||i)(A.LFG(n.sM))},i.\u0275prov=A.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),c})(),R=(()=>{var i;class c{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:t=>`/stores/inventory/getById/${t}`,deletePath:t=>`/stores/inventory/delete/${t}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,s.U)(t=>t))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,s.U)(t=>t))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,s.U)(t=>t))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}}return(i=c).\u0275fac=function(r){return new(r||i)(A.LFG(n.sM))},i.\u0275prov=A.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),c})(),N=(()=>{var i;class c{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsTransferResponse/update/${t}`,getByIdPath:t=>`/stores/goodsTransferResponse/getById/${t}`,getItemByGTRequestIdPath:t=>`/stores/goodsTransferResponse/getItemByGTRequestId/${t}`,deletePath:t=>`/stores/goodsTransferResponse/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,s.U)(d=>d))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,s.U)(t=>t))}}return(i=c).\u0275fac=function(r){return new(r||i)(A.LFG(n.sM))},i.\u0275prov=A.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),c})()}}]);