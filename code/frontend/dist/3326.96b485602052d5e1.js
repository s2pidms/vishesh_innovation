"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3326],{13326:(D,m,c)=>{c.r(m),c.d(m,{GrChildPartModule:()=>ut});var s=c(96814),u=c(1076),g=c(43818),v=c(25116),T=c(34183),t=c(65879),_=c(2742),C=c(57656),P=c(88059),A=c(53421);function U(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",18),t._UZ(13,"button",19),t.TgZ(14,"div",20)(15,"a",21),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"view"))}),t._UZ(16,"i",22),t._uU(17," View "),t.qZA(),t.TgZ(18,"a",21),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"edit"))}),t._UZ(19,"i",23),t._uU(20," Edit "),t.qZA(),t.TgZ(21,"a",21),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"approve"))}),t._UZ(22,"i",24),t._uU(23," Approve "),t.qZA(),t.TgZ(24,"a",21),t.NdJ("click",function(){const n=t.CHM(r).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",n,"cancel"))}),t._UZ(25,"img",25),t._uU(26," Cancel "),t.qZA()()()()()}if(2&o){const r=l.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==r?null:r.productionDate),t.xp6(2),t.Oqu(null==r?null:r.productionShift),t.xp6(2),t.Oqu(null==r?null:r.processName),t.xp6(2),t.Oqu(null==r?null:r.machineName),t.xp6(2),t.Oqu(null==r?null:r.status),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Approved"===(null==r?null:r.status)||"Cancelled"===(null==r?null:r.status)),t.Q6J("accessType",i.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"===(null==r?null:r.status)||"edit"===(null==r?null:r.status)||"Cancelled"===(null==r?null:r.status)),t.Q6J("accessType",i.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable","Approved"===(null==r?null:r.status)||"Cancelled"===(null==r?null:r.status)),t.Q6J("accessType",i.rolePermissionActions.approveAction)}}const w=function(o,l,r,i){return{page:o,pageSize:l,collection:r,search:i,type:"list"}};let q=(()=>{var o;class l{constructor(i,e,n,a,f,b){this.exportExcelService=i,this.groupChildPartService=e,this.spinner=n,this.activatedRoute=a,this.exportToPDFService=f,this.utilityService=b,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(i,e,n){this.utilityService.navigateToForm({path:i,status:e.status,action:n,id:e._id,activatedRoute:this.activatedRoute})}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=i.value,this.getAll()}}trackByFn(i,e){return e?._id}getAll(i=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:i};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.groupChildPartService.getAll(n).subscribe(a=>{"EXCEL"==e?this.excelDownload(a.rows):"PDF"==e?this.pdfDownload(a.rows):(this.tableData=a.rows,this.collection=a.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(i){let e=(0,T.Y3)(i);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(i){this.exportExcelService.exportExcel((0,T.Wb)(i))}onSort({column:i,direction:e}){this.headers.forEach(n=>{n.sortable!==i&&(n.direction="")}),this.column=i,this.direction="asc"==e?1:-1,this.getAll()}}return(o=l).\u0275fac=function(i){return new(i||o)(t.Y36(_.Ol),t.Y36(C.K0),t.Y36(_.V),t.Y36(u.gz),t.Y36(_.$L),t.Y36(_.tI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-gr-child-part-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(g.j,5),2&i){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:28,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","productionDate",3,"sort"],["sortable","productionShift",3,"sort"],["sortable","processName",3,"sort"],["sortable","machineName",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","me-2","text-success"],["src","./assets/images/new.svg","width","14",1,"me-2"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Gr. Child Part Production Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return e.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Gr. Child Part Production Entry "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(a){return e.eventHeader(a)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(15,"Prod. Date"),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(17,"Shift"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(19,"Process Name"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(21,"Machine Name"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(23,"Status"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Action"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,U,27,15,"tr",17),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,w,e.page,e.pageSize,e.collection,e.search)),t.xp6(17),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[s.sg,P.P,g.j,A.J],encapsulation:2}),l})();var d=c(60095),O=c(3959),J=c(21631),Q=c(22096),E=c(16857),G=c(37285),N=c(50363),L=c(95346),Y=c(59103);function K(o,l){if(1&o&&(t.TgZ(0,"option",46),t._uU(1),t.qZA()),2&o){const r=l.$implicit;t.Q6J("value",r.parameterName),t.xp6(1),t.hij(" ",r.parameterLabel," ")}}function Z(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.Oqu(r.orderRef)}}const y=function(){return{standalone:!0}};function j(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"input",55),t.NdJ("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit;return t.KtG(n.orderRef=e)}),t.qZA()}if(2&o){const r=t.oxw().$implicit;t.Q6J("ngModel",r.orderRef)("ngModelOptions",t.DdM(2,y))}}function et(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.Oqu(r.jobCard)}}function H(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"input",55),t.NdJ("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit;return t.KtG(n.jobCard=e)}),t.qZA()}if(2&o){const r=t.oxw().$implicit;t.Q6J("ngModel",r.jobCard)("ngModelOptions",t.DdM(2,y))}}function R(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.Oqu(r.batchNumber)}}function k(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"input",55),t.NdJ("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit;return t.KtG(n.batchNumber=e)}),t.qZA()}if(2&o){const r=t.oxw().$implicit;t.Q6J("ngModel",r.batchNumber)("ngModelOptions",t.DdM(2,y))}}function B(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.Oqu(r.batchQty)}}function $(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"input",56),t.NdJ("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit;return t.KtG(n.batchQty=e)}),t.qZA()}if(2&o){const r=t.oxw().$implicit;t.Q6J("ngModel",r.batchQty)("ngModelOptions",t.DdM(2,y))}}function z(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.Oqu(r.outputQty)}}function x(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"input",57),t.NdJ("input",function(){t.CHM(r);const e=t.oxw(),n=e.$implicit,a=e.index,f=t.oxw();return t.KtG(f.changeOutPutQty(n,a))})("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit;return t.KtG(n.outputQty=e)})("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit,a=t.oxw();return t.KtG(a.setOutPutQty(e,n))}),t.qZA()}if(2&o){const r=t.oxw().$implicit;t.Q6J("ngModel",r.outputQty)("ngModelOptions",t.DdM(2,y))}}function S(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const r=t.oxw().$implicit;t.xp6(1),t.Oqu(r.rejectedQty)}}function V(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"input",57),t.NdJ("input",function(){t.CHM(r);const e=t.oxw(),n=e.$implicit,a=e.index,f=t.oxw();return t.KtG(f.changeRejQty(n,a))})("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit;return t.KtG(n.rejectedQty=e)})("ngModelChange",function(e){t.CHM(r);const n=t.oxw().$implicit,a=t.oxw();return t.KtG(a.setRejQty(e,n))}),t.qZA()}if(2&o){const r=t.oxw().$implicit;t.Q6J("ngModel",r.rejectedQty)("ngModelOptions",t.DdM(2,y))}}const h=function(){return["view","approve","cancel"]};function X(o,l){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",47,48)(5,"span",49),t._uU(6),t.qZA()(),t.TgZ(7,"td",47,50)(9,"span",49),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"div",51),t.YNc(13,Z,2,1,"span",45),t.YNc(14,j,1,3,"input",52),t.qZA()(),t.TgZ(15,"td")(16,"div",51),t.YNc(17,et,2,1,"span",45),t.YNc(18,H,1,3,"input",52),t.qZA()(),t.TgZ(19,"td")(20,"div",51),t.YNc(21,R,2,1,"span",45),t.YNc(22,k,1,3,"input",52),t.qZA()(),t.TgZ(23,"td"),t._uU(24),t.ALo(25,"UOMUnitsMaster"),t.qZA(),t.TgZ(26,"td")(27,"div",51),t.YNc(28,B,2,1,"span",45),t.YNc(29,$,1,3,"input",53),t.qZA()(),t.TgZ(30,"td")(31,"div",51),t.YNc(32,z,2,1,"span",45),t.YNc(33,x,1,3,"input",54),t.qZA()(),t.TgZ(34,"td")(35,"div",51),t.YNc(36,S,2,1,"span",45),t.YNc(37,V,1,3,"input",54),t.qZA()()()),2&o){const r=l.$implicit,i=t.MAs(4),e=t.MAs(8),n=t.oxw();t.xp6(2),t.Oqu(r.itemCode),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",r.itemName),t.xp6(1),t.hij(" ",null==r?null:r.itemName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",r.itemDescription),t.xp6(1),t.hij(" ",null==r?null:r.itemDescription," "),t.xp6(3),t.Q6J("ngIf",t.DdM(26,h).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(27,h).includes(n.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(28,h).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(29,h).includes(n.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(30,h).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(31,h).includes(n.action)),t.xp6(2),t.Oqu(t.lcZ(25,24,r.UOM)),t.xp6(4),t.Q6J("ngIf",t.DdM(32,h).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(33,h).includes(n.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(34,h).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(35,h).includes(n.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(36,h).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(37,h).includes(n.action))}}function M(o,l){if(1&o&&(t.TgZ(0,"div",58)(1,"div",59)(2,"div",60)(3,"button",61),t._uU(4,"Remarks"),t.qZA()(),t._UZ(5,"input",62),t.qZA()()),2&o){const r=t.oxw();t.Q6J("ngClass","create"===r.action?"col-8":"col-6")}}function F(o,l){if(1&o&&(t.TgZ(0,"div",58)(1,"div",59)(2,"div",60)(3,"button",61),t._uU(4,"Remarks"),t.qZA()(),t._UZ(5,"input",62),t.qZA()()),2&o){const r=t.oxw();t.Q6J("ngClass","edit"===r.action?"col-8":"col")}}function W(o,l){1&o&&(t.TgZ(0,"div",63)(1,"div",64)(2,"button",61),t._uU(3,"Cancel Remarks"),t.qZA(),t._UZ(4,"input",65),t.qZA()())}function tt(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"div",66)(1,"button",67),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",68),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",69),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.preview())}),t._uU(6,"Preview"),t.qZA(),t.TgZ(7,"button",70),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.submit())}),t._uU(8," Save "),t.qZA()()}if(2&o){const r=t.oxw();t.xp6(3),t.Q6J("disabled",!r.isESCPreview),t.xp6(4),t.Q6J("disabled",!r.isPreview)}}function p(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"div",71)(1,"button",72),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Save"),t.qZA()()}}function it(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"div",71)(1,"button",72),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Cancel"),t.qZA()()}}function rt(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"div",73)(1,"button",72),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Approve"),t.qZA()()}}function nt(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"div")(1,"button",72),t.NdJ("click",function(){t.CHM(r);const e=t.oxw();return t.KtG(e.navigateTo("/default/production/transactions/child_part_production/gr_child_part/list",{},""))}),t._uU(2," Back "),t.qZA()()}}const ot=function(o,l,r,i){return{page:o,pageSize:l,collection:r,search:i,excelDisplay:"none"}},at=function(){return["create"]},st=function(){return["view"]};let lt=(()=>{var o;class l{constructor(i,e,n,a,f,b,I){this.groupChildPartService=i,this.router=e,this.activatedRoute=n,this.spinner=a,this.toastService=f,this.validationService=b,this.utilityService=I,this.isPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=6,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.ESCPreviewArr=[],this.machineName=[],this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",cancel:"Cancelled"},this.masterData={autoIncrementNo:"",productionShiftOptions:[],mapProcessMachineListOptions:[],GrChildItemListOptions:[]},this.form=new d.nJ({_id:new d.p4(null),childPartCode:new d.p4(null),processName:new d.p4(null,[d.kI.required]),process:new d.p4(null),processCode:new d.p4(null),machineName:new d.p4(null,[d.kI.required]),machine:new d.p4(null),machineCode:new d.p4(null),productionDate:new d.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[d.kI.required]),productionShift:new d.p4(null,[d.kI.required]),operatingStaff:new d.p4(null),status:new d.p4("Awaiting Approval"),groupPartProductionDetails:new d.p4([]),remarks:new d.p4(null),cancelRemarks:new d.p4(null)})}ngOnInit(){this.getInitialData()}trackByFn(i,e){return e?._id}reset(){this.form.reset(),this.machineName=[],this.masterData.GrChildItemListOptions=[],this.collection=this.masterData?.GrChildItemListOptions.length,this.isPreview=!1,this.isESCPreview=!1,this.getInitialData()}submit(){if(this.submitted=!0,"cancel"==this.action&&!this.form.controls.cancelRemarks.value)return void this.toastService.warning("Cancel Remarks is Required");if(this.form.enable(),this.validationService.checkErrors(this.form,O.Gu))return;let i=this.form.value;i.groupPartProductionDetails=this.masterData?.GrChildItemListOptions,i._id?this.update(i):(delete i._id,this.create(i))}navigateTo(i,e,n){this.router.navigate([i])}create(i){this.spinner.show(),this.groupChildPartService.create(i).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.router.navigate(["/default/production/transactions/child_part_production/gr_child_part/list"])})}update(i){this.spinner.show(),this.groupChildPartService.update(i._id,i).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.router.navigate(["/default/production/transactions/child_part_production/gr_child_part/list"])})}eventHeader(i){switch(i.key){case"SEARCH":this.search=i.value;break;case"EXCEL":default:break;case"PAGE":this.page=i.value}}getInitialData(){this.spinner.show(),this.groupChildPartService.getAllMasterData({}).subscribe(i=>{this.masterData=i,this.form.controls.childPartCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.productionDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue("Awaiting Approval"),this.collection=this.masterData?.GrChildItemListOptions.length,this.activatedRoute.queryParams.pipe((0,J.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.groupChildPartService.getById(e.id):(0,Q.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(this.masterData.GrChildItemListOptions=e.groupPartProductionDetails,this.collection=this.masterData?.GrChildItemListOptions.length,e.productionDate&&(e.productionDate=this.utilityService.getFormatDate(e?.productionDate,"YYYY-MM-DD")),e.status=this.statusArr[this.action],this.form.patchValue(e),"create"!=this.action&&(this.form.disable(),"edit"==this.action&&this.form.controls.remarks.enable(),"cancel"==this.action&&this.form.controls.cancelRemarks.enable()))})})}changeRejQty(i,e){let n=this.masterData?.GrChildItemListOptions.map(a=>a.itemCode).indexOf(i?.itemCode);i.rejectedQty>i.batchQty&&(this.masterData.GrChildItemListOptions[n].rejectedQty=0),this.masterData.GrChildItemListOptions[n].outputQty=i.batchQty-i.rejectedQty}changeOutPutQty(i,e){let n=this.masterData?.GrChildItemListOptions.map(a=>a.itemCode).indexOf(i?.itemCode);i.outputQty>i.batchQty&&(this.masterData.GrChildItemListOptions[n].outputQty=0),this.masterData.GrChildItemListOptions[n].rejectedQty=i.batchQty-i.outputQty}setRejQty(i,e){let n=this.masterData?.GrChildItemListOptions.map(a=>a.itemCode).indexOf(e?.itemCode);this.masterData.GrChildItemListOptions[n].rejectedQty=Math.abs(i)}setOutPutQty(i,e){let n=this.masterData?.GrChildItemListOptions.map(a=>a.itemCode).indexOf(e?.itemCode);this.masterData.GrChildItemListOptions[n].outputQty=Math.abs(i)}setMachineNames(i){this.machineName=[],this.form.controls.machineName.setValue(null),this.form.controls.process.setValue(i?.process),this.form.controls.processCode.setValue(i?.processCode),this.machineName=i?.machineDetails}setMachineId(i){this.form.controls.machine.setValue(i?.machine),this.form.controls.machineCode.setValue(i?.machineCode)}preview(){this.search="",this.ESCPreviewArr=this.masterData?.GrChildItemListOptions,this.masterData.GrChildItemListOptions=this.masterData?.GrChildItemListOptions.filter(i=>i.batchQty>0),this.masterData?.GrChildItemListOptions.length>0?(this.isPreview=!0,this.isESCPreview=!0):(this.toastService.warning("At least One Row is Required"),this.isPreview=!1,this.isESCPreview=!0),this.collection=this.masterData?.GrChildItemListOptions.length}ESCPreview(){this.search="",this.isPreview=!1,this.masterData.GrChildItemListOptions=this.ESCPreviewArr,this.collection=this.masterData?.GrChildItemListOptions.length}onSort({column:i,direction:e}){this.headers.forEach(n=>{n.sortable!==i&&(n.direction="")}),this.masterData.GrChildItemListOptions=""===e||""===i?this.masterData?.GrChildItemListOptions:[...this.masterData?.GrChildItemListOptions].sort((n,a)=>{let f="string"==typeof n[i]?n[i].toLowerCase():n[i],b="string"==typeof a[i]?a[i].toLowerCase():a[i];const I=f<b?-1:f>b?1:0;return"asc"===e?I:-I})}}return(o=l).\u0275fac=function(i){return new(i||o)(t.Y36(C.K0),t.Y36(u.F0),t.Y36(u.gz),t.Y36(_.V),t.Y36(_.kl),t.Y36(E.R),t.Y36(_.tI))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-gr-child-part-form"]],viewQuery:function(i,e){if(1&i&&t.Gf(g.j,5),2&i){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:87,vars:34,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-5"],[1,"col-6"],[1,"form-label","mb-2"],[1,"text-danger"],["bindLabel","processName","bindValue","processName","formControlName","processName",3,"items","clearable","change"],["bindLabel","machineName","bindValue","machineName","formControlName","machineName",3,"items","clearable","change"],[1,"col-7"],[1,"col-4"],["type","date","formControlName","productionDate",1,"form-control"],["formControlName","productionShift",1,"form-select"],["selected","","disabled","","value","null"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","operatingStaff",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","20rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","conversionOfUnits",3,"sort"],["sortable","jobCard",3,"sort"],["sortable","batchNumber",3,"sort"],["sortable","UOM",3,"sort"],["sortable","batchQty",3,"sort"],["sortable","outputQty",3,"sort"],["sortable","rejectedQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mb-0"],[1,"col"],[3,"ngClass",4,"ngIf"],["class","col pe-5",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","text-end",4,"ngIf"],["class","col-5 text-end",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","form-control form-control-sm","type","text",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["class","form-control form-control-sm","type","number",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["class","form-control form-control-sm","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],["type","text",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","form-control-sm",3,"ngModel","ngModelOptions","input","ngModelChange"],[3,"ngClass"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["type","text","formControlName","remarks",1,"form-control"],[1,"col","pe-5"],[1,"d-flex","align-items-center","text-nowrap"],["type","text","formControlName","cancelRemarks",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-5","text-end"]],template:function(i,e){1&i&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8)(12,"label",9),t._uU(13," Process Name "),t.TgZ(14,"span",10),t._uU(15,"*"),t.qZA()(),t.TgZ(16,"ng-select",11),t.NdJ("change",function(a){return e.setMachineNames(a)}),t.qZA()(),t.TgZ(17,"div",8)(18,"label",9),t._uU(19," Machine Name "),t.TgZ(20,"span",10),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"ng-select",12),t.NdJ("change",function(a){return e.setMachineId(a)}),t.qZA()()()(),t.TgZ(23,"div",13)(24,"div",6)(25,"div",14)(26,"label",9),t._uU(27,"Production Date "),t.TgZ(28,"span",10),t._uU(29,"*"),t.qZA()(),t._UZ(30,"input",15),t.qZA(),t.TgZ(31,"div",14)(32,"label",9),t._uU(33,"Production Shift "),t.TgZ(34,"span",10),t._uU(35,"*"),t.qZA()(),t.TgZ(36,"select",16)(37,"option",17),t._uU(38,"Select Production Shift"),t.qZA(),t.YNc(39,K,2,2,"option",18),t.qZA()(),t.TgZ(40,"div",14)(41,"label",9),t._uU(42," Operating Staff"),t.qZA(),t._UZ(43,"input",19),t.qZA()()()()(),t._UZ(44,"hr",20),t.TgZ(45,"app-setting-header",21),t.NdJ("dataChange",function(a){return e.eventHeader(a)}),t.qZA(),t.TgZ(46,"div",22)(47,"table",23)(48,"thead",24)(49,"tr",25)(50,"th",26),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(51,"Item Code"),t.qZA(),t.TgZ(52,"th",27),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(53,"Item Name"),t.qZA(),t.TgZ(54,"th",28),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(55,"Item Description"),t.qZA(),t.TgZ(56,"th",29),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(57,"Order Ref."),t.qZA(),t.TgZ(58,"th",30),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(59,"Job Card #"),t.qZA(),t.TgZ(60,"th",31),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(61,"Batch No."),t.qZA(),t.TgZ(62,"th",32),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(63,"UoM"),t.qZA(),t.TgZ(64,"th",33),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(65,"Batch Qty"),t.qZA(),t.TgZ(66,"th",34),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(67,"O/P Qty"),t.qZA(),t.TgZ(68,"th",35),t.NdJ("sort",function(a){return e.onSort(a)}),t._uU(69,"Rej. Qty"),t.qZA()()(),t.TgZ(70,"tbody"),t.YNc(71,X,38,38,"tr",36),t.ALo(72,"slice"),t.ALo(73,"searchFi1ter"),t.qZA()()(),t._UZ(74,"hr",20),t.TgZ(75,"div",37)(76,"div",38)(77,"div",6),t.YNc(78,M,6,1,"div",39),t.YNc(79,F,6,1,"div",39),t.YNc(80,W,5,0,"div",40),t.qZA()(),t.TgZ(81,"div",41),t.YNc(82,tt,9,2,"div",42),t.YNc(83,p,3,0,"div",43),t.YNc(84,it,3,0,"div",43),t.YNc(85,rt,3,0,"div",44),t.YNc(86,nt,3,0,"div",45),t.qZA()()()()),2&i&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij("Gr. Child Part Production (",t.lcZ(6,18,e.action),")"),t.xp6(11),t.Q6J("items",e.masterData.mapProcessMachineListOptions)("clearable",!1),t.xp6(6),t.Q6J("items",e.machineName)("clearable",!1),t.xp6(17),t.Q6J("ngForOf",null==e.masterData?null:e.masterData.productionShiftOptions),t.xp6(6),t.Q6J("data",t.l5B(27,ot,e.page,e.pageSize,e.collection,e.search)),t.xp6(26),t.Q6J("ngForOf",t.Dn7(72,20,t.xi3(73,24,e.masterData.GrChildItemListOptions,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(7),t.Q6J("ngIf","edit"!=e.action),t.xp6(1),t.Q6J("ngIf","edit"==e.action),t.xp6(1),t.Q6J("ngIf","cancel"==e.action),t.xp6(2),t.Q6J("ngIf",t.DdM(32,at).includes(e.action)),t.xp6(1),t.Q6J("ngIf","edit"==e.action),t.xp6(1),t.Q6J("ngIf","cancel"==e.action),t.xp6(1),t.Q6J("ngIf","approve"==e.action),t.xp6(1),t.Q6J("ngIf",t.DdM(33,st).includes(e.action)))},dependencies:[s.mk,s.sg,s.O5,P.P,G._L,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.sg,d.u,d.On,N.w9,g.j,s.OU,s.rS,L.G,Y.S],encapsulation:2}),l})();var ct=c(56208);const pt=[{path:"list",component:q},{path:"form",component:lt,resolve:{accessScreen:c(65876).x}}];let ut=(()=>{var o;class l{}return(o=l).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,u.Bz.forChild(pt),ct.m]}),l})()},13107:(D,m,c)=>{c.d(m,{t:()=>s});const s={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(D,m,c)=>{c.d(m,{J:()=>s});const s=({data:u,headers:g,widths:v,title:T})=>({tableData:{widths:v,headerRows:1,body:[g.map(C=>({text:C.header,style:"header"})),...u.map(C=>g.map(P=>({style:"subheader",text:C[P.key]})))]},title:T})},34183:(D,m,c)=>{c.d(m,{yz:()=>j,oO:()=>_,rv:()=>t,cY:()=>tt,ho:()=>W,R6:()=>$,M5:()=>B,MO:()=>h,GF:()=>V,YJ:()=>w,kQ:()=>U,Y3:()=>Q,Wb:()=>J,i4:()=>Y,mU:()=>L});var s=c(13107),u=c(28402);let g=["*","*","*","*","*","*","*","*"],v="Goods Requisition",T=[{header:"GR No.",key:"GRNumber",...s.t},{header:"GR Date",key:"GRDateS",...s.t},{header:"Location (Store)",key:"deliveryLocation",...s.t},{header:"Department",key:"department",...s.t},{header:"Remarks/Order Reference",key:"salesOrderSKUReference",...s.t},{header:"Status",key:"GRStatus",...s.t}];const t=p=>({title:v,csvData:p,headers:T}),_=p=>(0,u.J)({data:p,headers:T,widths:g,title:v});let C=["*","*","*","*","*","*","*","*"],P="Child Part Production",A=[{header:"Process Name",key:"processName",...s.t},{header:"Machine Name",key:"machineName",...s.t},{header:"Prod. Date",key:"productionDate",...s.t},{header:"Shift",key:"productionShift",...s.t},{header:"Operating Staff",key:"operatingStaff",...s.t},{header:"Remarks",key:"remarks",...s.t},{header:"Status",key:"status",...s.t}];const U=p=>({title:P,csvData:p,headers:A}),w=p=>(0,u.J)({data:p,headers:A,widths:C,title:P});let q=["*","*","*","*","*","*","*","*"],d="Gr. Child Part Production",O=[{header:"Process Name",key:"processName",...s.t},{header:"Machine Name",key:"machineName",...s.t},{header:"Prod. Date",key:"productionDate",...s.t},{header:"Shift",key:"productionShift",...s.t},{header:"Operating Staff",key:"operatingStaff",...s.t},{header:"Remarks",key:"remarks",...s.t},{header:"Status",key:"status",...s.t}];const J=p=>({title:d,csvData:p,headers:O}),Q=p=>(0,u.J)({data:p,headers:O,widths:q,title:d});let E=["*","*","*","*","*","*","*","*"],G="SKU Production",N=[{header:"Process Name",key:"processName",...s.t},{header:"Machine Name",key:"machineName",...s.t},{header:"Prod. Date",key:"productionDate",...s.t},{header:"Shift",key:"productionShift",...s.t},{header:"Operating Staff",key:"operatingStaff",...s.t},{header:"Remarks",key:"remarks",...s.t},{header:"Status",key:"status",...s.t}];const L=p=>({title:G,csvData:p,headers:N}),Y=p=>(0,u.J)({data:p,headers:N,widths:E,title:G});let y=[{header:"#",key:"GRLineNumber",...s.t},{header:"Item Code",key:"itemCode",...s.t},{header:"Item Name",key:"itemName",...s.t},{header:"Item Description",key:"itemDescription",...s.t},{header:"Conversion Of Units",key:"conversionOfUnits",...s.t},{header:"UoM",key:"primaryUnit",...s.t},{header:"IR Qty.",key:"closedIRQty",...s.t},{header:"GR Qty.",key:"GRQty",...s.t}];const j=p=>({title:"Goods Requisition",csvData:p,headers:y});let H=["*","*","*","*","*","*","*","*"],R="Ink Mixing",k=[{header:"JC No.",key:"jobCardNo",...s.t},{header:"F20 Ink Code",key:"itemCode",...s.t},{header:"F20 Ink Name",key:"itemName",...s.t},{header:"F20 Ink Description",key:"itemDescription",...s.t},{header:"UoM",key:"UOM",...s.t},{header:"Batch Qty.",key:"batchQty",...s.t},{header:"Batch Date",key:"batchDate",...s.t},{header:"Log Book Ref",key:"logBookRef",...s.t}];const B=p=>({title:R,csvData:p,headers:k}),$=p=>(0,u.J)({data:p,headers:k,widths:H,title:R});let z=["*","*","*","*","*","*","*"],x="Job Card Entry",S=[{header:"Job Card No",key:"jobCardNo",...s.t},{header:"SKU No",key:"SKUNo",...s.t},{header:"SKU Name",key:"SKUName",...s.t},{header:"SKU Description",key:"SKUDescription",...s.t},{header:"UoM",key:"UOM",...s.t},{header:"Batch I/P Qty.",key:"totalBatchQuantity",...s.t},{header:"Batch O/P Qty.",key:"batchOutputQty",...s.t},{header:"Batch Number",key:"batchNumber",...s.t},{header:"Status",key:"status",...s.t}];const V=p=>({title:x,csvData:p,headers:S}),h=p=>(0,u.J)({data:p,headers:S,widths:z,title:x});let X=["*","*","*","*","*","*"],M="Goods Transfer Request (Intra) Report",F=[{header:"GT Req #",key:"GTRequestNo",...s.t},{header:"GT Request Dt.",key:"GTRequestDate",...s.t},{header:"Location",key:"location",...s.t},{header:"From Department",key:"fromDepartment",...s.t},{header:"To Department",key:"toDepartment",...s.t},{header:"Status",key:"status",...s.t}];const W=p=>({title:M,csvData:p,headers:F}),tt=p=>(0,u.J)({data:p,headers:F,widths:X,title:M})},68922:(D,m,c)=>{c.d(m,{T:()=>s});const s=[{message:"Location is Required",key:"deliveryLocation"}]},3959:(D,m,c)=>{c.d(m,{Gu:()=>v,kq:()=>g,JH:()=>u,Nh:()=>T,m5:()=>C,sg:()=>t}),c(68922);const u=[{message:"SKU No. is Required",key:"SKUId"},{message:"FGIN Quantity is Required",key:"FGINQuantity"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Manufacturing Date is Required",key:"manufacturingDate"},{message:"Batch No. is Required",key:"batchNo"}],g=[{message:"SKU No. is Required",key:"SKU"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Correction Category is Required",key:"correctionCategory"},{message:"Source Batch (From) is Required",key:"sourceBatch"}],v=[{message:"Process Name is Required",key:"processName"},{message:"Machine Name is Required",key:"machineName"},{message:"Production Date is Required",key:"productionDate"},{message:"Production Shift is Required",key:"productionShift"}],T=[{message:"Item Code is Required",key:"itemCode"},{message:"Item Name is Required",key:"itemName"},{message:"Item Description is Required",key:"itemDescription"},{message:"UoM is Required",key:"UoM"}],t=[{message:"Job Card No. is Required",key:"jobCard"},{message:"Batch Output Qty is Required",key:"batchOutputQty"}],C=[{message:"Job Card No. is Required",key:"jobCard"}]}}]);