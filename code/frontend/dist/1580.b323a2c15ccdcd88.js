"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1580],{61580:(D,f,c)=>{c.r(f),c.d(f,{AsnModule:()=>se});var l=c(96814),_=c(1076),g=c(43818),Z=c(25116),T=c(77055),e=c(65879),h=c(2742),v=c(35747),b=c(88059),A=c(37285),N=c(53421);function x(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",21,22)(7,"span",23),e._uU(8),e.qZA()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td")(20,"div",24),e._UZ(21,"button",25),e.TgZ(22,"div",26)(23,"a",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.navigateTo("../form",o,"view"))}),e._UZ(24,"i",28),e._uU(25," View "),e.qZA(),e.TgZ(26,"a",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.navigateTo("../form",o,"edit"))}),e._UZ(27,"i",29),e._uU(28," Edit "),e.qZA(),e.TgZ(29,"a",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.navigateToPrint("/#/print/asn_box_label",o,"print"))}),e._UZ(30,"i",30),e._uU(31," Box Label "),e.qZA(),e.TgZ(32,"a",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.update(o._id,"Report Generated"))}),e._UZ(33,"img",31),e._uU(34," Generate Report "),e.qZA(),e.TgZ(35,"a",27),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.navigateToPrint("/#/print/asn",o,"print"))}),e._UZ(36,"i",32),e._uU(37," Print Preview "),e.qZA()()()()()}if(2&a){const t=p.$implicit,s=e.MAs(6),i=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.ASNNumber),e.xp6(2),e.Oqu(null==t?null:t.salesInvoiceNumber),e.xp6(1),e.Udp("width",s.clientWidth),e.xp6(2),e.Q6J("positionTarget",s)("ngbTooltip",t.customerName),e.xp6(1),e.hij(" ",t.customerName?t.customerName:null," "),e.xp6(2),e.Oqu(null==t?null:t.stateOfSupply),e.xp6(2),e.Oqu(null==t?null:t.totalNoOfBoxes),e.xp6(2),e.Oqu(null==t?null:t.totalGrossWeight),e.xp6(2),e.Oqu(null==t?null:t.transporter),e.xp6(2),e.Oqu(null==t?null:t.ASNStatus),e.xp6(5),e.Q6J("accessType",i.rolePermissionActions.viewAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.ASNStatus)||"Rejected"===(null==t?null:t.ASNStatus)),e.Q6J("accessType",i.rolePermissionActions.editAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.ASNStatus)||"Rejected"===(null==t?null:t.ASNStatus)),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(3),e.ekj("disable","created"===(null==t?null:t.ASNStatus)),e.Q6J("accessType",i.rolePermissionActions.generateReportAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.ASNStatus)||"Rejected"===(null==t?null:t.ASNStatus)),e.Q6J("accessType",i.rolePermissionActions.createAction)}}const C=function(a,p,t,s){return{page:a,pageSize:p,collection:t,search:s,type:"list"}};let S=(()=>{class a{constructor(t,s,i,o,r,u,d){this.exportExcelService=t,this.advanceShipmentNotice=s,this.router=i,this.toastService=o,this.activatedRoute=r,this.spinner=u,this.exportToPDFService=d,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=Z.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}update(t,s){this.spinner.show(),this.advanceShipmentNotice.update(t,{ASNStatus:s}).subscribe(i=>{this.toastService.success(i.message),this.getAll(),this.spinner.hide()})}navigateToPrint(t,s,i){window.open(`${window.location.origin}${t}?id=${s?._id}&action=${i}`,"_blank")}navigateTo(t,s,i){return"Created"==s.ASNStatus&&"edit"==i||"Created"==s.ASNStatus&&"view"==i||"create"==i?void this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:s?._id,action:i}}):null}trackByFn(t,s){return s?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,s=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.advanceShipmentNotice.getAll(i).subscribe(o=>{"EXCEL"==s?this.excelDownload(o.rows):"PDF"==s?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}sendMail(t){this.spinner.show(),this.advanceShipmentNotice.sendMailById(t).subscribe(s=>{this.toastService.success(s.message),this.spinner.hide()})}pdfDownload(t){let s=(0,T.xL)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(t){this.exportExcelService.exportExcel((0,T.Rn)(t))}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(h.Ol),e.Y36(v.n4),e.Y36(_.F0),e.Y36(h.kl),e.Y36(_.gz),e.Y36(h.V),e.Y36(h.$L))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-asn-list"]],viewQuery:function(s,i){if(1&s&&e.Gf(g.j,5),2&s){let o;e.iGM(o=e.CRH())&&(i.headers=o)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-info"],[1,"text-white"],["sortable","ASNNumber",3,"sort"],["sortable","salesInvoiceNumber",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","stateOfSupply",3,"sort"],["sortable","totalNoOfBoxes",3,"sort"],["sortable","totalGrossWeight",3,"sort"],["sortable","transporter",3,"sort"],["sortable","ASNStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-tag","fa-lg","me-3","text-primary"],["src","./assets/images/new.svg","width","16",1,"me-2"],["aria-hidden","true",1,"fa","fa-print","fa-lg","me-3","text-primary"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"ASN summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Create ASN "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(r){return i.eventHeader(r)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(15,"ASN #"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(17,"Invoice #"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(19,"Customer Name"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(21,"State of supply"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(23,"Total Boxes"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(25,"Total Weight(kgs)"),e.qZA(),e.TgZ(26,"th",18),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(27,"Transporter"),e.qZA(),e.TgZ(28,"th",19),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(29,"Status"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Action"),e.qZA()()(),e.TgZ(32,"tbody"),e.YNc(33,x,38,25,"tr",20),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,C,i.page,i.pageSize,i.collection,i.search)),e.xp6(23),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[l.sg,b.P,A._L,g.j,N.J],encapsulation:2})}return a})();var n=c(60095),U=c(21631),q=c(22096),m=c(51785),k=c(16897);function R(a,p){if(1&a&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}function J(a,p){if(1&a&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}function F(a,p){if(1&a&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.parameterName),e.xp6(1),e.hij(" ",t.parameterLabel," ")}}function O(a,p){if(1&a&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&a){const t=p.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.label," ")}}function L(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"div",23)(1,"div",24)(2,"button",25),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",24)(5,"button",25),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.saveDispatchDetails())}),e._uU(6,"Save"),e.qZA()()()}}const Y=function(){return["create","edit"]};let P=(()=>{class a{constructor(t,s,i,o){this.activeModal=t,this.validationService=s,this.modalService=i,this.utilityService=o,this.data=[],this.dispatchDetails={},this.action="",this.freightPercentage=0,this.form=new n.nJ({transporter:new n.p4(null,[n.kI.required]),modeOfTransport:new n.p4(null,[n.kI.required]),frightCharge:new n.p4("",[n.kI.required]),frightTerms:new n.p4(null,[n.kI.required]),deliveryType:new n.p4(null,[n.kI.required]),docketLR:new n.p4(""),docketLRDate:new n.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),freight:new n.p4("")}),this.findFormErrors=[{message:"Transporter is Required",key:"transporter"},{message:"Mode of Transport is Required",key:"modeOfTransport"},{message:"Freight Charges is Required",key:"frightCharge"},{message:"Freight Terms is Required",key:"frightTerms"},{message:"Delivery Type is Required",key:"deliveryType"}]}setPercentage(){this.freightPercentage=this.form.controls.frightCharge.value/this.data?.invoiceValue*100,this.form.controls.freight.setValue(this.freightPercentage.toFixed(2))}ngOnInit(){this.form.patchValue(this.dispatchDetails),("view"==this.action||"cancel"==this.action||"approve"==this.action)&&this.form.disable()}get f(){return this.form.controls}reset(){this.form.reset(),this.form.controls.docketLRDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD"))}saveDispatchDetails(){this.validationService.checkErrors(this.form,this.findFormErrors)||this.activeModal.close(this.form.value)}patchAddress(t){this.form.controls.customerShippingAddress.patchValue(t)}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(A.Kz),e.Y36(k.RJ),e.Y36(A.FF),e.Y36(h.tI))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-asn-disaptch-details"]],inputs:{data:"data",dispatchDetails:"dispatchDetails",action:"action"},decls:69,vars:11,consts:[[1,"modelPage",2,"min-height","32rem"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"modal-body"],[3,"formGroup"],[1,"row","my-4"],[1,"col"],[1,"form-label"],[1,"text-danger"],["formControlName","transporter",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","modeOfTransport",1,"form-select"],["type","text","formControlName","frightCharge",1,"form-control",3,"input"],["formControlName","frightTerms",1,"form-select"],["formControlName","deliveryType",1,"form-select"],["type","text","formControlName","docketLR",1,"form-control"],["type","date","formControlName","docketLRDate",1,"form-control"],["type","text","formControlName","freight","readonly","",1,"form-control"],["class","row justify-content-center",4,"ngIf"],[3,"value"],[1,"row","justify-content-center"],[1,"col-1","d-flex","justify-content-center","my-5"],["type","button",1,"btn","btn-primary","px-4",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Dispatch Details"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return i.activeModal.dismiss()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"form",6)(9,"div",7)(10,"div",8)(11,"label",9),e._uU(12," Transporter"),e.TgZ(13,"span",10),e._uU(14,"*"),e.qZA()(),e.TgZ(15,"select",11)(16,"option",12),e._uU(17,"Select Transporter"),e.qZA(),e.YNc(18,R,2,2,"option",13),e.qZA()(),e.TgZ(19,"div",8)(20,"label",9),e._uU(21," Mode of Transport "),e.TgZ(22,"span",10),e._uU(23,"*"),e.qZA()(),e.TgZ(24,"select",14)(25,"option",12),e._uU(26,"Select"),e.qZA(),e.YNc(27,J,2,2,"option",13),e.qZA()(),e.TgZ(28,"div",8)(29,"label",9),e._uU(30," Freight Charges"),e.TgZ(31,"span",10),e._uU(32,"*"),e.qZA()(),e.TgZ(33,"input",15),e.NdJ("input",function(){return i.setPercentage()}),e.qZA()(),e.TgZ(34,"div",8)(35,"div",9),e._uU(36,"Freight Terms"),e.TgZ(37,"span",10),e._uU(38,"* "),e.qZA()(),e.TgZ(39,"select",16)(40,"option",12),e._uU(41,"Select"),e.qZA(),e.YNc(42,F,2,2,"option",13),e.qZA()()(),e.TgZ(43,"div",7)(44,"div",8)(45,"label",9),e._uU(46," Delivery Type"),e.TgZ(47,"span",10),e._uU(48,"*"),e.qZA()(),e.TgZ(49,"select",17)(50,"option",12),e._uU(51,"Select Delivery Type"),e.qZA(),e.YNc(52,O,2,2,"option",13),e.qZA()(),e.TgZ(53,"div",8)(54,"label",9),e._uU(55," Docket/LR # "),e._UZ(56,"span",10),e.qZA(),e._UZ(57,"input",18),e.qZA(),e.TgZ(58,"div",8)(59,"label",9),e._uU(60," Docket/LR Date"),e._UZ(61,"span",10),e.qZA(),e._UZ(62,"input",19),e.qZA(),e.TgZ(63,"div",8)(64,"div",9),e._uU(65,"Freight %"),e._UZ(66,"span",10),e.qZA(),e._UZ(67,"input",20),e.qZA()(),e.YNc(68,L,7,0,"div",21),e.qZA()()()),2&s&&(e.xp6(8),e.Q6J("formGroup",i.form),e.xp6(8),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",i.data.transporterArr),e.xp6(7),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",i.data.modeOfTransport),e.xp6(13),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",i.data.freightTerms),e.xp6(8),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",i.data.deliveryTypeArr),e.xp6(16),e.Q6J("ngIf",e.DdM(10,Y).includes(i.action)))},dependencies:[l.sg,l.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u],encapsulation:2})}return a})();var w=c(95346);function E(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"div",26),e._UZ(9,"button",27),e.TgZ(10,"div",28)(11,"a",29),e.NdJ("click",function(){const i=e.CHM(t),o=i.$implicit,r=i.index,u=e.oxw();return e.KtG(u.patchItem(o,r,"view"))}),e._UZ(12,"i",30),e._uU(13," View "),e.qZA(),e.TgZ(14,"a",29),e.NdJ("click",function(){const i=e.CHM(t),o=i.$implicit,r=i.index,u=e.oxw();return e.KtG(u.patchItem(o,r,"edit"))}),e._UZ(15,"i",31),e._uU(16," Edit "),e.qZA(),e.TgZ(17,"a",29),e.NdJ("click",function(){const o=e.CHM(t).index,r=e.oxw();return e.KtG(r.deleteItem(o))}),e._UZ(18,"i",32),e._uU(19," Delete "),e.qZA()()()()()}if(2&a){const t=p.$implicit,s=e.oxw();e.xp6(2),e.Oqu(t.boxNo),e.xp6(2),e.Oqu(t.qty),e.xp6(2),e.Oqu(t.weight),e.xp6(5),e.ekj("disable","view"==s.action),e.xp6(3),e.ekj("disable","view"==s.action),e.xp6(3),e.ekj("disable","view"==s.action)}}const M=function(a,p,t,s){return{page:a,pageSize:p,collection:t,search:s,excelDisplay:"none"}};let Q=(()=>{class a{constructor(t,s,i,o){this.activeModal=t,this.validationService=s,this.exportExcelService=i,this.toastService=o,this.action="",this.dispatchQty="",this.boxDetails=[],this.btnDisable=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.balanceQty=0,this.form=new n.nJ({index:new n.p4(-1),boxNo:new n.p4(null,[n.kI.required]),qty:new n.p4(0,[n.kI.required]),weight:new n.p4(0,[n.kI.required])}),this.exportsArr=[{label:"Yes",value:"Yes"},{label:"No",value:"No"}],this.findFormErrors=[{message:"Box No. is required",key:"boxNo"},{message:"Qty is required",key:"qty"},{message:"Weight is required",key:"weight"}]}ngOnInit(){"view"==this.action&&this.form.disable(),this.collection=this.boxDetails.length}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value;break;case"EXCEL":this.excelDownload(this.boxDetails);break;case"PAGE":this.page=t.value}}setQuantity(t){let s=this.boxDetails.filter((i,o)=>o!=this.form.value.index).map(i=>+i.qty).reduce((i,o)=>+i+ +o,0);if(s+=+this.form.value.qty,s>this.dispatchQty)return this.toastService.warning("Qty should not greater than total dispatch Qty !!"),void this.form.controls.qty.setValue(0)}save(){if(this.validationService.checkErrors(this.form,this.findFormErrors))return;let t=this.form.value;(t.index||0==t.index)&&t.index>=0?this.boxDetails.splice(t.index,1,t):this.boxDetails.push(t),this.collection=this.boxDetails.length,this.form.reset()}patchItem(t,s,i){"view"!=this.action&&(t.index=s,this.form.patchValue(t),"view"==i?(this.btnDisable=!0,this.form.disable()):(this.form.enable(),this.btnDisable=!1))}deleteItem(t){"view"!=this.action&&(this.boxDetails.splice(t+(this.page-1)*this.pageSize,1),this.collection=this.boxDetails.length)}excelDownload(t){let s={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},i={title:"Customer Contact Details",csvData:t,headers:[{header:"Beneficiary Name",key:"befName",...s},{header:"Bank Name",key:"bankName",...s},{header:"Account Type",key:"accountType",...s},{header:"Account No.",key:"accountNumber",...s},{header:"IFS/Swift Code",key:"bankIFSCCode",...s}]};this.exportExcelService.exportExcel(i)}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.boxDetails=""===s||""===t?this.boxDetails:[...this.boxDetails].sort((i,o)=>{let r="string"==typeof i[t]?i[t].toLowerCase():i[t],u="string"==typeof o[t]?o[t].toLowerCase():o[t];const d=r<u?-1:r>u?1:0;return"asc"===s?d:-d})}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(A.Kz),e.Y36(k.RJ),e.Y36(h.Ol),e.Y36(h.kl))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-asn-box-details"]],viewQuery:function(s,i){if(1&s&&e.Gf(g.j,5),2&s){let o;e.iGM(o=e.CRH())&&(i.headers=o)}},inputs:{action:"action",dispatchQty:"dispatchQty",boxDetails:"boxDetails"},decls:54,vars:17,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","mt-4","px-0"],[3,"formGroup"],[1,"row","mb-4","px-5"],[1,"col-md-4"],[1,"form-label","mb-2"],[1,"text-danger"],["type","number","formControlName","boxNo",1,"form-control"],["type","number","formControlName","qty",1,"form-control",3,"input"],["type","number","formControlName","weight",1,"form-control"],[1,"col","text-center","my-4"],["type","button",1,"btn","bg-primary","px-5",3,"disabled","click"],[1,"line-border","mb-0"],[1,"row","px-5"],[1,"col-12"],[1,"ps-0","mt-0"],[3,"data","dataChange"],[1,"table-responsive","ps-0","pe-0",2,"min-height","23rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[4,"ngFor","ngForOf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","me-2","text-primary"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Box No. Details "),e.TgZ(4,"b"),e._uU(5),e.qZA()(),e.TgZ(6,"div")(7,"button",3),e.NdJ("click",function(){return i.activeModal.close(i.boxDetails)}),e._UZ(8,"i",4),e.qZA()()(),e.TgZ(9,"div",5)(10,"form",6)(11,"div",7)(12,"div",8)(13,"label",9),e._uU(14," Box No. "),e.TgZ(15,"span",10),e._uU(16,"*"),e.qZA()(),e._UZ(17,"input",11),e.qZA(),e.TgZ(18,"div",8)(19,"label",9),e._uU(20," Qty "),e.TgZ(21,"span",10),e._uU(22,"*"),e.qZA()(),e.TgZ(23,"input",12),e.NdJ("input",function(r){return i.setQuantity(r)}),e.qZA()(),e.TgZ(24,"div",8)(25,"label",9),e._uU(26," Weight "),e.TgZ(27,"span",10),e._uU(28,"*"),e.qZA()(),e._UZ(29,"input",13),e.qZA()()(),e.TgZ(30,"div",14)(31,"button",15),e.NdJ("click",function(){return i.save()}),e._uU(32," Add "),e.qZA()(),e._UZ(33,"hr",16),e.TgZ(34,"div",17)(35,"div",18)(36,"div",19)(37,"app-setting-header",20),e.NdJ("dataChange",function(r){return i.eventHeader(r)}),e.qZA()(),e.TgZ(38,"div",21)(39,"table",22)(40,"thead",23)(41,"tr",24)(42,"th"),e._uU(43,"Box No."),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Qty"),e.qZA(),e.TgZ(46,"th"),e._uU(47,"Weight"),e.qZA(),e.TgZ(48,"th"),e._uU(49,"Action"),e.qZA()()(),e.TgZ(50,"tbody"),e.YNc(51,E,20,9,"tr",25),e.ALo(52,"slice"),e.ALo(53,"searchFi1ter"),e.qZA()()()()()()()),2&s&&(e.xp6(5),e.hij("[ Total Dispatch Qty: ",i.dispatchQty," ]"),e.xp6(5),e.Q6J("formGroup",i.form),e.xp6(21),e.Q6J("disabled",i.btnDisable||"view"==i.action),e.xp6(6),e.Q6J("data",e.l5B(12,M,i.page,i.pageSize,i.collection,i.search)),e.xp6(14),e.Q6J("ngForOf",e.Dn7(52,5,e.xi3(53,9,i.boxDetails,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize)))},dependencies:[l.sg,b.P,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,l.OU,w.G],encapsulation:2})}return a})();var B=c(50363),G=c(14906);function K(a,p){if(1&a&&(e.TgZ(0,"td",41,42)(2,"span",43),e._uU(3),e.ALo(4,"labelTranslate"),e.ALo(5,"labelTranslate"),e.qZA()()),2&a){const t=e.MAs(1),s=e.oxw().$implicit;e.Udp("width",t.clientWidth),e.xp6(2),e.Q6J("ngbTooltip","SKU Name: "+s.SKUName+" | SKU Description: "+s.SKUDescription)("positionTarget",t),e.xp6(1),e.HOy(" ",e.lcZ(4,8,"SKU Name"),": ",null==s?null:s.SKUName," | ",e.lcZ(5,10,"SKU Description"),": ",null==s?null:s.SKUDescription," ")}}function j(a,p){if(1&a&&(e.TgZ(0,"td",41,44)(2,"span",43),e._uU(3),e.ALo(4,"labelTranslate"),e.ALo(5,"labelTranslate"),e.qZA()()),2&a){const t=e.MAs(1),s=e.oxw().$implicit;e.Udp("width",t.clientWidth),e.xp6(2),e.Q6J("ngbTooltip","SKU Name: "+s.SKU.SKUName+" | SKU Description: "+s.SKU.SKUDescription)("positionTarget",t),e.xp6(1),e.HOy(" ",e.lcZ(4,8,"SKU Name"),": ",null==s||null==s.SKU?null:s.SKU.SKUName," | ",e.lcZ(5,10,"SKU Description"),": ",null==s||null==s.SKU?null:s.SKU.SKUDescription," ")}}const I=function(){return["view","edit"]};function V(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.YNc(3,K,6,12,"td",37),e.YNc(4,j,6,12,"td",37),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"div",38),e._uU(14),e.TgZ(15,"button",39),e.NdJ("click",function(){const o=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.openBoxDetailsModal(o))}),e._UZ(16,"i",40),e.qZA()()()()}if(2&a){const t=p.$implicit,s=p.index,i=e.oxw();e.xp6(2),e.Oqu(1+s+(i.page-1)*i.pageSize),e.xp6(1),e.Q6J("ngIf","create"==i.action),e.xp6(1),e.Q6J("ngIf",e.DdM(10,I).includes(i.action)),e.xp6(2),e.Oqu(null==t?null:t.dispatchQty),e.xp6(2),e.hij(" ",null!=t&&t.batchDate?e.xi3(9,7,null==t?null:t.batchDate,"dd-MM-YYYY"):"-"," "),e.xp6(3),e.Oqu(null==t?null:t.PONumber),e.xp6(3),e.hij(" ",null==t?null:t.boxNos," ")}}function H(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"button",45),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(1," Reset "),e.qZA()}}function z(a,p){if(1&a){const t=e.EpF();e.TgZ(0,"button",46),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(1," Save "),e.qZA()}}const $=function(a,p,t,s){return{page:a,pageSize:p,collection:t,search:s,excelDisplay:"none"}},W=function(){return["create","edit"]};let X=(()=>{class a{constructor(t,s,i,o,r,u,d,y){this.advanceShipmentNotice=t,this.activatedRoute=s,this.spinner=i,this.toastService=o,this.validationService=r,this.modalService=u,this.utilityService=d,this.location=y,this.ASNDetailsArray=[],this.dispatchDetails={},this.invoiceValue=[],this.boxDetails=[],this.shippingAddressArr={},this.billingAddressArr={},this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.submitted=!1,this.isPreview=!1,this.action="create",this.dispatchName="Select SKU for Dispatch",this.statusArr={create:"Created",edit:"Created",approval:"Approved"},this.masterData={autoIncrementNo:"",deliveryTypeOptions:[],freightTermsOptions:[],modeOfTransportsOptions:[],transporterOptions:[],salesInvoices:[]},this.form=new n.nJ({_id:new n.p4(null),salesInvoice:new n.p4("",[n.kI.required]),salesInvoiceDate:new n.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[n.kI.required]),invoiceValue:new n.p4("",[n.kI.required]),ASNNumber:new n.p4(""),customer:new n.p4("",[n.kI.required]),customerName:new n.p4("",[n.kI.required]),stateOfSupply:new n.p4(""),salesInvoiceDetails:new n.p4([]),billingAddress:new n.p4([]),shippingAddress:new n.p4([]),totalNoOfBoxes:new n.p4("",[n.kI.required]),totalGrossWeight:new n.p4("",[n.kI.required]),ASNStatus:new n.p4("Created"),transporter:new n.p4(""),modeOfTransport:new n.p4(""),frightCharge:new n.p4(""),frightTerms:new n.p4(""),deliveryType:new n.p4(""),docketLR:new n.p4(""),docketLRDate:new n.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),freight:new n.p4("")})}get f(){return this.form.controls}trackByFn(t,s){return s?._id}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,m.B7))return;if(0==this.ASNDetailsArray.length)return void this.toastService.warning("Atleast one row is Required");let t={...this.form.value,...this.dispatchDetails};t.salesInvoiceDetails=this.ASNDetailsArray,t.billingAddress=this.billingAddressArr,t.shippingAddress=this.shippingAddressArr,t._id?this.update(t):(delete t._id,this.create(t))}ngOnInit(){this.getInitialData()}update(t){this.spinner.show(),this.advanceShipmentNotice.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}create(t){this.spinner.show(),this.advanceShipmentNotice.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}reset(){this.form.reset(),this.ASNDetailsArray=[],this.collection=this.ASNDetailsArray.length,this.getInitialData()}getInitialData(){this.spinner.show(),this.advanceShipmentNotice.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.salesInvoiceDate.patchValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.ASNStatus.patchValue("Created"),this.activatedRoute.queryParams.pipe((0,U.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.advanceShipmentNotice.getById(s.id):(0,q.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.ASNDetailsArray=s.salesInvoiceDetails,s.salesInvoiceDate&&(s.salesInvoiceDate=s.salesInvoiceDate.split("T")[0]),s.salesInvoice&&(this.masterData.salesInvoices=[{salesInvoiceNumber:s?.salesInvoice?.salesInvoiceNumber,_id:s.salesInvoice?._id}],s.salesInvoice=s.salesInvoice?._id),this.collection=this.ASNDetailsArray.length,s.ASNStatus=this.statusArr[this.action],this.form.patchValue(s),this.dispatchDetails={transporter:s.transporter,modeOfTransport:s.modeOfTransport,frightCharge:s.frightCharge,frightTerms:s.frightTerms,deliveryType:s.deliveryType,docketLR:s.docketLR,docketLRDate:this.utilityService.getFormatDate(s.docketLRDate,"YYYY-MM-DD"),freight:s.freight},"view"==this.action&&this.form.disable(),"edit"==this.action&&this.form.controls.salesInvoice.disable())})})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value;break;case"EXCEL":default:break;case"PAGE":this.page=t.value}}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.ASNDetailsArray=""===s||""===t?this.ASNDetailsArray:[...this.ASNDetailsArray].sort((i,o)=>{let r="string"==typeof i[t]?i[t].toLowerCase():i[t],u="string"==typeof o[t]?o[t].toLowerCase():o[t];const d=r<u?-1:r>u?1:0;return"asc"===s?d:-d})}openDispatchDetailsModal(){const t=this.modalService.open(P,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});t.componentInstance.dispatchDetails=this.dispatchDetails,t.componentInstance.action=this.action,t.componentInstance.data={transporterArr:this.masterData?.transporterOptions,freightTerms:this.masterData?.freightTermsOptions,modeOfTransport:this.masterData?.modeOfTransportsOptions,deliveryTypeArr:this.masterData?.deliveryTypeOptions,frightCharge:this.form.value.frightCharge,docketLR:this.form.value.docketLR,docketLRDate:this.form.value.docketLRDate,invoiceValue:this.form.value.invoiceValue,freight:this.form.value.freight,deliveryType:this.form.value.deliveryType},t.result.then(s=>{["create","edit"].includes(this.action)&&(this.dispatchDetails=s)},s=>{})}openBoxDetailsModal(t){let s=this.ASNDetailsArray.findIndex(o=>o.SOId==t.SOId&&o.SKU==t.SKU);const i=this.modalService.open(Q,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});i.componentInstance.boxDetails=t?.boxDetails,i.componentInstance.dispatchQty=t?.dispatchQty,i.componentInstance.action=this.action,i.result.then(o=>{if(["create","edit"].includes(this.action)){this.ASNDetailsArray[s].boxDetails=o;let r=[...new Set(this.ASNDetailsArray.map(d=>d.boxDetails.map(y=>y.boxNo)).flat())],u=this.ASNDetailsArray.map(d=>d.boxDetails.map(y=>+y.weight)).flat().reduce((d,y)=>+d+ +y,0);this.ASNDetailsArray[s].boxNos=[...new Set(o.map(d=>d.boxNo))].toString(),this.form.controls.totalNoOfBoxes.setValue(r.length),this.form.controls.totalGrossWeight.setValue(u)}},o=>{})}setSesInvoice(t){this.spinner.show(),this.advanceShipmentNotice.ASNDetailsBySalesInvoiceId(t._id).subscribe(s=>{this.form.patchValue(s),this.ASNDetailsArray=s.salesInvoiceDetails,this.billingAddressArr=s?.company?.companyBillingAddress,this.shippingAddressArr=s?.shippingAddress,this.collection=this.ASNDetailsArray.length,this.spinner.hide()})}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(v.n4),e.Y36(_.gz),e.Y36(h.V),e.Y36(h.kl),e.Y36(k.RJ),e.Y36(A.FF),e.Y36(h.tI),e.Y36(l.Ye))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-asn-form"]],viewQuery:function(s,i){if(1&s&&e.Gf(g.j,5),2&s){let o;e.iGM(o=e.CRH())&&(i.headers=o)}},decls:90,vars:28,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading","ms-2"],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","salesInvoiceNumber","bindValue","_id","formControlName","salesInvoice",3,"items","clearable","change"],["type","date","formControlName","salesInvoiceDate","readonly","",1,"form-control"],["type","text","formControlName","invoiceValue","readonly","",1,"form-control"],["type","text","formControlName","ASNNumber","readonly","",1,"form-control"],["type","text","formControlName","customerName","readonly","",1,"form-control"],["type","text","formControlName","stateOfSupply","readonly","",1,"form-control"],[1,""],[3,"data","dataChange"],[1,"table-responsive","text-wrap",2,"min-height","18.5rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-info"],[1,"text-white"],["sortable","SONumber",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","dispatchQty",3,"sort"],["sortable","batchDate",3,"sort"],["sortable","PONumber",3,"sort"],["sortable","boxNo",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["type","number","formControlName","totalNoOfBoxes","readonly","",1,"form-control"],["type","number","formControlName","totalGrossWeight","readonly","",1,"form-control"],[1,"col-4","d-flex","align-items-end","justify-content-end"],["type","button",1,"btn","bg-primary",3,"click"],[1,"row","d-flex","justify-content-center"],[1,"col-md-auto"],[1,"d-grid","gap-2","d-md-block"],["type","button","class","btn btn-primary px-5 me-4",3,"click",4,"ngIf"],["type","button","class","btn btn-primary px-5",3,"click",4,"ngIf"],["class","text-start",3,"width",4,"ngIf"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"fa","fa-plus-square","fa-lg"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," Invoice No. "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"ng-select",9),e.NdJ("change",function(r){return i.setSesInvoice(r)}),e.qZA()(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Invoice Date "),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",10),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23," Invoice Value "),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e._UZ(26,"input",11),e.qZA()(),e.TgZ(27,"div",5)(28,"div",6)(29,"label",7),e._uU(30," ASN # "),e.TgZ(31,"span",8),e._uU(32,"*"),e.qZA()(),e._UZ(33,"input",12),e.qZA(),e.TgZ(34,"div",6)(35,"label",7),e._uU(36," Customer "),e.TgZ(37,"span",8),e._uU(38,"*"),e.qZA()(),e._UZ(39,"input",13),e.qZA(),e.TgZ(40,"div",6)(41,"label",7),e._uU(42," State of Supply "),e.TgZ(43,"span",8),e._uU(44,"*"),e.qZA()(),e._UZ(45,"input",14),e.qZA()(),e.TgZ(46,"div",15)(47,"app-setting-header",16),e.NdJ("dataChange",function(r){return i.eventHeader(r)}),e.qZA()(),e.TgZ(48,"div",17)(49,"table",18)(50,"thead",19)(51,"tr",20)(52,"th",21),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(53,"#"),e.qZA(),e.TgZ(54,"th",22),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(55),e.ALo(56,"labelTranslate"),e.qZA(),e.TgZ(57,"th",23),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(58,"Dispatch Qty."),e.qZA(),e.TgZ(59,"th",24),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(60,"Batch Date"),e.qZA(),e.TgZ(61,"th",25),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(62,"PO No."),e.qZA(),e.TgZ(63,"th",26),e.NdJ("sort",function(r){return i.onSort(r)}),e._uU(64,"Box No."),e.qZA()()(),e.TgZ(65,"tbody"),e.YNc(66,V,17,11,"tr",27),e.ALo(67,"slice"),e.ALo(68,"searchFi1ter"),e.qZA()()(),e.TgZ(69,"div",5)(70,"div",6)(71,"label",7),e._uU(72," Total No. of Boxes "),e.TgZ(73,"span",8),e._uU(74,"*"),e.qZA()(),e._UZ(75,"input",28),e.qZA(),e.TgZ(76,"div",6)(77,"label",7),e._uU(78," Total Gross weight(kgs) "),e.TgZ(79,"span",8),e._uU(80,"*"),e.qZA()(),e._UZ(81,"input",29),e.qZA(),e.TgZ(82,"div",30)(83,"button",31),e.NdJ("click",function(){return i.openDispatchDetailsModal()}),e._uU(84," Dispatch Details "),e.qZA()()(),e.TgZ(85,"div",32)(86,"div",33)(87,"div",34),e.YNc(88,H,2,0,"button",35),e.YNc(89,z,2,0,"button",36),e.qZA()()()()()()),2&s&&(e.Q6J("formGroup",i.form),e.xp6(5),e.hij("",e.lcZ(6,10,i.action)," ASN "),e.xp6(9),e.Q6J("items",i.masterData.salesInvoices)("clearable",!1),e.xp6(33),e.Q6J("data",e.l5B(21,$,i.page,i.pageSize,i.collection,i.search)),e.xp6(8),e.hij(" ",e.lcZ(56,12,"SKU Description")," "),e.xp6(11),e.Q6J("ngForOf",e.Dn7(67,14,e.xi3(68,18,i.ASNDetailsArray,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn),e.xp6(22),e.Q6J("ngIf",!e.DdM(26,I).includes(i.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(27,W).includes(i.action)))},dependencies:[l.sg,l.O5,b.P,A._L,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,B.w9,g.j,l.OU,l.rS,l.uU,w.G,G.c],encapsulation:2})}return a})();var ee=c(56208);const ie=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:S},{path:"form",component:X,resolve:{accessScreen:c(65876).x}}];let se=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[l.ez,_.Bz.forChild(ie),ee.m]})}return a})()},77055:(D,f,c)=>{c.d(f,{xL:()=>x,Rn:()=>N,Fp:()=>h,Mw:()=>e});var l=c(13107),_=c(28402);let g=["*","*","*","*","*","*","*","*","*","*","*","*"],Z="ShipmentPlanning Report",T=[{header:"Shipment ID",key:"SPNumber",...l.t},{header:"DRN No.",key:"DRNNumber",...l.t},{header:"DRN Date",key:"DRNDateS",...l.t},{header:"Customer Name",key:"customerName",...l.t},{header:"Bill From Location",key:"billFromLocation",...l.t},{header:"Currency",key:"currency",...l.t},{header:"Product Value",key:"SPTotalAmount",...l.t},{header:"Shipment Value",key:"shipmentValue",...l.t},{header:"SPV",key:"SPV",...l.t},{header:"Status",key:"SPStatus",...l.t}];const e=m=>({title:Z,csvData:m,headers:T}),h=m=>(0,_.J)({data:m,headers:T,widths:g,title:Z});let v=["*","*","*","*","*","*","*","*","*","*","*"],b="Advance Shipment Notice",A=[{header:"Invoice #",key:"salesInvoiceNumber",...l.t},{header:"Invoice Date",key:"salesInvoiceDate",...l.t},{header:"Invoice Value",key:"invoiceValue",...l.t},{header:"ASN #",key:"ASNNumber",...l.t},{header:"Customer Name",key:"customerName",...l.t},{header:"State of supply",key:"stateOfSupply",...l.t},{header:"Total Boxes",key:"totalNoOfBoxes",...l.t},{header:"Total Weight(kgs)",key:"totalGrossWeight",...l.t},{header:"Transporter",key:"transporter",...l.t},{header:"Status",key:"ASNStatus",...l.t}];const N=m=>({title:b,csvData:m,headers:A}),x=m=>(0,_.J)({data:m,headers:A,widths:v,title:b})},13107:(D,f,c)=>{c.d(f,{t:()=>l});const l={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,f,c)=>{c.d(f,{J:()=>l});const l=({data:_,headers:g,widths:Z,title:T})=>({tableData:{widths:Z,headerRows:1,body:[g.map(v=>({text:v.header,style:"header"})),..._.map(v=>g.map(b=>({style:"subheader",text:v[b.key]})))]},title:T})},51785:(D,f,c)=>{c.d(f,{B7:()=>_,JT:()=>g}),c(21821);const _=[{message:"Invoice No. is Required",key:"salesInvoice"},{message:"Invoice Date is Required",key:"salesInvoiceDate"},{message:"Invoice Value is Required",key:"invoiceValue"},{message:"Customer Name is Required",key:"customerName"},{message:"Total No. of Boxes is Required",key:"totalNoOfBoxes"},{message:"Total Gross weight(kgs) is Required",key:"totalGrossWeight"}],g=[{message:"DRN No. is Required",key:"DRNId"},{message:"Bill From Location is Required",key:"billFromLocation"},{message:"Payment Terms is Required",key:"paymentTerms"},{message:"Mode Of Transport is Required",key:"modeOfTransport"},{message:"Fright Terms is Required",key:"frightTerms"},{message:"Transporter Name is Required",key:"transporter"},{message:"Destination/Port is Required",key:"destination"}]}}]);