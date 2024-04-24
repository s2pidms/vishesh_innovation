"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7001],{97344:(T,f,s)=>{s.d(f,{a:()=>U});var u=s(43818),g=s(91164),t=s(65879),e=s(37285),v=s(98977),y=s(96814),M=s(88059),C=s(95346);function x(d,b){if(1&d){const n=t.EpF();t.TgZ(0,"th",17),t.NdJ("sort",function(l){t.CHM(n);const h=t.oxw();return t.KtG(h.onSort(l))}),t._uU(1),t.qZA()}if(2&d){const n=b.$implicit;t.Tol(n.class),t.Q6J("sortable",n.value),t.xp6(1),t.hij(" ",n.label," ")}}function S(d,b){if(1&d&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&d){const n=b.$implicit,c=t.oxw().$implicit;t.Tol(n.class),t.xp6(1),t.hij(" ",c[n.value]," ")}}function A(d,b){if(1&d&&(t.TgZ(0,"tr"),t.YNc(1,S,2,3,"td",18),t.qZA()),2&d){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.tableHead)}}const D=function(d,b,n,c){return{page:d,pageSize:b,collection:n,search:c}};let U=(()=>{class d{constructor(n,c){this.activeModal=n,this.exportExcelService=c,this.title="",this.type="",this.inValidRecords=[],this.tableHead=[],this.btnDisable=!1,this.page=1,this.pageSize=9,this.collection=0,this.search="",this.column="createdAt",this.direction=-1}ngOnInit(){this.collection=this.inValidRecords.length}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value;break;case"EXCEL":"Supplier"==this.type?this.excelDownloadForSupplier():"Items"==this.type?this.excelDownloadForItem():"Customer"==this.type?this.excelDownloadForCustomer():"InventoryCorrection"==this.type&&this.excelDownloadForInventory();break;case"PAGE":this.page=n.value}}excelDownloadForInventory(){this.exportExcelService.exportExcel((0,g.T2)(this.inValidRecords))}excelDownloadForItem(){this.exportExcelService.exportExcel((0,g.yV)(this.inValidRecords))}excelDownloadForCustomer(){this.exportExcelService.exportExcel((0,g.ti)(this.inValidRecords))}excelDownloadForSupplier(){this.exportExcelService.exportExcel((0,g.Nd)(this.inValidRecords))}onSort({column:n,direction:c}){this.headers.forEach(l=>{l.sortable!==n&&(l.direction="")}),this.inValidRecords=""===c||""===n?this.inValidRecords:[...this.inValidRecords].sort((l,h)=>{let P="string"==typeof l[n]?l[n].toLowerCase():l[n],O="string"==typeof h[n]?h[n].toLowerCase():h[n];const I=P<O?-1:P>O?1:0;return"asc"===c?I:-I})}static#e=this.\u0275fac=function(c){return new(c||d)(t.Y36(e.Kz),t.Y36(v.Ol))};static#t=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-custom-upload-details"]],viewQuery:function(c,l){if(1&c&&t.Gf(u.j,5),2&c){let h;t.iGM(h=t.CRH())&&(l.headers=h)}},inputs:{title:"title",type:"type",inValidRecords:"inValidRecords",tableHead:"tableHead"},decls:22,vars:16,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","px-0","mt-4"],[1,"px-5","mt-0"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","33rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[3,"class","sortable","sort",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"sortable","sort"],[3,"class",4,"ngFor","ngForOf"]],template:function(c,l){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return l.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"app-setting-header",10),t.NdJ("dataChange",function(P){return l.eventHeader(P)}),t.qZA()(),t.TgZ(13,"div",11)(14,"table",12)(15,"thead",13)(16,"tr",14),t.YNc(17,x,2,4,"th",15),t.qZA()(),t.TgZ(18,"tbody"),t.YNc(19,A,2,1,"tr",16),t.ALo(20,"slice"),t.ALo(21,"searchFi1ter"),t.qZA()()()()()()()()),2&c&&(t.xp6(3),t.Oqu(l.title),t.xp6(9),t.Q6J("data",t.l5B(11,D,l.page,l.pageSize,l.collection,l.search)),t.xp6(5),t.Q6J("ngForOf",l.tableHead),t.xp6(2),t.Q6J("ngForOf",t.Dn7(20,4,t.xi3(21,8,l.inValidRecords,l.search),(l.page-1)*l.pageSize,(l.page-1)*l.pageSize+l.pageSize)))},dependencies:[y.sg,M.P,u.j,y.OU,C.G],encapsulation:2})}return d})()},49592:(T,f,s)=>{s.r(f),s.d(f,{UploadDataModule:()=>R});var u=s(96814),g=s(1076),t=s(25116),e=s(65879),v=s(98977),y=s(88354);function M(r,F){if(1&r){const a=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e.NdJ("click",function(){const p=e.CHM(a).$implicit,m=e.oxw();return e.KtG(m.navigateTo(p.url,p.disabled,p.displayName))}),e.TgZ(2,"div",7)(3,"h5",8),e._uU(4),e.qZA()()()()}if(2&r){const a=F.$implicit;e.xp6(1),e.Q6J("ngClass",a.disabled?"disabled":""),e.xp6(3),e.Oqu(a.displayName)}}let C=(()=>{class r{constructor(a,o,i,p,m,_){this.menuTitleService=a,this.appGlobalService=o,this.subModulesService=i,this.spinner=p,this.storageService=m,this.router=_,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:t.Cv.MASTER}).subscribe(o=>{this.cards=o?.rows.find(m=>"Uploads Master"==m.title),this.cardsData=this.cards.items.sort((m,_)=>m.order-_.order);let i=3-this.cards.items.length;if(i>0)for(var p=0;p<i;p++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(a,o,i){let p={title:i,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",p),o||(this.menuTitleService.set(p),this.router.navigate([a]))}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(v.Uh),e.Y36(v.P0),e.Y36(y.M5),e.Y36(v.V),e.Y36(v.V1),e.Y36(g.F0))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-upload-data"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,M,5,2,"div",4),e.qZA()()()()),2&o&&(e.xp6(4),e.Q6J("ngForOf",i.cardsData))},dependencies:[u.mk,u.sg],encapsulation:2})}return r})();var x=s(56208),S=s(10217),A=s(97344),D=s(77609);const U=[{value:"supplierName",label:"Supplier Name",class:"text-start"},{value:"supplierGST",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],d=[{value:"itemName",label:"Item Name",class:"text-start"},{value:"hsn",label:"HSN Code",class:""},{value:"message",label:"Message",class:"text-start"}],b=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],n=[{value:"supplierCode",label:"Supplier Code",class:""},{value:"itemCode",label:"Item Code",class:""},{value:"message",label:"Message",class:"text-start"}],c=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],l=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],h=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}];var P=s(74659),O=s(37285),I=s(53421);function w(r,F){1&r&&e._UZ(0,"img",27)}function N(r,F){1&r&&(e.TgZ(0,"div",28)(1,"div",29),e._UZ(2,"img",30),e.qZA(),e.TgZ(3,"div",31)(4,"span"),e._uU(5,"Upload Successful"),e.qZA()()())}const E=[{path:"tab_list",component:C},{path:"form/:uploadParameter",component:(()=>{class r{constructor(a,o,i,p,m){this.spinner=a,this.suppliersService=o,this.toastService=i,this.modalService=p,this.activatedRoute=m,this.file=null,this.fileName="",this.fileSuccessUpload=!1,this.dataSuccessUpload=!1,this.approvedFlag=!1,this.rolePermissionActions=t.a1,this.inValidRecords=[],this.validRecords=[],this.tableHead=[],this.type=""}ngOnInit(){this.type=this.activatedRoute.snapshot.paramMap.get("uploadParameter"),"Supplier"==this.type?this.tableHead=U:"Items"==this.type?this.tableHead=d:"Customer"==this.type?this.tableHead=b:"InventoryCorrection"==this.type?this.tableHead=n:"Employee"==this.type?this.tableHead=c:"SKUMaster"==this.type?this.tableHead=l:"FGIN"==this.type&&(this.tableHead=h)}fileChosen(a){if(a.target.value){if(a.target.files[0].size>2e6)return void this.toastService.warning("Unable to upload file of size more than 2MB");this.file=a.target.files[0],this.fileName=this.file.name}}removeFile(){this.fileName="",this.file="",this.inValidRecords=[],this.validRecords=[]}submit(){let a=new FormData;this.file&&"object"==typeof this.file?(a.append("key","excelData"),a.append("collectionName",this.type),a.append("uploadFile",this.file,this.file.name),this.spinner.show(),this.suppliersService.uploadAndCheckCSVFile(a).subscribe(o=>{this.inValidRecords=o?.inValidRecords,this.validRecords=o?.validRecords,this.inValidRecords?.length>0?this.openInvalidSupplierRecordsModal():this.openValidRecordsModal(),this.spinner.hide()})):this.toastService.warning("Please Upload File")}uploadData(){this.spinner.show(),this.suppliersService.bulkInsertByCSVFile({collectionName:this.type,validRecords:this.validRecords}).subscribe(o=>{console.log("success",o),this.toastService.success(o.message),this.removeFile(),this.spinner.hide()})}downloadCSVFormat(){let a="";"Supplier"==this.type?a="./assets/upload-data-excel-csv/supplier.csv":"Items"==this.type?a="./assets/upload-data-excel-csv/item.csv":"Customer"==this.type?a="./assets/upload-data-excel-csv/customer.csv":("InventoryCorrection"==this.type||"Employee"==this.type||"SKUMaster"==this.type||"FGIN"==this.type)&&(a="./assets/upload-data-excel-csv/inventory.csv"),S.saveAs(a)}openInvalidSupplierRecordsModal(){const a=this.modalService.open(A.a,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});a.componentInstance.title=`Invalid ${"InventoryCorrection"==this.type?"Validate Inventory":this.type} Records`,a.componentInstance.type=this.type,a.componentInstance.tableHead=this.tableHead,a.componentInstance.inValidRecords=this.inValidRecords,a.result.then(o=>{},o=>{})}openValidRecordsModal(){const a=this.modalService.open(D.er,{centered:!0,size:"sm",backdrop:"static",keyboard:!1});a.componentInstance.heading="Upload Data",a.componentInstance.cancelText=`Do You Want to Upload ${"InventoryCorrection"==this.type?"Validate Inventory":this.type} Records ?`,a.result.then(o=>{"Yes"==o&&this.uploadData()},o=>{})}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(v.V),e.Y36(P.RA),e.Y36(v.kl),e.Y36(O.FF),e.Y36(g.gz))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-custom-upload-data"]],decls:37,vars:10,consts:[[1,"row","justify-content-center","biometricAttendancePage"],[1,"col-md-8","mt-3"],[3,"ngClass"],[1,"biometricContainer"],[1,"row","my-2","justify-content-center"],[1,"col-md-10","px-5"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center"],["appAccessControl","",1,"align-self-end",3,"accessType"],["type","button",1,"btn","btn-primary","px-4","btn-width",3,"click"],[1,"row","row-box","mb-5"],[1,"col-12","data-box","text-center","blue-text"],[1,"row","mb-5"],[1,"col-md-12"],[1,"d-flex","justify-content-center"],[1,"me-3","align-self-end","align-items-baseline"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","file","hidden","","accept",".csv",3,"change"],["fileInput",""],[1,"me-3","w-50"],[1,"text-center"],[1,"text-primary","mb-2"],[1,"d-flex","inputGroup"],["type","text","readonly","",1,"form-control","iBASInput-field",3,"value"],[1,"input-group-text","pe-4",3,"click"],["class","closeIcon","src","../../../../../assets/new_icons/remove_attachment.svg","alt","",4,"ngIf"],["class","row mb-4 row-3",4,"ngIf"],["src","../../../../../assets/new_icons/remove_attachment.svg","alt","",1,"closeIcon"],[1,"row","mb-4","row-3"],[1,"col-auto"],["src","../../../../../assets/new_icons/successful_icon.svg","alt","successImg",1,"successImg"],[1,"col-auto","align-self-center"]],template:function(o,i){if(1&o){const p=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),e._uU(8),e.qZA(),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){return i.downloadCSVFormat()}),e._uU(11," Download "),e.qZA()()()()()()(),e.TgZ(12,"div",2)(13,"div",3)(14,"div",10)(15,"div",11),e._uU(16),e.qZA()(),e.TgZ(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"button",16),e.NdJ("click",function(){e.CHM(p);const _=e.MAs(24);return e.KtG(_.click())}),e._uU(22," Select File "),e.qZA(),e.TgZ(23,"input",17,18),e.NdJ("change",function(_){return i.fileChosen(_)}),e.qZA()(),e.TgZ(25,"div",19)(26,"div",20)(27,"label",21),e._uU(28),e.qZA()(),e.TgZ(29,"div",22),e._UZ(30,"input",23),e.TgZ(31,"span",24),e.NdJ("click",function(){return i.removeFile()}),e.YNc(32,w,1,0,"img",25),e.qZA()()(),e.TgZ(33,"div",8)(34,"button",9),e.NdJ("click",function(){return i.submit()}),e._uU(35," Upload "),e.qZA()()()()(),e.YNc(36,N,6,0,"div",26),e.qZA()()()()}2&o&&(e.xp6(2),e.Q6J("ngClass",i.fileSuccessUpload?"card activeCard mb-4":"card mb-4"),e.xp6(6),e.hij(" Download ","InventoryCorrection"==i.type?"Validate Inventory":i.type,".csv File Sample Template "),e.xp6(1),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(3),e.Q6J("ngClass",i.fileSuccessUpload?"card activeCard":"card"),e.xp6(4),e.hij(" Upload ","InventoryCorrection"==i.type?"Validate Inventory":i.type," "),e.xp6(12),e.hij(" Upload ","InventoryCorrection"==i.type?"Validate Inventory":i.type," in Excel format [.csv] "),e.xp6(2),e.Q6J("value",i.fileName),e.xp6(2),e.Q6J("ngIf",i.fileName),e.xp6(1),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(3),e.Q6J("ngIf",i.fileSuccessUpload))},dependencies:[u.mk,u.O5,I.J],styles:[".biometricAttendancePage[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border:1px solid #fff!important;border-radius:0!important}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:1.2rem;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;box-shadow:0 0 7px #0006}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .biometricContainer[_ngcontent-%COMP%]{--bs-gutter-x: 3.7rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row-box[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .data-box[_ngcontent-%COMP%]{align-self:center;vertical-align:middle!important;padding:.2rem 0 .2rem .9rem;color:#5a5a5a;background-color:#eaecf2;border-radius:2px}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%]{background-color:#007daf!important;color:#fff;font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .btn-width[_ngcontent-%COMP%]{width:7.5vw}.biometricAttendancePage[_ngcontent-%COMP%]   .arrowDownImg[_ngcontent-%COMP%]{width:4vh;height:4vh}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{display:flex;justify-content:center}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%]{padding:.5rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .successImg[_ngcontent-%COMP%]{width:3rem;height:3rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-right:none}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .closeIcon[_ngcontent-%COMP%]{width:2vh}.biometricAttendancePage[_ngcontent-%COMP%]   .iBASInput-field[_ngcontent-%COMP%]{width:100%;padding:10px}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]{background-color:#f2f8fb}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}"]})}return r})()},{path:"supplier_upload_data",loadChildren:()=>s.e(8975).then(s.bind(s,28975)).then(r=>r.SupplierUploadDataModule)}];let R=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#a=this.\u0275inj=e.cJS({imports:[u.ez,g.Bz.forChild(E),x.m]})}return r})()},13107:(T,f,s)=>{s.d(f,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,f,s)=>{s.d(f,{J:()=>u});const u=({data:g,headers:t,widths:e,title:v})=>({tableData:{widths:e,headerRows:1,body:[t.map(C=>({text:C.header,style:"header"})),...g.map(C=>t.map(x=>({style:"subheader",text:C[x.key]})))]},title:v})}}]);