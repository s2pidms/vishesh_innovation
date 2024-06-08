"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4247],{4247:(H,h,l)=>{l.r(h),l.d(h,{DepartmentMasterModule:()=>P});var p=l(96814),m=l(1076),f=l(43818),D=l(25116),g=l(55317),t=l(65879),u=l(99328),b=l(88354),_=l(88059),C=l(53421);function U(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",17),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",18),t._UZ(15,"button",19),t.TgZ(16,"div",20)(17,"a",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",r,"view"))}),t._UZ(18,"i",22),t._uU(19," View "),t.qZA(),t.TgZ(20,"a",21),t.NdJ("click",function(){const r=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",r,"edit"))}),t._UZ(21,"i",23),t._uU(22," Edit "),t.qZA()()()()()}if(2&o){const e=c.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.departmentCode),t.xp6(2),t.Oqu(null==e?null:e.departmentName),t.xp6(2),t.Oqu(null==e?null:e.departmentHead),t.xp6(2),t.Oqu(null==e?null:e.totalEmployee),t.xp6(2),t.Oqu(null==e?null:e.contactNo),t.xp6(2),t.Oqu(null==e?null:e.officeLocation),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",i.rolePermissionActions.editAction)}}const q=function(o,c,e,i){return{page:o,pageSize:c,collection:e,search:i,type:"list"}};let x=(()=>{class o{constructor(e,i,n,r,s,d){this.exportExcelService=e,this.router=i,this.spinner=n,this.activatedRoute=r,this.departmentMasterService=s,this.exportToPDFService=d,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=D.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(e=!1,i=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.departmentMasterService.getAll(n).subscribe(r=>{"EXCEL"==i?this.excelDownload(r.rows):"PDF"==i?this.pdfDownload(r.rows):(this.tableData=r.rows,this.collection=r.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}navigateTo(e,i,n){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i?._id,action:n}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,i){return i?._id}excelDownload(e){this.exportExcelService.exportExcel((0,g.Kh)(e))}pdfDownload(e){let i=(0,g.TD)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(n=>{n.sortable!==e&&(n.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(u.Ol),t.Y36(m.F0),t.Y36(u.V),t.Y36(m.gz),t.Y36(b.lQ),t.Y36(u.$L))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-department-list"]],viewQuery:function(i,n){if(1&i&&t.Gf(f.j,5),2&i){let r;t.iGM(r=t.CRH())&&(n.headers=r)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","category",3,"sort"],["sortable","prefix\n            ",1,"text-start",3,"sort"],["sortable","digit",3,"sort"],["sortable","nextAutoIncrement",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Department Master Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return n.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Department Master "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return n.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(15,"Department Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(17," Department Name "),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(19,"Department Head"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(21,"Total Employees"),t.qZA(),t.TgZ(22,"th",15),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(23,"Contact No."),t.qZA(),t.TgZ(24,"th",15),t.NdJ("sort",function(s){return n.onSort(s)}),t._uU(25,"Office Location"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Action"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,U,23,8,"tr",16),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",n.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,q,n.page,n.pageSize,n.collection,n.search)),t.xp6(19),t.Q6J("ngForOf",n.tableData)("ngForTrackBy",n.trackByFn))},dependencies:[p.sg,_.P,f.j,C.J],encapsulation:2})}return o})();var a=l(60095),y=l(21631),S=l(22096),Z=l(92829),v=l(37285),T=l(16897),N=l(48720),k=l(95346);function w(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",27),t._uU(4),t.qZA(),t.TgZ(5,"td",27),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",32),t._UZ(11,"button",33),t.TgZ(12,"div",34)(13,"a",35),t.NdJ("click",function(){const n=t.CHM(e),r=n.$implicit,s=n.index,d=t.oxw();return t.KtG(d.patchItem(r,s,"view"))}),t._UZ(14,"i",36),t._uU(15," View "),t.qZA(),t.TgZ(16,"a",35),t.NdJ("click",function(){const n=t.CHM(e),r=n.$implicit,s=n.index,d=t.oxw();return t.KtG(d.patchItem(r,s,"edit"))}),t._UZ(17,"i",37),t._uU(18," Edit "),t.qZA(),t.TgZ(19,"a",35),t.NdJ("click",function(){const r=t.CHM(e).index,s=t.oxw();return t.KtG(s.deleteItem(r))}),t._UZ(20,"i",38),t._uU(21," Delete "),t.qZA()()()()()}if(2&o){const e=c.$implicit,i=c.index,n=t.oxw();t.xp6(2),t.Oqu(1+i+(n.page-1)*n.pageSize),t.xp6(2),t.Oqu(null==e?null:e.subDepartmentName),t.xp6(2),t.Oqu(null==e?null:e.contactPersonName),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(11),t.ekj("disable","view"==n.action)}}const J=function(o,c,e,i){return{page:o,pageSize:c,collection:e,search:i,excelDisplay:"none"}};let F=(()=>{class o{constructor(e,i,n){this.activeModal=e,this.validationService=i,this.itemCategoryService=n,this.action="",this.subDepartments=[],this.btnDisable=!1,this.page=1,this.pageSize=4,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.form=new a.nJ({index:new a.p4(-1),subDepartmentName:new a.p4("",[a.kI.required]),contactPersonName:new a.p4("",[a.kI.required]),status:new a.p4("Active",[a.kI.required])})}ngOnInit(){this.collection=this.subDepartments.length,"view"==this.action&&this.form.disable()}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}save(){if(this.validationService.checkErrors(this.form,Z.x))return;let e=this.form.value;(e.index||0==e.index)&&e.index>=0?this.subDepartments.splice(e.index+(this.page-1)*this.pageSize,1,e):this.subDepartments.push(e),this.collection=this.subDepartments.length,this.form.reset(),this.form.controls.status.setValue("Active")}patchItem(e,i,n){e.index=i,this.form.patchValue(e),"view"==n?(this.btnDisable=!0,this.form.disable()):(this.form.enable(),this.btnDisable=!1)}deleteItem(e){"view"!=this.action&&(this.subDepartments.splice(e+(this.page-1)*this.pageSize,1),this.collection=this.subDepartments.length)}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(v.Kz),t.Y36(T.RJ),t.Y36(N.F4))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-sub-dept"]],inputs:{action:"action",subDepartments:"subDepartments"},decls:63,vars:18,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[3,"formGroup"],[1,"row","mt-4","px-5"],[1,"col-md-4"],[1,"form-label","mb-1"],[1,"text-danger"],["type","text","formControlName","subDepartmentName",1,"form-control"],["type","text","formControlName","contactPersonName",1,"form-control"],[1,"form-label"],["formControlName","status",1,"form-select"],["selected","","disabled","",3,"value"],["value","Active"],["value","Inactive"],[1,"row","mt-4","p-0"],[1,"col","text-center","mt-4"],["type","button",1,"btn","bg-primary","px-5",3,"disabled","click"],[1,"line-border","mt-4","mb-0"],[1,"px-5"],[3,"data","dataChange"],[1,"table-responsive","px-5",2,"min-height","17rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[1,"text-start"],[4,"ngFor","ngForOf"],[1,"line-border","my-3","px-5"],[1,"text-center"],["type","button",1,"btn","bg-primary","px-5","mb-3",3,"disabled","click"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","fa-lg","me-2","text-primary"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Add Sub Department"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return n.activeModal.close(n.subDepartments)}),t._UZ(6,"i",4),t.qZA()()(),t.ynx(7),t.TgZ(8,"form",5)(9,"div",6)(10,"div",7)(11,"label",8),t._uU(12," Sub Department Name "),t.TgZ(13,"span",9),t._uU(14,"*"),t.qZA()(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",7)(17,"label",8),t._uU(18," Contact Person Name "),t.TgZ(19,"span",9),t._uU(20,"*"),t.qZA()(),t._UZ(21,"input",11),t.qZA(),t.TgZ(22,"div",7)(23,"label",12),t._uU(24," Status "),t.TgZ(25,"span",9),t._uU(26,"*"),t.qZA()(),t.TgZ(27,"select",13)(28,"option",14),t._uU(29,"Select Type"),t.qZA(),t.TgZ(30,"option",15),t._uU(31,"Active"),t.qZA(),t.TgZ(32,"option",16),t._uU(33,"Inactive"),t.qZA()()()(),t._UZ(34,"div",17),t.qZA(),t.TgZ(35,"div",18)(36,"button",19),t.NdJ("click",function(){return n.save()}),t._uU(37," Add to List "),t.qZA()(),t._UZ(38,"hr",20),t.BQk(),t.TgZ(39,"div",21)(40,"app-setting-header",22),t.NdJ("dataChange",function(s){return n.eventHeader(s)}),t.qZA()(),t.TgZ(41,"div",23)(42,"table",24)(43,"thead",25)(44,"tr",26)(45,"th"),t._uU(46,"#"),t.qZA(),t.TgZ(47,"th",27),t._uU(48,"Sub Department Name"),t.qZA(),t.TgZ(49,"th",27),t._uU(50,"Contact Person Name"),t.qZA(),t.TgZ(51,"th"),t._uU(52,"Status"),t.qZA(),t.TgZ(53,"th"),t._uU(54,"Action"),t.qZA()()(),t.TgZ(55,"tbody"),t.YNc(56,w,22,6,"tr",28),t.ALo(57,"slice"),t.ALo(58,"searchFi1ter"),t.qZA()()(),t._UZ(59,"hr",29),t.TgZ(60,"div",30)(61,"button",31),t.NdJ("click",function(){return n.activeModal.close(n.subDepartments)}),t._uU(62," Save "),t.qZA()()()),2&i&&(t.xp6(8),t.Q6J("formGroup",n.form),t.xp6(20),t.Q6J("value",null),t.xp6(8),t.Q6J("disabled",n.btnDisable||"view"==n.action),t.xp6(4),t.Q6J("data",t.l5B(13,J,n.page,n.pageSize,n.collection,n.search)),t.xp6(16),t.Q6J("ngForOf",t.Dn7(57,6,t.xi3(58,10,n.subDepartments,n.search),(n.page-1)*n.pageSize,(n.page-1)*n.pageSize+n.pageSize)),t.xp6(5),t.Q6J("disabled",n.btnDisable||"view"==n.action))},dependencies:[p.sg,_.P,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u,p.OU,k.G],encapsulation:2})}return o})();function E(o,c){if(1&o&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",null==e?null:e.label," ")}}const A=function(o){return{"d-none":o}};function I(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",29)(1,"div",30)(2,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",31)(5,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(6,"Save"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,A,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,A,"View"==e.action))}}let L=(()=>{class o{constructor(e,i,n,r,s,d,Q,z){this.activatedRoute=e,this.spinner=i,this.toastService=n,this.validationService=r,this.modalService=s,this.departmentMasterService=d,this.utilityService=Q,this.location=z,this.subDepartments=[],this.collection=0,this.masterData={autoIncrementNo:"",locationOptions:[]},this.form=new a.nJ({_id:new a.p4(null),departmentCode:new a.p4("",[a.kI.required]),departmentName:new a.p4("",[a.kI.required]),description:new a.p4("",[a.kI.required]),departmentHead:new a.p4("",[a.kI.required]),totalEmployee:new a.p4("",[a.kI.required]),contactNo:new a.p4(""),email:new a.p4(""),officeLocation:new a.p4(null,[a.kI.required]),goodsTransferRequest:new a.p4(!1),subDepartments:new a.p4([])}),this.submitted=!1,this.action="create"}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,Z.C))return;let e=this.form.value;e.subDepartments=this.subDepartments,e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.departmentMasterService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}create(e){this.spinner.show(),this.departmentMasterService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.departmentMasterService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.departmentCode.setValue(this.masterData?.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,y.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.departmentMasterService.getById(i.id):(0,S.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(this.subDepartments=i?.subDepartments,this.form.patchValue(i),"edit"!=this.action&&this.form.disable())})})}openSub(){const e=this.modalService.open(F,{centered:!0,backdrop:"static",keyboard:!1,size:"lg"});e.componentInstance.action=this.action,e.componentInstance.subDepartments=this.subDepartments,e.result.then(i=>{["create","edit"].includes(this.action)&&(this.subDepartments=i,this.collection=this.subDepartments.length)},i=>{})}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(m.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(T.RJ),t.Y36(v.FF),t.Y36(b.lQ),t.Y36(u.tI),t.Y36(p.Ye))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-department-form"]],decls:71,vars:6,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col"],[1,"form-label"],[1,"text-danger"],["formControlName","departmentCode","readonly","",1,"form-control"],["formControlName","departmentName",1,"form-control"],["formControlName","description",1,"form-control"],["formControlName","departmentHead",1,"form-control"],["type","number","formControlName","totalEmployee",1,"form-control"],["type","text","formControlName","contactNo",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["formControlName","officeLocation",1,"form-select"],["value","null","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"row","line-border"],[1,"col-6"],[1,"d-flex","col","content-start"],[1,"d-grid","col-md-4"],["type","button",1,"btn","btn-primary",3,"click"],[1,"col-4","d-flex","align-items-center","ms-4"],["formControlName","goodsTransferRequest","type","checkbox",1,"form-check-input","me-2","mt-0","pointer"],["for","flexCheckDefault",1,"form-check-label","text-nowrap"],["class","d-flex justify-content-end",4,"ngIf"],[3,"value"],[1,"d-flex","justify-content-end"],[1,"d-grid","col-md-2","mx-5",3,"ngClass"],[1,"d-grid","col-md-2",3,"ngClass"]],template:function(i,n){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4),t.ALo(5,"titlecase"),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"Department Code "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16,"Department Name "),t.TgZ(17,"span",8),t._uU(18,"*"),t.qZA()(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22,"Description "),t.TgZ(23,"span",8),t._uU(24,"*"),t.qZA()(),t._UZ(25,"input",11),t.qZA(),t.TgZ(26,"div",6)(27,"label",7),t._uU(28,"Department Head "),t.TgZ(29,"span",8),t._uU(30,"*"),t.qZA()(),t._UZ(31,"input",12),t.qZA()(),t.TgZ(32,"div",5)(33,"div",6)(34,"label",7),t._uU(35,"Total Employees"),t.TgZ(36,"span",8),t._uU(37,"*"),t.qZA()(),t._UZ(38,"input",13),t.qZA(),t.TgZ(39,"div",6)(40,"label",7),t._uU(41,"Contact No."),t._UZ(42,"span",8),t.qZA(),t._UZ(43,"input",14),t.qZA(),t.TgZ(44,"div",6)(45,"label",7),t._uU(46,"Email Address"),t._UZ(47,"span",8),t.qZA(),t._UZ(48,"input",15),t.qZA(),t.TgZ(49,"div",6)(50,"label",7),t._uU(51," Office Location "),t.TgZ(52,"span",8),t._uU(53,"*"),t.qZA()(),t.TgZ(54,"select",16)(55,"option",17),t._uU(56,"Select Office Location"),t.qZA(),t.YNc(57,E,2,2,"option",18),t.qZA()()()(),t._UZ(58,"hr",19),t.TgZ(59,"div",5)(60,"div",20)(61,"div",21)(62,"div",22)(63,"button",23),t.NdJ("click",function(){return n.openSub()}),t._uU(64,"Add Sub Department"),t.qZA()(),t.TgZ(65,"div",24),t._UZ(66,"input",25),t.TgZ(67,"label",26),t._uU(68," Goods Transfer Request "),t.qZA()()()(),t.TgZ(69,"div",20),t.YNc(70,I,7,6,"div",27),t.qZA()()()()),2&i&&(t.Q6J("formGroup",n.form),t.xp6(4),t.hij("Department Master [",t.lcZ(5,4,n.action),"]"),t.xp6(53),t.Q6J("ngForOf",null==n.masterData?null:n.masterData.locationOptions),t.xp6(13),t.Q6J("ngIf","view"!==n.action))},dependencies:[p.mk,p.sg,p.O5,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.Wl,a.EJ,a.JJ,a.JL,a.sg,a.u,p.rS],encapsulation:2})}return o})();var M=l(56208);const Y=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:x},{path:"form",component:L,resolve:{accessScreen:l(65876).x}}];let P=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[p.ez,m.Bz.forChild(Y),M.m]})}return o})()}}]);