"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2926],{52926:(J,_,d)=>{d.r(_),d.d(_,{GTRequestModule:()=>ce});var i=d(96814),p=d(1076),h=d(43818),q=d(25116),T=d(34183),e=d(65879),m=d(2742),g=d(57656),y=d(88059),C=d(53421);function I(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",19),e._uU(8),e.qZA(),e.TgZ(9,"td",19),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"div",20),e._UZ(15,"button",21),e.TgZ(16,"div",22)(17,"a",23),e.NdJ("click",function(){const s=e.CHM(n).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",s,"view"))}),e._UZ(18,"i",24),e._uU(19," View "),e.qZA(),e.TgZ(20,"a",23),e.NdJ("click",function(){const s=e.CHM(n).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",s,"edit"))}),e._UZ(21,"i",25),e._uU(22," Edit "),e.qZA(),e.TgZ(23,"a",23),e.NdJ("click",function(){const s=e.CHM(n).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",s,"approve"))}),e._UZ(24,"i",26),e._uU(25," Approve "),e.qZA(),e.TgZ(26,"a",23),e.NdJ("click",function(){const s=e.CHM(n).$implicit,o=e.oxw();return e.KtG(o.navigateTo("../form",s,"reject"))}),e._UZ(27,"i",27),e._uU(28," Reject "),e.qZA()()()()()}if(2&a){const n=c.$implicit,r=e.oxw();e.xp6(2),e.Oqu(n.GTRequestNo),e.xp6(2),e.Oqu(n.GTRequestDate),e.xp6(2),e.Oqu(n.location),e.xp6(2),e.Oqu(n.fromDepartment),e.xp6(2),e.Oqu(n.toDepartment),e.xp6(2),e.Oqu(n.status),e.xp6(5),e.Q6J("accessType",r.rolePermissionActions.viewAction),e.xp6(3),e.ekj("disable","Approved"===(null==n?null:n.status)||"Rejected"===(null==n?null:n.status)),e.Q6J("accessType",r.rolePermissionActions.editAction),e.xp6(3),e.ekj("disable","Approved"===(null==n?null:n.status)||"Rejected"===(null==n?null:n.status)),e.Q6J("accessType",r.rolePermissionActions.approveAction),e.xp6(3),e.ekj("disable","Approved"===(null==n?null:n.status)||"Rejected"===(null==n?null:n.status)),e.Q6J("accessType",r.rolePermissionActions.approveAction)}}const P=function(a,c,n,r){return{page:a,pageSize:c,collection:n,search:r,type:"list"}};let E=(()=>{var a;class c{constructor(r,t,s,o,f,R){this.spinner=r,this.gtRequestService=t,this.exportExcelService=s,this.activatedRoute=o,this.exportToPDFService=f,this.utilityService=R,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=q.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(r,t,s){this.utilityService.navigateToForm({path:r,status:t.status,action:s,id:t._id,activatedRoute:this.activatedRoute})}trackByFn(r,t){return t?._id}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=r.value,this.getAll()}}getAll(r=!1,t=""){this.spinner.show();let s={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:r};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.gtRequestService.getAll(s).subscribe(o=>{"EXCEL"==t?this.excelDownload(o.rows):"PDF"==t?this.pdfDownload(o.rows):(this.tableData=o.rows,this.collection=o.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(r){let t=(0,T.cY)(r);this.exportToPDFService.generatePdf(t.tableData,t.title)}excelDownload(r){this.exportExcelService.exportExcel((0,T.ho)(r))}onSort({column:r,direction:t}){this.headers.forEach(s=>{s.sortable!==r&&(s.direction="")}),this.column=r,this.direction="asc"==t?1:-1,this.getAll()}}return(a=c).\u0275fac=function(r){return new(r||a)(e.Y36(m.V),e.Y36(g.pq),e.Y36(m.Ol),e.Y36(p.gz),e.Y36(m.$L),e.Y36(m.tI))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-gt-request-list"]],viewQuery:function(r,t){if(1&r&&e.Gf(h.j,5),2&r){let s;e.iGM(s=e.CRH())&&(t.headers=s)}},decls:30,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","bg-primary","btn-add",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","GTRequestNo",3,"sort"],["sortable","GTRequestDate",3,"sort"],["sortable","location",3,"sort"],["sortable","fromDepartment",1,"text-start",3,"sort"],["sortable","toDepartment",1,"text-start",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","me-2","text-success"],["aria-hidden","true",1,"fa","fa-close","me-3","text-primary"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Goods Transfer Request (Intra) Summary"),e.qZA()(),e.TgZ(4,"div",3),e._UZ(5,"button",4),e.TgZ(6,"button",5),e.NdJ("click",function(){return t.navigateTo("../form",{},"create")}),e._uU(7," Goods Transfer Request (Intra) "),e.qZA()(),e._UZ(8,"hr",6),e.TgZ(9,"div",7)(10,"app-setting-header",8),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA(),e.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(15,"GT Req #"),e.qZA(),e.TgZ(16,"th",13),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(17,"GT Req Dt."),e.qZA(),e.TgZ(18,"th",14),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(19,"Location"),e.qZA(),e.TgZ(20,"th",15),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(21,"From Department"),e.qZA(),e.TgZ(22,"th",16),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(23,"To Department"),e.qZA(),e.TgZ(24,"th",17),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(25,"Status"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Action"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,I,29,16,"tr",18),e.qZA()()()()),2&r&&(e.xp6(4),e.Q6J("accessType",t.rolePermissionActions.createAction),e.xp6(6),e.Q6J("data",e.l5B(4,P,t.page,t.pageSize,t.collection,t.search)),e.xp6(19),e.Q6J("ngForOf",t.tableData)("ngForTrackBy",t.trackByFn))},dependencies:[i.sg,y.P,h.j,C.J],encapsulation:2}),c})();var u=d(60095),k=d(21631),Q=d(22096),j=d(77203),b=d(37285);function Z(a,c){1&a&&e._UZ(0,"hr",20)}function U(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.reset())}),e._uU(1," Reset "),e.qZA()}}function L(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.dismissModel())}),e._uU(1," Save & Close "),e.qZA()}}const D=function(){return["view","approve"]},A=function(){return["create","edit"]};let S=(()=>{var a;class c{constructor(r){this.activeModal=r,this.action="",this.remarksDetails={},this.billFromLocationOptions=[],this.remarksObj={},this.btnDisable=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1}ngOnInit(){this.remarksObj=JSON.parse(JSON.stringify(this.remarksDetails))}reset(){this.remarksObj=JSON.parse(JSON.stringify(this.remarksDetails))}dismissModel(){this.activeModal.close(this.remarksObj)}trackByFn(r,t){return t?._id}}return(a=c).\u0275fac=function(r){return new(r||a)(e.Y36(b.Kz))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-gt-request-remarks-modal"]],viewQuery:function(r,t){if(1&r&&e.Gf(h.j,5),2&r){let s;e.iGM(s=e.CRH())&&(t.headers=s)}},inputs:{action:"action",remarksDetails:"remarksDetails",billFromLocationOptions:"billFromLocationOptions"},decls:42,vars:15,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","px-0","mt-4"],[1,"row","justify-content-center","px-5","mt-4"],[1,"col-12"],[1,"row","mt-4"],[1,"col-5","pe-0"],[1,"form-label"],[1,"col-1","px-2","d-flex","align-items-center","justify-content-start"],[1,"ms-1","me-2","text-secondary"],[1,"col-6","ps-0","setInputMargin"],["type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],["class","line-border my-4",4,"ngIf"],[1,"row"],[1,"col","text-center","mb-4"],["class","btn bg-primary px-5 me-4","type","button",3,"click",4,"ngIf"],["class","btn bg-primary px-3","type","button",3,"click",4,"ngIf"],[1,"line-border","my-4"],["type","button",1,"btn","bg-primary","px-5","me-4",3,"click"],["type","button",1,"btn","bg-primary","px-3",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Remarks"),e.qZA(),e.TgZ(4,"div")(5,"button",3),e.NdJ("click",function(){return t.activeModal.close()}),e._UZ(6,"i",4),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"label",10),e._uU(13," Reason for GT"),e.qZA()(),e.TgZ(14,"div",11)(15,"span",12),e._uU(16,"\u25b6"),e.qZA()(),e.TgZ(17,"div",13)(18,"input",14),e.NdJ("ngModelChange",function(o){return t.remarksObj.reasonForGTRequest=o}),e.qZA()()(),e.TgZ(19,"div",8)(20,"div",9)(21,"label",10),e._uU(22," Job Card Reference"),e.qZA()(),e.TgZ(23,"div",11)(24,"span",12),e._uU(25,"\u25b6"),e.qZA()(),e.TgZ(26,"div",13)(27,"input",14),e.NdJ("ngModelChange",function(o){return t.remarksObj.jobCardReference=o}),e.qZA()()(),e.TgZ(28,"div",8)(29,"div",9)(30,"label",10),e._uU(31," Requested by "),e.qZA()(),e.TgZ(32,"div",11)(33,"span",12),e._uU(34,"\u25b6"),e.qZA()(),e.TgZ(35,"div",13)(36,"input",14),e.NdJ("ngModelChange",function(o){return t.remarksObj.requestedBy=o}),e.qZA()()()()(),e.YNc(37,Z,1,0,"hr",15),e.TgZ(38,"div",16)(39,"div",17),e.YNc(40,U,2,0,"button",18),e.YNc(41,L,2,0,"button",19),e.qZA()()()()),2&r&&(e.xp6(18),e.Q6J("ngModel",t.remarksObj.reasonForGTRequest)("disabled",e.DdM(9,D).includes(t.action)),e.xp6(9),e.Q6J("ngModel",t.remarksObj.jobCardReference)("disabled",e.DdM(10,D).includes(t.action)),e.xp6(9),e.Q6J("ngModel",t.remarksObj.requestedBy)("disabled",e.DdM(11,D).includes(t.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(12,A).includes(t.action)),e.xp6(3),e.Q6J("ngIf",e.DdM(13,A).includes(t.action)),e.xp6(1),e.Q6J("ngIf",e.DdM(14,A).includes(t.action)))},dependencies:[i.O5,u.Fj,u.JJ,u.On],encapsulation:2}),c})();const N=[{message:"Location is Required",key:"location"},{message:"From Department is Required",key:"fromDepartment"},{message:"To Department is Required",key:"toDepartment"}];var Y=d(16857),re=d(50363),K=d(95346),O=d(59103);function x(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"div",55),e.NdJ("click",function(){e.CHM(n);const t=e.oxw().$implicit,s=e.oxw();return e.KtG(s.setConversionOfUnit(t))}),e.qZA()}}function B(a,c){1&a&&e._UZ(0,"div",56)}function H(a,c){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const n=e.oxw().$implicit;e.xp6(1),e.Oqu(n.GTRequestQty)}}const z=function(){return{standalone:!0}};function F(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"input",57),e.NdJ("input",function(){e.CHM(n);const t=e.oxw().$implicit,s=e.oxw();return e.KtG(s.setGRQty(t))})("ngModelChange",function(t){e.CHM(n);const s=e.oxw().$implicit;return e.KtG(s.GTRequestQty=t)}),e.qZA()}if(2&a){const n=e.oxw().$implicit;e.Q6J("ngModel",n.GTRequestQty)("ngModelOptions",e.DdM(2,z))}}const G=function(){return["view","approve","reject"]};function V(a,c){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",44,45)(7,"span",46),e._uU(8),e.qZA()(),e.TgZ(9,"td",44,47)(11,"span",46),e._uU(12),e.qZA()(),e.TgZ(13,"td")(14,"div",48)(15,"span",49),e._uU(16),e.ALo(17,"UOMUnitsMaster"),e.qZA(),e.TgZ(18,"span",50),e.YNc(19,x,1,0,"div",51),e.YNc(20,B,1,0,"div",52),e.qZA()()(),e.TgZ(21,"td"),e._uU(22),e.ALo(23,"number"),e.qZA(),e.TgZ(24,"td")(25,"div",53),e.YNc(26,H,2,1,"span",43),e.YNc(27,F,1,3,"input",54),e.qZA()()()),2&a){const n=c.$implicit,r=c.index,t=e.MAs(6),s=e.MAs(10),o=e.oxw();e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Oqu(n.itemCode),e.xp6(1),e.Udp("width",t.clientWidth),e.xp6(2),e.Q6J("positionTarget",t)("ngbTooltip",n.itemName),e.xp6(1),e.hij(" ",null==n?null:n.itemName," "),e.xp6(1),e.Udp("width",s.clientWidth),e.xp6(2),e.Q6J("positionTarget",s)("ngbTooltip",n.itemDescription),e.xp6(1),e.hij(" ",null==n?null:n.itemDescription," "),e.xp6(3),e.Q6J("ngbTooltip",n.conversionOfUnits)("ngClass",n.UOM==n.secondaryUnit?"text-primary pointer":"text-secondary pointer"),e.xp6(1),e.hij(" ",e.lcZ(17,20,null==n?null:n.UOM)," "),e.xp6(3),e.Q6J("ngIf",n.secondaryUnit),e.xp6(1),e.Q6J("ngIf",!n.secondaryUnit),e.xp6(2),e.Oqu(e.xi3(23,22,n.IRQty,"1.2-2")),e.xp6(4),e.Q6J("ngIf",e.DdM(25,G).includes(o.action)),e.xp6(1),e.Q6J("ngIf",!e.DdM(26,G).includes(o.action))}}function $(a,c){1&a&&(e.TgZ(0,"div",58)(1,"div",59)(2,"span",60),e._uU(3," Rejection Remarks "),e.qZA(),e._UZ(4,"input",61),e.qZA()())}function X(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"div",62)(1,"button",63),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.reset())}),e._uU(2,"Reset"),e.qZA(),e.TgZ(3,"button",64),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.ESCPreview())}),e._uU(4," Esc "),e.qZA(),e.TgZ(5,"button",65),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.preview())}),e._uU(6,"Preview"),e.qZA(),e.TgZ(7,"button",66),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.submit())}),e._uU(8," Save "),e.qZA()()}if(2&a){const n=e.oxw();e.xp6(3),e.Q6J("disabled",!n.isESCPreview),e.xp6(4),e.Q6J("disabled",!n.isPreview)}}function M(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"div",67)(1,"button",68),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.submit())}),e._uU(2,"Save"),e.qZA()()}}function w(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"div",67)(1,"button",68),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.submit())}),e._uU(2,"Reject"),e.qZA()()}}function W(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"div",69)(1,"button",68),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.submit())}),e._uU(2,"Approve"),e.qZA()()}}function ee(a,c){if(1&a){const n=e.EpF();e.TgZ(0,"div")(1,"button",68),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.navigateTo("../list",{},""))}),e._uU(2," Back "),e.qZA()()}}const l=function(a,c,n,r){return{page:a,pageSize:c,collection:n,search:r,excelDisplay:"none"}},ne=function(){return["create"]},ie=function(){return["view"]};let se=(()=>{var a;class c{constructor(r,t,s,o,f,R,v,te,ue,de,pe){this.gtRequestService=r,this.router=t,this.activatedRoute=s,this.spinner=o,this.toastService=f,this.validationService=R,this.modalService=v,this.utilityService=te,this.storageService=ue,this.exportExcelService=de,this.location=pe,this.isPreview=!1,this.isESCPreview=!1,this.page=1,this.pageSize=6,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.GTRequestDetailsArray=[],this.itemCodes=[],this.ESCPreviewArr=[],this.userData={},this.statusArr={create:"Awaiting Approval",edit:"Awaiting Approval",approve:"Approved",reject:"Rejected"},this.masterData={autoIncrementNo:"",departmentOptions:[],locationOptions:[]},this.form=new u.nJ({_id:new u.p4(null),GTRequestNo:new u.p4(null),GTRequestDate:new u.p4(null),location:new u.p4(null,[u.kI.required]),fromDepartment:new u.p4(null,[u.kI.required]),toDepartment:new u.p4(null,[u.kI.required]),fromDepartmentName:new u.p4(null),toDepartmentName:new u.p4(null),status:new u.p4("Awaiting Approval"),remarks:new u.nJ({reasonForGTRequest:new u.p4(null),jobCardReference:new u.p4(null),requestedBy:new u.p4(null)}),GTRequestDetails:new u.p4([]),rejectRemarks:new u.p4(null)})}get f(){return this.form.controls}get remarks(){return this.form.get("remarks")}ngOnInit(){this.userData=this.storageService.get("IDMSAUser"),this.getInitialData()}trackByFn(r,t){return t?._id}reset(){this.form.reset(),this.GTRequestDetailsArray=[],this.collection=this.GTRequestDetailsArray.length,this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,N))return void this.form.controls.toDepartment.disable();if("reject"==this.action&&!this.form.controls.rejectRemarks.value)return void this.toastService.warning("Rejection Remarks is Required");this.form.enable();let r=this.form.value;console.log("formData",r),0!=this.GTRequestDetailsArray?.length?(r.GTRequestDetails=this.GTRequestDetailsArray,r._id?this.update(r):(delete r._id,this.create(r))):this.toastService.warning("At least one Goods Transfer Request (Intra) Item required!")}navigateTo(r,t,s){this.router.navigate([r],{relativeTo:this.activatedRoute,queryParams:{id:t,action:s}})}create(r){this.spinner.show(),this.gtRequestService.create(r).subscribe(t=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(t.message),this.itemCodes=t.itemCodes,this.location.back(),this.openAlertMessageModal()})}update(r){this.spinner.show(),this.gtRequestService.update(r._id,r).subscribe(t=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(t.message),this.location.back()})}eventHeader(r){switch(r.key){case"SEARCH":this.search=r.value,this.page=1;break;case"EXCEL":this.exportExcelService.exportExcel((0,T.yz)(this.GTRequestDetailsArray));break;case"PAGE":this.page=r.value}}setGRQty(r){}getInitialData(){this.spinner.show(),this.gtRequestService.getAllMasterData({}).subscribe(r=>{this.masterData=r,1==this.masterData?.locationOptions?.length&&this.form.controls.location.setValue(this.masterData?.locationOptions[0]?.label),this.form.controls.GTRequestNo.setValue(this.masterData.autoIncrementNo),this.form.controls.GTRequestDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.status.setValue("Awaiting Approval"),this.activatedRoute.queryParams.pipe((0,k.z)(t=>(this.action=t.action,this.utilityService.accessDenied(this.action),t.id?this.gtRequestService.getById(t.id):(0,Q.of)({})))).subscribe(t=>{this.spinner.hide(),0!=Object.keys(t).length&&(t.GTRequestDetails&&(this.GTRequestDetailsArray=t.GTRequestDetails,this.collection=this.GTRequestDetailsArray.length),t.GTRequestDate&&(t.GTRequestDate=t?.GTRequestDate.split("T")[0]),t.status=this.statusArr[this.action],this.form.patchValue(t),"create"!=this.action&&(this.form.disable(),"reject"==this.action&&this.form.controls.rejectRemarks.enable()))})})}openAlertMessageModal(){if(this.itemCodes.length>0){const r=this.modalService.open(j.HF,{centered:!0,size:"md",backdrop:"static",keyboard:!1});r.componentInstance.action=this.action,r.componentInstance.alertMessage=`Dear GT Request Creator, it has been noticed that material you requested having Item Code No: ${this.itemCodes} are not presently available in store`,r.componentInstance.itemCodes=this.itemCodes,r.result.then(t=>{["create","edit"].includes(this.action)&&(this.itemCodes=t)},t=>{})}}setToDepartmentValid(r,t=""){let s=this.f.fromDepartment.value,o=this.f.toDepartment.value;if("From Department"==t?this.f.fromDepartmentName.setValue(r?.value):"To Department"==t&&this.f.toDepartmentName.setValue(r?.value),console.log("event",r),s==o)return this.toastService.warning("From Department should not be same as To Department "),this.GTRequestDetailsArray=[],void(this.collection=this.GTRequestDetailsArray?.length);let f={department:s,location:this.f.location.value};this.spinner.show(),this.gtRequestService.getAllItemsByLocationAndDept(f).subscribe(R=>{this.spinner.hide(),this.GTRequestDetailsArray=R.map((v,te)=>(v.GTRequestLineNumber=te+1,v)),this.collection=this.GTRequestDetailsArray?.length})}preview(){this.search="",this.isPreview=!0,this.isESCPreview=!0,this.ESCPreviewArr=this.GTRequestDetailsArray,this.GTRequestDetailsArray=this.GTRequestDetailsArray.filter(r=>r.GTRequestQty>0),this.collection=this.GTRequestDetailsArray.length}ESCPreview(){this.search="",this.isPreview=!1,this.GTRequestDetailsArray=this.ESCPreviewArr,this.collection=this.GTRequestDetailsArray.length}setConversionOfUnit(r){if(["create","edit"].includes(this.action)){let t=this.GTRequestDetailsArray.map(o=>o?.GTRequestLineNumber).indexOf(r?.GTRequestLineNumber);this.GTRequestDetailsArray[t].UOM=this.GTRequestDetailsArray[t].UOM==r.secondaryUnit?r.primaryUnit:r.secondaryUnit;let s=this.utilityService.setConversion({UOM:this.GTRequestDetailsArray[t].UOM,quantity:r.IRQty,primaryUnit:r.primaryUnit,secondaryUnit:r.secondaryUnit,primaryToSecondaryConversion:r.primaryToSecondaryConversion,secondaryToPrimaryConversion:r.secondaryToPrimaryConversion})||0;this.GTRequestDetailsArray[t].IRQty=s,this.GTRequestDetailsArray[t].GTRequestQty=0,this.isPreview=!1}}openRemarksModal(){const r=this.modalService.open(S,{centered:!0,size:"md",backdrop:"static",keyboard:!1});r.componentInstance.action=this.action,r.componentInstance.remarksDetails=this.remarks.value,r.result.then(t=>{t&&this.remarks.patchValue(t)},t=>{})}onSort({column:r,direction:t}){this.headers.forEach(s=>{s.sortable!==r&&(s.direction="")}),this.GTRequestDetailsArray=""===t||""===r?this.GTRequestDetailsArray:[...this.GTRequestDetailsArray].sort((s,o)=>{let f="string"==typeof s[r]?s[r].toLowerCase():s[r],R="string"==typeof o[r]?o[r].toLowerCase():o[r];const v=f<R?-1:f>R?1:0;return"asc"===t?v:-v})}}return(a=c).\u0275fac=function(r){return new(r||a)(e.Y36(g.pq),e.Y36(p.F0),e.Y36(p.gz),e.Y36(m.V),e.Y36(m.kl),e.Y36(Y.R),e.Y36(b.FF),e.Y36(m.tI),e.Y36(m.V1),e.Y36(m.Ol),e.Y36(i.Ye))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-gt-request-form"]],viewQuery:function(r,t){if(1&r&&e.Gf(h.j,5),2&r){let s;e.iGM(s=e.CRH())&&(t.headers=s)}},decls:76,vars:33,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-4"],[1,"col-5","pe-4"],[1,"form-label"],["type","text","formControlName","GTRequestNo","readonly","",1,"form-control"],[1,"col-7","ps-4","pe-5"],["type","date","formControlName","GTRequestDate",1,"form-control"],[1,"col-2","ps-0"],[1,"text-danger"],["bindLabel","value","bindValue","label","formControlName","location",3,"items","clearable"],[1,"col-3"],["bindLabel","label","bindValue","department","formControlName","fromDepartment",3,"items","clearable","change"],["bindLabel","label","bindValue","department","formControlName","toDepartment",3,"items","clearable","change"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","23rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","GTRequestLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","primaryUnit",3,"sort"],["sortable","IRQty",3,"sort"],["sortable","GTRequestQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"row","mb-0"],[1,"col"],[1,"col-3","pe-0"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","px-4",3,"click"],["class","col-7 pe-5",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],["class","text-end",4,"ngIf"],["class","col-5 text-end",4,"ngIf"],[4,"ngIf"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-between","px-2"],["placement","top",3,"ngbTooltip","ngClass"],[1,"pointer","d-flex","align-items-center"],["class","unit-switch-rev",3,"click",4,"ngIf"],["class","unit-switch-gray",4,"ngIf"],[1,"d-flex","justify-content-center"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],[1,"unit-switch-rev",3,"click"],[1,"unit-switch-gray"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","input","ngModelChange"],[1,"col-7","pe-5"],[1,"d-flex","align-items-center","text-nowrap"],[1,"set-flex-status","px-4"],["type","text","formControlName","rejectRemarks",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],[1,"text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"],[1,"col-5","text-end"]],template:function(r,t){1&r&&(e.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5),e.ALo(6,"titlecase"),e.qZA()()(),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",6)(11,"div",8)(12,"label",9),e._uU(13,"GT Request No."),e.qZA(),e._UZ(14,"input",10),e.qZA(),e.TgZ(15,"div",11)(16,"label",9),e._uU(17,"GT request Date"),e.qZA(),e._UZ(18,"input",12),e.qZA()()(),e.TgZ(19,"div",13)(20,"label",9),e._uU(21," Location "),e.TgZ(22,"span",14),e._uU(23,"*"),e.qZA()(),e._UZ(24,"ng-select",15),e.qZA(),e.TgZ(25,"div",16)(26,"label",9),e._uU(27," From Department "),e.TgZ(28,"span",14),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"ng-select",17),e.NdJ("change",function(o){return t.setToDepartmentValid(o,"From Department")}),e.qZA()(),e.TgZ(31,"div",16)(32,"label",9),e._uU(33," To Department "),e.TgZ(34,"span",14),e._uU(35,"*"),e.qZA()(),e.TgZ(36,"ng-select",18),e.NdJ("change",function(o){return t.setToDepartmentValid(o,"To Department")}),e.qZA()()(),e._UZ(37,"hr",19),e.TgZ(38,"app-setting-header",20),e.NdJ("dataChange",function(o){return t.eventHeader(o)}),e.qZA(),e.TgZ(39,"div",21)(40,"table",22)(41,"thead",23)(42,"tr",24)(43,"th",25),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(44,"#"),e.qZA(),e.TgZ(45,"th",26),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(46,"Item Code"),e.qZA(),e.TgZ(47,"th",27),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(48,"Item Name"),e.qZA(),e.TgZ(49,"th",28),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(50," Item Description "),e.qZA(),e.TgZ(51,"th",29),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(52,"UoM"),e.qZA(),e.TgZ(53,"th",30),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(54,"IR Qty."),e.qZA(),e.TgZ(55,"th",31),e.NdJ("sort",function(o){return t.onSort(o)}),e._uU(56,"GTR Qty."),e.qZA()()(),e.TgZ(57,"tbody"),e.YNc(58,V,28,27,"tr",32),e.ALo(59,"slice"),e.ALo(60,"searchFi1ter"),e.qZA()()(),e._UZ(61,"hr",19),e.TgZ(62,"div",33)(63,"div",34)(64,"div",6)(65,"div",35),e._UZ(66,"button",36),e.TgZ(67,"button",37),e.NdJ("click",function(){return t.openRemarksModal()}),e._uU(68," Remarks "),e.qZA()(),e.YNc(69,$,5,0,"div",38),e.qZA()(),e.TgZ(70,"div",39),e.YNc(71,X,9,2,"div",40),e.YNc(72,M,3,0,"div",41),e.YNc(73,w,3,0,"div",41),e.YNc(74,W,3,0,"div",42),e.YNc(75,ee,3,0,"div",43),e.qZA()()()()()),2&r&&(e.Q6J("formGroup",t.form),e.xp6(5),e.hij("GT Request (Intra) ",e.lcZ(6,17,t.action),""),e.xp6(19),e.Q6J("items",t.masterData.locationOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.masterData.departmentOptions)("clearable",!1),e.xp6(6),e.Q6J("items",t.masterData.departmentOptions)("clearable",!1),e.xp6(2),e.Q6J("data",e.l5B(26,l,t.page,t.pageSize,t.collection,t.search)),e.xp6(20),e.Q6J("ngForOf",e.Dn7(59,19,e.xi3(60,23,t.GTRequestDetailsArray,t.search),(t.page-1)*t.pageSize,(t.page-1)*t.pageSize+t.pageSize))("ngForTrackBy",t.trackByFn),e.xp6(11),e.Q6J("ngIf","reject"==t.action),e.xp6(2),e.Q6J("ngIf",e.DdM(31,ne).includes(t.action)),e.xp6(1),e.Q6J("ngIf","edit"==t.action),e.xp6(1),e.Q6J("ngIf","reject"==t.action),e.xp6(1),e.Q6J("ngIf","approve"==t.action),e.xp6(1),e.Q6J("ngIf",e.DdM(32,ie).includes(t.action)))},dependencies:[i.mk,i.sg,i.O5,y.P,b._L,u.Fj,u.wV,u.JJ,u.JL,u.sg,u.u,u.On,re.w9,h.j,i.OU,i.JJ,i.rS,K.G,O.S],encapsulation:2}),c})();var oe=d(19964),ae=d(56208);const le=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:E},{path:"form",component:se,resolve:{accessScreen:oe.xr}}];let ce=(()=>{var a;class c{}return(a=c).\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[i.ez,p.Bz.forChild(le),ae.m]}),c})()},13107:(J,_,d)=>{d.d(_,{t:()=>i});const i={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(J,_,d)=>{d.d(_,{J:()=>i});const i=({data:p,headers:h,widths:q,title:T})=>({tableData:{widths:q,headerRows:1,body:[h.map(g=>({text:g.header,style:"header"})),...p.map(g=>h.map(y=>({style:"subheader",text:g[y.key]})))]},title:T})},34183:(J,_,d)=>{d.d(_,{yz:()=>Y,oO:()=>m,rv:()=>e,cY:()=>ee,ho:()=>W,R6:()=>H,M5:()=>B,MO:()=>$,GF:()=>V,YJ:()=>P,kQ:()=>I,Y3:()=>j,Wb:()=>Q,i4:()=>D,mU:()=>L});var i=d(13107),p=d(28402);let h=["*","*","*","*","*","*","*","*"],q="Goods Requisition",T=[{header:"GR No.",key:"GRNumber",...i.t},{header:"GR Date",key:"GRDateS",...i.t},{header:"Location (Store)",key:"deliveryLocation",...i.t},{header:"Department",key:"department",...i.t},{header:"Remarks/Order Reference",key:"salesOrderSKUReference",...i.t},{header:"Status",key:"GRStatus",...i.t}];const e=l=>({title:q,csvData:l,headers:T}),m=l=>(0,p.J)({data:l,headers:T,widths:h,title:q});let g=["*","*","*","*","*","*","*","*"],y="Child Part Production",C=[{header:"Process Name",key:"processName",...i.t},{header:"Machine Name",key:"machineName",...i.t},{header:"Prod. Date",key:"productionDate",...i.t},{header:"Shift",key:"productionShift",...i.t},{header:"Operating Staff",key:"operatingStaff",...i.t},{header:"Remarks",key:"remarks",...i.t},{header:"Status",key:"status",...i.t}];const I=l=>({title:y,csvData:l,headers:C}),P=l=>(0,p.J)({data:l,headers:C,widths:g,title:y});let E=["*","*","*","*","*","*","*","*"],u="Gr. Child Part Production",k=[{header:"Process Name",key:"processName",...i.t},{header:"Machine Name",key:"machineName",...i.t},{header:"Prod. Date",key:"productionDate",...i.t},{header:"Shift",key:"productionShift",...i.t},{header:"Operating Staff",key:"operatingStaff",...i.t},{header:"Remarks",key:"remarks",...i.t},{header:"Status",key:"status",...i.t}];const Q=l=>({title:u,csvData:l,headers:k}),j=l=>(0,p.J)({data:l,headers:k,widths:E,title:u});let b=["*","*","*","*","*","*","*","*"],Z="SKU Production",U=[{header:"Process Name",key:"processName",...i.t},{header:"Machine Name",key:"machineName",...i.t},{header:"Prod. Date",key:"productionDate",...i.t},{header:"Shift",key:"productionShift",...i.t},{header:"Operating Staff",key:"operatingStaff",...i.t},{header:"Remarks",key:"remarks",...i.t},{header:"Status",key:"status",...i.t}];const L=l=>({title:Z,csvData:l,headers:U}),D=l=>(0,p.J)({data:l,headers:U,widths:b,title:Z});let N=[{header:"#",key:"GRLineNumber",...i.t},{header:"Item Code",key:"itemCode",...i.t},{header:"Item Name",key:"itemName",...i.t},{header:"Item Description",key:"itemDescription",...i.t},{header:"Conversion Of Units",key:"conversionOfUnits",...i.t},{header:"UoM",key:"primaryUnit",...i.t},{header:"IR Qty.",key:"closedIRQty",...i.t},{header:"GR Qty.",key:"GRQty",...i.t}];const Y=l=>({title:"Goods Requisition",csvData:l,headers:N});let K=["*","*","*","*","*","*","*","*"],O="Ink Mixing",x=[{header:"JC No.",key:"jobCardNo",...i.t},{header:"F20 Ink Code",key:"itemCode",...i.t},{header:"F20 Ink Name",key:"itemName",...i.t},{header:"F20 Ink Description",key:"itemDescription",...i.t},{header:"UoM",key:"UOM",...i.t},{header:"Batch Qty.",key:"batchQty",...i.t},{header:"Batch Date",key:"batchDate",...i.t},{header:"Log Book Ref",key:"logBookRef",...i.t}];const B=l=>({title:O,csvData:l,headers:x}),H=l=>(0,p.J)({data:l,headers:x,widths:K,title:O});let z=["*","*","*","*","*","*","*"],F="Job Card Entry",G=[{header:"Job Card No",key:"jobCardNo",...i.t},{header:"SKU No",key:"SKUNo",...i.t},{header:"SKU Name",key:"SKUName",...i.t},{header:"SKU Description",key:"SKUDescription",...i.t},{header:"UoM",key:"UOM",...i.t},{header:"Batch I/P Qty.",key:"totalBatchQuantity",...i.t},{header:"Batch O/P Qty.",key:"batchOutputQty",...i.t},{header:"Batch Number",key:"batchNumber",...i.t},{header:"Status",key:"status",...i.t}];const V=l=>({title:F,csvData:l,headers:G}),$=l=>(0,p.J)({data:l,headers:G,widths:z,title:F});let X=["*","*","*","*","*","*"],M="Goods Transfer Request (Intra) Report",w=[{header:"GT Req #",key:"GTRequestNo",...i.t},{header:"GT Request Dt.",key:"GTRequestDate",...i.t},{header:"Location",key:"location",...i.t},{header:"From Department",key:"fromDepartment",...i.t},{header:"To Department",key:"toDepartment",...i.t},{header:"Status",key:"status",...i.t}];const W=l=>({title:M,csvData:l,headers:w}),ee=l=>(0,p.J)({data:l,headers:w,widths:X,title:M})}}]);