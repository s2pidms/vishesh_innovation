"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2033],{52033:(G,v,i)=>{i.r(v),i.d(v,{UploadDirectInventoryModule:()=>C});var r=i(96814),h=i(1076),P=i(77609),m=i(25116),R=i(10217),s=i(65879),y=i(98977),f=i(73374),U=i(37285),o=i(53421);function a(c,A){1&c&&s._UZ(0,"img",28)}function g(c,A){1&c&&(s.TgZ(0,"div",29)(1,"div",30),s._UZ(2,"img",31),s.qZA(),s.TgZ(3,"div",32)(4,"span"),s._uU(5,"Upload Successful"),s.qZA()()())}let e=(()=>{var c;class A{constructor(l,n,d,u){this.spinner=l,this.inventoryCorrectionService=n,this.toastService=d,this.modalService=u,this.file=null,this.date="",this.fileName="",this.fileSuccessUpload=!1,this.dataSuccessUpload=!1,this.approvedFlag=!1,this.data=[],this.rolePermissionActions=m.a1}ngOnInit(){}fileChosen(l){}validateData(){if(this.data.length>0){for(let l=0;l<this.data.length;l++){const n=this.data[l];let d=["YEAR_MONTH","empno","EMP_NAME","PRESENT","LATE_HRS","EARLYHRS","OT_HRS","HRS_WRKD"];if(0==l){let u=Object.keys(n);if(JSON.stringify(u)!=JSON.stringify(d))return void this.toastService.error("Excel uploaded header is not right !");if(6!=String(n.YEAR_MONTH).length)return void this.toastService.error("Date is invalid !");this.date=String(n.YEAR_MONTH).substring(0,4)+"-"+String(n.YEAR_MONTH).substring(4,6)}for(let u=0;u<d.length;u++){const M=n[d[u]];if(""==M&&0!=M)return void this.toastService.error("There is empty cell data !");if(["PRESENT","LATE_HRS","EARLYHRS","OT_HRS","HRS_WRKD"].includes(d[u])&&"number"!=typeof n[d[u]])return void this.toastService.error("Invalid data. Please check the excel!")}}this.fileSuccessUpload=!0}else this.toastService.error("Atleast one entry required !! Please check the excel!")}removeFile(){this.fileName="",this.file=""}submit(l=!1){}openModal(){this.modalService.open(P.rd,{centered:!0,size:"md"}).result.then(n=>{this.submit(!0)},n=>{})}downloadCSVFormat(l){R.saveAs(l)}}return(c=A).\u0275fac=function(l){return new(l||c)(s.Y36(y.V),s.Y36(f.Ee),s.Y36(y.kl),s.Y36(U.FF))},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-upload-direct-inventory"]],decls:37,vars:7,consts:[[1,"row","justify-content-center","biometricAttendancePage"],[1,"col-md-8","mt-3"],[3,"ngClass"],[1,"biometricContainer"],[1,"row","my-2","justify-content-center"],[1,"col-md-10","px-5"],[1,"d-flex","justify-content-between"],[1,"d-flex","align-items-center"],["appAccessControl","",1,"align-self-end",3,"accessType"],["type","button",1,"btn","btn-primary","px-4","btn-width"],[1,"row","row-box","mb-5"],[1,"col-12","data-box","text-center","blue-text"],[1,"row","mb-5"],[1,"col-md-12"],[1,"d-flex","justify-content-center"],[1,"me-3","align-self-end","align-items-baseline"],["type","button",1,"btn","btn-primary","px-4"],["type","file","hidden","","accept",".csv",3,"change"],["fileInput",""],[1,"me-3","w-50"],[1,"text-center"],[1,"text-primary","mb-2"],[1,"d-flex","inputGroup"],["type","text","readonly","",1,"form-control","iBASInput-field",3,"value"],[1,"input-group-text","pe-4",3,"click"],["class","closeIcon","src","../../../../../assets/new_icons/remove_attachment.svg","alt","",4,"ngIf"],["type","button",1,"btn","btn-primary","px-4","btn-width",3,"click"],["class","row mb-4 row-3",4,"ngIf"],["src","../../../../../assets/new_icons/remove_attachment.svg","alt","",1,"closeIcon"],[1,"row","mb-4","row-3"],[1,"col-auto"],["src","../../../../../assets/new_icons/successful_icon.svg","alt","successImg",1,"successImg"],[1,"col-auto","align-self-center"]],template:function(l,n){1&l&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7),s._uU(8,"Download Inventory.csv File Sample Template"),s.qZA(),s.TgZ(9,"div",8)(10,"button",9),s._uU(11," Download "),s.qZA()()()()()()(),s.TgZ(12,"div",2)(13,"div",3)(14,"div",10)(15,"div",11),s._uU(16,"Upload Direct Inventory"),s.qZA()(),s.TgZ(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15)(21,"button",16),s._uU(22," Select File "),s.qZA(),s.TgZ(23,"input",17,18),s.NdJ("change",function(u){return n.fileChosen(u)}),s.qZA()(),s.TgZ(25,"div",19)(26,"div",20)(27,"label",21),s._uU(28," Upload Direct Inventory in Excel format [.csv] "),s.qZA()(),s.TgZ(29,"div",22),s._UZ(30,"input",23),s.TgZ(31,"span",24),s.NdJ("click",function(){return n.removeFile()}),s.YNc(32,a,1,0,"img",25),s.qZA()()(),s.TgZ(33,"div",8)(34,"button",26),s.NdJ("click",function(){return n.submit()}),s._uU(35," Upload "),s.qZA()()()()(),s.YNc(36,g,6,0,"div",27),s.qZA()()()()),2&l&&(s.xp6(2),s.Q6J("ngClass",n.fileSuccessUpload?"card activeCard mb-4":"card mb-4"),s.xp6(7),s.Q6J("accessType",n.rolePermissionActions.createAction),s.xp6(3),s.Q6J("ngClass",n.fileSuccessUpload?"card activeCard":"card"),s.xp6(18),s.Q6J("value",n.fileName),s.xp6(2),s.Q6J("ngIf",n.fileName),s.xp6(1),s.Q6J("accessType",n.rolePermissionActions.createAction),s.xp6(3),s.Q6J("ngIf",n.fileSuccessUpload))},dependencies:[r.mk,r.O5,o.J],styles:[".biometricAttendancePage[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{border:1px solid #fff!important;border-radius:0!important}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{font-size:1.2rem;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;box-shadow:0 0 7px #0006}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .biometricContainer[_ngcontent-%COMP%]{--bs-gutter-x: 3.7rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .row-box[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .data-box[_ngcontent-%COMP%]{align-self:center;vertical-align:middle!important;padding:.2rem 0 .2rem .9rem;color:#5a5a5a;background-color:#eaecf2;border-radius:2px}.biometricAttendancePage[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .blue-text[_ngcontent-%COMP%]{background-color:#007daf!important;color:#fff;font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .btn-width[_ngcontent-%COMP%]{width:7.5vw}.biometricAttendancePage[_ngcontent-%COMP%]   .arrowDownImg[_ngcontent-%COMP%]{width:4vh;height:4vh}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]{display:flex;justify-content:center}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .col-auto[_ngcontent-%COMP%]{padding:.5rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   .successImg[_ngcontent-%COMP%]{width:3rem;height:3rem}.biometricAttendancePage[_ngcontent-%COMP%]   .row-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.4rem}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-right:none}.biometricAttendancePage[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .closeIcon[_ngcontent-%COMP%]{width:2vh}.biometricAttendancePage[_ngcontent-%COMP%]   .iBASInput-field[_ngcontent-%COMP%]{width:100%;padding:10px}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]{background-color:#f2f8fb}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background:transparent!important}.biometricAttendancePage[_ngcontent-%COMP%]   .activeCard[_ngcontent-%COMP%]   .inputGroup[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:pointer;border-left:none;background:transparent!important}"]}),A})();var t=i(56208);const p=[{path:"",component:e}];let C=(()=>{var c;class A{}return(c=A).\u0275fac=function(l){return new(l||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[r.ez,h.Bz.forChild(p),t.m]}),A})()},73374:(G,v,i)=>{i.d(v,{IX:()=>m,SZ:()=>U,Aj:()=>R,vM:()=>s,zP:()=>y,Ee:()=>f});var r=i(37398),h=i(65879),P=i(98977);let m=(()=>{var o;class a{constructor(e){this.http=e,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:t=>`/stores/FGIN/update/${t}`,getByIdPath:t=>`/stores/FGIN/getById/${t}`,deletePath:t=>`/stores/FGIN/delete/${t}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}getAllFGINMasterData(e){return this.http.get(this.routes.getAllFGINMasterDataPath,e).pipe((0,r.U)(t=>t))}getAllFGINSummaryReports(e){return this.http.get(this.routes.getAllFGINSummaryReportsPath,e).pipe((0,r.U)(t=>t))}getAllFGINLocationWiseReports(e){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllFGINByProductCategory(e){return this.http.get(this.routes.getAllFGINByProductCategoryPath,e).pipe((0,r.U)(t=>t))}getAllFGINAllLocationReports(e){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}bulkCreate(e){return this.http.post(this.routes.bulkCreatePath,e).pipe((0,r.U)(t=>t))}getAllFGINValueFinanceReports(e){return this.http.get(this.routes.getAllFGINValueReportsPath,e).pipe((0,r.U)(t=>t))}}return(o=a).\u0275fac=function(e){return new(e||o)(h.LFG(P.sM))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})(),R=(()=>{var o;class a{constructor(e){this.http=e,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:t=>`/stores/gin/update/${t}`,getByIdPath:t=>`/stores/gin/getById/${t}`,deletePath:t=>`/stores/gin/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getReorderLevelReports(e){return this.http.get(this.routes.getReorderLevelReportsPath,e).pipe((0,r.U)(t=>t))}getStockAgingReports(e){return this.http.get(this.routes.getStockAgingReportsPath,e).pipe((0,r.U)(t=>t))}getAllInventoryLocationWiseReports(e){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,e).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(o=a).\u0275fac=function(e){return new(e||o)(h.LFG(P.sM))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})(),s=(()=>{var o;class a{constructor(e){this.http=e,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsIssue/update/${t}`,getByIdPath:t=>`/stores/goodsIssue/getById/${t}`,getGoodRequisitionByIdPath:t=>`/stores/goodsIssue/getGoodRequisitionById/${t}`,deletePath:t=>`/stores/goodsIssue/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}updateOnResolveDiscrepancy(e,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(e),t).pipe((0,r.U)(p=>p))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getGoodRequisitionById(e){return this.http.get(this.routes.getGoodRequisitionByIdPath(e)).pipe((0,r.U)(t=>t))}}return(o=a).\u0275fac=function(e){return new(e||o)(h.LFG(P.sM))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})(),y=(()=>{var o;class a{constructor(e){this.http=e,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:t=>`/stores/grn/update/${t}`,updateOnCancelPath:t=>`/stores/grn/updateOnCancelGRN/${t}`,getByIdPath:t=>`/stores/grn/getById/${t}`,getPOBySupplierIdPath:t=>`/stores/grn/getPOBySupplierId/${t}`,getGRNDetailsByPOIdPath:t=>`/stores/grn/getGRNDetailsByPOId/${t}`,getGRNDetailsByIdPath:t=>`/stores/grn/getGRNDetailsById/${t}`,deletePath:t=>`/stores/grn/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllSupplierWiseReports(e){return this.http.get(this.routes.getAllSupplierWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllGRNReports(e){return this.http.get(this.routes.getAllGRNReportsPath,e).pipe((0,r.U)(t=>t))}getAllItemWiseReports(e){return this.http.get(this.routes.getAllItemWiseReportsPath,e).pipe((0,r.U)(t=>t))}getGRNDiscrepancyReports(e){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,e).pipe((0,r.U)(t=>t))}excelDownloadReports(e){return this.http.getFile(this.routes.excelDownloadReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(p=>p))}updateOnCancel(e,t){return this.http.put(this.routes.updateOnCancelPath(e),t).pipe((0,r.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}getPOBySupplierId(e){return this.http.get(this.routes.getPOBySupplierIdPath(e)).pipe((0,r.U)(t=>t))}getGRNDetailsByPOId(e){return this.http.get(this.routes.getGRNDetailsByPOIdPath(e)).pipe((0,r.U)(t=>t))}getGRNDetailsById(e){return this.http.get(this.routes.getGRNDetailsByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getAllGRNForSupplementaryPO(e){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,e).pipe((0,r.U)(t=>t))}getAllGRNLocationWiseReports(e){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,e).pipe((0,r.U)(t=>t))}}return(o=a).\u0275fac=function(e){return new(e||o)(h.LFG(P.sM))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})(),f=(()=>{var o;class a{constructor(e){this.http=e,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:t=>`/stores/inventory/getById/${t}`,deletePath:t=>`/stores/inventory/delete/${t}`}}uploadInventoryFile(e){return this.http.post(this.routes.uploadInventoryFilePath,e).pipe((0,r.U)(t=>t))}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllLocationSupplierItemWiseReports(e){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,e).pipe((0,r.U)(t=>t))}getAllReport(e){return this.http.get(this.routes.getAllReportPath,e).pipe((0,r.U)(t=>t))}getAllMasterFilterData(e){return this.http.get(this.routes.getAllFilterDataPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}update(e){return this.http.put(this.routes.updatePath,e).pipe((0,r.U)(t=>t))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}}return(o=a).\u0275fac=function(e){return new(e||o)(h.LFG(P.sM))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})(),U=(()=>{var o;class a{constructor(e){this.http=e,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:t=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${t}`,updatePath:t=>`/stores/goodsTransferResponse/update/${t}`,getByIdPath:t=>`/stores/goodsTransferResponse/getById/${t}`,getItemByGTRequestIdPath:t=>`/stores/goodsTransferResponse/getItemByGTRequestId/${t}`,deletePath:t=>`/stores/goodsTransferResponse/delete/${t}`}}create(e){return this.http.post(this.routes.createPath,e).pipe((0,r.U)(t=>t))}getAll(e){return this.http.get(this.routes.getAllPath,e).pipe((0,r.U)(t=>t))}getAllReports(e){return this.http.get(this.routes.getAllReportsPath,e).pipe((0,r.U)(t=>t))}getAllMasterData(e){return this.http.get(this.routes.getAllMasterDataPath,e).pipe((0,r.U)(t=>t))}updateOnResolveDiscrepancy(e,t){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(e),t).pipe((0,r.U)(p=>p))}update(e,t){return this.http.put(this.routes.updatePath(e),t).pipe((0,r.U)(p=>p))}getById(e){return this.http.get(this.routes.getByIdPath(e)).pipe((0,r.U)(t=>t))}delete(e){return this.http.delete(this.routes.deletePath(e)).pipe((0,r.U)(t=>t))}getItemByGTRequestId(e){return this.http.get(this.routes.getItemByGTRequestIdPath(e)).pipe((0,r.U)(t=>t))}}return(o=a).\u0275fac=function(e){return new(e||o)(h.LFG(P.sM))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})()}}]);