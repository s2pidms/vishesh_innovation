"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6973],{47376:(y,g,p)=>{p.r(g),p.d(g,{DebitNoteModule:()=>lt});var c=p(96814),b=p(1076),d=p(43818),T=p(25116),v=p(22460),t=p(65879),D=p(74659),u=p(98977),N=p(88059),m=p(37285),x=p(53421);function S(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",20,21)(9,"span",22),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"div",23),t._UZ(19,"button",24),t.TgZ(20,"div",25)(21,"a",26),t.NdJ("click",function(){const o=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"view"))}),t._UZ(22,"i",27),t._uU(23," View "),t.qZA(),t.TgZ(24,"a",26),t.NdJ("click",function(){const o=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"edit"))}),t._UZ(25,"i",28),t._uU(26," Edit "),t.qZA(),t.TgZ(27,"a",26),t.NdJ("click",function(){const o=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"approve"))}),t._UZ(28,"i",29),t._uU(29," Approve "),t.qZA(),t.TgZ(30,"a",26),t.NdJ("click",function(){const o=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"reject"))}),t._UZ(31,"i",30),t._uU(32," Reject "),t.qZA(),t.TgZ(33,"a",26),t.NdJ("click",function(){const o=t.CHM(n).$implicit,r=t.oxw();return t.KtG(r.update(o,"Report Generated"))}),t._UZ(34,"img",31),t._uU(35," Generate Report "),t.qZA()()()()()}if(2&s){const n=a.$implicit,i=t.MAs(8),e=t.oxw();t.xp6(2),t.Oqu(null==n?null:n.DNNumber),t.xp6(2),t.Oqu(null==n?null:n.DNDateS),t.xp6(2),t.Oqu(null==n?null:n.purchaseCategory),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",n.supplierName),t.xp6(1),t.hij(" ",n.supplierName," "),t.xp6(2),t.Oqu(null==n?null:n.currency),t.xp6(2),t.Oqu(null==n?null:n.netDNValue),t.xp6(2),t.Oqu(null==n?null:n.DNStatus),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.DNStatus)||"Rejected"===(null==n?null:n.DNStatus)),t.Q6J("accessType",e.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.DNStatus)||"Rejected"===(null==n?null:n.DNStatus)),t.Q6J("accessType",e.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Approved"===(null==n?null:n.DNStatus)||"Rejected"===(null==n?null:n.DNStatus)),t.Q6J("accessType",e.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Awaiting Approval"===(null==n?null:n.DNStatus)||"Rejected"===(null==n?null:n.DNStatus)),t.Q6J("accessType",e.rolePermissionActions.generateReportAction)}}const U=function(s,a,n,i){return{page:s,pageSize:a,collection:n,search:i,type:"list"}};let w=(()=>{var s;class a{constructor(i,e,o,r,h,_,f){this.debitNoteService=i,this.activatedRoute=e,this.toastService=o,this.spinner=r,this.exportExcelService=h,this.exportToPDFService=_,this.utilityService=f,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=T.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(i,e,o){this.utilityService.navigateToForm({path:i,status:e.DNStatus,action:o,id:e._id,activatedRoute:this.activatedRoute})}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=i.value,this.getAll()}}getAll(i=!1,e=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.debitNoteService.getAll(o).subscribe(r=>{"EXCEL"==e?this.excelDownload(r.rows):"PDF"==e?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}trackByFn(i,e){return e?._id}update(i,e){"Approved"===i?.DNStatus&&(i.DNStatus=e,this.spinner.show(),this.debitNoteService.update(i._id,i).subscribe(o=>{this.toastService.success(o.message),this.getAll(),this.spinner.hide()}))}excelDownload(i){this.exportExcelService.exportExcel((0,v.RM)(i))}pdfDownload(i){let e=(0,v.Y1)(i);this.exportToPDFService.generatePdf(e.tableData,e.title)}onSort({column:i,direction:e}){this.headers.forEach(o=>{o.sortable!==i&&(o.direction="")}),this.column=i,this.direction="asc"==e?1:-1,this.getAll()}}return(s=a).\u0275fac=function(i){return new(i||s)(t.Y36(D.pJ),t.Y36(b.gz),t.Y36(u.kl),t.Y36(u.V),t.Y36(u.Ol),t.Y36(u.$L),t.Y36(u.tI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-debit-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(d.j,5),2&i){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},decls:32,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","DNNumber",3,"sort"],["sortable","DNDateS",3,"sort"],["sortable","purchaseCategory",3,"sort"],["sortable","supplierName",1,"text-start",3,"sort"],["sortable","currency",3,"sort"],["sortable","netDNValue",3,"sort"],["sortable","DNStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["supplierName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","text-success"],["aria-hidden","true",1,"fa","fa-close","fa-lg","text-primary"],["src","./assets/images/new.svg","width","14",1,"me-3"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Debit Note Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return e.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Generate Debit Note "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return e.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(15,"DN No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(17,"DN Date"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(19,"Purchase Category"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(21,"Supplier Name"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(23,"Currency"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(25,"DN Net Value"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(27,"DN Status"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Action"),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,S,36,24,"tr",19),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,U,e.page,e.pageSize,e.collection,e.search)),t.xp6(21),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[c.sg,N.P,m._L,d.j,x.J],encapsulation:2}),a})();var l=p(60095),F=p(21631),M=p(22096),A=p(77609),q=p(4188),J=p(16897),k=p(50363),I=p(95346),O=p(59103);function Y(s,a){if(1&s&&(t.TgZ(0,"option",78),t._uU(1),t.qZA()),2&s){const n=a.$implicit;t.Q6J("value",n.value),t.xp6(1),t.hij(" ",n.label," ")}}function Q(s,a){1&s&&t._UZ(0,"img",83)}function L(s,a){1&s&&t._UZ(0,"img",84)}function j(s,a){if(1&s&&(t.TgZ(0,"li",86)(1,"span",87),t._uU(2),t.qZA()()),2&s){const n=t.oxw(),i=n.$implicit,e=n.pages;t.xp6(2),t.AsE(" Page ",i," of ",e[e.length-1]," ")}}function R(s,a){1&s&&t.YNc(0,j,3,2,"li",85),2&s&&t.Q6J("ngIf",a.pages.length>0)}function V(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"ngb-pagination",79),t.NdJ("pageChange",function(e){t.CHM(n);const o=t.oxw();return t.KtG(o.page=e)}),t.YNc(1,Q,1,0,"ng-template",80),t.YNc(2,L,1,0,"ng-template",81),t.YNc(3,R,1,1,"ng-template",82),t.qZA()}if(2&s){const n=t.oxw();t.Q6J("collectionSize",n.filterItems.length)("page",n.page)("pageSize",n.pageSize)("boundaryLinks",!1)}}function P(s,a){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.returnQty,"1.2-2")," ")}}const Z=function(){return{standalone:!0}};function E(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"input",93),t.NdJ("ngModelChange",function(e){t.CHM(n);const o=t.oxw().$implicit;return t.KtG(o.returnQty=e)})("input",function(){t.CHM(n);const e=t.oxw().$implicit,o=t.oxw();return t.KtG(o.lineValueRate(e.DNLineNumber,e))}),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.Q6J("ngModel",n.returnQty)("ngModelOptions",t.DdM(2,Z))}}function G(s,a){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.purchaseRate,"1.2-2")," ")}}function z(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"input",93),t.NdJ("ngModelChange",function(e){t.CHM(n);const o=t.oxw().$implicit;return t.KtG(o.purchaseRate=e)})("input",function(){t.CHM(n);const e=t.oxw().$implicit,o=t.oxw();return t.KtG(o.lineValueRate(e.DNLineNumber,e))}),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.Q6J("ngModel",n.purchaseRate)("ngModelOptions",t.DdM(2,Z))}}const C=function(){return["approve","reject","view","generate"]};function H(s,a){if(1&s&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",88,89)(7,"span",90),t._uU(8),t.qZA()(),t.TgZ(9,"td",88,91)(11,"span",90),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"UOMUnitsMaster"),t.qZA(),t.TgZ(18,"td")(19,"div",53),t.YNc(20,P,3,4,"span",75),t.YNc(21,E,1,3,"input",92),t.qZA()(),t.TgZ(22,"td")(23,"div",53),t.YNc(24,G,3,4,"span",75),t.YNc(25,z,1,3,"input",92),t.qZA()(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"number"),t.qZA()()),2&s){const n=a.$implicit,i=a.index,e=t.MAs(6),o=t.MAs(10),r=t.oxw();t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(null==n?null:n.itemCode),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",n.itemName),t.xp6(1),t.hij(" ",null==n?null:n.itemName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",n.itemDescription),t.xp6(1),t.hij(" ",null==n?null:n.itemDescription," "),t.xp6(2),t.Oqu(null==n?null:n.hsn),t.xp6(2),t.Oqu(t.lcZ(17,19,null==n?null:n.UOM)),t.xp6(4),t.Q6J("ngIf",t.DdM(24,C).includes(r.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(25,C).includes(r.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(26,C).includes(r.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(27,C).includes(r.action)),t.xp6(2),t.hij(" ",t.xi3(28,21,null==n?null:n.lineValue,"1.2-2")," ")}}function K(s,a){1&s&&(t.TgZ(0,"div",94)(1,"div",17)(2,"div",34),t._uU(3," Remarks "),t._UZ(4,"i",70),t.qZA(),t._UZ(5,"input",95),t.qZA()())}function $(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"div",96)(1,"button",97),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",98),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.preview())}),t._uU(4,"Preview"),t.qZA(),t.TgZ(5,"button",99),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(6," Save "),t.qZA()()}if(2&s){const n=t.oxw();t.xp6(5),t.Q6J("disabled",!n.isPreview)}}function B(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"div")(1,"button",100),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Save"),t.qZA()()}}function X(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"div")(1,"button",100),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.navigateTo())}),t._uU(2," Back To Action Center "),t.qZA()()}}function W(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"div",101)(1,"button",100),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Reject"),t.qZA()()}}function tt(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"div",102)(1,"button",100),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Approve"),t.qZA()()}}const et=function(){return["create"]},it=function(){return["edit"]},nt=function(){return["view"]};let ot=(()=>{var s;class a{get f(){return this.form.controls}constructor(i,e,o,r,h,_,f,pt){this.debitNoteService=i,this.activatedRoute=e,this.spinner=o,this.toastService=r,this.validationService=h,this.modalService=_,this.utilityService=f,this.location=pt,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.submitted=!1,this.isPreview=!1,this.action="create",this.earnings=[],this.supplierOptions=[],this.purchaseCategories=[],this.locations=[],this.items=[],this.filterItems=[],this.selectedSupplierDetails={},this.debitNoteName="Debit Note Entry",this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",reject:"Rejected"},this.otherCharges={action:"create",packagingAndForwarding:0,freight:0,insurance:0,loadingAndUnloading:0,miscellaneous:0,totalAmount:0},this.masterData={autoIncrementNo:"",suppliersOptions:[],purchaseTypesOptions:[]},this.form=new l.nJ({_id:new l.p4(null),purchaseCategory:new l.p4(null,[l.kI.required]),supplier:new l.p4(null,[l.kI.required]),DNNumber:new l.p4("",[l.kI.required]),DNDate:new l.p4("",[l.kI.required]),invoiceNo:new l.p4(""),invoiceDate:new l.p4(""),currency:new l.p4(""),DNDetails:new l.p4([]),reasonForDN:new l.p4(""),remarks:new l.p4(""),netDNValue:new l.p4(0),DNStatus:new l.p4("Awaiting Approval"),totalLineValue:new l.p4(0)})}ngOnInit(){this.getInitialData()}navigateTo(){this.location.back()}submit(){if(this.submitted=!0,this.isPreview=!1,this.form.enable(),this.validationService.checkErrors(this.form,q.K))return;if("reject"==this.action&&!this.form.controls.remarks.value)return void this.toastService.warning("Remark is Required");let i=this.form.value;i.otherCharges=this.otherCharges,i.DNDetails=this.filterItems.filter(e=>e.returnQty>0),0!=i.DNDetails.length?i._id?this.update(i):(delete i._id,this.create(i)):this.toastService.warning("Return Qty can not be zero")}update(i){this.spinner.show(),this.debitNoteService.update(i._id,i).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.location.back()})}create(i){this.spinner.show(),this.debitNoteService.create(i).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.location.back()})}reset(){this.form.reset(),this.supplierOptions=[],this.filterItems=[],this.collection=this.filterItems.length,this.getInitialData()}preview(){this.search="",this.filterItems=this.filterItems.filter(i=>i.returnQty>0),this.isPreview=this.filterItems.length>0,this.collection=this.filterItems.length}getInitialData(){this.spinner.show(),this.debitNoteService.getAllMasterData({}).subscribe(i=>{this.masterData=i,this.form.controls.DNNumber.setValue(this.masterData.autoIncrementNo),this.f.DNDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.f.invoiceDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.DNStatus.setValue("Awaiting Approval"),this.form.controls.DNStatus.setValue(this.statusArr[this.action]),this.form.controls.currency.setValue("INR"),this.activatedRoute.queryParams.pipe((0,F.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.debitNoteService.getById(e.id):(0,M.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.DNDate&&(e.DNDate=this.utilityService.getFormatDate(e.DNDate,"YYYY-MM-DD")),e.supplier._id&&e.supplier&&(e.supplier=e?.supplier?._id),e.invoiceDate&&(e.invoiceDate=this.utilityService.getFormatDate(e.invoiceDate,"YYYY-MM-DD")),this.supplierOptions=this.masterData?.suppliersOptions.filter(o=>o.supplierPurchaseType==e.purchaseCategory),this.filterItems=e.DNDetails.map((o,r)=>({DNLineNumber:o.DNLineNumber,item:o?.item?._id,itemCode:o?.item?.itemCode,itemName:o.item?.itemName,itemDescription:o.item?.itemDescription,hsn:o?.hsn,UOM:o.UOM?o.UOM:o.primaryUnit,returnQty:o.returnQty,purchaseRate:o.purchaseRate,lineValue:o.lineValue,primaryUnit:o.primaryUnit,balancedQty:o.balancedQty,standardRate:o.standardRate,deliveryDate:this.utilityService.getFormatDate(o.deliveryDate,"YYYY-MM-DD"),gst:o.gst,igst:o.igst,cgst:o.cgst,sgst:o.sgst,ugst:o.ugst})).sort((o,r)=>o.itemCode.localeCompare(r.itemCode)),this.totalsCalFn(),this.collection=this.filterItems.length,e.DNStatus=this.statusArr[this.action],this.otherCharges=e.otherCharges,this.form.patchValue(e),this.f.purchaseCategory.disable(),this.f.supplier.disable(),"edit"!=this.action&&(this.form.disable(),["reject"].includes(this.action)&&this.f.remarks.enable(),this.f.DNStatus.enable()))})})}getSuppliers(){this.f.supplier.setValue(null),this.selectedSupplierDetails={},this.supplierOptions=this.masterData?.suppliersOptions.filter(i=>i.supplierPurchaseType==this.f.purchaseCategory.value),this.filterItems=[]}supplierValueChange(i){this.spinner.show(),this.form.controls.currency.setValue(i.supplierCurrency),this.debitNoteService.getAllDebitNoteBySupplierId(i.value).subscribe(e=>{this.spinner.hide(),this.filterItems=e.map((o,r)=>(o.DNLineNumber=r+1,o)),this.collection=this.filterItems.length,this.totalsCalFn()})}lineValueRate(i,e){let o=this.filterItems.map(r=>r.DNLineNumber).indexOf(i);this.filterItems[o].lineValue=(+e.returnQty*+e.purchaseRate).toFixed(2),this.totalsCalFn()}trackByFn(i,e){return e?._id}openOtherChargesModal(){const i=this.modalService.open(A.Oy,{centered:!0,size:"md",backdrop:"static",keyboard:!1});this.otherCharges.action=this.action,i.componentInstance.otherCharges=this.otherCharges,i.result.then(e=>{["create","edit"].includes(this.action)&&(this.otherCharges=e,this.f.netDNValue.setValue((+this.f.totalLineValue.value+ +this.otherCharges.totalAmount).toFixed(2)))},e=>{})}totalsCalFn(){this.f.totalLineValue.setValue(this.filterItems.map(i=>+i.lineValue).reduce((i,e)=>i+e,0).toFixed(2)),this.f.netDNValue.setValue((+this.f.totalLineValue.value+ +this.otherCharges.totalAmount).toFixed(2))}onSort({column:i,direction:e}){this.headers.forEach(o=>{o.sortable!==i&&(o.direction="")}),this.filterItems=""===e||""===i?this.filterItems:[...this.filterItems].sort((o,r)=>{let h="string"==typeof o[i]?o[i].toLowerCase():o[i],_="string"==typeof r[i]?r[i].toLowerCase():r[i];const f=h<_?-1:h>_?1:0;return"asc"===e?f:-f})}openSupplierDetailsModal(){const i=this.modalService.open(A.Nx,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});i.componentInstance.action=this.action,i.componentInstance.selectedSupplierDetails=this.selectedSupplierDetails,i.componentInstance.supplierOptions=this.supplierOptions,i.componentInstance.supplier=this.form.controls.supplier.value,i.result.then(e=>{e&&(this.selectedSupplierDetails=e?.selectedSupplierDetails,this.form.controls.supplier.setValue(e?.selectedSupplierDetails?._id),this.supplierValueChange(this.selectedSupplierDetails))},e=>{})}}return(s=a).\u0275fac=function(i){return new(i||s)(t.Y36(D.pJ),t.Y36(b.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(J.RJ),t.Y36(m.FF),t.Y36(u.tI),t.Y36(c.Ye))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-debit-form"]],viewQuery:function(i,e){if(1&i&&t.Gf(d.j,5),2&i){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},decls:143,vars:41,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3","pe-0"],[1,"col-6","pe-2"],[1,"form-label","mb-2"],["readonly","","type","text","formControlName","DNNumber",1,"form-control"],[1,"col-6","ps-0"],["type","date","formControlName","DNDate",1,"form-control"],[1,"text-danger"],["formControlName","purchaseCategory",1,"form-select","fs-5",3,"change"],["disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","pe-5"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","label","bindValue","value","formControlName","supplier","placeholder","Select a Supplier",3,"items","clearable","change"],["id","basic-addon1",1,"input-group-text","bg-primary","pointer","col-auto","fs-4",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white"],[1,"col-md-3","ps-0"],["type","text","formControlName","invoiceNo",1,"form-control"],["type","date","formControlName","invoiceDate",1,"form-control"],[1,"row","line-border","mt-4"],[1,"row","justify-content-between","settingMargin"],[1,"col-4"],[1,"d-flex"],["id","basic-addon1",1,"input-group-text","bg-primary"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-4","d-flex","justify-content-center"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange",4,"ngIf"],[1,"d-flex","justify-content-end"],[1,"col-form-label","text-nowrap"],["type","button",1,"btn","btn-secondary","po-currency-btn-sm","py-0"],[1,"currency"],[1,"text-dark"],[1,"table-responsive",2,"min-height","18.6rem"],[1,"table","table-bordered","table-sticky","text-center"],[1,"bg-primary"],[1,"text-white"],["sortable","DNLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","hsn",3,"sort"],["sortable","UOM",3,"sort"],["sortable","returnQty",3,"sort"],["sortable","purchaseRate",3,"sort"],["sortable","lineValue",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-md-10","d-flex"],[1,"d-flex","justify-content-center"],[1,"col-form-label","text-nowrap","pe-1","pt-0"],[1,"btn","btn-info","py-1","ms-2"],["type","number","formControlName","totalLineValue","readonly","",1,"form-control"],[1,"mx-2","align-self-center","mb-2"],["aria-hidden","true",1,"fa","fa-plus","fa-lg","text-info"],[1,"text-nowrap"],["type","button ",1,"btn","btn-sm","btn-primary","me-2","d-flex","align-items-center","mb-2",3,"click"],[1,"d-flex","inputGroup"],["type","text","readOnly","",1,"form-control","mt-0","w-25",3,"ngModel","ngModelOptions","ngModelChange"],[1,"mx-2","align-text-top"],["aria-hidden","true",1,"fs-3","fw-bolder","text-info","me-0"],["type","number","formControlName","netDNValue","readonly","",1,"form-control"],[1,"row","line-border"],[1,"row","mb-0"],[1,"col-8",3,"ngClass"],[1,"col",3,"ngClass"],[1,"fa","fa-caret-right","fa-5x","mx-1"],["type","text","formControlName","reasonForDN",1,"form-control"],["class","col pe-0",4,"ngIf"],[1,"col-4","d-flex","justify-content-end",3,"ngClass"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[4,"ngIf"],["class","col-5 text-end",4,"ngIf"],["class","col-5 d-flex justify-content-end mb-3",4,"ngIf"],[3,"value"],[3,"collectionSize","page","pageSize","boundaryLinks","pageChange"],["ngbPaginationPrevious",""],["ngbPaginationNext",""],["ngbPaginationPages",""],["src","./assets/new_icons/pagination_prev.svg","width","20rem"],["src","./assets/new_icons/pagination_next.svg","width","20rem"],["class","ngb-custom-pages-item align-self-center",4,"ngIf"],[1,"ngb-custom-pages-item","align-self-center"],[1,"page-label","me-2","ms-1"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange","input",4,"ngIf"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange","input"],[1,"col","pe-0"],["type","text","formControlName","remarks",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-5","text-end"],[1,"col-5","d-flex","justify-content-end","mb-3"]],template:function(i,e){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",5)(11,"div",7)(12,"label",8),t._uU(13," Debit Note No."),t.qZA(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",10)(16,"label",8),t._uU(17,"Debit Note Date"),t.qZA(),t._UZ(18,"input",11),t.qZA()()(),t.TgZ(19,"div",6)(20,"label",8),t._uU(21," Purchase Category"),t.TgZ(22,"span",12),t._uU(23,"*"),t.qZA()(),t.TgZ(24,"select",13),t.NdJ("change",function(){return e.getSuppliers()}),t.TgZ(25,"option",14),t._uU(26,"Select"),t.qZA(),t.YNc(27,Y,2,2,"option",15),t.qZA()(),t.TgZ(28,"div",16)(29,"label",8),t._uU(30," Supplier Name "),t.TgZ(31,"span",12),t._uU(32,"*"),t.qZA()(),t.TgZ(33,"div",17)(34,"div",18)(35,"ng-select",19),t.NdJ("change",function(r){return e.supplierValueChange(r)}),t.qZA()(),t.TgZ(36,"div",20),t.NdJ("click",function(){return e.openSupplierDetailsModal()}),t._UZ(37,"i",21),t.qZA()()(),t.TgZ(38,"div",22)(39,"div",5)(40,"div",7)(41,"label",8),t._uU(42,"Invoice No."),t.qZA(),t._UZ(43,"input",23),t.qZA(),t.TgZ(44,"div",10)(45,"label",8),t._uU(46,"Invoice Date"),t.qZA(),t._UZ(47,"input",24),t.qZA()()()()(),t._UZ(48,"hr",25),t.TgZ(49,"div",26)(50,"div",27)(51,"div",28)(52,"div",29),t._UZ(53,"i",21),t.qZA(),t.TgZ(54,"div")(55,"input",30),t.NdJ("ngModelChange",function(r){return e.search=r}),t.qZA()()()(),t.TgZ(56,"div",31),t.YNc(57,V,4,4,"ngb-pagination",32),t.qZA(),t.TgZ(58,"div",27)(59,"div",33)(60,"div",34)(61,"button",35),t._uU(62,"Currency"),t.qZA()(),t.TgZ(63,"div",36)(64,"label",37),t._uU(65),t.qZA()()()()(),t.TgZ(66,"div",38)(67,"table",39)(68,"thead",40)(69,"tr",41)(70,"th",42),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(71,"#"),t.qZA(),t.TgZ(72,"th",43),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(73,"Item Code"),t.qZA(),t.TgZ(74,"th",44),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(75,"Item Name"),t.qZA(),t.TgZ(76,"th",45),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(77,"Item Description"),t.qZA(),t.TgZ(78,"th",46),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(79,"HSN Code"),t.qZA(),t.TgZ(80,"th",47),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(81,"UoM"),t.qZA(),t.TgZ(82,"th",48),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(83,"Rejected Qty"),t.qZA(),t.TgZ(84,"th",49),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(85,"Rate/Unit"),t.qZA(),t.TgZ(86,"th",50),t.NdJ("sort",function(r){return e.onSort(r)}),t._uU(87,"Line Value"),t.qZA()()(),t.TgZ(88,"tbody"),t.YNc(89,H,29,28,"tr",51),t.ALo(90,"slice"),t.ALo(91,"searchFi1ter"),t.qZA()()(),t.ynx(92),t.TgZ(93,"div",5)(94,"div",52)(95,"div",53)(96,"div",54),t._uU(97," Total Item Value: "),t.TgZ(98,"div",55)(99,"label"),t._uU(100),t.qZA()()(),t._UZ(101,"input",56),t.qZA(),t.TgZ(102,"div",53)(103,"div",57),t._UZ(104,"i",58),t.qZA(),t.TgZ(105,"div",59)(106,"button",60),t.NdJ("click",function(){return e.openOtherChargesModal()}),t.TgZ(107,"span"),t._uU(108,"Add Other Charges"),t.qZA()()(),t.TgZ(109,"div",61)(110,"div",54)(111,"div",55)(112,"label"),t._uU(113),t.qZA()()(),t.TgZ(114,"input",62),t.NdJ("ngModelChange",function(r){return e.otherCharges.totalAmount=r}),t.qZA()()(),t._UZ(115,"div",61),t.TgZ(116,"div",63)(117,"div",64),t._uU(118,"="),t.qZA()(),t.TgZ(119,"div",53)(120,"div",54),t._uU(121," Net Debit Note Value: "),t.TgZ(122,"div",55)(123,"label"),t._uU(124),t.qZA()()(),t._UZ(125,"input",65),t.qZA()()(),t._UZ(126,"hr",66),t.BQk(),t.TgZ(127,"div",67)(128,"div",68)(129,"div",5)(130,"div",69)(131,"div",17)(132,"div",34),t._uU(133," Reason for Debit Note "),t._UZ(134,"i",70),t.qZA(),t._UZ(135,"input",71),t.qZA()(),t.YNc(136,K,6,0,"div",72),t.qZA()(),t.TgZ(137,"div",73),t.YNc(138,$,7,1,"div",74),t.YNc(139,B,3,0,"div",75),t.YNc(140,X,3,0,"div",75),t.YNc(141,W,3,0,"div",76),t.YNc(142,tt,3,0,"div",77),t.qZA()()()()),2&i&&(t.Q6J("formGroup",e.form),t.xp6(5),t.AsE(" ",t.lcZ(6,27,e.action)," ",e.debitNoteName," "),t.xp6(20),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.masterData.purchaseTypesOptions),t.xp6(8),t.Q6J("items",e.supplierOptions)("clearable",!1),t.xp6(20),t.Q6J("ngModel",e.search)("ngModelOptions",t.DdM(36,Z)),t.xp6(2),t.Q6J("ngIf",e.filterItems.length>0),t.xp6(8),t.Oqu(e.f.currency.value),t.xp6(24),t.Q6J("ngForOf",t.Dn7(90,29,t.xi3(91,33,e.filterItems,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(11),t.Oqu(e.f.currency.value),t.xp6(13),t.Oqu(e.f.currency.value),t.xp6(1),t.Q6J("ngModel",e.otherCharges.totalAmount)("ngModelOptions",t.DdM(37,Z)),t.xp6(10),t.Oqu(e.f.currency.value),t.xp6(4),t.Q6J("ngClass","reject"===e.action?"col-md-10 pe-0":"col"),t.xp6(2),t.Q6J("ngClass","reject"!==e.action?"col-md-10 pe-5":"col-md-7"),t.xp6(6),t.Q6J("ngIf","reject"==e.action),t.xp6(1),t.Q6J("ngClass","reject"===e.action?"col-md-2 justify-content-center":"col-4 d-flex justify-content-end"),t.xp6(1),t.Q6J("ngIf",t.DdM(38,et).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(39,it).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(40,nt).includes(e.action)),t.xp6(1),t.Q6J("ngIf","reject"==e.action),t.xp6(1),t.Q6J("ngIf","approve"==e.action))},dependencies:[c.mk,c.sg,c.O5,m.N9,m.GZ,m.ju,m.Qy,m._L,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.sg,l.u,l.On,k.w9,d.j,c.OU,c.JJ,c.rS,I.G,O.S],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}.fa[_ngcontent-%COMP%]{font-size:1.6rem!important}.input-group-text[_ngcontent-%COMP%]{border-radius:0!important;height:2.8rem!important;width:3rem}.settingMargin[_ngcontent-%COMP%]{margin-top:2.5rem;margin-bottom:1.5rem}.currency[_ngcontent-%COMP%]{padding:0 3rem;border-radius:1.5px;border:.1px solid #302f2f!important;color:#555353!important;height:2.3rem;width:4rem;display:flex;align-items:center;justify-content:center;margin-top:.6rem;margin-left:.2rem;font-size:1.3rem}.po-currency-btn-sm[_ngcontent-%COMP%]{height:2.3rem;font-size:1.3rem!important;margin-top:.1rem}"]}),a})();var rt=p(56208);const at=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:w},{path:"form",component:ot,resolve:{accessScreen:p(65876).x}}];let lt=(()=>{var s;class a{}return(s=a).\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez,b.Bz.forChild(at),rt.m]}),a})()},13107:(y,g,p)=>{p.d(g,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(y,g,p)=>{p.d(g,{J:()=>c});const c=({data:b,headers:d,widths:T,title:v})=>({tableData:{widths:T,headerRows:1,body:[d.map(u=>({text:u.header,style:"header"})),...b.map(u=>d.map(N=>({style:"subheader",text:u[N.key]})))]},title:v})}}]);