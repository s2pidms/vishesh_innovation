"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1632],{71632:(N,u,o)=>{o.r(u),o.d(u,{SupplierEvaluationModule:()=>G});var t=o(96814),h=o(1076),T=o(43818),g=o(25116),S=o(98860),e=o(65879),p=o(98977),y=o(74659),v=o(88059),A=o(37285),D=o(53421);function b(n,m){if(1&n){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",19,20)(5,"span",21),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.ALo(14,"number"),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.ALo(17,"number"),e.qZA(),e.TgZ(18,"td")(19,"div",22),e._UZ(20,"button",23),e.TgZ(21,"div",24)(22,"a",25),e.NdJ("click",function(){const d=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.navigateTo("../form",d,"view"))}),e._UZ(23,"i",26),e._uU(24," View "),e.qZA(),e.TgZ(25,"a",25),e.NdJ("click",function(){const d=e.CHM(r).$implicit,c=e.oxw();return e.KtG(c.navigateTo("../form",d,"edit"))}),e._UZ(26,"i",27),e._uU(27," Edit "),e.qZA()()()()()}if(2&n){const r=m.$implicit,a=e.MAs(4),i=e.oxw();e.xp6(2),e.Oqu(null==r?null:r.name),e.xp6(1),e.Udp("width",a.clientWidth),e.xp6(2),e.Q6J("positionTarget",a)("ngbTooltip",r.description),e.xp6(1),e.hij(" ",r.description," "),e.xp6(2),e.Oqu(null==r?null:r.enabled),e.xp6(2),e.Oqu(e.xi3(11,12,null==r?null:r.weight,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(14,15,null==r?null:r.passingPercentage,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(17,18,null==r?null:r.failingPercentage,"1.2-2")),e.xp6(6),e.Q6J("accessType",i.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",i.rolePermissionActions.editAction)}}const M=function(n,m,r,a){return{page:n,pageSize:m,collection:r,search:a,type:"list"}};let k=(()=>{class n{constructor(r,a,i,d,c,_){this.exportExcelService=r,this.router=a,this.spinner=i,this.supplierEvaluationService=d,this.activatedRoute=c,this.exportToPDFService=_,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=g.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(r=!1,a=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.supplierEvaluationService.getAll(i).subscribe(d=>{"EXCEL"==a?this.excelDownload(d.rows):"PDF"==a?this.pdfDownload(d.rows):(this.tableData=d.rows,this.collection=d.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(r,a,i){this.router.navigate([r],{relativeTo:this.activatedRoute,queryParams:{id:a?._id,action:i}})}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}trackByFn(r,a){return a?._id}excelDownload(r){this.exportExcelService.exportExcel((0,S.Y5)(r))}pdfDownload(r){let a=(0,S.sK)(r);this.exportToPDFService.generatePdf(a.tableData,a.title)}onSort({column:r,direction:a}){this.headers.forEach(i=>{i.sortable!==r&&(i.direction="")}),this.column=r,this.direction="asc"==a?1:-1,this.getAll()}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(p.Ol),e.Y36(h.F0),e.Y36(p.V),e.Y36(y.Sr),e.Y36(h.gz),e.Y36(p.$L))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-supplier-evaluation-list"]],viewQuery:function(a,i){if(1&a&&e.Gf(T.j,5),2&a){let d;e.iGM(d=e.CRH())&&(i.headers=d)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","name",3,"sort"],["sortable","description",1,"text-start",3,"sort"],["sortable","enabled",3,"sort"],["sortable","weight",3,"sort"],["sortable","passingPercentage",3,"sort"],["sortable","failingPercentage",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["description",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(a,i){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Supplier Evaluation Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Supplier Evaluation "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(c){return i.eventHeader(c)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(c){return i.onSort(c)}),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(c){return i.onSort(c)}),e._uU(17,"Description"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(c){return i.onSort(c)}),e._uU(19,"Enabled"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(c){return i.onSort(c)}),e._uU(21,"Weight"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(c){return i.onSort(c)}),e._uU(23,"Passing %"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(c){return i.onSort(c)}),e._uU(25,"Failing %"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,b,28,21,"tr",18),e.qZA()()()()),2&a&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,M,i.page,i.pageSize,i.collection,i.search)),e.xp6(19),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[t.sg,v.P,A._L,T.j,D.J,t.JJ],encapsulation:2})}return n})();var l=o(60095);const Z=[{message:"Name is Required",key:"name"},{message:"Description is Required",key:"description"},{message:"Enabled is Required",key:"enabled"},{message:"weight is Required",key:"weight"},{message:"Passing %  is Required",key:"passingPercentage"},{message:"Failing %  is Required",key:"failingPercentage"}];var U=o(21631),w=o(22096),C=o(16897);function E(n,m){1&n&&e._UZ(0,"hr",19)}const f=function(n){return{"d-none":n}};function I(n,m){if(1&n){const r=e.EpF();e.TgZ(0,"div",20)(1,"div",21)(2,"button",22),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",23)(5,"button",22),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.submit())}),e._uU(6,"Save"),e.qZA()()()}if(2&n){const r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,f,"View"==r.action)),e.xp6(3),e.Q6J("ngClass",e.VKq(4,f,"View"==r.action))}}let L=(()=>{class n{constructor(r,a,i,d,c,_,F){this.activatedRoute=r,this.spinner=a,this.toastService=i,this.validationService=d,this.supplierEvaluationService=c,this.location=_,this.utilityService=F,this.form=new l.nJ({_id:new l.p4(null),name:new l.p4("",[l.kI.required]),description:new l.p4("",[l.kI.required]),enabled:new l.p4(null,[l.kI.required]),weight:new l.p4("",[l.kI.required]),passingPercentage:new l.p4("",[l.kI.required]),failingPercentage:new l.p4("",[l.kI.required])}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,Z))return;let r=this.form.value;r._id?this.update(r):(delete r._id,this.create(r))}update(r){this.spinner.show(),this.supplierEvaluationService.update(r._id,r).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(a.message),this.location.back()})}create(r){this.spinner.show(),this.supplierEvaluationService.create(r).subscribe(a=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(a.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,U.z)(r=>(this.action=r.action,this.utilityService.accessDenied(this.action),r.id?this.supplierEvaluationService.getById(r.id):(0,w.of)({})))).subscribe(r=>{this.spinner.hide(),0!=Object.keys(r).length&&(this.form.patchValue(r),"edit"!=this.action&&this.form.disable())})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(h.gz),e.Y36(p.V),e.Y36(p.kl),e.Y36(C.RJ),e.Y36(y.Sr),e.Y36(t.Ye),e.Y36(p.tI))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-supplier-evaluation-form"]],decls:54,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["formControlName","name",1,"form-control"],["formControlName","description",1,"form-control"],["formControlName","enabled",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],["type","number","formControlName","weight",1,"form-control"],["type","number","formControlName","passingPercentage",1,"form-control"],["type","number","formControlName","failingPercentage",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center my-4",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","my-4"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(a,i){1&a&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11,"Name "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17,"Description"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",10),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23,"Enabled"),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"select",11)(27,"option",12),e._uU(28,"Select Status"),e.qZA(),e.TgZ(29,"option",13),e._uU(30,"Active"),e.qZA(),e.TgZ(31,"option",13),e._uU(32,"Inactive"),e.qZA()()()(),e.TgZ(33,"div",5)(34,"div",6)(35,"label",7),e._uU(36,"Weight "),e.TgZ(37,"span",8),e._uU(38,"*"),e.qZA()(),e._UZ(39,"input",14),e.qZA(),e.TgZ(40,"div",6)(41,"label",7),e._uU(42,"Passing %"),e.TgZ(43,"span",8),e._uU(44,"*"),e.qZA()(),e._UZ(45,"input",15),e.qZA(),e.TgZ(46,"div",6)(47,"label",7),e._uU(48,"Failing % "),e.TgZ(49,"span",8),e._uU(50,"*"),e.qZA()(),e._UZ(51,"input",16),e.qZA()()(),e.YNc(52,E,1,0,"hr",17),e.YNc(53,I,7,6,"div",18),e.qZA()()),2&a&&(e.Q6J("formGroup",i.form),e.xp6(5),e.hij("Enter Supplier Evaluation [",e.lcZ(6,7,i.action),"]"),e.xp6(22),e.Q6J("value",null),e.xp6(2),e.Q6J("value","Active"),e.xp6(2),e.Q6J("value","Inactive"),e.xp6(21),e.Q6J("ngIf","view"!==i.action),e.xp6(1),e.Q6J("ngIf","view"!==i.action))},dependencies:[t.mk,t.O5,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.sg,l.u,t.rS],encapsulation:2})}return n})();var P=o(56208);const x=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:k},{path:"form",component:L,resolve:{accessScreen:o(65876).x}}];let G=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.oAB({type:n});static#r=this.\u0275inj=e.cJS({imports:[t.ez,h.Bz.forChild(x),P.m]})}return n})()},13107:(N,u,o)=>{o.d(u,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(N,u,o)=>{o.d(u,{J:()=>t});const t=({data:h,headers:T,widths:g,title:S})=>({tableData:{widths:g,headerRows:1,body:[T.map(y=>({text:y.header,style:"header"})),...h.map(y=>T.map(v=>({style:"subheader",text:y[v.key]})))]},title:S})},98860:(N,u,o)=>{o.d(u,{aC:()=>i,FD:()=>a,mR:()=>re,dk:()=>te,e8:()=>K,nQ:()=>j,JZ:()=>p,ok:()=>e,vZ:()=>I,U4:()=>f,O3:()=>b,SS:()=>D,kw:()=>G,ev:()=>x,sK:()=>B,Y5:()=>F,g4:()=>U,$m:()=>Z});var t=o(13107),h=o(28402);let T=["*","*","*","*","*","*","*","*","*","*"],g="HSN Master",S=[{header:"HSN Code",key:"hsnCode",...t.t},{header:"Description of Goods",key:"goodsDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"UGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const e=s=>({title:g,csvData:s,headers:S}),p=s=>(0,h.J)({data:s,headers:S,widths:T,title:g});let y=["*","*","*","*","*","*","*","*","*","*"],v="SAC Master",A=[{header:"SAC Code",key:"sacCode",...t.t},{header:"Description Of Service",key:"serviceDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"\tUGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const D=s=>({title:v,csvData:s,headers:A}),b=s=>(0,h.J)({data:s,headers:A,widths:y,title:v});let M=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],k="Supplier Master",l=[{header:"Supplier Code",key:"supplierCode",...t.t},{header:"Supplier NAME",key:"supplierName",...t.t},{header:"Supplier Nick Name",key:"supplierNickName",...t.t},{header:"Supplier Category",key:"supplierPurchaseType",...t.t},{header:"PAN Card No.",key:"supplierPAN",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN No.",key:"supplierGST",...t.t},{header:"Udyam Aadhaar Registration No.",key:"supplierUdyogAadhar",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency ",key:"supplierCurrency",...t.t},{header:"Payment Terms ",key:"supplierPaymentTerms",...t.t},{header:"Freight/Inco Terms ",key:"supplierINCOTerms",...t.t},{header:"Country ",key:"country",...t.t},{header:"State/Province ",key:"state",...t.t},{header:"City/District ",key:"city",...t.t},{header:"Pincode ",key:"pinCode",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Lead Time for Supply (in Days)",key:"supplierLeadTimeInDays",...t.t},{header:"Contract Purchase Agreement",key:"cpaFileUrl",...t.t},{header:"Contact Person Name",key:"supplierContactPersonName",...t.t},{header:"Department",key:"supplierContactPersonDepartment",...t.t},{header:"Designation",key:"supplierContactPersonDesignation",...t.t},{header:"Mob. No.",key:"supplierContactPersonNumber",...t.t},{header:"E-Mail ID",key:"supplierContactPersonEmail",...t.t},{header:"Beneficiary Name",key:"befName",...t.t},{header:"Bank Name",key:"bankName",...t.t},{header:"Account Type",key:"accountType",...t.t},{header:"Account No",key:"accountNumber",...t.t},{header:"IFC Code",key:"bankIFSCCode",...t.t},{header:"Swift Code [For Imports]",key:"bankSwiftCode",...t.t},{header:"Status",key:"isSupplierActive",...t.t}];const Z=s=>({title:k,csvData:s,headers:l}),U=s=>(0,h.J)({data:s,headers:l,widths:M,title:k});let w=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],C="Item Master",E=[{header:"Item Category",key:"itemType",...t.t},{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"orderInfoUOM",...t.t},{header:"Unit Conversion",key:"conversionOfUnits",...t.t},{header:"HSN Code",key:"hsn",...t.t},{header:"RO Level",key:"itemROL",...t.t},{header:"RO Qty",key:"itemAMU",...t.t},{header:"Technical Data Sheet",key:"tdsFileUrl",...t.t},{header:"Material Safety Data Sheet",key:"msdsFileUrl",...t.t},{header:"Shelf Life [Months]",key:"shelfLife",...t.t},{header:"Storage Temperature [\xb0C]",key:"storageTemp",...t.t},{header:"Storage Humidity [RH]",key:"storageHumidity",...t.t},{header:"Special Storage Instruction",key:"specialStorageInstruction",...t.t},{header:"QC Level",key:"QCLevels",...t.t},{header:"Supplier Name",key:"supplierName",...t.t},{header:"Supplier Item Description",key:"supplierDescription",...t.t},{header:"Supplier Item Code",key:"spin",...t.t},{header:"Currency",key:"supplierCurrency",...t.t},{header:"Purchase Cost [Exclusive of GST] ",key:"stdCostUom1",...t.t},{header:"Status",key:"isActive",...t.t}];const f=s=>({title:C,csvData:s,headers:E}),I=s=>(0,h.J)({data:s,headers:E,widths:w,title:C});let L=["*","*","*","*","*","*","*","*","*"],P="Service Master",R=[{header:"Service Code",key:"serviceCode",...t.t},{header:"Service Description",key:"serviceDescription",...t.t},{header:"SAC",key:"sacCode",...t.t},{header:"GST",key:"gst",...t.t},{header:"IGST",key:"igst",...t.t},{header:"CGST",key:"cgst",...t.t},{header:"SGST",key:"sgst",...t.t}];const x=s=>({title:P,csvData:s,headers:R}),G=s=>(0,h.J)({data:s,headers:R,widths:L,title:P});let n=["*","*","*","*","*","*","*","*","*"],m="Capital Goods Master",r=[{header:"CG Code",key:"capitalGoodsNo",...t.t},{header:"Capital Goods Name",key:"capitalGoodsName",...t.t},{header:"Capital Goods Description",key:"capitalGoodsDescription",...t.t},{header:"Capital Goods Specification",key:"capitalGoodsSpecification",...t.t},{header:"UOM",key:"UOM",...t.t},{header:"HSN Code",key:"hsnCode",...t.t},{header:"Supplier Part No.",key:"supplierPartNo",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Purchase Cost",key:"purchaseCost",...t.t}];const a=s=>({title:m,csvData:s,headers:r}),i=s=>(0,h.J)({data:s,headers:r,widths:n,title:m});let d=["*","*","*","*","*","*"],c="Supplier Evaluation Master",_=[{header:"Name",key:"name",...t.t},{header:"Description",key:"description",...t.t},{header:"Enabled",key:"enabled",...t.t},{header:"Weight",key:"weight",...t.t},{header:"Passing %",key:"passingPercentage",...t.t},{header:"Failing %",key:"failingPercentage",...t.t}];const F=s=>({title:c,csvData:s,headers:_}),B=s=>(0,h.J)({data:s,headers:_,widths:d,title:c});let X=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],O="External (Service) Provider Master",J=[{header:"Category",key:"ESPCategory",...t.t},{header:"ESP Code",key:"ESPCode",...t.t},{header:"External Service Provider Name",key:"ESPName",...t.t},{header:"External Service Provider NickName",key:"ESPNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isESPActive",...t.t}];const j=s=>({title:O,csvData:s,headers:J}),K=s=>(0,h.J)({data:s,headers:J,widths:X,title:O});let ee=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],V="Channel Partner Master",z=[{header:"Category",key:"channelPartnerCategory",...t.t},{header:"CP Code",key:"CPCode",...t.t},{header:"Channel Partner Name",key:"channelPartnerName",...t.t},{header:"Channel Partner NickName",key:"channelPartnerNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isCPActive",...t.t}];const te=s=>({title:V,csvData:s,headers:z}),re=s=>(0,h.J)({data:s,headers:z,widths:ee,title:V})}}]);