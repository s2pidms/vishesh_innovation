"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3158],{13158:(ut,v,l)=>{l.r(v),l.d(v,{BomOfChildItemModule:()=>mt});var c=l(96814),_=l(1076),g=l(43818),y=l(25116),I=l(65129),t=l(65879),h=l(98977),b=l(99007),T=l(88059),f=l(37285),U=l(53421);function x(r,m){1&r&&t._UZ(0,"div",35)}function M(r,m){1&r&&t._UZ(0,"div",36)}function B(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",21,22)(7,"span",23),t._uU(8),t.qZA()(),t.TgZ(9,"td",21,24)(11,"span",23),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"span",25),t.YNc(21,x,1,0,"div",26),t.YNc(22,M,1,0,"div",27),t.qZA()(),t.TgZ(23,"td")(24,"div",28),t._UZ(25,"button",29),t.TgZ(26,"div",30)(27,"a",31),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"view"))}),t._UZ(28,"i",32),t._uU(29," View "),t.qZA(),t.TgZ(30,"a",31),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"edit"))}),t._UZ(31,"i",33),t._uU(32," Edit "),t.qZA(),t.TgZ(33,"a",31),t.NdJ("click",function(){const n=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.navigateTo("../form",n,"copy"))}),t._UZ(34,"i",34),t._uU(35," Copy "),t.qZA()()()()()}if(2&r){const e=m.$implicit,o=t.MAs(6),i=t.MAs(10),n=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.BOMNo),t.xp6(2),t.Oqu(null==e?null:e.childItemCode),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("positionTarget",o)("ngbTooltip",e.childItemName),t.xp6(1),t.hij(" ",e.childItemName?e.childItemName:null," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("positionTarget",i)("ngbTooltip",e.childItemDescription),t.xp6(1),t.hij(" ",e.childItemDescription?e.childItemDescription:null," "),t.xp6(2),t.Oqu(null==e?null:e.UOM),t.xp6(2),t.Oqu(null==e?null:e.partCount),t.xp6(2),t.Oqu(null==e?null:e.totalMaterialCost),t.xp6(3),t.Q6J("ngIf","Active"==e.status),t.xp6(1),t.Q6J("ngIf","Inactive"==e.status),t.xp6(5),t.Q6J("accessType",n.rolePermissionActions.viewAction),t.xp6(3),t.Q6J("accessType",n.rolePermissionActions.editAction),t.xp6(3),t.Q6J("accessType",n.rolePermissionActions.editAction)}}const S=function(r,m,e,o){return{page:r,pageSize:m,collection:e,search:o,type:"list"}};let N=(()=>{class r{constructor(e,o,i,n,s,u){this.exportExcelService=e,this.bomChildPartService=o,this.activatedRoute=i,this.router=n,this.spinner=s,this.exportToPDFService=u,this.page=1,this.pageSize=8,this.collection=0,this.column="BOMNo",this.direction=1,this.search="",this.tableData=[],this.rolePermissionActions=y.a1}ngOnInit(){this.page=Number(this.activatedRoute.snapshot.queryParamMap.get("page")??1),this.getAll()}navigateTo(e,o,i){this.router.navigate([e],{relativeTo:this.activatedRoute,queryParams:{id:o?._id,action:i}})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value,this.getAll();break;case"PDF":this.getAll(!0,"PDF");break;case"EXCEL":this.getAll(!0,"EXCEL");break;case"PAGE":this.page=e.value,this.getAll()}}trackByFn(e,o){return o?._id}getAll(e=!1,o=""){this.spinner.show();let i={page:this.page,pageSize:this.pageSize,search:this.search,column:this.column,direction:this.direction,excel:e};this.subscription&&this.subscription.unsubscribe(),this.subscription=this.bomChildPartService.getAll(i).subscribe(n=>{"EXCEL"==o?this.excelDownload(n.rows):"PDF"==o?this.pdfDownload(n.rows):(this.tableData=n.rows,this.collection=n.count),this.spinner.hide()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}excelDownload(e){this.exportExcelService.exportExcel((0,I.W0)(e))}pdfDownload(e){let o=(0,I.o7)(e);this.exportToPDFService.generatePdf(o.tableData,o.title)}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.column=e,this.direction="asc"==o?1:-1,this.getAll()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(h.Ol),t.Y36(b.WH),t.Y36(_.gz),t.Y36(_.F0),t.Y36(h.V),t.Y36(h.$L))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-bom-child-item-list"]],viewQuery:function(o,i){if(1&o&&t.Gf(g.j,5),2&o){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:34,vars:9,consts:[[1,"listCard","card"],[1,"table-header"],[1,"heading"],["appAccessControl","",1,"text-center",3,"accessType"],["type","button",1,"btn","btn-primary","btn-add",3,"click"],["aria-hidden","true",1,"fa","fa-plus-square","fa-lg","me-2"],[1,"line-border"],[1,"table-responsive"],[3,"data","dataChange"],[1,"table","table-bordered"],[1,"bg-primary"],[1,"text-white"],["sortable","BOMNo",3,"sort"],["sortable","childItemCode",3,"sort"],["sortable","childItemName",1,"text-start",3,"sort"],["sortable","childItemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","partCount",3,"sort"],["sortable","totalMaterialCost",3,"sort"],["sortable","status",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-start"],["childItemName",""],[1,"pointer",3,"positionTarget","ngbTooltip"],["childItemDescription",""],[1,"d-flex","justify-content-center"],["class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"dropdown"],[1,"dropbtn"],[1,"dropdown-content"],["appAccessControl","","href","javascript:void(0)",3,"accessType","click"],["aria-hidden","true",1,"fa","fa-eye","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-pencil-square-o","fa-lg","me-2","text-primary"],["aria-hidden","true",1,"fa","fa-clone","fa-lg","me-2","text-primary"],[1,"statusActive"],[1,"statusInActive"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"BoM Summary of Child Items"),t.qZA()(),t.TgZ(4,"div",3)(5,"button",4),t.NdJ("click",function(){return i.navigateTo("../form",null,"create")}),t._UZ(6,"i",5),t._uU(7," Create BoM "),t.qZA()(),t._UZ(8,"hr",6),t.TgZ(9,"div",7)(10,"app-setting-header",8),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA(),t.TgZ(11,"table",9)(12,"thead",10)(13,"tr",11)(14,"th",12),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(15,"BoM No."),t.qZA(),t.TgZ(16,"th",13),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(17,"Item Code"),t.qZA(),t.TgZ(18,"th",14),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(19,"Item Name"),t.qZA(),t.TgZ(20,"th",15),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(21,"Item Description"),t.qZA(),t.TgZ(22,"th",16),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(23,"UoM"),t.qZA(),t.TgZ(24,"th",17),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(25,"Part Count"),t.qZA(),t.TgZ(26,"th",18),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(27,"Material Cost"),t.qZA(),t.TgZ(28,"th",19),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,B,36,20,"tr",20),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("accessType",i.rolePermissionActions.createAction),t.xp6(6),t.Q6J("data",t.l5B(4,S,i.page,i.pageSize,i.collection,i.search)),t.xp6(23),t.Q6J("ngForOf",i.tableData)("ngForTrackBy",i.trackByFn))},dependencies:[c.sg,c.O5,T.P,f._L,g.j,U.J],encapsulation:2})}return r})();var a=l(60095),O=l(21631),P=l(22096),w=l(45594),q=l(66177),d=l(13107);let D=[{header:"Item Code<",key:"itemCode",...d.t},{header:"Item Name",key:"itemName",...d.t},{header:"Item Description",key:"itemDescription",...d.t},{header:"UoM",key:"UOM",...d.t},{header:"Qty/SKU Unit",key:"qtyPerSKUUnit",...d.t},{header:"Waste %",key:"wastePercentage",...d.t},{header:"Qty/Part Count",key:"partCount",...d.t},{header:"Unit Cost",key:"unitCost",...d.t},{header:"Item Cost",key:"itemCost",...d.t}];var k=l(16857),Y=l(50363),E=l(95346),Q=l(83344),L=l(59103);function K(r,m){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.qtyPerSKUUnit)}}const A=function(){return{standalone:!0}};function j(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"input",64),t.NdJ("input",function(){t.CHM(e);const i=t.oxw().$implicit,n=t.oxw();return t.KtG(n.setItemCostDetails(i))})("ngModelChange",function(i){t.CHM(e);const n=t.oxw().$implicit;return t.KtG(n.qtyPerSKUUnit=i)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.qtyPerSKUUnit)("ngModelOptions",t.DdM(2,A))}}function H(r,m){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.wastePercentage)}}function R(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"input",64),t.NdJ("input",function(){t.CHM(e);const i=t.oxw().$implicit,n=t.oxw();return t.KtG(n.setItemCostDetails(i))})("ngModelChange",function(i){t.CHM(e);const n=t.oxw().$implicit;return t.KtG(n.wastePercentage=i)}),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("ngModel",e.wastePercentage)("ngModelOptions",t.DdM(2,A))}}const G=function(){return["SKU","ink"]},z=function(r,m,e){return{"text-black":r,"text-primary":m,blueColor:e}},p=function(){return["view"]};function V(r,m){if(1&r&&(t.TgZ(0,"tr")(1,"td",57),t._uU(2),t.qZA(),t.TgZ(3,"td",58,59)(5,"span",60),t._uU(6),t.qZA()(),t.TgZ(7,"td",58,61)(9,"span",60),t._uU(10),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",62),t.YNc(15,K,2,1,"span",56),t.YNc(16,j,1,3,"input",63),t.qZA()(),t.TgZ(17,"td")(18,"div",62),t.YNc(19,H,2,1,"span",56),t.YNc(20,R,1,3,"input",63),t.qZA()(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"number"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.ALo(28,"number"),t.qZA()()),2&r){const e=m.$implicit,o=t.MAs(4),i=t.MAs(8),n=t.oxw();t.xp6(1),t.Q6J("ngClass",t.kEZ(27,z,"items"==e.type,"childItem"==e.type,t.DdM(26,G).includes(e.type))),t.xp6(1),t.hij(" ",e.itemCode," "),t.xp6(1),t.Udp("width",o.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemName)("positionTarget",o),t.xp6(1),t.hij(" ",e.itemName," "),t.xp6(1),t.Udp("width",i.clientWidth),t.xp6(2),t.Q6J("ngbTooltip",e.itemDescription)("positionTarget",i),t.xp6(1),t.hij(" ",e.itemDescription," "),t.xp6(2),t.Oqu(e.UOM),t.xp6(3),t.Q6J("ngIf",t.DdM(31,p).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(32,p).includes(n.action)),t.xp6(3),t.Q6J("ngIf",t.DdM(33,p).includes(n.action)),t.xp6(1),t.Q6J("ngIf",!t.DdM(34,p).includes(n.action)),t.xp6(2),t.Oqu(t.xi3(23,20,e.partCount,"1.5-5")),t.xp6(3),t.Oqu(e.unitCost),t.xp6(2),t.Oqu(t.xi3(28,23,e.itemCost,"1.2-2"))}}function $(r,m){1&r&&t._UZ(0,"div",65)}function W(r,m){1&r&&t._UZ(0,"div",66)}function X(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"div",67)(1,"button",68),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.reset())}),t._uU(2,"Reset"),t.qZA(),t.TgZ(3,"button",69),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.ESCPreview())}),t._uU(4," Esc "),t.qZA(),t.TgZ(5,"button",70),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.preview())}),t._uU(6," Preview "),t.qZA(),t.TgZ(7,"button",71),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submit())}),t._uU(8," Save "),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(3),t.Q6J("disabled",!e.isESCPreview),t.xp6(2),t.Q6J("disabled",e.isConditionPreview),t.xp6(2),t.Q6J("disabled",!e.isPreview)}}function tt(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"div")(1,"button",72),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.navigateTo())}),t._uU(2,"Back"),t.qZA()()}}function et(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"div")(1,"button",72),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.backClicked())}),t._uU(2,"Back"),t.qZA()()}}const it=function(r,m,e,o){return{page:r,pageSize:m,collection:e,search:o}},ot=function(){return["create","edit","copy"]},nt=function(){return["viewBOM"]};let st=(()=>{class r{constructor(e,o,i,n,s,u,C,ct,dt){this.bomChildPartService=e,this.activatedRoute=o,this.spinner=i,this.toastService=n,this.validationService=s,this.utilityService=u,this.location=C,this.modalService=ct,this.exportExcelService=dt,this.isPreview=!1,this.isESCPreview=!1,this.isConditionPreview=!1,this.page=1,this.pageSize=5,this.collection=0,this.search="",this.column="createdAt",this.direction=-1,this.submitted=!1,this.action="create",this.ESCPreviewArr=[],this.documentDetails=[],this.oldDocumentDetails=[],this.documentDetailsObj={documentNo:null,documentDate:this.utilityService.getTodayDate("YYYY-MM-DD"),revisionNo:null,revisionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),docCreatedBy:null,docApprovedBy:null,QMSDocumentNo:null},this.masterData={autoIncrementNo:"",childItemsOptions:[],mergedItems:[]},this.form=new a.nJ({_id:new a.p4(null),BOMNo:new a.p4(null,[a.kI.required]),childItem:new a.p4(null),childItemCode:new a.p4(null,[a.kI.required]),childItemName:new a.p4(null,[a.kI.required]),childItemDescription:new a.p4(null),UOM:new a.p4(null),partCount:new a.p4(1,[a.kI.required]),totalMaterialCost:new a.p4(null),status:new a.p4("Active"),BOMOfChildPartDetails:new a.p4([]),documentDetails:new a.p4([])})}ngOnInit(){this.getInitialData()}trackByFn(e,o){return o?._id}reset(){this.form.reset(),this.documentDetails=[],this.documentDetailsObj={documentNo:null,documentDate:this.utilityService.getTodayDate("YYYY-MM-DD"),revisionNo:null,revisionDate:this.utilityService.getTodayDate("YYYY-MM-DD"),docCreatedBy:null,docApprovedBy:null,QMSDocumentNo:null},this.masterData.mergedItems=[],this.collection=this.masterData?.mergedItems.length,this.isPreview=!1,this.isESCPreview=!1,this.getInitialData()}submit(){if(this.submitted=!0,this.form.enable(),this.validationService.checkErrors(this.form,w.PM))return;let e=this.form.value;"copy"==this.action&&delete e._id,e.BOMOfChildPartDetails=this.masterData?.mergedItems.filter(o=>o.partCount>0),e.documentDetails=this.documentDetails,e._id?this.update(e):(delete e._id,this.create(e))}navigateTo(){this.location.back()}create(e){this.spinner.show(),this.bomChildPartService.create(e).subscribe(o=>{this.submitted=!1,this.spinner.hide(),this.toastService.success(o.message),this.location.back()})}update(e){this.spinner.show(),this.bomChildPartService.update(e._id,e).subscribe(o=>{this.spinner.hide(),this.submitted=!1,this.toastService.success(o.message),this.location.back()})}eventHeader(e){switch(e.key){case"SEARCH":this.search=e.value;break;case"EXCEL":this.exportExcelService.exportExcel((r=>({title:"BOM Of Child Part",csvData:this.masterData?.mergedItems,headers:D}))());break;case"PAGE":this.page=e.value}}getInitialData(){this.spinner.show(),this.bomChildPartService.getAllMasterData({}).subscribe(e=>{this.masterData=e,this.form.controls.BOMNo.setValue(this.masterData?.autoIncrementNo),this.form.controls.status.setValue("Active"),this.form.controls.partCount.setValue(1),this.masterData.mergedItems=this.masterData?.mergedItems,this.collection=this.masterData?.mergedItems.length,this.activatedRoute.queryParams.pipe((0,O.z)(o=>(this.action=o.action,this.utilityService.accessDenied(this.action),o.id?this.bomChildPartService.getById(o.id):(0,P.of)({})))).subscribe(o=>{if(this.spinner.hide(),0==Object.keys(o).length)return;o.BOMOfChildPartDetails=o.BOMOfChildPartDetails;let i=this.masterData?.mergedItems;this.masterData.mergedItems=o.BOMOfChildPartDetails;for(const n of o.BOMOfChildPartDetails)i=i.filter(s=>s.itemCode!=n.itemCode),this.ESCPreviewArr=[...o.BOMOfChildPartDetails,...i];o.documentDetails.length>0&&(this.documentDetailsObj=JSON.parse(JSON.stringify(o.documentDetails.slice(-1)[0])),this.documentDetailsObj.documentDate=this.utilityService.getFormatDate(this.documentDetailsObj.documentDate,"YYYY-MM-DD"),this.documentDetailsObj.revisionDate=this.utilityService.getFormatDate(this.documentDetailsObj.revisionDate,"YYYY-MM-DD"),this.documentDetails=[...o.documentDetails],this.oldDocumentDetails=[...this.documentDetails]),this.collection=this.masterData?.mergedItems.length,this.form.patchValue(o),"create"!=this.action&&(this.isESCPreview=!0,this.isConditionPreview=!0,this.isPreview=!0,this.form.disable(),"edit"==this.action&&(this.form.controls.status.enable(),this.form.controls.partCount.enable())),"copy"==this.action&&(this.form.controls.BOMNo.setValue(e.autoIncrementNo),this.form.enable(),delete o._id)})})}setPartCount(){let e=+this.form.controls.partCount.value;if(this.masterData.mergedItems.length>0){this.masterData.mergedItems=this.masterData?.mergedItems.map(i=>(i.inkCostPerKg=+i.inkCostPerKg||0,i.unitCost=+i.unitCost||0,i.partCount=+i.partCount||0,i.qtyPerSKUUnit=+i.qtyPerSKUUnit||0,i.wastePercentage=+i.wastePercentage||0,i.itemCost=+i.itemCost||0,i.partCount=(+i.qtyPerSKUUnit+ +i.qtyPerSKUUnit*+i.wastePercentage/100)*e,i.itemCost=+i.partCount*+i.unitCost,i));let o=this.masterData?.mergedItems.map(i=>i.itemCost).reduce((i,n)=>+i+ +n);this.form.controls.totalMaterialCost.setValue(+o.toFixed(2))}}setItemDetails(e){this.form.controls.childItem.setValue(e._id),this.bomChildPartService.checkBOMOfChildExistsById(e._id).subscribe(),this.form.controls.childItemDescription.setValue(e.itemDescription),this.form.controls.childItemName.setValue(e.itemName),this.form.controls.childItemCode.setValue(e.itemCode),this.form.controls.UOM.setValue(e.unitOfMeasurement)}setItemCostDetails(e){let o=this.form.controls.partCount.value,i=this.masterData.mergedItems.map(s=>s.itemCode).indexOf(e.itemCode);this.masterData.mergedItems[i].partCount=(+e.qtyPerSKUUnit+ +e.qtyPerSKUUnit*+e.wastePercentage/100)*+o,this.masterData.mergedItems[i].itemCost=+e.partCount*+e.unitCost;let n=this.masterData?.mergedItems.map(s=>s.itemCost).reduce((s,u)=>+s+ +u);this.form.controls.totalMaterialCost.setValue(+n.toFixed(2))}openBOMDocumentDetailsModal(){const e=this.modalService.open(q.Y,{centered:!0,size:"xl",backdrop:"static",keyboard:!1});e.componentInstance.action=this.action,e.componentInstance.documentDetailsObj=this.documentDetailsObj,e.componentInstance.oldDocumentDetails=this.oldDocumentDetails,e.componentInstance.BOMNo=this.form.controls.BOMNo.value,e.result.then(o=>{["create","edit","copy"].includes(this.action)&&o&&(this.documentDetails=o.documentDetails,this.documentDetailsObj=o.documentDetailsObj)},o=>{})}preview(){this.search="",this.ESCPreviewArr=this.masterData?.mergedItems,this.masterData.mergedItems=this.masterData?.mergedItems.filter(e=>e.partCount>0),this.masterData?.mergedItems.length>0?(this.isPreview=!0,this.isESCPreview=!0):(this.toastService.warning("At least One Row is Required"),this.isPreview=!1,this.isESCPreview=!0),this.collection=this.masterData?.mergedItems.length}ESCPreview(){this.search="",this.isPreview=!1,this.isConditionPreview=!1,this.masterData.mergedItems=this.ESCPreviewArr,this.collection=this.masterData?.mergedItems.length}onSort({column:e,direction:o}){this.headers.forEach(i=>{i.sortable!==e&&(i.direction="")}),this.masterData.mergedItems=""===o||""===e?this.masterData?.mergedItems:[...this.masterData?.mergedItems].sort((i,n)=>{let s="string"==typeof i[e]?i[e].toLowerCase():i[e],u="string"==typeof n[e]?n[e].toLowerCase():n[e];const C=s<u?-1:s>u?1:0;return"asc"===o?C:-C})}backClicked(){this.location.back()}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(b.WH),t.Y36(_.gz),t.Y36(h.V),t.Y36(h.kl),t.Y36(k.R),t.Y36(h.tI),t.Y36(c.Ye),t.Y36(f.FF),t.Y36(h.Ol))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-bom-child-item-form"]],viewQuery:function(o,i){if(1&o&&t.Gf(g.j,5),2&o){let n;t.iGM(n=t.CRH())&&(i.headers=n)}},decls:107,vars:40,consts:[[1,"formCard","card",3,"formGroup"],[1,"container"],[1,"row","form-header"],[1,"col","heading"],[1,""],[1,"form-body"],[1,"row"],[1,"col-2"],[1,"form-label","mb-2"],[1,"text-danger"],[1,"d-flex","align-items-center"],["type","text","formControlName","BOMNo","readonly","",1,"form-control","border-end-0"],[1,"input-group-text","statusSpanHeight"],[1,"bomDocInfo","pointer",3,"click"],[1,"col-2","px-0"],["bindLabel","itemCode","bindValue","itemCode","formControlName","childItemCode",3,"items","clearable","change"],[1,"col-3"],["bindLabel","itemName","bindValue","itemName","formControlName","childItemName",3,"items","clearable","change"],["type","text","formControlName","childItemDescription","readonly","",1,"form-control"],[1,"col-3","ps-4"],[1,"col-5","pe-4"],["type","text","readonly","",1,"form-control",3,"value"],[1,"col-7","ps-4"],["type","text","formControlName","partCount","min","0","oninput","this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : 1",1,"form-control",3,"input"],[1,"row","line-border"],[3,"data","dataChange"],[1,"table-responsive",2,"min-height","20rem"],[1,"table","table-bordered","table-sticky","mt-1"],[1,"bg-primary"],[1,"text-white"],["sortable","itemCode",3,"sort"],["sortable","itemName",1,"text-start",3,"sort"],["sortable","itemDescription",1,"text-start",3,"sort"],["sortable","UOM",3,"sort"],["sortable","qtyPerSKUUnit",3,"sort"],["sortable","wastePercentage",3,"sort"],["sortable","partCount",3,"sort"],["sortable","unitCost",3,"sort"],["sortable","itemCost",3,"sort"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-4"],[1,"col-form-label","text-nowrap"],[1,"fa","fa-caret-right","fs-4","mx-1"],[1,"d-flex"],[1,"input-group-text","text-secondary","combine-INR"],[1,"vr","ms-3"],["type","number","readonly","","formControlName","totalMaterialCost",1,"form-control","border-start-0"],[1,"col-md-auto","text-nowrap"],["type","button",1,"btn","btn-primary","px-3"],["formControlName","status",1,"form-select","statusSelectBorder"],["selected","","disabled","",3,"value"],[3,"value"],["class","statusActive","class","statusActive",4,"ngIf"],["class","statusInActive",4,"ngIf"],[1,"col-md-auto","ms-auto"],["class","d-grid gap-2 d-md-block",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],[1,"text-start"],["itemName",""],[1,"pointer",3,"ngbTooltip","positionTarget"],["itemDescription",""],[1,"d-flex","justify-content-center"],["class","form-control text-center form-control-size-lg","type","number",3,"ngModel","ngModelOptions","input","ngModelChange",4,"ngIf"],["type","number",1,"form-control","text-center","form-control-size-lg",3,"ngModel","ngModelOptions","input","ngModelChange"],[1,"statusActive"],[1,"statusInActive"],[1,"d-grid","gap-2","d-md-block"],["type","button",1,"btn","btn-primary","px-5","me-3",3,"click"],["type","button",1,"btn","btn-primary","px-4","me-1",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-4","me-3",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"disabled","click"],["type","button",1,"btn","btn-primary","px-5",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"Form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5),t.ALo(6,"titlecase"),t.qZA()()(),t.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),t._uU(11," BoM No. "),t.TgZ(12,"span",9),t._uU(13,"*"),t.qZA()(),t.TgZ(14,"div",10),t._UZ(15,"input",11),t.TgZ(16,"span",12)(17,"div",13),t.NdJ("click",function(){return i.openBOMDocumentDetailsModal()}),t.qZA()()()(),t.TgZ(18,"div",14)(19,"label",8),t._uU(20," Child Item Code "),t.TgZ(21,"span",9),t._uU(22,"*"),t.qZA()(),t.TgZ(23,"ng-select",15),t.NdJ("change",function(s){return i.setItemDetails(s)}),t.qZA()(),t.TgZ(24,"div",16)(25,"label",8),t._uU(26," Child Item Name "),t.TgZ(27,"span",9),t._uU(28,"*"),t.qZA()(),t.TgZ(29,"ng-select",17),t.NdJ("change",function(s){return i.setItemDetails(s)}),t.qZA()(),t.TgZ(30,"div",14)(31,"label",8),t._uU(32," Child Item Description"),t.qZA(),t._UZ(33,"input",18),t.qZA(),t.TgZ(34,"div",19)(35,"div",6)(36,"div",20)(37,"label",8),t._uU(38," UoM"),t.qZA(),t._UZ(39,"input",21),t.ALo(40,"UOMUnitsMaster"),t.qZA(),t.TgZ(41,"div",22)(42,"label",8),t._uU(43," Part Count "),t.TgZ(44,"span",9),t._uU(45,"*"),t.qZA()(),t.TgZ(46,"input",23),t.NdJ("input",function(){return i.setPartCount()}),t.qZA()()()()()(),t._UZ(47,"hr",24),t.TgZ(48,"app-setting-header",25),t.NdJ("dataChange",function(s){return i.eventHeader(s)}),t.qZA(),t.TgZ(49,"div",26)(50,"table",27)(51,"thead",28)(52,"tr",29)(53,"th",30),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(54,"Item Code"),t.qZA(),t.TgZ(55,"th",31),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(56,"Item Name"),t.qZA(),t.TgZ(57,"th",32),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(58,"Item Description"),t.qZA(),t.TgZ(59,"th",33),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(60,"UoM"),t.qZA(),t.TgZ(61,"th",34),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(62,"Qty/SKU Unit"),t.qZA(),t.TgZ(63,"th",35),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(64,"Waste %"),t.qZA(),t.TgZ(65,"th",36),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(66,"Qty/Part Count"),t.qZA(),t.TgZ(67,"th",37),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(68,"Unit Cost"),t.qZA(),t.TgZ(69,"th",38),t.NdJ("sort",function(s){return i.onSort(s)}),t._uU(70,"Item Cost"),t.qZA()()(),t.TgZ(71,"tbody"),t.YNc(72,V,29,35,"tr",39),t.ALo(73,"slice"),t.ALo(74,"searchFi1ter"),t.qZA()()(),t._UZ(75,"hr",24),t.TgZ(76,"div",6)(77,"div",40)(78,"div",10)(79,"div",41),t._uU(80," Total Material Cost "),t._UZ(81,"i",42),t.qZA(),t.TgZ(82,"div",43)(83,"span",44),t._uU(84),t.ALo(85,"companyCurrency"),t._UZ(86,"div",45),t.qZA(),t._UZ(87,"input",46),t.qZA()()(),t.TgZ(88,"div",16)(89,"div",10)(90,"div",47)(91,"button",48),t._uU(92,"Status"),t.qZA()(),t.TgZ(93,"select",49)(94,"option",50),t._uU(95,"Select Status"),t.qZA(),t.TgZ(96,"option",51),t._uU(97,"Active"),t.qZA(),t.TgZ(98,"option",51),t._uU(99,"Inactive"),t.qZA()(),t.TgZ(100,"span",12),t.YNc(101,$,1,0,"div",52),t.YNc(102,W,1,0,"div",53),t.qZA()()(),t.TgZ(103,"div",54),t.YNc(104,X,9,3,"div",55),t.YNc(105,tt,3,0,"div",56),t.YNc(106,et,3,0,"div",56),t.qZA()()()()),2&o&&(t.Q6J("formGroup",i.form),t.xp6(5),t.hij("BoM of Child Item (",t.lcZ(6,19,i.action),")"),t.xp6(18),t.Q6J("items",i.masterData.childItemsOptions)("clearable",!1),t.xp6(6),t.Q6J("items",i.masterData.childItemsOptions)("clearable",!1),t.xp6(10),t.s9C("value",t.lcZ(40,21,i.form.controls.UOM.value)),t.xp6(9),t.Q6J("data",t.l5B(32,it,i.page,i.pageSize,i.collection,i.search)),t.xp6(24),t.Q6J("ngForOf",t.Dn7(73,23,t.xi3(74,27,i.masterData.mergedItems,i.search),(i.page-1)*i.pageSize,(i.page-1)*i.pageSize+i.pageSize))("ngForTrackBy",i.trackByFn),t.xp6(12),t.hij(" ",t.lcZ(85,30,"INR")," "),t.xp6(10),t.Q6J("value","null"),t.xp6(2),t.Q6J("value","Active"),t.xp6(2),t.Q6J("value","Inactive"),t.xp6(3),t.Q6J("ngIf","Active"==i.form.value.status),t.xp6(1),t.Q6J("ngIf","Inactive"==i.form.value.status),t.xp6(2),t.Q6J("ngIf",t.DdM(37,ot).includes(i.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(38,p).includes(i.action)),t.xp6(1),t.Q6J("ngIf",t.DdM(39,nt).includes(i.action)))},dependencies:[c.mk,c.sg,c.O5,T.P,f._L,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.sg,a.u,a.On,Y.w9,g.j,c.OU,c.JJ,c.rS,E.G,Q.f,L.S],encapsulation:2})}return r})();var rt=l(56208);const lt=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:N},{path:"form",component:st,resolve:{accessScreen:l(65876).x}}];let mt=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[c.ez,_.Bz.forChild(lt),rt.m]})}return r})()}}]);