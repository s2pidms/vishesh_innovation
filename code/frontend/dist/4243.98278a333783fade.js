"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4243],{34243:(x,c,i)=>{i.r(c),i.d(c,{GenerateExportEWayBillsModule:()=>S});var p=i(96814),g=i(1076),t=i(60095),v=i(43154),h=i(25116),Z=i(36281),y=i(65682),e=i(65879),I=i(35747),u=i(2742),C=i(16897),A=i(37285),b=i(50363),T=i(53421);const f=function(a){return{"d-none":a}};function U(a,m){if(1&a){const r=e.EpF();e.TgZ(0,"div",35)(1,"button",36),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.reset())}),e._uU(2," Reset "),e.qZA()()}if(2&a){const r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,f,"View"==r.action))}}function N(a,m){if(1&a){const r=e.EpF();e.TgZ(0,"div",37)(1,"button",38),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.submit())}),e._uU(2," Generate Export E-Way Bill "),e.qZA()()}if(2&a){const r=e.oxw();e.xp6(1),e.Q6J("accessType",r.rolePermissionActions.createAction)("ngClass",e.VKq(2,f,"View"==r.action))}}const q=function(){return{standalone:!0}},l=function(a){return{"is-invalid":a}};let V=(()=>{var a;class m{get f(){return this.form.controls}constructor(o,n,d,s,k,w){this.salesInvoiceService=o,this.spinner=n,this.toastService=d,this.validationService=s,this.modalService=k,this.utilityService=w,this.action="create",this.submitted=!1,this.customerName="",this.salesInvoiceId="",this.salesInvoiceArr=[],this.shipmentNameOptions=[],this.itemDetailsArr=[],this.rolePermissionActions=h.a1,this.form=new t.nJ({_id:new t.p4(null),supplyType:new t.p4("O",[t.kI.required]),subSupplyType:new t.p4("1",[t.kI.required]),subSupplyDesc:new t.p4(null,[t.kI.maxLength(20)]),docType:new t.p4("INV",[t.kI.required]),docNo:new t.p4(null,[t.kI.required,t.kI.maxLength(16)]),docDate:new t.p4(this.utilityService.getTodayDate("DD/MM/YYYY"),[t.kI.required,t.kI.pattern("[0-3][0-9]/[0-1][0-9]/[2][0][1-2][0-9]")]),fromGstin:new t.p4(null,[t.kI.required,t.kI.maxLength(15),t.kI.minLength(15),t.kI.pattern("[0-9]{2}[0-9|A-Z]{13}")]),fromTrdName:new t.p4(null,[t.kI.maxLength(100)]),fromAddr1:new t.p4(null,[t.kI.maxLength(120)]),fromAddr2:new t.p4(null,[t.kI.maxLength(120)]),fromPlace:new t.p4(null,[t.kI.maxLength(50)]),fromPincode:new t.p4(null,[t.kI.required,t.kI.max(999999),t.kI.min(1e5)]),actFromStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),fromStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),toGstin:new t.p4(null,[t.kI.required]),toTrdName:new t.p4(null,[t.kI.maxLength(100)]),toAddr1:new t.p4(null,[t.kI.maxLength(120)]),toAddr2:new t.p4(null,[t.kI.maxLength(120)]),toPlace:new t.p4(null,[t.kI.maxLength(50)]),toPincode:new t.p4(null,[t.kI.required]),actToStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),toStateCode:new t.p4(null,[t.kI.required,t.kI.max(99)]),transactionType:new t.p4(1,[t.kI.required,t.kI.max(4)]),otherValue:new t.p4(0),totalValue:new t.p4(0),cgstValue:new t.p4(0),sgstValue:new t.p4(0),igstValue:new t.p4(0),totInvValue:new t.p4(null,[t.kI.required]),transporterId:new t.p4(null,[t.kI.pattern("[0-9]{2}[0-9|A-Z]{13}")]),transporterName:new t.p4(null,[t.kI.maxLength(100)]),transDocNo:new t.p4(null,[t.kI.maxLength(15)]),transDistance:new t.p4(0,[t.kI.required]),transMode:new t.p4(null),transDocDate:new t.p4(null),vehicleNo:new t.p4(null,[t.kI.minLength(7),t.kI.maxLength(15)]),vehicleType:new t.p4(null),itemList:new t.p4([])})}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,v.vc))return;this.form.enable();let o=this.form.value;o.salesInvoiceId=this.salesInvoiceId,o.transDocDate=null,o.itemList=this.itemDetailsArr,delete o._id,this.create(o)}create(o){this.spinner.show(),this.salesInvoiceService.eWayBillGenerate(o).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.getInitialData()})}getInitialData(){this.spinner.show(),this.salesInvoiceService.getAllEwayBillList({category:"Exports",type:"EwayBill"}).subscribe(o=>{this.form.controls.docDate.setValue(this.utilityService.getTodayDate("DD/MM/YYYY")),this.f.supplyType.setValue("O"),this.f.transDistance.setValue(0),this.f.subSupplyDesc.setValue(""),this.f.subSupplyType.setValue("1"),this.f.docType.setValue("INV"),this.f.transactionType.setValue(1),this.salesInvoiceArr=o}),this.spinner.hide()}setSalesInvoice(o){this.submitted=!0,this.spinner.show(),this.salesInvoiceService.getById(o._id).subscribe(n=>{let d={docNo:n?.salesInvoiceNumber,docDate:this.utilityService.getFormatDate(n?.salesInvoiceDate,"DD/MM/YYYY"),fromGstin:n?.company?.GSTIN,fromTrdName:n?.company?.companyName,fromAddr1:`${n?.company?.companyBillingAddress?.addressLine1} ${n?.company?.companyBillingAddress?.addressLine2}`,fromAddr2:n?.company?.companyBillingAddress?.addressLine3,fromPlace:n?.company?.companyBillingAddress?.city,fromPincode:n?.company?.companyBillingAddress?.pinCode,fromStateCode:n?.company?.GSTIN.slice(0,2),actFromStateCode:n?.company?.GSTIN.slice(0,2),toGstin:"URP",toTrdName:n?.customer?.customerName,toAddr1:`${n?.customerBillingAddress?.line1} ${n?.customerBillingAddress?.line2}`,toAddr2:n?.customerBillingAddress?.line3,toPlace:n?.customerBillingAddress?.city,toPincode:999999,actToStateCode:96,toStateCode:96,transactionType:1,otherValue:+(n?.otherCharges?.totalAmount).toFixed(2),totalValue:+(n?.salesInvoiceTotalTaxAmount).toFixed(2),cgstValue:+(n?.salesInvoiceTotalCGSTAmount).toFixed(2),sgstValue:+(n?.salesInvoiceTotalSGSTAmount).toFixed(2),igstValue:+(n?.salesInvoiceTotalIGSTAmount).toFixed(2),totInvValue:+(n?.salesInvoiceTotalAmountWithTax).toFixed(2),transporterName:n?.transporter};this.itemDetailsArr=n?.salesInvoiceDetails.map(s=>({productName:s?.SKU?.SKUName,productDesc:s?.SKU?.SKUName+", "+s?.SKU?.SKUDescription,hsnCode:s?.HSNCode,quantity:s?.dispatchQty,qtyUnit:s?.unit,taxableAmount:+(s?.salesInvoiceLineValue).toFixed(2),cgstRate:0,sgstRate:0,igstRate:0})),this.form.patchValue(d)}),this.spinner.hide()}reset(){this.salesInvoiceId="",this.itemDetailsArr=[],this.form.reset(),this.getInitialData()}openTransportationDetailsModal(){const o=this.modalService.open(Z.G,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});o.componentInstance.transportationDetails={transporterId:this.form.value.transporterId,transporterName:this.form.value.transporterName,transDistance:this.form.value.transDistance,vehicleNo:this.form.value.vehicleNo,transDocNo:this.form.value.transDocNo,transDocDate:this.form.value.transDocDate,transMode:this.form.value.transMode},o.result.then(n=>{["create","edit"].includes(this.action)&&this.form.patchValue(n)},n=>{})}openItemDetailsModal(){const o=this.modalService.open(y.u,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});o.componentInstance.itemDetailsArr=this.itemDetailsArr,o.componentInstance.othersValues={otherValue:this.form.value.otherValue,totalValue:this.form.value.totalValue,cgstValue:this.form.value.cgstValue,sgstValue:this.form.value.sgstValue,igstValue:this.form.value.igstValue,totInvValue:this.form.value.totInvValue},o.result.then(n=>{["create","edit"].includes(this.action)&&(this.form.patchValue(n?.othersValues),this.itemDetailsArr=n?.itemDetailsArr)},n=>{})}setStateCode(){this.f.toStateCode.setValue(this.f.actToStateCode.value)}}return(a=m).\u0275fac=function(o){return new(o||a)(e.Y36(I.GC),e.Y36(u.V),e.Y36(u.kl),e.Y36(C.RJ),e.Y36(A.FF),e.Y36(u.tI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-generate-export-e-way-bills-form"]],decls:119,vars:59,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","mb-0"],[1,"text-danger"],["bindLabel","salesInvoiceNumber","bindValue","_id",3,"ngModel","ngModelOptions","items","clearable","ngModelChange","change"],["type","text","formControlName","toTrdName",1,"form-control",3,"ngClass"],["type","text","formControlName","docNo",1,"form-control",3,"ngClass"],["type","text","formControlName","docDate",1,"form-control",3,"ngClass"],[1,"form-label"],[1,"row","line-border"],["type","text","formControlName","fromGstin",1,"form-control",3,"ngClass"],["type","text","formControlName","fromTrdName",1,"form-control",3,"ngClass"],["type","text","formControlName","fromAddr1",1,"form-control",3,"ngClass"],["type","text","formControlName","fromAddr2",1,"form-control",3,"ngClass"],["type","text","formControlName","fromPlace",1,"form-control",3,"ngClass"],["type","number","formControlName","fromPincode",1,"form-control",3,"ngClass"],["type","number","formControlName","actFromStateCode","name","actFromStateCode",1,"form-control",3,"ngClass"],[1,"row","line-border","mt-0"],["type","text","formControlName","toGstin",1,"form-control",3,"ngClass"],["type","text","formControlName","toAddr1",1,"form-control",3,"ngClass"],["type","text","formControlName","toAddr2",1,"form-control",3,"ngClass"],["type","text","formControlName","toPlace",1,"form-control",3,"ngClass"],["type","number","formControlName","toPincode",1,"form-control",3,"ngClass"],["type","number","formControlName","actToStateCode",1,"form-control",3,"ngClass","keyup"],[1,"col-7"],["type","button",1,"btn","bg-primary",3,"click"],["type","button",1,"btn","bg-primary","ms-4",3,"click"],[1,"col-5","mb-0","align-self-end"],["class","d-grid col pe-0",4,"ngIf"],["class","d-grid col",4,"ngIf"],[1,"d-grid","col","pe-0"],["type","button",1,"btn","btn-primary",3,"ngClass","click"],[1,"d-grid","col"],["appAccessControl","","type","button",1,"btn","btn-primary",3,"accessType","ngClass","click"]],template:function(o,n){1&o&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5," Generate Export E-Way Bill"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Sales Invoice "),e._UZ(11,"span",8),e.qZA(),e.TgZ(12,"ng-select",9),e.NdJ("ngModelChange",function(s){return n.salesInvoiceId=s})("change",function(s){return n.setSalesInvoice(s)}),e.qZA()(),e.TgZ(13,"div",6)(14,"label",7),e._uU(15," Customer Name "),e._UZ(16,"span",8),e.qZA(),e._UZ(17,"input",10),e.qZA(),e.TgZ(18,"div",6)(19,"label",7),e._uU(20," Document No. "),e._UZ(21,"span",8),e.qZA(),e._UZ(22,"input",11),e.qZA(),e.TgZ(23,"div",6)(24,"label",7),e._uU(25," Document Date"),e._UZ(26,"span",8),e.qZA(),e._UZ(27,"input",12),e.qZA()()(),e.TgZ(28,"label",13),e._uU(29,"Bill From Details"),e.qZA(),e._UZ(30,"hr",14),e.TgZ(31,"div",5)(32,"div",6)(33,"label",7),e._uU(34," From GSTIN "),e._UZ(35,"span",8),e.qZA(),e._UZ(36,"input",15),e.qZA(),e.TgZ(37,"div",6)(38,"label",7),e._uU(39," Name "),e._UZ(40,"span",8),e.qZA(),e._UZ(41,"input",16),e.qZA(),e.TgZ(42,"div",6)(43,"label",7),e._uU(44," Address Line 1"),e._UZ(45,"span",8),e.qZA(),e._UZ(46,"input",17),e.qZA(),e.TgZ(47,"div",6)(48,"label",7),e._uU(49," Address Line 2"),e._UZ(50,"span",8),e.qZA(),e._UZ(51,"input",18),e.qZA()(),e.TgZ(52,"div",5)(53,"div",6)(54,"label",7),e._uU(55," Place "),e._UZ(56,"span",8),e.qZA(),e._UZ(57,"input",19),e.qZA(),e.TgZ(58,"div",6)(59,"label",7),e._uU(60," Pin Code "),e._UZ(61,"span",8),e.qZA(),e._UZ(62,"input",20),e.qZA(),e.TgZ(63,"div",6)(64,"label",7),e._uU(65," State Code"),e._UZ(66,"span",8),e.qZA(),e._UZ(67,"input",21),e.qZA()(),e.TgZ(68,"label",13),e._uU(69,"Bill To Details"),e.qZA(),e._UZ(70,"hr",22),e.TgZ(71,"div",5)(72,"div",6)(73,"label",7),e._uU(74," To GSTIN "),e._UZ(75,"span",8),e.qZA(),e._UZ(76,"input",23),e.qZA(),e.TgZ(77,"div",6)(78,"label",7),e._uU(79," Name "),e._UZ(80,"span",8),e.qZA(),e._UZ(81,"input",10),e.qZA(),e.TgZ(82,"div",6)(83,"label",7),e._uU(84," Address Line 1"),e._UZ(85,"span",8),e.qZA(),e._UZ(86,"input",24),e.qZA(),e.TgZ(87,"div",6)(88,"label",7),e._uU(89," Address Line 2"),e._UZ(90,"span",8),e.qZA(),e._UZ(91,"input",25),e.qZA()(),e.TgZ(92,"div",5)(93,"div",6)(94,"label",7),e._uU(95," Place "),e._UZ(96,"span",8),e.qZA(),e._UZ(97,"input",26),e.qZA(),e.TgZ(98,"div",6)(99,"label",7),e._uU(100," Pin Code "),e._UZ(101,"span",8),e.qZA(),e._UZ(102,"input",27),e.qZA(),e.TgZ(103,"div",6)(104,"label",7),e._uU(105," State Code"),e._UZ(106,"span",8),e.qZA(),e.TgZ(107,"input",28),e.NdJ("keyup",function(){return n.setStateCode()}),e.qZA()()(),e._UZ(108,"hr",14),e.TgZ(109,"div",5)(110,"div",29)(111,"button",30),e.NdJ("click",function(){return n.openTransportationDetailsModal()}),e._uU(112," Add Transportation Details "),e.qZA(),e.TgZ(113,"button",31),e.NdJ("click",function(){return n.openItemDetailsModal()}),e._uU(114," Add Item Details "),e.qZA()(),e.TgZ(115,"div",32)(116,"div",5),e.YNc(117,U,3,3,"div",33),e.YNc(118,N,3,4,"div",34),e.qZA()()()()()),2&o&&(e.Q6J("formGroup",n.form),e.xp6(12),e.Q6J("ngModel",n.salesInvoiceId)("ngModelOptions",e.DdM(24,q))("items",n.salesInvoiceArr)("clearable",!1),e.xp6(5),e.Q6J("ngClass",e.VKq(25,l,n.f.toTrdName.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(27,l,n.f.docNo.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(29,l,n.f.docDate.invalid&&n.submitted)),e.xp6(9),e.Q6J("ngClass",e.VKq(31,l,n.f.fromGstin.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(33,l,n.f.fromTrdName.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(35,l,n.f.fromAddr1.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(37,l,n.f.fromAddr2.invalid&&n.submitted)),e.xp6(6),e.Q6J("ngClass",e.VKq(39,l,n.f.fromPlace.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(41,l,n.f.fromPincode.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(43,l,n.f.actFromStateCode.invalid&&n.submitted)),e.xp6(9),e.Q6J("ngClass",e.VKq(45,l,n.f.toGstin.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(47,l,n.f.toTrdName.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(49,l,n.f.toAddr1.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(51,l,n.f.toAddr2.invalid&&n.submitted)),e.xp6(6),e.Q6J("ngClass",e.VKq(53,l,n.f.toPlace.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(55,l,n.f.toPincode.invalid&&n.submitted)),e.xp6(5),e.Q6J("ngClass",e.VKq(57,l,n.f.actToStateCode.invalid&&n.submitted)),e.xp6(10),e.Q6J("ngIf","view"!==n.action),e.xp6(1),e.Q6J("ngIf","view"!==n.action))},dependencies:[p.mk,p.O5,t.Fj,t.wV,t.JJ,t.JL,t.sg,t.u,t.On,b.w9,T.J],encapsulation:2}),m})();var _=i(56208);const D=[{path:"",redirectTo:"form",pathMatch:"full"},{path:"form",component:V}];let S=(()=>{var a;class m{}return(a=m).\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.ez,g.Bz.forChild(D),_.m]}),m})()}}]);