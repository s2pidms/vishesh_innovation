"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[970],{70970:(w,c,s)=>{s.r(c),s.d(c,{GenerateEWayBillsModule:()=>_});var p=s(96814),h=s(1076),t=s(60095),f=s(4092),v=s(36281),A=s(65682),I=s(25116),e=s(65879),Z=s(35747),u=s(98977),C=s(16897),y=s(37285),b=s(50363),T=s(53421);const g=function(a){return{"d-none":a}};function N(a,k){if(1&a){const i=e.EpF();e.TgZ(0,"div",34)(1,"button",35),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.reset())}),e._uU(2," Reset "),e.qZA()()}if(2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,g,"View"==i.action))}}function U(a,k){if(1&a){const i=e.EpF();e.TgZ(0,"div",36)(1,"button",37),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.submit())}),e._uU(2," Generate E-Way Bill "),e.qZA()()}if(2&a){const i=e.oxw();e.xp6(1),e.Q6J("accessType",i.rolePermissionActions.createAction)("ngClass",e.VKq(2,g,"View"==i.action))}}const q=function(){return{standalone:!0}},l=function(a){return{"is-invalid":a}};let S=(()=>{class a{get f(){return this.form.controls}constructor(i,n,o,r,m,d){this.salesInvoiceService=i,this.spinner=n,this.toastService=o,this.validationService=r,this.modalService=m,this.utilityService=d,this.action="create",this.submitted=!1,this.customerName="",this.salesInvoiceId="",this.salesInvoiceArr=[],this.shipmentNameOptions=[],this.itemDetailsArr=[],this.customerBillingAddressObj={},this.rolePermissionActions=I.a1,this.form=new t.nJ({_id:new t.p4(null),supplyType:new t.p4("O",[t.kI.required]),subSupplyType:new t.p4("1",[t.kI.required]),subSupplyDesc:new t.p4(null,[t.kI.maxLength(20)]),docType:new t.p4("INV",[t.kI.required]),docNo:new t.p4(null,[t.kI.required,t.kI.maxLength(16)]),docDate:new t.p4(this.utilityService.getTodayDate("DD/MM/YYYY"),[t.kI.required,t.kI.pattern("[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]")]),fromGstin:new t.p4(null,[t.kI.required,t.kI.maxLength(15),t.kI.minLength(15),t.kI.pattern("[0-9]{2}[0-9|A-Z]{13}")]),fromTrdName:new t.p4(null,[t.kI.maxLength(100)]),fromAddr1:new t.p4(null,[t.kI.maxLength(120)]),fromAddr2:new t.p4(null,[t.kI.maxLength(120)]),fromPlace:new t.p4(null,[t.kI.maxLength(50)]),fromPincode:new t.p4(null,[t.kI.required,t.kI.max(999999),t.kI.min(1e5)]),actFromStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),fromStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),toGstin:new t.p4(null,[t.kI.required,t.kI.maxLength(15),t.kI.minLength(15),t.kI.pattern("[0-9]{2}[0-9|A-Z]{13}")]),toTrdName:new t.p4(null,[t.kI.maxLength(100)]),toAddr1:new t.p4(null,[t.kI.maxLength(120)]),toAddr2:new t.p4(null,[t.kI.maxLength(120)]),toPlace:new t.p4(null,[t.kI.maxLength(50)]),toPincode:new t.p4(null,[t.kI.required]),actToStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),toStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),transactionType:new t.p4(1,[t.kI.required,t.kI.max(4)]),otherValue:new t.p4(0),totalValue:new t.p4(0),cgstValue:new t.p4(0),sgstValue:new t.p4(0),igstValue:new t.p4(0),totInvValue:new t.p4(null,[t.kI.required]),transporterId:new t.p4(null,[t.kI.pattern("[0-9]{2}[0-9|A-Z]{13}")]),transporterName:new t.p4(null,[t.kI.maxLength(100)]),transDocNo:new t.p4(null,[t.kI.maxLength(15)]),transDistance:new t.p4(0,[t.kI.required]),transMode:new t.p4(null),transDocDate:new t.p4(null),vehicleNo:new t.p4(null,[t.kI.minLength(7),t.kI.maxLength(15)]),vehicleType:new t.p4(null),itemList:new t.p4([])})}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,f.vc))return;this.form.enable();let i=this.form.value;i.salesInvoiceId=this.salesInvoiceId,i.transDocDate=null,i.itemList=this.itemDetailsArr,delete i._id,this.create(i)}create(i){this.spinner.show(),i.transactionType=this.matchAddresses(i),this.salesInvoiceService.eWayBillGenerate(i).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.getInitialData()})}getInitialData(){this.spinner.show(),this.salesInvoiceService.getAllEwayBillList({category:"Domestic",type:"EwayBill"}).subscribe(i=>{this.form.controls.docDate.setValue(this.utilityService.getTodayDate("DD/MM/YYYY")),this.f.supplyType.setValue("O"),this.f.transDistance.setValue(0),this.f.subSupplyDesc.setValue(""),this.f.subSupplyType.setValue("1"),this.f.docType.setValue("INV"),this.f.transactionType.setValue(1),this.salesInvoiceArr=i}),this.spinner.hide()}setSalesInvoice(i){this.submitted=!0,this.spinner.show(),this.salesInvoiceService.getById(i._id).subscribe(n=>{let o={docNo:n?.salesInvoiceNumber,docDate:this.utilityService.getFormatDate(n?.salesInvoiceDate,"DD/MM/YYYY"),fromGstin:n?.company?.GSTIN,fromTrdName:n?.company?.companyName,fromAddr1:`${n?.company?.companyBillingAddress?.addressLine1} ${n?.company?.companyBillingAddress?.addressLine2}`,fromAddr2:n?.company?.companyBillingAddress?.addressLine3,fromPlace:n?.company?.companyBillingAddress?.city,fromPincode:n?.company?.companyBillingAddress?.pinCode,fromStateCode:n?.company?.GSTIN.slice(0,2),actFromStateCode:n?.company?.GSTIN.slice(0,2),toGstin:n?.customer?.GSTIN,toTrdName:n?.customer?.customerName,toAddr1:`${n?.customerShippingAddress?.line1} ${n?.customerShippingAddress?.line2}`,toAddr2:n?.customerShippingAddress?.line3,toPlace:n?.customerShippingAddress?.city,toPincode:n?.customerShippingAddress?.pinCode,actToStateCode:n?.customer.GSTIN.slice(0,2),toStateCode:n?.customer.GSTIN.slice(0,2),transactionType:1,otherValue:0,totalValue:+(n?.salesInvoiceTotalTaxAmount).toFixed(2),cgstValue:+(n?.salesInvoiceTotalCGSTAmount).toFixed(2),sgstValue:+(n?.salesInvoiceTotalSGSTAmount).toFixed(2),igstValue:+(n?.salesInvoiceTotalIGSTAmount).toFixed(2),totInvValue:+(n?.salesInvoiceTotalAmountWithTax).toFixed(2),transporterName:n?.transporter,transporterId:n?.transporterId};this.customerBillingAddressObj=n.customerBillingAddress;let r=n?.salesInvoiceTotalIGSTAmount>0;this.itemDetailsArr=n?.salesInvoiceDetails.map(d=>({productName:d?.SKU?.SKUName,productDesc:d?.SKU?.SKUName+", "+d?.SKU?.SKUDescription,hsnCode:d?.HSNCode,quantity:d?.dispatchQty,qtyUnit:d?.unit,taxableAmount:+(d?.salesInvoiceLineValue).toFixed(2),cgstRate:r?0:+(d?.cgst).toFixed(2),sgstRate:r?0:+(d?.sgst).toFixed(2),igstRate:r?+(d?.igst).toFixed(2):0}));const m=+(n?.otherCharges?.totalAmount).toFixed(2);m&&this.itemDetailsArr.push({productName:"Other Charges",productDesc:"Freight & Forwarding Charges",hsnCode:"996511",quantity:1,qtyUnit:"NOS",taxableAmount:m,cgstRate:r?0:9,sgstRate:r?0:9,igstRate:r?18:0}),this.form.patchValue(o)}),this.spinner.hide()}matchAddresses(i){return i.toAddr1!=`${this.customerBillingAddressObj?.line1} ${this.customerBillingAddressObj?.line2}`||i.toAddr2!=this.customerBillingAddressObj?.line3||i.toPlace!=this.customerBillingAddressObj?.city||i.toPincode!=this.customerBillingAddressObj?.pinCode?2:1}reset(){this.salesInvoiceId="",this.itemDetailsArr=[],this.form.reset(),this.getInitialData()}openTransportationDetailsModal(){const i=this.modalService.open(v.G,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});i.componentInstance.transportationDetails={transporterId:this.form.value.transporterId,transporterName:this.form.value.transporterName,transDistance:this.form.value.transDistance,vehicleNo:this.form.value.vehicleNo,transDocNo:this.form.value.transDocNo,transDocDate:this.form.value.transDocDate,transMode:this.form.value.transMode},i.result.then(n=>{["create","edit"].includes(this.action)&&this.form.patchValue(n)},n=>{})}openItemDetailsModal(){const i=this.modalService.open(A.u,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});i.componentInstance.itemDetailsArr=this.itemDetailsArr,i.componentInstance.othersValues={otherValue:this.form.value.otherValue,totalValue:this.form.value.totalValue,cgstValue:this.form.value.cgstValue,sgstValue:this.form.value.sgstValue,igstValue:this.form.value.igstValue,totInvValue:this.form.value.totInvValue},i.result.then(n=>{["create","edit"].includes(this.action)&&(this.form.patchValue(n?.othersValues),this.itemDetailsArr=n?.itemDetailsArr)},n=>{})}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(Z.GC),e.Y36(u.V),e.Y36(u.kl),e.Y36(C.RJ),e.Y36(y.FF),e.Y36(u.tI))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-generate-e-way-bills-form"]],decls:119,vars:59,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","mb-0"],[1,"text-danger"],["bindLabel","salesInvoiceNumber","bindValue","_id",3,"ngModel","ngModelOptions","items","clearable","ngModelChange","change"],["type","text","formControlName","toTrdName",1,"form-control",3,"ngClass"],["type","text","formControlName","docNo",1,"form-control",3,"ngClass"],["type","text","formControlName","docDate",1,"form-control",3,"ngClass"],[1,"form-label"],[1,"row","line-border"],["type","text","formControlName","fromGstin",1,"form-control",3,"ngClass"],["type","text","formControlName","fromTrdName",1,"form-control",3,"ngClass"],["type","text","formControlName","fromAddr1",1,"form-control",3,"ngClass"],["type","text","formControlName","fromAddr2",1,"form-control",3,"ngClass"],["type","text","formControlName","fromPlace",1,"form-control",3,"ngClass"],["type","number","formControlName","fromPincode",1,"form-control",3,"ngClass"],["type","number","formControlName","actFromStateCode","name","actFromStateCode",1,"form-control",3,"ngClass"],["type","text","formControlName","toGstin",1,"form-control",3,"ngClass"],["type","text","formControlName","toAddr1",1,"form-control",3,"ngClass"],["type","text","formControlName","toAddr2",1,"form-control",3,"ngClass"],["type","text","formControlName","toPlace",1,"form-control",3,"ngClass"],["type","number","formControlName","toPincode",1,"form-control",3,"ngClass"],["type","number","formControlName","actToStateCode",1,"form-control",3,"ngClass"],[1,"col-8"],["type","button",1,"btn","bg-primary",3,"click"],["type","button",1,"btn","bg-primary","ms-4",3,"click"],[1,"col-4","mb-0","align-self-end"],["class","d-grid col pe-0",4,"ngIf"],["class","d-grid col",4,"ngIf"],[1,"d-grid","col","pe-0"],["type","button",1,"btn","btn-primary",3,"ngClass","click"],[1,"d-grid","col"],["appAccessControl","","type","button",1,"btn","btn-primary",3,"accessType","ngClass","click"]],template:function(n,o){1&n&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5," Generate E-Way Bill"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Sales Invoice "),e._UZ(11,"span",8),e.qZA(),e.TgZ(12,"ng-select",9),e.NdJ("ngModelChange",function(m){return o.salesInvoiceId=m})("change",function(m){return o.setSalesInvoice(m)}),e.qZA()(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15," Customer Name "),e._UZ(16,"span",8),e.qZA(),e._UZ(17,"input",10),e.qZA(),e.TgZ(18,"div",6)(19,"label",7),e._uU(20," Document No. "),e._UZ(21,"span",8),e.qZA(),e._UZ(22,"input",11),e.qZA(),e.TgZ(23,"div",6)(24,"label",7),e._uU(25," Document Date"),e._UZ(26,"span",8),e.qZA(),e._UZ(27,"input",12),e.qZA()()(),e.TgZ(28,"label",13),e._uU(29,"Bill From Details"),e.qZA(),e._UZ(30,"hr",14),e.TgZ(31,"div",5)(32,"div",6)(33,"label",7),e._uU(34," From GSTIN "),e._UZ(35,"span",8),e.qZA(),e._UZ(36,"input",15),e.qZA(),e.TgZ(37,"div",6)(38,"label",7),e._uU(39," Name "),e._UZ(40,"span",8),e.qZA(),e._UZ(41,"input",16),e.qZA(),e.TgZ(42,"div",6)(43,"label",7),e._uU(44," Address Line 1"),e._UZ(45,"span",8),e.qZA(),e._UZ(46,"input",17),e.qZA(),e.TgZ(47,"div",6)(48,"label",7),e._uU(49," Address Line 2"),e._UZ(50,"span",8),e.qZA(),e._UZ(51,"input",18),e.qZA()(),e.TgZ(52,"div",5)(53,"div",6)(54,"label",7),e._uU(55," Place "),e._UZ(56,"span",8),e.qZA(),e._UZ(57,"input",19),e.qZA(),e.TgZ(58,"div",6)(59,"label",7),e._uU(60," Pin Code "),e._UZ(61,"span",8),e.qZA(),e._UZ(62,"input",20),e.qZA(),e.TgZ(63,"div",6)(64,"label",7),e._uU(65," State Code"),e._UZ(66,"span",8),e.qZA(),e._UZ(67,"input",21),e.qZA()(),e.TgZ(68,"label",13),e._uU(69,"Bill To Details"),e.qZA(),e._UZ(70,"hr",14),e.TgZ(71,"div",5)(72,"div",6)(73,"label",7),e._uU(74," To GSTIN "),e._UZ(75,"span",8),e.qZA(),e._UZ(76,"input",22),e.qZA(),e.TgZ(77,"div",6)(78,"label",7),e._uU(79," Name "),e._UZ(80,"span",8),e.qZA(),e._UZ(81,"input",10),e.qZA(),e.TgZ(82,"div",6)(83,"label",7),e._uU(84," Address Line 1"),e._UZ(85,"span",8),e.qZA(),e._UZ(86,"input",23),e.qZA(),e.TgZ(87,"div",6)(88,"label",7),e._uU(89," Address Line 2"),e._UZ(90,"span",8),e.qZA(),e._UZ(91,"input",24),e.qZA()(),e.TgZ(92,"div",5)(93,"div",6)(94,"label",7),e._uU(95," Place "),e._UZ(96,"span",8),e.qZA(),e._UZ(97,"input",25),e.qZA(),e.TgZ(98,"div",6)(99,"label",7),e._uU(100," Pin Code "),e._UZ(101,"span",8),e.qZA(),e._UZ(102,"input",26),e.qZA(),e.TgZ(103,"div",6)(104,"label",7),e._uU(105," State Code"),e._UZ(106,"span",8),e.qZA(),e._UZ(107,"input",27),e.qZA()(),e._UZ(108,"hr",14),e.TgZ(109,"div",5)(110,"div",28)(111,"button",29),e.NdJ("click",function(){return o.openTransportationDetailsModal()}),e._uU(112," Add Transportation Details "),e.qZA(),e.TgZ(113,"button",30),e.NdJ("click",function(){return o.openItemDetailsModal()}),e._uU(114," Add Item Details "),e.qZA()(),e.TgZ(115,"div",31)(116,"div",5),e.YNc(117,N,3,3,"div",32),e.YNc(118,U,3,4,"div",33),e.qZA()()()()()),2&n&&(e.Q6J("formGroup",o.form),e.xp6(12),e.Q6J("ngModel",o.salesInvoiceId)("ngModelOptions",e.DdM(24,q))("items",o.salesInvoiceArr)("clearable",!1),e.xp6(5),e.Q6J("ngClass",e.VKq(25,l,o.f.toTrdName.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(27,l,o.f.docNo.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(29,l,o.f.docDate.invalid&&o.submitted)),e.xp6(9),e.Q6J("ngClass",e.VKq(31,l,o.f.fromGstin.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(33,l,o.f.fromTrdName.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(35,l,o.f.fromAddr1.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(37,l,o.f.fromAddr2.invalid&&o.submitted)),e.xp6(6),e.Q6J("ngClass",e.VKq(39,l,o.f.fromPlace.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(41,l,o.f.fromPincode.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(43,l,o.f.actFromStateCode.invalid&&o.submitted)),e.xp6(9),e.Q6J("ngClass",e.VKq(45,l,o.f.toGstin.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(47,l,o.f.toTrdName.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(49,l,o.f.toAddr1.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(51,l,o.f.toAddr2.invalid&&o.submitted)),e.xp6(6),e.Q6J("ngClass",e.VKq(53,l,o.f.toPlace.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(55,l,o.f.toPincode.invalid&&o.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(57,l,o.f.actToStateCode.invalid&&o.submitted)),e.xp6(10),e.Q6J("ngIf","view"!==o.action),e.xp6(1),e.Q6J("ngIf","view"!==o.action))},dependencies:[p.mk,p.O5,t.Fj,t.wV,t.JJ,t.JL,t.sg,t.u,t.On,b.w9,T.J],encapsulation:2})}return a})();var V=s(56208);const D=[{path:"",redirectTo:"form",pathMatch:"full"},{path:"form",component:S}];let _=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275mod=e.oAB({type:a});static#n=this.\u0275inj=e.cJS({imports:[p.ez,h.Bz.forChild(D),V.m]})}return a})()}}]);