"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7226],{77226:(F,p,s)=>{s.r(p),s.d(p,{MailConfigurationModule:()=>J});var c=s(96814),d=s(1076),f=s(43818),C=s(93383),t=s(65879),g=s(39029),m=s(2742),_=s(88059),Z=s(37285);function v(r,u){if(1&r){const n=t.EpF();t.TgZ(0,"tr")(1,"td",17),t._uU(2),t.qZA(),t.TgZ(3,"td",17),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",17,18)(9,"span",19),t._uU(10),t.qZA()(),t.TgZ(11,"td",17,20)(13,"span",19),t._uU(14),t.qZA()(),t.TgZ(15,"td",17,21)(17,"span",19),t._uU(18),t.qZA()(),t.TgZ(19,"td")(20,"div",22),t._UZ(21,"button",23),t.TgZ(22,"div",24)(23,"a",25),t.NdJ("click",function(){const o=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo("/default/settings/master/security_master/mail_configuration/form",o,"view"))}),t._UZ(24,"i",26),t._uU(25," View "),t.qZA(),t.TgZ(26,"a",25),t.NdJ("click",function(){const o=t.CHM(n).$implicit,a=t.oxw();return t.KtG(a.navigateTo("/default/settings/master/security_master/mail_configuration/form",o,"edit"))}),t._UZ(27,"i",27),t._uU(28," Edit "),t.qZA()()()()()}if(2&r){const n=u.$implicit,i=t.MAs(8),e=t.MAs(12),o=t.MAs(16);t.xp6(2),t.Oqu(n.module),t.xp6(2),t.Oqu(n.subModule),t.xp6(2),t.Oqu(n.action),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",n.emailTo),t.xp6(1),t.hij(" ",n.emailTo," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",n.emailCC),t.xp6(1),t.hij(" ",n.emailCC," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",n.emailBCC),t.xp6(1),t.hij(" ",n.emailBCC," "),t.xp6(8),t.ekj("disable","Closed"==(null==n?null:n.issueStatus))}}const b=function(r,u,n,i){return{page:r,pageSize:u,collection:n,search:i}};let T=(()=>{var r;class u{constructor(i,e,o,a){this.mailConfigurationService=i,this.router=e,this.spinner=o,this.exportExcelService=a,this.page=1,this.pageSize=8,this.collection=0,this.column="module",this.direction=1,this.search="",this.tableData=[]}ngOnInit(){this.getAll()}navigateTo(i,e,o){this.router.navigate([i],{queryParams:{id:e?._id,action:o}})}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=i.value,this.getAll()}}getAll(i=!1){this.spinner.show();let e={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.mailConfigurationService.getAll(e).subscribe(o=>{i?this.excelDownload(o.rows):(this.tableData=o.rows,this.collection=o.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}trackByFn(i,e){return e?._id}excelDownload(i){this.exportExcelService.exportExcel((0,C.MM)(i))}pdfDownload(i){}onSort({column:i,direction:e}){this.headers.forEach(o=>{o.sortable!==i&&(o.direction="")}),this.column=i,this.direction="asc"==e?1:-1,this.getAll()}}return(r=u).\u0275fac=function(i){return new(i||r)(t.Y36(g.Id),t.Y36(d.F0),t.Y36(m.V),t.Y36(m.Ol))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-mail-configuration-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(f.j,5),2&i){let o;t.iGM(o=t.CRH())&&(e.headers=o)}},decls:27,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"col"],[1,"heading"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","module",1,"text-start",3,"sort"],["sortable","subModule",1,"text-start",3,"sort"],["sortable","action",3,"sort"],["sortable","emailTo",1,"text-start",3,"sort"],["sortable","emailCC",1,"text-start",3,"sort"],["sortable","emailBCC",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["emailTo",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["emailCC",""],["emailBCC",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),t._uU(4,"Mail Configuration Summary"),t.qZA()()(),t._UZ(5,"hr",4),t.TgZ(6,"div",5)(7,"app-setting-header",6),t.NdJ("dataChange",function(a){return e.eventHeader(a)}),t.qZA(),t.TgZ(8,"table",7)(9,"thead",8)(10,"tr",9)(11,"th",10),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(12,"Module Name"),t.qZA(),t.TgZ(13,"th",11),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(14,"Sub Module Name"),t.qZA(),t.TgZ(15,"th",12),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(16,"Action"),t.qZA(),t.TgZ(17,"th",13),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(18,"Email To"),t.qZA(),t.TgZ(19,"th",14),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(20,"Email CC"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(22,"Email BCC"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Action"),t.qZA()()(),t.TgZ(25,"tbody"),t.YNc(26,v,29,20,"tr",16),t.qZA()()()()),2&i&&(t.xp6(7),t.Q6J("data",t.l5B(3,b,e.page,e.pageSize,e.collection,e.search)),t.xp6(19),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[c.sg,_.P,Z._L,f.j],encapsulation:2}),u})();var l=s(60095),M=s(21631),A=s(22096);function x(r,u){1&r&&t._UZ(0,"hr",21)}function U(r,u){if(1&r){const n=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"button",24),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",25)(5,"button",26),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.submit())}),t._uU(6,"Save"),t.qZA()()()}}const h=function(){return["view"]};let y=(()=>{var r;class u{get f(){return this.form.controls}constructor(i,e,o,a,N){this.mailConfigurationService=i,this.router=e,this.activatedRoute=o,this.spinner=a,this.toastService=N,this.submitted=!1,this.action="create",this.form=new l.nJ({_id:new l.p4(null),module:new l.p4(null),subModule:new l.p4(null),action:new l.p4(null),emailTo:new l.p4(null),emailCC:new l.p4(null),emailBCC:new l.p4(null)})}ngOnInit(){this.getInitialData()}reset(){this.getInitialData(),this.form.reset()}submit(){this.submitted=!0,this.form.enable();let i=this.form.value;this.mailConfigurationService.update(i._id,i).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.router.navigate(["/default/settings/master/security_master/mail_configuration/list"])})}getInitialData(){this.spinner.show(),this.activatedRoute.queryParams.pipe((0,M.z)(i=>(this.action=i.action,i.id?this.mailConfigurationService.getById(i.id):(0,A.of)({})))).subscribe(i=>{0!=Object.keys(i).length&&(this.form.patchValue(i),"view"==this.action&&this.form.disable())}),this.spinner.hide()}}return(r=u).\u0275fac=function(i){return new(i||r)(t.Y36(g.Id),t.Y36(d.F0),t.Y36(d.gz),t.Y36(m.V),t.Y36(m.kl))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-mail-configuration-form"]],decls:50,vars:8,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-12","px-5","pt-2"],[1,"row","mb-4"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","module","readonly","",1,"form-control"],["type","text","formControlName","subModule","readonly","",1,"form-control"],["type","text","formControlName","action","readonly","",1,"form-control"],[1,"col-md-12"],["formControlName","emailTo","rows","2",1,"form-control","form-text-area"],["formControlName","emailCC","rows","2",1,"form-control","form-text-area"],["formControlName","emailBCC","rows","2",1,"form-control","form-text-area"],["class","row line-border",4,"ngIf"],[1,"col-12"],["class","d-flex justify-content-center",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary",3,"click"],[1,"d-grid","col-md-1"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(i,e){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"label",9),t._uU(13,"Module Name"),t.TgZ(14,"span",10),t._uU(15,"*"),t.qZA()(),t._UZ(16,"input",11),t.qZA(),t.TgZ(17,"div",8)(18,"label",9),t._uU(19," Sub Module Name"),t.TgZ(20,"span",10),t._uU(21,"*"),t.qZA()(),t._UZ(22,"input",12),t.qZA(),t.TgZ(23,"div",8)(24,"label",9),t._uU(25," Action"),t._UZ(26,"span",10),t.qZA(),t._UZ(27,"input",13),t.qZA()(),t.TgZ(28,"div",7)(29,"div",14)(30,"label",9),t._uU(31," Email To"),t._UZ(32,"span",10),t.qZA(),t._UZ(33,"textarea",15),t.qZA()(),t.TgZ(34,"div",7)(35,"div",14)(36,"label",9),t._uU(37," Email CC"),t._UZ(38,"span",10),t.qZA(),t._UZ(39,"textarea",16),t.qZA()(),t.TgZ(40,"div",7)(41,"div",14)(42,"label",9),t._uU(43," Email BCC"),t._UZ(44,"span",10),t.qZA(),t._UZ(45,"textarea",17),t.qZA()()()(),t.YNc(46,x,1,0,"hr",18),t.TgZ(47,"div",5)(48,"div",19),t.YNc(49,U,7,0,"div",20),t.qZA()()()()()),2&i&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij("Mail Configuration ( ",t.lcZ(6,4,e.action)," )"),t.xp6(41),t.Q6J("ngIf",!t.DdM(6,h).includes(e.action)),t.xp6(3),t.Q6J("ngIf",!t.DdM(7,h).includes(e.action)))},dependencies:[c.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,c.rS],encapsulation:2}),u})();var S=s(19964),w=s(56208);const q=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:T},{path:"form",component:y,resolve:{accessScreen:S.xr}}];let J=(()=>{var r;class u{}return(r=u).\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[c.ez,d.Bz.forChild(q),w.m]}),u})()}}]);