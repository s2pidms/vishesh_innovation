"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3795],{41980:(C,c,o)=>{o.r(c),o.d(c,{BTCModule:()=>B});var m=o(1076),R=o(43818),T=o(25116),y=o(66558),e=o(65879),d=o(98977),h=o(59840),p=o(88059),l=o(96814),f=o(37285),S=o(53421);function q(a,g){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td",18,19)(3,"span",20),e._uU(4),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"a",21),e._UZ(13,"i",22),e.qZA()(),e.TgZ(14,"td")(15,"div",23),e._UZ(16,"button",24),e.TgZ(17,"div",25)(18,"a",26),e.NdJ("click",function(){const n=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.navigateTo("../form",null==n?null:n._id,"view"))}),e._UZ(19,"i",27),e._uU(20," View "),e.qZA(),e.TgZ(21,"a",26),e.NdJ("click",function(){const n=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.navigateTo("../form",null==n?null:n._id,"edit"))}),e._UZ(22,"i",28),e._uU(23," Edit "),e.qZA()()()()()}if(2&a){const t=g.$implicit,s=e.MAs(2),i=e.oxw();e.xp6(1),e.Udp("width",s.clientWidth),e.xp6(2),e.Q6J("positionTarget",s)("ngbTooltip",t.customerName),e.xp6(1),e.hij(" ",t.customerName," "),e.xp6(2),e.Oqu(null==t?null:t.mobileNo),e.xp6(2),e.Oqu(null==t?null:t.emailId),e.xp6(2),e.Oqu(null==t?null:t.stateOfSupply),e.xp6(8),e.Q6J("accessType",i.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",i.rolePermissionActions.editAction)}}const k=function(a,g,t,s){return{page:a,pageSize:g,collection:t,search:s,type:"list"}};let _=(()=>{class a{constructor(t,s,i,n,u,D,F){this.exportExcelService=t,this.btcService=s,this.menuTitleService=i,this.router=n,this.spinner=u,this.activatedRoute=D,this.exportToPDFService=F,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=T.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,s,i){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:s,action:i}})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}trackByFn(t,s){return s?._id}getAll(t=!1,s=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.btcService.getAll(i).subscribe(n=>{"EXCEL"==s?this.excelDownload(n.rows):"PDF"==s?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(t){let s=(0,y.KE)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(t){this.exportExcelService.exportExcel((0,y.$k)(t))}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(d.Ol),e.Y36(h.HN),e.Y36(d.Uh),e.Y36(m.F0),e.Y36(d.V),e.Y36(m.gz),e.Y36(d.$L))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-btc-list"]],viewQuery:function(s,i){if(1&s&&e.Gf(R.j,5),2&s){let n;e.iGM(n=e.CRH())&&(i.headers=n)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","mobileNo",3,"sort"],["sortable","emailId",3,"sort"],["sortable","stateOfSupply",3,"sort"],["sortable","isActive",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["href","javascript:void(0)"],["aria-hidden","true",1,"fa","fa-address-card","text-primary"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"B2C Master Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Customer "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(u){return i.eventHeader(u)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(u){return i.onSort(u)}),e._uU(15,"Customer Name"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(u){return i.onSort(u)}),e._uU(17,"Mobile"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(u){return i.onSort(u)}),e._uU(19,"E-mail ID"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(u){return i.onSort(u)}),e._uU(21,"State of Supply"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(u){return i.onSort(u)}),e._uU(23,"View Address"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Action"),e.qZA()()(),e.TgZ(26,"tbody"),e.YNc(27,q,24,10,"tr",17),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,k,i.page,i.pageSize,i.collection,i.search)),e.xp6(17),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[p.P,l.sg,f._L,R.j,S.J],encapsulation:2})}return a})();var r=o(60095),v=o(21631),N=o(22096),b=o(78944),O=o(4092),Z=o(16897);function A(a,g){if(1&a&&(e.TgZ(0,"option",25),e._uU(1),e.qZA()),2&a){const t=g.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function E(a,g){if(1&a&&(e.TgZ(0,"option",25),e._uU(1),e.qZA()),2&a){const t=g.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}const U=function(a){return{"d-none":a}};function I(a,g){if(1&a){const t=e.EpF();e.TgZ(0,"div",26)(1,"button",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(2,"Save"),e.qZA()()}if(2&a){const t=e.oxw();e.Q6J("ngClass",e.VKq(1,U,"View"==t.action))}}let x=(()=>{class a{get f(){return this.form.controls}constructor(t,s,i,n,u,D,F){this.b2cService=t,this.activatedRoute=s,this.spinner=i,this.toastService=n,this.validationService=u,this.utilityService=D,this.location=F,this.submitted=!1,this.action="create",this.statesOfIndia=b.F,this.masterData={autoIncrementNo:""},this.form=new r.nJ({_id:new r.p4(null),B2CCode:new r.p4("",[r.kI.required]),customerName:new r.p4("",[r.kI.required]),emailId:new r.p4(""),mobileNo:new r.p4("",[r.kI.required]),isActive:new r.p4(!0,[r.kI.required]),stateOfSupply:new r.p4("",[r.kI.required]),line1:new r.p4(""),line2:new r.p4(""),state:new r.p4(""),district:new r.p4(""),pinCode:new r.p4(""),country:new r.p4("")})}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,O.Kb))return;let t=this.form.value;t._id?this.update(t):(delete t._id,this.create(t))}create(t){this.spinner.show(),this.b2cService.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}update(t){this.spinner.show(),this.b2cService.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}getInitialData(){this.spinner.show(),this.b2cService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.B2CCode.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,v.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.b2cService.getById(s.id):(0,N.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.form.patchValue(s),"edit"!=this.action&&this.form.disable())})})}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(h.HN),e.Y36(m.gz),e.Y36(d.V),e.Y36(d.kl),e.Y36(Z.RJ),e.Y36(d.tI),e.Y36(l.Ye))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-btc-form"]],decls:80,vars:4,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","customerName",1,"form-control"],["type","number","formControlName","mobileNo",1,"form-control"],["type","email","formControlName","emailId",1,"form-control"],["formControlName","stateOfSupply",1,"form-select"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","justify-content-center"],[1,"col-12"],["type","text","formControlName","line1",1,"form-control"],[1,"col-12","mb-3"],["type","text","formControlName","line2",1,"form-control"],["type","text","formControlName","district",1,"form-control"],["type","number","formControlName","pinCode",1,"form-control"],["formControlName","state",1,"form-select"],["type","text","formControlName","country",1,"form-control"],["class","d-grid gap-2 d-md-flex py-3 justify-content-md-center",3,"ngClass",4,"ngIf"],[3,"value"],[1,"d-grid","gap-2","d-md-flex","py-3","justify-content-md-center",3,"ngClass"],[1,"btn","bg-primary","px-5",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5," B2C Customer Info"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Customer Name "),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",6)(15,"label",7),e._uU(16," Mobile No. "),e.TgZ(17,"span",8),e._uU(18,"*"),e.qZA()(),e._UZ(19,"input",10),e.qZA()(),e.TgZ(20,"div",5)(21,"div",6)(22,"label",7),e._uU(23," E-mail ID "),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e._UZ(26,"input",11),e.qZA(),e.TgZ(27,"div",6)(28,"label",7),e._uU(29," State of Supply "),e.TgZ(30,"span",8),e._uU(31,"*"),e.qZA()(),e.TgZ(32,"select",12)(33,"option",13),e._uU(34,"Select State"),e.qZA(),e.YNc(35,A,2,2,"option",14),e.qZA()()(),e.TgZ(36,"div",15)(37,"div",16)(38,"label",7),e._uU(39," Address Line 1 "),e.TgZ(40,"span",8),e._uU(41,"*"),e.qZA()(),e._UZ(42,"input",17),e.qZA()(),e.TgZ(43,"div",15)(44,"div",18)(45,"label",7),e._uU(46," Address Line 2 "),e.TgZ(47,"span",8),e._uU(48,"*"),e.qZA()(),e._UZ(49,"input",19),e.qZA()(),e.TgZ(50,"div",5)(51,"div",6)(52,"label",7),e._uU(53," City/District "),e.TgZ(54,"span",8),e._uU(55,"*"),e.qZA()(),e._UZ(56,"input",20),e.qZA(),e.TgZ(57,"div",6)(58,"label",7),e._uU(59," Pincode "),e.TgZ(60,"span",8),e._uU(61,"*"),e.qZA()(),e._UZ(62,"input",21),e.qZA()(),e.TgZ(63,"div",5)(64,"div",6)(65,"label",7),e._uU(66," State "),e.TgZ(67,"span",8),e._uU(68,"*"),e.qZA()(),e.TgZ(69,"select",22)(70,"option",13),e._uU(71,"Select State"),e.qZA(),e.YNc(72,E,2,2,"option",14),e.qZA()(),e.TgZ(73,"div",6)(74,"label",7),e._uU(75," Country "),e.TgZ(76,"span",8),e._uU(77,"*"),e.qZA()(),e._UZ(78,"input",23),e.qZA()()(),e.YNc(79,I,3,3,"div",24),e.qZA()()),2&s&&(e.Q6J("formGroup",i.form),e.xp6(35),e.Q6J("ngForOf",i.statesOfIndia),e.xp6(37),e.Q6J("ngForOf",i.statesOfIndia),e.xp6(7),e.Q6J("ngIf","view"!==i.action))},dependencies:[l.mk,l.sg,l.O5,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u],encapsulation:2})}return a})();var P=o(56208);const w=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:_},{path:"form",component:x,resolve:{accessScreen:o(65876).x}}];let B=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=e.oAB({type:a});static#s=this.\u0275inj=e.cJS({imports:[P.m,m.Bz.forChild(w)]})}return a})()},13107:(C,c,o)=>{o.d(c,{t:()=>m});const m={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(C,c,o)=>{o.d(c,{J:()=>m});const m=({data:R,headers:T,widths:y,title:e})=>({tableData:{widths:y,headerRows:1,body:[T.map(p=>({text:p.header,style:"header"})),...R.map(p=>T.map(l=>({style:"subheader",text:p[l.key]})))]},title:e})},49580:(C,c,o)=>{o.d(c,{D:()=>m});const m=[{message:"HSN Code is Required",key:"hsnCode"},{message:"Description of Goods is Required",key:"goodsDescription"},{message:"GST Rate % is Required",key:"gstRate"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"},{message:"UTGST Rate % is Required",key:"ugstRate"},{message:"Revision No. is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"}]},4092:(C,c,o)=>{o.d(c,{tm:()=>l,Kb:()=>m,lR:()=>f,jH:()=>R,y5:()=>S,OV:()=>k,HQ:()=>q,RS:()=>_,vc:()=>r,Nj:()=>b,rw:()=>O,Uh:()=>v,J4:()=>A,ff:()=>y,BC:()=>Z,JY:()=>e,Dd:()=>N,Sy:()=>d,tH:()=>h,RH:()=>p});const m=[{message:"Customer Name is Required",key:"customerName"},{message:"Mobile No. is Required",key:"mobileNo"},{message:"stateOfSupply is Required",key:"stateOfSupply"}],R=[{message:"Customer Code is Required",key:"customerCode"},{message:"Customer Name is Required",key:"customerName"},{message:"Sales Category is Required",key:"customerCategory"},{message:"PAN No. is Required",key:"customerPAN"},{message:"GSTIN is Required",key:"GSTIN"},{message:"GST Classification is Required",key:"GSTClassification"},{message:"Customer Category is Required",key:"customerType"},{message:"Customer Currency is Required",key:"customerCurrency"},{message:"Payment Terms is Required",key:"customerPaymentTerms"}];o(49580);const y=[{message:"SAC Code is Required",key:"sacCode"},{message:"Description of Service is Required",key:"serviceDescription"},{message:"GST Rate % is Required",key:"gstRate"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"},{message:"UTGST Rate % is Required",key:"ugstRate"},{message:"Revision Date is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"}],e=[{message:"Service Description is Required",key:"serviceDescription"}],d=[{message:"SKU Stage is Required",key:"SKUStage"},{message:"Product Category is Required",key:"productCategory"},{message:"SKU No is Required",key:"SKUNo"},{message:"SKU Name is Required",key:"SKUName"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"HSN Code is Required",key:"hsn"},{message:"Unit of Measurement is Required",key:"primaryUnit"}],h=[{message:"Shelf Life [Months] is required",key:"shelfLife"},{message:"Storage Temperature [\xb0C] is required",key:"storageTemp"},{message:"Storage Humidity [RH] is required",key:"storageHumidity"},{message:"Special Storage Instruction is required",key:"specialStorageInstruction"}],p=[{message:"Type is Required",key:"transporterType"}],l=[{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Purchase Order No. is Required",key:"PONumber"},{message:"Purchase Order Date is Required",key:"PODate"},{message:"Net SO Value is Required",key:"SOTotalAmount"},{message:"Status is Required",key:"SOStatus"},{message:"Customer Shipping Address is Required",key:"customerShippingAddress"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Transporter is Required",key:"transporter"},{message:"Destination is Required",key:"destination"}],f=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"}],S=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"}],q=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Destination Terms is Required",key:"destination"},{message:"Mode of Transport is Required",key:"modeOfTransport"}],k=[{message:"Export Invoice No. is Required",key:"exportsInvoiceNo"},{message:"Export Invoice Date is Required",key:"exportsInvoiceDate"},{message:"Export Invoice Total Value is Required",key:"exportsInvoiceTotalValue"},{message:"Exchange Rate is Required",key:"exchangeRate"},{message:"Mode of Transport is Required",key:"modeOfTransport"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Port of Destination Terms is Required",key:"destination"},{message:"Final Destination Terms is Required",key:"finalDestination"}],_=[{message:"Payment Terms is Required",key:"paymentTerms"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Transporter Terms is Required",key:"transporter"},{message:"Destination Terms is Required",key:"destination"},{message:"Mode of Transport is Required",key:"modeOfTransport"}],r=[{message:"Supply Type is Required",key:"supplyType"},{message:"Sub Supply Type is Required",key:"subSupplyType"},{message:"Document Type is Required",key:"docType"},{message:"Document No. is Required of 16 Digits",key:"docNo"},{message:"Document Date is Required",key:"docDate"},{message:"From GSTIN is Required of 15 Digits",key:"fromGstin"},{message:"From Pin Code is Required",key:"fromPincode"},{message:"Act From State Code is Required",key:"actFromStateCode"},{message:"From State Code is Required",key:"fromStateCode"},{message:"To GSTIN is Required of 15 Digits",key:"toGstin"},{message:"To Pin Code is Required",key:"toPincode"},{message:"To State Code is Required",key:"toStateCode"},{message:"Act To State Code is Required",key:"actToStateCode"},{message:"Transaction Type is Required of 4 Digits",key:"transactionType"},{message:"Tot Inv Value is Required",key:"totInvValue"},{message:"Trans Distance is Required",key:"transDistance"}],v=[{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"PO No. is Required",key:"PONumber"},{message:"Net SO Value is Required",key:"PITotalAmount"},{message:"Status is Required",key:"PIStatus"},{message:"Customer Shipping Address is Required",key:"customerShippingAddress"},{message:"Mode Of Transport is Required",key:"modeOfTransport"},{message:"frightTerms is Required",key:"frightTerms"},{message:"transporter is Required",key:"transporter"},{message:"destination is Required",key:"destination"}],N=[{message:"Invoice # is Required",key:"serviceInvoiceNumber"},{message:"Invoice Date is Required",key:"serviceInvoiceDate"},{message:"Customer/Sales Category is Required",key:"customerCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Purchase Order No. is Required",key:"PONo"},{message:"Purchase Order Date is Required",key:"PODate"},{message:"Currency is Required",key:"currency"},{message:"Bill From Location is Required",key:"billFromLocation"}],b=[{message:"Product Category is Required",key:"productCategory"},{message:"HSN Code is Required",key:"HSN"},{message:"Description is Required",key:"description"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"}],O=[{message:"Order is Required",key:"order"},{message:"Payment Terms Description is Required",key:"paymentDescription"}],Z=[{message:"Customer Category is Required",key:"customerCategory"},{message:"Customer Name is Required",key:"customer"},{message:"FC Type is Required",key:"FCType"},{message:"Net FC Value is Required",key:"netFCValue"}],A=[{message:"Quotation No. is Required",key:"quotationNo"},{message:"Customer Category is Required",key:"customerCategory"},{message:"Customer Name  is Required",key:"customerName"}]}}]);