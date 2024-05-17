"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7351],{96055:(b,h,c)=>{c.r(h),c.d(h,{InvoicePaymentModule:()=>R});var l=c(96814),d=c(1076),g=c(43818),v=c(25116),_=c(36144),e=c(65879),u=c(99328),f=c(43764),y=c(88059),A=c(37285),P=c(53421),x=c(69205);function C(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td",20)(2,"span",21),e._uU(3),e.ALo(4,"truncate"),e.qZA()(),e.TgZ(5,"td",20)(6,"span",21),e._uU(7),e.ALo(8,"truncate"),e.qZA()(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td")(20,"div",22),e._UZ(21,"button",23),e.TgZ(22,"div",24)(23,"a",25),e.NdJ("click",function(){const o=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.navigateTo("/default/accounts/transactions/invoice_payment/form",null==o?null:o._id,"view"))}),e._UZ(24,"i",26),e._uU(25," View "),e.qZA(),e.TgZ(26,"a",25),e.NdJ("click",function(){const o=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.navigateTo("/default/accounts/transactions/invoice_payment/form",null==o?null:o._id,"edit"))}),e._UZ(27,"i",27),e._uU(28," Edit "),e.qZA()()()()()}if(2&r){const t=m.$implicit,n=e.oxw();e.xp6(2),e.Q6J("ngbTooltip",t.customerName),e.xp6(1),e.hij(" ",t.customerName?e.xi3(4,11,t.customerName,25):null," "),e.xp6(3),e.Q6J("ngbTooltip",t.projectName),e.xp6(1),e.hij(" ",t.projectName?e.xi3(8,14,t.projectName,25):null," "),e.xp6(3),e.Oqu(t.serviceInvoiceNumber),e.xp6(2),e.Oqu(t.serviceInvoiceDate),e.xp6(2),e.Oqu(t.totalAmountWithTax),e.xp6(2),e.Oqu(t.receivedAmount),e.xp6(2),e.Oqu(t.receivedDate),e.xp6(5),e.Q6J("accessType",n.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",n.rolePermissionActions.editAction)}}const U=function(r,m,t,n){return{page:r,pageSize:m,collection:t,search:n,type:"list"}};let w=(()=>{class r{constructor(t,n,i,o,s,p){this.exportExcelService=t,this.invoicePaymentService=n,this.router=i,this.spinner=o,this.activatedRoute=s,this.exportToPDFService=p,this.page=1,this.pageSize=8,this.collection=0,this.column="serviceInvoiceNumber",this.direction=1,this.search="",this.tableData=[],this.dataForExcel=[],this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,n,i){this.router.navigate([t],{queryParams:{id:n,action:i}})}trackByFn(t,n){return n?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,n=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.invoicePaymentService.getAll(i).subscribe(o=>{"EXCEL"==n?this.excelDownload(o.rows):"PDF"==n?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(t){this.exportExcelService.exportExcel((0,_.W$)(t))}pdfDownload(t){let n=(0,_.Ww)(t);this.exportToPDFService.generatePdf(n.tableData,n.title)}onSort({column:t,direction:n}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.column=t,this.direction="asc"==n?1:-1,this.getAll()}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(u.Ol),e.Y36(f.p),e.Y36(d.F0),e.Y36(u.V),e.Y36(d.gz),e.Y36(u.$L))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-invoice-payment-list"]],viewQuery:function(n,i){if(1&n&&e.Gf(g.j,5),2&n){let o;e.iGM(o=e.CRH())&&(i.headers=o)}},decls:32,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","customerName",1,"text-start",3,"sort"],["sortable","projectName",1,"text-start",3,"sort"],["sortable","serviceInvoiceNumber",3,"sort"],["sortable","serviceInvoiceDate",3,"sort"],["sortable","totalAmountWithTax",3,"sort"],["sortable","receivedAmount",3,"sort"],["sortable","receivedDate",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["placement","right",1,"pointer",3,"ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Invoice Payment Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("/default/accounts/transactions/invoice_payment/form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Invoice Payment "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(s){return i.eventHeader(s)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(15,"Customer"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(17,"Project"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(19,"Invoice #"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(21,"Invoice Date"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(23,"Invoice Amount"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(25,"Received Amount"),e.qZA(),e.TgZ(26,"th",18),e.NdJ("sort",function(s){return i.onSort(s)}),e._uU(27,"Received Date"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Action"),e.qZA()()(),e.TgZ(30,"tbody"),e.YNc(31,C,29,17,"tr",19),e.qZA()()()()),2&n&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,U,i.page,i.pageSize,i.collection,i.search)),e.xp6(21),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[l.sg,y.P,A._L,g.j,P.J,x.W],encapsulation:2})}return r})();var a=c(60095),D=c(21631),N=c(22096),Z=c(16897),S=c(95346);function q(r,m){if(1&r&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&r){const t=m.$implicit;e.Q6J("value",t.parameterName),e.xp6(1),e.hij(" ",t.parameterName," ")}}function J(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"div",33),e._UZ(14,"button",34),e.TgZ(15,"div",35)(16,"a",36),e.NdJ("click",function(){const i=e.CHM(t),o=i.$implicit,s=i.index,p=e.oxw();return e.KtG(p.patchItem(o,s,"view"))}),e._UZ(17,"i",37),e._uU(18," View "),e.qZA(),e.TgZ(19,"a",36),e.NdJ("click",function(){const i=e.CHM(t),o=i.$implicit,s=i.index,p=e.oxw();return e.KtG(p.patchItem(o,s,"edit"))}),e._UZ(20,"i",38),e._uU(21," Edit "),e.qZA(),e.TgZ(22,"a",36),e.NdJ("click",function(){const o=e.CHM(t).index,s=e.oxw();return e.KtG(s.deleteItem(o))}),e._UZ(23,"i",39),e._uU(24," Delete "),e.qZA()()()()()}if(2&r){const t=m.$implicit,n=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.receivedAmount),e.xp6(2),e.Oqu(e.xi3(5,11,null==t?null:t.receivedDate,"dd-MM-YYYY")),e.xp6(3),e.Oqu(null==t?null:t.invoiceDiscount),e.xp6(2),e.Oqu(null==t?null:t.TDSAmount),e.xp6(2),e.Oqu(null==t?null:t.paymentMode),e.xp6(5),e.ekj("disable","view"==n.action),e.xp6(3),e.ekj("disable","view"==n.action),e.xp6(3),e.ekj("disable","view"==n.action)}}const T=function(){return["view"]},M=function(r,m,t,n){return{page:r,pageSize:m,collection:t,search:n,excelDisplay:"none"}};let L=(()=>{class r{constructor(t,n,i,o){this.activeModal=t,this.validationService=n,this.toastService=i,this.utilityService=o,this.action="",this.totalAmountWithTax=0,this.invoicePaymentArr=[],this.paymentMethod=[],this.statusArr=v.Lv,this.projectsOptions=[],this.trainingMedium=v.Ju,this.patchItemAction="create",this.btnDisable=!1,this.page=1,this.pageSize=4,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.totalInvoicePayment=0,this.form=new a.nJ({index:new a.p4(-1),receivedAmount:new a.p4(null),receivedDate:new a.p4(null),invoiceDiscount:new a.p4(null),TDSAmount:new a.p4(null),paymentMode:new a.p4(null)})}ngOnInit(){this.collection=this.invoicePaymentArr.length,["view"].includes(this.action)&&this.form.disable()}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value;break;case"EXCEL":default:break;case"PAGE":this.page=t.value}}addCustomer(){let t=this.form.value;if(!t.receivedAmount)return void this.toastService.warning("Received Amount is required !");let n=+t.receivedAmount+ +t.invoiceDiscount+ +t.TDSAmount;this.invoicePaymentArr.length>0&&"create"==this.patchItemAction?this.totalInvoicePayment=this.invoicePaymentArr.map(i=>+i?.receivedAmount+ +i?.invoiceDiscount+ +i?.TDSAmount).reduce((i,o)=>+i+ +o,0):"edit"==this.patchItemAction&&(this.totalInvoicePayment=this.invoicePaymentArr.filter(i=>i?.index!=t?.index).map(i=>+i?.receivedAmount+ +i?.invoiceDiscount+ +i?.TDSAmount).reduce((i,o)=>+i+ +o,0)),+n+ +this.totalInvoicePayment>+this.totalAmountWithTax?this.toastService.warning("Total Amount should be less than Invoice Amount !"):((t.index||0==t.index)&&t.index>=0?this.invoicePaymentArr.splice(t.index,1,t):this.invoicePaymentArr.push(t),this.collection=this.invoicePaymentArr.length,this.projectsOptions=[],this.form.reset())}patchItem(t,n,i){this.patchItemAction=i,"view"!=this.action&&(t.index=n+(this.page-1)*this.pageSize,t.receivedDate&&(t.receivedDate=this.utilityService.getFormatDate(t.receivedDate,"YYYY-MM-DD")),this.form.patchValue(t),"view"==i?(this.btnDisable=!0,this.form.disable()):(this.form.enable(),this.btnDisable=!1))}deleteItem(t){"view"!=this.action&&(this.invoicePaymentArr.splice(t+(this.page-1)*this.pageSize,1),this.collection=this.invoicePaymentArr.length)}dismissModal(){this.activeModal.close(this.invoicePaymentArr)}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(A.Kz),e.Y36(Z.RJ),e.Y36(u.kl),e.Y36(u.tI))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-invoice-payment-modal"]],inputs:{action:"action",totalAmountWithTax:"totalAmountWithTax",invoicePaymentArr:"invoicePaymentArr",paymentMethod:"paymentMethod"},decls:71,vars:21,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[3,"formGroup"],[1,"row","mb-4","px-5","mt-4"],[1,"col"],[1,"form-label","mb-1"],[1,"text-danger"],["type","number","formControlName","receivedAmount",1,"form-control"],["type","date","formControlName","receivedDate",1,"form-control"],["type","number","formControlName","invoiceDiscount",1,"form-control"],["formControlName","TDSAmount","type","number",1,"form-control"],["formControlName","paymentMode",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"row","mb-4","px-5"],[1,"col-12","d-flex","justify-content-center"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"line-border","mt-4","px-0","mb-0"],[1,"px-5"],[3,"data","dataChange"],[1,"table-responsive","mt-0","px-5",2,"min-height","17rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[4,"ngFor","ngForOf"],[1,"line-border","mt-3","px-5"],[1,"row"],[1,"text-center","mt-3","mb-4"],[3,"value"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","me-2","text-primary"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Add Invoice Payment"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return i.activeModal.close()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"form",6)(9,"div",7)(10,"div",8)(11,"label",9),e._uU(12," Received Amount "),e._UZ(13,"span",10),e.qZA(),e._UZ(14,"input",11),e.qZA(),e.TgZ(15,"div",8)(16,"label",9),e._uU(17," Received Date "),e._UZ(18,"span",10),e.qZA(),e._UZ(19,"input",12),e.qZA(),e.TgZ(20,"div",8)(21,"label",9),e._uU(22," Invoice Discount "),e._UZ(23,"span",10),e.qZA(),e._UZ(24,"input",13),e.qZA(),e.TgZ(25,"div",8)(26,"label",9),e._uU(27,"TDS Amount "),e._UZ(28,"span",10),e.qZA(),e._UZ(29,"input",14),e.qZA(),e.TgZ(30,"div",8)(31,"label",9),e._uU(32,"Payment Mode "),e._UZ(33,"span",10),e.qZA(),e.TgZ(34,"select",15)(35,"option",16),e._uU(36,"Select Payment Mode"),e.qZA(),e.YNc(37,q,2,2,"option",17),e.qZA()()(),e.TgZ(38,"div",18)(39,"div",19)(40,"button",20),e.NdJ("click",function(){return i.addCustomer()}),e._uU(41," Add to the list "),e.qZA()()()(),e._UZ(42,"hr",21),e.TgZ(43,"div",22)(44,"app-setting-header",23),e.NdJ("dataChange",function(s){return i.eventHeader(s)}),e.qZA()(),e.TgZ(45,"div",24)(46,"table",25)(47,"thead",26)(48,"tr",27)(49,"th"),e._uU(50,"Received Amount"),e.qZA(),e.TgZ(51,"th"),e._uU(52,"Received Date"),e.qZA(),e.TgZ(53,"th"),e._uU(54,"Invoice Discount"),e.qZA(),e.TgZ(55,"th"),e._uU(56,"TDS Amount"),e.qZA(),e.TgZ(57,"th"),e._uU(58,"Payment Mode"),e.qZA(),e.TgZ(59,"th"),e._uU(60,"Action"),e.qZA()()(),e.TgZ(61,"tbody"),e.YNc(62,J,25,14,"tr",28),e.ALo(63,"slice"),e.ALo(64,"searchFi1ter"),e.qZA()()(),e._UZ(65,"hr",29),e.TgZ(66,"div",30)(67,"div",8)(68,"div",31)(69,"button",20),e.NdJ("click",function(){return i.dismissModal()}),e._uU(70," Save "),e.qZA()()()()()()),2&n&&(e.xp6(8),e.Q6J("formGroup",i.form),e.xp6(27),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",i.paymentMethod),e.xp6(3),e.Q6J("disabled",e.DdM(14,T).includes(i.action)),e.xp6(4),e.Q6J("data",e.l5B(15,M,i.page,i.pageSize,i.collection,i.search)),e.xp6(18),e.Q6J("ngForOf",e.Dn7(63,7,e.xi3(64,11,i.invoicePaymentArr,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize)),e.xp6(7),e.Q6J("disabled",i.btnDisable||e.DdM(20,T).includes(i.action)))},dependencies:[l.sg,y.P,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.sg,a.u,l.OU,l.uU,S.G],encapsulation:2})}return r})();var j=c(43784),k=c(50363);function F(r,m){1&r&&e._UZ(0,"hr",24)}const I=function(r){return{"d-none":r}};function Y(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"div",25)(1,"div",26)(2,"button",21),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",27)(5,"button",21),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(6,"Save"),e.qZA()()()}if(2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,I,"View"==t.action)),e.xp6(3),e.Q6J("ngClass",e.VKq(4,I,"View"==t.action))}}let O=(()=>{class r{constructor(t,n,i,o,s,p,z,G){this.router=t,this.activatedRoute=n,this.spinner=i,this.toastService=o,this.invoicePaymentService=s,this.validationService=p,this.utilityService=z,this.modalService=G,this.submitted=!1,this.action="create",this.standardType=[],this.projectList=[],this.customerNamesList=[],this.projectsOptions=[],this.supplierList=[],this.invoicePaymentArr=[],this.paymentMethod=[],this.serviceInvoiceList=[],this.serviceInvoiceOptions=[],this.autoRenewal=v.Jn,this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved"},this.form=new a.nJ({_id:new a.p4(null),customerName:new a.p4(null,[a.kI.required]),customer:new a.p4(null),projectName:new a.p4(null,[a.kI.required]),project:new a.p4(null),outstandingAmount:new a.p4(null),serviceInvoice:new a.p4(null),serviceInvoiceNumber:new a.p4(null,[a.kI.required]),serviceInvoiceDate:new a.p4(null,[a.kI.required]),totalValue:new a.p4(null),totalAmountWithTax:new a.p4(null),paymentHistory:new a.p4([]),status:new a.p4(null)})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(t,n,i){this.router.navigate([t],{queryParams:{id:n,action:i}})}reset(){this.form.reset(),this.projectsOptions=[],this.serviceInvoiceOptions=[],this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,j.IB))return;this.form.enable();let t=this.form.value;t.paymentHistory=this.invoicePaymentArr,t._id?this.update(t):(delete t._id,this.create(t))}create(t){this.spinner.show(),this.invoicePaymentService.create(t).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.router.navigate(["/default/accounts/transactions/invoice_payment/list"])})}update(t){this.spinner.show(),this.invoicePaymentService.update(t._id,t).subscribe(n=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(n.message),this.router.navigate(["/default/accounts/transactions/invoice_payment/list"])})}getInitialData(){this.spinner.show(),this.invoicePaymentService.getAllMasterData({}).subscribe(t=>{this.form.controls.status.setValue(this.statusArr[this.action]),this.projectList=t.projectList,this.supplierList=t.supplierList,this.customerNamesList=t.customersList,this.paymentMethod=t.paymentMethod,this.serviceInvoiceList=t.serviceInvoiceList,this.activatedRoute.queryParams.pipe((0,D.z)(n=>(this.action=n.action,this.utilityService.accessDenied(this.action),n.id?this.invoicePaymentService.getById(n.id):(0,N.of)({})))).subscribe(n=>{this.spinner.hide(),0!=Object.keys(n).length&&(this.projectList.length>0&&(this.projectsOptions=this.projectList.filter(i=>i.customer==n?.customer)),this.serviceInvoiceList.length>0&&(this.serviceInvoiceOptions=this.serviceInvoiceList.filter(i=>i.project==n?.project)),n.serviceInvoiceDate&&(n.serviceInvoiceDate=this.utilityService.getFormatDate(n.serviceInvoiceDate,"YYYY-MM-DD")),this.invoicePaymentArr=n.paymentHistory,n.status=this.statusArr[this.action],this.form.patchValue(n),["view"].includes(this.action)&&this.form.disable())})})}serviceSetValue(){this.f.serviceInvoiceNumber.setValue(null),this.f.serviceInvoice.setValue(null),this.f.serviceInvoiceDate.setValue(null),this.f.totalValue.setValue(null),this.f.totalAmountWithTax.setValue(null),this.serviceInvoiceOptions=[]}setProjectDetails(t){this.f.customer.setValue(t?._id),this.projectList.length>0&&(this.f.project.setValue(null),this.f.projectName.setValue(null),this.f.outstandingAmount.setValue(null),this.serviceSetValue(),this.projectsOptions=this.projectList.filter(n=>n.customer==t?._id))}setProjectId(t){this.f.project.setValue(t?._id),this.f.outstandingAmount.setValue(t?.balanceAmount),this.serviceInvoiceList.length>0&&(this.serviceSetValue(),this.serviceInvoiceOptions=this.serviceInvoiceList.filter(n=>n?.project==t?._id))}openInvoicePaymentModel(){const t=this.modalService.open(L,{centered:!0,size:"xl",backdrop:"static",keyboard:!1,windowClass:"modelPage"});t.componentInstance.action=this.action,t.componentInstance.invoicePaymentArr=this.invoicePaymentArr,t.componentInstance.paymentMethod=this.paymentMethod,t.componentInstance.totalAmountWithTax=this.f.totalAmountWithTax.value,t.result.then(n=>{n&&["create","edit"].includes(this.action)&&(this.invoicePaymentArr=n)},n=>{})}setInvoiceDetails(t){this.f.serviceInvoiceDate.setValue(this.utilityService.getFormatDate(t?.serviceInvoiceDate,"YYYY-MM-DD")),this.f.serviceInvoice.setValue(t?._id),this.f.totalValue.setValue(Math.round(+t?.totalValue)),this.f.totalAmountWithTax.setValue(Math.round(+t?.totalAmountWithTax))}SIDetails(){window.open(`${window.location.origin}/#/print/service_invoice?id=${this.f.serviceInvoice.value}&action=print&preview=previewSI`,"_blank")}static#e=this.\u0275fac=function(n){return new(n||r)(e.Y36(d.F0),e.Y36(d.gz),e.Y36(u.V),e.Y36(u.kl),e.Y36(f.p),e.Y36(Z.RJ),e.Y36(u.tI),e.Y36(A.FF))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-invoice-payment-form"]],decls:55,vars:13,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["bindLabel","customerName","bindValue","customerName","formControlName","customerName",3,"items","clearable","change"],["bindLabel","projectName","bindValue","projectName","formControlName","projectName",3,"items","clearable","change"],["type","text","formControlName","outstandingAmount","readonly","",1,"form-control"],[1,"form-label","d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"disabled","click"],["bindLabel","serviceInvoiceNumber","bindValue","serviceInvoiceNumber","formControlName","serviceInvoiceNumber",3,"items","clearable","change"],[1,"col-md-3"],["type","date","formControlName","serviceInvoiceDate","readonly","",1,"form-control"],["type","text","formControlName","totalValue","readonly","",1,"form-control"],["type","text","formControlName","totalAmountWithTax","readonly","",1,"form-control"],[1,"col-3","d-flex","align-items-end"],[1,"d-grid","flex-grow-1"],["type","button",1,"btn","btn-primary",3,"click"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5",3,"ngClass"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(n,i){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," Customer"),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"ng-select",9),e.NdJ("change",function(s){return i.setProjectDetails(s)}),e.qZA()(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Project"),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"ng-select",10),e.NdJ("change",function(s){return i.setProjectId(s)}),e.qZA()(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23," Outstanding Amount "),e._UZ(24,"span",8),e.qZA(),e._UZ(25,"input",11),e.qZA(),e.TgZ(26,"div",6)(27,"label",12),e._uU(28," Invoice "),e.TgZ(29,"button",13),e.NdJ("click",function(){return i.SIDetails()}),e._uU(30," Details "),e.qZA()(),e.TgZ(31,"ng-select",14),e.NdJ("change",function(s){return i.setInvoiceDetails(s)}),e.qZA()()(),e.TgZ(32,"div",5)(33,"div",15)(34,"label",7),e._uU(35," Invoice Date "),e.TgZ(36,"span",8),e._uU(37,"*"),e.qZA()(),e._UZ(38,"input",16),e.qZA(),e.TgZ(39,"div",15)(40,"label",7),e._uU(41," Invoice Amount (W/O GST) "),e._UZ(42,"span",8),e.qZA(),e._UZ(43,"input",17),e.qZA(),e.TgZ(44,"div",15)(45,"label",7),e._uU(46," Invoice Amount (With GST) "),e._UZ(47,"span",8),e.qZA(),e._UZ(48,"input",18),e.qZA(),e.TgZ(49,"div",19)(50,"div",20)(51,"button",21),e.NdJ("click",function(){return i.openInvoicePaymentModel()}),e._uU(52," Invoice Payment "),e.qZA()()()()(),e.YNc(53,F,1,0,"hr",22),e.YNc(54,Y,7,6,"div",23),e.qZA()()),2&n&&(e.Q6J("formGroup",i.form),e.xp6(5),e.hij("Invoice Payment (",e.lcZ(6,11,i.action),") "),e.xp6(9),e.Q6J("items",i.customerNamesList)("clearable",!1),e.xp6(6),e.Q6J("items",i.projectsOptions)("clearable",!1),e.xp6(9),e.Q6J("disabled",!i.form.controls.serviceInvoiceNumber.value),e.xp6(2),e.Q6J("items",i.serviceInvoiceOptions)("clearable",!1),e.xp6(22),e.Q6J("ngIf","view"!=i.action),e.xp6(1),e.Q6J("ngIf","view"!=i.action))},dependencies:[l.mk,l.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,k.w9,l.rS],encapsulation:2})}return r})();var V=c(19964),E=c(56208);const Q=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:w},{path:"form",component:O,resolve:{accessScreen:V.xr}}];let R=(()=>{class r{static#e=this.\u0275fac=function(n){return new(n||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[l.ez,d.Bz.forChild(Q),E.m]})}return r})()},13107:(b,h,c)=>{c.d(h,{t:()=>l});const l={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(b,h,c)=>{c.d(h,{J:()=>l});const l=({data:d,headers:g,widths:v,title:_})=>({tableData:{widths:v,headerRows:1,body:[g.map(f=>({text:f.header,style:"header"})),...d.map(f=>g.map(y=>({style:"subheader",text:f[y.key]})))]},title:_})}}]);