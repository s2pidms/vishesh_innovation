"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5631],{13686:(A,u,r)=>{r.r(u),r.d(u,{MapProcessAndMachineModule:()=>z});var p=r(96814),g=r(1076),m=r(43818),_=r(25116),b=r(94912),T=r(77203),e=r(65879),l=r(2742),v=r(23396),Z=r(37285),C=r(88059),M=r(53421);function y(o,h){if(1&o){const t=e.EpF();e.TgZ(0,"a",27),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw();return e.KtG(a.openConfirmModal(null==i?null:i._id,null==i?null:i.mapCode))}),e._UZ(1,"i",28),e._uU(2," Delete "),e.qZA()}}function P(o,h){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",17,18)(5,"span",19),e._uU(6),e.qZA()(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"div",20),e._UZ(11,"button",21),e.TgZ(12,"div",22)(13,"a",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,n=e.oxw();return e.KtG(n.navigateTo("/default/production/master/map_process_and_machine/form",a,"view"))}),e._UZ(14,"i",24),e._uU(15," View "),e.qZA(),e.TgZ(16,"a",23),e.NdJ("click",function(){const a=e.CHM(t).$implicit,n=e.oxw();return e.KtG(n.navigateTo("/default/production/master/map_process_and_machine/form",a,"edit"))}),e._UZ(17,"i",25),e._uU(18," Edit "),e.qZA(),e.YNc(19,y,3,0,"a",26),e.qZA()()()()}if(2&o){const t=h.$implicit,s=e.MAs(4),i=e.oxw();e.xp6(2),e.Oqu(null==t?null:t.mapCode),e.xp6(1),e.Udp("width",s.clientWidth),e.xp6(2),e.Q6J("positionTarget",s)("ngbTooltip",t.processName),e.xp6(1),e.hij(" ",t.processName," "),e.xp6(2),e.hij(" ",t.noOfMachines," "),e.xp6(5),e.Q6J("accessType",i.rolePermissionActions.viewAction),e.xp6(3),e.Q6J("accessType",i.rolePermissionActions.editAction),e.xp6(3),e.Q6J("ngIf",i.user==i.superAdminId)}}const x=function(o,h,t,s){return{page:o,pageSize:h,collection:t,search:s}};let w=(()=>{class o{constructor(t,s,i,a,n,d,f,V){this.exportExcelService=t,this.mapProcessMachineService=s,this.router=i,this.spinner=a,this.exportToPDFService=n,this.storageService=d,this.toastService=f,this.modalService=V,this.page=1,this.pageSize=8,this.collection=0,this.column="mapCode",this.direction=-1,this.search="",this.tableData=[],this.superAdminId=_.dA,this.user="",this.rolePermissionActions=_.a1}ngOnInit(){this.user=this.storageService.get("IDMSAUser")?.roles?.find(t=>t==this.superAdminId),this.getAll()}navigateTo(t,s,i){this.router.navigate([t],{queryParams:{id:s?._id,action:i}})}trackByFn(t,s){return s?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}navigateToPrint(t,s,i,a){window.open(`${window.location.origin}${t}?id=${s?._id}&action=${i}&preview=${a}`,"_blank")}getAll(t=!1,s=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.mapProcessMachineService.getAll(i).subscribe(a=>{"EXCEL"==s?this.excelDownload(a.rows):"PDF"==s?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}delete(t){this.spinner.show(),this.mapProcessMachineService.delete(t).subscribe(s=>{this.spinner.hide(),this.toastService.success(s.message),this.getAll()})}openConfirmModal(t,s){const i=this.modalService.open(T.hn,{centered:!0,size:"md",backdrop:"static",keyboard:!1});i.componentInstance.heading="Confirm Deletion",i.componentInstance.confirmText=`Confirm Deletion of Map Code ${s} ?`,i.result.then(a=>{"Yes"==a.title&&this.delete(t)},a=>{})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(t){let s=(0,b.Cz)(t);this.exportToPDFService.generatePdf(s.tableData,s.title)}excelDownload(t){this.exportExcelService.exportExcel((0,b.vX)(t))}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.column=t,this.direction="asc"==s?1:-1,this.getAll()}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(l.Ol),e.Y36(v.vX),e.Y36(g.F0),e.Y36(l.V),e.Y36(l.$L),e.Y36(l.V1),e.Y36(l.kl),e.Y36(Z.FF))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-map-process-list"]],viewQuery:function(s,i){if(1&s&&e.Gf(m.j,5),2&s){let a;e.iGM(a=e.CRH())&&(i.headers=a)}},decls:24,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","mapCode",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","noOfMachines",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["processName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["href","javascript:void(0)",3,"click",4,"ngIf"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-primary"]],template:function(s,i){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Map Process and Machine (Entry)"),e.qZA()(),e.TgZ(4,"div",3)(5,"button",4),e.NdJ("click",function(){return i.navigateTo("/default/production/master/map_process_and_machine/form",{},"create")}),e._UZ(6,"i",5),e._uU(7," Map Process and Machine "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(n){return i.eventHeader(n)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(15,"Map Code"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(17,"Process Name"),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(19,"Total # of Machines"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(21,"Action"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,P,20,10,"tr",16),e.qZA()()()()),2&s&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,x,i.page,i.pageSize,i.collection,i.search)),e.xp6(13),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[p.sg,p.O5,C.P,Z._L,m.j,M.J],encapsulation:2})}return o})();var c=r(60095),N=r(21631),U=r(22096),S=r(65859),F=r(16897),J=r(50363),k=r(95346);function q(o,h){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",40,41)(7,"span",42),e._uU(8),e.qZA()(),e.TgZ(9,"td",40,43)(11,"span",42),e._uU(12),e.qZA()(),e.TgZ(13,"td")(14,"div",44),e._UZ(15,"button",45),e.TgZ(16,"div",46)(17,"a",47),e.NdJ("click",function(){const i=e.CHM(t),a=i.$implicit,n=i.index,d=e.oxw();return e.KtG(d.patchItem(a,n,"edit"))}),e._UZ(18,"i",48),e._uU(19," Edit "),e.qZA(),e.TgZ(20,"a",47),e.NdJ("click",function(){const a=e.CHM(t).index,n=e.oxw();return e.KtG(n.deleteItem(a))}),e._UZ(21,"i",49),e._uU(22," Delete "),e.qZA()()()()()}if(2&o){const t=h.$implicit,s=h.index,i=e.MAs(6),a=e.MAs(10),n=e.oxw();e.xp6(2),e.Oqu(1+s+(n.page-1)*n.pageSize),e.xp6(2),e.hij(" ",null==t?null:t.machineCode," "),e.xp6(1),e.Udp("width",i.clientWidth),e.xp6(2),e.Q6J("positionTarget",i)("ngbTooltip",t.machineName),e.xp6(1),e.hij(" ",null==t?null:t.machineName," "),e.xp6(1),e.Udp("width",a.clientWidth),e.xp6(2),e.Q6J("positionTarget",a)("ngbTooltip",t.machineDescription),e.xp6(1),e.hij(" ",null==t?null:t.machineDescription," "),e.xp6(5),e.ekj("disable","view"==n.action),e.xp6(3),e.ekj("disable","view"==n.action)}}function I(o,h){1&o&&e._UZ(0,"hr",26)}function L(o,h){if(1&o){const t=e.EpF();e.TgZ(0,"div",50)(1,"button",51),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",52),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(4,"Save"),e.qZA()()}}const E=function(o,h,t,s){return{page:o,pageSize:h,collection:t,search:s,excelDisplay:"none"}},D=function(){return["view"]};let Q=(()=>{class o{trackByFn(t,s){return s?._id}get machineDetailsData(){return this.form.get("machineDetails")}constructor(t,s,i,a,n,d,f){this.router=t,this.activatedRoute=s,this.spinner=i,this.toastService=a,this.mapProcessMachineService=n,this.validationService=d,this.utilityService=f,this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.flag=-1,this.submitted=!1,this.action="create",this.btnDisable=!1,this.machineDetailsArr=[],this.masterData={autoIncrementNo:"",processOptions:[],machineOptions:[]},this.form=new c.nJ({_id:new c.p4(null),mapCode:new c.p4(null),process:new c.p4(null),processCode:new c.p4(null,[c.kI.required]),processName:new c.p4(null),status:new c.p4("Active"),machineDetails:new c.nJ({index:new c.p4(-1),machine:new c.p4(null),machineCode:new c.p4(null),machineName:new c.p4(null),machineDescription:new c.p4(null),machineType:new c.p4(null)})})}ngOnInit(){this.getInitialData()}get f(){return this.form.controls}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.flag=-1;break;case"EXCEL":default:break;case"PAGE":this.page=t.value}}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,S.l))return;if(0==this.machineDetailsArr.length)return void this.toastService.warning("at least one row is required !");let t=this.form.value;t.machineDetails=this.machineDetailsArr,t._id?this.update(t):(delete t._id,this.create(t))}patchItem(t,s,i){t.index=s,this.machineDetailsData.patchValue(t),"view"==i?(this.btnDisable=!0,this.machineDetailsData.disable()):(this.machineDetailsData.enable(),this.btnDisable=!1)}deleteItem(t){"view"!=this.action&&(this.machineDetailsArr.splice(t+(this.page-1)*this.pageSize,1),this.collection=this.machineDetailsArr.length)}update(t){this.spinner.show(),this.mapProcessMachineService.update(t._id,t).subscribe(s=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(s.message),this.router.navigate(["/default/production/master/map_process_and_machine/list"])})}create(t){this.spinner.show(),this.mapProcessMachineService.create(t).subscribe(s=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(s.message),this.router.navigate(["/default/production/master/map_process_and_machine/list"])})}reset(){this.form.reset(),this.machineDetailsArr=[],this.collection=this.machineDetailsArr.length,this.getInitialData()}getInitialData(){this.spinner.show(),this.mapProcessMachineService.getAllMasterData({}).subscribe(t=>{this.masterData=t,this.form.controls.mapCode.setValue(t.autoIncrementNo),this.form.controls.status.setValue("Active"),this.activatedRoute.queryParams.pipe((0,N.z)(s=>(this.action=s.action,this.utilityService.accessDenied(this.action),s.id?this.mapProcessMachineService.getById(s.id):(0,U.of)({})))).subscribe(s=>{this.spinner.hide(),0!=Object.keys(s).length&&(s.machineDetails&&(this.machineDetailsArr=s.machineDetails),this.collection=this.machineDetailsArr.length,this.form.patchValue(s),"view"==this.action&&this.form.disable())})})}setProcessId(t){t._id&&this.form.controls.process.setValue(t._id),t.processCode&&this.form.controls.processCode.setValue(t.processCode),t.processName&&this.form.controls.processName.setValue(t.processName)}setMachineId(t){this.machineDetailsData.controls.machine.setValue(t?._id),this.machineDetailsData.controls.machineCode.setValue(t?.assetCode),this.machineDetailsData.controls.machineName.setValue(t?.assetName),this.machineDetailsData.controls.machineDescription.setValue(t?.assetDescription),this.machineDetailsData.controls.machineType.setValue(t?.assetType)}addMachineDetails(){if(!this.machineDetailsData.value.machineCode)return void this.toastService.warning("Machine Code is required !");let s=this.machineDetailsData.value;(s.index||0==s.index)&&s.index>=0?this.machineDetailsArr.splice(s.index,1,s):this.machineDetailsArr.push(s),this.collection=this.machineDetailsArr.length,this.machineDetailsData.reset(),this.collection=this.machineDetailsArr.length}deleteDetails(t){this.machineDetailsArr.splice(t+(this.page-1)*this.pageSize,1),this.collection=this.machineDetailsArr.length}onSort({column:t,direction:s}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.machineDetailsArr=""===s||""===t?this.machineDetailsArr:[...this.machineDetailsArr].sort((i,a)=>{let n="string"==typeof i[t]?i[t].toLowerCase():i[t],d="string"==typeof a[t]?a[t].toLowerCase():a[t];const f=n<d?-1:n>d?1:0;return"asc"===s?f:-f})}static#e=this.\u0275fac=function(s){return new(s||o)(e.Y36(g.F0),e.Y36(g.gz),e.Y36(l.V),e.Y36(l.kl),e.Y36(v.vX),e.Y36(F.RJ),e.Y36(l.tI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-map-process-form"]],viewQuery:function(s,i){if(1&s&&e.Gf(m.j,5),2&s){let a;e.iGM(a=e.CRH())&&(i.headers=a)}},decls:92,vars:33,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-3"],[1,"form-label","mb-0"],[1,"text-danger"],["type","text","formControlName","mapCode","readonly","",1,"form-control"],[1,"form-label"],["bindLabel","processCode","bindValue","processCode","formControlName","processCode",3,"items","clearable","change"],["bindLabel","processName","bindValue","processName","formControlName","processName",3,"items","clearable","change"],["formControlName","status",1,"form-select"],["selected","","disabled","",3,"value"],["value","Active"],["value","Inactive"],["formGroupName","machineDetails",1,"col-3"],["bindLabel","assetCode","bindValue","assetCode","formControlName","machineCode",3,"items","clearable","change"],["bindLabel","assetName","bindValue","assetName","formControlName","machineName",3,"items","clearable","change"],["type","text","formControlName","machineDescription","readonly","",1,"form-control"],["formGroupName","machineDetails",1,"col-2"],["type","text","formControlName","machineType","readonly","",1,"form-control"],[1,"col-1","d-flex","align-items-end","justify-content-end","ps-0"],[1,"btn","btn-primary",3,"disabled","click"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive","mt-0","text-wrap",2,"min-height","18rem"],[1,"table","table-bordered","mt-0","table-sm"],[1,"bg-info"],[1,"text-white"],["sortable","machineCode",3,"sort"],["sortable","machineName",1,"text-start",3,"sort"],["sortable","machineDescription",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","row line-border",4,"ngIf"],[1,"row","align-items-center","mt-3"],[1,"col-12","text-center"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[1,"text-start"],["machineName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["machineDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["href","javascript:void(0)",3,"click"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-trash","fa-lg","me-2","text-primary"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-4",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),e._uU(11," Map Code "),e.TgZ(12,"span",9),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",10),e.qZA(),e.TgZ(15,"div",7)(16,"label",11),e._uU(17," Process Code "),e.TgZ(18,"span",9),e._uU(19,"*"),e.qZA()(),e.TgZ(20,"ng-select",12),e.NdJ("change",function(n){return i.setProcessId(n)}),e.qZA()(),e.TgZ(21,"div",7)(22,"label",11),e._uU(23," Process Name "),e.TgZ(24,"span",9),e._uU(25,"*"),e.qZA()(),e.TgZ(26,"ng-select",13),e.NdJ("change",function(n){return i.setProcessId(n)}),e.qZA()(),e.TgZ(27,"div",7)(28,"label",11),e._uU(29,"Status"),e.TgZ(30,"span",9),e._uU(31," *"),e.qZA()(),e.TgZ(32,"select",14)(33,"option",15),e._uU(34,"Select Status"),e.qZA(),e.TgZ(35,"option",16),e._uU(36,"Active"),e.qZA(),e.TgZ(37,"option",17),e._uU(38,"Inactive"),e.qZA()()()(),e.TgZ(39,"div",6)(40,"div",18)(41,"label",11),e._uU(42," Machine Code "),e.TgZ(43,"span",9),e._uU(44,"*"),e.qZA()(),e.TgZ(45,"ng-select",19),e.NdJ("change",function(n){return i.setMachineId(n)}),e.qZA()(),e.TgZ(46,"div",18)(47,"label",11),e._uU(48," Machine Name "),e.TgZ(49,"span",9),e._uU(50,"*"),e.qZA()(),e.TgZ(51,"ng-select",20),e.NdJ("change",function(n){return i.setMachineId(n)}),e.qZA()(),e.TgZ(52,"div",18)(53,"label",8),e._uU(54," Machine Description "),e.TgZ(55,"span",9),e._uU(56,"*"),e.qZA()(),e._UZ(57,"input",21),e.qZA(),e.TgZ(58,"div",22)(59,"label",8),e._uU(60," Machine Type "),e.TgZ(61,"span",9),e._uU(62,"*"),e.qZA()(),e._UZ(63,"input",23),e.qZA(),e.TgZ(64,"div",24)(65,"button",25),e.NdJ("click",function(){return i.addMachineDetails()}),e._uU(66," (+) Add "),e.qZA()()()(),e._UZ(67,"hr",26),e.TgZ(68,"div",4)(69,"app-setting-header",27),e.NdJ("dataChange",function(n){return i.eventHeader(n)}),e.qZA()(),e.TgZ(70,"div",28)(71,"table",29)(72,"thead",30)(73,"tr",31)(74,"th"),e._uU(75,"#"),e.qZA(),e.TgZ(76,"th",32),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(77,"Machine Code"),e.qZA(),e.TgZ(78,"th",33),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(79,"Machine Name"),e.qZA(),e.TgZ(80,"th",34),e.NdJ("sort",function(n){return i.onSort(n)}),e._uU(81," Machine Description "),e.qZA(),e.TgZ(82,"th"),e._uU(83,"Action"),e.qZA()()(),e.TgZ(84,"tbody"),e.YNc(85,q,23,16,"tr",35),e.ALo(86,"slice"),e.ALo(87,"searchFi1ter"),e.qZA()()(),e.YNc(88,I,1,0,"hr",36),e.TgZ(89,"div",37)(90,"div",38),e.YNc(91,L,5,0,"div",39),e.qZA()()()()),2&s&&(e.Q6J("formGroup",i.form),e.xp6(5),e.hij("Map Process and Machine (",e.lcZ(6,17,i.action),")"),e.xp6(15),e.Q6J("items",i.masterData.processOptions)("clearable",!1),e.xp6(6),e.Q6J("items",i.masterData.processOptions)("clearable",!1),e.xp6(7),e.Q6J("value",null),e.xp6(12),e.Q6J("items",i.masterData.machineOptions)("clearable",!1),e.xp6(6),e.Q6J("items",i.masterData.machineOptions)("clearable",!1),e.xp6(14),e.Q6J("disabled","view"==i.action),e.xp6(4),e.Q6J("data",e.l5B(26,E,i.page,i.pageSize,i.collection,i.search)),e.xp6(16),e.Q6J("ngForOf",e.Dn7(86,19,e.xi3(87,23,i.machineDetailsArr,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn),e.xp6(3),e.Q6J("ngIf",!e.DdM(31,D).includes(i.action)),e.xp6(3),e.Q6J("ngIf",!e.DdM(32,D).includes(i.action)))},dependencies:[p.sg,p.O5,C.P,Z._L,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u,c.x0,J.w9,m.j,p.OU,p.rS,k.G],encapsulation:2})}return o})();var Y=r(19964),O=r(56208);const j=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:w},{path:"form",component:Q,resolve:{accessScreen:Y.xr}}];let z=(()=>{class o{static#e=this.\u0275fac=function(s){return new(s||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[p.ez,g.Bz.forChild(j),O.m]})}return o})()},13107:(A,u,r)=>{r.d(u,{t:()=>p});const p={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(A,u,r)=>{r.d(u,{J:()=>p});const p=({data:g,headers:m,widths:_,title:b})=>({tableData:{widths:_,headerRows:1,body:[m.map(l=>({text:l.header,style:"header"})),...g.map(l=>m.map(v=>({style:"subheader",text:l[v.key]})))]},title:b})}}]);