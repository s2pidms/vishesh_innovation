"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8934],{58934:(I,h,r)=>{r.r(h),r.d(h,{ProfessionalTaxModule:()=>M});var d=r(96814),m=r(1076),f=r(43818),T=r(25116),g=r(55317),t=r(65879),c=r(99328),v=r(88354),Z=r(88059),b=r(53421);function x(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",18),t._UZ(13,"button",19),t.TgZ(14,"div",20)(15,"a",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("../form",null==o?null:o._id,"view"))}),t._UZ(16,"i",22),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateTo("../form",null==o?null:o._id,"edit"))}),t._UZ(19,"i",23),t._uU(20," Edit "),t.qZA()()()()()}if(2&n){const e=u.$implicit,s=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.state),t.xp6(2),t.Oqu(null==e?null:e.gender),t.xp6(2),t.Oqu(null==e?null:e.minSalary),t.xp6(2),t.Oqu(null==e?null:e.maxSalary),t.xp6(2),t.Oqu(null==e?null:e.amount),t.xp6(5),t.Q6J("accessType",s.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",s.rolePermissionActions.editAction)}}const A=function(n,u,e,s){return{page:n,pageSize:u,collection:e,search:s,type:"list"}};let y=(()=>{class n{constructor(e,s,i,o,l,p){this.exportExcelService=e,this.professionalTaxService=s,this.activatedRoute=i,this.router=o,this.spinner=l,this.exportToPDFService=p,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=T.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,s,i){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:s,action:i}})}trackByFn(e,s){return s?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,s=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.professionalTaxService.getAll(i).subscribe(o=>{"EXCEL"==s?this.excelDownload(o.rows):"PDF"==s?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,g.IO)(e))}pdfDownload(e){let s=(0,g.MI)(e);this.exportToPDFService.generatePdf(s.tableData,s.title)}onSort({column:e,direction:s}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==s?1:-1,this.getAll()}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(c.Ol),t.Y36(v.mU),t.Y36(m.gz),t.Y36(m.F0),t.Y36(c.V),t.Y36(c.$L))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-professional-tax-list"]],viewQuery:function(s,i){if(1&s&&t.Gf(f.j,5),2&s){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","state",3,"sort"],["sortable","gender",3,"sort"],["sortable","minSalary",3,"sort"],["sortable","maxSalary",3,"sort"],["sortable","amount",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(s,i){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Professional Tax Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Professional Tax "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(l){return i.eventHeader(l)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(15,"State"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(17,"Gender"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(19,"Min Salary"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(21,"Max Salary"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(l){return i.onSort(l)}),t._uU(23,"Amount"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,x,21,7,"tr",17),t.qZA()()()()),2&s&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,A,i.page,i.pageSize,i.collection,i.search)),t.xp6(17),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[d.sg,Z.P,f.j,b.J],encapsulation:2})}return n})();var a=r(60095),_=r(21631),S=r(22096),C=r(73275),U=r(78944),P=r(16897),F=r(50363);function J(n,u){1&n&&t._UZ(0,"hr",19)}function q(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",21)(2,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",23)(5,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(6,"Save"),t.qZA()()()}}let w=(()=>{class n{constructor(e,s,i,o,l,p,Y){this.professionalTaxService=e,this.activatedRoute=s,this.spinner=i,this.toastService=o,this.validationService=l,this.utilityService=p,this.location=Y,this.submitted=!1,this.action="create",this.statesArr=U.F,this.masterData={autoIncrementNo:""},this.form=new a.nJ({_id:new a.p4(null),professionalTaxCode:new a.p4(""),state:new a.p4("",[a.kI.required]),gender:new a.p4(null,[a.kI.required]),isFebAmount:new a.p4(0),minSalary:new a.p4(0),maxSalary:new a.p4(0),amount:new a.p4(0,[a.kI.required])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,C.D4))return;let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.professionalTaxService.create(e).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.location.back()})}update(e){this.spinner.show(),this.professionalTaxService.update(e._id,e).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.location.back()})}getInitialData(){this.spinner.show(),this.professionalTaxService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.professionalTaxCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.isFebAmount.setValue(0),this.form.controls.minSalary.setValue(0),this.form.controls.maxSalary.setValue(0),this.form.controls.amount.setValue(0),this.activatedRoute.queryParams.pipe((0,_.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.professionalTaxService.getById(s.id):(0,S.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(this.form.patchValue(s),"edit"!=this.action&&this.form.disable())})})}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(v.mU),t.Y36(m.gz),t.Y36(c.V),t.Y36(c.kl),t.Y36(P.RJ),t.Y36(c.tI),t.Y36(d.Ye))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-professional-tax-form"]],decls:50,vars:8,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["bindLabel","statesArr","bindValue","statesArr","formControlName","state",3,"items","clearable"],["formControlName","gender",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value"],["type","number","formControlName","isFebAmount",1,"form-control"],["type","number","formControlName","minSalary",1,"form-control"],["type","number","formControlName","maxSalary",1,"form-control"],["type","number","formControlName","amount",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center mb-3",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","mb-3"],[1,"d-grid","col-md-1","me-5"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"d-grid","col-md-1"]],template:function(s,i){1&s&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5,"Professional Tax Master"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10," State"),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"ng-select",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Gender"),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"select",10)(20,"option",11),t._uU(21,"Select Gender"),t.qZA(),t.TgZ(22,"option",12),t._uU(23,"Male"),t.qZA(),t.TgZ(24,"option",12),t._uU(25,"Female"),t.qZA()()(),t.TgZ(26,"div",6)(27,"label",7),t._uU(28," February Amount "),t._UZ(29,"span",8),t.qZA(),t._UZ(30,"input",13),t.qZA()(),t.TgZ(31,"div",5)(32,"div",6)(33,"label",7),t._uU(34," Min Salary "),t._UZ(35,"span",8),t.qZA(),t._UZ(36,"input",14),t.qZA(),t.TgZ(37,"div",6)(38,"label",7),t._uU(39," Max Salary "),t._UZ(40,"span",8),t.qZA(),t._UZ(41,"input",15),t.qZA(),t.TgZ(42,"div",6)(43,"label",7),t._uU(44," Amount "),t.TgZ(45,"span",8),t._uU(46,"*"),t.qZA()(),t._UZ(47,"input",16),t.qZA()()(),t.YNc(48,J,1,0,"hr",17),t.YNc(49,q,7,0,"div",18),t.qZA()()),2&s&&(t.Q6J("formGroup",i.form),t.xp6(13),t.Q6J("items",i.statesArr)("clearable",!1),t.xp6(7),t.Q6J("value",null),t.xp6(2),t.Q6J("value","Male"),t.xp6(2),t.Q6J("value","Female"),t.xp6(24),t.Q6J("ngIf","view"!=i.action),t.xp6(1),t.Q6J("ngIf","view"!=i.action))},dependencies:[d.O5,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.sg,a.u,F.w9],encapsulation:2})}return n})();var N=r(56208);const L=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:y},{path:"form",component:w,resolve:{accessScreen:r(65876).x}}];let M=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#s=this.\u0275inj=t.cJS({imports:[d.ez,m.Bz.forChild(L),N.m]})}return n})()}}]);