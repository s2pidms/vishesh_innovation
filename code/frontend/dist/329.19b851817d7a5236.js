"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[329],{30329:(ie,v,c)=>{c.r(v),c.d(v,{UploadDataModule:()=>ne});var p=c(96814),h=c(1076),g=c(25116),e=c(65879),m=c(2742),S=c(39029);function M(s,i){if(1&s){const l=e.EpF();e.TgZ(0,"div",3)(1,"div",4),e.NdJ("click",function(){const o=e.CHM(l).$implicit,r=e.oxw();return e.KtG(r.navigateTo(o.url,o.disabled,o.displayName))}),e.TgZ(2,"div",5)(3,"h5",6),e._uU(4),e.qZA()()()()}if(2&s){const l=i.$implicit;e.xp6(1),e.Q6J("ngClass",l.disabled?"disabled":""),e.xp6(3),e.Oqu(l.displayName)}}let y=(()=>{var s;class i{constructor(t,a,o,r,d,u){this.menuTitleService=t,this.appGlobalService=a,this.subModulesService=o,this.spinner=r,this.storageService=d,this.router=u,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:g.Cv.MASTER}).subscribe(a=>{this.cards=a?.rows.find(d=>"Uploads Master"==d.title),this.cardsData=this.cards.items.sort((d,u)=>d.order-u.order);let o=5-this.cards.items.length;if(o>0)for(var r=0;r<o;r++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(t,a,o){let r={title:o,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",r),a||(this.menuTitleService.set(r),this.router.navigate([t]))}}return(s=i).\u0275fac=function(t){return new(t||s)(e.Y36(m.Uh),e.Y36(m.P0),e.Y36(S.M5),e.Y36(m.V),e.Y36(m.V1),e.Y36(h.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-upload-data"]],decls:3,vars:1,consts:[[1,"container-fluid","tabs-card-page",2,"width","88.5%"],[1,"row","row-cols-1","row-cols-md-5"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,M,5,2,"div",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngForOf",a.cardsData))},dependencies:[p.mk,p.sg],encapsulation:2}),i})();var P=c(56208),x=c(43818),n=c(93383),b=c(37285),U=c(88059),D=c(95346),f=c(16113);function F(s,i){if(1&s){const l=e.EpF();e.TgZ(0,"th",17),e.NdJ("sort",function(a){e.CHM(l);const o=e.oxw();return e.KtG(o.onSort(a))}),e._uU(1),e.qZA()}if(2&s){const l=i.$implicit;e.Tol(l.class),e.Q6J("sortable",l.value),e.xp6(1),e.hij(" ",l.label," ")}}function I(s,i){if(1&s&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&s){const l=i.$implicit,t=e.oxw().$implicit;e.Tol(l.class),e.xp6(1),e.hij(" ",t[l.value]," ")}}function _(s,i){if(1&s&&(e.TgZ(0,"tr"),e.YNc(1,I,2,3,"td",18),e.qZA()),2&s){const l=e.oxw();e.xp6(1),e.Q6J("ngForOf",l.tableHead)}}const w=function(s,i,l,t){return{page:s,pageSize:i,collection:l,search:t}};let A=(()=>{var s;class i{constructor(t,a){this.activeModal=t,this.exportExcelService=a,this.title="",this.type="",this.inValidRecords=[],this.tableHead=[],this.btnDisable=!1,this.page=1,this.pageSize=9,this.collection=0,this.search="",this.column="createdAt",this.direction=-1}ngOnInit(){this.collection=this.inValidRecords.length}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value;break;case"EXCEL":const o={Supplier:this.excelDownloadForSupplier,Items:this.excelDownloadForItem,Customer:this.excelDownloadForCustomer,InventoryCorrection:this.excelDownloadForInventory,SKUMaster:this.excelDownloadForSKU,PPICInventoryCorrection:this.excelDownloadForPPICInventory,JobWorkItemMaster:this.excelDownloadForJobWorkItemMaster,PurchaseRegisterEntry:this.excelDownloadForPurchaseRegisterEntry,JobWorkerMaster:this.excelDownloadForJobWorkerMaster,Transporter:this.excelDownloadForTransporterMaster,SaleSAC:this.excelDownloadForSalesSAC,SaleHSN:this.excelDownloadForSalesHSN,HSN:this.excelDownloadForPurchaseHSN,SAC:this.excelDownloadForPurchaseSAC,SpecificationMaster:this.excelDownloadForSpecificationMaster,SKUMaterial:this.excelDownloadForSKUMaterialMaster,SKUDimensions:this.excelDownloadForSKUDimensionMaster,Asset:this.excelDownloadForAssetMaster,FGIN:this.excelDownloadForFGIN,Employee:this.excelDownloadForEmployeeMaster,RMSpecification:this.excelDownloadForRMSpecification,ProductSpecification:this.excelDownloadForProductSpecification}[this.type];o&&o.call(this);break;case"PAGE":this.page=t.value}}excelDownloadForInventory(){this.exportExcelService.exportExcel((0,n.T2)(this.inValidRecords))}excelDownloadForSKU(){this.exportExcelService.exportExcel((0,n.iC)(this.inValidRecords))}excelDownloadForItem(){this.exportExcelService.exportExcel((0,n.yV)(this.inValidRecords))}excelDownloadForProductSpecification(){this.exportExcelService.exportExcel((0,n.PZ)(this.inValidRecords))}excelDownloadForRMSpecification(){this.exportExcelService.exportExcel((0,n.f1)(this.inValidRecords))}excelDownloadForCustomer(){this.exportExcelService.exportExcel((0,n.ti)(this.inValidRecords))}excelDownloadForSupplier(){this.exportExcelService.exportExcel((0,n.Nd)(this.inValidRecords))}excelDownloadForPPICInventory(){this.exportExcelService.exportExcel((0,n.DQ)(this.inValidRecords))}excelDownloadForJobWorkItemMaster(){this.exportExcelService.exportExcel((0,n.J6)(this.inValidRecords))}excelDownloadForPurchaseRegisterEntry(){this.exportExcelService.exportExcel((0,n.uT)(this.inValidRecords))}excelDownloadForJobWorkerMaster(){this.exportExcelService.exportExcel((0,n.k2)(this.inValidRecords))}excelDownloadForTransporterMaster(){this.exportExcelService.exportExcel((0,n.h6)(this.inValidRecords))}excelDownloadForSalesSAC(){this.exportExcelService.exportExcel((0,n.i)(this.inValidRecords))}excelDownloadForSalesHSN(){this.exportExcelService.exportExcel((0,n.Df)(this.inValidRecords))}excelDownloadForPurchaseHSN(){this.exportExcelService.exportExcel((0,n.XZ)(this.inValidRecords))}excelDownloadForPurchaseSAC(){this.exportExcelService.exportExcel((0,n.Ar)(this.inValidRecords))}excelDownloadForSpecificationMaster(){this.exportExcelService.exportExcel((0,n.AV)(this.inValidRecords))}excelDownloadForSKUMaterialMaster(){this.exportExcelService.exportExcel((0,n.Dl)(this.inValidRecords))}excelDownloadForSKUDimensionMaster(){this.exportExcelService.exportExcel((0,n.Ef)(this.inValidRecords))}excelDownloadForAssetMaster(){this.exportExcelService.exportExcel((0,n.WR)(this.inValidRecords))}excelDownloadForFGIN(){this.exportExcelService.exportExcel((0,n.hd)(this.inValidRecords))}excelDownloadForEmployeeMaster(){this.exportExcelService.exportExcel((0,n.iR)(this.inValidRecords))}onSort({column:t,direction:a}){this.headers.forEach(o=>{o.sortable!==t&&(o.direction="")}),this.inValidRecords=""===a||""===t?this.inValidRecords:[...this.inValidRecords].sort((o,r)=>{let d="string"==typeof o[t]?o[t].toLowerCase():o[t],u="string"==typeof r[t]?r[t].toLowerCase():r[t];const C=d<u?-1:d>u?1:0;return"asc"===a?C:-C})}}return(s=i).\u0275fac=function(t){return new(t||s)(e.Y36(b.Kz),e.Y36(m.Ol))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-custom-upload-details"]],viewQuery:function(t,a){if(1&t&&e.Gf(x.j,5),2&t){let o;e.iGM(o=e.CRH())&&(a.headers=o)}},inputs:{title:"title",type:"type",inValidRecords:"inValidRecords",tableHead:"tableHead"},decls:23,vars:18,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","px-0","mt-4"],[1,"px-5","mt-0"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","33rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[3,"class","sortable","sort",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"sortable","sort"],[3,"class",4,"ngFor","ngForOf"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.ALo(4,"separateWords"),e.qZA(),e.TgZ(5,"div")(6,"button",3),e.NdJ("click",function(){return a.activeModal.close()}),e._UZ(7,"i",4),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"app-setting-header",10),e.NdJ("dataChange",function(r){return a.eventHeader(r)}),e.qZA()(),e.TgZ(14,"div",11)(15,"table",12)(16,"thead",13)(17,"tr",14),e.YNc(18,F,2,4,"th",15),e.qZA()(),e.TgZ(19,"tbody"),e.YNc(20,_,2,1,"tr",16),e.ALo(21,"slice"),e.ALo(22,"searchFi1ter"),e.qZA()()()()()()()()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,4,a.title)),e.xp6(10),e.Q6J("data",e.l5B(13,w,a.page,a.pageSize,a.collection,a.search)),e.xp6(5),e.Q6J("ngForOf",a.tableHead),e.xp6(2),e.Q6J("ngForOf",e.Dn7(21,6,e.xi3(22,10,a.inValidRecords,a.search),(a.page-1)*a.pageSize,(a.page-1)*a.pageSize+a.pageSize)))},dependencies:[p.sg,U.P,x.j,p.OU,D.G,f.E],encapsulation:2}),i})();var N=c(77203);const E=[{value:"supplierName",label:"Supplier Name",class:"text-start"},{value:"supplierGST",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],R=[{value:"itemName",label:"Item Name",class:"text-start"},{value:"hsn",label:"HSN Code",class:""},{value:"message",label:"Message",class:"text-start"}],T=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],O=[{value:"supplierCode",label:"Supplier Code",class:""},{value:"itemCode",label:"Item Code",class:""},{value:"message",label:"Message",class:"text-start"}],H=[{value:"empFirstName",label:"Emp First Name",class:"text-start"},{value:"empLastName",label:"Emp Last Name",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],V=[{value:"SKUName",label:"SKU Name",class:"text-start"},{value:"customerName",label:"Customer Name",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],k=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],Z=[{value:"assetName",label:"Asset Name",class:"text-start"},{value:"assetDescription",label:"Asset Description",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],J=[{value:"SKUNo",label:"SKU No.",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],K=[{value:"SKUNo",label:"SKU No.",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],G=[{value:"characteristic",label:"Inspection Parameter",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],W=[{value:"goodsDescription",label:"Description of Goods",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],j=[{value:"serviceDescription",label:"Description of Service",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],Y=[{value:"goodsDescription",label:"Description of Goods",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],z=[{value:"serviceDescription",label:"Description of Service",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],Q=[{value:"name",label:"Transporter Name",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],L=[{value:"supplierName",label:"Supplier Name",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],$=[{value:"jobWorkItemName",label:"Job Work Item Name",class:"text-start"},{value:"jobWorkItemDescription",label:"Job Work Item Description",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],B=[{value:"jobWorkerName",label:"Job Worker Name",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],q=[{value:"supplierCode",label:"Supplier Code",class:""},{value:"itemCode",label:"Item Code",class:""},{value:"message",label:"Message",class:"text-start"}],X=[{value:"itemCategory",label:"Item Category",class:""},{value:"itemCode",label:"Item Code",class:"text-start"},{value:"message",label:"Message",class:"text-start"}],ee=[{value:"productCategory",label:"Product Category",class:"text-start"},{value:"SKUNo",label:"SKU Code",class:"text-start"},{value:"message",label:"Message",class:"text-start"}];var te=c(48720),ae=c(53421);function se(s,i){1&s&&e._UZ(0,"img",27)}function oe(s,i){1&s&&(e.TgZ(0,"div",28)(1,"div",29),e._UZ(2,"img",30),e.qZA(),e.TgZ(3,"div",31)(4,"span"),e._uU(5,"Upload Successful"),e.qZA()()())}const le=[{path:"tab_list",component:y},{path:"form/:uploadParameter",component:(()=>{var s;class i{constructor(t,a,o,r,d){this.spinner=t,this.suppliersService=a,this.toastService=o,this.modalService=r,this.activatedRoute=d,this.file=null,this.fileName="",this.fileSuccessUpload=!1,this.rolePermissionActions=g.a1,this.inValidRecords=[],this.validRecords=[],this.tableHead=[],this.type=""}ngOnInit(){this.type=this.activatedRoute.snapshot.paramMap.get("uploadParameter"),this.tableHead={Supplier:E,Items:R,Customer:T,InventoryCorrection:O,Employee:H,SKUMaster:V,FGIN:k,Asset:Z,SKUDimensions:J,SKUMaterial:K,SpecificationMaster:G,HSN:W,SAC:j,SaleHSN:Y,SaleSAC:z,Transporter:Q,JobWorkerMaster:B,PurchaseRegisterEntry:L,JobWorkItemMaster:$,PPICInventoryCorrection:q,RMSpecification:X,ProductSpecification:ee}[this.type]||null}fileChosen(t){if(t.target.value){if(t.target.files[0].size>5e5)return void this.toastService.warning("Unable to upload file of size more than 500KB");this.file=t.target.files[0],this.fileName=this.file.name}}removeFile(){this.fileName="",this.file="",this.inValidRecords=[],this.validRecords=[]}submit(){let t=new FormData;this.file&&"object"==typeof this.file?(t.append("key","excelData"),t.append("collectionName",this.type),t.append("uploadFile",this.file,this.file.name),this.spinner.show(),this.suppliersService.uploadAndCheckCSVFile(t).subscribe(a=>{this.inValidRecords=a?.inValidRecords,this.validRecords=a?.validRecords,this.inValidRecords?.length>0?this.openInvalidSupplierRecordsModal():this.openValidRecordsModal(),this.spinner.hide()})):this.toastService.warning("Please Upload File")}uploadData(){this.spinner.show(),this.suppliersService.bulkInsertByCSVFile({collectionName:this.type,validRecords:this.validRecords}).subscribe(a=>{console.log("success",a),this.toastService.success(a.message),this.removeFile(),this.spinner.hide()})}downloadCSVFormat(){const a={Supplier:{path:"./assets/upload-data-excel-csv/supplier.csv",filename:"Upload Suppliers"},Items:{path:"./assets/upload-data-excel-csv/item.csv",filename:"Upload Items"},Customer:{path:"./assets/upload-data-excel-csv/customer.csv",filename:"Upload Customer"},InventoryCorrection:{path:"./assets/upload-data-excel-csv/inventory.csv",filename:"Validate Inventory"},Employee:{path:"./assets/upload-data-excel-csv/employee.csv",filename:"Upload Employee"},SKUMaster:{path:"./assets/upload-data-excel-csv/SKU.csv",filename:"Upload SKU Master"},FGIN:{path:"./assets/upload-data-excel-csv/FGIN.csv",filename:"Upload FGIN"},Asset:{path:"./assets/upload-data-excel-csv/asset.csv",filename:"Upload Asset"},SKUDimensions:{path:"./assets/upload-data-excel-csv/SKUDimension.csv",filename:"Upload SKU Dimensions"},SKUMaterial:{path:"./assets/upload-data-excel-csv/SKUMaterial.csv",filename:"Upload SKU Material"},SpecificationMaster:{path:"./assets/upload-data-excel-csv/specificationMaster.csv",filename:"Upload Specification Master"},HSN:{path:"./assets/upload-data-excel-csv/HSN.csv",filename:"Upload HSN Master"},SAC:{path:"./assets/upload-data-excel-csv/SAC.csv",filename:"Upload SAC Master"},SaleHSN:{path:"./assets/upload-data-excel-csv/salesHSN.csv",filename:"Upload Sales HSN Master"},SaleSAC:{path:"./assets/upload-data-excel-csv/salesSAC.csv",filename:"Upload Sales SAC Master"},Transporter:{path:"./assets/upload-data-excel-csv/transporter.csv",filename:"Upload Transporter Master"},JobWorkerMaster:{path:"./assets/upload-data-excel-csv/jobWorker.csv",filename:"Upload Job Worker Master"},PurchaseRegisterEntry:{path:"./assets/upload-data-excel-csv/purchaseRegisterEntry.csv",filename:"Upload Purchase Register Entry"},JobWorkItemMaster:{path:"./assets/upload-data-excel-csv/jobWorkItem.csv",filename:"Upload Job Work Item Master"},PPICInventoryCorrection:{path:"./assets/upload-data-excel-csv/PPICInventory.csv",filename:"Upload PPIC Inventory"},RMSpecification:{path:"./assets/upload-data-excel-csv/RMSpecification.csv",filename:"Upload RM Specification Master"},ProductSpecification:{path:"./assets/upload-data-excel-csv/ProdSpecification.csv",filename:"Upload Product Specification Master"}}[this.type];if(a){const o=document.createElement("a");o.href=a.path,o.download=`${a.filename}.csv`,o.click(),document.body.removeChild(o)}}openInvalidSupplierRecordsModal(){const t=this.modalService.open(A,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});t.componentInstance.title=`Invalid ${"InventoryCorrection"==this.type?"Validate Inventory":this.type} Records`,t.componentInstance.type=this.type,t.componentInstance.tableHead=this.tableHead,t.componentInstance.inValidRecords=this.inValidRecords}openValidRecordsModal(){const t=this.modalService.open(N.er,{centered:!0,size:"sm",backdrop:"static",keyboard:!1});t.componentInstance.heading="Upload Data",t.componentInstance.cancelText=`Do You Want to Upload ${"InventoryCorrection"==this.type?"Validate Inventory":this.type} Records ?`,t.result.then(a=>{"Yes"==a&&this.uploadData()},a=>{})}}return(s=i).\u0275fac=function(t){return new(t||s)(e.Y36(m.V),e.Y36(te.RA),e.Y36(m.kl),e.Y36(b.FF),e.Y36(h.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-custom-upload-data"]],decls:40,vars:16,consts:[[1,"row","justify-content-center","biometricAttendancePage"],[1,"col-md-8","mt-3"],[3,"ngClass"],[1,"biometricContainer"],[1,"row","my-2","justify-content-center"],[1,"col-md-10","px-5"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center"],["appAccessControl","",1,"align-self-end",3,"accessType"],["type","button",1,"btn","btn-primary","px-4","btn-width",3,"click"],[1,"row","row-box","mb-5"],[1,"col-12","data-box","text-center","blue-text"],[1,"row","mb-5"],[1,"col-md-12"],[1,"d-flex","justify-content-center"],[1,"me-3","align-self-end","align-items-baseline"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","file","hidden","","accept",".csv",3,"change"],["fileInput",""],[1,"me-3","w-50"],[1,"text-center"],[1,"text-primary","mb-2"],[1,"d-flex","inputGroup"],["type","text","readonly","",1,"form-control","iBASInput-field",3,"value"],[1,"input-group-text","pe-4",3,"click"],["class","closeIcon","src","../../../../../assets/new_icons/remove_attachment.svg","alt","",4,"ngIf"],["class","row mb-4 row-3",4,"ngIf"],["src","../../../../../assets/new_icons/remove_attachment.svg","alt","",1,"closeIcon"],[1,"row","mb-4","row-3"],[1,"col-auto"],["src","../../../../../assets/new_icons/successful_icon.svg","alt","successImg",1,"successImg"],[1,"col-auto","align-self-center"]],template:function(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),e._uU(8),e.ALo(9,"separateWords"),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return a.downloadCSVFormat()}),e._uU(12," Download "),e.qZA()()()()()()(),e.TgZ(13,"div",2)(14,"div",3)(15,"div",10)(16,"div",11),e._uU(17),e.ALo(18,"separateWords"),e.qZA()(),e.TgZ(19,"div",12)(20,"div",13)(21,"div",14)(22,"div",15)(23,"button",16),e.NdJ("click",function(){e.CHM(o);const d=e.MAs(26);return e.KtG(d.click())}),e._uU(24," Select File "),e.qZA(),e.TgZ(25,"input",17,18),e.NdJ("change",function(d){return a.fileChosen(d)}),e.qZA()(),e.TgZ(27,"div",19)(28,"div",20)(29,"label",21),e._uU(30),e.ALo(31,"separateWords"),e.qZA()(),e.TgZ(32,"div",22),e._UZ(33,"input",23),e.TgZ(34,"span",24),e.NdJ("click",function(){return a.removeFile()}),e.YNc(35,se,1,0,"img",25),e.qZA()()(),e.TgZ(36,"div",8)(37,"button",9),e.NdJ("click",function(){return a.submit()}),e._uU(38," Upload "),e.qZA()()()()(),e.YNc(39,oe,6,0,"div",26),e.qZA()()()()}2&t&&(e.xp6(2),e.Q6J("ngClass",a.fileSuccessUpload?"card activeCard mb-4":"card mb-4"),e.xp6(6),e.hij(" Download ","InventoryCorrection"==a.type?"Validate Inventory":e.lcZ(9,10,a.type),".csv File Sample Template "),e.xp6(2),e.Q6J("accessType",a.rolePermissionActions.createAction),e.xp6(3),e.Q6J("ngClass",a.fileSuccessUpload?"card activeCard":"card"),e.xp6(4),e.hij(" Upload ","InventoryCorrection"==a.type?"Validate Inventory":e.lcZ(18,12,a.type)," "),e.xp6(13),e.hij(" Upload ","InventoryCorrection"==a.type?"Validate Inventory":e.lcZ(31,14,a.type)," in Excel format [.csv] "),e.xp6(3),e.Q6J("value",a.fileName),e.xp6(2),e.Q6J("ngIf",a.fileName),e.xp6(1),e.Q6J("accessType",a.rolePermissionActions.createAction),e.xp6(3),e.Q6J("ngIf",a.fileSuccessUpload))},dependencies:[p.mk,p.O5,ae.J,f.E],styles:[".biometricAttendancePage[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border:1px solid #fff!important;border-radius:0!important}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:1.2rem;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;box-shadow:0 0 7px #0006}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .biometricContainer[_ngcontent-%COMP%]{--bs-gutter-x: 3.7rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row-box[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .data-box[_ngcontent-%COMP%]{align-self:center;vertical-align:middle!important;padding:.2rem 0 .2rem .9rem;color:#5a5a5a;background-color:#eaecf2;border-radius:2px}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%]{background-color:#007daf!important;color:#fff;font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .btn-width[_ngcontent-%COMP%]{width:7.5vw}.biometricAttendancePage[_ngcontent-%COMP%]   .arrowDownImg[_ngcontent-%COMP%]{width:4vh;height:4vh}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{display:flex;justify-content:center}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%]{padding:.5rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .successImg[_ngcontent-%COMP%]{width:3rem;height:3rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-right:none}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .closeIcon[_ngcontent-%COMP%]{width:2vh}.biometricAttendancePage[_ngcontent-%COMP%]   .iBASInput-field[_ngcontent-%COMP%]{width:100%;padding:10px}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]{background-color:#f2f8fb}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}"]}),i})()}];let ne=(()=>{var s;class i{}return(s=i).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,h.Bz.forChild(le),P.m]}),i})()}}]);