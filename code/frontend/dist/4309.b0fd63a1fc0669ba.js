"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4309],{14309:(N,y,c)=>{c.r(y),c.d(y,{ServicesModule:()=>F});var t=c(96814),h=c(1076),T=c(43818),S=c(25116),v=c(98860),e=c(65879),p=c(98977),m=c(74659),_=c(88059),g=c(37285),E=c(53421);function M(n,u){if(1&n){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",19,20)(5,"span",21),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"div",22),e._UZ(17,"button",23),e.TgZ(18,"div",24)(19,"a",25),e.NdJ("click",function(){const d=e.CHM(r).$implicit,l=e.oxw();return e.KtG(l.navigateTo("../form",null==d?null:d._id,"view"))}),e._UZ(20,"i",26),e._uU(21," View "),e.qZA(),e.TgZ(22,"a",25),e.NdJ("click",function(){const d=e.CHM(r).$implicit,l=e.oxw();return e.KtG(l.navigateTo("../form",null==d?null:d._id,"edit"))}),e._UZ(23,"i",27),e._uU(24," Edit "),e.qZA()()()()()}if(2&n){const r=u.$implicit,a=e.MAs(4),i=e.oxw();e.xp6(2),e.Oqu(null==r?null:r.serviceCode),e.xp6(1),e.Udp("width",a.clientWidth),e.xp6(2),e.Q6J("positionTarget",a)("ngbTooltip",r.serviceDescription),e.xp6(1),e.hij(" ",r.serviceDescription," "),e.xp6(2),e.Oqu(null==r?null:r.sacCode),e.xp6(2),e.Oqu(null==r?null:r.igst),e.xp6(2),e.Oqu(null==r?null:r.cgst),e.xp6(2),e.Oqu(null==r?null:r.sgst),e.xp6(5),e.Q6J("accessType",i.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",i.rolePermissionActions.editAction)}}const Z=function(n,u,r,a){return{page:n,pageSize:u,collection:r,search:a,type:"list"}};let C=(()=>{class n{constructor(r,a,i,d,l,A){this.exportExcelService=r,this.router=a,this.spinner=i,this.serviceMasterService=d,this.activatedRoute=l,this.exportToPDFService=A,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=S.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(r,a,i){this.router.navigate([r],{relativeTo:this.activatedRoute,queryParams:{id:a,action:i}})}trackByFn(r,a){return a?._id}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}getAll(r=!1,a=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.serviceMasterService.getAll(i).subscribe(d=>{"EXCEL"==a?this.excelDownload(d.rows):"PDF"==a?this.pdfDownload(d.rows):(this.tableData=d.rows,this.collection=d.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(r){this.exportExcelService.exportExcel((0,v.ev)(r))}pdfDownload(r){let a=(0,v.kw)(r);this.exportToPDFService.generatePdf(a.tableData,a.title)}onSort({column:r,direction:a}){this.headers.forEach(i=>{i.sortable!==r&&(i.direction="")}),this.column=r,this.direction="asc"==a?1:-1,this.getAll()}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(p.Ol),e.Y36(h.F0),e.Y36(p.V),e.Y36(m.DA),e.Y36(h.gz),e.Y36(p.$L))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-services-list"]],viewQuery:function(a,i){if(1&a&&e.Gf(T.j,5),2&a){let d;e.iGM(d=e.CRH())&&(i.headers=d)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","serviceCode",3,"sort"],["sortable","serviceDescription",1,"text-start",3,"sort"],["sortable","sacId.sacCode",3,"sort"],["sortable","igst",3,"sort"],["sortable","cgst",3,"sort"],["sortable","sgst",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["serviceDescription",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Service Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Add Service "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(l){return i.eventHeader(l)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(l){return i.onSort(l)}),e._uU(15,"Service Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(l){return i.onSort(l)}),e._uU(17," Service Description "),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(l){return i.onSort(l)}),e._uU(19,"SAC"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(l){return i.onSort(l)}),e._uU(21,"IGST"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(l){return i.onSort(l)}),e._uU(23,"CGST"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(l){return i.onSort(l)}),e._uU(25,"SGST"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,M,25,12,"tr",18),e.qZA()()()()),2&a&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,Z,i.page,i.pageSize,i.collection,i.search)),e.xp6(19),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[t.sg,_.P,g._L,T.j,E.J],encapsulation:2})}return n})();var o=c(60095),b=c(21631),U=c(22096),I=c(8756),k=c(16897);function f(n,u){if(1&n&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&n){const r=u.$implicit;e.Q6J("value",r._id),e.xp6(1),e.hij(" ",r.sacCode," ")}}function w(n,u){1&n&&e._UZ(0,"hr",25)}const D=function(n){return{"d-none":n}};function G(n,u){if(1&n){const r=e.EpF();e.TgZ(0,"div",26)(1,"div",27)(2,"button",28),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",29)(5,"button",28),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.submit())}),e._uU(6,"Save"),e.qZA()()()}if(2&n){const r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,D,"View"==r.action)),e.xp6(3),e.Q6J("ngClass",e.VKq(4,D,"View"==r.action))}}let P=(()=>{class n{constructor(r,a,i,d,l,A,O){this.activatedRoute=r,this.spinner=a,this.toastService=i,this.serviceMasterService=d,this.validationService=l,this.utilityService=A,this.location=O,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",SACs:[]},this.form=new o.nJ({_id:new o.p4(null),serviceCode:new o.p4(""),sacCode:new o.p4(""),isActive:new o.p4("Y",[o.kI.required]),sacId:new o.p4(null,[o.kI.required]),serviceDescription:new o.p4(""),gst:new o.p4("",[o.kI.required]),igst:new o.p4("",[o.kI.required]),sgst:new o.p4("",[o.kI.required]),cgst:new o.p4("",[o.kI.required])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,I.g))return;this.form.enable();let r=this.form.value;r._id?this.update(r):(delete r._id,this.create(r))}create(r){this.spinner.show(),this.serviceMasterService.create(r).subscribe(a=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(a.message),this.location.back()})}update(r){this.spinner.show(),this.serviceMasterService.update(r._id,r).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(a.message),this.location.back()})}getInitialData(){this.spinner.show(),this.serviceMasterService.getAllMasterData({}).subscribe(r=>{this.masterData=r,this.form.controls.serviceCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.isActive.setValue("Y"),this.activatedRoute.queryParams.pipe((0,b.z)(a=>(this.action=a.action,this.utilityService.accessDenied(this.action),a.id?this.serviceMasterService.getById(a.id):(0,U.of)({})))).subscribe(a=>{this.spinner.hide(),0!=Object.keys(a).length&&(a.sacId._id&&(a.sacId=a.sacId._id),this.form.patchValue(a),"edit"!=this.action&&this.form.disable())})})}setSAC(){let r=this.masterData?.SACs?.find(a=>a._id==this.f.sacId.value);this.form.enable(),this.f.gst.setValue(r.gstRate??0),this.f.igst.setValue(r.igstRate??0),this.f.cgst.setValue(r.cgstRate??0),this.f.sgst.setValue(r.sgstRate??0)}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(h.gz),e.Y36(p.V),e.Y36(p.kl),e.Y36(m.DA),e.Y36(k.RJ),e.Y36(p.tI),e.Y36(t.Ye))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-services-form"]],decls:67,vars:5,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","serviceCode","readonly","",1,"form-control"],["type","text","formControlName","serviceDescription",1,"form-control"],["date",""],["formControlName","isActive",1,"form-select"],["value","Y"],["value","N"],["formControlName","sacId",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","any","formControlName","gst","readonly","",1,"form-control"],["type","any","formControlName","igst","readonly","",1,"form-control"],["type","any","formControlName","cgst","readonly","",1,"form-control"],["type","any","formControlName","sgst","readonly","",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center pb-4",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center","pb-4"],[1,"d-grid","col-md-1","me-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"Service Master"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Service Code "),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",6)(15,"label",7),e._uU(16," Service Description"),e.TgZ(17,"span",8),e._uU(18,"*"),e.qZA()(),e._UZ(19,"input",10,11),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23," Active "),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"select",12)(27,"option",13),e._uU(28,"Yes"),e.qZA(),e.TgZ(29,"option",14),e._uU(30,"No"),e.qZA()()(),e.TgZ(31,"div",6)(32,"label",7),e._uU(33," Select SAC "),e.TgZ(34,"span",8),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"select",15),e.NdJ("change",function(){return i.setSAC()}),e.TgZ(37,"option",16),e._uU(38,"Select SAC No."),e.qZA(),e.YNc(39,f,2,2,"option",17),e.qZA()()(),e.TgZ(40,"div",5)(41,"div",6)(42,"label",7),e._uU(43," GST Rate "),e.TgZ(44,"span",8),e._uU(45,"*"),e.qZA()(),e._UZ(46,"input",18),e.qZA(),e.TgZ(47,"div",6)(48,"label",7),e._uU(49," IGST Rate "),e.TgZ(50,"span",8),e._uU(51,"*"),e.qZA()(),e._UZ(52,"input",19),e.qZA(),e.TgZ(53,"div",6)(54,"label",7),e._uU(55," CGST Rate "),e.TgZ(56,"span",8),e._uU(57,"*"),e.qZA()(),e._UZ(58,"input",20),e.qZA(),e.TgZ(59,"div",6)(60,"label",7),e._uU(61," SGST Rate "),e.TgZ(62,"span",8),e._uU(63,"*"),e.qZA()(),e._UZ(64,"input",21),e.qZA()()(),e.YNc(65,w,1,0,"hr",22),e.YNc(66,G,7,6,"div",23),e.qZA()()),2&a&&(e.Q6J("formGroup",i.form),e.xp6(37),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",null==i.masterData?null:i.masterData.SACs),e.xp6(26),e.Q6J("ngIf","view"!==i.action),e.xp6(1),e.Q6J("ngIf","view"!==i.action))},dependencies:[t.mk,t.sg,t.O5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u],encapsulation:2})}return n})();var R=c(56208);const x=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:C},{path:"form",component:P,resolve:{accessScreen:c(65876).x}}];let F=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.oAB({type:n});static#r=this.\u0275inj=e.cJS({imports:[t.ez,h.Bz.forChild(x),R.m]})}return n})()},13107:(N,y,c)=>{c.d(y,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(N,y,c)=>{c.d(y,{J:()=>t});const t=({data:h,headers:T,widths:S,title:v})=>({tableData:{widths:S,headerRows:1,body:[T.map(m=>({text:m.header,style:"header"})),...h.map(m=>T.map(_=>({style:"subheader",text:m[_.key]})))]},title:v})},98860:(N,y,c)=>{c.d(y,{aC:()=>a,FD:()=>r,mR:()=>re,dk:()=>te,e8:()=>K,nQ:()=>B,JZ:()=>p,ok:()=>e,vZ:()=>D,U4:()=>w,O3:()=>M,SS:()=>E,kw:()=>x,ev:()=>L,sK:()=>O,Y5:()=>A,g4:()=>U,$m:()=>b});var t=c(13107),h=c(28402);let T=["*","*","*","*","*","*","*","*","*","*"],S="HSN Master",v=[{header:"HSN Code",key:"hsnCode",...t.t},{header:"Description of Goods",key:"goodsDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"UGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const e=s=>({title:S,csvData:s,headers:v}),p=s=>(0,h.J)({data:s,headers:v,widths:T,title:S});let m=["*","*","*","*","*","*","*","*","*","*"],_="SAC Master",g=[{header:"SAC Code",key:"sacCode",...t.t},{header:"Description Of Service",key:"serviceDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"\tUGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const E=s=>({title:_,csvData:s,headers:g}),M=s=>(0,h.J)({data:s,headers:g,widths:m,title:_});let Z=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],C="Supplier Master",o=[{header:"Supplier Code",key:"supplierCode",...t.t},{header:"Supplier NAME",key:"supplierName",...t.t},{header:"Supplier Nick Name",key:"supplierNickName",...t.t},{header:"Supplier Category",key:"supplierPurchaseType",...t.t},{header:"PAN Card No.",key:"supplierPAN",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN No.",key:"supplierGST",...t.t},{header:"Udyam Aadhaar Registration No.",key:"supplierUdyogAadhar",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency ",key:"supplierCurrency",...t.t},{header:"Payment Terms ",key:"supplierPaymentTerms",...t.t},{header:"Freight/Inco Terms ",key:"supplierINCOTerms",...t.t},{header:"Country ",key:"country",...t.t},{header:"State/Province ",key:"state",...t.t},{header:"City/District ",key:"city",...t.t},{header:"Pincode ",key:"pinCode",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Lead Time for Supply (in Days)",key:"supplierLeadTimeInDays",...t.t},{header:"Contract Purchase Agreement",key:"cpaFileUrl",...t.t},{header:"Contact Person Name",key:"supplierContactPersonName",...t.t},{header:"Department",key:"supplierContactPersonDepartment",...t.t},{header:"Designation",key:"supplierContactPersonDesignation",...t.t},{header:"Mob. No.",key:"supplierContactPersonNumber",...t.t},{header:"E-Mail ID",key:"supplierContactPersonEmail",...t.t},{header:"Beneficiary Name",key:"befName",...t.t},{header:"Bank Name",key:"bankName",...t.t},{header:"Account Type",key:"accountType",...t.t},{header:"Account No",key:"accountNumber",...t.t},{header:"IFC Code",key:"bankIFSCCode",...t.t},{header:"Swift Code [For Imports]",key:"bankSwiftCode",...t.t},{header:"Status",key:"isSupplierActive",...t.t}];const b=s=>({title:C,csvData:s,headers:o}),U=s=>(0,h.J)({data:s,headers:o,widths:Z,title:C});let I=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],k="Item Master",f=[{header:"Item Category",key:"itemType",...t.t},{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"orderInfoUOM",...t.t},{header:"Unit Conversion",key:"conversionOfUnits",...t.t},{header:"HSN Code",key:"hsn",...t.t},{header:"RO Level",key:"itemROL",...t.t},{header:"RO Qty",key:"itemAMU",...t.t},{header:"Technical Data Sheet",key:"tdsFileUrl",...t.t},{header:"Material Safety Data Sheet",key:"msdsFileUrl",...t.t},{header:"Shelf Life [Months]",key:"shelfLife",...t.t},{header:"Storage Temperature [\xb0C]",key:"storageTemp",...t.t},{header:"Storage Humidity [RH]",key:"storageHumidity",...t.t},{header:"Special Storage Instruction",key:"specialStorageInstruction",...t.t},{header:"QC Level",key:"QCLevels",...t.t},{header:"Supplier Name",key:"supplierName",...t.t},{header:"Supplier Item Description",key:"supplierDescription",...t.t},{header:"Supplier Item Code",key:"spin",...t.t},{header:"Currency",key:"supplierCurrency",...t.t},{header:"Purchase Cost [Exclusive of GST] ",key:"stdCostUom1",...t.t},{header:"Status",key:"isActive",...t.t}];const w=s=>({title:k,csvData:s,headers:f}),D=s=>(0,h.J)({data:s,headers:f,widths:I,title:k});let G=["*","*","*","*","*","*","*","*","*"],P="Service Master",R=[{header:"Service Code",key:"serviceCode",...t.t},{header:"Service Description",key:"serviceDescription",...t.t},{header:"SAC",key:"sacCode",...t.t},{header:"GST",key:"gst",...t.t},{header:"IGST",key:"igst",...t.t},{header:"CGST",key:"cgst",...t.t},{header:"SGST",key:"sgst",...t.t}];const L=s=>({title:P,csvData:s,headers:R}),x=s=>(0,h.J)({data:s,headers:R,widths:G,title:P});let F=["*","*","*","*","*","*","*","*","*"],n="Capital Goods Master",u=[{header:"CG Code",key:"capitalGoodsNo",...t.t},{header:"Capital Goods Name",key:"capitalGoodsName",...t.t},{header:"Capital Goods Description",key:"capitalGoodsDescription",...t.t},{header:"Capital Goods Specification",key:"capitalGoodsSpecification",...t.t},{header:"UOM",key:"UOM",...t.t},{header:"HSN Code",key:"hsnCode",...t.t},{header:"Supplier Part No.",key:"supplierPartNo",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Purchase Cost",key:"purchaseCost",...t.t}];const r=s=>({title:n,csvData:s,headers:u}),a=s=>(0,h.J)({data:s,headers:u,widths:F,title:n});let i=["*","*","*","*","*","*"],d="Supplier Evaluation Master",l=[{header:"Name",key:"name",...t.t},{header:"Description",key:"description",...t.t},{header:"Enabled",key:"enabled",...t.t},{header:"Weight",key:"weight",...t.t},{header:"Passing %",key:"passingPercentage",...t.t},{header:"Failing %",key:"failingPercentage",...t.t}];const A=s=>({title:d,csvData:s,headers:l}),O=s=>(0,h.J)({data:s,headers:l,widths:i,title:d});let j=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],J="External (Service) Provider Master",q=[{header:"Category",key:"ESPCategory",...t.t},{header:"ESP Code",key:"ESPCode",...t.t},{header:"External Service Provider Name",key:"ESPName",...t.t},{header:"External Service Provider NickName",key:"ESPNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isESPActive",...t.t}];const B=s=>({title:J,csvData:s,headers:q}),K=s=>(0,h.J)({data:s,headers:q,widths:j,title:J});let ee=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],z="Channel Partner Master",X=[{header:"Category",key:"channelPartnerCategory",...t.t},{header:"CP Code",key:"CPCode",...t.t},{header:"Channel Partner Name",key:"channelPartnerName",...t.t},{header:"Channel Partner NickName",key:"channelPartnerNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isCPActive",...t.t}];const te=s=>({title:z,csvData:s,headers:X}),re=s=>(0,h.J)({data:s,headers:X,widths:ee,title:z})}}]);