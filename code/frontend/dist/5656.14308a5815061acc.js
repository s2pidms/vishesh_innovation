"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5656],{55656:(f,d,n)=>{n.r(d),n.d(d,{FGIEModule:()=>O});var r=n(96814),u=n(1076),o=n(60095),R=n(21631),y=n(22096),m=n(3959),A=n(25116),s=n(65879),P=n(73374),l=n(98977),U=n(16897),e=n(50363),t=n(53421),c=n(14906),N=n(84231);function v(p,b){if(1&p&&(s.TgZ(0,"option",24),s._uU(1),s.ALo(2,"SalesUOMUnitMaster"),s.qZA()),2&p){const i=b.$implicit;s.Q6J("value",i.value),s.xp6(1),s.hij(" ",s.lcZ(2,2,i.label)," ")}}let D=(()=>{class p{constructor(i,a,h,g,I,T,k){this.finishedGoodsInwardEntryServices=i,this.activatedRoute=a,this.spinner=h,this.toastService=g,this.validationService=I,this.utilityService=T,this.router=k,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.rolePermissionActions=A.a1,this.action="",this.submitted=!1,this.allData=[],this.SKUOption=[],this.UOMOption=[],this.skuDetailsArray=[],this.selectedSKU={},this.form=new o.nJ({_id:new o.p4(null),FGINNo:new o.p4(null),FGINDate:new o.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[o.kI.required]),SKUId:new o.p4(null,[o.kI.required]),SKUNo:new o.p4(null),SKUName:new o.p4(null),SKUDescription:new o.p4(null,[o.kI.required]),UOM:new o.p4(null,[o.kI.required]),manufacturingDate:new o.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[o.kI.required]),expiryDate:new o.p4(null),FGINQuantity:new o.p4(null,[o.kI.required]),batchNo:new o.p4(null,[o.kI.required]),status:new o.p4("Created")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}trackByFn(i,a){return a?._id}getInitialData(){this.spinner.show(),this.finishedGoodsInwardEntryServices.getAllMasterData({}).subscribe(i=>{this.allData=i.SKUMasters,this.form.controls.status.setValue("Created"),this.SKUOption=i.SKUMasters.map(a=>({label:a.SKUName,skuNum:a.SKUNo,value:a._id,skuDescription:a.SKUDescription,uom:a.primaryUnit,shelfLife:a.shelfLife})),this.form.controls.FGINNo.setValue(i.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,R.z)(a=>(this.action=a.action,a.id?this.finishedGoodsInwardEntryServices.getById(a.id):(0,y.of)({})))).subscribe(a=>{this.spinner.hide(),0!=Object.keys(a).length&&(this.form.patchValue(a),"edit"!=this.action&&this.form.disable())})})}submit(){this.submitted=!0,this.validationService.checkErrors(this.form,m.JH)||this.create(this.form.value)}create(i){this.spinner.show(),this.finishedGoodsInwardEntryServices.create(i).subscribe(a=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(a.message),this.reset()})}reset(){this.form.reset(),this.skuDetailsArray=[],this.collection=this.skuDetailsArray.length,this.form.controls.FGINDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.manufacturingDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue("Created")}setExpiryDate(){this.f.manufacturingDate.value>this.f.expiryDate.value&&(this.toastService.warning("ExpiryDate Should be Greater Than ManufacturingDate !"),this.f.expiryDate.reset())}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value;break;case"EXCEL":default:break;case"PAGE":this.page=i.value}}setDetails(i){this.selectedSKU=i,this.UOMOption=[{label:i?.uom,value:i?.uom}],this.form.controls.UOM.setValue(i?.uom),this.form.controls.SKUDescription.setValue(i?.skuDescription),this.form.controls.SKUId.setValue(i?.value),this.form.controls.SKUName.setValue(i?.label),this.form.controls.SKUNo.setValue(i?.skuNum),i.shelfLife&&this.form.controls.expiryDate.setValue(this.utilityService.getAddFormat(this.form.value.manufacturingDate,i.shelfLife))}changeMFG(){this.selectedSKU.shelfLife&&this.form.controls.expiryDate.setValue(this.utilityService.getAddFormat(this.form.value.manufacturingDate,this.selectedSKU.shelfLife))}addFGINInfo(){if(this.validationService.checkErrors(this.form,m.JH))return;let i=this.SKUOption.find(g=>g.value==this.form.controls.SKUId.value)?.skuNum??"",a=this.SKUOption.find(g=>g.value==this.form.controls.SKUId.value)?.label??"",h=this.form.value;h.SKUTableName=a,h.SKUTableNum=i,delete h.FGINDetails,this.skuDetailsArray.push(h),this.collection=this.skuDetailsArray.length,this.form.reset()}deleteDetails(i){this.skuDetailsArray.splice(i,1)}static#t=this.\u0275fac=function(a){return new(a||p)(s.Y36(P.IX),s.Y36(u.gz),s.Y36(l.V),s.Y36(l.kl),s.Y36(U.RJ),s.Y36(l.tI),s.Y36(u.F0))};static#e=this.\u0275cmp=s.Xpm({type:p,selectors:[["app-form"]],decls:69,vars:14,consts:[[3,"formGroup"],[1,"row","justify-content-center","form-page"],[1,"col-md-11","card-form"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row","mb-4"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["type","date","formControlName","FGINDate","readonly","",1,"form-control"],["bindLabel","skuNum","bindValue","value","formControlName","SKUId",3,"items","clearable","change"],["bindLabel","label","bindValue","value","formControlName","SKUId",3,"items","clearable","change"],["type","text","formControlName","SKUDescription","readonly","",1,"form-control"],["formControlName","UOM",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","number","formControlName","FGINQuantity",1,"form-control"],["type","text","formControlName","batchNo",1,"form-control"],["type","date","formControlName","manufacturingDate",1,"form-control",3,"change"],[1,"row","justify-content-center","py-3"],[1,"col-4","d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","me-4",3,"click"],["appAccessControl","","type","button",1,"btn","btn-primary",3,"accessType","click"],[3,"value"]],template:function(a,h){1&a&&(s.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label"),s._uU(6,"Finished Goods Inward Entry"),s.qZA()()(),s.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),s._uU(11,"FG Inward Date "),s.TgZ(12,"span",9),s._uU(13,"*"),s.qZA()(),s._UZ(14,"input",10),s.qZA(),s.TgZ(15,"div",7)(16,"label",8),s._uU(17,"SKU No "),s.TgZ(18,"span",9),s._uU(19,"*"),s.qZA()(),s.TgZ(20,"ng-select",11),s.NdJ("change",function(I){return h.setDetails(I)}),s.qZA()(),s.TgZ(21,"div",7)(22,"label",8),s._uU(23),s.ALo(24,"labelTranslate"),s.TgZ(25,"span",9),s._uU(26,"*"),s.qZA()(),s.TgZ(27,"ng-select",12),s.NdJ("change",function(I){return h.setDetails(I)}),s.qZA()(),s.TgZ(28,"div",7)(29,"label",8),s._uU(30),s.ALo(31,"labelTranslate"),s.TgZ(32,"span",9),s._uU(33,"*"),s.qZA()(),s._UZ(34,"input",13),s.qZA()(),s.TgZ(35,"div",6)(36,"div",7)(37,"label",8),s._uU(38,"UoM "),s.TgZ(39,"span",9),s._uU(40,"*"),s.qZA()(),s.TgZ(41,"select",14)(42,"option",15),s._uU(43,"Select UoM"),s.qZA(),s.YNc(44,v,3,4,"option",16),s.qZA()(),s.TgZ(45,"div",7)(46,"label",8),s._uU(47,"Inward Quantity "),s.TgZ(48,"span",9),s._uU(49,"*"),s.qZA()(),s._UZ(50,"input",17),s.qZA(),s.TgZ(51,"div",7)(52,"label",8),s._uU(53,"Batch No./Lot No. "),s.TgZ(54,"span",9),s._uU(55,"*"),s.qZA()(),s._UZ(56,"input",18),s.qZA(),s.TgZ(57,"div",7)(58,"label",8),s._uU(59,"Batch Date/MFG Date "),s.TgZ(60,"span",9),s._uU(61,"*"),s.qZA()(),s.TgZ(62,"input",19),s.NdJ("change",function(){return h.changeMFG()}),s.qZA()()(),s.TgZ(63,"div",20)(64,"div",21)(65,"button",22),s.NdJ("click",function(){return h.reset()}),s._uU(66,"Reset"),s.qZA(),s.TgZ(67,"button",23),s.NdJ("click",function(){return h.submit()}),s._uU(68," Save "),s.qZA()()()()()()()),2&a&&(s.Q6J("formGroup",h.form),s.xp6(20),s.Q6J("items",h.SKUOption)("clearable",!1),s.xp6(3),s.hij("",s.lcZ(24,10,"SKU Name")," "),s.xp6(4),s.Q6J("items",h.SKUOption)("clearable",!1),s.xp6(3),s.hij("",s.lcZ(31,12,"SKU Description")," "),s.xp6(12),s.Q6J("value",null),s.xp6(2),s.Q6J("ngForOf",h.UOMOption),s.xp6(23),s.Q6J("accessType",h.rolePermissionActions.createAction))},dependencies:[r.sg,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.sg,o.u,e.w9,t.J,c.c,N.Q],encapsulation:2})}return p})();var F=n(43818);const G=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class p{constructor(i){this.router=i,this.page=1,this.pageSize=10,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=A.a1}ngOnInit(){}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value;break;case"EXCEL":default:break;case"PAGE":this.page=i.value}}onSort({column:i,direction:a}){this.headers.forEach(h=>{h.sortable!==i&&(h.direction="")}),this.column=i,this.direction="asc"==a?1:-1}static#t=this.\u0275fac=function(a){return new(a||p)(s.Y36(u.F0))};static#e=this.\u0275cmp=s.Xpm({type:p,selectors:[["app-list"]],viewQuery:function(a,h){if(1&a&&s.Gf(F.j,5),2&a){let g;s.iGM(g=s.CRH())&&(h.headers=g)}},decls:0,vars:0,template:function(a,h){},encapsulation:2})}return p})()},{path:"form",component:D}];let S=(()=>{class p{static#t=this.\u0275fac=function(a){return new(a||p)};static#e=this.\u0275mod=s.oAB({type:p});static#s=this.\u0275inj=s.cJS({imports:[u.Bz.forChild(G),u.Bz]})}return p})();var M=n(56208);let O=(()=>{class p{static#t=this.\u0275fac=function(a){return new(a||p)};static#e=this.\u0275mod=s.oAB({type:p});static#s=this.\u0275inj=s.cJS({imports:[r.ez,S,M.m]})}return p})()},68922:(f,d,n)=>{n.d(d,{T:()=>r});const r=[{message:"Location is Required",key:"deliveryLocation"}]},3959:(f,d,n)=>{n.d(d,{Gu:()=>R,kq:()=>o,JH:()=>u,Nh:()=>y,m5:()=>s,sg:()=>m}),n(68922);const u=[{message:"SKU No. is Required",key:"SKUId"},{message:"FGIN Quantity is Required",key:"FGINQuantity"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Manufacturing Date is Required",key:"manufacturingDate"},{message:"Batch No. is Required",key:"batchNo"}],o=[{message:"SKU No. is Required",key:"SKU"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Correction Category is Required",key:"correctionCategory"},{message:"Source Batch (From) is Required",key:"sourceBatch"}],R=[{message:"Process Name is Required",key:"processName"},{message:"Machine Name is Required",key:"machineName"},{message:"Production Date is Required",key:"productionDate"},{message:"Production Shift is Required",key:"productionShift"}],y=[{message:"Item Code is Required",key:"itemCode"},{message:"Item Name is Required",key:"itemName"},{message:"Item Description is Required",key:"itemDescription"},{message:"UoM is Required",key:"UoM"}],m=[{message:"Job Card No. is Required",key:"jobCard"},{message:"Batch Output Qty is Required",key:"batchOutputQty"}],s=[{message:"Job Card No. is Required",key:"jobCard"}]},73374:(f,d,n)=>{n.d(d,{IX:()=>R,SZ:()=>P,Aj:()=>y,vM:()=>m,zP:()=>A,Ee:()=>s});var r=n(37398),u=n(65879),o=n(98977);let R=(()=>{class l{constructor(e){this.http=e,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:t=>`/stores/FGIN/update/${t}`,getByIdPath:t=>`/stores/FGIN/getById/${t}`,deletePath:t=>`/stores/FGIN/delete/${t}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}getAllFGINMasterData(e){return this.http.get(this.routes.getAllFGINMasterDataPath,e).pipe((0,r.U)(t=>t))}getAllFGINSummaryReports(e){return this.http.get(this.routes.getAllFGINSummaryReportsPath,e).pipe((0,r.U)(t=>t))}getAllFGINLocationWiseReports(e){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllFGINByProductCategory(e){return this.http.get(this.routes.getAllFGINByProductCategoryPath,e).pipe((0,r.U)(t=>t))}getAllFGINAllLocationReports(e){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(c=>c))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}bulkCreate(e){return this.http.post(this.routes.bulkCreatePath,e).pipe((0,r.U)(t=>t))}getAllFGINValueFinanceReports(e){return this.http.get(this.routes.getAllFGINValueReportsPath,e).pipe((0,r.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||l)(u.LFG(o.sM))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),y=(()=>{class l{constructor(e){this.http=e,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:t=>`/stores/gin/update/${t}`,getByIdPath:t=>`/stores/gin/getById/${t}`,deletePath:t=>`/stores/gin/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(c=>c))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getReorderLevelReports(e){return this.http.get(this.routes.getReorderLevelReportsPath,e).pipe((0,r.U)(t=>t))}getStockAgingReports(e){return this.http.get(this.routes.getStockAgingReportsPath,e).pipe((0,r.U)(t=>t))}getAllInventoryLocationWiseReports(e){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,e).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||l)(u.LFG(o.sM))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),m=(()=>{class l{constructor(e){this.http=e,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsIssue/update/${t}`,getByIdPath:t=>`/stores/goodsIssue/getById/${t}`,getGoodRequisitionByIdPath:t=>`/stores/goodsIssue/getGoodRequisitionById/${t}`,deletePath:t=>`/stores/goodsIssue/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}updateOnResolveDiscrepancy(e,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(e),t).pipe((0,r.U)(c=>c))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(c=>c))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getGoodRequisitionById(e){return this.http.get(this.routes.getGoodRequisitionByIdPath(e)).pipe((0,r.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||l)(u.LFG(o.sM))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),A=(()=>{class l{constructor(e){this.http=e,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:t=>`/stores/grn/update/${t}`,updateOnCancelPath:t=>`/stores/grn/updateOnCancelGRN/${t}`,getByIdPath:t=>`/stores/grn/getById/${t}`,getPOBySupplierIdPath:t=>`/stores/grn/getPOBySupplierId/${t}`,getGRNDetailsByPOIdPath:t=>`/stores/grn/getGRNDetailsByPOId/${t}`,getGRNDetailsByIdPath:t=>`/stores/grn/getGRNDetailsById/${t}`,deletePath:t=>`/stores/grn/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllSupplierWiseReports(e){return this.http.get(this.routes.getAllSupplierWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllGRNReports(e){return this.http.get(this.routes.getAllGRNReportsPath,e).pipe((0,r.U)(t=>t))}getAllItemWiseReports(e){return this.http.get(this.routes.getAllItemWiseReportsPath,e).pipe((0,r.U)(t=>t))}getGRNDiscrepancyReports(e){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,e).pipe((0,r.U)(t=>t))}excelDownloadReports(e){return this.http.getFile(this.routes.excelDownloadReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(c=>c))}updateOnCancel(e,t){return this.http.put(this.routes.updateOnCancelPath(e),t).pipe((0,r.U)(c=>c))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}getPOBySupplierId(e){return this.http.get(this.routes.getPOBySupplierIdPath(e)).pipe((0,r.U)(t=>t))}getGRNDetailsByPOId(e){return this.http.get(this.routes.getGRNDetailsByPOIdPath(e)).pipe((0,r.U)(t=>t))}getGRNDetailsById(e){return this.http.get(this.routes.getGRNDetailsByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getAllGRNForSupplementaryPO(e){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,e).pipe((0,r.U)(t=>t))}getAllGRNLocationWiseReports(e){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,e).pipe((0,r.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||l)(u.LFG(o.sM))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),s=(()=>{class l{constructor(e){this.http=e,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:t=>`/stores/inventory/getById/${t}`,deletePath:t=>`/stores/inventory/delete/${t}`}}uploadInventoryFile(e){return this.http.post(this.routes.uploadInventoryFilePath,e).pipe((0,r.U)(t=>t))}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllLocationSupplierItemWiseReports(e){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllReport(e){return this.http.get(this.routes.getAllReportPath,e).pipe((0,r.U)(t=>t))}getAllMasterFilterData(e){return this.http.get(this.routes.getAllFilterDataPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e){return this.http.put(this.routes.updatePath,e).pipe((0,r.U)(t=>t))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||l)(u.LFG(o.sM))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})(),P=(()=>{class l{constructor(e){this.http=e,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsTransferResponse/update/${t}`,getByIdPath:t=>`/stores/goodsTransferResponse/getById/${t}`,getItemByGTRequestIdPath:t=>`/stores/goodsTransferResponse/getItemByGTRequestId/${t}`,deletePath:t=>`/stores/goodsTransferResponse/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}updateOnResolveDiscrepancy(e,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(e),t).pipe((0,r.U)(c=>c))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(c=>c))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getItemByGTRequestId(e){return this.http.get(this.routes.getItemByGTRequestIdPath(e)).pipe((0,r.U)(t=>t))}static#t=this.\u0275fac=function(t){return new(t||l)(u.LFG(o.sM))};static#e=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);