"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6272],{33363:(G,P,u)=>{u.r(P),u.d(P,{GenerateSupplementaryPOModule:()=>Z});var o=u(96814),d=u(1076),n=u(60095),y=u(43818),R=u(25116),e=u(65879),N=u(73374),I=u(74659),m=u(99328),i=u(88059),D=u(37285),r=u(50363),t=u(53421),g=u(95346);function S(c,f){if(1&c&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",38,39)(7,"span",40),e._uU(8),e.qZA()(),e.TgZ(9,"td",38,41)(11,"span",40),e._uU(12),e.qZA()(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"number"),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.ALo(25,"number"),e.qZA(),e.TgZ(26,"td"),e._uU(27),e.ALo(28,"date"),e.qZA()()),2&c){const a=f.$implicit,h=e.MAs(6),s=e.MAs(10);e.xp6(2),e.Oqu(null==a?null:a.POLineNumber),e.xp6(2),e.Oqu(null==a?null:a.itemCode),e.xp6(1),e.Udp("width",h.clientWidth),e.xp6(2),e.Q6J("positionTarget",h)("ngbTooltip",a.itemName),e.xp6(1),e.hij(" ",null==a?null:a.itemName," "),e.xp6(1),e.Udp("width",s.clientWidth),e.xp6(2),e.Q6J("positionTarget",s)("ngbTooltip",a.itemDescription),e.xp6(1),e.hij(" ",null==a?null:a.itemDescription," "),e.xp6(2),e.Oqu(null==a?null:a.unitConversion),e.xp6(2),e.hij(" ",a.orderInfoUOM?a.orderInfoUOM:a.primaryUnit," "),e.xp6(2),e.Oqu(e.xi3(19,18,null==a?null:a.POQty,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(22,21,null==a?null:a.purchaseRate,"1.2-2")),e.xp6(3),e.hij(" ",e.xi3(25,24,a.lineValue,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(28,27,a.deliveryDate,"dd-MM-YYYY")," ")}}const v=function(){return{standalone:!0}},O=function(c,f,a,h){return{page:c,pageSize:f,collection:a,search:h,excelDisplay:"none"}};let F=(()=>{class c{get f(){return this.form.controls}constructor(a,h,s,p,l,A){this.grnServices=a,this.POServices=h,this.spinner=s,this.utilityService=p,this.toastService=l,this.location=A,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.submitted=!1,this.action="create",this.GRNDetailsArray=[],this.GRNNumbersArr=[],this.GRNNumberId="",this.PODetails=[],this.oldPONumber="",this.rolePermissionActions=R.a1,this.masterData={rows:[]},this.form=new n.nJ({GRNDate:new n.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),PONumber:new n.p4(""),PODate:new n.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),supplier:new n.p4(null),supplierName:new n.p4(null),purchaseCategory:new n.p4(""),changedPaymentTerms:new n.p4(""),orderReference:new n.p4(""),currency:new n.p4(""),deliveryLocation:new n.p4(""),deliveryDate:new n.p4(""),PODetails:new n.p4([]),PORemarks:new n.p4(""),netPOValue:new n.p4(""),totalPPV:new n.p4(""),isActive:new n.p4(""),otherCharges:new n.p4({}),POStatus:new n.p4("Supplementary PO")})}ngOnInit(){this.getInitialData()}submit(){this.submitted=!0,this.form.enable();let a=this.form.value;a.PODetails=this.GRNDetailsArray,this.create(a)}create(a){this.spinner.show(),this.POServices.create(a).subscribe(h=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(h.message),this.reset()})}reset(){this.form.reset(),this.GRNDetailsArray=[],this.GRNNumberId="",this.oldPONumber="",this.collection=this.GRNDetailsArray.length,this.getInitialData()}trackByFn(a,h){return h?._id}getInitialData(){this.spinner.show(),this.grnServices.getAllGRNForSupplementaryPO({}).subscribe(a=>{this.form.controls.POStatus.setValue("Supplementary PO"),this.form.controls.GRNDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.GRNNumbersArr=a.rows,this.spinner.hide()})}goodRequisitionById(){this.spinner.show(),this.grnServices.getById(this.GRNNumberId).subscribe(a=>{this.form.patchValue(a.PONumber),this.oldPONumber=a.PONumber.PONumber;let h={supplierName:a.supplier.supplierName,PONumber:a.PONumber.PONumber.replace("PO","PO/S"),supplier:a.supplier._id,GRNDate:this.utilityService.getFormatDate(a.GRNDate,"YYYY-MM-DD"),PODate:this.utilityService.getFormatDate(a.PODate,"YYYY-MM-DD"),POStatus:"Supplementary PO"};this.form.patchValue(h),this.GRNDetailsArray=a.PONumber.PODetails.map(s=>({...s,...a.GRNDetails.find(p=>p.item._id==s.item)})).filter(s=>s.GRNQty>s.POQty),this.GRNDetailsArray=this.GRNDetailsArray.map(s=>({POLineNumber:s.POLineNumber,item:s.item._id,UOM:s.UOM,primaryUnit:s.item.primaryUnit,POQty:s.GRNQty-s.POQty,standardRate:s.standardRate,purchaseRate:s.purchaseRate,lineValue:(s.GRNQty-s.POQty)*s.purchaseRate,linePPV:(s.GRNQty-s.POQty)*s.purchaseRate,deliveryDate:this.form.controls.GRNDate.value,gst:s.gst,igst:s.igst,cgst:s.cgst,sgst:s.sgst,lineRemarks:s.lineRemarks,receivedQty:s.receivedQty,invoicedQty:s.invoicedQty,balancedQty:s.balancedQty,canceledQty:s.canceledQty,markedForAlternateSupplier:s.markedForAlternateSupplier,lineStatus:s.lineStatus,itemCode:s.item.itemCode,itemName:s.item.itemName,itemDescription:s.item.itemDescription,orderInfoUOM:s.item.orderInfoUOM,unitConversion:s.item.conversionOfUnits,GRNQty:s.GRNQty})),this.collection=this.GRNDetailsArray.length,this.f.netPOValue.setValue(this.GRNDetailsArray.map(s=>s.lineValue).reduce((s,p)=>+s+ +p,0).toFixed(2)),this.spinner.hide()})}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=a.value}}onSort({column:a,direction:h}){this.headers.forEach(s=>{s.sortable!==a&&(s.direction="")}),this.GRNDetailsArray=""===h||""===a?this.GRNDetailsArray:[...this.GRNDetailsArray].sort((s,p)=>{let l="string"==typeof s[a]?s[a].toLowerCase():s[a],A="string"==typeof p[a]?p[a].toLowerCase():p[a];const U=l<A?-1:l>A?1:0;return"asc"===h?U:-U})}static#t=this.\u0275fac=function(h){return new(h||c)(e.Y36(N.zP),e.Y36(I.x$),e.Y36(m.V),e.Y36(m.tI),e.Y36(m.kl),e.Y36(o.Ye))};static#e=this.\u0275cmp=e.Xpm({type:c,selectors:[["app-supplementary-po-form"]],viewQuery:function(h,s){if(1&h&&e.Gf(y.j,5),2&h){let p;e.iGM(p=e.CRH())&&(s.headers=p)}},decls:78,vars:25,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mb-2"],[1,"col"],[1,"row"],[1,"col-2"],["for","",1,"form-label"],[1,"text-danger"],["bindLabel","GRNNumber","bindValue","_id",3,"items","ngModel","ngModelOptions","clearable","ngModelChange","change"],["type","date","formControlName","GRNDate","readonly","",1,"form-control"],[1,"form-label"],["type","text","formControlName","supplierName","readonly","",1,"form-control"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","date","formControlName","PODate","readonly","",1,"form-control"],["type","text","formControlName","PONumber","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","22rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","balancedQty",3,"sort"],["sortable","invoicedQty",3,"sort"],["sortable","GRNQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col","d-flex","justify-content-center","mb-3"],["appAccessControl","",3,"accessType"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(h,s){1&h&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Generate Supplementary PO"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10),e._uU(12,"GRN No."),e.TgZ(13,"span",11),e._uU(14,"*"),e.qZA()(),e.TgZ(15,"ng-select",12),e.NdJ("ngModelChange",function(l){return s.GRNNumberId=l})("change",function(){return s.goodRequisitionById()}),e.qZA()(),e.TgZ(16,"div",9)(17,"label",10),e._uU(18,"GRN Date"),e.qZA(),e._UZ(19,"input",13),e.qZA(),e.TgZ(20,"div",9)(21,"label",14),e._uU(22," Supplier Name"),e.TgZ(23,"span",11),e._uU(24,"*"),e.qZA()(),e._UZ(25,"input",15),e.qZA(),e.TgZ(26,"div",9)(27,"label",14),e._uU(28," PO No."),e.TgZ(29,"span",11),e._uU(30,"*"),e.qZA()(),e.TgZ(31,"input",16),e.NdJ("ngModelChange",function(l){return s.oldPONumber=l}),e.qZA()(),e.TgZ(32,"div",9)(33,"label",14),e._uU(34,"PO Date"),e.qZA(),e._UZ(35,"input",17),e.qZA(),e.TgZ(36,"div",9)(37,"label",14),e._uU(38,"Supplementary PO #"),e.qZA(),e._UZ(39,"input",18),e.qZA()()()()(),e._UZ(40,"hr",19),e.TgZ(41,"app-setting-header",20),e.NdJ("dataChange",function(l){return s.eventHeader(l)}),e.qZA(),e.TgZ(42,"div",21)(43,"table",22)(44,"thead",23)(45,"tr",24)(46,"th",25),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(47,"#"),e.qZA(),e.TgZ(48,"th",26),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(49,"Item Code"),e.qZA(),e.TgZ(50,"th",27),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(51,"Item Name"),e.qZA(),e.TgZ(52,"th",28),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(53,"Item Description"),e.qZA(),e.TgZ(54,"th",29),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(55,"Unit Conversion"),e.qZA(),e.TgZ(56,"th",29),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(57,"UoM"),e.qZA(),e.TgZ(58,"th",30),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(59,"PO Qty"),e.qZA(),e.TgZ(60,"th",31),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(61,"Purchase Rate"),e.qZA(),e.TgZ(62,"th",32),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(63,"Line Value"),e.qZA(),e.TgZ(64,"th",32),e.NdJ("sort",function(l){return s.onSort(l)}),e._uU(65,"Delivery Dt."),e.qZA()()(),e.TgZ(66,"tbody"),e.YNc(67,S,29,30,"tr",33),e.ALo(68,"slice"),e.ALo(69,"searchFi1ter"),e.qZA()()(),e._UZ(70,"hr",19),e.TgZ(71,"div",34)(72,"div")(73,"div",35)(74,"button",36),e.NdJ("click",function(){return s.reset()}),e._uU(75,"Reset"),e.qZA(),e.TgZ(76,"button",37),e.NdJ("click",function(){return s.submit()}),e._uU(77,"Save"),e.qZA()()()()()()),2&h&&(e.Q6J("formGroup",s.form),e.xp6(15),e.Q6J("items",s.GRNNumbersArr)("ngModel",s.GRNNumberId)("ngModelOptions",e.DdM(18,v))("clearable",!1),e.xp6(16),e.Q6J("ngModel",s.oldPONumber)("ngModelOptions",e.DdM(19,v)),e.xp6(10),e.Q6J("data",e.l5B(20,O,s.page,s.pageSize,s.collection,s.search)),e.xp6(26),e.Q6J("ngForOf",e.Dn7(68,11,e.xi3(69,15,s.GRNDetailsArray,s.search),(s.page-1)*s.pageSize,(s.page-1)*s.pageSize+s.pageSize))("ngForTrackBy",s.trackByFn),e.xp6(6),e.Q6J("accessType",s.rolePermissionActions.createAction))},dependencies:[o.sg,i.P,D._L,n.Fj,n.JJ,n.JL,n.sg,n.u,n.On,r.w9,y.j,t.J,o.OU,o.JJ,o.uU,g.G],encapsulation:2})}return c})();var b=u(56208);const T=[{path:"",redirectTo:"form",pathMatch:"full"},{path:"form",component:F}];let Z=(()=>{class c{static#t=this.\u0275fac=function(h){return new(h||c)};static#e=this.\u0275mod=e.oAB({type:c});static#r=this.\u0275inj=e.cJS({imports:[o.ez,d.Bz.forChild(T),b.m]})}return c})()},73374:(G,P,u)=>{u.d(P,{IX:()=>y,SZ:()=>m,Aj:()=>R,vM:()=>e,zP:()=>N,Ee:()=>I});var o=u(37398),d=u(65879),n=u(99328);let y=(()=>{class i{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:t=>`/stores/FGIN/update/${t}`,getByIdPath:t=>`/stores/FGIN/getById/${t}`,deletePath:t=>`/stores/FGIN/delete/${t}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,o.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(t=>t))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,o.U)(t=>t))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,o.U)(t=>t))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,o.U)(t=>t))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,o.U)(t=>t))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,o.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,o.U)(g=>g))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(t=>t))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,o.U)(t=>t))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,o.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||i)(d.LFG(n.sM))};static#e=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),R=(()=>{class i{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:t=>`/stores/gin/update/${t}`,getByIdPath:t=>`/stores/gin/getById/${t}`,deletePath:t=>`/stores/gin/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,o.U)(g=>g))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(t=>t))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,o.U)(t=>t))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,o.U)(t=>t))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,o.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||i)(d.LFG(n.sM))};static#e=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),e=(()=>{class i{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsIssue/update/${t}`,getByIdPath:t=>`/stores/goodsIssue/getById/${t}`,getGoodRequisitionByIdPath:t=>`/stores/goodsIssue/getGoodRequisitionById/${t}`,deletePath:t=>`/stores/goodsIssue/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,o.U)(g=>g))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,o.U)(g=>g))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(t=>t))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,o.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||i)(d.LFG(n.sM))};static#e=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),N=(()=>{class i{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:t=>`/stores/grn/update/${t}`,updateOnCancelPath:t=>`/stores/grn/updateOnCancelGRN/${t}`,getByIdPath:t=>`/stores/grn/getById/${t}`,getPOBySupplierIdPath:t=>`/stores/grn/getPOBySupplierId/${t}`,getGRNDetailsByPOIdPath:t=>`/stores/grn/getGRNDetailsByPOId/${t}`,getGRNDetailsByIdPath:t=>`/stores/grn/getGRNDetailsById/${t}`,deletePath:t=>`/stores/grn/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(t=>t))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,o.U)(t=>t))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,o.U)(t=>t))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,o.U)(t=>t))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,o.U)(t=>t))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,o.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,o.U)(g=>g))}updateOnCancel(r,t){return this.http.put(this.routes.updateOnCancelPath(r),t).pipe((0,o.U)(g=>g))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(t=>t))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,o.U)(t=>t))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,o.U)(t=>t))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,o.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(t=>t))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,o.U)(t=>t))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,o.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||i)(d.LFG(n.sM))};static#e=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),I=(()=>{class i{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getStockPreparationShopReportsPath:"/stores/inventory/getStockPreparationShopReports",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",updateSPSInventoryPath:"/stores/inventory/updateSPSInventory",getAllStockPreparationShopPath:"/stores/inventory/getAllStockPreparationShop",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:t=>`/stores/inventory/getById/${t}`,deletePath:t=>`/stores/inventory/delete/${t}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,o.U)(t=>t))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(t=>t))}getAllStockPreparationShop(r){return this.http.get(this.routes.getAllStockPreparationShopPath,r).pipe((0,o.U)(t=>t))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,o.U)(t=>t))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,o.U)(t=>t))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,o.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(t=>t))}getStockPreparationShopReports(r){return this.http.get(this.routes.getStockPreparationShopReportsPath,r).pipe((0,o.U)(t=>t))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,o.U)(t=>t))}updateSPSInventory(r){return this.http.put(this.routes.updateSPSInventoryPath,r).pipe((0,o.U)(t=>t))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||i)(d.LFG(n.sM))};static#e=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),m=(()=>{class i{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsTransferResponse/update/${t}`,getByIdPath:t=>`/stores/goodsTransferResponse/getById/${t}`,getItemByGTRequestIdPath:t=>`/stores/goodsTransferResponse/getItemByGTRequestId/${t}`,deletePath:t=>`/stores/goodsTransferResponse/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,o.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,o.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,o.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,o.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,o.U)(g=>g))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,o.U)(g=>g))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,o.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,o.U)(t=>t))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,o.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||i)(d.LFG(n.sM))};static#e=this.\u0275prov=d.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);