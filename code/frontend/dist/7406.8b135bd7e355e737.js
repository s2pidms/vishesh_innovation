"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7406],{97406:(Q,v,l)=>{l.r(v),l.d(v,{HSNModule:()=>M});var d=l(96814),p=l(1076),T=l(43818),Z=l(25116),S=l(11909),_=l(77203),t=l(65879),c=l(2742),b=l(48720),h=l(37285),C=l(88059),N=l(53421);function y(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"a",30),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.openConfirmModal(null==o?null:o._id,null==o?null:o.hsnCode))}),t._UZ(1,"i",31),t._uU(2," Delete "),t.qZA()}}function U(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",20,21)(5,"span",22),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"td")(23,"div",23),t._UZ(24,"button",24),t.TgZ(25,"div",25)(26,"a",26),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",null==s?null:s._id,"view"))}),t._UZ(27,"i",27),t._uU(28," View "),t.qZA(),t.TgZ(29,"a",26),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",null==s?null:s._id,"edit"))}),t._UZ(30,"i",28),t._uU(31," Edit "),t.qZA(),t.YNc(32,y,3,0,"a",29),t.qZA()()()()}if(2&r){const e=u.$implicit,i=t.MAs(4),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.hsnCode),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.goodsDescription),t.xp6(1),t.hij(" ",e.goodsDescription," "),t.xp6(2),t.Oqu(t.xi3(9,14,null==e?null:e.gstRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,17,null==e?null:e.igstRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(15,20,null==e?null:e.sgstRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(18,23,null==e?null:e.cgstRate,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(21,26,null==e?null:e.ugstRate,"1.2-2")),t.xp6(6),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.editAction),t.xp6(3),t.Q6J("ngIf",o.user==o.superAdminId)}}const x=function(r,u,e,i){return{page:r,pageSize:u,collection:e,search:i,type:"list"}};let R=(()=>{class r{constructor(e,i,o,s,a,m,g,f,E){this.exportExcelService=e,this.hsnService=i,this.router=o,this.spinner=s,this.activatedRoute=a,this.exportToPDFService=m,this.storageService=g,this.toastService=f,this.modalService=E,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.dataForExcel=[],this.superAdminId=Z.dA,this.user="",this.rolePermissionActions=Z.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(e=>e==this.superAdminId),this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,i,o){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:i,action:o}})}trackByFn(e,i){return i?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,i=""){this.spinner.show();let o={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.hsnService.getAll(o).subscribe(s=>{"EXCEL"==i?this.excelDownload(s.rows):"PDF"==i?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}delete(e){this.spinner.show(),this.hsnService.delete(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.getAll()})}openConfirmModal(e,i){const o=this.modalService.open(_.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});o.componentInstance.heading="Confirm Deletion",o.componentInstance.confirmText=`Confirm Deletion of HSN Code ${i} ?`,o.result.then(s=>{"Yes"==s.title&&this.delete(e)},s=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,S.ok)(e))}pdfDownload(e){let i=(0,S.JZ)(e);this.exportToPDFService.generatePdf(i.tableData,i.title)}onSort({column:e,direction:i}){this.headers.forEach(o=>{o.sortable!==e&&(o.direction="")}),this.column=e,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(c.Ol),t.Y36(b.hG),t.Y36(p.F0),t.Y36(c.V),t.Y36(p.gz),t.Y36(c.$L),t.Y36(c.V1),t.Y36(c.kl),t.Y36(h.FF))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-hsn-list"]],viewQuery:function(i,o){if(1&i&&t.Gf(T.j,5),2&i){let s;t.iGM(s=t.CRH())&&(o.headers=s)}},decls:32,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","hsnCode",3,"sort"],["sortable","goodsDescription",1,"text-start",3,"sort"],["sortable","gstRate",3,"sort"],["sortable","igstRate",3,"sort"],["sortable","sgstRate",3,"sort"],["sortable","cgstRate",3,"sort"],["sortable","ugstRate",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["goodsDescription",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"HSN Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return o.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," HSN Code "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return o.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(15,"HSN Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(17,"Description of Goods"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(19,"GST Rate %"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(21,"IGST Rate %"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(23,"SGST Rate %"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(25,"CGST Rate %"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(27,"UTGST Rate %"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Action"),t.qZA()()(),t.TgZ(30,"tbody"),t.YNc(31,U,33,29,"tr",19),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",o.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,x,o.page,o.pageSize,o.collection,o.search)),t.xp6(21),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[d.sg,d.O5,C.P,h._L,T.j,N.J,d.JJ],encapsulation:2})}return r})();var n=l(60095),D=l(21631),q=l(22096),H=l(66929),J=l(16897),w=l(1551);function I(r,u){1&r&&t._UZ(0,"hr",22)}const A=function(r){return{"d-none":r}};function F(r,u){if(1&r){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"button",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.reset())}),t._uU(3,"Reset"),t.qZA()(),t.TgZ(4,"div",26)(5,"button",27),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.HSNCodeCond())}),t._uU(6,"Save"),t.qZA()()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(2,A,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,A,"View"==e.action))}}let Y=(()=>{class r{constructor(e,i,o,s,a,m,g,f){this.hsnService=e,this.activatedRoute=i,this.spinner=o,this.toastService=s,this.validationService=a,this.utilityService=m,this.location=g,this.modalService=f,this.submitted=!1,this.action="create",this.earnings=[],this.masterData={autoIncrementNo:""},this.form=new n.nJ({_id:new n.p4(null),provisionType:new n.p4(!0,[n.kI.required]),hsnMasterEntryNo:new n.p4(""),hsnEntryDate:new n.p4(""),hsnCode:new n.p4("",[n.kI.required,n.kI.pattern("^[0-9]{4,8}$")]),isActive:new n.p4("Y",[n.kI.required]),goodsDescription:new n.p4("",[n.kI.required]),gstRate:new n.p4("",[n.kI.required]),igstRate:new n.p4("",[n.kI.required]),sgstRate:new n.p4("",[n.kI.required]),cgstRate:new n.p4("",[n.kI.required]),ugstRate:new n.p4("",[n.kI.required]),revision:new n.nJ({revisionNo:new n.p4(""),revisionDate:new n.p4("",[n.kI.required])})})}get Revision(){return this.form.get("revision")}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,H.U_))return;let e=this.form.value;e.revision&&(e.revision=[e.revision]),e._id?this.update(e):(delete e._id,this.create(e))}update(e){this.spinner.show(),this.hsnService.update(e._id,e).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}create(e){this.spinner.show(),this.hsnService.create(e).subscribe(i=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(i.message),this.location.back()})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.hsnService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.hsnMasterEntryNo.setValue(this.masterData.autoIncrementNo),this.form.controls.isActive.setValue("Y"),this.form.controls.provisionType.setValue(!0),this.Revision.controls.revisionDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.Revision.controls.revisionNo.setValue(1),this.activatedRoute.queryParams.pipe((0,D.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.hsnService.getById(i.id):(0,q.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(1==i.revision.length&&(i.revision.revisionNo=i.revision[0].revisionNo,i.revision[0].revisionDate&&(i.revision.revisionDate=this.utilityService.getFormatDate(i.revision[0].revisionDate,"YYYY-MM-DD"))),this.form.patchValue(i),"edit"!=this.action&&this.form.disable())})})}setUTGSTValue(){this.form.controls.ugstRate.setValue(this.form.controls.sgstRate.value)}openCancelModal(){const e=this.modalService.open(_.er,{centered:!0,size:"md",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.HSNFlag=!0,e.componentInstance.heading="HSN Master",e.componentInstance.cancelText="Any changes to the HSN master won't automatically reflect in existing purchase orders.",e.componentInstance.cancelTextTwo="Please cancel old purchase orders and create new ones with updated HSN values if necessary.",e.result.then(i=>{"Yes"==i&&this.submit()},i=>{})}HSNCodeCond(){"edit"==this.action?this.openCancelModal():this.submit()}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(b.hG),t.Y36(p.gz),t.Y36(c.V),t.Y36(c.kl),t.Y36(J.RJ),t.Y36(c.tI),t.Y36(d.Ye),t.Y36(h.FF))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-hsn-form"]],decls:71,vars:10,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-4"],[1,"form-label"],[1,"text-danger"],["oninput","javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);","maxlength","8","type","number","formControlName","hsnCode","placeholder","Enter HSN Code",1,"form-control"],[1,"error-left",3,"control"],["type","text","formControlName","goodsDescription","placeholder","Enter Description",1,"form-control"],["type","number","formControlName","gstRate","placeholder","0",1,"form-control"],["type","number","formControlName","igstRate","placeholder","0",1,"form-control"],["type","number","formControlName","cgstRate","placeholder","0",1,"form-control"],["type","number","formControlName","sgstRate","placeholder","0",1,"form-control",3,"input"],["type","number","formControlName","ugstRate","placeholder","0",1,"form-control"],["formGroupName","revision",1,"col-md-4"],["type","number","formControlName","revisionNo","placeholder","Enter Revision No.",1,"form-control"],["type","date","formControlName","revisionDate",1,"form-control"],["class","row line-border",4,"ngIf"],["class","d-flex justify-content-center my-4",4,"ngIf"],[1,"row","line-border"],[1,"d-flex","justify-content-center","my-4"],[1,"d-grid","col-md-1","mx-5",3,"ngClass"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"d-grid","col-md-1",3,"ngClass"],[1,"btn","btn-primary",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5,"HSN Master"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),t._uU(10,"HSN Code "),t.TgZ(11,"span",8),t._uU(12,"*"),t.qZA()(),t._UZ(13,"input",9)(14,"validation-messages",10),t.qZA(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17,"Description of Goods "),t.TgZ(18,"span",8),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",11)(21,"validation-messages",10),t.qZA(),t.TgZ(22,"div",6)(23,"label",7),t._uU(24,"GST Rate % "),t.TgZ(25,"span",8),t._uU(26,"*"),t.qZA()(),t._UZ(27,"input",12)(28,"validation-messages",10),t.qZA()(),t.TgZ(29,"div",5)(30,"div",6)(31,"label",7),t._uU(32,"IGST Rate % "),t.TgZ(33,"span",8),t._uU(34,"*"),t.qZA()(),t._UZ(35,"input",13)(36,"validation-messages",10),t.qZA(),t.TgZ(37,"div",6)(38,"label",7),t._uU(39,"CGST Rate % "),t.TgZ(40,"span",8),t._uU(41,"*"),t.qZA()(),t._UZ(42,"input",14)(43,"validation-messages",10),t.qZA(),t.TgZ(44,"div",6)(45,"label",7),t._uU(46,"SGST Rate % "),t.TgZ(47,"span",8),t._uU(48,"*"),t.qZA()(),t.TgZ(49,"input",15),t.NdJ("input",function(){return o.setUTGSTValue()}),t.qZA(),t._UZ(50,"validation-messages",10),t.qZA()(),t.TgZ(51,"div",5)(52,"div",6)(53,"label",7),t._uU(54,"UTGST Rate % "),t.TgZ(55,"span",8),t._uU(56,"*"),t.qZA()(),t._UZ(57,"input",16)(58,"validation-messages",10),t.qZA(),t.TgZ(59,"div",17)(60,"label",7),t._uU(61,"Revision No."),t.qZA(),t._UZ(62,"input",18),t.qZA(),t.TgZ(63,"div",17)(64,"label",7),t._uU(65,"Revision Date "),t.TgZ(66,"span",8),t._uU(67,"*"),t.qZA()(),t._UZ(68,"input",19),t.qZA()()(),t.YNc(69,I,1,0,"hr",20),t.YNc(70,F,7,6,"div",21),t.qZA()()),2&i&&(t.Q6J("formGroup",o.form),t.xp6(14),t.Q6J("control",o.form.controls.hsnCode),t.xp6(7),t.Q6J("control",o.form.controls.goodsDescription),t.xp6(7),t.Q6J("control",o.form.controls.gstRate),t.xp6(8),t.Q6J("control",o.form.controls.igstRate),t.xp6(7),t.Q6J("control",o.form.controls.cgstRate),t.xp6(7),t.Q6J("control",o.form.controls.sgstRate),t.xp6(8),t.Q6J("control",o.form.controls.ugstRate),t.xp6(11),t.Q6J("ngIf","view"!==o.action),t.xp6(1),t.Q6J("ngIf","view"!==o.action))},dependencies:[d.mk,d.O5,w.s,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.nD,n.sg,n.u,n.x0],encapsulation:2})}return r})();var k=l(56208);const G=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:R},{path:"form",component:Y,resolve:{accessScreen:l(65876).x}}];let M=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[d.ez,p.Bz.forChild(G),k.m]})}return r})()}}]);