"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2164],{4854:(Z,m,a)=>{a.r(m),a.d(m,{InvoiceQRCodeModule:()=>F});var u=a(96814),p=a(1076),h=a(43818),_=a(77203),v=a(25116),C=a(26526),e=a(65879),d=a(2742),g=a(59840),T=a(37285),N=a(88059),S=a(53421);function I(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",24,25)(5,"span",26),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td")(24,"a",27),e.NdJ("click",function(){const i=e.CHM(r).$implicit,n=e.oxw();return e.KtG(n.open(i))}),e._UZ(25,"i",28),e.qZA()(),e.TgZ(26,"td")(27,"div",29),e._UZ(28,"button",30),e.TgZ(29,"div",31)(30,"a",32),e.NdJ("click",function(){const i=e.CHM(r).$implicit,n=e.oxw();return e.KtG(n.navigateTo("../form",null==i?null:i._id,"view"))}),e._UZ(31,"i",33),e._uU(32," View "),e.qZA(),e.TgZ(33,"a",32),e.NdJ("click",function(){const i=e.CHM(r).$implicit,n=e.oxw();return e.KtG(n.navigateTo("../form",null==i?null:i._id,"edit"))}),e._UZ(34,"i",34),e._uU(35," Edit "),e.qZA()()()()()}if(2&s){const r=c.$implicit,o=e.MAs(4),t=e.oxw();e.xp6(2),e.Oqu(null==r?null:r.customerCode),e.xp6(1),e.Udp("width",o.clientWidth),e.xp6(2),e.Q6J("positionTarget",o)("ngbTooltip",r.customerName),e.xp6(1),e.hij(" ",r.customerName," "),e.xp6(2),e.Oqu(null==r?null:r.printQRCodeOnInvoice),e.xp6(2),e.Oqu(null==r?null:r.printDSOnInvoice),e.xp6(2),e.Oqu(null==r?null:r.venderCode),e.xp6(2),e.Oqu(r.showPANNo),e.xp6(2),e.Oqu(r.showEximCode),e.xp6(2),e.Oqu(r.TCSOnScrap),e.xp6(2),e.Oqu(r.TCSOnVendor),e.xp6(2),e.Oqu(null==r?null:r.GSTIN),e.xp6(8),e.Q6J("accessType",t.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",t.rolePermissionActions.editAction)}}const U=function(s,c,r,o){return{page:s,pageSize:c,collection:r,search:o,type:"list"}};let Q=(()=>{var s;class c{constructor(o,t,i,n,f,b,V){this.exportExcelService=o,this.customerService=t,this.router=i,this.modalService=n,this.spinner=f,this.activatedRoute=b,this.exportToPDFService=V,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(o,t,i){this.router.navigate([o],{relativeTo:this.activatedRoute,queryParams:{id:t,action:i}})}trackByFn(o,t){return t?._id}open(o){this.modalService.open(_.MU,{centered:!0,size:"lg"}).componentInstance.data={title:o.customerName,addressA:{label:"Shipping Address",address:o.customerShippingAddress},addressB:{label:"Billings Address",address:o.customerBillingAddress?[o.customerBillingAddress]:[]}}}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}getAll(o=!1,t=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.customerService.getAll(i).subscribe(n=>{"EXCEL"==t?this.excelDownload(n.rows):"PDF"==t?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let t=(0,C.lJ)(o);this.exportToPDFService.generatePdf(t.tableData,t.title)}excelDownload(o){this.exportExcelService.exportExcel((0,C.c$)(o))}onSort({column:o,direction:t}){this.headers.forEach(i=>{i.sortable!==o&&(i.direction="")}),this.column=o,this.direction="asc"==t?1:-1,this.getAll()}}return(s=c).\u0275fac=function(o){return new(o||s)(e.Y36(d.Ol),e.Y36(g.ve),e.Y36(p.F0),e.Y36(T.FF),e.Y36(d.V),e.Y36(p.gz),e.Y36(d.$L))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-invoice-qr-code-list"]],viewQuery:function(o,t){if(1&o&&e.Gf(h.j,5),2&o){let i;e.iGM(i=e.CRH())&&(t.headers=i)}},decls:40,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-3",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","customerCode",3,"sort"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","printQRCodeOnInvoice",3,"sort"],["sortable","printDSOnInvoice",3,"sort"],["sortable","venderCode",3,"sort"],["sortable","showPANNo",3,"sort"],["sortable","showEximCode",3,"sort"],["sortable","TCSOnScrap",3,"sort"],["sortable","TCSOnVendor",3,"sort"],["sortable","GSTIN",3,"sort"],["sortable","isActive",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["customerName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-address-card","text-primary"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Invoice QR Code Summary"),e.qZA()(),e.TgZ(4,"div",3),e._UZ(5,"button",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return t.navigateTo("../form",null,"create")}),e._uU(7," Map Invoice QR Code "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(n){return t.eventHeader(n)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(15,"Customer Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(17,"Customer Name"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(19,"QR Code"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(21,"DS"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(23,"Vender Code"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(25,"PAN"),e.qZA(),e.TgZ(26,"th",18),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(27,"Exim Code"),e.qZA(),e.TgZ(28,"th",19),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(29,"ScrapTCS"),e.qZA(),e.TgZ(30,"th",20),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(31,"VendorTCS"),e.qZA(),e.TgZ(32,"th",21),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(33,"GSTIN"),e.qZA(),e.TgZ(34,"th",22),e.NdJ("sort",function(n){return t.onSort(n)}),e._uU(35,"View Address"),e.qZA(),e.TgZ(36,"th"),e._uU(37,"Action"),e.qZA()()(),e.TgZ(38,"tbody"),e.YNc(39,I,36,16,"tr",23),e.qZA()()()()),2&o&&(e.xp6(4),e.Q6J("accessType",t.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,U,t.page,t.pageSize,t.collection,t.search)),e.xp6(29),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn))},dependencies:[u.sg,N.P,T._L,h.j,S.J],encapsulation:2}),c})();var l=a(60095),R=a(21631),q=a(22096),O=a(50363);function w(s,c){1&s&&e._UZ(0,"hr",22)}function y(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"div",23)(1,"div",24)(2,"button",25),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div")(5,"button",25),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.submit())}),e._uU(6,"Save"),e.qZA()()()}}const A=function(){return["edit","create"]};let x=(()=>{var s;class c{constructor(o,t,i,n,f,b){this.customerService=o,this.activatedRoute=t,this.spinner=i,this.toastService=n,this.location=f,this.utilityService=b,this.action="create",this.submitted=!1,this.customerOptions=[],this.form=new l.nJ({_id:new l.p4(null),customerCode:new l.p4(null,[l.kI.required]),customerName:new l.p4(null,[l.kI.required]),printQRCodeOnInvoice:new l.p4("No"),printDSOnInvoice:new l.p4("No"),venderCode:new l.p4(null),customerNickName:new l.p4(null),showSKUDescription:new l.p4("Yes"),showPANNo:new l.p4("No"),showEximCode:new l.p4("No"),TCSOnScrap:new l.p4("No"),TCSOnVendor:new l.p4("No")}),this.printCodeOptions=v.Jn}setCustomerDetails(o){this.customerService.getById(o?._id).subscribe(t=>{console.log("success",t),this.form.controls.customerCode.setValue(t?.customerCode),this.form.controls.customerName.setValue(t?.customerName),this.form.controls.customerNickName.setValue(t?.customerNickName),this.form.controls._id.setValue(t?._id),this.form.controls.printDSOnInvoice.setValue(t?.printDSOnInvoice??"No"),this.form.controls.printQRCodeOnInvoice.setValue(t?.printQRCodeOnInvoice??"No"),this.form.controls.showSKUDescription.setValue(t?.showSKUDescription??"Yes"),this.form.controls.venderCode.setValue(t?.venderCode)})}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,!this.form.controls.customerCode.value)return void this.toastService.warning("Customer Code is required !");let o=this.form.value;o._id&&this.update(o)}update(o){this.spinner.show(),this.customerService.update(o._id,o).subscribe(t=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(t.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.customerService.getCustomersList({}).subscribe(o=>{this.customerOptions=o,this.form.controls.printDSOnInvoice.setValue("No"),this.form.controls.printQRCodeOnInvoice.setValue("No"),this.form.controls.showSKUDescription.setValue("Yes"),this.activatedRoute.queryParams.pipe((0,R.z)(t=>(this.action=t.action,console.log("action",this.action),this.utilityService.accessDenied(this.action),t.id?this.customerService.getById(t.id):(0,q.of)({})))).subscribe(t=>{this.spinner.hide(),0!=Object.keys(t).length&&(this.form.patchValue(t),"edit"!=this.action&&this.form.disable(),"edit"==this.action&&(this.form.controls.customerCode.disable(),this.form.controls.customerName.disable()))})})}}return(s=c).\u0275fac=function(o){return new(o||s)(e.Y36(g.ve),e.Y36(p.gz),e.Y36(d.V),e.Y36(d.kl),e.Y36(u.Ye),e.Y36(d.tI))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-invoice-qr-code-form"]],decls:80,vars:23,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading","ms-2"],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","customerCode","bindValue","customerCode","formControlName","customerCode",3,"items","clearable","change"],["bindLabel","customerName","bindValue","customerName","formControlName","customerName",3,"items","clearable","change"],["type","text","formControlName","customerNickName","readonly","",1,"form-control"],["bindValue","value","bindLabel","label","formControlName","printQRCodeOnInvoice",3,"items","clearable"],["bindValue","value","bindLabel","label","formControlName","printDSOnInvoice",3,"items","clearable"],["type","text","formControlName","venderCode",1,"form-control"],["bindValue","value","bindLabel","label","formControlName","showSKUDescription",3,"items","clearable"],["bindValue","value","bindLabel","label","formControlName","showPANNo",3,"items","clearable"],["bindValue","value","bindLabel","label","formControlName","showEximCode",3,"items","clearable"],["bindValue","value","bindLabel","label","formControlName","TCSOnScrap",3,"items","clearable"],["bindValue","value","bindLabel","label","formControlName","TCSOnVendor",3,"items","clearable"],["class","row line-border",4,"ngIf"],["class","col-12 d-flex justify-content-center",4,"ngIf"],[1,"row","line-border"],[1,"col-12","d-flex","justify-content-center"],[1,"me-3"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"Invoice QR Code Info"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," Customer Code "),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e.TgZ(13,"ng-select",9),e.NdJ("change",function(n){return t.setCustomerDetails(n)}),e.qZA()(),e.TgZ(14,"div",6)(15,"label",7),e._uU(16," Customer Name "),e.TgZ(17,"span",8),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"ng-select",10),e.NdJ("change",function(n){return t.setCustomerDetails(n)}),e.qZA()(),e.TgZ(20,"div",6)(21,"label",7),e._uU(22," Customer Nick Name "),e.TgZ(23,"span",8),e._uU(24,"*"),e.qZA()(),e._UZ(25,"input",11),e.qZA()(),e.TgZ(26,"div",5)(27,"div",6)(28,"label",7),e._uU(29," Print QR Code on Invoice "),e.TgZ(30,"span",8),e._uU(31,"*"),e.qZA()(),e._UZ(32,"ng-select",12),e.qZA(),e.TgZ(33,"div",6)(34,"label",7),e._uU(35," Print DS on Invoice "),e.TgZ(36,"span",8),e._uU(37,"*"),e.qZA()(),e._UZ(38,"ng-select",13),e.qZA(),e.TgZ(39,"div",6)(40,"label",7),e._uU(41," Vender Code "),e.TgZ(42,"span",8),e._uU(43,"*"),e.qZA()(),e._UZ(44,"input",14),e.qZA()(),e.TgZ(45,"div",5)(46,"div",6)(47,"label",7),e._uU(48," Show SKU Description "),e.TgZ(49,"span",8),e._uU(50,"*"),e.qZA()(),e._UZ(51,"ng-select",15),e.qZA(),e.TgZ(52,"div",6)(53,"label",7),e._uU(54," PAN No. "),e.TgZ(55,"span",8),e._uU(56,"*"),e.qZA()(),e._UZ(57,"ng-select",16),e.qZA(),e.TgZ(58,"div",6)(59,"label",7),e._uU(60," Exim Code "),e.TgZ(61,"span",8),e._uU(62,"*"),e.qZA()(),e._UZ(63,"ng-select",17),e.qZA()(),e.TgZ(64,"div",5)(65,"div",6)(66,"label",7),e._uU(67," TCS On Scrap "),e.TgZ(68,"span",8),e._uU(69,"*"),e.qZA()(),e._UZ(70,"ng-select",18),e.qZA(),e.TgZ(71,"div",6)(72,"label",7),e._uU(73," TCS On Vendor "),e.TgZ(74,"span",8),e._uU(75,"*"),e.qZA()(),e._UZ(76,"ng-select",19),e.qZA()()(),e.YNc(77,w,1,0,"hr",20),e.TgZ(78,"div",5),e.YNc(79,y,7,0,"div",21),e.qZA()()()),2&o&&(e.Q6J("formGroup",t.form),e.xp6(13),e.Q6J("items",t.customerOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.customerOptions)("clearable",!1),e.xp6(13),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(13),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(7),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.printCodeOptions)("clearable",!1),e.xp6(1),e.Q6J("ngIf",e.DdM(21,A).includes(t.action)),e.xp6(2),e.Q6J("ngIf",e.DdM(22,A).includes(t.action)))},dependencies:[u.O5,l.Fj,l.JJ,l.JL,l.sg,l.u,O.w9],encapsulation:2}),c})();var J=a(19964),D=a(56208);const L=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:Q},{path:"form",component:x,resolve:{accessScreen:J.xr}}];let F=(()=>{var s;class c{}return(s=c).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,p.Bz.forChild(L),D.m]}),c})()},13107:(Z,m,a)=>{a.d(m,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(Z,m,a)=>{a.d(m,{J:()=>u});const u=({data:p,headers:h,widths:_,title:v})=>({tableData:{widths:_,headerRows:1,body:[h.map(d=>({text:d.header,style:"header"})),...p.map(d=>h.map(g=>({style:"subheader",text:d[g.key]})))]},title:v})}}]);