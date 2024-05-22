"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5279],{95279:(v,m,r)=>{r.r(m),r.d(m,{FgCorrectionModule:()=>Y});var u=r(96814),d=r(1076),i=r(60095),g=r(21631),h=r(22096),f=r(3959),y=r(25116),e=r(65879),F=r(79475),p=r(99328),_=r(16897),C=r(50363),T=r(53421),Z=r(14906);function S(o,s){if(1&o&&(e.TgZ(0,"option",24),e._uU(1),e.qZA()),2&o){const a=s.$implicit;e.Q6J("value",a),e.xp6(1),e.hij(" ",a," ")}}function U(o,s){if(1&o&&(e.TgZ(0,"option",24),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const a=s.$implicit;e.Q6J("value",a._id),e.xp6(1),e.hij(" ",e.xi3(2,2,a.manufacturingDate,"dd-MM-yyyy")," ")}}function N(o,s){if(1&o){const a=e.EpF();e.TgZ(0,"div",16)(1,"label",7),e._uU(2,"Rename/Transfer Qty. "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"input",25),e.NdJ("input",function(){e.CHM(a);const t=e.oxw();return e.KtG(t.setSourceQty())}),e.qZA()()}}function R(o,s){1&o&&(e.TgZ(0,"div",16)(1,"label",7),e._uU(2,"New Batch"),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e._UZ(5,"input",26),e.qZA())}function b(o,s){if(1&o&&(e.TgZ(0,"option",24),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const a=s.$implicit;e.Q6J("value",a._id),e.xp6(1),e.hij(" ",e.xi3(2,2,a.manufacturingDate,"dd-MM-yyyy")," ")}}function D(o,s){if(1&o&&(e.TgZ(0,"div",16)(1,"label",7),e._uU(2,"Destination Batch (To) "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"select",27)(6,"option",14),e._uU(7,"Select"),e.qZA(),e.YNc(8,b,3,5,"option",15),e.qZA()()),2&o){const a=e.oxw();e.xp6(6),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",a.FGINOptions)}}function A(o,s){1&o&&(e.TgZ(0,"div",16)(1,"label",7),e._uU(2,"Available Source Qty. "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e._UZ(5,"input",28),e.qZA())}function Q(o,s){1&o&&(e.TgZ(0,"div",16)(1,"label",7),e._uU(2,"Corrected Qty. "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e._UZ(5,"input",29),e.qZA())}function q(o,s){1&o&&(e.TgZ(0,"div")(1,"label",7),e._uU(2,"Available Source Qty. "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e._UZ(5,"input",28),e.qZA())}let I=(()=>{var o;class s{constructor(n,t,c,l,B,M,k){this.fgCorrectionService=n,this.activatedRoute=t,this.spinner=c,this.menuTitleService=l,this.toastService=B,this.validationService=M,this.utilityService=k,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.conditions="",this.action="",this.submitted=!1,this.FGINOptions=[],this.rolePermissionActions=y.a1,this.correctionCategory=y.dQ,this.masterData={autoIncrementNo:"",SKUOptions:[]},this.form=new i.nJ({_id:new i.p4(null),FGNo:new i.p4(null),FGDate:new i.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),SKU:new i.p4(null,[i.kI.required]),SKUNo:new i.p4(null),SKUDescription:new i.p4(null,[i.kI.required]),correctionCategory:new i.p4(null,[i.kI.required]),sourceBatch:new i.p4(null,[i.kI.required]),transferQty:new i.p4(null),destinationBatch:new i.p4(null),newBatch:new i.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),availableSourceQty:new i.p4(null),correctedQty:new i.p4(null)})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}trackByFn(n,t){return t?._id}submit(){this.submitted=!0,this.validationService.checkErrors(this.form,f.kq)||this.create(this.form.value)}create(n){this.spinner.show(),this.fgCorrectionService.create(n).subscribe(t=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(t.message),this.reset()})}getInitialData(){this.spinner.show(),this.fgCorrectionService.getAllMasterData({}).subscribe(n=>{this.masterData=n,this.form.controls.sourceBatch.disable(),this.form.controls.newBatch.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.FGDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.FGNo.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,g.z)(t=>(this.action=t.action,t.id?this.fgCorrectionService.getById(t.id):(0,h.of)({})))).subscribe(t=>{this.spinner.hide(),0!=Object.keys(t).length&&(this.form.patchValue(t),"edit"!=this.action&&this.form.disable())}),this.menuTitleService.set({title:"FG Correction",subTitle:null,type:this.action})})}setBatchDate(n){this.conditions="",this.form.controls.sourceBatch.setValue(null),this.form.controls.correctionCategory.setValue(null),this.form.controls.sourceBatch.disable(),this.form.controls.SKUNo.setValue(n?.SKUNo),this.form.controls.SKUDescription.setValue(n?.SKUDescription),this.form.controls.SKU.setValue(n?._id),this.fgCorrectionService.getFGCorrectionBySKUId(n._id).subscribe(t=>{this.FGINOptions=t})}setSourceQty(){if(this.form.controls.transferQty.value>this.form.controls.availableSourceQty.value)return this.toastService.error("Rename/Transfer Qty. should not be greater than Available Source Qty."),void this.form.controls.transferQty.setValue(0)}setAvailableSourceQty(n){let t=this.FGINOptions.find(c=>c._id==n.target.value);this.form.controls.availableSourceQty.setValue(t?.FGINQuantity)}reset(){this.conditions="",this.form.reset(),this.getInitialData()}setCorrection(n){this.form.controls.sourceBatch.enable(),this.conditions=n.target.value}}return(o=s).\u0275fac=function(n){return new(n||o)(e.Y36(F.kE),e.Y36(d.gz),e.Y36(p.V),e.Y36(p.Uh),e.Y36(p.kl),e.Y36(_.RJ),e.Y36(p.tI))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-fg-form"]],decls:65,vars:19,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","FGNo","readonly","",1,"form-control"],["type","Date","formControlName","FGDate",1,"form-control"],["bindLabel","SKUNo","bindValue","_id","formControlName","SKU",3,"items","clearable","change"],["bindLabel","SKUDescription","bindValue","SKUDescription","formControlName","SKUDescription",3,"items","clearable","change"],["formControlName","correctionCategory",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3"],["formControlName","sourceBatch",1,"form-select",3,"change"],["class","col-md-3",4,"ngIf"],[1,"row","mb-0"],[4,"ngIf"],[1,"d-flex","justify-content-end","col-9","py-4"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["appAccessControl","","type","button",1,"btn","btn-primary","px-5",3,"accessType","click"],[3,"value"],["type","number","formControlName","transferQty",1,"form-control",3,"input"],["type","Date","formControlName","newBatch",1,"form-control"],["formControlName","destinationBatch",1,"form-select"],["type","number","formControlName","availableSourceQty","readonly","",1,"form-control"],["type","number","formControlName","correctedQty",1,"form-control"]],template:function(n,t){1&n&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"FG Correction Entry"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10,"FG Correction No. "),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",6)(15,"label",7),e._uU(16,"FG Correction Date "),e.TgZ(17,"span",8),e._uU(18,"*"),e.qZA()(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"div",6)(21,"label",7),e._uU(22,"SKU No "),e.TgZ(23,"span",8),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"ng-select",11),e.NdJ("change",function(l){return t.setBatchDate(l)}),e.qZA()(),e.TgZ(26,"div",6)(27,"label",7),e._uU(28),e.ALo(29,"labelTranslate"),e.TgZ(30,"span",8),e._uU(31,"*"),e.qZA()(),e.TgZ(32,"ng-select",12),e.NdJ("change",function(l){return t.setBatchDate(l)}),e.qZA()()(),e.TgZ(33,"div",5)(34,"div",6)(35,"label",7),e._uU(36,"Correction Category "),e.TgZ(37,"span",8),e._uU(38,"*"),e.qZA()(),e.TgZ(39,"select",13),e.NdJ("change",function(l){return t.setCorrection(l)}),e.TgZ(40,"option",14),e._uU(41,"Select Correction Category"),e.qZA(),e.YNc(42,S,2,2,"option",15),e.qZA()(),e.TgZ(43,"div",16)(44,"label",7),e._uU(45,"Source Batch (From) "),e.TgZ(46,"span",8),e._uU(47,"*"),e.qZA()(),e.TgZ(48,"select",17),e.NdJ("change",function(l){return t.setAvailableSourceQty(l)}),e.TgZ(49,"option",14),e._uU(50,"Select"),e.qZA(),e.YNc(51,U,3,5,"option",15),e.qZA()(),e.YNc(52,N,6,0,"div",18),e.YNc(53,R,6,0,"div",18),e.YNc(54,D,9,2,"div",18),e.YNc(55,A,6,0,"div",18),e.YNc(56,Q,6,0,"div",18),e.qZA()(),e.TgZ(57,"div",19)(58,"div",6),e.YNc(59,q,6,0,"div",20),e.qZA(),e.TgZ(60,"div",21)(61,"button",22),e.NdJ("click",function(){return t.reset()}),e._uU(62,"Reset"),e.qZA(),e.TgZ(63,"button",23),e.NdJ("click",function(){return t.submit()}),e._uU(64," Save "),e.qZA()()()()()),2&n&&(e.Q6J("formGroup",t.form),e.xp6(25),e.Q6J("items",t.masterData.SKUOptions)("clearable",!1),e.xp6(3),e.hij("",e.lcZ(29,17,"SKU Description")," "),e.xp6(4),e.Q6J("items",t.masterData.SKUOptions)("clearable",!1),e.xp6(8),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",t.correctionCategory),e.xp6(7),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",t.FGINOptions),e.xp6(1),e.Q6J("ngIf","Batch Transfer"==t.conditions),e.xp6(1),e.Q6J("ngIf","Rename Batch"==t.conditions),e.xp6(1),e.Q6J("ngIf","Batch Transfer"==t.conditions),e.xp6(1),e.Q6J("ngIf","Rename Batch"==t.conditions||"Quantity Correction"==t.conditions),e.xp6(1),e.Q6J("ngIf","Quantity Correction"==t.conditions),e.xp6(3),e.Q6J("ngIf","Batch Transfer"==t.conditions),e.xp6(4),e.Q6J("accessType",t.rolePermissionActions.createAction))},dependencies:[u.sg,u.O5,i.YN,i.Kr,i.Fj,i.wV,i.EJ,i.JJ,i.JL,i.sg,i.u,C.w9,T.J,u.uU,Z.c],encapsulation:2}),s})();var O=r(56208);const J=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"form",component:I}];let Y=(()=>{var o;class s{}return(o=s).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,d.Bz.forChild(J),O.m]}),s})()},68922:(v,m,r)=>{r.d(m,{T:()=>u});const u=[{message:"Location is Required",key:"deliveryLocation"}]},3959:(v,m,r)=>{r.d(m,{Gu:()=>g,kq:()=>i,JH:()=>d,Nh:()=>h,m5:()=>e,sg:()=>f}),r(68922);const d=[{message:"SKU No. is Required",key:"SKUId"},{message:"FGIN Quantity is Required",key:"FGINQuantity"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Manufacturing Date is Required",key:"manufacturingDate"},{message:"Batch No. is Required",key:"batchNo"}],i=[{message:"SKU No. is Required",key:"SKU"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Correction Category is Required",key:"correctionCategory"},{message:"Source Batch (From) is Required",key:"sourceBatch"}],g=[{message:"Process Name is Required",key:"processName"},{message:"Machine Name is Required",key:"machineName"},{message:"Production Date is Required",key:"productionDate"},{message:"Production Shift is Required",key:"productionShift"}],h=[{message:"Item Code is Required",key:"itemCode"},{message:"Item Name is Required",key:"itemName"},{message:"Item Description is Required",key:"itemDescription"},{message:"UoM is Required",key:"UoM"}],f=[{message:"Job Card No. is Required",key:"jobCard"},{message:"Batch Output Qty is Required",key:"batchOutputQty"}],e=[{message:"Job Card No. is Required",key:"jobCard"}]}}]);