"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5080],{78891:(f,l,o)=>{o.r(l),o.d(l,{TransporterModule:()=>Q});var m=o(96814),p=o(1076),g=o(43818),R=o(25116),y=o(26526),h=o(77609),e=o(65879),d=o(99328),T=o(59840),_=o(37285),q=o(88059),v=o(53421);function S(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,a=e.oxw();return e.KtG(a.openConfirmModal(null==r?null:r._id,null==r?null:r.transporterCode))}),e._UZ(1,"i",28),e._uU(2," Delete "),e.qZA()}}function C(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",19),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",20),e._UZ(15,"button",21),e.TgZ(16,"div",22)(17,"a",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.navigateTo("../form",null==a?null:a._id,"view"))}),e._UZ(18,"i",24),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.navigateTo("../form",null==a?null:a._id,"edit"))}),e._UZ(21,"i",25),e._uU(22," Edit "),e.qZA(),e.YNc(23,S,3,0,"a",26),e.qZA()()()()}if(2&i){const t=c.$implicit,s=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.transporterCode),e.xp6(2),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.transporterType),e.xp6(2),e.Oqu(null==t?null:t.address),e.xp6(2),e.Oqu(null==t?null:t.phone),e.xp6(2),e.Oqu(null==t?null:t.licenseNumber),e.xp6(5),e.Q6J("accessType",s.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",s.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",s.user==s.superAdminId)}}const k=function(i,c,t,s){return{page:i,pageSize:c,collection:t,search:s,type:"list"}};let Z=(()=>{class i{constructor(t,s,r,a,u,D,E,I,V){this.exportExcelService=t,this.transporterService=s,this.router=r,this.spinner=a,this.activatedRoute=u,this.exportToPDFService=D,this.storageService=E,this.toastService=I,this.modalService=V,this.page=1,this.pageSize=8,this.collection=0,this.column="transporterCode",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=R.dA,this.user="",this.rolePermissionActions=R.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(t=>t==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,s,r){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:s,action:r}})}trackByFn(t,s){return s?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,s=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.transporterService.getAll(r).subscribe(a=>{"EXCEL"==s?this.excelDownload(a.rows):"PDF"==s?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(t){let s=(0,y.aI)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(t){this.exportExcelService.exportExcel((0,y.dz)(t))}onSort({column:t,direction:s}){this.headers.forEach(r=>{r.sortable!==t&&(r.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}delete(t){this.spinner.show(),this.transporterService.delete(t).subscribe(s=>{this.spinner.hide(),this.toastService.success(s.message),this.getAll()})}openConfirmModal(t,s){const r=this.modalService.open(h.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});r.componentInstance.heading="Confirm Deletion",r.componentInstance.confirmText=`Confirm Deletion of Transporter Code ${s} ?`,r.result.then(a=>{"Yes"==a.title&&this.delete(t)},a=>{})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(d.Ol),e.Y36(T.vg),e.Y36(p.F0),e.Y36(d.V),e.Y36(p.gz),e.Y36(d.$L),e.Y36(d.V1),e.Y36(d.kl),e.Y36(_.FF))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-transporter-list"]],viewQuery:function(s,r){if(1&s&&e.Gf(g.j,5),2&s){let a;e.iGM(a=e.CRH())&&(r.headers=a)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","transporterCode",3,"sort"],["sortable","name",1,"text-start",3,"sort"],["sortable","transporterType",3,"sort"],["sortable","address",3,"sort"],["sortable","phone",3,"sort"],["sortable","licenseNumber",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Transporter Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return r.navigateTo("../form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Transporter "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(u){return r.eventHeader(u)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(u){return r.onSort(u)}),e._uU(15,"Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(u){return r.onSort(u)}),e._uU(17,"Transporter Name [Legal Entity]"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(u){return r.onSort(u)}),e._uU(19,"Type"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(u){return r.onSort(u)}),e._uU(21,"Address"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(u){return r.onSort(u)}),e._uU(23,"Phone"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(u){return r.onSort(u)}),e._uU(25,"GST No."),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,C,24,9,"tr",18),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",r.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,k,r.page,r.pageSize,r.collection,r.search)),e.xp6(19),e.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn))},dependencies:[m.sg,m.O5,q.P,g.j,v.J],encapsulation:2})}return i})();var n=o(60095),A=o(43154),N=o(21631),O=o(22096),b=o(78944),U=o(16897);function F(i,c){if(1&i&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}function x(i,c){if(1&i&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&i){const t=c.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function M(i,c){1&i&&e._UZ(0,"div",33)}function P(i,c){1&i&&e._UZ(0,"div",34)}function J(i,c){1&i&&e._UZ(0,"hr",35)}function w(i,c){if(1&i){const t=e.EpF();e.TgZ(0,"div",36)(1,"div",37)(2,"button",38),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",39)(5,"button",38),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.submit())}),e._uU(6,"Save"),e.qZA()()()}}let G=(()=>{class i{constructor(t,s,r,a,u,D,E,I){this.transporterService=t,this.router=s,this.activatedRoute=r,this.spinner=a,this.toastService=u,this.validationService=D,this.location=E,this.utilityService=I,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",transporterTypeOptions:[]},this.form=new n.nJ({_id:new n.p4(null),transporterCode:new n.p4(""),name:new n.p4(""),transporterType:new n.p4("",[n.kI.required]),address:new n.p4(""),city:new n.p4(""),state:new n.p4(""),country:new n.p4(""),contactPerson:new n.p4(""),phone:new n.p4(""),email:new n.p4(""),licenseNumber:new n.p4(""),status:new n.p4("Active")}),this.statesOfIndia=b.F}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,A.RH))return;let t=this.form.value;t._id?this.update(t):(delete t._id,this.create(t))}create(t){this.spinner.show(),this.transporterService.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}update(t){this.spinner.show(),this.transporterService.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}getInitialData(){this.spinner.show(),this.transporterService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.transporterCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.transporterType.setValue(""),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,N.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.transporterService.getById(s.id):(0,O.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.form.patchValue(s),"edit"!=this.action&&this.form.disable())})})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(T.vg),e.Y36(p.F0),e.Y36(p.gz),e.Y36(d.V),e.Y36(d.kl),e.Y36(U.RJ),e.Y36(m.Ye),e.Y36(d.tI))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-transporter-form"]],decls:91,vars:11,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","transporterCode","readonly","",1,"form-control"],["type","text","formControlName","name",1,"form-control"],["date",""],["formControlName","transporterType",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","address",1,"form-control"],["type","text","formControlName","city",1,"form-control"],["formControlName","state",1,"form-select"],["value","","selected","","disabled",""],["type","text","formControlName","country",1,"form-control"],["type","text","formControlName","contactPerson",1,"form-control"],["type","text","formControlName","phone",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["type","text","formControlName","licenseNumber",1,"form-control"],[1,"col"],[1,"d-flex"],["formControlName","status",1,"form-select","statusSelectBorder"],[3,"value"],[1,"input-group-text","statusSpanHeight"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"statusActive"],[1,"statusInActive"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"]],template:function(s,r){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5," Transporter Master"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Code "),e._UZ(11,"span",8),e.qZA(),e._UZ(12,"input",9),e.qZA(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15," Transporter Name [Legal Entity]"),e._UZ(16,"span",8),e.qZA(),e._UZ(17,"input",10,11),e.qZA(),e.TgZ(19,"div",6)(20,"label",7),e._uU(21," Type "),e.TgZ(22,"span",8),e._uU(23,"*"),e.qZA()(),e.TgZ(24,"select",12)(25,"option",13),e._uU(26,"Select Type"),e.qZA(),e.YNc(27,F,2,2,"option",14),e.qZA()(),e.TgZ(28,"div",6)(29,"label",7),e._uU(30," Address"),e._UZ(31,"span",8),e.qZA(),e._UZ(32,"input",15,11),e.qZA()(),e.TgZ(34,"div",5)(35,"div",6)(36,"label",7),e._uU(37," City "),e._UZ(38,"span",8),e.qZA(),e._UZ(39,"input",16),e.qZA(),e.TgZ(40,"div",6)(41,"label",7),e._uU(42," State "),e._UZ(43,"span",8),e.qZA(),e.TgZ(44,"select",17)(45,"option",18),e._uU(46,"Select State"),e.qZA(),e.YNc(47,x,2,2,"option",14),e.qZA()(),e.TgZ(48,"div",6)(49,"label",7),e._uU(50," Country "),e._UZ(51,"span",8),e.qZA(),e._UZ(52,"input",19),e.qZA(),e.TgZ(53,"div",6)(54,"label",7),e._uU(55," Contact Person "),e._UZ(56,"span",8),e.qZA(),e._UZ(57,"input",20),e.qZA()(),e.TgZ(58,"div",5)(59,"div",6)(60,"label",7),e._uU(61," Phone "),e._UZ(62,"span",8),e.qZA(),e._UZ(63,"input",21),e.qZA(),e.TgZ(64,"div",6)(65,"label",7),e._uU(66," Email "),e._UZ(67,"span",8),e.qZA(),e._UZ(68,"input",22),e.qZA(),e.TgZ(69,"div",6)(70,"label",7),e._uU(71," GST No. "),e._UZ(72,"span",8),e.qZA(),e._UZ(73,"input",23),e.qZA(),e.TgZ(74,"div",24)(75,"label",7),e._uU(76," Status "),e._UZ(77,"span",8),e.qZA(),e.TgZ(78,"div",25)(79,"select",26)(80,"option",13),e._uU(81,"Select Status"),e.qZA(),e.TgZ(82,"option",27),e._uU(83,"Active"),e.qZA(),e.TgZ(84,"option",27),e._uU(85,"Inactive"),e.qZA()(),e.TgZ(86,"span",28),e.YNc(87,M,1,0,"div",29),e.YNc(88,P,1,0,"div",30),e.qZA()()()()(),e.YNc(89,J,1,0,"hr",31),e.YNc(90,w,7,0,"div",32),e.qZA()()),2&s&&(e.Q6J("formGroup",r.form),e.xp6(25),e.Q6J("value",""),e.xp6(2),e.Q6J("ngForOf",null==r.masterData?null:r.masterData.transporterTypeOptions),e.xp6(20),e.Q6J("ngForOf",r.statesOfIndia),e.xp6(33),e.Q6J("value",null),e.xp6(2),e.Q6J("value","Active"),e.xp6(2),e.Q6J("value","Inactive"),e.xp6(3),e.Q6J("ngIf","Active"==r.form.value.status),e.xp6(1),e.Q6J("ngIf","Inactive"==r.form.value.status),e.xp6(1),e.Q6J("ngIf","view"!==r.action),e.xp6(1),e.Q6J("ngIf","view"!=r.action))},dependencies:[m.sg,m.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],encapsulation:2})}return i})();var L=o(56208);const H=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:Z},{path:"form",component:G,resolve:{accessScreen:o(65876).x}}];let Q=(()=>{class i{static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=e.oAB({type:i});static#s=this.\u0275inj=e.cJS({imports:[m.ez,p.Bz.forChild(H),L.m]})}return i})()},13107:(f,l,o)=>{o.d(l,{t:()=>m});const m={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(f,l,o)=>{o.d(l,{J:()=>m});const m=({data:p,headers:g,widths:R,title:y})=>({tableData:{widths:R,headerRows:1,body:[g.map(d=>({text:d.header,style:"header"})),...p.map(d=>g.map(T=>({style:"subheader",text:d[T.key]})))]},title:y})},49580:(f,l,o)=>{o.d(l,{D:()=>m});const m=[{message:"HSN Code is Required",key:"hsnCode"},{message:"Description of Goods is Required",key:"goodsDescription"},{message:"GST Rate % is Required",key:"gstRate"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"},{message:"UTGST Rate % is Required",key:"ugstRate"},{message:"Revision No. is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"}]},43154:(f,l,o)=>{o.d(l,{tm:()=>T,Kb:()=>m,lR:()=>q,jH:()=>p,y5:()=>v,rL:()=>F,OV:()=>C,HQ:()=>S,RS:()=>k,vc:()=>Z,Nj:()=>N,rw:()=>O,Uh:()=>n,J4:()=>U,ff:()=>R,BC:()=>b,JY:()=>y,Dd:()=>A,Sy:()=>h,tH:()=>e,se:()=>_,RH:()=>d});const m=[{message:"Customer Name is Required",key:"customerName"},{message:"Mobile No. is Required",key:"mobileNo"},{message:"stateOfSupply is Required",key:"stateOfSupply"}],p=[{message:"Customer Code is Required",key:"customerCode"},{message:"Customer Name is Required",key:"customerName"},{message:"Sales Category is Required",key:"customerCategory"},{message:"PAN No. is Required",key:"customerPAN"},{message:"GSTIN is Required",key:"GSTIN"},{message:"GST Classification is Required",key:"GSTClassification"},{message:"Customer Category is Required",key:"customerType"},{message:"Customer Currency is Required",key:"customerCurrency"},{message:"Payment Terms is Required",key:"customerPaymentTerms"}];o(49580);const R=[{message:"SAC Code is Required",key:"sacCode"},{message:"Description of Service is Required",key:"serviceDescription"},{message:"GST Rate % is Required",key:"gstRate"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"},{message:"UTGST Rate % is Required",key:"ugstRate"},{message:"Revision Date is Required",key:"revisionNo"},{message:"Revision Date is Required",key:"revisionDate"}],y=[{message:"Service Description is Required",key:"serviceDescription"}],h=[{message:"SKU Stage is Required",key:"SKUStage"},{message:"Product Category is Required",key:"productCategory"},{message:"SKU No is Required",key:"SKUNo"},{message:"SKU Name is Required",key:"SKUName"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"HSN Code is Required",key:"hsn"},{message:"Unit of Measurement is Required",key:"primaryUnit"}],e=[{message:"Shelf Life [Months] is required",key:"shelfLife"},{message:"Storage Temperature [\xb0C] is required",key:"storageTemp"},{message:"Storage Humidity [RH] is required",key:"storageHumidity"},{message:"Special Storage Instruction is required",key:"specialStorageInstruction"}],d=[{message:"Type is Required",key:"transporterType"}],T=[{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Purchase Order No. is Required",key:"PONumber"},{message:"Purchase Order Date is Required",key:"PODate"},{message:"Net SO Value is Required",key:"SOTotalAmount"},{message:"Status is Required",key:"SOStatus"},{message:"Customer Shipping Address is Required",key:"customerShippingAddress"},{message:"Freight Terms is Required",key:"frightTerms"},{message:"Transporter is Required",key:"transporter"},{message:"Destination is Required",key:"destination"}],_=[{message:"Freight Terms is Required",key:"frightTerms"},{message:"Transporter is Required",key:"transporter"},{message:"Mode of transport is Required",key:"modeOfTransport"},{message:"Destination is Required",key:"destination"}],q=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"}],v=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"}],S=[{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Destination Terms is Required",key:"destination"},{message:"Mode of Transport is Required",key:"modeOfTransport"}],C=[{message:"Export Invoice No. is Required",key:"exportsInvoiceNo"},{message:"Export Invoice Date is Required",key:"exportsInvoiceDate"},{message:"Export Invoice Total Value is Required",key:"exportsInvoiceTotalValue"},{message:"Exchange Rate is Required",key:"exchangeRate"},{message:"Mode of Transport is Required",key:"modeOfTransport"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Port of Destination Terms is Required",key:"destination"},{message:"Final Destination Terms is Required",key:"finalDestination"}],k=[{message:"Payment Terms is Required",key:"paymentTerms"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Transporter Terms is Required",key:"transporter"},{message:"Destination Terms is Required",key:"destination"},{message:"Mode of Transport is Required",key:"modeOfTransport"}],Z=[{message:"Supply Type is Required",key:"supplyType"},{message:"Sub Supply Type is Required",key:"subSupplyType"},{message:"Document Type is Required",key:"docType"},{message:"Document No. is Required of 16 Digits",key:"docNo"},{message:"Document Date is Required",key:"docDate"},{message:"From GSTIN is Required of 15 Digits",key:"fromGstin"},{message:"From Pin Code is Required",key:"fromPincode"},{message:"Act From State Code is Required",key:"actFromStateCode"},{message:"From State Code is Required",key:"fromStateCode"},{message:"To GSTIN is Required of 15 Digits",key:"toGstin"},{message:"To Pin Code is Required",key:"toPincode"},{message:"To State Code is Required",key:"toStateCode"},{message:"Act To State Code is Required",key:"actToStateCode"},{message:"Transaction Type is Required of 4 Digits",key:"transactionType"},{message:"Tot Inv Value is Required",key:"totInvValue"},{message:"Trans Distance is Required",key:"transDistance"}],n=[{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Customer Category is Required",key:"salesCategory"},{message:"Customer Name is Required",key:"customer"},{message:"PO No. is Required",key:"PONumber"},{message:"Net SO Value is Required",key:"PITotalAmount"},{message:"Status is Required",key:"PIStatus"},{message:"Customer Shipping Address is Required",key:"customerShippingAddress"},{message:"Mode Of Transport is Required",key:"modeOfTransport"},{message:"frightTerms is Required",key:"frightTerms"},{message:"transporter is Required",key:"transporter"},{message:"destination is Required",key:"destination"}],A=[{message:"Invoice # is Required",key:"serviceInvoiceNumber"},{message:"Invoice Date is Required",key:"serviceInvoiceDate"},{message:"Customer/Sales Category is Required",key:"customerCategory"},{message:"Customer Name is Required",key:"customer"},{message:"Purchase Order No. is Required",key:"PONo"},{message:"Purchase Order Date is Required",key:"PODate"},{message:"Currency is Required",key:"currency"},{message:"Bill From Location is Required",key:"billFromLocation"}],N=[{message:"Product Category is Required",key:"productCategory"},{message:"HSN Code is Required",key:"HSN"},{message:"Description is Required",key:"description"},{message:"IGST Rate % is Required",key:"igstRate"},{message:"CGST Rate % is Required",key:"cgstRate"},{message:"SGST Rate % is Required",key:"sgstRate"}],O=[{message:"Order is Required",key:"order"},{message:"Payment Terms Description is Required",key:"paymentDescription"}],b=[{message:"Customer Category is Required",key:"customerCategory"},{message:"Customer Name is Required",key:"customer"},{message:"FC Type is Required",key:"FCType"},{message:"Net FC Value is Required",key:"netFCValue"}],U=[{message:"Quotation No. is Required",key:"quotationNo"},{message:"Customer Category is Required",key:"customerCategory"},{message:"Customer Name  is Required",key:"customerName"}],F=[{message:"Customer Name is Required",key:"customerName"}]}}]);