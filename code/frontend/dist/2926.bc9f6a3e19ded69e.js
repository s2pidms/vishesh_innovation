"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2926],{52926:(w,T,c)=>{c.r(T),c.d(T,{GTRequestModule:()=>ae});var n=c(96814),p=c(1076),h=c(43818),y=c(25116),g=c(83110),e=c(65879),m=c(99328),f=c(79475),R=c(88059),G=c(53421);function I(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",19),e._uU(8),e.qZA(),e.TgZ(9,"td",19),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",20),e._UZ(15,"button",21),e.TgZ(16,"div",22)(17,"a",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.navigateTo("../form",s,"view"))}),e._UZ(18,"i",24),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.navigateTo("../form",s,"edit"))}),e._UZ(21,"i",25),e._uU(22," Edit "),e.qZA(),e.TgZ(23,"a",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.navigateTo("../form",s,"approve"))}),e._UZ(24,"i",26),e._uU(25," Approve "),e.qZA(),e.TgZ(26,"a",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.navigateTo("../form",s,"reject"))}),e._UZ(27,"i",27),e._uU(28," Reject "),e.qZA()()()()()}if(2&o){const t=d.$implicit,r=e.oxw();e.xp6(2),e.Oqu(t.GTRequestNo),e.xp6(2),e.Oqu(t.GTRequestDate),e.xp6(2),e.Oqu(t.location),e.xp6(2),e.Oqu(t.fromDepartment),e.xp6(2),e.Oqu(t.toDepartment),e.xp6(2),e.Oqu(t.status),e.xp6(5),e.Q6J("accessType",r.rolePermissionActions.viewAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.status)||"Rejected"===(null==t?null:t.status)),e.Q6J("accessType",r.rolePermissionActions.editAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.status)||"Rejected"===(null==t?null:t.status)),e.Q6J("accessType",r.rolePermissionActions.approveAction),e.xp6(3),e.ekj("disable","Approved"===(null==t?null:t.status)||"Rejected"===(null==t?null:t.status)),e.Q6J("accessType",r.rolePermissionActions.approveAction)}}const J=function(o,d,t,r){return{page:o,pageSize:d,collection:t,search:r,type:"list"}};let P=(()=>{class o{constructor(t,r,i,s,a,_){this.spinner=t,this.gtRequestService=r,this.exportExcelService=i,this.activatedRoute=s,this.exportToPDFService=a,this.utilityService=_,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=y.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(t,r,i){this.utilityService.navigateToForm({path:t,status:r.status,action:i,id:r._id,activatedRoute:this.activatedRoute})}trackByFn(t,r){return r?._id}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=t.value,this.getAll()}}getAll(t=!1,r=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:t};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.gtRequestService.getAll(i).subscribe(s=>{"EXCEL"==r?this.excelDownload(s.rows):"PDF"==r?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(t){let r=(0,g.cY)(t);this.exportToPDFService.generatePdf(r.tableData,r.title)}excelDownload(t){this.exportExcelService.exportExcel((0,g.ho)(t))}onSort({column:t,direction:r}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.column=t,this.direction="asc"==r?1:-1,this.getAll()}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(m.V),e.Y36(f.pq),e.Y36(m.Ol),e.Y36(p.gz),e.Y36(m.$L),e.Y36(m.tI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-gt-request-list"]],viewQuery:function(r,i){if(1&r&&e.Gf(h.j,5),2&r){let s;e.iGM(s=e.CRH())&&(i.headers=s)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","bg-primary","btn-add",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","GTRequestNo",3,"sort"],["sortable","GTRequestDate",3,"sort"],["sortable","location",3,"sort"],["sortable","fromDepartment",1,"text-start",3,"sort"],["sortable","toDepartment",1,"text-start",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","me-2","text-success"],["aria-hidden","true",1,"fa","fa-close","me-3","text-primary"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Goods Transfer Request (Intra) Summary"),e.qZA()(),e.TgZ(4,"div",3),e._UZ(5,"button",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return i.navigateTo("../form",{},"create")}),e._uU(7," Goods Transfer Request (Intra) "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(a){return i.eventHeader(a)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(15,"GT Req #"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(17,"GT Req Dt."),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(19,"Location"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(21,"From Department"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(23,"To Department"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(25,"Status"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,I,29,16,"tr",18),e.qZA()()()()),2&r&&(e.xp6(4),e.Q6J("accessType",i.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,J,i.page,i.pageSize,i.collection,i.search)),e.xp6(19),e.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[n.sg,R.P,h.j,G.J],encapsulation:2})}return o})();var u=c(60095),C=c(21631),Q=c(22096),E=c(77609),b=c(37285);function k(o,d){1&o&&e._UZ(0,"hr",20)}function Z(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(1," Reset "),e.qZA()}}function j(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.dismissModel())}),e._uU(1," Save & Close "),e.qZA()}}const q=function(){return["view","approve"]},A=function(){return["create","edit"]};let S=(()=>{class o{constructor(t){this.activeModal=t,this.action="",this.remarksDetails={},this.billFromLocationOptions=[],this.remarksObj={},this.btnDisable=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1}ngOnInit(){this.remarksObj=JSON.parse(JSON.stringify(this.remarksDetails))}reset(){this.remarksObj=JSON.parse(JSON.stringify(this.remarksDetails))}dismissModel(){this.activeModal.close(this.remarksObj)}trackByFn(t,r){return r?._id}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(b.Kz))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-gt-request-remarks-modal"]],viewQuery:function(r,i){if(1&r&&e.Gf(h.j,5),2&r){let s;e.iGM(s=e.CRH())&&(i.headers=s)}},inputs:{action:"action",remarksDetails:"remarksDetails",billFromLocationOptions:"billFromLocationOptions"},decls:42,vars:15,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","px-0","mt-4"],[1,"row","justify-content-center","px-5","mt-4"],[1,"col-12"],[1,"row","mt-4"],[1,"col-5","pe-0"],[1,"form-label"],[1,"col-1","px-2","d-flex","align-items-center","justify-content-start"],[1,"ms-1","me-2","text-secondary"],[1,"col-6","ps-0","setInputMargin"],["type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],["class","line-border my-4",4,"ngIf"],[1,"row"],[1,"col","text-center","mb-4"],["class","btn bg-primary px-5 me-4","type","button",3,"click",4,"ngIf"],["class","btn bg-primary px-3","type","button",3,"click",4,"ngIf"],[1,"line-border","my-4"],["type","button",1,"btn","bg-primary","px-5","me-4",3,"click"],["type","button",1,"btn","bg-primary","px-3",3,"click"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Remarks"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return i.activeModal.close()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),e._uU(13," Reason for GT"),e.qZA()(),e.TgZ(14,"div",11)(15,"span",12),e._uU(16,"\u25b6"),e.qZA()(),e.TgZ(17,"div",13)(18,"input",14),e.NdJ("ngModelChange",function(a){return i.remarksObj.reasonForGTRequest=a}),e.qZA()()(),e.TgZ(19,"div",8)(20,"div",9)(21,"label",10),e._uU(22," Job Card Reference"),e.qZA()(),e.TgZ(23,"div",11)(24,"span",12),e._uU(25,"\u25b6"),e.qZA()(),e.TgZ(26,"div",13)(27,"input",14),e.NdJ("ngModelChange",function(a){return i.remarksObj.jobCardReference=a}),e.qZA()()(),e.TgZ(28,"div",8)(29,"div",9)(30,"label",10),e._uU(31," Requested by "),e.qZA()(),e.TgZ(32,"div",11)(33,"span",12),e._uU(34,"\u25b6"),e.qZA()(),e.TgZ(35,"div",13)(36,"input",14),e.NdJ("ngModelChange",function(a){return i.remarksObj.requestedBy=a}),e.qZA()()()()(),e.YNc(37,k,1,0,"hr",15),e.TgZ(38,"div",16)(39,"div",17),e.YNc(40,Z,2,0,"button",18),e.YNc(41,j,2,0,"button",19),e.qZA()()()()),2&r&&(e.xp6(18),e.Q6J("ngModel",i.remarksObj.reasonForGTRequest)("disabled",e.DdM(9,q).includes(i.action)),e.xp6(9),e.Q6J("ngModel",i.remarksObj.jobCardReference)("disabled",e.DdM(10,q).includes(i.action)),e.xp6(9),e.Q6J("ngModel",i.remarksObj.requestedBy)("disabled",e.DdM(11,q).includes(i.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(12,A).includes(i.action)),e.xp6(3),e.Q6J("ngIf",e.DdM(13,A).includes(i.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(14,A).includes(i.action)))},dependencies:[n.O5,u.Fj,u.JJ,u.On],encapsulation:2})}return o})();const U=[{message:"Location is Required",key:"location"},{message:"From Department is Required",key:"fromDepartment"},{message:"To Department is Required",key:"toDepartment"}];var L=c(16857),ee=c(50363),Y=c(95346),O=c(59103);function x(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div",55),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw();return e.KtG(s.setConversionOfUnit(i))}),e.qZA()}}function K(o,d){1&o&&e._UZ(0,"div",56)}function B(o,d){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.GTRequestQty)}}const H=function(){return{standalone:!0}};function N(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"input",57),e.NdJ("input",function(){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw();return e.KtG(s.setGRQty(i))})("ngModelChange",function(i){e.CHM(t);const s=e.oxw().$implicit;return e.KtG(s.GTRequestQty=i)}),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Q6J("ngModel",t.GTRequestQty)("ngModelOptions",e.DdM(2,H))}}const D=function(){return["view","approve","reject"]};function z(o,d){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",44,45)(7,"span",46),e._uU(8),e.qZA()(),e.TgZ(9,"td",44,47)(11,"span",46),e._uU(12),e.qZA()(),e.TgZ(13,"td")(14,"div",48)(15,"span",49),e._uU(16),e.ALo(17,"UOMUnitsMaster"),e.qZA(),e.TgZ(18,"span",50),e.YNc(19,x,1,0,"div",51),e.YNc(20,K,1,0,"div",52),e.qZA()()(),e.TgZ(21,"td"),e._uU(22),e.ALo(23,"number"),e.qZA(),e.TgZ(24,"td")(25,"div",53),e.YNc(26,B,2,1,"span",43),e.YNc(27,N,1,3,"input",54),e.qZA()()()),2&o){const t=d.$implicit,r=e.MAs(6),i=e.MAs(10),s=e.oxw();e.xp6(2),e.Oqu(t.GTRequestLineNumber),e.xp6(2),e.Oqu(t.itemCode),e.xp6(1),e.Udp("width",r.clientWidth),e.xp6(2),e.Q6J("positionTarget",r)("ngbTooltip",t.itemName),e.xp6(1),e.hij(" ",null==t?null:t.itemName," "),e.xp6(1),e.Udp("width",i.clientWidth),e.xp6(2),e.Q6J("positionTarget",i)("ngbTooltip",t.itemDescription),e.xp6(1),e.hij(" ",null==t?null:t.itemDescription," "),e.xp6(3),e.Q6J("ngbTooltip",t.conversionOfUnits)("ngClass",t.UOM==t.secondaryUnit?"text-primary pointer":"text-secondary pointer"),e.xp6(1),e.hij(" ",e.lcZ(17,20,null==t?null:t.UOM)," "),e.xp6(3),e.Q6J("ngIf",t.secondaryUnit),e.xp6(1),e.Q6J("ngIf",!t.secondaryUnit),e.xp6(2),e.Oqu(e.xi3(23,22,t.IRQty,"1.2-2")),e.xp6(4),e.Q6J("ngIf",e.DdM(25,D).includes(s.action)),e.xp6(1),e.Q6J("ngIf",!e.DdM(26,D).includes(s.action))}}function V(o,d){1&o&&(e.TgZ(0,"div",58)(1,"div",59)(2,"span",60),e._uU(3," Rejection Remarks "),e.qZA(),e._UZ(4,"input",61),e.qZA()())}function $(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div",62)(1,"button",63),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",64),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.ESCPreview())}),e._uU(4," Esc "),e.qZA(),e.TgZ(5,"button",65),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.preview())}),e._uU(6,"Preview"),e.qZA(),e.TgZ(7,"button",66),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(8," Save "),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("disabled",!t.isESCPreview),e.xp6(4),e.Q6J("disabled",!t.isPreview)}}function F(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div",67)(1,"button",68),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(2,"Save"),e.qZA()()}}function M(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div",67)(1,"button",68),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(2,"Reject"),e.qZA()()}}function X(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div",69)(1,"button",68),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.submit())}),e._uU(2,"Approve"),e.qZA()()}}function W(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"button",68),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.navigateTo("../list",{},""))}),e._uU(2," Back "),e.qZA()()}}const l=function(o,d,t,r){return{page:o,pageSize:d,collection:t,search:r,excelDisplay:"none"}},te=function(){return["create"]},ie=function(){return["view"]};let re=(()=>{class o{constructor(t,r,i,s,a,_,v,le,ce,ue,de){this.gtRequestService=t,this.router=r,this.activatedRoute=i,this.spinner=s,this.toastService=a,this.validationService=_,this.modalService=v,this.utilityService=le,this.storageService=ce,this.exportExcelService=ue,this.location=de,this.isPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=6,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.GTRequestDetailsArray=[],this.itemCodes=[],this.ESCPreviewArr=[],this.userData={},this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",reject:"Rejected"},this.masterData={autoIncrementNo:"",departmentOptions:[],locationOptions:[]},this.form=new u.nJ({_id:new u.p4(null),GTRequestNo:new u.p4(null),GTRequestDate:new u.p4(null),location:new u.p4(null,[u.kI.required]),fromDepartment:new u.p4(null,[u.kI.required]),toDepartment:new u.p4(null,[u.kI.required]),status:new u.p4("Awaiting Approval"),remarks:new u.nJ({reasonForGTRequest:new u.p4(null),jobCardReference:new u.p4(null),requestedBy:new u.p4(null)}),GTRequestDetails:new u.p4([]),rejectRemarks:new u.p4(null)})}get f(){return this.form.controls}get remarks(){return this.form.get("remarks")}ngOnInit(){this.userData=this.storageService.get("IDMSAUser"),this.getInitialData()}trackByFn(t,r){return r?._id}reset(){this.form.reset(),this.GTRequestDetailsArray=[],this.collection=this.GTRequestDetailsArray.length,this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,U))return void this.form.controls.toDepartment.disable();if("reject"==this.action&&!this.form.controls.rejectRemarks.value)return void this.toastService.warning("Rejection Remarks is Required");this.form.enable();let t=this.form.value;0!=this.GTRequestDetailsArray?.length?(t.GTRequestDetails=this.GTRequestDetailsArray,t._id?this.update(t):(delete t._id,this.create(t))):this.toastService.warning("At least one Goods Transfer Request (Intra) Item required!")}navigateTo(t,r,i){this.router.navigate([t],{relativeTo:this.activatedRoute,queryParams:{id:r,action:i}})}create(t){this.spinner.show(),this.gtRequestService.create(t).subscribe(r=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(r.message),this.itemCodes=r.itemCodes,this.location.back(),this.openAlertMessageModal()})}update(t){this.spinner.show(),this.gtRequestService.update(t._id,t).subscribe(r=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(r.message),this.location.back()})}eventHeader(t){switch(t.key){case"SEARCH":this.search=t.value,this.page=1;break;case"EXCEL":this.exportExcelService.exportExcel((0,g.yz)(this.GTRequestDetailsArray));break;case"PAGE":this.page=t.value}}setGRQty(t){t.GTRequestQty>t.IRQty&&this.toastService.warning("GTR Qty. Should not be greater than IR Qty. !")}getInitialData(){this.spinner.show(),this.gtRequestService.getAllMasterData({}).subscribe(t=>{this.masterData=t,1==this.masterData?.locationOptions?.length&&this.form.controls.location.setValue(this.masterData?.locationOptions[0]?.label),this.form.controls.GTRequestNo.setValue(this.masterData.autoIncrementNo),this.form.controls.GTRequestDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue("Awaiting Approval"),this.activatedRoute.queryParams.pipe((0,C.z)(r=>(this.action=r.action,this.utilityService.accessDenied(this.action),r.id?this.gtRequestService.getById(r.id):(0,Q.of)({})))).subscribe(r=>{this.spinner.hide(),0!=Object.keys(r).length&&(r.GTRequestDetails&&(this.GTRequestDetailsArray=r.GTRequestDetails,this.collection=this.GTRequestDetailsArray.length),r.GTRequestDate&&(r.GTRequestDate=r?.GTRequestDate.split("T")[0]),r.status=this.statusArr[this.action],this.form.patchValue(r),"create"!=this.action&&(this.form.disable(),"reject"==this.action&&this.form.controls.rejectRemarks.enable()))})})}openAlertMessageModal(){if(this.itemCodes.length>0){const t=this.modalService.open(E.HF,{centered:!0,size:"md",backdrop:"static",keyboard:!1});t.componentInstance.action=this.action,t.componentInstance.alertMessage=`Dear GT Request Creator, it has been noticed that material you requested having Item Code No: ${this.itemCodes} are not presently available in store`,t.componentInstance.itemCodes=this.itemCodes,t.result.then(r=>{["create","edit"].includes(this.action)&&(this.itemCodes=r)},r=>{})}}setToDepartmentValid(t){let r=this.f.fromDepartment.value;if(r==this.f.toDepartment.value)return this.toastService.warning("From Department should not be same as To Department "),this.GTRequestDetailsArray=[],void(this.collection=this.GTRequestDetailsArray?.length);let s={department:r,location:this.f.location.value};this.spinner.show(),this.gtRequestService.getAllItemsByLocationAndDept(s).subscribe(a=>{this.spinner.hide(),this.GTRequestDetailsArray=a.map((_,v)=>(_.GTRequestLineNumber=v+1,_)),this.collection=this.GTRequestDetailsArray?.length})}preview(){this.search="",this.isPreview=!0,this.isESCPreview=!0,this.ESCPreviewArr=this.GTRequestDetailsArray,this.GTRequestDetailsArray=this.GTRequestDetailsArray.filter(t=>t.GTRequestQty>0),this.collection=this.GTRequestDetailsArray.length}ESCPreview(){this.search="",this.isPreview=!1,this.GTRequestDetailsArray=this.ESCPreviewArr,this.collection=this.GTRequestDetailsArray.length}setConversionOfUnit(t){if(["create","edit"].includes(this.action)){let r=this.GTRequestDetailsArray.map(s=>s?.GTRequestLineNumber).indexOf(t?.GTRequestLineNumber);this.GTRequestDetailsArray[r].UOM=this.GTRequestDetailsArray[r].UOM==t.secondaryUnit?t.primaryUnit:t.secondaryUnit;let i=this.utilityService.setConversion({UOM:this.GTRequestDetailsArray[r].UOM,quantity:t.IRQty,primaryUnit:t.primaryUnit,secondaryUnit:t.secondaryUnit,primaryToSecondaryConversion:t.primaryToSecondaryConversion,secondaryToPrimaryConversion:t.secondaryToPrimaryConversion})||0;this.GTRequestDetailsArray[r].IRQty=i,this.GTRequestDetailsArray[r].GTRequestQty=0,this.isPreview=!1}}openRemarksModal(){const t=this.modalService.open(S,{centered:!0,size:"md",backdrop:"static",keyboard:!1});t.componentInstance.action=this.action,t.componentInstance.remarksDetails=this.remarks.value,t.result.then(r=>{r&&this.remarks.patchValue(r)},r=>{})}onSort({column:t,direction:r}){this.headers.forEach(i=>{i.sortable!==t&&(i.direction="")}),this.GTRequestDetailsArray=""===r||""===t?this.GTRequestDetailsArray:[...this.GTRequestDetailsArray].sort((i,s)=>{let a="string"==typeof i[t]?i[t].toLowerCase():i[t],_="string"==typeof s[t]?s[t].toLowerCase():s[t];const v=a<_?-1:a>_?1:0;return"asc"===r?v:-v})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(f.pq),e.Y36(p.F0),e.Y36(p.gz),e.Y36(m.V),e.Y36(m.kl),e.Y36(L.R),e.Y36(b.FF),e.Y36(m.tI),e.Y36(m.V1),e.Y36(m.Ol),e.Y36(n.Ye))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-gt-request-form"]],viewQuery:function(r,i){if(1&r&&e.Gf(h.j,5),2&r){let s;e.iGM(s=e.CRH())&&(i.headers=s)}},decls:76,vars:33,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"col-5","pe-4"],[1,"form-label"],["type","text","formControlName","GTRequestNo","readonly","",1,"form-control"],[1,"col-7","ps-4","pe-5"],["type","date","formControlName","GTRequestDate",1,"form-control"],[1,"col-2","ps-0"],[1,"text-danger"],["bindLabel","value","bindValue","label","formControlName","location",3,"items","clearable"],[1,"col-3"],["bindLabel","value","bindValue","label","formControlName","fromDepartment",3,"items","clearable","change"],["bindLabel","value","bindValue","label","formControlName","toDepartment",3,"items","clearable","change"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","23rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","GTRequestLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","primaryUnit",3,"sort"],["sortable","IRQty",3,"sort"],["sortable","GTRequestQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mb-0"],[1,"col"],[1,"col-3","pe-0"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["class","col-7 pe-5",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","text-end",4,"ngIf"],["class","col-5 text-end",4,"ngIf"],[4,"ngIf"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-between","px-2"],["placement","top",3,"ngbTooltip","ngClass"],[1,"pointer","d-flex","align-items-center"],["class","unit-switch-rev",3,"click",4,"ngIf"],["class","unit-switch-gray",4,"ngIf"],[1,"d-flex","justify-content-center"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],[1,"unit-switch-rev",3,"click"],[1,"unit-switch-gray"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","input","ngModelChange"],[1,"col-7","pe-5"],[1,"d-flex","align-items-center","text-nowrap"],[1,"set-flex-status","px-4"],["type","text","formControlName","rejectRemarks",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-5","text-end"]],template:function(r,i){1&r&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8)(12,"label",9),e._uU(13,"GT Request No."),e.qZA(),e._UZ(14,"input",10),e.qZA(),e.TgZ(15,"div",11)(16,"label",9),e._uU(17,"GT request Date"),e.qZA(),e._UZ(18,"input",12),e.qZA()()(),e.TgZ(19,"div",13)(20,"label",9),e._uU(21," Location "),e.TgZ(22,"span",14),e._uU(23,"*"),e.qZA()(),e._UZ(24,"ng-select",15),e.qZA(),e.TgZ(25,"div",16)(26,"label",9),e._uU(27," From Department "),e.TgZ(28,"span",14),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"ng-select",17),e.NdJ("change",function(a){return i.setToDepartmentValid(a)}),e.qZA()(),e.TgZ(31,"div",16)(32,"label",9),e._uU(33," To Department "),e.TgZ(34,"span",14),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"ng-select",18),e.NdJ("change",function(a){return i.setToDepartmentValid(a)}),e.qZA()()(),e._UZ(37,"hr",19),e.TgZ(38,"app-setting-header",20),e.NdJ("dataChange",function(a){return i.eventHeader(a)}),e.qZA(),e.TgZ(39,"div",21)(40,"table",22)(41,"thead",23)(42,"tr",24)(43,"th",25),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(44,"#"),e.qZA(),e.TgZ(45,"th",26),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(46,"Item Code"),e.qZA(),e.TgZ(47,"th",27),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(48,"Item Name"),e.qZA(),e.TgZ(49,"th",28),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(50," Item Description "),e.qZA(),e.TgZ(51,"th",29),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(52,"UoM"),e.qZA(),e.TgZ(53,"th",30),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(54,"IR Qty."),e.qZA(),e.TgZ(55,"th",31),e.NdJ("sort",function(a){return i.onSort(a)}),e._uU(56,"GTR Qty."),e.qZA()()(),e.TgZ(57,"tbody"),e.YNc(58,z,28,27,"tr",32),e.ALo(59,"slice"),e.ALo(60,"searchFi1ter"),e.qZA()()(),e._UZ(61,"hr",19),e.TgZ(62,"div",33)(63,"div",34)(64,"div",6)(65,"div",35),e._UZ(66,"button",36),e.TgZ(67,"button",37),e.NdJ("click",function(){return i.openRemarksModal()}),e._uU(68," Remarks "),e.qZA()(),e.YNc(69,V,5,0,"div",38),e.qZA()(),e.TgZ(70,"div",39),e.YNc(71,$,9,2,"div",40),e.YNc(72,F,3,0,"div",41),e.YNc(73,M,3,0,"div",41),e.YNc(74,X,3,0,"div",42),e.YNc(75,W,3,0,"div",43),e.qZA()()()()()),2&r&&(e.Q6J("formGroup",i.form),e.xp6(5),e.hij("GT Request (Intra) ",e.lcZ(6,17,i.action),""),e.xp6(19),e.Q6J("items",i.masterData.locationOptions)("clearable",!1),e.xp6(6),e.Q6J("items",i.masterData.departmentOptions)("clearable",!1),e.xp6(6),e.Q6J("items",i.masterData.departmentOptions)("clearable",!1),e.xp6(2),e.Q6J("data",e.l5B(26,l,i.page,i.pageSize,i.collection,i.search)),e.xp6(20),e.Q6J("ngForOf",e.Dn7(59,19,e.xi3(60,23,i.GTRequestDetailsArray,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn),e.xp6(11),e.Q6J("ngIf","reject"==i.action),e.xp6(2),e.Q6J("ngIf",e.DdM(31,te).includes(i.action)),e.xp6(1),e.Q6J("ngIf","edit"==i.action),e.xp6(1),e.Q6J("ngIf","reject"==i.action),e.xp6(1),e.Q6J("ngIf","approve"==i.action),e.xp6(1),e.Q6J("ngIf",e.DdM(32,ie).includes(i.action)))},dependencies:[n.mk,n.sg,n.O5,R.P,b._L,u.Fj,u.wV,u.JJ,u.JL,u.sg,u.u,u.On,ee.w9,h.j,n.OU,n.JJ,n.rS,Y.G,O.S],encapsulation:2})}return o})();var ne=c(19964),se=c(56208);const oe=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:P},{path:"form",component:re,resolve:{accessScreen:ne.xr}}];let ae=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[n.ez,p.Bz.forChild(oe),se.m]})}return o})()},13107:(w,T,c)=>{c.d(T,{t:()=>n});const n={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(w,T,c)=>{c.d(T,{J:()=>n});const n=({data:p,headers:h,widths:y,title:g})=>({tableData:{widths:y,headerRows:1,body:[h.map(f=>({text:f.header,style:"header"})),...p.map(f=>h.map(R=>({style:"subheader",text:f[R.key]})))]},title:g})},83110:(w,T,c)=>{c.d(T,{yz:()=>L,oO:()=>m,rv:()=>e,cY:()=>W,ho:()=>X,R6:()=>B,M5:()=>K,MO:()=>V,GF:()=>z,YJ:()=>J,kQ:()=>I,Y3:()=>E,Wb:()=>Q,i4:()=>q,mU:()=>j});var n=c(13107),p=c(28402);let h=["*","*","*","*","*","*","*","*"],y="Goods Requisition",g=[{header:"GR No.",key:"GRNumber",...n.t},{header:"GR Date",key:"GRDateS",...n.t},{header:"Location (Store)",key:"deliveryLocation",...n.t},{header:"Department",key:"department",...n.t},{header:"Remarks/Order Reference",key:"salesOrderSKUReference",...n.t},{header:"Status",key:"GRStatus",...n.t}];const e=l=>({title:y,csvData:l,headers:g}),m=l=>(0,p.J)({data:l,headers:g,widths:h,title:y});let f=["*","*","*","*","*","*","*","*"],R="Child Part Production",G=[{header:"Process Name",key:"processName",...n.t},{header:"Machine Name",key:"machineName",...n.t},{header:"Prod. Date",key:"productionDate",...n.t},{header:"Shift",key:"productionShift",...n.t},{header:"Operating Staff",key:"operatingStaff",...n.t},{header:"Remarks",key:"remarks",...n.t},{header:"Status",key:"status",...n.t}];const I=l=>({title:R,csvData:l,headers:G}),J=l=>(0,p.J)({data:l,headers:G,widths:f,title:R});let P=["*","*","*","*","*","*","*","*"],u="Gr. Child Part Production",C=[{header:"Process Name",key:"processName",...n.t},{header:"Machine Name",key:"machineName",...n.t},{header:"Prod. Date",key:"productionDate",...n.t},{header:"Shift",key:"productionShift",...n.t},{header:"Operating Staff",key:"operatingStaff",...n.t},{header:"Remarks",key:"remarks",...n.t},{header:"Status",key:"status",...n.t}];const Q=l=>({title:u,csvData:l,headers:C}),E=l=>(0,p.J)({data:l,headers:C,widths:P,title:u});let b=["*","*","*","*","*","*","*","*"],k="SKU Production",Z=[{header:"Process Name",key:"processName",...n.t},{header:"Machine Name",key:"machineName",...n.t},{header:"Prod. Date",key:"productionDate",...n.t},{header:"Shift",key:"productionShift",...n.t},{header:"Operating Staff",key:"operatingStaff",...n.t},{header:"Remarks",key:"remarks",...n.t},{header:"Status",key:"status",...n.t}];const j=l=>({title:k,csvData:l,headers:Z}),q=l=>(0,p.J)({data:l,headers:Z,widths:b,title:k});let U=[{header:"#",key:"GRLineNumber",...n.t},{header:"Item Code",key:"itemCode",...n.t},{header:"Item Name",key:"itemName",...n.t},{header:"Item Description",key:"itemDescription",...n.t},{header:"Conversion Of Units",key:"conversionOfUnits",...n.t},{header:"UoM",key:"primaryUnit",...n.t},{header:"IR Qty.",key:"closedIRQty",...n.t},{header:"GR Qty.",key:"GRQty",...n.t}];const L=l=>({title:"Goods Requisition",csvData:l,headers:U});let Y=["*","*","*","*","*","*","*","*"],O="Ink Mixing",x=[{header:"JC No.",key:"jobCardNo",...n.t},{header:"F20 Ink Code",key:"itemCode",...n.t},{header:"F20 Ink Name",key:"itemName",...n.t},{header:"F20 Ink Description",key:"itemDescription",...n.t},{header:"UoM",key:"UOM",...n.t},{header:"Batch Qty.",key:"batchQty",...n.t},{header:"Batch Date",key:"batchDate",...n.t},{header:"Log Book Ref",key:"logBookRef",...n.t}];const K=l=>({title:O,csvData:l,headers:x}),B=l=>(0,p.J)({data:l,headers:x,widths:Y,title:O});let H=["*","*","*","*","*","*","*"],N="Job Card Entry",D=[{header:"Job Card No",key:"jobCardNo",...n.t},{header:"SKU No",key:"SKUNo",...n.t},{header:"SKU Name",key:"SKUName",...n.t},{header:"SKU Description",key:"SKUDescription",...n.t},{header:"UoM",key:"UOM",...n.t},{header:"Batch I/P Qty.",key:"totalBatchQuantity",...n.t},{header:"Batch O/P Qty.",key:"batchOutputQty",...n.t},{header:"Batch Number",key:"batchNumber",...n.t},{header:"Status",key:"status",...n.t}];const z=l=>({title:N,csvData:l,headers:D}),V=l=>(0,p.J)({data:l,headers:D,widths:H,title:N});let $=["*","*","*","*","*","*"],F="Goods Transfer Request (Intra) Report",M=[{header:"GT Req #",key:"GTRequestNo",...n.t},{header:"GT Request Dt.",key:"GTRequestDate",...n.t},{header:"Location",key:"location",...n.t},{header:"From Department",key:"fromDepartment",...n.t},{header:"To Department",key:"toDepartment",...n.t},{header:"Status",key:"status",...n.t}];const X=l=>({title:F,csvData:l,headers:M}),W=l=>(0,p.J)({data:l,headers:M,widths:$,title:F})}}]);