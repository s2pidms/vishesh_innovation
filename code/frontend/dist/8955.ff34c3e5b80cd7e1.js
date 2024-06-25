"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8955],{38955:(D,g,a)=>{a.r(g),a.d(g,{QuestioniersModule:()=>L});var u=a(96814),p=a(1076),T=a(56208),_=a(25116),f=a(43818),v=a(93383),t=a(65879),d=a(2742),Z=a(78212),C=a(88059),A=a(53421);function y(n,l){if(1&n){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",16),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",17),t._UZ(9,"button",18),t.TgZ(10,"div",19)(11,"a",20),t.NdJ("click",function(){const o=t.CHM(s).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"view"))}),t._UZ(12,"i",21),t._uU(13," View "),t.qZA(),t.TgZ(14,"a",20),t.NdJ("click",function(){const o=t.CHM(s).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../form",o,"edit"))}),t._UZ(15,"i",22),t._uU(16," Edit "),t.qZA()()()()()}if(2&n){const s=l.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==s?null:s.orderNo),t.xp6(2),t.Oqu(null==s?null:s.type),t.xp6(2),t.Oqu(null==s?null:s.questionnaire),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",e.rolePermissionActions.editAction)}}const Q=function(n,l,s,e){return{page:n,pageSize:l,collection:s,search:e,type:"list"}};let x=(()=>{var n;class l{constructor(e,i,o,r,h,m){this.exportExcelService=e,this.questionsService=i,this.activatedRoute=o,this.router=r,this.spinner=h,this.exportToPDFService=m,this.page=1,this.pageSize=8,this.collection=0,this.column="orderNo",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=_.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:o}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.questionsService.getAll(o).subscribe(r=>{"EXCEL"==i?this.excelDownload(r.rows):"PDF"==i?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,v.fs)(e))}pdfDownload(e){let i=(0,v.C7)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}}return(n=l).\u0275fac=function(e){return new(e||n)(t.Y36(d.Ol),t.Y36(Z.w1),t.Y36(p.gz),t.Y36(p.F0),t.Y36(d.V),t.Y36(d.$L))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-questionnaires-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(f.j,5),2&e){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:24,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","orderNo",3,"sort"],["sortable","type",3,"sort"],["sortable","questionnaire",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Questions Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," New Question "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(r){return i.eventHeader(r)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(15,"Order"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(17,"Type"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(19,"Questions"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Action"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,y,17,5,"tr",15),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,Q,i.page,i.pageSize,i.collection,i.search)),t.xp6(13),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[u.sg,C.P,f.j,A.J],encapsulation:2}),l})();var c=a(60095),q=a(21631),S=a(22096);function U(n,l){1&n&&t._UZ(0,"hr",22)}const b=function(n){return{"d-none":n}};function w(n,l){if(1&n){const s=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"button",25),t.NdJ("click",function(){t.CHM(s);const i=t.oxw();return t.KtG(i.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",26)(5,"button",25),t.NdJ("click",function(){t.CHM(s);const i=t.oxw();return t.KtG(i.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&n){const s=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,b,"View"==s.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,b,"View"==s.action))}}const N=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:x},{path:"form",component:(()=>{var n;class l{constructor(e,i,o,r,h,m){this.questionsService=e,this.activatedRoute=i,this.spinner=o,this.toastService=r,this.utilityService=h,this.location=m,this.submitted=!1,this.action="create",this.form=new c.nJ({_id:new c.p4(null),orderNo:new c.p4(""),type:new c.p4(null),questionnaire:new c.p4("")})}ngOnInit(){this.getInitialData()}submit(){this.submitted=!0;let e=this.form.value;e.revision&&(e.revision=[e.revision]),e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.questionsService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}create(e){this.spinner.show(),this.questionsService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,q.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.questionsService.getById(e.id):(0,S.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.form.patchValue(e),"edit"!=this.action&&this.form.disable())})}}return(n=l).\u0275fac=function(e){return new(e||n)(t.Y36(Z.w1),t.Y36(p.gz),t.Y36(d.V),t.Y36(d.kl),t.Y36(d.tI),t.Y36(u.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-questionnaires-form"]],decls:41,vars:7,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label"],[1,"text-danger"],["type","number","formControlName","orderNo",1,"form-control"],["formControlName","type",1,"form-select"],["disabled","",3,"value"],["value","Customer Inputs"],["value","Technical"],["value","Economic"],["value","Legal"],["value","Operational"],["value","Scheduling"],[1,"col-6"],["type","text","formControlName","questionnaire",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11,"Order "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17,"Type"),t.qZA(),t.TgZ(18,"select",10)(19,"option",11),t._uU(20,"Select Type"),t.qZA(),t.TgZ(21,"option",12),t._uU(22,"Customer Inputs"),t.qZA(),t.TgZ(23,"option",13),t._uU(24,"Technical"),t.qZA(),t.TgZ(25,"option",14),t._uU(26,"Economic"),t.qZA(),t.TgZ(27,"option",15),t._uU(28,"Legal"),t.qZA(),t.TgZ(29,"option",16),t._uU(30,"Operational"),t.qZA(),t.TgZ(31,"option",17),t._uU(32,"Scheduling"),t.qZA()()(),t.TgZ(33,"div",18)(34,"label",7),t._uU(35,"Question "),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t._UZ(38,"input",19),t.qZA()()(),t.YNc(39,U,1,0,"hr",20),t.YNc(40,w,7,6,"div",21),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("",t.lcZ(6,5,i.action)," Question"),t.xp6(14),t.Q6J("value",null),t.xp6(20),t.Q6J("ngIf","view"!==i.action),t.xp6(1),t.Q6J("ngIf","view"!==i.action))},dependencies:[u.mk,u.O5,c.YN,c.Kr,c.Fj,c.wV,c.EJ,c.JJ,c.JL,c.sg,c.u,u.rS],encapsulation:2}),l})(),resolve:{accessScreen:a(65876).x}}];let L=(()=>{var n;class l{}return(n=l).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,p.Bz.forChild(N),T.m]}),l})()}}]);