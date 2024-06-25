"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4076],{56438:(Z,h,d)=>{d.d(h,{z8:()=>Y,af:()=>et});var t=d(65879),i=d(60095),c=d(37285),m=d(2742),p=d(96814),g=d(50363);function f(o,a){1&o&&t._UZ(0,"hr",9)}function _(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"button",30),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(3,"Save"),t.qZA()()()}}const v=function(){return["create","edit"]};let y=(()=>{var o;class a{constructor(n,e){this.activeModal=n,this.toastService=e,this.data=[],this.billFromAddress={},this.billFromLocation="",this.billFromCompanyData={},this.billFromLocationArr=[],this.otherCharges={},this.action="",this.saveData=new t.vpe,this.form=new i.nJ({billFromLocation:new i.p4(null),contactPersonName:new i.p4(null,[i.kI.required]),line1:new i.p4(null),line2:new i.p4(null),line3:new i.p4(null),line4:new i.p4(null),pinCode:new i.p4(null),city:new i.p4(null),state:new i.p4(null),country:new i.p4(null)})}ngOnInit(){this.form.patchValue(this.billFromAddress),this.form.controls.billFromLocation.setValue(this.billFromLocation),("view"==this.action||"cancel"==this.action||"approve"==this.action)&&this.form.disable()}get f(){return this.form.controls}dismissModel(){this.saveData.emit({data:this.form.value,key:"SOBillFrom"}),this.toastService.success("Bill From Saved")}patchAddress(n){let e=this.billFromCompanyData.placesOfBusiness.find(l=>l.locationID==n.value);this.form.patchValue({line1:e?.addressLine1,line2:e?.addressLine2,line3:e?.addressLine3,line4:e?.addressLine4,pinCode:e?.pinCode,city:e?.city,state:e?.state,country:e?.country})}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz),t.Y36(m.kl))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-bill-from"]],inputs:{data:"data",billFromAddress:"billFromAddress",billFromLocation:"billFromLocation",billFromCompanyData:"billFromCompanyData",billFromLocationArr:"billFromLocationArr",otherCharges:"otherCharges",action:"action"},outputs:{saveData:"saveData"},decls:61,vars:7,consts:[[1,"container-fluid","px-0"],[3,"formGroup"],[1,"row","my-4","px-5"],[1,"col-auto","mt-1","pe-0"],[1,"form-label","text-nowrap"],[1,"col-auto","mt-1","px-3"],[1,"fa","fa-caret-right","text-secondary","fs-2"],[1,"col-7","ps-0"],["bindLabel","label","bindValue","value","formControlName","billFromLocation","placeholder","Select",3,"items","clearable","change"],[1,"line-border"],[1,"row","mb-4","px-5"],[1,"col-6"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","line1","readonly","",1,"form-control"],["type","text","formControlName","line2","readonly","",1,"form-control"],["type","text","formControlName","line3","readonly","",1,"form-control"],["type","text","formControlName","line4","readonly","",1,"form-control"],["type","text","formControlName","city","readonly","",1,"form-control"],["type","text","formControlName","state","readonly","",1,"form-control"],["oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","type","number","maxlength","6","formControlName","pinCode","readonly","",1,"form-control"],[1,"row","justify-content-between"],[1,"col"],["type","text","formControlName","country","readonly","",1,"form-control"],[1,"row"],[1,"col-12"],["class","line-border",4,"ngIf"],["class","row justify-content-center",4,"ngIf"],[1,"row","justify-content-center"],[1,"col-12","d-flex","justify-content-center","my-2"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Bill from Location "),t.qZA()(),t.TgZ(6,"div",5),t._UZ(7,"i",6),t.qZA(),t.TgZ(8,"div",7)(9,"ng-select",8),t.NdJ("change",function(l){return e.patchAddress(l)}),t.qZA()()(),t._UZ(10,"hr",9),t.TgZ(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14," Address Line 1 "),t._UZ(15,"span",13),t.qZA(),t._UZ(16,"input",14),t.qZA(),t.TgZ(17,"div",11)(18,"label",12),t._uU(19," Address Line 2 "),t._UZ(20,"span",13),t.qZA(),t._UZ(21,"input",15),t.qZA()(),t.TgZ(22,"div",10)(23,"div",11)(24,"label",12),t._uU(25," Address Line 3 "),t._UZ(26,"span",13),t.qZA(),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",11)(29,"label",12),t._uU(30," Address Line 4 "),t._UZ(31,"span",13),t.qZA(),t._UZ(32,"input",17),t.qZA()(),t.TgZ(33,"div",10)(34,"div",11)(35,"label",12),t._uU(36," City/District "),t._UZ(37,"span",13),t.qZA(),t._UZ(38,"input",18),t.qZA(),t.TgZ(39,"div",11)(40,"label",12),t._uU(41," State/Province "),t._UZ(42,"span",13),t.qZA(),t._UZ(43,"input",19),t.qZA()(),t.TgZ(44,"div",2)(45,"div",11)(46,"label",12),t._uU(47," Pin Code "),t._UZ(48,"span",13),t.qZA(),t._UZ(49,"input",20),t.qZA(),t.TgZ(50,"div",11)(51,"div",21)(52,"div",22)(53,"label",12),t._uU(54,"Country "),t._UZ(55,"span",13),t.qZA(),t._UZ(56,"input",23),t.qZA()()()(),t.TgZ(57,"div",24)(58,"div",25),t.YNc(59,f,1,0,"hr",26),t.qZA()(),t.YNc(60,_,4,0,"div",27),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(8),t.Q6J("items",e.billFromLocationArr)("clearable",!1),t.xp6(50),t.Q6J("ngIf",t.DdM(5,v).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(6,v).includes(e.action)))},dependencies:[p.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.nD,i.sg,i.u,g.w9],encapsulation:2}),a})();function x(o,a){1&o&&t._UZ(0,"hr",9)}function w(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"button",30),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(3,"Save"),t.qZA()()()}}const C=function(){return["create","edit"]};let U=(()=>{var o;class a{constructor(n,e){this.activeModal=n,this.toastService=e,this.data=[],this.selectedCustomerData=[],this.billToAddress={},this.billFromCompanyData={},this.billFromLocationArr=[],this.otherCharges={},this.action="",this.saveData=new t.vpe,this.form=new i.nJ({contactPersonName:new i.p4(null,[i.kI.required]),line1:new i.p4(null),line2:new i.p4(null),line3:new i.p4(null),line4:new i.p4(null),pinCode:new i.p4(null),district:new i.p4(""),city:new i.p4(null),state:new i.p4(null),country:new i.p4(null),contactPersonNumber:new i.p4("")})}ngOnInit(){this.form.patchValue(this.billToAddress),("view"==this.action||"cancel"==this.action||"approve"==this.action)&&this.form.disable()}get f(){return this.form.controls}dismissModel(){this.saveData.emit({data:this.form.value,key:"SOBillTo"}),this.toastService.success("Bill To Saved")}patchAddress(n){this.form.patchValue(n)}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz),t.Y36(m.kl))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-bill-to"]],inputs:{data:"data",selectedCustomerData:"selectedCustomerData",billToAddress:"billToAddress",billFromCompanyData:"billFromCompanyData",billFromLocationArr:"billFromLocationArr",otherCharges:"otherCharges",action:"action"},outputs:{saveData:"saveData"},decls:61,vars:7,consts:[[1,"container-fluid","px-0"],[3,"formGroup"],[1,"row","my-4","px-5"],[1,"col-auto","mt-1","pe-0"],[1,"form-label","text-nowrap"],[1,"col-auto","mt-1","px-3"],[1,"fa","fa-caret-right","text-secondary","fs-2"],[1,"col-6","ps-0"],["bindLabel","contactPersonName","bindValue","contactPersonName","formControlName","contactPersonName","placeholder","Select",3,"items","clearable","change"],[1,"line-border"],[1,"row","mb-4","px-5"],[1,"col-6"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","line1","readonly","",1,"form-control"],["type","text","formControlName","line2","readonly","",1,"form-control"],["type","text","formControlName","line3","readonly","",1,"form-control"],["type","text","formControlName","line4","readonly","",1,"form-control"],["type","text","formControlName","city","readonly","",1,"form-control"],["type","text","formControlName","state","readonly","",1,"form-control"],["oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","type","number","maxlength","6","formControlName","pinCode","readonly","",1,"form-control"],[1,"row","justify-content-between"],[1,"col"],["type","text","formControlName","country","readonly","",1,"form-control"],[1,"row"],[1,"col-12"],["class","line-border",4,"ngIf"],["class","row justify-content-center",4,"ngIf"],[1,"row","justify-content-center"],[1,"col-12","d-flex","justify-content-center","my-2"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Bill To "),t.qZA()(),t.TgZ(6,"div",5),t._UZ(7,"i",6),t.qZA(),t.TgZ(8,"div",7)(9,"ng-select",8),t.NdJ("change",function(l){return e.patchAddress(l)}),t.qZA()()(),t._UZ(10,"hr",9),t.TgZ(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14," Address Line 1 "),t._UZ(15,"span",13),t.qZA(),t._UZ(16,"input",14),t.qZA(),t.TgZ(17,"div",11)(18,"label",12),t._uU(19," Address Line 2 "),t._UZ(20,"span",13),t.qZA(),t._UZ(21,"input",15),t.qZA()(),t.TgZ(22,"div",10)(23,"div",11)(24,"label",12),t._uU(25," Address Line 3 "),t._UZ(26,"span",13),t.qZA(),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",11)(29,"label",12),t._uU(30," Address Line 4 "),t._UZ(31,"span",13),t.qZA(),t._UZ(32,"input",17),t.qZA()(),t.TgZ(33,"div",10)(34,"div",11)(35,"label",12),t._uU(36," City/District "),t._UZ(37,"span",13),t.qZA(),t._UZ(38,"input",18),t.qZA(),t.TgZ(39,"div",11)(40,"label",12),t._uU(41," State/Province "),t._UZ(42,"span",13),t.qZA(),t._UZ(43,"input",19),t.qZA()(),t.TgZ(44,"div",2)(45,"div",11)(46,"label",12),t._uU(47," Pin Code "),t._UZ(48,"span",13),t.qZA(),t._UZ(49,"input",20),t.qZA(),t.TgZ(50,"div",11)(51,"div",21)(52,"div",22)(53,"label",12),t._uU(54,"Country "),t._UZ(55,"span",13),t.qZA(),t._UZ(56,"input",23),t.qZA()()()(),t.TgZ(57,"div",24)(58,"div",25),t.YNc(59,x,1,0,"hr",26),t.qZA()(),t.YNc(60,w,4,0,"div",27),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(8),t.Q6J("items",e.selectedCustomerData)("clearable",!1),t.xp6(50),t.Q6J("ngIf",t.DdM(5,C).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(6,C).includes(e.action)))},dependencies:[p.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.nD,i.sg,i.u,g.w9],encapsulation:2}),a})();var q=d(83344);function S(o,a){1&o&&t._UZ(0,"hr",17)}function N(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"div",18)(1,"button",19),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(2,"Save"),t.qZA()()}}const u=function(){return["create","edit","amend"]};let O=(()=>{var o;class a{constructor(n,e){this.activeModal=n,this.toastService=e,this.otherCharges={},this.action="",this.SPTotalAmount=0,this.saveData=new t.vpe}ngOnInit(){this.otherCharges.totalProductValue=this.SPTotalAmount,this.updateTotalAmount()}updateTotalAmount(){this.otherCharges.totalShipmentValue=(+this.otherCharges.totalProductValue+ +this.otherCharges.packagingAndForwarding+ +this.otherCharges.freight+ +this.otherCharges.insurance+ +this.otherCharges.loadingAndUnloading+ +this.otherCharges.miscellaneous).toFixed(2),this.otherCharges.totalAmount=(+this.otherCharges.packagingAndForwarding+ +this.otherCharges.freight+ +this.otherCharges.insurance+ +this.otherCharges.loadingAndUnloading+ +this.otherCharges.miscellaneous).toFixed(2)}resetValues(){this.otherCharges={totalProductValue:0,packagingAndForwarding:0,freight:0,insurance:0,loadingAndUnloading:0,miscellaneous:0,totalAmount:0,totalShipmentValue:0}}dismissModel(){this.saveData.emit({data:this.otherCharges,key:"otherCharges"}),this.toastService.success("Other Charges Saved")}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz),t.Y36(m.kl))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-other-charges"]],inputs:{otherCharges:"otherCharges",action:"action",SPTotalAmount:"SPTotalAmount"},outputs:{saveData:"saveData"},decls:103,vars:42,consts:[[1,"modelPage"],[1,"pt-4","pb-2"],[1,"mb-4","row","justify-content-center"],[1,"col-8"],[1,"row"],[1,"col-4"],[1,"col-form-label","text-nowrap","pe-1","pt-0"],[1,"col-1"],[1,"fa","fa-caret-right","text-secondary","pt-1"],[1,"col-7"],[1,"d-flex","justify-content-center"],["type","button",1,"btn","btn-info","py-1","ms-2","me-1"],["type","number","readonly","",1,"form-control",3,"ngModel","ngModelChange","input"],["type","number",1,"form-control",3,"ngModel","readonly","ngModelChange","input"],["type","number","readOnly","",1,"form-control",3,"ngModel","readonly","ngModelChange"],["class","line-border mt-5",4,"ngIf"],["class","d-grid gap-2 d-flex justify-content-center",4,"ngIf"],[1,"line-border","mt-5"],[1,"d-grid","gap-2","d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","mt-2","px-5",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),t._uU(7,"Total Shipment Value"),t.qZA()(),t.TgZ(8,"div",7),t._UZ(9,"i",8),t.qZA(),t.TgZ(10,"div",9)(11,"div",10)(12,"button",11),t._uU(13),t.ALo(14,"companyCurrency"),t.qZA(),t.TgZ(15,"input",12),t.NdJ("ngModelChange",function(l){return e.otherCharges.totalProductValue=l})("input",function(){return e.updateTotalAmount()}),t.qZA()()()()()(),t.TgZ(16,"div",2)(17,"div",3)(18,"div",4)(19,"div",5)(20,"div",6),t._uU(21,"+ \xa0 Packing & Forwarding"),t.qZA()(),t.TgZ(22,"div",7),t._UZ(23,"i",8),t.qZA(),t.TgZ(24,"div",9)(25,"div",10)(26,"button",11),t._uU(27),t.ALo(28,"companyCurrency"),t.qZA(),t.TgZ(29,"input",13),t.NdJ("ngModelChange",function(l){return e.otherCharges.packagingAndForwarding=l})("input",function(){return e.updateTotalAmount()}),t.qZA()()()()()(),t.TgZ(30,"div",2)(31,"div",3)(32,"div",4)(33,"div",5)(34,"div",6),t._uU(35,"+ \xa0 Freight Charges"),t.qZA()(),t.TgZ(36,"div",7),t._UZ(37,"i",8),t.qZA(),t.TgZ(38,"div",9)(39,"div",10)(40,"button",11),t._uU(41),t.ALo(42,"companyCurrency"),t.qZA(),t.TgZ(43,"input",13),t.NdJ("ngModelChange",function(l){return e.otherCharges.freight=l})("input",function(){return e.updateTotalAmount()}),t.qZA()()()()()(),t.TgZ(44,"div",2)(45,"div",3)(46,"div",4)(47,"div",5)(48,"div",6),t._uU(49,"+ \xa0 Insurance"),t.qZA()(),t.TgZ(50,"div",7),t._UZ(51,"i",8),t.qZA(),t.TgZ(52,"div",9)(53,"div",10)(54,"button",11),t._uU(55),t.ALo(56,"companyCurrency"),t.qZA(),t.TgZ(57,"input",13),t.NdJ("ngModelChange",function(l){return e.otherCharges.insurance=l})("input",function(){return e.updateTotalAmount()}),t.qZA()()()()()(),t.TgZ(58,"div",2)(59,"div",3)(60,"div",4)(61,"div",5)(62,"div",6),t._uU(63,"+ \xa0 Loading & Unloading"),t.qZA()(),t.TgZ(64,"div",7),t._UZ(65,"i",8),t.qZA(),t.TgZ(66,"div",9)(67,"div",10)(68,"button",11),t._uU(69),t.ALo(70,"companyCurrency"),t.qZA(),t.TgZ(71,"input",13),t.NdJ("ngModelChange",function(l){return e.otherCharges.loadingAndUnloading=l})("input",function(){return e.updateTotalAmount()}),t.qZA()()()()()(),t.TgZ(72,"div",2)(73,"div",3)(74,"div",4)(75,"div",5)(76,"div",6),t._uU(77,"+ \xa0 Miscellaneous"),t.qZA()(),t.TgZ(78,"div",7),t._UZ(79,"i",8),t.qZA(),t.TgZ(80,"div",9)(81,"div",10)(82,"button",11),t._uU(83),t.ALo(84,"companyCurrency"),t.qZA(),t.TgZ(85,"input",13),t.NdJ("ngModelChange",function(l){return e.otherCharges.miscellaneous=l})("input",function(){return e.updateTotalAmount()}),t.qZA()()()()()(),t.TgZ(86,"div",2)(87,"div",3)(88,"div",4)(89,"div",5)(90,"div",6),t._uU(91,"Total Shipment Value"),t.qZA()(),t.TgZ(92,"div",7),t._UZ(93,"i",8),t.qZA(),t.TgZ(94,"div",9)(95,"div",10)(96,"button",11),t._uU(97),t.ALo(98,"companyCurrency"),t.qZA(),t.TgZ(99,"input",14),t.NdJ("ngModelChange",function(l){return e.otherCharges.totalShipmentValue=l}),t.qZA()()()()()(),t.YNc(100,S,1,0,"hr",15),t.TgZ(101,"div"),t.YNc(102,N,3,0,"div",16),t.qZA()()()),2&n&&(t.xp6(13),t.Oqu(t.lcZ(14,21,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.totalProductValue),t.xp6(12),t.Oqu(t.lcZ(28,23,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.packagingAndForwarding)("readonly",!t.DdM(35,u).includes(e.action)),t.xp6(12),t.Oqu(t.lcZ(42,25,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.freight)("readonly",!t.DdM(36,u).includes(e.action)),t.xp6(12),t.Oqu(t.lcZ(56,27,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.insurance)("readonly",!t.DdM(37,u).includes(e.action)),t.xp6(12),t.Oqu(t.lcZ(70,29,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.loadingAndUnloading)("readonly",!t.DdM(38,u).includes(e.action)),t.xp6(12),t.Oqu(t.lcZ(84,31,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.miscellaneous)("readonly",!t.DdM(39,u).includes(e.action)),t.xp6(12),t.Oqu(t.lcZ(98,33,"INR")),t.xp6(2),t.Q6J("ngModel",e.otherCharges.totalShipmentValue),t.xp6(1),t.Q6J("ngIf",t.DdM(40,u).includes(e.action)),t.xp6(2),t.Q6J("ngIf",t.DdM(41,u).includes(e.action)))},dependencies:[p.O5,i.Fj,i.wV,i.JJ,i.On,q.f],styles:[".fa-caret-right[_ngcontent-%COMP%]{font-size:2rem!important;margin-right:1rem!important;margin-left:3rem!important}"]}),a})();function F(o,a){1&o&&t._UZ(0,"hr",15)}function M(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"div",13)(1,"button",16),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(2," Save "),t.qZA()()}}const J=function(){return{standalone:!0}},b=function(){return["create","edit"]};let L=(()=>{var o;class a{constructor(n,e){this.activeModal=n,this.toastService=e,this.action="",this.packingList="",this.saveData=new t.vpe,this.btnDisable=!1,this.page=1,this.pageSize=4,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.form=new i.nJ({packingList:new i.p4("")})}ngOnInit(){}eventHeader(n){switch(n.key){case"SEARCH":this.search=n.value;break;case"EXCEL":default:break;case"PAGE":this.page=n.value}}dismissModel(){this.saveData.emit({data:this.packingList,key:"packingList"}),this.toastService.success("Packing List Saved")}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz),t.Y36(m.kl))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-packing-list"]],inputs:{action:"action",packingList:"packingList"},outputs:{saveData:"saveData"},decls:16,vars:8,consts:[[1,"modelPage"],[1,""],[1,"container-fluid"],[1,"row",2,"min-height","30rem"],[3,"formGroup"],[1,"row","px-5","mt-4","mb-5","form-page"],[1,"col-2"],[1,"col-8","mb-3","card-form"],[1,"row"],[1,"col-12","px-0"],[1,"col","pt-3","px-3"],["rows","10",1,"form-control","form-text-area",3,"ngModel","ngModelOptions","ngModelChange"],["class","line-border mt-5 px-5",4,"ngIf"],[1,"text-center"],["class","text-center",4,"ngIf"],[1,"line-border","mt-5","px-5"],["type","button",1,"btn","bg-primary","px-5","mb-2","mt-1",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5),t._UZ(6,"div",6),t.TgZ(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"textarea",11),t.NdJ("ngModelChange",function(l){return e.packingList=l}),t.qZA()()()()(),t._UZ(12,"div",6),t.qZA()(),t.YNc(13,F,1,0,"hr",12),t.TgZ(14,"div",13),t.YNc(15,M,3,0,"div",14),t.qZA()()()()()),2&n&&(t.xp6(4),t.Q6J("formGroup",e.form),t.xp6(7),t.Q6J("ngModel",e.packingList)("ngModelOptions",t.DdM(5,J)),t.xp6(2),t.Q6J("ngIf",t.DdM(6,b).includes(e.action)),t.xp6(2),t.Q6J("ngIf",t.DdM(7,b).includes(e.action)))},dependencies:[p.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.On],encapsulation:2}),a})();function k(o,a){1&o&&t._UZ(0,"hr",9)}function P(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"div",28)(1,"div",29)(2,"button",30),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(3,"Save"),t.qZA()()()}}const T=function(){return["create","edit"]};let I=(()=>{var o;class a{constructor(n,e){this.activeModal=n,this.toastService=e,this.data=[],this.selectedCustomerData=[],this.customerShippingAddress={},this.billFromCompanyData={},this.billFromLocationArr=[],this.otherCharges={},this.action="",this.saveData=new t.vpe,this.form=new i.nJ({contactPersonName:new i.p4(null,[i.kI.required]),line1:new i.p4(null),line2:new i.p4(null),line3:new i.p4(null),line4:new i.p4(null),pinCode:new i.p4(null),district:new i.p4(""),city:new i.p4(null),state:new i.p4(null),country:new i.p4(null),contactPersonNumber:new i.p4("")})}ngOnInit(){this.form.patchValue(this.customerShippingAddress),("view"==this.action||"cancel"==this.action||"approve"==this.action)&&this.form.disable()}get f(){return this.form.controls}dismissModel(){this.saveData.emit({data:this.form.value,key:"SOShipTo"}),this.toastService.success("Ship To Saved")}patchAddress(n){this.form.patchValue(n)}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz),t.Y36(m.kl))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-ship-to"]],inputs:{data:"data",selectedCustomerData:"selectedCustomerData",customerShippingAddress:"customerShippingAddress",billFromCompanyData:"billFromCompanyData",billFromLocationArr:"billFromLocationArr",otherCharges:"otherCharges",action:"action"},outputs:{saveData:"saveData"},decls:61,vars:7,consts:[[1,"container-fluid","px-0"],[3,"formGroup"],[1,"row","my-4","px-5"],[1,"col-auto","mt-1","pe-0"],[1,"form-label","text-nowrap"],[1,"col-auto","mt-1","px-3"],[1,"fa","fa-caret-right","text-secondary","fs-2"],[1,"col-7","ps-0"],["bindLabel","contactPersonName","bindValue","contactPersonName","formControlName","contactPersonName","placeholder","Select",3,"items","clearable","change"],[1,"line-border"],[1,"row","mb-4","px-5"],[1,"col-6"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","line1","readonly","",1,"form-control"],["type","text","formControlName","line2","readonly","",1,"form-control"],["type","text","formControlName","line3","readonly","",1,"form-control"],["type","text","formControlName","line4","readonly","",1,"form-control"],["type","text","formControlName","city","readonly","",1,"form-control"],["type","text","formControlName","state","readonly","",1,"form-control"],["oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","type","number","maxlength","6","formControlName","pinCode","readonly","",1,"form-control"],[1,"row","justify-content-between"],[1,"col"],["type","text","formControlName","country","readonly","",1,"form-control"],[1,"row"],[1,"col-12"],["class","line-border",4,"ngIf"],["class","row justify-content-center",4,"ngIf"],[1,"row","justify-content-center"],[1,"col-12","d-flex","justify-content-center","my-2"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Ship to "),t.qZA()(),t.TgZ(6,"div",5),t._UZ(7,"i",6),t.qZA(),t.TgZ(8,"div",7)(9,"ng-select",8),t.NdJ("change",function(l){return e.patchAddress(l)}),t.qZA()()(),t._UZ(10,"hr",9),t.TgZ(11,"div",10)(12,"div",11)(13,"label",12),t._uU(14," Address Line 1 "),t._UZ(15,"span",13),t.qZA(),t._UZ(16,"input",14),t.qZA(),t.TgZ(17,"div",11)(18,"label",12),t._uU(19," Address Line 2 "),t._UZ(20,"span",13),t.qZA(),t._UZ(21,"input",15),t.qZA()(),t.TgZ(22,"div",10)(23,"div",11)(24,"label",12),t._uU(25," Address Line 3 "),t._UZ(26,"span",13),t.qZA(),t._UZ(27,"input",16),t.qZA(),t.TgZ(28,"div",11)(29,"label",12),t._uU(30," Address Line 4 "),t._UZ(31,"span",13),t.qZA(),t._UZ(32,"input",17),t.qZA()(),t.TgZ(33,"div",10)(34,"div",11)(35,"label",12),t._uU(36," City/District "),t._UZ(37,"span",13),t.qZA(),t._UZ(38,"input",18),t.qZA(),t.TgZ(39,"div",11)(40,"label",12),t._uU(41," State/Province "),t._UZ(42,"span",13),t.qZA(),t._UZ(43,"input",19),t.qZA()(),t.TgZ(44,"div",2)(45,"div",11)(46,"label",12),t._uU(47," Pin Code "),t._UZ(48,"span",13),t.qZA(),t._UZ(49,"input",20),t.qZA(),t.TgZ(50,"div",11)(51,"div",21)(52,"div",22)(53,"label",12),t._uU(54,"Country "),t._UZ(55,"span",13),t.qZA(),t._UZ(56,"input",23),t.qZA()()()(),t.TgZ(57,"div",24)(58,"div",25),t.YNc(59,k,1,0,"hr",26),t.qZA()(),t.YNc(60,P,4,0,"div",27),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(8),t.Q6J("items",e.selectedCustomerData)("clearable",!1),t.xp6(50),t.Q6J("ngIf",t.DdM(5,T).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(6,T).includes(e.action)))},dependencies:[p.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.nD,i.sg,i.u,g.w9],encapsulation:2}),a})();var A=d(43818);function Q(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"app-drn-other-charges",15),t.NdJ("saveData",function(e){t.CHM(r);const s=t.oxw();return t.KtG(s.saveData(e))}),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("otherCharges",r.otherCharges)("SPTotalAmount",r.SPTotalAmount)("action",r.action)}}function V(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"app-drn-packing-list",16),t.NdJ("saveData",function(e){t.CHM(r);const s=t.oxw();return t.KtG(s.saveData(e))}),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("packingList",r.packingList)("action",r.action)}}let Y=(()=>{var o;class a{constructor(n){this.activeModal=n,this.otherCharges={},this.action="edit",this.shipmentLineValue=0,this.SPTotalAmount=0,this.packingList="",this.page=1,this.pageSize=8,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.active=1}ngOnInit(){}saveData(n){"otherCharges"==n.key&&(this.otherCharges=n.data,this.active=this.active+1),"packingList"==n.key&&(this.packingList=n.data,this.dismissModel())}dismissModel(){let n={};n.otherCharges=this.otherCharges,n.packingList=this.packingList,this.activeModal.close(n)}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-shipment-details"]],viewQuery:function(n,e){if(1&n&&t.Gf(A.j,5),2&n){let s;t.iGM(s=t.CRH())&&(e.headers=s)}},inputs:{otherCharges:"otherCharges",action:"action",shipmentLineValue:"shipmentLineValue",SPTotalAmount:"SPTotalAmount",packingList:"packingList"},decls:22,vars:4,consts:[[1,"modelPage",2,"min-height","40rem"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","mt-5","mb-3"],[1,"row"],[1,"col-12","px-0"],["ngbNav","",1,"nav-pills","tabs-card","row","justify-content-start","ms-5","align-items-end",3,"activeId","activeIdChange"],["nav","ngbNav"],[1,"col-auto","d-grid","px-0","btn-border-radius",3,"ngbNavItem"],["ngbNavLink","",1,"mb-0","ps-4","pe-5","pt-1"],["ngbNavContent",""],[1,"line-border","mt-0"],[1,"mt-2",3,"ngbNavOutlet"],[3,"otherCharges","SPTotalAmount","action","saveData"],[3,"packingList","action","saveData"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Shipment Details"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return e.dismissModel()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"ul",8,9),t.NdJ("activeIdChange",function(l){return e.active=l}),t.TgZ(12,"li",10)(13,"a",11),t._uU(14," Other Charges "),t.qZA(),t.YNc(15,Q,1,3,"ng-template",12),t.qZA(),t.TgZ(16,"li",10)(17,"a",11),t._uU(18," Packing List "),t.qZA(),t.YNc(19,V,1,2,"ng-template",12),t.qZA()(),t._UZ(20,"hr",13)(21,"div",14),t.qZA()()()()),2&n){const s=t.MAs(11);t.xp6(10),t.Q6J("activeId",e.active),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(4),t.Q6J("ngbNavItem",2),t.xp6(5),t.Q6J("ngbNavOutlet",s)}},dependencies:[c.uN,c.Pz,c.nv,c.Is,c.Vx,c.tO,c.Dy,O,L],styles:[".tabs-card[_ngcontent-%COMP%]{box-shadow:none;display:flex;justify-content:center;text-align:center;background-color:transparent}.tabs-card[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:grid!important}.tabs-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:1 0;font-weight:500;font-size:1.4rem;border-radius:2px;margin-bottom:1rem;color:var(--bs-white)!important;background-color:#fd99d5!important;border:1px solid var(--bs-white)}.tabs-card[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--bs-white)!important;background-color:var(--bs-primary)!important;border:1px solid var(--bs-white)}.tabs-card[_ngcontent-%COMP%]   .btn-border-radius[_ngcontent-%COMP%]{clip-path:polygon(0 0,85% 0,100% 100%,0% 100%)!important;width:14rem!important;height:2.6rem!important}"]}),a})();var j=d(16897);function G(o,a){if(1&o&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&o){const r=a.$implicit;t.Q6J("value",r.value),t.xp6(1),t.hij(" ",r.label," ")}}function B(o,a){if(1&o&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&o){const r=a.$implicit;t.Q6J("value",r.parameterName),t.xp6(1),t.hij(" ",r.parameterLabel," ")}}function E(o,a){if(1&o&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&o){const r=a.$implicit;t.Q6J("value",r.value),t.xp6(1),t.hij(" ",r.label," ")}}function K(o,a){if(1&o&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&o){const r=a.$implicit;t.Q6J("value",r.value),t.xp6(1),t.hij(" ",r.label," ")}}function z(o,a){1&o&&t._UZ(0,"hr",27)}function H(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(1," Save "),t.qZA()}}const D=function(){return["create","edit"]};let R=(()=>{var o;class a{get f(){return this.form.controls}constructor(n,e,s,l){this.activeModal=n,this.toastService=e,this.validationService=s,this.modalService=l,this.action="",this.POTerms={},this.SOTermsArr={},this.SOTermsData={},this.saveData=new t.vpe,this.otherCharges={},this.clickCount=1,this.form=new i.nJ({paymentTerms:new i.p4(null),frightTerms:new i.p4("FOR - Free On Road"),transporter:new i.p4({value:null,disabled:!0},[i.kI.required]),destination:new i.p4({value:null,disabled:!0},[i.kI.required]),modeOfTransport:new i.p4(null,[i.kI.required])})}ngOnInit(){this.form.patchValue(this.SOTermsData),["approve","reject","view","generate","cancel"].includes(this.action)&&this.form.disable()}dismissModel(){this.form.enable();let n=this.form.value;n.otherCharges=this.otherCharges,this.saveData.emit({data:n,key:"SOTerms"}),this.toastService.success("SO Terms Saved")}enableTransporterName(){["create","edit"].includes(this.action)&&this.form.controls.transporter.enable()}enableDestination(){["create","edit"].includes(this.action)&&this.form.controls.destination.enable()}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz),t.Y36(m.kl),t.Y36(j.RJ),t.Y36(c.FF))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-drn-so-terms"]],inputs:{action:"action",POTerms:"POTerms",SOTermsArr:"SOTermsArr",SOTermsData:"SOTermsData",otherCharges:"otherCharges"},outputs:{saveData:"saveData"},decls:73,vars:13,consts:[[3,"formGroup"],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-10","px-5","mt-3","mb-4"],[1,"row"],[1,"col-3","mt-1","pe-0"],[1,"form-label"],[1,"text-danger"],[1,"col-auto","mt-1","px-0"],[1,"fa","fa-caret-right","text-secondary"],[1,"col-7","ps-0"],["type","text","formControlName","paymentTerms",1,"form-select","fs-5"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mt-5"],["type","text","formControlName","frightTerms",1,"form-select","fs-5"],[1,"form-label","text-nowrap"],[1,"fa","fa-caret-right","mt-1","text-secondary"],["type","text","formControlName","modeOfTransport",1,"form-select","fs-5"],["type","text","formControlName","transporter",1,"form-select","fs-5"],[1,"col-1","assetChange","mt-1","pointer",3,"click"],["type","text","formControlName","destination",1,"form-control"],[1,"col","px-0","mt-5"],["class","line-border",4,"ngIf"],[1,"text-center","my-2"],["class","btn bg-primary px-5","type","button",3,"click",4,"ngIf"],[3,"value"],[1,"line-border"],["type","button",1,"btn","bg-primary","px-5",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),t._uU(7,"Payment Terms "),t.TgZ(8,"span",7),t._uU(9,"*"),t.qZA()()(),t.TgZ(10,"div",8),t._UZ(11,"i",9),t.qZA(),t.TgZ(12,"div",10)(13,"select",11)(14,"option",12),t._uU(15,"Select Payment Terms"),t.qZA(),t.YNc(16,G,2,2,"option",13),t.qZA()()(),t.TgZ(17,"div",14)(18,"div",5)(19,"label",6),t._uU(20," Freight Terms "),t.TgZ(21,"span",7),t._uU(22,"*"),t.qZA()()(),t.TgZ(23,"div",8),t._UZ(24,"i",9),t.qZA(),t.TgZ(25,"div",10)(26,"select",15)(27,"option",12),t._uU(28,"Select Freight Terms"),t.qZA(),t.YNc(29,B,2,2,"option",13),t.qZA()()(),t.TgZ(30,"div",14)(31,"div",5)(32,"label",16),t._uU(33,"Mode of transport "),t.TgZ(34,"span",7),t._uU(35,"*"),t.qZA()()(),t.TgZ(36,"div",8),t._UZ(37,"i",17),t.qZA(),t.TgZ(38,"div",10)(39,"select",18)(40,"option",12),t._uU(41,"Select Mode of transport"),t.qZA(),t.YNc(42,E,2,2,"option",13),t.qZA()()(),t.TgZ(43,"div",14)(44,"div",5)(45,"label",16),t._uU(46,"Transporter Name "),t.TgZ(47,"span",7),t._uU(48,"*"),t.qZA()()(),t.TgZ(49,"div",8),t._UZ(50,"i",9),t.qZA(),t.TgZ(51,"div",10)(52,"select",19)(53,"option",12),t._uU(54,"Select Transporter Name"),t.qZA(),t.YNc(55,K,2,2,"option",13),t.qZA()(),t.TgZ(56,"div",20),t.NdJ("click",function(){return e.enableTransporterName()}),t.qZA()(),t.TgZ(57,"div",14)(58,"div",5)(59,"label",16),t._uU(60,"Destination/Port "),t.TgZ(61,"span",7),t._uU(62,"*"),t.qZA()()(),t.TgZ(63,"div",8),t._UZ(64,"i",9),t.qZA(),t.TgZ(65,"div",10),t._UZ(66,"input",21),t.qZA(),t.TgZ(67,"div",20),t.NdJ("click",function(){return e.enableDestination()}),t.qZA()()()(),t.TgZ(68,"div",4)(69,"div",22),t.YNc(70,z,1,0,"hr",23),t.qZA()(),t.TgZ(71,"div",24),t.YNc(72,H,2,0,"button",25),t.qZA()()()),2&n&&(t.Q6J("formGroup",e.form),t.xp6(14),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.SOTermsArr.paymentTermsArr),t.xp6(11),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.SOTermsArr.freightTerms),t.xp6(11),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.SOTermsArr.modeOfTransport),t.xp6(11),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.SOTermsArr.transporterArr),t.xp6(15),t.Q6J("ngIf",t.DdM(11,D).includes(e.action)),t.xp6(2),t.Q6J("ngIf",t.DdM(12,D).includes(e.action)))},dependencies:[p.sg,p.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u],styles:[".fa-caret-right[_ngcontent-%COMP%]{font-size:2rem!important;margin-right:2rem!important;margin-left:2rem!important}.assetChange[_ngcontent-%COMP%]{background-color:transparent;background-image:url(Asset_change.a4234ac185c40591.svg);background-size:100% 100%;border:0;color:#fff;height:2.2rem;width:2.2rem}"]}),a})();function X(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"app-drn-bill-from",15),t.NdJ("saveData",function(e){t.CHM(r);const s=t.oxw();return t.KtG(s.saveData(e))}),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("billFromAddress",r.billFromAddress)("billFromLocation",r.billFromLocation)("billFromCompanyData",r.billFromCompanyData)("billFromLocationArr",r.billFromLocationArr)("action",r.action)}}function $(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"app-drn-bill-to",16),t.NdJ("saveData",function(e){t.CHM(r);const s=t.oxw();return t.KtG(s.saveData(e))}),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("billToAddress",r.billToAddress)("selectedCustomerData",r.selectedCustomerData)("action",r.action)}}function W(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"app-drn-ship-to",17),t.NdJ("saveData",function(e){t.CHM(r);const s=t.oxw();return t.KtG(s.saveData(e))}),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("customerShippingAddress",r.customerShippingAddress)("selectedCustomerData",r.selectedCustomerData)("action",r.action)}}function tt(o,a){if(1&o){const r=t.EpF();t.TgZ(0,"app-drn-so-terms",18),t.NdJ("saveData",function(e){t.CHM(r);const s=t.oxw();return t.KtG(s.saveData(e))}),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("otherCharges",r.otherCharges)("SOTermsArr",r.SOTermsArr)("SOTermsData",r.SOTermsData)("action",r.action)}}let et=(()=>{var o;class a{constructor(n){this.activeModal=n,this.selectedCustomerData=[],this.otherCharges={},this.dispatchDetails={},this.SOTermsArr={},this.SOTermsData={},this.billFromAddress={},this.billToAddress={},this.billFromLocation="",this.billFromCompanyData={},this.billFromLocationArr=[],this.customerShippingAddress={},this.action="edit",this.page=1,this.pageSize=8,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.active=1}ngOnInit(){}saveData(n){"SOBillFrom"==n.key&&(this.billFromAddress=n.data,this.billFromLocation=n?.data?.billFromLocation,this.active=this.active+1),"SOShipTo"==n.key&&(this.customerShippingAddress=n.data,this.active=this.active+1),"SOBillTo"==n.key&&(this.billToAddress=n.data,this.active=this.active+1),"SOTerms"==n.key&&(this.SOTermsData=n.data,this.dismissModel())}dismissModel(){let n={};n.billToAddress=this.billToAddress,n.billFromAddress=this.billFromAddress,n.billFromLocation=this.billFromLocation,n.customerShippingAddress=this.customerShippingAddress,n.SOTermsData=this.SOTermsData,this.activeModal.close(n)}}return(o=a).\u0275fac=function(n){return new(n||o)(t.Y36(c.Kz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-drn-terms"]],viewQuery:function(n,e){if(1&n&&t.Gf(A.j,5),2&n){let s;t.iGM(s=t.CRH())&&(e.headers=s)}},inputs:{selectedCustomerData:"selectedCustomerData",otherCharges:"otherCharges",dispatchDetails:"dispatchDetails",SOTermsArr:"SOTermsArr",SOTermsData:"SOTermsData",billFromAddress:"billFromAddress",billToAddress:"billToAddress",billFromLocation:"billFromLocation",billFromCompanyData:"billFromCompanyData",billFromLocationArr:"billFromLocationArr",customerShippingAddress:"customerShippingAddress",action:"action"},decls:30,vars:6,consts:[[1,"modelPage",2,"min-height","35rem"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","mt-5","mb-3"],[1,"row"],[1,"col-12","px-0"],["ngbNav","",1,"nav-pills","tabs-card","row","justify-content-start","ms-5","align-items-end",3,"activeId","activeIdChange"],["nav","ngbNav"],[1,"col-auto","d-grid","px-0","btn-border-radius",3,"ngbNavItem"],["ngbNavLink","",1,"mb-0","ps-4","pe-5","pt-1"],["ngbNavContent",""],[1,"line-border","mt-0"],[1,"mt-2",3,"ngbNavOutlet"],[3,"billFromAddress","billFromLocation","billFromCompanyData","billFromLocationArr","action","saveData"],[3,"billToAddress","selectedCustomerData","action","saveData"],[3,"customerShippingAddress","selectedCustomerData","action","saveData"],[3,"otherCharges","SOTermsArr","SOTermsData","action","saveData"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Shipment Terms"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return e.dismissModel()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"ul",8,9),t.NdJ("activeIdChange",function(l){return e.active=l}),t.TgZ(12,"li",10)(13,"a",11),t._uU(14," Bill From"),t.qZA(),t.YNc(15,X,1,5,"ng-template",12),t.qZA(),t.TgZ(16,"li",10)(17,"a",11),t._uU(18," Bill to"),t.qZA(),t.YNc(19,$,1,3,"ng-template",12),t.qZA(),t.TgZ(20,"li",10)(21,"a",11),t._uU(22," Ship to"),t.qZA(),t.YNc(23,W,1,3,"ng-template",12),t.qZA(),t.TgZ(24,"li",10)(25,"a",11),t._uU(26,"SO Terms"),t.qZA(),t.YNc(27,tt,1,4,"ng-template",12),t.qZA()(),t._UZ(28,"hr",13)(29,"div",14),t.qZA()()()()),2&n){const s=t.MAs(11);t.xp6(10),t.Q6J("activeId",e.active),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(4),t.Q6J("ngbNavItem",2),t.xp6(4),t.Q6J("ngbNavItem",3),t.xp6(4),t.Q6J("ngbNavItem",4),t.xp6(5),t.Q6J("ngbNavOutlet",s)}},dependencies:[c.uN,c.Pz,c.nv,c.Is,c.Vx,c.tO,c.Dy,y,U,I,R],styles:[".tabs-card[_ngcontent-%COMP%]{box-shadow:none;display:flex;justify-content:center;text-align:center;background-color:transparent}.tabs-card[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{display:grid!important}.tabs-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:1 0;font-weight:500;font-size:1.4rem;border-radius:2px;margin-bottom:1rem;color:var(--bs-white)!important;background-color:#fd99d5!important;border:1px solid var(--bs-white)}.tabs-card[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:var(--bs-white)!important;background-color:var(--bs-primary)!important;border:1px solid var(--bs-white)}.tabs-card[_ngcontent-%COMP%]   .btn-border-radius[_ngcontent-%COMP%]{clip-path:polygon(0 0,85% 0,100% 100%,0% 100%)!important;width:12rem!important;height:2.6rem!important}"]}),a})()},13107:(Z,h,d)=>{d.d(h,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(Z,h,d)=>{d.d(h,{J:()=>t});const t=({data:i,headers:c,widths:m,title:p})=>({tableData:{widths:m,headerRows:1,body:[c.map(_=>({text:_.header,style:"header"})),...i.map(_=>c.map(v=>({style:"subheader",text:_[v.key]})))]},title:p})}}]);