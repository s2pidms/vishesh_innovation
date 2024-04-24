"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8541],{48541:(z,_,l)=>{l.r(_),l.d(_,{WorkOrderGenerationModule:()=>P});var d=l(96814),h=l(1076),v=l(43818),k=l(25116),Z=l(90133),t=l(65879),u=l(98977),b=l(10583),T=l(88059),g=l(37285),y=l(53421);function A(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",21,22)(5,"span",23),t._uU(6),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td",21,24)(19,"span",23),t._uU(20),t.qZA()(),t.TgZ(21,"td")(22,"div",25),t._UZ(23,"button",26),t.TgZ(24,"div",27)(25,"a",28),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("/default/maintenance/transactions/work-order-generation/form",null==o?null:o._id,"view"))}),t._UZ(26,"i",29),t._uU(27," View "),t.qZA(),t.TgZ(28,"a",28),t.NdJ("click",function(){const o=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.navigateTo("/default/maintenance/transactions/work-order-generation/form",null==o?null:o._id,"edit"))}),t._UZ(29,"i",30),t._uU(30," Edit "),t.qZA()()()()()}if(2&r){const e=c.$implicit,n=t.MAs(4),i=t.MAs(18),o=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.workOrderCode),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.equipmentName)("positionTarget",n),t.xp6(1),t.hij(" ",e.equipmentName," "),t.xp6(2),t.Oqu(null==e?null:e.scheduleCode),t.xp6(2),t.Oqu(null==e?null:e.technicianCode),t.xp6(2),t.Oqu(null==e?null:e.priority),t.xp6(2),t.Oqu(null==e?null:e.startDateS),t.xp6(2),t.Oqu(null==e?null:e.endDateS),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.description)("positionTarget",i),t.xp6(1),t.hij(" ",e.description," "),t.xp6(5),t.Q6J("accessType",o.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",o.rolePermissionActions.editAction)}}const O=function(r,c,e,n){return{page:r,pageSize:c,collection:e,search:n,type:"list"}};let D=(()=>{class r{constructor(e,n,i,o,a,p){this.exportExcelService=e,this.generateWorkOrderService=n,this.router=i,this.activatedRoute=o,this.spinner=a,this.exportToPDFService=p,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.dataForExcel=[],this.rolePermissionActions=k.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,n,i){this.router.navigate([e],{queryParams:{id:n,action:i}})}trackByFn(e,n){return n?._id}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}getAll(e=!1,n=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.generateWorkOrderService.getAll(i).subscribe(o=>{"EXCEL"==n?this.excelDownload(o.rows):"PDF"==n?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,Z.be)(e))}pdfDownload(e){let n=(0,Z.NY)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}onSort({column:e,direction:n}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(u.Ol),t.Y36(b.zD),t.Y36(h.F0),t.Y36(h.gz),t.Y36(u.V),t.Y36(u.$L))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-work-order-generation-list"]],viewQuery:function(n,i){if(1&n&&t.Gf(v.j,5),2&n){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","workOrderCode",3,"sort"],["sortable","equipmentName",1,"text-start",3,"sort"],["sortable","scheduleCode",3,"sort"],["sortable","technicianCode",3,"sort"],["sortable","priority",3,"sort"],["sortable","startDateS",3,"sort"],["sortable","endDateS",3,"sort"],["sortable","description",1,"text-start",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["equipmentName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["description",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Generate Work Order Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("/default/maintenance/transactions/work-order-generation/form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Generate Work Order "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return i.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(15,"Work Order Code"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(17,"Equipment Name"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(19,"Schedule Code"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(21,"Technician Code"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(23,"Priority"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(25,"Start Date"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(27,"End Date"),t.qZA(),t.TgZ(28,"th",19),t.NdJ("sort",function(a){return i.onSort(a)}),t._uU(29,"Description"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,A,31,18,"tr",20),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,O,i.page,i.pageSize,i.collection,i.search)),t.xp6(23),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[T.P,d.sg,g._L,v.j,y.J],encapsulation:2})}return r})();var s=l(60095),q=l(21631),S=l(22096),U=l(74834),C=l(16897),w=l(95346);function x(r,c){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",12),t._uU(4),t.qZA()()),2&r){const e=c.$implicit;t.xp6(2),t.Oqu(null==e?null:e.srNo),t.xp6(2),t.Oqu(null==e?null:e.description)}}let N=(()=>{class r{constructor(e,n,i){this.activeModal=e,this.validationService=n,this.exportExcelService=i,this.action="",this.btnDisable=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.checklistInstruction=[]}ngOnInit(){this.collection=this.checklistInstruction.length}excelDownload(e){let n={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},i={title:"Customer Contact Details",csvData:e,headers:[{header:"Contact Person",key:"contactPersonName",...n},{header:"Designation",key:"contactPersonDesignation",...n}]};this.exportExcelService.exportExcel(i)}onSort({column:e,direction:n}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.checklistInstruction=""===n||""===e?this.checklistInstruction:[...this.checklistInstruction].sort((i,o)=>{let a="string"==typeof i[e]?i[e].toLowerCase():i[e],p="string"==typeof o[e]?o[e].toLowerCase():o[e];const m=a<p?-1:a>p?1:0;return"asc"===n?m:-m})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(g.Kz),t.Y36(C.RJ),t.Y36(u.Ol))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-view-checklist-instruction"]],viewQuery:function(n,i){if(1&n&&t.Gf(U.j_,5),2&n){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},inputs:{action:"action",checklistInstruction:"checklistInstruction"},decls:22,vars:8,consts:[[1,"modelPage",2,"min-height","54rem"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"modal-body"],[1,"container-fluid"],[1,"row"],[1,"table-responsive","ps-0","pe-0"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],[1,"text-start"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Add Checklist Instructions"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return i.activeModal.close(i.checklistInstruction)}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th"),t._uU(15,"Sr No"),t.qZA(),t.TgZ(16,"th",12),t._uU(17,"Description"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,x,5,2,"tr",13),t.ALo(20,"slice"),t.ALo(21,"searchFi1ter"),t.qZA()()()()()()()),2&n&&(t.xp6(19),t.Q6J("ngForOf",t.Dn7(20,1,t.xi3(21,5,i.checklistInstruction,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize)))},dependencies:[d.sg,d.OU,w.G],encapsulation:2})}return r})();var F=l(50363);function G(r,c){if(1&r&&(t.TgZ(0,"option",23),t._uU(1),t.qZA()),2&r){const e=c.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",null==e?null:e.label," ")}}function J(r,c){if(1&r&&(t.TgZ(0,"option",23),t._uU(1),t.qZA()),2&r){const e=c.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",null==e?null:e.label," ")}}const f=function(r){return{"d-none":r}};function Y(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",31)(1,"div",5)(2,"div",32)(3,"button",33),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(4," Reset "),t.qZA()(),t.TgZ(5,"div",34)(6,"button",33),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(7," Save "),t.qZA()()()()}if(2&r){const e=t.oxw();t.xp6(3),t.Q6J("ngClass",t.VKq(2,f,"View"==e.action)),t.xp6(3),t.Q6J("ngClass",t.VKq(4,f,"View"==e.action))}}function W(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div")(1,"button",35),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2," Save "),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(1,f,"View"==e.action))}}const I=function(){return["view","edit"]},E=function(){return["edit"]};let M=(()=>{class r{constructor(e,n,i,o,a,p,m,R){this.router=e,this.activatedRoute=n,this.spinner=i,this.toastService=o,this.generateWorkOrderService=a,this.modalService=p,this.validationService=m,this.utilityService=R,this.maintenanceChecklist=[],this.masterData={autoIncrementNo:"",priorityOptions:[],workOrderGenerateStatusOptions:[],scheduleCodeOptions:[],technicianCodeOptions:[]},this.form=new s.nJ({_id:new s.p4(null),workOrderCode:new s.p4(null),workOrderExecutionDate:new s.p4(null),description:new s.p4(null),schedule:new s.p4(null),equipmentName:new s.p4(null),equipment:new s.p4(null),technician:new s.p4(null),priority:new s.p4(null),startDate:new s.p4(null),endDate:new s.p4(null),materials:new s.p4(null),maintenanceCost:new s.p4(null),status:new s.p4("Open")}),this.findFormErrors=[{message:"SAC Id is Required",key:"sacId"},{message:"GST Rate is Required",key:"gst"},{message:"IGST Rate is Required",key:"igst"},{message:"SGST Rate is Required",key:"sgst"},{message:"CGST Rate  is Required",key:"cgst"}],this.submitted=!1,this.action="create"}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(e,n,i){this.router.navigate([e],{queryParams:{id:n,action:i}})}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,this.findFormErrors))return;this.form.enable();let e=this.form.value;e._id?this.update(e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.generateWorkOrderService.create(e).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.router.navigate(["/default/maintenance/transactions/work-order-generation/list"])})}update(e){this.spinner.show(),this.generateWorkOrderService.update(e._id,e).subscribe(n=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(n.message),this.router.navigate(["/default/maintenance/transactions/work-order-generation/list"])})}getInitialData(){this.spinner.show(),this.generateWorkOrderService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.f.workOrderCode.setValue(this.masterData?.autoIncrementNo),this.f.workOrderExecutionDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.f.startDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.f.endDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,q.z)(n=>(this.action=n.action,this.utilityService.accessDenied(this.action),n.id?this.generateWorkOrderService.getById(n.id):(0,S.of)({})))).subscribe(n=>{this.spinner.hide(),0!=Object.keys(n).length&&(n.workOrderExecutionDate&&(n.workOrderExecutionDate=this.utilityService.getFormatDate(n.workOrderExecutionDate,"YYYY-MM-DD")),n.startDate&&(n.startDate=this.utilityService.getFormatDate(n.startDate,"YYYY-MM-DD")),n.endDate&&(n.endDate=this.utilityService.getFormatDate(n.endDate,"YYYY-MM-DD")),this.form.patchValue(n),this.getInstructions(n?.equipment),"edit"!=this.action&&this.form.disable())})})}setEquipmentName(e){this.f.equipmentName.setValue(e?.equipmentName),this.f.equipment.setValue(e?.equipment),this.getInstructions(e?.equipment)}openChecklistInstructionModal(){const e=this.modalService.open(N,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.checklistInstruction=this.maintenanceChecklist,e.result.then(n=>{},n=>{})}getInstructions(e){this.generateWorkOrderService.viewChecklistById(e).subscribe(n=>{this.maintenanceChecklist=n?.rows})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(h.F0),t.Y36(h.gz),t.Y36(u.V),t.Y36(u.kl),t.Y36(b.zD),t.Y36(g.FF),t.Y36(C.RJ),t.Y36(u.tI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-work-order-generation-form"]],decls:85,vars:16,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","workOrderCode","readonly","",1,"form-control"],["type","date","formControlName","workOrderExecutionDate",1,"form-control"],["type","text","formControlName","description",1,"form-control"],["bindLabel","label","bindValue","_id","formControlName","schedule","placeholder","Select Schedule Code",3,"items","clearable","change"],["type","text","formControlName","equipmentName","readonly","",1,"form-control"],["bindLabel","label","bindValue","_id","formControlName","technician","placeholder","Select Technician Code",3,"items","clearable"],["formControlName","priority",1,"form-select"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["type","date","formControlName","startDate",1,"form-control"],["type","date","formControlName","endDate",1,"form-control"],["type","text","formControlName","materials",1,"form-control"],["type","number","formControlName","maintenanceCost",1,"form-control"],["formControlName","status",1,"form-select"],[3,"value"],[1,"row","line-border"],[1,"row","mb-0"],[1,"col-9","mb-3"],["type","button",1,"btn","btn-primary",3,"click"],["class","col-3 align-self-end",4,"ngIf"],[1,"col-3","text-end"],[4,"ngIf"],[1,"col-3","align-self-end"],[1,"d-grid","col","pe-0"],["type","button",1,"btn","btn-primary",3,"ngClass","click"],[1,"d-grid","col"],["type","button",1,"btn","btn-primary","col-6",3,"ngClass","click"]],template:function(n,i){1&n&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Work Order Code "),t._UZ(12,"span",8),t.qZA(),t._UZ(13,"input",9),t.qZA(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16," Work Order Execution Date "),t._UZ(17,"span",8),t.qZA(),t._UZ(18,"input",10),t.qZA(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21," Description "),t._UZ(22,"span",8),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"div",6)(25,"label",7),t._uU(26," Schedule Code"),t._UZ(27,"span",8),t.qZA(),t.TgZ(28,"ng-select",12),t.NdJ("change",function(a){return i.setEquipmentName(a)}),t.qZA()()(),t.TgZ(29,"div",5)(30,"div",6)(31,"label",7),t._uU(32," Equipment Name "),t._UZ(33,"span",8),t.qZA(),t._UZ(34,"input",13),t.qZA(),t.TgZ(35,"div",6)(36,"label",7),t._uU(37," Technician Code "),t._UZ(38,"span",8),t.qZA(),t._UZ(39,"ng-select",14),t.qZA(),t.TgZ(40,"div",6)(41,"label",7),t._uU(42," Priority"),t._UZ(43,"span",8),t.qZA(),t.TgZ(44,"select",15)(45,"option",16),t._uU(46,"Select Priority"),t.qZA(),t.YNc(47,G,2,2,"option",17),t.qZA()(),t.TgZ(48,"div",6)(49,"label",7),t._uU(50," Start Date "),t._UZ(51,"span",8),t.qZA(),t._UZ(52,"input",18),t.qZA()(),t.TgZ(53,"div",5)(54,"div",6)(55,"label",7),t._uU(56," End Date "),t._UZ(57,"span",8),t.qZA(),t._UZ(58,"input",19),t.qZA(),t.TgZ(59,"div",6)(60,"label",7),t._uU(61," Materials "),t._UZ(62,"span",8),t.qZA(),t._UZ(63,"input",20),t.qZA(),t.TgZ(64,"div",6)(65,"label",7),t._uU(66," Maintenance Cost "),t._UZ(67,"span",8),t.qZA(),t._UZ(68,"input",21),t.qZA(),t.TgZ(69,"div",6)(70,"label",7),t._uU(71," Status"),t._UZ(72,"span",8),t.qZA(),t.TgZ(73,"select",22)(74,"option",23),t._uU(75,"Select Status"),t.qZA(),t.YNc(76,J,2,2,"option",17),t.qZA()()()(),t._UZ(77,"hr",24),t.TgZ(78,"div",25)(79,"div",26)(80,"button",27),t.NdJ("click",function(){return i.openChecklistInstructionModal()}),t._uU(81," View Maintenance Checklist "),t.qZA()(),t.YNc(82,Y,8,6,"div",28),t.TgZ(83,"div",29),t.YNc(84,W,3,3,"div",30),t.qZA()()()()),2&n&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij(" ",t.lcZ(6,12,i.action)," Generate Work Order"),t.xp6(23),t.Q6J("items",i.masterData.scheduleCodeOptions)("clearable",!1),t.xp6(11),t.Q6J("items",i.masterData.technicianCodeOptions)("clearable",!1),t.xp6(6),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==i.masterData?null:i.masterData.priorityOptions),t.xp6(27),t.Q6J("value",""),t.xp6(2),t.Q6J("ngForOf",null==i.masterData?null:i.masterData.workOrderGenerateStatusOptions),t.xp6(6),t.Q6J("ngIf",!t.DdM(14,I).includes(i.action)),t.xp6(2),t.Q6J("ngIf",t.DdM(15,E).includes(i.action)))},dependencies:[d.mk,d.sg,d.O5,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u,F.w9,d.rS],encapsulation:2})}return r})();var L=l(56208);const V=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:D},{path:"form",component:M,resolve:{accessScreen:l(65876).x}}];let P=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#n=this.\u0275inj=t.cJS({imports:[L.m,d.ez,h.Bz.forChild(V)]})}return r})()}}]);