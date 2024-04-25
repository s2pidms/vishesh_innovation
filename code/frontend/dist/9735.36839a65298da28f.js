"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9735],{9735:(M,m,l)=>{l.r(m),l.d(m,{CapitalGoodsModule:()=>Y});var t=l(96814),p=l(1076),n=l(60095),T=l(21631),C=l(22096),_=l(47740),A=l(77609),e=l(65879),y=l(74659),u=l(98977),b=l(16897),g=l(37285),U=l(25866),v=l(50363);function k(d,h){if(1&d&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&d){const a=h.$implicit;e.Q6J("value",a._id),e.xp6(1),e.hij(" ",a.hsnCode," ")}}function F(d,h){if(1&d&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&d){const a=h.$implicit;e.Q6J("value",null==a?null:a.value),e.xp6(1),e.hij(" ",null==a?null:a.label," ")}}function O(d,h){if(1&d){const a=e.EpF();e.TgZ(0,"div",34)(1,"div",6)(2,"div",5)(3,"div",35)(4,"button",36),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.reset())}),e._uU(5,"Reset"),e.qZA()(),e.TgZ(6,"div",37)(7,"button",36),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.submit())}),e._uU(8,"Save"),e.qZA()()()()()}}let w=(()=>{class d{get supplierForm(){return this.form.get("supplierInfo")}constructor(a,i,r,o,c,S,R,Q){this.capitalGoodsService=a,this.activatedRoute=i,this.spinner=r,this.toastService=o,this.validationService=c,this.utilityService=S,this.modalService=R,this.location=Q,this.technicalSheetFile=null,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",suppliersOptions:[],UOMOptions:[],hsnCodes:[]},this.selectedSupplierDetails={},this.form=new n.nJ({_id:new n.p4(null),capitalGoodsNo:new n.p4("",[n.kI.required]),capitalGoodsName:new n.p4("",[n.kI.required]),capitalGoodsDescription:new n.p4("",[n.kI.required]),capitalGoodsSpecification:new n.p4(""),hsnCode:new n.p4(null,[n.kI.required]),UOM:new n.p4(null,[n.kI.required]),technicalSheetFile:new n.p4(""),technicalSheetFileUrl:new n.p4(null),isActive:new n.p4(!0),supplierInfo:new n.nJ({_id:new n.p4(null),supplier:new n.p4("",[n.kI.required]),supplierPartNo:new n.p4(""),currency:new n.p4(""),purchaseCost:new n.p4("",[n.kI.required])})})}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,_.p))return;let a=this.form.value,i=new FormData;i.append("key","technicalSheet");for(let r=0;r<Object.keys(a).length;r++){const o=Object.keys(a)[r];a[o]&&"object"==typeof a[o]?a[o]&&i.append(o,JSON.stringify(a[o])):a[o]&&i.append(o,a[o])}this.technicalSheetFile&&i.append("technicalSheetFile",this.technicalSheetFile,this.technicalSheetFile.name),a._id?this.update(a._id,i):(delete a._id,this.create(i))}create(a){this.spinner.show(),this.capitalGoodsService.create(a).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(a,i){this.spinner.show(),this.capitalGoodsService.update(a,i).subscribe(r=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(r.message),this.location.back()})}getInitialData(){this.spinner.show(),this.capitalGoodsService.getAllMasterData({}).subscribe(a=>{this.masterData=a,this.form.controls.capitalGoodsNo.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,T.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.capitalGoodsService.getById(i.id):(0,C.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(this.form.patchValue(i),"view"==this.action&&this.form.disable())})})}setCurrency(a){console.log("ev",a),this.supplierForm.controls.currency.setValue(a.currency)}openSupplierDetailsModal(){const a=this.modalService.open(A.Nx,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});a.componentInstance.action="edit"==this.action?"create":this.action,a.componentInstance.selectedSupplierDetails=this.selectedSupplierDetails,a.componentInstance.supplierOptions=this.masterData.suppliersOptions,a.componentInstance.supplier=this.supplierForm.controls.supplier.value,a.result.then(i=>{i&&(console.log("success",i),this.selectedSupplierDetails=i?.selectedSupplierDetails,this.supplierForm.controls.supplier.setValue(i?.selectedSupplierDetails?._id),this.setCurrency(this.selectedSupplierDetails))},i=>{})}static#e=this.\u0275fac=function(i){return new(i||d)(e.Y36(y.jR),e.Y36(p.gz),e.Y36(u.V),e.Y36(u.kl),e.Y36(b.RJ),e.Y36(u.tI),e.Y36(g.FF),e.Y36(t.Ye))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-capital-goods-form"]],decls:83,vars:15,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","text-cyan","mb-1"],[1,"text-danger"],["type","text","formControlName","capitalGoodsNo","readonly","",1,"form-control"],["type","text","formControlName","capitalGoodsName",1,"form-control"],["type","text","formControlName","capitalGoodsDescription",1,"form-control"],["type","text","formControlName","capitalGoodsSpecification",1,"form-control"],[1,"form-label","mb-1"],["formControlName","hsnCode",1,"form-select"],["disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","UOM",1,"form-select"],["selected","","disabled","",3,"value"],[1,"col-6"],[3,"fileName","url","label","file","fileChange"],[1,"row","line-border"],["formGroupName","supplierInfo",1,"row"],[1,"col-3","pe-5"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","label","bindValue","value","formControlName","supplier",3,"items","clearable","change"],["id","basic-addon1",1,"input-group-text","bg-primary","pointer","col-auto","fs-4",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white"],["formControlName","supplierPartNo","type","text","value","",1,"form-control"],["type","text","formControlName","currency","readonly","",1,"form-control"],["formControlName","purchaseCost","type","text",1,"form-control"],["class","row justify-content-center",4,"ngIf"],[3,"value"],[1,"row","justify-content-center"],[1,"d-grid","col","px-0"],["type","button",1,"btn","btn-primary","mx-1","mt-2",3,"click"],[1,"d-grid","col"]],template:function(i,r){1&i&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," Capital Goods No. "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Capital Goods Name "),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",10),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23," Capital Goods Description"),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e._UZ(26,"input",11),e.qZA(),e.TgZ(27,"div",6)(28,"label",7),e._uU(29," Capital Goods Specifications "),e._UZ(30,"span",8),e.qZA(),e._UZ(31,"input",12),e.qZA()(),e.TgZ(32,"div",5)(33,"div",6)(34,"label",13),e._uU(35," HSN Code "),e.TgZ(36,"span",8),e._uU(37,"*"),e.qZA()(),e.TgZ(38,"select",14)(39,"option",15),e._uU(40,"Select HSN Code"),e.qZA(),e.YNc(41,k,2,2,"option",16),e.qZA()(),e.TgZ(42,"div",6)(43,"label",13),e._uU(44," Unit of Measurement "),e.TgZ(45,"span",8),e._uU(46,"*"),e.qZA()(),e.TgZ(47,"select",17)(48,"option",18),e._uU(49,"Select UOM"),e.qZA(),e.YNc(50,F,2,2,"option",16),e.qZA()(),e.TgZ(51,"div",19)(52,"app-file-upload",20),e.NdJ("fileChange",function(c){return r.technicalSheetFile=c}),e.qZA()()()(),e._UZ(53,"hr",21),e.TgZ(54,"div",22)(55,"div",23)(56,"label",13),e._uU(57,"Supplier Name "),e.TgZ(58,"span",8),e._uU(59,"*"),e.qZA()(),e.TgZ(60,"div",24)(61,"div",25)(62,"ng-select",26),e.NdJ("change",function(c){return r.setCurrency(c)}),e.qZA()(),e.TgZ(63,"div",27),e.NdJ("click",function(){return r.openSupplierDetailsModal()}),e._UZ(64,"i",28),e.qZA()()(),e.TgZ(65,"div",6)(66,"label",13),e._uU(67,"Supplier Part No. "),e._UZ(68,"span",8),e.qZA(),e._UZ(69,"input",29),e.qZA(),e.TgZ(70,"div",6)(71,"label",13),e._uU(72,"Currency"),e._UZ(73,"span",8),e.qZA(),e._UZ(74,"input",30),e.qZA(),e.TgZ(75,"div",6)(76,"label",13),e._uU(77,"Purchase Cost [Exclusive of GST] "),e.TgZ(78,"span",8),e._uU(79,"*"),e.qZA()(),e._UZ(80,"input",31),e.qZA()(),e._UZ(81,"hr",21),e.YNc(82,O,9,0,"div",32),e.qZA()()),2&i&&(e.Q6J("formGroup",r.form),e.xp6(5),e.hij("Enter Capital Goods Details [",e.lcZ(6,13,r.action),"]"),e.xp6(34),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",r.masterData.hsnCodes),e.xp6(7),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",r.masterData.UOMOptions),e.xp6(2),e.Q6J("fileName",r.form.controls.technicalSheetFile.value)("url",r.form.controls.technicalSheetFileUrl.value)("label","Upload Technical Sheet")("file",r.technicalSheetFile),e.xp6(10),e.Q6J("items",r.masterData.suppliersOptions)("clearable",!1),e.xp6(20),e.Q6J("ngIf","view"!==r.action))},dependencies:[t.sg,t.O5,U.Y,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u,n.x0,v.w9,t.rS],encapsulation:2})}return d})();var f=l(43818),N=l(25116),D=l(98860),I=l(88059),x=l(53421),P=l(59103);function G(d,h){if(1&d){const a=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",19,20)(5,"span",21),e._uU(6),e.qZA()(),e.TgZ(7,"td",19,22)(9,"span",21),e._uU(10),e.qZA()(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.ALo(15,"UOMUnitsMaster"),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"div",23),e._UZ(20,"button",24),e.TgZ(21,"div",25)(22,"a",26),e.NdJ("click",function(){const o=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.navigateTo("../form",o,"view"))}),e._UZ(23,"i",27),e._uU(24," View "),e.qZA(),e.TgZ(25,"a",26),e.NdJ("click",function(){const o=e.CHM(a).$implicit,c=e.oxw();return e.KtG(c.navigateTo("../form",o,"edit"))}),e._UZ(26,"i",28),e._uU(27," Edit "),e.qZA()()()()()}if(2&d){const a=h.$implicit,i=e.MAs(4),r=e.MAs(8),o=e.oxw();e.xp6(2),e.Oqu(null==a?null:a.capitalGoodsNo),e.xp6(1),e.Udp("width",i.clientWidth),e.xp6(2),e.Q6J("positionTarget",i)("ngbTooltip",a.capitalGoodsName),e.xp6(1),e.hij(" ",a.capitalGoodsName," "),e.xp6(1),e.Udp("width",r.clientWidth),e.xp6(2),e.Q6J("positionTarget",r)("ngbTooltip",a.capitalGoodsDescription),e.xp6(1),e.hij(" ",a.capitalGoodsDescription," "),e.xp6(2),e.Oqu(null==a?null:a.capitalGoodsSpecification),e.xp6(2),e.Oqu(e.lcZ(15,16,null==a?null:a.UOM)),e.xp6(3),e.Oqu(null==a?null:a.hsnCode),e.xp6(5),e.Q6J("accessType",o.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",o.rolePermissionActions.editAction)}}const L=function(d,h,a,i){return{page:d,pageSize:h,collection:a,search:i,type:"list"}};let J=(()=>{class d{constructor(a,i,r,o,c,S){this.exportExcelService=a,this.router=i,this.spinner=r,this.capitalGoodsService=o,this.activatedRoute=c,this.exportToPDFService=S,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=N.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(a=!1,i=""){this.spinner.show();let r={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:a};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.capitalGoodsService.getAll(r).subscribe(o=>{"EXCEL"==i?this.excelDownload(o.rows):"PDF"==i?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(a,i,r){this.router.navigate([a],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:r}})}eventHeader(a){switch(a.key){case"SEARCH":this.search=a.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=a.value,this.getAll()}}trackByFn(a,i){return i?._id}excelDownload(a){this.exportExcelService.exportExcel((0,D.FD)(a))}pdfDownload(a){let i=(0,D.aC)(a);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:a,direction:i}){this.headers.forEach(r=>{r.sortable!==a&&(r.direction="")}),this.column=a,this.direction="asc"==i?1:-1,this.getAll()}static#e=this.\u0275fac=function(i){return new(i||d)(e.Y36(u.Ol),e.Y36(p.F0),e.Y36(u.V),e.Y36(y.jR),e.Y36(p.gz),e.Y36(u.$L))};static#t=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-capital-goods-list"]],viewQuery:function(i,r){if(1&i&&e.Gf(f.j,5),2&i){let o;e.iGM(o=e.CRH())&&(r.headers=o)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","capitalGoodsNo",3,"sort"],["sortable","capitalGoodsName",1,"text-start",3,"sort"],["sortable","capitalGoodsDescription",1,"text-start",3,"sort"],["sortable","capitalGoodsSpecification",3,"sort"],["sortable","UOM",3,"sort"],["sortable","hsnCode",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["capitalGoodsName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["capitalGoodsDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Capital Goods Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return r.navigateTo("../form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Capital Goods "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(c){return r.eventHeader(c)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(c){return r.onSort(c)}),e._uU(15,"CG Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(c){return r.onSort(c)}),e._uU(17,"Capital Goods Name"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(c){return r.onSort(c)}),e._uU(19," Capital Goods Description "),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(c){return r.onSort(c)}),e._uU(21,"Capital Goods Specification"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(c){return r.onSort(c)}),e._uU(23,"UOM"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(c){return r.onSort(c)}),e._uU(25,"HSN Code"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,G,28,18,"tr",18),e.qZA()()()()),2&i&&(e.xp6(4),e.Q6J("accessType",r.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,L,r.page,r.pageSize,r.collection,r.search)),e.xp6(19),e.Q6J("ngForOf",r.tableData)("ngForTrackBy",r.trackByFn))},dependencies:[t.sg,I.P,g._L,f.j,x.J,P.S],encapsulation:2})}return d})();var q=l(56208);const E=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:J},{path:"form",component:w,resolve:{accessScreen:l(65876).x}}];let Y=(()=>{class d{static#e=this.\u0275fac=function(i){return new(i||d)};static#t=this.\u0275mod=e.oAB({type:d});static#a=this.\u0275inj=e.cJS({imports:[t.ez,p.Bz.forChild(E),q.m]})}return d})()},13107:(M,m,l)=>{l.d(m,{t:()=>t});const t={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(M,m,l)=>{l.d(m,{J:()=>t});const t=({data:p,headers:n,widths:T,title:C})=>({tableData:{widths:T,headerRows:1,body:[n.map(e=>({text:e.header,style:"header"})),...p.map(e=>n.map(y=>({style:"subheader",text:e[y.key]})))]},title:C})},98860:(M,m,l)=>{l.d(m,{aC:()=>d,FD:()=>Y,mR:()=>ae,dk:()=>te,e8:()=>$,nQ:()=>Q,JZ:()=>A,ok:()=>_,vZ:()=>I,U4:()=>D,O3:()=>g,SS:()=>b,kw:()=>J,ev:()=>L,sK:()=>o,Y5:()=>r,g4:()=>O,$m:()=>F});var t=l(13107),p=l(28402);let n=["*","*","*","*","*","*","*","*","*","*"],T="HSN Master",C=[{header:"HSN Code",key:"hsnCode",...t.t},{header:"Description of Goods",key:"goodsDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"UGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const _=s=>({title:T,csvData:s,headers:C}),A=s=>(0,p.J)({data:s,headers:C,widths:n,title:T});let e=["*","*","*","*","*","*","*","*","*","*"],y="SAC Master",u=[{header:"SAC Code",key:"sacCode",...t.t},{header:"Description Of Service",key:"serviceDescription",...t.t},{header:"GST Rate",key:"gstRate",...t.t},{header:"IGST Rate",key:"igstRate",...t.t},{header:"SGST Rate",key:"sgstRate",...t.t},{header:"CGST Rate",key:"cgstRate",...t.t},{header:"\tUGST Rate",key:"ugstRate",...t.t},{header:"Revision No.",key:"revisionNo",...t.t},{header:"Revision Date",key:"revisionDate",...t.t}];const b=s=>({title:y,csvData:s,headers:u}),g=s=>(0,p.J)({data:s,headers:u,widths:e,title:y});let U=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],v="Supplier Master",k=[{header:"Supplier Code",key:"supplierCode",...t.t},{header:"Supplier NAME",key:"supplierName",...t.t},{header:"Supplier Nick Name",key:"supplierNickName",...t.t},{header:"Supplier Category",key:"supplierPurchaseType",...t.t},{header:"PAN Card No.",key:"supplierPAN",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN No.",key:"supplierGST",...t.t},{header:"Udyam Aadhaar Registration No.",key:"supplierUdyogAadhar",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency ",key:"supplierCurrency",...t.t},{header:"Payment Terms ",key:"supplierPaymentTerms",...t.t},{header:"Freight/Inco Terms ",key:"supplierINCOTerms",...t.t},{header:"Country ",key:"country",...t.t},{header:"State/Province ",key:"state",...t.t},{header:"City/District ",key:"city",...t.t},{header:"Pincode ",key:"pinCode",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Lead Time for Supply (in Days)",key:"supplierLeadTimeInDays",...t.t},{header:"Contract Purchase Agreement",key:"cpaFileUrl",...t.t},{header:"Contact Person Name",key:"supplierContactPersonName",...t.t},{header:"Department",key:"supplierContactPersonDepartment",...t.t},{header:"Designation",key:"supplierContactPersonDesignation",...t.t},{header:"Mob. No.",key:"supplierContactPersonNumber",...t.t},{header:"E-Mail ID",key:"supplierContactPersonEmail",...t.t},{header:"Beneficiary Name",key:"befName",...t.t},{header:"Bank Name",key:"bankName",...t.t},{header:"Account Type",key:"accountType",...t.t},{header:"Account No",key:"accountNumber",...t.t},{header:"IFC Code",key:"bankIFSCCode",...t.t},{header:"Swift Code [For Imports]",key:"bankSwiftCode",...t.t},{header:"Status",key:"isSupplierActive",...t.t}];const F=s=>({title:v,csvData:s,headers:k}),O=s=>(0,p.J)({data:s,headers:k,widths:U,title:v});let w=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],f="Item Master",N=[{header:"Item Category",key:"itemType",...t.t},{header:"Item Code",key:"itemCode",...t.t},{header:"Item Name",key:"itemName",...t.t},{header:"Item Description",key:"itemDescription",...t.t},{header:"UoM",key:"orderInfoUOM",...t.t},{header:"Unit Conversion",key:"conversionOfUnits",...t.t},{header:"HSN Code",key:"hsn",...t.t},{header:"RO Level",key:"itemROL",...t.t},{header:"RO Qty",key:"itemAMU",...t.t},{header:"Technical Data Sheet",key:"tdsFileUrl",...t.t},{header:"Material Safety Data Sheet",key:"msdsFileUrl",...t.t},{header:"Shelf Life [Months]",key:"shelfLife",...t.t},{header:"Storage Temperature [\xb0C]",key:"storageTemp",...t.t},{header:"Storage Humidity [RH]",key:"storageHumidity",...t.t},{header:"Special Storage Instruction",key:"specialStorageInstruction",...t.t},{header:"QC Level",key:"QCLevels",...t.t},{header:"Supplier Name",key:"supplierName",...t.t},{header:"Supplier Item Description",key:"supplierDescription",...t.t},{header:"Supplier Item Code",key:"spin",...t.t},{header:"Currency",key:"supplierCurrency",...t.t},{header:"Purchase Cost [Exclusive of GST] ",key:"stdCostUom1",...t.t},{header:"Status",key:"isActive",...t.t}];const D=s=>({title:f,csvData:s,headers:N}),I=s=>(0,p.J)({data:s,headers:N,widths:w,title:f});let x=["*","*","*","*","*","*","*","*","*"],P="Service Master",G=[{header:"Service Code",key:"serviceCode",...t.t},{header:"Service Description",key:"serviceDescription",...t.t},{header:"SAC",key:"sacCode",...t.t},{header:"GST",key:"gst",...t.t},{header:"IGST",key:"igst",...t.t},{header:"CGST",key:"cgst",...t.t},{header:"SGST",key:"sgst",...t.t}];const L=s=>({title:P,csvData:s,headers:G}),J=s=>(0,p.J)({data:s,headers:G,widths:x,title:P});let q=["*","*","*","*","*","*","*","*","*"],Z="Capital Goods Master",E=[{header:"CG Code",key:"capitalGoodsNo",...t.t},{header:"Capital Goods Name",key:"capitalGoodsName",...t.t},{header:"Capital Goods Description",key:"capitalGoodsDescription",...t.t},{header:"Capital Goods Specification",key:"capitalGoodsSpecification",...t.t},{header:"UOM",key:"UOM",...t.t},{header:"HSN Code",key:"hsnCode",...t.t},{header:"Supplier Part No.",key:"supplierPartNo",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Purchase Cost",key:"purchaseCost",...t.t}];const Y=s=>({title:Z,csvData:s,headers:E}),d=s=>(0,p.J)({data:s,headers:E,widths:q,title:Z});let h=["*","*","*","*","*","*"],a="Supplier Evaluation Master",i=[{header:"Name",key:"name",...t.t},{header:"Description",key:"description",...t.t},{header:"Enabled",key:"enabled",...t.t},{header:"Weight",key:"weight",...t.t},{header:"Passing %",key:"passingPercentage",...t.t},{header:"Failing %",key:"failingPercentage",...t.t}];const r=s=>({title:a,csvData:s,headers:i}),o=s=>(0,p.J)({data:s,headers:i,widths:h,title:a});let c=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],S="External (Service) Provider Master",R=[{header:"Category",key:"ESPCategory",...t.t},{header:"ESP Code",key:"ESPCode",...t.t},{header:"External Service Provider Name",key:"ESPName",...t.t},{header:"External Service Provider NickName",key:"ESPNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isESPActive",...t.t}];const Q=s=>({title:S,csvData:s,headers:R}),$=s=>(0,p.J)({data:s,headers:R,widths:c,title:S});let ee=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],X="Channel Partner Master",B=[{header:"Category",key:"channelPartnerCategory",...t.t},{header:"CP Code",key:"CPCode",...t.t},{header:"Channel Partner Name",key:"channelPartnerName",...t.t},{header:"Channel Partner NickName",key:"channelPartnerNickName",...t.t},{header:"Pan No.",key:"PANNo",...t.t},{header:"GST Classification",key:"GSTClassification",...t.t},{header:"GSTIN",key:"GSTIN",...t.t},{header:"Udyam Aadhaar No.",key:"udyamAadhaarNo",...t.t},{header:"MSME Classification",key:"MSMEClassification",...t.t},{header:"Currency",key:"currency",...t.t},{header:"Payment Terms",key:"paymentTerms",...t.t},{header:"Country",key:"country",...t.t},{header:"State/Province %",key:"state",...t.t},{header:"City/District",key:"city",...t.t},{header:"Address Line 1",key:"line1",...t.t},{header:"Address Line 2",key:"line2",...t.t},{header:"Address Line 3",key:"line3",...t.t},{header:"Address Line 4",key:"line4",...t.t},{header:"Status",key:"isCPActive",...t.t}];const te=s=>({title:X,csvData:s,headers:B}),ae=s=>(0,p.J)({data:s,headers:B,widths:ee,title:X})}}]);