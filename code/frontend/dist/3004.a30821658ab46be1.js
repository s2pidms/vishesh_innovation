"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3004],{18252:(f,d,l)=>{l.r(d),l.d(d,{JobCardOutputModule:()=>st});var c=l(96814),m=l(1076),g=l(43818),C=l(25116),b=l(94912),t=l(65879),p=l(2742),_=l(23396),Z=l(88059),T=l(37285),M=l(53421);const U=function(){return["Approved","Mark As Completed"]},x=function(){return["In-Process","Mark As Completed"]};function S(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",21,22)(7,"span",23),t._uU(8),t.qZA()(),t.TgZ(9,"td",21,24)(11,"span",23),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td")(22,"div",25),t._UZ(23,"button",26),t.TgZ(24,"div",27)(25,"a",28),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"view"))}),t._UZ(26,"i",29),t._uU(27," View "),t.qZA(),t.TgZ(28,"a",28),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"edit"))}),t._UZ(29,"i",30),t._uU(30," Edit "),t.qZA(),t.TgZ(31,"a",28),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"approve"))}),t._UZ(32,"i",31),t._uU(33," Approve (QA) "),t.qZA(),t.TgZ(34,"a",28),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.update(n,"Report Generated",n._id))}),t._UZ(35,"img",32),t._uU(36," Generate Report "),t.qZA()()()()()}if(2&a){const i=u.$implicit,o=t.MAs(6),e=t.MAs(10),n=t.oxw();t.xp6(2),t.Oqu(null==i?null:i.jobCardNo),t.xp6(2),t.Oqu(i.SKUNo),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",i.SKUName),t.xp6(1),t.hij(" ",i.SKUName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("positionTarget",e)("ngbTooltip",i.SKUDescription),t.xp6(1),t.hij(" ",i.SKUDescription," "),t.xp6(2),t.Oqu(i.batchDate),t.xp6(2),t.Oqu(i.batchInputQty),t.xp6(2),t.Oqu(i.batchOutputQty),t.xp6(2),t.Oqu(i.status),t.xp6(5),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable",t.DdM(26,U).includes(i.status)||n.productionItemId!=n.menuItemId),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable","Approved"==(null==i?null:i.status)||n.productionItemId==n.menuItemId),t.Q6J("accessType",n.rolePermissionActions.approveAction),t.xp6(3),t.ekj("disable",t.DdM(27,x).includes(i.status)||n.productionItemId!=n.menuItemId),t.Q6J("accessType",n.rolePermissionActions.generateReportAction)}}const I=function(a,u,i,o){return{page:a,pageSize:u,collection:i,search:o,type:"list"}};let N=(()=>{var a;class u{constructor(o,e,n,s,O,D,J,A){this.exportExcelService=o,this.router=e,this.spinner=n,this.activatedRoute=s,this.jobCardOutputService=O,this.exportToPDFService=D,this.appGlobalService=J,this.toastService=A,this.page=1,this.pageSize=8,this.collection=0,this.column="jobCardNo",this.direction=1,this.search="",this.tableData=[],this.menuItemId="",this.productionItemId="64a6c1e33339d4dc9d8141a8",this.rolePermissionActions=C.a1}ngOnInit(){this.menuItemId=this.appGlobalService.menuItemId,this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}getAll(o=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.jobCardOutputService.getAll(n).subscribe(s=>{"EXCEL"==e?this.excelDownload(s.rows):"PDF"==e?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}update(o,e,n){"Approved"==o.status&&this.productionItemId==this.menuItemId&&(this.spinner.show(),this.jobCardOutputService.update(n,{status:e}).subscribe(s=>{this.toastService.success(s.message),this.getAll(),this.spinner.hide()}))}navigateTo(o,e,n){if(["Approved","Mark As Completed"].includes(e.status)&&["edit"].includes(n)||this.productionItemId!=this.menuItemId&&["edit"].includes(n)||this.productionItemId==this.menuItemId&&["approve"].includes(n)||["Approved"].includes(e.status)&&["approve"].includes(n))return null;this.router.navigate([o],{relativeTo:this.activatedRoute,queryParams:{id:e._id,action:n}})}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}trackByFn(o,e){return e?._id}pdfDownload(o){let e=(0,b.WT)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,b.vy)(o))}onSort({column:o,direction:e}){this.headers.forEach(n=>{n.sortable!==o&&(n.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}}return(a=u).\u0275fac=function(o){return new(o||a)(t.Y36(p.Ol),t.Y36(m.F0),t.Y36(p.V),t.Y36(m.gz),t.Y36(_.L6),t.Y36(p.$L),t.Y36(p.P0),t.Y36(p.kl))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-job-card-output-list"]],viewQuery:function(o,e){if(1&o&&t.Gf(g.j,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],[1,"plusIconSvg","btn","btn-primary","me-1"],["type","button",1,"btn","btn-primary","btn-add","px-5",3,"click"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-secondary"],[1,"text-white"],["sortable","jobCardNo",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","batchDate",3,"sort"],["sortable","batchInputQty",3,"sort"],["sortable","batchOutputQty",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["SKUDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-check","fa-lg","text-success"],["src","./assets/images/new.svg","width","16",1,"me-2"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Job Card Output Summary"),t.qZA()(),t.TgZ(4,"div",3),t._UZ(5,"button",4),t.TgZ(6,"button",5),t.NdJ("click",function(){return e.navigateTo("../form",{},"create")}),t._uU(7," Job Card Output "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return e.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(15,"JC No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(17,"SKU No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(19,"SKU Name"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(21,"SKU Description"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(23,"Batch Date"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(25,"Input Qty"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(27,"Output Qty"),t.qZA(),t.TgZ(28,"th",19),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,S,37,28,"tr",20),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,I,e.page,e.pageSize,e.collection,e.search)),t.xp6(23),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[c.sg,Z.P,T._L,g.j,M.J],encapsulation:2}),u})();var r=l(60095),w=l(21631),q=l(22096);function k(a,u){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,null==i?null:i.inspectionDate,"dd-MM-YYYY")," ")}}const v=function(){return{standalone:!0}};function R(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"input",40),t.NdJ("ngModelChange",function(e){t.CHM(i);const n=t.oxw().$implicit;return t.KtG(n.inspectionDate=e)}),t.qZA()}if(2&a){const i=t.oxw().$implicit;t.Q6J("ngModel",i.inspectionDate)("ngModelOptions",t.DdM(2,v))}}function Q(a,u){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==i?null:i.outputQty," ")}}function F(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"input",41),t.NdJ("ngModelChange",function(e){t.CHM(i);const n=t.oxw().$implicit;return t.KtG(n.outputQty=e)})("input",function(){t.CHM(i);const e=t.oxw(2);return t.KtG(e.setOutputQty())}),t.qZA()}if(2&a){const i=t.oxw().$implicit;t.Q6J("ngModel",i.outputQty)("ngModelOptions",t.DdM(2,v))}}function Y(a,u){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==i?null:i.inspectedBy," ")}}function L(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"input",42),t.NdJ("ngModelChange",function(e){t.CHM(i);const n=t.oxw().$implicit;return t.KtG(n.inspectedBy=e)}),t.qZA()}if(2&a){const i=t.oxw().$implicit;t.Q6J("ngModel",i.inspectedBy)("ngModelOptions",t.DdM(2,v))}}function j(a,u){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const i=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==i?null:i.QCApprovedBy," ")}}function K(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"input",42),t.NdJ("ngModelChange",function(e){t.CHM(i);const n=t.oxw().$implicit;return t.KtG(n.QCApprovedBy=e)}),t.qZA()}if(2&a){const i=t.oxw().$implicit;t.Q6J("ngModel",i.QCApprovedBy)("ngModelOptions",t.DdM(2,v))}}const h=function(){return["approve","view","generate"]};function B(a,u){if(1&a&&(t.TgZ(0,"tr",34)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",35),t.YNc(5,k,3,4,"span",36),t.YNc(6,R,1,3,"input",37),t.qZA()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"div",35),t.YNc(11,Q,2,1,"span",36),t.YNc(12,F,1,3,"input",38),t.qZA()(),t.TgZ(13,"td")(14,"div",35),t.YNc(15,Y,2,1,"span",36),t.YNc(16,L,1,3,"input",39),t.qZA()(),t.TgZ(17,"td")(18,"div",35),t.YNc(19,j,2,1,"span",36),t.YNc(20,K,1,3,"input",39),t.qZA()()()),2&a){const i=u.$implicit,o=u.index,e=t.oxw();t.xp6(2),t.Oqu(o+1),t.xp6(3),t.Q6J("ngIf",t.DdM(10,h).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(11,h).includes(e.action)),t.xp6(2),t.Oqu(i.UOM),t.xp6(3),t.Q6J("ngIf",t.DdM(12,h).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(13,h).includes(e.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(14,h).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(15,h).includes(e.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(16,h).includes(e.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(17,h).includes(e.action))}}function E(a,u){if(1&a&&(t.TgZ(0,"option",43),t._uU(1),t.qZA()),2&a){const i=u.$implicit;t.Q6J("value",i.value),t.xp6(1),t.hij(" ",i.label," ")}}const y=function(){return["approve","rejection","view","generate","cancel"]};let P=(()=>{var a;class u{constructor(o,e,n){this.activeModal=o,this.toastService=e,this.utilityService=n,this.outputDetailsList=[],this.locationOptions=[],this.action="",this.UOM="",this.cumulativeCount="",this.location=null,this.MRNMaterialInspectionArr=[]}trackByFn(o,e){return e?._id}ngOnInit(){}deleteTableRow(){!["view","approve"].includes(this.action)&&this.outputDetailsList.length>1&&(this.outputDetailsList.pop(),this.calTotalCumulativeCount())}addTableRow(){["view","approve"].includes(this.action)||this.outputDetailsList.push({inspectionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),UOM:this.UOM,outputQty:0,inspectedBy:"",QCApprovedBy:""})}setOutputQty(){this.calTotalCumulativeCount()}calTotalCumulativeCount(){let o=this.outputDetailsList.map(e=>e.outputQty||0).reduce((e,n)=>+e+ +n,0);this.cumulativeCount=+o.toFixed(2)}dismissModel(){this.location?this.activeModal.close({outputDetailsList:this.outputDetailsList,cumulativeCount:this.cumulativeCount,location:this.location}):this.toastService.warning("Location is required !")}}return(a=u).\u0275fac=function(o){return new(o||a)(t.Y36(T.Kz),t.Y36(p.kl),t.Y36(p.tI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-job-card-output-details"]],inputs:{outputDetailsList:"outputDetailsList",locationOptions:"locationOptions",action:"action",UOM:"UOM",cumulativeCount:"cumulativeCount",location:"location"},decls:59,vars:12,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","mt-4"],[1,"row"],[1,"col-12","px-5"],[1,"table-responsive",2,"min-height","22rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white","border-0"],["class","border-0",4,"ngFor","ngForOf","ngForTrackBy"],[1,"border-0","seperator-row"],["colspan","6",1,"border-0"],[1,"add-icon"],["src","./assets/new_icons/add_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"minus-icon"],["src","./assets/new_icons/delete_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"row","mt-4"],[1,"col","px-0"],[1,"line-border","mt-0"],[1,"row","px-4","mb-3"],[1,"col-9"],[1,"col-6","pe-0","d-flex"],[1,"form-label","text-nowrap","mt-1"],[1,"ms-1","me-2"],["type","text","readonly","",1,"form-control",3,"disabled","ngModel","ngModelChange"],[1,"col-6","d-flex"],[1,"form-select",3,"disabled","ngModel","ngModelChange"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],[1,"col-3","pe-4","d-flex","justify-content-end"],["type","button",1,"btn","btn-primary","px-4",3,"disabled","click"],[1,"border-0"],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-sm w-25","type","date",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","ngModelChange","input",4,"ngIf"],["class","form-control form-control-sm w-25","type","text",3,"ngModel","ngModelOptions","ngModelChange",4,"ngIf"],["type","date",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange","input"],["type","text",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Output Details"),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return e.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th"),t._uU(15,"SN"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Inspection Date"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"UoM"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Output Qty"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Inspected By"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"QC Approved By"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,B,21,18,"tr",12),t.TgZ(28,"tr",13)(29,"td",14)(30,"div",15)(31,"img",16),t.NdJ("click",function(){return e.addTableRow()}),t.qZA()()(),t.TgZ(32,"td",14)(33,"div",17)(34,"img",18),t.NdJ("click",function(){return e.deleteTableRow()}),t.qZA()()()()()()()()(),t.TgZ(35,"div",19)(36,"div",20),t._UZ(37,"hr",21),t.qZA()(),t.TgZ(38,"div",22)(39,"div",23)(40,"div",6)(41,"div",24)(42,"label",25),t._uU(43,"Cumulative Count "),t.TgZ(44,"span",26),t._uU(45,"\u25b6"),t.qZA()(),t.TgZ(46,"input",27),t.NdJ("ngModelChange",function(s){return e.cumulativeCount=s}),t.qZA()(),t.TgZ(47,"div",28)(48,"label",25),t._uU(49," Location "),t.TgZ(50,"span",26),t._uU(51,"\u25b6"),t.qZA()(),t.TgZ(52,"select",29),t.NdJ("ngModelChange",function(s){return e.location=s}),t.TgZ(53,"option",30),t._uU(54,"Select Location"),t.qZA(),t.YNc(55,E,2,2,"option",31),t.qZA()()()(),t.TgZ(56,"div",32)(57,"button",33),t.NdJ("click",function(){return e.dismissModel()}),t._uU(58," Save & close "),t.qZA()()()()()),2&o&&(t.xp6(27),t.Q6J("ngForOf",e.outputDetailsList)("ngForTrackBy",e.trackByFn),t.xp6(19),t.Q6J("disabled",t.DdM(9,y).includes(e.action))("ngModel",e.cumulativeCount),t.xp6(6),t.Q6J("disabled",t.DdM(10,y).includes(e.action))("ngModel",e.location),t.xp6(1),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",e.locationOptions),t.xp6(2),t.Q6J("disabled",t.DdM(11,y).includes(e.action)))},dependencies:[c.sg,c.O5,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.On,c.uU],styles:[".seperator-row[_ngcontent-%COMP%]{position:relative}.seperator-row[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%]{position:absolute;left:-1.2rem;top:-.9rem}.seperator-row[_ngcontent-%COMP%]   .minus-icon[_ngcontent-%COMP%]{position:absolute;right:.1rem;top:-.9rem}"]}),u})();var G=l(3959),$=l(16897),H=l(50363),V=l(84231);function z(a,u){1&a&&t._UZ(0,"div",34)}function X(a,u){1&a&&t._UZ(0,"div",35)}function W(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"div",36)(1,"button",37),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",38),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.submit())}),t._uU(4,"Save"),t.qZA()()}}function tt(a,u){if(1&a){const i=t.EpF();t.TgZ(0,"div",36)(1,"button",38),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.submit())}),t._uU(2,"Approve"),t.qZA()()}}const et=function(){return["create","edit"]};let ot=(()=>{var a;class u{constructor(o,e,n,s,O,D,J,A){this.activatedRoute=o,this.spinner=e,this.toastService=n,this.jobCardOutputService=s,this.validationService=O,this.utilityService=D,this.modalService=J,this.location=A,this.submitted=!1,this.action="create",this.masterData={autoIncrementNo:"",jobCardDetails:[],location:[]},this.outputDetailsList=[{inspectionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),UOM:"",outputQty:0,inspectedBy:"",QCApprovedBy:""}],this.form=new r.nJ({_id:new r.p4(null),jobCardOutputNo:new r.p4(null),jobCard:new r.p4(null,[r.kI.required]),jobCardNo:new r.p4(null),SKU:new r.p4(null),SKUNo:new r.p4(null),SKUName:new r.p4(null),SKUDescription:new r.p4(null),batchDate:new r.p4(null),approvedDate:new r.p4(null),UOM:new r.p4(null),batchInputQty:new r.p4(null),batchOutputQty:new r.p4(null,[r.kI.required]),outputDetails:new r.p4([]),cumulativeCount:new r.p4(null),location:new r.p4(null),manufacturingDate:new r.p4(null),batchNumber:new r.p4(null),status:new r.p4("In-Process")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}reset(){this.form.reset(),this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,G.sg))return;if(+this.f.batchOutputQty.value>+this.f.batchInputQty.value)return this.toastService.warning("Batch output qty can\u2019t be more than Batch Input qty"),void this.f.batchOutputQty.setValue(null);"approve"==this.action&&this.f.status.setValue("Approved"),this.form.enable();let o=this.form.value;o.outputDetails=this.outputDetailsList,o._id?this.update(o):(delete o._id,this.create(o))}create(o){this.spinner.show(),this.jobCardOutputService.create(o).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.location.back()})}update(o){this.spinner.show(),this.jobCardOutputService.update(o._id,o).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.location.back()})}getInitialData(){this.spinner.show(),this.jobCardOutputService.getAllMasterData({}).subscribe(o=>{this.masterData=o,this.form.controls.status.setValue("In-Process"),this.form.controls.jobCardOutputNo.setValue(this.masterData.autoIncrementNo),this.activatedRoute.queryParams.pipe((0,w.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.jobCardOutputService.getById(e.id):(0,q.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.batchDate&&(e.batchDate=this.utilityService.getFormatDate(e.batchDate,"YYYY-MM-DD")),e.outputDetails&&(this.outputDetailsList=e.outputDetails.map(n=>(n.inspectionDate=this.utilityService.getFormatDate(n.inspectionDate,"YYYY-MM-DD"),n))),this.form.patchValue(e),this.f.jobCard.disable(),["view","approve"].includes(this.action)&&this.form.disable())})})}setJobCardDetails(o){this.f.jobCard.setValue(o?._id),this.f.jobCardNo.setValue(o?.jobCardNo),this.spinner.show(),this.jobCardOutputService.getJCDetailsByJCId(o?._id).subscribe(e=>{this.spinner.hide(),this.form.patchValue(e),this.outputDetailsList.map(n=>(n.UOM=e?.UOM,n))})}openOutputDetailsModal(){const o=this.modalService.open(P,{centered:!0,size:"lg",backdrop:"static",keyboard:!1});o.componentInstance.action=this.action,o.componentInstance.locationOptions=this.masterData.location,o.componentInstance.outputDetailsList=this.outputDetailsList,o.componentInstance.UOM=this.f.UOM.value,o.componentInstance.cumulativeCount=this.f.cumulativeCount.value,o.componentInstance.location=this.f.location.value,o.result.then(e=>{e&&(this.f.location.setValue(e?.location),this.f.batchOutputQty.setValue(e?.cumulativeCount),this.f.cumulativeCount.setValue(e?.cumulativeCount),this.outputDetailsList=e?.outputDetailsList,+this.f.batchOutputQty.value>+this.f.batchInputQty.value&&(this.toastService.warning("Batch output qty can\u2019t be more than Batch Input qty"),this.f.batchOutputQty.setValue(null)))},e=>{})}}return(a=u).\u0275fac=function(o){return new(o||a)(t.Y36(m.gz),t.Y36(p.V),t.Y36(p.kl),t.Y36(_.L6),t.Y36($.RJ),t.Y36(p.tI),t.Y36(T.FF),t.Y36(c.Ye))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-job-card-output-form"]],decls:72,vars:16,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,"form-body"],[1,"row","mb-4"],[1,"col-md-3"],[1,"form-label"],[1,"text-danger"],["bindLabel","jobCardNo","bindValue","_id","formControlName","jobCard",3,"items","clearable","change"],["type","text","formControlName","SKUNo","readonly","",1,"form-control"],["type","text","formControlName","SKUName","readonly","",1,"form-control"],["type","text","formControlName","SKUDescription","readonly","",1,"form-control"],[1,"row"],["type","date","formControlName","batchDate","readonly","",1,"form-control"],["type","text","readonly","",1,"form-control",3,"value"],["type","text","formControlName","batchInputQty","readonly","",1,"form-control"],[1,"col-3"],[1,"form-label","d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"disabled","click"],["type","number","formControlName","batchOutputQty","readonly","",1,"form-control"],[1,"row","line-border","my-4"],[1,"row","my-4"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],["value","In-Process"],["value","Mark As Completed"],[1,"input-group-text","statusSpanHeight"],["class","statusYellow",4,"ngIf"],["class","statusActive",4,"ngIf"],["class","col-9 text-end",4,"ngIf"],[1,"statusYellow"],[1,"statusActive"],[1,"col-9","text-end"],["type","button",1,"btn","btn-primary","px-5","me-5",3,"click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),t._uU(11," Job Card No. "),t.TgZ(12,"span",8),t._uU(13,"*"),t.qZA()(),t.TgZ(14,"ng-select",9),t.NdJ("change",function(s){return e.setJobCardDetails(s)}),t.qZA()(),t.TgZ(15,"div",6)(16,"label",7),t._uU(17," SKU No. "),t._UZ(18,"span",8),t.qZA(),t._UZ(19,"input",10),t.qZA(),t.TgZ(20,"div",6)(21,"label",7),t._uU(22," SKU Name "),t._UZ(23,"span",8),t.qZA(),t._UZ(24,"input",11),t.qZA(),t.TgZ(25,"div",6)(26,"label",7),t._uU(27," SKU Description "),t._UZ(28,"span",8),t.qZA(),t._UZ(29,"input",12),t.qZA()(),t.TgZ(30,"div",13)(31,"div",6)(32,"label",7),t._uU(33," Batch Date "),t._UZ(34,"span",8),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"div",6)(37,"label",7),t._uU(38," UoM "),t._UZ(39,"span",8),t.qZA(),t._UZ(40,"input",15),t.ALo(41,"SalesUOMUnitMaster"),t.qZA(),t.TgZ(42,"div",6)(43,"label",7),t._uU(44," Batch Input Qty"),t._UZ(45,"span",8),t.qZA(),t._UZ(46,"input",16),t.qZA(),t.TgZ(47,"div",17)(48,"label",18),t._uU(49," Batch Output Qty "),t.TgZ(50,"button",19),t.NdJ("click",function(){return e.openOutputDetailsModal()}),t._uU(51," Output Details "),t.qZA()(),t._UZ(52,"input",20),t.qZA()()(),t._UZ(53,"hr",21),t.TgZ(54,"div",22)(55,"div",17)(56,"div",23)(57,"div",24)(58,"button",25),t._uU(59,"Status"),t.qZA()(),t.TgZ(60,"select",26)(61,"option",27),t._uU(62,"Select Status"),t.qZA(),t.TgZ(63,"option",28),t._uU(64,"In-Process"),t.qZA(),t.TgZ(65,"option",29),t._uU(66,"Mark As Completed"),t.qZA()(),t.TgZ(67,"span",30),t.YNc(68,z,1,0,"div",31),t.YNc(69,X,1,0,"div",32),t.qZA()()(),t.YNc(70,W,5,0,"div",33),t.YNc(71,tt,3,0,"div",33),t.qZA()()()),2&o&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij(" Job Card Output (",t.lcZ(6,11,e.action),")"),t.xp6(9),t.Q6J("items",e.masterData.jobCardDetails)("clearable",!1),t.xp6(26),t.s9C("value",t.lcZ(41,13,e.form.controls.UOM.value)),t.xp6(10),t.Q6J("disabled",!e.f.jobCard.value),t.xp6(11),t.Q6J("value",null),t.xp6(7),t.Q6J("ngIf","In-Process"==e.form.value.status),t.xp6(1),t.Q6J("ngIf","Mark As Completed"==e.form.value.status),t.xp6(1),t.Q6J("ngIf",t.DdM(15,et).includes(e.action)),t.xp6(1),t.Q6J("ngIf","approve"==e.action))},dependencies:[c.O5,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.sg,r.u,H.w9,c.rS,V.Q],encapsulation:2}),u})();var nt=l(19964),it=l(56208);const at=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:N},{path:"form",component:ot,resolve:{accessScreen:nt.xr}}];let st=(()=>{var a;class u{}return(a=u).\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(at),it.m]}),u})()},13107:(f,d,l)=>{l.d(d,{t:()=>c});const c={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}}},28402:(f,d,l)=>{l.d(d,{J:()=>c});const c=({data:m,headers:g,widths:C,title:b})=>({tableData:{widths:C,headerRows:1,body:[g.map(_=>({text:_.header,style:"header"})),...m.map(_=>g.map(Z=>({style:"subheader",text:_[Z.key]})))]},title:b})},68922:(f,d,l)=>{l.d(d,{T:()=>c});const c=[{message:"Location is Required",key:"deliveryLocation"}]},3959:(f,d,l)=>{l.d(d,{Gu:()=>C,kq:()=>g,JH:()=>m,Nh:()=>b,m5:()=>_,sg:()=>t}),l(68922);const m=[{message:"SKU No. is Required",key:"SKUId"},{message:"FGIN Quantity is Required",key:"FGINQuantity"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Manufacturing Date is Required",key:"manufacturingDate"},{message:"Batch No. is Required",key:"batchNo"}],g=[{message:"SKU No. is Required",key:"SKU"},{message:"SKU Description is Required",key:"SKUDescription"},{message:"Correction Category is Required",key:"correctionCategory"},{message:"Source Batch (From) is Required",key:"sourceBatch"}],C=[{message:"Process Name is Required",key:"processName"},{message:"Machine Name is Required",key:"machineName"},{message:"Production Date is Required",key:"productionDate"},{message:"Production Shift is Required",key:"productionShift"}],b=[{message:"Item Code is Required",key:"itemCode"},{message:"Item Name is Required",key:"itemName"},{message:"Item Description is Required",key:"itemDescription"},{message:"UoM is Required",key:"UoM"}],t=[{message:"Job Card No. is Required",key:"jobCard"},{message:"Batch Output Qty is Required",key:"batchOutputQty"}],_=[{message:"Job Card No. is Required",key:"jobCard"}]}}]);