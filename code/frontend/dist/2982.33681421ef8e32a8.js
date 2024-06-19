"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2982],{42982:(te,A,l)=>{l.r(A),l.d(A,{channelPartnerModule:()=>W});var u=l(96814),h=l(1076),P=l(56208),y=l(65876),v=l(43818),m=l(25116),_=l(11909),b=l(77203),e=l(65879),p=l(2742),d=l(37398);let Z=(()=>{class i{constructor(t){this.http=t,this.routes={createPath:"/purchase/channelPartner/create",getAllPath:"/purchase/channelPartner/getAll",getAllReportsPath:"/purchase/channelPartner/getAllReports",getAllMasterDataPath:"/purchase/channelPartner/getAllMasterData",updatePath:n=>`/purchase/channelPartner/update/${n}`,getByIdPath:n=>`/purchase/channelPartner/getById/${n}`,deletePath:n=>`/purchase/channelPartner/delete/${n}`}}create(t){return this.http.post(this.routes.createPath,t).pipe((0,d.U)(n=>n))}getAll(t){return this.http.get(this.routes.getAllPath,t).pipe((0,d.U)(n=>n))}getAllReports(t){return this.http.get(this.routes.getAllReportsPath,t).pipe((0,d.U)(n=>n))}getAllMasterData(t){return this.http.get(this.routes.getAllMasterDataPath,t).pipe((0,d.U)(n=>n))}update(t,n){return this.http.put(this.routes.updatePath(t),n).pipe((0,d.U)(r=>r))}getById(t){return this.http.get(this.routes.getByIdPath(t)).pipe((0,d.U)(n=>n))}delete(t){return this.http.delete(this.routes.deletePath(t)).pipe((0,d.U)(n=>n))}static#e=this.\u0275fac=function(n){return new(n||i)(e.LFG(p.sM))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var T=l(37285),N=l(88059),U=l(53421);function S(i,c){1&i&&e._UZ(0,"div",32)}function q(i,c){1&i&&e._UZ(0,"div",33)}function I(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"a",34),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.openConfirmModal(null==r?null:r._id,null==r?null:r.CPCode))}),e._UZ(1,"i",35),e._uU(2," Delete "),e.qZA()}}function k(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",21),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"span",22),e.YNc(17,S,1,0,"div",23),e.YNc(18,q,1,0,"div",24),e.qZA()(),e.TgZ(19,"td")(20,"div",25),e._UZ(21,"button",26),e.TgZ(22,"div",27)(23,"a",28),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",s,"view"))}),e._UZ(24,"i",29),e._uU(25," View "),e.qZA(),e.TgZ(26,"a",28),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",s,"edit"))}),e._UZ(27,"i",30),e._uU(28," Edit "),e.qZA(),e.YNc(29,I,3,0,"a",31),e.qZA()()()()}if(2&i){const t=c.$implicit,n=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.CPCode),e.xp6(2),e.Oqu(null==t?null:t.channelPartnerName),e.xp6(2),e.Oqu(null==t?null:t.channelPartnerCategory),e.xp6(2),e.Oqu(null==t?null:t.country),e.xp6(2),e.Oqu(null==t?null:t.state),e.xp6(2),e.Oqu(null==t?null:t.GSTIN),e.xp6(2),e.Oqu(null==t?null:t.currency),e.xp6(3),e.Q6J("ngIf","Active"==t.isCPActive),e.xp6(1),e.Q6J("ngIf","Inactive"==(null==t?null:t.isCPActive)),e.xp6(5),e.Q6J("accessType",n.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",n.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",n.user==n.superAdminId)}}const x=function(i,c,t,n){return{page:i,pageSize:c,collection:t,search:n,type:"list"}};let F=(()=>{class i{constructor(t,n,r,s,o,g,f,C,ee){this.exportExcelService=t,this.router=n,this.spinner=r,this.channelPartnerService=s,this.activatedRoute=o,this.exportToPDFService=g,this.storageService=f,this.toastService=C,this.modalService=ee,this.page=1,this.pageSize=8,this.collection=0,this.column="CPCode",this.direction=1,this.search="",this.tableData=[],this.superAdminId=m.dA,this.user="",this.rolePermissionActions=m.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(t=>t==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(t=!1,n=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.channelPartnerService.getAll(r).subscribe(s=>{"EXCEL"==n?this.excelDownload(s.rows):"PDF"==n?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}delete(t){this.spinner.show(),this.channelPartnerService.delete(t).subscribe(n=>{this.spinner.hide(),this.toastService.success(n.message),this.getAll()})}openConfirmModal(t,n){const r=this.modalService.open(b.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});r.componentInstance.heading="Confirm Deletion",r.componentInstance.confirmText=`Confirm Deletion of CP Code ${n} ?`,r.result.then(s=>{"Yes"==s.title&&this.delete(t)},s=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(t,n,r){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:n?._id,action:r}})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}trackByFn(t,n){return n?._id}excelDownload(t){this.exportExcelService.exportExcel((0,_.dk)(t))}pdfDownload(t){let n=(0,_.mR)(t);this.exportToPDFService.generatePdf(n.tableData,n.title)}onSort({column:t,direction:n}){this.headers.forEach(r=>{r.sortable!==t&&(r.direction="")}),this.column=t,this.direction="asc"==n?1:-1,this.getAll()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(p.Ol),e.Y36(h.F0),e.Y36(p.V),e.Y36(Z),e.Y36(h.gz),e.Y36(p.$L),e.Y36(p.V1),e.Y36(p.kl),e.Y36(T.FF))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-channel-partner-list"]],viewQuery:function(n,r){if(1&n&&e.Gf(v.j,5),2&n){let s;e.iGM(s=e.CRH())&&(r.headers=s)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"row","line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","CPCode",3,"sort"],["sortable","channelPartnerName",1,"text-start",3,"sort"],["sortable","channelPartnerCategory",3,"sort"],["sortable","country",3,"sort"],["sortable","state",3,"sort"],["sortable","GSTIN",3,"sort"],["sortable","currency",3,"sort"],["sortable","isCPActive",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Channel Partner (Summary)"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return r.navigateTo("../form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Add Channel Partner "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(o){return r.eventHeader(o)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(15,"CP Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(17," Channel Partner Name "),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(19,"Category"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(21,"Country"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(23,"State/Province"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(25,"GSTIN"),e.qZA(),e.TgZ(26,"th",18),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(27,"Currency"),e.qZA(),e.TgZ(28,"th",19),e.NdJ("sort",function(o){return r.onSort(o)}),e._uU(29,"Status"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Action"),e.qZA()()(),e.TgZ(32,"tbody"),e.YNc(33,k,30,12,"tr",20),e.qZA()()()()),2&n&&(e.xp6(4),e.Q6J("accessType",r.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,x,r.page,r.pageSize,r.collection,r.search)),e.xp6(23),e.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn))},dependencies:[u.sg,u.O5,N.P,v.j,U.J],encapsulation:2})}return i})();var a=l(60095),D=l(21631),J=l(22096),w=l(78944),M=l(76931),B=l(84913),O=l(90224);const Y=[{message:"Channel Partner Category is required",key:"channelPartnerCategory"},{message:"CP Code is required",key:"CPCode"},{message:"Channel Partner Name is required",key:"channelPartnerName"},{message:"PAN Card No. is required",key:"PANNo"},{message:"GST Classification is required",key:"GSTClassification"},{message:"GSTIN No. is required",key:"GSTIN"},{message:"MSME Classification is required",key:"MSMEClassification"},{message:"Currency is required",key:"currency"},{message:"Payment Terms is required",key:"paymentTerms"}];var L=l(16897);function Q(i,c){if(1&i&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}function E(i,c){if(1&i&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function G(i,c){if(1&i&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function R(i,c){if(1&i&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",null==t?null:t.value),e.xp6(1),e.hij(" ",null==t?null:t.label," ")}}function j(i,c){if(1&i&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",null==t?null:t.label," ")}}function $(i,c){1&i&&e._UZ(0,"div",50)}function z(i,c){1&i&&e._UZ(0,"div",51)}function H(i,c){if(1&i&&(e.TgZ(0,"option",49),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function V(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",52)(1,"button",53),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.submit())}),e._uU(2,"Save"),e.qZA()()}}function K(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",52)(1,"button",53),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.navigateTo())}),e._uU(2,"Back"),e.qZA()()}}const X=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:F},{path:"form",component:(()=>{class i{constructor(t,n,r,s,o,g,f,C){this.activatedRoute=t,this.spinner=n,this.toastService=r,this.channelPartnerService=s,this.validationService=o,this.modalService=g,this.utilityService=f,this.location=C,this.submitted=!1,this.action="create",this.supplierBillingAddressArray=[],this.supplierShippingAddressArray=[],this.supplierBankDetailsArray=[],this.supplierAddressArray=[],this.supplierContactMatrixArray=[],this.active=1,this.autoIncValues=[],this.cpaPurchaseAgreement=null,this.GSTClassification=m.NP,this.MSMEClassification=m.IM,this.masterData={autoIncrementNo:"",currenciesOptions:[],paymentTermsOptions:[],purchaseTypesOptions:[]},this.form=new a.nJ({_id:new a.p4(null),channelPartnerCategory:new a.p4(null,[a.kI.required]),CPCode:new a.p4("",[a.kI.required]),channelPartnerName:new a.p4(null,[a.kI.required]),channelPartnerNickName:new a.p4(""),PANNo:new a.p4("",[a.kI.required]),GSTClassification:new a.p4(null,[a.kI.required]),GSTIN:new a.p4("",[a.kI.required]),udyamAadhaarNo:new a.p4("",[a.kI.required]),MSMEClassification:new a.p4(null,[a.kI.required]),currency:new a.p4(null,[a.kI.required]),paymentTerms:new a.p4(null,[a.kI.required]),isCPActive:new a.p4("Active"),bankSwiftCode:new a.p4(""),billingAddress:new a.nJ({line1:new a.p4(""),line2:new a.p4(""),line3:new a.p4(""),line4:new a.p4(""),state:new a.p4(""),city:new a.p4(""),district:new a.p4(""),pinCode:new a.p4(""),country:new a.p4("India")}),shippingAddress:new a.p4([]),contactMatrix:new a.p4([]),bankDetails:new a.p4([])}),this.statesOfIndia=w.F}get f(){return this.form.controls}get supplierBillingAddress(){return this.form.get("billingAddress")}get supplierShippingAddress(){return this.form.get("supplierShippingAddressForm")}get supplierContactInfo(){return this.form.get("supplierContactMatrixForm")}get supplierBankInfo(){return this.form.get("supplierBankDetailsForm")}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,Y))return;let t=this.form.value;t.shippingAddress=this.supplierShippingAddressArray,t.contactMatrix=this.supplierContactMatrixArray,t.bankDetails=this.supplierBankDetailsArray,t._id?this.update(t._id,t):(delete t._id,this.create(t))}navigateTo(){this.location.back()}create(t){this.spinner.show(),this.channelPartnerService.create(t).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.location.back()})}update(t,n){this.spinner.show(),this.channelPartnerService.update(t,n).subscribe(r=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(r.message),this.location.back()})}supplierCategoryImports(t){let n=this.form.controls.channelPartnerCategory.value;"Domestic"==n?this.form.controls.bankSwiftCode.disable():"Imports"==n&&this.form.controls.bankSwiftCode.enable()}setPANNumber(){let n=this.utilityService.patchPANNumber(this.f.GSTIN.value);this.f.PANNo.setValue(n)}getInitialData(){this.spinner.show(),this.channelPartnerService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.CPCode.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,D.z)(n=>(this.action=n.action,this.utilityService.accessDenied(this.action),n.id?this.channelPartnerService.getById(n.id):(0,J.of)({})))).subscribe(n=>{this.spinner.hide(),0!=Object.keys(n).length&&(1==n.billingAddress.length&&(n.billingAddress=n.billingAddress[0]),this.supplierBankDetailsArray=n.bankDetails,this.supplierContactMatrixArray=n.contactMatrix,this.supplierShippingAddressArray=n.shippingAddress,this.form.patchValue(n),"edit"!=this.action&&this.form.disable())})})}trackByFn(t,n){return n?._id}addSupplierContactInfo(){this.supplierContactMatrixArray.push(JSON.parse(JSON.stringify(this.supplierContactInfo.value))),this.supplierContactInfo.reset()}addSupplierBankInfo(){this.supplierBankDetailsArray.push(JSON.parse(JSON.stringify(this.supplierBankInfo.value))),this.supplierBankInfo.reset()}deleteContactDetails(t){this.supplierContactMatrixArray.splice(t,1)}deleteBankDetails(t){this.supplierBankDetailsArray.splice(t,1)}addShippingAddressModel(){const t=this.modalService.open(B.z,{centered:!0,backdrop:"static",keyboard:!1,windowClass:"modelPage"});t.componentInstance.action=this.action,t.componentInstance.addressArr=this.supplierShippingAddressArray,t.result.then(n=>{["create","edit"].includes(this.action)&&(this.supplierShippingAddressArray=n)},n=>{})}openContactDetailsModal(){const t=this.modalService.open(O.X,{centered:!0,windowClass:"custom-modal",backdrop:"static",keyboard:!1});t.componentInstance.action=this.action,t.componentInstance.supplierContactMatrixArray=this.supplierContactMatrixArray,t.result.then(n=>{["create","edit"].includes(this.action)&&(this.supplierContactMatrixArray=n)},n=>{})}openBankDetailsModal(){const t=this.modalService.open(M.g,{centered:!0,windowClass:"custom-modal",backdrop:"static",keyboard:!1});t.componentInstance.action=this.action,t.componentInstance.channelPartnerHeading="Channel Partner Bank Details",t.componentInstance.providerMaster="providerMaster",t.componentInstance.supplierBankDetailsArray=this.supplierBankDetailsArray,t.componentInstance.swiftCodeForImport={channelPartnerCategory:this.form.value.channelPartnerCategory,channelPartnerName:this.form.value.channelPartnerName},t.result.then(n=>{["create","edit"].includes(this.action)&&(this.supplierBankDetailsArray=n)},n=>{})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(h.gz),e.Y36(p.V),e.Y36(p.kl),e.Y36(Z),e.Y36(L.RJ),e.Y36(T.FF),e.Y36(p.tI),e.Y36(u.Ye))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-channel-partner-form"]],decls:179,vars:17,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","CPCode","readonly","",1,"form-control"],["formControlName","channelPartnerCategory",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","channelPartnerName",1,"form-control"],["type","text","formControlName","channelPartnerNickName",1,"form-control"],["formControlName","GSTClassification",1,"form-select"],["value","null","selected","","disabled",""],["type","text","formControlName","GSTIN",1,"form-control",3,"input"],["type","text","formControlName","PANNo",1,"form-control"],["type","text","formControlName","udyamAadhaarNo",1,"form-control"],["formControlName","MSMEClassification",1,"form-select"],["formControlName","currency",1,"form-select"],["formControlName","paymentTerms",1,"form-select"],[1,"d-flex"],["formControlName","isCPActive",1,"form-select","statusSelectBorder"],["value","Active"],["value","Inactive"],[1,"input-group-text","statusSpanHeight"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"mt-4","d-flex","justify-content-start"],[1,"mb-1","me-3","form-label","customerHeading"],["src","./assets/new_icons/redstroke.svg","alt","","height","18","width","8"],[1,"ms-3","openModelLink","pointer","text-primary",3,"click"],[1,"row","line-border"],["formGroupName","billingAddress",1,"row"],["type","text","formControlName","country",1,"form-control"],["formControlName","state",1,"form-select"],["value","","selected","","disabled",""],["type","text","formControlName","city",1,"form-control"],["oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","type","number","maxlength","6","formControlName","pinCode",1,"form-control"],["type","text","formControlName","line1",1,"form-control"],["type","text","formControlName","line2",1,"form-control"],["type","text","formControlName","line3",1,"form-control"],["type","text","formControlName","line4","readonly","",1,"form-control"],[1,"col-2"],[1,"d-grid","col-auto"],["type","button",1,"btn","bg-primary",3,"click"],["class","col text-end",4,"ngIf"],[3,"value"],[1,"statusActive"],[1,"statusInActive"],[1,"col","text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," CP Code "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Channel Partner Category"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"select",10),e.NdJ("change",function(o){return r.supplierCategoryImports(o)}),e.TgZ(21,"option",11),e._uU(22,"Select Category"),e.qZA(),e.YNc(23,Q,2,2,"option",12),e.qZA()(),e.TgZ(24,"div",6)(25,"label",7),e._uU(26," Channel Partner Name "),e.TgZ(27,"span",8),e._uU(28,"*"),e.qZA()(),e._UZ(29,"input",13),e.qZA(),e.TgZ(30,"div",6)(31,"label",7),e._uU(32," Channel Partner Nick Name "),e.qZA(),e._UZ(33,"input",14),e.qZA()(),e.TgZ(34,"div",5)(35,"div",6)(36,"label",7),e._uU(37," GST Classification "),e.TgZ(38,"span",8),e._uU(39,"*"),e.qZA()(),e.TgZ(40,"select",15)(41,"option",16),e._uU(42,"Select"),e.qZA(),e.YNc(43,E,2,2,"option",12),e.qZA()(),e.TgZ(44,"div",6)(45,"label",7),e._uU(46," GSTIN No."),e.TgZ(47,"span",8),e._uU(48,"*"),e.qZA()(),e.TgZ(49,"input",17),e.NdJ("input",function(){return r.setPANNumber()}),e.qZA()(),e.TgZ(50,"div",6)(51,"label",7),e._uU(52," PAN Card No."),e.TgZ(53,"span",8),e._uU(54,"*"),e.qZA()(),e._UZ(55,"input",18),e.qZA(),e.TgZ(56,"div",6)(57,"label",7),e._uU(58," Udyam Aadhaar No."),e.TgZ(59,"span",8),e._uU(60,"*"),e.qZA()(),e._UZ(61,"input",19),e.qZA()(),e.TgZ(62,"div",5)(63,"div",6)(64,"label",7),e._uU(65," MSME Classification"),e.TgZ(66,"span",8),e._uU(67,"*"),e.qZA()(),e.TgZ(68,"select",20)(69,"option",11),e._uU(70,"Select"),e.qZA(),e.YNc(71,G,2,2,"option",12),e.qZA()(),e.TgZ(72,"div",6)(73,"label",7),e._uU(74," Currency"),e.TgZ(75,"span",8),e._uU(76,"*"),e.qZA()(),e.TgZ(77,"select",21)(78,"option",16),e._uU(79,"Select Currency"),e.qZA(),e.YNc(80,R,2,2,"option",12),e.qZA()(),e.TgZ(81,"div",6)(82,"label",7),e._uU(83," Payment Terms"),e.TgZ(84,"span",8),e._uU(85,"*"),e.qZA()(),e.TgZ(86,"select",22)(87,"option",16),e._uU(88,"Select Payment Terms"),e.qZA(),e.YNc(89,j,2,2,"option",12),e.qZA()(),e.TgZ(90,"div",6)(91,"label",7),e._uU(92," Status "),e.TgZ(93,"span",8),e._uU(94,"*"),e.qZA()(),e.TgZ(95,"div",23)(96,"select",24)(97,"option",11),e._uU(98,"Select Status"),e.qZA(),e.TgZ(99,"option",25),e._uU(100,"Active"),e.qZA(),e.TgZ(101,"option",26),e._uU(102,"Inactive"),e.qZA()(),e.TgZ(103,"span",27),e.YNc(104,$,1,0,"div",28),e.YNc(105,z,1,0,"div",29),e.qZA()()()(),e.TgZ(106,"div",30)(107,"h4",31),e._uU(108,"Bill From Address"),e.qZA(),e.TgZ(109,"span"),e._UZ(110,"img",32),e.qZA(),e.TgZ(111,"h4",33),e.NdJ("click",function(){return r.addShippingAddressModel()}),e._uU(112," Click here to add Ship From Address(if other than Bill From address) "),e.qZA()()(),e._UZ(113,"hr",34),e.ynx(114),e.TgZ(115,"div",35)(116,"div",6)(117,"label",7),e._uU(118," Country "),e.TgZ(119,"span",8),e._uU(120,"*"),e.qZA()(),e._UZ(121,"input",36),e.qZA(),e.TgZ(122,"div",6)(123,"label",7),e._uU(124," State/Province "),e.TgZ(125,"span",8),e._uU(126,"*"),e.qZA()(),e.TgZ(127,"select",37)(128,"option",38),e._uU(129,"Select State"),e.qZA(),e.YNc(130,H,2,2,"option",12),e.qZA()(),e.TgZ(131,"div",6)(132,"label",7),e._uU(133," City/District "),e.TgZ(134,"span",8),e._uU(135,"*"),e.qZA()(),e._UZ(136,"input",39),e.qZA(),e.TgZ(137,"div",6)(138,"label",7),e._uU(139," Pin Code "),e.TgZ(140,"span",8),e._uU(141,"*"),e.qZA()(),e._UZ(142,"input",40),e.qZA()(),e.TgZ(143,"div",35)(144,"div",6)(145,"label",7),e._uU(146,"Address Line 1 "),e.TgZ(147,"span",8),e._uU(148,"*"),e.qZA()(),e._UZ(149,"input",41),e.qZA(),e.TgZ(150,"div",6)(151,"label",7),e._uU(152,"Address Line 2 "),e.TgZ(153,"span",8),e._uU(154,"*"),e.qZA()(),e._UZ(155,"input",42),e.qZA(),e.TgZ(156,"div",6)(157,"label",7),e._uU(158,"Address Line 3 "),e.TgZ(159,"span",8),e._uU(160,"*"),e.qZA()(),e._UZ(161,"input",43),e.qZA(),e.TgZ(162,"div",6)(163,"label",7),e._uU(164,"Address Line 4 "),e._UZ(165,"span",8),e.qZA(),e._UZ(166,"input",44),e.qZA()(),e._UZ(167,"hr",34),e.TgZ(168,"div",5)(169,"div",45)(170,"div",46)(171,"button",47),e.NdJ("click",function(){return r.openContactDetailsModal()}),e._uU(172," Add Contact Details "),e.qZA()()(),e.TgZ(173,"div",45)(174,"div",46)(175,"button",47),e.NdJ("click",function(){return r.openBankDetailsModal()}),e._uU(176," Add Bank Details "),e.qZA()()(),e.YNc(177,V,3,0,"div",48),e.YNc(178,K,3,0,"div",48),e.qZA(),e.BQk(),e.qZA()()),2&n&&(e.Q6J("formGroup",r.form),e.xp6(5),e.hij("Channel Partner Master (",e.lcZ(6,15,r.action),")"),e.xp6(16),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",null==r.masterData?null:r.masterData.purchaseTypesOptions),e.xp6(20),e.Q6J("ngForOf",r.GSTClassification),e.xp6(26),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",r.MSMEClassification),e.xp6(9),e.Q6J("ngForOf",null==r.masterData?null:r.masterData.currenciesOptions),e.xp6(9),e.Q6J("ngForOf",null==r.masterData?null:r.masterData.paymentTermsOptions),e.xp6(8),e.Q6J("value",null),e.xp6(7),e.Q6J("ngIf","Active"==r.form.value.isCPActive),e.xp6(1),e.Q6J("ngIf","Inactive"==r.form.value.isCPActive),e.xp6(25),e.Q6J("ngForOf",r.statesOfIndia),e.xp6(47),e.Q6J("ngIf","view"!=r.action),e.xp6(1),e.Q6J("ngIf","view"==r.action))},dependencies:[u.sg,u.O5,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.nD,a.sg,a.u,a.x0,u.rS],encapsulation:2})}return i})(),resolve:{accessScreen:y.x}}];let W=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[u.ez,h.Bz.forChild(X),P.m]})}return i})()}}]);