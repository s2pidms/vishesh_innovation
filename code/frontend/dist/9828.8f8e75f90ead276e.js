"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9828],{69828:(D,m,c)=>{c.r(m),c.d(m,{ChildPartModule:()=>pt});var a=c(96814),h=c(1076),g=c(43818),v=c(25116),T=c(34183),t=c(65879),_=c(2742),f=c(23396),b=c(88059),P=c(53421);function w(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",18),t._UZ(13,"button",19),t.TgZ(14,"div",20)(15,"a",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",o,"view"))}),t._UZ(16,"i",22),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",o,"edit"))}),t._UZ(19,"i",23),t._uU(20," Edit "),t.qZA(),t.TgZ(21,"a",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",o,"approve"))}),t._UZ(22,"i",24),t._uU(23," Approve "),t.qZA(),t.TgZ(24,"a",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",o,"cancel"))}),t._UZ(25,"img",25),t._uU(26," Cancel "),t.qZA()()()()()}if(2&r){const e=p.$implicit,n=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.productionDate),t.xp6(2),t.Oqu(null==e?null:e.productionShift),t.xp6(2),t.Oqu(null==e?null:e.processName),t.xp6(2),t.Oqu(null==e?null:e.machineName),t.xp6(2),t.Oqu(null==e?null:e.status),t.xp6(5),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==e?null:e.status)||"Cancelled"===(null==e?null:e.status)),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"===(null==e?null:e.status)||"edit"===(null==e?null:e.status)||"Cancelled"===(null==e?null:e.status)),t.Q6J("accessType",n.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Approved"===(null==e?null:e.status)||"Cancelled"===(null==e?null:e.status)),t.Q6J("accessType",n.rolePermissionActions.approveAction)}}const U=function(r,p,e,n){return{page:r,pageSize:p,collection:e,search:n,type:"list"}};let q=(()=>{class r{constructor(e,n,i,o,s,C){this.exportExcelService=e,this.childPartService=n,this.spinner=i,this.activatedRoute=o,this.exportToPDFService=s,this.utilityService=C,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,n,i){this.utilityService.navigateToForm({path:e,status:n.status,action:i,id:n._id,activatedRoute:this.activatedRoute})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,n){return n?._id}getAll(e=!1,n=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.childPartService.getAll(i).subscribe(o=>{"EXCEL"==n?this.excelDownload(o.rows):"PDF"==n?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(e){let n=(0,T.YJ)(e);this.exportToPDFService.generatePdf(n.tableData,n.title)}excelDownload(e){this.exportExcelService.exportExcel((0,T.kQ)(e))}onSort({column:e,direction:n}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==n?1:-1,this.getAll()}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(_.Ol),t.Y36(f.Xw),t.Y36(_.V),t.Y36(h.gz),t.Y36(_.$L),t.Y36(_.tI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-child-part-list"]],viewQuery:function(n,i){if(1&n&&t.Gf(g.j,5),2&n){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","productionDate",3,"sort"],["sortable","productionShift",3,"sort"],["sortable","processName",3,"sort"],["sortable","machineName",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","me-2","text-success"],["src","./assets/images/new.svg","width","14",1,"me-2"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Child Part Production Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Child Part Production Entry "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(15,"Prod. Date"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(17,"Shift"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(19,"Process Name"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(21,"Machine Name"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(23,"Status"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,w,27,15,"tr",17),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,U,i.page,i.pageSize,i.collection,i.search)),t.xp6(17),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[a.sg,b.P,g.j,P.J],encapsulation:2})}return r})();var l=c(60095),A=c(3959),J=c(21631),Q=c(22096),E=c(16857),O=c(37285),N=c(50363),L=c(95346),G=c(59103);function Y(r,p){if(1&r&&(t.TgZ(0,"option",46),t._uU(1),t.qZA()),2&r){const e=p.$implicit;t.Q6J("value",e.parameterName),t.xp6(1),t.hij(" ",e.parameterLabel," ")}}function Z(r,p){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.orderRef)}}const y=function(){return{standalone:!0}};function K(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"input",55),t.NdJ("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.orderRef=i)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.orderRef)("ngModelOptions",t.DdM(2,y))}}function tt(r,p){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.jobCard)}}function j(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"input",55),t.NdJ("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.jobCard=i)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.jobCard)("ngModelOptions",t.DdM(2,y))}}function R(r,p){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.batchNumber)}}function k(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"input",55),t.NdJ("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.batchNumber=i)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.batchNumber)("ngModelOptions",t.DdM(2,y))}}function H(r,p){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.batchQty)}}function B(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"input",56),t.NdJ("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.batchQty=i)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.batchQty)("ngModelOptions",t.DdM(2,y))}}function $(r,p){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.outputQty)}}function x(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"input",57),t.NdJ("input",function(){t.CHM(e);const i=t.oxw(),o=i.$implicit,s=i.index,C=t.oxw();return t.KtG(C.changeOutPutQty(o,s))})("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.outputQty=i)})("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.setOutPutQty(i,o))}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.outputQty)("ngModelOptions",t.DdM(2,y))}}function S(r,p){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.rejectedQty)}}function z(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"input",57),t.NdJ("input",function(){t.CHM(e);const i=t.oxw(),o=i.$implicit,s=i.index,C=t.oxw();return t.KtG(C.changeRejQty(o,s))})("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.rejectedQty=i)})("ngModelChange",function(i){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw();return t.KtG(s.setRejQty(i,o))}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.rejectedQty)("ngModelOptions",t.DdM(2,y))}}const u=function(){return["view","approve","cancel"]};function V(r,p){if(1&r&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",47,48)(5,"span",49),t._uU(6),t.qZA()(),t.TgZ(7,"td",47,50)(9,"span",49),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"div",51),t.YNc(13,Z,2,1,"span",45),t.YNc(14,K,1,3,"input",52),t.qZA()(),t.TgZ(15,"td")(16,"div",51),t.YNc(17,tt,2,1,"span",45),t.YNc(18,j,1,3,"input",52),t.qZA()(),t.TgZ(19,"td")(20,"div",51),t.YNc(21,R,2,1,"span",45),t.YNc(22,k,1,3,"input",52),t.qZA()(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"UOMUnitsMaster"),t.qZA(),t.TgZ(26,"td")(27,"div",51),t.YNc(28,H,2,1,"span",45),t.YNc(29,B,1,3,"input",53),t.qZA()(),t.TgZ(30,"td")(31,"div",51),t.YNc(32,$,2,1,"span",45),t.YNc(33,x,1,3,"input",54),t.qZA()(),t.TgZ(34,"td")(35,"div",51),t.YNc(36,S,2,1,"span",45),t.YNc(37,z,1,3,"input",54),t.qZA()()()),2&r){const e=p.$implicit,n=t.MAs(4),i=t.MAs(8),o=t.oxw();t.xp6(2),t.Oqu(e.itemCode),t.xp6(1),t.Udp("width",n.clientWidth),t.xp6(2),t.Q6J("positionTarget",n)("ngbTooltip",e.itemName),t.xp6(1),t.hij(" ",null==e?null:e.itemName," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.itemDescription),t.xp6(1),t.hij(" ",null==e?null:e.itemDescription," "),t.xp6(3),t.Q6J("ngIf",t.DdM(26,u).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(27,u).includes(o.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(28,u).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(29,u).includes(o.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(30,u).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(31,u).includes(o.action)),t.xp6(2),t.Oqu(t.lcZ(25,24,e.UOM)),t.xp6(4),t.Q6J("ngIf",t.DdM(32,u).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(33,u).includes(o.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(34,u).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(35,u).includes(o.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(36,u).includes(o.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(37,u).includes(o.action))}}function M(r,p){if(1&r&&(t.TgZ(0,"div",58)(1,"div",59)(2,"div",60)(3,"button",61),t._uU(4,"Remarks"),t.qZA()(),t._UZ(5,"input",62),t.qZA()()),2&r){const e=t.oxw();t.Q6J("ngClass","create"===e.action?"col-8":"col-6")}}function F(r,p){if(1&r&&(t.TgZ(0,"div",58)(1,"div",59)(2,"div",60)(3,"button",61),t._uU(4,"Remarks"),t.qZA()(),t._UZ(5,"input",62),t.qZA()()),2&r){const e=t.oxw();t.Q6J("ngClass","edit"===e.action?"col-8":"col")}}function X(r,p){1&r&&(t.TgZ(0,"div",63)(1,"div",64)(2,"button",61),t._uU(3,"Cancel Remarks"),t.qZA(),t._UZ(4,"input",65),t.qZA()())}function W(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"div",66)(1,"button",67),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",68),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",69),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.preview())}),t._uU(6,"Preview"),t.qZA(),t.TgZ(7,"button",70),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(8," Save "),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(3),t.Q6J("disabled",!e.isESCPreview),t.xp6(4),t.Q6J("disabled",!e.isPreview)}}function d(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"div",71)(1,"button",72),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Save"),t.qZA()()}}function et(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"div",71)(1,"button",72),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Cancel"),t.qZA()()}}function it(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"div",73)(1,"button",72),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(2,"Approve"),t.qZA()()}}function nt(r,p){if(1&r){const e=t.EpF();t.TgZ(0,"div")(1,"button",72),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.navigateTo("/default/production/transactions/child_part_production/child_part/list",{},""))}),t._uU(2," Back "),t.qZA()()}}const ot=function(r,p,e,n){return{page:r,pageSize:p,collection:e,search:n,excelDisplay:"none"}},rt=function(){return["create"]},at=function(){return["view"]};let st=(()=>{class r{constructor(e,n,i,o,s,C,I){this.childPartService=e,this.router=n,this.activatedRoute=i,this.spinner=o,this.toastService=s,this.validationService=C,this.utilityService=I,this.isPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.ESCPreviewArr=[],this.machineName=[],this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",cancel:"Cancelled"},this.masterData={autoIncrementNo:"",productionShiftOptions:[],mapProcessMachineListOptions:[],childItemListOptions:[]},this.form=new l.nJ({_id:new l.p4(null),childPartCode:new l.p4(null),processName:new l.p4(null,[l.kI.required]),process:new l.p4(null),processCode:new l.p4(null),machineName:new l.p4(null,[l.kI.required]),machine:new l.p4(null),machineCode:new l.p4(null),productionDate:new l.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[l.kI.required]),productionShift:new l.p4(null,[l.kI.required]),operatingStaff:new l.p4(null),status:new l.p4("Awaiting Approval"),childPartProductionDetails:new l.p4([]),remarks:new l.p4(null),cancelRemarks:new l.p4(null)})}ngOnInit(){this.getInitialData()}trackByFn(e,n){return n?._id}reset(){this.form.reset(),this.machineName=[],this.masterData.childItemListOptions=[],this.collection=this.masterData?.childItemListOptions.length,this.isPreview=!1,this.isESCPreview=!1,this.getInitialData()}submit(){if(this.submitted=!0,"cancel"==this.action&&!this.form.controls.cancelRemarks.value)return void this.toastService.warning("Cancel Remarks is Required");if(this.form.enable(),this.validationService.checkErrors(this.form,A.Gu))return;let e=this.form.value;e.childPartProductionDetails=this.masterData?.childItemListOptions,e._id?this.update(e):(delete e._id,this.create(e))}navigateTo(e,n,i){this.router.navigate([e])}create(e){this.spinner.show(),this.childPartService.create(e).subscribe(n=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(n.message),this.router.navigate(["/default/production/transactions/child_part_production/child_part/list"])})}update(e){this.spinner.show(),this.childPartService.update(e._id,e).subscribe(n=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(n.message),this.router.navigate(["/default/production/transactions/child_part_production/child_part/list"])})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":default:break;case"PAGE":this.page=e.value}}getInitialData(){this.spinner.show(),this.childPartService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.childPartCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.productionDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue("Awaiting Approval"),this.collection=this.masterData?.childItemListOptions.length,this.activatedRoute.queryParams.pipe((0,J.z)(n=>(this.action=n.action,this.utilityService.accessDenied(this.action),n.id?this.childPartService.getById(n.id):(0,Q.of)({})))).subscribe(n=>{this.spinner.hide(),0!=Object.keys(n).length&&(this.masterData.childItemListOptions=n.childPartProductionDetails,this.collection=this.masterData?.childItemListOptions.length,n.productionDate&&(n.productionDate=this.utilityService.getFormatDate(n?.productionDate,"YYYY-MM-DD")),n.status=this.statusArr[this.action],this.form.patchValue(n),"create"!=this.action&&(this.form.disable(),"edit"==this.action&&this.form.controls.remarks.enable(),"cancel"==this.action&&this.form.controls.cancelRemarks.enable()))})})}changeRejQty(e,n){let i=this.masterData?.childItemListOptions.map(o=>o.itemCode).indexOf(e?.itemCode);e.rejectedQty>e.batchQty&&(this.masterData.childItemListOptions[i].rejectedQty=0),this.masterData.childItemListOptions[i].outputQty=e.batchQty-e.rejectedQty}changeOutPutQty(e,n){let i=this.masterData?.childItemListOptions.map(o=>o.itemCode).indexOf(e?.itemCode);e.outputQty>e.batchQty&&(this.masterData.childItemListOptions[i].outputQty=0),this.masterData.childItemListOptions[i].rejectedQty=e.batchQty-e.outputQty}setRejQty(e,n){let i=this.masterData?.childItemListOptions.map(o=>o.itemCode).indexOf(n?.itemCode);this.masterData.childItemListOptions[i].rejectedQty=Math.abs(e)}setOutPutQty(e,n){let i=this.masterData?.childItemListOptions.map(o=>o.itemCode).indexOf(n?.itemCode);this.masterData.childItemListOptions[i].outputQty=Math.abs(e)}setMachineNames(e){this.machineName=[],this.form.controls.machineName.setValue(null),this.form.controls.process.setValue(e?.process),this.form.controls.processCode.setValue(e?.processCode),this.machineName=e?.machineDetails}setMachineId(e){this.form.controls.machine.setValue(e?.machine),this.form.controls.machineCode.setValue(e?.machineCode)}preview(){this.search="",this.ESCPreviewArr=this.masterData?.childItemListOptions,this.masterData.childItemListOptions=this.masterData?.childItemListOptions.filter(e=>e.batchQty>0),this.masterData?.childItemListOptions.length>0?(this.isPreview=!0,this.isESCPreview=!0):(this.toastService.warning("At least One Row is Required"),this.isPreview=!1,this.isESCPreview=!0),this.collection=this.masterData?.childItemListOptions.length}ESCPreview(){this.search="",this.isPreview=!1,this.masterData.childItemListOptions=this.ESCPreviewArr,this.collection=this.masterData?.childItemListOptions.length}onSort({column:e,direction:n}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.masterData.childItemListOptions=""===n||""===e?this.masterData?.childItemListOptions:[...this.masterData?.childItemListOptions].sort((i,o)=>{let s="string"==typeof i[e]?i[e].toLowerCase():i[e],C="string"==typeof o[e]?o[e].toLowerCase():o[e];const I=s<C?-1:s>C?1:0;return"asc"===n?I:-I})}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(f.Xw),t.Y36(h.F0),t.Y36(h.gz),t.Y36(_.V),t.Y36(_.kl),t.Y36(E.R),t.Y36(_.tI))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-child-part-form"]],viewQuery:function(n,i){if(1&n&&t.Gf(g.j,5),2&n){let o;t.iGM(o=t.CRH())&&(i.headers=o)}},decls:87,vars:34,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-5"],[1,"col-6"],[1,"form-label","mb-2"],[1,"text-danger"],["bindLabel","processName","bindValue","processName","formControlName","processName",3,"items","clearable","change"],["bindLabel","machineName","bindValue","machineName","formControlName","machineName",3,"items","clearable","change"],[1,"col-7"],[1,"col-4"],["type","date","formControlName","productionDate",1,"form-control"],["formControlName","productionShift",1,"form-select"],["selected","","disabled","","value","null"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","operatingStaff",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","20rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","conversionOfUnits",3,"sort"],["sortable","jobCard",3,"sort"],["sortable","batchNumber",3,"sort"],["sortable","UOM",3,"sort"],["sortable","batchQty",3,"sort"],["sortable","outputQty",3,"sort"],["sortable","rejectedQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mb-0"],[1,"col"],[3,"ngClass",4,"ngIf"],["class","col pe-5",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","text-end",4,"ngIf"],["class","col-5 text-end",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","form-control form-control-sm","type","text",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["class","form-control form-control-sm","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["class","form-control form-control-sm","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],["type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","input","ngModelChange"],[3,"ngClass"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["type","text","formControlName","remarks",1,"form-control"],[1,"col","pe-5"],[1,"d-flex","align-items-center","text-nowrap"],["type","text","formControlName","cancelRemarks",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-5","text-end"]],template:function(n,i){1&n&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8)(12,"label",9),t._uU(13," Process Name "),t.TgZ(14,"span",10),t._uU(15,"*"),t.qZA()(),t.TgZ(16,"ng-select",11),t.NdJ("change",function(s){return i.setMachineNames(s)}),t.qZA()(),t.TgZ(17,"div",8)(18,"label",9),t._uU(19," Machine Name "),t.TgZ(20,"span",10),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"ng-select",12),t.NdJ("change",function(s){return i.setMachineId(s)}),t.qZA()()()(),t.TgZ(23,"div",13)(24,"div",6)(25,"div",14)(26,"label",9),t._uU(27,"Production Date "),t.TgZ(28,"span",10),t._uU(29,"*"),t.qZA()(),t._UZ(30,"input",15),t.qZA(),t.TgZ(31,"div",14)(32,"label",9),t._uU(33,"Production Shift "),t.TgZ(34,"span",10),t._uU(35,"*"),t.qZA()(),t.TgZ(36,"select",16)(37,"option",17),t._uU(38,"Select Production Shift"),t.qZA(),t.YNc(39,Y,2,2,"option",18),t.qZA()(),t.TgZ(40,"div",14)(41,"label",9),t._uU(42," Operating Staff"),t.qZA(),t._UZ(43,"input",19),t.qZA()()()()(),t._UZ(44,"hr",20),t.TgZ(45,"app-setting-header",21),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA(),t.TgZ(46,"div",22)(47,"table",23)(48,"thead",24)(49,"tr",25)(50,"th",26),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(51,"Item Code"),t.qZA(),t.TgZ(52,"th",27),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(53,"Item Name"),t.qZA(),t.TgZ(54,"th",28),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(55,"Item Description"),t.qZA(),t.TgZ(56,"th",29),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(57,"Order Ref."),t.qZA(),t.TgZ(58,"th",30),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(59,"Job Card #"),t.qZA(),t.TgZ(60,"th",31),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(61,"Batch No."),t.qZA(),t.TgZ(62,"th",32),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(63,"UoM"),t.qZA(),t.TgZ(64,"th",33),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(65,"Batch Qty"),t.qZA(),t.TgZ(66,"th",34),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(67,"O/P Qty"),t.qZA(),t.TgZ(68,"th",35),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(69,"Rej. Qty"),t.qZA()()(),t.TgZ(70,"tbody"),t.YNc(71,V,38,38,"tr",36),t.ALo(72,"slice"),t.ALo(73,"searchFi1ter"),t.qZA()()(),t._UZ(74,"hr",20),t.TgZ(75,"div",37)(76,"div",38)(77,"div",6),t.YNc(78,M,6,1,"div",39),t.YNc(79,F,6,1,"div",39),t.YNc(80,X,5,0,"div",40),t.qZA()(),t.TgZ(81,"div",41),t.YNc(82,W,9,2,"div",42),t.YNc(83,d,3,0,"div",43),t.YNc(84,et,3,0,"div",43),t.YNc(85,it,3,0,"div",44),t.YNc(86,nt,3,0,"div",45),t.qZA()()()()),2&n&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("Child Part Production (",t.lcZ(6,18,i.action),")"),t.xp6(11),t.Q6J("items",i.masterData.mapProcessMachineListOptions)("clearable",!1),t.xp6(6),t.Q6J("items",i.machineName)("clearable",!1),t.xp6(17),t.Q6J("ngForOf",null==i.masterData?null:i.masterData.productionShiftOptions),t.xp6(6),t.Q6J("data",t.l5B(27,ot,i.page,i.pageSize,i.collection,i.search)),t.xp6(26),t.Q6J("ngForOf",t.Dn7(72,20,t.xi3(73,24,i.masterData.childItemListOptions,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn),t.xp6(7),t.Q6J("ngIf","edit"!=i.action),t.xp6(1),t.Q6J("ngIf","edit"==i.action),t.xp6(1),t.Q6J("ngIf","cancel"==i.action),t.xp6(2),t.Q6J("ngIf",t.DdM(32,rt).includes(i.action)),t.xp6(1),t.Q6J("ngIf","edit"==i.action),t.xp6(1),t.Q6J("ngIf","cancel"==i.action),t.xp6(1),t.Q6J("ngIf","approve"==i.action),t.xp6(1),t.Q6J("ngIf",t.DdM(33,at).includes(i.action)))},dependencies:[a.mk,a.sg,a.O5,b.P,O._L,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.sg,l.u,l.On,N.w9,g.j,a.OU,a.rS,L.G,G.S],encapsulation:2})}return r})();var ct=c(56208);const dt=[{path:"list",component:q},{path:"form",component:st,resolve:{accessScreen:c(65876).x}}];let pt=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[a.ez,h.Bz.forChild(dt),ct.m]})}return r})()},13107:(D,m,c)=>{c.d(m,{t:()=>a});const a={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,m,c)=>{c.d(m,{J:()=>a});const a=({data:h,headers:g,widths:v,title:T})=>({tableData:{widths:v,headerRows:1,body:[g.map(f=>({text:f.header,style:"header"})),...h.map(f=>g.map(b=>({style:"subheader",text:f[b.key]})))]},title:T})},34183:(D,m,c)=>{c.d(m,{yz:()=>K,oO:()=>_,rv:()=>t,cY:()=>W,ho:()=>X,R6:()=>B,M5:()=>H,MO:()=>u,GF:()=>z,YJ:()=>U,kQ:()=>w,Y3:()=>Q,Wb:()=>J,i4:()=>G,mU:()=>L});var a=c(13107),h=c(28402);let g=["*","*","*","*","*","*","*","*"],v="Goods Requisition",T=[{header:"GR No.",key:"GRNumber",...a.t},{header:"GR Date",key:"GRDateS",...a.t},{header:"Location (Store)",key:"deliveryLocation",...a.t},{header:"Department",key:"department",...a.t},{header:"Remarks/Order Reference",key:"salesOrderSKUReference",...a.t},{header:"Status",key:"GRStatus",...a.t}];const t=d=>({title:v,csvData:d,headers:T}),_=d=>(0,h.J)({data:d,headers:T,widths:g,title:v});let f=["*","*","*","*","*","*","*","*"],b="Child Part Production",P=[{header:"Process Name",key:"processName",...a.t},{header:"Machine Name",key:"machineName",...a.t},{header:"Prod. Date",key:"productionDate",...a.t},{header:"Shift",key:"productionShift",...a.t},{header:"Operating Staff",key:"operatingStaff",...a.t},{header:"Remarks",key:"remarks",...a.t},{header:"Status",key:"status",...a.t}];const w=d=>({title:b,csvData:d,headers:P}),U=d=>(0,h.J)({data:d,headers:P,widths:f,title:b});let q=["*","*","*","*","*","*","*","*"],l="Gr. Child Part Production",A=[{header:"Process Name",key:"processName",...a.t},{header:"Machine Name",key:"machineName",...a.t},{header:"Prod. Date",key:"productionDate",...a.t},{header:"Shift",key:"productionShift",...a.t},{header:"Operating Staff",key:"operatingStaff",...a.t},{header:"Remarks",key:"remarks",...a.t},{header:"Status",key:"status",...a.t}];const J=d=>({title:l,csvData:d,headers:A}),Q=d=>(0,h.J)({data:d,headers:A,widths:q,title:l});let E=["*","*","*","*","*","*","*","*"],O="SKU Production",N=[{header:"Process Name",key:"processName",...a.t},{header:"Machine Name",key:"machineName",...a.t},{header:"Prod. Date",key:"productionDate",...a.t},{header:"Shift",key:"productionShift",...a.t},{header:"Operating Staff",key:"operatingStaff",...a.t},{header:"Remarks",key:"remarks",...a.t},{header:"Status",key:"status",...a.t}];const L=d=>({title:O,csvData:d,headers:N}),G=d=>(0,h.J)({data:d,headers:N,widths:E,title:O});let y=[{header:"#",key:"GRLineNumber",...a.t},{header:"Item Code",key:"itemCode",...a.t},{header:"Item Name",key:"itemName",...a.t},{header:"Item Description",key:"itemDescription",...a.t},{header:"Conversion Of Units",key:"conversionOfUnits",...a.t},{header:"UoM",key:"primaryUnit",...a.t},{header:"IR Qty.",key:"closedIRQty",...a.t},{header:"GR Qty.",key:"GRQty",...a.t}];const K=d=>({title:"Goods Requisition",csvData:d,headers:y});let j=["*","*","*","*","*","*","*","*"],R="Ink Mixing",k=[{header:"JC No.",key:"jobCardNo",...a.t},{header:"F20 Ink Code",key:"itemCode",...a.t},{header:"F20 Ink Name",key:"itemName",...a.t},{header:"F20 Ink Description",key:"itemDescription",...a.t},{header:"UoM",key:"UOM",...a.t},{header:"Batch Qty.",key:"batchQty",...a.t},{header:"Batch Date",key:"batchDate",...a.t},{header:"Log Book Ref",key:"logBookRef",...a.t}];const H=d=>({title:R,csvData:d,headers:k}),B=d=>(0,h.J)({data:d,headers:k,widths:j,title:R});let $=["*","*","*","*","*","*","*"],x="Job Card Entry",S=[{header:"Job Card No",key:"jobCardNo",...a.t},{header:"SKU No",key:"SKUNo",...a.t},{header:"SKU Name",key:"SKUName",...a.t},{header:"SKU Description",key:"SKUDescription",...a.t},{header:"UoM",key:"UOM",...a.t},{header:"Batch I/P Qty.",key:"totalBatchQuantity",...a.t},{header:"Batch O/P Qty.",key:"batchOutputQty",...a.t},{header:"Batch Number",key:"batchNumber",...a.t},{header:"Status",key:"status",...a.t}];const z=d=>({title:x,csvData:d,headers:S}),u=d=>(0,h.J)({data:d,headers:S,widths:$,title:x});let V=["*","*","*","*","*","*"],M="Goods Transfer Request (Intra) Report",F=[{header:"GT Req #",key:"GTRequestNo",...a.t},{header:"GT Request Dt.",key:"GTRequestDate",...a.t},{header:"Location",key:"location",...a.t},{header:"From Department",key:"fromDepartment",...a.t},{header:"To Department",key:"toDepartment",...a.t},{header:"Status",key:"status",...a.t}];const X=d=>({title:M,csvData:d,headers:F}),W=d=>(0,h.J)({data:d,headers:F,widths:V,title:M})},68922:(D,m,c)=>{c.d(m,{T:()=>a});const a=[{message:"Location is Required",key:"deliveryLocation"}]},3959:(D,m,c)=>{c.d(m,{Gu:()=>v,kq:()=>g,JH:()=>h,Nh:()=>T,m5:()=>f,sg:()=>t}),c(68922);const h=[{message:"SKU No. is Required",key:"SKUId"},{message:"FGIN Quantity is Required",key:"FGINQuantity"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Manufacturing Date is Required",key:"manufacturingDate"},{message:"Batch No. is Required",key:"batchNo"}],g=[{message:"SKU No. is Required",key:"SKU"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Correction Category is Required",key:"correctionCategory"},{message:"Source Batch (From) is Required",key:"sourceBatch"}],v=[{message:"Process Name is Required",key:"processName"},{message:"Machine Name is Required",key:"machineName"},{message:"Production Date is Required",key:"productionDate"},{message:"Production Shift is Required",key:"productionShift"}],T=[{message:"Item Code is Required",key:"itemCode"},{message:"Item Name is Required",key:"itemName"},{message:"Item Description is Required",key:"itemDescription"},{message:"UoM is Required",key:"UoM"}],t=[{message:"Job Card No. is Required",key:"jobCard"},{message:"Batch Output Qty is Required",key:"batchOutputQty"}],f=[{message:"Job Card No. is Required",key:"jobCard"}]}}]);