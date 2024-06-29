"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4732],{44732:(R,g,l)=>{l.r(g),l.d(g,{UserModule:()=>P});var d=l(96814),p=l(1076),v=l(43818),Z=l(25116),_=l(9531),e=l(65879),A=l(34977),U=l(31384),u=l(2742),b=l(88059),T=l(53421);function C(r,c){if(1&r){const i=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",19),e._UZ(15,"button",20),e.TgZ(16,"div",21)(17,"a",22),e.NdJ("click",function(){const n=e.CHM(i).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../user-form",null==n?null:n._id,"view"))}),e._UZ(18,"i",23),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",22),e.NdJ("click",function(){const n=e.CHM(i).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../user-form",null==n?null:n._id,"edit"))}),e._UZ(21,"i",24),e._uU(22," Edit "),e.qZA(),e.TgZ(23,"a",25),e.NdJ("click",function(){const n=e.CHM(i).$implicit,o=e.oxw();return e.KtG(o.update(n))}),e._UZ(24,"i",26),e._uU(25," Approve "),e.qZA()()()()()}if(2&r){const i=c.$implicit,s=e.oxw();e.xp6(2),e.Oqu(null==i?null:i.userCode),e.xp6(2),e.Oqu(null==i?null:i.email),e.xp6(2),e.Oqu(null==i?null:i.name),e.xp6(2),e.Oqu(null==i?null:i.departmentName),e.xp6(2),e.Oqu(null==i?null:i.roleName),e.xp6(2),e.Oqu(null!=i&&i.isActive?"Active":"Inactive"),e.xp6(5),e.Q6J("accessType",s.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",s.rolePermissionActions.editAction),e.xp6(3),e.ekj("disable",!0===(null==i?null:i.isActive))}}const x=function(r,c,i,s){return{page:r,pageSize:c,collection:i,search:s,type:"list"}};let y=(()=>{var r;class c{constructor(s,t,n,o,m,h,f){this.exportExcelService=s,this.userService=t,this.router=n,this.toastService=o,this.activatedRoute=m,this.spinner=h,this.exportToPDFService=f,this.page=1,this.pageSize=8,this.collection=0,this.column="userCode",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=Z.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(s,t,n){this.router.navigate([s],{relativeTo:this.activatedRoute,queryParams:{id:t,action:n}})}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=s.value,this.getAll()}}getAll(s=!1,t=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:s};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.userService.getAll(n).subscribe(o=>{"EXCEL"==t?this.excelDownload(o.rows):"PDF"==t?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}trackByFn(s,t){return t?._id}excelDownload(s){s=s.map(t=>(t.roleName=t?.roleName[0],t.isActive=t.isActive?"Active":"Inactive",t)),this.exportExcelService.exportExcel((0,_.Cn)(s))}pdfDownload(s){let t=(0,_.oU)(s);this.exportToPDFService.generatePdf(t.tableData,t.title)}onSort({column:s,direction:t}){this.headers.forEach(n=>{n.sortable!==s&&(n.direction="")}),this.column=s,this.direction="asc"==t?1:-1,this.getAll()}update(s){0==s?.isActive&&(this.spinner.show(),s.isActive=!0,s.status="Approved",this.userService.update(s._id,s).subscribe(t=>{this.spinner.hide(),this.toastService.success(t.message)}))}}return(r=c).\u0275fac=function(s){return new(s||r)(e.Y36(A.O),e.Y36(U.KD),e.Y36(p.F0),e.Y36(u.kl),e.Y36(p.gz),e.Y36(u.V),e.Y36(u.$L))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-list"]],viewQuery:function(s,t){if(1&s&&e.Gf(v.j,5),2&s){let n;e.iGM(n=e.CRH())&&(t.headers=n)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","me-2","fa-lg"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","userCode",3,"sort"],["sortable","email",3,"sort"],["sortable","name",3,"sort"],["sortable","departmentName",3,"sort"],["sortable","roleName",3,"sort"],["sortable","isActive",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-check","fa-lg","text-success"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Application Users Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return t.navigateTo("../user-form",null,"create")}),e._UZ(6,"i",5),e._uU(7," User "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(15,"User Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(17,"Login Id"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(19,"Name"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(21,"Department"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(23,"Role"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(25,"Active"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,C,26,10,"tr",18),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",t.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,x,t.page,t.pageSize,t.collection,t.search)),e.xp6(19),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn))},dependencies:[d.sg,b.P,v.j,T.J],encapsulation:2}),c})();var a=l(60095),J=l(21631),S=l(22096),q=l(70202),N=l(16897),I=l(1551),w=l(50363);function D(r,c){1&r&&(e.TgZ(0,"option",17),e._uU(1,"IDMS Support"),e.qZA()),2&r&&e.Q6J("value","IDMS Support")}function F(r,c){if(1&r&&(e.TgZ(0,"div",14)(1,"label",7),e._uU(2," Role "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e._UZ(5,"ng-select",23)(6,"validation-messages",10),e.qZA()),2&r){const i=e.oxw();e.xp6(5),e.Q6J("items",i.masterData.rolesOptions)("multiple",!0)("clearable",!1),e.xp6(1),e.Q6J("control",i.f.role)}}function Q(r,c){if(1&r&&(e.TgZ(0,"div",24)(1,"label",7),e._uU(2," Status "),e.TgZ(3,"span",8),e._uU(4,"*"),e.qZA()(),e.TgZ(5,"select",25)(6,"option",17),e._uU(7,"Active"),e.qZA(),e.TgZ(8,"option",17),e._uU(9,"Inactive"),e.qZA()(),e._UZ(10,"validation-messages",10),e.qZA()),2&r){const i=e.oxw();e.xp6(6),e.Q6J("value","true"),e.xp6(2),e.Q6J("value","false"),e.xp6(2),e.Q6J("control",i.f.isActive)}}const k=function(r){return{"d-none":r}};function L(r,c){if(1&r){const i=e.EpF();e.TgZ(0,"div",26)(1,"button",27),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",28),e.NdJ("click",function(){e.CHM(i);const t=e.oxw();return e.KtG(t.submit())}),e._uU(4,"Save"),e.qZA()()}if(2&r){const i=e.oxw();e.Q6J("ngClass",e.VKq(1,k,"View"==i.action))}}let E=(()=>{var r;class c{get f(){return this.form.controls}constructor(s,t,n,o,m,h,f,V){this.userService=s,this.activatedRoute=t,this.spinner=n,this.toastService=o,this.validationService=m,this.storageService=h,this.utilityService=f,this.location=V,this.submitted=!1,this.action="create",this.status="",this.user="",this.superAdminId="64a687b4e9143bffd820fb3d",this.adminId=Z.oc,this.masterData={autoIncrementNo:"",departmentOptions:[],rolesOptions:[]},this.adminUser="",this.form=new a.nJ({_id:new a.p4(null),userCode:new a.p4(null,[a.kI.required]),name:new a.p4(null,[a.kI.required]),role:new a.p4([],[a.kI.required]),email:new a.p4(null,[a.kI.required]),password:new a.p4(null,[a.kI.required]),userEmail:new a.p4(null,[a.kI.required]),department:new a.p4(null),departmentName:new a.p4(null),userType:new a.p4("Internal",[a.kI.required]),isActive:new a.p4(!1)})}ngOnInit(){this.getInitialData();let s=this.storageService.get("IDMSAUser")?.roles;this.user=s.find(t=>t==this.superAdminId),this.adminUser=s.find(t=>t==this.adminId)}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,q.X7))return;let s=this.form.value;s._id?this.update(s):(delete s._id,this.create(s))}create(s){this.spinner.show(),this.userService.create(s).subscribe(t=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(t.message),this.location.back()})}update(s){this.spinner.show(),this.userService.update(s._id,s).subscribe(t=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(t.message),this.location.back()})}getInitialData(){this.spinner.show(),this.userService.getAllMasterData({}).subscribe(s=>{this.masterData=s,this.form.controls.userCode.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,J.z)(t=>(this.action=t.action,this.utilityService.accessDenied(this.action),"edit"===this.action&&(this.form.controls.password.setValidators(null),this.form.controls.password.updateValueAndValidity()),t.id?this.userService.getById(t.id):(0,S.of)({})))).subscribe(t=>{this.spinner.hide(),0!=Object.keys(t).length&&(t.role=t.role.map(n=>n._id),this.status=t?.status,this.isActive=t?.isActive,this.form.patchValue(t),"edit"!=this.action&&this.form.disable())})})}setDepartment(s){this.form.controls.departmentName.setValue(s?.departmentName)}}return(r=c).\u0275fac=function(s){return new(s||r)(e.Y36(U.KD),e.Y36(p.gz),e.Y36(u.V),e.Y36(u.kl),e.Y36(N.RJ),e.Y36(u.V1),e.Y36(u.tI),e.Y36(d.Ye))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-user-form"]],decls:67,vars:15,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","userCode","readonly","",1,"form-control"],[1,"error-left",3,"control"],["type","text","formControlName","name",1,"form-control"],["type","text","formControlName","email",1,"form-control"],["type","text","formControlName","password","autocomplete","off",1,"form-control"],[1,"col-md-6"],["type","text","formControlName","userEmail",1,"form-control"],["formControlName","userType",1,"form-select"],[3,"value"],[3,"value",4,"ngIf"],["class","col-md-6",4,"ngIf"],["class","col-md-6 mb-4",4,"ngIf"],["bindLabel","departmentName","bindValue","_id","formControlName","department",3,"items","clearable","change"],["class","d-grid gap-2 d-md-flex justify-content-md-center mb-3",3,"ngClass",4,"ngIf"],["bindLabel","label","bindValue","value","formControlName","role",3,"items","multiple","clearable"],[1,"col-md-6","mb-4"],["formControlName","isActive",1,"form-select"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-center","mb-3",3,"ngClass"],["type","button",1,"btn","bg-primary","mt-2","px-5","me-2",3,"click"],["type","button",1,"btn","bg-primary","mt-2","px-5",3,"click"]],template:function(s,t){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"Application Users"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10," User # "),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e._UZ(13,"input",9)(14,"validation-messages",10),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17," User Name # "),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",11)(21,"validation-messages",10),e.qZA()(),e.TgZ(22,"div",5)(23,"div",6)(24,"label",7),e._uU(25," Login Id "),e.TgZ(26,"span",8),e._uU(27,"*"),e.qZA()(),e._UZ(28,"input",12)(29,"validation-messages",10),e.qZA(),e.TgZ(30,"div",6)(31,"label",7),e._uU(32," Password "),e.TgZ(33,"span",8),e._uU(34,"*"),e.qZA()(),e._UZ(35,"input",13)(36,"validation-messages",10),e.qZA()(),e.TgZ(37,"div",5)(38,"div",14)(39,"label",7),e._uU(40," User Email "),e.TgZ(41,"span",8),e._uU(42,"*"),e.qZA()(),e._UZ(43,"input",15)(44,"validation-messages",10),e.qZA(),e.TgZ(45,"div",14)(46,"label",7),e._uU(47," User Type "),e.TgZ(48,"span",8),e._uU(49,"*"),e.qZA()(),e.TgZ(50,"select",16)(51,"option",17),e._uU(52,"Internal"),e.qZA(),e.TgZ(53,"option",17),e._uU(54,"External"),e.qZA(),e.YNc(55,D,2,1,"option",18),e.qZA(),e._UZ(56,"validation-messages",10),e.qZA()(),e.TgZ(57,"div",5),e.YNc(58,F,7,4,"div",19),e.YNc(59,Q,11,3,"div",20),e.TgZ(60,"div",14)(61,"label",7),e._uU(62," Department "),e.TgZ(63,"span",8),e._uU(64,"*"),e.qZA()(),e.TgZ(65,"ng-select",21),e.NdJ("change",function(o){return t.setDepartment(o)}),e.qZA()()()(),e.YNc(66,L,5,3,"div",22),e.qZA()()),2&s&&(e.Q6J("formGroup",t.form),e.xp6(14),e.Q6J("control",t.f.userCode),e.xp6(7),e.Q6J("control",t.f.name),e.xp6(8),e.Q6J("control",t.f.email),e.xp6(7),e.Q6J("control",t.f.password),e.xp6(8),e.Q6J("control",t.f.userEmail),e.xp6(7),e.Q6J("value","Internal"),e.xp6(2),e.Q6J("value","External"),e.xp6(2),e.Q6J("ngIf",t.user==t.superAdminId),e.xp6(1),e.Q6J("control",t.f.userType),e.xp6(2),e.Q6J("ngIf",t.user==t.superAdminId||t.adminUser==t.adminId),e.xp6(1),e.Q6J("ngIf","Approved"==t.status||1==t.isActive),e.xp6(6),e.Q6J("items",t.masterData.departmentOptions)("clearable",!1),e.xp6(1),e.Q6J("ngIf","view"!==t.action))},dependencies:[d.mk,d.O5,I.s,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,w.w9],encapsulation:2}),c})();var Y=l(56208);const M=[{path:"",redirectTo:"user-list",pathMatch:"full"},{path:"user-list",component:y},{path:"user-form",component:E,resolve:{accessScreen:l(65876).x}}];let P=(()=>{var r;class c{}return(r=c).\u0275fac=function(s){return new(s||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,p.Bz.forChild(M),Y.m]}),c})()}}]);