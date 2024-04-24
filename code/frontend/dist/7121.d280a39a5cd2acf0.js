"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7121],{47121:(P,G,u)=>{u.r(G),u.d(G,{GrAcknowledgementModule:()=>W});var n=u(96814),d=u(1076),m=u(43818),v=u(25116),t=u(65879),A=u(98977),R=u(73374),f=u(88059),_=u(53421);function p(h,g){if(1&h){const s=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",15),t._UZ(15,"button",16),t.TgZ(16,"div",17)(17,"a",18),t.NdJ("click",function(){const l=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",l,"view"))}),t._UZ(18,"i",19),t._uU(19," View "),t.qZA(),t.TgZ(20,"a",18),t.NdJ("click",function(){const l=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.navigateTo("../form",l,"Acknowledged"))}),t._UZ(21,"i",20),t._uU(22," Acknowledged "),t.qZA()()()()()}if(2&h){const s=g.$implicit,i=t.oxw();t.xp6(2),t.Oqu(null==s?null:s.GRNumber),t.xp6(2),t.Oqu(null==s?null:s.GRDateS),t.xp6(2),t.Oqu(null==s?null:s.GIDateS),t.xp6(2),t.Oqu(null==s?null:s.deliveryLocation),t.xp6(2),t.Oqu(null==s?null:s.department),t.xp6(2),t.Oqu(null==s?null:s.GIStatus),t.xp6(5),t.Q6J("accessType",i.rolePermissionActions.viewAction),t.xp6(3),t.ekj("disable","Discrepancy Reported"===(null==s?null:s.GIStatus)||"Acknowledged"===(null==s?null:s.GIStatus)),t.Q6J("accessType",i.rolePermissionActions.createAction)}}const U=function(h,g,s,i){return{page:h,pageSize:g,collection:s,search:i,type:"list",excelDisplay:"none"}};let r=(()=>{class h{constructor(s,i,o,l,a){this.router=s,this.spinner=i,this.goodIssue=o,this.exportExcelService=l,this.activatedRoute=a,this.page=1,this.pageSize=8,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.tableData=[],this.status="GRAcknowledgement",this.rolePermissionActions=v.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(s,i,o){if("Discrepancy Reported"==i.GIStatus&&"Acknowledged"==o||"Acknowledged"==i.GIStatus&&"Acknowledged"==o)return null;this.router.navigate([s],{relativeTo:this.activatedRoute,queryParams:{id:i._id,action:o}})}trackByFn(s,i){return i?._id}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value,this.getAll();break;case"EXCEL":this.getAll(!0);break;case"PAGE":this.page=s.value,this.getAll()}}getAll(s=!1){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,statusKey:this.status,excel:s};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.goodIssue.getAll(i).subscribe(o=>{s?this.excelDownload(o.rows):(this.tableData=o.rows,this.collection=o.count,this.spinner.hide())})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(s){let i={width:24,style:{alignment:{vertical:"middle",horizontal:"center",wrapText:!0}}},o={title:"Goods Receipt Acknowledgement",csvData:s,headers:[{header:"GR No.",key:"GRNumber",...i},{header:"GR Dt.",key:"GRDateS",...i},{header:"Goods Issue Dt.",key:"",...i},{header:"Location (Store)",key:"deliveryLocation",...i},{header:"Department",key:"department",...i},{header:"Status",key:"GIStatus",...i}]};this.exportExcelService.exportExcel(o)}onSort({column:s,direction:i}){this.headers.forEach(o=>{o.sortable!==s&&(o.direction="")}),this.column=s,this.direction="asc"==i?1:-1,this.getAll()}static#t=this.\u0275fac=function(i){return new(i||h)(t.Y36(d.F0),t.Y36(A.V),t.Y36(R.vM),t.Y36(A.Ol),t.Y36(d.gz))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-gr-acknowledgement-list"]],viewQuery:function(i,o){if(1&i&&t.Gf(m.j,5),2&i){let l;t.iGM(l=t.CRH())&&(o.headers=l)}},decls:25,vars:8,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","GRNumber.GRNumber",3,"sort"],["sortable","GRNumber.GRDate",3,"sort"],["sortable","GIDateS",3,"sort"],["sortable","deliveryLocation",3,"sort"],["sortable","department",3,"sort"],["sortable","GIStatus",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Goods Receipt Acknowledgement"),t.qZA()(),t.TgZ(4,"div",3)(5,"app-setting-header",4),t.NdJ("dataChange",function(a){return o.eventHeader(a)}),t.qZA(),t.TgZ(6,"table",5)(7,"thead",6)(8,"tr",7)(9,"th",8),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(10,"GR No."),t.qZA(),t.TgZ(11,"th",9),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(12,"GR Dt."),t.qZA(),t.TgZ(13,"th",10),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(14,"Goods Issue Dt."),t.qZA(),t.TgZ(15,"th",11),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(16,"Location (Store)"),t.qZA(),t.TgZ(17,"th",12),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(18,"Department"),t.qZA(),t.TgZ(19,"th",13),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(20,"Status"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Action"),t.qZA()()(),t.TgZ(23,"tbody"),t.YNc(24,p,23,10,"tr",14),t.qZA()()()()),2&i&&(t.xp6(5),t.Q6J("data",t.l5B(3,U,o.page,o.pageSize,o.collection,o.search)),t.xp6(19),t.Q6J("ngForOf",o.tableData)("ngForTrackBy",o.trackByFn))},dependencies:[n.sg,f.P,m.j,_.J],encapsulation:2})}return h})();var e=u(60095),c=u(21631),T=u(22096),b=u(77609),F=u(60354),Z=u(16897),N=u(37285),C=u(50363),w=u(95346),S=u(59103);function M(h,g){if(1&h&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&h){const s=t.oxw().$implicit;t.xp6(1),t.hij(" ",s.receiptQty," ")}}const k=function(){return{standalone:!0}};function L(h,g){if(1&h){const s=t.EpF();t.TgZ(0,"input",46),t.NdJ("input",function(){t.CHM(s);const o=t.oxw(),l=o.$implicit,a=o.index,y=t.oxw();return t.KtG(y.setDiffQty(l,a))})("ngModelChange",function(o){t.CHM(s);const l=t.oxw().$implicit;return t.KtG(l.receiptQty=o)}),t.qZA()}if(2&h){const s=t.oxw().$implicit;t.Q6J("ngModel",s.receiptQty)("ngModelOptions",t.DdM(2,k))}}const D=function(){return["view"]};function O(h,g){if(1&h&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td",39,40)(10,"span",41),t._uU(11),t.qZA()(),t.TgZ(12,"td",39,42)(14,"span",41),t._uU(15),t.qZA()(),t.TgZ(16,"td"),t._uU(17),t.ALo(18,"UOMUnitsMaster"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"div",43),t.YNc(25,M,2,1,"span",44),t.YNc(26,L,1,3,"input",45),t.qZA()(),t.TgZ(27,"td"),t._uU(28),t.qZA()()),2&h){const s=g.$implicit,i=t.MAs(9),o=t.MAs(13),l=t.oxw();t.xp6(2),t.Oqu(s.mrnNo),t.xp6(2),t.Oqu(t.xi3(5,19,s.MRNDate,"dd-MM-YYYY")),t.xp6(3),t.Oqu(s.itemCode),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",s.itemName),t.xp6(1),t.hij(" ",null==s?null:s.itemName," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",s.itemDescription),t.xp6(1),t.hij(" ",null==s?null:s.itemDescription," "),t.xp6(2),t.Oqu(t.lcZ(18,22,s.UOM)),t.xp6(3),t.Oqu(s.GRQty),t.xp6(2),t.Oqu(s.GIQty),t.xp6(3),t.Q6J("ngIf",t.DdM(24,D).includes(l.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(25,D).includes(l.action)),t.xp6(2),t.Oqu(s.diffQty)}}function q(h,g){if(1&h){const s=t.EpF();t.TgZ(0,"div",47)(1,"button",48),t.NdJ("click",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.submit())}),t._uU(2," Acknowledge Receipt Qty. "),t.qZA()()}}function B(h,g){if(1&h){const s=t.EpF();t.TgZ(0,"div",47)(1,"button",48),t.NdJ("click",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.submit())}),t._uU(2," Acknowledge Receipt Qty. & Report Discrepancy "),t.qZA()()}}function Q(h,g){if(1&h){const s=t.EpF();t.TgZ(0,"div",36)(1,"button",48),t.NdJ("click",function(){t.CHM(s);const o=t.oxw();return t.KtG(o.navigateTo("../list",{},""))}),t._uU(2," Back "),t.qZA()()}}const x=function(h,g,s,i){return{page:h,pageSize:g,collection:s,search:i,excelDisplay:"none"}};let Y=(()=>{class h{constructor(s,i,o,l,a,y,I,E,j){this.goodService=s,this.router=i,this.activatedRoute=o,this.spinner=l,this.toastService=a,this.validationService=y,this.modalService=I,this.utilityService=E,this.location=j,this.GIDetailsArray=[],this.itemCodes=[],this.submitted=!1,this.buttonCondition=!0,this.action="Opened",this.GROptions=[],this.page=1,this.pageSize=5,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.statusArr={create:"Opened",edit:"Opened",approve:"Awaiting Acknowledgement",reject:"Rejected",Acknowledged:"Acknowledged"},this.masterData={autoIncrementNo:"",approvedGR:[]},this.form=new e.nJ({_id:new e.p4(null),GINumber:new e.p4("",[e.kI.required]),GRNumber:new e.p4(""),deliveryLocation:new e.p4(""),department:new e.p4(""),GIDate:new e.p4(this.utilityService.getTodayDate("YYYY-MM-DD"),[e.kI.required]),GRDate:new e.p4(this.utilityService.getTodayDate("YYYY-MM-DD")),GIStatus:new e.p4("Opened",[e.kI.required]),remarks:new e.p4(""),rejectionRemarks:new e.p4(""),GIDetails:new e.p4([])})}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}navigateTo(s,i,o){this.router.navigate([s],{relativeTo:this.activatedRoute})}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,F.D))return;let s=this.form.value;this.buttonCondition||(s.GIStatus="Discrepancy Reported"),s.GIDetails=this.GIDetailsArray,s._id&&this.update(s)}trackByFn(s,i){return i?._id}update(s){this.spinner.show(),this.goodService.update(s._id,s).subscribe(i=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(i.message),this.location.back()})}getGoodRequisitionById(){this.spinner.show(),this.goodService.getGoodRequisitionById(this.form.controls.GRNumber.value).subscribe(s=>{this.itemCodes=s?.itemCodes,this.form.controls.deliveryLocation.setValue(s.rows[0].deliveryLocation),this.form.controls.GRDate.setValue(this.utilityService.getFormatDate(s.rows[0].GRDate,"YYYY-MM-DD")),this.GIDetailsArray=s.rows.map((i,o)=>({GILineNumber:o+1,GRLineNumber:i.GRLineNumber,GINDate:this.utilityService.getFormatDate(i.GINDate,"YYYY-MM-DD"),IC:i._id,GIN:i?.GIN?._id,MRN:i?.MRN?._id,MRNDate:i?.MRN?.MRNDate,mrnNo:i?.MRN?.MRNNumber,item:i.item._id,itemCode:i.item.itemCode,itemName:i.item.itemName,itemDescription:i.item.itemDescription,itemType:i.item.itemType,itemSubCategory:i.item.itemSubCategory,conversionOfUnits:i.item.conversionOfUnits,expiryStatus:i.expiryStatus,UOM:i.UOM,IRQty:i.closedIRQty,GRQty:i.GRQty,GIQty:i.GIQty,receiptQty:i.GIQty,diffQty:0,GILineStatus:"Opened"})).filter(i=>i.GRQty>0),this.collection=this.GIDetailsArray.length,this.openAlertMessageModal(),this.spinner.hide()})}getInitialData(){this.spinner.show(),this.goodService.getAllMasterData({}).subscribe(s=>{this.GROptions=s.approvedGR,this.form.controls.GINumber.setValue(s.autoIncrementNo),this.form.controls.GIStatus.setValue("Opened"),this.form.controls.GIDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.form.controls.GRDate.setValue(this.utilityService.getTodayDate("YYYY-MM-DD")),this.activatedRoute.queryParams.pipe((0,c.z)(i=>(this.action=i.action,this.utilityService.accessDenied(this.action),i.id?this.goodService.getById(i.id):(0,T.of)({})))).subscribe(i=>{this.spinner.hide(),0!=Object.keys(i).length&&(i.GIDate&&(i.GIDate=i.GIDate.split("T")[0]),i.GRDate&&(i.GRDate=i.GRDate.split("T")[0]),this.GIDetailsArray=i.GIDetails.map((o,l)=>({GILineNumber:o?.GILineNumber,GRLineNumber:o?.GRLineNumber,GINDate:this.utilityService.getFormatDate(o?.GINDate,"YYYY-MM-DD"),IC:o?.IC,GIN:o?.GIN,MRN:o?.MRN,MRNDate:o?.MRN?.MRNDate,mrnNo:o?.MRN?.MRNNumber,item:o.item._id,itemCode:o.item.itemCode,itemName:o.item.itemName,itemDescription:o.item.itemDescription,itemType:o.item.itemType,itemSubCategory:o.item.itemSubCategory,conversionOfUnits:o.item.conversionOfUnits,expiryStatus:o.expiryStatus,UOM:o?.UOM,IRQty:o.IRQty,GRQty:o.GRQty,GIQty:o.GIQty,receiptQty:"view"==this.action?o.receiptQty:o.GIQty,diffQty:"view"==this.action?o.diffQty:0,GILineStatus:o?.GILineStatus})),this.GROptions=[{GRNumber:i.GRNumber.GRNumber,_id:i.GRNumber._id}],i.GRNumber=i.GRNumber._id,this.collection=this.GIDetailsArray.length,i.GIStatus=this.statusArr[this.action],this.form.patchValue(i),this.f.GRNumber.disable(),"edit"!=this.action&&this.form.disable(),"reject"==this.action&&(this.form.disable(),this.form.controls.rejectionRemarks.enable()))})})}setDiffQty(s,i){this.GIDetailsArray[i+=(this.page-1)*this.pageSize].diffQty=+s.receiptQty-+s.GIQty,this.buttonCondition=this.GIDetailsArray.every(o=>0==+o.diffQty)}openAlertMessageModal(){if(this.itemCodes.length>0){const s=this.modalService.open(b.HF,{centered:!0,size:"md",backdrop:"static",keyboard:!1});s.componentInstance.action=this.action,s.componentInstance.alertMessage=`Dear Store Incharge Material Stock is Zero for Item Code No: ${this.itemCodes}`,s.componentInstance.itemCodes=this.itemCodes,s.result.then(i=>{["create","edit"].includes(this.action)&&(this.itemCodes=i)},i=>{})}}eventHeader(s){switch(s.key){case"SEARCH":this.search=s.value;break;case"EXCEL":default:break;case"PAGE":this.page=s.value}}deptValue(s){this.f.department.setValue(s?.department)}onSort({column:s,direction:i}){this.headers.forEach(o=>{o.sortable!==s&&(o.direction="")}),this.GIDetailsArray=""===i||""===s?this.GIDetailsArray:[...this.GIDetailsArray].sort((o,l)=>{let a="string"==typeof o[s]?o[s].toLowerCase():o[s],y="string"==typeof l[s]?l[s].toLowerCase():l[s];const I=a<y?-1:a>y?1:0;return"asc"===i?I:-I})}static#t=this.\u0275fac=function(i){return new(i||h)(t.Y36(R.vM),t.Y36(d.F0),t.Y36(d.gz),t.Y36(A.V),t.Y36(A.kl),t.Y36(Z.RJ),t.Y36(N.FF),t.Y36(A.tI),t.Y36(n.Ye))};static#e=this.\u0275cmp=t.Xpm({type:h,selectors:[["app-gr-acknowledgement-form"]],viewQuery:function(i,o){if(1&i&&t.Gf(m.j,5),2&i){let l;t.iGM(l=t.CRH())&&(o.headers=l)}},decls:73,vars:21,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col"],["for","",1,"form-label"],[1,"text-danger"],["bindLabel","GRNumber","bindValue","_id","formControlName","GRNumber",3,"items","clearable","change"],["type","date","formControlName","GRDate","readonly","",1,"form-control"],["type","date","formControlName","GIDate",1,"form-control"],["type","text","formControlName","deliveryLocation","readonly","",1,"form-control"],["type","text","formControlName","department","readonly","",1,"form-control"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","25.5rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","GRLineNumber",3,"sort"],["sortable","itemCode",3,"sort"],["sortable","itemName",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","conversionOfUnits",3,"sort"],["sortable","primaryUnit",3,"sort"],["sortable","closedIRQty",3,"sort"],["sortable","GRQty",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-4"],[1,"d-flex","align-items-center"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["type","text","formControlName","remarks",1,"form-control"],[1,"col-md-auto","ms-auto"],["class","text-end",4,"ngIf"],["class","col-md-auto ms-auto",4,"ngIf"],[1,"text-start"],["itemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["itemDescription",""],[1,"d-flex","justify-content-center"],[4,"ngIf"],["class","form-control form-control-sm w-25","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],["type","number",1,"form-control","form-control-sm","w-25",3,"ngModel","ngModelOptions","input","ngModelChange"],[1,"text-end"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Goods Receipt Acknowledgement "),t.qZA()()(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"Goods Request No."),t.TgZ(11,"span",9),t._uU(12,"*"),t.qZA()(),t.TgZ(13,"ng-select",10),t.NdJ("change",function(){return o.getGoodRequisitionById()})("change",function(a){return o.deptValue(a)}),t.qZA()(),t.TgZ(14,"div",7)(15,"label",8),t._uU(16,"Goods Request Date"),t.qZA(),t._UZ(17,"input",11),t.qZA(),t.TgZ(18,"div",7)(19,"label",8),t._uU(20,"Goods Issue Date"),t.qZA(),t._UZ(21,"input",12),t.qZA(),t.TgZ(22,"div",7)(23,"label",8),t._uU(24,"Location (Store)"),t.qZA(),t._UZ(25,"input",13),t.qZA(),t.TgZ(26,"div",7)(27,"label",8),t._uU(28,"Department (GR by)"),t.qZA(),t._UZ(29,"input",14),t.qZA()(),t._UZ(30,"hr",15),t.TgZ(31,"app-setting-header",16),t.NdJ("dataChange",function(a){return o.eventHeader(a)}),t.qZA(),t.TgZ(32,"div",17)(33,"table",18)(34,"thead",19)(35,"tr",20)(36,"th",21),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(37,"MRN No."),t.qZA(),t.TgZ(38,"th",22),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(39,"MRN Date"),t.qZA(),t.TgZ(40,"th",23),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(41,"Item Code"),t.qZA(),t.TgZ(42,"th",24),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(43,"Item Name"),t.qZA(),t.TgZ(44,"th",25),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(45," Item Description "),t.qZA(),t.TgZ(46,"th",26),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(47,"UoM"),t.qZA(),t.TgZ(48,"th",27),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(49,"GR Qty"),t.qZA(),t.TgZ(50,"th",28),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(51,"Issue Qty."),t.qZA(),t.TgZ(52,"th",29),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(53,"Receipt Qty."),t.qZA(),t.TgZ(54,"th",29),t.NdJ("sort",function(a){return o.onSort(a)}),t._uU(55,"Diff. Qty."),t.qZA()()(),t.TgZ(56,"tbody"),t.YNc(57,O,29,26,"tr",30),t.ALo(58,"slice"),t.ALo(59,"searchFi1ter"),t.qZA()()(),t.TgZ(60,"div",6)(61,"div",31)(62,"div",6)(63,"div")(64,"div",32)(65,"div",33)(66,"button",34),t._uU(67,"Remarks"),t.qZA()(),t._UZ(68,"input",35),t.qZA()()()(),t.TgZ(69,"div",36),t.YNc(70,q,3,0,"div",37),t.YNc(71,B,3,0,"div",37),t.YNc(72,Q,3,0,"div",38),t.qZA()()()()()),2&i&&(t.Q6J("formGroup",o.form),t.xp6(13),t.Q6J("items",o.GROptions)("clearable",!1),t.xp6(18),t.Q6J("data",t.l5B(16,x,o.page,o.pageSize,o.collection,o.search)),t.xp6(26),t.Q6J("ngForOf",t.Dn7(58,9,t.xi3(59,13,o.GIDetailsArray,o.search),(o.page-1)*o.pageSize,(o.page-1)*o.pageSize+o.pageSize))("ngForTrackBy",o.trackByFn),t.xp6(13),t.Q6J("ngIf",o.buttonCondition&&"view"!=o.action),t.xp6(1),t.Q6J("ngIf",!o.buttonCondition&&"view"!=o.action),t.xp6(1),t.Q6J("ngIf","view"==o.action))},dependencies:[n.sg,n.O5,f.P,N._L,e.Fj,e.wV,e.JJ,e.JL,e.sg,e.u,e.On,C.w9,m.j,n.OU,n.uU,w.G,S.S],encapsulation:2})}return h})();var J=u(56208);const z=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:r},{path:"form",component:Y,resolve:{accessScreen:u(65876).x}}];let W=(()=>{class h{static#t=this.\u0275fac=function(i){return new(i||h)};static#e=this.\u0275mod=t.oAB({type:h});static#r=this.\u0275inj=t.cJS({imports:[n.ez,J.m,d.Bz.forChild(z)]})}return h})()},73374:(P,G,u)=>{u.d(G,{IX:()=>v,SZ:()=>_,Aj:()=>t,vM:()=>A,zP:()=>R,Ee:()=>f});var n=u(37398),d=u(65879),m=u(98977);let v=(()=>{class p{constructor(r){this.http=r,this.routes={createPath:"/stores/FGIN/create",getAllPath:"/stores/FGIN/getAll",getAllReportPath:"/stores/FGIN/getAllReports",getAllMasterDataPath:"/stores/FGIN/getAllMasterData",getAllFGINMasterDataPath:"/stores/FGIN/getAllFGINMasterData",getAllFGINSummaryReportsPath:"/stores/FGIN/getAllFGINSummaryReports",getAllFGINLocationWiseReportsPath:"/stores/FGIN/getAllFGINLocationWiseReports",getAllFGINAllLocationReportsPath:"/stores/FGIN/getAllFGINAllLocationReports",getAllFGINByProductCategoryPath:"/stores/FGIN/getAllFGINByProductCategory",bulkCreatePath:"/stores/FGIN/bulkCreate",updatePath:e=>`/stores/FGIN/update/${e}`,getByIdPath:e=>`/stores/FGIN/getById/${e}`,deletePath:e=>`/stores/FGIN/delete/${e}`,getAllFGINValueReportsPath:"/stores/FGIN/getAllFGINValueFinanceReports"}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}getAllFGINMasterData(r){return this.http.get(this.routes.getAllFGINMasterDataPath,r).pipe((0,n.U)(e=>e))}getAllFGINSummaryReports(r){return this.http.get(this.routes.getAllFGINSummaryReportsPath,r).pipe((0,n.U)(e=>e))}getAllFGINLocationWiseReports(r){return this.http.get(this.routes.getAllFGINLocationWiseReportsPath,r).pipe((0,n.U)(e=>e))}getAllFGINByProductCategory(r){return this.http.get(this.routes.getAllFGINByProductCategoryPath,r).pipe((0,n.U)(e=>e))}getAllFGINAllLocationReports(r){return this.http.get(this.routes.getAllFGINAllLocationReportsPath,r).pipe((0,n.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}bulkCreate(r){return this.http.post(this.routes.bulkCreatePath,r).pipe((0,n.U)(e=>e))}getAllFGINValueFinanceReports(r){return this.http.get(this.routes.getAllFGINValueReportsPath,r).pipe((0,n.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||p)(d.LFG(m.sM))};static#e=this.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),t=(()=>{class p{constructor(r){this.http=r,this.routes={createPath:"/stores/gin/create",getAllPath:"/stores/gin/getAll",getAllMasterDataPath:"/stores/gin/getAllMasterData",getAllReportsPath:"/stores/gin/getAllReports",getReorderLevelReportsPath:"/stores/inventory/getReorderLevelReports",getStockAgingReportsPath:"/stores/inventory/getStockAgingReports",getAllInventoryLocationWiseReportsPath:"/stores/inventory/getAllInventoryLocationWiseReports",updatePath:e=>`/stores/gin/update/${e}`,getByIdPath:e=>`/stores/gin/getById/${e}`,deletePath:e=>`/stores/gin/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getReorderLevelReports(r){return this.http.get(this.routes.getReorderLevelReportsPath,r).pipe((0,n.U)(e=>e))}getStockAgingReports(r){return this.http.get(this.routes.getStockAgingReportsPath,r).pipe((0,n.U)(e=>e))}getAllInventoryLocationWiseReports(r){return this.http.get(this.routes.getAllInventoryLocationWiseReportsPath,r).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||p)(d.LFG(m.sM))};static#e=this.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),A=(()=>{class p{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsIssue/create",getAllPath:"/stores/goodsIssue/getAll",getAllReportsPath:"/stores/goodsIssue/getAllReports",getAllMasterDataPath:"/stores/goodsIssue/getAllMasterData",updateOnResolveDiscrepancyPath:e=>`/stores/goodsIssue/updateOnResolveDiscrepancy/${e}`,updatePath:e=>`/stores/goodsIssue/update/${e}`,getByIdPath:e=>`/stores/goodsIssue/getById/${e}`,getGoodRequisitionByIdPath:e=>`/stores/goodsIssue/getGoodRequisitionById/${e}`,deletePath:e=>`/stores/goodsIssue/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}updateOnResolveDiscrepancy(r,e){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),e).pipe((0,n.U)(c=>c))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}getGoodRequisitionById(r){return this.http.get(this.routes.getGoodRequisitionByIdPath(r)).pipe((0,n.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||p)(d.LFG(m.sM))};static#e=this.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),R=(()=>{class p{constructor(r){this.http=r,this.routes={createPath:"/stores/grn/create",getAllPath:"/stores/grn/getAll",getAllGRNLocationWiseReportsPath:"/stores/grn/getAllGRNLocationWiseReports",getAllGRNForSupplementaryPOPath:"/stores/grn/getAllGRNForSupplementaryPO",getAllReportsPath:"/stores/grn/getAllReports",getAllSupplierWiseReportsPath:"/stores/grn/getAllSupplierWiseReports",getAllGRNReportsPath:"/stores/grn/getAllGRNReports",getAllItemWiseReportsPath:"/stores/grn/getAllItemWiseReports",getGRNDiscrepancyReportsPath:"/stores/grn/getGRNDiscrepancyReports",getAllMasterDataPath:"/stores/grn/getAllMasterData",excelDownloadReportsPath:"/stores/grn/excelDownloadForReports",updatePath:e=>`/stores/grn/update/${e}`,updateOnCancelPath:e=>`/stores/grn/updateOnCancelGRN/${e}`,getByIdPath:e=>`/stores/grn/getById/${e}`,getPOBySupplierIdPath:e=>`/stores/grn/getPOBySupplierId/${e}`,getGRNDetailsByPOIdPath:e=>`/stores/grn/getGRNDetailsByPOId/${e}`,getGRNDetailsByIdPath:e=>`/stores/grn/getGRNDetailsById/${e}`,deletePath:e=>`/stores/grn/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getAllSupplierWiseReports(r){return this.http.get(this.routes.getAllSupplierWiseReportsPath,r).pipe((0,n.U)(e=>e))}getAllGRNReports(r){return this.http.get(this.routes.getAllGRNReportsPath,r).pipe((0,n.U)(e=>e))}getAllItemWiseReports(r){return this.http.get(this.routes.getAllItemWiseReportsPath,r).pipe((0,n.U)(e=>e))}getGRNDiscrepancyReports(r){return this.http.get(this.routes.getGRNDiscrepancyReportsPath,r).pipe((0,n.U)(e=>e))}excelDownloadReports(r){return this.http.getFile(this.routes.excelDownloadReportsPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}updateOnCancel(r,e){return this.http.put(this.routes.updateOnCancelPath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}getPOBySupplierId(r){return this.http.get(this.routes.getPOBySupplierIdPath(r)).pipe((0,n.U)(e=>e))}getGRNDetailsByPOId(r){return this.http.get(this.routes.getGRNDetailsByPOIdPath(r)).pipe((0,n.U)(e=>e))}getGRNDetailsById(r){return this.http.get(this.routes.getGRNDetailsByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}getAllGRNForSupplementaryPO(r){return this.http.get(this.routes.getAllGRNForSupplementaryPOPath,r).pipe((0,n.U)(e=>e))}getAllGRNLocationWiseReports(r){return this.http.get(this.routes.getAllGRNLocationWiseReportsPath,r).pipe((0,n.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||p)(d.LFG(m.sM))};static#e=this.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),f=(()=>{class p{constructor(r){this.http=r,this.routes={createPath:"/stores/inventory/create",getAllPath:"/stores/inventory/getAll",uploadInventoryFilePath:"/stores/inventory/uploadInventoryFile",getAllReportPath:"/stores/inventory/getAllReports",getAllMasterDataPath:"/stores/inventory/getAllMasterData",getAllFilterDataPath:"/stores/inventory/getAllFilterData",updatePath:"/stores/inventory/update",getAllLocationSupplierItemWiseReportsPath:"/stores/inventory/getAllLocationSupplierItemWiseReports",getByIdPath:e=>`/stores/inventory/getById/${e}`,deletePath:e=>`/stores/inventory/delete/${e}`}}uploadInventoryFile(r){return this.http.post(this.routes.uploadInventoryFilePath,r).pipe((0,n.U)(e=>e))}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllLocationSupplierItemWiseReports(r){return this.http.get(this.routes.getAllLocationSupplierItemWiseReportsPath,r).pipe((0,n.U)(e=>e))}getAllReport(r){return this.http.get(this.routes.getAllReportPath,r).pipe((0,n.U)(e=>e))}getAllMasterFilterData(r){return this.http.get(this.routes.getAllFilterDataPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}update(r){return this.http.put(this.routes.updatePath,r).pipe((0,n.U)(e=>e))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||p)(d.LFG(m.sM))};static#e=this.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})(),_=(()=>{class p{constructor(r){this.http=r,this.routes={createPath:"/stores/goodsTransferResponse/create",getAllPath:"/stores/goodsTransferResponse/getAll",getAllReportsPath:"/stores/goodsTransferResponse/getAllReports",getAllMasterDataPath:"/stores/goodsTransferResponse/getAllMasterData",updateOnResolveDiscrepancyPath:e=>`/stores/goodsTransferResponse/updateOnResolveDiscrepancy/${e}`,updatePath:e=>`/stores/goodsTransferResponse/update/${e}`,getByIdPath:e=>`/stores/goodsTransferResponse/getById/${e}`,getItemByGTRequestIdPath:e=>`/stores/goodsTransferResponse/getItemByGTRequestId/${e}`,deletePath:e=>`/stores/goodsTransferResponse/delete/${e}`}}create(r){return this.http.post(this.routes.createPath,r).pipe((0,n.U)(e=>e))}getAll(r){return this.http.get(this.routes.getAllPath,r).pipe((0,n.U)(e=>e))}getAllReports(r){return this.http.get(this.routes.getAllReportsPath,r).pipe((0,n.U)(e=>e))}getAllMasterData(r){return this.http.get(this.routes.getAllMasterDataPath,r).pipe((0,n.U)(e=>e))}updateOnResolveDiscrepancy(r,e){return this.http.put(this.routes.updateOnResolveDiscrepancyPath(r),e).pipe((0,n.U)(c=>c))}update(r,e){return this.http.put(this.routes.updatePath(r),e).pipe((0,n.U)(c=>c))}getById(r){return this.http.get(this.routes.getByIdPath(r)).pipe((0,n.U)(e=>e))}delete(r){return this.http.delete(this.routes.deletePath(r)).pipe((0,n.U)(e=>e))}getItemByGTRequestId(r){return this.http.get(this.routes.getItemByGTRequestIdPath(r)).pipe((0,n.U)(e=>e))}static#t=this.\u0275fac=function(e){return new(e||p)(d.LFG(m.sM))};static#e=this.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);