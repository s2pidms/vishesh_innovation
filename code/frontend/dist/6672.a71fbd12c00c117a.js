"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6672],{56672:(ut,M,d)=>{d.r(M),d.d(M,{JcEntryModule:()=>pt});var c=d(96814),v=d(1076),_=d(43818),b=d(25116),J=d(83110),t=d(65879),p=d(99328),Z=d(79475),A=d(88059),C=d(37285),I=d(53421),S=d(14906),T=d(84231);const P=function(){return["In-Process"]};function x(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",22,23)(7,"span",24),t._uU(8),t.qZA()(),t.TgZ(9,"td",22,25)(11,"span",24),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"SalesUOMUnitMaster"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td")(25,"div",26),t._UZ(26,"button",27),t.TgZ(27,"div",28)(28,"a",29),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"view"))}),t._UZ(29,"i",30),t._uU(30," View "),t.qZA(),t.TgZ(31,"a",29),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"edit"))}),t._UZ(32,"i",31),t._uU(33," Edit "),t.qZA(),t.TgZ(34,"a",29),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.update(n,"Report Generated",n._id))}),t._UZ(35,"img",32),t._uU(36," Generate Report "),t.qZA()()()()()}if(2&r){const i=l.$implicit,o=t.MAs(6),e=t.MAs(10),n=t.oxw();t.xp6(2),t.Oqu(null==i?null:i.jobCardNo),t.xp6(2),t.Oqu(null==i?null:i.SKUNo),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.SKUName)("positionTarget",o),t.xp6(1),t.hij(" ",i.SKUName," "),t.xp6(1),t.Udp("width",e.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.SKUDescription)("positionTarget",e),t.xp6(1),t.hij(" ",i.SKUDescription," "),t.xp6(2),t.Oqu(t.lcZ(15,24,null==i?null:i.UOM)),t.xp6(3),t.Oqu(null==i?null:i.totalBatchQuantity),t.xp6(2),t.Oqu(i.batchOutputQty),t.xp6(2),t.Oqu(i.batchNumber),t.xp6(2),t.Oqu(null==i?null:i.status),t.xp6(5),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Mark As Completed"===(null==i?null:i.status)),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.ekj("disable",t.DdM(26,P).includes(i.status)),t.Q6J("accessType",n.rolePermissionActions.generateReportAction)}}const U=function(r,l,i,o){return{page:r,pageSize:l,collection:i,search:o,type:"list"}};let E=(()=>{var r;class l{constructor(o,e,n,s,u,f,g,y){this.exportExcelService=o,this.jcEntryService=e,this.spinner=n,this.activatedRoute=s,this.exportToPDFService=u,this.utilityService=f,this.toastService=g,this.router=y,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.rolePermissionActions=b.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(o,e,n){if("Mark As Completed"==e?.status&&"edit"==n)return null;this.router.navigate([o],{relativeTo:this.activatedRoute,queryParams:{id:e?._id,action:n}})}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=o.value,this.getAll()}}trackByFn(o,e){return e?._id}getAll(o=!1,e=""){this.spinner.show();let n={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:o};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.jcEntryService.getAll(n).subscribe(s=>{"EXCEL"==e?this.excelDownload(s.rows):"PDF"==e?this.pdfDownload(s.rows):(this.tableData=s.rows,this.collection=s.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}pdfDownload(o){let e=(0,J.MO)(o);this.exportToPDFService.generatePdf(e.tableData,e.title)}excelDownload(o){this.exportExcelService.exportExcel((0,J.GF)(o))}update(o,e,n){["Mark As Completed"].includes(o.status)&&(this.spinner.show(),this.jcEntryService.update(n,{status:e}).subscribe(s=>{this.toastService.success(s.message),this.getAll(),this.spinner.hide()}))}onSort({column:o,direction:e}){this.headers.forEach(n=>{n.sortable!==o&&(n.direction="")}),this.column=o,this.direction="asc"==e?1:-1,this.getAll()}}return(r=l).\u0275fac=function(o){return new(o||r)(t.Y36(p.Ol),t.Y36(Z.US),t.Y36(p.V),t.Y36(v.gz),t.Y36(p.$L),t.Y36(p.tI),t.Y36(p.kl),t.Y36(v.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-jc-entry-list"]],viewQuery:function(o,e){if(1&o&&t.Gf(_.j,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:38,vars:15,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","jobCardNo",3,"sort"],["sortable","SKUNo",3,"sort"],["sortable","SKUName",1,"text-start",3,"sort"],["sortable","SKUDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","totalBatchQuantity",3,"sort"],["sortable","batchOutputQty",3,"sort"],["sortable","batchNumber",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["SKUName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["SKUDescription",""],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["src","./assets/images/new.svg","width","16",1,"me-2"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Job Card Entry Summary"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return e.navigateTo("../form",{},"create")}),t._UZ(6,"i",5),t._uU(7," Job Card Entry "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return e.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(15,"Job Card No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(17,"SKU No."),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(19),t.ALo(20,"labelTranslate"),t.qZA(),t.TgZ(21,"th",15),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(22),t.ALo(23,"labelTranslate"),t.qZA(),t.TgZ(24,"th",16),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(25,"UoM"),t.qZA(),t.TgZ(26,"th",17),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(27,"Batch I/P Qty."),t.qZA(),t.TgZ(28,"th",18),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(29,"Batch O/P Qty."),t.qZA(),t.TgZ(30,"th",19),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(31,"Batch Number"),t.qZA(),t.TgZ(32,"th",20),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(33,"Status"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Action"),t.qZA()()(),t.TgZ(36,"tbody"),t.YNc(37,x,37,27,"tr",21),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",e.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(10,U,e.page,e.pageSize,e.collection,e.search)),t.xp6(9),t.hij(" ",t.lcZ(20,6,"SKU Name")," "),t.xp6(3),t.hij(" ",t.lcZ(23,8,"SKU Description")," "),t.xp6(15),t.Q6J("ngForOf",e.tableData)("ngForTrackBy",e.trackByFn))},dependencies:[c.sg,A.P,C._L,_.j,I.J,S.c,T.Q],encapsulation:2}),l})();var a=d(60095),N=d(21631),Q=d(22096),w=d(61441),L=d(3959),q=d(74834),D=d(50363);const m=function(){return["view","approve"]},k=function(){return{standalone:!0}};function O(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"div",35)(1,"div",9)(2,"div",10)(3,"div",36)(4,"input",37),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.seq=e)}),t.qZA()(),t.TgZ(5,"div",13)(6,"input",38),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.subProcessName=e)}),t.qZA()(),t.TgZ(7,"div",14)(8,"input",38),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.inspectedBy=e)}),t.qZA()()()(),t.TgZ(9,"div",15)(10,"div",10)(11,"div",16)(12,"input",39),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.releasedDate=e)}),t.qZA()(),t.TgZ(13,"div",16)(14,"ng-select",40),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.releaseStatus=e)}),t.qZA()(),t.TgZ(15,"div",41)(16,"div",42)(17,"input",43),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.IPQAStatus=e)}),t.qZA()()()()()()}if(2&r){const i=l.$implicit,o=t.oxw();t.xp6(4),t.Q6J("ngModel",i.seq)("disabled",t.DdM(15,m).includes(o.action)),t.xp6(2),t.Q6J("ngModel",i.subProcessName)("disabled",t.DdM(16,m).includes(o.action)),t.xp6(2),t.Q6J("ngModel",i.inspectedBy)("disabled",t.DdM(17,m).includes(o.action)),t.xp6(4),t.Q6J("ngModel",i.releasedDate)("disabled",t.DdM(18,m).includes(o.action)),t.xp6(2),t.Q6J("items",o.releaseStatusOptions)("clearable",!1)("ngModel",i.releaseStatus)("disabled",t.DdM(19,m).includes(o.action)),t.xp6(3),t.Q6J("ngModel",i.IPQAStatus)("ngModelOptions",t.DdM(20,k))("disabled",t.DdM(21,m).includes(o.action))}}function Y(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"div",44)(1,"button",45),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(2,"Save & Close"),t.qZA()()}}const F=function(){return["create","edit"]};let j=(()=>{var r;class l{constructor(o,e){this.activeModal=o,this.utilityService=e,this.action="create",this.prodInfoList=[],this.releaseStatusOptions=[],this.IPQADetails={},this.sourceOfMfg=b.mt}ngOnInit(){this.prodInfoList=this.IPQADetails?.IPQA?.IPQAInfo?.length>0?JSON.parse(JSON.stringify(this.IPQADetails?.IPQA?.IPQAInfo))?.map(o=>(o.releasedDate&&(o.releasedDate=this.utilityService.getFormatDate(o.releasedDate,"YYYY-MM-DD")),o)):[{seq:null,subProcessName:"",inspectedBy:"",releasedDate:this.utilityService.getTodayDate("YYYY-MM-DD"),releaseStatus:null,IPQAStatus:!1}]}deleteTableRow(){["create","edit"].includes(this.action)&&this.prodInfoList.length>1&&this.prodInfoList.pop()}addTableRow(){["create","edit"].includes(this.action)&&this.prodInfoList.push({seq:null,subProcessName:"",inspectedBy:"",releasedDate:this.utilityService.getTodayDate("YYYY-MM-DD"),releaseStatus:null,IPQAStatus:!1})}dismissModel(){this.activeModal.close({prodInfoList:this.prodInfoList,IPQA:{IPQAInfo:this.prodInfoList,IPQARemarks:this.IPQADetails?.IPQARemarks}})}}return(r=l).\u0275fac=function(o){return new(o||r)(t.Y36(C.Kz),t.Y36(p.tI))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-jc-ipqa-info-modal"]],viewQuery:function(o,e){if(1&o&&t.Gf(_.j,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},inputs:{action:"action",prodInfoList:"prodInfoList",releaseStatusOptions:"releaseStatusOptions",IPQADetails:"IPQADetails"},decls:54,vars:7,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","px-0"],[1,"mt-1","line-border-with-title","mb-4"],[1,"px-5"],[1,"row","mx-4","px-3"],[1,"col-7"],[1,"row"],[1,"col-2","pe-1","text-center"],[1,"form-label"],[1,"col-6","ps-0","pe-1"],[1,"col-4","ps-0"],[1,"col-5","ps-2"],[1,"col-5","ps-0","pe-1"],[1,"col-5","ps-0"],[1,"col-2","ps-0","pe-1"],["class","row mx-4 px-3 mb-2",4,"ngFor","ngForOf"],[1,"row","mt-4","mb-2","px-5","mx-1",2,"min-height","13rem"],[1,"col-12","set-image","px-0","seperate-row"],[1,"add-icon"],["data-tip","","data-for","infoTip","src","./assets/new_icons/add_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"line-border"],[1,"minus-icon"],["data-tip","","data-for","infoTip","src","./assets/new_icons/delete_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"col","mt-1"],[1,"row","mb-4","mt-2","mx-4","px-3"],[1,"col-7","pe-0"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"ms-1","me-2"],["placeholder","Critical incident/Deviation/Concerns during Production","type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],["class","col-5 d-flex justify-content-end",4,"ngIf"],[1,"row","mx-4","px-3","mb-2"],[1,"col-2","pe-1"],["type","number",1,"form-control","text-center",3,"ngModel","disabled","ngModelChange"],["type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],["type","date",1,"form-control",3,"ngModel","disabled","ngModelChange"],["bindLabel","releaseStatusOptions","bindValue","releaseStatusOptions",3,"items","clearable","ngModel","disabled","ngModelChange"],[1,"col-2","ps-0"],[1,"h-100","d-flex","justify-content-center","align-items-center","set-prod-status"],["type","checkbox",1,"form-check-input","pointer","mt-0",3,"ngModel","ngModelOptions","disabled","ngModelChange"],[1,"col-5","d-flex","justify-content-end"],["type","button",1,"btn","btn-primary","px-4",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return e.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"span",7),t._uU(10," IPQA Details "),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"label",12),t._uU(16,"Seq."),t.qZA()(),t.TgZ(17,"div",13)(18,"label",12),t._uU(19,"Sub-Process Name"),t.qZA()(),t.TgZ(20,"div",14)(21,"label",12),t._uU(22,"Inspected By "),t.qZA()()()(),t.TgZ(23,"div",15)(24,"div",10)(25,"div",16)(26,"label",12),t._uU(27,"Release Date "),t.qZA()(),t.TgZ(28,"div",17)(29,"label",12),t._uU(30,"Release Status"),t.qZA()(),t.TgZ(31,"div",18)(32,"label",12),t._uU(33," Status "),t.qZA()()()()(),t.YNc(34,O,18,22,"div",19),t.TgZ(35,"div",20)(36,"div",21)(37,"div",22)(38,"img",23),t.NdJ("click",function(){return e.addTableRow()}),t.qZA()(),t._UZ(39,"hr",24),t.TgZ(40,"div",25)(41,"img",26),t.NdJ("click",function(){return e.deleteTableRow()}),t.qZA()()()(),t.TgZ(42,"div",10)(43,"div",27),t._UZ(44,"hr",24),t.qZA()(),t.TgZ(45,"div",28)(46,"div",29)(47,"div",30)(48,"div",31),t._uU(49," IPQA Remarks "),t.TgZ(50,"span",32),t._uU(51,"\u25b6"),t.qZA()(),t.TgZ(52,"input",33),t.NdJ("ngModelChange",function(s){return e.IPQADetails.IPQARemarks=s}),t.qZA()()(),t.YNc(53,Y,3,0,"div",34),t.qZA()()()),2&o&&(t.xp6(3),t.hij("",null==e.IPQADetails?null:e.IPQADetails.processName," Sub-Processes"),t.xp6(31),t.Q6J("ngForOf",e.prodInfoList),t.xp6(18),t.Q6J("ngModel",e.IPQADetails.IPQARemarks)("disabled",t.DdM(5,m).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(6,F).includes(e.action)))},dependencies:[c.sg,c.O5,a.Fj,a.wV,a.Wl,a.JJ,a.On,D.w9],styles:[".set-image[_ngcontent-%COMP%]{width:100%;margin-top:-1rem!important}.seperate-row[_ngcontent-%COMP%]{position:relative}.seperate-row[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%]{position:absolute;left:-1rem;top:.2rem}.seperate-row[_ngcontent-%COMP%]   .minus-icon[_ngcontent-%COMP%]{position:absolute;right:-1rem;top:.2rem}.set-prod-status[_ngcontent-%COMP%]{border:solid 1px #d6cdcd!important}"]}),l})();const h=function(){return["view","approve"]},K=function(){return{standalone:!0}};function R(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"div",35)(1,"div",9)(2,"div",10)(3,"div",36)(4,"input",37),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.seq=e)}),t.qZA()(),t.TgZ(5,"div",13)(6,"input",38),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.subProcessName=e)}),t.qZA()(),t.TgZ(7,"div",14)(8,"input",39),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.prodStartDate=e)}),t.qZA()()()(),t.TgZ(9,"div",15)(10,"div",10)(11,"div",16)(12,"input",39),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.prodEndDate=e)}),t.qZA()(),t.TgZ(13,"div",16)(14,"input",38),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.operatingStaff=e)}),t.qZA()(),t.TgZ(15,"div",40)(16,"div",41)(17,"input",42),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.prodStatus=e)}),t.qZA()()()()()()}if(2&r){const i=l.$implicit,o=t.oxw();t.xp6(4),t.Q6J("ngModel",i.seq)("disabled",t.DdM(13,h).includes(o.action)),t.xp6(2),t.Q6J("ngModel",i.subProcessName)("disabled",t.DdM(14,h).includes(o.action)),t.xp6(2),t.Q6J("ngModel",i.prodStartDate)("disabled",t.DdM(15,h).includes(o.action)),t.xp6(4),t.Q6J("ngModel",i.prodEndDate)("disabled",t.DdM(16,h).includes(o.action)),t.xp6(2),t.Q6J("ngModel",i.operatingStaff)("disabled",t.DdM(17,h).includes(o.action)),t.xp6(3),t.Q6J("ngModel",i.prodStatus)("ngModelOptions",t.DdM(18,K))("disabled",t.DdM(19,h).includes(o.action))}}function G(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"div",43)(1,"button",44),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.dismissModel())}),t._uU(2,"Save & Close"),t.qZA()()}}const B=function(){return["create","edit"]};let H=(()=>{var r;class l{constructor(o,e){this.activeModal=o,this.utilityService=e,this.action="create",this.prodInfoList=[],this.shiftOptions=[],this.productionDetails={},this.sourceOfMfg=b.mt}ngOnInit(){this.prodInfoList=this.productionDetails?.production?.prodInfo?.length>0?JSON.parse(JSON.stringify(this.productionDetails?.production?.prodInfo))?.map(o=>(o.prodStartDate&&(o.prodStartDate=this.utilityService.getFormatDate(o.prodStartDate,"YYYY-MM-DD")),o.prodEndDate&&(o.prodEndDate=this.utilityService.getFormatDate(o.prodEndDate,"YYYY-MM-DD")),o)):[{seq:null,subProcessName:"",prodStartDate:this.utilityService.getTodayDate("YYYY-MM-DD"),prodEndDate:this.utilityService.getTodayDate("YYYY-MM-DD"),operatingStaff:"",prodStatus:!1}]}deleteTableRow(){["create","edit"].includes(this.action)&&this.prodInfoList.length>1&&this.prodInfoList.pop()}addTableRow(){["create","edit"].includes(this.action)&&this.prodInfoList.push({seq:null,subProcessName:"",prodStartDate:this.utilityService.getTodayDate("YYYY-MM-DD"),prodEndDate:this.utilityService.getTodayDate("YYYY-MM-DD"),operatingStaff:"",prodStatus:!1})}dismissModel(){this.activeModal.close({prodInfoList:this.prodInfoList,production:{prodInfo:this.prodInfoList,prodRemarks:this.productionDetails?.prodRemarks}})}}return(r=l).\u0275fac=function(o){return new(o||r)(t.Y36(C.Kz),t.Y36(p.tI))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-jc-prod-info-modal"]],viewQuery:function(o,e){if(1&o&&t.Gf(_.j,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},inputs:{action:"action",prodInfoList:"prodInfoList",shiftOptions:"shiftOptions",productionDetails:"productionDetails"},decls:54,vars:7,consts:[[1,"modelPage"],[1,"modal-header"],[1,"heading"],["type","button","aria-label","Close",1,"btn","btn-cross","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle"],[1,"container-fluid","px-0"],[1,"mt-1","line-border-with-title","mb-4"],[1,"px-4"],[1,"row","mx-4","px-3"],[1,"col-7"],[1,"row"],[1,"col-2","pe-1","text-center"],[1,"form-label"],[1,"col-6","ps-0","pe-1"],[1,"col-4","ps-0"],[1,"col-5","ps-1"],[1,"col-5","ps-0","pe-1"],[1,"col-5","ps-0"],[1,"col-2","ps-0","pe-1"],["class","row mx-4 px-3 mb-2",4,"ngFor","ngForOf"],[1,"row","mt-4","mb-2","px-5","mx-1",2,"min-height","13rem"],[1,"col-12","set-image","px-0","seperate-row"],[1,"add-icon"],["data-tip","","data-for","infoTip","src","./assets/new_icons/add_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"line-border"],[1,"minus-icon"],["data-tip","","data-for","infoTip","src","./assets/new_icons/delete_row.svg","width","14","alt","",1,"pointer",3,"click"],[1,"col","mt-1"],[1,"row","mb-4","mt-2","mx-4","px-3"],[1,"col-7","pe-0"],[1,"d-flex","align-items-center"],[1,"col-form-label","text-nowrap"],[1,"ms-1","me-2"],["placeholder","Critical incident/Deviation/Concerns during Production","type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],["class","col-5 d-flex justify-content-end",4,"ngIf"],[1,"row","mx-4","px-3","mb-2"],[1,"col-2","pe-1"],["type","number",1,"form-control","text-center",3,"ngModel","disabled","ngModelChange"],["type","text",1,"form-control",3,"ngModel","disabled","ngModelChange"],["type","date",1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"col-2","ps-0"],[1,"h-100","d-flex","justify-content-center","align-items-center","set-prod-status"],["type","checkbox",1,"form-check-input","pointer","mt-0",3,"ngModel","ngModelOptions","disabled","ngModelChange"],[1,"col-5","d-flex","justify-content-end"],["type","button",1,"btn","btn-primary","px-4",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"button",3),t.NdJ("click",function(){return e.activeModal.close()}),t._UZ(6,"i",4),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"span",7),t._uU(10," Production Details "),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"label",12),t._uU(16,"Seq."),t.qZA()(),t.TgZ(17,"div",13)(18,"label",12),t._uU(19,"Sub-Process Name"),t.qZA()(),t.TgZ(20,"div",14)(21,"label",12),t._uU(22,"Prod. Start Date"),t.qZA()()()(),t.TgZ(23,"div",15)(24,"div",10)(25,"div",16)(26,"label",12),t._uU(27,"Prod. End Date "),t.qZA()(),t.TgZ(28,"div",17)(29,"label",12),t._uU(30,"Operating Staff"),t.qZA()(),t.TgZ(31,"div",18)(32,"label",12),t._uU(33," Status "),t.qZA()()()()(),t.YNc(34,R,18,20,"div",19),t.TgZ(35,"div",20)(36,"div",21)(37,"div",22)(38,"img",23),t.NdJ("click",function(){return e.addTableRow()}),t.qZA()(),t._UZ(39,"hr",24),t.TgZ(40,"div",25)(41,"img",26),t.NdJ("click",function(){return e.deleteTableRow()}),t.qZA()()()(),t.TgZ(42,"div",10)(43,"div",27),t._UZ(44,"hr",24),t.qZA()(),t.TgZ(45,"div",28)(46,"div",29)(47,"div",30)(48,"div",31),t._uU(49," Prod. Remarks "),t.TgZ(50,"span",32),t._uU(51,"\u25b6"),t.qZA()(),t.TgZ(52,"input",33),t.NdJ("ngModelChange",function(s){return e.productionDetails.prodRemarks=s}),t.qZA()()(),t.YNc(53,G,3,0,"div",34),t.qZA()()()),2&o&&(t.xp6(3),t.hij("",null==e.productionDetails?null:e.productionDetails.processName," Sub-Processes"),t.xp6(31),t.Q6J("ngForOf",e.prodInfoList),t.xp6(18),t.Q6J("ngModel",e.productionDetails.prodRemarks)("disabled",t.DdM(5,h).includes(e.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(6,B).includes(e.action)))},dependencies:[c.sg,c.O5,a.Fj,a.wV,a.Wl,a.JJ,a.On],styles:[".set-image{width:100%;margin-top:-1rem!important}.seperate-row{position:relative}.seperate-row .add-icon{position:absolute;left:-1rem;top:.2rem}.seperate-row .minus-icon{position:absolute;right:-1rem;top:.2rem}.set-prod-status{border:solid 1px #d6cdcd!important}\n"],encapsulation:2}),l})();var V=d(77945),$=d(16897),z=d(95346),X=d(12995),W=d(8658);const tt=function(){return{standalone:!0}};function et(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",52,53)(5,"span",54),t._uU(6),t.qZA()(),t.TgZ(7,"td")(8,"div",55)(9,"button",56),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.openProdInfoModal(n))}),t.ALo(10,"JCEDisabledProdInfo"),t._uU(11," Prod. Info "),t.qZA()()(),t.TgZ(12,"td")(13,"div",55)(14,"button",56),t.NdJ("click",function(){const n=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.openIPQAModal(n))}),t.ALo(15,"JCEDisabledIPQAInfo"),t._uU(16," Control Plan "),t.qZA()()(),t.TgZ(17,"td")(18,"input",57),t.NdJ("ngModelChange",function(e){const s=t.CHM(i).$implicit;return t.KtG(s.processStatus=e)}),t.qZA()()()}if(2&r){const i=l.$implicit,o=t.MAs(4),e=t.oxw();t.xp6(2),t.hij(" ",null==i?null:i.seq," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",i.processName)("positionTarget",o),t.xp6(1),t.hij(" ",null==i?null:i.processName," "),t.xp6(3),t.Q6J("disabled",t.xi3(10,10,"Packing"==(null==i?null:i.processName)||e.JCEntryDetailsList,i.seq)),t.xp6(5),t.Q6J("disabled",t.xi3(15,13,"Packing"==(null==i?null:i.processName)||e.JCEntryDetailsList,i.seq)),t.xp6(4),t.Q6J("ngModel",i.processStatus)("ngModelOptions",t.DdM(16,tt))}}function ot(r,l){1&r&&t._UZ(0,"div",58)}function nt(r,l){1&r&&t._UZ(0,"div",59)}function it(r,l){if(1&r){const i=t.EpF();t.TgZ(0,"button",60),t.NdJ("click",function(){t.CHM(i);const e=t.oxw();return t.KtG(e.submit())}),t._uU(1," Save "),t.qZA()}}const st=function(r,l,i,o){return{page:r,pageSize:l,collection:i,search:o,excelDisplay:"none"}},rt=function(){return["reject","approve","view"]};let at=(()=>{var r;class l{constructor(o,e,n,s,u,f,g,y){this.jcEntryService=o,this.activatedRoute=e,this.spinner=n,this.toastService=s,this.validationService=u,this.modalService=f,this.utilityService=g,this.location=y,this.isPreview=!1,this.submitted=!1,this.isESCPreview=!1,this.action="create",this.page=1,this.pageSize=7,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.selectedJobCardDetails={},this.ESCPreviewArr=[],this.masterData={autoIncrementNo:"",JCOptions:[],processNameList:[],releaseStatusOptions:[],billFromLocationOptions:[]},this.isMarkAsCompleted=!0,this.JCEntryDetailsList=[],this.prodInfoList=[{seq:null,subProcessName:"",prodStartDate:this.utilityService.getTodayDate("YYYY-MM-DD"),prodEndDate:this.utilityService.getTodayDate("YYYY-MM-DD"),operatingStaff:"",prodStatus:!1}],this.IPQAInfoList=[{seq:null,subProcessName:"",inspectedBy:"",releasedDate:this.utilityService.getTodayDate("YYYY-MM-DD"),releaseStatus:null,IPQAStatus:!1}],this.form=new a.nJ({_id:new a.p4(null),jcEntryCode:new a.p4(null),jobCard:new a.p4(null,[a.kI.required]),jobCardNo:new a.p4(null),SKU:new a.p4(null),referenceModel:new a.p4(null),SKUNo:new a.p4(null),SKUName:new a.p4(null),SKUDescription:new a.p4(null),UOM:new a.p4(null),totalBatchQuantity:new a.p4(null),JCEntryDetails:new a.p4([]),location:new a.p4(""),batchOutputQty:new a.p4(null),batchNumber:new a.p4("-"),status:new a.p4("In-Process")})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,L.m5))return;this.form.enable();let o=this.form.value;"approve"==this.action&&(o.status="Approved"),o.JCEntryDetails=this.JCEntryDetailsList,o._id?this.update(o):(delete o._id,this.create(o))}trackByFn(o,e){return e?._id}create(o){this.spinner.show(),this.jcEntryService.create(o).subscribe(e=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(e.message),this.location.back()})}update(o){this.spinner.show(),this.jcEntryService.update(o._id,o).subscribe(e=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(e.message),this.location.back()})}reset(){this.form.reset(),this.JCEntryDetailsList=[],this.collection=this.JCEntryDetailsList.length,this.getInitialData(),this.isESCPreview=!1}getInitialData(){this.spinner.show(),this.jcEntryService.getAllMasterData({}).subscribe(o=>{this.masterData=o,this.form.controls.jcEntryCode.setValue(this.masterData?.autoIncrementNo),this.form.controls.location.patchValue("Factory"),this.form.controls.batchNumber.setValue("-"),this.JCEntryDetailsList=this.masterData?.processNameList.map((e,n)=>(e.seq=n+1,e)),this.collection=this.JCEntryDetailsList.length,this.form.controls.status.setValue("In-Process"),this.activatedRoute.queryParams.pipe((0,N.z)(e=>(this.action=e.action,this.utilityService.accessDenied(this.action),e.id?this.jcEntryService.getById(e.id):(0,Q.of)({})))).subscribe(e=>{this.spinner.hide(),0!=Object.keys(e).length&&(e.JCEntryDetails&&(this.JCEntryDetailsList=e?.JCEntryDetails),this.collection=this.JCEntryDetailsList.length,this.form.patchValue(e),this.f.jobCardNo.disable(),["view","approve"].includes(this.action)&&this.form.disable())})})}setJobCardId(o){this.f.jobCard.setValue(o?._id),this.f.SKU.setValue(o?.SKU),this.f.SKUNo.setValue(o?.SKUNo),this.f.SKUName.setValue(o?.SKUName),this.f.SKUDescription.setValue(o?.SKUDescription),this.f.UOM.setValue(o?.UOM),this.f.totalBatchQuantity.setValue(o?.batchQty),this.f.batchOutputQty.setValue(o?.batchQty),this.f.jobCardNo.setValue(o?.jobCardNo),this.f.referenceModel.setValue(o?.referenceModel)}preview(){this.search="",this.isESCPreview=!0,this.ESCPreviewArr=this.JCEntryDetailsList,this.JCEntryDetailsList=this.JCEntryDetailsList.filter(o=>o.seq>0),0==this.JCEntryDetailsList.length?this.toastService.warning("At least One Row is Required!"):this.isPreview=!0,this.collection=this.JCEntryDetailsList.length}ESCPreview(){this.search="",this.isPreview=!1,this.JCEntryDetailsList=this.ESCPreviewArr,this.collection=this.JCEntryDetailsList.length}openJobCardDetailsModal(){if("create"==this.action){const o=this.modalService.open(w.Q,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});o.componentInstance.action=this.action,o.componentInstance.selectedJobCardDetails=this.selectedJobCardDetails,o.componentInstance.JCOptions=this.masterData.JCOptions,o.componentInstance.jobCard=this.form.controls.jobCard.value,o.result.then(e=>{e&&(this.selectedJobCardDetails=e?.selectedJobCardDetails,this.setJobCardId(e?.selectedJobCardDetails))},e=>{})}}checkDisableProd(o){if(0==(o-=1))return!1;let e=this.JCEntryDetailsList.find(s=>s.seq==o);if(null==e)return!0;console.log("data",e);let n=e.production?.prodInfo?.some(s=>s.prodStatus);return console.log("condition",n),n}openProdInfoModal(o){const e=this.modalService.open(H,{centered:!0,windowClass:"custom-modal",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.prodInfoList=this.prodInfoList,e.componentInstance.productionDetails=o,e.result.then(n=>{if(n){let s=this.JCEntryDetailsList.findIndex(u=>u.process==o?.process);this.prodInfoList=n?.prodInfoList,this.JCEntryDetailsList[s].production=n?.production,this.updateProcessStatus(s)}},n=>{})}openIPQAModal(o){const e=this.modalService.open(j,{centered:!0,windowClass:"custom-modal",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.IPQAInfoList=this.IPQAInfoList,e.componentInstance.releaseStatusOptions=this.masterData?.releaseStatusOptions,e.componentInstance.IPQADetails=o,e.result.then(n=>{if(n){let s=this.JCEntryDetailsList.findIndex(u=>u.process==o?.process);this.IPQAInfoList=n?.IPQAInfoList,this.JCEntryDetailsList[s].IPQA=n?.IPQA,this.updateProcessStatus(s)}},n=>{})}updateProcessStatus(o){console.log("JCEntryDetailsList",this.JCEntryDetailsList),this.JCEntryDetailsList[o].processStatus=this.JCEntryDetailsList[o]?.production?.prodInfo?.every(e=>e?.prodStatus)&&this.JCEntryDetailsList[o]?.IPQA?.IPQAInfo?.every(e=>e.IPQAStatus),this.isMarkAsCompleted=!this.JCEntryDetailsList?.every(e=>e?.processStatus||"Packing"==e?.processName),this.JCEntryDetailsList=[...this.JCEntryDetailsList]}openBatchInfoModal(){const o=this.modalService.open(V.o,{centered:!0,size:"md",backdrop:"static",keyboard:!1});o.componentInstance.action=this.action,o.componentInstance.billFromLocationOptions=this.masterData.billFromLocationOptions,o.componentInstance.batchInfoDetails={location:this.f.location.value,batchOutputQty:this.f.batchOutputQty.value,batchNumber:this.f.batchNumber.value},o.result.then(e=>{e&&(console.log("success",e),this.form.patchValue(e))},e=>{})}eventHeader(o){switch(o.key){case"SEARCH":this.search=o.value,this.page=1;break;case"EXCEL":default:break;case"PAGE":this.page=o.value}}onSort({column:o,direction:e}){this.headers.forEach(n=>{n.sortable!==o&&(n.direction="")}),this.JCEntryDetailsList=""===e||""===o?this.JCEntryDetailsList:[...this.JCEntryDetailsList].sort((n,s)=>{let u="string"==typeof n[o]?n[o].toLowerCase():n[o],f="string"==typeof s[o]?s[o].toLowerCase():s[o];const g=u<f?-1:u>f?1:0;return"asc"===e?g:-g})}}return(r=l).\u0275fac=function(o){return new(o||r)(t.Y36(Z.US),t.Y36(v.gz),t.Y36(p.V),t.Y36(p.kl),t.Y36($.RJ),t.Y36(C.FF),t.Y36(p.tI),t.Y36(c.Ye))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-jc-entry-form"]],viewQuery:function(o,e){if(1&o&&t.Gf(q.j_,5),2&o){let n;t.iGM(n=t.CRH())&&(e.headers=n)}},decls:90,vars:30,consts:[[1,"formCard","card",3,"formGroup"],[1,"set-remaining-margin"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row","mb-0"],[1,"col-6","pe-2"],[1,"row","mb-1"],[1,"col-7"],[1,"row"],[1,"col-6"],["for","",1,"form-label"],[1,"text-danger"],[1,"d-flex","align-items-center"],[1,"col-11"],["bindLabel","jobCardNo","bindValue","jobCardNo","formControlName","jobCardNo",3,"items","clearable","change"],["id","basic-addon1",1,"set-input-group-text","input-group-text","bg-primary","pointer","col-auto",2,"height","2.9rem",3,"click"],["aria-hidden","true",1,"fa","fa-search","text-white","fs-4"],["type","text","formControlName","SKUNo","readonly","",1,"form-control"],[1,"col-5","px-0"],["type","text","formControlName","SKUName","readonly","",1,"form-control"],[1,"col-3","px-5"],["type","text","formControlName","SKUDescription","readonly","",1,"form-control"],[1,"col-3","ps-0"],[1,"col-5","ps-2","pe-3"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-7","ps-2"],["type","text","formControlName","totalBatchQuantity","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","25rem"],[1,"table","table-bordered","table-sticky"],[1,"bg-primary"],[1,"text-white"],["sortable","seq",3,"sort"],["sortable","processName",1,"text-start",3,"sort"],["sortable","processStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-3","pe-0","d-flex"],[1,"d-flex","align-items-end"],[1,"set-flex-status","px-4"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],["value","In-Process"],["value","Mark As Completed",3,"disabled"],[1,"input-group-text","statusSpanHeight"],["class","statusYellow",4,"ngIf"],["class","statusActive",4,"ngIf"],[1,"col-3"],[1,"col-md-auto","ms-auto","d-flex","align-items-end"],["type","button","class","btn btn-primary px-5",3,"click",4,"ngIf"],[1,"text-start"],["processName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],[1,"d-flex","justify-content-center","align-items-center"],["type","button",1,"btn","btn-primary","form-btn-sm","py-0",3,"disabled","click"],["type","checkbox","disabled","",1,"form-check-input","pointer",3,"ngModel","ngModelOptions","ngModelChange"],[1,"statusYellow"],[1,"statusActive"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"label",12),t._uU(15,"Job Card No. "),t.TgZ(16,"span",13),t._uU(17,"*"),t.qZA()(),t.TgZ(18,"div",14)(19,"div",15)(20,"ng-select",16),t.NdJ("change",function(s){return e.setJobCardId(s)}),t.qZA()(),t.TgZ(21,"div",17),t.NdJ("click",function(){return e.openJobCardDetailsModal()}),t._UZ(22,"i",18),t.qZA()()(),t.TgZ(23,"div",11)(24,"label",12),t._uU(25,"SKU No. "),t._UZ(26,"span",13),t.qZA(),t._UZ(27,"input",19),t.qZA()()(),t.TgZ(28,"div",20)(29,"label",12),t._uU(30,"SKU Name "),t._UZ(31,"span",13),t.qZA(),t._UZ(32,"input",21),t.qZA()()(),t.TgZ(33,"div",22)(34,"label",12),t._uU(35,"SKU Description "),t._UZ(36,"span",13),t.qZA(),t._UZ(37,"input",23),t.qZA(),t.TgZ(38,"div",24)(39,"div",10)(40,"div",25)(41,"label",12),t._uU(42," UoM "),t._UZ(43,"span",13),t.qZA(),t._UZ(44,"input",26),t.ALo(45,"SalesUOMUnitMaster"),t.qZA(),t.TgZ(46,"div",27)(47,"label",12),t._uU(48," Batch Qty. "),t._UZ(49,"span",13),t.qZA(),t._UZ(50,"input",28),t.qZA()()()()(),t._UZ(51,"hr",29),t.TgZ(52,"app-setting-header",30),t.NdJ("dataChange",function(s){return e.eventHeader(s)}),t.qZA(),t.TgZ(53,"div",31)(54,"table",32)(55,"thead",33)(56,"tr",34)(57,"th",35),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(58,"Seq."),t.qZA(),t.TgZ(59,"th",36),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(60,"Process Name"),t.qZA(),t.TgZ(61,"th"),t._uU(62,"Production"),t.qZA(),t.TgZ(63,"th"),t._uU(64,"IPQA"),t.qZA(),t.TgZ(65,"th",37),t.NdJ("sort",function(s){return e.onSort(s)}),t._uU(66,"Status"),t.qZA()()(),t.TgZ(67,"tbody"),t.YNc(68,et,19,17,"tr",38),t.ALo(69,"slice"),t.ALo(70,"searchFi1ter"),t.qZA()()(),t._UZ(71,"hr",29),t.TgZ(72,"div",10)(73,"div",39)(74,"div",40)(75,"span",41),t._uU(76," Status "),t.qZA(),t.TgZ(77,"select",42)(78,"option",43),t._uU(79,"Select Status"),t.qZA(),t.TgZ(80,"option",44),t._uU(81,"In-Process"),t.qZA(),t.TgZ(82,"option",45),t._uU(83,"Mark As Completed"),t.qZA()(),t.TgZ(84,"span",46),t.YNc(85,ot,1,0,"div",47),t.YNc(86,nt,1,0,"div",48),t.qZA()()(),t._UZ(87,"div",49),t.TgZ(88,"div",50),t.YNc(89,it,2,0,"button",51),t.qZA()()()()),2&o&&(t.Q6J("formGroup",e.form),t.xp6(5),t.hij("Job Card Entry (",t.lcZ(6,13,e.action),") "),t.xp6(15),t.Q6J("items",e.masterData.JCOptions)("clearable",!1),t.xp6(24),t.s9C("value",t.lcZ(45,15,e.form.controls.UOM.value)),t.xp6(8),t.Q6J("data",t.l5B(24,st,e.page,e.pageSize,e.collection,e.search)),t.xp6(16),t.Q6J("ngForOf",t.Dn7(69,17,t.xi3(70,21,e.JCEntryDetailsList,e.search),(e.page-1)*e.pageSize,(e.page-1)*e.pageSize+e.pageSize))("ngForTrackBy",e.trackByFn),t.xp6(10),t.Q6J("value",null),t.xp6(4),t.Q6J("disabled",e.isMarkAsCompleted),t.xp6(3),t.Q6J("ngIf","In-Process"==e.form.value.status),t.xp6(1),t.Q6J("ngIf","Mark As Completed"==e.form.value.status),t.xp6(3),t.Q6J("ngIf",!t.DdM(29,rt).includes(e.action)))},dependencies:[c.sg,c.O5,A.P,C._L,a._Y,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.sg,a.u,a.On,D.w9,_.j,c.OU,c.rS,z.G,T.Q,X.n,W.A],encapsulation:2}),l})();var lt=d(19964),dt=d(56208);const ct=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:E},{path:"form",component:at,resolve:{accessScreen:lt.xr}}];let pt=(()=>{var r;class l{}return(r=l).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[c.ez,v.Bz.forChild(ct),dt.m]}),l})()}}]);