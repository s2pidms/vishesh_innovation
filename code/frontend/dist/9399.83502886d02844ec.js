"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9399],{79295:(T,l,a)=>{a.r(l),a.d(l,{ServiceModule:()=>G});var m=a(96814),g=a(1076),h=a(56208),p=a(43818),R=a(25116),y=a(26526),S=a(77203),e=a(65879),d=a(2742),v=a(59840),f=a(37285),C=a(88059),_=a(53421);function q(o,u){if(1&o){const i=e.EpF();e.TgZ(0,"a",29),e.NdJ("click",function(){e.CHM(i);const t=e.oxw().$implicit,r=e.oxw();return e.KtG(r.openConfirmModal(null==t?null:t._id,null==t?null:t.serviceCode))}),e._UZ(1,"i",30),e._uU(2," Delete "),e.qZA()}}function k(o,u){if(1&o){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",19,20)(5,"span",21),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"div",22),e._UZ(17,"button",23),e.TgZ(18,"div",24)(19,"a",25),e.NdJ("click",function(){const r=e.CHM(i).$implicit,n=e.oxw();return e.KtG(n.navigateTo("../form",null==r?null:r._id,"view"))}),e._UZ(20,"i",26),e._uU(21," View "),e.qZA(),e.TgZ(22,"a",25),e.NdJ("click",function(){const r=e.CHM(i).$implicit,n=e.oxw();return e.KtG(n.navigateTo("../form",null==r?null:r._id,"edit"))}),e._UZ(23,"i",27),e._uU(24," Edit "),e.qZA(),e.YNc(25,q,3,0,"a",28),e.qZA()()()()}if(2&o){const i=u.$implicit,s=e.MAs(4),t=e.oxw();e.xp6(2),e.Oqu(null==i?null:i.serviceCode),e.xp6(1),e.Udp("width",s.clientWidth),e.xp6(2),e.Q6J("positionTarget",s)("ngbTooltip",i.serviceDescription),e.xp6(1),e.hij(" ",i.serviceDescription," "),e.xp6(2),e.Oqu(null==i?null:i.sacCode),e.xp6(2),e.Oqu(null==i?null:i.igst),e.xp6(2),e.Oqu(null==i?null:i.cgst),e.xp6(2),e.Oqu(null==i?null:i.sgst),e.xp6(5),e.Q6J("accessType",t.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",t.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",t.user==t.superAdminId)}}const O=function(o,u,i,s){return{page:o,pageSize:u,collection:i,search:s,type:"list"}};let A=(()=>{var o;class u{constructor(s,t,r,n,E,U,M,J,Y){this.exportExcelService=s,this.router=t,this.spinner=r,this.salesServiceMaster=n,this.activatedRoute=E,this.exportToPDFService=U,this.storageService=M,this.toastService=J,this.modalService=Y,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=R.dA,this.user="",this.rolePermissionActions=R.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(s=>s==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(s,t,r){this.router.navigate([s],{relativeTo:this.activatedRoute,queryParams:{id:t,action:r}})}trackByFn(s,t){return t?._id}matches(){this.tableData=this.originTableData.filter(s=>s?.PONumber&&s?.PONumber?.toLowerCase().toString().match(this.search.toLowerCase())||s?.PODate&&s?.PODate?.toLowerCase().match(this.search.toLowerCase())||s?.supplier?.supplierName&&s?.item?.itemName.toString().match(this.search.toLowerCase()))}getAll(s=!1,t=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:s};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.salesServiceMaster.getAll(r).subscribe(n=>{"EXCEL"==t?this.excelDownload(n.rows):"PDF"==t?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=s.value,this.getAll()}}pdfDownload(s){let t=(0,y.kw)(s);this.exportToPDFService.generatePdf(t.tableData,t.title)}excelDownload(s){this.exportExcelService.exportExcel((0,y.ev)(s))}onSort({column:s,direction:t}){this.headers.forEach(r=>{r.sortable!==s&&(r.direction="")}),this.column=s,this.direction="asc"==t?1:-1,this.getAll()}delete(s){this.spinner.show(),this.salesServiceMaster.delete(s).subscribe(t=>{this.spinner.hide(),this.toastService.success(t.message),this.getAll()})}openConfirmModal(s,t){const r=this.modalService.open(S.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});r.componentInstance.heading="Confirm Deletion",r.componentInstance.confirmText=`Confirm Deletion of Service Code ${t} ?`,r.result.then(n=>{"Yes"==n.title&&this.delete(s)},n=>{})}}return(o=u).\u0275fac=function(s){return new(s||o)(e.Y36(d.Ol),e.Y36(g.F0),e.Y36(d.V),e.Y36(v.Bz),e.Y36(g.gz),e.Y36(d.$L),e.Y36(d.V1),e.Y36(d.kl),e.Y36(f.FF))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-service-list"]],viewQuery:function(s,t){if(1&s&&e.Gf(p.j,5),2&s){let r;e.iGM(r=e.CRH())&&(t.headers=r)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","serviceCode",3,"sort"],["sortable","serviceDescription",1,"text-start",3,"sort"],["sortable","sacId.sacCode",3,"sort"],["sortable","igst",3,"sort"],["sortable","cgst",3,"sort"],["sortable","sgst",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["serviceDescription",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Service Master Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return t.navigateTo("../form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Service "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(n){return t.eventHeader(n)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(15,"Service Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(17," Service Description "),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(19,"SAC"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(21,"IGST"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(23,"CGST"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(25,"SGST"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,k,26,13,"tr",18),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",t.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,O,t.page,t.pageSize,t.collection,t.search)),e.xp6(19),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn))},dependencies:[m.sg,m.O5,C.P,f._L,p.j,_.J],encapsulation:2}),u})();var c=a(60095),N=a(21631),Z=a(22096),b=a(43154),D=a(16897);function F(o,u){if(1&o&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&o){const i=u.$implicit;e.Q6J("value",i._id),e.xp6(1),e.hij(" ",i.sacCode," ")}}function I(o,u){1&o&&e._UZ(0,"hr",25)}function x(o,u){if(1&o){const i=e.EpF();e.TgZ(0,"div",26)(1,"div",27)(2,"button",28),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",29)(5,"button",28),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.submit())}),e._uU(6,"Save"),e.qZA()()()}}const L=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:A},{path:"form",component:(()=>{var o;class u{constructor(s,t,r,n,E,U,M){this.salesServiceMaster=s,this.activatedRoute=t,this.spinner=r,this.toastService=n,this.validationService=E,this.utilityService=U,this.location=M,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",SACOptions:[]},this.form=new c.nJ({_id:new c.p4(null),serviceCode:new c.p4(null),serviceDescription:new c.p4(null,[c.kI.required]),unit:new c.p4(null),sacId:new c.p4(null,[c.kI.required]),sacCode:new c.p4(null),isActive:new c.p4("Yes",[c.kI.required]),servicePrice:new c.p4(null),gst:new c.p4(null),igst:new c.p4(null),sgst:new c.p4(null),cgst:new c.p4(null)})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,b.JY))return;let s=this.form.value;s._id?this.update(s):(delete s._id,this.create(s))}create(s){this.spinner.show(),this.salesServiceMaster.create(s).subscribe(t=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(t.message),this.location.back()})}update(s){this.spinner.show(),this.salesServiceMaster.update(s._id,s).subscribe(t=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(t.message),this.location.back()})}getInitialData(){this.spinner.show(),this.salesServiceMaster.getAllMasterData({}).subscribe(s=>{this.masterData=s,this.form.controls.serviceCode.setValue(this.masterData.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,N.z)(t=>(this.action=t.action,this.utilityService.accessDenied(this.action),t.id?this.salesServiceMaster.getById(t.id):(0,Z.of)({})))).subscribe(t=>{this.spinner.hide(),0!=Object.keys(t).length&&(t.sacId=t.sacId._id,this.form.patchValue(t),"edit"!=this.action&&this.form.disable())})})}setSAC(){let s=this.masterData?.SACOptions.find(t=>t._id==this.f.sacId.value);this.form.enable(),this.f.gst.setValue(s?.gstRate),this.f.igst.setValue(s?.igstRate),this.f.cgst.setValue(s?.cgstRate),this.f.sgst.setValue(s?.sgstRate),this.f.sacCode.setValue(s?.sacCode)}}return(o=u).\u0275fac=function(s){return new(s||o)(e.Y36(v.Bz),e.Y36(g.gz),e.Y36(d.V),e.Y36(d.kl),e.Y36(D.RJ),e.Y36(d.tI),e.Y36(m.Ye))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-service-form"]],decls:67,vars:5,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","serviceCode","readonly","",1,"form-control"],["type","text","formControlName","serviceDescription",1,"form-control"],["date",""],["formControlName","isActive",1,"form-select"],["value","Yes"],["value","No"],["formControlName","sacId",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","gst","readonly","",1,"form-control"],["type","text","formControlName","igst","readonly","",1,"form-control"],["type","text","readonly","","formControlName","cgst",1,"form-control"],["type","text","readonly","","formControlName","sgst",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[3,"value"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"]],template:function(s,t){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5," Service Master"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Service Code "),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",6)(15,"label",7),e._uU(16," Service Description"),e.TgZ(17,"span",8),e._uU(18,"*"),e.qZA()(),e._UZ(19,"input",10,11),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23," Active "),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"select",12)(27,"option",13),e._uU(28,"Yes"),e.qZA(),e.TgZ(29,"option",14),e._uU(30,"No"),e.qZA()()(),e.TgZ(31,"div",6)(32,"label",7),e._uU(33," Select SAC "),e.TgZ(34,"span",8),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"select",15),e.NdJ("change",function(){return t.setSAC()}),e.TgZ(37,"option",16),e._uU(38,"Select SAC No."),e.qZA(),e.YNc(39,F,2,2,"option",17),e.qZA()()(),e.TgZ(40,"div",5)(41,"div",6)(42,"label",7),e._uU(43," GST Rate "),e.TgZ(44,"span",8),e._uU(45,"*"),e.qZA()(),e._UZ(46,"input",18),e.qZA(),e.TgZ(47,"div",6)(48,"label",7),e._uU(49," IGST Rate "),e.TgZ(50,"span",8),e._uU(51,"*"),e.qZA()(),e._UZ(52,"input",19),e.qZA(),e.TgZ(53,"div",6)(54,"label",7),e._uU(55," CGST Rate "),e.TgZ(56,"span",8),e._uU(57,"*"),e.qZA()(),e._UZ(58,"input",20),e.qZA(),e.TgZ(59,"div",6)(60,"label",7),e._uU(61," SGST Rate "),e.TgZ(62,"span",8),e._uU(63,"*"),e.qZA()(),e._UZ(64,"input",21),e.qZA()()(),e.YNc(65,I,1,0,"hr",22),e.YNc(66,x,7,0,"div",23),e.qZA()()),2&s&&(e.Q6J("formGroup",t.form),e.xp6(37),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",null==t.masterData?null:t.masterData.SACOptions),e.xp6(26),e.Q6J("ngIf","view"!==t.action),e.xp6(1),e.Q6J("ngIf","view"!=t.action))},dependencies:[m.sg,m.O5,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u],encapsulation:2}),u})(),resolve:{accessScreen:a(65876).x}}];let G=(()=>{var o;class u{}return(o=u).\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,g.Bz.forChild(L),h.m]}),u})()},13107:(T,l,a)=>{a.d(l,{t:()=>m});const m={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(T,l,a)=>{a.d(l,{J:()=>m});const m=({data:g,headers:h,widths:p,title:R})=>({tableData:{widths:p,headerRows:1,body:[h.map(e=>({text:e.header,style:"header"})),...g.map(e=>h.map(d=>({style:"subheader",text:e[d.key]})))]},title:R})},49580:(T,l,a)=>{a.d(l,{D:()=>m});const m=[{message:"HSN Code should be of Max 8 & Min of 4 Characters is Required",key:"hsnCode"},{message:"Description of Goods is Required",key:"goodsDescription"},{message:"GST Rate % is Required",key:"gstRate"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"},{message:"UTGST Rate % is Required",key:"ugstRate"},{message:"Revision No. is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"}]},43154:(T,l,a)=>{a.d(l,{tm:()=>d,Kb:()=>m,lR:()=>f,jH:()=>g,y5:()=>C,rL:()=>F,OV:()=>q,HQ:()=>_,RS:()=>k,vc:()=>O,Nj:()=>N,rw:()=>Z,Uh:()=>A,J4:()=>D,ff:()=>p,BC:()=>b,JY:()=>R,Dd:()=>c,Sy:()=>y,tH:()=>S,se:()=>v,RH:()=>e});const m=[{message:"Customer Name is Required",key:"customerName"},{message:"Mobile No. is Required",key:"mobileNo"},{message:"stateOfSupply is Required",key:"stateOfSupply"}],g=[{message:"Customer Code is Required",key:"customerCode"},{message:"Customer Name is Required",key:"customerName"},{message:"Sales Category is Required",key:"customerCategory"},{message:"PAN No. is Required",key:"customerPAN"},{message:"GSTIN is Required",key:"GSTIN"},{message:"GST Classification is Required",key:"GSTClassification"},{message:"Customer Category is Required",key:"customerType"},{message:"Customer Currency is Required",key:"customerCurrency"},{message:"Payment Terms is Required",key:"customerPaymentTerms"}];a(49580);const p=[{message:"SAC Code is Required",key:"sacCode"},{message:"Description of Service is Required",key:"serviceDescription"},{message:"GST Rate % is Required",key:"gstRate"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"},{message:"UTGST Rate % is Required",key:"ugstRate"},{message:"Revision Date is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"}],R=[{message:"Service Description is Required",key:"serviceDescription"}],y=[{message:"SKU Stage is Required",key:"SKUStage"},{message:"Product Category is Required",key:"productCategory"},{message:"SKU No is Required",key:"SKUNo"},{message:"SKU Name is Required",key:"SKUName"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"HSN Code is Required",key:"hsn"},{message:"Unit of Measurement is Required",key:"primaryUnit"}],S=[{message:"Shelf Life [Months] is required",key:"shelfLife"},{message:"Storage Temperature [\xb0C] is required",key:"storageTemp"},{message:"Storage Humidity [RH] is required",key:"storageHumidity"},{message:"Special Storage Instruction is required",key:"specialStorageInstruction"}],e=[{message:"Type is Required",key:"transporterType"}],d=[{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Purchase Order No. is Required",key:"PONumber"},{message:"Purchase Order Date is Required",key:"PODate"},{message:"Net SO Value is Required",key:"SOTotalAmount"},{message:"Status is Required",key:"SOStatus"},{message:"Customer Shipping Address is Required",key:"customerShippingAddress"},{message:"Freight Terms is Required",key:"frightTerms"},{message:"Transporter is Required",key:"transporter"},{message:"Destination is Required",key:"destination"}],v=[{message:"Freight Terms is Required",key:"frightTerms"},{message:"Transporter is Required",key:"transporter"},{message:"Mode of transport is Required",key:"modeOfTransport"},{message:"Destination is Required",key:"destination"}],f=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"}],C=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Payment Terms is Required",key:"paymentTerms"},{message:"Mode Of Transport is Required",key:"modeOfTransport"},{message:"Freight Terms is Required",key:"frightTerms"},{message:"Transporter Name is Required",key:"transporter"},{message:"Destination is Required",key:"destination"}],_=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Destination Terms is Required",key:"destination"},{message:"Mode of Transport is Required",key:"modeOfTransport"}],q=[{message:"Export Invoice No. is Required",key:"exportsInvoiceNo"},{message:"Export Invoice Date is Required",key:"exportsInvoiceDate"},{message:"Export Invoice Total Value is Required",key:"exportsInvoiceTotalValue"},{message:"Exchange Rate is Required",key:"exchangeRate"},{message:"Mode of Transport is Required",key:"modeOfTransport"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Port of Destination Terms is Required",key:"destination"},{message:"Final Destination Terms is Required",key:"finalDestination"}],k=[{message:"Payment Terms is Required",key:"paymentTerms"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Transporter Terms is Required",key:"transporter"},{message:"Destination Terms is Required",key:"destination"},{message:"Mode of Transport is Required",key:"modeOfTransport"}],O=[{message:"Supply Type is Required",key:"supplyType"},{message:"Sub Supply Type is Required",key:"subSupplyType"},{message:"Document Type is Required",key:"docType"},{message:"Document No. is Required of 16 Digits",key:"docNo"},{message:"Document Date is Required",key:"docDate"},{message:"From GSTIN is Required of 15 Digits",key:"fromGstin"},{message:"From Pin Code is Required",key:"fromPincode"},{message:"Act From State Code is Required",key:"actFromStateCode"},{message:"From State Code is Required",key:"fromStateCode"},{message:"To GSTIN is Required of 15 Digits",key:"toGstin"},{message:"To Pin Code is Required",key:"toPincode"},{message:"To State Code is Required",key:"toStateCode"},{message:"Act To State Code is Required",key:"actToStateCode"},{message:"Transaction Type is Required of 4 Digits",key:"transactionType"},{message:"Tot Inv Value is Required",key:"totInvValue"},{message:"Trans Distance is Required",key:"transDistance"}],A=[{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"PO No. is Required",key:"PONumber"},{message:"Net SO Value is Required",key:"PITotalAmount"},{message:"Status is Required",key:"PIStatus"},{message:"Customer Shipping Address is Required",key:"customerShippingAddress"},{message:"Mode Of Transport is Required",key:"modeOfTransport"},{message:"frightTerms is Required",key:"frightTerms"},{message:"transporter is Required",key:"transporter"},{message:"destination is Required",key:"destination"}],c=[{message:"Invoice # is Required",key:"serviceInvoiceNumber"},{message:"Invoice Date is Required",key:"serviceInvoiceDate"},{message:"Customer/Sales Category is Required",key:"customerCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Purchase Order No. is Required",key:"PONo"},{message:"Purchase Order Date is Required",key:"PODate"},{message:"Currency is Required",key:"currency"},{message:"Bill From Location is Required",key:"billFromLocation"}],N=[{message:"Product Category is Required",key:"productCategory"},{message:"HSN Code is Required",key:"HSN"},{message:"Description is Required",key:"description"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"}],Z=[{message:"Order is Required",key:"order"},{message:"Payment Terms Description is Required",key:"paymentDescription"}],b=[{message:"Customer Category is Required",key:"customerCategory"},{message:"Customer Name is Required",key:"customer"},{message:"FC Type is Required",key:"FCType"},{message:"Net FC Value is Required",key:"netFCValue"}],D=[{message:"Quotation No. is Required",key:"quotationNo"},{message:"Customer Category is Required",key:"customerCategory"},{message:"Customer Name  is Required",key:"customerName"}],F=[{message:"Customer Name is Required",key:"customerName"}]}}]);