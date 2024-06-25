"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1758],{59280:(Z,h,r)=>{r.r(h),r.d(h,{PaidHolidaysModule:()=>Y});var c=r(96814),p=r(1076),y=r(43818),g=r(25116),f=r(83935),t=r(65879),u=r(2742),m=r(68187),v=r(88059),T=r(53421);function A(s,d){if(1&s){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",18),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",19),t._UZ(13,"button",20),t.TgZ(14,"div",21)(15,"a",22),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateTo("../ph-form",null==o?null:o._id,"view"))}),t._UZ(16,"i",23),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",22),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.navigateTo("../ph-form",null==o?null:o._id,"edit"))}),t._UZ(19,"i",24),t._uU(20," Edit "),t.qZA(),t.TgZ(21,"a",22),t.NdJ("click",function(){const o=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.deletePaidHoliday(o))}),t._UZ(22,"i",25),t._uU(23," Delete "),t.qZA()()()()()}if(2&s){const a=d.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.serialNumber),t.xp6(2),t.Oqu(null==a?null:a.holidayName),t.xp6(2),t.Oqu(null==a?null:a.holidayDay),t.xp6(2),t.Oqu(null==a?null:a.holidayDateS),t.xp6(2),t.Oqu(null==a?null:a.holidayLocation),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const C=function(s,d,a,e){return{page:s,pageSize:d,collection:a,search:e,type:"list"}};let H=(()=>{var s;class d{constructor(e,i,o,n,_,b){this.exportExcelService=e,this.paidHolidayService=i,this.activatedRoute=o,this.router=n,this.spinner=_,this.exportToPDFService=b,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=1,this.search="",this.tableData=[],this.dataForExcel=[],this.rolePermissionActions=g.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i,action:o}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.paidHolidayService.getAll(o).subscribe(n=>{"EXCEL"==i?this.excelDownload(n.rows):"PDF"==i?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}deletePaidHoliday(e){this.spinner.show(),this.paidHolidayService.delete(e._id).subscribe(i=>{this.getAll(),this.spinner.hide()})}excelDownload(e){this.exportExcelService.exportExcel((0,f.LU)(e))}pdfDownload(e){let i=(0,f.V4)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}}return(s=d).\u0275fac=function(e){return new(e||s)(t.Y36(u.Ol),t.Y36(m.qV),t.Y36(p.gz),t.Y36(p.F0),t.Y36(u.V),t.Y36(u.$L))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-paid-holidays-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(y.j,5),2&e){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-5",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","serialNumber",3,"sort"],["sortable","holidayName",1,"text-start",3,"sort"],["sortable","holidayDay",3,"sort"],["sortable","holidayDate",3,"sort"],["sortable","holidayLocation",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","me-2","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Paid Holidays Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.navigateTo("../ph-form",null,"create")}),t._uU(7," Holiday "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(n){return i.eventHeader(n)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(15,"SN"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(17,"Holiday Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(19,"Day"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(21,"Date"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(n){return i.onSort(n)}),t._uU(23,"Location"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,A,24,8,"tr",17),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,C,i.page,i.pageSize,i.collection,i.search)),t.xp6(17),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[c.sg,v.P,y.j,T.J],encapsulation:2}),d})();var l=r(60095),P=r(21631),x=r(22096),D=r(68934),S=r(16897),U=r(1551);function F(s,d){1&s&&t._UZ(0,"hr",20)}function J(s,d){if(1&s){const a=t.EpF();t.TgZ(0,"div",21)(1,"div",22)(2,"button",23),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",24)(5,"button",25),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.submit())}),t._uU(6,"Save"),t.qZA()()()}}let w=(()=>{var s;class d{get f(){return this.form.controls}constructor(e,i,o,n,_,b,E){this.paidHolidayService=e,this.activatedRoute=i,this.spinner=o,this.toastService=n,this.validationService=_,this.utilityService=b,this.location=E,this.submitted=!1,this.action="create",this.roles=[],this.form=new l.nJ({_id:new l.p4(null),holidayName:new l.p4(null,[l.kI.required]),holidayDate:new l.p4(null,[l.kI.required]),holidayDay:new l.p4(""),holidayLocation:new l.p4(null)})}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,D.WJ))return;let e=this.form.value;e._id?this.update(e._id):(delete e.id,this.create(e))}create(e){this.spinner.show(),this.paidHolidayService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(e){this.spinner.show(),this.paidHolidayService.update(e,this.form.value).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,P.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.paidHolidayService.getById(e.id):(0,x.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.holidayDate&&(e.holidayDate=this.utilityService.getFormatDate(e.holidayDate,"YYYY-MM-DD")),this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}day(e){this.f.holidayDay.setValue(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e.target.value).getDay()])}}return(s=d).\u0275fac=function(e){return new(e||s)(t.Y36(m.qV),t.Y36(p.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(S.RJ),t.Y36(u.tI),t.Y36(c.Ye))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-paid-holidays-form"]],decls:47,vars:9,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row","mb-4"],[1,"col-md-6"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","holidayName",1,"form-control"],[1,"error-left",3,"control"],["type","date","formControlName","holidayDate",1,"form-control",3,"change"],["type","text","formControlName","holidayDay","readonly","",1,"form-control"],["formControlName","holidayLocation",1,"form-select"],["selected","","disabled","",3,"value"],["value","Office"],["value","Factory"],["value","Office & Factory"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"],["type","submit",1,"btn","btn-primary","btn-lg",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Holiday Name "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9)(15,"validation-messages",10),t.qZA(),t.TgZ(16,"div",6)(17,"label",7),t._uU(18," Date "),t.TgZ(19,"span",8),t._uU(20,"*"),t.qZA()(),t.TgZ(21,"input",11),t.NdJ("change",function(n){return i.day(n)}),t.qZA(),t._UZ(22,"validation-messages",10),t.qZA()(),t.TgZ(23,"div",5)(24,"div",6)(25,"label",7),t._uU(26," Day "),t.TgZ(27,"span",8),t._uU(28,"*"),t.qZA()(),t._UZ(29,"input",12),t.qZA(),t.TgZ(30,"div",6)(31,"label",7),t._uU(32," Location "),t.TgZ(33,"span",8),t._uU(34,"*"),t.qZA()(),t.TgZ(35,"div")(36,"select",13)(37,"option",14),t._uU(38,"Select"),t.qZA(),t.TgZ(39,"option",15),t._uU(40,"Office"),t.qZA(),t.TgZ(41,"option",16),t._uU(42,"Factory"),t.qZA(),t.TgZ(43,"option",17),t._uU(44,"Office & Factory"),t.qZA()()()()()(),t.YNc(45,F,1,0,"hr",18),t.YNc(46,J,7,0,"div",19),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("Paid Holidays [",t.lcZ(6,7,i.action),"]"),t.xp6(10),t.Q6J("control",i.form.controls.holidayName),t.xp6(7),t.Q6J("control",i.form.controls.holidayDate),t.xp6(15),t.Q6J("value",null),t.xp6(8),t.Q6J("ngIf","view"!==i.action),t.xp6(1),t.Q6J("ngIf","view"!==i.action))},dependencies:[c.O5,U.s,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.sg,l.u,c.rS],encapsulation:2}),d})();var N=r(56208);const q=[{path:"",redirectTo:"ph-list",pathMatch:"full"},{path:"ph-list",component:H},{path:"ph-form",component:w,resolve:{accessScreen:r(65876).x}}];let Y=(()=>{var s;class d{}return(s=d).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez,N.m,p.Bz.forChild(q)]}),d})()},13107:(Z,h,r)=>{r.d(h,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(Z,h,r)=>{r.d(h,{J:()=>c});const c=({data:p,headers:y,widths:g,title:f})=>({tableData:{widths:g,headerRows:1,body:[y.map(m=>({text:m.header,style:"header"})),...p.map(m=>y.map(v=>({style:"subheader",text:m[v.key]})))]},title:f})}}]);