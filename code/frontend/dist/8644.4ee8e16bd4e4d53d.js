"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8644],{58644:(E,y,u)=>{u.r(y),u.d(y,{QuotationOfDskuModule:()=>I});var o=u(96814),p=u(1076),g=u(43818),A=u(25116),v=u(79250),t=u(65879),h=u(98977),C=u(86787),T=u(88059),O=u(37285),J=u(53421);function K(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",20,21)(11,"span",22),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"div",23),t._UZ(19,"button",24),t.TgZ(20,"div",25)(21,"a",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",i,"view"))}),t._UZ(22,"i",27),t._uU(23," View "),t.qZA(),t.TgZ(24,"a",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",i,"edit"))}),t._UZ(25,"i",28),t._uU(26," Edit "),t.qZA(),t.TgZ(27,"a",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",i,"approve"))}),t._UZ(28,"i",29),t._uU(29," Approve "),t.qZA(),t.TgZ(30,"a",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",i,"revision"))}),t._UZ(31,"i",30),t._uU(32," Revision/s "),t.qZA(),t.TgZ(33,"a",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.update(i,"Report Generated"))}),t._UZ(34,"img",31),t._uU(35," Generate Report "),t.qZA(),t.TgZ(36,"a",26),t.NdJ("click",function(){const i=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateToPrint("/#/print/quotation_of_dsku",i,"print"))}),t._UZ(37,"i",32),t._uU(38," Preview Quotation "),t.qZA()()()()()}if(2&s){const n=c.$implicit,r=t.MAs(10),e=t.oxw();t.xp6(2),t.Oqu(null==n?null:n.quotationNo),t.xp6(2),t.Oqu(null==n?null:n.revNo),t.xp6(2),t.Oqu(null==n?null:n.quotationDate),t.xp6(2),t.Oqu(null==n?null:n.customerCategory),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",n.customerName),t.xp6(1),t.hij(" ",n.customerName," "),t.xp6(2),t.Oqu(null==n?null:n.currency),t.xp6(2),t.Oqu(null==n?null:n.status),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.status)),t.Q6J("accessType",e.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.status)),t.Q6J("accessType",e.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Awaiting Approval"===(null==n?null:n.status)),t.Q6J("accessType",e.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Awaiting Approval"===(null==n?null:n.status)),t.Q6J("accessType",e.rolePermissionActions.generateReportAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.approveAction)}}const L=function(s,c,n,r){return{page:s,pageSize:c,collection:n,search:r,type:"list"}};let S=(()=>{var s;class c{constructor(r,e,i,a,_,f,D){this.exportExcelService=r,this.quotationOfDSKUService=e,this.toastService=i,this.spinner=a,this.activatedRoute=_,this.exportToPDFService=f,this.utilityService=D,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=A.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(r,e,i){this.utilityService.navigateToForm({path:r,status:e.status,action:i,id:e._id,activatedRoute:this.activatedRoute})}trackByFn(r,e){return e?._id}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}navigateToPrint(r,e,i){window.open(`${window.location.origin}${r}?id=${e?._id}&action=${i}`,"_blank")}update(r,e){"Approved"===r?.status&&(this.spinner.show(),this.quotationOfDSKUService.update(r._id,{_id:r._id,status:e}).subscribe(i=>{this.toastService.success(i.message),this.getAll(),this.spinner.hide()}))}getAll(r=!1,e=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.quotationOfDSKUService.getAll(i).subscribe(a=>{"EXCEL"==e?this.excelDownload(a.rows):"PDF"==e?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(r){let e=(0,v.i7)(r);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(r){this.exportExcelService.exportExcel((0,v.G4)(r))}onSort({column:r,direction:e}){this.headers.forEach(i=>{i.sortable!==r&&(i.direction="")}),this.column=r,this.direction="asc"==e?1:-1,this.getAll()}}return(s=c).\u0275fac=function(r){return new(r||s)(t.Y36(h.Ol),t.Y36(C.q),t.Y36(h.kl),t.Y36(h.V),t.Y36(p.gz),t.Y36(h.$L),t.Y36(h.tI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-quotation-of-dsku-list"]],viewQuery:function(r,e){if(1&r&&t.Gf(g.j,5),2&r){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:32,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-3",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","quotationNo",3,"sort"],["sortable","revNo",3,"sort"],["sortable","quotationDate",3,"sort"],["sortable","customerCategory",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","text-success"],["aria-hidden","true",1,"fa","fa-registered","fa-lg","me-2","text-primary"],["src","./assets/images/new.svg","width","14",1,"me-3"],["aria-hidden","true",1,"fa","fa-print","fa-lg","me-3","text-primary"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Quotation Of D-SKU Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return e.navigateTo("../form",{},"create")}),t._uU(7," Create Quotation Of D-SKU "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return e.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(15,"Qtn. No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(17,"Rev No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(19,"Qtn. Date"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(21,"Customer/Prospect Category"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(23,"Customer/Prospect Name"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(25,"Ccy"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(27,"Status"),t.qZA(),t.TgZ(28,"th",18),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(29,"Action"),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,K,39,25,"tr",19),t.qZA()()()()),2&r&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,L,e.page,e.pageSize,e.collection,e.search)),t.xp6(21),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[o.sg,T.P,O._L,g.j,J.J],encapsulation:2}),c})();var d=u(60095),V=u(21631),Y=u(22096);const G=[{message:"Customer Category is Required",key:"customerCategory"},{message:"Quotation No. is Required",key:"quotationNo"},{message:"Customer/Prospect Name  is Required",key:"referenceModel"}];var k=u(77609),b=u(16897),j=u(50363),$=u(95346),B=u(83344),Z=u(59103);function U(s,c){if(1&s&&(t.TgZ(0,"option",53),t._uU(1),t.qZA()),2&s){const n=c.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.label," ")}}function H(s,c){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.srNo," ")}}const N=function(){return{standalone:!0}};function z(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"input",67),t.NdJ("ngModelChange",function(e){t.CHM(n);const i=t.oxw().$implicit;return t.KtG(i.srNo=e)}),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.Q6J("ngModel",n.srNo)("ngModelOptions",t.DdM(2,N))}}function q(s,c){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.MOQ," ")}}function Q(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"input",68),t.NdJ("ngModelChange",function(e){t.CHM(n);const i=t.oxw().$implicit;return t.KtG(i.MOQ=e)}),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.Q6J("ngModel",n.MOQ)("ngModelOptions",t.DdM(2,N))}}function X(s,c){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.QPrice," ")}}function W(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"input",69),t.NdJ("ngModelChange",function(e){t.CHM(n);const i=t.oxw().$implicit;return t.KtG(i.QPrice=e)}),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.Q6J("ngModel",n.QPrice)("ngModelOptions",t.DdM(2,N))}}function tt(s,c){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==n?null:n.developmentCost," ")}}function x(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"input",70),t.NdJ("ngModelChange",function(e){t.CHM(n);const i=t.oxw().$implicit;return t.KtG(i.developmentCost=e)}),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.Q6J("ngModel",n.developmentCost)("ngModelOptions",t.DdM(2,N))}}const m=function(){return["approve","view","generate"]};function et(s,c){if(1&s&&(t.TgZ(0,"tr")(1,"td")(2,"div",54),t.YNc(3,H,2,1,"span",55),t.YNc(4,z,1,3,"input",56),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",57,58)(9,"span",59),t._uU(10),t.qZA()(),t.TgZ(11,"td",57,60)(13,"span",59),t._uU(14),t.qZA()(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"UOMUnitsMaster"),t.qZA(),t.TgZ(20,"td")(21,"div",54),t.YNc(22,q,2,1,"span",55),t.YNc(23,Q,1,3,"input",61),t.qZA()(),t.TgZ(24,"td",4)(25,"div",62)(26,"span",63),t._uU(27),t.ALo(28,"companyCurrency"),t._UZ(29,"div",64),t.qZA(),t.YNc(30,X,2,1,"span",55),t.YNc(31,W,1,3,"input",65),t.qZA()(),t.TgZ(32,"td",4)(33,"div",62)(34,"span",63),t._uU(35),t.ALo(36,"companyCurrency"),t._UZ(37,"div",64),t.qZA(),t.YNc(38,tt,2,1,"span",55),t.YNc(39,x,1,3,"input",66),t.qZA()()()),2&s){const n=c.$implicit,r=t.MAs(8),e=t.MAs(12),i=t.oxw();t.xp6(3),t.Q6J("ngIf",t.DdM(29,m).includes(i.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(30,m).includes(i.action)),t.xp6(2),t.Oqu(null==n?null:n.DSKUNo),t.xp6(1),t.Udp("width",r.clientWidth),t.xp6(2),t.Q6J("positionTarget",r)("ngbTooltip",n.DSKUName),t.xp6(1),t.hij(" ",null==n?null:n.DSKUName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",n.DSKUDescription),t.xp6(1),t.hij(" ",null==n?null:n.DSKUDescription," "),t.xp6(2),t.Oqu(null==n?null:n.partNo),t.xp6(2),t.Oqu(t.lcZ(19,23,null==n?null:n.UOM)),t.xp6(4),t.Q6J("ngIf",t.DdM(31,m).includes(i.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(32,m).includes(i.action)),t.xp6(4),t.hij(" ",t.lcZ(28,25,"INR")," "),t.xp6(3),t.Q6J("ngIf",t.DdM(33,m).includes(i.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(34,m).includes(i.action)),t.xp6(4),t.hij(" ",t.lcZ(36,27,"INR")," "),t.xp6(3),t.Q6J("ngIf",t.DdM(35,m).includes(i.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(36,m).includes(i.action))}}function ot(s,c){1&s&&t._UZ(0,"hr",71)}function rt(s,c){1&s&&(t.TgZ(0,"div",54)(1,"div",72),t._uU(2," Exchange Rate "),t._UZ(3,"i",73),t.TgZ(4,"button",74),t._uU(5),t.ALo(6,"companyCurrency"),t.qZA()(),t._UZ(7,"input",75),t.qZA()),2&s&&(t.xp6(5),t.hij(" ",t.lcZ(6,1,"INR")," "))}function w(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"div",76)(1,"button",77),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",78),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",79),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.preview())}),t._uU(6,"Preview"),t.qZA(),t.TgZ(7,"button",80),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(8," Save "),t.qZA()()}if(2&s){const n=t.oxw();t.xp6(3),t.Q6J("disabled",!n.isESCPreview),t.xp6(4),t.Q6J("disabled",!n.isPreview)}}function F(s,c){if(1&s){const n=t.EpF();t.TgZ(0,"div",81)(1,"button",82),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Approve"),t.qZA()()}}const nt=function(s,c,n,r){return{page:s,pageSize:c,collection:n,search:r,excelDisplay:"none"}},it=function(){return["view"]},at=function(){return["Exports \u2013 OEM","Exports \u2013 Dealer"]},R=function(){return["create","edit","revision"]};let P=(()=>{var s;class c{trackByFn(r,e){return e?._id}constructor(r,e,i,a,_,f,D,M,lt,ut){this.router=r,this.activatedRoute=e,this.spinner=i,this.toastService=a,this.quotationOfDSKUService=_,this.validationService=f,this.utilityService=D,this.storageService=M,this.location=lt,this.modalService=ut,this.page=1,this.pageSize=6,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.quotationDetailsArray=[],this.customerOptions=[],this.displayName={},this.submitted=!1,this.isPreview=!1,this.isConditionPreview=!1,this.action="create",this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",revision:"Awaiting Approval"},this.ESCPreviewArr=[],this.isESCPreview=!1,this.selectedCustomerDetails={},this.masterData={autoIncrementNo:"",salesCategoryOptions:[]},this.form=new d.nJ({_id:new d.p4(null),quotationNo:new d.p4(null),revNo:new d.p4(0),quotationDate:new d.p4(null,[d.kI.required]),customerCategory:new d.p4(null,[d.kI.required]),exchangeRate:new d.p4(0),customerName:new d.p4(null),reference:new d.p4(""),referenceModel:new d.p4("",[d.kI.required]),RFQReference:new d.p4(null),currency:new d.p4(null),quotationDetails:new d.p4([]),status:new d.p4("Awaiting Approval")})}ngOnInit(){this.displayName=this.storageService.get("menuTitle")?.title,this.getInitialData()}get f(){return this.form.controls}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.page=1,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=r.value}}submit(){if(this.submitted=!0,this.isPreview=!1,this.form.enable(),this.validationService.checkErrors(this.form,G))return;let r=this.form.value;r.quotationDetails=this.quotationDetailsArray,r._id?this.update(r):(delete r._id,this.create(r))}update(r){this.spinner.show(),this.quotationOfDSKUService.update(r._id,r).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.location.back()})}create(r){this.spinner.show(),this.quotationOfDSKUService.create(r).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.location.back()})}reset(){this.form.reset(),this.quotationDetailsArray=[],this.customerOptions=[],this.collection=this.quotationDetailsArray.length,this.getInitialData()}getInitialData(){this.spinner.show(),this.quotationOfDSKUService.getAllMasterData({}).subscribe(r=>{this.masterData=r,this.form.controls.quotationNo.setValue(this.masterData?.autoIncrementNo),this.form.controls.revNo.setValue(0),this.f.quotationDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue(this.statusArr[this.action]),this.activatedRoute.queryParams.pipe((0,V.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.quotationOfDSKUService.getById(e.id):(0,Y.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.quotationOfDSKUService.getAllProspectsForQuotationDSKUByCategory({category:e.customerCategory}).subscribe(i=>{this.customerOptions=i}),e.quotationDetails&&this.quotationOfDSKUService.getAllDSKUForQuotationDSKUByCustomerId({customerId:e.reference}).subscribe(i=>{this.quotationDetailsArray=e.quotationDetails,e.quotationDetails=e.quotationDetails;let a=i;for(const _ of e.quotationDetails)a=a.filter(f=>f.SKUNo!=_.SKUNo),this.ESCPreviewArr=[...e.quotationDetails,...a];this.collection=this.quotationDetailsArray.length}),e.quotationDate&&(e.quotationDate=this.utilityService.getFormatDate(e?.quotationDate,"YYYY-MM-DD")),"revision"==this.action&&(e.revNo=e.revNo+1),e.status=this.statusArr[this.action],this.form.patchValue(e),"create"!=this.action&&(this.isESCPreview=!0,this.isConditionPreview=!0,this.isPreview=!0,this.form.disable()),"edit"==this.action&&this.form.controls.exchangeRate.enable())})})}customerValueChange(r){console.log("ele",r),this.form.controls.referenceModel.setValue(r?.referenceModel),this.f.currency.setValue(r?.currency),this.f.customerName.setValue(r?.customerName),this.quotationOfDSKUService.getAllDSKUForQuotationDSKUByCustomerId({customerId:r.reference}).subscribe(e=>{this.quotationDetailsArray=e,this.collection=this.quotationDetailsArray.length})}getCustomers(r){this.selectedCustomerDetails={},this.f.reference.setValue(null),this.f.referenceModel.setValue(null),this.f.currency.setValue(null),this.f.customerName.setValue(null),this.customerOptions=[],this.quotationDetailsArray=[],this.spinner.show(),this.quotationOfDSKUService.getAllProspectsForQuotationDSKUByCategory({category:r.target.value}).subscribe(e=>{this.customerOptions=e,this.spinner.hide()})}ESCPreview(){this.search="",this.isConditionPreview=!1,this.isPreview=!1,this.quotationDetailsArray=this.ESCPreviewArr,this.collection=this.quotationDetailsArray.length}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=this.quotationDetailsArray,this.quotationDetailsArray=this.quotationDetailsArray.filter(r=>r.srNo>0),this.quotationDetailsArray.length?this.isPreview=!0:(this.toastService.warning("At least One Row is Required"),this.isPreview=!1),this.collection=this.quotationDetailsArray.length}openCustomersDetailsModal(){const r=this.modalService.open(k.e7,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});r.componentInstance.action=this.action,r.componentInstance.selectedCustomerDetails=this.selectedCustomerDetails,r.componentInstance.customerOptions=this.customerOptions,r.componentInstance.customer=this.form.controls.reference.value,r.result.then(e=>{e&&(console.log("success",e),this.selectedCustomerDetails=e?.selectedCustomerDetails,this.form.controls.reference.setValue(e?.selectedCustomerDetails?._id),this.customerValueChange(this.selectedCustomerDetails))},e=>{})}onSort({column:r,direction:e}){this.headers.forEach(i=>{i.sortable!==r&&(i.direction="")}),this.quotationDetailsArray=""===e||""===r?this.quotationDetailsArray:[...this.quotationDetailsArray].sort((i,a)=>{let _="string"==typeof i[r]?i[r].toLowerCase():i[r],f="string"==typeof a[r]?a[r].toLowerCase():a[r];const D=_<f?-1:_>f?1:0;return"asc"===e?D:-D})}}return(s=c).\u0275fac=function(r){return new(r||s)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(h.V),t.Y36(h.kl),t.Y36(C.q),t.Y36(b.RJ),t.Y36(h.tI),t.Y36(h.V1),t.Y36(o.Ye),t.Y36(O.FF))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-quotation-of-dsku-form"]],viewQuery:function(r,e){if(1&r&&t.Gf(g.j,5),2&r){let i;t.iGM(i=t.CRH())&&(e.headers=i)}},decls:90,vars:31,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mb-2"],[1,"col-4"],[1,"row"],[1,"col-7","pe-2"],[1,"form-label","mb-0"],[1,"text-danger"],[1,"d-flex"],["type","text","formControlName","quotationNo","readonly","",1,"form-control","border-end-0","pe-0"],[1,"input-group-text","border-start-0","combine-INR","border","border-1"],[1,"vr","me-3"],[1,"col-5"],["type","date","formControlName","quotationDate",1,"form-control"],[1,"col-8"],[1,"col-4","px-2"],["formControlName","customerCategory",1,"form-select",3,"change"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"col-4","pe-3"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","customerName","bindValue","reference","formControlName","reference",3,"items","clearable","change"],["id","basic-addon1",1,"input-group-text","bg-primary","pointer","col-auto","fs-4",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white"],[1,"col-4","ps-5"],["type","text","formControlName","RFQReference",1,"form-control"],[1,"row","line-border","mt-4"],[3,"data","dataChange"],[1,"table-responsive","mt-0","text-wrap",2,"min-height","22.5rem"],[1,"table","table-bordered","mt-0","table-sm"],[1,"bg-info"],[1,"text-white"],["sortable","srNo",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","partNo",3,"sort"],["sortable","UOM",3,"sort"],["sortable","MOQ",3,"sort"],["sortable","QPrice",3,"sort"],["sortable","developmentCost",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","row line-border",4,"ngIf"],[1,"row","mb-3","align-items-center","mt-3"],["class","d-flex justify-content-center",4,"ngIf"],[1,"col-md-auto","ms-auto","mb-1"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","content-end",4,"ngIf"],[3,"value"],[1,"d-flex","justify-content-center"],[4,"ngIf"],["type","number","class","form-control text-center form-control-sm",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],[1,"text-start"],["DSKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["DSKUDescription",""],["type","number","class","form-control text-center form-control-size-lg",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],[1,"d-flex","justify-content-start","align-items-center"],[1,"input-group-text","text-secondary","combine-INR","border-0"],[1,"vr","ms-3"],["class","form-control px-2 form-control-sm","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["class","form-control px-2 form-control-size-lg","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["type","number",1,"form-control","text-center","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","text-center","form-control-size-lg",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","px-2","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","px-2","form-control-size-lg",3,"ngModel","ngModelOptions","ngModelChange"],[1,"row","line-border"],[1,"col-form-label","text-nowrap","pe-1","pt-0"],[1,"fa","fa-caret-right","fs-4","mx-2"],["type","button",1,"btn","btn-info","py-1","ms-2"],["type","number","formControlName","exchangeRate",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"content-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),t._uU(13," Quotation No. "),t.TgZ(14,"span",11),t._uU(15,"*"),t.qZA()(),t.TgZ(16,"div",12),t._UZ(17,"input",13),t.TgZ(18,"span",14),t._UZ(19,"div",15),t._uU(20),t.qZA()()(),t.TgZ(21,"div",16)(22,"label",10),t._uU(23," Quotation Date "),t.TgZ(24,"span",11),t._uU(25,"*"),t.qZA()(),t._UZ(26,"input",17),t.qZA()()(),t.TgZ(27,"div",18)(28,"div",8)(29,"div",19)(30,"label",10),t._uU(31," Customer/Prospect Category "),t.TgZ(32,"span",11),t._uU(33,"*"),t.qZA()(),t.TgZ(34,"select",20),t.NdJ("change",function(a){return e.getCustomers(a)}),t.TgZ(35,"option",21),t._uU(36,"Select"),t.qZA(),t.YNc(37,U,2,2,"option",22),t.qZA()(),t.TgZ(38,"div",23)(39,"label",10),t._uU(40," Customer/Prospect Name "),t.TgZ(41,"span",11),t._uU(42,"*"),t.qZA()(),t.TgZ(43,"div",24)(44,"div",25)(45,"ng-select",26),t.NdJ("change",function(a){return e.customerValueChange(a)}),t.qZA()(),t.TgZ(46,"div",27),t.NdJ("click",function(){return e.openCustomersDetailsModal()}),t._UZ(47,"i",28),t.qZA()()(),t.TgZ(48,"div",29)(49,"label",10),t._uU(50," RFQ Reference "),t.TgZ(51,"span",11),t._uU(52,"*"),t.qZA()(),t._UZ(53,"input",30),t.qZA()()()()(),t._UZ(54,"hr",31),t.TgZ(55,"div",4)(56,"app-setting-header",32),t.NdJ("dataChange",function(a){return e.eventHeader(a)}),t.qZA()(),t.TgZ(57,"div",33)(58,"table",34)(59,"thead",35)(60,"tr",36)(61,"th",37),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(62,"Sr.No."),t.qZA(),t.TgZ(63,"th",38),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(64,"D-SKU No."),t.qZA(),t.TgZ(65,"th",39),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(66,"D-SKU Part Name"),t.qZA(),t.TgZ(67,"th",40),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(68,"D-SKU Description"),t.qZA(),t.TgZ(69,"th",41),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(70,"Part No.(CPIN)"),t.qZA(),t.TgZ(71,"th",42),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(72,"UoM"),t.qZA(),t.TgZ(73,"th",43),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(74,"MOQ"),t.qZA(),t.TgZ(75,"th",44),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(76,"Q-Price"),t.qZA(),t.TgZ(77,"th",45),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(78,"Development Cost"),t.qZA()()(),t.TgZ(79,"tbody"),t.YNc(80,et,40,37,"tr",46),t.ALo(81,"slice"),t.ALo(82,"searchFi1ter"),t.qZA()()(),t.YNc(83,ot,1,0,"hr",47),t.TgZ(84,"div",48)(85,"div",7),t.YNc(86,rt,8,3,"div",49),t.qZA(),t.TgZ(87,"div",50),t.YNc(88,w,9,2,"div",51),t.YNc(89,F,3,0,"div",52),t.qZA()()()()),2&r&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij("Quotation Of D-SKU (",t.lcZ(6,14,e.action),")"),t.xp6(15),t.hij(" Rev ",e.form.value.revNo," "),t.xp6(15),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",null==e.masterData?null:e.masterData.salesCategoryOptions),t.xp6(8),t.Q6J("items",e.customerOptions)("clearable",!1),t.xp6(11),t.Q6J("data",t.l5B(23,nt,e.page,e.pageSize,e.collection,e.search)),t.xp6(24),t.Q6J("ngForOf",t.Dn7(81,16,t.xi3(82,20,e.quotationDetailsArray,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(3),t.Q6J("ngIf",!t.DdM(28,it).includes(e.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(29,at).includes(e.form.controls.customerCategory.value)),t.xp6(2),t.Q6J("ngIf",t.DdM(30,R).includes(e.action)),t.xp6(1),t.Q6J("ngIf","approve"==e.action))},dependencies:[o.sg,o.O5,T.P,O._L,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.sg,d.u,d.On,j.w9,g.j,o.OU,o.rS,$.G,B.f,Z.S],encapsulation:2}),c})();var ct=u(19964),dt=u(56208);const st=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:S},{path:"form",component:P,resolve:{accessScreen:ct.xr}}];let I=(()=>{var s;class c{}return(s=c).\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[o.ez,p.Bz.forChild(st),dt.m]}),c})()},13107:(E,y,u)=>{u.d(y,{t:()=>o});const o={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(E,y,u)=>{u.d(y,{J:()=>o});const o=({data:p,headers:g,widths:A,title:v})=>({tableData:{widths:A,headerRows:1,body:[g.map(C=>({text:C.header,style:"header"})),...p.map(C=>g.map(T=>({style:"subheader",text:C[T.key]})))]},title:v})},79250:(E,y,u)=>{u.d(y,{p3:()=>h,U$:()=>t,S$:()=>Y,B6:()=>V,mx:()=>ot,mI:()=>et,sb:()=>N,PW:()=>H,Kr:()=>K,n8:()=>J,TP:()=>W,_y:()=>X,i7:()=>ut,G4:()=>lt,EY:()=>ft,X1:()=>_t,zF:()=>n,D$:()=>c,ti:()=>_,_g:()=>a,Rb:()=>it,xi:()=>nt,zm:()=>$,ji:()=>j});var o=u(13107),p=u(28402);let g=["*","*","*","*","*","*","*","*","*","*","*"],A="Book Sales Order",v=[{header:"SO No.",key:"SONumber",...o.t},{header:"SO Date",key:"SODateS",...o.t},{header:"Bill From Location",key:"billFromLocation",...o.t},{header:"Customer Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"PO Date.",key:"PODate",...o.t},{header:"Currency",key:"currency",...o.t},{header:"SO Type",key:"SOType",...o.t},{header:"SO Value",key:"SOTotalAmount",...o.t},{header:"Status",key:"SOStatus",...o.t}];const t=l=>({title:A,csvData:l,headers:v}),h=l=>(0,p.J)({data:l,headers:v,widths:g,title:A});let C=["*","*","*","*","*","*","*"],T="DispatchRequestNote Report",O=[{header:"DRN No.",key:"DRNNumber",...o.t},{header:"DRN Date",key:"DRNDateS",...o.t},{header:"Customer Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"DRN Status",key:"DRNStatus",...o.t}];const J=l=>({title:T,csvData:l,headers:O}),K=l=>(0,p.J)({data:l,headers:O,widths:C,title:T});let L=["*","*","*","*","*","*","*","*","*","*"],S="Cancel SO",d=[{header:"SO No.",key:"SONumber",...o.t},{header:"SO Date",key:"SODateS",...o.t},{header:"PO No.",key:"PONumber",...o.t},{header:"Sales Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"Currency",key:"currency",...o.t},{header:"SO Value",key:"SOTotalAmount",...o.t},{header:"Status",key:"SOStatus",...o.t}];const V=l=>({title:S,csvData:l,headers:d}),Y=l=>(0,p.J)({data:l,headers:d,widths:L,title:S});let G=["*","*","*","*","*","*","*","*","*","*","*","*"],k="Short SO Closing",b=[{header:"SO Date",key:"SODate",...o.t},{header:"SO #",key:"SONumber",...o.t},{header:"Line #",key:"SOLineNumber",...o.t},{header:"SKU #",key:"SKUNo",...o.t},{header:"SKU Name",key:"SKUName",...o.t},{header:"SKU Description",key:"SKUDescription",...o.t},{header:"Bal Qty",key:"balancedQty",...o.t},{header:"Customer Name",key:"customer",...o.t}];const j=l=>({title:k,csvData:l,headers:b}),$=l=>(0,p.J)({data:l,headers:b,widths:G,title:k});let B=["*","*","*","*","*","*","*","*","*"],Z="Direct Tax Invoice",U=[{header:"Invoice #",key:"DTINumber",...o.t},{header:"Invoice Date",key:"salesInvoiceDateS",...o.t},{header:"Customer Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"Product Value",key:"DTITotalAmount",...o.t},{header:"Invoice Value",key:"DTIValue",...o.t},{header:"Status",key:"DTIStatus",...o.t}];const H=l=>({title:Z,csvData:l,headers:U}),N=l=>(0,p.J)({data:l,headers:U,widths:B,title:Z});let z=["*","*","*","*","*","*","*","*","*","*","*","*","*"],q="Proforma Invoice",Q=[{header:"PI No.",key:"PINumber",...o.t},{header:"PI Date",key:"PIDateS",...o.t},{header:"Bill From Location",key:"billFromLocation",...o.t},{header:"Customer Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"PO No.",key:"PONumber",...o.t},{header:"PO Date",key:"PODate",...o.t},{header:"Currency",key:"currency",...o.t},{header:"PI Validity Date",key:"PIValidityDate",...o.t},{header:"PI Amount",key:"PITotalAmount",...o.t},{header:"PI Status",key:"PIStatus",...o.t}];const X=l=>({title:q,csvData:l,headers:Q}),W=l=>(0,p.J)({data:l,headers:Q,widths:z,title:q});let tt=["*","*","*","*","*","*","*","*","*","*"],x="Credit Note",m=[{header:"CN No.",key:"CNNumber",...o.t},{header:"CN Date",key:"CNDateS",...o.t},{header:"Customer Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"Debit Note No.",key:"invoiceNo",...o.t},{header:"Invoice Date",key:"invoiceDateS",...o.t},{header:"Currency",key:"currency",...o.t},{header:"Net CN Value",key:"netCNValue",...o.t},{header:"Reason For CN",key:"reasonForCN",...o.t},{header:"CN Status.",key:"CNStatus",...o.t}];const et=l=>({title:x,csvData:l,headers:m}),ot=l=>(0,p.J)({data:l,headers:m,widths:tt,title:x});let rt=["*","*","*","*","*","*","*","*","*","*","*","*"],w="ServiceInvoice Report",F=[{header:"Invoice #",key:"serviceInvoiceNumber",...o.t},{header:"Invoice Date",key:"serviceInvoiceDate",...o.t},{header:"Customer Category",key:"customerCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"PO No.",key:"PONo",...o.t},{header:"PO Date",key:"PODate",...o.t},{header:"Currency",key:"currency",...o.t},{header:"Bill From Location",key:"billFromLocation",...o.t},{header:"Total Value",key:"totalValue",...o.t},{header:"Remarks",key:"remarks",...o.t},{header:"Status",key:"status",...o.t}];const nt=l=>({title:w,csvData:l,headers:F}),it=l=>(0,p.J)({data:l,headers:F,widths:rt,title:w});let st=["*","*","*","*","*","*","*","*"],I="Sales Forecast",s=[{header:"FC No.",key:"FCNo",...o.t},{header:"FC Date",key:"FCDate",...o.t},{header:"Customer Category",key:"customerCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"Currency",key:"currency",...o.t},{header:"FC Type",key:"FCType",...o.t},{header:"FC Value",key:"netFCValue",...o.t},{header:"Status",key:"status",...o.t}];const c=l=>({title:I,csvData:l,headers:s}),n=l=>(0,p.J)({data:l,headers:s,widths:st,title:I});let r=["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],e="Debit Note",i=[{header:"DN No.",key:"DNNumber",...o.t},{header:"DN Date",key:"DNDateS",...o.t},{header:"Sale Category",key:"salesCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"Invoice No.",key:"invoiceNo",...o.t},{header:"Invoice Date",key:"invoiceDateS",...o.t},{header:"Currency",key:"currency",...o.t},{header:"DN Net Value",key:"netDNValue",...o.t},{header:"Reason For Debit Note",key:"reasonForDN",...o.t},{header:"DN Status",key:"DNStatus",...o.t}];const a=l=>({title:e,csvData:l,headers:i}),_=l=>(0,p.J)({data:l,headers:i,widths:r,title:e});let f=["*","*","*","*","*","*","*"],D="Quotation Of D-SKU",M=[{header:"Qtn. No.",key:"quotationNo",...o.t},{header:"Rev No.",key:"revNo",...o.t},{header:"Qtn. Date",key:"quotationDate",...o.t},{header:"Customer/Prospect Category",key:"customerCategory",...o.t},{header:"Customer/Prospect Name",key:"customerName",...o.t},{header:"Ccy",key:"currency",...o.t},{header:"Status",key:"status",...o.t}];const lt=l=>({title:D,csvData:l,headers:M}),ut=l=>(0,p.J)({data:l,headers:M,widths:f,title:D});let mt=["*","*","*","*","*","*","*"],pt="Quotation Of SKU",ht=[{header:"Qtn. No.",key:"quotationNo",...o.t},{header:"Rev No.",key:"revNo",...o.t},{header:"Qtn. Date",key:"quotationDate",...o.t},{header:"Customer Category",key:"customerCategory",...o.t},{header:"Customer Name",key:"customerName",...o.t},{header:"Ccy",key:"currency",...o.t},{header:"Status",key:"status",...o.t}];const _t=l=>({title:pt,csvData:l,headers:ht}),ft=l=>(0,p.J)({data:l,headers:ht,widths:mt,title:pt})}}]);