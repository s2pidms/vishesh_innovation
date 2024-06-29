"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8550],{68550:(F,h,l)=>{l.r(h),l.d(h,{AuditModule:()=>q});var c=l(96814),p=l(1076),s=l(60095),v=l(21631),A=l(22096),t=l(65879),g=l(31384),u=l(2742);let Z=(()=>{var n;class d{get f(){return this.form.controls}constructor(e,i,o,r,m,J){this.auditService=e,this.activatedRoute=i,this.spinner=o,this.toastService=r,this.utilityService=m,this.location=J,this.submitted=!1,this.action="create",this.roles=[],this.form=new s.nJ({_id:new s.p4(null),user:new s.p4(""),date:new s.p4(""),action:new s.p4(""),fieldsModified:new s.p4(""),data:new s.p4(""),oldData:new s.p4(""),sensitiveInfo:new s.p4("")})}ngOnInit(){this.getInitialData()}reset(){this.getInitialData()}submit(){this.submitted=!0;let e=this.form.value;e.appParameterValue=e.appParameterValue.trim(),e._id?this.update(e._id):(delete e.id,this.create(e))}create(e){this.spinner.show(),this.auditService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}update(e){this.spinner.show(),this.auditService.update(e,this.form.value).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,v.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.auditService.getById(e.id):(0,A.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.date&&(e.date=this.utilityService.getFormatDate(e?.date,"YYYY-MM-DD")),e.data=JSON.parse(e.data),e.oldData=JSON.parse(e.oldData),this.form.patchValue(e),this.form.controls.user.setValue(e.user.name),"edit"!=this.action&&this.form.disable())})}copyData(e){e&&(e=JSON.stringify(e),navigator.clipboard.writeText(e))}}return(n=d).\u0275fac=function(e){return new(e||n)(t.Y36(g.Cq),t.Y36(p.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(u.tI),t.Y36(c.Ye))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-audit-form"]],decls:54,vars:7,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"col"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"form-label"],[1,"mandatory"],["type","text","formControlName","user",1,"form-control"],["formControlName","date","type","date",1,"form-control"],[1,"validation-error"],["type","text","name","action","formControlName","action",1,"form-control"],["type","text","name","fieldsModified","formControlName","fieldsModified",1,"form-control"],[1,"form-label","d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","px-3","form-btn-sm","py-0",3,"click"],["type","text","rows","10","disabled","",1,"form-control","form-text-area"]],template:function(e,i){1&e&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5,"Audit"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),t._uU(11," User "),t.TgZ(12,"span",9),t._uU(13,"*"),t.qZA()(),t._UZ(14,"input",10),t.qZA(),t.TgZ(15,"div",7)(16,"label",8),t._uU(17,"Date"),t.TgZ(18,"span",9),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",11)(21,"p",12),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label",8),t._uU(25,"Action"),t.TgZ(26,"span",9),t._uU(27,"*"),t.qZA()(),t._UZ(28,"input",13),t.qZA(),t.TgZ(29,"div",7)(30,"label",8),t._uU(31,"Field Modified"),t.TgZ(32,"span",9),t._uU(33,"*"),t.qZA()(),t._UZ(34,"input",14)(35,"p",12),t.qZA()(),t.TgZ(36,"div",6)(37,"div",7)(38,"label",15),t._uU(39,"Data "),t.TgZ(40,"button",16),t.NdJ("click",function(){return i.copyData(i.form.controls.data.value)}),t._uU(41," Copy "),t.qZA()(),t.TgZ(42,"textarea",17),t._uU(43),t.ALo(44,"json"),t.qZA()(),t.TgZ(45,"div",7)(46,"label",15),t._uU(47,"Old Data "),t.TgZ(48,"button",16),t.NdJ("click",function(){return i.copyData(i.form.controls.oldData.value)}),t._uU(49," Copy "),t.qZA()(),t.TgZ(50,"textarea",17),t._uU(51),t.ALo(52,"json"),t.qZA(),t._UZ(53,"p",12),t.qZA()()()()()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(43),t.hij("              ",t.lcZ(44,3,i.form.controls.data.value),"\n              "),t.xp6(8),t.hij("              ",t.lcZ(52,5,i.form.controls.oldData.value),"\n              "))},dependencies:[s.Fj,s.JJ,s.JL,s.sg,s.u,c.Ts],encapsulation:2}),d})();var f=l(43818),b=l(25116),_=l(88059),T=l(53421);function y(n,d){if(1&n){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",29),t._UZ(11,"button",30),t.TgZ(12,"div",31)(13,"a",32),t.NdJ("click",function(){const o=t.CHM(a).$implicit,r=t.oxw();return t.KtG(r.navigateTo("../audit-form",null==o?null:o._id,"view"))}),t._UZ(14,"i",33),t._uU(15," View "),t.qZA()()()()()}if(2&n){const a=d.$implicit,e=t.oxw();t.xp6(2),t.Oqu(null==a?null:a.user),t.xp6(2),t.Oqu(null==a?null:a.createdAt),t.xp6(2),t.Oqu(null==a?null:a.action),t.xp6(2),t.Oqu(null==a?null:a.fieldsModified),t.xp6(5),t.Q6J("accessType",e.rolePermissionActions.viewAction)}}const C=function(n,d,a,e){return{page:n,pageSize:d,collection:a,search:e,excelDisplay:"none"}};let D=(()=>{var n;class d{constructor(e,i,o,r,m){this.auditService=e,this.utilityService=i,this.activatedRoute=o,this.router=r,this.spinner=m,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.user=[],this.userId="",this.fromDate=this.utilityService.getCurrentMonthDates().toDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.rolePermissionActions=b.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}reset(){this.fromDate=this.utilityService.getCurrentMonthDates().fromDate,this.toDate=this.utilityService.getCurrentMonthDates().toDate,this.getAll()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=e.value,this.getAll()}}navigateTo(e,i,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i,action:o}})}trackByFn(e,i){return i?._id}getAll(e=!1){this.spinner.show(),this.auditService.getAll({page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e,fromDate:this.fromDate,toDate:this.toDate,userId:this.userId}).subscribe(o=>{this.tableData=o.rows,this.collection=o.count,this.spinner.hide()})}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}}return(n=d).\u0275fac=function(e){return new(e||n)(t.Y36(g.Cq),t.Y36(u.tI),t.Y36(p.gz),t.Y36(p.F0),t.Y36(u.V))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-audit-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(f.j,5),2&e){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:47,vars:10,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"row","my-4"],[1,"col-9","ps-5"],[1,"row"],[1,"col-6","ps-5"],[1,"form-label"],[1,"text-danger"],["type","date",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-6"],[1,"col-3","align-self-end","separate-image"],[1,"image-position"],["src","./assets/new_icons/redstroke.svg","alt","","height","27","width","8"],["type","button",1,"btn","btn-primary","px-4","me-2",3,"click"],["type","button",1,"btn","btn-primary","px-4","ms-4",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","user",3,"sort"],["sortable","date",3,"sort"],["sortable","action",3,"sort"],["sortable","fieldsModified",3,"sort"],[1,"text-wrap"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-4"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Audit Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label",7),t._uU(9," From Date "),t.TgZ(10,"span",8),t._uU(11,"*"),t.qZA()(),t.TgZ(12,"input",9),t.NdJ("ngModelChange",function(r){return i.fromDate=r}),t.qZA()(),t.TgZ(13,"div",10)(14,"label",7),t._uU(15," To Date "),t.TgZ(16,"span",8),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"input",9),t.NdJ("ngModelChange",function(r){return i.toDate=r}),t.qZA()()()(),t.TgZ(19,"div",11)(20,"span",12),t._UZ(21,"img",13),t.qZA(),t.TgZ(22,"button",14),t.NdJ("click",function(){return i.getAll()}),t._uU(23,"Apply Filter"),t.qZA(),t.TgZ(24,"button",15),t.NdJ("click",function(){return i.reset()}),t._uU(25,"Reset Filter"),t.qZA()()(),t._UZ(26,"hr",16),t.TgZ(27,"div",17)(28,"app-setting-header",18),t.NdJ("dataChange",function(r){return i.eventHeader(r)}),t.qZA(),t.TgZ(29,"table",19)(30,"thead",20)(31,"tr",21)(32,"th",22),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(33,"User"),t.qZA(),t.TgZ(34,"th",23),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(35,"Date"),t.qZA(),t.TgZ(36,"th",24),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(37,"Action"),t.qZA(),t.TgZ(38,"th",25),t.NdJ("sort",function(r){return i.onSort(r)}),t._uU(39,"Field Modified"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Action"),t.qZA()()(),t.TgZ(42,"tbody",26),t.YNc(43,y,16,5,"tr",27),t.qZA()(),t.TgZ(44,"div",5),t._UZ(45,"div",28)(46,"div",28),t.qZA()()()),2&e&&(t.xp6(12),t.Q6J("ngModel",i.fromDate),t.xp6(6),t.Q6J("ngModel",i.toDate),t.xp6(10),t.Q6J("data",t.l5B(5,C,i.page,i.pageSize,i.collection,i.search)),t.xp6(15),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[c.sg,_.P,s.Fj,s.JJ,s.On,f.j,T.J],styles:[".pagination[_ngcontent-%COMP%]{margin-bottom:0!important}ngb-pagination[_ngcontent-%COMP%]     ul.pagination{margin:0!important}.page-label[_ngcontent-%COMP%]{color:var(--bs-dark);padding:0 1rem;font-size:1.4rem}ngb-pagination[_ngcontent-%COMP%]     ul>li:not(.active)>a{border:none!important;color:var(--bs-white)!important;background-color:#fff!important;box-shadow:none}.input-group-text[_ngcontent-%COMP%]{border-radius:0!important;height:2.8rem!important;width:3rem}"]}),d})();var U=l(56208);const S=[{path:"",redirectTo:"audit-list",pathMatch:"full"},{path:"audit-list",component:D},{path:"audit-form",component:Z,resolve:{accessScreen:l(65876).x}}];let q=(()=>{var n;class d{}return(n=d).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,p.Bz.forChild(S),U.m]}),d})()}}]);