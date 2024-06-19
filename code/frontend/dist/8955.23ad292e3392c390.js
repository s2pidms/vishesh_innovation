"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8955],{38955:(L,m,r)=>{r.r(m),r.d(m,{QuestioniersModule:()=>N});var l=r(96814),p=r(1076),b=r(56208),T=r(25116),g=r(43818),f=r(93383),t=r(65879),u=r(2742),v=r(78212),_=r(88059),A=r(53421);function y(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",16),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",17),t._UZ(9,"button",18),t.TgZ(10,"div",19)(11,"a",20),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",o,"view"))}),t._UZ(12,"i",21),t._uU(13," View "),t.qZA(),t.TgZ(14,"a",20),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",o,"edit"))}),t._UZ(15,"i",22),t._uU(16," Edit "),t.qZA()()()()()}if(2&s){const e=d.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.orderNo),t.xp6(2),t.Oqu(null==e?null:e.type),t.xp6(2),t.Oqu(null==e?null:e.questionnaire),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",i.rolePermissionActions.editAction)}}const C=function(s,d,e,i){return{page:s,pageSize:d,collection:e,search:i,type:"list"}};let x=(()=>{class s{constructor(e,i,n,o,a,h){this.exportExcelService=e,this.questionsService=i,this.activatedRoute=n,this.router=o,this.spinner=a,this.exportToPDFService=h,this.page=1,this.pageSize=8,this.collection=0,this.column="orderNo",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=T.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,n){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:n}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.questionsService.getAll(n).subscribe(o=>{"EXCEL"==i?this.excelDownload(o.rows):"PDF"==i?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,f.fs)(e))}pdfDownload(e){let i=(0,f.C7)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(u.Ol),t.Y36(v.w1),t.Y36(p.gz),t.Y36(p.F0),t.Y36(u.V),t.Y36(u.$L))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-questionnaires-list"]],viewQuery:function(i,n){if(1&i&&t.Gf(g.j,5),2&i){let o;t.iGM(o=t.CRH())&&(n.headers=o)}},decls:24,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","orderNo",3,"sort"],["sortable","type",3,"sort"],["sortable","questionnaire",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Questions Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return n.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," New Question "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return n.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(15,"Order"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(17,"Type"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return n.onSort(a)}),t._uU(19,"Questions"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Action"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,y,17,5,"tr",15),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,C,n.page,n.pageSize,n.collection,n.search)),t.xp6(13),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[l.sg,_.P,g.j,A.J],encapsulation:2})}return s})();var c=r(60095),Q=r(21631),q=r(22096);function S(s,d){1&s&&t._UZ(0,"hr",22)}const Z=function(s){return{"d-none":s}};function U(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",26)(5,"button",25),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,Z,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,Z,"View"==e.action))}}const J=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:x},{path:"form",component:(()=>{class s{constructor(e,i,n,o,a,h){this.questionsService=e,this.activatedRoute=i,this.spinner=n,this.toastService=o,this.utilityService=a,this.location=h,this.submitted=!1,this.action="create",this.form=new c.nJ({_id:new c.p4(null),orderNo:new c.p4(""),type:new c.p4(null),questionnaire:new c.p4("")})}ngOnInit(){this.getInitialData()}submit(){this.submitted=!0;let e=this.form.value;e.revision&&(e.revision=[e.revision]),e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.questionsService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}create(e){this.spinner.show(),this.questionsService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,Q.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.questionsService.getById(e.id):(0,q.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(v.w1),t.Y36(p.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(u.tI),t.Y36(l.Ye))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-questionnaires-form"]],decls:41,vars:7,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","number","formControlName","orderNo",1,"form-control"],["formControlName","type",1,"form-select"],["disabled","",3,"value"],["value","Customer Inputs"],["value","Technical"],["value","Economic"],["value","Legal"],["value","Operational"],["value","Scheduling"],[1,"col-6"],["type","text","formControlName","questionnaire",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(i,n){1&i&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11,"Order "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17,"Type"),t.qZA(),t.TgZ(18,"select",10)(19,"option",11),t._uU(20,"Select Type"),t.qZA(),t.TgZ(21,"option",12),t._uU(22,"Customer Inputs"),t.qZA(),t.TgZ(23,"option",13),t._uU(24,"Technical"),t.qZA(),t.TgZ(25,"option",14),t._uU(26,"Economic"),t.qZA(),t.TgZ(27,"option",15),t._uU(28,"Legal"),t.qZA(),t.TgZ(29,"option",16),t._uU(30,"Operational"),t.qZA(),t.TgZ(31,"option",17),t._uU(32,"Scheduling"),t.qZA()()(),t.TgZ(33,"div",18)(34,"label",7),t._uU(35,"Question "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t._UZ(38,"input",19),t.qZA()()(),t.YNc(39,S,1,0,"hr",20),t.YNc(40,U,7,6,"div",21),t.qZA()()),2&i&&(t.Q6J("formGroup",n.form),t.xp6(5),t.hij("",t.lcZ(6,5,n.action)," Question"),t.xp6(14),t.Q6J("value",null),t.xp6(20),t.Q6J("ngIf","view"!==n.action),t.xp6(1),t.Q6J("ngIf","view"!==n.action))},dependencies:[l.mk,l.O5,c.YN,c.Kr,c.Fj,c.wV,c.EJ,c.JJ,c.JL,c.sg,c.u,l.rS],encapsulation:2})}return s})(),resolve:{accessScreen:r(65876).x}}];let N=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[l.ez,p.Bz.forChild(J),b.m]})}return s})()}}]);