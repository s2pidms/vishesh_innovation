"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6272],{33363:(O,R,u)=>{u.r(R),u.d(R,{GenerateSupplementaryPOModule:()=>Z});var s=u(96814),m=u(1076),p=u(60095),N=u(43818),G=u(25116),e=u(65879),S=u(73374),U=u(48720),A=u(2742),n=u(88059),g=u(37285),P=u(50363),r=u(53421),t=u(95346);function d(c,y){if(1&c&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",38,39)(7,"span",40),e._uU(8),e.qZA()(),e.TgZ(9,"td",38,41)(11,"span",40),e._uU(12),e.qZA()(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.ALo(19,"number"),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.ALo(25,"number"),e.qZA(),e.TgZ(26,"td"),e._uU(27),e.ALo(28,"date"),e.qZA()()),2&c){const h=y.$implicit,i=e.MAs(6),a=e.MAs(10);e.xp6(2),e.Oqu(null==h?null:h.POLineNumber),e.xp6(2),e.Oqu(null==h?null:h.itemCode),e.xp6(1),e.Udp("width",i.clientWidth),e.xp6(2),e.Q6J("positionTarget",i)("ngbTooltip",h.itemName),e.xp6(1),e.hij(" ",null==h?null:h.itemName," "),e.xp6(1),e.Udp("width",a.clientWidth),e.xp6(2),e.Q6J("positionTarget",a)("ngbTooltip",h.itemDescription),e.xp6(1),e.hij(" ",null==h?null:h.itemDescription," "),e.xp6(2),e.Oqu(null==h?null:h.unitConversion),e.xp6(2),e.hij(" ",h.orderInfoUOM?h.orderInfoUOM:h.primaryUnit," "),e.xp6(2),e.Oqu(e.xi3(19,18,null==h?null:h.POQty,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(22,21,null==h?null:h.purchaseRate,"1.2-2")),e.xp6(3),e.hij(" ",e.xi3(25,24,h.lineValue,"1.2-2")," "),e.xp6(3),e.hij(" ",e.xi3(28,27,h.deliveryDate,"dd-MM-YYYY")," ")}}const f=function(){return{standalone:!0}},F=function(c,y,h,i){return{page:c,pageSize:y,collection:h,search:i,excelDisplay:"none"}};let b=(()=>{var c;class y{get f(){return this.form.controls}constructor(i,a,o,l,I,v){this.grnServices=i,this.POServices=a,this.spinner=o,this.utilityService=l,this.toastService=I,this.location=v,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.submitted=!1,this.action="create",this.GRNDetailsArray=[],this.GRNNumbersArr=[],this.GRNNumberId="",this.PODetails=[],this.oldPONumber="",this.rolePermissionActions=G.a1,this.masterData={rows:[]},this.form=new p.nJ({GRNDate:new p.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),PONumber:new p.p4(""),PODate:new p.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),supplier:new p.p4(null),supplierName:new p.p4(null),purchaseCategory:new p.p4(""),changedPaymentTerms:new p.p4(""),orderReference:new p.p4(""),currency:new p.p4(""),deliveryLocation:new p.p4(""),deliveryDate:new p.p4(""),PODetails:new p.p4([]),PORemarks:new p.p4(""),netPOValue:new p.p4(""),totalPPV:new p.p4(""),isActive:new p.p4(""),otherCharges:new p.p4({}),POStatus:new p.p4("Supplementary PO")})}ngOnInit(){this.getInitialData()}submit(){this.submitted=!0,this.form.enable();let i=this.form.value;i.PODetails=this.GRNDetailsArray,this.create(i)}create(i){this.spinner.show(),this.POServices.create(i).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(a.message),this.reset()})}reset(){this.form.reset(),this.GRNDetailsArray=[],this.GRNNumberId="",this.oldPONumber="",this.collection=this.GRNDetailsArray.length,this.getInitialData()}trackByFn(i,a){return a?._id}getInitialData(){this.spinner.show(),this.grnServices.getAllGRNForSupplementaryPO({}).subscribe(i=>{this.form.controls.POStatus.setValue("Supplementary PO"),this.form.controls.GRNDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.GRNNumbersArr=i.rows,this.spinner.hide()})}goodRequisitionById(){this.spinner.show(),this.grnServices.getById(this.GRNNumberId).subscribe(i=>{this.form.patchValue(i.PONumber),this.oldPONumber=i.PONumber.PONumber;let a={supplierName:i.supplier.supplierName,PONumber:i.PONumber.PONumber.replace("PO","PO/S"),supplier:i.supplier._id,GRNDate:this.utilityService.getFormatDate(i.GRNDate,"YYYY-MM-DD"),PODate:this.utilityService.getFormatDate(i.PODate,"YYYY-MM-DD"),POStatus:"Supplementary PO"};this.form.patchValue(a),this.GRNDetailsArray=i.PONumber.PODetails.map(o=>({...o,...i.GRNDetails.find(l=>l.item._id==o.item)})).filter(o=>o.GRNQty>o.POQty),this.GRNDetailsArray=this.GRNDetailsArray.map(o=>({POLineNumber:o.POLineNumber,item:o.item._id,UOM:o.UOM,primaryUnit:o.item.primaryUnit,POQty:o.GRNQty-o.POQty,standardRate:o.standardRate,purchaseRate:o.purchaseRate,lineValue:(o.GRNQty-o.POQty)*o.purchaseRate,linePPV:(o.GRNQty-o.POQty)*o.purchaseRate,deliveryDate:this.form.controls.GRNDate.value,gst:o.gst,igst:o.igst,cgst:o.cgst,sgst:o.sgst,lineRemarks:o.lineRemarks,receivedQty:o.receivedQty,invoicedQty:o.invoicedQty,balancedQty:o.balancedQty,canceledQty:o.canceledQty,markedForAlternateSupplier:o.markedForAlternateSupplier,lineStatus:o.lineStatus,itemCode:o.item.itemCode,itemName:o.item.itemName,itemDescription:o.item.itemDescription,orderInfoUOM:o.item.orderInfoUOM,unitConversion:o.item.conversionOfUnits,GRNQty:o.GRNQty})),this.collection=this.GRNDetailsArray.length,this.f.netPOValue.setValue(this.GRNDetailsArray.map(o=>o.lineValue).reduce((o,l)=>+o+ +l,0).toFixed(2)),this.spinner.hide()})}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=i.value}}onSort({column:i,direction:a}){this.headers.forEach(o=>{o.sortable!==i&&(o.direction="")}),this.GRNDetailsArray=""===a||""===i?this.GRNDetailsArray:[...this.GRNDetailsArray].sort((o,l)=>{let I="string"==typeof o[i]?o[i].toLowerCase():o[i],v="string"==typeof l[i]?l[i].toLowerCase():l[i];const D=I<v?-1:I>v?1:0;return"asc"===a?D:-D})}}return(c=y).\u0275fac=function(i){return new(i||c)(e.Y36(S.zP),e.Y36(U.x$),e.Y36(A.V),e.Y36(A.tI),e.Y36(A.kl),e.Y36(s.Ye))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-supplementary-po-form"]],viewQuery:function(i,a){if(1&i&&e.Gf(N.j,5),2&i){let o;e.iGM(o=e.CRH())&&(a.headers=o)}},decls:78,vars:25,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mb-2"],[1,"col"],[1,"row"],[1,"col-2"],["for","",1,"form-label"],[1,"text-danger"],["bindLabel","GRNNumber","bindValue","_id",3,"items","ngModel","ngModelOptions","clearable","ngModelChange","change"],["type","date","formControlName","GRNDate","readonly","",1,"form-control"],[1,"form-label"],["type","text","formControlName","supplierName","readonly","",1,"form-control"],["type","text","readonly","",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["type","date","formControlName","PODate","readonly","",1,"form-control"],["type","text","formControlName","PONumber","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","22rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","balancedQty",3,"sort"],["sortable","invoicedQty",3,"sort"],["sortable","GRNQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col","d-flex","justify-content-center","mb-3"],["appAccessControl","",3,"accessType"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""]],template:function(i,a){1&i&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Generate Supplementary PO"),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"label",10),e._uU(12,"GRN No."),e.TgZ(13,"span",11),e._uU(14,"*"),e.qZA()(),e.TgZ(15,"ng-select",12),e.NdJ("ngModelChange",function(l){return a.GRNNumberId=l})("change",function(){return a.goodRequisitionById()}),e.qZA()(),e.TgZ(16,"div",9)(17,"label",10),e._uU(18,"GRN Date"),e.qZA(),e._UZ(19,"input",13),e.qZA(),e.TgZ(20,"div",9)(21,"label",14),e._uU(22," Supplier Name"),e.TgZ(23,"span",11),e._uU(24,"*"),e.qZA()(),e._UZ(25,"input",15),e.qZA(),e.TgZ(26,"div",9)(27,"label",14),e._uU(28," PO No."),e.TgZ(29,"span",11),e._uU(30,"*"),e.qZA()(),e.TgZ(31,"input",16),e.NdJ("ngModelChange",function(l){return a.oldPONumber=l}),e.qZA()(),e.TgZ(32,"div",9)(33,"label",14),e._uU(34,"PO Date"),e.qZA(),e._UZ(35,"input",17),e.qZA(),e.TgZ(36,"div",9)(37,"label",14),e._uU(38,"Supplementary PO #"),e.qZA(),e._UZ(39,"input",18),e.qZA()()()()(),e._UZ(40,"hr",19),e.TgZ(41,"app-setting-header",20),e.NdJ("dataChange",function(l){return a.eventHeader(l)}),e.qZA(),e.TgZ(42,"div",21)(43,"table",22)(44,"thead",23)(45,"tr",24)(46,"th",25),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(47,"#"),e.qZA(),e.TgZ(48,"th",26),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(49,"Item Code"),e.qZA(),e.TgZ(50,"th",27),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(51,"Item Name"),e.qZA(),e.TgZ(52,"th",28),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(53,"Item Description"),e.qZA(),e.TgZ(54,"th",29),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(55,"Unit Conversion"),e.qZA(),e.TgZ(56,"th",29),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(57,"UoM"),e.qZA(),e.TgZ(58,"th",30),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(59,"PO Qty"),e.qZA(),e.TgZ(60,"th",31),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(61,"Purchase Rate"),e.qZA(),e.TgZ(62,"th",32),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(63,"Line Value"),e.qZA(),e.TgZ(64,"th",32),e.NdJ("sort",function(l){return a.onSort(l)}),e._uU(65,"Delivery Dt."),e.qZA()()(),e.TgZ(66,"tbody"),e.YNc(67,d,29,30,"tr",33),e.ALo(68,"slice"),e.ALo(69,"searchFi1ter"),e.qZA()()(),e._UZ(70,"hr",19),e.TgZ(71,"div",34)(72,"div")(73,"div",35)(74,"button",36),e.NdJ("click",function(){return a.reset()}),e._uU(75,"Reset"),e.qZA(),e.TgZ(76,"button",37),e.NdJ("click",function(){return a.submit()}),e._uU(77,"Save"),e.qZA()()()()()()),2&i&&(e.Q6J("formGroup",a.form),e.xp6(15),e.Q6J("items",a.GRNNumbersArr)("ngModel",a.GRNNumberId)("ngModelOptions",e.DdM(18,f))("clearable",!1),e.xp6(16),e.Q6J("ngModel",a.oldPONumber)("ngModelOptions",e.DdM(19,f)),e.xp6(10),e.Q6J("data",e.l5B(20,F,a.page,a.pageSize,a.collection,a.search)),e.xp6(26),e.Q6J("ngForOf",e.Dn7(68,11,e.xi3(69,15,a.GRNDetailsArray,a.search),(a.page-1)*a.pageSize,(a.page-1)*a.pageSize+a.pageSize))("ngForTrackBy",a.trackByFn),e.xp6(6),e.Q6J("accessType",a.rolePermissionActions.createAction))},dependencies:[s.sg,n.P,g._L,p.Fj,p.JJ,p.JL,p.sg,p.u,p.On,P.w9,N.j,r.J,s.OU,s.JJ,s.uU,t.G],encapsulation:2}),y})();var T=u(56208);const M=[{path:"",redirectTo:"form",pathMatch:"full"},{path:"form",component:b}];let Z=(()=>{var c;class y{}return(c=y).\u0275fac=function(i){return new(i||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[s.ez,m.Bz.forChild(M),T.m]}),y})()},73374:(O,R,u)=>{u.d(R,{IX:()=>N,SZ:()=>A,Aj:()=>G,vM:()=>e,zP:()=>S,Ee:()=>U});var s=u(37398),m=u(65879),p=u(2742);let N=(()=>{var n;class g{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:t=>`/stores/FGIN/update/${t}`,getByIdPath:t=>`/stores/FGIN/getById/${t}`,deletePath:t=>`/stores/FGIN/delete/${t}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports",getAllFGInventoryReportsPath:"/stores/FGIN/getAllFGInventoryReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,s.U)(t=>t))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,s.U)(t=>t))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,s.U)(t=>t))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,s.U)(t=>t))}getAllFGInventoryReports(r){return this.http.get(this.routes.getAllFGInventoryReportsPath,r).pipe((0,s.U)(t=>t))}}return(n=g).\u0275fac=function(r){return new(r||n)(m.LFG(p.sM))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),g})(),G=(()=>{var n;class g{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:t=>`/stores/gin/update/${t}`,getByIdPath:t=>`/stores/gin/getById/${t}`,deletePath:t=>`/stores/gin/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,s.U)(t=>t))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,s.U)(t=>t))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}}return(n=g).\u0275fac=function(r){return new(r||n)(m.LFG(p.sM))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),g})(),e=(()=>{var n;class g{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsIssue/update/${t}`,getByIdPath:t=>`/stores/goodsIssue/getById/${t}`,getGoodRequisitionByIdPath:t=>`/stores/goodsIssue/getGoodRequisitionById/${t}`,deletePath:t=>`/stores/goodsIssue/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,s.U)(d=>d))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,s.U)(t=>t))}}return(n=g).\u0275fac=function(r){return new(r||n)(m.LFG(p.sM))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),g})(),S=(()=>{var n;class g{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:t=>`/stores/grn/update/${t}`,updateOnCancelPath:t=>`/stores/grn/updateOnCancelGRN/${t}`,getByIdPath:t=>`/stores/grn/getById/${t}`,getPOBySupplierIdPath:t=>`/stores/grn/getPOBySupplierId/${t}`,getGRNDetailsByPOIdPath:t=>`/stores/grn/getGRNDetailsByPOId/${t}`,getGRNDetailsByIdPath:t=>`/stores/grn/getGRNDetailsById/${t}`,deletePath:t=>`/stores/grn/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,s.U)(t=>t))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,s.U)(t=>t))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}updateOnCancel(r,t){return this.http.put(this.routes.updateOnCancelPath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,s.U)(t=>t))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,s.U)(t=>t))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,s.U)(t=>t))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,s.U)(t=>t))}}return(n=g).\u0275fac=function(r){return new(r||n)(m.LFG(p.sM))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),g})(),U=(()=>{var n;class g{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllItemWiseReportsPath:"/stores/inventory/getAllItemWiseReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getStockPreparationShopReportsPath:"/stores/inventory/getStockPreparationShopReports",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",updateSPSInventoryPath:"/stores/inventory/updateSPSInventory",getAllStockPreparationShopPath:"/stores/inventory/getAllStockPreparationShop",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:t=>`/stores/inventory/getById/${t}`,deletePath:t=>`/stores/inventory/delete/${t}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,s.U)(t=>t))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllStockPreparationShop(r){return this.http.get(this.routes.getAllStockPreparationShopPath,r).pipe((0,s.U)(t=>t))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,s.U)(t=>t))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}getStockPreparationShopReports(r){return this.http.get(this.routes.getStockPreparationShopReportsPath,r).pipe((0,s.U)(t=>t))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,s.U)(t=>t))}updateSPSInventory(r){return this.http.put(this.routes.updateSPSInventoryPath,r).pipe((0,s.U)(t=>t))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}}return(n=g).\u0275fac=function(r){return new(r||n)(m.LFG(p.sM))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),g})(),A=(()=>{var n;class g{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsTransferResponse/update/${t}`,getByIdPath:t=>`/stores/goodsTransferResponse/getById/${t}`,getItemByGTRequestIdPath:t=>`/stores/goodsTransferResponse/getItemByGTRequestId/${t}`,deletePath:t=>`/stores/goodsTransferResponse/delete/${t}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,s.U)(t=>t))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,s.U)(t=>t))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,s.U)(t=>t))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,s.U)(t=>t))}updateOnResolveDiscrepancy(r,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),t).pipe((0,s.U)(d=>d))}update(r,t){return this.http.put(this.routes.updatePath(r),t).pipe((0,s.U)(d=>d))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,s.U)(t=>t))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,s.U)(t=>t))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,s.U)(t=>t))}}return(n=g).\u0275fac=function(r){return new(r||n)(m.LFG(p.sM))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),g})()}}]);