"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7782],{90573:(g,p,l)=>{l.r(p),l.d(p,{SalaryAdvSummaryModule:()=>I});var d=l(96814),c=l(1076),y=l(43818),f=l(25116),h=l(27991),t=l(65879),v=l(68187),m=l(99328),A=l(88059),C=l(53421),M=l(83344);function Y(s,u){if(1&s){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",22),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"date"),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td")(22,"div",23),t._UZ(23,"button",24),t.TgZ(24,"div",25)(25,"a",26),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateTo("/default/HR/transactions/salary_adv_summary/sas-form",o,"view"))}),t._UZ(26,"i",27),t._uU(27," View "),t.qZA(),t.TgZ(28,"a",26),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateTo("/default/HR/transactions/salary_adv_summary/sas-form",o,"edit"))}),t._UZ(29,"i",28),t._uU(30," Edit "),t.qZA(),t.TgZ(31,"a",26),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateTo("/default/HR/transactions/salary_adv_summary/sas-form",o,"approve"))}),t._UZ(32,"i",29),t._uU(33," Approve "),t.qZA(),t.TgZ(34,"a",26),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateTo("/default/HR/transactions/salary_adv_summary/sas-form",o,"reject"))}),t._UZ(35,"i",30),t._uU(36," Reject "),t.qZA()()()()()}if(2&s){const a=u.$implicit,r=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.requestDateS),t.xp6(2),t.Oqu(null==a?null:a.employeeCode),t.xp6(2),t.Oqu(null==a?null:a.empFullName),t.xp6(2),t.Oqu(null==a?null:a.amount),t.xp6(2),t.Oqu(t.xi3(11,19,null==a?null:a.repayStartMonthYear,"MMM YYYY")),t.xp6(3),t.Oqu(t.xi3(14,22,null==a?null:a.repayEndMonthYear,"MMM YYYY")),t.xp6(3),t.Oqu(null==a?null:a.tenureMonths),t.xp6(2),t.Oqu(null==a?null:a.repayAmountPerMonth),t.xp6(2),t.Oqu(null==a?null:a.status),t.xp6(5),t.Q6J("accessType",r.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"==a.status||"Rejected"==a.status),t.Q6J("accessType",r.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"==a.status||"Rejected"==a.status),t.Q6J("accessType",r.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Approved"==a.status||"Rejected"==a.status),t.Q6J("accessType",r.rolePermissionActions.approveAction)}}const q=function(s,u,a,r){return{page:s,pageSize:u,collection:a,search:r,type:"list"}};let Z=(()=>{var s;class u{constructor(r,e,o,n,S,_){this.salaryAdvanceSummaryService=r,this.router=e,this.exportExcelService=o,this.activatedRoute=n,this.spinner=S,this.exportToPDFService=_,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=f.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}trackByFn(r,e){return e?._id}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}navigateTo(r,e,o){if("Approved"==e.status&&"edit"==o||"Approved"==e.status&&"approve"==o||"Approved"==e.status&&"reject"==o||"Rejected"==e.status&&"edit"==o||"Rejected"==e.status&&"approve"==o||"Rejected"==e.status&&"reject"==o)return null;this.router.navigate([r],{queryParams:{id:e?._id,action:o}})}getAll(r=!1,e=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.salaryAdvanceSummaryService.getAll(o).subscribe(n=>{"EXCEL"==e?this.excelDownload(n.rows):"PDF"==e?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(r){this.exportExcelService.exportExcel((0,h.yx)(r))}pdfDownload(r){let e=(0,h.QA)(r);this.exportToPDFService.generatePdf(e.tableData,e.title)}onSort({column:r,direction:e}){this.headers.forEach(o=>{o.sortable!==r&&(o.direction="")}),this.column=r,this.direction="asc"==e?1:-1,this.getAll()}}return(s=u).\u0275fac=function(r){return new(r||s)(t.Y36(v.jj),t.Y36(c.F0),t.Y36(m.Ol),t.Y36(c.gz),t.Y36(m.V),t.Y36(m.$L))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-salary-adv-summary-list"]],viewQuery:function(r,e){if(1&r&&t.Gf(y.j,5),2&r){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},decls:38,vars:15,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","requestDate",3,"sort"],["sortable","employeeCode",3,"sort"],["sortable","empFullName",1,"text-start",3,"sort"],["sortable","amount",3,"sort"],["sortable"," repayStartMonthYear",3,"sort"],["sortable","repayEndMonthYear",3,"sort"],["sortable","tenureMonths",3,"sort"],["sortable"," repayAmountPerMonth",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","me-2","text-success"],["aria-hidden","true",1,"fa","fa-close","fa-lg","text-primary"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Advance Salary Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return e.navigateTo("default/HR/transactions/salary_adv_summary/sas-form",{},"create")}),t._uU(7," Request Advance Salary "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(n){return e.eventHeader(n)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(15,"Request Dt."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(17,"Employee Code"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(19,"Employee Name"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(21),t.ALo(22,"companyCurrency"),t.qZA(),t.TgZ(23,"th",16),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(24,"Repay Start"),t.qZA(),t.TgZ(25,"th",17),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(26,"Repay End"),t.qZA(),t.TgZ(27,"th",18),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(28,"Tenure Months"),t.qZA(),t.TgZ(29,"th",19),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(30),t.ALo(31,"companyCurrency"),t.qZA(),t.TgZ(32,"th",20),t.NdJ("sort",function(n){return e.onSort(n)}),t._uU(33,"Status"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Action"),t.qZA()()(),t.TgZ(36,"tbody"),t.YNc(37,Y,37,25,"tr",21),t.qZA()()()()),2&r&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(10,q,e.page,e.pageSize,e.collection,e.search)),t.xp6(11),t.hij("Adv. Amt. ",t.lcZ(22,6,"INR"),""),t.xp6(9),t.hij(" Repay Amt. ",t.lcZ(31,8,"INR")," "),t.xp6(7),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[d.sg,A.P,y.j,C.J,d.uU,M.f],encapsulation:2}),u})();var i=l(60095),x=l(21631),U=l(22096),D=l(68934),F=l(16897),R=l(50363);function N(s,u){1&s&&t._UZ(0,"hr",22)}function w(s,u){if(1&s){const a=t.EpF();t.TgZ(0,"div",27)(1,"button",28),t.NdJ("click",function(){t.CHM(a);const e=t.oxw(2);return t.KtG(e.reset())}),t._uU(2,"Reset"),t.qZA()()}}function E(s,u){if(1&s){const a=t.EpF();t.TgZ(0,"div",23),t.YNc(1,w,3,0,"div",24),t.TgZ(2,"div",25)(3,"button",26),t.NdJ("click",function(){t.CHM(a);const e=t.oxw();return t.KtG(e.submit())}),t._uU(4),t.qZA()()()}if(2&s){const a=t.oxw();t.xp6(1),t.Q6J("ngIf","create"==a.action),t.xp6(3),t.lnq(" ","edit"==a.action||"create"==a.action?"Save":null," ","approve"==a.action?"Approve":null," ","reject"==a.action?"Reject":null," ")}}let T=(()=>{var s;class u{constructor(r,e,o,n,S,_,P,O){this.salaryAdvanceSummaryService=r,this.router=e,this.activatedRoute=o,this.spinner=n,this.menuTitleService=S,this.toastService=_,this.validationService=P,this.utilityService=O,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",employeesOptions:[]},this.form=new i.nJ({_id:new i.p4(null),salaryAdvanceRequestNumber:new i.p4("",[i.kI.required]),employeeId:new i.p4(null),employeeCode:new i.p4("",[i.kI.required]),requestDate:new i.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[i.kI.required]),amount:new i.p4("",[i.kI.required]),repayStartMonthYear:new i.p4(null,[i.kI.required]),repayEndMonthYear:new i.p4(null,[i.kI.required]),tenureMonths:new i.p4(1),repayAmountPerMonth:new i.p4("",[i.kI.required]),reasonForAdvance:new i.p4(""),status:new i.p4("Submitted")}),this.statusArr={create:"Submitted",approve:"Approved",reject:"Rejected",edit:"Submitted"}}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,D.LU))return;let r=this.form.value;r._id?this.update(r):(delete r._id,this.create(r))}create(r){this.spinner.show(),this.salaryAdvanceSummaryService.create(r).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.router.navigate(["/default/HR/transactions/salary_adv_summary/sas-list"])})}update(r){this.spinner.show(),this.salaryAdvanceSummaryService.update(r._id,this.form.value).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.router.navigate(["/default/HR/transactions/salary_adv_summary/sas-list"])})}selectedEmployee(r){this.form.controls.employeeCode.setValue(r?.empCode)}handleDates(){let e=this.form.controls.tenureMonths.value,o=this.utilityService.monthYearCal(this.form.controls.repayStartMonthYear.value,e);this.form.controls.repayEndMonthYear.setValue(this.utilityService.getFormatDate(o,"YYYY-MM")),this.form.controls.repayAmountPerMonth.setValue(Number(this.form.controls.amount.value/+e).toFixed(2))}getInitialData(){this.spinner.show(),this.salaryAdvanceSummaryService.getAllMasterData({}).subscribe(r=>{this.masterData=r,this.form.controls.salaryAdvanceRequestNumber.setValue(this.masterData?.autoIncrementNo),this.form.controls.requestDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.repayStartMonthYear.setValue(""),this.form.controls.status.setValue("Submitted"),this.form.controls.tenureMonths.setValue(1),this.activatedRoute.queryParams.pipe((0,x.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.salaryAdvanceSummaryService.getById(e.id):(0,U.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.repayStartMonthYear&&(e.repayStartMonthYear=this.utilityService.getFormatDate(e?.repayStartMonthYear,"YYYY-MM")),e.repayEndMonthYear&&(e.repayEndMonthYear=this.utilityService.getFormatDate(e?.repayEndMonthYear,"YYYY-MM")),e.requestDate&&(e.requestDate=this.utilityService.getFormatDate(e?.requestDate,"YYYY-MM-DD")),e.status=this.statusArr[this.action],this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})})}}return(s=u).\u0275fac=function(r){return new(r||s)(t.Y36(v.jj),t.Y36(c.F0),t.Y36(c.gz),t.Y36(m.V),t.Y36(m.Uh),t.Y36(m.kl),t.Y36(F.RJ),t.Y36(m.tI))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-salary-adv-summary-form"]],decls:69,vars:8,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row","mb-4"],[1,"col-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","label","bindValue","value","formControlName","employeeId",1,"my-2",3,"items","clearable","change"],["id","employeeCode","type","text","readonly","","formControlName","employeeCode",1,"form-control","my-2"],["id","requestDate","type","date","formControlName","requestDate","readonly","",1,"form-control","my-2"],[1,"d-flex","inputGroup"],[1,"input-group-text","rounded-0"],["id","amount","type","number","formControlName","amount",1,"form-control","my-2"],["formControlName","tenureMonths","type","number",1,"form-control","my-2"],["formControlName","repayStartMonthYear","type","month","name","repayStartMonthYear",1,"form-control","my-2",3,"change"],["id","repayEndMonthYear","formControlName","repayEndMonthYear","required","","type","month","readonly","",1,"form-control","my-2"],["formControlName","repayAmountPerMonth","id","repayAmountPerMonth","type","text","readonly","",1,"form-control","my-2"],["formControlName","reasonForAdvance","id","reasonForAdvance","type","text",1,"form-control","my-2"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],["class","d-grid col-md-1 me-4",4,"ngIf"],[1,"d-grid","col-md-1"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1","me-4"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Employee Name"),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t.TgZ(14,"ng-select",9),t.NdJ("change",function(n){return e.selectedEmployee(n)}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17,"Employee Code"),t.qZA(),t._UZ(18,"input",10),t.qZA(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21," Request Date "),t.TgZ(22,"span",8),t._uU(23,"*"),t.qZA()(),t._UZ(24,"input",11),t.qZA()(),t.TgZ(25,"div",5)(26,"div",6)(27,"label",7),t._uU(28," Amount"),t.TgZ(29,"span",8),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"div",12)(32,"div",13),t._uU(33,"\u20b9"),t.qZA(),t._UZ(34,"input",14),t.qZA()(),t.TgZ(35,"div",6)(36,"label",7),t._uU(37," Tenure[Months]"),t.TgZ(38,"span",8),t._uU(39,"*"),t.qZA()(),t._UZ(40,"input",15),t.qZA(),t.TgZ(41,"div",6)(42,"label",7),t._uU(43," Repay Start-Month'Year"),t.TgZ(44,"span",8),t._uU(45,"*"),t.qZA()(),t.TgZ(46,"input",16),t.NdJ("change",function(){return e.handleDates()}),t.qZA()()(),t.TgZ(47,"div",5)(48,"div",6)(49,"label",7),t._uU(50," Repay End - Month'Year"),t.TgZ(51,"span",8),t._uU(52,"*"),t.qZA()(),t._UZ(53,"input",17),t.qZA(),t.TgZ(54,"div",6)(55,"label",7),t._uU(56," Repay Amount/Month"),t.TgZ(57,"span",8),t._uU(58,"*"),t.qZA()(),t.TgZ(59,"div",12)(60,"div",13),t._uU(61,"\u20b9"),t.qZA(),t._UZ(62,"input",18),t.qZA()(),t.TgZ(63,"div",6)(64,"label",7),t._uU(65,"Reason for advance"),t.qZA(),t._UZ(66,"input",19),t.qZA()(),t.YNc(67,N,1,0,"hr",20),t.YNc(68,E,5,4,"div",21),t.qZA()()()),2&r&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij("Salary Advance Summary [",t.lcZ(6,6,e.action),"]"),t.xp6(9),t.Q6J("items",e.masterData.employeesOptions)("clearable",!1),t.xp6(53),t.Q6J("ngIf","view"!==e.action),t.xp6(1),t.Q6J("ngIf","view"!==e.action))},dependencies:[d.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.Q7,i.sg,i.u,R.w9,d.rS],encapsulation:2}),u})();var b=l(65876);const J=[{path:"",redirectTo:"sas-list",pathMatch:"full"},{path:"sas-list",component:Z},{path:"sas-form",component:T,resolve:{accessScreen:b.x}}];let L=(()=>{var s;class u{}return(s=u).\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(J),c.Bz]}),u})();var j=l(56208);const k=[{path:"",redirectTo:"SalaryAdvSummaryList",pathMatch:"full"},{path:"SalaryAdvSummaryList",component:Z},{path:"SalaryAdvSummaryForm",component:T,resolve:{accessScreen:b.x}}];let I=(()=>{var s;class u{}return(s=u).\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.ez,c.Bz.forChild(k),L,j.m]}),u})()},13107:(g,p,l)=>{l.d(p,{t:()=>d});const d={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(g,p,l)=>{l.d(p,{J:()=>d});const d=({data:c,headers:y,widths:f,title:h})=>({tableData:{widths:f,headerRows:1,body:[y.map(m=>({text:m.header,style:"header"})),...c.map(m=>y.map(A=>({style:"subheader",text:m[A.key]})))]},title:h})}}]);