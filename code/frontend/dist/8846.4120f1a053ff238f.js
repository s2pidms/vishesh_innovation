"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8846],{26834:(q,m,l)=>{l.r(m),l.d(m,{TravelRequestModule:()=>I});var u=l(96814),p=l(1076),h=l(43818),_=l(25116),f=l(36144),e=l(65879),c=l(98977),v=l(72342),T=l(88059),A=l(53421);function b(s,d){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td")(20,"div",22),e._UZ(21,"button",23),e.TgZ(22,"div",24)(23,"a",25),e.NdJ("click",function(){const n=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("/default/accounts/transactions/travel_request/form",n,"view"))}),e._UZ(24,"i",26),e._uU(25," View "),e.qZA(),e.TgZ(26,"a",25),e.NdJ("click",function(){const n=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("/default/accounts/transactions/travel_request/form",n,"edit"))}),e._UZ(27,"i",27),e._uU(28," Edit "),e.qZA(),e.TgZ(29,"a",28),e.NdJ("click",function(){const n=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("/default/accounts/transactions/travel_request/form",n,"reject"))}),e._UZ(30,"i",29),e._uU(31," Reject "),e.qZA(),e.TgZ(32,"a",28),e.NdJ("click",function(){const n=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.navigateTo("/default/accounts/transactions/travel_request/form",n,"approve"))}),e._UZ(33,"i",30),e._uU(34," Approve "),e.qZA()()()()()}if(2&s){const t=d.$implicit,r=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.travelCode),e.xp6(2),e.Oqu(null==t?null:t.raisedBy),e.xp6(2),e.Oqu(null==t?null:t.travelStartDate),e.xp6(2),e.Oqu(null==t?null:t.travelEndDate),e.xp6(2),e.Oqu(null==t?null:t.totalDays),e.xp6(2),e.Oqu(null==t?null:t.purposeOfTravel),e.xp6(2),e.Oqu(null==t?null:t.estimatedBudget),e.xp6(2),e.Oqu(null==t?null:t.costAllocation),e.xp6(2),e.Oqu(null==t?null:t.status),e.xp6(5),e.Q6J("accessType",r.rolePermissionActions.viewAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.status)||"Rejected"===(null==t?null:t.status)),e.Q6J("accessType",r.rolePermissionActions.editAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.status)||"Rejected"===(null==t?null:t.status)),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.status)||"Rejected"===(null==t?null:t.status))}}const y=function(s,d,t,r){return{page:s,pageSize:d,collection:t,search:r,type:"list"}};let D=(()=>{class s{constructor(t,r,a,n,i,Z){this.exportExcelService=t,this.travelRequestService=r,this.router=a,this.spinner=n,this.activatedRoute=i,this.exportToPDFService=Z,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.dataForExcel=[],this.rolePermissionActions=_.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,r,a){return"Awaiting Approval"==r.status&&"edit"==a||"Awaiting Approval"==r.status&&"approve"==a||"Awaiting Approval"==r.status&&"reject"==a||"Approved"==r.status&&"view"==a||"Rejected"==r.status&&"view"==a||"Awaiting Approval"==r.status&&"view"==a||"create"==a?void this.router.navigate([t],{queryParams:{id:r?._id,action:a}}):null}trackByFn(t,r){return r?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,r=""){this.spinner.show();let a={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.travelRequestService.getAll(a).subscribe(n=>{"EXCEL"==r?this.excelDownload(n.rows):"PDF"==r?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(t){this.exportExcelService.exportExcel((0,f.jg)(t))}pdfDownload(t){let r=(0,f.T6)(t);this.exportToPDFService.generatePdf(r.tableData,r.title)}onSort({column:t,direction:r}){this.headers.forEach(a=>{a.sortable!==t&&(a.direction="")}),this.column=t,this.direction="asc"==r?1:-1,this.getAll()}static#e=this.\u0275fac=function(r){return new(r||s)(e.Y36(c.Ol),e.Y36(v.X),e.Y36(p.F0),e.Y36(c.V),e.Y36(p.gz),e.Y36(c.$L))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-travel-request-list"]],viewQuery:function(r,a){if(1&r&&e.Gf(h.j,5),2&r){let n;e.iGM(n=e.CRH())&&(a.headers=n)}},decls:36,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","travelCode",3,"sort"],["sortable","raisedBy",3,"sort"],["sortable","travelStartDate",3,"sort"],["sortable","travelEndDate",3,"sort"],["sortable","totalDays",3,"sort"],["sortable","purposeOfTravel",3,"sort"],["sortable","estimatedBudget",3,"sort"],["sortable","costAllocation",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa","fa-times","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","text-success"]],template:function(r,a){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Travel Request Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return a.navigateTo("/default/accounts/transactions/travel_request/form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Travel Request "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(i){return a.eventHeader(i)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(15,"Travel Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(17,"Raised By"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(19,"Travel Start Date"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(21,"Travel End Date"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(23,"Total # of Days"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(25,"Purpose of Travel"),e.qZA(),e.TgZ(26,"th",18),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(27,"Estimated Budget"),e.qZA(),e.TgZ(28,"th",19),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(29,"Cost Allocation"),e.qZA(),e.TgZ(30,"th",20),e.NdJ("sort",function(i){return a.onSort(i)}),e._uU(31,"Status"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Action"),e.qZA()()(),e.TgZ(34,"tbody"),e.YNc(35,b,35,17,"tr",21),e.qZA()()()()),2&r&&(e.xp6(4),e.Q6J("accessType",a.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,y,a.page,a.pageSize,a.collection,a.search)),e.xp6(25),e.Q6J("ngForOf",a.tableData)("ngForTrackBy",a.trackByFn))},dependencies:[u.sg,T.P,h.j,A.J],encapsulation:2})}return s})();var o=l(60095),C=l(21631),R=l(22096);const U=[{message:"Travel Code is Required",key:"travelCode"},{message:"Travel From is Required",key:"travelForm"},{message:"Travel Destination is Required",key:"travelDestination"},{message:"Travel Start Date is Required",key:"travelStartDate"},{message:"Travel End Date is Required",key:"travelEndDate"},{message:"Purpose of Travel is Required",key:"purposeOfTravel"},{message:"Estimated Budget is Required",key:"estimatedBudget"},{message:"Cost Allocation is Required",key:"costAllocation"}];var S=l(16897),x=l(25866),w=l(50363);function F(s,d){if(1&s&&(e.TgZ(0,"option",29),e._uU(1),e.qZA()),2&s){const t=d.$implicit;e.Q6J("value",t.parameterName),e.xp6(1),e.hij(" ",t.parameterLabel," ")}}function J(s,d){1&s&&e._UZ(0,"hr",23)}const g=function(s){return{"d-none":s}};function N(s,d){if(1&s){const t=e.EpF();e.TgZ(0,"div",30)(1,"div",31)(2,"button",32),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.reset())}),e._uU(3,"Reset"),e.qZA()(),e.TgZ(4,"div",33)(5,"button",32),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submit())}),e._uU(6,"Save"),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,g,"View"==t.action)),e.xp6(3),e.Q6J("ngClass",e.VKq(4,g,"View"==t.action))}}function k(s,d){if(1&s){const t=e.EpF();e.TgZ(0,"div",34)(1,"div",33)(2,"button",32),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submit())}),e._uU(3,"Approve"),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,g,"View"==t.action))}}function E(s,d){if(1&s){const t=e.EpF();e.TgZ(0,"div",34)(1,"div",33)(2,"button",32),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.submit())}),e._uU(3,"Reject"),e.qZA()()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,g,"View"==t.action))}}const Y=function(){return["view","approve","reject"]},M=function(){return["approve"]},O=function(){return["reject"]};let L=(()=>{class s{constructor(t,r,a,n,i,Z,P,Q){this.router=t,this.activatedRoute=r,this.spinner=a,this.toastService=n,this.travelRequestService=i,this.validationService=Z,this.utilityService=P,this.storageService=Q,this.submitted=!1,this.action="create",this.customersList=[],this.paymentMethod=[],this.modeOfTransport=[],this.currencies=[],this.supportingDocumentsFile=null,this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",reject:"Rejected"},this.user={},this.form=new o.nJ({_id:new o.p4(null),travelCode:new o.p4(null),requestDate:new o.p4(null),travelForm:new o.p4(null,[o.kI.required]),travelDestination:new o.p4(null,[o.kI.required]),travelStartDate:new o.p4(null,[o.kI.required]),travelEndDate:new o.p4(null,[o.kI.required]),purposeOfTravel:new o.p4(null,[o.kI.required]),modeOfTransportation:new o.p4(null),estimatedBudget:new o.p4(null,[o.kI.required]),costAllocation:new o.p4(null,[o.kI.required]),customer:new o.p4(null),paymentMethod:new o.p4(null),raisedBy:new o.p4(null),supportingDocumentsFile:new o.p4(null),supportingDocumentsFileUrl:new o.p4(null),status:new o.p4(null)})}get f(){return this.form.controls}getRaisedByName(){this.user=this.storageService.get("IDMSAUser"),this.form.controls.raisedBy.setValue(this.user.name)}ngOnInit(){this.getRaisedByName(),this.getInitialData()}navigateTo(t,r,a){this.router.navigate([t],{queryParams:{id:r,action:a}})}reset(){this.form.reset(),this.getRaisedByName(),this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,U))return;let t=this.form.value,r=new FormData;r.append("key","travelRequest");for(let a=0;a<Object.keys(t).length;a++){const n=Object.keys(t)[a];t[n]&&"object"==typeof t[n]?t[n]&&r.append(n,JSON.stringify(t[n])):t[n]&&r.append(n,t[n])}this.supportingDocumentsFile&&"object"==typeof this.supportingDocumentsFile&&r.append("supportingDocumentsFile",this.supportingDocumentsFile,this.supportingDocumentsFile.name),t._id?this.update(t._id,r):(delete t._id,this.create(r))}create(t){this.spinner.show(),this.travelRequestService.create(t).subscribe(r=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(r.message),this.router.navigate(["/default/accounts/transactions/travel_request/list"])})}update(t,r){this.spinner.show(),this.travelRequestService.update(t,r).subscribe(a=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(a.message),this.router.navigate(["/default/accounts/transactions/travel_request/list"])})}getInitialData(){this.spinner.show(),this.travelRequestService.getAllMasterData({}).subscribe(t=>{this.form.controls.travelCode.setValue(t.autoIncrementNo),this.form.controls.requestDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.travelStartDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue(this.statusArr[this.action]),this.customersList=t.customersList,this.modeOfTransport=t.modeOfTransport,this.currencies=t.currencies,this.paymentMethod=t.paymentMethod,this.activatedRoute.queryParams.pipe((0,C.z)(r=>(this.action=r.action,this.utilityService.accessDenied(this.action),r.id?this.travelRequestService.getById(r.id):(0,R.of)({})))).subscribe(r=>{this.spinner.hide(),0!=Object.keys(r).length&&(r.requestDate&&(r.requestDate=this.utilityService.getFormatDate(r.requestDate,"YYYY-MM-DD")),r.travelStartDate&&(r.travelStartDate=this.utilityService.getFormatDate(r.travelStartDate,"YYYY-MM-DD")),r.travelEndDate&&(r.travelEndDate=this.utilityService.getFormatDate(r.travelEndDate,"YYYY-MM-DD")),r.status=this.statusArr[this.action],this.form.patchValue(r),"edit"!=this.action&&this.form.disable())})})}setDateValidation(){this.form.controls.travelStartDate.value>this.form.controls.travelEndDate.value&&(this.toastService.warning("Travel End Date should not be smaller than Travel start date."),this.form.controls.travelEndDate.setValue(null))}setCustomerId(t){this.form.controls.customer.setValue(t?._id)}static#e=this.\u0275fac=function(r){return new(r||s)(e.Y36(p.F0),e.Y36(p.gz),e.Y36(c.V),e.Y36(c.kl),e.Y36(v.X),e.Y36(S.RJ),e.Y36(c.tI),e.Y36(c.V1))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-travel-request-form"]],decls:90,vars:21,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","travelCode","readonly","",1,"form-control"],["type","date","formControlName","requestDate",1,"form-control"],["type","text","formControlName","travelForm",1,"form-control"],["type","text","formControlName","travelDestination",1,"form-control"],["type","date","formControlName","travelStartDate",1,"form-control",3,"change"],["type","date","formControlName","travelEndDate",1,"form-control",3,"change"],["type","text","formControlName","purposeOfTravel",1,"form-control"],["bindLabel","label","bindValue","value","formControlName","modeOfTransportation",3,"items","clearable"],["type","number","formControlName","estimatedBudget",1,"form-control"],["bindLabel","customerName","bindValue","customerName","formControlName","costAllocation",3,"items","clearable","change"],["formControlName","paymentMethod",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","raisedBy","readonly","",1,"form-control"],[1,"row","line-border"],[1,"col-12"],[3,"fileName","url","label","file","fileChange"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],["class","d-flex justify-content-center ",4,"ngIf"],[3,"value"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"],[1,"d-flex","justify-content-center"]],template:function(r,a){1&r&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11," Travel Code "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," Request Date"),e._UZ(18,"span",8),e.qZA(),e._UZ(19,"input",10),e.qZA(),e.TgZ(20,"div",6)(21,"label",7),e._uU(22," Travel From "),e.TgZ(23,"span",8),e._uU(24,"*"),e.qZA()(),e._UZ(25,"input",11),e.qZA(),e.TgZ(26,"div",6)(27,"label",7),e._uU(28," Travel Destination "),e.TgZ(29,"span",8),e._uU(30,"*"),e.qZA()(),e._UZ(31,"input",12),e.qZA()(),e.TgZ(32,"div",5)(33,"div",6)(34,"label",7),e._uU(35," Travel Start Date "),e.TgZ(36,"span",8),e._uU(37,"*"),e.qZA()(),e.TgZ(38,"input",13),e.NdJ("change",function(){return a.setDateValidation()}),e.qZA()(),e.TgZ(39,"div",6)(40,"label",7),e._uU(41," Travel End Date "),e.TgZ(42,"span",8),e._uU(43,"*"),e.qZA()(),e.TgZ(44,"input",14),e.NdJ("change",function(){return a.setDateValidation()}),e.qZA()(),e.TgZ(45,"div",6)(46,"label",7),e._uU(47," Purpose of Travel "),e.TgZ(48,"span",8),e._uU(49,"*"),e.qZA()(),e._UZ(50,"input",15),e.qZA(),e.TgZ(51,"div",6)(52,"label",7),e._uU(53," Mode of Transportation"),e._UZ(54,"span",8),e.qZA(),e._UZ(55,"ng-select",16),e.qZA()(),e.TgZ(56,"div",5)(57,"div",6)(58,"label",7),e._uU(59," Estimated Budget "),e.TgZ(60,"span",8),e._uU(61,"*"),e.qZA()(),e._UZ(62,"input",17),e.qZA(),e.TgZ(63,"div",6)(64,"label",7),e._uU(65,"Cost Allocation"),e.TgZ(66,"span",8),e._uU(67,"*"),e.qZA()(),e.TgZ(68,"ng-select",18),e.NdJ("change",function(i){return a.setCustomerId(i)}),e.qZA()(),e.TgZ(69,"div",6)(70,"label",7),e._uU(71," Payment Method "),e._UZ(72,"span",8),e.qZA(),e.TgZ(73,"select",19)(74,"option",20),e._uU(75,"Select Payment Method"),e.qZA(),e.YNc(76,F,2,2,"option",21),e.qZA()(),e.TgZ(77,"div",6)(78,"label",7),e._uU(79," Raised By "),e._UZ(80,"span",8),e.qZA(),e._UZ(81,"input",22),e.qZA()()(),e._UZ(82,"hr",23),e.TgZ(83,"div",5)(84,"div",24)(85,"app-file-upload",25),e.NdJ("fileChange",function(i){return a.supportingDocumentsFile=i}),e.qZA()()(),e.YNc(86,J,1,0,"hr",26),e.YNc(87,N,7,6,"div",27),e.YNc(88,k,4,3,"div",28),e.YNc(89,E,4,3,"div",28),e.qZA()()),2&r&&(e.Q6J("formGroup",a.form),e.xp6(5),e.hij("Travel Request (",e.lcZ(6,16,a.action),") "),e.xp6(50),e.Q6J("items",a.modeOfTransport)("clearable",!1),e.xp6(13),e.Q6J("items",a.customersList)("clearable",!1),e.xp6(6),e.Q6J("value",null),e.xp6(2),e.Q6J("ngForOf",a.paymentMethod),e.xp6(9),e.Q6J("fileName",a.form.controls.supportingDocumentsFile.value)("url",a.form.controls.supportingDocumentsFileUrl.value)("label","Upload Supporting Documents")("file",a.supportingDocumentsFile),e.xp6(1),e.Q6J("ngIf","view"!=a.action),e.xp6(1),e.Q6J("ngIf",!e.DdM(18,Y).includes(a.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(19,M).includes(a.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(20,O).includes(a.action)))},dependencies:[u.mk,u.sg,u.O5,x.Y,o._Y,o.YN,o.Kr,o.Fj,o.wV,o.EJ,o.JJ,o.JL,o.sg,o.u,w.w9,u.rS],encapsulation:2})}return s})();var j=l(19964),V=l(56208);const B=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:D},{path:"form",component:L,resolve:{accessScreen:j.xr}}];let I=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[u.ez,p.Bz.forChild(B),V.m]})}return s})()},13107:(q,m,l)=>{l.d(m,{t:()=>u});const u={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(q,m,l)=>{l.d(m,{J:()=>u});const u=({data:p,headers:h,widths:_,title:f})=>({tableData:{widths:_,headerRows:1,body:[h.map(v=>({text:v.header,style:"header"})),...p.map(v=>h.map(T=>({style:"subheader",text:v[T.key]})))]},title:f})}}]);