"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1632],{71632:(D,y,l)=>{l.r(y),l.d(y,{SupplierEvaluationModule:()=>G});var t=l(96814),u=l(1076),T=l(43818),v=l(25116),S=l(98860),e=l(65879),h=l(98977),m=l(74659),_=l(88059),k=l(37285),b=l(53421);function M(n,p){if(1&n){const s=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",19,20)(5,"span",21),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.ALo(14,"number"),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.ALo(17,"number"),e.qZA(),e.TgZ(18,"td")(19,"div",22),e._UZ(20,"button",23),e.TgZ(21,"div",24)(22,"a",25),e.NdJ("click",function(){const c=e.CHM(s).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",c,"view"))}),e._UZ(23,"i",26),e._uU(24," View "),e.qZA(),e.TgZ(25,"a",25),e.NdJ("click",function(){const c=e.CHM(s).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",c,"edit"))}),e._UZ(26,"i",27),e._uU(27," Edit "),e.qZA()()()()()}if(2&n){const s=p.$implicit,r=e.MAs(4),a=e.oxw();e.xp6(2),e.Oqu(null==s?null:s.name),e.xp6(1),e.Udp("width",r.clientWidth),e.xp6(2),e.Q6J("positionTarget",r)("ngbTooltip",s.description),e.xp6(1),e.hij(" ",s.description," "),e.xp6(2),e.Oqu(null==s?null:s.enabled),e.xp6(2),e.Oqu(e.xi3(11,12,null==s?null:s.weight,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(14,15,null==s?null:s.passingPercentage,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(17,18,null==s?null:s.failingPercentage,"1.2-2")),e.xp6(6),e.Q6J("accessType",a.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",a.rolePermissionActions.editAction)}}const Z=function(n,p,s,r){return{page:n,pageSize:p,collection:s,search:r,type:"list"}};let C=(()=>{var n;class p{constructor(r,a,c,o,g,A){this.exportExcelService=r,this.router=a,this.spinner=c,this.supplierEvaluationService=o,this.activatedRoute=g,this.exportToPDFService=A,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(r=!1,a=""){this.spinner.show();let c={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.supplierEvaluationService.getAll(c).subscribe(o=>{"EXCEL"==a?this.excelDownload(o.rows):"PDF"==a?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(r,a,c){this.router.navigate([r],{relativeTo:this.activatedRoute,queryParams:{id:a?._id,action:c}})}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}trackByFn(r,a){return a?._id}excelDownload(r){this.exportExcelService.exportExcel((0,S.Y5)(r))}pdfDownload(r){let a=(0,S.sK)(r);this.exportToPDFService.generatePdf(a.tableData,a.title)}onSort({column:r,direction:a}){this.headers.forEach(c=>{c.sortable!==r&&(c.direction="")}),this.column=r,this.direction="asc"==a?1:-1,this.getAll()}}return(n=p).\u0275fac=function(r){return new(r||n)(e.Y36(h.Ol),e.Y36(u.F0),e.Y36(h.V),e.Y36(m.Sr),e.Y36(u.gz),e.Y36(h.$L))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-supplier-evaluation-list"]],viewQuery:function(r,a){if(1&r&&e.Gf(T.j,5),2&r){let c;e.iGM(c=e.CRH())&&(a.headers=c)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","name",3,"sort"],["sortable","description",1,"text-start",3,"sort"],["sortable","enabled",3,"sort"],["sortable","weight",3,"sort"],["sortable","passingPercentage",3,"sort"],["sortable","failingPercentage",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["description",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Supplier Evaluation Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return a.navigateTo("../form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Supplier Evaluation "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(o){return a.eventHeader(o)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(17,"Description"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(19,"Enabled"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(21,"Weight"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(23,"Passing %"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(o){return a.onSort(o)}),e._uU(25,"Failing %"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,M,28,21,"tr",18),e.qZA()()()()),2&r&&(e.xp6(4),e.Q6J("accessType",a.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,Z,a.page,a.pageSize,a.collection,a.search)),e.xp6(19),e.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[t.sg,_.P,k._L,T.j,b.J,t.JJ],encapsulation:2}),p})();var d=l(60095);const U=[{message:"Name is Required",key:"name"},{message:"Description is Required",key:"description"},{message:"Enabled is Required",key:"enabled"},{message:"weight is Required",key:"weight"},{message:"Passing %  is Required",key:"passingPercentage"},{message:"Failing %  is Required",key:"failingPercentage"}];var w=l(21631),L=l(22096),E=l(16897);function f(n,p){1&n&&e._UZ(0,"hr",19)}const P=function(n){return{"d-none":n}};function I(n,p){if(1&n){const s=e.EpF();e.TgZ(0,"div",20)(1,"div",21)(2,"button",22),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",23)(5,"button",22),e.NdJ("click",function(){e.CHM(s);const a=e.oxw();return e.KtG(a.submit())}),e._uU(6,"Save"),e.qZA()()()}if(2&n){const s=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,P,"View"==s.action)),e.xp6(3),e.Q6J("ngClass",e.VKq(4,P,"View"==s.action))}}let x=(()=>{var n;class p{constructor(r,a,c,o,g,A,O){this.activatedRoute=r,this.spinner=a,this.toastService=c,this.validationService=o,this.supplierEvaluationService=g,this.location=A,this.utilityService=O,this.form=new d.nJ({_id:new d.p4(null),name:new d.p4("",[d.kI.required]),description:new d.p4("",[d.kI.required]),enabled:new d.p4(null,[d.kI.required]),weight:new d.p4("",[d.kI.required]),passingPercentage:new d.p4("",[d.kI.required]),failingPercentage:new d.p4("",[d.kI.required])}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,U))return;let r=this.form.value;r._id?this.update(r):(delete r._id,this.create(r))}update(r){this.spinner.show(),this.supplierEvaluationService.update(r._id,r).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(a.message),this.location.back()})}create(r){this.spinner.show(),this.supplierEvaluationService.create(r).subscribe(a=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(a.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,w.z)(r=>(this.action=r.action,this.utilityService.accessDenied(this.action),r.id?this.supplierEvaluationService.getById(r.id):(0,L.of)({})))).subscribe(r=>{this.spinner.hide(),0!=Object.keys(r).length&&(this.form.patchValue(r),"edit"!=this.action&&this.form.disable())})}}return(n=p).\u0275fac=function(r){return new(r||n)(e.Y36(u.gz),e.Y36(h.V),e.Y36(h.kl),e.Y36(E.RJ),e.Y36(m.Sr),e.Y36(t.Ye),e.Y36(h.tI))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-supplier-evaluation-form"]],decls:54,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["formControlName","name",1,"form-control"],["formControlName","description",1,"form-control"],["formControlName","enabled",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],["type","number","formControlName","weight",1,"form-control"],["type","number","formControlName","passingPercentage",1,"form-control"],["type","number","formControlName","failingPercentage",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center my-4",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","my-4"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(r,a){1&r&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11,"Name "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17,"Description"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",10),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23,"Enabled"),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"select",11)(27,"option",12),e._uU(28,"Select Status"),e.qZA(),e.TgZ(29,"option",13),e._uU(30,"Active"),e.qZA(),e.TgZ(31,"option",13),e._uU(32,"Inactive"),e.qZA()()()(),e.TgZ(33,"div",5)(34,"div",6)(35,"label",7),e._uU(36,"Weight "),e.TgZ(37,"span",8),e._uU(38,"*"),e.qZA()(),e._UZ(39,"input",14),e.qZA(),e.TgZ(40,"div",6)(41,"label",7),e._uU(42,"Passing %"),e.TgZ(43,"span",8),e._uU(44,"*"),e.qZA()(),e._UZ(45,"input",15),e.qZA(),e.TgZ(46,"div",6)(47,"label",7),e._uU(48,"Failing % "),e.TgZ(49,"span",8),e._uU(50,"*"),e.qZA()(),e._UZ(51,"input",16),e.qZA()()(),e.YNc(52,f,1,0,"hr",17),e.YNc(53,I,7,6,"div",18),e.qZA()()),2&r&&(e.Q6J("formGroup",a.form),e.xp6(5),e.hij("Enter Supplier Evaluation [",e.lcZ(6,7,a.action),"]"),e.xp6(22),e.Q6J("value",null),e.xp6(2),e.Q6J("value","Active"),e.xp6(2),e.Q6J("value","Inactive"),e.xp6(21),e.Q6J("ngIf","view"!==a.action),e.xp6(1),e.Q6J("ngIf","view"!==a.action))},dependencies:[t.mk,t.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.sg,d.u,t.rS],encapsulation:2}),p})();var R=l(56208);const F=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:C},{path:"form",component:x,resolve:{accessScreen:l(65876).x}}];let G=(()=>{var n;class p{}return(n=p).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.ez,u.Bz.forChild(F),R.m]}),p})()},13107:(D,y,l)=>{l.d(y,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,y,l)=>{l.d(y,{J:()=>t});const t=({data:u,headers:T,widths:v,title:S})=>({tableData:{widths:v,headerRows:1,body:[T.map(m=>({text:m.header,style:"header"})),...u.map(m=>T.map(_=>({style:"subheader",text:m[_.key]})))]},title:S})},98860:(D,y,l)=>{l.d(y,{aC:()=>a,FD:()=>r,mR:()=>re,dk:()=>te,e8:()=>K,nQ:()=>j,JZ:()=>h,ok:()=>e,vZ:()=>I,U4:()=>P,O3:()=>M,SS:()=>b,kw:()=>G,ev:()=>F,sK:()=>O,Y5:()=>A,g4:()=>w,$m:()=>U});var t=l(13107),u=l(28402);let T=["*","*","*","*","*","*","*","*","*","*"],v="HSN Master",S=[{header:"HSN Code",key:"hsnCode",...t.t},{header:"Description of Goods",key:"goodsDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"UGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const e=i=>({title:v,csvData:i,headers:S}),h=i=>(0,u.J)({data:i,headers:S,widths:T,title:v});let m=["*","*","*","*","*","*","*","*","*","*"],_="SAC Master",k=[{header:"SAC Code",key:"sacCode",...t.t},{header:"Description Of Service",key:"serviceDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"\tUGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const b=i=>({title:_,csvData:i,headers:k}),M=i=>(0,u.J)({data:i,headers:k,widths:m,title:_});let Z=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],C="Supplier Master",d=[{header:"Supplier Code",key:"supplierCode",...t.t},{header:"Supplier NAME",key:"supplierName",...t.t},{header:"Supplier Nick Name",key:"supplierNickName",...t.t},{header:"Supplier Category",key:"supplierPurchaseType",...t.t},{header:"PAN Card No.",key:"supplierPAN",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN No.",key:"supplierGST",...t.t},{header:"Udyam Aadhaar Registration No.",key:"supplierUdyogAadhar",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency ",key:"supplierCurrency",...t.t},{header:"Payment Terms ",key:"supplierPaymentTerms",...t.t},{header:"Freight/Inco Terms ",key:"supplierINCOTerms",...t.t},{header:"Country ",key:"country",...t.t},{header:"State/Province ",key:"state",...t.t},{header:"City/District ",key:"city",...t.t},{header:"Pincode ",key:"pinCode",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Lead Time for Supply (in Days)",key:"supplierLeadTimeInDays",...t.t},{header:"Contract Purchase Agreement",key:"cpaFileUrl",...t.t},{header:"Contact Person Name",key:"supplierContactPersonName",...t.t},{header:"Department",key:"supplierContactPersonDepartment",...t.t},{header:"Designation",key:"supplierContactPersonDesignation",...t.t},{header:"Mob. No.",key:"supplierContactPersonNumber",...t.t},{header:"E-Mail ID",key:"supplierContactPersonEmail",...t.t},{header:"Beneficiary Name",key:"befName",...t.t},{header:"Bank Name",key:"bankName",...t.t},{header:"Account Type",key:"accountType",...t.t},{header:"Account No",key:"accountNumber",...t.t},{header:"IFC Code",key:"bankIFSCCode",...t.t},{header:"Swift Code [For Imports]",key:"bankSwiftCode",...t.t},{header:"Status",key:"isSupplierActive",...t.t}];const U=i=>({title:C,csvData:i,headers:d}),w=i=>(0,u.J)({data:i,headers:d,widths:Z,title:C});let L=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],E="Item Master",f=[{header:"Item Category",key:"itemType",...t.t},{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"orderInfoUOM",...t.t},{header:"Unit Conversion",key:"conversionOfUnits",...t.t},{header:"HSN Code",key:"hsn",...t.t},{header:"RO Level",key:"itemROL",...t.t},{header:"RO Qty",key:"itemAMU",...t.t},{header:"Technical Data Sheet",key:"tdsFileUrl",...t.t},{header:"Material Safety Data Sheet",key:"msdsFileUrl",...t.t},{header:"Shelf Life [Months]",key:"shelfLife",...t.t},{header:"Storage Temperature [\xb0C]",key:"storageTemp",...t.t},{header:"Storage Humidity [RH]",key:"storageHumidity",...t.t},{header:"Special Storage Instruction",key:"specialStorageInstruction",...t.t},{header:"QC Level",key:"QCLevels",...t.t},{header:"Supplier Name",key:"supplierName",...t.t},{header:"Supplier Part No.",key:"spin",...t.t},{header:"Currency",key:"supplierCurrency",...t.t},{header:"Purchase Cost [Exclusive of GST] ",key:"stdCostUom1",...t.t},{header:"Status",key:"isActive",...t.t}];const P=i=>({title:E,csvData:i,headers:f}),I=i=>(0,u.J)({data:i,headers:f,widths:L,title:E});let x=["*","*","*","*","*","*","*","*","*"],R="Service Master",N=[{header:"Service Code",key:"serviceCode",...t.t},{header:"Service Description",key:"serviceDescription",...t.t},{header:"SAC",key:"sacCode",...t.t},{header:"GST",key:"gst",...t.t},{header:"IGST",key:"igst",...t.t},{header:"CGST",key:"cgst",...t.t},{header:"SGST",key:"sgst",...t.t}];const F=i=>({title:R,csvData:i,headers:N}),G=i=>(0,u.J)({data:i,headers:N,widths:x,title:R});let n=["*","*","*","*","*","*","*","*","*"],p="Capital Goods Master",s=[{header:"CG Code",key:"capitalGoodsNo",...t.t},{header:"Capital Goods Name",key:"capitalGoodsName",...t.t},{header:"Capital Goods Description",key:"capitalGoodsDescription",...t.t},{header:"Capital Goods Specification",key:"capitalGoodsSpecification",...t.t},{header:"UOM",key:"UOM",...t.t},{header:"HSN Code",key:"hsnCode",...t.t},{header:"Supplier Part No.",key:"supplierPartNo",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Purchase Cost",key:"purchaseCost",...t.t}];const r=i=>({title:p,csvData:i,headers:s}),a=i=>(0,u.J)({data:i,headers:s,widths:n,title:p});let c=["*","*","*","*","*","*"],o="Supplier Evaluation Master",g=[{header:"Name",key:"name",...t.t},{header:"Description",key:"description",...t.t},{header:"Enabled",key:"enabled",...t.t},{header:"Weight",key:"weight",...t.t},{header:"Passing %",key:"passingPercentage",...t.t},{header:"Failing %",key:"failingPercentage",...t.t}];const A=i=>({title:o,csvData:i,headers:g}),O=i=>(0,u.J)({data:i,headers:g,widths:c,title:o});let X=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],J="External (Service) Provider Master",q=[{header:"Category",key:"ESPCategory",...t.t},{header:"ESP Code",key:"ESPCode",...t.t},{header:"External Service Provider Name",key:"ESPName",...t.t},{header:"External Service Provider NickName",key:"ESPNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isESPActive",...t.t}];const j=i=>({title:J,csvData:i,headers:q}),K=i=>(0,u.J)({data:i,headers:q,widths:X,title:J});let ee=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],z="Channel Partner Master",B=[{header:"Category",key:"channelPartnerCategory",...t.t},{header:"CP Code",key:"CPCode",...t.t},{header:"Channel Partner Name",key:"channelPartnerName",...t.t},{header:"Channel Partner NickName",key:"channelPartnerNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isCPActive",...t.t}];const te=i=>({title:z,csvData:i,headers:B}),re=i=>(0,u.J)({data:i,headers:B,widths:ee,title:z})}}]);