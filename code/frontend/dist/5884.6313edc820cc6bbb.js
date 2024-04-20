"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5884],{97344:(A,b,o)=>{o.d(b,{a:()=>w});var u=o(43818),C=o(37586),t=o(65879),e=o(37285),_=o(98977),M=o(96814),x=o(88059),y=o(95346);function O(r,v){if(1&r){const c=t.EpF();t.TgZ(0,"th",17),t.NdJ("sort",function(l){t.CHM(c);const p=t.oxw();return t.KtG(p.onSort(l))}),t._uU(1),t.qZA()}if(2&r){const c=v.$implicit;t.Tol(c.class),t.Q6J("sortable",c.value),t.xp6(1),t.hij(" ",c.label," ")}}function I(r,v){if(1&r&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&r){const c=v.$implicit,i=t.oxw().$implicit;t.Tol(c.class),t.xp6(1),t.hij(" ",i[c.value]," ")}}function U(r,v){if(1&r&&(t.TgZ(0,"tr"),t.YNc(1,I,2,3,"td",18),t.qZA()),2&r){const c=t.oxw();t.xp6(1),t.Q6J("ngForOf",c.tableHead)}}const S=function(r,v,c,i){return{page:r,pageSize:v,collection:c,search:i}};let w=(()=>{var r;class v{constructor(i,l){this.activeModal=i,this.exportExcelService=l,this.title="",this.type="",this.inValidRecords=[],this.tableHead=[],this.btnDisable=!1,this.page=1,this.pageSize=9,this.collection=0,this.search="",this.column="createdAt",this.direction=-1}ngOnInit(){this.collection=this.inValidRecords.length}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value;break;case"EXCEL":"Supplier"==this.type?this.excelDownloadForSupplier():"Items"==this.type?this.excelDownloadForItem():"Customer"==this.type?this.excelDownloadForCustomer():"InventoryCorrection"==this.type&&this.excelDownloadForInventory();break;case"PAGE":this.page=i.value}}excelDownloadForInventory(){this.exportExcelService.exportExcel((0,C.T2)(this.inValidRecords))}excelDownloadForItem(){this.exportExcelService.exportExcel((0,C.yV)(this.inValidRecords))}excelDownloadForCustomer(){this.exportExcelService.exportExcel((0,C.ti)(this.inValidRecords))}excelDownloadForSupplier(){this.exportExcelService.exportExcel((0,C.Nd)(this.inValidRecords))}onSort({column:i,direction:l}){this.headers.forEach(p=>{p.sortable!==i&&(p.direction="")}),this.inValidRecords=""===l||""===i?this.inValidRecords:[...this.inValidRecords].sort((p,P)=>{let D="string"==typeof p[i]?p[i].toLowerCase():p[i],R="string"==typeof P[i]?P[i].toLowerCase():P[i];const T=D<R?-1:D>R?1:0;return"asc"===l?T:-T})}}return(r=v).\u0275fac=function(i){return new(i||r)(t.Y36(e.Kz),t.Y36(_.Ol))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-custom-upload-details"]],viewQuery:function(i,l){if(1&i&&t.Gf(u.j,5),2&i){let p;t.iGM(p=t.CRH())&&(l.headers=p)}},inputs:{title:"title",type:"type",inValidRecords:"inValidRecords",tableHead:"tableHead"},decls:22,vars:16,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","px-0","mt-4"],[1,"px-5","mt-0"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","33rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[3,"class","sortable","sort",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"sortable","sort"],[3,"class",4,"ngFor","ngForOf"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return l.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"app-setting-header",10),t.NdJ("dataChange",function(P){return l.eventHeader(P)}),t.qZA()(),t.TgZ(13,"div",11)(14,"table",12)(15,"thead",13)(16,"tr",14),t.YNc(17,O,2,4,"th",15),t.qZA()(),t.TgZ(18,"tbody"),t.YNc(19,U,2,1,"tr",16),t.ALo(20,"slice"),t.ALo(21,"searchFi1ter"),t.qZA()()()()()()()()),2&i&&(t.xp6(3),t.Oqu(l.title),t.xp6(9),t.Q6J("data",t.l5B(11,S,l.page,l.pageSize,l.collection,l.search)),t.xp6(5),t.Q6J("ngForOf",l.tableHead),t.xp6(2),t.Q6J("ngForOf",t.Dn7(20,4,t.xi3(21,8,l.inValidRecords,l.search),(l.page-1)*l.pageSize,(l.page-1)*l.pageSize+l.pageSize)))},dependencies:[M.sg,x.P,u.j,M.OU,y.G],encapsulation:2}),v})()},97501:(A,b,o)=>{o.r(b),o.d(b,{UploadDataModule:()=>E});var u=o(96814),C=o(1076),t=o(25116),e=o(65879),_=o(98977),M=o(88354);function x(s,h){if(1&s){const g=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e.NdJ("click",function(){const m=e.CHM(g).$implicit,d=e.oxw();return e.KtG(d.navigateTo(m.url,m.disabled,m.displayName))}),e.TgZ(2,"div",7)(3,"h5",8),e._uU(4),e.qZA()()()()}if(2&s){const g=h.$implicit;e.xp6(1),e.Q6J("ngClass",g.disabled?"disabled":""),e.xp6(3),e.Oqu(g.displayName)}}let y=(()=>{var s;class h{constructor(n,a,m,d,f,F){this.menuTitleService=n,this.appGlobalService=a,this.subModulesService=m,this.spinner=d,this.storageService=f,this.router=F,this.title="",this.menuItemId="",this.cards={},this.cardsData=[]}ngOnInit(){this.title=this.appGlobalService.moduleName,this.menuItemId=this.appGlobalService.menuItemId,this.getAll()}getAll(){this.spinner.show(),this.subModulesService.getAll({menuID:this.menuItemId,tabType:t.Cv.MASTER}).subscribe(a=>{this.cards=a?.rows.find(f=>"Uploads Master"==f.title),this.cardsData=this.cards.items.sort((f,F)=>f.order-F.order);let m=3-this.cards.items.length;if(m>0)for(var d=0;d<m;d++)this.cards.items.push({displayName:"Place Holder",disabled:!0,url:null});this.menuTitleService.set({title:`${this.cards.displayName}`,subTitle:null,type:null,subModuleId:this.cards._id})}),this.spinner.hide()}navigateTo(n,a,m){let d={title:m,subTitle:null,type:null,subModuleId:this.cards._id};this.storageService.set("menuTitle",d),a||(this.menuTitleService.set(d),this.router.navigate([n]))}}return(s=h).\u0275fac=function(n){return new(n||s)(e.Y36(_.Uh),e.Y36(_.P0),e.Y36(M.M5),e.Y36(_.V),e.Y36(_.V1),e.Y36(C.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-upload-data"]],decls:5,vars:1,consts:[[1,"row","tablePage",2,"min-height","47rem"],[1,"col-md-11","table-body","shadow-none"],[1,"container-fluid","tabs-card-page"],[1,"row","row-cols-1","row-cols-md-3"],["class","col d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col","d-flex","justify-content-center"],[1,"card","masterCard",3,"ngClass","click"],[1,"card-body","d-flex","align-content-center"],[1,"card-title","align-self-center"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,x,5,2,"div",4),e.qZA()()()()),2&n&&(e.xp6(4),e.Q6J("ngForOf",a.cardsData))},dependencies:[u.mk,u.sg],encapsulation:2}),h})();var O=o(56208),I=o(10217),U=o(97344),S=o(77609);const w=[{value:"supplierName",label:"Supplier Name",class:"text-start"},{value:"supplierGST",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],r=[{value:"itemName",label:"Item Name",class:"text-start"},{value:"hsn",label:"HSN Code",class:""},{value:"message",label:"Message",class:"text-start"}],v=[{value:"customerName",label:"Customer Name",class:"text-start"},{value:"GSTIN",label:"GSTIN",class:""},{value:"message",label:"Message",class:"text-start"}],c=[{value:"supplierCode",label:"Supplier Code",class:""},{value:"itemCode",label:"Item Code",class:""},{value:"message",label:"Message",class:"text-start"}];var i=o(74659),l=o(37285),p=o(53421);function P(s,h){1&s&&e._UZ(0,"img",27)}function D(s,h){1&s&&(e.TgZ(0,"div",28)(1,"div",29),e._UZ(2,"img",30),e.qZA(),e.TgZ(3,"div",31)(4,"span"),e._uU(5,"Upload Successful"),e.qZA()()())}const T=[{path:"tab_list",component:y},{path:"form/:uploadParameter",component:(()=>{var s;class h{constructor(n,a,m,d,f){this.spinner=n,this.suppliersService=a,this.toastService=m,this.modalService=d,this.activatedRoute=f,this.file=null,this.fileName="",this.fileSuccessUpload=!1,this.dataSuccessUpload=!1,this.approvedFlag=!1,this.rolePermissionActions=t.a1,this.inValidRecords=[],this.validRecords=[],this.tableHead=[],this.type=""}ngOnInit(){this.type=this.activatedRoute.snapshot.paramMap.get("uploadParameter"),"Supplier"==this.type?this.tableHead=w:"Items"==this.type?this.tableHead=r:"Customer"==this.type?this.tableHead=v:"InventoryCorrection"==this.type&&(this.tableHead=c)}fileChosen(n){if(n.target.value){if(n.target.files[0].size>2e6)return void this.toastService.warning("Unable to upload file of size more than 2MB");this.file=n.target.files[0],this.fileName=this.file.name}}removeFile(){this.fileName="",this.file="",this.inValidRecords=[],this.validRecords=[]}submit(){let n=new FormData;this.file&&"object"==typeof this.file?(n.append("key","excelData"),n.append("collectionName",this.type),n.append("uploadFile",this.file,this.file.name),this.spinner.show(),this.suppliersService.uploadAndCheckCSVFile(n).subscribe(a=>{this.inValidRecords=a?.inValidRecords,this.validRecords=a?.validRecords,this.inValidRecords?.length>0?this.openInvalidSupplierRecordsModal():this.openValidRecordsModal(),this.spinner.hide()})):this.toastService.warning("Please Upload File")}uploadData(){this.spinner.show(),this.suppliersService.bulkInsertByCSVFile({collectionName:this.type,validRecords:this.validRecords}).subscribe(a=>{console.log("success",a),this.toastService.success(a.message),this.removeFile(),this.spinner.hide()})}downloadCSVFormat(){let n="";"Supplier"==this.type?n="./assets/upload-data-excel-csv/supplier.csv":"Items"==this.type?n="./assets/upload-data-excel-csv/item.csv":"Customer"==this.type?n="./assets/upload-data-excel-csv/customer.csv":"InventoryCorrection"==this.type&&(n="./assets/upload-data-excel-csv/inventory.csv"),I.saveAs(n)}openInvalidSupplierRecordsModal(){const n=this.modalService.open(U.a,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});n.componentInstance.title=`Invalid ${"InventoryCorrection"==this.type?"Validate Inventory":this.type} Records`,n.componentInstance.type=this.type,n.componentInstance.tableHead=this.tableHead,n.componentInstance.inValidRecords=this.inValidRecords,n.result.then(a=>{},a=>{})}openValidRecordsModal(){const n=this.modalService.open(S.er,{centered:!0,size:"sm",backdrop:"static",keyboard:!1});n.componentInstance.heading="Upload Data",n.componentInstance.cancelText=`Do You Want to Upload ${"InventoryCorrection"==this.type?"Validate Inventory":this.type} Records ?`,n.result.then(a=>{"Yes"==a&&this.uploadData()},a=>{})}}return(s=h).\u0275fac=function(n){return new(n||s)(e.Y36(_.V),e.Y36(i.RA),e.Y36(_.kl),e.Y36(l.FF),e.Y36(C.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-custom-upload-data"]],decls:37,vars:10,consts:[[1,"row","justify-content-center","biometricAttendancePage"],[1,"col-md-8","mt-3"],[3,"ngClass"],[1,"biometricContainer"],[1,"row","my-2","justify-content-center"],[1,"col-md-10","px-5"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center"],["appAccessControl","",1,"align-self-end",3,"accessType"],["type","button",1,"btn","btn-primary","px-4","btn-width",3,"click"],[1,"row","row-box","mb-5"],[1,"col-12","data-box","text-center","blue-text"],[1,"row","mb-5"],[1,"col-md-12"],[1,"d-flex","justify-content-center"],[1,"me-3","align-self-end","align-items-baseline"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["type","file","hidden","","accept",".csv",3,"change"],["fileInput",""],[1,"me-3","w-50"],[1,"text-center"],[1,"text-primary","mb-2"],[1,"d-flex","inputGroup"],["type","text","readonly","",1,"form-control","iBASInput-field",3,"value"],[1,"input-group-text","pe-4",3,"click"],["class","closeIcon","src","../../../../../assets/new_icons/remove_attachment.svg","alt","",4,"ngIf"],["class","row mb-4 row-3",4,"ngIf"],["src","../../../../../assets/new_icons/remove_attachment.svg","alt","",1,"closeIcon"],[1,"row","mb-4","row-3"],[1,"col-auto"],["src","../../../../../assets/new_icons/successful_icon.svg","alt","successImg",1,"successImg"],[1,"col-auto","align-self-center"]],template:function(n,a){if(1&n){const m=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),e._uU(8),e.qZA(),e.TgZ(9,"div",8)(10,"button",9),e.NdJ("click",function(){return a.downloadCSVFormat()}),e._uU(11," Download "),e.qZA()()()()()()(),e.TgZ(12,"div",2)(13,"div",3)(14,"div",10)(15,"div",11),e._uU(16),e.qZA()(),e.TgZ(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"button",16),e.NdJ("click",function(){e.CHM(m);const f=e.MAs(24);return e.KtG(f.click())}),e._uU(22," Select File "),e.qZA(),e.TgZ(23,"input",17,18),e.NdJ("change",function(f){return a.fileChosen(f)}),e.qZA()(),e.TgZ(25,"div",19)(26,"div",20)(27,"label",21),e._uU(28),e.qZA()(),e.TgZ(29,"div",22),e._UZ(30,"input",23),e.TgZ(31,"span",24),e.NdJ("click",function(){return a.removeFile()}),e.YNc(32,P,1,0,"img",25),e.qZA()()(),e.TgZ(33,"div",8)(34,"button",9),e.NdJ("click",function(){return a.submit()}),e._uU(35," Upload "),e.qZA()()()()(),e.YNc(36,D,6,0,"div",26),e.qZA()()()()}2&n&&(e.xp6(2),e.Q6J("ngClass",a.fileSuccessUpload?"card activeCard mb-4":"card mb-4"),e.xp6(6),e.hij(" Download ","InventoryCorrection"==a.type?"Validate Inventory":a.type,".csv File Sample Template "),e.xp6(1),e.Q6J("accessType",a.rolePermissionActions.createAction),e.xp6(3),e.Q6J("ngClass",a.fileSuccessUpload?"card activeCard":"card"),e.xp6(4),e.hij(" Upload ","InventoryCorrection"==a.type?"Validate Inventory":a.type," "),e.xp6(12),e.hij(" Upload ","InventoryCorrection"==a.type?"Validate Inventory":a.type," in Excel format [.csv] "),e.xp6(2),e.Q6J("value",a.fileName),e.xp6(2),e.Q6J("ngIf",a.fileName),e.xp6(1),e.Q6J("accessType",a.rolePermissionActions.createAction),e.xp6(3),e.Q6J("ngIf",a.fileSuccessUpload))},dependencies:[u.mk,u.O5,p.J],styles:[".biometricAttendancePage[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border:1px solid #fff!important;border-radius:0!important}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:1.2rem;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;box-shadow:0 0 7px #0006}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .biometricContainer[_ngcontent-%COMP%]{--bs-gutter-x: 3.7rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row-box[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .data-box[_ngcontent-%COMP%]{align-self:center;vertical-align:middle!important;padding:.2rem 0 .2rem .9rem;color:#5a5a5a;background-color:#eaecf2;border-radius:2px}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%]{background-color:#007daf!important;color:#fff;font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .btn-width[_ngcontent-%COMP%]{width:7.5vw}.biometricAttendancePage[_ngcontent-%COMP%]   .arrowDownImg[_ngcontent-%COMP%]{width:4vh;height:4vh}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{display:flex;justify-content:center}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%]{padding:.5rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .successImg[_ngcontent-%COMP%]{width:3rem;height:3rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-right:none}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .closeIcon[_ngcontent-%COMP%]{width:2vh}.biometricAttendancePage[_ngcontent-%COMP%]   .iBASInput-field[_ngcontent-%COMP%]{width:100%;padding:10px}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]{background-color:#f2f8fb}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}"]}),h})()},{path:"supplier_upload_data",loadChildren:()=>o.e(8975).then(o.bind(o,28975)).then(s=>s.SupplierUploadDataModule)}];let E=(()=>{var s;class h{}return(s=h).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,C.Bz.forChild(T),O.m]}),h})()},13107:(A,b,o)=>{o.d(b,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(A,b,o)=>{o.d(b,{J:()=>u});const u=({data:C,headers:t,widths:e,title:_})=>({tableData:{widths:e,headerRows:1,body:[t.map(y=>({text:y.header,style:"header"})),...C.map(y=>t.map(O=>({style:"subheader",text:y[O.key]})))]},title:_})}}]);