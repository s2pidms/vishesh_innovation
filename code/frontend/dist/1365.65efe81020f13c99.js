"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1365],{9420:(P,h,c)=>{c.r(h),c.d(h,{ProcessNameMasterModule:()=>z});var l=c(96814),p=c(1076),r=c(60095),v=c(21631),_=c(22096),Z=c(73275),f=c(43818),g=c(65859),e=c(65879),T=c(37285),S=c(16897),m=c(98977),C=c(88059),x=c(95346);function N(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",29),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",31),e._UZ(11,"button",32),e.TgZ(12,"div",33)(13,"a",34),e.NdJ("click",function(){const i=e.CHM(t),o=i.$implicit,a=i.index,d=e.oxw();return e.KtG(d.patchItem(o,a,"view"))}),e._UZ(14,"i",35),e._uU(15," View "),e.qZA(),e.TgZ(16,"a",34),e.NdJ("click",function(){const i=e.CHM(t),o=i.$implicit,a=i.index,d=e.oxw();return e.KtG(d.patchItem(o,a,"edit"))}),e._UZ(17,"i",36),e._uU(18," Edit "),e.qZA(),e.TgZ(19,"a",34),e.NdJ("click",function(){const o=e.CHM(t).index,a=e.oxw();return e.KtG(a.deleteItem(o))}),e._UZ(20,"i",37),e._uU(21," Delete "),e.qZA()()()()()}if(2&n){const t=u.$implicit,s=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.subProcessCode),e.xp6(2),e.Oqu(null==t?null:t.subProcessName),e.xp6(2),e.Oqu(null==t?null:t.order),e.xp6(2),e.Oqu(null==t?null:t.status),e.xp6(5),e.ekj("disable","view"==s.action),e.xp6(3),e.ekj("disable","view"==s.action),e.xp6(3),e.ekj("disable","view"==s.action)}}const U=function(n,u,t,s){return{page:n,pageSize:u,collection:t,search:s,excelDisplay:"none"}};let w=(()=>{class n{constructor(t,s,i){this.activeModal=t,this.validationService=s,this.exportExcelService=i,this.action="",this.defineSubProcessesList=[],this.btnDisable=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.form=new r.nJ({index:new r.p4(-1),subProcessCode:new r.p4(null,[r.kI.required]),subProcessName:new r.p4(null,[r.kI.required]),order:new r.p4(null,[r.kI.required]),status:new r.p4(null,[r.kI.required])})}ngOnInit(){this.collection=this.defineSubProcessesList.length,"view"==this.action&&this.form.disable()}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value;break;case"EXCEL":this.excelDownload(this.defineSubProcessesList);break;case"PAGE":this.page=t.value}}save(){if(this.validationService.checkErrors(this.form,g.C))return;let t=this.form.value;(t.index||0==t.index)&&t.index>=0?this.defineSubProcessesList.splice(t.index,1,t):this.defineSubProcessesList.push(t),this.collection=this.defineSubProcessesList.length,this.form.reset()}patchItem(t,s,i){"view"!=this.action&&(t.index=s,this.form.patchValue(t),"view"==i?(this.btnDisable=!0,this.form.disable()):(this.form.enable(),this.btnDisable=!1))}deleteItem(t){"view"!=this.action&&(this.defineSubProcessesList.splice(t+(this.page-1)*this.pageSize,1),this.collection=this.defineSubProcessesList.length)}excelDownload(t){let s={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},i={title:"Customer Contact Details",csvData:t,headers:[{header:"Contact Person",key:"supplierContactPersonName",...s},{header:"Designation",key:"supplierContactPersonDesignation",...s},{header:"Mobile No.",key:"supplierContactPersonNumber",...s},{header:"E-mail ID",key:"supplierContactPersonEmail",...s}]};this.exportExcelService.exportExcel(i)}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.defineSubProcessesList=""===s||""===t?this.defineSubProcessesList:[...this.defineSubProcessesList].sort((i,o)=>{let a="string"==typeof i[t]?i[t].toLowerCase():i[t],d="string"==typeof o[t]?o[t].toLowerCase():o[t];const b=a<d?-1:a>d?1:0;return"asc"===s?b:-b})}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(T.Kz),e.Y36(S.RJ),e.Y36(m.Ol))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-define-sub-processes-modal"]],viewQuery:function(s,i){if(1&s&&e.Gf(f.j,5),2&s){let o;e.iGM(o=e.CRH())&&(i.headers=o)}},inputs:{action:"action",defineSubProcessesList:"defineSubProcessesList"},decls:66,vars:19,consts:[[1,"modelPage",2,"min-height","54rem"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,""],[1,"container-fluid"],[1,"row"],[3,"formGroup"],[1,"row","px-5","mt-4"],[1,"col-3","ps-0"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","subProcessCode",1,"form-control"],[1,"col-3"],["type","text","formControlName","subProcessName",1,"form-control"],["type","number","formControlName","order",1,"form-control"],["formControlName","status",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value"],[1,"col","text-center","my-4"],["type","button",1,"btn","bg-primary","px-5",3,"disabled","click"],[1,"line-border","mb-0"],[1,"mt-0","px-5"],[3,"data","dataChange"],[1,"table-responsive","px-5"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[1,"text-start"],[4,"ngFor","ngForOf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","me-2","text-primary"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Sub - Processes Details"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return i.activeModal.close(i.defineSubProcessesList)}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"form",8)(11,"div",9)(12,"div",10)(13,"label",11),e._uU(14," Sub - Process Code "),e.TgZ(15,"span",12),e._uU(16,"*"),e.qZA()(),e._UZ(17,"input",13),e.qZA(),e.TgZ(18,"div",14)(19,"label",11),e._uU(20," Sub - Process Name "),e.TgZ(21,"span",12),e._uU(22,"*"),e.qZA()(),e._UZ(23,"input",15),e.qZA(),e.TgZ(24,"div",14)(25,"label",11),e._uU(26," Order "),e.TgZ(27,"span",12),e._uU(28,"*"),e.qZA()(),e._UZ(29,"input",16),e.qZA(),e.TgZ(30,"div",14)(31,"label",11),e._uU(32," Status "),e.TgZ(33,"span",12),e._uU(34,"*"),e.qZA()(),e.TgZ(35,"select",17)(36,"option",18),e._uU(37,"Select Status"),e.qZA(),e.TgZ(38,"option",19),e._uU(39,"Active"),e.qZA(),e.TgZ(40,"option",19),e._uU(41,"Inactive"),e.qZA()()()()(),e.TgZ(42,"div",20)(43,"button",21),e.NdJ("click",function(){return i.save()}),e._uU(44," Add "),e.qZA()(),e._UZ(45,"hr",22),e.TgZ(46,"div",23)(47,"app-setting-header",24),e.NdJ("dataChange",function(a){return i.eventHeader(a)}),e.qZA()(),e.TgZ(48,"div",25)(49,"table",26)(50,"thead",27)(51,"tr",28)(52,"th"),e._uU(53,"Sub - Process Code"),e.qZA(),e.TgZ(54,"th",29),e._uU(55,"Sub - Process Name"),e.qZA(),e.TgZ(56,"th"),e._uU(57,"Order"),e.qZA(),e.TgZ(58,"th"),e._uU(59,"Status"),e.qZA(),e.TgZ(60,"th"),e._uU(61,"Action"),e.qZA()()(),e.TgZ(62,"tbody"),e.YNc(63,N,22,10,"tr",30),e.ALo(64,"slice"),e.ALo(65,"searchFi1ter"),e.qZA()()()()()()()),2&s&&(e.xp6(10),e.Q6J("formGroup",i.form),e.xp6(26),e.Q6J("value",null),e.xp6(2),e.Q6J("value","Active"),e.xp6(2),e.Q6J("value","Inactive"),e.xp6(3),e.Q6J("disabled",i.btnDisable||"view"==i.action),e.xp6(4),e.Q6J("data",e.l5B(14,U,i.page,i.pageSize,i.collection,i.search)),e.xp6(16),e.Q6J("ngForOf",e.Dn7(64,7,e.xi3(65,11,i.defineSubProcessesList,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize)))},dependencies:[l.sg,C.P,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,l.OU,x.G],encapsulation:2})}return n})();var A=c(88354);function q(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"div",21)(1,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(4,"Save"),e.qZA()()}}const k=function(){return["view"]};let D=(()=>{class n{constructor(t,s,i,o,a,d,b,G){this.processNameMasterService=t,this.router=s,this.activatedRoute=i,this.spinner=o,this.toastService=a,this.validationService=d,this.utilityService=b,this.modalService=G,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:""},this.defineSubProcessesList=[],this.form=new r.nJ({_id:new r.p4(null),processCode:new r.p4(null,[r.kI.required]),processName:new r.p4(null,[r.kI.required]),order:new r.p4(null,[r.kI.required]),status:new r.p4("Active",[r.kI.required]),defineSubProcesses:new r.p4([])})}ngOnInit(){this.getInitialData()}navigateTo(t,s,i){this.router.navigate([t],{queryParams:{id:s,action:i}})}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,Z.lX))return;let t=this.form.value;t.revision&&(t.revision=[t.revision]),t.defineSubProcesses=this.defineSubProcessesList,t._id?this.update(t):(delete t._id,this.create(t))}update(t){this.spinner.show(),this.processNameMasterService.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.router.navigate(["/default/settings/master/production/process_name_master/list"])})}create(t){this.spinner.show(),this.processNameMasterService.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.router.navigate(["/default/settings/master/production/process_name_master/list"])})}reset(){this.form.reset(),this.getInitialData()}getInitialData(){this.spinner.show(),this.processNameMasterService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.processCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,v.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.processNameMasterService.getById(s.id):(0,_.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(s.defineSubProcesses&&(this.defineSubProcessesList=s.defineSubProcesses),this.form.patchValue(s),"edit"!=this.action&&this.form.disable())})})}openSubProcessesModal(){const t=this.modalService.open(w,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});t.componentInstance.action=this.action,t.componentInstance.defineSubProcessesList=this.defineSubProcessesList,t.result.then(s=>{["create","edit"].includes(this.action)&&(this.defineSubProcessesList=s)},s=>{})}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(A.Fy),e.Y36(p.F0),e.Y36(p.gz),e.Y36(m.V),e.Y36(m.kl),e.Y36(S.RJ),e.Y36(m.tI),e.Y36(T.FF))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-process-name-form"]],decls:44,vars:6,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","mb-2"],[1,"text-danger"],["type","text","formControlName","processCode","readonly","",1,"form-control"],["type","text","formControlName","processName",1,"form-control"],["type","number","formControlName","order",1,"form-control"],["formControlName","status",1,"form-select"],["value","Active"],["value","Inactive"],[1,"row","line-border"],[1,"row","align-items-center","mt-3"],[1,"col-6"],["type","button",1,"btn","btn-primary","px-4",3,"click"],[1,"col-6","text-end"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11,"Process Code "),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",6)(16,"label",7),e._uU(17,"Process Name "),e.TgZ(18,"span",8),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",10),e.qZA(),e.TgZ(21,"div",6)(22,"label",7),e._uU(23,"Order "),e.TgZ(24,"span",8),e._uU(25,"*"),e.qZA()(),e._UZ(26,"input",11),e.qZA(),e.TgZ(27,"div",6)(28,"label",7),e._uU(29,"Status "),e.TgZ(30,"span",8),e._uU(31,"*"),e.qZA()(),e.TgZ(32,"select",12)(33,"option",13),e._uU(34,"Active"),e.qZA(),e.TgZ(35,"option",14),e._uU(36,"Inactive"),e.qZA()()()()(),e._UZ(37,"hr",15),e.TgZ(38,"div",16)(39,"div",17)(40,"button",18),e.NdJ("click",function(){return i.openSubProcessesModal()}),e._uU(41," Define Sub - Processes "),e.qZA()(),e.TgZ(42,"div",19),e.YNc(43,q,5,0,"div",20),e.qZA()()()()),2&s&&(e.Q6J("formGroup",i.form),e.xp6(5),e.hij("Process Name Master (",e.lcZ(6,3,i.action),")"),e.xp6(38),e.Q6J("ngIf",!e.DdM(5,k).includes(i.action)))},dependencies:[l.O5,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,l.rS],encapsulation:2})}return n})();var L=c(25116),y=c(91164),J=c(53421);function M(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",17),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",18),e._UZ(11,"button",19),e.TgZ(12,"div",20)(13,"a",21),e.NdJ("click",function(){const o=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.navigateTo("/default/settings/master/production/process_name_master/form",null==o?null:o._id,"view"))}),e._UZ(14,"i",22),e._uU(15," View "),e.qZA(),e.TgZ(16,"a",21),e.NdJ("click",function(){const o=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.navigateTo("/default/settings/master/production/process_name_master/form",null==o?null:o._id,"edit"))}),e._UZ(17,"i",23),e._uU(18," Edit "),e.qZA()()()()()}if(2&n){const t=u.$implicit,s=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.processCode),e.xp6(2),e.Oqu(null==t?null:t.processName),e.xp6(2),e.Oqu(null==t?null:t.order),e.xp6(2),e.Oqu(null==t?null:t.status),e.xp6(5),e.Q6J("accessType",s.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",s.rolePermissionActions.editAction)}}const F=function(n,u,t,s){return{page:n,pageSize:u,collection:t,search:s,type:"list"}};let E=(()=>{class n{constructor(t,s,i,o,a,d){this.exportExcelService=t,this.processNameMasterService=s,this.router=i,this.activatedRoute=o,this.spinner=a,this.exportToPDFService=d,this.page=1,this.pageSize=8,this.collection=0,this.column="order",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=L.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,s,i){this.router.navigate([t],{queryParams:{id:s,action:i}})}trackByFn(t,s){return s?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,s=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.processNameMasterService.getAll(i).subscribe(o=>{"EXCEL"==s?this.excelDownload(o.rows):"PDF"==s?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(t){let s=(0,y.l0)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(t){this.exportExcelService.exportExcel((0,y.A7)(t))}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(m.Ol),e.Y36(A.Fy),e.Y36(p.F0),e.Y36(p.gz),e.Y36(m.V),e.Y36(m.$L))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-process-name-list"]],viewQuery:function(s,i){if(1&s&&e.Gf(f.j,5),2&s){let o;e.iGM(o=e.CRH())&&(i.headers=o)}},decls:26,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","processCode",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","order",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Process Name Master Summary"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("/default/settings/master/production/process_name_master/form",null,"create")}),e._UZ(6,"i",5),e._uU(7," Process Name Master "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(a){return i.eventHeader(a)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(15,"Process Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(17,"Process Name"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(19,"Order"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(21,"Status"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"Action"),e.qZA()()(),e.TgZ(24,"tbody"),e.YNc(25,M,19,6,"tr",16),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,F,i.page,i.pageSize,i.collection,i.search)),e.xp6(15),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[l.sg,C.P,f.j,J.J],encapsulation:2})}return n})();var I=c(65876),O=c(56208);const Y=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:E},{path:"form",component:D,resolve:{accessScreen:I.x}}];let z=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#s=this.\u0275inj=e.cJS({imports:[l.ez,p.Bz.forChild(Y),O.m]})}return n})()},13107:(P,h,c)=>{c.d(h,{t:()=>l});const l={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(P,h,c)=>{c.d(h,{J:()=>l});const l=({data:p,headers:r,widths:v,title:_})=>({tableData:{widths:v,headerRows:1,body:[r.map(g=>({text:g.header,style:"header"})),...p.map(g=>r.map(e=>({style:"subheader",text:g[e.key]})))]},title:_})}}]);